import{aO as t,Q as o,g as e,M as n,a0 as a}from"./index-DJhLLKG1.js";import{N as i}from"./index-Epjqc1V_.js";/* empty css              *//* empty css              *//* empty css              */import{d as s}from"./defineDoc-B4WwYA2z.js";const r={display:"grid",gap:"0.9rem",width:"min(100%, 56rem)"},f=s({id:"not-found",name:"NotFound",packageName:"willa/NotFound",description:"用于 404、资源不存在和搜索路径失效等场景的缺省页面。",imports:[{name:"NotFound",from:"willa/NotFound"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/NotFound.css",demo:{name:"NotFound",component:i,props:{actions:t.jsxs(o,{gap:"sm",justify:"center",children:[t.jsx(e,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(e,{size:"sm",variant:"ghost",children:"查看文档"})]})}},code:`
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import { NotFound } from "willa/NotFound";
    import "willa/Button.css";
    import "willa/Group.css";
    import "willa/NotFound.css";

    <NotFound
      actions={
        <Group gap="sm" justify="center">
          <Button size="sm">返回首页</Button>
          <Button size="sm" variant="ghost">
            查看文档
          </Button>
        </Group>
      }
    />;
  `,sections:[{title:"默认 404",code:`
        <NotFound
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
      `,content:t.jsx(i,{actions:t.jsxs(o,{gap:"sm",justify:"center",children:[t.jsx(e,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(e,{size:"sm",variant:"ghost",children:"联系支持"})]})})},{title:"资源不存在",code:`
        <NotFound
          icon={<FileTextIcon />}
          title="文档不存在"
          description="这篇文档可能已被归档，或当前账号没有访问权限。"
          variant="outline"
          footer="检查链接是否完整，或回到文档列表重新选择。"
        />;
      `,content:t.jsx(i,{icon:t.jsx(n,{}),title:"文档不存在",description:"这篇文档可能已被归档，或当前账号没有访问权限。",variant:"outline",footer:"检查链接是否完整，或回到文档列表重新选择。"})},{title:"自定义图片",code:`
        <NotFound
          image={
            <div
              style={{
                width: "min(100%, 48rem)",
                minHeight: "16rem",
                borderRadius: "1.2rem",
                background:
                  "linear-gradient(180deg, #f8fbff 0%, #eff6f2 100%)",
                display: "grid",
                placeItems: "center",
                color: "var(--willa-muted)",
                fontWeight: 700,
              }}
            >
              404 illustration
            </div>
          }
          title="页面迷路了"
          description="你访问的页面可能已经失效，或当前链接不完整。"
          variant="plain"
        />;
      `,content:t.jsx(i,{image:t.jsx("div",{style:{width:"min(100%, 48rem)",minHeight:"16rem",borderRadius:"1.2rem",background:"linear-gradient(180deg, #f8fbff 0%, #eff6f2 100%)",display:"grid",placeItems:"center",color:"var(--willa-muted)",fontWeight:700},children:"404 illustration"}),title:"页面迷路了",description:"你访问的页面可能已经失效，或当前链接不完整。",variant:"plain"})},{title:"左对齐布局",code:`
        <div style={stackStyle}>
          <NotFound
            align="start"
            icon={<MagnifyingGlassIcon />}
            title="没有找到页面"
            description="当前路径没有匹配到任何内容，可以尝试搜索关键词。"
            size="md"
            actions={
              <Group gap="sm">
                <Button size="sm" variant="outline">
                  搜索内容
                </Button>
              </Group>
            }
          />
        </div>;
      `,content:t.jsx("div",{style:r,children:t.jsx(i,{align:"start",icon:t.jsx(a,{}),title:"没有找到页面",description:"当前路径没有匹配到任何内容，可以尝试搜索关键词。",size:"md",actions:t.jsx(o,{gap:"sm",children:t.jsx(e,{size:"sm",variant:"outline",children:"搜索内容"})})})})}],props:[{name:"title",type:"ReactNode",defaultValue:'"404 页面不存在"',description:"404 标题，默认是“404 页面不存在”。"},{name:"description",type:"ReactNode",defaultValue:'"你访问的内容可能已被移动、删除，或暂时不可用。"',description:"404 说明文案。"},{name:"icon",type:"ReactNode",defaultValue:"<NotFoundIllustration />",description:"自定义图标，不传时展示默认 404 图标。"},{name:"image",type:"ReactNode",description:"自定义大图或插画；传入后优先展示 image，不再展示 icon。"},{name:"actions",type:"ReactNode",description:"主要操作区。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',defaultValue:'"soft"',description:"展示样式，继承 EmptyState。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"lg"',description:"组件尺寸，继承 EmptyState。"},{name:"align",type:'"start" | "center"',defaultValue:'"center"',description:"内容对齐方式，继承 EmptyState。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{f as default};
