import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{G as i,H as a,et as o}from"./react-icons.esm-mVdwEXuX.js";import{t as s}from"./Button-O1aY2iqB.js";import{t as c}from"./Group-C-JhzSsC.js";import{a as l}from"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";import{t as d}from"./AttachmentList-3Pi-bh0P.js";import"./style-D3eq1OTT.js";import{t as f}from"./style-DIU7lNfN.js";import{t as p}from"./style-BlxcbEjF.js";var m=n(e(),1),h=n(r()),g=t();function _(e){let{header:t,model:n,tools:r,attachments:i,attachmentListProps:a,actions:o,footer:s,id:c,role:l,style:u,inputClassName:p,inputStyle:m,className:_,...y}=e,b=v(t),x=v(n)||v(r),S=i!==void 0&&i.length>0;return(0,g.jsxs)(`section`,{id:c,className:(0,h.default)(`willa-composer`,_),style:u,role:l,children:[b||x?(0,g.jsxs)(`div`,{className:`willa-composer-header`,children:[b||n?(0,g.jsxs)(`div`,{className:`willa-composer-meta`,children:[b?(0,g.jsx)(`div`,{className:`willa-composer-title`,children:t}):null,n?(0,g.jsx)(`div`,{className:`willa-composer-model`,children:n}):null]}):null,r?(0,g.jsx)(`div`,{className:`willa-composer-tools`,children:r}):null]}):null,S?(0,g.jsx)(`div`,{className:`willa-composer-attachments`,children:(0,g.jsx)(d,{items:i,...a})}):null,(0,g.jsx)(f,{...y,className:(0,h.default)(`willa-composer-input`,p),style:m,actions:o,footer:s})]})}var v=e=>e!=null&&e!==!1;_.displayName=`Composer`;var y={display:`grid`,gap:`0.85rem`,width:`min(100%, 56rem)`},b={color:`var(--willa-text-soft)`,fontSize:`0.84rem`,lineHeight:1.45},x={display:`grid`,gap:`0.16rem`},S={color:`var(--willa-text-soft)`,fontSize:`0.78rem`,fontWeight:400,lineHeight:1.4},C=u({id:`composer`,name:`Composer`,category:`ai`,packageName:`willa/Composer`,description:`用于 AI 对话和任务执行的高阶输入组合，承载模型、工具、附件和 PromptInput。`,imports:[{name:`Composer`,from:`willa/Composer`}],css:`willa/Composer.css`,demo:{name:`ComposerPreview`,component:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(`暂无提交内容`);return(0,g.jsxs)(`div`,{style:y,children:[(0,g.jsx)(p,{size:`sm`,items:[{id:`priority`,label:`整理优先级`},{id:`risk`,label:`提取风险`},{id:`summary`,label:`生成摘要`}],onSelect:e=>t(String(e.label))}),(0,g.jsx)(_,{value:e,header:(0,g.jsxs)(`span`,{style:x,children:[(0,g.jsx)(`span`,{children:`产品反馈分析`}),(0,g.jsx)(`span`,{style:S,children:`从用户反馈中提取优先级和风险`})]}),model:(0,g.jsx)(l,{tone:`info`,children:`Willa AI Pro`}),tools:(0,g.jsxs)(c,{gap:`xs`,children:[(0,g.jsx)(s,{size:`sm`,variant:`ghost`,icon:(0,g.jsx)(o,{}),children:`阅读`}),(0,g.jsx)(s,{size:`sm`,variant:`ghost`,icon:(0,g.jsx)(i,{}),children:`推理`})]}),attachments:[{id:`feedback`,name:`feedback.csv`,meta:`12 KB`,href:`data:text/csv;charset=utf-8,id,feedback%0A1,%E5%B8%8C%E6%9C%9B%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%87%BA%E6%9B%B4%E5%BF%AB`,downloadName:`feedback.csv`},{id:`roadmap`,name:`roadmap.md`,meta:`8 KB`,href:`data:text/markdown;charset=utf-8,%23%20Roadmap%0A%0A- AI%20Composer%0A- Message%20actions`,downloadName:`roadmap.md`}],actions:(0,g.jsx)(s,{size:`sm`,variant:`ghost`,icon:(0,g.jsx)(a,{}),children:`优化`}),footer:`已连接 2 个上下文，Enter 发送`,minRows:3,placeholder:`让 AI 帮我分析这些反馈的优先级...`,onChange:e=>t(e.currentTarget.value),onSubmit:e=>{r(e),t(``)}}),(0,g.jsx)(`div`,{style:b,children:n})]})}},code:`
    import { Composer } from "willa/Composer";
    import { SuggestionChips } from "willa/SuggestionChips";
    import "willa/Composer.css";
    import "willa/SuggestionChips.css";

    <>
      <SuggestionChips
        items={[
          { id: "priority", label: "整理优先级" },
          { id: "risk", label: "提取风险" },
        ]}
      />
      <Composer
        header="产品分析助手"
        model="Willa AI Pro"
        attachments={[
          { id: "feedback", name: "feedback.csv", href: "/feedback.csv" },
        ]}
        footer="已连接 2 个上下文，Enter 发送"
        placeholder="让 AI 帮我分析这些反馈的优先级..."
        onSubmit={(prompt) => console.log(prompt)}
      />
    </>;
  `,sections:[{title:`紧凑输入`,code:`
        <div style={stackStyle}>
          <Composer
            footer="适合只需要输入和提交的场景"
            actions={
              <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
                优化
              </Button>
            }
            placeholder="输入任务目标..."
          />
        </div>;
      `,content:(0,g.jsx)(`div`,{style:y,children:(0,g.jsx)(_,{footer:`适合只需要输入和提交的场景`,actions:(0,g.jsx)(s,{size:`sm`,variant:`ghost`,icon:(0,g.jsx)(a,{}),children:`优化`}),placeholder:`输入任务目标...`})})},{title:`提交状态`,code:`
        <div style={stateGridStyle}>
          <Composer
            loading
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            footer="正在发送请求"
            minRows={2}
          />
          <Composer disabled minRows={2} placeholder="当前会话不可输入" />
        </div>;
      `,content:(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`0.85rem`,width:`min(100%, 56rem)`},children:[(0,g.jsx)(_,{loading:!0,defaultValue:`分析最近 7 天用户反馈里的高频问题。`,footer:`正在发送请求`,minRows:2}),(0,g.jsx)(_,{disabled:!0,minRows:2,placeholder:`当前会话不可输入`})]})}],props:[{name:`header`,type:`ReactNode`,description:`输入台顶部标题或说明。`},{name:`model`,type:`ReactNode`,description:`模型、模式或知识库选择区域。`},{name:`tools`,type:`ReactNode`,description:`工具入口，例如搜索、读取文件、推理模式等。`},{name:`attachments`,type:`Array<AttachmentListItem>`,description:`上下文附件数据。Composer 会通过 AttachmentList 渲染附件区域。`},{name:`attachmentListProps`,type:`Omit<AttachmentListProps, "items">`,description:`传给内部 AttachmentList 的配置。`},{name:`actions`,type:`ReactNode`,description:`输入框内提交按钮前的操作区。`},{name:`footer`,type:`ReactNode`,description:`输入框底部辅助信息。`},{name:`value`,type:`string`,description:`受控输入值，继承 PromptInput 语义。`},{name:`defaultValue`,type:`string`,defaultValue:`""`,description:`非受控默认输入值。`},{name:`onSubmit`,type:`(value: string, event: PromptInputSubmitEvent) => void`,description:`提交提示词时触发。`},{name:`inputClassName`,type:`string`,description:`传给内部 PromptInput 的 className。`},{name:`allowEmptySubmit`,type:`boolean`,description:`是否允许空内容提交。`},{name:`autoResize`,type:`boolean`,description:`是否自动高度。`},{name:`beforeInput`,type:`ReactNode`,description:`内部输入框前置内容。`},{name:`className`,type:`string`,description:`自定义 className。`},{name:`id`,type:`string`,description:`元素 id。`},{name:`inputStyle`,type:`CSSProperties`,description:`输入区域样式。`},{name:`loading`,type:`boolean`,description:`是否展示加载态。`},{name:`maxRows`,type:`number`,description:`行数限制。`},{name:`minRows`,type:`number`,description:`行数限制。`},{name:`onValueChange`,type:`((value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void)`,description:`对应事件回调。`},{name:`role`,type:`AriaRole`,description:`无障碍角色。`},{name:`size`,type:`PromptInputSize`,description:`尺寸。`},{name:`slotClassNames`,type:`InputPanelSlotClassNames`,description:`插槽样式。`},{name:`style`,type:`CSSProperties`,description:`自定义内联样式。`},{name:`submitButton`,type:`ReactNode`,description:`提交按钮。`},{name:`submitIcon`,type:`ReactNode`,description:`提交图标。`},{name:`submitLabel`,type:`ReactNode`,description:`文案标签。`},{name:`submitOnEnter`,type:`boolean`,description:`回车时提交。`},{name:`submitShortcut`,type:`"enter" | "mod-enter" | "none"`,description:`内部 PromptInput 的提交快捷键。未传时会根据 submitOnEnter 推导。`},{name:`mentionLabel`,type:`ReactNode`,defaultValue:`"@"`,description:`内部 PromptInput 的提及入口按钮内容。`},{name:`mentionTriggers`,type:`Array<string>`,defaultValue:`["@","#","$"]`,description:`内部 PromptInput 支持的提及触发字符集合。`},{name:`users`,type:`Array<MentionInputMentionItem>`,description:`用于 @ 提及的候选项。`},{name:`resources`,type:`Array<MentionInputMentionItem>`,description:`用于 # 提及的候选项。`},{name:`variables`,type:`Array<MentionInputMentionItem>`,description:`用于 $ 提及的候选项。`},{name:`mentionSources`,type:`Array<MentionInputTriggerSource>`,description:`按触发符自定义内部 PromptInput 的提及源与候选。`},{name:`mentionOptions`,type:`Array<MentionInputMentionItem>`,description:`完整自定义提及候选项，优先级高于 users/resources/variables。`},{name:`mentionMaxSuggestions`,type:`number`,defaultValue:`6`,description:`默认提及候选列表的展示上限。`},{name:`mentionListProps`,type:`MentionInputMentionListProps`,description:`默认提及列表复用 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange 等。`},{name:`onMentionQuery`,type:`(context: MentionInputMentionContext | null) => void`,description:`内部 PromptInput 的提及输入变化回调。`},{name:`renderMentionOptions`,type:`(context: { trigger: string; query: string; start: number; end: number }, options: Array<MentionInputMentionItem>, onSelect: (item: MentionInputMentionItem) => void) => ReactNode`,description:`覆盖内部 PromptInput 的默认提及列表渲染。`},{name:`renderMentionItem`,type:`(context: { trigger: string; query: string; start: number; end: number }, item: MentionInputMentionItem, onSelect: (item: MentionInputMentionItem) => void) => ReactNode`,description:`覆盖内部 PromptInput 的单条提及项渲染。`},{name:`onMentionClick`,type:`() => void`,description:`点击内部 PromptInput 的提及入口按钮时触发。`}]});export{C as default};