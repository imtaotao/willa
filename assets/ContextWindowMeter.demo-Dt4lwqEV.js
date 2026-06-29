import{b1 as e,aN as b,aM as _}from"./index-BjtE9AVd.js";import{d as $}from"./defineDoc-CWmZ2fbW.js";const S=.72,T=.9,F="__willa-context-window-meter-remainder",R="未分类";function x({value:t,max:n,label:a="上下文窗口",description:c,unit:l="tokens",size:w="md",tone:r,warningThreshold:u=S,dangerThreshold:d=T,segments:p,showValue:M=!0,formatValue:h,className:C,style:j,...W}){const v=p!==void 0&&p.length>0,i=Number.isFinite(n)&&n>0?n:0,s=i>0?_(t,0,i):0,y=i>0?s/i:0,g=r??D(y,u,d),N=v&&i>0?z(p,s,i,g):[],k=`${m(s)} / ${m(i)} ${typeof l=="string"?l:""}`.trim(),f=(h==null?void 0:h(s,i))??I(s,i,l),V={"--willa-context-window-meter-value":`${y*100}%`,...j};return e.jsxs("section",{...W,className:b("willa-context-window-meter",`willa-context-window-meter--${w}`,`willa-context-window-meter--${g}`,C),"data-tone":g,style:V,children:[e.jsxs("div",{className:"willa-context-window-meter__header",children:[e.jsxs("div",{className:"willa-context-window-meter__heading",children:[a?e.jsx("h3",{className:"willa-context-window-meter__title",children:a}):null,c?e.jsx("div",{className:"willa-context-window-meter__description",children:c}):null]}),M?e.jsx("div",{className:"willa-context-window-meter__value",children:f}):null]}),e.jsx("div",{className:"willa-context-window-meter__track",role:"meter","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":s,"aria-valuetext":typeof f=="string"?f:k,children:v?N.map(o=>e.jsx("span",{className:b("willa-context-window-meter__segment",`willa-context-window-meter__segment--${o.tone}`),style:{"--willa-context-window-meter-segment-value":`${o.ratio*100}%`}},o.id)):e.jsx("span",{className:"willa-context-window-meter__fill"})}),v?e.jsx("dl",{className:"willa-context-window-meter__legend",children:N.map(o=>e.jsxs("div",{className:"willa-context-window-meter__legend-item",children:[e.jsxs("dt",{children:[e.jsx("span",{className:b("willa-context-window-meter__legend-mark",`willa-context-window-meter__legend-mark--${o.tone}`),"aria-hidden":"true"}),e.jsx("span",{className:"willa-context-window-meter__legend-label",children:o.label})]}),e.jsx("dd",{children:o.meta??`${m(o.renderedValue)} ${typeof l=="string"?l:""}`})]},o.id))}):null]})}const z=(t,n,a,c)=>{let l=n;const w=t.map(r=>{const u=_(r.value,0,a),d=_(u,0,l);return l-=d,{id:r.id,label:r.label,meta:d===u?r.meta:null,ratio:d/a,renderedValue:d,tone:r.tone??"neutral"}}).filter(r=>r.renderedValue>0);return l>0&&w.push({id:F,label:R,meta:null,ratio:l/a,renderedValue:l,tone:c}),w},D=(t,n,a)=>t>=a?"danger":t>=n?"warning":"info",I=(t,n,a)=>e.jsxs(e.Fragment,{children:[m(t)," / ",m(n),a?e.jsxs(e.Fragment,{children:[" ",a]}):null]}),m=t=>Number.isFinite(t)?new Intl.NumberFormat("zh-CN",{maximumFractionDigits:t>=1e3?1:0,notation:t>=1e4?"compact":"standard"}).format(t):"0";x.displayName="ContextWindowMeter";const P={display:"grid",gap:"1rem",width:"min(100%, 54rem)"},q=()=>e.jsx("div",{style:P,children:e.jsx(x,{value:96e3,max:128e3,label:"上下文窗口",description:"当前会话已纳入系统指令、用户附件和检索片段。",segments:[{id:"system",label:"系统指令",value:12e3,tone:"neutral",meta:"12k"},{id:"files",label:"文件",value:44e3,tone:"info",meta:"44k"},{id:"retrieval",label:"检索",value:28e3,tone:"success",meta:"28k"},{id:"draft",label:"草稿",value:12e3,tone:"warning",meta:"12k"}]})}),E=$({id:"context-window-meter",name:"ContextWindowMeter",displayName:"上下文容量",category:"ai",packageName:"willa/ContextWindowMeter",description:"用于展示 AI 会话上下文窗口、token 容量和分段占用情况。",imports:[{name:"ContextWindowMeter",from:"willa/ContextWindowMeter"}],css:"willa/ContextWindowMeter.css",demo:{name:"ContextWindowMeterPreview",component:q},code:`
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
      `,content:e.jsx(x,{value:52e3,max:128e3,label:"剩余上下文",description:"低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"})},{title:"高占用告警",code:`
        <ContextWindowMeter
          value={118000}
          max={128000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) => \`\${Math.round((value / max) * 100)}% 已使用\`}
        />;
      `,content:e.jsx(x,{value:118e3,max:128e3,warningThreshold:.7,dangerThreshold:.9,label:"长任务上下文",description:"建议压缩历史消息或移除低相关附件。",formatValue:(t,n)=>`${Math.round(t/n*100)}% 已使用`})}],props:[{name:"value",type:"number",required:!0,description:"当前已使用的上下文容量；会在 0 到 max 之间裁剪展示。"},{name:"max",type:"number",required:!0,description:"上下文窗口总容量；非正数会按 0 容量展示。"},{name:"label",type:"ReactNode",defaultValue:'"上下文窗口"',description:"标题内容；可传入空值隐藏标题。"},{name:"description",type:"ReactNode",description:"标题下方的补充说明。"},{name:"unit",type:"ReactNode",defaultValue:'"tokens"',description:"默认数值文案使用的单位。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"组件尺寸。"},{name:"tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',description:"手动指定整体色调；不传时根据阈值自动推导。"},{name:"warningThreshold",type:"number",defaultValue:"0.72",description:"进入 warning 色调的占用比例阈值。"},{name:"dangerThreshold",type:"number",defaultValue:"0.9",description:"进入 danger 色调的占用比例阈值。"},{name:"segments",type:"Array<ContextWindowMeterSegment>",description:"分段占用列表；传入后轨道展示各分段，并在下方展示图例。分段总和小于 value 时会补齐未分类占用，超过 value 时会裁剪到 value，图例同步展示补齐或裁剪后的值。"},{name:"showValue",type:"boolean",defaultValue:"true",description:"是否展示右侧数值摘要。"},{name:"formatValue",type:"(value: number, max: number) => ReactNode",description:"自定义右侧数值摘要文案。"},{name:"className",type:"string",description:"透传到根 section 的类名。"},{name:"style",type:"CSSProperties",description:"透传到根 section 的内联样式。"}]});export{E as default};
