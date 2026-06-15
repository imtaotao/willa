import { Radio } from "willa/Radio";
import "willa/Radio.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.9rem",
  maxWidth: "42rem",
} as const;

export default defineDoc({
  id: "radio",
  name: "Radio",
  category: "form",
  packageName: "willa/Radio",
  description: "用于互斥选项和轻量配置选择。",
  imports: [{ name: "Radio", from: "willa/Radio" }],
  css: "willa/Radio.css",
  demo: {
    name: "Radio",
    component: Radio,
    props: {
      name: "model",
      value: "balanced",
      label: "均衡模式",
      description: "兼顾响应速度和回答质量。",
      defaultChecked: true,
    },
  },
  code: `
    import { Radio } from "willa/Radio";
    import "willa/Radio.css";

    <Radio
      name="model"
      value="balanced"
      label="均衡模式"
      description="兼顾响应速度和回答质量。"
      defaultChecked
    />;
  `,
  sections: [
    {
      title: "选项组",
      code: `
        <div style={stackStyle}>
          <Radio name="tone" value="fast" label="快速" />
          <Radio
            name="tone"
            value="balanced"
            label="均衡"
            description="推荐给大多数任务。"
            defaultChecked
          />
          <Radio name="tone" value="quality" label="高质量" />
          <Radio name="tone" value="disabled" label="不可用选项" disabled />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <Radio name="tone" value="fast" label="快速" />
          <Radio
            name="tone"
            value="balanced"
            label="均衡"
            description="推荐给大多数任务。"
            defaultChecked
          />
          <Radio name="tone" value="quality" label="高质量" />
          <Radio name="tone" value="disabled" label="不可用选项" disabled />
        </div>
      ),
    },
    {
      title: "状态",
      code: `
        <div style={stackStyle}>
          <Radio name="state" value="invalid" label="错误状态" invalid />
          <Radio name="state-size" value="sm" size="sm" label="紧凑选项" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <Radio name="state" value="invalid" label="错误状态" invalid />
          <Radio name="state-size" value="sm" size="sm" label="紧凑选项" />
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
      description: "单选框尺寸。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      description: "展示错误状态。",
    },
    {
      name: "inputClassName",
      type: "string",
      description: "传给内部 input 元素的 className。",
    },
  ],
});
