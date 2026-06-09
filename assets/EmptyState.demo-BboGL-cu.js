import{ae as t,O as o,d as a,x as n}from"./index-Dn8mGTzM.js";import{B as i}from"./index-DCbHg8ts.js";import{E as e}from"./index-BcBTewyv.js";import{G as s}from"./index-Cc9O5CYB.js";/* empty css              */import{d as r}from"./defineDoc-BXkZWhLB.js";import"./heading-CRPk0DTc.js";const p={display:"grid",gap:"0.9rem",width:"100%"},f=r({id:"empty-state",name:"EmptyState",packageName:"willa/EmptyState",description:"用于列表为空、搜索无结果和 AI 上下文缺失时的空状态提示。",imports:[{name:"EmptyState",from:"willa/EmptyState"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/EmptyState.css",demo:{name:"EmptyState",component:e,props:{icon:t.jsx(o,{}),title:"没有找到结果",description:"换一个关键词，或清空筛选条件后重新搜索。",actions:t.jsxs(s,{gap:"sm",justify:"center",children:[t.jsx(i,{size:"sm",variant:"solid",children:"清空筛选"}),t.jsx(i,{size:"sm",variant:"ghost",children:"新建内容"})]})}},code:`
    import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { EmptyState } from "willa/EmptyState";
    import { Group } from "willa/Group";
    import "willa/Button.css";
    import "willa/EmptyState.css";
    import "willa/Group.css";

    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="没有找到结果"
      description="换一个关键词，或清空筛选条件后重新搜索。"
      actions={
        <Group gap="sm">
          <Button size="sm">清空筛选</Button>
          <Button size="sm" variant="ghost">新建内容</Button>
        </Group>
      }
    />
  `,sections:[{title:"搜索无结果",content:t.jsx(e,{icon:t.jsx(o,{}),title:"没有找到匹配内容",description:"当前筛选条件过窄，可以减少标签或换一个关键词。",actions:t.jsxs(s,{gap:"sm",justify:"center",children:[t.jsx(i,{size:"sm",variant:"solid",children:"清空筛选"}),t.jsx(i,{size:"sm",variant:"outline",children:"保存搜索"})]})})},{title:"AI 上下文为空",content:t.jsx(e,{align:"start",icon:t.jsx(a,{}),title:"还没有添加上下文",description:"上传资料或选择知识库后，助手才能基于你的内容生成回答。",variant:"outline",actions:t.jsxs(s,{gap:"sm",children:[t.jsx(i,{size:"sm",variant:"solid",children:"添加资料"}),t.jsx(i,{size:"sm",variant:"ghost",children:"选择知识库"})]}),footer:"建议优先添加和当前任务直接相关的文档，减少无关噪音。"})},{title:"尺寸和样式",content:t.jsxs("div",{style:p,children:[t.jsx(e,{icon:t.jsx(n,{}),title:"暂无文件",description:"文件上传后会展示在这里。",size:"sm",variant:"plain"}),t.jsx(e,{icon:t.jsx(n,{}),title:"资料库为空",description:"开始添加文档、链接或附件。",size:"lg",variant:"soft"})]})}],props:[{name:"title",type:"ReactNode",required:!0,description:"空状态标题。"},{name:"description",type:"ReactNode",description:"辅助说明文案。"},{name:"icon",type:"ReactNode",description:"展示在标题上方的图标。"},{name:"actions",type:"ReactNode",description:"主要操作区，通常放 Button。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',description:"空状态样式。"},{name:"size",type:'"sm" | "md" | "lg"',description:"空状态尺寸。"},{name:"align",type:'"start" | "center"',description:"内容对齐方式。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{f as default};
