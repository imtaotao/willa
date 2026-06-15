import { useState } from "react";
import {
  ArchiveIcon,
  FileTextIcon,
  GearIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Stack } from "willa/Stack";
import { Tree, type TreeItem, type TreeKey } from "willa/Tree";
import "willa/Badge.css";
import "willa/Stack.css";
import "willa/Tree.css";

import { defineDoc } from "#example/catalog/defineDoc";

const treeItems: Array<TreeItem> = [
  {
    key: "workspace",
    title: "工作区",
    description: "团队共享资源",
    icon: <ArchiveIcon />,
    children: [
      {
        key: "product",
        title: "产品文档",
        description: "PRD、设计稿和上线记录",
        icon: <FileTextIcon />,
      },
      {
        key: "report",
        title: "数据报表",
        description: "用户反馈、埋点和业务指标",
        icon: <FileTextIcon />,
      },
    ],
  },
  {
    key: "knowledge",
    title: "知识库",
    description: "AI 可检索资料",
    icon: <ArchiveIcon />,
    children: [
      {
        key: "component",
        title: "组件规范",
        description: "Willa 组件设计和 API 约定",
        icon: <FileTextIcon />,
      },
      {
        key: "style",
        title: "样式规则",
        description: "主题变量、CSS 和移动端规则",
        icon: <FileTextIcon />,
      },
    ],
  },
];

const permissionItems: Array<TreeItem> = [
  {
    key: "project",
    title: "项目权限",
    icon: <LockClosedIcon />,
    children: [
      { key: "project-read", title: "查看项目" },
      { key: "project-write", title: "编辑项目" },
      { key: "project-delete", title: "删除项目", disabled: true },
    ],
  },
  {
    key: "model",
    title: "模型权限",
    icon: <GearIcon />,
    children: [
      { key: "model-read", title: "查看模型" },
      { key: "model-run", title: "调用模型" },
      { key: "model-admin", title: "管理模型" },
    ],
  },
];

const ControlledTreeDemo = () => {
  const [expandedKeys, setExpandedKeys] = useState<Array<TreeKey>>([
    "workspace",
  ]);
  const [selectedKeys, setSelectedKeys] = useState<Array<TreeKey>>(["product"]);

  return (
    <Stack gap="sm" style={{ width: "min(100%, 32rem)" }}>
      <Tree
        items={treeItems}
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        onExpandedChange={setExpandedKeys}
        onSelectedChange={setSelectedKeys}
      />
      <Badge size="sm">当前选择：{selectedKeys.join("、") || "无"}</Badge>
    </Stack>
  );
};

