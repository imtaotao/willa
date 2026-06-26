import{b1 as e,h as l,a6 as u,b3 as r}from"./index-Bn83wcBb.js";import{P as t}from"./index-Bejkh6iA.js";/* empty css              */import{d}from"./defineDoc-DJuv5mBO.js";import"./index-XiXgM0xc.js";import"./index-DaSjK5Gq.js";import"./index-cTO-fkYM.js";import"./index-ZwQ0d58n.js";const o={display:"grid",gap:"1rem",width:"min(100%, 56rem)"},m=[{id:"wang",label:"王工",value:"@wang ",role:"PM"},{id:"li",label:"李工",value:"@li ",role:"研发"},{id:"zhao",label:"赵工",value:"@zhao ",role:"运营"}],c=[{id:"doc-101",label:"竞品分析材料",value:"#doc-101 ",description:"文档"},{id:"sheet-202",label:"用户反馈表",value:"#sheet-202 ",description:"表格"}],g=[{id:"var-ctx",label:"当前上下文",value:"$ctx "},{id:"var-time",label:"今天日期",value:"$today "}],v=()=>{const[a,i]=r.useState(""),[s,p]=r.useState("暂无提交内容");return e.jsxs("div",{style:o,children:[e.jsx(t,{value:a,footer:"Enter 发送，Shift + Enter 换行",placeholder:"让 AI 帮我整理这段会议纪要...",onChange:n=>i(n.currentTarget.value),onSubmit:n=>{p(n),i("")}}),e.jsx("div",{children:s})]})},I=()=>{const[a,i]=r.useState(""),[s,p]=r.useState("暂无提及内容");return e.jsxs("div",{style:o,children:[e.jsx(t,{value:a,placeholder:"输入问题，输入 @、#、$ 提及上下文",users:m,resources:c,variables:g,footer:"支持 @/#/$ 提及",onValueChange:n=>i(n),onSubmit:n=>{p(n)}}),e.jsxs("div",{children:["已提交：",s]})]})},V=d({id:"prompt-input",name:"PromptInput",category:"ai",packageName:"willa/PromptInput",description:"用于 AI 对话、智能搜索和生成任务的提示词输入区域。",imports:[{name:"PromptInput",from:"willa/PromptInput"}],css:"willa/PromptInput.css",demo:{name:"PromptInputPreview",component:v},code:`
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
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{defaultValue:"请把下面的内容整理成三条行动项。",footer:"支持多行提示词输入",submitLabel:"生成"})})},{title:"工具操作",code:`
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
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{placeholder:"输入你的产品需求或数据分析问题",footer:"上下文已连接到当前文档",actions:e.jsx(l,{size:"sm",variant:"ghost",icon:e.jsx(u,{}),children:"优化"})})})},{title:"提交状态",code:`
        <div style={stackStyle}>
          <PromptInput
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            loading
            footer="正在发送请求"
          />
          <PromptInput disabled placeholder="当前会话不可输入" />
        </div>;
      `,content:e.jsxs("div",{style:o,children:[e.jsx(t,{defaultValue:"分析最近 7 天用户反馈里的高频问题。",loading:!0,footer:"正在发送请求"}),e.jsx(t,{disabled:!0,placeholder:"当前会话不可输入"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <PromptInput size="md" placeholder="默认尺寸" />
          <PromptInput
            size="lg"
            minRows={4}
            maxRows={10}
            placeholder="更适合长提示词和复杂任务描述"
          />
        </div>;
      `,content:e.jsxs("div",{style:o,children:[e.jsx(t,{size:"md",placeholder:"默认尺寸"}),e.jsx(t,{size:"lg",minRows:4,maxRows:10,placeholder:"更适合长提示词和复杂任务描述"})]})},{title:"提及上下文",code:`
        const mentionUsers = [
          { id: "wang", label: "王工", value: "@wang ", role: "PM" },
          { id: "li", label: "李工", value: "@li ", role: "研发" },
          { id: "zhao", label: "赵工", value: "@zhao ", role: "运营" },
        ];
        const mentionResources = [
          { id: "doc-101", label: "竞品分析材料", value: "#doc-101 ", description: "文档" },
          { id: "sheet-202", label: "用户反馈表", value: "#sheet-202 ", description: "表格" },
        ];
        const mentionVariables = [
          { id: "var-ctx", label: "当前上下文", value: "$ctx " },
          { id: "var-time", label: "今天日期", value: "$today " },
        ];

        <div style={stackStyle}>
          <PromptInput
            users={mentionUsers}
            resources={mentionResources}
            variables={mentionVariables}
            footer="支持 @/#/$ 提及"
          />
        </div>;
      `,content:e.jsx(I,{})}],propGroups:[{title:"基础能力",description:"PromptInput 的基础输入与提交能力。"},{title:"提及能力（透传至 MentionInput）",description:"以下属性用于 @/#/$ 提及入口和候选列表，来自 MentionInput。"}],props:[{name:"value",type:"string",description:"受控输入值，保持原生 textarea 语义。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",group:"基础能力",description:"提交提示词时触发。"},{name:"submitOnEnter",type:"boolean",defaultValue:"true",group:"基础能力",description:"是否使用 Enter 提交；默认开启，Shift + Enter 仍然换行。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',defaultValue:"由 submitOnEnter 推导",group:"基础能力",description:"提交快捷键。未传时会根据 submitOnEnter 推导为 enter 或 none。"},{name:"allowEmptySubmit",type:"boolean",defaultValue:"false",group:"基础能力",description:"是否允许提交空内容，默认不允许。"},{name:"loading",type:"boolean",defaultValue:"false",group:"基础能力",description:"展示提交中的 loading 状态，并禁用提交按钮。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"基础能力",description:"禁用输入和提交。"},{name:"autoResize",type:"boolean",defaultValue:"true",group:"基础能力",description:"是否按内容自动调整高度，默认开启。"},{name:"minRows",type:"number",defaultValue:"3",group:"基础能力",description:"最小行数，默认 3。"},{name:"maxRows",type:"number",defaultValue:"8",group:"基础能力",description:"最大行数，默认 8。"},{name:"footer",type:"ReactNode",group:"基础能力",description:"底部辅助信息。"},{name:"actions",type:"ReactNode",group:"基础能力",description:"提交按钮前的自定义操作区。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"发送"',group:"基础能力",description:"提交按钮文案，默认“发送”。"},{name:"submitIcon",type:"ReactNode",defaultValue:"<PaperPlaneIcon />",group:"基础能力",description:"提交按钮图标。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',group:"基础能力",description:"输入区域尺寸。"},{name:"beforeInput",type:"ReactNode",group:"基础能力",description:"输入框前置内容。"},{name:"onValueChange",type:"((value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void)",group:"基础能力",description:"对应事件回调。"},{name:"slotClassNames",type:"InputPanelSlotClassNames",group:"基础能力",description:"插槽样式。"},{name:"submitButton",type:"ReactNode",group:"基础能力",description:"提交按钮。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',group:"提及能力（透传至 MentionInput）",description:"提及入口按钮文案。"},{name:"mentionTriggers",type:"Array<string>",defaultValue:'["@","#","$"]',group:"提及能力（透传至 MentionInput）",description:"提及触发字符集合。"},{name:"users",type:"Array<MentionInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"用于 @ 提及的候选项。"},{name:"resources",type:"Array<MentionInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"用于 # 提及的候选项。"},{name:"mentionSources",type:"Array<MentionInputTriggerSource>",group:"提及能力（透传至 MentionInput）",description:"按触发符自定义提及源与候选。"},{name:"variables",type:"Array<MentionInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"用于 $ 提及的候选项。"},{name:"mentionOptions",type:"Array<MentionInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"完整自定义提及候选项，优先级高于 users/resources/variables。"},{name:"mentionMaxSuggestions",type:"number",defaultValue:"6",group:"提及能力（透传至 MentionInput）",description:"默认提及候选列表的展示上限。"},{name:"mentionListProps",type:"MentionInputMentionListProps",group:"提及能力（透传至 MentionInput）",description:"默认提及列表复用 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange 等。"},{name:"onMentionQuery",type:"(context: MentionInputMentionContext | null) => void",group:"提及能力（透传至 MentionInput）",description:"提及输入变化时触发。"},{name:"renderMentionOptions",type:"(context: { trigger: string; query: string; start: number; end: number }, options: Array<MentionInputMentionItem>, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",group:"提及能力（透传至 MentionInput）",description:"覆盖默认提及列表渲染。"},{name:"renderMentionItem",type:"(context: { trigger: string; query: string; start: number; end: number }, item: MentionInputMentionItem, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",group:"提及能力（透传至 MentionInput）",description:"覆盖单条提及项渲染。"},{name:"onMentionClick",type:"() => void",group:"提及能力（透传至 MentionInput）",description:"点击提及入口按钮时触发。"}]});export{V as default};
