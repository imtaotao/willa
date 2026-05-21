import { Step } from "willa/Step";
import { Steps } from "willa/Steps";
import "willa/Steps.css";

import { defineDoc } from "#example/catalog/defineDoc";

const steps = [
  {
    name: "Step",
    component: Step,
    props: { title: "安装" },
    children: "使用 pnpm 安装依赖。",
  },
  {
    name: "Step",
    component: Step,
    props: { title: "构建" },
    children: "发布前先构建所有包。",
  },
  {
    name: "Step",
    component: Step,
    props: { title: "运行" },
    children: "启动示例应用。",
  },
];

export default defineDoc({
  id: "steps",
  name: "Steps",
  packageName: "willa/Steps",
  description: "带连续标记的步骤说明组件。",
  imports: [
    { name: "Step", from: "willa/Step" },
    { name: "Steps", from: "willa/Steps" },
  ],
  css: "willa/Steps.css",
  demo: {
    name: "Steps",
    component: Steps,
    props: { title: "项目准备", markerColor: "#2563eb" },
    children: steps,
  },
  props: [
    {
      name: "title",
      type: "ReactNode",
      description: "整组步骤或单个步骤的可选标题。",
    },
    {
      name: "markerColor",
      type: "string",
      description: "步骤标记的强调色。",
    },
    {
      name: "markerTextColor",
      type: "string",
      description: "步骤标记的文字颜色。",
    },
    {
      name: "direction",
      type: '"vertical" | "horizontal"',
      description: "步骤排列方向。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "步骤内容。",
    },
  ],
});
