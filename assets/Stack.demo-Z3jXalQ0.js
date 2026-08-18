import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./Stack-DwlHdG-i.js";import{a as r}from"./index-y4TTR3pk.js";import"./style-B00R6KjV.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";var a=e(),o=i({id:`stack`,name:`Stack`,category:`layout`,packageName:`willa/Stack`,description:`用于纵向排列内容块，统一控制间距、对齐和宽度。`,imports:[{name:`Stack`,from:`willa/Stack`},{name:`Button`,from:`willa/Button`},{name:`Badge`,from:`willa/Badge`}],css:`willa/Stack.css`,demo:{name:`Stack`,component:n,props:{gap:`sm`,width:`20rem`},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{tone:`info`,children:`布局`}),(0,a.jsx)(`span`,{children:`统一纵向节奏，适合表单、说明区和状态组。`})]})},code:`
    import { Badge } from "willa/Badge";
    import { Stack } from "willa/Stack";
    import "willa/Badge.css";
    import "willa/Stack.css";

    <Stack gap="sm" width="20rem">
      <Badge tone="info">布局</Badge>
      <span>统一纵向节奏，适合表单、说明区和状态组。</span>
    </Stack>;
  `,sections:[{title:`基础排列`,code:`
        <Stack gap="sm" width="24rem">
          <strong>发布检查</strong>
          <span style={{ color: "var(--willa-text-soft)" }}>
            确认组件导出、样式入口和示例文档。
          </span>
          <Button size="sm">开始检查</Button>
        </Stack>;
      `,content:(0,a.jsxs)(n,{gap:`sm`,width:`24rem`,children:[(0,a.jsx)(`strong`,{children:`发布检查`}),(0,a.jsx)(`span`,{style:{color:`var(--willa-text-soft)`},children:`确认组件导出、样式入口和示例文档。`}),(0,a.jsx)(t,{size:`sm`,children:`开始检查`})]})},{title:`居中对齐`,code:`
        <Stack align="center" gap="md" width="22rem">
          <Badge tone="success">已同步</Badge>
          <strong>组件状态正常</strong>
          <Button size="sm" variant="outline">
            查看详情
          </Button>
        </Stack>;
      `,content:(0,a.jsxs)(n,{align:`center`,gap:`md`,width:`22rem`,children:[(0,a.jsx)(r,{tone:`success`,children:`已同步`}),(0,a.jsx)(`strong`,{children:`组件状态正常`}),(0,a.jsx)(t,{size:`sm`,variant:`outline`,children:`查看详情`})]})}],props:[{name:`children`,type:`ReactNode`,description:`需要纵向排列的内容。`},{name:`gap`,type:`"none" | "xs" | "sm" | "md" | "lg" | "xl" | string`,defaultValue:`"md"`,description:`子元素之间的间距。`},{name:`align`,type:`"start" | "center" | "end" | "stretch" | "baseline"`,defaultValue:`"stretch"`,description:`交叉轴对齐方式。`},{name:`justify`,type:`"start" | "center" | "end" | "between" | "around" | "evenly"`,defaultValue:`"start"`,description:`主轴对齐方式。`},{name:`inline`,type:`boolean`,defaultValue:`false`,description:`是否使用 inline-flex。`},{name:`width`,type:`string`,description:`外层宽度。`},{name:`as`,type:`ElementType`,defaultValue:`"div"`,description:`自定义渲染标签或组件。`},{name:`className`,type:`string`,description:`自定义 className。`}]});export{o as default};