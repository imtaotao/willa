import{aD as e,af as n}from"./index-BqyZysBm.js";import{d as o}from"./defineDoc-ChgvGsab.js";const i=()=>e.jsx(n,{loading:!0,lines:["44%","100%","76%"],block:!0,blockHeight:160,children:e.jsx("div",{children:"Loaded content"})}),t={display:"grid",width:"min(100%, 34rem)",gap:"0.75rem"},r=o({id:"skeleton",name:"Skeleton",category:"content",packageName:"willa/Skeleton",description:"包裹真实内容的加载骨架屏，可用于文档、嵌入卡片等异步渲染场景。",imports:[{name:"Skeleton",from:"willa/Skeleton"}],css:"willa/Skeleton.css",demo:{name:"SkeletonPreview",component:i},code:`
    import { Skeleton } from "willa/Skeleton";
    import "willa/Skeleton.css";

    <Skeleton loading lines={["44%", "100%", "76%"]} block blockHeight={160}>
      <div>Loaded content</div>
    </Skeleton>;
  `,sections:[{title:"自定义颜色",code:`
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <Skeleton
            loading
            color="#82a3ec"
            lines={[
              { width: "42%", height: "0.82rem" },
              "100%",
              "68%",
            ]}
          >
            <div>Loaded content</div>
          </Skeleton>
          <Skeleton
            loading
            color="#8dd7c7"
            lines={["36%", "92%", "74%"]}
            block
            blockHeight={96}
          >
            <div>Loaded content</div>
          </Skeleton>
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(n,{loading:!0,color:"#82a3ec",lines:[{width:"42%",height:"0.82rem"},"100%","68%"],children:e.jsx("div",{children:"Loaded content"})}),e.jsx(n,{loading:!0,color:"#8dd7c7",lines:["36%","92%","74%"],block:!0,blockHeight:96,children:e.jsx("div",{children:"Loaded content"})})]})}],props:[{name:"loading",type:"boolean",required:!0,description:"是否展示骨架屏。"},{name:"children",type:"ReactNode",required:!0,description:"加载完成后渲染的真实内容。"},{name:"lines",type:"number | Array<number | string | { width?: number | string; height?: number | string }>",defaultValue:"3",description:"骨架文本行配置，传数字时生成对应数量的默认行。"},{name:"block",type:"boolean",description:"是否额外展示一个块状占位区域。"},{name:"blockHeight",type:"number | string",description:"块状占位区域高度，数字会按 px 处理。"},{name:"inline",type:"boolean",description:"使用行内容器，适合放在文本或 hover card 中。"},{name:"keepChildrenMounted",type:"boolean",description:"loading 时仍挂载 children，适合第三方 iframe、图片等需要先挂载才能触发加载回调的内容。"},{name:"label",type:"string",defaultValue:'"Loading"',description:"loading 状态下的无障碍标签。"},{name:"color",type:"string",description:"自定义骨架屏颜色，会生成同色系 shimmer 渐变。"}]});export{r as default};
