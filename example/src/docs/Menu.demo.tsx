import {
  CheckIcon,
  DotsHorizontalIcon,
  DownloadIcon,
  ExternalLinkIcon,
  GearIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { IconButton } from "willa/IconButton";
import { Menu, type MenuItem } from "willa/Menu";
import "willa/Button.css";
import "willa/IconButton.css";
import "willa/Menu.css";

import { defineDoc } from "#example/catalog/defineDoc";

const basicItems: Array<MenuItem> = [
  {
    value: "edit",
    label: "编辑内容",
    icon: <Pencil1Icon />,
  },
  {
    value: "export",
    label: "导出为 Markdown",
    icon: <DownloadIcon />,
    trailing: "⌘E",
  },
  {
    value: "open",
    label: "打开外部链接",
    icon: <ExternalLinkIcon />,
  },
  { type: "separator" },
  {
    value: "delete",
    label: "删除记录",
    icon: <TrashIcon />,
    danger: true,
  },
];

const aiItems: Array<MenuItem> = [
  {
    value: "draft",
    label: "生成草稿",
    description: "根据当前上下文补全文案。",
    icon: <Pencil1Icon />,
  },
  {
    value: "settings",
    label: "调整生成参数",
    description: "切换模型、语气和输出长度。",
    icon: <GearIcon />,
  },
  {
    value: "selected",
    label: "已选模式",
    description: "菜单项可以展示尾部状态。",
    trailing: <CheckIcon />,
  },
];

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

export default defineDoc({
  id: "menu",
  name: "Menu",
  packageName: "willa/Menu",
  description: "用于更多操作、模式切换和 AI 产品中的轻量动作菜单。",
  imports: [
    { name: "Menu", from: "willa/Menu" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/Menu.css",
  demo: {
    name: "Menu",
    component: Menu,
    props: {
      items: basicItems,
      trigger: (
        <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
          更多操作
        </Button>
      ),
    },
  },
  code: `
    import { DotsHorizontalIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { Menu } from "willa/Menu";
    import "willa/Button.css";
    import "willa/Menu.css";

    const items = [
      { value: "edit", label: "编辑内容", icon: <Pencil1Icon /> },
      { type: "separator" },
      { value: "delete", label: "删除记录", icon: <TrashIcon />, danger: true },
    ];

    <Menu
      items={items}
      trigger={
        <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
          更多操作
        </Button>
      }
    />
  `,
  sections: [
    {
      title: "基础菜单",
      content: (
        <div style={rowStyle}>
          <Menu
            items={basicItems}
            trigger={
              <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
                更多操作
              </Button>
            }
          />
          <Menu
            items={basicItems}
            size="sm"
            trigger={
              <IconButton
                ariaLabel="打开操作菜单"
                icon={<DotsHorizontalIcon />}
                variant="outline"
              />
            }
          />
        </div>
      ),
    },
    {
      title: "描述和状态",
      content: (
        <Menu
          items={aiItems}
          trigger={<Button variant="soft">AI 生成模式</Button>}
        />
      ),
    },
    {
      title: "对齐方式",
      content: (
        <div style={rowStyle}>
          <Menu
            align="start"
            items={basicItems}
            trigger={<Button variant="outline">左对齐</Button>}
          />
          <Menu
            align="center"
            items={basicItems}
            trigger={<Button variant="outline">居中</Button>}
          />
          <Menu
            align="end"
            items={basicItems}
            trigger={<Button variant="outline">右对齐</Button>}
          />
        </div>
      ),
    },
    {
      title: "禁用项",
      content: (
        <Menu
          items={[
            { value: "copy", label: "复制链接" },
            { value: "sync", label: "同步中", disabled: true },
            { value: "archive", label: "归档" },
          ]}
          trigger={<Button variant="outline">带禁用项</Button>}
        />
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<MenuItem>",
      required: true,
      description: "菜单项列表。",
    },
    {
      name: "trigger",
      type: "ReactElement",
      required: true,
      description: "触发菜单的元素，通常是 Button 或 IconButton。",
    },
    {
      name: "open",
      type: "boolean",
      description: "受控打开状态。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "非受控默认打开状态。",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "打开状态变化回调。",
    },
    {
      name: "onSelect",
      type: "(value: string) => void",
      description: "选择菜单项时触发。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "菜单尺寸。",
    },
    {
      name: "side",
      type: '"top" | "bottom"',
      description: "菜单相对触发元素的展开方向。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      description: "菜单和触发元素的对齐方式。",
    },
    {
      name: "offset",
      type: "number",
      description: "菜单与触发元素之间的距离。",
    },
    {
      name: "closeOnSelect",
      type: "boolean",
      description: "选择菜单项后是否关闭菜单，默认为 true。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "菜单的可访问性名称。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
    {
      name: "contentClassName",
      type: "string",
      description: "菜单浮层 className。",
    },
    {
      name: "MenuItem.value",
      type: "string",
      required: true,
      group: "MenuItem",
      description: "菜单项唯一值。",
    },
    {
      name: "MenuItem.label",
      type: "ReactNode",
      required: true,
      group: "MenuItem",
      description: "菜单项主文案。",
    },
    {
      name: "MenuItem.description",
      type: "ReactNode",
      group: "MenuItem",
      description: "菜单项补充说明。",
    },
    {
      name: "MenuItem.icon",
      type: "ReactNode",
      group: "MenuItem",
      description: "菜单项左侧图标。",
    },
    {
      name: "MenuItem.trailing",
      type: "ReactNode",
      group: "MenuItem",
      description: "菜单项右侧内容。",
    },
    {
      name: "MenuItem.disabled",
      type: "boolean",
      group: "MenuItem",
      description: "是否禁用菜单项。",
    },
    {
      name: "MenuItem.danger",
      type: "boolean",
      group: "MenuItem",
      description: "是否展示为危险操作。",
    },
    {
      name: "MenuItem.onSelect",
      type: "(value: string) => void",
      group: "MenuItem",
      description: "单个菜单项的选择回调。",
    },
  ],
});
