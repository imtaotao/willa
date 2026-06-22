import { TreeSelect, type TreeSelectItem } from "willa/TreeSelect";
import "willa/TreeSelect.css";

import { defineDoc } from "#example/catalog/defineDoc";

const treeItems: Array<TreeSelectItem> = [
  {
    value: "workspace",
    label: "工作区",
    description: "团队共享资源",
    children: [
      {
        value: "workspace-docs",
        label: "产品文档",
        description: "PRD、设计稿和上线记录",
      },
      {
        value: "workspace-data",
        label: "数据报表",
        description: "用户反馈、埋点和业务指标",
      },
    ],
  },
  {
    value: "knowledge",
    label: "知识库",
    description: "AI 可检索资料",
    children: [
      {
        value: "knowledge-component",
        label: "组件规范",
        description: "Willa 组件设计和 API 约定",
      },
      {
        value: "knowledge-style",
        label: "样式规则",
        description: "主题变量、CSS 和移动端规则",
      },
    ],
  },
];

const treeItemsDeep: Array<TreeSelectItem> = [
  {
    value: "docs",
    label: "文档中心",
    description: "面向产品、设计和研发的内容入口",
    children: [
      {
        value: "docs-guides",
        label: "指南",
        description: "安装、迁移和接入说明",
        children: [
          {
            value: "docs-guides-install",
            label: "安装与使用",
            description: "项目接入和运行时说明",
          },
          {
            value: "docs-guides-migration",
            label: "迁移清单",
            description: "替换旧组件时的检查项",
          },
        ],
      },
      {
        value: "docs-releases",
        label: "发布记录",
        description: "版本、变更和发布时间线",
      },
    ],
  },
  {
    value: "assets",
    label: "资源库",
    description: "可复用的素材与附件",
    children: [
      {
        value: "assets-images",
        label: "图片",
        description: "截图、插图和封面",
      },
      {
        value: "assets-files",
        label: "文件",
        description: "PDF、CSV 和文档附件",
      },
    ],
  },
];

const treeSelectPreviewStyle = {
  display: "grid",
  gap: "0.8rem",
  width: "min(100%, 30rem)",
} as const;

const centerStyle = {
  display: "grid",
  justifyItems: "center",
  gap: "0.9rem",
} as const;

const stackStyle = {
  display: "grid",
  gap: "0.8rem",
  width: "min(100%, 30rem)",
} as const;

