import {
  CheckCircledIcon,
  EnvelopeClosedIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Input } from "willa/Input";
import "willa/Input.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  maxWidth: "32rem",
} as const;

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

export default defineDoc({
  id: "input",
  name: "Input",
  packageName: "willa/Input",
  description: "用于表单、搜索、配置和 AI 产品输入区域的单行输入框。",
  imports: [{ name: "Input", from: "willa/Input" }],
  css: "willa/Input.css",
  demo: {
    name: "Input",
    component: Input,
    props: {
      placeholder: "搜索文档、组件或提示词",
      leadingIcon: <MagnifyingGlassIcon />,
      fullWidth: true,
    },
  },
  code: `
    import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
    import { Input } from "willa/Input";
    import "willa/Input.css";

    <Input
      placeholder="搜索文档、组件或提示词"
      leadingIcon={<MagnifyingGlassIcon />}
      fullWidth
    />
  `,
  sections: [
    {
      title: "基础状态",
      content: (
        <div style={stackStyle}>
          <Input placeholder="请输入项目名称" />
          <Input
            placeholder="搜索上下文"
            leadingIcon={<MagnifyingGlassIcon />}
          />
          <Input
            defaultValue="ready@example.com"
            leadingIcon={<EnvelopeClosedIcon />}
            trailingIcon={<CheckCircledIcon />}
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      content: (
        <div style={stackStyle}>
          <Input size="sm" placeholder="紧凑输入" />
          <Input size="md" placeholder="默认输入" />
          <Input size="lg" placeholder="大尺寸输入" />
        </div>
      ),
    },
    {
      title: "附加内容",
      content: (
        <div style={stackStyle}>
          <Input
            leadingAddon="https://"
            trailingAddon=".com"
            defaultValue="willa-ui"
          />
          <Input leadingAddon="模型" defaultValue="gpt-4.1" />
        </div>
      ),
    },
    {
      title: "状态",
      content: (
        <div style={stackStyle}>
          <Input invalid defaultValue="missing-api-key" />
          <Input disabled defaultValue="不可编辑" />
          <Input variant="soft" placeholder="柔和背景" />
        </div>
      ),
    },
    {
      title: "自定义颜色",
      content: (
        <div style={rowStyle}>
          <Input
            backgroundColor="rgba(147, 197, 253, 0.18)"
            placeholder="自定义背景"
          />
          <Input
            backgroundColor="#f6e7c8"
            textColor="#3f2a12"
            defaultValue="warm field"
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "输入框尺寸。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      description: "输入框视觉类型。",
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
      name: "leadingIcon",
      type: "ReactNode",
      description: "输入内容前的图标。",
    },
    {
      name: "trailingIcon",
      type: "ReactNode",
      description: "输入内容后的图标。",
    },
    {
      name: "leadingAddon",
      type: "ReactNode",
      description: "输入内容前的附加文本或元素。",
    },
    {
      name: "trailingAddon",
      type: "ReactNode",
      description: "输入内容后的附加文本或元素。",
    },
    {
      name: "inputClassName",
      type: "string",
      description: "传给内部 input 元素的 className。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "自定义输入框背景颜色，支持 CSS 颜色值。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义输入框文字颜色，支持 CSS 颜色值。",
    },
  ],
});
