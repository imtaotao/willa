import { Button } from "willa/Button";
import { SiteNav, type SiteNavItem } from "willa/SiteNav";
import "willa/Button.css";
import "willa/SiteNav.css";

import { defineDoc } from "#example/catalog/defineDoc";

const navItems: Array<SiteNavItem> = [
  { label: "产品", href: "#product", active: true },
  { label: "组件", href: "#components" },
  { label: "文档", href: "#docs" },
  { label: "价格", href: "#pricing" },
];

export default defineDoc({
  id: "site-nav",
  name: "SiteNav",
  category: "widgets",
  packageName: "willa/SiteNav",
  description: "用于产品站、文档站和内容站的顶部导航。",
  imports: [
    { name: "SiteNav, type SiteNavItem", from: "willa/SiteNav" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/SiteNav.css",
  demo: {
    name: "SiteNav",
    component: SiteNav,
    props: {
      brand: "Willa",
      brandHref: "#",
      logo: "W",
      items: navItems,
      actions: (
        <Button size="sm" variant="soft">
          开始使用
        </Button>
      ),
    },
  },
  code: `
    import { Button } from "willa/Button";
    import { SiteNav, type SiteNavItem } from "willa/SiteNav";
    import "willa/Button.css";
    import "willa/SiteNav.css";

    const items: Array<SiteNavItem> = [
      { label: "产品", href: "#product", active: true },
      { label: "组件", href: "#components" },
      { label: "文档", href: "#docs" },
      { label: "价格", href: "#pricing" },
    ];

    <SiteNav
      brand="Willa"
      brandHref="#"
      logo="W"
      items={items}
      actions={
        <Button size="sm" variant="soft">
          开始使用
        </Button>
      }
    />;
  `,
  sections: [
    {
      title: "吸顶导航",
      code: `
        <SiteNav
          sticky
          brand="Willa Docs"
          brandHref="#"
          items={[
            { label: "指南", href: "#guide", active: true },
            { label: "组件", href: "#components" },
            { label: "更新", href: "#changelog" },
          ]}
        />;
      `,
      content: (
        <SiteNav
          sticky
          brand="Willa Docs"
          brandHref="#"
          items={[
            { label: "指南", href: "#guide", active: true },
            { label: "组件", href: "#components" },
            { label: "更新", href: "#changelog" },
          ]}
        />
      ),
    },
  ],
  props: [
    {
      name: "brand",
      type: "ReactNode",
      required: true,
      description: "品牌名称或自定义品牌内容。",
    },
    {
      name: "brandHref",
      type: "string",
      defaultValue: '"/"',
      description: "点击品牌区域跳转的地址。",
    },
    {
      name: "logo",
      type: "ReactNode",
      description: "品牌标识。",
    },
    {
      name: "items",
      type: "Array<SiteNavItem>",
      description: "导航链接列表。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "右侧操作区。",
    },
    {
      name: "sticky",
      type: "boolean",
      defaultValue: "false",
      description: "是否吸附在页面顶部。",
    },
    {
      name: "SiteNavItem.label",
      type: "ReactNode",
      required: true,
      group: "SiteNavItem",
      description: "导航项文案。",
    },
    {
      name: "SiteNavItem.href",
      type: "string",
      required: true,
      group: "SiteNavItem",
      description: "导航项链接。",
    },
    {
      name: "SiteNavItem.active",
      type: "boolean",
      defaultValue: "false",
      group: "SiteNavItem",
      description: "当前导航项是否选中。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
  ],
});
