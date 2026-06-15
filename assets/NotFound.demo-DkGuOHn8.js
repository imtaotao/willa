import{at as t,E as y,aj as j,S as s,K as o,c as i,G as h}from"./index-Cw1JahyG.js";/* empty css              *//* empty css              *//* empty css              */import{d as x}from"./defineDoc-dA2rUq-z.js";function e(a){const{title:r="404 页面不存在",description:d="你访问的内容可能已被移动、删除，或暂时不可用。",icon:c=t.jsx(v,{}),image:n,actions:l,footer:m,variant:p="soft",size:u="lg",align:f="center",className:g,children:N}=a;return t.jsx(y,{className:j("willa-not-found",g),icon:n?void 0:c,image:n,title:r,description:d,actions:l,footer:m,variant:p,size:u,align:f,children:N})}function v(){return t.jsxs("span",{className:"willa-not-found-badge","aria-hidden":"true",children:[t.jsx("span",{className:"willa-not-found-badge-icon",children:t.jsx(s,{})}),t.jsx("span",{className:"willa-not-found-badge-code",children:"404"})]})}const w={display:"grid",gap:"0.9rem",width:"min(100%, 56rem)"},b=x({id:"not-found",name:"NotFound",packageName:"willa/NotFound",description:"用于 404、资源不存在和搜索路径失效等场景的缺省页面。",imports:[{name:"NotFound",from:"willa/NotFound"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/NotFound.css",demo:{name:"NotFound",component:e,props:{actions:t.jsxs(o,{gap:"sm",justify:"center",children:[t.jsx(i,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(i,{size:"sm",variant:"ghost",children:"查看文档"})]})}},code:`
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
      `,content:t.jsx(e,{actions:t.jsxs(o,{gap:"sm",justify:"center",children:[t.jsx(i,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(i,{size:"sm",variant:"ghost",children:"联系支持"})]})})},{title:"资源不存在",code:`
        <NotFound
          icon={<FileTextIcon />}
          title="文档不存在"
          description="这篇文档可能已被归档，或当前账号没有访问权限。"
          variant="outline"
          footer="检查链接是否完整，或回到文档列表重新选择。"
        />;
      `,content:t.jsx(e,{icon:t.jsx(h,{}),title:"文档不存在",description:"这篇文档可能已被归档，或当前账号没有访问权限。",variant:"outline",footer:"检查链接是否完整，或回到文档列表重新选择。"})},{title:"自定义图片",code:`
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
      `,content:t.jsx(e,{image:t.jsx("div",{style:{width:"min(100%, 48rem)",minHeight:"16rem",borderRadius:"1.2rem",background:"linear-gradient(180deg, #f8fbff 0%, #eff6f2 100%)",display:"grid",placeItems:"center",color:"var(--willa-muted)",fontWeight:700},children:"404 illustration"}),title:"页面迷路了",description:"你访问的页面可能已经失效，或当前链接不完整。",variant:"plain"})},{title:"左对齐布局",code:`
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
      `,content:t.jsx("div",{style:w,children:t.jsx(e,{align:"start",icon:t.jsx(s,{}),title:"没有找到页面",description:"当前路径没有匹配到任何内容，可以尝试搜索关键词。",size:"md",actions:t.jsx(o,{gap:"sm",children:t.jsx(i,{size:"sm",variant:"outline",children:"搜索内容"})})})})}],props:[{name:"title",type:"ReactNode",description:"404 标题，默认是“404 页面不存在”。"},{name:"description",type:"ReactNode",description:"404 说明文案。"},{name:"icon",type:"ReactNode",description:"自定义图标，不传时展示默认 404 图标。"},{name:"image",type:"ReactNode",description:"自定义大图或插画；传入后优先展示 image，不再展示 icon。"},{name:"actions",type:"ReactNode",description:"主要操作区。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',description:"展示样式，继承 EmptyState。"},{name:"size",type:'"sm" | "md" | "lg"',description:"组件尺寸，继承 EmptyState。"},{name:"align",type:'"start" | "center"',description:"内容对齐方式，继承 EmptyState。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{b as default};
