import { LogoWall, type LogoWallItem } from "willa/LogoWall";
import "willa/LogoWall.css";

import { defineDoc } from "#example/catalog/defineDoc";

const partnerItems: Array<LogoWallItem> = [
  {
    name: "Northstar",
    logo: "N",
    description: "AI 工作台",
    href: "https://example.com",
  },
  {
    name: "CanvasLab",
    logo: "C",
    description: "内容协作",
  },
  {
    name: "Orbit",
    logo: "O",
    description: "数据分析",
  },
  {
    name: "Willa Cloud",
    logo: "W",
    description: "组件平台",
  },
];

export default defineDoc({
  id: "logo-wall",
  name: "LogoWall",
  category: "widgets",
  packageName: "willa/LogoWall",
  description: "用于展示客户、合作伙伴、集成平台或品牌生态的标识墙。",
  imports: [{ name: "LogoWall, type LogoWallItem", from: "willa/LogoWall" }],
  css: "willa/LogoWall.css",
  demo: {
    name: "LogoWall",
    component: LogoWall,
    props: {
      title: "合作生态",
      description: "展示产品集成、合作伙伴和客户标识。",
      items: partnerItems,
    },
  },
  code: `
    import { LogoWall, type LogoWallItem } from "willa/LogoWall";
    import "willa/LogoWall.css";

    const items: Array<LogoWallItem> = [
      {
        name: "Northstar",
        logo: "N",
        description: "AI 工作台",
        href: "https://example.com",
      },
      { name: "CanvasLab", logo: "C", description: "内容协作" },
      { name: "Orbit", logo: "O", description: "数据分析" },
      { name: "Willa Cloud", logo: "W", description: "组件平台" },
    ];

    <LogoWall
      title="合作生态"
      description="展示产品集成、合作伙伴和客户标识。"
      items={items}
    />;
  `,
  sections: [
    {
      title: "紧凑展示",
      code: `
        const items: Array<LogoWallItem> = [
          { name: "Docs", logo: "D" },
          { name: "Studio", logo: "S" },
          { name: "Console", logo: "C" },
          { name: "Agent", logo: "A" },
          { name: "Data", logo: "D" },
          { name: "Search", logo: "S" },
        ];

        <LogoWall items={items} columns={6} muted />;
      `,
      content: (
        <LogoWall
          items={[
            { name: "Docs", logo: "D" },
            { name: "Studio", logo: "S" },
            { name: "Console", logo: "C" },
            { name: "Agent", logo: "A" },
            { name: "Data", logo: "D" },
            { name: "Search", logo: "S" },
          ]}
          columns={6}
          muted
        />
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<LogoWallItem>",
      required: true,
      description: "标识项列表。",
    },
    {
      name: "columns",
      type: "2 | 3 | 4 | 5 | 6",
      defaultValue: "4",
      description: "桌面端列数，窄屏会自动收敛。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "标识墙标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标识墙说明。",
    },
    {
      name: "muted",
      type: "boolean",
      defaultValue: "false",
      description: "降低图片标识饱和度，适合弱品牌露出。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义类名。",
    },
    {
      name: "LogoWallItem.name",
      type: "string",
      required: true,
      group: "LogoWallItem",
      description: "标识名称。",
    },
    {
      name: "LogoWallItem.logo",
      type: "ReactNode",
      group: "LogoWallItem",
      description: "自定义标识内容，优先级高于 src。",
    },
    {
      name: "LogoWallItem.src",
      type: "string",
      group: "LogoWallItem",
      description: "图片标识地址。",
    },
    {
      name: "LogoWallItem.href",
      type: "string",
      group: "LogoWallItem",
      description: "点击跳转地址。",
    },
    {
      name: "LogoWallItem.target",
      type: "string",
      group: "LogoWallItem",
      description: "链接打开目标。",
    },
    {
      name: "LogoWallItem.rel",
      type: "string",
      group: "LogoWallItem",
      description: "链接 rel 属性。",
    },
    {
      name: "LogoWallItem.description",
      type: "ReactNode",
      group: "LogoWallItem",
      description: "标识辅助说明。",
    },
  ],
});
