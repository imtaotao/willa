import{ae as t,a6 as x,O as n,x as j}from"./index-Dn8mGTzM.js";import{B as o}from"./index-DCbHg8ts.js";import{G as i}from"./index-Cc9O5CYB.js";import{E as g}from"./index-BcBTewyv.js";/* empty css              */import{d as y}from"./defineDoc-BXkZWhLB.js";import"./heading-CRPk0DTc.js";function e(s){const{title:a="404 页面不存在",description:r="你访问的内容可能已被移动、删除，或暂时不可用。",icon:c=t.jsx(h,{}),actions:l,footer:d,variant:m="soft",size:p="lg",align:u="center",className:f,children:N}=s;return t.jsx(g,{className:x("willa-not-found",f),icon:c,title:a,description:r,actions:l,footer:d,variant:m,size:p,align:u,children:N})}function h(){return t.jsxs("span",{className:"willa-not-found-badge","aria-hidden":"true",children:[t.jsx("span",{className:"willa-not-found-badge-icon",children:t.jsx(n,{})}),t.jsx("span",{className:"willa-not-found-badge-code",children:"404"})]})}const w={display:"grid",gap:"0.9rem",width:"100%"},S=y({id:"not-found",name:"NotFound",packageName:"willa/NotFound",description:"用于 404、资源不存在和搜索路径失效等场景的缺省页面。",imports:[{name:"NotFound",from:"willa/NotFound"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/NotFound.css",demo:{name:"NotFound",component:e,props:{actions:t.jsxs(i,{gap:"sm",justify:"center",children:[t.jsx(o,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(o,{size:"sm",variant:"ghost",children:"查看文档"})]})}},code:`
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
          <Button size="sm" variant="ghost">查看文档</Button>
        </Group>
      }
    />
  `,sections:[{title:"默认 404",content:t.jsx(e,{actions:t.jsxs(i,{gap:"sm",justify:"center",children:[t.jsx(o,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(o,{size:"sm",variant:"ghost",children:"联系支持"})]})})},{title:"资源不存在",content:t.jsx(e,{icon:t.jsx(j,{}),title:"文档不存在",description:"这篇文档可能已被归档，或当前账号没有访问权限。",variant:"outline",footer:"检查链接是否完整，或回到文档列表重新选择。"})},{title:"左对齐布局",content:t.jsx("div",{style:w,children:t.jsx(e,{align:"start",icon:t.jsx(n,{}),title:"没有找到页面",description:"当前路径没有匹配到任何内容，可以尝试搜索关键词。",size:"md",actions:t.jsx(i,{gap:"sm",children:t.jsx(o,{size:"sm",variant:"outline",children:"搜索内容"})})})})}],props:[{name:"title",type:"ReactNode",description:"404 标题，默认是“404 页面不存在”。"},{name:"description",type:"ReactNode",description:"404 说明文案。"},{name:"icon",type:"ReactNode",description:"自定义图标，不传时展示默认 404 图标。"},{name:"actions",type:"ReactNode",description:"主要操作区。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',description:"展示样式，继承 EmptyState。"},{name:"size",type:'"sm" | "md" | "lg"',description:"组件尺寸，继承 EmptyState。"},{name:"align",type:'"start" | "center"',description:"内容对齐方式，继承 EmptyState。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{S as default};
