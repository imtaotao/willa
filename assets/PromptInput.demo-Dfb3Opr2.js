import{al as t,P as l,an as a}from"./index-D4yNIa2_.js";import{B as m}from"./index-F6EMF-8j.js";import{P as e}from"./index-COfksbe6.js";/* empty css              */import{d}from"./defineDoc-Cmw2Yd3K.js";import"./index-BmF7Yezq.js";const o={display:"grid",gap:"1rem",width:"min(100%, 56rem)"},c=()=>{const[r,i]=a.useState(""),[s,p]=a.useState("暂无提交内容");return t.jsxs("div",{style:o,children:[t.jsx(e,{value:r,footer:"Enter 发送，Shift + Enter 换行",placeholder:"让 AI 帮我整理这段会议纪要...",onChange:n=>i(n.currentTarget.value),onSubmit:n=>{p(n),i("")}}),t.jsx("div",{children:s})]})},h=d({id:"prompt-input",name:"PromptInput",category:"ai",packageName:"willa/PromptInput",description:"用于 AI 对话、智能搜索和生成任务的提示词输入区域。",imports:[{name:"PromptInput",from:"willa/PromptInput"}],css:"willa/PromptInput.css",demo:{name:"PromptInputPreview",component:c},code:`
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
  `,sections:[{title:"基础输入",code:`
        <div style={stackStyle}>
          <PromptInput
            defaultValue="请把下面的内容整理成三条行动项。"
            footer="支持多行提示词输入"
            submitLabel="生成"
          />
        </div>;
      `,content:t.jsx("div",{style:o,children:t.jsx(e,{defaultValue:"请把下面的内容整理成三条行动项。",footer:"支持多行提示词输入",submitLabel:"生成"})})},{title:"工具操作",code:`
        <div style={stackStyle}>
          <PromptInput
            placeholder="输入你的产品需求或数据分析问题"
            footer="上下文已连接到当前文档"
            actions={
              <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
                优化
              </Button>
            }
          />
        </div>;
      `,content:t.jsx("div",{style:o,children:t.jsx(e,{placeholder:"输入你的产品需求或数据分析问题",footer:"上下文已连接到当前文档",actions:t.jsx(m,{size:"sm",variant:"ghost",icon:t.jsx(l,{}),children:"优化"})})})},{title:"提交状态",code:`
        <div style={stackStyle}>
          <PromptInput
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            loading
            footer="正在发送请求"
          />
          <PromptInput disabled placeholder="当前会话不可输入" />
        </div>;
      `,content:t.jsxs("div",{style:o,children:[t.jsx(e,{defaultValue:"分析最近 7 天用户反馈里的高频问题。",loading:!0,footer:"正在发送请求"}),t.jsx(e,{disabled:!0,placeholder:"当前会话不可输入"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <PromptInput size="md" placeholder="默认尺寸" />
          <PromptInput
            size="lg"
            minRows={4}
            maxRows={10}
            placeholder="更适合长提示词和复杂任务描述"
          />
        </div>;
      `,content:t.jsxs("div",{style:o,children:[t.jsx(e,{size:"md",placeholder:"默认尺寸"}),t.jsx(e,{size:"lg",minRows:4,maxRows:10,placeholder:"更适合长提示词和复杂任务描述"})]})}],props:[{name:"value",type:"string",description:"受控输入值，保持原生 textarea 语义。"},{name:"defaultValue",type:"string",description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",description:"提交提示词时触发。"},{name:"submitOnEnter",type:"boolean",description:"是否使用 Enter 提交；默认开启，Shift + Enter 仍然换行。"},{name:"allowEmptySubmit",type:"boolean",description:"是否允许提交空内容，默认不允许。"},{name:"loading",type:"boolean",description:"展示提交中的 loading 状态，并禁用提交按钮。"},{name:"disabled",type:"boolean",description:"禁用输入和提交。"},{name:"autoResize",type:"boolean",description:"是否按内容自动调整高度，默认开启。"},{name:"minRows",type:"number",description:"最小行数，默认 3。"},{name:"maxRows",type:"number",description:"最大行数，默认 8。"},{name:"footer",type:"ReactNode",description:"底部辅助信息。"},{name:"actions",type:"ReactNode",description:"提交按钮前的自定义操作区。"},{name:"submitLabel",type:"ReactNode",description:"提交按钮文案，默认“发送”。"},{name:"submitIcon",type:"ReactNode",description:"提交按钮图标。"},{name:"size",type:'"md" | "lg"',description:"输入区域尺寸。"}]});export{h as default};
