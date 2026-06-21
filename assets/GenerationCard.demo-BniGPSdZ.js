import{a$ as D,aZ as e,n as M,aK as T,l as V,D as A,a3 as P,a5 as y,W as r,h as a,y as g,al as W,ae as E,m as L}from"./index-DWZgfaf6.js";/* empty css              *//* empty css              */import{d as $}from"./defineDoc-BD9IXsif.js";function t({title:i,status:l="pending",description:x,meta:v,icon:w,metrics:c,actions:d,children:p,collapsible:C=!1,collapsed:j,defaultCollapsed:G=!1,summary:b,onCollapsedChange:m,className:I,...N}){const h=c!==void 0&&c.length>0,u=C&&!!p,[B,z]=D.useState(G),s=u?j??B:!1,R=b??"查看生成结果",S=()=>{const n=!s;j===void 0&&z(n),m==null||m(n)};return e.jsxs("section",{...N,className:T("willa-generation-card",`willa-generation-card--${l}`,u&&"willa-generation-card--collapsible",s&&"willa-generation-card--collapsed",I),"data-status":l,children:[e.jsxs("div",{className:"willa-generation-card-header",children:[e.jsx("span",{className:"willa-generation-card-mark","aria-hidden":"true",children:w??e.jsx(q,{status:l})}),e.jsxs("div",{className:"willa-generation-card-heading",children:[e.jsxs("div",{className:"willa-generation-card-title-row",children:[e.jsx("h3",{className:"willa-generation-card-title",children:i}),e.jsx("span",{className:"willa-generation-card-status",children:K[l]})]}),x?e.jsx("div",{className:"willa-generation-card-description",children:x}):null]}),v?e.jsx("div",{className:"willa-generation-card-meta",children:v}):null]}),u?e.jsxs("button",{className:"willa-generation-card-toggle",type:"button","aria-expanded":!s,onClick:S,children:[e.jsx("span",{className:"willa-generation-card-toggle-text",children:R}),e.jsx(M,{className:"willa-generation-card-toggle-icon"})]}):null,p&&!s?e.jsx("div",{className:"willa-generation-card-content",children:p}):null,h||d?e.jsxs("div",{className:"willa-generation-card-footer",children:[h?e.jsx("dl",{className:"willa-generation-card-metrics",children:c.map((n,k)=>e.jsxs("div",{className:"willa-generation-card-metric",children:[e.jsx("dt",{children:n.label}),e.jsx("dd",{children:n.value})]},k))}):null,d?e.jsx("div",{className:"willa-generation-card-actions",children:d}):null]}):null]})}const q=({status:i})=>i==="completed"?e.jsx(V,{}):i==="failed"?e.jsx(A,{}):i==="generating"?e.jsx(P,{}):e.jsx(y,{}),K={pending:"等待生成",generating:"生成中",completed:"已生成",failed:"生成失败"};t.displayName="GenerationCard";const f={display:"grid",gap:"0.82rem",width:"min(100%, 58rem)"},o={margin:0},Z=()=>e.jsx("div",{style:f,children:e.jsx(t,{collapsible:!0,defaultCollapsed:!0,title:"产品反馈摘要",status:"completed",description:"从 128 条用户反馈中生成可直接进入周报的摘要。",meta:"刚刚",summary:"隐藏生成正文，只保留状态、指标和操作。",metrics:[{label:"来源",value:"128 条"},{label:"置信",value:"高"},{label:"耗时",value:"4.2s"}],actions:e.jsxs(r,{gap:"xs",wrap:!0,children:[e.jsx(a,{size:"sm",variant:"soft",trailingIcon:e.jsx(g,{}),children:"复制"}),e.jsx(a,{size:"sm",variant:"solid",trailingIcon:e.jsx(L,{}),children:"采纳"})]}),children:e.jsx("p",{style:o,children:"本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。建议优先处理导出失败兜底，其次优化批量任务进度提示。"})})}),O=$({id:"generation-card",name:"GenerationCard",category:"ai",packageName:"willa/GenerationCard",description:"用于展示 AI 生成任务的状态、结果摘要、指标和后续操作。",imports:[{name:"GenerationCard",from:"willa/GenerationCard"}],css:"willa/GenerationCard.css",demo:{name:"GenerationCardPreview",component:Z},code:`
    import { GenerationCard } from "willa/GenerationCard";
    import "willa/GenerationCard.css";

    <GenerationCard
      title="产品反馈摘要"
      status="completed"
      description="从 128 条用户反馈中生成可直接进入周报的摘要。"
      meta="刚刚"
      metrics={[
        { label: "来源", value: "128 条" },
        { label: "置信", value: "高" },
      ]}
      collapsible
      defaultCollapsed
    >
      本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。
    </GenerationCard>;
  `,sections:[{title:"折叠结果",code:`
        <GenerationCard
          collapsible
          defaultCollapsed
          title="客服回复草稿"
          status="completed"
          description="已生成可人工确认后发送的回复。"
          summary="查看生成正文"
          metrics={[
            { label: "语气", value: "克制" },
            { label: "风险", value: "低" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <Button size="sm" variant="soft" trailingIcon={<CopyIcon />}>
                复制
              </Button>
              <Button size="sm" variant="solid">
                采纳
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID
            联系支持，我们会继续追踪。
          </p>
        </GenerationCard>;
      `,content:e.jsx(t,{collapsible:!0,defaultCollapsed:!0,title:"客服回复草稿",status:"completed",description:"已生成可人工确认后发送的回复。",summary:"查看生成正文",metrics:[{label:"语气",value:"克制"},{label:"风险",value:"低"}],actions:e.jsxs(r,{gap:"xs",wrap:!0,children:[e.jsx(a,{size:"sm",variant:"soft",trailingIcon:e.jsx(g,{}),children:"复制"}),e.jsx(a,{size:"sm",variant:"solid",children:"采纳"})]}),children:e.jsx("p",{style:o,children:"我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。"})})},{title:"生成状态",code:`
        <div style={frameStyle}>
          <GenerationCard
            title="生成发布说明"
            status="generating"
            description="正在合并 commit、issue 和手写补充说明。"
            meta="2/4"
            metrics={[
              { label: "已读取", value: "18 条" },
              { label: "阶段", value: "整理中" },
            ]}
          >
            <p style={previewTextStyle}>正在提取破坏性变更、功能亮点和迁移提示。</p>
          </GenerationCard>
          <GenerationCard
            title="生成竞品分析"
            status="pending"
            description="任务已经进入队列，等待上一个生成请求完成。"
            meta="排队中"
          />
          <GenerationCard
            title="生成长文大纲"
            status="failed"
            description="上下文里缺少目标读者和发布渠道，需要补充任务约束。"
            meta="缺少输入"
            actions={
              <Group gap="xs" wrap>
                <Button size="sm" variant="soft" trailingIcon={<ReloadIcon />}>
                  重试
                </Button>
                <Button size="sm" variant="ghost">
                  补充上下文
                </Button>
              </Group>
            }
          />
        </div>;
      `,content:e.jsxs("div",{style:f,children:[e.jsx(t,{title:"生成发布说明",status:"generating",description:"正在合并 commit、issue 和手写补充说明。",meta:"2/4",metrics:[{label:"已读取",value:"18 条"},{label:"阶段",value:"整理中"}],children:e.jsx("p",{style:o,children:"正在提取破坏性变更、功能亮点和迁移提示。"})}),e.jsx(t,{title:"生成竞品分析",status:"pending",description:"任务已经进入队列，等待上一个生成请求完成。",meta:"排队中"}),e.jsx(t,{title:"生成长文大纲",status:"failed",description:"上下文里缺少目标读者和发布渠道，需要补充任务约束。",meta:"缺少输入",actions:e.jsxs(r,{gap:"xs",wrap:!0,children:[e.jsx(a,{size:"sm",variant:"soft",trailingIcon:e.jsx(W,{}),children:"重试"}),e.jsx(a,{size:"sm",variant:"ghost",children:"补充上下文"})]})})]})},{title:"结果操作",code:`
        <GenerationCard
          title="首页文案候选"
          status="completed"
          description="适合直接用于产品首屏的短文案。"
          icon={<MagicWandIcon />}
          metrics={[
            { label: "长度", value: "42 字" },
            { label: "语气", value: "克制" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <Button size="sm" variant="soft" trailingIcon={<CopyIcon />}>
                复制
              </Button>
              <Button size="sm" variant="ghost" trailingIcon={<Pencil1Icon />}>
                编辑
              </Button>
              <Button size="sm" variant="solid">
                插入
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。
          </p>
        </GenerationCard>;
      `,content:e.jsx(t,{title:"首页文案候选",status:"completed",description:"适合直接用于产品首屏的短文案。",icon:e.jsx(y,{}),metrics:[{label:"长度",value:"42 字"},{label:"语气",value:"克制"}],actions:e.jsxs(r,{gap:"xs",wrap:!0,children:[e.jsx(a,{size:"sm",variant:"soft",trailingIcon:e.jsx(g,{}),children:"复制"}),e.jsx(a,{size:"sm",variant:"ghost",trailingIcon:e.jsx(E,{}),children:"编辑"}),e.jsx(a,{size:"sm",variant:"solid",children:"插入"})]}),children:e.jsx("p",{style:o,children:"用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。"})})}],props:[{name:"title",type:"ReactNode",required:!0,description:"生成任务或生成结果标题。"},{name:"status",type:'"pending" | "generating" | "completed" | "failed"',defaultValue:'"pending"',description:"生成状态，默认 pending。"},{name:"description",type:"ReactNode",description:"生成任务说明或结果摘要。"},{name:"meta",type:"ReactNode",description:"右上角补充信息，例如耗时、阶段、时间或错误原因。"},{name:"icon",type:"ReactNode",defaultValue:"由 status 决定",description:"状态图标。未传时根据 status 渲染默认图标。"},{name:"metrics",type:"Array<GenerationCardMetric>",description:"结果指标，例如来源数量、置信度、耗时或 token。"},{name:"actions",type:"ReactNode",description:"操作区，例如复制、采纳、插入、编辑或重试。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许折叠生成结果预览，默认 false。"},{name:"collapsed",type:"boolean",description:"受控折叠状态。"},{name:"defaultCollapsed",type:"boolean",defaultValue:"false",description:"非受控模式下的默认折叠状态。"},{name:"summary",type:"ReactNode",defaultValue:'"查看生成结果"',description:"折叠开关文案。"},{name:"onCollapsedChange",type:"(collapsed: boolean) => void",description:"折叠状态变化时触发。"},{name:"children",type:"ReactNode",description:"生成结果预览或补充内容。"}]});export{O as default};
