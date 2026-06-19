import{aQ as o,ay as j,aO as t,az as b,g as v,aP as $e,T as De,w as Fe,aR as P,Q as H,$ as We,ao as Z,af as qe,B as U}from"./index-DFk63Vca.js";/* empty css              *//* empty css              */import{d as Xe}from"./defineDoc-CbEAUI29.js";const y=12,Ye=8,Q=8,Ge={offset:8,radius:10};function ee(e){const{open:n,defaultOpen:i=!1,current:l,defaultCurrent:a=0,steps:r,placement:h="bottom",type:w="default",mask:C=!0,arrow:T=!0,gap:k=Ge,keyboard:R=!0,disabledInteraction:xe=!1,scrollIntoView:_=!0,nextText:be="下一步",prevText:je="上一步",finishText:ve="完成",closeAriaLabel:Ce="关闭引导",zIndex:ne,className:Te,panelClassName:ke,maskClassName:Re,indicatorsRender:$,actionsRender:re,onChange:N,onClose:O,onFinish:E,onOpenChange:S}=e,oe=o.useId(),se=n!==void 0,ie=l!==void 0,[_e,Ne]=o.useState(i),[Oe,Ee]=o.useState(a),f=n??_e,u=j(l??Oe,0,r.length-1),s=r[u],x=r.length,I=u===0,B=u===x-1,Se=(s==null?void 0:s.type)??w,le=(s==null?void 0:s.mask)??C,Ie=(s==null?void 0:s.arrow)??T,A=(s==null?void 0:s.placement)??h,ae=s==null?void 0:s.target,ce=o.useRef(null),[D,de]=o.useState(null),[d,F]=o.useState(null),[Be,W]=o.useState(!1),[Ae,z]=o.useState(!1),m=o.useRef(null),q=o.useRef(u),L=o.useCallback(c=>{se||Ne(c),S==null||S(c)},[se,S]),M=o.useCallback(c=>{const p=j(c,0,r.length-1);ie||Ee(p),N==null||N(p)},[ie,N,r.length]),V=o.useCallback(()=>{L(!1),O==null||O()},[O,L]),ue=o.useCallback(()=>{E==null||E(),L(!1)},[E,L]),X=o.useCallback(()=>{I||M(u-1)},[u,I,M]),Y=o.useCallback(()=>{if(B){ue();return}M(u+1)},[u,ue,B,M]),G=o.useCallback(()=>{if(!f||!s||typeof window>"u")return;const c=Ue(ae);c&&_&&c.scrollIntoView(typeof _=="boolean"?{block:"center",inline:"center"}:_);const p=ce.current,K=c?Qe(c.getBoundingClientRect(),k):null;if(de(g=>et(g,K)?g:K),!p)return;if(!c||A==="center"){F(g=>(g==null?void 0:g.placement)==="center"?g:{top:y,left:y,placement:"center"});return}const He=p.getBoundingClientRect(),we=nt({panelRect:He,placement:A,targetRect:K});F(g=>tt(g,we)?g:we)},[s,ae,k,f,A,_]);o.useLayoutEffect(()=>{if(!f||r.length===0||typeof window>"u")return;G();const c=()=>G();return window.addEventListener("resize",c),window.addEventListener("scroll",c,!0),()=>{window.removeEventListener("resize",c),window.removeEventListener("scroll",c,!0)}},[f,r.length,G]),o.useEffect(()=>{if(!f||!R||typeof document>"u")return;const c=p=>{if(p.key==="Escape"){V();return}if(p.key==="ArrowRight"){Y();return}p.key==="ArrowLeft"&&X()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[V,f,R,Y,X]),o.useEffect(()=>{if(!f||typeof document>"u")return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[f]),o.useEffect(()=>{f||(m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null),W(!1),z(!1),de(null),F(null))},[f]),o.useEffect(()=>{if(!(!f||typeof window>"u"))return m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null),W(!1),m.current=window.requestAnimationFrame(()=>{W(!0),m.current=null}),()=>{m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null)}},[f]),o.useEffect(()=>{if(!f||typeof window>"u"){q.current=u,z(!1);return}if(q.current===u)return;q.current=u,z(!0);const c=window.setTimeout(()=>{z(!1)},300);return()=>window.clearTimeout(c)},[u,f]);const fe=s!=null&&s.title?`${oe}-title`:void 0,pe=s!=null&&s.description?`${oe}-description`:void 0,me=ne===void 0?{}:{"--willa-tour-z-index":ne},ze={...me,top:(d==null?void 0:d.placement)==="center"?"50%":0,left:(d==null?void 0:d.placement)==="center"?"50%":0,transform:(d==null?void 0:d.placement)==="center"?"translate3d(-50%, -50%, 0)":d?`translate3d(${d.left}px, ${d.top}px, 0)`:void 0,opacity:d?1:0,visibility:d?"visible":"hidden"},Le=me,Me=o.useMemo(()=>$?$(u,x):t.jsx("span",{className:"willa-tour__dots","aria-hidden":"true",children:r.map((c,p)=>t.jsx("span",{className:b("willa-tour__dot",p===u&&"willa-tour__dot--active")},p))}),[u,$,r,x]);if(!f||!s||x===0||typeof document>"u")return null;const he=t.jsxs(t.Fragment,{children:[I?null:t.jsx(v,{type:"button",variant:"ghost",size:"sm",onClick:X,children:s.prevText??je}),t.jsx(v,{type:"button",variant:"solid",size:"sm",onClick:Y,children:B?ve:s.nextText??be})]}),Ve=re?re(he,{current:u,total:x,isFirst:I,isLast:B}):he;return $e.createPortal(t.jsxs("div",{className:b("willa-tour",`willa-tour--${Se}`,Be&&"willa-tour--animate",Ae&&"willa-tour--step-transitioning",Te),style:Le,children:[le?t.jsx(Ke,{className:Re,rect:D,onClick:V}):null,D?t.jsx("div",{className:b("willa-tour__highlight",xe&&"willa-tour__highlight--disabled"),style:Ze(D),"aria-hidden":"true"}):null,t.jsxs("div",{ref:ce,className:b("willa-tour__panel",`willa-tour__panel--${(d==null?void 0:d.placement)??A}`,ke),style:ze,role:"dialog","aria-modal":le,"aria-labelledby":fe,"aria-describedby":pe,tabIndex:-1,onKeyDown:Pe,children:[Ie&&(d==null?void 0:d.placement)!=="center"?t.jsx("span",{className:"willa-tour__arrow","aria-hidden":"true"}):null,t.jsx(De,{className:"willa-tour__close",ariaLabel:Ce,icon:t.jsx(Fe,{}),variant:"ghost",size:"sm",onClick:V}),s.cover?t.jsx("div",{className:"willa-tour__cover",children:s.cover}):null,t.jsxs("div",{className:"willa-tour__content",children:[s.title?t.jsx("h2",{className:"willa-tour__title",id:fe,children:s.title}):null,s.description?t.jsx("div",{className:"willa-tour__description",id:pe,children:s.description}):null]}),t.jsxs("div",{className:"willa-tour__footer",children:[t.jsxs("div",{className:"willa-tour__indicators",children:[t.jsxs("span",{className:"willa-tour__count",children:[u+1," / ",x]}),Me]}),t.jsx("div",{className:"willa-tour__actions",children:Ve})]})]})]}),document.body)}const Ke=e=>{if(!e.rect||typeof window>"u")return t.jsx("button",{type:"button",className:b("willa-tour__mask",e.className),"aria-label":"关闭引导",style:{top:0,left:0,width:"100vw",height:"100vh"},onClick:e.onClick});const n=e.rect,i=window.innerWidth,l=window.innerHeight,a=1,r=Math.max(0,n.left-a),h=Math.min(i,n.left+n.width+a),w=[{top:0,left:0,width:i,height:n.top},{top:n.top,left:0,width:r+a,height:n.height},{top:n.top,left:h-a,width:Math.max(0,i-h+a),height:n.height},{top:n.top+n.height,left:0,width:i,height:Math.max(0,l-n.top-n.height)}];return t.jsx(t.Fragment,{children:w.map((C,T)=>t.jsx("button",{type:"button",className:b("willa-tour__mask",e.className),"aria-label":"关闭引导",style:C,onClick:e.onClick},T))})},Pe=e=>{e.key==="Tab"&&e.stopPropagation()},Ue=e=>!e||typeof document>"u"?null:e instanceof HTMLElement?e:typeof e=="function"?e():document.querySelector(e),Qe=(e,n)=>{const i=Je(n),l=i.offsetX,a=i.offsetY;return{top:j(e.top-a,0,window.innerHeight),left:j(e.left-l,0,window.innerWidth),width:Math.min(e.width+l*2,window.innerWidth),height:Math.min(e.height+a*2,window.innerHeight),radius:i.radius}},Je=e=>{if(typeof e=="number")return{offsetX:e,offsetY:e,radius:Q};const n=e.offset??Ye;return Array.isArray(n)?{offsetX:n[0],offsetY:n[1],radius:e.radius??Q}:{offsetX:n,offsetY:n,radius:e.radius??Q}},Ze=e=>({clipPath:`inset(${e.top}px ${window.innerWidth-e.left-e.width}px ${window.innerHeight-e.top-e.height}px ${e.left}px round ${e.radius}px)`}),et=(e,n)=>e===n?!0:!e||!n?!1:e.top===n.top&&e.left===n.left&&e.width===n.width&&e.height===n.height&&e.radius===n.radius,tt=(e,n)=>e?e.top===n.top&&e.left===n.left&&e.placement===n.placement:!1,nt=e=>{const{targetRect:n,panelRect:i}=e,l=n?e.placement:"center";if(!n||l==="center")return{top:y,left:y,placement:"center"};const[a,r="center"]=l.split("-"),w=rt({align:r,offset:14,panelRect:i,side:a,targetRect:n});return{top:j(w.top,y,window.innerHeight-i.height-y),left:j(w.left,y,window.innerWidth-i.width-y),placement:l}},rt=e=>{const{align:n,offset:i,panelRect:l,side:a,targetRect:r}=e,h=r.left+r.width/2,w=r.top+r.height/2;if(a==="top"||a==="bottom"){const k=a==="top"?r.top-l.height-i:r.top+r.height+i,R=n==="start"?r.left:n==="end"?r.left+r.width-l.width:h-l.width/2;return{top:k,left:R}}const C=a==="left"?r.left-l.width-i:r.left+r.width+i;return{top:n==="start"?r.top:n==="end"?r.top+r.height-l.height:w-l.height/2,left:C}},ge={width:"min(100%, 46rem)",padding:"1.25rem",color:"var(--willa-text)",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.9rem"},ot={display:"grid",gap:"0.9rem",padding:"1rem",background:"var(--willa-surface-soft)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem"},ye={display:"grid",gap:"0.45rem",padding:"0.9rem",background:"var(--willa-panel-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.65rem"},J={margin:0,color:"var(--willa-text-soft)",fontSize:"0.9rem",lineHeight:1.6},te=e=>t.jsx(Z,{align:"center",width:"100%",children:e.children}),st=()=>{const e=o.useRef(null),n=o.useRef(null),i=o.useRef(null),[l,a]=o.useState(!1),[r,h]=o.useState(0),w=[{target:()=>e.current,title:"确认任务上下文",description:"先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",placement:"bottom-start"},{target:()=>i.current,title:"解释核心区域",description:"高亮用户需要优先关注的数据卡片、表格或操作区域。",placement:"right"},{target:()=>n.current,title:"落到下一步操作",description:"最后把用户带到可以继续推进流程的按钮上。",placement:"top-end"}];return t.jsxs(te,{children:[t.jsx("div",{style:ge,children:t.jsxs(Z,{gap:"lg",children:[t.jsxs(H,{justify:"between",gap:"md",children:[t.jsxs("div",{ref:e,children:[t.jsx("strong",{children:"产品反馈工作台"}),t.jsx("p",{style:J,children:"汇总反馈、优先级和后续动作。"})]}),t.jsx("div",{ref:n,children:t.jsx(v,{icon:t.jsx(qe,{}),onClick:()=>{h(0),a(!0)},children:"开始引导"})})]}),t.jsxs("div",{style:ot,children:[t.jsxs(H,{gap:"sm",children:[t.jsx(U,{tone:"info",children:"128 条反馈"}),t.jsx(U,{tone:"warning",children:"3 个风险"}),t.jsx(U,{tone:"success",children:"已生成摘要"})]}),t.jsxs("div",{ref:i,style:ye,children:[t.jsx("strong",{children:"本周优先处理"}),t.jsx("p",{style:J,children:"登录失败、批量导出超时和移动端表单校验异常。"})]})]})]})}),t.jsx(ee,{open:l,current:r,steps:w,onChange:h,onOpenChange:a})]})},it=()=>{const[e,n]=o.useState(!1),[i,l]=o.useState(0),a=[{title:"欢迎使用 Willa",description:"没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",type:"primary"},{title:"保持简洁",description:"Tour 应该只解释关键路径，不要替代完整帮助文档。"}];return t.jsxs(te,{children:[t.jsx(H,{justify:"center",children:t.jsx(v,{icon:t.jsx(We,{}),onClick:()=>{l(0),n(!0)},children:"打开居中引导"})}),t.jsx(ee,{open:e,current:i,steps:a,onChange:l,onOpenChange:r=>{n(r),r||l(0)}})]})},lt=()=>{const e=o.useRef(null),[n,i]=o.useState(!1),l=[{target:()=>e.current,title:"可定制底部操作",description:"actionsRender 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",placement:"bottom"}];return t.jsxs(te,{children:[t.jsx("div",{style:ge,children:t.jsxs(Z,{gap:"md",children:[t.jsxs("div",{ref:e,style:ye,children:[t.jsx("strong",{children:"发布检查"}),t.jsx("p",{style:J,children:"确认文档、示例和样式都已经准备好。"})]}),t.jsx(v,{variant:"outline",onClick:()=>i(!0),children:"查看引导"})]})}),t.jsx(ee,{open:n,steps:l,onOpenChange:i,actionsRender:a=>t.jsxs(H,{gap:"xs",children:[t.jsx(v,{size:"sm",variant:"ghost",onClick:()=>i(!1),children:"跳过"}),a]})})]})},ft=Xe({id:"tour",name:"Tour",packageName:"willa/Tour",description:"用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",imports:[{name:"Tour",from:"willa/Tour"},{name:"Button",from:"willa/Button"}],css:"willa/Tour.css",demo:{name:"TourPreview",component:st},code:P(`
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
          placement: "bottom-start",
        },
        {
          target: () => actionRef.current,
          title: "落到下一步操作",
          description: "最后把用户带到可以继续推进流程的按钮上。",
          placement: "top-end",
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
  `),sections:[{title:"居中引导",code:P(`
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
      `),content:t.jsx(it,{})},{title:"自定义操作",code:P(`
        <Tour
          open={open}
          steps={steps}
          onOpenChange={setOpen}
          actionsRender={(originNode) => (
            <>
              <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
                跳过
              </Button>
              {originNode}
            </>
          )}
        />;
      `),content:t.jsx(lt,{})}],props:[{name:"steps",type:"Array<TourStep>",required:!0,description:"引导步骤列表。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"current",type:"number",description:"受控当前步骤下标。"},{name:"defaultCurrent",type:"number",defaultValue:"0",description:"非受控默认步骤下标。"},{name:"placement",type:'TourPlacement | "center"',defaultValue:'"bottom"',description:"默认浮层位置，步骤内 placement 优先级更高。"},{name:"type",type:'"default" | "primary"',defaultValue:'"default"',description:"默认引导面板风格，步骤内 type 优先级更高。"},{name:"mask",type:"boolean",defaultValue:"true",description:"是否显示遮罩，步骤内 mask 优先级更高。"},{name:"arrow",type:"boolean",defaultValue:"true",description:"是否显示指向箭头，步骤内 arrow 优先级更高。"},{name:"gap",type:"number | { offset?: number | [number, number]; radius?: number }",defaultValue:"{ offset: 8, radius: 10 }",description:"高亮区域和目标元素之间的间距及圆角。"},{name:"keyboard",type:"boolean",defaultValue:"true",description:"是否启用 Escape、方向键等键盘操作。"},{name:"disabledInteraction",type:"boolean",defaultValue:"false",description:"是否禁止用户直接操作被高亮的目标元素。"},{name:"scrollIntoView",type:"boolean | ScrollIntoViewOptions",defaultValue:"true",description:"切换步骤时是否自动滚动目标元素到视口内。"},{name:"indicatorsRender",type:"(current: number, total: number) => ReactNode",description:"自定义步骤指示器。"},{name:"actionsRender",type:"(originNode: ReactNode, info: TourActionRenderInfo) => ReactNode",description:"自定义底部操作区。"},{name:"onChange",type:"(current: number) => void",description:"当前步骤变化回调。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onClose",type:"() => void",description:"关闭引导回调。"},{name:"onFinish",type:"() => void",description:"完成引导回调。"}]});export{ft as default};
