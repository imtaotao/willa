import{aY as l,aJ as u}from"./index-BKM6rV0u.js";import{d as w}from"./defineDoc-0qrN7MLj.js";function s(i){const{items:r,columns:m=4,title:e,description:a,muted:c=!1,className:g,style:p,...d}=i;return l.jsxs("section",{...d,className:u("willa-logo-wall",c&&"willa-logo-wall--muted",g),style:{...p,"--willa-logo-wall-columns":String(m)},children:[e||a?l.jsxs("header",{className:"willa-logo-wall-header",children:[e?l.jsx("h3",{className:"willa-logo-wall-title",children:e}):null,a?l.jsx("p",{className:"willa-logo-wall-description",children:a}):null]}):null,l.jsx("div",{className:"willa-logo-wall-grid",children:r.map((o,t)=>{const n=l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"willa-logo-wall-mark",children:o.logo??(o.src?l.jsx("img",{src:o.src,alt:o.name,loading:"lazy"}):l.jsx("span",{children:o.name.slice(0,1).toUpperCase()}))}),l.jsxs("span",{className:"willa-logo-wall-copy",children:[l.jsx("span",{className:"willa-logo-wall-name",children:o.name}),o.description?l.jsx("span",{className:"willa-logo-wall-item-description",children:o.description}):null]})]});return o.href?l.jsx("a",{className:"willa-logo-wall-item",href:o.href,target:o.target,rel:o.rel,children:n},`${o.name}-${t}`):l.jsx("div",{className:"willa-logo-wall-item",children:n},`${o.name}-${t}`)})})]})}s.displayName="LogoWall";const W=[{name:"Northstar",logo:"N",description:"AI 工作台",href:"https://example.com"},{name:"CanvasLab",logo:"C",description:"内容协作"},{name:"Orbit",logo:"O",description:"数据分析"},{name:"Willa Cloud",logo:"W",description:"组件平台"}],N=w({id:"logo-wall",name:"LogoWall",category:"widgets",packageName:"willa/LogoWall",description:"用于展示客户、合作伙伴、集成平台或品牌生态的标识墙。",imports:[{name:"LogoWall, type LogoWallItem",from:"willa/LogoWall"}],css:"willa/LogoWall.css",demo:{name:"LogoWall",component:s,props:{title:"合作生态",description:"展示产品集成、合作伙伴和客户标识。",items:W}},code:`
    import { LogoWall, type LogoWallItem } from "willa/LogoWall";
    import "willa/LogoWall.css";

    const items: Array<LogoWallItem> = [
      {
        name: "Northstar",
        logo: "N",
        description: "AI 工作台",
        href: "https://example.com",
      },
      { name: "CanvasLab", logo: "C", description: "内容协作" },
      { name: "Orbit", logo: "O", description: "数据分析" },
      { name: "Willa Cloud", logo: "W", description: "组件平台" },
    ];

    <LogoWall
      title="合作生态"
      description="展示产品集成、合作伙伴和客户标识。"
      items={items}
    />;
  `,sections:[{title:"紧凑展示",code:`
        const items: Array<LogoWallItem> = [
          { name: "Docs", logo: "D" },
          { name: "Studio", logo: "S" },
          { name: "Console", logo: "C" },
          { name: "Agent", logo: "A" },
          { name: "Data", logo: "D" },
          { name: "Search", logo: "S" },
        ];

        <LogoWall items={items} columns={6} muted />;
      `,content:l.jsx(s,{items:[{name:"Docs",logo:"D"},{name:"Studio",logo:"S"},{name:"Console",logo:"C"},{name:"Agent",logo:"A"},{name:"Data",logo:"D"},{name:"Search",logo:"S"}],columns:6,muted:!0})}],props:[{name:"items",type:"Array<LogoWallItem>",required:!0,description:"标识项列表。"},{name:"columns",type:"2 | 3 | 4 | 5 | 6",defaultValue:"4",description:"桌面端列数，窄屏会自动收敛。"},{name:"title",type:"ReactNode",description:"标识墙标题。"},{name:"description",type:"ReactNode",description:"标识墙说明。"},{name:"muted",type:"boolean",defaultValue:"false",description:"降低图片标识饱和度，适合弱品牌露出。"},{name:"className",type:"string",description:"自定义类名。"},{name:"LogoWallItem.name",type:"string",required:!0,group:"LogoWallItem",description:"标识名称。"},{name:"LogoWallItem.logo",type:"ReactNode",group:"LogoWallItem",description:"自定义标识内容，优先级高于 src。"},{name:"LogoWallItem.src",type:"string",group:"LogoWallItem",description:"图片标识地址。"},{name:"LogoWallItem.href",type:"string",group:"LogoWallItem",description:"点击跳转地址。"},{name:"LogoWallItem.description",type:"ReactNode",group:"LogoWallItem",description:"标识辅助说明。"}]});export{N as default};
