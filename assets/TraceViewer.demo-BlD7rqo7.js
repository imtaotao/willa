import{b3 as v,b6 as I,b1 as e,n as G,aN as o}from"./index-Bn83wcBb.js";import{d as H}from"./defineDoc-DJuv5mBO.js";function _({spans:r,title:t="Trace",description:i,summary:a,selectedSpanId:u,defaultSelectedSpanId:w,expandedSpanIds:p,defaultExpandedSpanIds:h,empty:L="暂无链路数据",onSpanSelect:k,onExpandedSpanIdsChange:R,className:D,...P}){var b;const c=v.useMemo(()=>M(r),[r]),[x,g,j]=I({value:p,defaultValue:h??c,onChange:R}),f=v.useRef(c),y=v.useMemo(()=>E(r,new Set(x)),[x,r]),[N,q,B]=I({value:u,defaultValue:w??""}),m=(N?Q(r,N):null)??(B?null:((b=y[0])==null?void 0:b.span)??null),K=y.length>0;v.useEffect(()=>{if(j||h||c.length===0){f.current=c;return}const s=new Set(f.current),l=c.filter(n=>!s.has(n));f.current=c,l.length>0&&g(n=>[...n,...l])},[h,c,j,g]);const O=s=>{g(l=>{const n=new Set(l);return n.has(s.id)?n.delete(s.id):n.add(s.id),Array.from(n)})};return e.jsxs("section",{...P,className:o("willa-trace-viewer",D),children:[e.jsxs("div",{className:"willa-trace-viewer__header",children:[e.jsxs("div",{className:"willa-trace-viewer__heading",children:[e.jsx("h3",{className:"willa-trace-viewer__title",children:t}),i?e.jsx("div",{className:"willa-trace-viewer__description",children:i}):null]}),a&&a.length>0?e.jsx(C,{className:"willa-trace-viewer__summary",metrics:a}):null]}),K?e.jsxs("div",{className:"willa-trace-viewer__body",children:[e.jsx("div",{className:"willa-trace-viewer__list",children:y.map(({span:s,depth:l,hasChildren:n})=>{const z=s.status??"pending",V=s.id===(m==null?void 0:m.id),F=$(s),A=x.includes(s.id);return e.jsxs("div",{className:o("willa-trace-viewer__row",`willa-trace-viewer__row--${z}`,l>0&&"willa-trace-viewer__row--nested",n&&"willa-trace-viewer__row--parent",V&&"willa-trace-viewer__row--selected"),style:{"--willa-trace-viewer-row-indent":`${l*.9}rem`},children:[n?e.jsx("button",{className:"willa-trace-viewer__row-toggle",type:"button","aria-expanded":A,"aria-label":A?"收起子链路":"展开子链路",onClick:()=>{O(s)},children:e.jsx(G,{className:"willa-trace-viewer__row-toggle-icon"})}):e.jsx("span",{className:"willa-trace-viewer__row-toggle-spacer","aria-hidden":"true"}),e.jsxs("button",{className:"willa-trace-viewer__row-content",type:"button","aria-current":V?"true":void 0,onClick:()=>{q(s.id),k==null||k(s)},children:[e.jsx("span",{className:"willa-trace-viewer__status-dot","aria-hidden":"true"}),e.jsxs("span",{className:"willa-trace-viewer__row-main",children:[e.jsx("span",{className:"willa-trace-viewer__row-title",children:s.name}),s.description?e.jsx("span",{className:"willa-trace-viewer__row-description",children:s.description}):null]}),e.jsxs("span",{className:"willa-trace-viewer__row-meta",children:[e.jsx("span",{className:"willa-trace-viewer__kind",children:F}),s.duration?e.jsx("span",{className:"willa-trace-viewer__meta-value",children:s.duration}):null]})]})]},s.id)})}),e.jsx(J,{span:m})]}):e.jsx("div",{className:"willa-trace-viewer__empty",children:L})]})}const J=({span:r})=>{if(!r)return e.jsx("div",{className:"willa-trace-viewer__detail willa-trace-viewer__detail--empty",children:"未找到选中的链路节点"});const t=r.status??"pending",i=$(r),a=U(r);return e.jsxs("div",{className:"willa-trace-viewer__detail",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-header",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-heading",children:[e.jsxs("div",{className:"willa-trace-viewer__detail-title-row",children:[e.jsx("h4",{className:"willa-trace-viewer__detail-title",children:r.name}),e.jsx("span",{className:o("willa-trace-viewer__status",`willa-trace-viewer__status--${t}`),children:W[t]})]}),r.description?e.jsx("div",{className:"willa-trace-viewer__detail-description",children:r.description}):null]}),e.jsx("span",{className:"willa-trace-viewer__kind",children:i})]}),a.length>0?e.jsx(C,{className:"willa-trace-viewer__detail-metrics",metrics:a}):null,e.jsx(S,{label:"输入",value:r.input}),e.jsx(S,{label:"输出",value:r.output}),e.jsx(S,{label:"错误",tone:"danger",value:r.error})]})},C=({className:r,metrics:t})=>e.jsx("dl",{className:o("willa-trace-viewer__metrics",r),children:t.map((i,a)=>e.jsxs("div",{className:"willa-trace-viewer__metric",children:[e.jsx("dt",{children:i.label}),e.jsx("dd",{children:i.value})]},a))}),S=({label:r,tone:t,value:i})=>d(i)?e.jsxs("div",{className:o("willa-trace-viewer__block",t&&`willa-trace-viewer__block--${t}`),children:[e.jsx("div",{className:"willa-trace-viewer__block-label",children:r}),e.jsx("div",{className:"willa-trace-viewer__block-value",children:i})]}):null,d=r=>r!=null&&r!==!1,E=(r,t,i=0)=>r.flatMap(a=>{var p;const u=!!((p=a.children)!=null&&p.length),w={span:a,depth:i,hasChildren:u};return!u||!t.has(a.id)?[w]:[w,...E(a.children??[],t,i+1)]}),M=r=>r.flatMap(t=>{var a;const i=M(t.children??[]);return(a=t.children)!=null&&a.length?[t.id,...i]:i}),Q=(r,t)=>{const i=[...r];for(;i.length>0;){const a=i.shift();if(a){if(a.id===t)return a;i.unshift(...a.children??[])}}return null},U=r=>{const t=[];return d(r.startedAt)&&t.push({label:"开始",value:r.startedAt}),d(r.duration)&&t.push({label:"耗时",value:r.duration}),d(r.tokens)&&t.push({label:"Tokens",value:r.tokens}),d(r.cost)&&t.push({label:"Cost",value:r.cost}),[...t,...r.metrics??[]]},W={pending:"等待",running:"运行中",success:"成功",error:"失败"},X={agent:"Agent",model:"Model",tool:"Tool",retrieval:"Retrieval",system:"System"},$=r=>{if(d(r.kindLabel))return r.kindLabel;const t=r.kind??"system";return X[t]??t};_.displayName="TraceViewer";const T={width:"min(100%, 64rem)"},Y=[{label:"总耗时",value:"4.8s"},{label:"Tokens",value:"18.2k"},{label:"Cost",value:"$0.041"}],Z=[{id:"agent",name:"产品反馈分析 Agent",kind:"agent",status:"success",description:"汇总反馈、优先级和后续动作。",startedAt:"14:28:03",duration:"4.8s",tokens:"18.2k",cost:"$0.041",input:"分析最近 7 天产品反馈，输出高优问题和建议动作。",output:"识别出 3 个高优问题，已生成修复建议和 owner 分配。",children:[{id:"retrieve-feedback",name:"检索反馈数据",kind:"retrieval",status:"success",description:"读取反馈表和客服工单摘要。",startedAt:"14:28:03",duration:"920ms",tokens:"2.1k",input:"source: feedback_events, support_tickets",output:"命中 128 条反馈和 16 条客服工单。"},{id:"rank-issues",name:"优先级排序",kind:"model",status:"success",description:"按影响用户数、复现率和阻塞程度打分。",startedAt:"14:28:04",duration:"1.7s",tokens:"9.8k",cost:"$0.026",input:"128 条反馈，按主题聚类后的 9 个问题簇。",output:"登录失败、导出超时和主题配置错误进入 P0/P1 队列。",children:[{id:"score-issues",name:"问题评分",kind:"model",status:"success",description:"计算影响面、复现率和阻塞程度。",duration:"860ms",tokens:"4.2k"}]},{id:"create-actions",name:"生成后续动作",kind:"tool",status:"success",description:"为高优问题创建行动项和 owner 建议。",startedAt:"14:28:06",duration:"1.4s",input:"issues: login_failure, export_timeout, theme_config",output:"已生成 6 条行动项，建议分配给前端、后端和支持团队。"}]}],ee=[{id:"agent",name:"知识库回答链路",kind:"agent",status:"error",description:"检索资料后生成引用回答。",duration:"2.2s",tokens:"6.4k",cost:"$0.015",children:[{id:"search",name:"搜索知识库",kind:"retrieval",status:"success",description:"命中组件设计和 CSS 规则文档。",duration:"640ms",output:"找到 5 条相关片段。"},{id:"read-source",name:"读取来源",kind:"tool",status:"error",description:"读取组件实现时路径不存在。",duration:"180ms",input:"path: packages/willa-ai/src/components/Trace/index.tsx",error:"ENOENT: no such file or directory"}]}],re=()=>e.jsx("div",{style:T,children:e.jsx(_,{title:"反馈分析链路",description:"展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。",summary:Y,spans:Z})}),se=H({id:"trace-viewer",name:"TraceViewer",category:"ai",packageName:"willa/TraceViewer",description:"用于展示 AI 推理链路、工具调用链路、耗时、tokens 和成本。",imports:[{name:"TraceViewer",from:"willa/TraceViewer"}],css:"willa/TraceViewer.css",demo:{name:"TraceViewerPreview",component:re},code:`
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
  `,sections:[{title:"失败节点",code:`
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
      `,content:e.jsx("div",{style:T,children:e.jsx(_,{title:"知识库回答链路",description:"错误 span 会在列表和详情里保留原因。",spans:ee})})},{title:"空状态",code:`
        <TraceViewer
          title="运行链路"
          empty="任务开始后会展示 trace span。"
          spans={[]}
        />;
      `,content:e.jsx("div",{style:T,children:e.jsx(_,{title:"运行链路",empty:"任务开始后会展示 trace span。",spans:[]})})}],props:[{name:"spans",type:"Array<TraceViewerSpan>",required:!0,description:"链路节点列表，支持 children 表示嵌套调用；节点可携带 kind、kindLabel、status、duration、tokens 和 cost。"},{name:"TraceViewerSpan.id",type:"string",required:!0,description:"链路节点唯一标识，必须在整棵 trace tree 内唯一，用于列表 key 和选中匹配。"},{name:"title",type:"ReactNode",defaultValue:'"Trace"',description:"组件标题。"},{name:"description",type:"ReactNode",description:"链路说明。"},{name:"summary",type:"Array<TraceViewerMetric>",description:"顶部摘要指标，例如总耗时、tokens 和成本。"},{name:"selectedSpanId",type:"string",description:"受控选中的 span id；同时控制 expandedSpanIds 时，调用方需要保证选中节点的祖先已展开。"},{name:"defaultSelectedSpanId",type:"string",description:"默认选中的 span id；若希望子节点在列表中可见，需要让 defaultExpandedSpanIds 包含其祖先节点。"},{name:"expandedSpanIds",type:"Array<string>",description:"受控展开的父级 span id；只影响有 children 的节点。"},{name:"defaultExpandedSpanIds",type:"Array<string>",description:"默认展开的父级 span id；未传时默认展开所有有 children 的节点。"},{name:"empty",type:"ReactNode",defaultValue:'"暂无链路数据"',description:"空状态内容。"},{name:"onSpanSelect",type:"(span: TraceViewerSpan) => void",description:"点击链路节点时触发。"},{name:"onExpandedSpanIdsChange",type:"(spanIds: Array<string>) => void",description:"展开或收起父级 span 时触发。"},{name:"TraceViewerSpan.kindLabel",type:"ReactNode",description:"自定义节点类型展示文案，用于 chain、prompt、embedding、rerank、guardrail 等后端类型。"}]});export{se as default};
