import { Kbd, KbdShortcut } from "willa/Kbd";
import "willa/Kbd.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.5rem",
} as const;

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
  imports: [{ name: "Kbd, KbdShortcut", from: "willa/Kbd" }],
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
        <div style={rowStyle}>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </div>
      ),
    },
    {
      title: "组合快捷键",
      code: `
        <div style={rowStyle}>
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={rowStyle}>
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </div>
      ),
    },
    {
      title: "视觉类型",
      code: `
        <div style={rowStyle}>
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </div>
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
      description: "按键尺寸。",
    },
    {
      name: "variant",
      type: '"surface" | "outline"',
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
      name: "keys",
      type: "Array<ReactNode>",
      required: true,
      description: "KbdShortcut 组件渲染的组合按键列表。",
    },
    {
      name: "separator",
      type: '"plus" | "none"',
      description: "KbdShortcut 组件的按键分隔方式。",
    },
  ],
});
