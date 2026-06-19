import{aS as o,az as j,aQ as t,aA as b,g as v,aR as $e,T as De,w as Fe,aU as U,Q as L,$ as We,ao as J,af as qe,B as K}from"./index-coXx_Neu.js";/* empty css              *//* empty css              */import{d as Xe}from"./defineDoc-DluqpvSt.js";const y=12,Ye=8,P=8,Ge={offset:8,radius:10};function Z(e){const{open:n,defaultOpen:l=!1,current:s,defaultCurrent:c=0,steps:r,placement:h="bottom",type:g="default",mask:V=!0,arrow:te=!0,gap:C=Ge,keyboard:k=!0,disabledInteraction:xe=!1,scrollIntoView:T=!0,nextText:be="下一步",prevText:je="上一步",finishText:ve="完成",closeAriaLabel:Ce="关闭引导",zIndex:ne,className:ke,panelClassName:Te,maskClassName:_e,indicatorsRender:H,actionsRender:re,onChange:_,onClose:R,onFinish:N,onOpenChange:S}=e,oe=o.useId(),se=n!==void 0,ie=s!==void 0,[Re,Ne]=o.useState(l),[Se,Oe]=o.useState(c),f=n??Re,u=j(s??Se,0,r.length-1),i=r[u],x=r.length,O=u===0,E=u===x-1,Ee=(i==null?void 0:i.type)??g,le=(i==null?void 0:i.mask)??V,Ie=(i==null?void 0:i.arrow)??te,I=(i==null?void 0:i.placement)??h,ae=i==null?void 0:i.target,ce=o.useRef(null),[$,de]=o.useState(null),[d,D]=o.useState(null),[Ae,F]=o.useState(!1),[Be,A]=o.useState(!1),m=o.useRef(null),W=o.useRef(u),B=o.useCallback(a=>{se||Ne(a),S==null||S(a)},[se,S]),M=o.useCallback(a=>{const p=j(a,0,r.length-1);ie||Oe(p),_==null||_(p)},[ie,_,r.length]),z=o.useCallback(()=>{B(!1),R==null||R()},[R,B]),ue=o.useCallback(()=>{N==null||N(),B(!1)},[N,B]),q=o.useCallback(()=>{O||M(u-1)},[u,O,M]),X=o.useCallback(()=>{if(E){ue();return}M(u+1)},[u,ue,E,M]),Y=o.useCallback(()=>{if(!f||!i||typeof window>"u")return;const a=Je(ae);a&&T&&a.scrollIntoView(typeof T=="boolean"?{block:"center",inline:"center"}:T);const p=ce.current,G=a?Ze(a.getBoundingClientRect(),C):null;if(de(w=>nt(w,G)?w:G),!p)return;if(!a||I==="center"){D(w=>(w==null?void 0:w.placement)==="center"?w:{top:y,left:y,placement:"center"});return}const He=p.getBoundingClientRect(),we=ot({panelRect:He,placement:I,targetRect:G});D(w=>rt(w,we)?w:we)},[i,ae,C,f,I,T]);o.useLayoutEffect(()=>{if(!f||r.length===0||typeof window>"u")return;Y();const a=()=>Y();return window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0)}},[f,r.length,Y]),o.useEffect(()=>{if(!f||!k||typeof document>"u")return;const a=p=>{if(p.key==="Escape"){z();return}if(p.key==="ArrowRight"){X();return}p.key==="ArrowLeft"&&q()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[z,f,k,X,q]),o.useEffect(()=>{if(!f||typeof document>"u")return;const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}},[f]),o.useEffect(()=>{f||(m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null),F(!1),A(!1),de(null),D(null))},[f]),o.useEffect(()=>{if(!(!f||typeof window>"u"))return m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null),F(!1),m.current=window.requestAnimationFrame(()=>{F(!0),m.current=null}),()=>{m.current!==null&&(window.cancelAnimationFrame(m.current),m.current=null)}},[f]),o.useEffect(()=>{if(!f||typeof window>"u"){W.current=u,A(!1);return}if(W.current===u)return;W.current=u,A(!0);const a=window.setTimeout(()=>{A(!1)},300);return()=>window.clearTimeout(a)},[u,f]);const fe=i!=null&&i.title?`${oe}-title`:void 0,pe=i!=null&&i.description?`${oe}-description`:void 0,me=ne===void 0?{}:{"--willa-tour-z-index":ne},Me={...me,top:(d==null?void 0:d.placement)==="center"?"50%":0,left:(d==null?void 0:d.placement)==="center"?"50%":0,transform:(d==null?void 0:d.placement)==="center"?"translate3d(-50%, -50%, 0)":d?`translate3d(${d.left}px, ${d.top}px, 0)`:void 0,opacity:d?1:0,visibility:d?"visible":"hidden"},ze=me,Le=o.useMemo(()=>H?H(u,x):t.jsx("span",{className:"willa-tour__dots","aria-hidden":"true",children:r.map((a,p)=>t.jsx("span",{className:b("willa-tour__dot",p===u&&"willa-tour__dot--active")},p))}),[u,H,r,x]);if(!f||!i||x===0||typeof document>"u")return null;const he=t.jsxs(t.Fragment,{children:[O?null:t.jsx(v,{type:"button",variant:"ghost",size:"sm",onClick:q,children:i.prevText??je}),t.jsx(v,{type:"button",variant:"solid",size:"sm",onClick:X,children:E?ve:i.nextText??be})]}),Ve=re?re(he,{current:u,total:x,isFirst:O,isLast:E}):he;return $e.createPortal(t.jsxs("div",{className:b("willa-tour",`willa-tour--${Ee}`,Ae&&"willa-tour--animate",Be&&"willa-tour--step-transitioning",ke),style:ze,children:[le?t.jsx(Ue,{className:_e,rect:$,onClick:z}):null,$?t.jsx("div",{className:b("willa-tour__highlight",xe&&"willa-tour__highlight--disabled"),style:tt($),"aria-hidden":"true"}):null,t.jsxs("div",{ref:ce,className:b("willa-tour__panel",`willa-tour__panel--${(d==null?void 0:d.placement)??I}`,Te),style:Me,role:"dialog","aria-modal":le,"aria-labelledby":fe,"aria-describedby":pe,tabIndex:-1,onKeyDown:Qe,children:[Ie&&(d==null?void 0:d.placement)!=="center"?t.jsx("span",{className:"willa-tour__arrow","aria-hidden":"true"}):null,t.jsx(De,{className:"willa-tour__close",ariaLabel:Ce,icon:t.jsx(Fe,{}),variant:"ghost",size:"sm",onClick:z}),i.cover?t.jsx("div",{className:"willa-tour__cover",children:i.cover}):null,t.jsxs("div",{className:"willa-tour__content",children:[i.title?t.jsx("h2",{className:"willa-tour__title",id:fe,children:i.title}):null,i.description?t.jsx("div",{className:"willa-tour__description",id:pe,children:i.description}):null]}),t.jsxs("div",{className:"willa-tour__footer",children:[t.jsxs("div",{className:"willa-tour__indicators",children:[t.jsxs("span",{className:"willa-tour__count",children:[u+1," / ",x]}),Le]}),t.jsx("div",{className:"willa-tour__actions",children:Ve})]})]})]}),document.body)}const Ue=e=>{if(typeof window>"u")return null;if(!e.rect)return t.jsx("button",{type:"button",className:b("willa-tour__mask",e.className),"aria-label":"关闭引导",onClick:e.onClick});const n=Ke(e.rect);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:b("willa-tour__mask","willa-tour__mask--cutout",e.className),"aria-hidden":"true",children:t.jsx("span",{className:"willa-tour__mask-cutout",style:Pe(e.rect)})}),n.map((l,s)=>t.jsx("button",{type:"button",className:"willa-tour__mask-hit-area","aria-label":"关闭引导",style:l,onClick:e.onClick},s))]})},Ke=e=>{const n=window.innerWidth,l=window.innerHeight,s=1,c=Math.max(0,e.left-s),r=Math.min(n,e.left+e.width+s);return[{top:0,left:0,width:n,height:e.top},{top:e.top,left:0,width:c+s,height:e.height},{top:e.top,left:r-s,width:Math.max(0,n-r+s),height:e.height},{top:e.top+e.height,left:0,width:n,height:Math.max(0,l-e.top-e.height)}].filter(h=>h.width>0&&h.height>0)},Pe=e=>({top:e.top,left:e.left,width:e.width,height:e.height,borderRadius:e.radius}),Qe=e=>{e.key==="Tab"&&e.stopPropagation()},Je=e=>!e||typeof document>"u"?null:e instanceof HTMLElement?e:typeof e=="function"?e():document.querySelector(e),Ze=(e,n)=>{const l=et(n),s=l.offsetX,c=l.offsetY;return{top:j(e.top-c,0,window.innerHeight),left:j(e.left-s,0,window.innerWidth),width:Math.min(e.width+s*2,window.innerWidth),height:Math.min(e.height+c*2,window.innerHeight),radius:l.radius}},et=e=>{if(typeof e=="number")return{offsetX:e,offsetY:e,radius:P};const n=e.offset??Ye;return Array.isArray(n)?{offsetX:n[0],offsetY:n[1],radius:e.radius??P}:{offsetX:n,offsetY:n,radius:e.radius??P}},tt=e=>({clipPath:`inset(${e.top}px ${window.innerWidth-e.left-e.width}px ${window.innerHeight-e.top-e.height}px ${e.left}px round ${e.radius}px)`}),nt=(e,n)=>e===n?!0:!e||!n?!1:e.top===n.top&&e.left===n.left&&e.width===n.width&&e.height===n.height&&e.radius===n.radius,rt=(e,n)=>e?e.top===n.top&&e.left===n.left&&e.placement===n.placement:!1,ot=e=>{const{targetRect:n,panelRect:l}=e,s=n?e.placement:"center";if(!n||s==="center")return{top:y,left:y,placement:"center"};const[c,r="center"]=s.split("-"),g=st({align:r,offset:14,panelRect:l,side:c,targetRect:n});return{top:j(g.top,y,window.innerHeight-l.height-y),left:j(g.left,y,window.innerWidth-l.width-y),placement:s}},st=e=>{const{align:n,offset:l,panelRect:s,side:c,targetRect:r}=e,h=r.left+r.width/2,g=r.top+r.height/2;if(c==="top"||c==="bottom"){const C=c==="top"?r.top-s.height-l:r.top+r.height+l,k=n==="start"?r.left:n==="end"?r.left+r.width-s.width:h-s.width/2;return{top:C,left:k}}const V=c==="left"?r.left-s.width-l:r.left+r.width+l;return{top:n==="start"?r.top:n==="end"?r.top+r.height-s.height:g-s.height/2,left:V}},ge={width:"min(100%, 46rem)",padding:"1.25rem",color:"var(--willa-text)",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.9rem"},it={display:"grid",gap:"0.9rem",padding:"1rem",background:"var(--willa-surface-soft)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem"},ye={display:"grid",gap:"0.45rem",padding:"0.9rem",background:"var(--willa-panel-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.65rem"},Q={margin:0,color:"var(--willa-text-soft)",fontSize:"0.9rem",lineHeight:1.6},ee=e=>t.jsx(J,{align:"center",width:"100%",children:e.children}),lt=()=>{const e=o.useRef(null),n=o.useRef(null),l=o.useRef(null),[s,c]=o.useState(!1),[r,h]=o.useState(0),g=[{target:()=>e.current,title:"确认任务上下文",description:"先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",placement:"bottom-start"},{target:()=>l.current,title:"解释核心区域",description:"高亮用户需要优先关注的数据卡片、表格或操作区域。",placement:"right"},{target:()=>n.current,title:"落到下一步操作",description:"最后把用户带到可以继续推进流程的按钮上。",placement:"top-end"}];return t.jsxs(ee,{children:[t.jsx("div",{style:ge,children:t.jsxs(J,{gap:"lg",children:[t.jsxs(L,{justify:"between",gap:"md",children:[t.jsxs("div",{ref:e,children:[t.jsx("strong",{children:"产品反馈工作台"}),t.jsx("p",{style:Q,children:"汇总反馈、优先级和后续动作。"})]}),t.jsx("div",{ref:n,children:t.jsx(v,{icon:t.jsx(qe,{}),onClick:()=>{h(0),c(!0)},children:"开始引导"})})]}),t.jsxs("div",{style:it,children:[t.jsxs(L,{gap:"sm",children:[t.jsx(K,{tone:"info",children:"128 条反馈"}),t.jsx(K,{tone:"warning",children:"3 个风险"}),t.jsx(K,{tone:"success",children:"已生成摘要"})]}),t.jsxs("div",{ref:l,style:ye,children:[t.jsx("strong",{children:"本周优先处理"}),t.jsx("p",{style:Q,children:"登录失败、批量导出超时和移动端表单校验异常。"})]})]})]})}),t.jsx(Z,{open:s,current:r,steps:g,onChange:h,onOpenChange:c})]})},at=()=>{const[e,n]=o.useState(!1),[l,s]=o.useState(0),c=[{title:"欢迎使用 Willa",description:"没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",type:"primary"},{title:"保持简洁",description:"Tour 应该只解释关键路径，不要替代完整帮助文档。"}];return t.jsxs(ee,{children:[t.jsx(L,{justify:"center",children:t.jsx(v,{icon:t.jsx(We,{}),onClick:()=>{s(0),n(!0)},children:"打开居中引导"})}),t.jsx(Z,{open:e,current:l,steps:c,onChange:s,onOpenChange:r=>{n(r),r||s(0)}})]})},ct=()=>{const e=o.useRef(null),[n,l]=o.useState(!1),s=[{target:()=>e.current,title:"可定制底部操作",description:"actionsRender 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",placement:"bottom"}];return t.jsxs(ee,{children:[t.jsx("div",{style:ge,children:t.jsxs(J,{gap:"md",children:[t.jsxs("div",{ref:e,style:ye,children:[t.jsx("strong",{children:"发布检查"}),t.jsx("p",{style:Q,children:"确认文档、示例和样式都已经准备好。"})]}),t.jsx(v,{variant:"outline",onClick:()=>l(!0),children:"查看引导"})]})}),t.jsx(Z,{open:n,steps:s,onOpenChange:l,actionsRender:c=>t.jsxs(L,{gap:"xs",children:[t.jsx(v,{size:"sm",variant:"ghost",onClick:()=>l(!1),children:"跳过"}),c]})})]})},mt=Xe({id:"tour",name:"Tour",packageName:"willa/Tour",description:"用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",imports:[{name:"Tour",from:"willa/Tour"},{name:"Button",from:"willa/Button"}],css:"willa/Tour.css",demo:{name:"TourPreview",component:lt},code:U(`
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
  `),sections:[{title:"居中引导",code:U(`
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
      `),content:t.jsx(at,{})},{title:"自定义操作",code:U(`
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
      `),content:t.jsx(ct,{})}],props:[{name:"steps",type:"Array<TourStep>",required:!0,description:"引导步骤列表。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"current",type:"number",description:"受控当前步骤下标。"},{name:"defaultCurrent",type:"number",defaultValue:"0",description:"非受控默认步骤下标。"},{name:"placement",type:'TourPlacement | "center"',defaultValue:'"bottom"',description:"默认浮层位置，步骤内 placement 优先级更高。"},{name:"type",type:'"default" | "primary"',defaultValue:'"default"',description:"默认引导面板风格，步骤内 type 优先级更高。"},{name:"mask",type:"boolean",defaultValue:"true",description:"是否显示遮罩，步骤内 mask 优先级更高。"},{name:"arrow",type:"boolean",defaultValue:"true",description:"是否显示指向箭头，步骤内 arrow 优先级更高。"},{name:"gap",type:"number | { offset?: number | [number, number]; radius?: number }",defaultValue:"{ offset: 8, radius: 10 }",description:"高亮区域和目标元素之间的间距及圆角。"},{name:"keyboard",type:"boolean",defaultValue:"true",description:"是否启用 Escape、方向键等键盘操作。"},{name:"disabledInteraction",type:"boolean",defaultValue:"false",description:"是否禁止用户直接操作被高亮的目标元素。"},{name:"scrollIntoView",type:"boolean | ScrollIntoViewOptions",defaultValue:"true",description:"切换步骤时是否自动滚动目标元素到视口内。"},{name:"indicatorsRender",type:"(current: number, total: number) => ReactNode",description:"自定义步骤指示器。"},{name:"actionsRender",type:"(originNode: ReactNode, info: TourActionRenderInfo) => ReactNode",description:"自定义底部操作区。"},{name:"onChange",type:"(current: number) => void",description:"当前步骤变化回调。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onClose",type:"() => void",description:"关闭引导回调。"},{name:"onFinish",type:"() => void",description:"完成引导回调。"}]});export{mt as default};
