import{b1 as a,aN as v,ay as b,m as I,Y as R,h as p,am as k,F as S,a7 as B,R as A}from"./index-BjtE9AVd.js";import{u as q,C as z}from"./cardCollapse-CnQneZCR.js";/* empty css              *//* empty css              */import{d as E}from"./defineDoc-CWmZ2fbW.js";function l({name:s,status:e="pending",description:n,parameters:o,meta:c,icon:C,actions:i,children:t,collapsible:x=!1,collapsed:g,defaultCollapsed:h=!1,summary:w,onCollapsedChange:y,className:j,...f}){const d=o||t,{canCollapse:m,isCollapsed:r,resolvedSummary:T,toggleCollapsed:N}=q({collapsible:x,collapsed:g,defaultCollapsed:h,hasContent:!!d,summary:w,defaultSummary:"查看工具输入和执行结果",onCollapsedChange:y});return a.jsxs("section",{...f,className:v("willa-tool-call-card",`willa-tool-call-card--${e}`,m&&"willa-tool-call-card--collapsible",r&&"willa-tool-call-card--collapsed",j),"data-status":e,children:[a.jsx("span",{className:"willa-tool-call-card-mark","aria-hidden":"true",children:C??a.jsx(V,{status:e})}),a.jsxs("div",{className:"willa-tool-call-card-body",children:[a.jsxs("div",{className:"willa-tool-call-card-header",children:[a.jsxs("div",{className:"willa-tool-call-card-title-row",children:[a.jsx("span",{className:"willa-tool-call-card-name",children:s}),a.jsx("span",{className:"willa-tool-call-card-status",children:_[e]})]}),c?a.jsx("span",{className:"willa-tool-call-card-meta",children:c}):null]}),n?a.jsx("div",{className:"willa-tool-call-card-description",children:n}):null,m?a.jsx(z,{className:"willa-tool-call-card-toggle",textClassName:"willa-tool-call-card-toggle-text",iconClassName:"willa-tool-call-card-toggle-icon",summary:T,expanded:!r,onClick:N}):null,d&&!r?a.jsxs("div",{className:"willa-tool-call-card-content",role:"list",children:[o?a.jsx("div",{className:"willa-tool-call-card-parameters",role:"listitem",children:o}):null,t?a.jsx("div",{className:"willa-tool-call-card-result",role:"listitem",children:t}):null]}):null,i?a.jsx("div",{className:"willa-tool-call-card-actions",children:i}):null]})]})}const V=({status:s})=>s==="running"?a.jsx(b,{size:"xs",label:"","aria-hidden":"true"}):a.jsx("span",{className:"willa-tool-call-card-status-dot"}),_={pending:"等待中",running:"执行中",success:"已完成",error:"失败"};l.displayName="ToolCallCard";const u={display:"grid",gap:"0.82rem",width:"min(100%, 58rem)"},G=()=>a.jsxs("div",{style:u,children:[a.jsx(l,{collapsible:!0,defaultCollapsed:!0,name:"文件检索",status:"running",description:"正在从组件文档、架构说明和 CSS 规则里查找相关上下文。",parameters:"query: ToolCallCard package ownership",meta:"1.2s",icon:a.jsx(B,{}),summary:"隐藏工具参数和读取结果。",children:"已读取 component.md、architecture.md 和 css.md。"}),a.jsx(l,{name:"读取文件",status:"success",description:"命中组件规范文档，并抽取了公开执行过程相关规则。",parameters:"path: docs/component.md",meta:"4 files",icon:a.jsx(A,{}),children:"找到 ToolCallCard、ThinkingIndicator 和 MessageActions 的组合边界。"})]}),Y=E({id:"tool-call-card",name:"ToolCallCard",category:"ai",packageName:"willa/ToolCallCard",description:"用于展示 AI 工具调用、参数摘要、执行状态和结果反馈。",imports:[{name:"ToolCallCard",from:"willa/ToolCallCard"}],css:"willa/ToolCallCard.css",demo:{name:"ToolCallCardPreview",component:G},code:`
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
      `,content:a.jsxs("div",{style:u,children:[a.jsx(l,{name:"等待执行",status:"pending",description:"工具调用已经排队，等待模型完成上一阶段输出。",parameters:"tool: web_search"}),a.jsx(l,{name:"生成摘要",status:"success",description:"工具结果已经返回，内容可以进入最终回答。",meta:"320ms",icon:a.jsx(I,{}),children:"已生成 3 条候选摘要，并保留来源编号。"}),a.jsx(l,{name:"读取仓库",status:"error",description:"当前路径不可访问，需要用户重新选择上下文目录。",meta:"EACCES",icon:a.jsx(S,{}),actions:a.jsxs(R,{gap:"xs",wrap:!0,children:[a.jsx(p,{size:"sm",variant:"soft",trailingIcon:a.jsx(k,{}),children:"重试"}),a.jsx(p,{size:"sm",variant:"ghost",children:"查看详情"})]})})]})},{title:"工具过程",code:`
        <ToolCallCard
          name="数据库查询"
          status="success"
          description="查询最近 7 天用户反馈中出现次数最高的问题。"
          parameters="table: feedback_events, limit: 5"
          meta="18 rows"
        >
          登录失败、导出超时和主题配置错误是前三个高频问题。
        </ToolCallCard>;
      `,content:a.jsx(l,{name:"数据库查询",status:"success",description:"查询最近 7 天用户反馈中出现次数最高的问题。",parameters:"table: feedback_events, limit: 5",meta:"18 rows",children:"登录失败、导出超时和主题配置错误是前三个高频问题。"})}],props:[{name:"name",type:"ReactNode",required:!0,description:"工具调用名称。"},{name:"status",type:'"pending" | "running" | "success" | "error"',defaultValue:'"pending"',description:"工具调用状态，默认 pending。"},{name:"description",type:"ReactNode",description:"工具调用说明。"},{name:"parameters",type:"ReactNode",description:"参数摘要、查询条件或输入上下文。"},{name:"meta",type:"ReactNode",description:"右上角补充信息，例如耗时、行数或错误码。"},{name:"icon",type:"ReactNode",defaultValue:"由 status 决定",description:"状态图标。未传时根据 status 渲染默认标记。"},{name:"actions",type:"ReactNode",description:"操作区，例如重试、展开详情或复制结果。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许折叠参数和结果明细，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",defaultValue:"false",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",defaultValue:'"查看工具输入和执行结果"',description:"折叠开关文案。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"},{name:"children",type:"ReactNode",description:"工具调用结果或输出摘要。"}]});export{Y as default};
