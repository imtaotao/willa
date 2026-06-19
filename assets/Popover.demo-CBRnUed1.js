import{aQ as r,ay as K,aO as e,aP as re,az as M,aC as se,B as q,g as p,W as k,N as le,$ as ae}from"./index-CnafOytH.js";import{g as de}from"./dom-DvRKQOia.js";/* empty css              *//* empty css              */import{d as ce}from"./defineDoc-CqxOYqEu.js";function f(n){const{trigger:o,children:s,title:i,description:d,footer:m,open:w,defaultOpen:R=!1,onOpenChange:v,side:y="bottom",align:x="start",offset:h=10,size:H="md",autoFocus:I=!0,closeOnOutsidePointerDown:L=!0,closeOnEscape:U=!0,showArrow:P=!0,ariaLabel:Q,className:_,contentClassName:J}=n,j=r.useId(),T=i?`${j}-title`:void 0,F=d?`${j}-description`:void 0,W=w!==void 0,[X,Y]=r.useState(R),g=w??X,[Z,ee]=r.useState(),V=r.useRef(null),b=r.useRef(null),z=r.useRef(null),B=r.useCallback(t=>{W||Y(t),v==null||v(t)},[W,v]),S=r.useCallback(()=>{B(!1)},[B]),E=r.useCallback(()=>{const t=V.current,c=b.current;if(!t||!c||typeof window>"u")return;const l=t.getBoundingClientRect(),u=c.getBoundingClientRect(),a=pe({triggerRect:l,popoverRect:u,side:y,align:x,offset:P?h+6:h});ee({top:K(a.top,8,Math.max(8,window.innerHeight-u.height-8)),left:K(a.left,8,Math.max(8,window.innerWidth-u.width-8)),minWidth:Math.min(l.width,window.innerWidth-16)})},[x,h,P,y]);r.useEffect(()=>{if(!g||typeof window>"u")return;z.current=document.activeElement instanceof HTMLElement?document.activeElement:null,E();const t=window.requestAnimationFrame(E),c=window.setTimeout(()=>{if(!I)return;const a=b.current;if(!a)return;(de(a)[0]??a).focus()},0),l=a=>{var $,A;if(!L)return;const N=a.target;N instanceof Node&&(($=b.current)!=null&&$.contains(N)||(A=V.current)!=null&&A.contains(N)||S())},u=()=>E();return document.addEventListener("pointerdown",l),window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),()=>{var a;window.cancelAnimationFrame(t),window.clearTimeout(c),document.removeEventListener("pointerdown",l),window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0),(a=z.current)==null||a.focus(),z.current=null}},[I,L,S,g,E]);const te=t=>{var c,l;(l=(c=o.props).onClick)==null||l.call(c,t),t.defaultPrevented||B(!g)},oe=t=>{var c,l;(l=(c=o.props).onKeyDown)==null||l.call(c,t),!t.defaultPrevented&&(t.key==="ArrowDown"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),B(!0))},ne=t=>{t.key==="Escape"&&U&&(t.stopPropagation(),S())},ie=()=>{if(!r.isValidElement(o))return null;const t=o;return r.cloneElement(t,{ref:se(t.props.ref,V),"aria-controls":g?j:void 0,"aria-expanded":g,"aria-haspopup":"dialog",onClick:te,onKeyDown:oe})};return e.jsxs("span",{className:M("willa-popover",_),children:[ie(),g&&typeof document<"u"?re.createPortal(e.jsxs("div",{ref:b,id:j,className:M("willa-popover-content",`willa-popover-content--${H}`,P&&`willa-popover-content--${y}`,J),style:ue(Z),role:"dialog","aria-label":i?void 0:Q??"Popover","aria-labelledby":T,"aria-describedby":F,tabIndex:-1,onKeyDown:ne,children:[P?e.jsx("span",{className:"willa-popover-arrow","aria-hidden":"true"}):null,i||d?e.jsxs("header",{className:"willa-popover-header",children:[i?e.jsx("h2",{id:T,className:"willa-popover-title",children:i}):null,d?e.jsx("p",{id:F,className:"willa-popover-description",children:d}):null]}):null,s?e.jsx("div",{className:"willa-popover-body",children:s}):null,m?e.jsx("footer",{className:"willa-popover-footer",children:m}):null]}),document.body):null]})}const pe=n=>{const{triggerRect:o,popoverRect:s,side:i,align:d,offset:m}=n,w=o.left+o.width/2-s.width/2,R=o.top+o.height/2-s.height/2;if(i==="top"||i==="bottom"){const x=i==="top"?o.top-s.height-m:o.bottom+m,h=G(o.left,o.right,s.width,w,d);return{top:x,left:h}}const v=i==="left"?o.left-s.width-m:o.right+m;return{top:G(o.top,o.bottom,s.height,R,d),left:v}},G=(n,o,s,i,d)=>d==="start"?n:d==="end"?o-s:i,ue=n=>({top:n?`${n.top}px`:void 0,left:n?`${n.left}px`:void 0,minWidth:n?`${n.minWidth}px`:void 0,visibility:n?void 0:"hidden"}),me={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},C={display:"grid",gap:"0.7rem"},D={display:"grid",gap:"0.35rem"},O={color:"var(--willa-text-soft)",fontSize:"0.82rem"},ye=ce({id:"popover",name:"Popover",packageName:"willa/Popover",description:"用于承载可交互内容的轻量浮层，适合设置面板、筛选器和上下文信息。",imports:[{name:"Popover",from:"willa/Popover"},{name:"Button",from:"willa/Button"}],css:"willa/Popover.css",demo:{name:"Popover",component:f,props:{title:"生成设置",description:"调整回复长度和输出语气。",trigger:e.jsx(p,{icon:e.jsx(ae,{}),variant:"outline",children:"打开设置"}),children:e.jsxs("div",{style:C,children:[e.jsxs("div",{style:D,children:[e.jsx("span",{style:O,children:"模型"}),e.jsx(k,{defaultValue:"willa-ai-default",size:"sm"})]}),e.jsx(q,{tone:"info",children:"已启用上下文增强"})]})}},code:`
    import { Button } from "willa/Button";
    import { Popover } from "willa/Popover";
    import "willa/Button.css";
    import "willa/Popover.css";

    <Popover
      title="生成设置"
      description="调整回复长度和输出语气。"
      trigger={<Button variant="outline">打开设置</Button>}
    >
      <div>这里放表单、操作按钮或说明内容。</div>
    </Popover>;
  `,sections:[{title:"基础浮层",code:`
        <Popover
          title="内容策略"
          description="适合放少量说明和一组轻量操作，不适合承载完整流程。"
          trigger={<Button variant="outline">查看策略</Button>}
        >
          <div style={stackStyle}>
            <Badge tone="info">轻量交互</Badge>
            <span>点击外部区域或按 Escape 可以关闭浮层。</span>
          </div>
        </Popover>;
      `,content:e.jsx(f,{title:"内容策略",description:"适合放少量说明和一组轻量操作，不适合承载完整流程。",trigger:e.jsx(p,{variant:"outline",children:"查看策略"}),children:e.jsxs("div",{style:C,children:[e.jsx(q,{tone:"info",children:"轻量交互"}),e.jsx("span",{children:"点击外部区域或按 Escape 可以关闭浮层。"})]})})},{title:"表单内容",code:`
        <Popover
          title="快速配置"
          description="Popover 可以承载输入框和按钮。"
          trigger={
            <Button icon={<GearIcon />} variant="soft">
              配置参数
            </Button>
          }
          footer={
            <>
              <Button size="sm" variant="ghost">
                重置
              </Button>
              <Button size="sm" variant="solid">
                应用
              </Button>
            </>
          }
        >
          <div style={stackStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>提示词前缀</span>
              <Input defaultValue="请给出结构化回答" size="sm" />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>温度</span>
              <Input defaultValue="0.7" size="sm" />
            </div>
          </div>
        </Popover>;
      `,content:e.jsx(f,{title:"快速配置",description:"Popover 可以承载输入框和按钮。",trigger:e.jsx(p,{icon:e.jsx(le,{}),variant:"soft",children:"配置参数"}),footer:e.jsxs(e.Fragment,{children:[e.jsx(p,{size:"sm",variant:"ghost",children:"重置"}),e.jsx(p,{size:"sm",variant:"solid",children:"应用"})]}),children:e.jsxs("div",{style:C,children:[e.jsxs("div",{style:D,children:[e.jsx("span",{style:O,children:"提示词前缀"}),e.jsx(k,{defaultValue:"请给出结构化回答",size:"sm"})]}),e.jsxs("div",{style:D,children:[e.jsx("span",{style:O,children:"温度"}),e.jsx(k,{defaultValue:"0.7",size:"sm"})]})]})})},{title:"方向和对齐",code:`
        <div style={rowStyle}>
          <Popover
            title="上方"
            side="top"
            trigger={<Button variant="outline">Top</Button>}
          >
            <span>从上方展开。</span>
          </Popover>
          <Popover
            title="右侧"
            side="right"
            align="center"
            trigger={<Button variant="outline">Right</Button>}
          >
            <span>从右侧展开。</span>
          </Popover>
          <Popover
            title="下方末端对齐"
            align="end"
            trigger={<Button variant="outline">End</Button>}
          >
            <span>和触发器右侧对齐。</span>
          </Popover>
        </div>;
      `,content:e.jsxs("div",{style:me,children:[e.jsx(f,{title:"上方",side:"top",trigger:e.jsx(p,{variant:"outline",children:"Top"}),children:e.jsx("span",{children:"从上方展开。"})}),e.jsx(f,{title:"右侧",side:"right",align:"center",trigger:e.jsx(p,{variant:"outline",children:"Right"}),children:e.jsx("span",{children:"从右侧展开。"})}),e.jsx(f,{title:"下方末端对齐",align:"end",trigger:e.jsx(p,{variant:"outline",children:"End"}),children:e.jsx("span",{children:"和触发器右侧对齐。"})})]})},{title:"受控状态",code:`
        <Popover
          title="受控 Popover"
          open
          trigger={<Button variant="soft">保持展开</Button>}
        >
          <span>适合和外部状态、快捷键或引导流程配合。</span>
        </Popover>;
      `,content:e.jsx(f,{title:"受控 Popover",open:!0,trigger:e.jsx(p,{variant:"soft",children:"保持展开"}),children:e.jsx("span",{children:"适合和外部状态、快捷键或引导流程配合。"})})}],props:[{name:"trigger",type:"ReactElement",required:!0,description:"触发 Popover 的元素。"},{name:"children",type:"ReactNode",description:"Popover 主体内容。"},{name:"title",type:"ReactNode",description:"浮层标题。"},{name:"description",type:"ReactNode",description:"浮层说明。"},{name:"footer",type:"ReactNode",description:"底部操作区。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"side",type:'"top" | "right" | "bottom" | "left"',defaultValue:'"bottom"',description:"Popover 相对触发元素的展示方向。"},{name:"align",type:'"start" | "center" | "end"',defaultValue:'"start"',description:"Popover 与触发元素的对齐方式。"},{name:"offset",type:"number",defaultValue:"10",description:"Popover 与触发元素之间的距离。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"浮层尺寸。"},{name:"autoFocus",type:"boolean",defaultValue:"true",description:"打开后是否自动聚焦浮层内第一个可聚焦元素。"},{name:"closeOnOutsidePointerDown",type:"boolean",defaultValue:"true",description:"点击外部区域时是否关闭。"},{name:"closeOnEscape",type:"boolean",defaultValue:"true",description:"按 Escape 时是否关闭。"},{name:"showArrow",type:"boolean",defaultValue:"true",description:"是否显示指向触发元素的箭头。"},{name:"ariaLabel",type:"string",defaultValue:'"Popover"',description:"没有 title 时的无障碍名称。"},{name:"className",type:"string",description:"外层 className。"},{name:"contentClassName",type:"string",description:"Popover 浮层 className。"}]});export{ye as default};
