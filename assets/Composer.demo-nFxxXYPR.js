import{b0 as e,aN as l,h as r,a6 as d,b2 as c,Y as j,al as w,aa as M,B as P}from"./index-OxPLBg-5.js";import{A as R}from"./index-DT_KunoT.js";import{P as E}from"./index-DP4_wFzv.js";import{S as B}from"./index-DoX8hLl9.js";/* empty css              *//* empty css              */import{d as k}from"./defineDoc-CWgp7IjM.js";import"./index-CiAhgGPG.js";import"./index-B7_NmFlw.js";import"./dom-DvRKQOia.js";import"./index-BLV3X_Eg.js";import"./index-CQZu8V1g.js";import"./index-Ds3Fc0RI.js";import"./index-Dy1kRVgo.js";import"./index-RsvywUsV.js";function a(o){const{header:n,model:i,tools:s,attachments:t,attachmentListProps:y,actions:h,footer:g,id:I,role:x,style:f,inputClassName:b,inputStyle:v,className:C,...S}=o,m=p(n),N=p(i)||p(s),A=t!==void 0&&t.length>0;return e.jsxs("section",{id:I,className:l("willa-composer",C),style:f,role:x,children:[m||N?e.jsxs("div",{className:"willa-composer-header",children:[m||i?e.jsxs("div",{className:"willa-composer-meta",children:[m?e.jsx("div",{className:"willa-composer-title",children:n}):null,i?e.jsx("div",{className:"willa-composer-model",children:i}):null]}):null,s?e.jsx("div",{className:"willa-composer-tools",children:s}):null]}):null,A?e.jsx("div",{className:"willa-composer-attachments",children:e.jsx(R,{items:t,...y})}):null,e.jsx(E,{...S,className:l("willa-composer-input",b),style:v,actions:h,footer:g})]})}const p=o=>o!=null&&o!==!1;a.displayName="Composer";const u={display:"grid",gap:"0.85rem",width:"min(100%, 56rem)"},L={color:"var(--willa-text-soft)",fontSize:"0.84rem",lineHeight:1.45},z={display:"grid",gap:"0.16rem"},V={color:"var(--willa-text-soft)",fontSize:"0.78rem",fontWeight:400,lineHeight:1.4},T={display:"grid",gap:"0.85rem",width:"min(100%, 56rem)"},O=()=>{const[o,n]=c.useState(""),[i,s]=c.useState("暂无提交内容");return e.jsxs("div",{style:u,children:[e.jsx(B,{size:"sm",items:[{id:"priority",label:"整理优先级"},{id:"risk",label:"提取风险"},{id:"summary",label:"生成摘要"}],onSelect:t=>n(String(t.label))}),e.jsx(a,{value:o,header:e.jsxs("span",{style:z,children:[e.jsx("span",{children:"产品反馈分析"}),e.jsx("span",{style:V,children:"从用户反馈中提取优先级和风险"})]}),model:e.jsx(P,{tone:"info",children:"Willa AI Pro"}),tools:e.jsxs(j,{gap:"xs",children:[e.jsx(r,{size:"sm",variant:"ghost",icon:e.jsx(w,{}),children:"阅读"}),e.jsx(r,{size:"sm",variant:"ghost",icon:e.jsx(M,{}),children:"推理"})]}),attachments:[{id:"feedback",name:"feedback.csv",meta:"12 KB",href:"data:text/csv;charset=utf-8,id,feedback%0A1,%E5%B8%8C%E6%9C%9B%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%87%BA%E6%9B%B4%E5%BF%AB",downloadName:"feedback.csv"},{id:"roadmap",name:"roadmap.md",meta:"8 KB",href:"data:text/markdown;charset=utf-8,%23%20Roadmap%0A%0A- AI%20Composer%0A- Message%20actions",downloadName:"roadmap.md"}],actions:e.jsx(r,{size:"sm",variant:"ghost",icon:e.jsx(d,{}),children:"优化"}),footer:"已连接 2 个上下文，Enter 发送",minRows:3,placeholder:"让 AI 帮我分析这些反馈的优先级...",onChange:t=>n(t.currentTarget.value),onSubmit:t=>{s(t),n("")}}),e.jsx("div",{style:L,children:i})]})},ee=k({id:"composer",name:"Composer",category:"ai",packageName:"willa/Composer",description:"用于 AI 对话和任务执行的高阶输入组合，承载模型、工具、附件和 PromptInput。",imports:[{name:"Composer",from:"willa/Composer"}],css:"willa/Composer.css",demo:{name:"ComposerPreview",component:O},code:`
    import { Composer } from "willa/Composer";
    import { SuggestionChips } from "willa/SuggestionChips";
    import "willa/Composer.css";
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
        attachments={[
          { id: "feedback", name: "feedback.csv", href: "/feedback.csv" },
        ]}
        footer="已连接 2 个上下文，Enter 发送"
        placeholder="让 AI 帮我分析这些反馈的优先级..."
        onSubmit={(prompt) => console.log(prompt)}
      />
    </>;
  `,sections:[{title:"紧凑输入",code:`
        <div style={stackStyle}>
          <Composer
            footer="适合只需要输入和提交的场景"
            actions={
              <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
                优化
              </Button>
            }
            placeholder="输入任务目标..."
          />
        </div>;
      `,content:e.jsx("div",{style:u,children:e.jsx(a,{footer:"适合只需要输入和提交的场景",actions:e.jsx(r,{size:"sm",variant:"ghost",icon:e.jsx(d,{}),children:"优化"}),placeholder:"输入任务目标..."})})},{title:"提交状态",code:`
        <div style={stateGridStyle}>
          <Composer
            loading
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            footer="正在发送请求"
            minRows={2}
          />
          <Composer disabled minRows={2} placeholder="当前会话不可输入" />
        </div>;
      `,content:e.jsxs("div",{style:T,children:[e.jsx(a,{loading:!0,defaultValue:"分析最近 7 天用户反馈里的高频问题。",footer:"正在发送请求",minRows:2}),e.jsx(a,{disabled:!0,minRows:2,placeholder:"当前会话不可输入"})]})}],props:[{name:"header",type:"ReactNode",description:"输入台顶部标题或说明。"},{name:"model",type:"ReactNode",description:"模型、模式或知识库选择区域。"},{name:"tools",type:"ReactNode",description:"工具入口，例如搜索、读取文件、推理模式等。"},{name:"attachments",type:"Array<AttachmentListItem>",description:"上下文附件数据。Composer 会通过 AttachmentList 渲染附件区域。"},{name:"attachmentListProps",type:'Omit<AttachmentListProps, "items">',description:"传给内部 AttachmentList 的配置。"},{name:"actions",type:"ReactNode",description:"输入框内提交按钮前的操作区。"},{name:"footer",type:"ReactNode",description:"输入框底部辅助信息。"},{name:"value",type:"string",description:"受控输入值，继承 PromptInput 语义。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",description:"提交提示词时触发。"},{name:"inputClassName",type:"string",description:"传给内部 PromptInput 的 className。"},{name:"allowEmptySubmit",type:"boolean",description:"是否允许空内容提交。"},{name:"autoResize",type:"boolean",description:"是否自动高度。"},{name:"beforeInput",type:"ReactNode",description:"内部输入框前置内容。"},{name:"className",type:"string",description:"自定义 className。"},{name:"id",type:"string",description:"元素 id。"},{name:"inputStyle",type:"CSSProperties",description:"输入区域样式。"},{name:"loading",type:"boolean",description:"是否展示加载态。"},{name:"maxRows",type:"number",description:"行数限制。"},{name:"minRows",type:"number",description:"行数限制。"},{name:"onValueChange",type:"((value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void)",description:"对应事件回调。"},{name:"role",type:"AriaRole",description:"无障碍角色。"},{name:"size",type:"PromptInputSize",description:"尺寸。"},{name:"slotClassNames",type:"InputPanelSlotClassNames",description:"插槽样式。"},{name:"style",type:"CSSProperties",description:"自定义内联样式。"},{name:"submitButton",type:"ReactNode",description:"提交按钮。"},{name:"submitIcon",type:"ReactNode",description:"提交图标。"},{name:"submitLabel",type:"ReactNode",description:"文案标签。"},{name:"submitOnEnter",type:"boolean",description:"回车时提交。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',description:"内部 PromptInput 的提交快捷键。未传时会根据 submitOnEnter 推导。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',description:"内部 PromptInput 的提及入口按钮内容。"},{name:"mentionTriggers",type:"Array<string>",defaultValue:'["@","#","$"]',description:"内部 PromptInput 支持的提及触发字符集合。"},{name:"users",type:"Array<MentionInputMentionItem>",description:"用于 @ 提及的候选项。"},{name:"resources",type:"Array<MentionInputMentionItem>",description:"用于 # 提及的候选项。"},{name:"variables",type:"Array<MentionInputMentionItem>",description:"用于 $ 提及的候选项。"},{name:"mentionSources",type:"Array<MentionInputTriggerSource>",description:"按触发符自定义内部 PromptInput 的提及源与候选。"},{name:"mentionOptions",type:"Array<MentionInputMentionItem>",description:"完整自定义提及候选项，优先级高于 users/resources/variables。"},{name:"mentionMaxSuggestions",type:"number",defaultValue:"6",description:"默认提及候选列表的展示上限。"},{name:"mentionListProps",type:"MentionInputMentionListProps",description:"默认提及列表复用 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange 等。"},{name:"onMentionQuery",type:"(context: MentionInputMentionContext | null) => void",description:"内部 PromptInput 的提及输入变化回调。"},{name:"renderMentionOptions",type:"(context: { trigger: string; query: string; start: number; end: number }, options: Array<MentionInputMentionItem>, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",description:"覆盖内部 PromptInput 的默认提及列表渲染。"},{name:"renderMentionItem",type:"(context: { trigger: string; query: string; start: number; end: number }, item: MentionInputMentionItem, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",description:"覆盖内部 PromptInput 的单条提及项渲染。"},{name:"onMentionClick",type:"() => void",description:"点击内部 PromptInput 的提及入口按钮时触发。"}]});export{ee as default};
