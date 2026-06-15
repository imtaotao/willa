import { useState } from "react";
import { CheckIcon, ClockIcon } from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { ChatMessage } from "willa/ChatMessage";
import { MessageList } from "willa/MessageList";
import { ThinkingIndicator } from "willa/ThinkingIndicator";
import "willa/Button.css";
import "willa/ChatMessage.css";
import "willa/MessageList.css";
import "willa/ThinkingIndicator.css";

import { defineDoc } from "#example/catalog/defineDoc";

const userAvatarSrc = "https://github.com/imtaotao.png";
const assistantAvatarSrc = "https://github.com/openai.png";
const toolAvatarSrc = "https://github.com/github.png";

const frameStyle = {
  display: "grid",
  width: "min(100%, 60rem)",
  height: "28rem",
  minWidth: 0,
  gridTemplateRows: "auto minmax(0, 1fr)",
  overflow: "hidden",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.9rem",
  background: "var(--willa-panel-bg)",
} as const;

const compactFrameStyle = {
  ...frameStyle,
  width: "min(100%, 52rem)",
  height: "22rem",
} as const;

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  borderBottom: "1px solid var(--willa-line)",
  padding: "0.72rem 0.8rem",
} as const;

const toolbarTextStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.82rem",
  lineHeight: 1.4,
} as const;

const viewportStyle = {
  minWidth: 0,
  minHeight: 0,
  padding: "1rem",
} as const;

const initialMessages = [
  {
    role: "system",
    content: "会话已连接当前项目文档。",
    meta: "",
  },
  {
    role: "user",
    content: "帮我总结这次组件调整的影响范围。",
    meta: "09:41",
  },
  {
    role: "assistant",
    content: "本次主要影响 AI 包、willa 聚合入口和示例站。",
    meta: "已生成",
  },
] as const;

const extraMessages = [
  "还需要验证单组件 CSS、暗黑主题和移动端消息间距。",
  "如果后续引入虚拟滚动，可以继续放在 MessageList 这一层。",
  "ChatMessage 仍只关心单条消息，不处理列表状态。",
];

const MessageListPreview = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={frameStyle}>
      <div style={toolbarStyle}>
        <span style={toolbarTextStyle}>
          固定消息视窗，追加消息后自动滚到底部
        </span>
        <Button
          size="sm"
          variant="soft"
          onClick={() => setCount((value) => (value + 1) % 4)}
        >
          追加消息
        </Button>
      </div>
      <div style={viewportStyle}>
        <MessageList>
          {initialMessages.map((message, index) => (
            <ChatMessage
              key={`${message.role}-${index}`}
              role={message.role}
              meta={message.meta || undefined}
              name={message.role === "assistant" ? "Willa AI" : undefined}
              showAvatar={message.role === "user" ? true : undefined}
              avatarSrc={
                message.role === "assistant"
                  ? assistantAvatarSrc
                  : message.role === "user"
                    ? userAvatarSrc
                    : undefined
              }
              avatarAlt={message.role === "user" ? "imtaotao" : undefined}
              compact={message.role === "system"}
              status={
                message.role === "assistant" ? (
                  <>
                    <CheckIcon /> 完成
                  </>
                ) : undefined
              }
            >
              {message.content}
            </ChatMessage>
          ))}
          <ChatMessage
            role="assistant"
            name="Willa AI"
            avatarSrc={assistantAvatarSrc}
            status="检索中"
          >
            <ThinkingIndicator
              compact
              status="searching"
              label="正在检索相关组件"
            />
          </ChatMessage>
          {extraMessages.slice(0, count).map((message, index) => (
            <ChatMessage
              key={message}
              role={index % 2 === 0 ? "assistant" : "tool"}
              name={index % 2 === 0 ? "Willa AI" : "检查任务"}
              avatarSrc={index % 2 === 0 ? assistantAvatarSrc : toolAvatarSrc}
              compact={index % 2 === 1}
            >
              {message}
            </ChatMessage>
          ))}
        </MessageList>
      </div>
    </div>
  );
};

