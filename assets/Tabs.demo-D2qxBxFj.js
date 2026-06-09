import{af as e,a2 as s,m as n,x as c,d as o,ah as r,B as d}from"./index-BLA7imve.js";import{d as m}from"./defineDoc-C8h5INCj.js";const a=[{value:"overview",label:"概览",children:"用标签把同一上下文下的内容分组，减少页面里的纵向堆叠。"},{value:"usage",label:"使用方式",children:"适合文章示例、参数说明、资源信息和多版本内容切换。"},{value:"notes",label:"注意事项",children:"标签文案应保持短句，内容区域只承载当前选中标签的信息。"}],l=[{value:"react",label:"React",icon:e.jsx(n,{}),children:e.jsx("p",{children:"在内容页中展示 React 示例，可以把安装、基础代码和样式导入拆成标签。"})},{value:"css",label:"CSS",icon:e.jsx(c,{}),children:e.jsxs("p",{children:["单组件样式通过 ",e.jsx("code",{children:"willa/Tabs.css"})," 引入，主题变量来自 content 包。"]})},{value:"disabled",label:"待补充",icon:e.jsx(o,{}),disabled:!0,children:"这个面板不会被选中。"}],p=()=>{const[t,i]=r.useState("draft");return e.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[e.jsxs(d,{tone:"info",children:["当前：",t]}),e.jsx(s,{value:t,onValueChange:i,items:[{value:"draft",label:"草稿",children:"保存还没有发布的内容提纲。"},{value:"review",label:"审核",children:"集中查看需要修改或确认的信息。"},{value:"published",label:"已发布",children:"展示已经对外可见的内容版本。"}]})]})},h=m({id:"tabs",name:"Tabs",packageName:"willa/Tabs",description:"用于在同一上下文里切换多组内容的标签页组件。",imports:[{name:"Tabs",from:"willa/Tabs"}],css:"willa/Tabs.css",demo:{name:"Tabs",component:s,props:{items:a}},code:`
    import { Tabs } from "willa/Tabs";
    import "willa/Tabs.css";

    const items = [
      {
        value: "overview",
        label: "概览",
        children: "用标签把同一上下文下的内容分组，减少页面里的纵向堆叠。",
      },
      {
        value: "usage",
        label: "使用方式",
        children: "适合文章示例、参数说明、资源信息和多版本内容切换。",
      },
    ];

    <Tabs items={items} />
  `,sections:[{title:"基础用法",content:e.jsx(s,{items:a})},{title:"禁用标签",content:e.jsx(s,{items:l,defaultValue:"css"})},{title:"图标标签",content:e.jsx(s,{items:l})},{title:"小尺寸",content:e.jsx(s,{size:"sm",items:a})},{title:"受控状态",content:e.jsx(p,{})}],props:[{name:"items",type:"Array<TabsItem>",required:!0,description:"标签和面板内容列表。"},{name:"value",type:"string",description:"当前选中的标签值，传入后组件进入受控模式。"},{name:"defaultValue",type:"string",description:"非受控模式下的默认选中值。"},{name:"onValueChange",type:"(value: string) => void",description:"选中标签变化时触发。"},{name:"size",type:'"sm" | "md"',description:"标签按钮尺寸。"},{name:"ariaLabel",type:"string",description:"标签列表的无障碍名称。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"TabsItem.icon",type:"ReactNode",description:"展示在标签文案前面的图标。"}]});export{h as default};
