import{an as r,ae as w,B as d}from"./index-B_h_YYgH.js";import{d as b}from"./defineDoc-Bzp7FD3_.js";function a(e){const{as:n="div",columns:l,minColumnWidth:p="14rem",gap:c="md",rowGap:s,columnGap:o,align:g="stretch",justify:u="stretch",width:h,className:y,children:v,style:x,...G}=e,f={gridTemplateColumns:j(l,p),gap:t(c),rowGap:s?t(s):void 0,columnGap:o?t(o):void 0,alignItems:g,justifyItems:u,width:h,...x};return r.jsx(n,{...G,style:f,className:w("willa-grid",y),children:v})}const m={none:"0",xs:"0.35rem",sm:"0.55rem",md:"0.75rem",lg:"1rem",xl:"1.25rem"},B=e=>e in m,t=e=>B(e)?m[e]:e,j=(e,n)=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:typeof e=="string"?e:`repeat(auto-fit, minmax(min(100%, ${n}), 1fr))`,i={minHeight:"5.5rem",padding:"1rem",border:"1px solid var(--willa-border)",borderRadius:"0.75rem",background:"var(--willa-surface)"},R=b({id:"grid",name:"Grid",category:"layout",packageName:"willa/Grid",description:"用于卡片、表单列、资源列表和数据块的响应式网格布局。",imports:[{name:"Grid",from:"willa/Grid"},{name:"Badge",from:"willa/Badge"}],css:"willa/Grid.css",demo:{name:"Grid",component:a,props:{minColumnWidth:"10rem",gap:"sm"},children:[{name:"Badge",component:d,props:{tone:"info"},children:"响应式"},{name:"Badge",component:d,props:{tone:"success"},children:"自适应"},{name:"Badge",component:d,props:{tone:"warning"},children:"可配置"}]},code:`
    import { Badge } from "willa/Badge";
    import { Grid } from "willa/Grid";
    import "willa/Badge.css";
    import "willa/Grid.css";

    <Grid minColumnWidth="10rem" gap="sm">
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
      `,content:r.jsx(a,{minColumnWidth:"12rem",gap:"md",children:["输入","反馈","文件","日历"].map(e=>r.jsxs("div",{style:i,children:[r.jsx("strong",{children:e}),r.jsx("p",{style:{color:"var(--willa-text-soft)",margin:"0.4rem 0 0"},children:"根据容器宽度自动换行。"})]},e))})},{title:"固定列数",code:`
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
      `,content:r.jsxs(a,{columns:3,gap:"sm",children:[r.jsx("div",{style:i,children:"A"}),r.jsx("div",{style:i,children:"B"}),r.jsx("div",{style:i,children:"C"})]})}],props:[{name:"children",type:"ReactNode",description:"网格中的内容。"},{name:"columns",type:"number | string",description:"固定列数或自定义 grid-template-columns。"},{name:"minColumnWidth",type:"string",description:"自适应列的最小宽度。"},{name:"gap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',description:"整体间距。"},{name:"rowGap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',description:"行间距。"},{name:"columnGap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',description:"列间距。"},{name:"align",type:'"start" | "center" | "end" | "stretch"',description:"单元格交叉轴对齐方式。"},{name:"justify",type:'"start" | "center" | "end" | "stretch"',description:"单元格主轴对齐方式。"}]});export{R as default};
