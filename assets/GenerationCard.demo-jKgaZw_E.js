import{l as e,p as t,u as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{B as r,H as i,S as a,Y as o,b as s,l as c,tt as l,u}from"./react-icons.esm-mVdwEXuX.js";import{t as d}from"./Button-O1aY2iqB.js";import{t as f}from"./CopyButton-C1ewKp_k.js";import{t as p}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as m}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import"./style-BRUHMZEC.js";import{n as h,t as g}from"./cardCollapse-BiVTb1xI.js";var _=t(n()),v=e();function y({title:e,status:t=`pending`,description:n,meta:r,icon:i,metrics:a,actions:o,children:s,collapsible:c=!1,collapsed:l,defaultCollapsed:u=!1,summary:d,onCollapsedChange:f,className:p,...m}){let y=a!==void 0&&a.length>0,{canCollapse:S,isCollapsed:C,resolvedSummary:w,toggleCollapsed:T}=h({collapsible:c,collapsed:l,defaultCollapsed:u,hasContent:!!s,summary:d,defaultSummary:`查看生成结果`,onCollapsedChange:f});return(0,v.jsxs)(`section`,{...m,className:(0,_.default)(`willa-generation-card`,`willa-generation-card--${t}`,S&&`willa-generation-card--collapsible`,C&&`willa-generation-card--collapsed`,p),"data-status":t,children:[(0,v.jsxs)(`div`,{className:`willa-generation-card-header`,children:[(0,v.jsx)(`span`,{className:`willa-generation-card-mark`,"aria-hidden":`true`,children:i??(0,v.jsx)(b,{status:t})}),(0,v.jsxs)(`div`,{className:`willa-generation-card-heading`,children:[(0,v.jsxs)(`div`,{className:`willa-generation-card-title-row`,children:[(0,v.jsx)(`h3`,{className:`willa-generation-card-title`,children:e}),(0,v.jsx)(`span`,{className:`willa-generation-card-status`,children:x[t]})]}),n?(0,v.jsx)(`div`,{className:`willa-generation-card-description`,children:n}):null]}),r?(0,v.jsx)(`div`,{className:`willa-generation-card-meta`,children:r}):null]}),S?(0,v.jsx)(g,{className:`willa-generation-card-toggle`,textClassName:`willa-generation-card-toggle-text`,iconClassName:`willa-generation-card-toggle-icon`,summary:w,expanded:!C,onClick:T}):null,s&&!C?(0,v.jsx)(`div`,{className:`willa-generation-card-content`,children:s}):null,y||o?(0,v.jsxs)(`div`,{className:`willa-generation-card-footer`,children:[y?(0,v.jsx)(`dl`,{className:`willa-generation-card-metrics`,children:a.map((e,t)=>(0,v.jsxs)(`div`,{className:`willa-generation-card-metric`,children:[(0,v.jsx)(`dt`,{children:e.label}),(0,v.jsx)(`dd`,{children:e.value})]},t))}):null,o?(0,v.jsx)(`div`,{className:`willa-generation-card-actions`,children:o}):null]}):null]})}var b=({status:e})=>e===`completed`?(0,v.jsx)(c,{}):e===`failed`?(0,v.jsx)(a,{}):e===`generating`?(0,v.jsx)(r,{}):(0,v.jsx)(i,{}),x={pending:`等待生成`,generating:`生成中`,completed:`已生成`,failed:`生成失败`};y.displayName=`GenerationCard`;var S={display:`grid`,gap:`0.82rem`,width:`min(100%, 58rem)`},C={margin:0},w=m({id:`generation-card`,name:`GenerationCard`,category:`ai`,packageName:`willa/GenerationCard`,description:`用于展示 AI 生成任务的状态、结果摘要、指标和后续操作。`,imports:[{name:`GenerationCard`,from:`willa/GenerationCard`}],css:`willa/GenerationCard.css`,demo:{name:`GenerationCardPreview`,component:()=>(0,v.jsx)(`div`,{style:S,children:(0,v.jsx)(y,{collapsible:!0,defaultCollapsed:!0,title:`产品反馈摘要`,status:`completed`,description:`从 128 条用户反馈中生成可直接进入周报的摘要。`,meta:`刚刚`,summary:`隐藏生成正文，只保留状态、指标和操作。`,metrics:[{label:`来源`,value:`128 条`},{label:`置信`,value:`高`},{label:`耗时`,value:`4.2s`}],actions:(0,v.jsxs)(p,{gap:`xs`,wrap:!0,children:[(0,v.jsx)(f,{icon:(0,v.jsx)(s,{}),size:`sm`,text:`本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。建议优先处理导出失败兜底，其次优化批量任务进度提示。`,children:`复制`}),(0,v.jsx)(d,{size:`sm`,variant:`solid`,trailingIcon:(0,v.jsx)(u,{}),children:`采纳`})]}),children:(0,v.jsx)(`p`,{style:C,children:`本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。建议优先处理导出失败兜底，其次优化批量任务进度提示。`})})})},code:`
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
  `,sections:[{title:`折叠结果`,code:`
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
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。"
              >
                复制
              </CopyButton>
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
      `,content:(0,v.jsx)(y,{collapsible:!0,defaultCollapsed:!0,title:`客服回复草稿`,status:`completed`,description:`已生成可人工确认后发送的回复。`,summary:`查看生成正文`,metrics:[{label:`语气`,value:`克制`},{label:`风险`,value:`低`}],actions:(0,v.jsxs)(p,{gap:`xs`,wrap:!0,children:[(0,v.jsx)(f,{icon:(0,v.jsx)(s,{}),size:`sm`,text:`我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。`,children:`复制`}),(0,v.jsx)(d,{size:`sm`,variant:`solid`,children:`采纳`})]}),children:(0,v.jsx)(`p`,{style:C,children:`我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。`})})},{title:`生成状态`,code:`
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
      `,content:(0,v.jsxs)(`div`,{style:S,children:[(0,v.jsx)(y,{title:`生成发布说明`,status:`generating`,description:`正在合并 commit、issue 和手写补充说明。`,meta:`2/4`,metrics:[{label:`已读取`,value:`18 条`},{label:`阶段`,value:`整理中`}],children:(0,v.jsx)(`p`,{style:C,children:`正在提取破坏性变更、功能亮点和迁移提示。`})}),(0,v.jsx)(y,{title:`生成竞品分析`,status:`pending`,description:`任务已经进入队列，等待上一个生成请求完成。`,meta:`排队中`}),(0,v.jsx)(y,{title:`生成长文大纲`,status:`failed`,description:`上下文里缺少目标读者和发布渠道，需要补充任务约束。`,meta:`缺少输入`,actions:(0,v.jsxs)(p,{gap:`xs`,wrap:!0,children:[(0,v.jsx)(d,{size:`sm`,variant:`soft`,trailingIcon:(0,v.jsx)(l,{}),children:`重试`}),(0,v.jsx)(d,{size:`sm`,variant:`ghost`,children:`补充上下文`})]})})]})},{title:`结果操作`,code:`
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
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。"
              >
                复制
              </CopyButton>
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
      `,content:(0,v.jsx)(y,{title:`首页文案候选`,status:`completed`,description:`适合直接用于产品首屏的短文案。`,icon:(0,v.jsx)(i,{}),metrics:[{label:`长度`,value:`42 字`},{label:`语气`,value:`克制`}],actions:(0,v.jsxs)(p,{gap:`xs`,wrap:!0,children:[(0,v.jsx)(f,{icon:(0,v.jsx)(s,{}),size:`sm`,text:`用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。`,children:`复制`}),(0,v.jsx)(d,{size:`sm`,variant:`ghost`,trailingIcon:(0,v.jsx)(o,{}),children:`编辑`}),(0,v.jsx)(d,{size:`sm`,variant:`solid`,children:`插入`})]}),children:(0,v.jsx)(`p`,{style:C,children:`用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。`})})}],props:[{name:`title`,type:`ReactNode`,required:!0,description:`生成任务或生成结果标题。`},{name:`status`,type:`"pending" | "generating" | "completed" | "failed"`,defaultValue:`"pending"`,description:`生成状态，默认 pending。`},{name:`description`,type:`ReactNode`,description:`生成任务说明或结果摘要。`},{name:`meta`,type:`ReactNode`,description:`右上角补充信息，例如耗时、阶段、时间或错误原因。`},{name:`icon`,type:`ReactNode`,defaultValue:`由 status 决定`,description:`状态图标。未传时根据 status 渲染默认图标。`},{name:`metrics`,type:`Array<GenerationCardMetric>`,description:`结果指标，例如来源数量、置信度、耗时或 token。`},{name:`actions`,type:`ReactNode`,description:`操作区，例如复制、采纳、插入、编辑或重试。`},{name:`collapsible`,type:`boolean`,defaultValue:`false`,description:`是否允许折叠生成结果预览，默认 false。`},{name:`collapsed`,type:`boolean`,description:`受控折叠状态。`},{name:`defaultCollapsed`,type:`boolean`,defaultValue:`false`,description:`非受控模式下的默认折叠状态。`},{name:`summary`,type:`ReactNode`,defaultValue:`"查看生成结果"`,description:`折叠开关文案。`},{name:`onCollapsedChange`,type:`(collapsed: boolean) => void`,description:`折叠状态变化时触发。`},{name:`children`,type:`ReactNode`,description:`生成结果预览或补充内容。`}]});export{w as default};