import{b2 as e,b4 as h,aO as m,h as N}from"./index-wyswk-7m.js";/* empty css              */import{d as u}from"./defineDoc-BCaUHiZa.js";function l(a){const{brand:i,brandHref:n="/",logo:s,items:r,actions:o,sticky:p=!1,renderLink:c,className:v,...f}=a;return e.jsxs("header",{...f,className:m("willa-site-nav",p&&"willa-site-nav--sticky",v),children:[d(c,{className:"willa-site-nav-brand",href:n,children:e.jsxs(e.Fragment,{children:[s?e.jsx("span",{className:"willa-site-nav-logo",children:s}):null,e.jsx("span",{children:i})]})}),r!=null&&r.length?e.jsx("nav",{className:"willa-site-nav-links","aria-label":"Site navigation",children:r.map(t=>e.jsx(h.Fragment,{children:d(c,{className:m("willa-site-nav-link",t.active&&"willa-site-nav-link--active"),href:t.href,target:t.target,rel:t.rel,"aria-current":t.active?"page":void 0,children:t.label})},`${t.href}-${String(t.label)}`))}):null,o?e.jsx("div",{className:"willa-site-nav-actions",children:o}):null]})}const d=(a,i)=>a?a(i):e.jsx("a",{...i});l.displayName="SiteNav";const b=[{label:"产品",href:"#product",active:!0},{label:"组件",href:"#components"},{label:"文档",href:"#docs"},{label:"价格",href:"#pricing"}],g=[{label:"组件",href:"/components",active:!0},{label:"文档",href:"/docs"},{label:"GitHub",href:"https://github.com/imtaotao/willa",target:"_blank",rel:"noreferrer"}],k=u({id:"site-nav",name:"SiteNav",category:"widgets",packageName:"willa/SiteNav",description:"用于产品站、文档站和内容站的顶部导航。",imports:[{name:"SiteNav, type SiteNavItem",from:"willa/SiteNav"},{name:"Button",from:"willa/Button"}],css:"willa/SiteNav.css",demo:{name:"SiteNav",component:l,props:{brand:"Willa",brandHref:"#",logo:"W",items:b,actions:e.jsx(N,{size:"sm",variant:"soft",children:"开始使用"})}},code:`
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
      `,content:e.jsx(l,{sticky:!0,brand:"Willa Docs",brandHref:"#",items:[{label:"指南",href:"#guide",active:!0},{label:"组件",href:"#components"},{label:"更新",href:"#changelog"}]})},{title:"路由链接",code:`
        import { Link } from "react-router-dom";
        import { SiteNav, type SiteNavItem } from "willa/SiteNav";
        import "willa/SiteNav.css";

        const items: Array<SiteNavItem> = [
          { label: "组件", href: "/components", active: true },
          { label: "文档", href: "/docs" },
          {
            label: "GitHub",
            href: "https://github.com/imtaotao/willa",
            target: "_blank",
            rel: "noreferrer",
          },
        ];

        <SiteNav
          brand="Willa"
          brandHref="/"
          items={items}
          renderLink={({ href, children, ...props }) =>
            href.startsWith("http") ? (
              <a href={href} {...props}>
                {children}
              </a>
            ) : (
              <Link to={href} {...props}>
                {children}
              </Link>
            )
          }
        />;
      `,content:e.jsx(l,{brand:"Willa",brandHref:"/",items:g,renderLink:({href:a,children:i,...n})=>e.jsx("a",{href:a,...n,children:i})})}],props:[{name:"brand",type:"ReactNode",required:!0,description:"品牌名称或自定义品牌内容。"},{name:"brandHref",type:"string",defaultValue:'"/"',description:"点击品牌区域跳转的地址。"},{name:"logo",type:"ReactNode",description:"品牌标识。"},{name:"items",type:"Array<SiteNavItem>",description:"导航链接列表。"},{name:"actions",type:"ReactNode",description:"右侧操作区。"},{name:"sticky",type:"boolean",defaultValue:"false",description:"是否吸附在页面顶部。"},{name:"renderLink",type:"(props: WillaRenderLinkProps) => ReactNode",description:"自定义品牌和导航项链接渲染，可接入客户端路由；未传时渲染原生 a 标签。"},{name:"SiteNavItem.label",type:"ReactNode",required:!0,group:"SiteNavItem",description:"导航项文案。"},{name:"SiteNavItem.href",type:"string",required:!0,group:"SiteNavItem",description:"导航项链接。"},{name:"SiteNavItem.active",type:"boolean",defaultValue:"false",group:"SiteNavItem",description:"当前导航项是否选中。"},{name:"SiteNavItem.target",type:"string",group:"SiteNavItem",description:"链接打开目标。"},{name:"SiteNavItem.rel",type:"string",group:"SiteNavItem",description:"链接 rel 属性。"},{name:"className",type:"string",description:"自定义 className。"}]});export{k as default};
