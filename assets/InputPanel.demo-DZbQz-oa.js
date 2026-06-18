import{aO as e,a4 as m,Q as c,g as i,B as s,aQ as r}from"./index-frW7qygp.js";import{I as n}from"./index-CBgoS-S5.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-xJr95xcI.js";const a={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},f=()=>{const[t,l]=r.useState(""),[o,u]=r.useState("");return e.jsxs("div",{style:a,children:[e.jsx(n,{value:t,onValueChange:l,placeholder:"写下问题、反馈或操作指令...",footer:t?`${t.length} 个字符`:"⌘ Enter 提交",onSubmit:p=>u(p)}),o?e.jsxs(s,{tone:"success",children:["已提交：",o]}):null]})},P=d({id:"input-panel",name:"InputPanel",category:"content",packageName:"willa/InputPanel",description:"用于封装多行输入、底部信息、快捷操作和提交按钮的通用输入面板。",imports:[{name:"InputPanel",from:"willa/InputPanel"}],css:"willa/InputPanel.css",demo:{name:"InputPanelPreview",component:f},code:`
    import { useState } from "react";
    import { InputPanel } from "willa/InputPanel";
    import "willa/InputPanel.css";

    const Demo = () => {
      const [value, setValue] = useState("");

      return (
        <InputPanel
          value={value}
          onValueChange={setValue}
          placeholder="写下问题、反馈或操作指令..."
          footer={value ? \`\${value.length} 个字符\` : "⌘ Enter 提交"}
          onSubmit={(nextValue) => console.log(nextValue)}
        />
      );
    };
  `,sections:[{title:"Enter 发送",code:`
        import { PaperPlaneIcon } from "@radix-ui/react-icons";

        <InputPanel
          submitShortcut="enter"
          submitIcon={<PaperPlaneIcon />}
          submitLabel="发送"
          placeholder="输入 AI 指令，Enter 发送，Shift Enter 换行"
          footer="适合 AI 对话、搜索和生成任务入口"
        />;
      `,content:e.jsx("div",{style:a,children:e.jsx(n,{submitShortcut:"enter",submitIcon:e.jsx(m,{}),submitLabel:"发送",placeholder:"输入 AI 指令，Enter 发送，Shift Enter 换行",footer:"适合 AI 对话、搜索和生成任务入口"})})},{title:"扩展区域",code:`
        <InputPanel
          beforeInput={<Badge tone="info">引用：@产品设计</Badge>}
          placeholder="回复这条讨论..."
          actions={
            <Group gap="xs">
              <Button size="sm" variant="ghost">
                @
              </Button>
              <Button size="sm" variant="ghost">
                表情
              </Button>
            </Group>
          }
          footer="业务可以通过 beforeInput 和 actions 接入引用、提及、表情和附件"
        />;
      `,content:e.jsx("div",{style:a,children:e.jsx(n,{beforeInput:e.jsx(s,{tone:"info",children:"引用：@产品设计"}),placeholder:"回复这条讨论...",actions:e.jsxs(c,{gap:"xs",children:[e.jsx(i,{size:"sm",variant:"ghost",children:"@"}),e.jsx(i,{size:"sm",variant:"ghost",children:"表情"})]}),footer:"业务可以通过 beforeInput 和 actions 接入引用、提及、表情和附件"})})}],props:[{name:"value",type:"string | number | readonly string[]",description:"受控输入值，透传给 textarea。"},{name:"defaultValue",type:"string | number | readonly string[]",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, event: InputPanelSubmitEvent) => void",description:"提交回调。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"输入面板尺寸。"},{name:"autoResize",type:"boolean",defaultValue:"true",description:"是否根据内容自动调整高度，默认开启。"},{name:"minRows",type:"number",defaultValue:"3",description:"最小行数，默认 3。"},{name:"maxRows",type:"number",defaultValue:"8",description:"自动高度时的最大行数，默认 8。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',defaultValue:'"mod-enter"',description:"键盘提交方式，默认 mod-enter。"},{name:"allowEmptySubmit",type:"boolean",defaultValue:"false",description:"是否允许空内容提交。"},{name:"loading",type:"boolean",defaultValue:"false",description:"提交按钮加载态。"},{name:"beforeInput",type:"ReactNode",description:"输入区上方内容，适合引用、上下文或附件摘要。"},{name:"footer",type:"ReactNode",description:"底部左侧说明内容。"},{name:"actions",type:"ReactNode",description:"提交按钮前的快捷操作。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"提交"',description:"提交按钮文案。"},{name:"submitIcon",type:"ReactNode",description:"提交按钮图标。"},{name:"submitButton",type:"ReactNode",description:"自定义提交按钮，传入后会替换默认按钮。"}]});export{P as default};
