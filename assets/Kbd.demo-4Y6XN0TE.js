import{b0 as e,Y as r,a2 as t,a3 as s}from"./index-C3vletT3.js";/* empty css              */import{d}from"./defineDoc-D0J5gHWl.js";function c(){return e.jsxs("p",{children:["按 ",e.jsx(s,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(t,{children:"Esc"})," ","关闭当前浮层。"]})}const a=d({id:"kbd",name:"Kbd",packageName:"willa/Kbd",description:"用于展示键盘按键、快捷键和命令提示的内联组件。",imports:[{name:"Kbd, KbdShortcut",from:"willa/Kbd"},{name:"Group",from:"willa/Group"}],css:"willa/Kbd.css",demo:{name:"KbdPreview",component:c},code:`
    import { Kbd, KbdShortcut } from "willa/Kbd";
    import "willa/Kbd.css";

    <p>
      按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
      关闭当前浮层。
    </p>;
  `,sections:[{title:"基础按键",code:`
        <Group gap="sm">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </Group>;
      `,content:e.jsxs(r,{gap:"sm",children:[e.jsx(t,{children:"Esc"}),e.jsx(t,{children:"Tab"}),e.jsx(t,{children:"Enter"}),e.jsx(t,{children:"Space"})]})},{title:"组合快捷键",code:`
        <Group gap="sm">
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </Group>;
      `,content:e.jsxs(r,{gap:"sm",children:[e.jsx(s,{keys:["⌘","K"]}),e.jsx(s,{keys:["⌘","Shift","P"]}),e.jsx(s,{keys:["Ctrl","/"]})]})},{title:"尺寸",code:`
        <Group gap="sm">
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </Group>;
      `,content:e.jsxs(r,{gap:"sm",children:[e.jsx(t,{size:"sm",children:"Esc"}),e.jsx(t,{size:"md",children:"Esc"})]})},{title:"视觉类型",code:`
        <Group gap="sm">
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </Group>;
      `,content:e.jsxs(r,{gap:"sm",children:[e.jsx(t,{variant:"surface",children:"Enter"}),e.jsx(t,{variant:"outline",children:"Enter"})]})},{title:"正文使用",code:`
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>;
      `,content:e.jsxs("p",{children:["按 ",e.jsx(s,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(t,{children:"Esc"})," ","关闭当前浮层。"]})}],props:[{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"按键尺寸。"},{name:"variant",type:'"surface" | "outline"',defaultValue:'"surface"',description:"按键视觉类型。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",required:!0,description:"按键展示内容。"},{name:"KbdShortcut.keys",group:"KbdShortcut",type:"Array<ReactNode>",required:!0,description:"KbdShortcut 组件渲染的组合按键列表。"},{name:"KbdShortcut.separator",group:"KbdShortcut",type:'"plus" | "none"',defaultValue:'"plus"',description:"KbdShortcut 组件的按键分隔方式。"}]});export{a as default};
