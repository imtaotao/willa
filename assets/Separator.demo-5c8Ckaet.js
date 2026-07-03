import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Separator-DiGkZuT6.js";import"./index-B2UoUlCX.js";import{t as n}from"./defineDoc-Cid5xIoZ.js";var r=e(),i=n({id:`separator`,name:`Separator`,category:`layout`,packageName:`willa/Separator`,description:`用于内容段落、文章区块和行内元信息之间的轻量分隔。`,imports:[{name:`Separator`,from:`willa/Separator`}],css:`willa/Separator.css`,demo:{name:`Separator`,component:t},code:`
    import { Separator } from "willa/Separator";
    import "willa/Separator.css";

    <Separator />;
  `,sections:[{title:`基础分隔`,code:`
        <Separator />;
      `,content:(0,r.jsx)(t,{})},{title:`带文案`,code:`
        <Separator>相关阅读</Separator>;
      `,content:(0,r.jsx)(t,{children:`相关阅读`})},{title:`线条样式`,code:`
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator variant="solid">实线</Separator>
          <Separator variant="dashed">虚线</Separator>
          <Separator variant="dotted">点线</Separator>
        </div>;
      `,content:(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`0.2rem`},children:[(0,r.jsx)(t,{variant:`solid`,children:`实线`}),(0,r.jsx)(t,{variant:`dashed`,children:`虚线`}),(0,r.jsx)(t,{variant:`dotted`,children:`点线`})]})},{title:`文案位置`,code:`
        <div style={{ display: "grid", gap: "0.2rem" }}>
          <Separator align="start">上文</Separator>
          <Separator align="center">更多内容</Separator>
          <Separator align="end">下文</Separator>
        </div>;
      `,content:(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`0.2rem`},children:[(0,r.jsx)(t,{align:`start`,children:`上文`}),(0,r.jsx)(t,{align:`center`,children:`更多内容`}),(0,r.jsx)(t,{align:`end`,children:`下文`})]})},{title:`间距尺寸`,code:`
        <div>
          <p>第一段内容。</p>
          <Separator size="sm" />
          <p>第二段内容。</p>
          <Separator size="lg" />
          <p>第三段内容。</p>
        </div>;
      `,content:(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{children:`第一段内容。`}),(0,r.jsx)(t,{size:`sm`}),(0,r.jsx)(`p`,{children:`第二段内容。`}),(0,r.jsx)(t,{size:`lg`}),(0,r.jsx)(`p`,{children:`第三段内容。`})]})},{title:`竖向分隔`,code:`
        <div style={metaRowStyle}>
          <span>Willa</span>
          <Separator orientation="vertical" />
          <span>3 分钟阅读</span>
          <Separator orientation="vertical" />
          <span>2026</span>
        </div>;
      `,content:(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,color:`var(--willa-text-soft)`,fontSize:`0.92rem`,lineHeight:1.5},children:[(0,r.jsx)(`span`,{children:`Willa`}),(0,r.jsx)(t,{orientation:`vertical`}),(0,r.jsx)(`span`,{children:`3 分钟阅读`}),(0,r.jsx)(t,{orientation:`vertical`}),(0,r.jsx)(`span`,{children:`2026`})]})},{title:`弱化文案`,code:`
        <Separator plain>仅作为轻量分组提示</Separator>;
      `,content:(0,r.jsx)(t,{plain:!0,children:`仅作为轻量分组提示`})}],props:[{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`分隔方向。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`分隔组件的外部间距。`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"center"`,description:`横向带文案时的文案位置。`},{name:`variant`,type:`"solid" | "dashed" | "dotted"`,defaultValue:`"solid"`,description:`线条样式。`},{name:`plain`,type:`boolean`,defaultValue:`false`,description:`是否弱化文案字重。`},{name:`decorative`,type:`boolean`,defaultValue:`true`,description:`是否作为纯视觉分隔，默认不暴露给辅助技术。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,description:`横向分隔中间展示的可选文案。`}]});export{i as default};