import{b3 as l,aL as e,h as i}from"./index-CB3vu2b-.js";import{D as r}from"./index-O6p_4Lfj.js";/* empty css              *//* empty css              */import{d as t}from"./defineDoc-C1FAsajF.js";import"./dom-DvRKQOia.js";const a={border:"1px solid var(--willa-border)",borderRadius:"0.75rem",padding:"1rem",background:"var(--willa-surface)"},h=t({id:"willa-shell",name:"WillaShell",displayName:"Willa 作用域",category:"layout",packageName:"willa/WillaShell",description:"为 Willa 组件提供统一的 .willa-shell 作用域和基础文本样式。",imports:[{name:"WillaShell",from:"willa/WillaShell"},{name:"Button",from:"willa/Button"},{name:"Dialog",from:"willa/Dialog"}],css:"willa/WillaShell.css",demo:{name:"WillaShell",component:e,props:{style:a},children:"页面或应用根节点可以包裹在 WillaShell 内。"},code:`
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
      `,content:l.jsxs(e,{as:"main",style:a,children:[l.jsx("strong",{children:"文档页面"}),l.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.5rem 0 0"},children:"WillaShell 会保留传入的根元素属性，并追加 willa-shell className。"})]})},{title:"强制主题",code:`
        import { Button } from "willa/Button";
        import { Dialog } from "willa/Dialog";
        import { WillaShell } from "willa/WillaShell";
        import "willa/Button.css";
        import "willa/Dialog.css";
        import "willa/WillaShell.css";

        const shellStyle = {
          border: "1px solid var(--willa-border)",
          borderRadius: "0.75rem",
          padding: "1rem",
          background: "var(--willa-surface)",
        };

        <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <WillaShell theme="light" style={shellStyle}>
            <strong>固定亮色</strong>
            <p style={{ color: "var(--willa-text-soft)", margin: "0.5rem 0 0" }}>
              不跟随页面主题变化。
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
              <Button size="sm">亮色按钮</Button>
              <Dialog trigger={<Button size="sm" variant="soft">亮色弹层</Button>} title="固定亮色">
                <p>这个弹层通过 WillaShell 的主题作用域保持亮色。</p>
              </Dialog>
            </div>
          </WillaShell>
          <WillaShell theme="dark" style={shellStyle}>
            <strong>固定暗色</strong>
            <p style={{ color: "var(--willa-text-soft)", margin: "0.5rem 0 0" }}>
              弹层组件也会继承这个主题。
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
              <Button size="sm">暗色按钮</Button>
              <Dialog trigger={<Button size="sm" variant="soft">暗色弹层</Button>} title="固定暗色">
                <p>这个弹层通过 WillaShell 的主题作用域保持暗色。</p>
              </Dialog>
            </div>
          </WillaShell>
        </div>;
      `,content:l.jsxs("div",{style:{display:"grid",gap:"0.75rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:[l.jsxs(e,{theme:"light",style:a,children:[l.jsx("strong",{children:"固定亮色"}),l.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.5rem 0 0"},children:"不跟随页面主题变化。"}),l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.75rem"},children:[l.jsx(i,{size:"sm",children:"亮色按钮"}),l.jsx(r,{trigger:l.jsx(i,{size:"sm",variant:"soft",children:"亮色弹层"}),title:"固定亮色",children:l.jsx("p",{style:{margin:0},children:"这个弹层通过 WillaShell 的主题作用域保持亮色。"})})]})]}),l.jsxs(e,{theme:"dark",style:a,children:[l.jsx("strong",{children:"固定暗色"}),l.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.5rem 0 0"},children:"弹层组件也会继承这个主题。"}),l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.75rem"},children:[l.jsx(i,{size:"sm",children:"暗色按钮"}),l.jsx(r,{trigger:l.jsx(i,{size:"sm",variant:"soft",children:"暗色弹层"}),title:"固定暗色",children:l.jsx("p",{style:{margin:0},children:"这个弹层通过 WillaShell 的主题作用域保持暗色。"})})]})]})]})}],props:[{name:"children",type:"ReactNode",description:"需要获得 Willa 作用域的页面或局部内容。"},{name:"as",type:"ElementType",defaultValue:'"div"',description:"自定义渲染标签或组件。"},{name:"className",type:"string",description:"追加到根节点的 className，会和 willa-shell 合并。"},{name:"theme",type:'"light" | "dark"',description:"强制当前 WillaShell 作用域使用指定主题；普通 portal 浮层会继承该主题，Toast 这类全局实例需要单独配置。"}]});export{h as default};
