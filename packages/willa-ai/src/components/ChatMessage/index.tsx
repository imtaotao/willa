import type { ComponentPropsWithoutRef, ReactNode } from "react";
import classNames from "classnames";
import { Avatar } from "@willa-ui/content/components/Avatar";

export type ChatMessageRole =
  | "assistant"
  | "user"
  | "system"
  | "developer"
  | "tool";
export type ChatMessageAlign = "left" | "right" | "center";

export type ChatMessageProps = {
  role?: ChatMessageRole;
  align?: ChatMessageAlign;
  name?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showAvatar?: boolean;
  meta?: ReactNode;
  status?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  compact?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"article">, "children">;

export function ChatMessage(props: ChatMessageProps) {
  const {
    role = "assistant",
    align,
    name,
    avatarSrc,
    avatarAlt,
    showAvatar: showAvatarProp,
    meta,
    status,
    actions,
    footer,
    compact = false,
    className,
    children,
    ...messageProps
  } = props;
  const resolvedAlign = align ?? chatMessageAlignMap[role];
  const resolvedName = name ?? getDefaultChatMessageName(role);
  const showAvatar =
    showAvatarProp ??
    (role !== "user" && role !== "system" && resolvedAlign !== "center");
  const showHeader = resolvedName || meta || status || actions;
  const showFooter =
    footer !== undefined && footer !== null && footer !== false;

  return (
    <article
      {...messageProps}
      className={classNames(
        "willa-chat-message",
        `willa-chat-message--${role}`,
        `willa-chat-message--${resolvedAlign}`,
        compact && "willa-chat-message--compact",
        className,
      )}
    >
      {showAvatar ? (
        <Avatar
          className="willa-chat-message-avatar"
          name={resolvedName}
          src={avatarSrc}
          alt={avatarAlt}
          size={compact ? "sm" : "md"}
        />
      ) : null}
      <div className="willa-chat-message-body">
        {showHeader ? (
          <div className="willa-chat-message-header">
            <div className="willa-chat-message-heading">
              {resolvedName ? (
                <span className="willa-chat-message-name">{resolvedName}</span>
              ) : null}
              {meta ? (
                <span className="willa-chat-message-meta">{meta}</span>
              ) : null}
              {status ? (
                <span className="willa-chat-message-status">{status}</span>
              ) : null}
            </div>
            {actions ? (
              <div className="willa-chat-message-actions">{actions}</div>
            ) : null}
          </div>
        ) : null}
        <div className="willa-chat-message-content">{children}</div>
        {showFooter ? (
          <div className="willa-chat-message-footer">{footer}</div>
        ) : null}
      </div>
    </article>
  );
}

const chatMessageAlignMap: Record<ChatMessageRole, ChatMessageAlign> = {
  assistant: "left",
  user: "right",
  system: "center",
  developer: "left",
  tool: "left",
};

const chatMessageNameMap: Record<ChatMessageRole, string> = {
  assistant: "Assistant",
  user: "You",
  system: "System",
  developer: "Developer",
  tool: "Tool",
};

const getDefaultChatMessageName = (role: ChatMessageRole) => {
  if (role === "assistant" || role === "developer" || role === "tool") {
    return chatMessageNameMap[role];
  }

  return "";
};

ChatMessage.displayName = "ChatMessage";
