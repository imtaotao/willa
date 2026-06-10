import{ah as e,O as m,aj as i}from"./index-Bdj8Q3L_.js";import{B as l}from"./index-mSh11lIp.js";import{P as t}from"./index-CQ_vWQDM.js";/* empty css              */import{d as c}from"./defineDoc-ClbrtoXF.js";import"./heading-D9kAmVXU.js";const o={display:"grid",gap:"1rem",width:"min(100%, 42rem)"},d=()=>{const[a,r]=i.useState(""),[s,p]=i.useState("暂无提交内容");return e.jsxs("div",{style:o,children:[e.jsx(t,{value:a,footer:"Enter 发送，Shift + Enter 换行",placeholder:"让 AI 帮我整理这段会议纪要...",onChange:n=>r(n.currentTarget.value),onSubmit:n=>{p(n),r("")}}),e.jsx("div",{children:s})]})},P=c({id:"prompt-input",name:"PromptInput",category:"ai",packageName:"willa/PromptInput",description:"用于 AI 对话、智能搜索和生成任务的提示词输入区域。",imports:[{name:"PromptInput",from:"willa/PromptInput"}],css:"willa/PromptInput.css",demo:{name:"PromptInputPreview",component:d},code:`
    import { useState } from "react";
    import { PromptInput } from "willa/PromptInput";
    import "willa/PromptInput.css";

    const PromptInputPreview = () => {
      const [value, setValue] = useState("");

      return (
        <PromptInput
          value={value}
          footer="Enter 发送，Shift + Enter 换行"
          placeholder="让 AI 帮我整理这段会议纪要..."
          onChange={(event) => setValue(event.currentTarget.value)}
          onSubmit={(prompt) => {
            console.log(prompt);
            setValue("");
          }}
        />
      );
    };
  `,sections:[{title:"基础输入",content:e.jsx("div",{style:o,children:e.jsx(t,{defaultValue:"请把下面的内容整理成三条行动项。",footer:"支持多行提示词输入",submitLabel:"生成"})})},{title:"工具操作",content:e.jsx("div",{style:o,children:e.jsx(t,{placeholder:"输入你的产品需求或数据分析问题",footer:"上下文已连接到当前文档",actions:e.jsx(l,{size:"sm",variant:"ghost",icon:e.jsx(m,{}),children:"优化"})})})},{title:"提交状态",content:e.jsxs("div",{style:o,children:[e.jsx(t,{defaultValue:"分析最近 7 天用户反馈里的高频问题。",loading:!0,footer:"正在发送请求"}),e.jsx(t,{disabled:!0,placeholder:"当前会话不可输入"})]})},{title:"尺寸",content:e.jsxs("div",{style:o,children:[e.jsx(t,{size:"md",placeholder:"默认尺寸"}),e.jsx(t,{size:"lg",minRows:4,maxRows:10,placeholder:"更适合长提示词和复杂任务描述"})]})}],props:[{name:"value",type:"string",description:"受控输入值，保持原生 textarea 语义。"},{name:"defaultValue",type:"string",description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",description:"提交提示词时触发。"},{name:"submitOnEnter",type:"boolean",description:"是否使用 Enter 提交；默认开启，Shift + Enter 仍然换行。"},{name:"allowEmptySubmit",type:"boolean",description:"是否允许提交空内容，默认不允许。"},{name:"loading",type:"boolean",description:"展示提交中的 loading 状态，并禁用提交按钮。"},{name:"disabled",type:"boolean",description:"禁用输入和提交。"},{name:"autoResize",type:"boolean",description:"是否按内容自动调整高度，默认开启。"},{name:"minRows",type:"number",description:"最小行数，默认 3。"},{name:"maxRows",type:"number",description:"最大行数，默认 8。"},{name:"footer",type:"ReactNode",description:"底部辅助信息。"},{name:"actions",type:"ReactNode",description:"提交按钮前的自定义操作区。"},{name:"submitLabel",type:"ReactNode",description:"提交按钮文案，默认“发送”。"},{name:"submitIcon",type:"ReactNode",description:"提交按钮图标。"},{name:"size",type:'"md" | "lg"',description:"输入区域尺寸。"}]});export{P as default};
