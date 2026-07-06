import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./WillaShell-CVoFMFuB.js";import"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";import{t as i}from"./Dialog-CPf9MDWc.js";import"./style-DaPk-vYu.js";var a=e(),o={border:`1px solid var(--willa-border)`,borderRadius:`0.75rem`,padding:`1rem`,background:`var(--willa-surface)`},s=r({id:`willa-shell`,name:`WillaShell`,displayName:`Willa 作用域`,category:`layout`,packageName:`willa/WillaShell`,description:`为 Willa 组件提供统一的 .willa-shell 作用域和基础文本样式。`,imports:[{name:`WillaShell`,from:`willa/WillaShell`},{name:`Button`,from:`willa/Button`},{name:`Dialog`,from:`willa/Dialog`}],css:`willa/WillaShell.css`,demo:{name:`WillaShell`,component:n,props:{style:o},children:`页面或应用根节点可以包裹在 WillaShell 内。`},code:`
    import { WillaShell } from "willa/WillaShell";
    import "willa/WillaShell.css";

    <WillaShell>
      页面或应用根节点可以包裹在 WillaShell 内。
    </WillaShell>;
  `,sections:[{title:`自定义根元素`,code:`
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
      `,content:(0,a.jsxs)(n,{as:`main`,style:o,children:[(0,a.jsx)(`strong`,{children:`文档页面`}),(0,a.jsx)(`p`,{style:{color:`var(--willa-text-soft)`,margin:`0.5rem 0 0`},children:`WillaShell 会保留传入的根元素属性，并追加 willa-shell className。`})]})},{title:`强制主题`,code:`
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
      `,content:(0,a.jsxs)(`div`,{style:{display:`grid`,gap:`0.75rem`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},children:[(0,a.jsxs)(n,{theme:`light`,style:o,children:[(0,a.jsx)(`strong`,{children:`固定亮色`}),(0,a.jsx)(`p`,{style:{color:`var(--willa-text-soft)`,margin:`0.5rem 0 0`},children:`不跟随页面主题变化。`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.5rem`,marginTop:`0.75rem`},children:[(0,a.jsx)(t,{size:`sm`,children:`亮色按钮`}),(0,a.jsx)(i,{trigger:(0,a.jsx)(t,{size:`sm`,variant:`soft`,children:`亮色弹层`}),title:`固定亮色`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`这个弹层通过 WillaShell 的主题作用域保持亮色。`})})]})]}),(0,a.jsxs)(n,{theme:`dark`,style:o,children:[(0,a.jsx)(`strong`,{children:`固定暗色`}),(0,a.jsx)(`p`,{style:{color:`var(--willa-text-soft)`,margin:`0.5rem 0 0`},children:`弹层组件也会继承这个主题。`}),(0,a.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.5rem`,marginTop:`0.75rem`},children:[(0,a.jsx)(t,{size:`sm`,children:`暗色按钮`}),(0,a.jsx)(i,{trigger:(0,a.jsx)(t,{size:`sm`,variant:`soft`,children:`暗色弹层`}),title:`固定暗色`,children:(0,a.jsx)(`p`,{style:{margin:0},children:`这个弹层通过 WillaShell 的主题作用域保持暗色。`})})]})]})]})}],props:[{name:`children`,type:`ReactNode`,description:`需要获得 Willa 作用域的页面或局部内容。`},{name:`as`,type:`ElementType`,defaultValue:`"div"`,description:`自定义渲染标签或组件。`},{name:`className`,type:`string`,description:`追加到根节点的 className，会和 willa-shell 合并。`},{name:`theme`,type:`"light" | "dark"`,description:`强制当前 WillaShell 作用域使用指定主题；普通 portal 浮层会继承该主题，Toast 这类全局实例需要单独配置。`}]});export{s as default};