export default defineDoc({
  id: "tree-select",
  name: "TreeSelect",
  category: "form",
  packageName: "willa/TreeSelect",
  description:
    "用于从层级数据中选择目录、组织、分类或知识库节点；需要级联式路径展示时可配合 leafOnly 和 showPath。",
  imports: [{ name: "TreeSelect", from: "willa/TreeSelect" }],
  css: "willa/TreeSelect.css",
  demo: {
    name: "TreeSelect",
    component: TreeSelect,
    props: {
      items: treeItems,
      defaultExpandedValues: ["workspace", "knowledge"],
      defaultValue: "knowledge-component",
      width: "min(100%, 30rem)",
    },
  },
  code: `
    import { TreeSelect, type TreeSelectItem } from "willa/TreeSelect";
    import "willa/TreeSelect.css";

    const items: Array<TreeSelectItem> = [
      {
        value: "knowledge",
        label: "知识库",
        children: [
          { value: "component", label: "组件规范" },
          { value: "style", label: "样式规则" },
        ],
      },
    ];

    <TreeSelect
      items={items}
      defaultExpandedValues={["knowledge"]}
      defaultValue="component"
    />;
  `,
  sections: [
    {
      title: "基础示例",
      code: `
        <TreeSelect
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <TreeSelect
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="knowledge-component"
            width="min(100%, 30rem)"
          />
        </div>
      ),
    },
    {
      title: "三层级缩进",
      code: `
        <TreeSelect
          items={treeItemsDeep}
          showPath
          defaultExpandedValues={["docs", "docs-guides", "assets"]}
          defaultValue="docs-guides-install"
          width="min(100%, 30rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <TreeSelect
            items={treeItemsDeep}
            showPath
            defaultExpandedValues={["docs", "docs-guides", "assets"]}
            defaultValue="docs-guides-install"
            width="min(100%, 30rem)"
          />
        </div>
      ),
    },
    {
      title: "多选目录",
      code: `
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <TreeSelect
            clearable
            mode="multiple"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue={["workspace-docs", "knowledge-style"]}
            width="min(100%, 30rem)"
          />
        </div>
      ),
    },
    {
      title: "尺寸与外观",
      code: `
        <div style={treeSelectPreviewStyle}>
          <TreeSelect
            size="sm"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="workspace-docs"
            width="100%"
          />
          <TreeSelect
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="knowledge-component"
            width="100%"
          />
          <TreeSelect
            size="lg"
            variant="soft"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="workspace-data"
            width="100%"
          />
        </div>;
      `,
      content: (
        <div style={centerStyle}>
          <div style={treeSelectPreviewStyle}>
            <TreeSelect
              size="sm"
              items={treeItems}
              defaultExpandedValues={["workspace", "knowledge"]}
              defaultValue="workspace-docs"
              width="100%"
            />
            <TreeSelect
              items={treeItems}
              defaultExpandedValues={["workspace", "knowledge"]}
              defaultValue="knowledge-component"
              width="100%"
            />
            <TreeSelect
              size="lg"
              variant="soft"
              items={treeItems}
              defaultExpandedValues={["workspace", "knowledge"]}
              defaultValue="workspace-data"
              width="100%"
            />
          </div>
        </div>
      ),
    },
    {
      title: "级联分类",
      code: `
        <TreeSelect
          items={treeItems}
          leafOnly
          showPath
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <TreeSelect
            items={treeItems}
            leafOnly
            showPath
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="knowledge-component"
            width="min(100%, 30rem)"
          />
        </div>
      ),
    },
    {
      title: "自定义值展示",
      code: `
        <TreeSelect
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-component"]}
          renderValue={(items) => \`已选择 \${items.length} 个节点\`}
          width="min(100%, 30rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <TreeSelect
            mode="multiple"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue={["workspace-docs", "knowledge-component"]}
            renderValue={(items) => `已选择 ${items.length} 个节点`}
            width="min(100%, 30rem)"
          />
        </div>
      ),
    },
    {
      title: "状态",
      code: `
        <div style={stackStyle}>
          <TreeSelect items={treeItems} placeholder="选择资料范围" width="100%" />
          <TreeSelect
            invalid
            items={treeItems}
            placeholder="请选择必填项"
            width="100%"
          />
          <TreeSelect disabled items={treeItems} defaultValue="workspace" width="100%" />
        </div>;
      `,
      content: (
        <div style={centerStyle}>
          <div style={stackStyle}>
            <TreeSelect
              items={treeItems}
              placeholder="选择资料范围"
              width="100%"
            />
            <TreeSelect
              invalid
              items={treeItems}
              placeholder="请选择必填项"
              width="100%"
            />
            <TreeSelect
              disabled
              items={treeItems}
              defaultValue="workspace"
              width="100%"
            />
          </div>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<TreeSelectItem>",
      required: true,
      description: "树形节点列表，节点可包含 children。",
    },
    {
      name: "mode",
      type: '"single" | "multiple"',
      defaultValue: '"single"',
      description: "选择模式，默认单选。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "选择器尺寸。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      defaultValue: '"outline"',
      description: "选择器外观变体。",
    },
    {
      name: "searchable",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示搜索输入框，默认开启。",
    },
    {
      name: "leafOnly",
      type: "boolean",
      defaultValue: "false",
      description: "是否只允许选择叶子节点，非叶子节点点击时仅展开/收起。",
    },
    {
      name: "showPath",
      type: "boolean",
      defaultValue: "false",
      description: "是否在触发器中显示完整路径。",
    },
    {
      name: "clearable",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许清空当前选择。",
    },
    {
      name: "defaultExpandedValues",
      type: "Array<string>",
      defaultValue: "[]",
      description: "默认展开的节点 value。",
    },
    {
      name: "value",
      type: "string | Array<string>",
      description: "受控选中值。",
    },
    {
      name: "defaultValue",
      type: "string | Array<string>",
      defaultValue: 'mode === "multiple" ? [] : ""',
      description: "默认选中值。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义选择器宽度。",
    },
    {
      name: "renderValue",
      type: "(items: Array<TreeSelectItem>) => ReactNode",
      description: "自定义触发器里的选中值展示。",
    },
    {
      name: "onValueChange",
      type: "(value: string | Array<string>, items: Array<TreeSelectItem>) => void",
      description: "选择变化时触发。",
    },
  ],
});
