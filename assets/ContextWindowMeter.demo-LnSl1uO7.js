import{b0 as e,aM as g,aN as u}from"./index-DGZYFfoN.js";import{d as T}from"./defineDoc-CvsgFtKJ.js";const V=.72,F=.9;function m({value:t,max:a,label:l="上下文窗口",description:x,unit:o="tokens",size:f="md",tone:b,warningThreshold:y=V,dangerThreshold:N=F,segments:d,showValue:_=!0,formatValue:c,className:M,style:j,...C}){const p=d!==void 0&&d.length>0,n=Number.isFinite(a)&&a>0?a:0,r=n>0?g(t,0,n):0,h=n>0?r/n:0,v=b??R(h,y,N),W=`${s(r)} / ${s(n)} ${typeof o=="string"?o:""}`.trim(),w=(c==null?void 0:c(r,n))??S(r,n,o),k={"--willa-context-window-meter-value":`${h*100}%`,...j};return e.jsxs("section",{...C,className:u("willa-context-window-meter",`willa-context-window-meter--${f}`,`willa-context-window-meter--${v}`,M),"data-tone":v,style:k,children:[e.jsxs("div",{className:"willa-context-window-meter__header",children:[e.jsxs("div",{className:"willa-context-window-meter__heading",children:[l?e.jsx("h3",{className:"willa-context-window-meter__title",children:l}):null,x?e.jsx("div",{className:"willa-context-window-meter__description",children:x}):null]}),_?e.jsx("div",{className:"willa-context-window-meter__value",children:w}):null]}),e.jsx("div",{className:"willa-context-window-meter__track",role:"meter","aria-valuemin":0,"aria-valuemax":n,"aria-valuenow":r,"aria-valuetext":typeof w=="string"?w:W,children:p?d.map(i=>{const $=n>0?g(i.value,0,n)/n:0;return e.jsx("span",{className:u("willa-context-window-meter__segment",`willa-context-window-meter__segment--${i.tone??"neutral"}`),style:{"--willa-context-window-meter-segment-value":`${$*100}%`}},i.id)}):e.jsx("span",{className:"willa-context-window-meter__fill"})}),p?e.jsx("dl",{className:"willa-context-window-meter__legend",children:d.map(i=>e.jsxs("div",{className:"willa-context-window-meter__legend-item",children:[e.jsxs("dt",{children:[e.jsx("span",{className:u("willa-context-window-meter__legend-mark",`willa-context-window-meter__legend-mark--${i.tone??"neutral"}`),"aria-hidden":"true"}),e.jsx("span",{className:"willa-context-window-meter__legend-label",children:i.label})]}),e.jsx("dd",{children:i.meta??`${s(i.value)} ${typeof o=="string"?o:""}`})]},i.id))}):null]})}const R=(t,a,l)=>t>=l?"danger":t>=a?"warning":"info",S=(t,a,l)=>e.jsxs(e.Fragment,{children:[s(t)," / ",s(a),l?e.jsxs(e.Fragment,{children:[" ",l]}):null]}),s=t=>Number.isFinite(t)?new Intl.NumberFormat("zh-CN",{maximumFractionDigits:t>=1e3?1:0,notation:t>=1e4?"compact":"standard"}).format(t):"0";m.displayName="ContextWindowMeter";const z={display:"grid",gap:"1rem",width:"min(100%, 54rem)"},D=()=>e.jsx("div",{style:z,children:e.jsx(m,{value:96e3,max:128e3,label:"上下文窗口",description:"当前会话已纳入系统指令、用户附件和检索片段。",segments:[{id:"system",label:"系统指令",value:12e3,tone:"neutral",meta:"12k"},{id:"files",label:"文件",value:44e3,tone:"info",meta:"44k"},{id:"retrieval",label:"检索",value:28e3,tone:"success",meta:"28k"},{id:"draft",label:"草稿",value:12e3,tone:"warning",meta:"12k"}]})}),A=T({id:"context-window-meter",name:"ContextWindowMeter",displayName:"上下文容量",category:"ai",packageName:"willa/ContextWindowMeter",description:"用于展示 AI 会话上下文窗口、token 容量和分段占用情况。",imports:[{name:"ContextWindowMeter",from:"willa/ContextWindowMeter"}],css:"willa/ContextWindowMeter.css",demo:{name:"ContextWindowMeterPreview",component:D},code:`
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
      `,content:e.jsx(m,{value:52e3,max:128e3,label:"剩余上下文",description:"低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"})},{title:"高占用告警",code:`
        <ContextWindowMeter
          value={118000}
          max={128000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) => \`\${Math.round((value / max) * 100)}% 已使用\`}
        />;
      `,content:e.jsx(m,{value:118e3,max:128e3,warningThreshold:.7,dangerThreshold:.9,label:"长任务上下文",description:"建议压缩历史消息或移除低相关附件。",formatValue:(t,a)=>`${Math.round(t/a*100)}% 已使用`})}],props:[{name:"value",type:"number",required:!0,description:"当前已使用的上下文容量；会在 0 到 max 之间裁剪展示。"},{name:"max",type:"number",required:!0,description:"上下文窗口总容量；非正数会按 0 容量展示。"},{name:"label",type:"ReactNode",defaultValue:'"上下文窗口"',description:"标题内容；可传入空值隐藏标题。"},{name:"description",type:"ReactNode",description:"标题下方的补充说明。"},{name:"unit",type:"ReactNode",defaultValue:'"tokens"',description:"默认数值文案使用的单位。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"组件尺寸。"},{name:"tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',description:"手动指定整体色调；不传时根据阈值自动推导。"},{name:"warningThreshold",type:"number",defaultValue:"0.72",description:"进入 warning 色调的占用比例阈值。"},{name:"dangerThreshold",type:"number",defaultValue:"0.9",description:"进入 danger 色调的占用比例阈值。"},{name:"segments",type:"Array<ContextWindowMeterSegment>",description:"分段占用列表；传入后轨道展示各分段，并在下方展示图例。"},{name:"showValue",type:"boolean",defaultValue:"true",description:"是否展示右侧数值摘要。"},{name:"formatValue",type:"(value: number, max: number) => ReactNode",description:"自定义右侧数值摘要文案。"},{name:"className",type:"string",description:"透传到根 section 的类名。"},{name:"style",type:"CSSProperties",description:"透传到根 section 的内联样式。"}]});export{A as default};