export default defineDoc({
  id: "tree",
  name: "Tree",
  packageName: "willa/Tree",
  description: "用于展示和操作层级数据，支持展开、选择、勾选和自定义节点内容。",
  imports: [
    { name: "Badge", from: "willa/Badge" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Tree", from: "willa/Tree" },
  ],
  css: "willa/Tree.css",
  demo: {
    name: "Tree",
    component: Tree,
    props: {
      items: treeItems,
      defaultExpandAll: true,
      style: { width: "min(100%, 32rem)" },
    },
  },
  code: `
    import { Tree, type TreeItem } from "willa/Tree";
    import "willa/Tree.css";

    const items: Array<TreeItem> = [
      {
        key: "workspace",
        title: "工作区",
        description: "团队共享资源",
        children: [
          { key: "product", title: "产品文档" },
          { key: "report", title: "数据报表" },
        ],
      },
      {
        key: "knowledge",
        title: "知识库",
        description: "AI 可检索资料",
        children: [
          { key: "component", title: "组件规范" },
          { key: "style", title: "样式规则" },
        ],
      },
    ];

    <Tree
      items={items}
      defaultExpandAll
      style={{ width: "min(100%, 32rem)" }}
    />;
  `,
  sections: [
    {
      title: "受控状态",
      code: `
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Stack } from "willa/Stack";
        import { Tree, type TreeItem, type TreeKey } from "willa/Tree";
        import "willa/Badge.css";
        import "willa/Stack.css";
        import "willa/Tree.css";

        const items: Array<TreeItem> = [
          {
            key: "workspace",
            title: "工作区",
            children: [
              { key: "product", title: "产品文档" },
              { key: "report", title: "数据报表" },
            ],
          },
        ];

        const Demo = () => {
          const [expandedKeys, setExpandedKeys] = useState<Array<TreeKey>>(["workspace"]);
          const [selectedKeys, setSelectedKeys] = useState<Array<TreeKey>>(["product"]);

          return (
            <Stack gap="sm" style={{ width: "min(100%, 32rem)" }}>
              <Tree
                items={items}
                expandedKeys={expandedKeys}
                selectedKeys={selectedKeys}
                onExpandedChange={setExpandedKeys}
                onSelectedChange={setSelectedKeys}
              />
              <Badge size="sm">当前选择：{selectedKeys.join("、") || "无"}</Badge>
            </Stack>
          );
        };
      `,
      content: <ControlledTreeDemo />,
    },
    {
      title: "勾选节点",
      code: `
        import { Tree, type TreeItem } from "willa/Tree";
        import "willa/Tree.css";

        const items: Array<TreeItem> = [
          {
            key: "project",
            title: "项目权限",
            children: [
              { key: "project-read", title: "查看项目" },
              { key: "project-write", title: "编辑项目" },
              { key: "project-delete", title: "删除项目", disabled: true },
            ],
          },
          {
            key: "model",
            title: "模型权限",
            children: [
              { key: "model-read", title: "查看模型" },
              { key: "model-run", title: "调用模型" },
              { key: "model-admin", title: "管理模型" },
            ],
          },
        ];

        <Tree
          items={items}
          checkable
          defaultExpandAll
          defaultCheckedKeys={["project-read", "model-run"]}
          style={{ width: "min(100%, 32rem)" }}
        />;
      `,
      content: (
        <Tree
          items={permissionItems}
          checkable
          defaultExpandAll
          defaultCheckedKeys={["project-read", "model-run"]}
          style={{ width: "min(100%, 32rem)" }}
        />
      ),
    },
    {
      title: "自定义节点",
      code: `
        import { Badge } from "willa/Badge";
        import { Tree, type TreeItem } from "willa/Tree";
        import "willa/Badge.css";
        import "willa/Tree.css";

        const items: Array<TreeItem> = [
          {
            key: "agent",
            title: "Agent 配置",
            description: "模型、工具和权限",
            meta: "3 项",
            children: [
              { key: "prompt", title: "系统提示词", meta: "已发布" },
              { key: "tools", title: "工具调用", meta: "需要审核" },
            ],
          },
        ];

        <Tree
          items={items}
          defaultExpandAll
          renderExtra={({ leaf }) => (
            leaf ? <Badge size="sm" tone="success">可编辑</Badge> : null
          )}
          style={{ width: "min(100%, 34rem)" }}
        />;
      `,
      content: (
        <Tree
          items={[
            {
              key: "agent",
              title: "Agent 配置",
              description: "模型、工具和权限",
              meta: "3 项",
              children: [
                { key: "prompt", title: "系统提示词", meta: "已发布" },
                { key: "tools", title: "工具调用", meta: "需要审核" },
              ],
            },
          ]}
          defaultExpandAll
          renderExtra={({ leaf }) =>
            leaf ? (
              <Badge size="sm" tone="success">
                可编辑
              </Badge>
            ) : null
          }
          style={{ width: "min(100%, 34rem)" }}
        />
      ),
    },
  ],
  props: [
    {
      name: "items *",
      type: "Array<TreeItem>",
      description: "树节点数据。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "节点尺寸。",
    },
    {
      name: "expandedKeys",
      type: "Array<TreeKey>",
      description: "受控展开节点。",
    },
    {
      name: "defaultExpandedKeys",
      type: "Array<TreeKey>",
      defaultValue: "[]",
      description: "默认展开节点。",
    },
    {
      name: "selectedKeys",
      type: "Array<TreeKey>",
      description: "受控选中节点。",
    },
    {
      name: "defaultSelectedKeys",
      type: "Array<TreeKey>",
      defaultValue: "[]",
      description: "默认选中节点。",
    },
    {
      name: "checkedKeys",
      type: "Array<TreeKey>",
      description: "受控勾选节点。",
    },
    {
      name: "defaultCheckedKeys",
      type: "Array<TreeKey>",
      defaultValue: "[]",
      description: "默认勾选节点。",
    },
    {
      name: "selectionMode",
      type: '"single" | "multiple"',
      defaultValue: '"single"',
      description: "选择模式。",
    },
    {
      name: "checkStrategy",
      type: '"cascade" | "strict"',
      defaultValue: '"cascade"',
      description: "勾选策略。cascade 会联动子节点，strict 只影响当前节点。",
    },
    {
      name: "selectable",
      type: "boolean",
      defaultValue: "true",
      description: "是否允许点击选择节点。",
    },
    {
      name: "checkable",
      type: "boolean",
      defaultValue: "false",
      description: "是否显示勾选控件。",
    },
    {
      name: "showLine",
      type: "boolean",
      defaultValue: "false",
      description: "是否显示层级辅助线。",
    },
    {
      name: "expandOnClick",
      type: "boolean",
      defaultValue: "false",
      description: "点击整行时是否展开或收起目录节点。",
    },
    {
      name: "defaultExpandAll",
      type: "boolean",
      defaultValue: "false",
      description: "是否默认展开所有可展开节点。",
    },
    {
      name: "renderTitle",
      type: "(info: TreeItemRenderInfo) => ReactNode",
      description: "自定义节点标题。",
    },
    {
      name: "renderIcon",
      type: "(info: TreeItemRenderInfo) => ReactNode",
      description: "自定义节点图标。",
    },
    {
      name: "renderExtra",
      type: "(info: TreeItemRenderInfo) => ReactNode",
      description: "自定义节点右侧内容。",
    },
    {
      name: "onExpandedChange",
      type: "(keys: Array<TreeKey>, info: TreeChangeInfo) => void",
      description: "展开状态变化时触发。",
    },
    {
      name: "onSelectedChange",
      type: "(keys: Array<TreeKey>, info: TreeChangeInfo) => void",
      description: "选择状态变化时触发。",
    },
    {
      name: "onCheckedChange",
      type: "(keys: Array<TreeKey>, info: TreeChangeInfo) => void",
      description: "勾选状态变化时触发。",
    },
    {
      name: "TreeItem.key *",
      type: "TreeKey",
      group: "TreeItem",
      description: "节点唯一标识。",
    },
    {
      name: "TreeItem.title *",
      type: "ReactNode",
      group: "TreeItem",
      description: "节点标题。",
    },
    {
      name: "TreeItem.children",
      type: "Array<TreeItem>",
      group: "TreeItem",
      description: "子节点。",
    },
    {
      name: "TreeItem.description",
      type: "ReactNode",
      group: "TreeItem",
      description: "节点说明。",
    },
    {
      name: "TreeItem.meta",
      type: "ReactNode",
      group: "TreeItem",
      description: "节点右侧元信息。",
    },
    {
      name: "TreeItem.icon",
      type: "ReactNode",
      group: "TreeItem",
      description: "节点图标。",
    },
    {
      name: "TreeItem.extra",
      type: "ReactNode",
      group: "TreeItem",
      description: "节点右侧自定义操作或状态。",
    },
    {
      name: "TreeItem.disabled",
      type: "boolean",
      group: "TreeItem",
      description: "禁用当前节点。",
    },
  ],
});
