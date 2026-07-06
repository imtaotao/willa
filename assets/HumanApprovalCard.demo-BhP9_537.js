import{d as e,i as t,l as n,p as r,u as i}from"./aidly.esm-bundler-DaTrP4tr.js";import{S as a,V as o,at as s,k as c,l}from"./react-icons.esm-mVdwEXuX.js";import{t as u}from"./Button-O1aY2iqB.js";import{a as d}from"./index-Do4z6LCr.js";import{t as f}from"./defineDoc-Cid5xIoZ.js";var p=r(e()),m=r(i()),h=n();function g({title:e,description:n,status:r=`pending`,tone:i=`neutral`,icon:a,meta:o,details:s,approveText:c=`确认继续`,rejectText:l=`拒绝`,approveDisabled:f=!1,rejectDisabled:g=!1,approveLoading:b=!1,rejectLoading:x=!1,children:S,onApprove:C,onReject:w,onActionError:T,className:E,...D}){let[O,k]=(0,p.useState)(null),A=s!==void 0&&s.length>0,j=r===`pending`,M=b||O===`approve`,N=x||O===`reject`,P=f||N||!C&&!b,F=g||M||!w&&!x,I=(e,n)=>{let r=e===`approve`?C:w;if(!r)return;let i;try{i=r(n)}catch(t){throw k(null),T?.(t,e,n),t}if(t(i))return k(e),i.then(()=>{k(null)},t=>(k(null),T?.(t,e,n),Promise.reject(t)))};return(0,h.jsxs)(`section`,{...D,className:(0,m.default)(`willa-human-approval-card`,`willa-human-approval-card--${r}`,`willa-human-approval-card--${i}`,E),"data-status":r,"data-tone":i,children:[(0,h.jsxs)(`div`,{className:`willa-human-approval-card__header`,children:[(0,h.jsx)(`span`,{className:`willa-human-approval-card__mark`,"aria-hidden":`true`,children:a??(0,h.jsx)(_,{status:r,tone:i})}),(0,h.jsxs)(`div`,{className:`willa-human-approval-card__heading`,children:[(0,h.jsxs)(`div`,{className:`willa-human-approval-card__title-row`,children:[(0,h.jsx)(`h3`,{className:`willa-human-approval-card__title`,children:e}),(0,h.jsx)(d,{className:`willa-human-approval-card__status`,size:`sm`,tone:y[r],variant:`soft`,children:v[r]})]}),n?(0,h.jsx)(`div`,{className:`willa-human-approval-card__description`,children:n}):null]}),o?(0,h.jsx)(`div`,{className:`willa-human-approval-card__meta`,children:o}):null]}),A?(0,h.jsx)(`dl`,{className:`willa-human-approval-card__details`,children:s.map((e,t)=>(0,h.jsxs)(`div`,{className:`willa-human-approval-card__detail`,children:[(0,h.jsx)(`dt`,{children:e.label}),(0,h.jsx)(`dd`,{children:e.value})]},t))}):null,S?(0,h.jsx)(`div`,{className:`willa-human-approval-card__content`,children:S}):null,j&&(C||w)?(0,h.jsxs)(`div`,{className:`willa-human-approval-card__actions`,children:[w?(0,h.jsx)(u,{disabled:F,loading:N,size:`sm`,variant:`soft`,onClick:e=>I(`reject`,e),children:l}):null,C?(0,h.jsx)(u,{disabled:P,loading:M,size:`sm`,variant:`solid`,onClick:e=>I(`approve`,e),children:c}):null]}):null]})}var _=({status:e,tone:t})=>e===`approved`?(0,h.jsx)(l,{}):e===`rejected`?(0,h.jsx)(a,{}):e===`expired`?(0,h.jsx)(s,{}):t===`danger`||t===`warning`?(0,h.jsx)(c,{}):(0,h.jsx)(o,{}),v={pending:`等待确认`,approved:`已通过`,rejected:`已拒绝`,expired:`已过期`},y={pending:`warning`,approved:`success`,rejected:`danger`,expired:`neutral`};g.displayName=`HumanApprovalCard`;var b={display:`grid`,gap:`1rem`,width:`min(100%, 54rem)`},x={margin:0},S=f({id:`human-approval-card`,name:`HumanApprovalCard`,displayName:`人工确认卡片`,category:`ai`,packageName:`willa/HumanApprovalCard`,description:`用于 AI 执行高影响操作前请求人工确认，并展示审批状态。`,imports:[{name:`HumanApprovalCard`,from:`willa/HumanApprovalCard`}],css:`willa/HumanApprovalCard.css`,demo:{name:`HumanApprovalCardPreview`,component:()=>{let[e,t]=(0,p.useState)(`pending`);return(0,h.jsx)(`div`,{style:b,children:(0,h.jsx)(g,{title:`发送外部邮件前需要确认`,description:`AI 即将把整理后的事故复盘发送给客户联系人。`,status:e,tone:`warning`,meta:`高影响操作`,details:[{label:`收件人`,value:`3 人`},{label:`附件`,value:`2 个`},{label:`风险`,value:`中`}],onApprove:()=>{t(`approved`)},onReject:()=>{t(`rejected`)},children:(0,h.jsx)(`p`,{style:x,children:`邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。`})})})}},code:`
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
  `,sections:[{title:`异步确认`,code:`
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
      `,content:(0,h.jsx)(g,{title:`执行批量退款`,description:`确认后会创建批量退款任务，并通知财务系统。`,tone:`danger`,details:[{label:`订单`,value:`42 笔`},{label:`金额`,value:`¥18,420`}],onApprove:()=>new Promise(e=>window.setTimeout(e,800)),onReject:()=>Promise.resolve()})},{title:`终态展示`,code:`
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
      `,content:(0,h.jsxs)(`div`,{style:b,children:[(0,h.jsx)(g,{title:`已允许读取私有知识库`,description:`审批完成后，AI 可以继续执行检索和总结。`,status:`approved`,details:[{label:`审批人`,value:`Ming`}]}),(0,h.jsx)(g,{title:`导出客户数据`,description:`审批已过期，需要重新提交确认请求。`,status:`expired`,details:[{label:`过期时间`,value:`10 分钟前`}]})]})}],props:[{name:`title`,type:`ReactNode`,required:!0,description:`确认卡片标题。`},{name:`description`,type:`ReactNode`,description:`标题下方的说明文案。`},{name:`status`,type:`"pending" | "approved" | "rejected" | "expired"`,defaultValue:`"pending"`,description:`当前审批状态；非 pending 状态不会展示确认和拒绝按钮。`},{name:`tone`,type:`"neutral" | "warning" | "danger"`,defaultValue:`"neutral"`,description:`pending 状态下的风险色调。`},{name:`icon`,type:`ReactNode`,description:`自定义左侧图标。`},{name:`meta`,type:`ReactNode`,description:`右上角辅助信息。`},{name:`details`,type:`Array<HumanApprovalCardDetail>`,description:`审批对象、风险、操作者等结构化明细。`},{name:`approveText`,type:`ReactNode`,defaultValue:`"确认继续"`,description:`确认按钮文案。`},{name:`rejectText`,type:`ReactNode`,defaultValue:`"拒绝"`,description:`拒绝按钮文案。`},{name:`approveDisabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用确认按钮。`},{name:`rejectDisabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用拒绝按钮。`},{name:`approveLoading`,type:`boolean`,defaultValue:`false`,description:`外部受控的确认按钮 loading 状态。`},{name:`rejectLoading`,type:`boolean`,defaultValue:`false`,description:`外部受控的拒绝按钮 loading 状态。`},{name:`children`,type:`ReactNode`,description:`审批内容预览或风险说明。`},{name:`onApprove`,type:`(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>`,description:`点击确认按钮时触发；返回 Promise 时组件会展示内部 loading。`},{name:`onReject`,type:`(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>`,description:`点击拒绝按钮时触发；返回 Promise 时组件会展示内部 loading。`},{name:`onActionError`,type:`(error: unknown, action: HumanApprovalCardAction, event: MouseEvent<HTMLButtonElement>) => void`,description:`确认或拒绝动作抛错时触发；组件会清理内部 loading，并继续抛出该错误。`},{name:`className`,type:`string`,description:`透传到根 section 的类名。`},{name:`style`,type:`CSSProperties`,description:`透传到根 section 的内联样式。`}]});export{S as default};