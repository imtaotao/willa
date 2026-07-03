import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{C as i,N as a,U as o,d as s,u as c,x as l}from"./react-icons.esm-mVdwEXuX.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";import{t as d}from"./style-POIZQ0ik.js";import{r as f}from"./cardCollapse-BiVTb1xI.js";import{t as p}from"./Timeline-295Bn11_.js";var m=n(e(),1),h=n(r()),g=t();function _({steps:e,activeStep:t=0,size:n=`md`,compact:r=!1,collapsible:i=!1,collapsed:a,defaultCollapsed:o=!1,summary:c,onStepClick:l,onCollapsedChange:u,className:d,...m}){let _=!!l,{canCollapse:v,isCollapsed:y,toggleCollapsed:x}=f({collapsible:i,collapsed:a,defaultCollapsed:o,onCollapsedChange:u}),S=e[t]??e[e.length-1],C=c??S?.title??`${e.length} 个处理步骤`;return(0,g.jsxs)(`div`,{...m,className:(0,h.default)(`willa-reasoning-steps`,`willa-reasoning-steps--${n}`,r&&`willa-reasoning-steps--compact`,_&&`willa-reasoning-steps--interactive`,v&&`willa-reasoning-steps--collapsible`,y&&`willa-reasoning-steps--collapsed`,d),children:[v?(0,g.jsxs)(`button`,{className:`willa-reasoning-steps-toggle`,type:`button`,"aria-expanded":!y,onClick:x,children:[(0,g.jsxs)(`span`,{className:`willa-reasoning-steps-toggle-main`,children:[(0,g.jsx)(`span`,{className:`willa-reasoning-steps-toggle-title`,children:y?`查看处理过程`:`收起处理过程`}),(0,g.jsx)(`span`,{className:`willa-reasoning-steps-toggle-summary`,children:C})]}),(0,g.jsxs)(`span`,{className:`willa-reasoning-steps-toggle-meta`,children:[e.length,` 步`]}),(0,g.jsx)(s,{className:`willa-reasoning-steps-toggle-icon`})]}):null,y?null:(0,g.jsx)(p,{className:`willa-reasoning-steps-timeline`,items:b({activeStep:t,onStepClick:l,steps:e}),size:n,variant:r?`compact`:`default`})]})}var v=({status:e})=>e===`done`?(0,g.jsx)(c,{}):e===`error`?(0,g.jsx)(l,{}):e===`active`?(0,g.jsx)(i,{}):(0,g.jsx)(`span`,{className:`willa-reasoning-step-dot`}),y=(e,t,n)=>e.status?e.status:t<n?`done`:t===n?`active`:`pending`,b=e=>{let{steps:t,activeStep:n,onStepClick:r}=e;return t.map((e,t)=>{let i=y(e,t,n);return{id:e.id,title:e.title,description:e.description,content:e.content?(0,g.jsx)(`span`,{className:`willa-reasoning-step-content`,children:e.content}):void 0,meta:e.meta,icon:e.icon??(0,g.jsx)(v,{status:i}),tone:x[i],className:(0,h.default)(`willa-reasoning-step`,`willa-reasoning-step--${i}`),onClick:r?n=>{r({step:e,index:t,status:i,event:n})}:void 0}})},x={pending:`default`,active:`info`,done:`success`,error:`danger`};_.displayName=`ReasoningSteps`;var S=`https://github.com/openai.png`,C={display:`grid`,gap:`1rem`,width:`min(100%, 58rem)`},w={border:`1px solid var(--willa-line)`,borderRadius:`0.8rem`,background:`var(--willa-panel-bg)`,color:`var(--willa-text)`,fontSize:`0.86rem`,lineHeight:1.55,padding:`0.72rem 0.82rem`},T=[{id:`parse`,title:`理解用户问题`,description:`识别目标、约束和需要核对的上下文。`,meta:`已完成`},{id:`search`,title:`检索相关资料`,description:`读取 architecture.md、component.md 和最近新增组件。`,meta:`进行中`,icon:(0,g.jsx)(o,{})},{id:`draft`,title:`整理回答`,description:`把证据、判断和建议合并成可执行结论。`,meta:`等待中`}],E=u({id:`reasoning-steps`,name:`ReasoningSteps`,category:`ai`,packageName:`willa/ReasoningSteps`,description:`用于展示 AI 推理、检索和执行过程的分步轨迹。`,imports:[{name:`ReasoningSteps`,from:`willa/ReasoningSteps`}],css:`willa/ReasoningSteps.css`,demo:{name:`ReasoningStepsPreview`,component:()=>{let[e,t]=(0,m.useState)(T[1]);return(0,g.jsxs)(`div`,{style:C,children:[(0,g.jsx)(d,{role:`assistant`,name:`Willa AI`,avatarSrc:S,meta:`推理中`,children:(0,g.jsx)(_,{collapsible:!0,defaultCollapsed:!0,steps:T,activeStep:1,summary:`AI 正在检索组件文档和主题规则。`,onStepClick:({step:e})=>t(e)})}),(0,g.jsxs)(`div`,{style:w,children:[`当前查看：`,e.title,` · `,e.meta]}),(0,g.jsx)(_,{compact:!0,size:`sm`,activeStep:2,steps:[{id:`read`,title:`读取文件`,description:`确认组件入口和主题变量位置。`,icon:(0,g.jsx)(a,{}),meta:`已完成`},{id:`compare`,title:`比对实现`,description:`检查 demo、props 和构建入口是否一致。`,meta:`已完成`},{id:`failed`,title:`构建校验`,description:`发现缺少单组件 CSS 入口，需要修正后重跑。`,status:`error`,meta:`失败`}]})]})}},code:`
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
  `,sections:[{title:`折叠过程`,code:`
        <ReasoningSteps
          collapsible
          defaultCollapsed
          activeStep={1}
          summary="默认隐藏 AI 的中间处理过程，用户需要时再展开。"
          steps={reasoningSteps}
        />;
      `,content:(0,g.jsx)(_,{collapsible:!0,defaultCollapsed:!0,activeStep:1,summary:`默认隐藏 AI 的中间处理过程，用户需要时再展开。`,steps:T})},{title:`点击查看详情`,code:`
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
      `,content:(0,g.jsx)(()=>{let[e,t]=(0,m.useState)(T[0]);return(0,g.jsxs)(`div`,{style:C,children:[(0,g.jsx)(_,{steps:T,activeStep:1,onStepClick:({step:e})=>t(e)}),(0,g.jsxs)(`div`,{style:w,children:[(0,g.jsx)(`strong`,{children:e.title}),(0,g.jsx)(`br`,{}),e.description]})]})},{})},{title:`错误节点`,code:`
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
      `,content:(0,g.jsx)(_,{activeStep:1,steps:[{id:`load`,title:`加载上下文`,description:`已读取相关组件和文档。`,meta:`已完成`},{id:`build`,title:`运行构建`,description:`构建失败时可以单独标记错误节点。`,status:`error`,meta:`需要处理`},{id:`retry`,title:`重试验证`,description:`等待修复后继续。`,meta:`等待中`}]})},{title:`附加内容`,code:`
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
      `,content:(0,g.jsx)(_,{activeStep:2,steps:[{id:`intent`,title:`识别意图`,description:`判断用户需要的是组件实现，而不是方案讨论。`,meta:`已完成`},{id:`evidence`,title:`核对证据`,content:`确认 AI 包边界、导出入口、CSS 变量和 demo 注册。`,meta:`已完成`},{id:`deliver`,title:`交付结果`,description:`完成实现并跑最小验证。`,meta:`进行中`}]})}],props:[{name:`steps`,type:`Array<ReasoningStepItem>`,required:!0,description:`推理步骤列表。`},{name:`activeStep`,type:`number`,defaultValue:`0`,description:`当前步骤下标。未显式传 status 的节点会自动推导状态。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`尺寸，默认 md。`},{name:`compact`,type:`boolean`,defaultValue:`false`,description:`是否使用紧凑样式。`},{name:`collapsible`,type:`boolean`,defaultValue:`false`,description:`是否允许折叠步骤列表，默认 false。`},{name:`collapsed`,type:`boolean`,description:`受控折叠状态。`},{name:`defaultCollapsed`,type:`boolean`,defaultValue:`false`,description:`非受控模式下的默认折叠状态。`},{name:`summary`,type:`ReactNode`,defaultValue:`当前步骤标题`,description:`折叠栏摘要；未传时使用当前步骤标题。`},{name:`onStepClick`,type:`(event: ReasoningStepClickEvent) => void`,description:`点击步骤时触发，可用于打开详情、切换右侧预览或定位上下文。`},{name:`onCollapsedChange`,type:`(collapsed: boolean) => void`,description:`折叠状态变化时触发。`},{name:`ReasoningStepItem.id`,type:`string`,required:!0,group:`ReasoningStepItem`,description:`步骤唯一标识。`},{name:`ReasoningStepItem.title`,type:`ReactNode`,required:!0,group:`ReasoningStepItem`,description:`步骤标题。`},{name:`ReasoningStepItem.description`,type:`ReactNode`,group:`ReasoningStepItem`,description:`步骤说明。`},{name:`ReasoningStepItem.meta`,type:`ReactNode`,group:`ReasoningStepItem`,description:`右侧辅助信息。`},{name:`ReasoningStepItem.content`,type:`ReactNode`,group:`ReasoningStepItem`,description:`步骤下方的补充内容。`},{name:`ReasoningStepItem.icon`,type:`ReactNode`,group:`ReasoningStepItem`,description:`自定义步骤图标。`},{name:`ReasoningStepItem.status`,type:`"pending" | "active" | "done" | "error"`,group:`ReasoningStepItem`,description:`覆盖单个步骤状态。`}]});export{E as default};