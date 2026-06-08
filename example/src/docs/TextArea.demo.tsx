import { TextArea } from "willa/TextArea";
import "willa/TextArea.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  maxWidth: "34rem",
} as const;

export default defineDoc({
  id: "text-area",
  name: "TextArea",
  packageName: "willa/TextArea",
  description: "用于多行文本、提示词、反馈内容和 AI 输入区域的文本框。",
  imports: [{ name: "TextArea", from: "willa/TextArea" }],
  css: "willa/TextArea.css",
  demo: {
    name: "TextArea",
    component: TextArea,
    props: {
      placeholder: "告诉 Willa 你想生成什么内容...",
      fullWidth: true,
      rows: 4,
    },
  },
  code: `
    import { TextArea } from "willa/TextArea";
    import "willa/TextArea.css";

    <TextArea
      placeholder="告诉 Willa 你想生成什么内容..."
      fullWidth
      rows={4}
    />
  `,
  sections: [
    {
      title: "基础输入",
      content: (
        <div style={stackStyle}>
          <TextArea placeholder="输入反馈内容" fullWidth />
          <TextArea
            defaultValue="总结这篇文章，并输出 3 个适合社交媒体传播的标题。"
            fullWidth
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      content: (
        <div style={stackStyle}>
          <TextArea size="sm" placeholder="紧凑文本框" fullWidth />
          <TextArea size="md" placeholder="默认文本框" fullWidth />
          <TextArea size="lg" placeholder="大尺寸文本框" fullWidth />
        </div>
      ),
    },
    {
      title: "Resize",
      content: (
        <div style={stackStyle}>
          <TextArea resize="none" placeholder="不可拖拽调整" fullWidth />
          <TextArea resize="vertical" placeholder="仅允许垂直调整" fullWidth />
        </div>
      ),
    },
    {
      title: "状态",
      content: (
        <div style={stackStyle}>
          <TextArea invalid defaultValue="提示词不能为空。" fullWidth />
          <TextArea disabled defaultValue="不可编辑的文本内容。" fullWidth />
          <TextArea variant="soft" placeholder="柔和背景" fullWidth />
        </div>
      ),
    },
    {
      title: "自定义颜色",
      content: (
        <div style={stackStyle}>
          <TextArea
            backgroundColor="rgba(147, 197, 253, 0.16)"
            placeholder="自定义背景"
            fullWidth
          />
          <TextArea
            backgroundColor="#f6e7c8"
            textColor="#3f2a12"
            defaultValue="可以用于特殊场景的自定义配色。"
            fullWidth
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "文本框尺寸。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      description: "文本框视觉类型。",
    },
    {
      name: "resize",
      type: '"none" | "vertical" | "horizontal" | "both"',
      description: "拖拽调整尺寸的方向。",
    },
    {
      name: "invalid",
      type: "boolean",
      description: "展示错误状态。",
    },
    {
      name: "fullWidth",
      type: "boolean",
      description: "是否占满父容器宽度。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "自定义文本框背景颜色，支持 CSS 颜色值。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义文本框文字颜色，支持 CSS 颜色值。",
    },
  ],
});
