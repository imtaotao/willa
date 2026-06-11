import{al as t,c as l}from"./index-CQ5SwHlJ.js";import{d as e}from"./defineDoc-BYfb4gho.js";const o={display:"grid",gap:"0.85rem"},n=e({id:"callout",name:"Callout",packageName:"willa/Callout",description:"用于提示、警告、成功、建议和错误状态的上下文信息块。",imports:[{name:"Callout",from:"willa/Callout"}],css:"willa/Callout.css",demo:{name:"Callout",component:l,props:{tone:"tip",title:"单组件引入"},children:"从对应的 Willa 入口同时引入组件和 CSS。"},code:`
    import { Callout } from "willa/Callout";
    import "willa/Callout.css";

    <Callout tone="tip" title="单组件引入">
      从对应的 Willa 入口同时引入组件和 CSS。
    </Callout>;
  `,sections:[{title:"语义类型",code:`
        <div style={{ display: "grid", gap: "0.85rem" }}>
          <Callout tone="note" title="说明">
            适合补充背景、解释上下文或提示读者注意一个中性信息。
          </Callout>
          <Callout tone="tip" title="提示">
            用来展示建议、捷径或更推荐的操作方式。
          </Callout>
          <Callout tone="warning" title="注意">
            用来提醒潜在风险、前置条件或需要谨慎处理的内容。
          </Callout>
          <Callout tone="success" title="完成">
            用来反馈流程完成、配置生效或结果符合预期。
          </Callout>
          <Callout tone="error" title="错误">
            用来说明失败原因、不可继续的状态或需要修复的问题。
          </Callout>
        </div>;
      `,content:t.jsxs("div",{style:o,children:[t.jsx(l,{tone:"note",title:"说明",children:"适合补充背景、解释上下文或提示读者注意一个中性信息。"}),t.jsx(l,{tone:"tip",title:"提示",children:"用来展示建议、捷径或更推荐的操作方式。"}),t.jsx(l,{tone:"warning",title:"注意",children:"用来提醒潜在风险、前置条件或需要谨慎处理的内容。"}),t.jsx(l,{tone:"success",title:"完成",children:"用来反馈流程完成、配置生效或结果符合预期。"}),t.jsx(l,{tone:"error",title:"错误",children:"用来说明失败原因、不可继续的状态或需要修复的问题。"})]})}],props:[{name:"tone",type:'"note" | "tip" | "warning" | "success" | "error"',description:"信息块的视觉语义。"},{name:"title",type:"ReactNode",description:"展示在正文上方的可选标题。"},{name:"icon",type:"ReactNode",description:"自定义左侧图标，未传时按 tone 使用默认图标。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",description:"信息块的主要内容。"}]});export{n as default};
