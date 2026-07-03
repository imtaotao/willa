import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{n as t,t as n}from"./Kbd-vhaMLBlc.js";import{t as r}from"./Group-C-JhzSsC.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var a=e();function o(){return(0,a.jsxs)(`p`,{children:[`按 `,(0,a.jsx)(t,{keys:[`⌘`,`K`]}),` 打开命令面板，或按 `,(0,a.jsx)(n,{children:`Esc`}),` `,`关闭当前浮层。`]})}var s=i({id:`kbd`,name:`Kbd`,packageName:`willa/Kbd`,description:`用于展示键盘按键、快捷键和命令提示的内联组件。`,imports:[{name:`Kbd, KbdShortcut`,from:`willa/Kbd`},{name:`Group`,from:`willa/Group`}],css:`willa/Kbd.css`,demo:{name:`KbdPreview`,component:o},code:`
    import { Kbd, KbdShortcut } from "willa/Kbd";
    import "willa/Kbd.css";

    <p>
      按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
      关闭当前浮层。
    </p>;
  `,sections:[{title:`基础按键`,code:`
        <Group gap="sm">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </Group>;
      `,content:(0,a.jsxs)(r,{gap:`sm`,children:[(0,a.jsx)(n,{children:`Esc`}),(0,a.jsx)(n,{children:`Tab`}),(0,a.jsx)(n,{children:`Enter`}),(0,a.jsx)(n,{children:`Space`})]})},{title:`组合快捷键`,code:`
        <Group gap="sm">
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </Group>;
      `,content:(0,a.jsxs)(r,{gap:`sm`,children:[(0,a.jsx)(t,{keys:[`⌘`,`K`]}),(0,a.jsx)(t,{keys:[`⌘`,`Shift`,`P`]}),(0,a.jsx)(t,{keys:[`Ctrl`,`/`]})]})},{title:`尺寸`,code:`
        <Group gap="sm">
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </Group>;
      `,content:(0,a.jsxs)(r,{gap:`sm`,children:[(0,a.jsx)(n,{size:`sm`,children:`Esc`}),(0,a.jsx)(n,{size:`md`,children:`Esc`})]})},{title:`视觉类型`,code:`
        <Group gap="sm">
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </Group>;
      `,content:(0,a.jsxs)(r,{gap:`sm`,children:[(0,a.jsx)(n,{variant:`surface`,children:`Enter`}),(0,a.jsx)(n,{variant:`outline`,children:`Enter`})]})},{title:`正文使用`,code:`
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>;
      `,content:(0,a.jsxs)(`p`,{children:[`按 `,(0,a.jsx)(t,{keys:[`⌘`,`K`]}),` 打开命令面板，或按 `,(0,a.jsx)(n,{children:`Esc`}),` `,`关闭当前浮层。`]})}],props:[{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`按键尺寸。`},{name:`variant`,type:`"surface" | "outline"`,defaultValue:`"surface"`,description:`按键视觉类型。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,required:!0,description:`按键展示内容。`},{name:`KbdShortcut.keys`,group:`KbdShortcut`,type:`Array<ReactNode>`,required:!0,description:`KbdShortcut 组件渲染的组合按键列表。`},{name:`KbdShortcut.separator`,group:`KbdShortcut`,type:`"plus" | "none"`,defaultValue:`"plus"`,description:`KbdShortcut 组件的按键分隔方式。`}]});export{s as default};