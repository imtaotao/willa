import{b0 as l,a_ as n,aq as M,h as z,E as ee,M as ae,l as ne,k as se,aL as oe,aY as te}from"./index-kOedO2Qb.js";import{F as p}from"./index-CsPw0Fjh.js";import{T as le}from"./index-Bg57DJkm.js";import{d as re}from"./defineDoc-BwDFvUQh.js";const ie=["内容不准确","目标不清晰","语气不合适","其他"];function h(r){const{targetId:i,state:e,disabled:d=!1,disabledMessage:$="当前反馈入口已禁用",reportReasons:g=ie,onSubmit:P,onUndo:k,onReport:w,className:T,style:q,...A}=r,U=e!==void 0,[t,v]=l.useState((e==null?void 0:e.value)??null),[c,u]=l.useState((e==null?void 0:e.reason)??""),[S,b]=l.useState((e==null?void 0:e.note)??""),[m,f]=l.useState(!1),[L,F]=l.useState(null),[N,x]=l.useState(null),O=l.useMemo(()=>g.map(s=>({value:s,label:s})),[g]),W=l.useMemo(()=>[{value:"up",label:"有帮助"},{value:"down",label:"不准确"},{value:"report",label:"举报"}],[]);l.useEffect(()=>{v((e==null?void 0:e.value)??null),u((e==null?void 0:e.reason)??""),b((e==null?void 0:e.note)??""),F(e?{...e}:null),x(null)},[e==null?void 0:e.value,e==null?void 0:e.reason,e==null?void 0:e.note,e]);const a=e??L,H=(s,o)=>s===null?!1:s.value===o.value&&(s.reason??"")===(o.reason??"")&&(s.note??"")===(o.note??""),Y=!!a,G=a?!H(a,{value:t??a.value,reason:c,note:S}):!!t,j=t==="down"||t==="report",C=t==="report",I=!t||!(!j||!!c||c===""&&t!=="down"&&t!=="report")||j&&g.length>0&&!c||d||m,R=Y&&!G,J=s=>{if(s.preventDefault(),I||t===null)return;const o={targetId:i,value:t,reason:c||void 0,note:S.trim()||void 0};x(null),f(!0);const D=()=>{f(!1),F({value:o.value,reason:o.reason,note:o.note}),o.value==="report"&&(w==null||w(i))};let y;try{y=P(o)}catch{x("提交失败，请稍后重试"),f(!1);return}if(te(y)){y.then(()=>{D()}).catch(()=>{x("提交失败，请稍后重试"),f(!1)});return}D()},K=()=>{U?(v((e==null?void 0:e.value)??null),u((e==null?void 0:e.reason)??""),b((e==null?void 0:e.note)??"")):(v(a?a.value:null),u(a?a.reason??"":""),b(a?a.note??"":"")),k==null||k()},Q=s=>{const o=s;v(o),o==="up"&&(u(""),b(""))},X=s=>{u(s)},Z=s=>{b(s.currentTarget.value)},V=(a==null?void 0:a.value)==="up"?"已标记为「有帮助」":(a==null?void 0:a.value)==="down"?`已标记为「不准确」${a!=null&&a.reason?`（${a.reason}）`:""}`:(a==null?void 0:a.value)==="report"?`举报已提交${a!=null&&a.reason?`（${a.reason}）`:""}`:null,_=a!=null&&a.note?`补充说明：${a.note}`:null;return n.jsxs("section",{...A,className:oe("willa-feedback-bar",d&&"willa-feedback-bar--disabled",T),style:q,children:[n.jsx("div",{className:"willa-feedback-bar__title",children:"回答反馈"}),n.jsx(M,{size:"sm",options:W,value:t??"",onValueChange:Q,disabled:d||m}),j?n.jsxs("div",{className:"willa-feedback-bar__reasons",children:[n.jsx("span",{className:"willa-feedback-bar__reason-label",children:"请选择反馈原因"}),n.jsx(M,{size:"sm",selectionMode:"single",options:O,value:c,onValueChange:X,disabled:d||m})]}):null,n.jsxs("form",{className:"willa-feedback-bar__note",onSubmit:J,children:[n.jsx(le,{size:"sm",resize:"vertical",rows:3,value:S,disabled:d||m||!C,placeholder:C?"补充举报说明（可选）":"可选补充说明",onChange:Z}),n.jsxs("div",{className:"willa-feedback-bar__actions",children:[n.jsx(z,{size:"sm",type:"submit",disabled:I,loading:m,loadingText:"提交中",children:"提交反馈"}),R?n.jsx(z,{size:"sm",variant:"soft",type:"button",onClick:K,children:"撤回"}):null]})]}),N?n.jsx(p,{tone:"error",icon:n.jsx(ee,{}),children:N}):null,d?n.jsx(p,{tone:"warning",icon:n.jsx(ae,{}),children:$}):null,R?n.jsxs("div",{className:"willa-feedback-bar__state",children:[n.jsx(p,{tone:"success",icon:n.jsx(ne,{}),children:V}),_?n.jsx(p,{tone:"info",children:_}):null]}):null,(a==null?void 0:a.value)==="report"?n.jsx(p,{icon:n.jsx(se,{}),children:"举报记录已关联处理"}):null]})}h.displayName="FeedbackBar";const B={display:"grid",gap:"1rem",width:"min(100%, 48rem)"},de={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},E=()=>{const[r,i]=l.useState(null);return n.jsxs("div",{style:B,children:[n.jsx(h,{targetId:"answer-1024",onSubmit:e=>{i(e)},onUndo:()=>{i(null)}}),n.jsxs("div",{style:de,children:["最近提交：",r?`${r.value}${r.reason?` / ${r.reason}`:""}`:"暂无"]})]})},ce=()=>{const[r,i]=l.useState({value:"down",reason:"内容不准确",note:"引用的数据范围需要更新。"});return n.jsx("div",{style:B,children:n.jsx(h,{targetId:"answer-controlled",state:r,onSubmit:e=>{i({value:e.value,reason:e.reason,note:e.note})},onUndo:()=>{i({value:"up"})}})})},ue=()=>n.jsx("div",{style:B,children:n.jsx(h,{targetId:"answer-disabled",disabled:!0,disabledMessage:"当前回答来自归档会话，反馈入口已关闭。",onSubmit:()=>{}})}),xe=re({id:"feedback-bar",name:"FeedbackBar",displayName:"回答反馈",category:"ai",packageName:"willa/FeedbackBar",description:"AI 回复反馈入口，支持点赞、点踩、举报原因和补充说明。",imports:[{name:"FeedbackBar",from:"willa/FeedbackBar"}],css:"willa/FeedbackBar.css",demo:{name:"FeedbackBarPreview",component:E},code:`
    import { useState } from "react";
    import { FeedbackBar } from "willa/FeedbackBar";
    import "willa/FeedbackBar.css";

    const Demo = () => {
      const [payload, setPayload] = useState(null);

      return (
        <FeedbackBar
          targetId="answer-1024"
          onSubmit={(nextPayload) => {
            setPayload(nextPayload);
          }}
        />
      );
    };
  `,sections:[{title:"主链路（提交反馈）",code:`
        <FeedbackBar
          targetId="answer-1024"
          onSubmit={(nextPayload) => {
            setPayload(nextPayload);
          }}
          onUndo={() => {
            setPayload(null);
          }}
        />;
      `,content:n.jsx(E,{})},{title:"受控状态",code:`
        <FeedbackBar
          targetId="answer-controlled"
          state={state}
          onSubmit={(payload) => {
            setState({
              value: payload.value,
              reason: payload.reason,
              note: payload.note,
            });
          }}
        />;
      `,content:n.jsx(ce,{})},{title:"边界（禁用）",code:`
        <FeedbackBar
          targetId="answer-disabled"
          disabled
          disabledMessage="当前回答来自归档会话，反馈入口已关闭。"
          onSubmit={() => {}}
        />;
      `,content:n.jsx(ue,{})}],props:[{name:"targetId",type:"string",required:!0,description:"反馈关联的回答或目标 ID。"},{name:"state",type:"FeedbackBarState",description:"受控反馈状态。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用反馈入口。"},{name:"disabledMessage",type:"ReactNode",defaultValue:'"当前反馈入口已禁用"',description:"禁用态提示内容。"},{name:"reportReasons",type:"Array<string>",defaultValue:'["内容不准确", "目标不清晰", "语气不合适", "其他"]',description:"点踩或举报时可选的原因列表。"},{name:"onSubmit",type:"(payload: FeedbackBarPayload) => void | Promise<void>",required:!0,description:"提交反馈时触发。"},{name:"onUndo",type:"() => void",description:"点击撤回时触发。"},{name:"onReport",type:"(id: string) => void",description:"举报类反馈提交成功后触发。"}]});export{xe as default};
