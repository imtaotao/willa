import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { SiteFooter, type SiteFooterColumn } from "willa/SiteFooter";
import "willa/Button.css";
import "willa/Group.css";
import "willa/SiteFooter.css";

import { defineDoc } from "#example/catalog/defineDoc";

const footerColumns: Array<SiteFooterColumn> = [
  {
    title: "产品",
    links: [
      { label: "AI 组件", href: "#ai" },
      { label: "布局组件", href: "#layout" },
      { label: "表单组件", href: "#form" },
    ],
  },
  {
    title: "资源",
    links: [
      { label: "文档", href: "#docs" },
      { label: "示例", href: "#examples" },
      { label: "更新日志", href: "#changelog" },
    ],
  },
  {
    title: "社区",
    links: [
      { label: "GitHub", href: "https://github.com/imtaotao/willa" },
      { label: "反馈", href: "#feedback" },
    ],
  },
];

export default defineDoc({
  id: "site-footer",
  name: "SiteFooter",
  category: "widgets",
  packageName: "willa/SiteFooter",
  description: "用于产品站、文档站和内容站的页脚区域。",
  imports: [
    { name: "SiteFooter, type SiteFooterColumn", from: "willa/SiteFooter" },
    { name: "Button", from: "willa/Button" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/SiteFooter.css",
  demo: {
    name: "SiteFooter",
    component: SiteFooter,
    props: {
      brand: "Willa Components",
      description: "面向 AI 产品、文档站和内容平台的 React 组件库。",
      columns: footerColumns,
      copyright: "© 2026 Willa",
    },
  },
  code: `
    import { SiteFooter, type SiteFooterColumn } from "willa/SiteFooter";
    import "willa/SiteFooter.css";

    const columns: Array<SiteFooterColumn> = [
      {
        title: "产品",
        links: [
          { label: "AI 组件", href: "#ai" },
          { label: "布局组件", href: "#layout" },
          { label: "表单组件", href: "#form" },
        ],
      },
      {
        title: "资源",
        links: [
          { label: "文档", href: "#docs" },
          { label: "示例", href: "#examples" },
          { label: "更新日志", href: "#changelog" },
        ],
      },
    ];

    <SiteFooter
      brand="Willa Components"
      description="面向 AI 产品、文档站和内容平台的 React 组件库。"
      columns={columns}
      copyright="© 2026 Willa"
    />;
  `,
  sections: [
    {
      title: "带操作",
      code: `
        import { Button } from "willa/Button";
        import { Group } from "willa/Group";
        import { SiteFooter } from "willa/SiteFooter";
        import "willa/Button.css";
        import "willa/Group.css";
        import "willa/SiteFooter.css";

        <SiteFooter
          brand="Willa"
          description="快速搭建产品站和内容站。"
          actions={
            <Group gap="sm">
              <Button size="sm">开始使用</Button>
              <Button size="sm" variant="ghost">
                查看文档
              </Button>
            </Group>
          }
          links={[
            { label: "GitHub", href: "https://github.com/imtaotao/willa" },
            { label: "隐私", href: "#privacy" },
            { label: "状态", href: "#status" },
          ]}
        />;
      `,
      content: (
        <SiteFooter
          brand="Willa"
          description="快速搭建产品站和内容站。"
          actions={
            <Group gap="sm">
              <Button size="sm">开始使用</Button>
              <Button size="sm" variant="ghost">
                查看文档
              </Button>
            </Group>
          }
          links={[
            { label: "GitHub", href: "https://github.com/imtaotao/willa" },
            { label: "隐私", href: "#privacy" },
            { label: "状态", href: "#status" },
          ]}
        />
      ),
    },
  ],
  props: [
    {
      name: "brand",
      type: "ReactNode",
      description: "页脚品牌内容。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "品牌说明或站点描述。",
    },
    {
      name: "columns",
      type: "Array<SiteFooterColumn>",
      description: "多列链接分组。",
    },
    {
      name: "links",
      type: "Array<SiteFooterLink>",
      description: "底部辅助链接。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "自定义操作区。",
    },
    {
      name: "copyright",
      type: "ReactNode",
      description: "版权或备案信息。",
    },
    {
      name: "SiteFooterColumn.title",
      type: "ReactNode",
      required: true,
      group: "SiteFooterColumn",
      description: "链接分组标题。",
    },
    {
      name: "SiteFooterColumn.links",
      type: "Array<SiteFooterLink>",
      required: true,
      group: "SiteFooterColumn",
      description: "分组内链接列表。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
  ],
});
