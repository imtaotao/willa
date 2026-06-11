import{al as e,ac as p,an as h}from"./index-D4yNIa2_.js";import{d as y}from"./defineDoc-Cmw2Yd3K.js";function s(t){const{size:r="md",variant:c="surface",className:l,children:n,...o}=t;return e.jsx("kbd",{...o,className:p("willa-kbd",`willa-kbd--${r}`,`willa-kbd--${c}`,l),children:n})}function i(t){const{keys:r,size:c="md",variant:l="surface",separator:n="plus",ariaLabel:o,className:K,...m}=t,u=o??r.map(d=>typeof d=="string"||typeof d=="number"?d:"").filter(Boolean).join(" + ");return e.jsx("span",{...m,className:p("willa-kbd-shortcut",n==="none"&&"willa-kbd-shortcut--no-separator",K),"aria-label":u||void 0,children:r.map((d,b)=>e.jsxs(h.Fragment,{children:[b>0&&n==="plus"?e.jsx("span",{className:"willa-kbd-shortcut-separator","aria-hidden":"true",children:"+"}):null,e.jsx(s,{size:c,variant:l,children:d})]},x(d,b)))})}const x=(t,r)=>typeof t=="string"||typeof t=="number"?`${t}-${r}`:String(r),a={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.5rem"};function j(){return e.jsxs("p",{children:["按 ",e.jsx(i,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(s,{children:"Esc"})," ","关闭当前浮层。"]})}const S=y({id:"kbd",name:"Kbd",packageName:"willa/Kbd",description:"用于展示键盘按键、快捷键和命令提示的内联组件。",imports:[{name:"Kbd, KbdShortcut",from:"willa/Kbd"}],css:"willa/Kbd.css",demo:{name:"KbdPreview",component:j},code:`
    import { Kbd, KbdShortcut } from "willa/Kbd";
    import "willa/Kbd.css";

    <p>
      按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
      关闭当前浮层。
    </p>;
  `,sections:[{title:"基础按键",code:`
        <div style={rowStyle}>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(s,{children:"Esc"}),e.jsx(s,{children:"Tab"}),e.jsx(s,{children:"Enter"}),e.jsx(s,{children:"Space"})]})},{title:"组合快捷键",code:`
        <div style={rowStyle}>
          <KbdShortcut keys={["⌘", "K"]} />
          <KbdShortcut keys={["⌘", "Shift", "P"]} />
          <KbdShortcut keys={["Ctrl", "/"]} />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(i,{keys:["⌘","K"]}),e.jsx(i,{keys:["⌘","Shift","P"]}),e.jsx(i,{keys:["Ctrl","/"]})]})},{title:"尺寸",code:`
        <div style={rowStyle}>
          <Kbd size="sm">Esc</Kbd>
          <Kbd size="md">Esc</Kbd>
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(s,{size:"sm",children:"Esc"}),e.jsx(s,{size:"md",children:"Esc"})]})},{title:"视觉类型",code:`
        <div style={rowStyle}>
          <Kbd variant="surface">Enter</Kbd>
          <Kbd variant="outline">Enter</Kbd>
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(s,{variant:"surface",children:"Enter"}),e.jsx(s,{variant:"outline",children:"Enter"})]})},{title:"正文使用",code:`
        <p>
          按 <KbdShortcut keys={["⌘", "K"]} /> 打开命令面板，或按 <Kbd>Esc</Kbd>{" "}
          关闭当前浮层。
        </p>;
      `,content:e.jsxs("p",{children:["按 ",e.jsx(i,{keys:["⌘","K"]})," 打开命令面板，或按 ",e.jsx(s,{children:"Esc"})," ","关闭当前浮层。"]})}],props:[{name:"size",type:'"sm" | "md"',description:"按键尺寸。"},{name:"variant",type:'"surface" | "outline"',description:"按键视觉类型。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",required:!0,description:"按键展示内容。"},{name:"keys",type:"Array<ReactNode>",required:!0,description:"KbdShortcut 组件渲染的组合按键列表。"},{name:"separator",type:'"plus" | "none"',description:"KbdShortcut 组件的按键分隔方式。"}]});export{S as default};
