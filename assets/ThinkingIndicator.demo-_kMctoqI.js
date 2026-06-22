import{a_ as e,a6 as a,ak as t}from"./index-g4K0_yed.js";import{C as n}from"./index-CCx5oRb_.js";import{T as i}from"./index-ent-srhd.js";import{d as s}from"./defineDoc-niBMkqMm.js";import"./index-BTDJfBVU.js";const o="https://github.com/openai.png",l={display:"grid",gap:"1rem",width:"min(100%, 58rem)",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)",padding:"1rem"},r=()=>e.jsx("div",{style:l,children:e.jsx(n,{role:"assistant",name:"Willa AI",avatarSrc:o,meta:"处理中",children:e.jsx(i,{collapsible:!0,defaultCollapsed:!0,status:"searching",label:"正在检索上下文",description:"会先读取相关文档，再整理可执行建议。",summary:"AI 正在处理公开任务状态。",steps:["理解问题","检索资料","生成回答"],activeStep:1})})}),u=s({id:"thinking-indicator",name:"ThinkingIndicator",category:"ai",packageName:"willa/ThinkingIndicator",description:"用于展示 AI 正在思考、检索、读取或生成的公开任务状态，不展示模型内部思维链。",imports:[{name:"ThinkingIndicator",from:"willa/ThinkingIndicator"}],css:"willa/ThinkingIndicator.css",demo:{name:"ThinkingIndicatorPreview",component:r},code:`
    import { ThinkingIndicator } from "willa/ThinkingIndicator";
    import "willa/ThinkingIndicator.css";

    <ThinkingIndicator
      collapsible
      defaultCollapsed
      status="searching"
      label="正在检索上下文"
      description="会先读取相关文档，再整理可执行建议。"
      summary="AI 正在处理公开任务状态。"
      steps={["理解问题", "检索资料", "生成回答"]}
      activeStep={1}
    />;
  `,sections:[{title:"折叠状态",code:`
        <ThinkingIndicator
          collapsible
          defaultCollapsed
          status="working"
          label="正在整理工具结果"
          description="已读取相关文件，正在压缩成可展示的用户摘要。"
          summary="中间处理过程默认隐藏。"
          steps={["读取文件", "整理证据", "生成摘要"]}
          activeStep={2}
        />;
      `,content:e.jsx(i,{collapsible:!0,defaultCollapsed:!0,status:"working",label:"正在整理工具结果",description:"已读取相关文件，正在压缩成可展示的用户摘要。",summary:"中间处理过程默认隐藏。",steps:["读取文件","整理证据","生成摘要"],activeStep:2})},{title:"状态类型",code:`
        <div style={{ display: "grid", gap: "0.75rem", minWidth: 0 }}>
          <ThinkingIndicator status="thinking" />
          <ThinkingIndicator
            status="searching"
            icon={<MagnifyingGlassIcon />}
            label="正在检索知识库"
            tone="accent"
          />
          <ThinkingIndicator
            status="reading"
            icon={<ReaderIcon />}
            label="正在读取文件"
            tone="warning"
          />
          <ThinkingIndicator status="generating" tone="success" />
        </div>;
      `,content:e.jsxs("div",{style:{display:"grid",gap:"0.75rem",minWidth:0},children:[e.jsx(i,{status:"thinking"}),e.jsx(i,{status:"searching",icon:e.jsx(a,{}),label:"正在检索知识库",tone:"accent"}),e.jsx(i,{status:"reading",icon:e.jsx(t,{}),label:"正在读取文件",tone:"warning"}),e.jsx(i,{status:"generating",tone:"success"})]})},{title:"轻量模式",code:`
        <ThinkingIndicator
          compact
          size="sm"
          status="working"
          label="正在整理工具返回结果"
        />;
      `,content:e.jsx(i,{compact:!0,size:"sm",status:"working",label:"正在整理工具返回结果"})}],props:[{name:"status",type:'"thinking" | "searching" | "reading" | "generating" | "working"',defaultValue:'"thinking"',description:"状态类型，默认 thinking。"},{name:"label",type:"ReactNode",description:"主状态文案；未传时根据 status 使用默认文案。"},{name:"description",type:"ReactNode",description:"补充说明。"},{name:"icon",type:"ReactNode",defaultValue:"<ThinkingDots />",description:"自定义状态图标；未传时使用动态点状指示。"},{name:"steps",type:"Array<ReactNode>",description:"公开任务步骤，不用于展示模型内部思维链。"},{name:"activeStep",type:"number",defaultValue:"0",description:"当前步骤下标，默认 0。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"tone",type:'"neutral" | "accent" | "success" | "warning"',defaultValue:'"accent"',description:"状态色，默认 accent。"},{name:"animated",type:"boolean",defaultValue:"true",description:"是否启用点状动画，默认 true。"},{name:"compact",type:"boolean",defaultValue:"false",description:"是否使用无边框的轻量形态。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许折叠状态详情，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",defaultValue:"false",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",defaultValue:"description ?? label",description:"折叠态摘要；未传时使用 description 或 label。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"}]});export{u as default};
