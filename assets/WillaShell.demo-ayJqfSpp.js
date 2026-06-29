import{b2 as l,aL as e}from"./index-wyswk-7m.js";import{d as i}from"./defineDoc-BCaUHiZa.js";const a={border:"1px solid var(--willa-border)",borderRadius:"0.75rem",padding:"1rem",background:"var(--willa-surface)"},o=i({id:"willa-shell",name:"WillaShell",displayName:"Willa 作用域",category:"layout",packageName:"willa/WillaShell",description:"为 Willa 组件提供统一的 .willa-shell 作用域和基础文本样式。",imports:[{name:"WillaShell",from:"willa/WillaShell"}],css:"willa/WillaShell.css",demo:{name:"WillaShell",component:e,props:{style:a},children:"页面或应用根节点可以包裹在 WillaShell 内。"},code:`
    import { WillaShell } from "willa/WillaShell";
    import "willa/WillaShell.css";

    <WillaShell>
      页面或应用根节点可以包裹在 WillaShell 内。
    </WillaShell>;
  `,sections:[{title:"自定义根元素",code:`
        <WillaShell
          as="main"
          style={{
            border: "1px solid var(--willa-border)",
            borderRadius: "0.75rem",
            padding: "1rem",
            background: "var(--willa-surface)",
          }}
        >
          <strong>文档页面</strong>
          <p style={{ color: "var(--willa-text-soft)", margin: "0.5rem 0 0" }}>
            WillaShell 会保留传入的根元素属性，并追加 willa-shell className。
          </p>
        </WillaShell>;
      `,content:l.jsxs(e,{as:"main",style:a,children:[l.jsx("strong",{children:"文档页面"}),l.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.5rem 0 0"},children:"WillaShell 会保留传入的根元素属性，并追加 willa-shell className。"})]})}],props:[{name:"children",type:"ReactNode",description:"需要获得 Willa 作用域的页面或局部内容。"},{name:"as",type:"ElementType",defaultValue:'"div"',description:"自定义渲染标签或组件。"},{name:"className",type:"string",description:"追加到根节点的 className，会和 willa-shell 合并。"}]});export{o as default};
