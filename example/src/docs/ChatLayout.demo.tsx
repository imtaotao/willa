import { GearIcon, LayersIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { ChatLayout } from "willa/ChatLayout";
import { ChatMessage } from "willa/ChatMessage";
import { Composer } from "willa/Composer";
import { Group } from "willa/Group";
import { MessageList } from "willa/MessageList";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/ChatLayout.css";
import "willa/ChatMessage.css";
import "willa/PromptInput.css";
import "willa/Composer.css";
import "willa/Group.css";
import "willa/MessageList.css";

import { defineDoc } from "#example/catalog/defineDoc";

const headerStyle = {
  display: "flex",
  minWidth: 0,
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
} as const;

const titleBlockStyle = {
  display: "grid",
  minWidth: 0,
  gap: "0.18rem",
} as const;

const titleStyle = {
  margin: 0,
  color: "var(--willa-text-strong)",
  fontSize: "0.98rem",
  lineHeight: 1.35,
} as const;

const descriptionStyle = {
  margin: 0,
  color: "var(--willa-text-soft)",
  fontSize: "0.82rem",
  lineHeight: 1.45,
} as const;

const sidebarStyle = {
  display: "grid",
  gap: "0.8rem",
} as const;

const sidebarSectionStyle = {
  display: "grid",
  gap: "0.45rem",
} as const;

const sidebarTitleStyle = {
  color: "var(--willa-text-strong)",
  fontSize: "0.78rem",
  fontWeight: 600,
} as const;

const contextListStyle = {
  display: "grid",
  gap: "0.4rem",
  margin: 0,
  padding: 0,
  listStyle: "none",
} as const;

const contextItemStyle = {
  display: "flex",
  minWidth: 0,
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5rem",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.62rem",
  padding: "0.5rem 0.58rem",
  color: "var(--willa-text)",
  fontSize: "0.82rem",
} as const;

const compactLayoutStyle = {
  width: "min(100%, 52rem)",
  margin: "0 auto",
} as const;

const ChatLayoutPreview = () => {
  return (
    <ChatLayout
      header={<ChatHeader />}
      sidebar={<ChatSidebar />}
      sidebarWidth="15rem"
      messages={<ChatMessages />}
      input={
        <Composer
          minRows={2}
          model={<Badge tone="info">Willa AI Pro</Badge>}
          footer="已连接 3 个上下文，Enter 发送"
          placeholder="继续追问、补充要求或选择工具..."
          submitLabel="发送"
        />
      }
      footer="当前会话会保留消息、上下文和工具调用记录。"
    />
  );
};

const ChatHeader = () => {
  return (
    <div style={headerStyle}>
      <div style={titleBlockStyle}>
        <h3 style={titleStyle}>产品反馈分析</h3>
        <p style={descriptionStyle}>Willa AI 正在整理优先级和可执行建议。</p>
      </div>
      <Group gap="xs">
        <Badge tone="info">长上下文</Badge>
        <Button size="sm" variant="ghost" icon={<GearIcon />}>
          设置
        </Button>
      </Group>
    </div>
  );
};

const ChatSidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div style={sidebarSectionStyle}>
        <span style={sidebarTitleStyle}>上下文</span>
        <ul style={contextListStyle}>
          {["feedback.csv", "roadmap.md", "support-log.json"].map((name) => (
            <li key={name} style={contextItemStyle}>
              <span>{name}</span>
              <Badge size="sm" tone="neutral">
                已读
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      <Button size="sm" variant="soft" icon={<LayersIcon />}>
        添加资料
      </Button>
    </div>
  );
};

const ChatMessages = () => {
  return (
    <MessageList>
      <ChatMessage role="system" compact>
        模型已加载产品反馈、路线图和客服记录。
      </ChatMessage>
      <ChatMessage role="user" meta="09:41">
        帮我找出本周最应该优先处理的三个问题。
      </ChatMessage>
      <ChatMessage role="assistant" name="Willa AI" meta="已生成">
        <p>建议优先处理登录失败、导出超时和移动端表单校验异常。</p>
        <p>这三项同时影响活跃用户、付费转化和客服工单数量。</p>
      </ChatMessage>
      <ChatMessage role="tool" name="文件检索" status="已完成" compact>
        已读取 24 条反馈，命中 7 条高优先级问题。
      </ChatMessage>
    </MessageList>
  );
};

export default defineDoc({
  id: "chat-layout",
  name: "ChatLayout",
  category: "ai",
  packageName: "willa/ChatLayout",
  description: "用于 AI 对话产品的布局容器，组合会话头、侧栏、消息区和输入区。",
  imports: [{ name: "ChatLayout", from: "willa/ChatLayout" }],
  css: "willa/ChatLayout.css",
  demo: {
    name: "ChatLayoutPreview",
    component: ChatLayoutPreview,
  },
  code: `
    import { ChatLayout } from "willa/ChatLayout";
    import { ChatMessage } from "willa/ChatMessage";
    import { Composer } from "willa/Composer";
    import { MessageList } from "willa/MessageList";
    import "willa/ChatLayout.css";
    import "willa/ChatMessage.css";
    import "willa/Composer.css";
    import "willa/MessageList.css";

    <ChatLayout
      header="产品反馈分析"
      sidebar="feedback.csv / roadmap.md / support-log.json"
      messages={
        <MessageList>
          <ChatMessage role="user">帮我找出三个优先级。</ChatMessage>
          <ChatMessage role="assistant" name="Willa AI">
            建议优先处理登录失败、导出超时和移动端表单校验异常。
          </ChatMessage>
        </MessageList>
      }
      input={<Composer minRows={2} placeholder="继续追问..." />}
    />
  `,
  sections: [
    {
      title: "无侧栏布局",
      content: (
        <div style={compactLayoutStyle}>
          <ChatLayout
            header={<ChatHeader />}
            messages={<ChatMessages />}
            input={
              <Composer
                minRows={2}
                footer="适合窄页面、嵌入式对话和单任务流程。"
                placeholder="输入下一步要求..."
              />
            }
          />
        </div>
      ),
    },
    {
      title: "右侧上下文",
      content: (
        <ChatLayout
          header={<ChatHeader />}
          sidebar={<ChatSidebar />}
          sidebarPosition="right"
          sidebarWidth={260}
          messages={<ChatMessages />}
          input={
            <Composer
              minRows={2}
              footer="侧栏可以放会话、文件、工具或引用来源。"
              placeholder="根据右侧上下文继续生成..."
            />
          }
        />
      ),
    },
    {
      title: "空状态",
      content: (
        <div style={compactLayoutStyle}>
          <ChatLayout
            header="新会话"
            empty="选择模板或输入问题开始新的 AI 任务。"
            input={<Composer minRows={2} placeholder="描述你想完成的任务..." />}
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "header",
      type: "ReactNode",
      description: "会话顶部区域，通常放标题、状态、模型信息或全局操作。",
    },
    {
      name: "sidebar",
      type: "ReactNode",
      description: "侧栏区域，适合放会话列表、上下文文件、工具或来源。",
    },
    {
      name: "sidebarPosition",
      type: "'left' | 'right'",
      description: "侧栏位置，默认 left。",
    },
    {
      name: "sidebarWidth",
      type: "number | string",
      description: "侧栏宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。",
    },
    {
      name: "messages",
      type: "ReactNode",
      description: "消息区域内容，通常组合 ChatMessage 或后续 MessageList。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "消息区域的备用写法；当 messages 未传时渲染 children。",
    },
    {
      name: "input",
      type: "ReactNode",
      description: "底部输入区，通常放 PromptInput 或 Composer。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "布局底部说明区域。",
    },
    {
      name: "empty",
      type: "ReactNode",
      description: "没有 messages 和 children 时展示的空状态内容。",
    },
    {
      name: "stickyInput",
      type: "boolean",
      description: "输入区是否贴在消息区域底部，默认开启。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
  ],
});
