import{b5 as r,b3 as n,ar as D,h as z,F as V,N as ee,l as ae,k as ne,aO as se,b1 as oe}from"./index-C9Ot4add.js";import{F as m}from"./index-t1lnjFE-.js";import{T as te}from"./index-CstzFZXw.js";import{d as re}from"./defineDoc-DwmdElki.js";const le=["内容不准确","目标不清晰","语气不合适","其他"];function h(l){const{targetId:i,state:e,disabled:d=!1,disabledMessage:$="当前反馈入口已禁用",reportReasons:g=le,onSubmit:E,onUndo:k,onReport:w,className:P,style:T,...q}=l,A=e!==void 0,[o,p]=r.useState((e==null?void 0:e.value)??null),[c,u]=r.useState((e==null?void 0:e.reason)??""),[S,v]=r.useState((e==null?void 0:e.note)??""),[b,f]=r.useState(!1),[O,F]=r.useState(null),[N,x]=r.useState(null),U=r.useMemo(()=>g.map(s=>({value:s,label:s})),[g]),W=r.useMemo(()=>[{value:"up",label:"有帮助"},{value:"down",label:"不准确"},{value:"report",label:"举报"}],[]);r.useEffect(()=>{p((e==null?void 0:e.value)??null),u((e==null?void 0:e.reason)??""),v((e==null?void 0:e.note)??""),F(e?{...e}:null),x(null)},[e==null?void 0:e.value,e==null?void 0:e.reason,e==null?void 0:e.note,e]);const a=e??O,H=(s,t)=>s===null?!1:s.value===t.value&&(s.reason??"")===(t.reason??"")&&(s.note??"")===(t.note??""),L=!!a,G=a?!H(a,{value:o??a.value,reason:c,note:S}):!!o,j=o==="down"||o==="report",C=!o||!(!j||!!c||c===""&&o!=="down"&&o!=="report")||j&&g.length>0&&!c||d||b,I=L&&!G,J=s=>{if(s.preventDefault(),C||o===null)return;const t={targetId:i,value:o,reason:c||void 0,note:S.trim()||void 0};x(null),f(!0);const _=()=>{f(!1),F({value:t.value,reason:t.reason,note:t.note}),t.value==="report"&&(w==null||w(i))};let y;try{y=E(t)}catch{x("提交失败，请稍后重试"),f(!1);return}if(oe(y)){y.then(()=>{_()}).catch(()=>{x("提交失败，请稍后重试"),f(!1)});return}_()},K=()=>{A?(p((e==null?void 0:e.value)??null),u((e==null?void 0:e.reason)??""),v((e==null?void 0:e.note)??"")):(p(a?a.value:null),u(a?a.reason??"":""),v(a?a.note??"":"")),k==null||k()},Q=s=>{const t=s;p(t),t==="up"&&u("")},X=s=>{u(s)},Y=s=>{v(s.currentTarget.value)},Z=(a==null?void 0:a.value)==="up"?"已标记为「有帮助」":(a==null?void 0:a.value)==="down"?`已标记为「不准确」${a!=null&&a.reason?`（${a.reason}）`:""}`:(a==null?void 0:a.value)==="report"?`举报已提交${a!=null&&a.reason?`（${a.reason}）`:""}`:null,R=a!=null&&a.note?`补充说明：${a.note}`:null;return n.jsxs("section",{...q,className:se("willa-feedback-bar",d&&"willa-feedback-bar--disabled",P),style:T,children:[n.jsx("div",{className:"willa-feedback-bar__title",children:"回答反馈"}),n.jsx(D,{size:"sm",options:W,value:o??"",onValueChange:Q,disabled:d||b}),j?n.jsxs("div",{className:"willa-feedback-bar__reasons",children:[n.jsx("span",{className:"willa-feedback-bar__reason-label",children:"请选择反馈原因"}),n.jsx(D,{size:"sm",selectionMode:"single",options:U,value:c,onValueChange:X,disabled:d||b})]}):null,n.jsxs("form",{className:"willa-feedback-bar__note",onSubmit:J,children:[n.jsx(te,{size:"sm",resize:"vertical",rows:3,value:S,disabled:d||b||!o,placeholder:o==="report"?"补充举报说明（可选）":"可选补充说明",onChange:Y}),n.jsxs("div",{className:"willa-feedback-bar__actions",children:[n.jsx(z,{size:"sm",type:"submit",disabled:C,loading:b,loadingText:"提交中",children:"提交反馈"}),I?n.jsx(z,{size:"sm",variant:"soft",type:"button",onClick:K,children:"撤回"}):null]})]}),N?n.jsx(m,{tone:"error",icon:n.jsx(V,{}),children:N}):null,d?n.jsx(m,{tone:"warning",icon:n.jsx(ee,{}),children:$}):null,I?n.jsxs("div",{className:"willa-feedback-bar__state",children:[n.jsx(m,{tone:"success",icon:n.jsx(ae,{}),children:Z}),R?n.jsx(m,{tone:"info",children:R}):null]}):null,(a==null?void 0:a.value)==="report"?n.jsx(m,{icon:n.jsx(ne,{}),children:"举报记录已关联处理"}):null]})}h.displayName="FeedbackBar";const B={display:"grid",gap:"1rem",width:"min(100%, 48rem)"},ie={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},M=()=>{const[l,i]=r.useState(null);return n.jsxs("div",{style:B,children:[n.jsx(h,{targetId:"answer-1024",onSubmit:e=>{i(e)},onUndo:()=>{i(null)}}),n.jsxs("div",{style:ie,children:["最近提交：",l?`${l.value}${l.reason?` / ${l.reason}`:""}`:"暂无"]})]})},de=()=>{const[l,i]=r.useState({value:"down",reason:"内容不准确",note:"引用的数据范围需要更新。"});return n.jsx("div",{style:B,children:n.jsx(h,{targetId:"answer-controlled",state:l,onSubmit:e=>{i({value:e.value,reason:e.reason,note:e.note})},onUndo:()=>{i({value:"up"})}})})},ce=()=>n.jsx("div",{style:B,children:n.jsx(h,{targetId:"answer-disabled",disabled:!0,disabledMessage:"当前回答来自归档会话，反馈入口已关闭。",onSubmit:()=>{}})}),fe=re({id:"feedback-bar",name:"FeedbackBar",displayName:"回答反馈",category:"ai",packageName:"willa/FeedbackBar",description:"AI 回复反馈入口，支持点赞、点踩、举报原因和补充说明。",imports:[{name:"FeedbackBar",from:"willa/FeedbackBar"}],css:"willa/FeedbackBar.css",demo:{name:"FeedbackBarPreview",component:M},code:`
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
      `,content:n.jsx(M,{})},{title:"受控状态",code:`
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
      `,content:n.jsx(de,{})},{title:"边界（禁用）",code:`
        <FeedbackBar
          targetId="answer-disabled"
          disabled
          disabledMessage="当前回答来自归档会话，反馈入口已关闭。"
          onSubmit={() => {}}
        />;
      `,content:n.jsx(ce,{})}],props:[{name:"targetId",type:"string",required:!0,description:"反馈关联的回答或目标 ID。"},{name:"state",type:"FeedbackBarState",description:"受控反馈状态。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用反馈入口。"},{name:"disabledMessage",type:"ReactNode",defaultValue:'"当前反馈入口已禁用"',description:"禁用态提示内容。"},{name:"reportReasons",type:"Array<string>",defaultValue:'["内容不准确", "目标不清晰", "语气不合适", "其他"]',description:"点踩或举报时可选的原因列表。"},{name:"onSubmit",type:"(payload: FeedbackBarPayload) => void | Promise<void>",required:!0,description:"提交反馈时触发。"},{name:"onUndo",type:"() => void",description:"点击撤回时触发。"},{name:"onReport",type:"(id: string) => void",description:"举报类反馈提交成功后触发。"}]});export{fe as default};
