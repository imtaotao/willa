import{d as e,i as t,l as n,p as r,u as i}from"./aidly.esm-bundler-DaTrP4tr.js";import{S as a,c as o,k as s,l as c}from"./react-icons.esm-mVdwEXuX.js";import{t as l}from"./Button-O1aY2iqB.js";import{i as u}from"./index-B2UoUlCX.js";import{t as d}from"./defineDoc-Cid5xIoZ.js";import{t as f}from"./FormMessage-B4bZfLM_.js";import{t as p}from"./TextArea-D_bElKyR.js";var m=r(e()),h=r(i()),g=n(),_=[`内容不准确`,`目标不清晰`,`语气不合适`,`其他`];function v(e){let{targetId:n,state:r,disabled:i=!1,disabledMessage:d=`当前反馈入口已禁用`,reportReasons:v=_,onSubmit:y,onUndo:b,onReport:x,className:S,style:C,...w}=e,T=r!==void 0,[E,D]=(0,m.useState)(r?.value??null),[O,k]=(0,m.useState)(r?.reason??``),[A,j]=(0,m.useState)(r?.note??``),[M,N]=(0,m.useState)(!1),[P,F]=(0,m.useState)(null),[I,L]=(0,m.useState)(null),R=(0,m.useMemo)(()=>v.map(e=>({value:e,label:e})),[v]),z=(0,m.useMemo)(()=>[{value:`up`,label:`有帮助`},{value:`down`,label:`不准确`},{value:`report`,label:`举报`}],[]);(0,m.useEffect)(()=>{D(r?.value??null),k(r?.reason??``),j(r?.note??``),F(r?{...r}:null),L(null)},[r?.value,r?.reason,r?.note,r]);let B=r??P,V=(e,t)=>e===null?!1:e.value===t.value&&(e.reason??``)===(t.reason??``)&&(e.note??``)===(t.note??``),H=!!B,U=B?!V(B,{value:E??B.value,reason:O,note:A}):!!E,W=E===`down`||E===`report`,G=!E||!(!W||O||O===``&&E!==`down`&&E!==`report`)||W&&v.length>0&&!O||i||M,K=H&&!U,q=e=>{if(e.preventDefault(),G||E===null)return;let r={targetId:n,value:E,reason:O||void 0,note:A.trim()||void 0};L(null),N(!0);let i=()=>{N(!1),F({value:r.value,reason:r.reason,note:r.note}),r.value===`report`&&x?.(n)},a;try{a=y(r)}catch{L(`提交失败，请稍后重试`),N(!1);return}if(t(a)){a.then(()=>{i()}).catch(()=>{L(`提交失败，请稍后重试`),N(!1)});return}i()},J=()=>{T?(D(r?.value??null),k(r?.reason??``),j(r?.note??``)):(D(B?B.value:null),k(B?B.reason??``:``),j(B?B.note??``:``)),b?.()},Y=e=>{let t=e;D(t),t===`up`&&k(``)},X=e=>{k(e)},Z=e=>{j(e.currentTarget.value)},Q=B?.value===`up`?`已标记为「有帮助」`:B?.value===`down`?`已标记为「不准确」${B?.reason?`（${B.reason}）`:``}`:B?.value===`report`?`举报已提交${B?.reason?`（${B.reason}）`:``}`:null,$=B?.note?`补充说明：${B.note}`:null;return(0,g.jsxs)(`section`,{...w,className:(0,h.default)(`willa-feedback-bar`,i&&`willa-feedback-bar--disabled`,S),style:C,children:[(0,g.jsx)(`div`,{className:`willa-feedback-bar__title`,children:`回答反馈`}),(0,g.jsx)(u,{size:`sm`,options:z,value:E??``,onValueChange:Y,disabled:i||M}),W?(0,g.jsxs)(`div`,{className:`willa-feedback-bar__reasons`,children:[(0,g.jsx)(`span`,{className:`willa-feedback-bar__reason-label`,children:`请选择反馈原因`}),(0,g.jsx)(u,{size:`sm`,selectionMode:`single`,options:R,value:O,onValueChange:X,disabled:i||M})]}):null,(0,g.jsxs)(`form`,{className:`willa-feedback-bar__note`,onSubmit:q,children:[(0,g.jsx)(p,{size:`sm`,resize:`vertical`,rows:3,value:A,disabled:i||M||!E,placeholder:E===`report`?`补充举报说明（可选）`:`可选补充说明`,onChange:Z}),(0,g.jsxs)(`div`,{className:`willa-feedback-bar__actions`,children:[(0,g.jsx)(l,{size:`sm`,type:`submit`,disabled:G,loading:M,loadingText:`提交中`,children:`提交反馈`}),K?(0,g.jsx)(l,{size:`sm`,variant:`soft`,type:`button`,onClick:J,children:`撤回`}):null]})]}),I?(0,g.jsx)(f,{tone:`error`,icon:(0,g.jsx)(a,{}),children:I}):null,i?(0,g.jsx)(f,{tone:`warning`,icon:(0,g.jsx)(s,{}),children:d}):null,K?(0,g.jsxs)(`div`,{className:`willa-feedback-bar__state`,children:[(0,g.jsx)(f,{tone:`success`,icon:(0,g.jsx)(c,{}),children:Q}),$?(0,g.jsx)(f,{tone:`info`,children:$}):null]}):null,B?.value===`report`?(0,g.jsx)(f,{icon:(0,g.jsx)(o,{}),children:`举报记录已关联处理`}):null]})}v.displayName=`FeedbackBar`;var y={display:`grid`,gap:`1rem`,width:`min(100%, 48rem)`},b={width:`max-content`,maxWidth:`100%`,border:`1px solid var(--willa-line)`,borderRadius:`0.62rem`,background:`var(--willa-panel-bg)`,color:`var(--willa-text-soft)`,fontSize:`0.86rem`,fontWeight:520,lineHeight:1.45,padding:`0.48rem 0.62rem`},x=()=>{let[e,t]=(0,m.useState)(null);return(0,g.jsxs)(`div`,{style:y,children:[(0,g.jsx)(v,{targetId:`answer-1024`,onSubmit:e=>{t(e)},onUndo:()=>{t(null)}}),(0,g.jsxs)(`div`,{style:b,children:[`最近提交：`,e?`${e.value}${e.reason?` / ${e.reason}`:``}`:`暂无`]})]})},S=d({id:`feedback-bar`,name:`FeedbackBar`,displayName:`回答反馈`,category:`ai`,packageName:`willa/FeedbackBar`,description:`AI 回复反馈入口，支持点赞、点踩、举报原因和补充说明。`,imports:[{name:`FeedbackBar`,from:`willa/FeedbackBar`}],css:`willa/FeedbackBar.css`,demo:{name:`FeedbackBarPreview`,component:x},code:`
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
  `,sections:[{title:`主链路（提交反馈）`,code:`
        <FeedbackBar
          targetId="answer-1024"
          onSubmit={(nextPayload) => {
            setPayload(nextPayload);
          }}
          onUndo={() => {
            setPayload(null);
          }}
        />;
      `,content:(0,g.jsx)(x,{})},{title:`受控状态`,code:`
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
      `,content:(0,g.jsx)(()=>{let[e,t]=(0,m.useState)({value:`down`,reason:`内容不准确`,note:`引用的数据范围需要更新。`});return(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(v,{targetId:`answer-controlled`,state:e,onSubmit:e=>{t({value:e.value,reason:e.reason,note:e.note})},onUndo:()=>{t({value:`up`})}})})},{})},{title:`边界（禁用）`,code:`
        <FeedbackBar
          targetId="answer-disabled"
          disabled
          disabledMessage="当前回答来自归档会话，反馈入口已关闭。"
          onSubmit={() => {}}
        />;
      `,content:(0,g.jsx)(()=>(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(v,{targetId:`answer-disabled`,disabled:!0,disabledMessage:`当前回答来自归档会话，反馈入口已关闭。`,onSubmit:()=>{}})}),{})}],props:[{name:`targetId`,type:`string`,required:!0,description:`反馈关联的回答或目标 ID。`},{name:`state`,type:`FeedbackBarState`,description:`受控反馈状态。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用反馈入口。`},{name:`disabledMessage`,type:`ReactNode`,defaultValue:`"当前反馈入口已禁用"`,description:`禁用态提示内容。`},{name:`reportReasons`,type:`Array<string>`,defaultValue:`["内容不准确", "目标不清晰", "语气不合适", "其他"]`,description:`点踩或举报时可选的原因列表。`},{name:`onSubmit`,type:`(payload: FeedbackBarPayload) => void | Promise<void>`,required:!0,description:`提交反馈时触发。`},{name:`onUndo`,type:`() => void`,description:`点击撤回时触发。`},{name:`onReport`,type:`(id: string) => void`,description:`举报类反馈提交成功后触发。`}]});export{S as default};