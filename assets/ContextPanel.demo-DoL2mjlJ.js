import{d as e,i as t,l as n,p as r,u as i}from"./aidly.esm-bundler-DaTrP4tr.js";import{C as a,I as o,N as s,_ as c,et as l,l as u,n as d,tt as f,x as p}from"./react-icons.esm-mVdwEXuX.js";import{H as m}from"./src-D2lZkBJ2.js";import{t as h}from"./Button-O1aY2iqB.js";import{t as g}from"./EmptyState-CjHyXyY4.js";import{t as _}from"./Group-C-JhzSsC.js";import{t as v}from"./Tabs-BwTQovMD.js";import{a as y}from"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as b}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as x}from"./Checkbox-Cb9D4hgn.js";import{t as S}from"./List-CKoCxChV.js";import{t as C}from"./Tag-R3pz2yYt.js";var w=r(e()),T=r(i()),E=n();function D(e){let{items:n,activeIds:r,onToggleItem:i,onClearAll:a,onRefresh:o,onRemove:s,renderPreview:l,compact:u=!1,title:d=`上下文管理`,emptyText:_=`暂无上下文`,className:b,...D}=e,[M,N]=m({value:r,defaultValue:[]}),[P,F]=(0,w.useState)(`all`),[I,L]=(0,w.useState)(!1),[R,z]=(0,w.useState)(null),B=(0,w.useMemo)(()=>new Map(n.map(e=>[e.id,e])),[n]),V=(0,w.useMemo)(()=>M.filter(e=>B.has(e)),[M,B]),H=(0,w.useMemo)(()=>new Set(V),[V]),U=V.length,W=(0,w.useMemo)(()=>{let e={all:n.length,file:0,web:0,doc:0,kb:0};for(let t of n)e[t.type]+=1;return e},[n]),G=(0,w.useMemo)(()=>P===`all`?n:n.filter(e=>e.type===P),[P,n]),K=(0,w.useMemo)(()=>[{value:`all`,label:`全部 (${W.all})`,children:null},{value:`file`,label:`文件 (${W.file})`,children:null},{value:`web`,label:`网页 (${W.web})`,children:null},{value:`doc`,label:`文档 (${W.doc})`,children:null},{value:`kb`,label:`知识库 (${W.kb})`,children:null}],[W.all,W.doc,W.file,W.kb,W.web]),q=(e,t)=>{N(n=>t?[...new Set([...n,e])]:n.filter(t=>t!==e)),i(e,t)},J=e=>t=>{k({item:e,now:Date.now()})===`active`&&q(e.id,t.currentTarget.checked)},Y=()=>{if(U===0)return;let e=V;N([]),a?.();for(let t of e)i(t,!1)},X=()=>{if(!(!o||I)){z(null),L(!0);try{let e=o();if(!t(e)){L(!1);return}e.then(()=>{L(!1)}).catch(()=>{z(`刷新失败，请稍后重试。`),L(!1)})}catch{z(`刷新失败，请稍后重试。`),L(!1)}}},Z=(0,w.useMemo)(()=>G.map(e=>{let t=k({item:e,now:Date.now()}),n=t!==`active`,r=O(e.type),i=A(e,t,Date.now());return{id:e.id,title:(0,E.jsxs)(`span`,{className:`willa-context-panel__item-title`,children:[(0,E.jsx)(`span`,{className:`willa-context-panel__item-checkbox`,children:(0,E.jsx)(x,{checked:H.has(e.id),onChange:J(e),disabled:n})}),(0,E.jsx)(`span`,{className:`willa-context-panel__item-title-text`,children:e.title}),(0,E.jsx)(`span`,{className:`willa-context-panel__item-badge`,children:t===`disabled`?(0,E.jsx)(y,{size:`sm`,tone:`danger`,variant:`outline`,icon:(0,E.jsx)(p,{}),children:`已禁用`}):t===`expired`?(0,E.jsx)(y,{size:`sm`,tone:`warning`,variant:`outline`,icon:(0,E.jsx)(c,{}),children:`已失效`}):null})]}),description:l?l(e):e.snippet?(0,E.jsx)(`span`,{className:`willa-context-panel__item-snippet`,children:u&&e.snippet.length>90?`${e.snippet.slice(0,87)}...`:e.snippet}):null,meta:(0,E.jsxs)(`span`,{className:`willa-context-panel__item-meta`,children:[(0,E.jsxs)(`span`,{className:`willa-context-panel__item-meta-line`,children:[(0,E.jsx)(C,{className:`willa-context-panel__source-tag`,size:`sm`,tone:`info`,icon:r.icon,children:r.label}),(0,E.jsxs)(`span`,{children:[`来源：`,e.source]}),(0,E.jsxs)(`span`,{children:[`添加：`,j(e.addedAt)]}),e.expiresAt?(0,E.jsxs)(`span`,{children:[`失效：`,j(e.expiresAt)]}):null]}),i&&!u?(0,E.jsx)(`span`,{className:`willa-context-panel__item-reason`,children:i}):null]}),actions:s?(0,E.jsx)(`span`,{className:`willa-context-panel__item-actions`,children:(0,E.jsx)(h,{size:`sm`,variant:`ghost`,onClick:()=>s(e.id),children:`移除`})}):null,selected:H.has(e.id),disabled:n}}),[u,s,l,H,G]);return(0,E.jsxs)(`section`,{...D,className:(0,T.default)(`willa-context-panel`,u&&`willa-context-panel--compact`,b),"aria-busy":I||void 0,children:[(0,E.jsxs)(`header`,{className:`willa-context-panel__header`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`willa-context-panel__title`,children:d}),(0,E.jsxs)(`div`,{className:`willa-context-panel__status`,children:[(0,E.jsxs)(`span`,{className:`willa-context-panel__status-item`,children:[`已勾选 `,U,` 项`]}),(0,E.jsxs)(`span`,{className:`willa-context-panel__status-item`,children:[`当前筛选`,` `,P===`all`?`全部`:O(P).label,`，共 `,G.length,` 条`]})]})]}),(0,E.jsxs)(`div`,{className:`willa-context-panel__actions`,children:[(0,E.jsx)(h,{size:`sm`,variant:`outline`,onClick:Y,disabled:U===0,children:`清空选择`}),o?(0,E.jsx)(h,{size:`sm`,variant:`ghost`,icon:I?void 0:(0,E.jsx)(f,{}),loading:I,loadingText:`刷新中`,onClick:X,disabled:I,children:`刷新上下文`}):null]})]}),(0,E.jsx)(`div`,{className:`willa-context-panel__tabs`,children:(0,E.jsx)(v,{items:K,value:P,onValueChange:e=>{F(e)}})}),R?(0,E.jsxs)(`div`,{className:`willa-context-panel__error`,role:`alert`,children:[(0,E.jsx)(`span`,{children:R}),(0,E.jsx)(h,{size:`sm`,variant:`ghost`,onClick:()=>z(null),children:`关闭`}),(0,E.jsx)(p,{"aria-hidden":`true`})]}):null,(0,E.jsx)(S,{className:`willa-context-panel__list`,items:Z,split:!u,empty:(0,E.jsx)(g,{className:`willa-context-panel__empty`,title:_,description:`点击切换来源查看更多`}),loading:I,loadingLabel:`刷新中`}),(0,E.jsxs)(`div`,{className:`willa-context-panel__footer`,children:[(0,E.jsxs)(`span`,{className:`willa-context-panel__status-item`,children:[`共计 `,W.all,` 条上下文来源`]}),(0,E.jsx)(`span`,{className:`willa-context-panel__status-item`,children:`支持文件 / 网页 / 文档 / 知识库`})]})]})}var O=e=>e===`all`?{label:`全部`,icon:(0,E.jsx)(u,{})}:e===`file`?{label:`文件`,icon:(0,E.jsx)(s,{})}:e===`web`?{label:`网页`,icon:(0,E.jsx)(o,{})}:e===`doc`?{label:`文档`,icon:(0,E.jsx)(l,{})}:{label:`知识库`,icon:(0,E.jsx)(d,{})},k=e=>{let{item:t,now:n}=e;if(t.status)return t.status;if(t.disabledReason)return`disabled`;if(t.expiresAt===void 0)return`active`;let r=M(t.expiresAt);return r===null?`active`:r<=n?`expired`:`active`},A=(e,t,n)=>e.disabledReason?e.disabledReason:t===`expired`?`来源 "${e.source}" 已到期（${j(e.expiresAt,n)}）`:null,j=(e,t=Date.now())=>{let n=M(e)??t;return Number.isFinite(n)?new Intl.DateTimeFormat(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).format(new Date(n)):`未知时间`},M=e=>Number.isFinite(e)?e>1e11?e:e*1e3:null;D.displayName=`ContextPanel`;var N={display:`grid`,gap:`1rem`,width:`min(100%, 58rem)`},P=[{id:`file-1`,title:`用户手册草稿 v1.2`,source:`file`,type:`file`,addedAt:Date.now()-36e5,snippet:`说明会话上下文管理规则与隐私约定，支持导出、引用和撤回。`},{id:`web-1`,title:`OpenAI 速率限制说明页`,source:`web`,type:`web`,addedAt:Date.now()-72e5,snippet:`介绍了当前请求配额、重试策略与高负载场景下的降级建议。`},{id:`doc-1`,title:`2026 财报数据表`,source:`doc`,type:`doc`,addedAt:Date.now()-18e6,expiresAt:Date.now()-6e5,snippet:`该文档在本地会话窗口内已过期，不再纳入检索上下文。`},{id:`kb-1`,title:`A/B 实验规范知识库`,source:`kb`,type:`kb`,addedAt:Date.now()-4e6,disabledReason:`当前标签空间离线`,snippet:`用于校验实验指标命名与分层指标定义。`}],F=()=>{let[e,t]=(0,w.useState)([`file-1`]);return(0,E.jsx)(`div`,{style:N,children:(0,E.jsx)(D,{items:P,activeIds:e,onToggleItem:(e,n)=>{t(t=>n?[...new Set([...t,e])]:t.filter(t=>t!==e))},onClearAll:()=>{t([])},onRemove:e=>{t(t=>t.filter(t=>t!==e))},onRefresh:()=>Promise.resolve(),renderPreview:e=>(0,E.jsxs)(`span`,{className:`willa-context-panel__item-preview`,children:[(0,E.jsx)(`span`,{className:`willa-context-panel__item-preview-label`,children:`摘要：`}),e.snippet]}),title:`上下文管理`})})},I=b({id:`context-panel`,name:`ContextPanel`,displayName:`上下文面板`,category:`ai`,packageName:`willa/ContextPanel`,description:`会话上下文面板，支持来源筛选、选择、移除与失效项提示。`,imports:[{name:`ContextPanel`,from:`willa/ContextPanel`}],css:`willa/ContextPanel.css`,demo:{name:`ContextPanelPreview`,component:F},code:`
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
  `,sections:[{title:`主链路（来源筛选 + 勾选）`,code:`
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
      `,content:(0,E.jsx)(F,{})},{title:`边界（刷新失败 + 受控源）`,code:`
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
      `,content:(0,E.jsx)(()=>{let[e,t]=(0,w.useState)([`file-1`,`web-1`]),[n,r]=(0,w.useState)(0);return(0,E.jsxs)(`div`,{style:N,children:[(0,E.jsx)(D,{items:P,activeIds:e,onToggleItem:(e,n)=>{t(t=>n?[...new Set([...t,e])]:t.filter(t=>t!==e))},onRefresh:()=>new Promise((e,t)=>{window.setTimeout(()=>t(Error(`服务暂时不可达`)),400)}),onClearAll:()=>{t([])},renderPreview:e=>(0,E.jsx)(`span`,{className:`willa-context-panel__item-preview`,children:e.snippet}),title:`刷新重试示例`},n),(0,E.jsx)(_,{gap:`sm`,children:(0,E.jsx)(h,{size:`sm`,variant:`outline`,icon:(0,E.jsx)(a,{}),onClick:()=>{r(e=>e+1)},children:`重建面板实例`})})]})},{})},{title:`边界（compact 模式）`,code:`
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
      `,content:(0,E.jsx)(()=>{let[e,t]=(0,w.useState)([`file-1`]);return(0,E.jsx)(D,{items:P,activeIds:e,onToggleItem:(e,n)=>{t(t=>n?[...new Set([...t,e])]:t.filter(t=>t!==e))},onRemove:e=>{t(t=>t.filter(t=>t!==e))},onClearAll:()=>{t([])},compact:!0,title:`紧凑展示`,renderPreview:e=>(0,E.jsxs)(`span`,{className:`willa-context-panel__item-preview`,children:[(0,E.jsx)(s,{}),` `,e.snippet]})})},{})}],props:[{name:`items`,type:`Array<ContextItem>`,required:!0,description:`上下文来源条目列表。`},{name:`activeIds`,type:`Array<string>`,description:`受控已启用的上下文条目 ID。`},{name:`onToggleItem`,type:`(id: string, checked: boolean) => void`,required:!0,description:`勾选或取消上下文条目时触发。`},{name:`onClearAll`,type:`() => void`,description:`点击清空选择时触发。`},{name:`onRefresh`,type:`() => void | Promise<void>`,description:`点击刷新上下文时触发；未传入时不展示刷新按钮。`},{name:`onRemove`,type:`(id: string) => void`,description:`点击条目移除按钮时触发；未传入时不展示移除按钮。`},{name:`renderPreview`,type:`(item: ContextItem) => ReactNode`,description:`自定义条目预览内容。`},{name:`compact`,type:`boolean`,defaultValue:`false`,description:`是否使用紧凑展示模式。`},{name:`title`,type:`string`,defaultValue:`"上下文管理"`,description:`面板标题。`},{name:`emptyText`,type:`string`,defaultValue:`"暂无上下文"`,description:`当前筛选下无条目时的空态标题。`}]});export{I as default};