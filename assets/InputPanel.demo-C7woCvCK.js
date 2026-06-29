import{b1 as e,ad as p,Y as c,h as s,b3 as l,B as m}from"./index-BjtE9AVd.js";import{I as n}from"./index-DNT1UAC4.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-CWmZ2fbW.js";const a={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},f=()=>{const[t,i]=l.useState(""),[o,r]=l.useState("");return e.jsxs("div",{style:a,children:[e.jsx(n,{value:t,onValueChange:i,placeholder:"写下问题、反馈或操作指令...",footer:t?`${t.length} 个字符`:"⌘ Enter 提交",onSubmit:u=>r(u)}),o?e.jsxs(m,{tone:"success",children:["已提交：",o]}):null]})},v=d({id:"input-panel",name:"InputPanel",category:"content",packageName:"willa/InputPanel",description:"用于封装多行输入、底部信息、快捷操作和提交按钮的通用输入面板。",imports:[{name:"InputPanel",from:"willa/InputPanel"}],css:"willa/InputPanel.css",demo:{name:"InputPanelPreview",component:f},code:`
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
      `,content:e.jsx("div",{style:a,children:e.jsx(n,{submitShortcut:"enter",submitIcon:e.jsx(p,{}),submitLabel:"发送",placeholder:"输入 AI 指令，Enter 发送，Shift Enter 换行",footer:"适合 AI 对话、搜索和生成任务入口"})})},{title:"扩展区域",code:`
        <InputPanel
          beforeInput={
            <div className="willa-input-panel-reference">
              <span className="willa-input-panel-reference-author">
                @产品设计
              </span>
              <span className="willa-input-panel-reference-content">
                这段说明可以再补充一个实际产品里的信息结构示例。
              </span>
            </div>
          }
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
      `,content:e.jsx("div",{style:a,children:e.jsx(n,{beforeInput:e.jsxs("div",{className:"willa-input-panel-reference",children:[e.jsx("span",{className:"willa-input-panel-reference-author",children:"@产品设计"}),e.jsx("span",{className:"willa-input-panel-reference-content",children:"这段说明可以再补充一个实际产品里的信息结构示例。"})]}),placeholder:"回复这条讨论...",actions:e.jsxs(c,{gap:"xs",children:[e.jsx(s,{size:"sm",variant:"ghost",children:"@"}),e.jsx(s,{size:"sm",variant:"ghost",children:"表情"})]}),footer:"业务可以通过 beforeInput 和 actions 接入引用、提及、表情和附件"})})}],props:[{name:"value",type:"string | number | ReadonlyArray<string>",description:"受控输入值，透传给 textarea。"},{name:"defaultValue",type:"string | number | ReadonlyArray<string>",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, event: InputPanelSubmitEvent) => void",description:"提交回调。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"输入面板尺寸。"},{name:"autoResize",type:"boolean",defaultValue:"true",description:"是否根据内容自动调整高度，默认开启。"},{name:"minRows",type:"number",defaultValue:"3",description:"最小行数，默认 3。"},{name:"maxRows",type:"number",defaultValue:"8",description:"自动高度时的最大行数，默认 8。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',defaultValue:'"mod-enter"',description:"键盘提交方式，默认 mod-enter。"},{name:"allowEmptySubmit",type:"boolean",defaultValue:"false",description:"是否允许空内容提交。"},{name:"loading",type:"boolean",defaultValue:"false",description:"提交按钮加载态。"},{name:"beforeInput",type:"ReactNode",description:"输入区上方内容，适合引用、上下文或附件摘要。"},{name:"footer",type:"ReactNode",description:"底部左侧说明内容。"},{name:"actions",type:"ReactNode",description:"提交按钮前的快捷操作。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"提交"',description:"提交按钮文案。"},{name:"submitIcon",type:"ReactNode",description:"提交按钮图标。"},{name:"submitButton",type:"ReactNode",description:"自定义提交按钮，传入后会替换默认按钮。"},{name:"slotClassNames",type:"InputPanelSlotClassNames",description:"插槽样式。"}]});export{v as default};
