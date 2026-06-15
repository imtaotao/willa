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
  category: "layout",
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

    <Separator />;
  `,
  sections: [
    {
      title: "基础分隔",
      code: `
        <Separator />;
      `,
      content: <Separator />,
    },
    {
      title: "带文案",
      code: `
        <Separator>相关阅读</Separator>;
      `,
      content: <Separator>相关阅读</Separator>,
    },
    {
      title: "线条样式",
      code: `
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator variant="solid">实线</Separator>
          <Separator variant="dashed">虚线</Separator>
          <Separator variant="dotted">点线</Separator>
        </div>;
      `,
      content: (
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator variant="solid">实线</Separator>
          <Separator variant="dashed">虚线</Separator>
          <Separator variant="dotted">点线</Separator>
        </div>
      ),
    },
    {
      title: "文案位置",
      code: `
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator align="start">上文</Separator>
          <Separator align="center">更多内容</Separator>
          <Separator align="end">下文</Separator>
        </div>;
      `,
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
      code: `
        <div>
          <p>第一段内容。</p>
          <Separator size="sm" />
          <p>第二段内容。</p>
          <Separator size="lg" />
          <p>第三段内容。</p>
        </div>;
      `,
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
      code: `
        <div style={metaRowStyle}>
          <span>Willa</span>
          <Separator orientation="vertical" />
          <span>3 分钟阅读</span>
          <Separator orientation="vertical" />
          <span>2026</span>
        </div>;
      `,
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
    {
      title: "弱化文案",
      code: `
        <Separator plain>仅作为轻量分组提示</Separator>;
      `,
      content: <Separator plain>仅作为轻量分组提示</Separator>,
    },
  ],
  props: [
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description: "分隔方向。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "分隔组件的外部间距。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      defaultValue: '"center"',
      description: "横向带文案时的文案位置。",
    },
    {
      name: "variant",
      type: '"solid" | "dashed" | "dotted"',
      defaultValue: '"solid"',
      description: "线条样式。",
    },
    {
      name: "plain",
      type: "boolean",
      defaultValue: "false",
      description: "是否弱化文案字重。",
    },
    {
      name: "decorative",
      type: "boolean",
      defaultValue: "true",
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
