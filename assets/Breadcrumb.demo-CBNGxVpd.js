import{aY as e,X as a,aj as t}from"./index-DcUYsctR.js";import{B as r}from"./index-DvIEJrA6.js";/* empty css              */import{d as c}from"./defineDoc-Bnz_Om-_.js";const o=[{label:"首页",href:"#/"},{label:"基础组件",href:"#/button"},{label:"Breadcrumb"}],l=[{label:"Willa",href:"#/",icon:e.jsx(a,{})},{label:"文档",href:"#/mdx",icon:e.jsx(t,{})},{label:"导航层级"}],m={width:"min(100%, 44rem)",marginInline:"auto"},b=c({id:"breadcrumb",name:"Breadcrumb",packageName:"willa/Breadcrumb",description:"用于展示页面层级、返回路径和当前位置的导航组件。",imports:[{name:"Breadcrumb",from:"willa/Breadcrumb"}],css:"willa/Breadcrumb.css",demo:{name:"Breadcrumb",component:r,props:{style:m,items:o}},code:`
    import { Breadcrumb, type BreadcrumbItem } from "willa/Breadcrumb";
    import "willa/Breadcrumb.css";

    const items: Array<BreadcrumbItem> = [
      { label: "首页", href: "#/" },
      { label: "基础组件", href: "#/button" },
      { label: "Breadcrumb" },
    ];

    <Breadcrumb items={items} />;
  `,sections:[{title:"带图标",code:`
        import { HomeIcon, ReaderIcon } from "@radix-ui/react-icons";
        import { Breadcrumb, type BreadcrumbItem } from "willa/Breadcrumb";
        import "willa/Breadcrumb.css";

        const items: Array<BreadcrumbItem> = [
          { label: "Willa", href: "#/", icon: <HomeIcon /> },
          { label: "文档", href: "#/mdx", icon: <ReaderIcon /> },
          { label: "导航层级" },
        ];

        <Breadcrumb items={items} />;
      `,content:e.jsx("div",{style:m,children:e.jsx(r,{items:l})})},{title:"紧凑尺寸",code:`
        <Breadcrumb
          size="sm"
          items={[
            { label: "项目", href: "#/" },
            { label: "设置", href: "#/form" },
            { label: "权限策略" },
          ]}
        />;
      `,content:e.jsx("div",{style:m,children:e.jsx(r,{size:"sm",items:[{label:"项目",href:"#/"},{label:"设置",href:"#/form"},{label:"权限策略"}]})})},{title:"自定义分隔符",code:`
        <Breadcrumb
          separator="/"
          items={[
            { label: "workspace", href: "#/" },
            { label: "docs", href: "#/mdx" },
            { label: "component.md" },
          ]}
        />;
      `,content:e.jsx("div",{style:m,children:e.jsx(r,{separator:"/",items:[{label:"workspace",href:"#/"},{label:"docs",href:"#/mdx"},{label:"component.md"}]})})}],props:[{name:"items",type:"Array<BreadcrumbItem>",required:!0,description:"面包屑路径列表。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"separator",type:"ReactNode",defaultValue:"<ChevronRightIcon />",description:"分隔符，默认使用箭头图标。"},{name:"BreadcrumbItem.label",type:"ReactNode",required:!0,group:"BreadcrumbItem",description:"节点展示内容。"},{name:"BreadcrumbItem.href",type:"string",group:"BreadcrumbItem",description:"节点链接。当前项不会渲染为链接。"},{name:"BreadcrumbItem.current",type:"boolean",group:"BreadcrumbItem",description:"是否为当前页面。未传时默认最后一项为当前页。"},{name:"BreadcrumbItem.icon",type:"ReactNode",group:"BreadcrumbItem",description:"节点前置图标。"},{name:"BreadcrumbItem.onClick",type:"MouseEventHandler<HTMLButtonElement>",group:"BreadcrumbItem",description:"无 href 节点的点击回调，可接入自定义路由。"}]});export{b as default};
