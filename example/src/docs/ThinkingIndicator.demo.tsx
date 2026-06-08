import { MagnifyingGlassIcon, ReaderIcon } from "@radix-ui/react-icons";

import { ChatMessage } from "willa/ChatMessage";
import { ThinkingIndicator } from "willa/ThinkingIndicator";
import "willa/ChatMessage.css";
import "willa/ThinkingIndicator.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 46rem)",
  margin: "0 auto",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.9rem",
  background: "var(--willa-panel-bg)",
  padding: "1rem",
} as const;

const ThinkingIndicatorPreview = () => {
  return (
    <div style={frameStyle}>
      <ChatMessage role="assistant" name="Willa AI" meta="处理中">
        <ThinkingIndicator
          status="searching"
          label="正在检索上下文"
          description="会先读取相关文档，再整理可执行建议。"
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
      status="searching"
      label="正在检索上下文"
      description="会先读取相关文档，再整理可执行建议。"
      steps={["理解问题", "检索资料", "生成回答"]}
      activeStep={1}
    />
  `,
  sections: [
    {
      title: "状态类型",
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
      type: "ReactNode[]",
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
  ],
});
