import{aQ as k,aO as a,m as R,az as S,am as A,l as B,Q as z,g as x,ad as E,x as q,a0 as M,M as V}from"./index-BZo2zb5Z.js";/* empty css              *//* empty css              */import{d as _}from"./defineDoc-CYk1gPEt.js";function l({name:o,status:e="pending",description:i,parameters:t,meta:d,icon:w,actions:m,children:n,collapsible:j=!1,collapsed:p,defaultCollapsed:g=!1,summary:f,onCollapsedChange:c,className:y,...T}){const u=t||n,r=j&&!!u,[N,v]=k.useState(g),s=r?p??N:!1,b=f??"查看工具输入和执行结果",I=()=>{const C=!s;p===void 0&&v(C),c==null||c(C)};return a.jsxs("section",{...T,className:S("willa-tool-call-card",`willa-tool-call-card--${e}`,r&&"willa-tool-call-card--collapsible",s&&"willa-tool-call-card--collapsed",y),"data-status":e,children:[a.jsx("span",{className:"willa-tool-call-card-mark","aria-hidden":"true",children:w??a.jsx(G,{status:e})}),a.jsxs("div",{className:"willa-tool-call-card-body",children:[a.jsxs("div",{className:"willa-tool-call-card-header",children:[a.jsxs("div",{className:"willa-tool-call-card-title-row",children:[a.jsx("span",{className:"willa-tool-call-card-name",children:o}),a.jsx("span",{className:"willa-tool-call-card-status",children:D[e]})]}),d?a.jsx("span",{className:"willa-tool-call-card-meta",children:d}):null]}),i?a.jsx("div",{className:"willa-tool-call-card-description",children:i}):null,r?a.jsxs("button",{className:"willa-tool-call-card-toggle",type:"button","aria-expanded":!s,onClick:I,children:[a.jsx("span",{className:"willa-tool-call-card-toggle-text",children:b}),a.jsx(R,{className:"willa-tool-call-card-toggle-icon"})]}):null,u&&!s?a.jsxs("div",{className:"willa-tool-call-card-content",children:[t?a.jsx("div",{className:"willa-tool-call-card-parameters",children:t}):null,n?a.jsx("div",{className:"willa-tool-call-card-result",children:n}):null]}):null,m?a.jsx("div",{className:"willa-tool-call-card-actions",children:m}):null]})]})}const G=({status:o})=>o==="running"?a.jsx(A,{size:"xs",label:"","aria-hidden":"true"}):a.jsx("span",{className:"willa-tool-call-card-status-dot"}),D={pending:"等待中",running:"执行中",success:"已完成",error:"失败"},h={display:"grid",gap:"0.82rem",width:"min(100%, 58rem)"},P=()=>a.jsxs("div",{style:h,children:[a.jsx(l,{collapsible:!0,defaultCollapsed:!0,name:"文件检索",status:"running",description:"正在从组件文档、架构说明和 CSS 规则里查找相关上下文。",parameters:"query: ToolCallCard package ownership",meta:"1.2s",icon:a.jsx(M,{}),summary:"隐藏工具参数和读取结果。",children:"已读取 component.md、architecture.md 和 css.md。"}),a.jsx(l,{name:"读取文件",status:"success",description:"命中 AI 组件规划文档，并抽取了公开执行过程相关规则。",parameters:"path: docs/component-roadmap.md",meta:"4 files",icon:a.jsx(V,{}),children:"找到 ToolCallCard、ThinkingIndicator 和 MessageActions 的组合边界。"})]}),$=_({id:"tool-call-card",name:"ToolCallCard",category:"ai",packageName:"willa/ToolCallCard",description:"用于展示 AI 工具调用、参数摘要、执行状态和结果反馈。",imports:[{name:"ToolCallCard",from:"willa/ToolCallCard"}],css:"willa/ToolCallCard.css",demo:{name:"ToolCallCardPreview",component:P},code:`
    import { ToolCallCard } from "willa/ToolCallCard";
    import "willa/ToolCallCard.css";

    <ToolCallCard
      name="文件检索"
      status="running"
      description="正在查找相关上下文。"
      parameters="query: ToolCallCard package ownership"
      meta="1.2s"
      collapsible
      defaultCollapsed
    >
      已读取 component.md、architecture.md 和 css.md。
    </ToolCallCard>;
  `,sections:[{title:"折叠明细",code:`
        <ToolCallCard
          collapsible
          defaultCollapsed
          name="网页检索"
          status="success"
          description="工具调用状态保留可见，参数和结果默认收起。"
          parameters="query: AI component generation card"
          meta="6 sources"
          summary="查看检索参数和命中结果"
        >
          命中 6 条来源，已按可信度和更新时间排序。
        </ToolCallCard>;
      `,content:a.jsx(l,{collapsible:!0,defaultCollapsed:!0,name:"网页检索",status:"success",description:"工具调用状态保留可见，参数和结果默认收起。",parameters:"query: AI component generation card",meta:"6 sources",summary:"查看检索参数和命中结果",children:"命中 6 条来源，已按可信度和更新时间排序。"})},{title:"状态类型",code:`
        <div style={frameStyle}>
          <ToolCallCard
            name="等待执行"
            status="pending"
            description="工具调用已经排队，等待模型完成上一阶段输出。"
            parameters="tool: web_search"
          />
          <ToolCallCard
            name="生成摘要"
            status="success"
            description="工具结果已经返回，内容可以进入最终回答。"
            meta="320ms"
            icon={<CheckIcon />}
          >
            已生成 3 条候选摘要，并保留来源编号。
          </ToolCallCard>
          <ToolCallCard
            name="读取仓库"
            status="error"
            description="当前路径不可访问，需要用户重新选择上下文目录。"
            meta="EACCES"
            icon={<CrossCircledIcon />}
            actions={
              <Group gap="xs" wrap>
                <Button size="sm" variant="soft" trailingIcon={<ReloadIcon />}>
                  重试
                </Button>
                <Button size="sm" variant="ghost">
                  查看详情
                </Button>
              </Group>
            }
          />
        </div>;
      `,content:a.jsxs("div",{style:h,children:[a.jsx(l,{name:"等待执行",status:"pending",description:"工具调用已经排队，等待模型完成上一阶段输出。",parameters:"tool: web_search"}),a.jsx(l,{name:"生成摘要",status:"success",description:"工具结果已经返回，内容可以进入最终回答。",meta:"320ms",icon:a.jsx(B,{}),children:"已生成 3 条候选摘要，并保留来源编号。"}),a.jsx(l,{name:"读取仓库",status:"error",description:"当前路径不可访问，需要用户重新选择上下文目录。",meta:"EACCES",icon:a.jsx(q,{}),actions:a.jsxs(z,{gap:"xs",wrap:!0,children:[a.jsx(x,{size:"sm",variant:"soft",trailingIcon:a.jsx(E,{}),children:"重试"}),a.jsx(x,{size:"sm",variant:"ghost",children:"查看详情"})]})})]})},{title:"工具过程",code:`
        <ToolCallCard
          name="数据库查询"
          status="success"
          description="查询最近 7 天用户反馈中出现次数最高的问题。"
          parameters="table: feedback_events, limit: 5"
          meta="18 rows"
        >
          登录失败、导出超时和主题配置错误是前三个高频问题。
        </ToolCallCard>;
      `,content:a.jsx(l,{name:"数据库查询",status:"success",description:"查询最近 7 天用户反馈中出现次数最高的问题。",parameters:"table: feedback_events, limit: 5",meta:"18 rows",children:"登录失败、导出超时和主题配置错误是前三个高频问题。"})}],props:[{name:"name",type:"ReactNode",required:!0,description:"工具调用名称。"},{name:"status",type:'"pending" | "running" | "success" | "error"',defaultValue:'"pending"',description:"工具调用状态，默认 pending。"},{name:"description",type:"ReactNode",description:"工具调用说明。"},{name:"parameters",type:"ReactNode",description:"参数摘要、查询条件或输入上下文。"},{name:"meta",type:"ReactNode",description:"右上角补充信息，例如耗时、行数或错误码。"},{name:"icon",type:"ReactNode",defaultValue:"由 status 决定",description:"状态图标。未传时根据 status 渲染默认标记。"},{name:"actions",type:"ReactNode",description:"操作区，例如重试、展开详情或复制结果。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许折叠参数和结果明细，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",defaultValue:"false",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",defaultValue:'"查看工具输入和执行结果"',description:"折叠开关文案。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"},{name:"children",type:"ReactNode",description:"工具调用结果或输出摘要。"}]});export{$ as default};
