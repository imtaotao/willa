import{al as e,g as o,Q as n,z as s}from"./index-CQ5SwHlJ.js";import{C as t}from"./index-C29btgLk.js";import{G as i}from"./index-BXLyJRy7.js";import{d as a}from"./defineDoc-BYfb4gho.js";const r={display:"grid",gap:"1rem",width:"min(100%, 56rem)",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)",padding:"1rem"},c={margin:0,lineHeight:1.8},l=()=>e.jsx("div",{style:r,children:e.jsxs("p",{style:c,children:["文档中的引用标记需要足够轻量，既可以作为脚注入口，也可以承载来源状态"," ",e.jsx(t,{size:"xs",label:"组件指南",source:"component.md",index:"1",tone:"info",href:"#"}),"。当内容来自已经核验的资料时，可以用状态标明可信度"," ",e.jsx(t,{size:"xs",label:"架构说明",source:"architecture.md",index:"2",status:"已核验",tone:"success"}),"。"]})}),x=a({id:"citation",name:"Citation",category:"content",packageName:"willa/Citation",description:"用于正文里的来源引用、证据标注和可点击脚注。",imports:[{name:"Citation",from:"willa/Citation"}],css:"willa/Citation.css",demo:{name:"CitationPreview",component:l},code:`
    import { Citation } from "willa/Citation";
    import "willa/Citation.css";

    <p>
      文档中的引用标记需要足够轻量
      <Citation
        size="xs"
        label="组件指南"
        source="component.md"
        index="1"
        tone="info"
        href="#"
      />
    </p>;
  `,sections:[{title:"引用状态",code:`
        <Group gap="sm" wrap>
          <Citation label="来源 1" source="component.md" index="1" href="#" />
          <Citation
            label="已核验"
            source="architecture.md"
            index={<CheckIcon />}
            status="可信"
            tone="success"
            selected
          />
          <Citation
            label="需要确认"
            source="support-log.json"
            index="3"
            status="待核验"
            tone="warning"
          />
        </Group>;
      `,content:e.jsxs(i,{gap:"sm",wrap:!0,children:[e.jsx(t,{label:"来源 1",source:"component.md",index:"1",href:"#"}),e.jsx(t,{label:"已核验",source:"architecture.md",index:e.jsx(o,{}),status:"可信",tone:"success",selected:!0}),e.jsx(t,{label:"需要确认",source:"support-log.json",index:"3",status:"待核验",tone:"warning"})]})},{title:"链接来源",code:`
        <Group gap="sm" wrap>
          <Citation href="https://openai.com/research" index="1" />
          <Citation
            href="https://github.com/openai"
            source="GitHub"
            index="2"
            tone="info"
          />
        </Group>;
      `,content:e.jsxs(i,{gap:"sm",wrap:!0,children:[e.jsx(t,{href:"https://openai.com/research",index:"1"}),e.jsx(t,{href:"https://github.com/openai",source:"GitHub",index:"2",tone:"info"})]})},{title:"带摘要",code:`
        <Citation
          label="上下文命中"
          source="AI 组件规划"
          icon={<MagnifyingGlassIcon />}
          tone="info"
          href="#"
        >
          命中 ChatMessage、MessageList 和 SourceCard 相关规则。
        </Citation>;
      `,content:e.jsx(t,{label:"上下文命中",source:"AI 组件规划",icon:e.jsx(n,{}),tone:"info",href:"#",children:"命中 ChatMessage、MessageList 和 SourceCard 相关规则。"})},{title:"尺寸",code:`
        <Group gap="xs" wrap>
          <Citation size="xs" label="正文引用" source="component.md" index="A" />
          <Citation size="sm" label="来源标签" source="css.md" index="B" />
          <Citation
            size="md"
            label="证据入口"
            source="architecture.md"
            icon={<FileTextIcon />}
            tone="info"
          />
          <Citation
            size="lg"
            label="重点证据"
            source="audit-log.json"
            status="可信"
            tone="success"
          />
        </Group>;
      `,content:e.jsxs(i,{gap:"xs",wrap:!0,children:[e.jsx(t,{size:"xs",label:"正文引用",source:"component.md",index:"A"}),e.jsx(t,{size:"sm",label:"来源标签",source:"css.md",index:"B"}),e.jsx(t,{size:"md",label:"证据入口",source:"architecture.md",icon:e.jsx(s,{}),tone:"info"}),e.jsx(t,{size:"lg",label:"重点证据",source:"audit-log.json",status:"可信",tone:"success"})]})}],props:[{name:"label",type:"ReactNode",description:"引用标题或短文案。未传 label 但传入 href 时，会默认展示链接域名。"},{name:"source",type:"ReactNode",description:"来源名称，例如文件名、知识库名或网页名。"},{name:"index",type:"ReactNode",description:"引用序号或短标记。未传 icon 时展示。"},{name:"status",type:"ReactNode",description:"引用状态，例如已核验、可信、待确认。"},{name:"href",type:"string",description:"引用跳转链接。传入后组件渲染为链接。"},{name:"target",type:"string",description:"链接打开方式，例如 _blank。"},{name:"tone",type:'"neutral" | "info" | "success" | "warning"',description:"引用语义色，默认 neutral。"},{name:"size",type:'"xs" | "sm" | "md" | "lg"',description:"尺寸，默认 md。xs 适合正文内引用，sm/md 适合来源标签，lg 适合重点证据入口。"},{name:"selected",type:"boolean",description:"是否为当前选中的引用。"},{name:"icon",type:"ReactNode",description:"引用图标。优先级高于 index。"},{name:"children",type:"ReactNode",description:"补充摘要或命中片段。"},{name:"onOpen",type:"(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void",description:"点击引用时触发。未传 href 但传 onOpen 时组件渲染为按钮。"}]});export{x as default};
