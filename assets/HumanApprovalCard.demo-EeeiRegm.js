import{b2 as C,b0 as e,B as V,h as y,aN as k,l as E,F as L,aB as z,N as $,a5 as q,a_ as F}from"./index-BvtFLwN5.js";import{d as G}from"./defineDoc-CQCHZfF9.js";function r({title:a,description:n,status:t="pending",tone:d="neutral",icon:N,meta:m,details:p,approveText:_="确认继续",rejectText:H="拒绝",approveDisabled:S=!1,rejectDisabled:P=!1,approveLoading:v=!1,rejectLoading:h=!1,children:j,onApprove:i,onReject:s,className:I,...R}){const[g,o]=C.useState(null),B=p!==void 0&&p.length>0,D=t==="pending",x=v||g==="approve",w=h||g==="reject",M=S||w||!i&&!v,T=P||x||!s&&!h,f=(l,c)=>{const A=l==="approve"?i:s;if(!A)return;let u;try{u=A(c)}catch{o(null);return}F(u)&&(o(l),u.then(()=>{o(null)},()=>{o(null)}))};return e.jsxs("section",{...R,className:k("willa-human-approval-card",`willa-human-approval-card--${t}`,`willa-human-approval-card--${d}`,I),"data-status":t,"data-tone":d,children:[e.jsxs("div",{className:"willa-human-approval-card__header",children:[e.jsx("span",{className:"willa-human-approval-card__mark","aria-hidden":"true",children:N??e.jsx(J,{status:t,tone:d})}),e.jsxs("div",{className:"willa-human-approval-card__heading",children:[e.jsxs("div",{className:"willa-human-approval-card__title-row",children:[e.jsx("h3",{className:"willa-human-approval-card__title",children:a}),e.jsx(V,{className:"willa-human-approval-card__status",size:"sm",tone:O[t],variant:"soft",children:K[t]})]}),n?e.jsx("div",{className:"willa-human-approval-card__description",children:n}):null]}),m?e.jsx("div",{className:"willa-human-approval-card__meta",children:m}):null]}),B?e.jsx("dl",{className:"willa-human-approval-card__details",children:p.map((l,c)=>e.jsxs("div",{className:"willa-human-approval-card__detail",children:[e.jsx("dt",{children:l.label}),e.jsx("dd",{children:l.value})]},c))}):null,j?e.jsx("div",{className:"willa-human-approval-card__content",children:j}):null,D&&(i||s)?e.jsxs("div",{className:"willa-human-approval-card__actions",children:[s?e.jsx(y,{disabled:T,loading:w,size:"sm",variant:"soft",onClick:l=>{f("reject",l)},children:H}):null,i?e.jsx(y,{disabled:M,loading:x,size:"sm",variant:"solid",onClick:l=>{f("approve",l)},children:_}):null]}):null]})}const J=({status:a,tone:n})=>a==="approved"?e.jsx(E,{}):a==="rejected"?e.jsx(L,{}):a==="expired"?e.jsx(z,{}):n==="danger"||n==="warning"?e.jsx($,{}):e.jsx(q,{}),K={pending:"等待确认",approved:"已通过",rejected:"已拒绝",expired:"已过期"},O={pending:"warning",approved:"success",rejected:"danger",expired:"neutral"};r.displayName="HumanApprovalCard";const b={display:"grid",gap:"1rem",width:"min(100%, 54rem)"},Q={margin:0},U=()=>{const[a,n]=C.useState("pending");return e.jsx("div",{style:b,children:e.jsx(r,{title:"发送外部邮件前需要确认",description:"AI 即将把整理后的事故复盘发送给客户联系人。",status:a,tone:"warning",meta:"高影响操作",details:[{label:"收件人",value:"3 人"},{label:"附件",value:"2 个"},{label:"风险",value:"中"}],onApprove:()=>{n("approved")},onReject:()=>{n("rejected")},children:e.jsx("p",{style:Q,children:"邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。"})})})},Y=G({id:"human-approval-card",name:"HumanApprovalCard",displayName:"人工确认卡片",category:"ai",packageName:"willa/HumanApprovalCard",description:"用于 AI 执行高影响操作前请求人工确认，并展示审批状态。",imports:[{name:"HumanApprovalCard",from:"willa/HumanApprovalCard"}],css:"willa/HumanApprovalCard.css",demo:{name:"HumanApprovalCardPreview",component:U},code:`
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
      `,content:e.jsx(r,{title:"执行批量退款",description:"确认后会创建批量退款任务，并通知财务系统。",tone:"danger",details:[{label:"订单",value:"42 笔"},{label:"金额",value:"¥18,420"}],onApprove:()=>new Promise(a=>window.setTimeout(a,800)),onReject:()=>Promise.resolve()})},{title:"终态展示",code:`
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
      `,content:e.jsxs("div",{style:b,children:[e.jsx(r,{title:"已允许读取私有知识库",description:"审批完成后，AI 可以继续执行检索和总结。",status:"approved",details:[{label:"审批人",value:"Ming"}]}),e.jsx(r,{title:"导出客户数据",description:"审批已过期，需要重新提交确认请求。",status:"expired",details:[{label:"过期时间",value:"10 分钟前"}]})]})}],props:[{name:"title",type:"ReactNode",required:!0,description:"确认卡片标题。"},{name:"description",type:"ReactNode",description:"标题下方的说明文案。"},{name:"status",type:'"pending" | "approved" | "rejected" | "expired"',defaultValue:'"pending"',description:"当前审批状态；非 pending 状态不会展示确认和拒绝按钮。"},{name:"tone",type:'"neutral" | "warning" | "danger"',defaultValue:'"neutral"',description:"pending 状态下的风险色调。"},{name:"icon",type:"ReactNode",description:"自定义左侧图标。"},{name:"meta",type:"ReactNode",description:"右上角辅助信息。"},{name:"details",type:"Array<HumanApprovalCardDetail>",description:"审批对象、风险、操作者等结构化明细。"},{name:"approveText",type:"ReactNode",defaultValue:'"确认继续"',description:"确认按钮文案。"},{name:"rejectText",type:"ReactNode",defaultValue:'"拒绝"',description:"拒绝按钮文案。"},{name:"approveDisabled",type:"boolean",defaultValue:"false",description:"是否禁用确认按钮。"},{name:"rejectDisabled",type:"boolean",defaultValue:"false",description:"是否禁用拒绝按钮。"},{name:"approveLoading",type:"boolean",defaultValue:"false",description:"外部受控的确认按钮 loading 状态。"},{name:"rejectLoading",type:"boolean",defaultValue:"false",description:"外部受控的拒绝按钮 loading 状态。"},{name:"children",type:"ReactNode",description:"审批内容预览或风险说明。"},{name:"onApprove",type:"(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",description:"点击确认按钮时触发；返回 Promise 时组件会展示内部 loading。"},{name:"onReject",type:"(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",description:"点击拒绝按钮时触发；返回 Promise 时组件会展示内部 loading。"},{name:"className",type:"string",description:"透传到根 section 的类名。"},{name:"style",type:"CSSProperties",description:"透传到根 section 的内联样式。"}]});export{Y as default};
