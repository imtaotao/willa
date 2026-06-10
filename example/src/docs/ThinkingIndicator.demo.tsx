import { MagnifyingGlassIcon, ReaderIcon } from "@radix-ui/react-icons";

import { ChatMessage } from "willa/ChatMessage";
import { ThinkingIndicator } from "willa/ThinkingIndicator";
import "willa/ChatMessage.css";
import "willa/ThinkingIndicator.css";

import { defineDoc } from "#example/catalog/defineDoc";

const assistantAvatarSrc = "https://github.com/openai.png";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 58rem)",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.9rem",
  background: "var(--willa-panel-bg)",
  padding: "1rem",
} as const;

const ThinkingIndicatorPreview = () => {
  return (
    <div style={frameStyle}>
      <ChatMessage
        role="assistant"
        name="Willa AI"
        avatarSrc={assistantAvatarSrc}
        meta="处理中"
      >
        <ThinkingIndicator
          collapsible
          defaultCollapsed
          status="searching"
          label="正在检索上下文"
          description="会先读取相关文档，再整理可执行建议。"
          summary="AI 正在处理公开任务状态。"
          steps={["理解问题", "检索资料", "生成回答"]}
          activeStep={1}
        />
      </ChatMessage>
    </div>
  );
};

export default defineDoc({
  id: "thinking-indicator",
  name: "ThinkingIndicator",
  category: "ai",
  packageName: "willa/ThinkingIndicator",
  description:
    "用于展示 AI 正在思考、检索、读取或生成的公开任务状态，不展示模型内部思维链。",
  imports: [{ name: "ThinkingIndicator", from: "willa/ThinkingIndicator" }],
  css: "willa/ThinkingIndicator.css",
  demo: {
    name: "ThinkingIndicatorPreview",
    component: ThinkingIndicatorPreview,
  },
  code: `
    import { ThinkingIndicator } from "willa/ThinkingIndicator";
    import "willa/ThinkingIndicator.css";

    <ThinkingIndicator
      collapsible
      defaultCollapsed
      status="searching"
      label="正在检索上下文"
      description="会先读取相关文档，再整理可执行建议。"
      summary="AI 正在处理公开任务状态。"
      steps={["理解问题", "检索资料", "生成回答"]}
      activeStep={1}
    />;
  `,
  sections: [
    {
      title: "折叠状态",
      code: `
        <ThinkingIndicator
          collapsible
          defaultCollapsed
          status="working"
          label="正在整理工具结果"
          description="已读取相关文件，正在压缩成可展示的用户摘要。"
          summary="中间处理过程默认隐藏。"
          steps={["读取文件", "整理证据", "生成摘要"]}
          activeStep={2}
        />;
      `,
      content: (
        <ThinkingIndicator
          collapsible
          defaultCollapsed
          status="working"
          label="正在整理工具结果"
          description="已读取相关文件，正在压缩成可展示的用户摘要。"
          summary="中间处理过程默认隐藏。"
          steps={["读取文件", "整理证据", "生成摘要"]}
          activeStep={2}
        />
      ),
    },
    {
      title: "状态类型",
      code: `
        <div style={{ display: "grid", gap: "0.75rem", minWidth: 0 }}>
          <ThinkingIndicator status="thinking" />
          <ThinkingIndicator
            status="searching"
            icon={<MagnifyingGlassIcon />}
            label="正在检索知识库"
            tone="accent"
          />
          <ThinkingIndicator
            status="reading"
            icon={<ReaderIcon />}
            label="正在读取文件"
            tone="warning"
          />
          <ThinkingIndicator status="generating" tone="success" />
        </div>;
      `,
      content: (
        <div style={{ display: "grid", gap: "0.75rem", minWidth: 0 }}>
          <ThinkingIndicator status="thinking" />
          <ThinkingIndicator
            status="searching"
            icon={<MagnifyingGlassIcon />}
            label="正在检索知识库"
            tone="accent"
          />
          <ThinkingIndicator
            status="reading"
            icon={<ReaderIcon />}
            label="正在读取文件"
            tone="warning"
          />
          <ThinkingIndicator status="generating" tone="success" />
        </div>
      ),
    },
    {
      title: "轻量模式",
      code: `
        <ThinkingIndicator
          compact
          size="sm"
          status="working"
          label="正在整理工具返回结果"
        />;
      `,
      content: (
        <ThinkingIndicator
          compact
          size="sm"
          status="working"
          label="正在整理工具返回结果"
        />
      ),
    },
  ],
  props: [
    {
      name: "status",
      type: '"thinking" | "searching" | "reading" | "generating" | "working"',
      description: "状态类型，默认 thinking。",
    },
    {
      name: "label",
      type: "ReactNode",
      description: "主状态文案；未传时根据 status 使用默认文案。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "补充说明。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "自定义状态图标；未传时使用动态点状指示。",
    },
    {
      name: "steps",
      type: "Array<ReactNode>",
      description: "公开任务步骤，不用于展示模型内部思维链。",
    },
    {
      name: "activeStep",
      type: "number",
      description: "当前步骤下标，默认 0。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "尺寸，默认 md。",
    },
    {
      name: "tone",
      type: '"neutral" | "accent" | "success" | "warning"',
      description: "状态色，默认 accent。",
    },
    {
      name: "animated",
      type: "boolean",
      description: "是否启用点状动画，默认 true。",
    },
    {
      name: "compact",
      type: "boolean",
      description: "是否使用无边框的轻量形态。",
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "是否允许折叠状态详情，默认 false。",
    },
    {
      name: "collapsed",
      type: "boolean",
      description: "受控折叠状态。",
    },
    {
      name: "defaultCollapsed",
      type: "boolean",
      description: "非受控模式下的默认折叠状态。",
    },
    {
      name: "summary",
      type: "ReactNode",
      description: "折叠态摘要；未传时使用 description 或 label。",
    },
    {
      name: "onCollapsedChange",
      type: "(collapsed: boolean) => void",
      description: "折叠状态变化时触发。",
    },
  ],
});
