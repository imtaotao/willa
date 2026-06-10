import { Button } from "willa/Button";
import { Spinner } from "willa/Spinner";
import "willa/Button.css";
import "willa/Spinner.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "center",
} as const;

const panelStyle = {
  display: "grid",
  gap: "0.9rem",
  width: "min(100%, 34rem)",
} as const;

const loadingCardStyle = {
  display: "grid",
  justifyItems: "center",
  gap: "0.7rem",
  width: "100%",
  padding: "1.4rem",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.85rem",
  background: "var(--willa-surface-tint)",
} as const;

export default defineDoc({
  id: "spinner",
  name: "Spinner",
  packageName: "willa/Spinner",
  description: "用于轻量加载状态、局部等待和异步任务反馈的旋转指示器。",
  imports: [{ name: "Spinner", from: "willa/Spinner" }],
  css: "willa/Spinner.css",
  demo: {
    name: "Spinner",
    component: Spinner,
    props: {
      label: "生成中",
      tone: "default",
    },
  },
  code: `
    import { Spinner } from "willa/Spinner";
    import "willa/Spinner.css";

    <Spinner label="生成中" />;
  `,
  sections: [
    {
      title: "基础用法",
      code: `
        <div style={rowStyle}>
          <Spinner label="" />
          <Spinner label="加载中" />
          <Spinner label="生成回答中" labelPosition="block" />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Spinner label="" />
          <Spinner label="加载中" />
          <Spinner label="生成回答中" labelPosition="block" />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={rowStyle}>
          <Spinner size="xs" label="XS" />
          <Spinner size="sm" label="Small" />
          <Spinner size="md" label="Medium" />
          <Spinner size="lg" label="Large" />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Spinner size="xs" label="XS" />
          <Spinner size="sm" label="Small" />
          <Spinner size="md" label="Medium" />
          <Spinner size="lg" label="Large" />
        </div>
      ),
    },
    {
      title: "色调",
      code: `
        <div style={rowStyle}>
          <Spinner tone="default" label="Default" />
          <Spinner tone="neutral" label="Neutral" />
          <Spinner tone="success" label="Success" />
          <Spinner tone="warning" label="Warning" />
          <Spinner tone="danger" label="Danger" />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Spinner tone="default" label="Default" />
          <Spinner tone="neutral" label="Neutral" />
          <Spinner tone="success" label="Success" />
          <Spinner tone="warning" label="Warning" />
          <Spinner tone="danger" label="Danger" />
        </div>
      ),
    },
    {
      title: "组合场景",
      code: `
        <div style={panelStyle}>
          <div style={loadingCardStyle}>
            <Spinner size="lg" label="正在分析上下文" labelPosition="block" />
          </div>
          <Button loading variant="outline">
            提交中
          </Button>
        </div>;
      `,
      content: (
        <div style={panelStyle}>
          <div style={loadingCardStyle}>
            <Spinner size="lg" label="正在分析上下文" labelPosition="block" />
          </div>
          <Button loading variant="outline">
            提交中
          </Button>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "label",
      type: "ReactNode",
      description: "加载状态文案，传空字符串时只展示图形并保留无障碍文本。",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      description: "Spinner 尺寸。",
    },
    {
      name: "tone",
      type: '"default" | "neutral" | "success" | "warning" | "danger"',
      description: "Spinner 色调。",
    },
    {
      name: "labelPosition",
      type: '"inline" | "block"',
      description: "文案和图形的排列方式。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
  ],
});
