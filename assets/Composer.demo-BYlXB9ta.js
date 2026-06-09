import{ae as e,N as n,ag as i,X as c,P as h,B as g}from"./index-Dn8mGTzM.js";import{B as o}from"./index-DCbHg8ts.js";import{C as s}from"./index-CLx3PXn0.js";import{D as r}from"./index-DyxyAOTi.js";import{G as x}from"./index-Cc9O5CYB.js";import{S as f}from"./index-Bk0hUZ0K.js";/* empty css              */import"./index-1l7BtDkj.js";/* empty css              */import{d as u}from"./defineDoc-BXkZWhLB.js";import"./heading-CRPk0DTc.js";const m={display:"grid",gap:"0.85rem",width:"min(100%, 44rem)"},y={color:"var(--willa-text-soft)",fontSize:"0.84rem",lineHeight:1.45},w={display:"grid",gap:"0.16rem"},j={color:"var(--willa-text-soft)",fontSize:"0.78rem",fontWeight:400,lineHeight:1.4},C={display:"flex",minWidth:0,alignItems:"center",flexWrap:"wrap",gap:"0.42rem"},v={display:"grid",gap:"0.85rem",width:"min(100%, 44rem)"},S=()=>{const[l,a]=i.useState(""),[p,d]=i.useState("暂无提交内容");return e.jsxs("div",{style:m,children:[e.jsx(f,{size:"sm",items:[{id:"priority",label:"整理优先级"},{id:"risk",label:"提取风险"},{id:"summary",label:"生成摘要"}],onSelect:t=>a(String(t.label))}),e.jsx(s,{value:l,header:e.jsxs("span",{style:w,children:[e.jsx("span",{children:"产品反馈分析"}),e.jsx("span",{style:j,children:"从用户反馈中提取优先级和风险"})]}),model:e.jsx(g,{tone:"info",children:"Willa AI Pro"}),tools:e.jsxs(x,{gap:"xs",children:[e.jsx(o,{size:"sm",variant:"ghost",icon:e.jsx(c,{}),children:"阅读"}),e.jsx(o,{size:"sm",variant:"ghost",icon:e.jsx(h,{}),children:"推理"})]}),attachments:e.jsxs("span",{style:C,children:[e.jsx(r,{href:"data:text/csv;charset=utf-8,id,feedback%0A1,%E5%B8%8C%E6%9C%9B%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%87%BA%E6%9B%B4%E5%BF%AB",downloadName:"feedback.csv",name:"feedback.csv"}),e.jsx(r,{href:"data:text/markdown;charset=utf-8,%23%20Roadmap%0A%0A- AI%20Composer%0A- Message%20actions",downloadName:"roadmap.md",name:"roadmap.md"})]}),actions:e.jsx(o,{size:"sm",variant:"ghost",icon:e.jsx(n,{}),children:"优化"}),footer:"已连接 2 个上下文，Enter 发送",minRows:3,placeholder:"让 AI 帮我分析这些反馈的优先级...",onChange:t=>a(t.currentTarget.value),onSubmit:t=>{d(t),a("")}}),e.jsx("div",{style:y,children:p})]})},W=u({id:"composer",name:"Composer",category:"ai",packageName:"willa/Composer",description:"用于 AI 对话和任务执行的高阶输入组合，承载模型、工具、附件和 PromptInput。",imports:[{name:"Composer",from:"willa/Composer"}],css:"willa/Composer.css",demo:{name:"ComposerPreview",component:S},code:`
    import { Composer } from "willa/Composer";
    import { Download } from "willa/Download";
    import { SuggestionChips } from "willa/SuggestionChips";
    import "willa/Composer.css";
    import "willa/Download.css";
    import "willa/SuggestionChips.css";

    <>
      <SuggestionChips
        items={[
          { id: "priority", label: "整理优先级" },
          { id: "risk", label: "提取风险" },
        ]}
      />
      <Composer
        header="产品分析助手"
        model="Willa AI Pro"
        attachments={
          <Download href="/feedback.csv" name="feedback.csv" />
        }
        footer="已连接 2 个上下文，Enter 发送"
        placeholder="让 AI 帮我分析这些反馈的优先级..."
        onSubmit={(prompt) => console.log(prompt)}
      />
    </>
  `,sections:[{title:"紧凑输入",content:e.jsx("div",{style:m,children:e.jsx(s,{footer:"适合只需要输入和提交的场景",actions:e.jsx(o,{size:"sm",variant:"ghost",icon:e.jsx(n,{}),children:"优化"}),placeholder:"输入任务目标..."})})},{title:"提交状态",content:e.jsxs("div",{style:v,children:[e.jsx(s,{loading:!0,defaultValue:"分析最近 7 天用户反馈里的高频问题。",footer:"正在发送请求",minRows:2}),e.jsx(s,{disabled:!0,minRows:2,placeholder:"当前会话不可输入"})]})}],props:[{name:"header",type:"ReactNode",description:"输入台顶部标题或说明。"},{name:"model",type:"ReactNode",description:"模型、模式或知识库选择区域。"},{name:"tools",type:"ReactNode",description:"工具入口，例如搜索、读取文件、推理模式等。"},{name:"attachments",type:"ReactNode",description:"上下文附件区域，可以放文件、图片、网页或代码片段；需要下载时传入链接或自定义操作组件。"},{name:"actions",type:"ReactNode",description:"输入框内提交按钮前的操作区。"},{name:"footer",type:"ReactNode",description:"输入框底部辅助信息。"},{name:"value",type:"string",description:"受控输入值，继承 PromptInput 语义。"},{name:"defaultValue",type:"string",description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",description:"提交提示词时触发。"},{name:"inputClassName",type:"string",description:"传给内部 PromptInput 的 className。"}]});export{W as default};
