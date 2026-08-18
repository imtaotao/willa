import{c as e,d as t,l as n,p as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{H as i,nt as a}from"./react-icons.esm-mVdwEXuX.js";import{t as o}from"./Button-O1aY2iqB.js";import{t as s}from"./Group-C-JhzSsC.js";import{t as c}from"./Stack-DwlHdG-i.js";import{a as l}from"./index-y4TTR3pk.js";import"./style-B00R6KjV.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as d}from"./Tour-HSyreM7T.js";var f=r(t(),1),p=n(),m={width:`min(100%, 46rem)`,padding:`1.25rem`,color:`var(--willa-text)`,background:`var(--willa-panel-surface-bg)`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.9rem`},h={display:`grid`,gap:`0.9rem`,padding:`1rem`,background:`var(--willa-surface-soft)`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.75rem`},g={display:`grid`,gap:`0.45rem`,padding:`0.9rem`,background:`var(--willa-panel-bg)`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.65rem`},_={margin:0,color:`var(--willa-text-soft)`,fontSize:`0.9rem`,lineHeight:1.6},v=e=>(0,p.jsx)(c,{align:`center`,width:`100%`,children:e.children}),y=u({id:`tour`,name:`Tour`,packageName:`willa/Tour`,description:`用于新功能介绍、关键路径说明和产品操作引导的漫游组件。`,imports:[{name:`Tour`,from:`willa/Tour`},{name:`Button`,from:`willa/Button`}],css:`willa/Tour.css`,demo:{name:`TourPreview`,component:()=>{let e=(0,f.useRef)(null),t=(0,f.useRef)(null),n=(0,f.useRef)(null),[r,i]=(0,f.useState)(!1),[u,y]=(0,f.useState)(0);return(0,p.jsxs)(v,{children:[(0,p.jsx)(`div`,{style:m,children:(0,p.jsxs)(c,{gap:`lg`,children:[(0,p.jsxs)(s,{justify:`between`,gap:`md`,children:[(0,p.jsxs)(`div`,{ref:e,children:[(0,p.jsx)(`strong`,{children:`产品反馈工作台`}),(0,p.jsx)(`p`,{style:_,children:`汇总反馈、优先级和后续动作。`})]}),(0,p.jsx)(`div`,{ref:t,children:(0,p.jsx)(o,{icon:(0,p.jsx)(a,{}),onClick:()=>{y(0),i(!0)},children:`开始引导`})})]}),(0,p.jsxs)(`div`,{style:h,children:[(0,p.jsxs)(s,{gap:`sm`,children:[(0,p.jsx)(l,{tone:`info`,children:`128 条反馈`}),(0,p.jsx)(l,{tone:`warning`,children:`3 个风险`}),(0,p.jsx)(l,{tone:`success`,children:`已生成摘要`})]}),(0,p.jsxs)(`div`,{ref:n,style:g,children:[(0,p.jsx)(`strong`,{children:`本周优先处理`}),(0,p.jsx)(`p`,{style:_,children:`登录失败、批量导出超时和移动端表单校验异常。`})]})]})]})}),(0,p.jsx)(d,{open:r,current:u,steps:[{target:()=>e.current,title:`确认任务上下文`,description:`先让用户知道当前页面正在处理什么任务，避免引导脱离场景。`,positioning:{placement:`bottom-start`}},{target:()=>n.current,title:`解释核心区域`,description:`高亮用户需要优先关注的数据卡片、表格或操作区域。`,positioning:{placement:`right`}},{target:()=>t.current,title:`落到下一步操作`,description:`最后把用户带到可以继续推进流程的按钮上。`,positioning:{placement:`top-end`}}],onChange:y,onOpenChange:i})]})}},code:e(`
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
  `),sections:[{title:`居中引导`,code:e(`
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
      `),content:(0,p.jsx)(()=>{let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(0);return(0,p.jsxs)(v,{children:[(0,p.jsx)(s,{justify:`center`,children:(0,p.jsx)(o,{icon:(0,p.jsx)(i,{}),onClick:()=>{r(0),t(!0)},children:`打开居中引导`})}),(0,p.jsx)(d,{open:e,current:n,steps:[{title:`欢迎使用 Willa`,description:`没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。`,type:`primary`},{title:`保持简洁`,description:`Tour 应该只解释关键路径，不要替代完整帮助文档。`}],onChange:r,onOpenChange:e=>{t(e),e||r(0)}})]})},{})},{title:`自定义操作`,code:e(`
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
      `),content:(0,p.jsx)(()=>{let e=(0,f.useRef)(null),[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(v,{children:[(0,p.jsx)(`div`,{style:m,children:(0,p.jsxs)(c,{gap:`md`,children:[(0,p.jsxs)(`div`,{ref:e,style:g,children:[(0,p.jsx)(`strong`,{children:`发布检查`}),(0,p.jsx)(`p`,{style:_,children:`确认文档、示例和样式都已经准备好。`})]}),(0,p.jsx)(o,{variant:`outline`,onClick:()=>n(!0),children:`查看引导`})]})}),(0,p.jsx)(d,{open:t,steps:[{target:()=>e.current,title:`可定制底部操作`,description:`render.actions 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。`,positioning:{placement:`bottom`}}],onOpenChange:n,render:{actions:e=>(0,p.jsxs)(s,{gap:`xs`,children:[(0,p.jsx)(o,{size:`sm`,variant:`ghost`,onClick:()=>n(!1),children:`跳过`}),e]})}})]})},{})}],props:[{name:`steps`,type:`Array<TourStep>`,required:!0,description:`引导步骤列表。`},{name:`open`,type:`boolean`,description:`受控打开状态。`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`非受控默认打开状态。`},{name:`current`,type:`number`,description:`受控当前步骤下标。`},{name:`defaultCurrent`,type:`number`,defaultValue:`0`,description:`非受控默认步骤下标。`},{name:`positioning`,type:`{ placement?: TourPlacement; arrow?: boolean; gap?: TourGap; zIndex?: number }`,defaultValue:`{ placement: "bottom", arrow: true, gap: { offset: 8, radius: 10 } }`,description:`定位、高亮间距、箭头和层级配置。`},{name:`type`,type:`"default" | "primary"`,defaultValue:`"default"`,description:`默认引导面板风格，步骤内 type 优先级更高。`},{name:`behavior`,type:`{ keyboard?: boolean; disabledInteraction?: boolean; mask?: boolean; scrollIntoView?: boolean | ScrollIntoViewOptions }`,defaultValue:`{ keyboard: true, disabledInteraction: false, mask: true, scrollIntoView: true }`,description:`键盘、遮罩、目标交互和自动滚动行为配置。`},{name:`labels`,type:`{ next?: ReactNode; prev?: ReactNode; finish?: ReactNode; closeAriaLabel?: string }`,defaultValue:`{ next: "下一步", prev: "上一步", finish: "完成", closeAriaLabel: "关闭引导" }`,description:`按钮文案和关闭按钮可访问性文案。`},{name:`render`,type:`{ indicators?: (current: number, total: number) => ReactNode; actions?: (originNode: ReactNode, info: TourActionRenderInfo) => ReactNode }`,description:`自定义步骤指示器和底部操作区。`},{name:`classes`,type:`{ root?: string; panel?: string; mask?: string }`,description:`根节点、面板和遮罩的类名配置。`},{name:`onChange`,type:`(current: number) => void`,description:`当前步骤变化回调。`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`打开状态变化回调。`},{name:`onClose`,type:`() => void`,description:`关闭引导回调。`},{name:`onFinish`,type:`() => void`,description:`完成引导回调。`}]});export{y as default};