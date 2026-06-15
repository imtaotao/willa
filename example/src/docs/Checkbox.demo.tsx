import { Checkbox } from "willa/Checkbox";
import "willa/Checkbox.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.9rem",
  maxWidth: "42rem",
} as const;

export default defineDoc({
  id: "checkbox",
  name: "Checkbox",
  category: "form",
  packageName: "willa/Checkbox",
  description: "用于多选、协议确认、布尔配置和列表选择。",
  imports: [{ name: "Checkbox", from: "willa/Checkbox" }],
  css: "willa/Checkbox.css",
  demo: {
    name: "Checkbox",
    component: Checkbox,
    props: {
      label: "允许 AI 读取当前文档",
      description: "只会读取你选择的上下文范围。",
      defaultChecked: true,
    },
  },
  code: `
    import { Checkbox } from "willa/Checkbox";
    import "willa/Checkbox.css";

    <Checkbox
      label="允许 AI 读取当前文档"
      description="只会读取你选择的上下文范围。"
      defaultChecked
    />;
  `,
  sections: [
    {
      title: "状态",
      code: `
        <div style={stackStyle}>
          <Checkbox label="普通选项" />
          <Checkbox defaultChecked label="已选中选项" />
          <Checkbox indeterminate label="部分选中" />
          <Checkbox invalid label="错误状态" />
          <Checkbox disabled label="禁用选项" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <Checkbox label="普通选项" />
          <Checkbox defaultChecked label="已选中选项" />
          <Checkbox indeterminate label="部分选中" />
          <Checkbox invalid label="错误状态" />
          <Checkbox disabled label="禁用选项" />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={stackStyle}>
          <Checkbox size="sm" label="紧凑选项" />
          <Checkbox size="md" label="默认选项" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <Checkbox size="sm" label="紧凑选项" />
          <Checkbox size="md" label="默认选项" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "label",
      type: "ReactNode",
      description: "选项文案。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "选项补充说明。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "复选框尺寸。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      description: "展示错误状态。",
    },
    {
      name: "indeterminate",
      type: "boolean",
      defaultValue: "false",
      description: "展示部分选中状态。",
    },
    {
      name: "inputClassName",
      type: "string",
      description: "传给内部 input 元素的 className。",
    },
  ],
});
