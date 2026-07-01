import{b8 as X,b5 as o,b3 as e,h as w,B as D,E as z,t as Z,am as ee,aE as te,K as se,aO as ne,l as le,R as B,W as ie,al as ae,c as oe,b1 as ce,Y as re,G as de}from"./index-C9Ot4add.js";import{C as pe}from"./index-DVF5RFQy.js";import{L as me}from"./index-D1qoyk5Z.js";import{T as xe}from"./index-CPDWzLBE.js";/* empty css              *//* empty css              */import{d as ue}from"./defineDoc-DwmdElki.js";function g(n){const{items:s,activeIds:l,onToggleItem:a,onClearAll:i,onRefresh:r,onRemove:p,renderPreview:u,compact:v=!1,title:L="上下文管理",emptyText:G="暂无上下文",className:K,...q}=n,[P,k]=X({value:l,defaultValue:[]}),[m,O]=o.useState("all"),[x,h]=o.useState(!1),[S,I]=o.useState(null),R=o.useMemo(()=>new Map(s.map(t=>[t.id,t])),[s]),j=o.useMemo(()=>P.filter(t=>R.has(t)),[P,R]),_=o.useMemo(()=>new Set(j),[j]),C=j.length,d=o.useMemo(()=>{const t={all:s.length,file:0,web:0,doc:0,kb:0};for(const c of s)t[c.type]+=1;return t},[s]),y=o.useMemo(()=>m==="all"?s:s.filter(t=>t.type===m),[m,s]),H=o.useMemo(()=>[{value:"all",label:`全部 (${d.all})`,children:null},{value:"file",label:`文件 (${d.file})`,children:null},{value:"web",label:`网页 (${d.web})`,children:null},{value:"doc",label:`文档 (${d.doc})`,children:null},{value:"kb",label:`知识库 (${d.kb})`,children:null}],[d.all,d.doc,d.file,d.kb,d.web]),W=(t,c)=>{k(f=>c?[...new Set([...f,t])]:f.filter(b=>b!==t)),a(t,c)},Y=t=>c=>{M({item:t,now:Date.now()})==="active"&&W(t.id,c.currentTarget.checked)},J=()=>{if(C===0)return;const t=j;k([]),i==null||i();for(const c of t)a(c,!1)},Q=()=>{if(!(!r||x)){I(null),h(!0);try{const t=r();if(!ce(t)){h(!1);return}t.then(()=>{h(!1)}).catch(()=>{I("刷新失败，请稍后重试。"),h(!1)})}catch{I("刷新失败，请稍后重试。"),h(!1)}}},U=o.useMemo(()=>y.map(t=>{const c=M({item:t,now:Date.now()}),f=c!=="active",b=E(t.type),T=ve(t,c,Date.now());return{id:t.id,title:e.jsxs("span",{className:"willa-context-panel__item-title",children:[e.jsx("span",{className:"willa-context-panel__item-checkbox",children:e.jsx(pe,{checked:_.has(t.id),onChange:Y(t),disabled:f})}),e.jsx("span",{className:"willa-context-panel__item-title-text",children:t.title}),e.jsx("span",{className:"willa-context-panel__item-badge",children:c==="disabled"?e.jsx(D,{size:"sm",tone:"danger",variant:"outline",icon:e.jsx(z,{}),children:"已禁用"}):c==="expired"?e.jsx(D,{size:"sm",tone:"warning",variant:"outline",icon:e.jsx(Z,{}),children:"已失效"}):null})]}),description:u?u(t):t.snippet?e.jsx("span",{className:"willa-context-panel__item-snippet",children:v&&t.snippet.length>90?`${t.snippet.slice(0,87)}...`:t.snippet}):null,meta:e.jsxs("span",{className:"willa-context-panel__item-meta",children:[e.jsxs("span",{className:"willa-context-panel__item-meta-line",children:[e.jsx(xe,{className:"willa-context-panel__source-tag",size:"sm",tone:"info",icon:b.icon,children:b.label}),e.jsxs("span",{children:["来源：",t.source]}),e.jsxs("span",{children:["添加：",A(t.addedAt)]}),t.expiresAt?e.jsxs("span",{children:["失效：",A(t.expiresAt)]}):null]}),T&&!v?e.jsx("span",{className:"willa-context-panel__item-reason",children:T}):null]}),actions:p?e.jsx("span",{className:"willa-context-panel__item-actions",children:e.jsx(w,{size:"sm",variant:"ghost",onClick:()=>p(t.id),children:"移除"})}):null,selected:_.has(t.id),disabled:f}}),[v,p,u,_,y]);return e.jsxs("section",{...q,className:ne("willa-context-panel",v&&"willa-context-panel--compact",K),"aria-busy":x||void 0,children:[e.jsxs("header",{className:"willa-context-panel__header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"willa-context-panel__title",children:L}),e.jsxs("div",{className:"willa-context-panel__status",children:[e.jsxs("span",{className:"willa-context-panel__status-item",children:["已勾选 ",C," 项"]}),e.jsxs("span",{className:"willa-context-panel__status-item",children:["当前筛选"," ",m==="all"?"全部":E(m).label,"，共 ",y.length," 条"]})]})]}),e.jsxs("div",{className:"willa-context-panel__actions",children:[e.jsx(w,{size:"sm",variant:"outline",onClick:J,disabled:C===0,children:"清空选择"}),r?e.jsx(w,{size:"sm",variant:"ghost",icon:x?void 0:e.jsx(ee,{}),loading:x,loadingText:"刷新中",onClick:Q,disabled:x,children:"刷新上下文"}):null]})]}),e.jsx("div",{className:"willa-context-panel__tabs",children:e.jsx(te,{items:H,value:m,onValueChange:t=>{O(t)}})}),S?e.jsxs("div",{className:"willa-context-panel__error",role:"alert",children:[e.jsx("span",{children:S}),e.jsx(w,{size:"sm",variant:"ghost",onClick:()=>I(null),children:"关闭"}),e.jsx(z,{"aria-hidden":"true"})]}):null,e.jsx(me,{className:"willa-context-panel__list",items:U,split:!v,empty:e.jsx(se,{className:"willa-context-panel__empty",title:G,description:"点击切换来源查看更多"}),loading:x,loadingLabel:"刷新中"}),e.jsxs("div",{className:"willa-context-panel__footer",children:[e.jsxs("span",{className:"willa-context-panel__status-item",children:["共计 ",d.all," 条上下文来源"]}),e.jsx("span",{className:"willa-context-panel__status-item",children:"支持文件 / 网页 / 文档 / 知识库"})]})]})}const E=n=>n==="all"?{label:"全部",icon:e.jsx(le,{})}:n==="file"?{label:"文件",icon:e.jsx(B,{})}:n==="web"?{label:"网页",icon:e.jsx(ie,{})}:n==="doc"?{label:"文档",icon:e.jsx(ae,{})}:{label:"知识库",icon:e.jsx(oe,{})},M=n=>{const{item:s,now:l}=n;if(s.status)return s.status;if(s.disabledReason)return"disabled";if(s.expiresAt===void 0)return"active";const a=V(s.expiresAt);return a===null?"active":a<=l?"expired":"active"},ve=(n,s,l)=>n.disabledReason?n.disabledReason:s!=="expired"?null:`来源 "${n.source}" 已到期（${A(n.expiresAt,l)}）`,A=(n,s=Date.now())=>{const l=V(n)??s;return Number.isFinite(l)?new Intl.DateTimeFormat("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(l)):"未知时间"},V=n=>Number.isFinite(n)?n>1e11?n:n*1e3:null;g.displayName="ContextPanel";const F={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},N=[{id:"file-1",title:"用户手册草稿 v1.2",source:"file",type:"file",addedAt:Date.now()-36e5,snippet:"说明会话上下文管理规则与隐私约定，支持导出、引用和撤回。"},{id:"web-1",title:"OpenAI 速率限制说明页",source:"web",type:"web",addedAt:Date.now()-72e5,snippet:"介绍了当前请求配额、重试策略与高负载场景下的降级建议。"},{id:"doc-1",title:"2026 财报数据表",source:"doc",type:"doc",addedAt:Date.now()-18e6,expiresAt:Date.now()-6e5,snippet:"该文档在本地会话窗口内已过期，不再纳入检索上下文。"},{id:"kb-1",title:"A/B 实验规范知识库",source:"kb",type:"kb",addedAt:Date.now()-4e6,disabledReason:"当前标签空间离线",snippet:"用于校验实验指标命名与分层指标定义。"}],$=()=>{const[n,s]=o.useState(["file-1"]);return e.jsx("div",{style:F,children:e.jsx(g,{items:N,activeIds:n,onToggleItem:(l,a)=>{s(i=>a?[...new Set([...i,l])]:i.filter(r=>r!==l))},onClearAll:()=>{s([])},onRemove:l=>{s(a=>a.filter(i=>i!==l))},onRefresh:()=>Promise.resolve(),renderPreview:l=>e.jsxs("span",{className:"willa-context-panel__item-preview",children:[e.jsx("span",{className:"willa-context-panel__item-preview-label",children:"摘要："}),l.snippet]}),title:"上下文管理"})})},he=()=>{const[n,s]=o.useState(["file-1","web-1"]),[l,a]=o.useState(0);return e.jsxs("div",{style:F,children:[e.jsx(g,{items:N,activeIds:n,onToggleItem:(i,r)=>{s(p=>r?[...new Set([...p,i])]:p.filter(u=>u!==i))},onRefresh:()=>new Promise((i,r)=>{window.setTimeout(()=>r(new Error("服务暂时不可达")),400)}),onClearAll:()=>{s([])},renderPreview:i=>e.jsx("span",{className:"willa-context-panel__item-preview",children:i.snippet}),title:"刷新重试示例"},l),e.jsx(re,{gap:"sm",children:e.jsx(w,{size:"sm",variant:"outline",icon:e.jsx(de,{}),onClick:()=>{a(i=>i+1)},children:"重建面板实例"})})]})},fe=()=>{const[n,s]=o.useState(["file-1"]);return e.jsx(g,{items:N,activeIds:n,onToggleItem:(l,a)=>{s(i=>a?[...new Set([...i,l])]:i.filter(r=>r!==l))},onRemove:l=>{s(a=>a.filter(i=>i!==l))},onClearAll:()=>{s([])},compact:!0,title:"紧凑展示",renderPreview:l=>e.jsxs("span",{className:"willa-context-panel__item-preview",children:[e.jsx(B,{})," ",l.snippet]})})},ye=ue({id:"context-panel",name:"ContextPanel",displayName:"上下文面板",category:"ai",packageName:"willa/ContextPanel",description:"会话上下文面板，支持来源筛选、选择、移除与失效项提示。",imports:[{name:"ContextPanel",from:"willa/ContextPanel"}],css:"willa/ContextPanel.css",demo:{name:"ContextPanelPreview",component:$},code:`
    import { useState } from "react";
    import { ContextPanel } from "willa/ContextPanel";
    import "willa/ContextPanel.css";

    const contextItems = [
      {
        id: "file-1",
        title: "用户手册草稿 v1.2",
        source: "file",
        type: "file",
        addedAt: Date.now() - 3600000,
        snippet: "说明会话上下文管理规则与隐私约定。",
      },
    ];

    const Demo = () => {
      const [activeIds, setActiveIds] = useState(["file-1"]);

      return (
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          title="上下文管理"
        />
      );
    };
  `,sections:[{title:"主链路（来源筛选 + 勾选）",code:`
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          onRemove={(id) => {
            setActiveIds((prev) => prev.filter((itemId) => itemId !== id));
          }}
          renderPreview={(item) => <div>{item.snippet}</div>}
          title="上下文管理"
        />;
      `,content:e.jsx($,{})},{title:"边界（刷新失败 + 受控源）",code:`
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onRefresh={() => {
            return Promise.reject(new Error("服务暂时不可达"));
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          renderPreview={(item) => <div>{item.snippet}</div>}
          title="刷新重试示例"
        />;
      `,content:e.jsx(he,{})},{title:"边界（compact 模式）",code:`
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          compact
          title="紧凑展示"
        />;
      `,content:e.jsx(fe,{})}],props:[{name:"items",type:"Array<ContextItem>",required:!0,description:"上下文来源条目列表。"},{name:"activeIds",type:"Array<string>",description:"受控已启用的上下文条目 ID。"},{name:"onToggleItem",type:"(id: string, checked: boolean) => void",required:!0,description:"勾选或取消上下文条目时触发。"},{name:"onClearAll",type:"() => void",description:"点击清空选择时触发。"},{name:"onRefresh",type:"() => void | Promise<void>",description:"点击刷新上下文时触发；未传入时不展示刷新按钮。"},{name:"onRemove",type:"(id: string) => void",description:"点击条目移除按钮时触发；未传入时不展示移除按钮。"},{name:"renderPreview",type:"(item: ContextItem) => ReactNode",description:"自定义条目预览内容。"},{name:"compact",type:"boolean",defaultValue:"false",description:"是否使用紧凑展示模式。"},{name:"title",type:"string",defaultValue:'"上下文管理"',description:"面板标题。"},{name:"emptyText",type:"string",defaultValue:'"暂无上下文"',description:"当前筛选下无条目时的空态标题。"}]});export{ye as default};
