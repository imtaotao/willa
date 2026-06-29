import{b2 as t,K as i,Y as n,h as e,a7 as a,k as o,R as s}from"./index-BNqLp1iH.js";/* empty css              *//* empty css              */import{d as r}from"./defineDoc-Bvvk0NBK.js";const l={display:"grid",gap:"0.9rem",width:"min(100%, 56rem)"},c={minHeight:"min(22rem, 70vh)",alignContent:"center"},p={display:"inline-flex",alignItems:"center",gap:"0.58rem",padding:"0.54rem 0.72rem",border:"1px solid var(--willa-empty-state-icon-border)",borderRadius:"0.72rem",background:"var(--willa-empty-state-icon-bg)",color:"var(--willa-empty-state-icon-text)",fontFamily:"var(--willa-title-font)",fontWeight:720,lineHeight:1},m={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1.45rem",height:"1.45rem",borderRadius:"0.42rem",background:"var(--willa-panel-bg)"},d=()=>t.jsxs("span",{style:p,"aria-hidden":"true",children:[t.jsx("span",{style:m,children:t.jsx(a,{})}),t.jsx("span",{children:"404"})]}),f=r({id:"empty-state",name:"EmptyState",packageName:"willa/EmptyState",description:"用于列表为空、搜索无结果和 AI 上下文缺失时的空状态提示。",imports:[{name:"EmptyState",from:"willa/EmptyState"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/EmptyState.css",demo:{name:"EmptyState",component:i,props:{icon:t.jsx(a,{}),title:"没有找到结果",description:"换一个关键词，或清空筛选条件后重新搜索。",actions:t.jsxs(n,{gap:"sm",justify:"center",children:[t.jsx(e,{size:"sm",variant:"solid",children:"清空筛选"}),t.jsx(e,{size:"sm",variant:"ghost",children:"新建内容"})]})}},code:`
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
          <Button size="sm" variant="ghost">
            新建内容
          </Button>
        </Group>
      }
    />;
  `,sections:[{title:"搜索无结果",code:`
        <EmptyState
          icon={<MagnifyingGlassIcon />}
          title="没有找到匹配内容"
          description="当前筛选条件过窄，可以减少标签或换一个关键词。"
          actions={
            <Group gap="sm" justify="center">
              <Button size="sm" variant="solid">
                清空筛选
              </Button>
              <Button size="sm" variant="outline">
                保存搜索
              </Button>
            </Group>
          }
        />;
      `,content:t.jsx(i,{icon:t.jsx(a,{}),title:"没有找到匹配内容",description:"当前筛选条件过窄，可以减少标签或换一个关键词。",actions:t.jsxs(n,{gap:"sm",justify:"center",children:[t.jsx(e,{size:"sm",variant:"solid",children:"清空筛选"}),t.jsx(e,{size:"sm",variant:"outline",children:"保存搜索"})]})})},{title:"404 页面",code:`
        <EmptyState
          style={{
            minHeight: "min(22rem, 70vh)",
            alignContent: "center",
          }}
          image={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.58rem",
                padding: "0.54rem 0.72rem",
                border: "1px solid var(--willa-empty-state-icon-border)",
                borderRadius: "0.72rem",
                background: "var(--willa-empty-state-icon-bg)",
                color: "var(--willa-empty-state-icon-text)",
                fontWeight: 720,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.45rem",
                  height: "1.45rem",
                  borderRadius: "0.42rem",
                  background: "var(--willa-panel-bg)",
                }}
              >
                <MagnifyingGlassIcon />
              </span>
              <span>404</span>
            </span>
          }
          title="404 页面不存在"
          description="你访问的内容可能已被移动、删除，或暂时不可用。"
          size="lg"
          actions={
            <Group gap="sm" justify="center">
              <Button size="sm" variant="solid">
                返回首页
              </Button>
              <Button size="sm" variant="ghost">
                联系支持
              </Button>
            </Group>
          }
        />;
      `,content:t.jsx(i,{style:c,image:t.jsx(d,{}),title:"404 页面不存在",description:"你访问的内容可能已被移动、删除，或暂时不可用。",size:"lg",actions:t.jsxs(n,{gap:"sm",justify:"center",children:[t.jsx(e,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(e,{size:"sm",variant:"ghost",children:"联系支持"})]})})},{title:"AI 上下文为空",code:`
        <EmptyState
          align="start"
          icon={<ChatBubbleIcon />}
          title="还没有添加上下文"
          description="上传资料或选择知识库后，助手才能基于你的内容生成回答。"
          variant="outline"
          actions={
            <Group gap="sm">
              <Button size="sm" variant="solid">
                添加资料
              </Button>
              <Button size="sm" variant="ghost">
                选择知识库
              </Button>
            </Group>
          }
          footer="建议优先添加和当前任务直接相关的文档，减少无关噪音。"
        />;
      `,content:t.jsx(i,{align:"start",icon:t.jsx(o,{}),title:"还没有添加上下文",description:"上传资料或选择知识库后，助手才能基于你的内容生成回答。",variant:"outline",actions:t.jsxs(n,{gap:"sm",children:[t.jsx(e,{size:"sm",variant:"solid",children:"添加资料"}),t.jsx(e,{size:"sm",variant:"ghost",children:"选择知识库"})]}),footer:"建议优先添加和当前任务直接相关的文档，减少无关噪音。"})},{title:"自定义图片",code:`
        <EmptyState
          image={
            <img
              src="https://images.unsplash.com/photo-1496483648148-47c686dc86a8?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
          }
          title="这里还没有内容"
          description="你可以先添加资料，也可以从模板开始创建。"
          variant="plain"
          size="lg"
        />;
      `,content:t.jsx(i,{image:t.jsx("img",{src:"https://images.unsplash.com/photo-1496483648148-47c686dc86a8?auto=format&fit=crop&w=1200&q=80",alt:""}),title:"这里还没有内容",description:"你可以先添加资料，也可以从模板开始创建。",variant:"plain",size:"lg"})},{title:"尺寸和样式",code:`
        <div style={rowStyle}>
          <EmptyState
            icon={<FileTextIcon />}
            title="暂无文件"
            description="文件上传后会展示在这里。"
            size="sm"
            variant="plain"
          />
          <EmptyState
            icon={<FileTextIcon />}
            title="资料库为空"
            description="开始添加文档、链接或附件。"
            size="lg"
            variant="soft"
          />
        </div>;
      `,content:t.jsxs("div",{style:l,children:[t.jsx(i,{icon:t.jsx(s,{}),title:"暂无文件",description:"文件上传后会展示在这里。",size:"sm",variant:"plain"}),t.jsx(i,{icon:t.jsx(s,{}),title:"资料库为空",description:"开始添加文档、链接或附件。",size:"lg",variant:"soft"})]})}],props:[{name:"title",type:"ReactNode",required:!0,description:"空状态标题。"},{name:"description",type:"ReactNode",description:"辅助说明文案。"},{name:"icon",type:"ReactNode",description:"展示在标题上方的图标。"},{name:"image",type:"ReactNode",description:"展示在标题上方的大图或插画；传入后优先展示 image。"},{name:"actions",type:"ReactNode",description:"主要操作区，通常放 Button。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',defaultValue:'"soft"',description:"空状态样式。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"空状态尺寸。"},{name:"align",type:'"start" | "center"',defaultValue:'"center"',description:"内容对齐方式。"},{name:"compact",type:"boolean",defaultValue:"false",description:"是否使用更轻量的内嵌状态布局，适合表格或列表内部。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{f as default};
