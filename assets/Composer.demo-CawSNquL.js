import{a_ as e,aL as c,h as n,a5 as p,b0 as d,X as A,ak as B,a9 as I,B as P}from"./index-B3pVmlUa.js";import{A as R}from"./index-z-iBTdz5.js";import{P as k}from"./index-CbzvWGRo.js";import{S as E}from"./index-DoDmp6lC.js";/* empty css              *//* empty css              */import{d as z}from"./defineDoc-_c-0B-WB.js";import"./index-C2uBNuqA.js";import"./index-i-l2WLxT.js";import"./dom-DvRKQOia.js";import"./index-AO2ovAON.js";import"./index-DWrSmwND.js";function r(s){const{header:o,model:a,tools:i,attachments:t,attachmentListProps:u,actions:f,footer:g,id:x,role:y,style:v,inputClassName:j,inputStyle:C,className:w,...S}=s,l=m(o),N=m(a)||m(i),b=t!==void 0&&t.length>0;return e.jsxs("section",{id:x,className:c("willa-composer",w),style:v,role:y,children:[l||N?e.jsxs("div",{className:"willa-composer-header",children:[l||a?e.jsxs("div",{className:"willa-composer-meta",children:[l?e.jsx("div",{className:"willa-composer-title",children:o}):null,a?e.jsx("div",{className:"willa-composer-model",children:a}):null]}):null,i?e.jsx("div",{className:"willa-composer-tools",children:i}):null]}):null,b?e.jsx("div",{className:"willa-composer-attachments",children:e.jsx(R,{items:t,...u})}):null,e.jsx(k,{...S,className:c("willa-composer-input",j),style:C,actions:f,footer:g})]})}const m=s=>s!=null&&s!==!1;r.displayName="Composer";const h={display:"grid",gap:"0.85rem",width:"min(100%, 56rem)"},L={color:"var(--willa-text-soft)",fontSize:"0.84rem",lineHeight:1.45},V={display:"grid",gap:"0.16rem"},W={color:"var(--willa-text-soft)",fontSize:"0.78rem",fontWeight:400,lineHeight:1.4},M={display:"grid",gap:"0.85rem",width:"min(100%, 56rem)"},G=()=>{const[s,o]=d.useState(""),[a,i]=d.useState("暂无提交内容");return e.jsxs("div",{style:h,children:[e.jsx(E,{size:"sm",items:[{id:"priority",label:"整理优先级"},{id:"risk",label:"提取风险"},{id:"summary",label:"生成摘要"}],onSelect:t=>o(String(t.label))}),e.jsx(r,{value:s,header:e.jsxs("span",{style:V,children:[e.jsx("span",{children:"产品反馈分析"}),e.jsx("span",{style:W,children:"从用户反馈中提取优先级和风险"})]}),model:e.jsx(P,{tone:"info",children:"Willa AI Pro"}),tools:e.jsxs(A,{gap:"xs",children:[e.jsx(n,{size:"sm",variant:"ghost",icon:e.jsx(B,{}),children:"阅读"}),e.jsx(n,{size:"sm",variant:"ghost",icon:e.jsx(I,{}),children:"推理"})]}),attachments:[{id:"feedback",name:"feedback.csv",meta:"12 KB",href:"data:text/csv;charset=utf-8,id,feedback%0A1,%E5%B8%8C%E6%9C%9B%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%87%BA%E6%9B%B4%E5%BF%AB",downloadName:"feedback.csv"},{id:"roadmap",name:"roadmap.md",meta:"8 KB",href:"data:text/markdown;charset=utf-8,%23%20Roadmap%0A%0A- AI%20Composer%0A- Message%20actions",downloadName:"roadmap.md"}],actions:e.jsx(n,{size:"sm",variant:"ghost",icon:e.jsx(p,{}),children:"优化"}),footer:"已连接 2 个上下文，Enter 发送",minRows:3,placeholder:"让 AI 帮我分析这些反馈的优先级...",onChange:t=>o(t.currentTarget.value),onSubmit:t=>{i(t),o("")}}),e.jsx("div",{style:L,children:a})]})},Y=z({id:"composer",name:"Composer",category:"ai",packageName:"willa/Composer",description:"用于 AI 对话和任务执行的高阶输入组合，承载模型、工具、附件和 PromptInput。",imports:[{name:"Composer",from:"willa/Composer"}],css:"willa/Composer.css",demo:{name:"ComposerPreview",component:G},code:`
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
      `,content:e.jsx("div",{style:h,children:e.jsx(r,{footer:"适合只需要输入和提交的场景",actions:e.jsx(n,{size:"sm",variant:"ghost",icon:e.jsx(p,{}),children:"优化"}),placeholder:"输入任务目标..."})})},{title:"提交状态",code:`
        <div style={stateGridStyle}>
          <Composer
            loading
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            footer="正在发送请求"
            minRows={2}
          />
          <Composer disabled minRows={2} placeholder="当前会话不可输入" />
        </div>;
      `,content:e.jsxs("div",{style:M,children:[e.jsx(r,{loading:!0,defaultValue:"分析最近 7 天用户反馈里的高频问题。",footer:"正在发送请求",minRows:2}),e.jsx(r,{disabled:!0,minRows:2,placeholder:"当前会话不可输入"})]})}],props:[{name:"header",type:"ReactNode",description:"输入台顶部标题或说明。"},{name:"model",type:"ReactNode",description:"模型、模式或知识库选择区域。"},{name:"tools",type:"ReactNode",description:"工具入口，例如搜索、读取文件、推理模式等。"},{name:"attachments",type:"ReactNode",description:"上下文附件数据。Composer 会通过 AttachmentList 渲染附件区域。"},{name:"attachmentListProps",type:'Omit<AttachmentListProps, "items">',description:"传给内部 AttachmentList 的配置。"},{name:"actions",type:"ReactNode",description:"输入框内提交按钮前的操作区。"},{name:"footer",type:"ReactNode",description:"输入框底部辅助信息。"},{name:"value",type:"string",description:"受控输入值，继承 PromptInput 语义。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认输入值。"},{name:"onSubmit",type:"(value: string, event: PromptInputSubmitEvent) => void",description:"提交提示词时触发。"},{name:"inputClassName",type:"string",description:"传给内部 PromptInput 的 className。"}]});export{Y as default};
