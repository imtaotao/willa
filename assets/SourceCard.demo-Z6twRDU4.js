import{b1 as e,R as r,a7 as i,W as s}from"./index-Bn83wcBb.js";import{S as t}from"./index-DKVs0-kS.js";import{d as a}from"./defineDoc-DJuv5mBO.js";const d=[{title:"AI 产品组件路线",description:"记录输入、对话、过程、结果和反馈相关组件的优先级，以及 SourceCard 在 RAG 场景中的职责边界。",source:"component-roadmap.md",url:"docs/component-roadmap.md",meta:"命中 92%",icon:e.jsx(r,{}),href:"#",selected:!0},{title:"组件创建规范",description:"说明新组件的包归属、导出、CSS、主题变量和示例文档接入规则。",source:"component.md",url:"docs/component.md",meta:"规范",icon:e.jsx(i,{}),href:"#"},{title:"Willa 官网文档",description:"用于展示外部网页来源、知识库链接和引用跳转入口。",source:"willa.dev",url:"https://willa.dev/components/source-card",meta:"网页",icon:e.jsx(s,{}),href:"#"}],n={display:"grid",gap:"0.82rem",width:"min(100%, 56rem)"},c={display:"grid",gap:"0.72rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},m=()=>e.jsx("div",{style:n,children:d.map(o=>e.jsx(t,{...o},String(o.title)))}),f=a({id:"source-card",name:"SourceCard",category:"content",packageName:"willa/SourceCard",description:"用于展示来源、资料、搜索结果、摘要片段和跳转入口。",imports:[{name:"SourceCard",from:"willa/SourceCard"}],css:"willa/SourceCard.css",demo:{name:"SourceCardPreview",component:m},code:`
    import { SourceCard } from "willa/SourceCard";
    import "willa/SourceCard.css";

    <SourceCard
      title="AI 产品组件路线"
      description="记录输入、对话、过程、结果和反馈相关组件的优先级。"
      source="component-roadmap.md"
      url="docs/component-roadmap.md"
      meta="命中 92%"
      index="1"
      href="#"
      selected
    />;
  `,sections:[{title:"紧凑来源",code:`
        <div style={compactGridStyle}>
          <SourceCard
            size="sm"
            title="组件创建规范"
            source="component.md"
            url="docs/component.md"
            meta="规范"
            index="A"
            href="#"
          />
          <SourceCard
            size="sm"
            variant="solid"
            title="CSS 主题规则"
            source="css.md"
            url="docs/css.md"
            meta="主题"
            index="B"
            href="#"
          />
        </div>;
      `,content:e.jsxs("div",{style:c,children:[e.jsx(t,{size:"sm",title:"组件创建规范",source:"component.md",url:"docs/component.md",meta:"规范",index:"A",href:"#"}),e.jsx(t,{size:"sm",variant:"solid",title:"CSS 主题规则",source:"css.md",url:"docs/css.md",meta:"主题",index:"B",href:"#"})]})},{title:"知识库引用",code:`
        <SourceCard
          variant="solid"
          title="对话消息组件设计"
          description="ChatMessage 负责单条消息，MessageList 负责消息流和自动滚动，Composer 负责输入组合。"
          source="AI 组件设计"
          url="knowledge/ai-components"
          meta="引用 3"
          icon={<FileTextIcon />}
          href="#"
        />;
      `,content:e.jsx(t,{variant:"solid",title:"对话消息组件设计",description:"ChatMessage 负责单条消息，MessageList 负责消息流和自动滚动，Composer 负责输入组合。",source:"AI 组件设计",url:"knowledge/ai-components",meta:"引用 3",icon:e.jsx(r,{}),href:"#"})}],props:[{name:"title",type:"ReactNode",required:!0,description:"来源标题。"},{name:"description",type:"ReactNode",description:"来源片段或摘要，最多显示两行。"},{name:"source",type:"ReactNode",description:"来源名称，例如文件名、知识库名或站点名。"},{name:"url",type:"string",description:"来源路径或链接文案。"},{name:"meta",type:"ReactNode",description:"右上角补充信息，例如命中率、类型或引用编号。"},{name:"icon",type:"ReactNode",defaultValue:'index ?? "S"',description:"来源图标。未传时会使用 index，二者都没有时展示默认标记。"},{name:"index",type:"ReactNode",defaultValue:'"S"',description:"来源序号或短标记。"},{name:"href",type:"string",description:"来源跳转链接。传入后组件渲染为链接。"},{name:"target",type:"string",description:"链接打开方式，例如 _blank。"},{name:"selected",type:"boolean",defaultValue:"false",description:"是否为当前选中来源。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"variant",type:'"default" | "solid"',defaultValue:'"default"',description:"样式形态，默认 default。"},{name:"onOpen",type:"(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void",description:"点击来源时触发。未传 href 但传 onOpen 时组件渲染为按钮。"}]});export{f as default};
