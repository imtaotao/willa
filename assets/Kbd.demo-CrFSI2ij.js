import{au as e,ak as b,aw as h,K as i}from"./index-VEztyUnl.js";/* empty css              */import{d as j}from"./defineDoc-fv-G_8j9.js";function s(r){const{size:t="md",variant:c="surface",className:o,children:n,...l}=r;return e.jsx("kbd",{...l,className:b("willa-kbd",`willa-kbd--${t}`,`willa-kbd--${c}`,o),children:n})}function d(r){const{keys:t,size:c="md",variant:o="surface",separator:n="plus",ariaLabel:l,className:u,...m}=r,K=l??t.map(a=>typeof a=="string"||typeof a=="number"?a:"").filter(Boolean).join(" + ");return e.jsx("span",{...m,className:b("willa-kbd-shortcut",n==="none"&&"willa-kbd-shortcut--no-separator",u),"aria-label":K||void 0,children:t.map((a,p)=>e.jsxs(h.Fragment,{children:[p>0&&n==="plus"?e.jsx("span",{className:"willa-kbd-shortcut-separator","aria-hidden":"true",children:"+"}):null,e.jsx(s,{size:c,variant:o,children:a})]},x(a,p)))})}const x=(r,t)=>typeof r=="string"||typeof r=="number"?`${r}-${t}`:String(t);function f(){return e.jsxs("p",{children:["按 ",e.jsx(d,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(s,{children:"Esc"})," ","关闭当前浮层。"]})}const S=j({id:"kbd",name:"Kbd",packageName:"willa/Kbd",description:"用于展示键盘按键、快捷键和命令提示的内联组件。",imports:[{name:"Kbd, KbdShortcut",from:"willa/Kbd"},{name:"Group",from:"willa/Group"}],css:"willa/Kbd.css",demo:{name:"KbdPreview",component:f},code:`
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
      `,content:e.jsxs(i,{gap:"sm",children:[e.jsx(s,{children:"Esc"}),e.jsx(s,{children:"Tab"}),e.jsx(s,{children:"Enter"}),e.jsx(s,{children:"Space"})]})},{title:"组合快捷键",code:`
        <Group gap="sm">
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </Group>;
      `,content:e.jsxs(i,{gap:"sm",children:[e.jsx(d,{keys:["⌘","K"]}),e.jsx(d,{keys:["⌘","Shift","P"]}),e.jsx(d,{keys:["Ctrl","/"]})]})},{title:"尺寸",code:`
        <Group gap="sm">
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </Group>;
      `,content:e.jsxs(i,{gap:"sm",children:[e.jsx(s,{size:"sm",children:"Esc"}),e.jsx(s,{size:"md",children:"Esc"})]})},{title:"视觉类型",code:`
        <Group gap="sm">
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </Group>;
      `,content:e.jsxs(i,{gap:"sm",children:[e.jsx(s,{variant:"surface",children:"Enter"}),e.jsx(s,{variant:"outline",children:"Enter"})]})},{title:"正文使用",code:`
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>;
      `,content:e.jsxs("p",{children:["按 ",e.jsx(d,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(s,{children:"Esc"})," ","关闭当前浮层。"]})}],props:[{name:"size",type:'"sm" | "md"',description:"按键尺寸。"},{name:"variant",type:'"surface" | "outline"',description:"按键视觉类型。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",required:!0,description:"按键展示内容。"},{name:"keys",type:"Array<ReactNode>",required:!0,description:"KbdShortcut 组件渲染的组合按键列表。"},{name:"separator",type:'"plus" | "none"',description:"KbdShortcut 组件的按键分隔方式。"}]});export{S as default};
