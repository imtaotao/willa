import{aK as i,as as w,aI as t,at as x,e as b,aJ as Le,R as ze,u as Ve,aL as P,O as L,X as He,aj as F,aa as Ae,B as X}from"./index-UjQDHj6P.js";/* empty css              *//* empty css              */import{d as De}from"./defineDoc-CDLsB4uR.js";const h=12,We=8,Y=8,Me={offset:8,radius:10};function G(e){const{open:n,defaultOpen:s=!1,current:l,defaultCurrent:c=0,steps:o,placement:f="bottom",type:m="default",mask:z=!0,arrow:$=!0,gap:v=Me,keyboard:C=!0,disabledInteraction:fe=!1,scrollIntoView:k=!0,nextText:me="下一步",prevText:he="上一步",finishText:we="完成",closeAriaLabel:ge="关闭引导",zIndex:U,className:ye,panelClassName:xe,maskClassName:be,indicatorsRender:V,actionsRender:J,onChange:T,onClose:R,onFinish:_,onOpenChange:N}=e,Q=i.useId(),Z=n!==void 0,ee=l!==void 0,[je,ve]=i.useState(s),[Ce,ke]=i.useState(c),g=n??je,p=w(l??Ce,0,o.length-1),r=o[p],y=o.length,O=p===0,I=p===y-1,Te=(r==null?void 0:r.type)??m,te=(r==null?void 0:r.mask)??z,Re=(r==null?void 0:r.arrow)??$,H=(r==null?void 0:r.placement)??f,ne=r==null?void 0:r.target,oe=i.useRef(null),[A,_e]=i.useState(null),[d,Ne]=i.useState(null),S=i.useCallback(a=>{Z||ve(a),N==null||N(a)},[Z,N]),B=i.useCallback(a=>{const u=w(a,0,o.length-1);ee||ke(u),T==null||T(u)},[ee,T,o.length]),E=i.useCallback(()=>{S(!1),R==null||R()},[R,S]),re=i.useCallback(()=>{_==null||_(),S(!1)},[_,S]),D=i.useCallback(()=>{O||B(p-1)},[p,O,B]),W=i.useCallback(()=>{if(I){re();return}B(p+1)},[p,re,I,B]),M=i.useCallback(()=>{if(!g||!r||typeof window>"u")return;const a=Ye(ne);a&&k&&a.scrollIntoView(typeof k=="boolean"?{block:"center",inline:"center"}:k);const u=a?qe(a.getBoundingClientRect(),v):null,ce=oe.current;if(_e(j=>Ke(j,u)?j:u),!ce)return;const Ee=ce.getBoundingClientRect(),de=Ue({panelRect:Ee,placement:a?H:"center",targetRect:u});Ne(j=>$e(j,de)?j:de)},[r,ne,v,g,H,k]);i.useLayoutEffect(()=>{if(!g||o.length===0||typeof window>"u")return;M();const a=()=>M();return window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0)}},[g,o.length,M]),i.useEffect(()=>{if(!g||!C||typeof document>"u")return;const a=u=>{if(u.key==="Escape"){E();return}if(u.key==="ArrowRight"){W();return}u.key==="ArrowLeft"&&D()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[E,g,C,W,D]);const se=r!=null&&r.title?`${Q}-title`:void 0,ie=r!=null&&r.description?`${Q}-description`:void 0,le=U===void 0?{}:{"--willa-tour-z-index":U},Oe={...le,top:d==null?void 0:d.top,left:d==null?void 0:d.left,visibility:d?"visible":"hidden"},Ie=le,Se=i.useMemo(()=>V?V(p,y):t.jsx("span",{className:"willa-tour__dots","aria-hidden":"true",children:o.map((a,u)=>t.jsx("span",{className:x("willa-tour__dot",u===p&&"willa-tour__dot--active")},u))}),[p,V,o,y]);if(!g||!r||y===0||typeof document>"u")return null;const ae=t.jsxs(t.Fragment,{children:[O?null:t.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:D,children:r.prevText??he}),t.jsx(b,{type:"button",variant:"solid",size:"sm",onClick:W,children:I?we:r.nextText??me})]}),Be=J?J(ae,{current:p,total:y,isFirst:O,isLast:I}):ae;return Le.createPortal(t.jsxs("div",{className:x("willa-tour",`willa-tour--${Te}`,ye),style:Ie,children:[te?t.jsx(Pe,{className:be,rect:A,onClick:E}):null,A?t.jsx("div",{className:x("willa-tour__highlight",fe&&"willa-tour__highlight--disabled"),style:Ge(A),"aria-hidden":"true"}):null,t.jsxs("div",{ref:oe,className:x("willa-tour__panel",`willa-tour__panel--${(d==null?void 0:d.placement)??H}`,xe),style:Oe,role:"dialog","aria-modal":te,"aria-labelledby":se,"aria-describedby":ie,tabIndex:-1,onKeyDown:Xe,children:[Re&&(d==null?void 0:d.placement)!=="center"?t.jsx("span",{className:"willa-tour__arrow","aria-hidden":"true"}):null,t.jsx(ze,{className:"willa-tour__close",ariaLabel:ge,icon:t.jsx(Ve,{}),variant:"ghost",size:"sm",onClick:E}),r.cover?t.jsx("div",{className:"willa-tour__cover",children:r.cover}):null,t.jsxs("div",{className:"willa-tour__content",children:[r.title?t.jsx("h2",{className:"willa-tour__title",id:se,children:r.title}):null,r.description?t.jsx("div",{className:"willa-tour__description",id:ie,children:r.description}):null]}),t.jsxs("div",{className:"willa-tour__footer",children:[t.jsxs("div",{className:"willa-tour__indicators",children:[t.jsxs("span",{className:"willa-tour__count",children:[p+1," / ",y]}),Se]}),t.jsx("div",{className:"willa-tour__actions",children:Be})]})]})]}),document.body)}const Pe=e=>{if(!e.rect||typeof window>"u")return t.jsx("button",{type:"button",className:x("willa-tour__mask",e.className),"aria-label":"关闭引导",onClick:e.onClick});const n=e.rect,s=window.innerWidth,l=window.innerHeight,c=[{top:0,left:0,width:s,height:n.top},{top:n.top,left:0,width:n.left,height:n.height},{top:n.top,left:n.left+n.width,width:s-n.left-n.width,height:n.height},{top:n.top+n.height,left:0,width:s,height:l-n.top-n.height}];return t.jsx(t.Fragment,{children:c.map((o,f)=>t.jsx("button",{type:"button",className:x("willa-tour__mask",e.className),"aria-label":"关闭引导",style:o,onClick:e.onClick},f))})},Xe=e=>{e.key==="Tab"&&e.stopPropagation()},Ye=e=>!e||typeof document>"u"?null:e instanceof HTMLElement?e:typeof e=="function"?e():document.querySelector(e),qe=(e,n)=>{const s=Fe(n),l=s.offsetX,c=s.offsetY;return{top:w(e.top-c,0,window.innerHeight),left:w(e.left-l,0,window.innerWidth),width:Math.min(e.width+l*2,window.innerWidth),height:Math.min(e.height+c*2,window.innerHeight),radius:s.radius}},Fe=e=>{if(typeof e=="number")return{offsetX:e,offsetY:e,radius:Y};const n=e.offset??We;return Array.isArray(n)?{offsetX:n[0],offsetY:n[1],radius:e.radius??Y}:{offsetX:n,offsetY:n,radius:e.radius??Y}},Ge=e=>({top:e.top,left:e.left,width:e.width,height:e.height,borderRadius:e.radius}),Ke=(e,n)=>e===n?!0:!e||!n?!1:e.top===n.top&&e.left===n.left&&e.width===n.width&&e.height===n.height&&e.radius===n.radius,$e=(e,n)=>e?e.top===n.top&&e.left===n.left&&e.placement===n.placement:!1,Ue=e=>{const{targetRect:n,panelRect:s}=e,l=n?e.placement:"center";if(!n||l==="center")return{top:w((window.innerHeight-s.height)/2,h,window.innerHeight-s.height-h),left:w((window.innerWidth-s.width)/2,h,window.innerWidth-s.width-h),placement:"center"};const[c,o="center"]=l.split("-"),m=Je({align:o,offset:14,panelRect:s,side:c,targetRect:n});return{top:w(m.top,h,window.innerHeight-s.height-h),left:w(m.left,h,window.innerWidth-s.width-h),placement:l}},Je=e=>{const{align:n,offset:s,panelRect:l,side:c,targetRect:o}=e,f=o.left+o.width/2,m=o.top+o.height/2;if(c==="top"||c==="bottom"){const v=c==="top"?o.top-l.height-s:o.top+o.height+s,C=n==="start"?o.left:n==="end"?o.left+o.width-l.width:f-l.width/2;return{top:v,left:C}}const z=c==="left"?o.left-l.width-s:o.left+o.width+s;return{top:n==="start"?o.top:n==="end"?o.top+o.height-l.height:m-l.height/2,left:z}},ue={width:"min(100%, 46rem)",padding:"1.25rem",color:"var(--willa-text)",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.9rem"},Qe={display:"grid",gap:"0.9rem",padding:"1rem",background:"var(--willa-surface-soft)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem"},pe={display:"grid",gap:"0.45rem",padding:"0.9rem",background:"var(--willa-panel-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.65rem"},q={margin:0,color:"var(--willa-text-soft)",fontSize:"0.9rem",lineHeight:1.6},K=e=>t.jsx(F,{align:"center",width:"100%",children:e.children}),Ze=()=>{const e=i.useRef(null),n=i.useRef(null),s=i.useRef(null),[l,c]=i.useState(!1),[o,f]=i.useState(0),m=[{target:()=>e.current,title:"确认任务上下文",description:"先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",placement:"bottom-start"},{target:()=>s.current,title:"解释核心区域",description:"高亮用户需要优先关注的数据卡片、表格或操作区域。",placement:"right"},{target:()=>n.current,title:"落到下一步操作",description:"最后把用户带到可以继续推进流程的按钮上。",placement:"top-end"}];return t.jsxs(K,{children:[t.jsx("div",{style:ue,children:t.jsxs(F,{gap:"lg",children:[t.jsxs(L,{justify:"between",gap:"md",children:[t.jsxs("div",{ref:e,children:[t.jsx("strong",{children:"产品反馈工作台"}),t.jsx("p",{style:q,children:"汇总反馈、优先级和后续动作。"})]}),t.jsx("div",{ref:n,children:t.jsx(b,{icon:t.jsx(Ae,{}),onClick:()=>{f(0),c(!0)},children:"开始引导"})})]}),t.jsxs("div",{style:Qe,children:[t.jsxs(L,{gap:"sm",children:[t.jsx(X,{tone:"info",children:"128 条反馈"}),t.jsx(X,{tone:"warning",children:"3 个风险"}),t.jsx(X,{tone:"success",children:"已生成摘要"})]}),t.jsxs("div",{ref:s,style:pe,children:[t.jsx("strong",{children:"本周优先处理"}),t.jsx("p",{style:q,children:"登录失败、批量导出超时和移动端表单校验异常。"})]})]})]})}),t.jsx(G,{open:l,current:o,steps:m,onChange:f,onOpenChange:c})]})},et=()=>{const[e,n]=i.useState(!1),s=[{title:"欢迎使用 Willa",description:"没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",type:"primary"},{title:"保持简洁",description:"Tour 应该只解释关键路径，不要替代完整帮助文档。"}];return t.jsxs(K,{children:[t.jsx(L,{justify:"center",children:t.jsx(b,{icon:t.jsx(He,{}),onClick:()=>n(!0),children:"打开居中引导"})}),t.jsx(G,{open:e,steps:s,onOpenChange:n})]})},tt=()=>{const e=i.useRef(null),[n,s]=i.useState(!1),l=[{target:()=>e.current,title:"可定制底部操作",description:"actionsRender 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",placement:"bottom"}];return t.jsxs(K,{children:[t.jsx("div",{style:ue,children:t.jsxs(F,{gap:"md",children:[t.jsxs("div",{ref:e,style:pe,children:[t.jsx("strong",{children:"发布检查"}),t.jsx("p",{style:q,children:"确认文档、示例和样式都已经准备好。"})]}),t.jsx(b,{variant:"outline",onClick:()=>s(!0),children:"查看引导"})]})}),t.jsx(G,{open:n,steps:l,onOpenChange:s,actionsRender:c=>t.jsxs(L,{gap:"xs",children:[t.jsx(b,{size:"sm",variant:"ghost",onClick:()=>s(!1),children:"跳过"}),c]})})]})},it=De({id:"tour",name:"Tour",packageName:"willa/Tour",description:"用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",imports:[{name:"Tour",from:"willa/Tour"},{name:"Button",from:"willa/Button"}],css:"willa/Tour.css",demo:{name:"TourPreview",component:Ze},code:P(`
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
      `),content:t.jsx(et,{})},{title:"自定义操作",code:P(`
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
      `),content:t.jsx(tt,{})}],props:[{name:"steps",type:"Array<TourStep>",required:!0,description:"引导步骤列表。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"current",type:"number",description:"受控当前步骤下标。"},{name:"defaultCurrent",type:"number",defaultValue:"0",description:"非受控默认步骤下标。"},{name:"placement",type:'TourPlacement | "center"',defaultValue:'"bottom"',description:"默认浮层位置，步骤内 placement 优先级更高。"},{name:"type",type:'"default" | "primary"',defaultValue:'"default"',description:"默认引导面板风格，步骤内 type 优先级更高。"},{name:"mask",type:"boolean",defaultValue:"true",description:"是否显示遮罩，步骤内 mask 优先级更高。"},{name:"arrow",type:"boolean",defaultValue:"true",description:"是否显示指向箭头，步骤内 arrow 优先级更高。"},{name:"gap",type:"number | { offset?: number | [number, number]; radius?: number }",defaultValue:"{ offset: 8, radius: 10 }",description:"高亮区域和目标元素之间的间距及圆角。"},{name:"keyboard",type:"boolean",defaultValue:"true",description:"是否启用 Escape、方向键等键盘操作。"},{name:"disabledInteraction",type:"boolean",defaultValue:"false",description:"是否禁止用户直接操作被高亮的目标元素。"},{name:"scrollIntoView",type:"boolean | ScrollIntoViewOptions",defaultValue:"true",description:"切换步骤时是否自动滚动目标元素到视口内。"},{name:"indicatorsRender",type:"(current: number, total: number) => ReactNode",description:"自定义步骤指示器。"},{name:"actionsRender",type:"(originNode: ReactNode, info: TourActionRenderInfo) => ReactNode",description:"自定义底部操作区。"},{name:"onChange",type:"(current: number) => void",description:"当前步骤变化回调。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onClose",type:"() => void",description:"关闭引导回调。"},{name:"onFinish",type:"() => void",description:"完成引导回调。"}]});export{it as default};
