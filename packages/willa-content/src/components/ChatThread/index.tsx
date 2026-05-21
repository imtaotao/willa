import classNames from "classnames";

import { DetailsBlock } from "#content/components/DetailsBlock";

type ChatMessage = {
  align?: "left" | "right";
  avatar?: string;
  name?: string;
  content: string | Array<string>;
};

export type ChatThreadProps = {
  title?: string;
  messages: Array<ChatMessage>;
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
  const getAvatar = (avatar: string) => {
    switch (avatar) {
      case "user":
        return "🙂";
      case "assistant":
        return "🤖";
      case "sparkles":
        return "✨";
      case "cat":
        return "🐱";
      case "idea":
        return "🧑‍💻";
      case "book":
        return "📘";
      case "moon":
        return "🧑";
      default:
        return avatar;
    }
  };

  return (
    <section className={classNames("willa-chat", className)}>
      {collapsible ? (
        <DetailsBlock
          title={title ?? "对话记录"}
          defaultOpen={defaultOpen}
          className="willa-chat-details"
        >
          <ChatMessages messages={messages} getAvatar={getAvatar} />
        </DetailsBlock>
      ) : (
        <>
          {title ? (
            <header className="willa-chat-header">
              <h3 className="willa-chat-title">{title}</h3>
            </header>
          ) : null}
          <ChatMessages messages={messages} getAvatar={getAvatar} />
        </>
      )}
    </section>
  );
}

type ChatMessagesProps = {
  messages: Array<ChatMessage>;
  getAvatar: (avatar: string) => string;
};

const ChatMessages = (props: ChatMessagesProps) => {
  const { messages, getAvatar } = props;

  return (
    <div className="willa-chat-list">
      {messages.map((message, index) => {
        const lines = Array.isArray(message.content)
          ? message.content
          : [message.content];
        const align = message.align ?? "left";
        const avatar =
          message.avatar ?? (align === "right" ? "user" : "assistant");
        const avatarClass = /^[a-z0-9-]+$/i.test(avatar)
          ? `willa-chat-item--avatar-${avatar}`
          : "";

        return (
          <article
            key={`${align}-${avatar}-${index}`}
            className={classNames(
              "willa-chat-item",
              `willa-chat-item--${align}`,
              avatarClass,
            )}
          >
            <div className="willa-chat-meta">
              <span className="willa-chat-avatar" aria-hidden="true">
                {getAvatar(avatar)}
              </span>
              {message.name ? (
                <p className="willa-chat-name">{message.name}</p>
              ) : null}
            </div>
            <div className="willa-chat-bubble-wrap">
              <div className="willa-chat-bubble">
                {lines.map((line, lineIndex) => (
                  <p
                    key={`${align}-${avatar}-${index}-${lineIndex}`}
                    className="willa-chat-line"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
