import{ah as t,a9 as g,P as e,y}from"./index-C2E4XHzt.js";import{B as o}from"./index-3DZYmbrW.js";import{G as n}from"./index-C5vMp9Up.js";import{E as j}from"./index-LBU_xAJC.js";/* empty css              *//* empty css              */import{d as x}from"./defineDoc-5r0NM0Fx.js";import"./heading-BzvB6qDP.js";function i(s){const{title:a="404 页面不存在",description:r="你访问的内容可能已被移动、删除，或暂时不可用。",icon:c=t.jsx(h,{}),actions:l,footer:d,variant:m="soft",size:p="lg",align:u="center",className:f,children:N}=s;return t.jsx(j,{className:g("willa-not-found",f),icon:c,title:a,description:r,actions:l,footer:d,variant:m,size:p,align:u,children:N})}function h(){return t.jsxs("span",{className:"willa-not-found-badge","aria-hidden":"true",children:[t.jsx("span",{className:"willa-not-found-badge-icon",children:t.jsx(e,{})}),t.jsx("span",{className:"willa-not-found-badge-code",children:"404"})]})}const F={display:"grid",gap:"0.9rem",width:"min(100%, 56rem)"},I=x({id:"not-found",name:"NotFound",packageName:"willa/NotFound",description:"用于 404、资源不存在和搜索路径失效等场景的缺省页面。",imports:[{name:"NotFound",from:"willa/NotFound"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/NotFound.css",demo:{name:"NotFound",component:i,props:{actions:t.jsxs(n,{gap:"sm",justify:"center",children:[t.jsx(o,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(o,{size:"sm",variant:"ghost",children:"查看文档"})]})}},code:`
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
      `,content:t.jsx(i,{actions:t.jsxs(n,{gap:"sm",justify:"center",children:[t.jsx(o,{size:"sm",variant:"solid",children:"返回首页"}),t.jsx(o,{size:"sm",variant:"ghost",children:"联系支持"})]})})},{title:"资源不存在",code:`
        <NotFound
          icon={<FileTextIcon />}
          title="文档不存在"
          description="这篇文档可能已被归档，或当前账号没有访问权限。"
          variant="outline"
          footer="检查链接是否完整，或回到文档列表重新选择。"
        />;
      `,content:t.jsx(i,{icon:t.jsx(y,{}),title:"文档不存在",description:"这篇文档可能已被归档，或当前账号没有访问权限。",variant:"outline",footer:"检查链接是否完整，或回到文档列表重新选择。"})},{title:"左对齐布局",code:`
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
      `,content:t.jsx("div",{style:F,children:t.jsx(i,{align:"start",icon:t.jsx(e,{}),title:"没有找到页面",description:"当前路径没有匹配到任何内容，可以尝试搜索关键词。",size:"md",actions:t.jsx(n,{gap:"sm",children:t.jsx(o,{size:"sm",variant:"outline",children:"搜索内容"})})})})}],props:[{name:"title",type:"ReactNode",description:"404 标题，默认是“404 页面不存在”。"},{name:"description",type:"ReactNode",description:"404 说明文案。"},{name:"icon",type:"ReactNode",description:"自定义图标，不传时展示默认 404 图标。"},{name:"actions",type:"ReactNode",description:"主要操作区。"},{name:"footer",type:"ReactNode",description:"底部补充说明。"},{name:"variant",type:'"plain" | "soft" | "outline"',description:"展示样式，继承 EmptyState。"},{name:"size",type:'"sm" | "md" | "lg"',description:"组件尺寸，继承 EmptyState。"},{name:"align",type:'"start" | "center"',description:"内容对齐方式，继承 EmptyState。"},{name:"className",type:"string",description:"外层 className。"},{name:"children",type:"ReactNode",description:"自定义主体内容。"}]});export{I as default};
