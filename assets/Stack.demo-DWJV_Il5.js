import{aZ as e,ay as t,h as a,B as n}from"./index-D7YaWUUW.js";/* empty css              */import{d as s}from"./defineDoc-BHlsbD-w.js";const l=s({id:"stack",name:"Stack",category:"layout",packageName:"willa/Stack",description:"用于纵向排列内容块，统一控制间距、对齐和宽度。",imports:[{name:"Stack",from:"willa/Stack"},{name:"Button",from:"willa/Button"},{name:"Badge",from:"willa/Badge"}],css:"willa/Stack.css",demo:{name:"Stack",component:t,props:{gap:"sm",width:"20rem"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{tone:"info",children:"布局"}),e.jsx("span",{children:"统一纵向节奏，适合表单、说明区和状态组。"})]})},code:`
    import { Badge } from "willa/Badge";
    import { Stack } from "willa/Stack";
    import "willa/Badge.css";
    import "willa/Stack.css";

    <Stack gap="sm" width="20rem">
      <Badge tone="info">布局</Badge>
      <span>统一纵向节奏，适合表单、说明区和状态组。</span>
    </Stack>;
  `,sections:[{title:"基础排列",code:`
        <Stack gap="sm" width="24rem">
          <strong>发布检查</strong>
          <span style={{ color: "var(--willa-text-soft)" }}>
            确认组件导出、样式入口和示例文档。
          </span>
          <Button size="sm">开始检查</Button>
        </Stack>;
      `,content:e.jsxs(t,{gap:"sm",width:"24rem",children:[e.jsx("strong",{children:"发布检查"}),e.jsx("span",{style:{color:"var(--willa-text-soft)"},children:"确认组件导出、样式入口和示例文档。"}),e.jsx(a,{size:"sm",children:"开始检查"})]})},{title:"居中对齐",code:`
        <Stack align="center" gap="md" width="22rem">
          <Badge tone="success">已同步</Badge>
          <strong>组件状态正常</strong>
          <Button size="sm" variant="outline">
            查看详情
          </Button>
        </Stack>;
      `,content:e.jsxs(t,{align:"center",gap:"md",width:"22rem",children:[e.jsx(n,{tone:"success",children:"已同步"}),e.jsx("strong",{children:"组件状态正常"}),e.jsx(a,{size:"sm",variant:"outline",children:"查看详情"})]})}],props:[{name:"children",type:"ReactNode",description:"需要纵向排列的内容。"},{name:"gap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',defaultValue:'"md"',description:"子元素之间的间距。"},{name:"align",type:'"start" | "center" | "end" | "stretch" | "baseline"',defaultValue:'"stretch"',description:"交叉轴对齐方式。"},{name:"justify",type:'"start" | "center" | "end" | "between" | "around" | "evenly"',defaultValue:'"start"',description:"主轴对齐方式。"},{name:"inline",type:"boolean",defaultValue:"false",description:"是否使用 inline-flex。"},{name:"width",type:"string",description:"外层宽度。"},{name:"as",type:"ElementType",defaultValue:'"div"',description:"自定义渲染标签或组件。"}]});export{l as default};
