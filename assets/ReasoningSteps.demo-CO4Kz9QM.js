import{ah as x,af as e,g as D,a7 as y,f as z,p as E,D as q,O as M,x as $}from"./index-N444S8s-.js";import{C as H}from"./index-BKPf4CL8.js";import{d as P}from"./defineDoc-BEY_f65q.js";import"./index-DRVd_2l2.js";function r({steps:t,activeStep:n=0,size:i="md",compact:w=!1,collapsible:d=!1,collapsed:R,defaultCollapsed:h=!1,summary:v,onStepClick:a,onCollapsedChange:m,className:I,...N}){const g=!!a,[b,C]=x.useState(h),l=d?R??b:!1,u=t[n]??t[t.length-1],k=v??(u==null?void 0:u.title)??`${t.length} 个处理步骤`,A=()=>{const s=!l;R===void 0&&C(s),m==null||m(s)};return e.jsxs("div",{...N,className:y("willa-reasoning-steps",`willa-reasoning-steps--${i}`,w&&"willa-reasoning-steps--compact",g&&"willa-reasoning-steps--interactive",d&&"willa-reasoning-steps--collapsible",l&&"willa-reasoning-steps--collapsed",I),children:[d?e.jsxs("button",{className:"willa-reasoning-steps-toggle",type:"button","aria-expanded":!l,onClick:A,children:[e.jsxs("span",{className:"willa-reasoning-steps-toggle-main",children:[e.jsx("span",{className:"willa-reasoning-steps-toggle-title",children:l?"查看处理过程":"收起处理过程"}),e.jsx("span",{className:"willa-reasoning-steps-toggle-summary",children:k})]}),e.jsxs("span",{className:"willa-reasoning-steps-toggle-meta",children:[t.length," 步"]}),e.jsx(D,{className:"willa-reasoning-steps-toggle-icon"})]}):null,l?null:e.jsx("ol",{className:"willa-reasoning-steps-list",children:t.map((s,S)=>{const c=B(s,S,n);return e.jsxs("li",{className:y("willa-reasoning-step",`willa-reasoning-step--${c}`),role:g?"button":void 0,tabIndex:g?0:void 0,onClick:o=>{a==null||a({step:s,index:S,status:c,event:o})},onKeyDown:o=>{a&&(o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),a({step:s,index:S,status:c,event:o})))},children:[e.jsx("span",{className:"willa-reasoning-step-marker","aria-hidden":"true",children:s.icon??e.jsx(T,{status:c})}),e.jsxs("span",{className:"willa-reasoning-step-body",children:[e.jsxs("span",{className:"willa-reasoning-step-header",children:[e.jsx("span",{className:"willa-reasoning-step-title",children:s.title}),s.meta?e.jsx("span",{className:"willa-reasoning-step-meta",children:s.meta}):null]}),s.description?e.jsx("span",{className:"willa-reasoning-step-description",children:s.description}):null,s.content?e.jsx("span",{className:"willa-reasoning-step-content",children:s.content}):null]})]},s.id)})})]})}const T=({status:t})=>t==="done"?e.jsx(z,{}):t==="error"?e.jsx(E,{}):t==="active"?e.jsx(q,{}):e.jsx("span",{className:"willa-reasoning-step-dot"}),B=(t,n,i)=>t.status?t.status:n<i?"done":n===i?"active":"pending",j={display:"grid",gap:"1rem",width:"min(100%, 46rem)",margin:"0 auto"},f={border:"1px solid var(--willa-line)",borderRadius:"0.8rem",background:"var(--willa-panel-bg)",color:"var(--willa-text)",fontSize:"0.86rem",lineHeight:1.55,padding:"0.72rem 0.82rem"},p=[{id:"parse",title:"理解用户问题",description:"识别目标、约束和需要核对的上下文。",meta:"已完成"},{id:"search",title:"检索相关资料",description:"读取 architecture.md、component.md 和最近新增组件。",meta:"进行中",icon:e.jsx(M,{})},{id:"draft",title:"整理回答",description:"把证据、判断和建议合并成可执行结论。",meta:"等待中"}],F=()=>{const[t,n]=x.useState(p[1]);return e.jsxs("div",{style:j,children:[e.jsx(H,{role:"assistant",name:"Willa AI",meta:"推理中",children:e.jsx(r,{collapsible:!0,defaultCollapsed:!0,steps:p,activeStep:1,summary:"AI 正在检索组件文档和主题规则。",onStepClick:({step:i})=>n(i)})}),e.jsxs("div",{style:f,children:["当前查看：",t.title," · ",t.meta]}),e.jsx(r,{compact:!0,size:"sm",activeStep:2,steps:[{id:"read",title:"读取文件",description:"确认组件入口和主题变量位置。",icon:e.jsx($,{}),meta:"已完成"},{id:"compare",title:"比对实现",description:"检查 demo、props 和构建入口是否一致。",meta:"已完成"},{id:"failed",title:"构建校验",description:"发现缺少单组件 CSS 入口，需要修正后重跑。",status:"error",meta:"失败"}]})]})},G=()=>{const[t,n]=x.useState(p[0]);return e.jsxs("div",{style:j,children:[e.jsx(r,{steps:p,activeStep:1,onStepClick:({step:i})=>n(i)}),e.jsxs("div",{style:f,children:[e.jsx("strong",{children:t.title}),e.jsx("br",{}),t.description]})]})},J=P({id:"reasoning-steps",name:"ReasoningSteps",category:"ai",packageName:"willa/ReasoningSteps",description:"用于展示 AI 推理、检索和执行过程的分步轨迹。",imports:[{name:"ReasoningSteps",from:"willa/ReasoningSteps"}],css:"willa/ReasoningSteps.css",demo:{name:"ReasoningStepsPreview",component:F},code:`
    import { useState } from "react";
    import { ReasoningSteps } from "willa/ReasoningSteps";
    import "willa/ReasoningSteps.css";

    const Demo = () => {
      const [selectedStep, setSelectedStep] = useState("search");

      return (
        <>
          <ReasoningSteps
            activeStep={1}
            steps={[
              {
                id: "parse",
                title: "理解用户问题",
                description: "识别目标、约束和需要核对的上下文。",
                meta: "已完成",
              },
              {
                id: "search",
                title: "检索相关资料",
                description: "读取文档和最近新增组件。",
                meta: "进行中",
              },
              {
                id: "draft",
                title: "整理回答",
                description: "把证据、判断和建议合并成结论。",
                meta: "等待中",
              },
            ]}
            collapsible
            defaultCollapsed
            summary="AI 正在检索组件文档和最近新增组件。"
            onStepClick={({ step }) => {
              setSelectedStep(step.id);
            }}
          />
          <div>当前查看：{selectedStep}</div>
        </>
      );
    };
  `,sections:[{title:"折叠过程",content:e.jsx(r,{collapsible:!0,defaultCollapsed:!0,activeStep:1,summary:"默认隐藏 AI 的中间处理过程，用户需要时再展开。",steps:p})},{title:"点击查看详情",content:e.jsx(G,{})},{title:"错误节点",content:e.jsx(r,{activeStep:1,steps:[{id:"load",title:"加载上下文",description:"已读取相关组件和文档。",meta:"已完成"},{id:"build",title:"运行构建",description:"构建失败时可以单独标记错误节点。",status:"error",meta:"需要处理"},{id:"retry",title:"重试验证",description:"等待修复后继续。",meta:"等待中"}]})},{title:"附加内容",content:e.jsx(r,{activeStep:2,steps:[{id:"intent",title:"识别意图",description:"判断用户需要的是组件实现，而不是方案讨论。",meta:"已完成"},{id:"evidence",title:"核对证据",content:"确认 AI 包边界、导出入口、CSS 变量和 demo 注册。",meta:"已完成"},{id:"deliver",title:"交付结果",description:"完成实现并跑最小验证。",meta:"进行中"}]})}],props:[{name:"steps",type:"Array<ReasoningStepItem>",required:!0,description:"推理步骤列表。"},{name:"activeStep",type:"number",description:"当前步骤下标。未显式传 status 的节点会自动推导状态。"},{name:"size",type:'"sm" | "md"',description:"尺寸，默认 md。"},{name:"compact",type:"boolean",description:"是否使用紧凑样式。"},{name:"collapsible",type:"boolean",description:"是否允许折叠步骤列表，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",description:"折叠栏摘要；未传时使用当前步骤标题。"},{name:"onStepClick",type:"(event: ReasoningStepClickEvent) => void",description:"点击步骤时触发，可用于打开详情、切换右侧预览或定位上下文。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"},{name:"ReasoningStepItem.id",type:"string",required:!0,group:"ReasoningStepItem",description:"步骤唯一标识。"},{name:"ReasoningStepItem.title",type:"ReactNode",required:!0,group:"ReasoningStepItem",description:"步骤标题。"},{name:"ReasoningStepItem.description",type:"ReactNode",group:"ReasoningStepItem",description:"步骤说明。"},{name:"ReasoningStepItem.meta",type:"ReactNode",group:"ReasoningStepItem",description:"右侧辅助信息。"},{name:"ReasoningStepItem.content",type:"ReactNode",group:"ReasoningStepItem",description:"步骤下方的补充内容。"},{name:"ReasoningStepItem.icon",type:"ReactNode",group:"ReasoningStepItem",description:"自定义步骤图标。"},{name:"ReasoningStepItem.status",type:'"pending" | "active" | "done" | "error"',group:"ReasoningStepItem",description:"覆盖单个步骤状态。"}]});export{J as default};
