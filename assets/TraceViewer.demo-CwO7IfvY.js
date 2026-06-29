import{b4 as o,b7 as A,b2 as e,n as H,aO as p}from"./index-np_LpDYz.js";import{d as J}from"./defineDoc-CVPycvmb.js";function w({spans:a,title:t="Trace",description:i,summary:r,selectedSpanId:d,defaultSelectedSpanId:m,expandedSpanIds:v,defaultExpandedSpanIds:S,empty:R="暂无链路数据",onSpanSelect:k,onExpandedSpanIdsChange:D,className:P,...O}){var N;const c=o.useMemo(()=>M(a),[a]),[x,g,j]=A({value:v,defaultValue:S??c,onChange:D}),T=o.useRef(c),f=o.useMemo(()=>E(a,new Set(x)),[x,a]),[b,q,B]=A({value:d,defaultValue:m??""}),h=(b?U(a,b):null)??(B?null:((N=f[0])==null?void 0:N.span)??null),K=f.length>0;o.useEffect(()=>{if(j||S||c.length===0){T.current=c;return}const s=new Set(T.current),l=c.filter(n=>!s.has(n));T.current=c,l.length>0&&g(n=>[...n,...l])},[S,c,j,g]);const z=s=>{g(l=>{const n=new Set(l);return n.has(s.id)?n.delete(s.id):n.add(s.id),Array.from(n)})};return e.jsxs("section",{...O,className:p("willa-trace-viewer",P),children:[e.jsxs("div",{className:"willa-trace-viewer__header",children:[e.jsxs("div",{className:"willa-trace-viewer__heading",children:[e.jsx("h3",{className:"willa-trace-viewer__title",children:t}),i?e.jsx("div",{className:"willa-trace-viewer__description",children:i}):null]}),r&&r.length>0?e.jsx(C,{className:"willa-trace-viewer__summary",metrics:r}):null]}),K?e.jsxs("div",{className:"willa-trace-viewer__body",children:[e.jsx("div",{className:"willa-trace-viewer__list",children:f.map(({span:s,depth:l,hasChildren:n})=>{const F=s.status??"pending",V=s.id===(h==null?void 0:h.id),G=$(s),I=x.includes(s.id);return e.jsxs("div",{className:p("willa-trace-viewer__row",`willa-trace-viewer__row--${F}`,l>0&&"willa-trace-viewer__row--nested",n&&"willa-trace-viewer__row--parent",V&&"willa-trace-viewer__row--selected"),style:{"--willa-trace-viewer-row-indent":`${l*.9}rem`},children:[n?e.jsx("button",{className:"willa-trace-viewer__row-toggle",type:"button","aria-expanded":I,"aria-label":I?"收起子链路":"展开子链路",onClick:()=>{z(s)},children:e.jsx(H,{className:"willa-trace-viewer__row-toggle-icon"})}):e.jsx("span",{className:"willa-trace-viewer__row-toggle-spacer","aria-hidden":"true"}),e.jsxs("button",{className:"willa-trace-viewer__row-content",type:"button","aria-current":V?"true":void 0,onClick:()=>{q(s.id),k==null||k(s)},children:[e.jsx("span",{className:"willa-trace-viewer__status-dot","aria-hidden":"true"}),e.jsxs("span",{className:"willa-trace-viewer__row-main",children:[e.jsx("span",{className:"willa-trace-viewer__row-title",children:s.name}),s.description?e.jsx("span",{className:"willa-trace-viewer__row-description",children:s.description}):null]}),e.jsxs("span",{className:"willa-trace-viewer__row-meta",children:[e.jsx("span",{className:"willa-trace-viewer__kind",children:G}),s.duration?e.jsx("span",{className:"willa-trace-viewer__meta-value",children:s.duration}):null]})]})]},s.id)})}),e.jsx(Q,{span:h})]}):e.jsx("div",{className:"willa-trace-viewer__empty",children:R})]})}const Q=({span:a})=>{if(!a)return e.jsx("div",{className:"willa-trace-viewer__detail willa-trace-viewer__detail--empty",children:"未找到选中的链路节点"});const t=a.status??"pending",i=$(a),r=W(a);return e.jsxs("div",{className:"willa-trace-viewer__detail",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-header",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-heading",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-title-row",children:[e.jsx("h4",{className:"willa-trace-viewer__detail-title",children:a.name}),e.jsx("span",{className:p("willa-trace-viewer__status",`willa-trace-viewer__status--${t}`),children:X[t]})]}),a.description?e.jsx("div",{className:"willa-trace-viewer__detail-description",children:a.description}):null]}),e.jsx("span",{className:"willa-trace-viewer__kind",children:i})]}),r.length>0?e.jsx(C,{className:"willa-trace-viewer__detail-metrics",metrics:r}):null,e.jsx(y,{label:"输入",value:a.input}),e.jsx(y,{label:"输出",value:a.output}),e.jsx(y,{label:"错误",tone:"danger",value:a.error})]})},C=({className:a,metrics:t})=>e.jsx("dl",{className:p("willa-trace-viewer__metrics",a),children:t.map((i,r)=>e.jsxs("div",{className:"willa-trace-viewer__metric",children:[e.jsx("dt",{children:i.label}),e.jsx("dd",{children:i.value})]},r))}),y=({label:a,tone:t,value:i})=>u(i)?e.jsxs("div",{className:p("willa-trace-viewer__block",t&&`willa-trace-viewer__block--${t}`),children:[e.jsx("div",{className:"willa-trace-viewer__block-label",children:a}),e.jsx("div",{className:"willa-trace-viewer__block-value",children:i})]}):null,u=a=>a!=null&&a!==!1,E=(a,t,i=0)=>a.flatMap(r=>{var v;const d=!!((v=r.children)!=null&&v.length),m={span:r,depth:i,hasChildren:d};return!d||!t.has(r.id)?[m]:[m,...E(r.children??[],t,i+1)]}),M=a=>a.flatMap(t=>{var r;const i=M(t.children??[]);return(r=t.children)!=null&&r.length?[t.id,...i]:i}),U=(a,t)=>{const i=[...a];for(;i.length>0;){const r=i.shift();if(r){if(r.id===t)return r;i.unshift(...r.children??[])}}return null},W=a=>{const t=[];return u(a.startedAt)&&t.push({label:"开始",value:a.startedAt}),u(a.duration)&&t.push({label:"耗时",value:a.duration}),u(a.tokens)&&t.push({label:"Tokens",value:a.tokens}),u(a.cost)&&t.push({label:"Cost",value:a.cost}),[...t,...a.metrics??[]]},X={pending:"等待",running:"运行中",success:"成功",error:"失败"},Y={agent:"Agent",model:"Model",tool:"Tool",retrieval:"Retrieval",system:"System"},$=a=>{if(u(a.kindLabel))return a.kindLabel;const t=a.kind??"system";return Y[t]??t};w.displayName="TraceViewer";const _={width:"min(100%, 64rem)"},Z=[{label:"总耗时",value:"4.8s"},{label:"Tokens",value:"18.2k"},{label:"Cost",value:"$0.041"}],L=[{id:"agent",name:"产品反馈分析 Agent",kind:"agent",status:"success",description:"汇总反馈、优先级和后续动作。",startedAt:"14:28:03",duration:"4.8s",tokens:"18.2k",cost:"$0.041",input:"分析最近 7 天产品反馈，输出高优问题和建议动作。",output:"识别出 3 个高优问题，已生成修复建议和 owner 分配。",children:[{id:"retrieve-feedback",name:"检索反馈数据",kind:"retrieval",status:"success",description:"读取反馈表和客服工单摘要。",startedAt:"14:28:03",duration:"920ms",tokens:"2.1k",input:"source: feedback_events, support_tickets",output:"命中 128 条反馈和 16 条客服工单。"},{id:"rank-issues",name:"优先级排序",kind:"model",status:"success",description:"按影响用户数、复现率和阻塞程度打分。",startedAt:"14:28:04",duration:"1.7s",tokens:"9.8k",cost:"$0.026",input:"128 条反馈，按主题聚类后的 9 个问题簇。",output:"登录失败、导出超时和主题配置错误进入 P0/P1 队列。",children:[{id:"score-issues",name:"问题评分",kind:"model",status:"success",description:"计算影响面、复现率和阻塞程度。",duration:"860ms",tokens:"4.2k"}]},{id:"create-actions",name:"生成后续动作",kind:"tool",status:"success",description:"为高优问题创建行动项和 owner 建议。",startedAt:"14:28:06",duration:"1.4s",input:"issues: login_failure, export_timeout, theme_config",output:"已生成 6 条行动项，建议分配给前端、后端和支持团队。"}]}],ee=[{id:"agent",name:"知识库回答链路",kind:"agent",status:"error",description:"检索资料后生成引用回答。",duration:"2.2s",tokens:"6.4k",cost:"$0.015",children:[{id:"search",name:"搜索知识库",kind:"retrieval",status:"success",description:"命中组件设计和 CSS 规则文档。",duration:"640ms",output:"找到 5 条相关片段。"},{id:"read-source",name:"读取来源",kind:"tool",status:"error",description:"读取组件实现时路径不存在。",duration:"180ms",input:"path: packages/willa-ai/src/components/Trace/index.tsx",error:"ENOENT: no such file or directory"}]}],ae=()=>e.jsx("div",{style:_,children:e.jsx(w,{title:"反馈分析链路",description:"展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。",summary:Z,spans:L})}),te=()=>{const[a,t]=o.useState("retrieve-feedback"),[i,r]=o.useState(["agent"]);return e.jsx("div",{style:_,children:e.jsx(w,{title:"受控链路",description:`当前选中：${a}`,spans:L,selectedSpanId:a,expandedSpanIds:i,onSpanSelect:d=>t(d.id),onExpandedSpanIdsChange:r})})},ne=J({id:"trace-viewer",name:"TraceViewer",category:"ai",packageName:"willa/TraceViewer",description:"用于展示 AI 推理链路、工具调用链路、耗时、tokens 和成本。",imports:[{name:"TraceViewer",from:"willa/TraceViewer"}],css:"willa/TraceViewer.css",demo:{name:"TraceViewerPreview",component:ae},code:`
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
  `,sections:[{title:"受控选中和展开",code:`
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
      `,content:e.jsx(te,{})},{title:"失败节点",code:`
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
      `,content:e.jsx("div",{style:_,children:e.jsx(w,{title:"知识库回答链路",description:"错误 span 会在列表和详情里保留原因。",spans:ee})})},{title:"空状态",code:`
        <TraceViewer
          title="运行链路"
          empty="任务开始后会展示 trace span。"
          spans={[]}
        />;
      `,content:e.jsx("div",{style:_,children:e.jsx(w,{title:"运行链路",empty:"任务开始后会展示 trace span。",spans:[]})})}],props:[{name:"spans",type:"Array<TraceViewerSpan>",required:!0,description:"链路节点列表，支持 children 表示嵌套调用；节点可携带 kind、kindLabel、status、duration、tokens 和 cost。"},{name:"TraceViewerSpan.id",type:"string",required:!0,description:"链路节点唯一标识，必须在整棵 trace tree 内唯一，用于列表 key 和选中匹配。"},{name:"title",type:"ReactNode",defaultValue:'"Trace"',description:"组件标题。"},{name:"description",type:"ReactNode",description:"链路说明。"},{name:"summary",type:"Array<TraceViewerMetric>",description:"顶部摘要指标，例如总耗时、tokens 和成本。"},{name:"selectedSpanId",type:"string",description:"受控选中的 span id；同时控制 expandedSpanIds 时，调用方需要保证选中节点的祖先已展开。无匹配 id 时列表不选中，详情为空。"},{name:"defaultSelectedSpanId",type:"string",description:"非受控默认选中的 span id；若 id 无效会回退到当前可见的第一个节点。若希望子节点在列表中可见，需要让 defaultExpandedSpanIds 包含其祖先节点。"},{name:"expandedSpanIds",type:"Array<string>",description:"受控展开的父级 span id；只影响有 children 的节点，点击展开按钮会通过 onExpandedSpanIdsChange 交给调用方更新。"},{name:"defaultExpandedSpanIds",type:"Array<string>",description:"默认展开的父级 span id；未传时默认展开所有有 children 的节点。"},{name:"empty",type:"ReactNode",defaultValue:'"暂无链路数据"',description:"空状态内容。"},{name:"onSpanSelect",type:"(span: TraceViewerSpan) => void",description:"点击链路节点时触发。"},{name:"onExpandedSpanIdsChange",type:"(spanIds: Array<string>) => void",description:"展开或收起父级 span 时触发。"},{name:"TraceViewerSpan.kindLabel",type:"ReactNode",description:"自定义节点类型展示文案，用于 chain、prompt、embedding、rerank、guardrail 等后端类型。"}]});export{ne as default};
