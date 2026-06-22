import{a_ as e,b2 as i,a as t,az as n}from"./index-BuHhEwyH.js";import{d as r}from"./defineDoc-Txe2hWsx.js";const o=[{id:"anchor-overview",title:"概览"},{id:"anchor-usage",title:"使用方式",children:[{id:"anchor-basic",title:"基础用法"},{id:"anchor-nested",title:"嵌套目录"}]},{id:"anchor-api",title:"API"}],c=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"14rem minmax(0, 1fr)",gap:"1rem",maxWidth:"48rem"},children:[e.jsx(t,{items:o,defaultActiveId:"anchor-overview"}),e.jsxs(n,{gap:"lg",children:[e.jsxs("section",{id:"anchor-overview",children:[e.jsx("h3",{children:"概览"}),e.jsx("p",{children:"Anchor 适合长文档、配置页和详情页目录。"})]}),e.jsxs("section",{id:"anchor-usage",children:[e.jsx("h3",{children:"使用方式"}),e.jsx("p",{children:"点击目录会滚动到对应区域，并同步 active 状态。"})]}),e.jsxs("section",{id:"anchor-basic",children:[e.jsx("h3",{children:"基础用法"}),e.jsx("p",{children:"默认使用 #id 定位，也可以给条目传 href。"})]}),e.jsxs("section",{id:"anchor-nested",children:[e.jsx("h3",{children:"嵌套目录"}),e.jsx("p",{children:"children 用于展示二级目录。"})]}),e.jsxs("section",{id:"anchor-api",children:[e.jsx("h3",{children:"API"}),e.jsx("p",{children:"支持受控 activeId、offsetTop 和点击回调。"})]})]})]}),a=[{id:"anchor-nav-ai",title:"PromptInput",meta:"提示词输入",description:"AI 输入、提交和上下文提示。"},{id:"anchor-nav-form",title:"DatePicker",meta:"日期选择器",description:"日期、范围和滚动选择。"},{id:"anchor-nav-layout",title:"Grid",meta:"网格布局",description:"响应式列和间距控制。"}],s=()=>e.jsx("div",{style:{width:"min(100%, 22rem)"},children:e.jsx(t,{items:a,defaultActiveId:"anchor-nav-ai",variant:"navigation"})}),h=r({id:"anchor",name:"Anchor",category:"content",packageName:"willa/Anchor",description:"用于长页面目录导航和锚点定位。",imports:[{name:"Anchor",from:"willa/Anchor"}],css:"willa/Anchor.css",demo:{name:"AnchorPreview",component:c},code:i(`
    import { Anchor } from "willa/Anchor";
    import "willa/Anchor.css";

    const items = [
      { id: "overview", title: "概览" },
      {
        id: "usage",
        title: "使用方式",
        children: [{ id: "basic", title: "基础用法" }],
      },
    ];

    <Anchor items={items} defaultActiveId="overview" />
  `),sections:[{title:"导航形态",code:i(`
        import { Anchor } from "willa/Anchor";
        import "willa/Anchor.css";

        const items = [
          {
            id: "prompt-input",
            title: "PromptInput",
            meta: "提示词输入",
            description: "AI 输入、提交和上下文提示。",
          },
          {
            id: "date-picker",
            title: "DatePicker",
            meta: "日期选择器",
            description: "日期、范围和滚动选择。",
          },
        ];

        <Anchor
          items={items}
          defaultActiveId="prompt-input"
          variant="navigation"
        />;
      `),content:e.jsx(s,{})}],props:[{name:"items",type:"Array<AnchorItem>",required:!0,description:"目录项。"},{name:"activeId",type:"string",description:"受控激活项 id。"},{name:"defaultActiveId",type:"string",description:"默认激活项 id。"},{name:"offsetTop",type:"number",defaultValue:"0",description:"滚动监听时距离视口顶部的偏移。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸。"},{name:"variant",type:'"toc" | "navigation"',defaultValue:'"toc"',description:"展示形态。toc 用于正文目录，navigation 用于侧边导航列表。"},{name:"sticky",type:"boolean",defaultValue:"false",description:"是否使用 sticky 定位。"},{name:"showMarker",type:"boolean",defaultValue:"true",description:"是否显示激活标记。"},{name:"classNames",type:"Partial<Record<AnchorSlot, string>>",description:"按语义槽位追加 className，用于定制局部样式。"},{name:"styles",type:"Partial<Record<AnchorSlot, CSSProperties>>",description:"按语义槽位追加内联样式，用于轻量定制。"},{name:"onActiveChange",type:"(id: string) => void",description:"激活项变化回调。"},{name:"onItemClick",type:"(item: AnchorItem, event: MouseEvent<HTMLAnchorElement>) => void",description:"目录项点击回调。"},{name:"AnchorItem.id",type:"string",required:!0,group:"AnchorItem",description:"锚点项唯一标识，也作为默认 href 的目标 id。"},{name:"AnchorItem.title",type:"ReactNode",required:!0,group:"AnchorItem",description:"锚点主标题。"},{name:"AnchorItem.description",type:"ReactNode",group:"AnchorItem",description:"导航形态下的补充说明。"},{name:"AnchorItem.meta",type:"ReactNode",group:"AnchorItem",description:"导航形态下显示在右侧的辅助信息。"},{name:"AnchorItem.href",type:"string",group:"AnchorItem",description:"自定义链接。不传时使用 #id。"},{name:"AnchorItem.children",type:"Array<AnchorItem>",group:"AnchorItem",description:"子级锚点项。"},{name:"AnchorSlot",type:'"list" | "item" | "link" | "title" | "meta" | "description"',group:"AnchorSlot",description:"Anchor 支持定制的语义槽位。"}]});export{h as default};
