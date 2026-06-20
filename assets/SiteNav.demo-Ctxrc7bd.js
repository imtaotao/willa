import{aY as e,aJ as n,i as v}from"./index-DHvN3l_E.js";/* empty css              */import{d as f}from"./defineDoc-BYYK5kYX.js";function i(s){const{brand:o,brandHref:c="/",logo:l,items:t,actions:r,sticky:d=!1,className:m,...p}=s;return e.jsxs("header",{...p,className:n("willa-site-nav",d&&"willa-site-nav--sticky",m),children:[e.jsxs("a",{className:"willa-site-nav-brand",href:c,children:[l?e.jsx("span",{className:"willa-site-nav-logo",children:l}):null,e.jsx("span",{children:o})]}),t!=null&&t.length?e.jsx("nav",{className:"willa-site-nav-links","aria-label":"Site navigation",children:t.map(a=>e.jsx("a",{className:n("willa-site-nav-link",a.active&&"willa-site-nav-link--active"),href:a.href,target:a.target,rel:a.rel,"aria-current":a.active?"page":void 0,children:a.label},`${a.href}-${String(a.label)}`))}):null,r?e.jsx("div",{className:"willa-site-nav-actions",children:r}):null]})}i.displayName="SiteNav";const u=[{label:"产品",href:"#product",active:!0},{label:"组件",href:"#components"},{label:"文档",href:"#docs"},{label:"价格",href:"#pricing"}],g=f({id:"site-nav",name:"SiteNav",category:"widgets",packageName:"willa/SiteNav",description:"用于产品站、文档站和内容站的顶部导航。",imports:[{name:"SiteNav, type SiteNavItem",from:"willa/SiteNav"},{name:"Button",from:"willa/Button"}],css:"willa/SiteNav.css",demo:{name:"SiteNav",component:i,props:{brand:"Willa",brandHref:"#",logo:"W",items:u,actions:e.jsx(v,{size:"sm",variant:"soft",children:"开始使用"})}},code:`
    import { Button } from "willa/Button";
    import { SiteNav, type SiteNavItem } from "willa/SiteNav";
    import "willa/Button.css";
    import "willa/SiteNav.css";

    const items: Array<SiteNavItem> = [
      { label: "产品", href: "#product", active: true },
      { label: "组件", href: "#components" },
      { label: "文档", href: "#docs" },
      { label: "价格", href: "#pricing" },
    ];

    <SiteNav
      brand="Willa"
      brandHref="#"
      logo="W"
      items={items}
      actions={
        <Button size="sm" variant="soft">
          开始使用
        </Button>
      }
    />;
  `,sections:[{title:"吸顶导航",code:`
        <SiteNav
          sticky
          brand="Willa Docs"
          brandHref="#"
          items={[
            { label: "指南", href: "#guide", active: true },
            { label: "组件", href: "#components" },
            { label: "更新", href: "#changelog" },
          ]}
        />;
      `,content:e.jsx(i,{sticky:!0,brand:"Willa Docs",brandHref:"#",items:[{label:"指南",href:"#guide",active:!0},{label:"组件",href:"#components"},{label:"更新",href:"#changelog"}]})}],props:[{name:"brand",type:"ReactNode",required:!0,description:"品牌名称或自定义品牌内容。"},{name:"brandHref",type:"string",defaultValue:'"/"',description:"点击品牌区域跳转的地址。"},{name:"logo",type:"ReactNode",description:"品牌标识。"},{name:"items",type:"Array<SiteNavItem>",description:"导航链接列表。"},{name:"actions",type:"ReactNode",description:"右侧操作区。"},{name:"sticky",type:"boolean",defaultValue:"false",description:"是否吸附在页面顶部。"},{name:"SiteNavItem.label",type:"ReactNode",required:!0,group:"SiteNavItem",description:"导航项文案。"},{name:"SiteNavItem.href",type:"string",required:!0,group:"SiteNavItem",description:"导航项链接。"},{name:"SiteNavItem.active",type:"boolean",defaultValue:"false",group:"SiteNavItem",description:"当前导航项是否选中。"}]});export{g as default};
