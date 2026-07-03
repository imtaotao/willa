import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{d as i}from"./react-icons.esm-mVdwEXuX.js";import{H as a}from"./src-D2lZkBJ2.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";var s=n(e()),c=n(r()),l=t();function u({spans:e,title:t=`Trace`,description:n,summary:r,selectedSpanId:o,defaultSelectedSpanId:u,expandedSpanIds:p,defaultExpandedSpanIds:m,empty:v=`暂无链路数据`,onSpanSelect:y,onExpandedSpanIdsChange:b,className:S,...C}){let w=(0,s.useMemo)(()=>g(e),[e]),[T,E,D]=a({value:p,defaultValue:m??w,onChange:b}),O=(0,s.useRef)(w),k=(0,s.useMemo)(()=>h(e,new Set(T)),[T,e]),[A,j,M]=a({value:o,defaultValue:u??``}),N=(A?_(e,A):null)??(M?null:k[0]?.span??null),P=k.length>0;(0,s.useEffect)(()=>{if(D||m||w.length===0){O.current=w;return}let e=new Set(O.current),t=w.filter(t=>!e.has(t));O.current=w,t.length>0&&E(e=>[...e,...t])},[m,w,D,E]);let F=e=>{E(t=>{let n=new Set(t);return n.has(e.id)?n.delete(e.id):n.add(e.id),Array.from(n)})};return(0,l.jsxs)(`section`,{...C,className:(0,c.default)(`willa-trace-viewer`,S),children:[(0,l.jsxs)(`div`,{className:`willa-trace-viewer__header`,children:[(0,l.jsxs)(`div`,{className:`willa-trace-viewer__heading`,children:[(0,l.jsx)(`h3`,{className:`willa-trace-viewer__title`,children:t}),n?(0,l.jsx)(`div`,{className:`willa-trace-viewer__description`,children:n}):null]}),r&&r.length>0?(0,l.jsx)(f,{className:`willa-trace-viewer__summary`,metrics:r}):null]}),P?(0,l.jsxs)(`div`,{className:`willa-trace-viewer__body`,children:[(0,l.jsx)(`div`,{className:`willa-trace-viewer__list`,children:k.map(({span:e,depth:t,hasChildren:n})=>{let r=e.status??`pending`,a=e.id===N?.id,o=x(e),s=T.includes(e.id);return(0,l.jsxs)(`div`,{className:(0,c.default)(`willa-trace-viewer__row`,`willa-trace-viewer__row--${r}`,t>0&&`willa-trace-viewer__row--nested`,n&&`willa-trace-viewer__row--parent`,a&&`willa-trace-viewer__row--selected`),style:{"--willa-trace-viewer-row-indent":`${t*.9}rem`},children:[n?(0,l.jsx)(`button`,{className:`willa-trace-viewer__row-toggle`,type:`button`,"aria-expanded":s,"aria-label":s?`收起子链路`:`展开子链路`,onClick:()=>{F(e)},children:(0,l.jsx)(i,{className:`willa-trace-viewer__row-toggle-icon`})}):(0,l.jsx)(`span`,{className:`willa-trace-viewer__row-toggle-spacer`,"aria-hidden":`true`}),(0,l.jsxs)(`button`,{className:`willa-trace-viewer__row-content`,type:`button`,"aria-current":a?`true`:void 0,onClick:()=>{j(e.id),y?.(e)},children:[(0,l.jsx)(`span`,{className:`willa-trace-viewer__status-dot`,"aria-hidden":`true`}),(0,l.jsxs)(`span`,{className:`willa-trace-viewer__row-main`,children:[(0,l.jsx)(`span`,{className:`willa-trace-viewer__row-title`,children:e.name}),e.description?(0,l.jsx)(`span`,{className:`willa-trace-viewer__row-description`,children:e.description}):null]}),(0,l.jsxs)(`span`,{className:`willa-trace-viewer__row-meta`,children:[(0,l.jsx)(`span`,{className:`willa-trace-viewer__kind`,children:o}),e.duration?(0,l.jsx)(`span`,{className:`willa-trace-viewer__meta-value`,children:e.duration}):null]})]})]},e.id)})}),(0,l.jsx)(d,{span:N})]}):(0,l.jsx)(`div`,{className:`willa-trace-viewer__empty`,children:v})]})}var d=({span:e})=>{if(!e)return(0,l.jsx)(`div`,{className:`willa-trace-viewer__detail willa-trace-viewer__detail--empty`,children:`未找到选中的链路节点`});let t=e.status??`pending`,n=x(e),r=v(e);return(0,l.jsxs)(`div`,{className:`willa-trace-viewer__detail`,children:[(0,l.jsxs)(`div`,{className:`willa-trace-viewer__detail-header`,children:[(0,l.jsxs)(`div`,{className:`willa-trace-viewer__detail-heading`,children:[(0,l.jsxs)(`div`,{className:`willa-trace-viewer__detail-title-row`,children:[(0,l.jsx)(`h4`,{className:`willa-trace-viewer__detail-title`,children:e.name}),(0,l.jsx)(`span`,{className:(0,c.default)(`willa-trace-viewer__status`,`willa-trace-viewer__status--${t}`),children:y[t]})]}),e.description?(0,l.jsx)(`div`,{className:`willa-trace-viewer__detail-description`,children:e.description}):null]}),(0,l.jsx)(`span`,{className:`willa-trace-viewer__kind`,children:n})]}),r.length>0?(0,l.jsx)(f,{className:`willa-trace-viewer__detail-metrics`,metrics:r}):null,(0,l.jsx)(p,{label:`输入`,value:e.input}),(0,l.jsx)(p,{label:`输出`,value:e.output}),(0,l.jsx)(p,{label:`错误`,tone:`danger`,value:e.error})]})},f=({className:e,metrics:t})=>(0,l.jsx)(`dl`,{className:(0,c.default)(`willa-trace-viewer__metrics`,e),children:t.map((e,t)=>(0,l.jsxs)(`div`,{className:`willa-trace-viewer__metric`,children:[(0,l.jsx)(`dt`,{children:e.label}),(0,l.jsx)(`dd`,{children:e.value})]},t))}),p=({label:e,tone:t,value:n})=>m(n)?(0,l.jsxs)(`div`,{className:(0,c.default)(`willa-trace-viewer__block`,t&&`willa-trace-viewer__block--${t}`),children:[(0,l.jsx)(`div`,{className:`willa-trace-viewer__block-label`,children:e}),(0,l.jsx)(`div`,{className:`willa-trace-viewer__block-value`,children:n})]}):null,m=e=>e!=null&&e!==!1,h=(e,t,n=0)=>e.flatMap(e=>{let r=!!e.children?.length,i={span:e,depth:n,hasChildren:r};return!r||!t.has(e.id)?[i]:[i,...h(e.children??[],t,n+1)]}),g=e=>e.flatMap(e=>{let t=g(e.children??[]);return e.children?.length?[e.id,...t]:t}),_=(e,t)=>{let n=[...e];for(;n.length>0;){let e=n.shift();if(e){if(e.id===t)return e;n.unshift(...e.children??[])}}return null},v=e=>{let t=[];return m(e.startedAt)&&t.push({label:`开始`,value:e.startedAt}),m(e.duration)&&t.push({label:`耗时`,value:e.duration}),m(e.tokens)&&t.push({label:`Tokens`,value:e.tokens}),m(e.cost)&&t.push({label:`Cost`,value:e.cost}),[...t,...e.metrics??[]]},y={pending:`等待`,running:`运行中`,success:`成功`,error:`失败`},b={agent:`Agent`,model:`Model`,tool:`Tool`,retrieval:`Retrieval`,system:`System`},x=e=>{if(m(e.kindLabel))return e.kindLabel;let t=e.kind??`system`;return b[t]??t};u.displayName=`TraceViewer`;var S={width:`min(100%, 64rem)`},C=[{label:`总耗时`,value:`4.8s`},{label:`Tokens`,value:`18.2k`},{label:`Cost`,value:`$0.041`}],w=[{id:`agent`,name:`产品反馈分析 Agent`,kind:`agent`,status:`success`,description:`汇总反馈、优先级和后续动作。`,startedAt:`14:28:03`,duration:`4.8s`,tokens:`18.2k`,cost:`$0.041`,input:`分析最近 7 天产品反馈，输出高优问题和建议动作。`,output:`识别出 3 个高优问题，已生成修复建议和 owner 分配。`,children:[{id:`retrieve-feedback`,name:`检索反馈数据`,kind:`retrieval`,status:`success`,description:`读取反馈表和客服工单摘要。`,startedAt:`14:28:03`,duration:`920ms`,tokens:`2.1k`,input:`source: feedback_events, support_tickets`,output:`命中 128 条反馈和 16 条客服工单。`},{id:`rank-issues`,name:`优先级排序`,kind:`model`,status:`success`,description:`按影响用户数、复现率和阻塞程度打分。`,startedAt:`14:28:04`,duration:`1.7s`,tokens:`9.8k`,cost:`$0.026`,input:`128 条反馈，按主题聚类后的 9 个问题簇。`,output:`登录失败、导出超时和主题配置错误进入 P0/P1 队列。`,children:[{id:`score-issues`,name:`问题评分`,kind:`model`,status:`success`,description:`计算影响面、复现率和阻塞程度。`,duration:`860ms`,tokens:`4.2k`}]},{id:`create-actions`,name:`生成后续动作`,kind:`tool`,status:`success`,description:`为高优问题创建行动项和 owner 建议。`,startedAt:`14:28:06`,duration:`1.4s`,input:`issues: login_failure, export_timeout, theme_config`,output:`已生成 6 条行动项，建议分配给前端、后端和支持团队。`}]}],T=o({id:`trace-viewer`,name:`TraceViewer`,category:`ai`,packageName:`willa/TraceViewer`,description:`用于展示 AI 推理链路、工具调用链路、耗时、tokens 和成本。`,imports:[{name:`TraceViewer`,from:`willa/TraceViewer`}],css:`willa/TraceViewer.css`,demo:{name:`TraceViewerPreview`,component:()=>(0,l.jsx)(`div`,{style:S,children:(0,l.jsx)(u,{title:`反馈分析链路`,description:`展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。`,summary:C,spans:w})})},code:`
    import {
      TraceViewer,
      type TraceViewerMetric,
      type TraceViewerSpan,
    } from "willa/TraceViewer";
    import "willa/TraceViewer.css";

    const traceSummary: Array<TraceViewerMetric> = [
      { label: "总耗时", value: "4.8s" },
      { label: "Tokens", value: "18.2k" },
      { label: "Cost", value: "$0.041" },
    ];

    const traceSpans: Array<TraceViewerSpan> = [
      {
        id: "agent",
        name: "产品反馈分析 Agent",
        kind: "agent",
        status: "success",
        description: "汇总反馈、优先级和后续动作。",
        duration: "4.8s",
        tokens: "18.2k",
        cost: "$0.041",
        children: [
          {
            id: "retrieve-feedback",
            name: "检索反馈数据",
            kind: "retrieval",
            status: "success",
            description: "读取反馈表和客服工单摘要。",
            duration: "920ms",
          },
          {
            id: "rank-issues",
            name: "优先级排序",
            kind: "model",
            status: "success",
            description: "按影响用户数、复现率和阻塞程度打分。",
            duration: "1.7s",
            tokens: "9.8k",
            cost: "$0.026",
            children: [
              {
                id: "score-issues",
                name: "问题评分",
                kind: "model",
                status: "success",
                description: "计算影响面、复现率和阻塞程度。",
                duration: "860ms",
                tokens: "4.2k",
              },
            ],
          },
        ],
      },
    ];

    <TraceViewer
      title="反馈分析链路"
      description="展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。"
      summary={traceSummary}
      spans={traceSpans}
    />;
  `,sections:[{title:`受控选中和展开`,code:`
        import { useState } from "react";
        import { TraceViewer, type TraceViewerSpan } from "willa/TraceViewer";
        import "willa/TraceViewer.css";

        const traceSpans: Array<TraceViewerSpan> = [
          {
            id: "agent",
            name: "产品反馈分析 Agent",
            kind: "agent",
            children: [
              { id: "retrieve-feedback", name: "检索反馈数据", kind: "retrieval" },
              { id: "rank-issues", name: "优先级排序", kind: "model" },
            ],
          },
        ];

        const Demo = () => {
          const [selectedSpanId, setSelectedSpanId] = useState("retrieve-feedback");
          const [expandedSpanIds, setExpandedSpanIds] = useState(["agent"]);

          return (
            <TraceViewer
              title="受控链路"
              spans={traceSpans}
              selectedSpanId={selectedSpanId}
              expandedSpanIds={expandedSpanIds}
              onSpanSelect={(span) => setSelectedSpanId(span.id)}
              onExpandedSpanIdsChange={setExpandedSpanIds}
            />
          );
        };
      `,content:(0,l.jsx)(()=>{let[e,t]=(0,s.useState)(`retrieve-feedback`),[n,r]=(0,s.useState)([`agent`]);return(0,l.jsx)(`div`,{style:S,children:(0,l.jsx)(u,{title:`受控链路`,description:`当前选中：${e}`,spans:w,selectedSpanId:e,expandedSpanIds:n,onSpanSelect:e=>t(e.id),onExpandedSpanIdsChange:r})})},{})},{title:`失败节点`,code:`
        import { TraceViewer, type TraceViewerSpan } from "willa/TraceViewer";
        import "willa/TraceViewer.css";

        const failingTraceSpans: Array<TraceViewerSpan> = [
          {
            id: "agent",
            name: "知识库回答链路",
            kind: "agent",
            status: "error",
            description: "检索资料后生成引用回答。",
            duration: "2.2s",
            tokens: "6.4k",
            children: [
              {
                id: "search",
                name: "搜索知识库",
                kind: "retrieval",
                status: "success",
                description: "命中组件设计和 CSS 规则文档。",
                duration: "640ms",
              },
              {
                id: "read-source",
                name: "读取来源",
                kind: "tool",
                status: "error",
                description: "读取组件实现时路径不存在。",
                duration: "180ms",
                error: "ENOENT: no such file or directory",
              },
            ],
          },
        ];

        <TraceViewer
          title="知识库回答链路"
          description="错误 span 会在列表和详情里保留原因。"
          spans={failingTraceSpans}
        />;
      `,content:(0,l.jsx)(`div`,{style:S,children:(0,l.jsx)(u,{title:`知识库回答链路`,description:`错误 span 会在列表和详情里保留原因。`,spans:[{id:`agent`,name:`知识库回答链路`,kind:`agent`,status:`error`,description:`检索资料后生成引用回答。`,duration:`2.2s`,tokens:`6.4k`,cost:`$0.015`,children:[{id:`search`,name:`搜索知识库`,kind:`retrieval`,status:`success`,description:`命中组件设计和 CSS 规则文档。`,duration:`640ms`,output:`找到 5 条相关片段。`},{id:`read-source`,name:`读取来源`,kind:`tool`,status:`error`,description:`读取组件实现时路径不存在。`,duration:`180ms`,input:`path: packages/willa-ai/src/components/Trace/index.tsx`,error:`ENOENT: no such file or directory`}]}]})})},{title:`空状态`,code:`
        <TraceViewer
          title="运行链路"
          empty="任务开始后会展示 trace span。"
          spans={[]}
        />;
      `,content:(0,l.jsx)(`div`,{style:S,children:(0,l.jsx)(u,{title:`运行链路`,empty:`任务开始后会展示 trace span。`,spans:[]})})}],props:[{name:`spans`,type:`Array<TraceViewerSpan>`,required:!0,description:`链路节点列表，支持 children 表示嵌套调用；节点可携带 kind、kindLabel、status、duration、tokens 和 cost。`},{name:`TraceViewerSpan.id`,type:`string`,required:!0,description:`链路节点唯一标识，必须在整棵 trace tree 内唯一，用于列表 key 和选中匹配。`},{name:`title`,type:`ReactNode`,defaultValue:`"Trace"`,description:`组件标题。`},{name:`description`,type:`ReactNode`,description:`链路说明。`},{name:`summary`,type:`Array<TraceViewerMetric>`,description:`顶部摘要指标，例如总耗时、tokens 和成本。`},{name:`selectedSpanId`,type:`string`,description:`受控选中的 span id；同时控制 expandedSpanIds 时，调用方需要保证选中节点的祖先已展开。无匹配 id 时列表不选中，详情为空。`},{name:`defaultSelectedSpanId`,type:`string`,description:`非受控默认选中的 span id；若 id 无效会回退到当前可见的第一个节点。若希望子节点在列表中可见，需要让 defaultExpandedSpanIds 包含其祖先节点。`},{name:`expandedSpanIds`,type:`Array<string>`,description:`受控展开的父级 span id；只影响有 children 的节点，点击展开按钮会通过 onExpandedSpanIdsChange 交给调用方更新。`},{name:`defaultExpandedSpanIds`,type:`Array<string>`,description:`默认展开的父级 span id；未传时默认展开所有有 children 的节点。`},{name:`empty`,type:`ReactNode`,defaultValue:`"暂无链路数据"`,description:`空状态内容。`},{name:`onSpanSelect`,type:`(span: TraceViewerSpan) => void`,description:`点击链路节点时触发。`},{name:`onExpandedSpanIdsChange`,type:`(spanIds: Array<string>) => void`,description:`展开或收起父级 span 时触发。`},{name:`TraceViewerSpan.kindLabel`,type:`ReactNode`,description:`自定义节点类型展示文案，用于 chain、prompt、embedding、rerank、guardrail 等后端类型。`}]});export{T as default};