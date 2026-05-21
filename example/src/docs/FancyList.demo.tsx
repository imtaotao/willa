import { FancyList } from "willa/FancyList";
import "willa/FancyList.css";

import { defineDoc } from "#example/catalog/defineDoc";

const items = [
  { title: "构建", content: "在 workspace 内运行 auklet 构建。" },
  { title: "样式", content: "和组件一起引入对应的 CSS。" },
  { title: "类型", content: "从每个组件入口使用具名导出。" },
];

export default defineDoc({
  id: "fancy-list",
  name: "FancyList",
  packageName: "willa/FancyList",
  description: "带标题的列表，适合流程说明、检查清单和重点摘录。",
  imports: [{ name: "FancyList", from: "willa/FancyList" }],
  css: "willa/FancyList.css",
  demo: {
    name: "FancyList",
    component: FancyList,
    props: { title: "发布检查清单", items },
  },
  props: [
    {
      name: "title",
      type: "ReactNode",
      description: "可选的列表标题。",
    },
    {
      name: "items",
      type: "FancyListItem[]",
      required: true,
      description: "包含标题和内容的列表项。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
  ],
});
