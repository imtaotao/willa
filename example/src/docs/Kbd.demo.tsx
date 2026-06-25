import { Group } from "willa/Group";
import { Kbd, KbdShortcut } from "willa/Kbd";
import "willa/Group.css";
import "willa/Kbd.css";

import { defineDoc } from "#example/catalog/defineDoc";

function KbdPreview() {
  return (
    <p>
      按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
      关闭当前浮层。
    </p>
  );
}

export default defineDoc({
  id: "kbd",
  name: "Kbd",
  packageName: "willa/Kbd",
  description: "用于展示键盘按键、快捷键和命令提示的内联组件。",
  imports: [
    { name: "Kbd, KbdShortcut", from: "willa/Kbd" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/Kbd.css",
  demo: {
    name: "KbdPreview",
    component: KbdPreview,
  },
  code: `
    import { Kbd, KbdShortcut } from "willa/Kbd";
    import "willa/Kbd.css";

    <p>
      按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
      关闭当前浮层。
    </p>;
  `,
  sections: [
    {
      title: "基础按键",
      code: `
        <Group gap="sm">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </Group>
      ),
    },
    {
      title: "组合快捷键",
      code: `
        <Group gap="sm">
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </Group>
      ),
    },
    {
      title: "尺寸",
      code: `
        <Group gap="sm">
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </Group>
      ),
    },
    {
      title: "视觉类型",
      code: `
        <Group gap="sm">
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </Group>
      ),
    },
    {
      title: "正文使用",
      code: `
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>;
      `,
      content: (
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>
      ),
    },
  ],
  props: [
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "按键尺寸。",
    },
    {
      name: "variant",
      type: '"surface" | "outline"',
      defaultValue: '"surface"',
      description: "按键视觉类型。",
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
      description: "按键展示内容。",
    },
    {
      name: "KbdShortcut.keys",
      group: "KbdShortcut",
      type: "Array<ReactNode>",
      required: true,
      description: "KbdShortcut 组件渲染的组合按键列表。",
    },
    {
      name: "KbdShortcut.separator",
      group: "KbdShortcut",
      type: '"plus" | "none"',
      defaultValue: '"plus"',
      description: "KbdShortcut 组件的按键分隔方式。",
    },
  ],
});
