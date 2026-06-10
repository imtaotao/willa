import { Switch } from "willa/Switch";
import "willa/Switch.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.9rem",
  maxWidth: "34rem",
} as const;

export default defineDoc({
  id: "switch",
  name: "Switch",
  category: "form",
  packageName: "willa/Switch",
  description: "用于开关型配置，适合产品设置和能力启停。",
  imports: [{ name: "Switch", from: "willa/Switch" }],
  css: "willa/Switch.css",
  demo: {
    name: "Switch",
    component: Switch,
    props: {
      label: "启用自动摘要",
      description: "生成结果后自动提取重点。",
      defaultChecked: true,
    },
  },
  code: `
    import { Switch } from "willa/Switch";
    import "willa/Switch.css";

    <Switch
      label="启用自动摘要"
      description="生成结果后自动提取重点。"
      defaultChecked
    />
  `,
  sections: [
    {
      title: "配置项",
      content: (
        <div style={stackStyle}>
          <Switch label="联网检索" description="允许模型访问公开资料。" />
          <Switch
            defaultChecked
            label="引用来源"
            description="回答里展示来源和可信度。"
          />
          <Switch disabled label="企业策略锁定" />
        </div>
      ),
    },
    {
      title: "状态",
      content: (
        <div style={stackStyle}>
          <Switch invalid label="错误状态" />
          <Switch size="sm" label="紧凑开关" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "label",
      type: "ReactNode",
      description: "开关文案。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "开关补充说明。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "开关尺寸。",
    },
    {
      name: "invalid",
      type: "boolean",
      description: "展示错误状态。",
    },
    {
      name: "inputClassName",
      type: "string",
      description: "传给内部 input 元素的 className。",
    },
  ],
});
