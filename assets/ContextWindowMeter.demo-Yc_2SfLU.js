import{l as e,p as t,u as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{A as r}from"./src-D2lZkBJ2.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";var a=t(n()),o=e(),s=.72,c=.9,l=`__willa-context-window-meter-remainder`,u=`未分类`;function d({value:e,max:t,label:n=`上下文窗口`,description:i,unit:l=`tokens`,size:u=`md`,tone:d,warningThreshold:g=s,dangerThreshold:_=c,segments:v,showValue:y=!0,formatValue:b,className:x,style:S,...C}){let w=v!==void 0&&v.length>0,T=Number.isFinite(t)&&t>0?t:0,E=T>0?r(e,0,T):0,D=T>0?E/T:0,O=d??p(D,g,_),k=w&&T>0?f(v,E,T,O):[],A=`${h(E)} / ${h(T)} ${typeof l==`string`?l:``}`.trim(),j=b?.(E,T)??m(E,T,l),M={"--willa-context-window-meter-value":`${D*100}%`,...S};return(0,o.jsxs)(`section`,{...C,className:(0,a.default)(`willa-context-window-meter`,`willa-context-window-meter--${u}`,`willa-context-window-meter--${O}`,x),"data-tone":O,style:M,children:[(0,o.jsxs)(`div`,{className:`willa-context-window-meter__header`,children:[(0,o.jsxs)(`div`,{className:`willa-context-window-meter__heading`,children:[n?(0,o.jsx)(`h3`,{className:`willa-context-window-meter__title`,children:n}):null,i?(0,o.jsx)(`div`,{className:`willa-context-window-meter__description`,children:i}):null]}),y?(0,o.jsx)(`div`,{className:`willa-context-window-meter__value`,children:j}):null]}),(0,o.jsx)(`div`,{className:`willa-context-window-meter__track`,role:`meter`,"aria-valuemin":0,"aria-valuemax":T,"aria-valuenow":E,"aria-valuetext":typeof j==`string`?j:A,children:w?k.map(e=>(0,o.jsx)(`span`,{className:(0,a.default)(`willa-context-window-meter__segment`,`willa-context-window-meter__segment--${e.tone}`),style:{"--willa-context-window-meter-segment-value":`${e.ratio*100}%`}},e.id)):(0,o.jsx)(`span`,{className:`willa-context-window-meter__fill`})}),w?(0,o.jsx)(`dl`,{className:`willa-context-window-meter__legend`,children:k.map(e=>(0,o.jsxs)(`div`,{className:`willa-context-window-meter__legend-item`,children:[(0,o.jsxs)(`dt`,{children:[(0,o.jsx)(`span`,{className:(0,a.default)(`willa-context-window-meter__legend-mark`,`willa-context-window-meter__legend-mark--${e.tone}`),"aria-hidden":`true`}),(0,o.jsx)(`span`,{className:`willa-context-window-meter__legend-label`,children:e.label})]}),(0,o.jsx)(`dd`,{children:e.meta??`${h(e.renderedValue)} ${typeof l==`string`?l:``}`})]},e.id))}):null]})}var f=(e,t,n,i)=>{let a=t,o=e.map(e=>{let t=r(e.value,0,n),i=r(t,0,a);return a-=i,{id:e.id,label:e.label,meta:i===t?e.meta:null,ratio:i/n,renderedValue:i,tone:e.tone??`neutral`}}).filter(e=>e.renderedValue>0);return a>0&&o.push({id:l,label:u,meta:null,ratio:a/n,renderedValue:a,tone:i}),o},p=(e,t,n)=>e>=n?`danger`:e>=t?`warning`:`info`,m=(e,t,n)=>(0,o.jsxs)(o.Fragment,{children:[h(e),` / `,h(t),n?(0,o.jsxs)(o.Fragment,{children:[` `,n]}):null]}),h=e=>Number.isFinite(e)?new Intl.NumberFormat(`zh-CN`,{maximumFractionDigits:+(e>=1e3),notation:e>=1e4?`compact`:`standard`}).format(e):`0`;d.displayName=`ContextWindowMeter`;var g={display:`grid`,gap:`1rem`,width:`min(100%, 54rem)`},_=i({id:`context-window-meter`,name:`ContextWindowMeter`,displayName:`上下文容量`,category:`ai`,packageName:`willa/ContextWindowMeter`,description:`用于展示 AI 会话上下文窗口、token 容量和分段占用情况。`,imports:[{name:`ContextWindowMeter`,from:`willa/ContextWindowMeter`}],css:`willa/ContextWindowMeter.css`,demo:{name:`ContextWindowMeterPreview`,component:()=>(0,o.jsx)(`div`,{style:g,children:(0,o.jsx)(d,{value:96e3,max:128e3,label:`上下文窗口`,description:`当前会话已纳入系统指令、用户附件和检索片段。`,segments:[{id:`system`,label:`系统指令`,value:12e3,tone:`neutral`,meta:`12k`},{id:`files`,label:`文件`,value:44e3,tone:`info`,meta:`44k`},{id:`retrieval`,label:`检索`,value:28e3,tone:`success`,meta:`28k`},{id:`draft`,label:`草稿`,value:12e3,tone:`warning`,meta:`12k`}]})})},code:`
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
  `,sections:[{title:`单值容量`,code:`
        <ContextWindowMeter
          value={52000}
          max={128000}
          label="剩余上下文"
          description="低于阈值时保持信息色，接近上限后自动切换到警告或危险色。"
        />;
      `,content:(0,o.jsx)(d,{value:52e3,max:128e3,label:`剩余上下文`,description:`低于阈值时保持信息色，接近上限后自动切换到警告或危险色。`})},{title:`高占用告警`,code:`
        <ContextWindowMeter
          value={118000}
          max={128000}
          warningThreshold={0.7}
          dangerThreshold={0.9}
          label="长任务上下文"
          description="建议压缩历史消息或移除低相关附件。"
          formatValue={(value, max) => \`\${Math.round((value / max) * 100)}% 已使用\`}
        />;
      `,content:(0,o.jsx)(d,{value:118e3,max:128e3,warningThreshold:.7,dangerThreshold:.9,label:`长任务上下文`,description:`建议压缩历史消息或移除低相关附件。`,formatValue:(e,t)=>`${Math.round(e/t*100)}% 已使用`})}],props:[{name:`value`,type:`number`,required:!0,description:`当前已使用的上下文容量；会在 0 到 max 之间裁剪展示。`},{name:`max`,type:`number`,required:!0,description:`上下文窗口总容量；非正数会按 0 容量展示。`},{name:`label`,type:`ReactNode`,defaultValue:`"上下文窗口"`,description:`标题内容；可传入空值隐藏标题。`},{name:`description`,type:`ReactNode`,description:`标题下方的补充说明。`},{name:`unit`,type:`ReactNode`,defaultValue:`"tokens"`,description:`默认数值文案使用的单位。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`组件尺寸。`},{name:`tone`,type:`"neutral" | "info" | "success" | "warning" | "danger"`,description:`手动指定整体色调；不传时根据阈值自动推导。`},{name:`warningThreshold`,type:`number`,defaultValue:`0.72`,description:`进入 warning 色调的占用比例阈值。`},{name:`dangerThreshold`,type:`number`,defaultValue:`0.9`,description:`进入 danger 色调的占用比例阈值。`},{name:`segments`,type:`Array<ContextWindowMeterSegment>`,description:`分段占用列表；传入后轨道展示各分段，并在下方展示图例。分段总和小于 value 时会补齐未分类占用，超过 value 时会裁剪到 value，图例同步展示补齐或裁剪后的值。`},{name:`showValue`,type:`boolean`,defaultValue:`true`,description:`是否展示右侧数值摘要。`},{name:`formatValue`,type:`(value: number, max: number) => ReactNode`,description:`自定义右侧数值摘要文案。`},{name:`className`,type:`string`,description:`透传到根 section 的类名。`},{name:`style`,type:`CSSProperties`,description:`透传到根 section 的内联样式。`}]});export{_ as default};