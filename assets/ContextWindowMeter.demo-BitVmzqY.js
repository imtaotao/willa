import{b0 as e,aM as g,aN as w}from"./index-BvtFLwN5.js";import{d as $}from"./defineDoc-CQCHZfF9.js";const T=.72,V=.9;function s({value:t,max:i,label:l="上下文窗口",description:x,unit:d="tokens",size:f="md",tone:b,warningThreshold:y=T,dangerThreshold:N=V,segments:o,showValue:_=!0,formatValue:m,className:M,style:C,...j}){const n=Number.isFinite(i)&&i>0?i:0,r=n>0?g(t,0,n):0,p=n>0?r/n:0,h=b??R(p,y,N),c=(m==null?void 0:m(r,n))??`${u(r)} / ${u(n)} ${d}`,v=o!==void 0&&o.length>0,W={"--willa-context-window-meter-value":`${p*100}%`,...C};return e.jsxs("section",{...j,className:w("willa-context-window-meter",`willa-context-window-meter--${f}`,`willa-context-window-meter--${h}`,M),"data-tone":h,style:W,children:[e.jsxs("div",{className:"willa-context-window-meter__header",children:[e.jsxs("div",{className:"willa-context-window-meter__heading",children:[l?e.jsx("h3",{className:"willa-context-window-meter__title",children:l}):null,x?e.jsx("div",{className:"willa-context-window-meter__description",children:x}):null]}),_?e.jsx("div",{className:"willa-context-window-meter__value",children:c}):null]}),e.jsx("div",{className:"willa-context-window-meter__track",role:"meter","aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r,"aria-valuetext":typeof c=="string"?c:void 0,children:v?o.map(a=>{const k=n>0?g(a.value,0,n)/n:0;return e.jsx("span",{className:w("willa-context-window-meter__segment",`willa-context-window-meter__segment--${a.tone??"neutral"}`),style:{"--willa-context-window-meter-segment-value":`${k*100}%`}},a.id)}):e.jsx("span",{className:"willa-context-window-meter__fill"})}),v?e.jsx("dl",{className:"willa-context-window-meter__legend",children:o.map(a=>e.jsxs("div",{className:"willa-context-window-meter__legend-item",children:[e.jsxs("dt",{children:[e.jsx("span",{className:w("willa-context-window-meter__legend-mark",`willa-context-window-meter__legend-mark--${a.tone??"neutral"}`),"aria-hidden":"true"}),e.jsx("span",{className:"willa-context-window-meter__legend-label",children:a.label})]}),e.jsx("dd",{children:a.meta??`${u(a.value)} ${typeof d=="string"?d:""}`})]},a.id))}):null]})}const R=(t,i,l)=>t>=l?"danger":t>=i?"warning":"info",u=t=>Number.isFinite(t)?new Intl.NumberFormat("zh-CN",{maximumFractionDigits:t>=1e3?1:0,notation:t>=1e4?"compact":"standard"}).format(t):"0";s.displayName="ContextWindowMeter";const S={display:"grid",gap:"1rem",width:"min(100%, 54rem)"},F=()=>e.jsx("div",{style:S,children:e.jsx(s,{value:96e3,max:128e3,label:"上下文窗口",description:"当前会话已纳入系统指令、用户附件和检索片段。",segments:[{id:"system",label:"系统指令",value:12e3,tone:"neutral",meta:"12k"},{id:"files",label:"文件",value:44e3,tone:"info",meta:"44k"},{id:"retrieval",label:"检索",value:28e3,tone:"success",meta:"28k"},{id:"draft",label:"草稿",value:12e3,tone:"warning",meta:"12k"}]})}),P=$({id:"context-window-meter",name:"ContextWindowMeter",displayName:"上下文容量",category:"ai",packageName:"willa/ContextWindowMeter",description:"用于展示 AI 会话上下文窗口、token 容量和分段占用情况。",imports:[{name:"ContextWindowMeter",from:"willa/ContextWindowMeter"}],css:"willa/ContextWindowMeter.css",demo:{name:"ContextWindowMeterPreview",component:F},code:`
    import { ContextWindowMeter } from "willa/ContextWindowMeter";
    import "willa/ContextWindowMeter.css";

    <ContextWindowMeter
      value={96000}
      max={128000}
      label="上下文窗口"
      description="当前会话已纳入系统指令、用户附件和检索片段。"
      segments={[
        { id: "system", label: "系统指令", value: 12000, tone: "neutral", meta: "12k" },
        { id: "files", label: "文件", value: 44000, tone: "info", meta: "44k" },
        { id: "retrieval", label: "检索", value: 28000, tone: "success", meta: "28k" },
        { id: "draft", label: "草稿", value: 12000, tone: "warning", meta: "12k" },
      ]}
    />;
  `,sections:[{title:"单值容量",code:`
        <ContextWindowMeter
          value={52000}
          max={128000}
          label="剩余上下文"
          description="低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"
        />;
      `,content:e.jsx(s,{value:52e3,max:128e3,label:"剩余上下文",description:"低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"})},{title:"高占用告警",code:`
        <ContextWindowMeter
          value={118000}
          max={128000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) => \`\${Math.round((value / max) * 100)}% 已使用\`}
        />;
      `,content:e.jsx(s,{value:118e3,max:128e3,warningThreshold:.7,dangerThreshold:.9,label:"长任务上下文",description:"建议压缩历史消息或移除低相关附件。",formatValue:(t,i)=>`${Math.round(t/i*100)}% 已使用`})}],props:[{name:"value",type:"number",required:!0,description:"当前已使用的上下文容量；会在 0 到 max 之间裁剪展示。"},{name:"max",type:"number",required:!0,description:"上下文窗口总容量；非正数会按 0 容量展示。"},{name:"label",type:"ReactNode",defaultValue:'"上下文窗口"',description:"标题内容；可传入空值隐藏标题。"},{name:"description",type:"ReactNode",description:"标题下方的补充说明。"},{name:"unit",type:"ReactNode",defaultValue:'"tokens"',description:"默认数值文案使用的单位。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"组件尺寸。"},{name:"tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',description:"手动指定整体色调；不传时根据阈值自动推导。"},{name:"warningThreshold",type:"number",defaultValue:"0.72",description:"进入 warning 色调的占用比例阈值。"},{name:"dangerThreshold",type:"number",defaultValue:"0.9",description:"进入 danger 色调的占用比例阈值。"},{name:"segments",type:"Array<ContextWindowMeterSegment>",description:"分段占用列表；传入后轨道展示各分段，并在下方展示图例。"},{name:"showValue",type:"boolean",defaultValue:"true",description:"是否展示右侧数值摘要。"},{name:"formatValue",type:"(value: number, max: number) => ReactNode",description:"自定义右侧数值摘要文案。"},{name:"className",type:"string",description:"透传到根 section 的类名。"},{name:"style",type:"CSSProperties",description:"透传到根 section 的内联样式。"}]});export{P as default};
