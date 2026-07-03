import{l as e,p as t,u as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{N as r,S as i,U as a,tt as o,u as s}from"./react-icons.esm-mVdwEXuX.js";import{t as c}from"./Button-O1aY2iqB.js";import{t as l}from"./Spinner-DJVkTLj1.js";import{t as u}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as d}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{n as f,t as p}from"./cardCollapse-BiVTb1xI.js";var m=t(n()),h=e();function g({name:e,status:t=`pending`,description:n,parameters:r,meta:i,icon:a,actions:o,children:s,collapsible:c=!1,collapsed:l,defaultCollapsed:u=!1,summary:d,onCollapsedChange:g,className:y,...b}){let x=r||s,{canCollapse:S,isCollapsed:C,resolvedSummary:w,toggleCollapsed:T}=f({collapsible:c,collapsed:l,defaultCollapsed:u,hasContent:!!x,summary:d,defaultSummary:`查看工具输入和执行结果`,onCollapsedChange:g});return(0,h.jsxs)(`section`,{...b,className:(0,m.default)(`willa-tool-call-card`,`willa-tool-call-card--${t}`,S&&`willa-tool-call-card--collapsible`,C&&`willa-tool-call-card--collapsed`,y),"data-status":t,children:[(0,h.jsx)(`span`,{className:`willa-tool-call-card-mark`,"aria-hidden":`true`,children:a??(0,h.jsx)(_,{status:t})}),(0,h.jsxs)(`div`,{className:`willa-tool-call-card-body`,children:[(0,h.jsxs)(`div`,{className:`willa-tool-call-card-header`,children:[(0,h.jsxs)(`div`,{className:`willa-tool-call-card-title-row`,children:[(0,h.jsx)(`span`,{className:`willa-tool-call-card-name`,children:e}),(0,h.jsx)(`span`,{className:`willa-tool-call-card-status`,children:v[t]})]}),i?(0,h.jsx)(`span`,{className:`willa-tool-call-card-meta`,children:i}):null]}),n?(0,h.jsx)(`div`,{className:`willa-tool-call-card-description`,children:n}):null,S?(0,h.jsx)(p,{className:`willa-tool-call-card-toggle`,textClassName:`willa-tool-call-card-toggle-text`,iconClassName:`willa-tool-call-card-toggle-icon`,summary:w,expanded:!C,onClick:T}):null,x&&!C?(0,h.jsxs)(`div`,{className:`willa-tool-call-card-content`,role:`list`,children:[r?(0,h.jsx)(`div`,{className:`willa-tool-call-card-parameters`,role:`listitem`,children:r}):null,s?(0,h.jsx)(`div`,{className:`willa-tool-call-card-result`,role:`listitem`,children:s}):null]}):null,o?(0,h.jsx)(`div`,{className:`willa-tool-call-card-actions`,children:o}):null]})]})}var _=({status:e})=>e===`running`?(0,h.jsx)(l,{size:`xs`,label:``,"aria-hidden":`true`}):(0,h.jsx)(`span`,{className:`willa-tool-call-card-status-dot`}),v={pending:`等待中`,running:`执行中`,success:`已完成`,error:`失败`};g.displayName=`ToolCallCard`;var y={display:`grid`,gap:`0.82rem`,width:`min(100%, 58rem)`},b=d({id:`tool-call-card`,name:`ToolCallCard`,category:`ai`,packageName:`willa/ToolCallCard`,description:`用于展示 AI 工具调用、参数摘要、执行状态和结果反馈。`,imports:[{name:`ToolCallCard`,from:`willa/ToolCallCard`}],css:`willa/ToolCallCard.css`,demo:{name:`ToolCallCardPreview`,component:()=>(0,h.jsxs)(`div`,{style:y,children:[(0,h.jsx)(g,{collapsible:!0,defaultCollapsed:!0,name:`文件检索`,status:`running`,description:`正在从组件文档、架构说明和 CSS 规则里查找相关上下文。`,parameters:`query: ToolCallCard package ownership`,meta:`1.2s`,icon:(0,h.jsx)(a,{}),summary:`隐藏工具参数和读取结果。`,children:`已读取 component.md、architecture.md 和 css.md。`}),(0,h.jsx)(g,{name:`读取文件`,status:`success`,description:`命中组件规范文档，并抽取了公开执行过程相关规则。`,parameters:`path: docs/component.md`,meta:`4 files`,icon:(0,h.jsx)(r,{}),children:`找到 ToolCallCard、ThinkingIndicator 和 MessageActions 的组合边界。`})]})},code:`
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
  `,sections:[{title:`折叠明细`,code:`
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
      `,content:(0,h.jsx)(g,{collapsible:!0,defaultCollapsed:!0,name:`网页检索`,status:`success`,description:`工具调用状态保留可见，参数和结果默认收起。`,parameters:`query: AI component generation card`,meta:`6 sources`,summary:`查看检索参数和命中结果`,children:`命中 6 条来源，已按可信度和更新时间排序。`})},{title:`状态类型`,code:`
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
      `,content:(0,h.jsxs)(`div`,{style:y,children:[(0,h.jsx)(g,{name:`等待执行`,status:`pending`,description:`工具调用已经排队，等待模型完成上一阶段输出。`,parameters:`tool: web_search`}),(0,h.jsx)(g,{name:`生成摘要`,status:`success`,description:`工具结果已经返回，内容可以进入最终回答。`,meta:`320ms`,icon:(0,h.jsx)(s,{}),children:`已生成 3 条候选摘要，并保留来源编号。`}),(0,h.jsx)(g,{name:`读取仓库`,status:`error`,description:`当前路径不可访问，需要用户重新选择上下文目录。`,meta:`EACCES`,icon:(0,h.jsx)(i,{}),actions:(0,h.jsxs)(u,{gap:`xs`,wrap:!0,children:[(0,h.jsx)(c,{size:`sm`,variant:`soft`,trailingIcon:(0,h.jsx)(o,{}),children:`重试`}),(0,h.jsx)(c,{size:`sm`,variant:`ghost`,children:`查看详情`})]})})]})},{title:`工具过程`,code:`
        <ToolCallCard
          name="数据库查询"
          status="success"
          description="查询最近 7 天用户反馈中出现次数最高的问题。"
          parameters="table: feedback_events, limit: 5"
          meta="18 rows"
        >
          登录失败、导出超时和主题配置错误是前三个高频问题。
        </ToolCallCard>;
      `,content:(0,h.jsx)(g,{name:`数据库查询`,status:`success`,description:`查询最近 7 天用户反馈中出现次数最高的问题。`,parameters:`table: feedback_events, limit: 5`,meta:`18 rows`,children:`登录失败、导出超时和主题配置错误是前三个高频问题。`})}],props:[{name:`name`,type:`ReactNode`,required:!0,description:`工具调用名称。`},{name:`status`,type:`"pending" | "running" | "success" | "error"`,defaultValue:`"pending"`,description:`工具调用状态，默认 pending。`},{name:`description`,type:`ReactNode`,description:`工具调用说明。`},{name:`parameters`,type:`ReactNode`,description:`参数摘要、查询条件或输入上下文。`},{name:`meta`,type:`ReactNode`,description:`右上角补充信息，例如耗时、行数或错误码。`},{name:`icon`,type:`ReactNode`,defaultValue:`由 status 决定`,description:`状态图标。未传时根据 status 渲染默认标记。`},{name:`actions`,type:`ReactNode`,description:`操作区，例如重试、展开详情或复制结果。`},{name:`collapsible`,type:`boolean`,defaultValue:`false`,description:`是否允许折叠参数和结果明细，默认 false。`},{name:`collapsed`,type:`boolean`,description:`受控折叠状态。`},{name:`defaultCollapsed`,type:`boolean`,defaultValue:`false`,description:`非受控模式下的默认折叠状态。`},{name:`summary`,type:`ReactNode`,defaultValue:`"查看工具输入和执行结果"`,description:`折叠开关文案。`},{name:`onCollapsedChange`,type:`(collapsed: boolean) => void`,description:`折叠状态变化时触发。`},{name:`children`,type:`ReactNode`,description:`工具调用结果或输出摘要。`}]});export{b as default};