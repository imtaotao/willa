import { unindent } from "aidly";
import { Anchor } from "willa/Anchor";
import { Stack } from "willa/Stack";
import "willa/Anchor.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const anchorItems = [
  { id: "anchor-overview", title: "概览" },
  {
    id: "anchor-usage",
    title: "使用方式",
    children: [
      { id: "anchor-basic", title: "基础用法" },
      { id: "anchor-nested", title: "嵌套目录" },
    ],
  },
  { id: "anchor-api", title: "API" },
];

const AnchorPreview = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "14rem minmax(0, 1fr)",
      gap: "1rem",
      maxWidth: "48rem",
    }}
  >
    <Anchor items={anchorItems} defaultActiveId="anchor-overview" />
    <Stack gap="lg">
      <section id="anchor-overview">
        <h3>概览</h3>
        <p>Anchor 适合长文档、配置页和详情页目录。</p>
      </section>
      <section id="anchor-usage">
        <h3>使用方式</h3>
        <p>点击目录会滚动到对应区域，并同步 active 状态。</p>
      </section>
      <section id="anchor-basic">
        <h3>基础用法</h3>
        <p>默认使用 #id 定位，也可以给条目传 href。</p>
      </section>
      <section id="anchor-nested">
        <h3>嵌套目录</h3>
        <p>children 用于展示二级目录。</p>
      </section>
      <section id="anchor-api">
        <h3>API</h3>
        <p>支持受控 activeId、offsetTop 和点击回调。</p>
      </section>
    </Stack>
  </div>
);

export default defineDoc({
  id: "anchor",
  name: "Anchor",
  category: "content",
  packageName: "willa/Anchor",
  description: "用于长页面目录导航和锚点定位。",
  imports: [{ name: "Anchor", from: "willa/Anchor" }],
  css: "willa/Anchor.css",
  demo: {
    name: "AnchorPreview",
    component: AnchorPreview,
  },
  code: unindent(`
    import { Anchor } from "willa/Anchor";
    import "willa/Anchor.css";

    const items = [
      { id: "overview", title: "概览" },
      {
        id: "usage",
        title: "使用方式",
        children: [{ id: "basic", title: "基础用法" }],
      },
    ];

    <Anchor items={items} defaultActiveId="overview" />
  `),
  props: [
    {
      name: "items",
      type: "Array<AnchorItem>",
      required: true,
      description: "目录项。",
    },
    { name: "activeId", type: "string", description: "受控激活项 id。" },
    { name: "defaultActiveId", type: "string", description: "默认激活项 id。" },
    {
      name: "offsetTop",
      type: "number",
      defaultValue: "0",
      description: "滚动监听时距离视口顶部的偏移。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "尺寸。",
    },
    {
      name: "sticky",
      type: "boolean",
      defaultValue: "false",
      description: "是否使用 sticky 定位。",
    },
    {
      name: "showMarker",
      type: "boolean",
      defaultValue: "true",
      description: "是否显示激活标记。",
    },
    {
      name: "onActiveChange",
      type: "(id: string) => void",
      description: "激活项变化回调。",
    },
    {
      name: "onItemClick",
      type: "(item: AnchorItem, event: MouseEvent<HTMLAnchorElement>) => void",
      description: "目录项点击回调。",
    },
  ],
});
