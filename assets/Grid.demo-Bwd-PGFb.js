import{aO as e,B as i}from"./index-C-tGzq2u.js";import{G as d}from"./index-BFDCck25.js";import{d as t}from"./defineDoc-BM8EvMRd.js";const r={minHeight:"5.5rem",padding:"1rem",border:"1px solid var(--willa-border)",borderRadius:"0.75rem",background:"var(--willa-surface)"},s=t({id:"grid",name:"Grid",category:"layout",packageName:"willa/Grid",description:"用于卡片、表单列、资源列表和数据块的响应式网格布局。",imports:[{name:"Grid",from:"willa/Grid"},{name:"Badge",from:"willa/Badge"}],css:"willa/Grid.css",demo:{name:"Grid",component:d,props:{minColumnWidth:"10rem",gap:"lg",justify:"center"},children:[{name:"Badge",component:i,props:{tone:"info"},children:"响应式"},{name:"Badge",component:i,props:{tone:"success"},children:"自适应"},{name:"Badge",component:i,props:{tone:"warning"},children:"可配置"}]},code:`
    import { Badge } from "willa/Badge";
    import { Grid } from "willa/Grid";
    import "willa/Badge.css";
    import "willa/Grid.css";

    <Grid minColumnWidth="10rem" gap="lg" justify="start">
      <Badge tone="info">响应式</Badge>
      <Badge tone="success">自适应</Badge>
      <Badge tone="warning">可配置</Badge>
    </Grid>;
  `,sections:[{title:"自适应列",code:`
        <Grid minColumnWidth="12rem" gap="md">
          {["输入", "反馈", "文件", "日历"].map((item) => (
            <div
              key={item}
              style={{
                minHeight: "5.5rem",
                padding: "1rem",
                border: "1px solid var(--willa-border)",
                borderRadius: "0.75rem",
                background: "var(--willa-surface)",
              }}
            >
              <strong>{item}</strong>
              <p style={{ color: "var(--willa-text-soft)", margin: "0.4rem 0 0" }}>
                根据容器宽度自动换行。
              </p>
            </div>
          ))}
        </Grid>;
      `,content:e.jsx(d,{minColumnWidth:"12rem",gap:"md",children:["输入","反馈","文件","日历"].map(a=>e.jsxs("div",{style:r,children:[e.jsx("strong",{children:a}),e.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.4rem 0 0"},children:"根据容器宽度自动换行。"})]},a))})},{title:"固定列数",code:`
        <Grid columns={3} gap="sm">
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            A
          </div>
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            B
          </div>
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            C
          </div>
        </Grid>;
      `,content:e.jsxs(d,{columns:3,gap:"sm",children:[e.jsx("div",{style:r,children:"A"}),e.jsx("div",{style:r,children:"B"}),e.jsx("div",{style:r,children:"C"})]})}],props:[{name:"children",type:"ReactNode",description:"网格中的内容。"},{name:"columns",type:"number | string",description:"固定列数或自定义 grid-template-columns。"},{name:"minColumnWidth",type:"string",defaultValue:'"14rem"',description:"自适应列的最小宽度。"},{name:"gap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',defaultValue:'"md"',description:"整体间距。"},{name:"rowGap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',defaultValue:"gap",description:"行间距。未传时继承 gap。"},{name:"columnGap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',defaultValue:"gap",description:"列间距。未传时继承 gap。"},{name:"align",type:'"start" | "center" | "end" | "stretch"',defaultValue:'"stretch"',description:"单元格交叉轴对齐方式。"},{name:"justify",type:'"start" | "center" | "end" | "stretch"',defaultValue:'"stretch"',description:"单元格主轴对齐方式。"},{name:"width",type:"string",defaultValue:'"100%"',description:"网格容器宽度。需要内容收缩时可以传具体宽度或 fit-content。"}]});export{s as default};
