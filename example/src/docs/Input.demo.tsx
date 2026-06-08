import { useState } from "react";
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

const RangeInputPreview = () => {
  const [strength, setStrength] = useState(60);

  return (
    <div style={stackStyle}>
      <Input
        type="range"
        min={0}
        max={100}
        step={1}
        value={strength}
        width="18rem"
        rangeColor="#3b82f6"
        rangeHeight="0.5rem"
        rangeTrackColor="rgba(59, 130, 246, 0.18)"
        aria-label="生成强度"
        onChange={(event) => setStrength(Number(event.currentTarget.value))}
      />
      <Input
        type="range"
        min={0}
        max={1}
        step={0.1}
        defaultValue={0.7}
        width="100%"
        rangeColor="#14b8a6"
        rangeThumbColor="#ecfeff"
        rangeTrackColor="rgba(20, 184, 166, 0.18)"
        aria-label="温度"
      />
    </div>
  );
};

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
      width: "100%",
    },
  },
  code: `
    import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
    import { Input } from "willa/Input";
    import "willa/Input.css";

    <Input
      placeholder="搜索文档、组件或提示词"
      leadingIcon={<MagnifyingGlassIcon />}
      width="100%"
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
      title: "范围输入",
      content: <RangeInputPreview />,
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
      name: "type",
      type: "HTMLInputTypeAttribute",
      description:
        "原生 input 类型；设置为 range 时会展示滑块输入样式，value、min、max、step、onChange 和 onInput 等原生属性保持透传。",
    },
    {
      name: "invalid",
      type: "boolean",
      description: "展示错误状态。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义输入框宽度；设置为 100% 时占满父容器。",
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
      name: "rangeColor",
      type: "string",
      description: "自定义 range 主色，影响滑块边框和浏览器原生强调色。",
    },
    {
      name: "rangeHeight",
      type: "CSSProperties['height']",
      description: "自定义 range 轨道高度，建议使用 px、rem 等长度值。",
    },
    {
      name: "rangeThumbColor",
      type: "string",
      description: "自定义 range 滑块背景色。",
    },
    {
      name: "rangeTrackColor",
      type: "string",
      description: "自定义 range 轨道背景色。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义输入框文字颜色，支持 CSS 颜色值。",
    },
  ],
});
