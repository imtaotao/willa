import{aQ as i,ay as g,aO as t,az as x,g as b,aP as ze,T as Le,w as Ve,aR as Y,Q as V,$ as He,ao as G,af as Me,B as $}from"./index-DV7y9v_t.js";/* empty css              *//* empty css              */import{d as Ae}from"./defineDoc-CnG-0Gd0.js";const w=12,De=8,q=8,We={offset:8,radius:10};function K(e){const{open:n,defaultOpen:o=!1,current:l,defaultCurrent:a=0,steps:r,placement:f="bottom",type:m="default",mask:j=!0,arrow:C=!0,gap:T=We,keyboard:k=!0,disabledInteraction:fe=!1,scrollIntoView:R=!0,nextText:me="下一步",prevText:he="上一步",finishText:we="完成",closeAriaLabel:ge="关闭引导",zIndex:Q,className:ye,panelClassName:xe,maskClassName:be,indicatorsRender:H,actionsRender:J,onChange:_,onClose:N,onFinish:O,onOpenChange:E}=e,Z=i.useId(),ee=n!==void 0,te=l!==void 0,[je,ve]=i.useState(o),[Ce,Te]=i.useState(a),h=n??je,u=g(l??Ce,0,r.length-1),s=r[u],y=r.length,S=u===0,B=u===y-1,ke=(s==null?void 0:s.type)??m,ne=(s==null?void 0:s.mask)??j,Re=(s==null?void 0:s.arrow)??C,M=(s==null?void 0:s.placement)??f,oe=s==null?void 0:s.target,re=i.useRef(null),[A,_e]=i.useState(null),[d,Ne]=i.useState(null),I=i.useCallback(c=>{ee||ve(c),E==null||E(c)},[ee,E]),z=i.useCallback(c=>{const p=g(c,0,r.length-1);te||Te(p),_==null||_(p)},[te,_,r.length]),L=i.useCallback(()=>{I(!1),N==null||N()},[N,I]),se=i.useCallback(()=>{O==null||O(),I(!1)},[O,I]),D=i.useCallback(()=>{S||z(u-1)},[u,S,z]),W=i.useCallback(()=>{if(B){se();return}z(u+1)},[u,se,B,z]),P=i.useCallback(()=>{if(!h||!s||typeof window>"u")return;const c=Ye(oe);c&&R&&c.scrollIntoView(typeof R=="boolean"?{block:"center",inline:"center"}:R);const p=re.current,X=c?$e(c.getBoundingClientRect(),T):null;if(_e(v=>Ge(v,X)?v:X),!p)return;const Ie=p.getBoundingClientRect(),de=Ue({panelRect:Ie,placement:c?M:"center",targetRect:X});Ne(v=>Ke(v,de)?v:de)},[s,oe,T,h,M,R]);i.useLayoutEffect(()=>{if(!h||r.length===0||typeof window>"u")return;P();const c=()=>P();return window.addEventListener("resize",c),window.addEventListener("scroll",c,!0),()=>{window.removeEventListener("resize",c),window.removeEventListener("scroll",c,!0)}},[h,r.length,P]),i.useEffect(()=>{if(!h||!k||typeof document>"u")return;const c=p=>{if(p.key==="Escape"){L();return}if(p.key==="ArrowRight"){W();return}p.key==="ArrowLeft"&&D()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[L,h,k,W,D]),i.useEffect(()=>{if(!h||typeof document>"u")return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[h]);const ie=s!=null&&s.title?`${Z}-title`:void 0,le=s!=null&&s.description?`${Z}-description`:void 0,ae=Q===void 0?{}:{"--willa-tour-z-index":Q},Oe={...ae,top:d==null?void 0:d.top,left:d==null?void 0:d.left,visibility:d?"visible":"hidden"},Ee=ae,Se=i.useMemo(()=>H?H(u,y):t.jsx("span",{className:"willa-tour__dots","aria-hidden":"true",children:r.map((c,p)=>t.jsx("span",{className:x("willa-tour__dot",p===u&&"willa-tour__dot--active")},p))}),[u,H,r,y]);if(!h||!s||y===0||typeof document>"u")return null;const ce=t.jsxs(t.Fragment,{children:[S?null:t.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:D,children:s.prevText??he}),t.jsx(b,{type:"button",variant:"solid",size:"sm",onClick:W,children:B?we:s.nextText??me})]}),Be=J?J(ce,{current:u,total:y,isFirst:S,isLast:B}):ce;return ze.createPortal(t.jsxs("div",{className:x("willa-tour",`willa-tour--${ke}`,ye),style:Ee,children:[ne?t.jsx(Pe,{className:be,rect:A,onClick:L}):null,A?t.jsx("div",{className:x("willa-tour__highlight",fe&&"willa-tour__highlight--disabled"),style:Fe(A),"aria-hidden":"true"}):null,t.jsxs("div",{ref:re,className:x("willa-tour__panel",`willa-tour__panel--${(d==null?void 0:d.placement)??M}`,xe),style:Oe,role:"dialog","aria-modal":ne,"aria-labelledby":ie,"aria-describedby":le,tabIndex:-1,onKeyDown:Xe,children:[Re&&(d==null?void 0:d.placement)!=="center"?t.jsx("span",{className:"willa-tour__arrow","aria-hidden":"true"}):null,t.jsx(Le,{className:"willa-tour__close",ariaLabel:ge,icon:t.jsx(Ve,{}),variant:"ghost",size:"sm",onClick:L}),s.cover?t.jsx("div",{className:"willa-tour__cover",children:s.cover}):null,t.jsxs("div",{className:"willa-tour__content",children:[s.title?t.jsx("h2",{className:"willa-tour__title",id:ie,children:s.title}):null,s.description?t.jsx("div",{className:"willa-tour__description",id:le,children:s.description}):null]}),t.jsxs("div",{className:"willa-tour__footer",children:[t.jsxs("div",{className:"willa-tour__indicators",children:[t.jsxs("span",{className:"willa-tour__count",children:[u+1," / ",y]}),Se]}),t.jsx("div",{className:"willa-tour__actions",children:Be})]})]})]}),document.body)}const Pe=e=>{if(!e.rect||typeof window>"u")return t.jsx("button",{type:"button",className:x("willa-tour__mask",e.className),"aria-label":"关闭引导",onClick:e.onClick});const n=e.rect,o=window.innerWidth,l=window.innerHeight,a=1,r=Math.max(0,n.left-a),f=Math.min(o,n.left+n.width+a),m=[{top:0,left:0,width:o,height:n.top},{top:n.top,left:0,width:r+a,height:n.height},{top:n.top,left:f-a,width:Math.max(0,o-f+a),height:n.height},{top:n.top+n.height,left:0,width:o,height:Math.max(0,l-n.top-n.height)}];return t.jsx(t.Fragment,{children:m.map((j,C)=>t.jsx("button",{type:"button",className:x("willa-tour__mask",e.className),"aria-label":"关闭引导",style:j,onClick:e.onClick},C))})},Xe=e=>{e.key==="Tab"&&e.stopPropagation()},Ye=e=>!e||typeof document>"u"?null:e instanceof HTMLElement?e:typeof e=="function"?e():document.querySelector(e),$e=(e,n)=>{const o=qe(n),l=o.offsetX,a=o.offsetY;return{top:g(e.top-a,0,window.innerHeight),left:g(e.left-l,0,window.innerWidth),width:Math.min(e.width+l*2,window.innerWidth),height:Math.min(e.height+a*2,window.innerHeight),radius:o.radius}},qe=e=>{if(typeof e=="number")return{offsetX:e,offsetY:e,radius:q};const n=e.offset??De;return Array.isArray(n)?{offsetX:n[0],offsetY:n[1],radius:e.radius??q}:{offsetX:n,offsetY:n,radius:e.radius??q}},Fe=e=>({top:e.top,left:e.left,width:e.width,height:e.height,borderRadius:e.radius}),Ge=(e,n)=>e===n?!0:!e||!n?!1:e.top===n.top&&e.left===n.left&&e.width===n.width&&e.height===n.height&&e.radius===n.radius,Ke=(e,n)=>e?e.top===n.top&&e.left===n.left&&e.placement===n.placement:!1,Ue=e=>{const{targetRect:n,panelRect:o}=e,l=n?e.placement:"center";if(!n||l==="center")return{top:g((window.innerHeight-o.height)/2,w,window.innerHeight-o.height-w),left:g((window.innerWidth-o.width)/2,w,window.innerWidth-o.width-w),placement:"center"};const[a,r="center"]=l.split("-"),m=Qe({align:r,offset:14,panelRect:o,side:a,targetRect:n});return{top:g(m.top,w,window.innerHeight-o.height-w),left:g(m.left,w,window.innerWidth-o.width-w),placement:l}},Qe=e=>{const{align:n,offset:o,panelRect:l,side:a,targetRect:r}=e,f=r.left+r.width/2,m=r.top+r.height/2;if(a==="top"||a==="bottom"){const T=a==="top"?r.top-l.height-o:r.top+r.height+o,k=n==="start"?r.left:n==="end"?r.left+r.width-l.width:f-l.width/2;return{top:T,left:k}}const j=a==="left"?r.left-l.width-o:r.left+r.width+o;return{top:n==="start"?r.top:n==="end"?r.top+r.height-l.height:m-l.height/2,left:j}},ue={width:"min(100%, 46rem)",padding:"1.25rem",color:"var(--willa-text)",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.9rem"},Je={display:"grid",gap:"0.9rem",padding:"1rem",background:"var(--willa-surface-soft)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem"},pe={display:"grid",gap:"0.45rem",padding:"0.9rem",background:"var(--willa-panel-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"0.65rem"},F={margin:0,color:"var(--willa-text-soft)",fontSize:"0.9rem",lineHeight:1.6},U=e=>t.jsx(G,{align:"center",width:"100%",children:e.children}),Ze=()=>{const e=i.useRef(null),n=i.useRef(null),o=i.useRef(null),[l,a]=i.useState(!1),[r,f]=i.useState(0),m=[{target:()=>e.current,title:"确认任务上下文",description:"先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",placement:"bottom-start"},{target:()=>o.current,title:"解释核心区域",description:"高亮用户需要优先关注的数据卡片、表格或操作区域。",placement:"right"},{target:()=>n.current,title:"落到下一步操作",description:"最后把用户带到可以继续推进流程的按钮上。",placement:"top-end"}];return t.jsxs(U,{children:[t.jsx("div",{style:ue,children:t.jsxs(G,{gap:"lg",children:[t.jsxs(V,{justify:"between",gap:"md",children:[t.jsxs("div",{ref:e,children:[t.jsx("strong",{children:"产品反馈工作台"}),t.jsx("p",{style:F,children:"汇总反馈、优先级和后续动作。"})]}),t.jsx("div",{ref:n,children:t.jsx(b,{icon:t.jsx(Me,{}),onClick:()=>{f(0),a(!0)},children:"开始引导"})})]}),t.jsxs("div",{style:Je,children:[t.jsxs(V,{gap:"sm",children:[t.jsx($,{tone:"info",children:"128 条反馈"}),t.jsx($,{tone:"warning",children:"3 个风险"}),t.jsx($,{tone:"success",children:"已生成摘要"})]}),t.jsxs("div",{ref:o,style:pe,children:[t.jsx("strong",{children:"本周优先处理"}),t.jsx("p",{style:F,children:"登录失败、批量导出超时和移动端表单校验异常。"})]})]})]})}),t.jsx(K,{open:l,current:r,steps:m,onChange:f,onOpenChange:a})]})},et=()=>{const[e,n]=i.useState(!1),o=[{title:"欢迎使用 Willa",description:"没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",type:"primary"},{title:"保持简洁",description:"Tour 应该只解释关键路径，不要替代完整帮助文档。"}];return t.jsxs(U,{children:[t.jsx(V,{justify:"center",children:t.jsx(b,{icon:t.jsx(He,{}),onClick:()=>n(!0),children:"打开居中引导"})}),t.jsx(K,{open:e,steps:o,onOpenChange:n})]})},tt=()=>{const e=i.useRef(null),[n,o]=i.useState(!1),l=[{target:()=>e.current,title:"可定制底部操作",description:"actionsRender 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",placement:"bottom"}];return t.jsxs(U,{children:[t.jsx("div",{style:ue,children:t.jsxs(G,{gap:"md",children:[t.jsxs("div",{ref:e,style:pe,children:[t.jsx("strong",{children:"发布检查"}),t.jsx("p",{style:F,children:"确认文档、示例和样式都已经准备好。"})]}),t.jsx(b,{variant:"outline",onClick:()=>o(!0),children:"查看引导"})]})}),t.jsx(K,{open:n,steps:l,onOpenChange:o,actionsRender:a=>t.jsxs(V,{gap:"xs",children:[t.jsx(b,{size:"sm",variant:"ghost",onClick:()=>o(!1),children:"跳过"}),a]})})]})},it=Ae({id:"tour",name:"Tour",packageName:"willa/Tour",description:"用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",imports:[{name:"Tour",from:"willa/Tour"},{name:"Button",from:"willa/Button"}],css:"willa/Tour.css",demo:{name:"TourPreview",component:Ze},code:Y(`
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
  `),sections:[{title:"居中引导",code:Y(`
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
      `),content:t.jsx(et,{})},{title:"自定义操作",code:Y(`
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
