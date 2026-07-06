import classNames from "classnames";

import { Avatar } from "#content/components/Avatar";
import { Collapse } from "#content/components/Collapse";

export type ChatThreadMessage = {
  align?: "left" | "right";
  avatar?: string;
  avatarName?: string;
  avatarSrc?: string;
  name?: string;
  time?: string;
  content: string | Array<string>;
};

export type ChatThreadProps = {
  title?: string;
  messages: Array<ChatThreadMessage>;
  className?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
};

export function ChatThread(props: ChatThreadProps) {
  const {
    title,
    messages,
    className,
    collapsible,
    defaultOpen = false,
  } = props;

  return (
    <section className={classNames("willa-chat", className)}>
      {collapsible ? (
        <Collapse
          title={title ?? "对话记录"}
          defaultOpen={defaultOpen}
          size="sm"
          className="willa-chat-collapse"
        >
          <ChatMessages messages={messages} />
        </Collapse>
      ) : (
        <>
          {title ? (
            <header className="willa-chat-header">
              <h3 className="willa-chat-title">{title}</h3>
            </header>
          ) : null}
          <ChatMessages messages={messages} />
        </>
      )}
    </section>
  );
}

type ChatMessagesProps = {
  messages: Array<ChatThreadMessage>;
};

const ChatMessages = (props: ChatMessagesProps) => {
  const { messages } = props;

  return (
    <div className="willa-chat-list">
      {messages.map((message, index) => {
        const lines = Array.isArray(message.content)
          ? message.content
          : [message.content];
        const align = message.align ?? "left";
        const displayName =
          message.name?.trim() || (align === "right" ? "User" : "Assistant");
        const avatarName =
          message.avatar?.trim() || message.avatarName?.trim() || displayName;

        return (
          <div
            className="willa-chat-message-group"
            key={`${align}-${displayName}-${index}`}
          >
            {message.time ? (
              <time className="willa-chat-time">{message.time}</time>
            ) : null}
            <article
              className={classNames(
                "willa-chat-item",
                `willa-chat-item--${align}`,
              )}
            >
              <Avatar
                className="willa-chat-avatar"
                src={message.avatarSrc}
                name={avatarName}
                alt={displayName}
                size="md"
                shape="rounded"
              />
              <div className="willa-chat-body">
                {message.name ? (
                  <p className="willa-chat-name">{message.name}</p>
                ) : null}
                <div className="willa-chat-bubble">
                  {lines.map((line, lineIndex) => (
                    <p
                      key={`${align}-${message.name ?? "message"}-${index}-${lineIndex}`}
                      className="willa-chat-line"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

ChatThread.displayName = "ChatThread";
