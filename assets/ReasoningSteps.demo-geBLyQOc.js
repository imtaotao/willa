import{aN as S,aL as e,m as C,aw as R,l as k,w as A,D,_ as T,M as V}from"./index-ByRG9JfA.js";import{C as M}from"./index-BHKJSeeO.js";import{T as q}from"./index-DvBXXv8v.js";import{d as z}from"./defineDoc-CVYFOnv2.js";import"./index-7pF7CAJB.js";function o({steps:t,activeStep:i=0,size:n="md",compact:r=!1,collapsible:s=!1,collapsed:l,defaultCollapsed:a=!1,summary:d,onStepClick:u,onCollapsedChange:m,className:x,...I}){const w=!!u,[j,h]=S.useState(a),p=s?l??j:!1,g=t[i]??t[t.length-1],b=d??(g==null?void 0:g.title)??`${t.length} 个处理步骤`,N=()=>{const v=!p;l===void 0&&h(v),m==null||m(v)};return e.jsxs("div",{...I,className:R("willa-reasoning-steps",`willa-reasoning-steps--${n}`,r&&"willa-reasoning-steps--compact",w&&"willa-reasoning-steps--interactive",s&&"willa-reasoning-steps--collapsible",p&&"willa-reasoning-steps--collapsed",x),children:[s?e.jsxs("button",{className:"willa-reasoning-steps-toggle",type:"button","aria-expanded":!p,onClick:N,children:[e.jsxs("span",{className:"willa-reasoning-steps-toggle-main",children:[e.jsx("span",{className:"willa-reasoning-steps-toggle-title",children:p?"查看处理过程":"收起处理过程"}),e.jsx("span",{className:"willa-reasoning-steps-toggle-summary",children:b})]}),e.jsxs("span",{className:"willa-reasoning-steps-toggle-meta",children:[t.length," 步"]}),e.jsx(C,{className:"willa-reasoning-steps-toggle-icon"})]}):null,p?null:e.jsx(q,{className:"willa-reasoning-steps-timeline",items:H({activeStep:i,onStepClick:u,steps:t}),size:n,variant:r?"compact":"default"})]})}const E=({status:t})=>t==="done"?e.jsx(k,{}):t==="error"?e.jsx(A,{}):t==="active"?e.jsx(D,{}):e.jsx("span",{className:"willa-reasoning-step-dot"}),$=(t,i,n)=>t.status?t.status:i<n?"done":i===n?"active":"pending",H=t=>{const{steps:i,activeStep:n,onStepClick:r}=t;return i.map((s,l)=>{const a=$(s,l,n);return{id:s.id,title:s.title,description:s.description,content:s.content?e.jsx("span",{className:"willa-reasoning-step-content",children:s.content}):void 0,meta:s.meta,icon:s.icon??e.jsx(E,{status:a}),tone:P[a],className:R("willa-reasoning-step",`willa-reasoning-step--${a}`),onClick:r?d=>{r({step:s,index:l,status:a,event:d})}:void 0}})},P={pending:"default",active:"info",done:"success",error:"danger"},_="https://github.com/openai.png",f={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},y={border:"1px solid var(--willa-line)",borderRadius:"0.8rem",background:"var(--willa-panel-bg)",color:"var(--willa-text)",fontSize:"0.86rem",lineHeight:1.55,padding:"0.72rem 0.82rem"},c=[{id:"parse",title:"理解用户问题",description:"识别目标、约束和需要核对的上下文。",meta:"已完成"},{id:"search",title:"检索相关资料",description:"读取 architecture.md、component.md 和最近新增组件。",meta:"进行中",icon:e.jsx(T,{})},{id:"draft",title:"整理回答",description:"把证据、判断和建议合并成可执行结论。",meta:"等待中"}],B=()=>{const[t,i]=S.useState(c[1]);return e.jsxs("div",{style:f,children:[e.jsx(M,{role:"assistant",name:"Willa AI",avatarSrc:_,meta:"推理中",children:e.jsx(o,{collapsible:!0,defaultCollapsed:!0,steps:c,activeStep:1,summary:"AI 正在检索组件文档和主题规则。",onStepClick:({step:n})=>i(n)})}),e.jsxs("div",{style:y,children:["当前查看：",t.title," · ",t.meta]}),e.jsx(o,{compact:!0,size:"sm",activeStep:2,steps:[{id:"read",title:"读取文件",description:"确认组件入口和主题变量位置。",icon:e.jsx(V,{}),meta:"已完成"},{id:"compare",title:"比对实现",description:"检查 demo、props 和构建入口是否一致。",meta:"已完成"},{id:"failed",title:"构建校验",description:"发现缺少单组件 CSS 入口，需要修正后重跑。",status:"error",meta:"失败"}]})]})},F=()=>{const[t,i]=S.useState(c[0]);return e.jsxs("div",{style:f,children:[e.jsx(o,{steps:c,activeStep:1,onStepClick:({step:n})=>i(n)}),e.jsxs("div",{style:y,children:[e.jsx("strong",{children:t.title}),e.jsx("br",{}),t.description]})]})},O=z({id:"reasoning-steps",name:"ReasoningSteps",category:"ai",packageName:"willa/ReasoningSteps",description:"用于展示 AI 推理、检索和执行过程的分步轨迹。",imports:[{name:"ReasoningSteps",from:"willa/ReasoningSteps"}],css:"willa/ReasoningSteps.css",demo:{name:"ReasoningStepsPreview",component:B},code:`
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
  `,sections:[{title:"折叠过程",code:`
        <ReasoningSteps
          collapsible
          defaultCollapsed
          activeStep={1}
          summary="默认隐藏 AI 的中间处理过程，用户需要时再展开。"
          steps={reasoningSteps}
        />;
      `,content:e.jsx(o,{collapsible:!0,defaultCollapsed:!0,activeStep:1,summary:"默认隐藏 AI 的中间处理过程，用户需要时再展开。",steps:c})},{title:"点击查看详情",code:`
        import { useState } from "react";
        import {
          ReasoningSteps,
          type ReasoningStepItem,
        } from "willa/ReasoningSteps";
        import "willa/ReasoningSteps.css";

        const steps: Array<ReasoningStepItem> = [
          {
            id: "parse",
            title: "理解用户问题",
            description: "识别目标、约束和需要核对的上下文。",
            meta: "已完成",
          },
          {
            id: "search",
            title: "检索相关资料",
            description: "读取 architecture.md、component.md 和最近新增组件。",
            meta: "进行中",
          },
          {
            id: "draft",
            title: "整理回答",
            description: "把证据、判断和建议合并成可执行结论。",
            meta: "等待中",
          },
        ];

        const Demo = () => {
          const [selectedStep, setSelectedStep] = useState(steps[0]);

          return (
            <div style={{ display: "grid", gap: "1rem" }}>
              <ReasoningSteps
                steps={steps}
                activeStep={1}
                onStepClick={({ step }) => setSelectedStep(step)}
              />
              <div>
                <strong>{selectedStep.title}</strong>
                <br />
                {selectedStep.description}
              </div>
            </div>
          );
        };
      `,content:e.jsx(F,{})},{title:"错误节点",code:`
        <ReasoningSteps
          activeStep={1}
          steps={[
            {
              id: "load",
              title: "加载上下文",
              description: "已读取相关组件和文档。",
              meta: "已完成",
            },
            {
              id: "build",
              title: "运行构建",
              description: "构建失败时可以单独标记错误节点。",
              status: "error",
              meta: "需要处理",
            },
            {
              id: "retry",
              title: "重试验证",
              description: "等待修复后继续。",
              meta: "等待中",
            },
          ]}
        />;
      `,content:e.jsx(o,{activeStep:1,steps:[{id:"load",title:"加载上下文",description:"已读取相关组件和文档。",meta:"已完成"},{id:"build",title:"运行构建",description:"构建失败时可以单独标记错误节点。",status:"error",meta:"需要处理"},{id:"retry",title:"重试验证",description:"等待修复后继续。",meta:"等待中"}]})},{title:"附加内容",code:`
        <ReasoningSteps
          activeStep={2}
          steps={[
            {
              id: "intent",
              title: "识别意图",
              description: "判断用户需要的是组件实现，而不是方案讨论。",
              meta: "已完成",
            },
            {
              id: "evidence",
              title: "核对证据",
              content: "确认 AI 包边界、导出入口、CSS 变量和 demo 注册。",
              meta: "已完成",
            },
            {
              id: "deliver",
              title: "交付结果",
              description: "完成实现并跑最小验证。",
              meta: "进行中",
            },
          ]}
        />;
      `,content:e.jsx(o,{activeStep:2,steps:[{id:"intent",title:"识别意图",description:"判断用户需要的是组件实现，而不是方案讨论。",meta:"已完成"},{id:"evidence",title:"核对证据",content:"确认 AI 包边界、导出入口、CSS 变量和 demo 注册。",meta:"已完成"},{id:"deliver",title:"交付结果",description:"完成实现并跑最小验证。",meta:"进行中"}]})}],props:[{name:"steps",type:"Array<ReasoningStepItem>",required:!0,description:"推理步骤列表。"},{name:"activeStep",type:"number",defaultValue:"0",description:"当前步骤下标。未显式传 status 的节点会自动推导状态。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"compact",type:"boolean",defaultValue:"false",description:"是否使用紧凑样式。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许折叠步骤列表，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",defaultValue:"false",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",defaultValue:"当前步骤标题",description:"折叠栏摘要；未传时使用当前步骤标题。"},{name:"onStepClick",type:"(event: ReasoningStepClickEvent) => void",description:"点击步骤时触发，可用于打开详情、切换右侧预览或定位上下文。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"},{name:"ReasoningStepItem.id",type:"string",required:!0,group:"ReasoningStepItem",description:"步骤唯一标识。"},{name:"ReasoningStepItem.title",type:"ReactNode",required:!0,group:"ReasoningStepItem",description:"步骤标题。"},{name:"ReasoningStepItem.description",type:"ReactNode",group:"ReasoningStepItem",description:"步骤说明。"},{name:"ReasoningStepItem.meta",type:"ReactNode",group:"ReasoningStepItem",description:"右侧辅助信息。"},{name:"ReasoningStepItem.content",type:"ReactNode",group:"ReasoningStepItem",description:"步骤下方的补充内容。"},{name:"ReasoningStepItem.icon",type:"ReactNode",group:"ReasoningStepItem",description:"自定义步骤图标。"},{name:"ReasoningStepItem.status",type:'"pending" | "active" | "done" | "error"',group:"ReasoningStepItem",description:"覆盖单个步骤状态。"}]});export{O as default};
