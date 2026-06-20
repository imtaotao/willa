import{aX as e,a$ as p,aZ as n,U as l,h as c,a3 as j,aw as m,al as v,B as d}from"./index-D-yKskWI.js";import{T as f}from"./index-Cuz8XloQ.js";/* empty css              *//* empty css              */import{d as w}from"./defineDoc-G1xfDvY7.js";const x={width:"min(100%, 46rem)",padding:"1.25rem",color:"var(--willa-text)",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.9rem"},R={display:"grid",gap:"0.9rem",padding:"1rem",background:"var(--willa-surface-soft)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem"},y={display:"grid",gap:"0.45rem",padding:"0.9rem",background:"var(--willa-panel-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.65rem"},u={margin:0,color:"var(--willa-text-soft)",fontSize:"0.9rem",lineHeight:1.6},g=t=>e.jsx(m,{align:"center",width:"100%",children:t.children}),T=()=>{const t=n.useRef(null),o=n.useRef(null),r=n.useRef(null),[s,i]=n.useState(!1),[a,h]=n.useState(0),b=[{target:()=>t.current,title:"确认任务上下文",description:"先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",positioning:{placement:"bottom-start"}},{target:()=>r.current,title:"解释核心区域",description:"高亮用户需要优先关注的数据卡片、表格或操作区域。",positioning:{placement:"right"}},{target:()=>o.current,title:"落到下一步操作",description:"最后把用户带到可以继续推进流程的按钮上。",positioning:{placement:"top-end"}}];return e.jsxs(g,{children:[e.jsx("div",{style:x,children:e.jsxs(m,{gap:"lg",children:[e.jsxs(l,{justify:"between",gap:"md",children:[e.jsxs("div",{ref:t,children:[e.jsx("strong",{children:"产品反馈工作台"}),e.jsx("p",{style:u,children:"汇总反馈、优先级和后续动作。"})]}),e.jsx("div",{ref:o,children:e.jsx(c,{icon:e.jsx(v,{}),onClick:()=>{h(0),i(!0)},children:"开始引导"})})]}),e.jsxs("div",{style:R,children:[e.jsxs(l,{gap:"sm",children:[e.jsx(d,{tone:"info",children:"128 条反馈"}),e.jsx(d,{tone:"warning",children:"3 个风险"}),e.jsx(d,{tone:"success",children:"已生成摘要"})]}),e.jsxs("div",{ref:r,style:y,children:[e.jsx("strong",{children:"本周优先处理"}),e.jsx("p",{style:u,children:"登录失败、批量导出超时和移动端表单校验异常。"})]})]})]})}),e.jsx(f,{open:s,current:a,steps:b,onChange:h,onOpenChange:i})]})},C=()=>{const[t,o]=n.useState(!1),[r,s]=n.useState(0),i=[{title:"欢迎使用 Willa",description:"没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",type:"primary"},{title:"保持简洁",description:"Tour 应该只解释关键路径，不要替代完整帮助文档。"}];return e.jsxs(g,{children:[e.jsx(l,{justify:"center",children:e.jsx(c,{icon:e.jsx(j,{}),onClick:()=>{s(0),o(!0)},children:"打开居中引导"})}),e.jsx(f,{open:t,current:r,steps:i,onChange:s,onOpenChange:a=>{o(a),a||s(0)}})]})},S=()=>{const t=n.useRef(null),[o,r]=n.useState(!1),s=[{target:()=>t.current,title:"可定制底部操作",description:"render.actions 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",positioning:{placement:"bottom"}}];return e.jsxs(g,{children:[e.jsx("div",{style:x,children:e.jsxs(m,{gap:"md",children:[e.jsxs("div",{ref:t,style:y,children:[e.jsx("strong",{children:"发布检查"}),e.jsx("p",{style:u,children:"确认文档、示例和样式都已经准备好。"})]}),e.jsx(c,{variant:"outline",onClick:()=>r(!0),children:"查看引导"})]})}),e.jsx(f,{open:o,steps:s,onOpenChange:r,render:{actions:i=>e.jsxs(l,{gap:"xs",children:[e.jsx(c,{size:"sm",variant:"ghost",onClick:()=>r(!1),children:"跳过"}),i]})}})]})},V=w({id:"tour",name:"Tour",packageName:"willa/Tour",description:"用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",imports:[{name:"Tour",from:"willa/Tour"},{name:"Button",from:"willa/Button"}],css:"willa/Tour.css",demo:{name:"TourPreview",component:T},code:p(`
    import { useRef, useState } from "react";
    import { RocketIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { Tour, type TourStep } from "willa/Tour";
    import "willa/Button.css";
    import "willa/Tour.css";

    const Demo = () => {
      const titleRef = useRef<HTMLDivElement>(null);
      const actionRef = useRef<HTMLDivElement>(null);
      const [open, setOpen] = useState(false);
      const [current, setCurrent] = useState(0);
      const steps: Array<TourStep> = [
        {
          target: () => titleRef.current,
          title: "确认任务上下文",
          description: "先让用户知道当前页面正在处理什么任务。",
          positioning: { placement: "bottom-start" },
        },
        {
          target: () => actionRef.current,
          title: "落到下一步操作",
          description: "最后把用户带到可以继续推进流程的按钮上。",
          positioning: { placement: "top-end" },
        },
      ];

      return (
        <>
          <div ref={titleRef}>产品反馈工作台</div>
          <div ref={actionRef}>
            <Button icon={<RocketIcon />} onClick={() => setOpen(true)}>
              开始引导
            </Button>
          </div>
          <Tour
            open={open}
            current={current}
            steps={steps}
            onChange={setCurrent}
            onOpenChange={setOpen}
          />
        </>
      );
    };
  `),sections:[{title:"居中引导",code:p(`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { Tour, type TourStep } from "willa/Tour";
        import "willa/Button.css";
        import "willa/Tour.css";

        const Demo = () => {
          const [open, setOpen] = useState(false);
          const steps: Array<TourStep> = [
            {
              title: "欢迎使用 Willa",
              description: "没有 target 的步骤会在视口中央展示。",
              type: "primary",
            },
          ];

          return (
            <>
              <Button onClick={() => setOpen(true)}>打开居中引导</Button>
              <Tour open={open} steps={steps} onOpenChange={setOpen} />
            </>
          );
        };
      `),content:e.jsx(C,{})},{title:"自定义操作",code:p(`
        <Tour
          open={open}
          steps={steps}
          onOpenChange={setOpen}
          render={{
            actions: (originNode) => (
              <>
                <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
                  跳过
                </Button>
                {originNode}
              </>
            ),
          }}
        />;
      `),content:e.jsx(S,{})}],props:[{name:"steps",type:"Array<TourStep>",required:!0,description:"引导步骤列表。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"current",type:"number",description:"受控当前步骤下标。"},{name:"defaultCurrent",type:"number",defaultValue:"0",description:"非受控默认步骤下标。"},{name:"positioning",type:"{ placement?: TourPlacement; arrow?: boolean; gap?: TourGap; zIndex?: number }",defaultValue:'{ placement: "bottom", arrow: true, gap: { offset: 8, radius: 10 } }',description:"定位、高亮间距、箭头和层级配置。"},{name:"type",type:'"default" | "primary"',defaultValue:'"default"',description:"默认引导面板风格，步骤内 type 优先级更高。"},{name:"behavior",type:"{ keyboard?: boolean; disabledInteraction?: boolean; mask?: boolean; scrollIntoView?: boolean | ScrollIntoViewOptions }",defaultValue:"{ keyboard: true, disabledInteraction: false, mask: true, scrollIntoView: true }",description:"键盘、遮罩、目标交互和自动滚动行为配置。"},{name:"labels",type:"{ next?: ReactNode; prev?: ReactNode; finish?: ReactNode; closeAriaLabel?: string }",defaultValue:'{ next: "下一步", prev: "上一步", finish: "完成", closeAriaLabel: "关闭引导" }',description:"按钮文案和关闭按钮可访问性文案。"},{name:"render",type:"{ indicators?: (current: number, total: number) => ReactNode; actions?: (originNode: ReactNode, info: TourActionRenderInfo) => ReactNode }",description:"自定义步骤指示器和底部操作区。"},{name:"classes",type:"{ root?: string; panel?: string; mask?: string }",description:"根节点、面板和遮罩的类名配置。"},{name:"onChange",type:"(current: number) => void",description:"当前步骤变化回调。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onClose",type:"() => void",description:"关闭引导回调。"},{name:"onFinish",type:"() => void",description:"完成引导回调。"}]});export{V as default};
