import { Separator } from "willa/Separator";
import "willa/Separator.css";

import { defineDoc } from "#example/catalog/defineDoc";

const metaRowStyle = {
  display: "flex",
  alignItems: "center",
  color: "var(--willa-text-soft)",
  fontSize: "0.92rem",
  lineHeight: 1.5,
} as const;

export default defineDoc({
  id: "separator",
  name: "Separator",
  packageName: "willa/Separator",
  description: "用于内容段落、文章区块和行内元信息之间的轻量分隔。",
  imports: [{ name: "Separator", from: "willa/Separator" }],
  css: "willa/Separator.css",
  demo: {
    name: "Separator",
    component: Separator,
  },
  code: `
    import { Separator } from "willa/Separator";
    import "willa/Separator.css";

    <Separator />
  `,
  sections: [
    {
      title: "基础分隔",
      content: <Separator />,
    },
    {
      title: "带文案",
      content: <Separator>相关阅读</Separator>,
    },
    {
      title: "文案位置",
      content: (
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator align="start">上文</Separator>
          <Separator align="center">更多内容</Separator>
          <Separator align="end">下文</Separator>
        </div>
      ),
    },
    {
      title: "间距尺寸",
      content: (
        <div>
          <p>第一段内容。</p>
          <Separator size="sm" />
          <p>第二段内容。</p>
          <Separator size="lg" />
          <p>第三段内容。</p>
        </div>
      ),
    },
    {
      title: "竖向分隔",
      content: (
        <div style={metaRowStyle}>
          <span>Willa</span>
          <Separator orientation="vertical" />
          <span>3 分钟阅读</span>
          <Separator orientation="vertical" />
          <span>2026</span>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      description: "分隔方向。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "分隔组件的外部间距。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      description: "横向带文案时的文案位置。",
    },
    {
      name: "decorative",
      type: "boolean",
      description: "是否作为纯视觉分隔，默认不暴露给辅助技术。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "横向分隔中间展示的可选文案。",
    },
  ],
});
