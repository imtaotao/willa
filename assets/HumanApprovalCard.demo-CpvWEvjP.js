import{b4 as N,b2 as e,B as L,h as A,aO as z,l as $,F as q,aB as E,N as F,a5 as O,b0 as G}from"./index-DT6Ji1jU.js";import{d as J}from"./defineDoc-CA3QZQgp.js";function d({title:l,description:n,status:t="pending",tone:u="neutral",icon:H,meta:h,details:m,approveText:S="确认继续",rejectText:P="拒绝",approveDisabled:I=!1,rejectDisabled:R=!1,approveLoading:j=!1,rejectLoading:g=!1,children:x,onApprove:p,onReject:o,onActionError:r,className:M,...B}){const[w,c]=N.useState(null),T=m!==void 0&&m.length>0,k=t==="pending",f=j||w==="approve",y=g||w==="reject",D=I||y||!p&&!j,V=R||f||!o&&!g,C=(a,i)=>{const b=a==="approve"?p:o;if(!b)return;let v;try{v=b(i)}catch(s){throw c(null),r==null||r(s,a,i),s}if(G(v))return c(a),v.then(()=>{c(null)},s=>(c(null),r==null||r(s,a,i),Promise.reject(s)))};return e.jsxs("section",{...B,className:z("willa-human-approval-card",`willa-human-approval-card--${t}`,`willa-human-approval-card--${u}`,M),"data-status":t,"data-tone":u,children:[e.jsxs("div",{className:"willa-human-approval-card__header",children:[e.jsx("span",{className:"willa-human-approval-card__mark","aria-hidden":"true",children:H??e.jsx(K,{status:t,tone:u})}),e.jsxs("div",{className:"willa-human-approval-card__heading",children:[e.jsxs("div",{className:"willa-human-approval-card__title-row",children:[e.jsx("h3",{className:"willa-human-approval-card__title",children:l}),e.jsx(L,{className:"willa-human-approval-card__status",size:"sm",tone:U[t],variant:"soft",children:Q[t]})]}),n?e.jsx("div",{className:"willa-human-approval-card__description",children:n}):null]}),h?e.jsx("div",{className:"willa-human-approval-card__meta",children:h}):null]}),T?e.jsx("dl",{className:"willa-human-approval-card__details",children:m.map((a,i)=>e.jsxs("div",{className:"willa-human-approval-card__detail",children:[e.jsx("dt",{children:a.label}),e.jsx("dd",{children:a.value})]},i))}):null,x?e.jsx("div",{className:"willa-human-approval-card__content",children:x}):null,k&&(p||o)?e.jsxs("div",{className:"willa-human-approval-card__actions",children:[o?e.jsx(A,{disabled:V,loading:y,size:"sm",variant:"soft",onClick:a=>C("reject",a),children:P}):null,p?e.jsx(A,{disabled:D,loading:f,size:"sm",variant:"solid",onClick:a=>C("approve",a),children:S}):null]}):null]})}const K=({status:l,tone:n})=>l==="approved"?e.jsx($,{}):l==="rejected"?e.jsx(q,{}):l==="expired"?e.jsx(E,{}):n==="danger"||n==="warning"?e.jsx(F,{}):e.jsx(O,{}),Q={pending:"等待确认",approved:"已通过",rejected:"已拒绝",expired:"已过期"},U={pending:"warning",approved:"success",rejected:"danger",expired:"neutral"};d.displayName="HumanApprovalCard";const _={display:"grid",gap:"1rem",width:"min(100%, 54rem)"},W={margin:0},X=()=>{const[l,n]=N.useState("pending");return e.jsx("div",{style:_,children:e.jsx(d,{title:"发送外部邮件前需要确认",description:"AI 即将把整理后的事故复盘发送给客户联系人。",status:l,tone:"warning",meta:"高影响操作",details:[{label:"收件人",value:"3 人"},{label:"附件",value:"2 个"},{label:"风险",value:"中"}],onApprove:()=>{n("approved")},onReject:()=>{n("rejected")},children:e.jsx("p",{style:W,children:"邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。"})})})},ee=J({id:"human-approval-card",name:"HumanApprovalCard",displayName:"人工确认卡片",category:"ai",packageName:"willa/HumanApprovalCard",description:"用于 AI 执行高影响操作前请求人工确认，并展示审批状态。",imports:[{name:"HumanApprovalCard",from:"willa/HumanApprovalCard"}],css:"willa/HumanApprovalCard.css",demo:{name:"HumanApprovalCardPreview",component:X},code:`
    import { useState } from "react";
    import { HumanApprovalCard } from "willa/HumanApprovalCard";
    import "willa/HumanApprovalCard.css";

    const Demo = () => {
      const [status, setStatus] = useState("pending");

      return (
        <HumanApprovalCard
          title="发送外部邮件前需要确认"
          description="AI 即将把整理后的事故复盘发送给客户联系人。"
          status={status}
          tone="warning"
          meta="高影响操作"
          details={[
            { label: "收件人", value: "3 人" },
            { label: "附件", value: "2 个" },
            { label: "风险", value: "中" },
          ]}
          onApprove={() => setStatus("approved")}
          onReject={() => setStatus("rejected")}
        >
          邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。
        </HumanApprovalCard>
      );
    };
  `,sections:[{title:"异步确认",code:`
        <HumanApprovalCard
          title="执行批量退款"
          description="确认后会创建批量退款任务，并通知财务系统。"
          tone="danger"
          details={[
            { label: "订单", value: "42 笔" },
            { label: "金额", value: "¥18,420" },
          ]}
          onApprove={() => {
            return new Promise((resolve) => window.setTimeout(resolve, 800));
          }}
          onReject={() => {
            return Promise.resolve();
          }}
        />;
      `,content:e.jsx(d,{title:"执行批量退款",description:"确认后会创建批量退款任务，并通知财务系统。",tone:"danger",details:[{label:"订单",value:"42 笔"},{label:"金额",value:"¥18,420"}],onApprove:()=>new Promise(l=>window.setTimeout(l,800)),onReject:()=>Promise.resolve()})},{title:"终态展示",code:`
        <div style={frameStyle}>
          <HumanApprovalCard
            title="已允许读取私有知识库"
            description="审批完成后，AI 可以继续执行检索和总结。"
            status="approved"
            details={[{ label: "审批人", value: "Ming" }]}
          />
          <HumanApprovalCard
            title="导出客户数据"
            description="审批已过期，需要重新提交确认请求。"
            status="expired"
            details={[{ label: "过期时间", value: "10 分钟前" }]}
          />
        </div>;
      `,content:e.jsxs("div",{style:_,children:[e.jsx(d,{title:"已允许读取私有知识库",description:"审批完成后，AI 可以继续执行检索和总结。",status:"approved",details:[{label:"审批人",value:"Ming"}]}),e.jsx(d,{title:"导出客户数据",description:"审批已过期，需要重新提交确认请求。",status:"expired",details:[{label:"过期时间",value:"10 分钟前"}]})]})}],props:[{name:"title",type:"ReactNode",required:!0,description:"确认卡片标题。"},{name:"description",type:"ReactNode",description:"标题下方的说明文案。"},{name:"status",type:'"pending" | "approved" | "rejected" | "expired"',defaultValue:'"pending"',description:"当前审批状态；非 pending 状态不会展示确认和拒绝按钮。"},{name:"tone",type:'"neutral" | "warning" | "danger"',defaultValue:'"neutral"',description:"pending 状态下的风险色调。"},{name:"icon",type:"ReactNode",description:"自定义左侧图标。"},{name:"meta",type:"ReactNode",description:"右上角辅助信息。"},{name:"details",type:"Array<HumanApprovalCardDetail>",description:"审批对象、风险、操作者等结构化明细。"},{name:"approveText",type:"ReactNode",defaultValue:'"确认继续"',description:"确认按钮文案。"},{name:"rejectText",type:"ReactNode",defaultValue:'"拒绝"',description:"拒绝按钮文案。"},{name:"approveDisabled",type:"boolean",defaultValue:"false",description:"是否禁用确认按钮。"},{name:"rejectDisabled",type:"boolean",defaultValue:"false",description:"是否禁用拒绝按钮。"},{name:"approveLoading",type:"boolean",defaultValue:"false",description:"外部受控的确认按钮 loading 状态。"},{name:"rejectLoading",type:"boolean",defaultValue:"false",description:"外部受控的拒绝按钮 loading 状态。"},{name:"children",type:"ReactNode",description:"审批内容预览或风险说明。"},{name:"onApprove",type:"(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",description:"点击确认按钮时触发；返回 Promise 时组件会展示内部 loading。"},{name:"onReject",type:"(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",description:"点击拒绝按钮时触发；返回 Promise 时组件会展示内部 loading。"},{name:"onActionError",type:"(error: unknown, action: HumanApprovalCardAction, event: MouseEvent<HTMLButtonElement>) => void",description:"确认或拒绝动作抛错时触发；组件会清理内部 loading，并继续抛出该错误。"},{name:"className",type:"string",description:"透传到根 section 的类名。"},{name:"style",type:"CSSProperties",description:"透传到根 section 的内联样式。"}]});export{ee as default};