export default defineDoc({
  id: "message-list",
  name: "MessageList",
  category: "ai",
  packageName: "willa/MessageList",
  description: "用于 AI 对话流的消息列表容器，承载消息堆叠、空态和加载态。",
  imports: [{ name: "MessageList", from: "willa/MessageList" }],
  css: "willa/MessageList.css",
  demo: {
    name: "MessageListPreview",
    component: MessageListPreview,
  },
  code: `
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageList } from "willa/MessageList";
    import { ThinkingIndicator } from "willa/ThinkingIndicator";
    import "willa/ChatMessage.css";
    import "willa/MessageList.css";
    import "willa/ThinkingIndicator.css";

    <div style={{ height: 360 }}>
      <MessageList>
        <ChatMessage
          role="user"
          showAvatar
          avatarSrc="https://github.com/imtaotao.png"
          avatarAlt="imtaotao"
        >
          帮我总结这次组件调整。
        </ChatMessage>
        <ChatMessage
          role="assistant"
          name="Willa AI"
          avatarSrc="https://github.com/openai.png"
          status="检索中"
        >
          <ThinkingIndicator compact status="searching" label="正在检索相关组件" />
        </ChatMessage>
        <ChatMessage
          role="assistant"
          name="Willa AI"
          avatarSrc="https://github.com/openai.png"
        >
          本次主要影响 AI 包、willa 聚合入口和示例站。
        </ChatMessage>
      </MessageList>
    </div>;
  `,
  sections: [
    {
      title: "加载历史",
      code: `
        <div style={compactFrameStyle}>
          <div style={toolbarStyle}>
            <span style={toolbarTextStyle}>顶部可放历史消息加载状态</span>
          </div>
          <div style={viewportStyle}>
            <MessageList
              loading
              loadingLabel={
                <>
                  <ClockIcon /> 正在加载更早的消息
                </>
              }
            >
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc="https://github.com/imtaotao.png"
                avatarAlt="imtaotao"
                meta="09:38"
              >
                先看一下有哪些文件改动。
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc="https://github.com/openai.png"
                meta="09:39"
              >
                我会先检查工作区、组件入口和文档注册。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,
      content: (
        <div style={compactFrameStyle}>
          <div style={toolbarStyle}>
            <span style={toolbarTextStyle}>顶部可放历史消息加载状态</span>
          </div>
          <div style={viewportStyle}>
            <MessageList
              loading
              loadingLabel={
                <>
                  <ClockIcon /> 正在加载更早的消息
                </>
              }
            >
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc={userAvatarSrc}
                avatarAlt="imtaotao"
                meta="09:38"
              >
                先看一下有哪些文件改动。
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc={assistantAvatarSrc}
                meta="09:39"
              >
                我会先检查工作区、组件入口和文档注册。
              </ChatMessage>
            </MessageList>
          </div>
        </div>
      ),
    },
    {
      title: "空列表",
      code: `
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList empty="还没有消息，可以从一个问题或提示词开始。" />
          </div>
        </div>;
      `,
      content: (
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList empty="还没有消息，可以从一个问题或提示词开始。" />
          </div>
        </div>
      ),
    },
    {
      title: "内容宽度",
      code: `
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList maxWidth="34rem" gap="0.75rem">
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc="https://github.com/imtaotao.png"
                avatarAlt="imtaotao"
              >
                这个区域适合嵌入在窄侧栏里吗？
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc="https://github.com/openai.png"
              >
                可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,
      content: (
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList maxWidth="34rem" gap="0.75rem">
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc={userAvatarSrc}
                avatarAlt="imtaotao"
              >
                这个区域适合嵌入在窄侧栏里吗？
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc={assistantAvatarSrc}
              >
                可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。
              </ChatMessage>
            </MessageList>
          </div>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "消息列表内容，通常组合 ChatMessage。",
    },
    {
      name: "empty",
      type: "ReactNode",
      description: "没有 children 时展示的空状态内容。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示加载提示，适合加载历史消息。",
    },
    {
      name: "loadingLabel",
      type: "ReactNode",
      defaultValue: '"正在加载消息..."',
      description: "加载提示内容，默认“正在加载消息...”。",
    },
    {
      name: "autoScroll",
      type: "boolean",
      defaultValue: "true",
      description: "children 或 loading 变化后是否滚动到底部，默认开启。",
    },
    {
      name: "maxWidth",
      type: "number | string",
      description:
        "消息内容最大宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。",
    },
    {
      name: "gap",
      type: "number | string",
      description: "消息之间的间距；number 会按 px 处理，也可以传 CSS 长度。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
  ],
});
