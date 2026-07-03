import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./Spinner-DJVkTLj1.js";import"./style-B00R6KjV.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";var i=e(),a={display:`flex`,flexWrap:`wrap`,gap:`1rem`,alignItems:`center`},o=r({id:`spinner`,name:`Spinner`,packageName:`willa/Spinner`,description:`用于轻量加载状态、局部等待和异步任务反馈的旋转指示器。`,imports:[{name:`Spinner`,from:`willa/Spinner`}],css:`willa/Spinner.css`,demo:{name:`Spinner`,component:n,props:{label:`生成中`,tone:`default`}},code:`
    import { Spinner } from "willa/Spinner";
    import "willa/Spinner.css";

    <Spinner label="生成中" />;
  `,sections:[{title:`基础用法`,code:`
        <div style={rowStyle}>
          <Spinner label="" />
          <Spinner label="加载中" />
          <Spinner label="生成回答中" labelPosition="block" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:a,children:[(0,i.jsx)(n,{label:``}),(0,i.jsx)(n,{label:`加载中`}),(0,i.jsx)(n,{label:`生成回答中`,labelPosition:`block`})]})},{title:`尺寸`,code:`
        <div style={rowStyle}>
          <Spinner size="xs" label="XS" />
          <Spinner size="sm" label="Small" />
          <Spinner size="md" label="Medium" />
          <Spinner size="lg" label="Large" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:a,children:[(0,i.jsx)(n,{size:`xs`,label:`XS`}),(0,i.jsx)(n,{size:`sm`,label:`Small`}),(0,i.jsx)(n,{size:`md`,label:`Medium`}),(0,i.jsx)(n,{size:`lg`,label:`Large`})]})},{title:`色调`,code:`
        <div style={rowStyle}>
          <Spinner tone="default" label="Default" />
          <Spinner tone="neutral" label="Neutral" />
          <Spinner tone="success" label="Success" />
          <Spinner tone="warning" label="Warning" />
          <Spinner tone="danger" label="Danger" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:a,children:[(0,i.jsx)(n,{tone:`default`,label:`Default`}),(0,i.jsx)(n,{tone:`neutral`,label:`Neutral`}),(0,i.jsx)(n,{tone:`success`,label:`Success`}),(0,i.jsx)(n,{tone:`warning`,label:`Warning`}),(0,i.jsx)(n,{tone:`danger`,label:`Danger`})]})},{title:`组合场景`,code:`
        <div style={panelStyle}>
          <div style={loadingCardStyle}>
            <Spinner size="lg" label="正在分析上下文" labelPosition="block" />
          </div>
          <Button loading variant="outline">
            提交中
          </Button>
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`0.9rem`,width:`min(100%, 34rem)`},children:[(0,i.jsx)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:`0.7rem`,width:`100%`,padding:`1.4rem`,border:`1px solid var(--willa-line)`,borderRadius:`0.85rem`,background:`var(--willa-surface-tint)`},children:(0,i.jsx)(n,{size:`lg`,label:`正在分析上下文`,labelPosition:`block`})}),(0,i.jsx)(t,{loading:!0,variant:`outline`,children:`提交中`})]})}],props:[{name:`label`,type:`ReactNode`,defaultValue:`"加载中"`,description:`加载状态文案，传空字符串时只展示图形并保留无障碍文本。`},{name:`size`,type:`"xs" | "sm" | "md" | "lg"`,defaultValue:`"md"`,description:`Spinner 尺寸。`},{name:`tone`,type:`"default" | "neutral" | "success" | "warning" | "danger"`,defaultValue:`"default"`,description:`Spinner 色调。`},{name:`labelPosition`,type:`"inline" | "block"`,defaultValue:`"inline"`,description:`文案和图形的排列方式。`},{name:`className`,type:`string`,description:`外层 className。`}]});export{o as default};