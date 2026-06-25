import { ContextWindowMeter } from "willa/ContextWindowMeter";
import "willa/ContextWindowMeter.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 54rem)",
} as const;

const ContextWindowMeterPreview = () => (
  <div style={frameStyle}>
    <ContextWindowMeter
      value={96_000}
      max={128_000}
      label="上下文窗口"
      description="当前会话已纳入系统指令、用户附件和检索片段。"
      segments={[
        {
          id: "system",
          label: "系统指令",
          value: 12_000,
          tone: "neutral",
          meta: "12k",
        },
        {
          id: "files",
          label: "文件",
          value: 44_000,
          tone: "info",
          meta: "44k",
        },
        {
          id: "retrieval",
          label: "检索",
          value: 28_000,
          tone: "success",
          meta: "28k",
        },
        {
          id: "draft",
          label: "草稿",
          value: 12_000,
          tone: "warning",
          meta: "12k",
        },
      ]}
    />
  </div>
);

export default defineDoc({
  id: "context-window-meter",
  name: "ContextWindowMeter",
  displayName: "上下文容量",
  category: "ai",
  packageName: "willa/ContextWindowMeter",
  description: "用于展示 AI 会话上下文窗口、token 容量和分段占用情况。",
  imports: [{ name: "ContextWindowMeter", from: "willa/ContextWindowMeter" }],
  css: "willa/ContextWindowMeter.css",
  demo: {
    name: "ContextWindowMeterPreview",
    component: ContextWindowMeterPreview,
  },
  code: `
    import { ContextWindowMeter } from "willa/ContextWindowMeter";
    import "willa/ContextWindowMeter.css";

    <ContextWindowMeter
      value={96000}
      max={128000}
      label="上下文窗口"
      description="当前会话已纳入系统指令、用户附件和检索片段。"
      segments={[
        { id: "system", label: "系统指令", value: 12000, tone: "neutral", meta: "12k" },
        { id: "files", label: "文件", value: 44000, tone: "info", meta: "44k" },
        { id: "retrieval", label: "检索", value: 28000, tone: "success", meta: "28k" },
        { id: "draft", label: "草稿", value: 12000, tone: "warning", meta: "12k" },
      ]}
    />;
  `,
  sections: [
    {
      title: "单值容量",
      code: `
        <ContextWindowMeter
          value={52000}
          max={128000}
          label="剩余上下文"
          description="低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"
        />;
      `,
      content: (
        <ContextWindowMeter
          value={52_000}
          max={128_000}
          label="剩余上下文"
          description="低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"
        />
      ),
    },
    {
      title: "高占用告警",
      code: `
        <ContextWindowMeter
          value={118000}
          max={128000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) => \`\${Math.round((value / max) * 100)}% 已使用\`}
        />;
      `,
      content: (
        <ContextWindowMeter
          value={118_000}
          max={128_000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) =>
            `${Math.round((value / max) * 100)}% 已使用`
          }
        />
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "number",
      required: true,
      description: "当前已使用的上下文容量；会在 0 到 max 之间裁剪展示。",
    },
    {
      name: "max",
      type: "number",
      required: true,
      description: "上下文窗口总容量；非正数会按 0 容量展示。",
    },
    {
      name: "label",
      type: "ReactNode",
      defaultValue: '"上下文窗口"',
      description: "标题内容；可传入空值隐藏标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方的补充说明。",
    },
    {
      name: "unit",
      type: "ReactNode",
      defaultValue: '"tokens"',
      description: "默认数值文案使用的单位。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "组件尺寸。",
    },
    {
      name: "tone",
      type: '"neutral" | "info" | "success" | "warning" | "danger"',
      description: "手动指定整体色调；不传时根据阈值自动推导。",
    },
    {
      name: "warningThreshold",
      type: "number",
      defaultValue: "0.72",
      description: "进入 warning 色调的占用比例阈值。",
    },
    {
      name: "dangerThreshold",
      type: "number",
      defaultValue: "0.9",
      description: "进入 danger 色调的占用比例阈值。",
    },
    {
      name: "segments",
      type: "Array<ContextWindowMeterSegment>",
      description:
        "分段占用列表；传入后轨道展示各分段，并在下方展示图例。分段总和小于 value 时会补齐未分类占用，超过 value 时会裁剪到 value，图例同步展示补齐或裁剪后的值。",
    },
    {
      name: "showValue",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示右侧数值摘要。",
    },
    {
      name: "formatValue",
      type: "(value: number, max: number) => ReactNode",
      description: "自定义右侧数值摘要文案。",
    },
    {
      name: "className",
      type: "string",
      description: "透传到根 section 的类名。",
    },
    {
      name: "style",
      type: "CSSProperties",
      description: "透传到根 section 的内联样式。",
    },
  ],
});
