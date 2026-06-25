import{b0 as e,aE as a,B as i,v as r,R as o,k as d,b2 as c}from"./index-BvtFLwN5.js";/* empty css              */import{d as m}from"./defineDoc-CQCHZfF9.js";const s=[{value:"overview",label:"概览",children:"用标签把同一上下文下的内容分组，减少页面里的纵向堆叠。"},{value:"usage",label:"使用方式",children:"适合文章示例、参数说明、资源信息和多版本内容切换。"},{value:"notes",label:"注意事项",children:"标签文案应保持短句，内容区域只承载当前选中标签的信息。"}],l=[{value:"react",label:"React",icon:e.jsx(r,{}),children:e.jsx("p",{children:"在内容页中展示 React 示例，可以把安装、基础代码和样式导入拆成标签。"})},{value:"css",label:"CSS",icon:e.jsx(o,{}),children:e.jsxs("p",{children:["单组件样式通过 ",e.jsx("code",{children:"willa/Tabs.css"})," 引入，主题变量来自 content 包。"]})},{value:"disabled",label:"待补充",icon:e.jsx(d,{}),disabled:!0,children:"这个面板不会被选中。"}],u=()=>{const[t,n]=c.useState("draft");return e.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[e.jsxs(i,{tone:"info",children:["当前：",t]}),e.jsx(a,{value:t,onValueChange:n,items:[{value:"draft",label:"草稿",children:"保存还没有发布的内容提纲。"},{value:"review",label:"审核",children:"集中查看需要修改或确认的信息。"},{value:"published",label:"已发布",children:"展示已经对外可见的内容版本。"}]})]})},g=m({id:"tabs",name:"Tabs",packageName:"willa/Tabs",description:"用于在同一上下文里切换多组内容面板；只切换视图、模式或筛选状态时优先使用 Segmented。",imports:[{name:"Tabs",from:"willa/Tabs"}],css:"willa/Tabs.css",demo:{name:"Tabs",component:a,props:{items:s}},code:`
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

    <Tabs items={items} />;
  `,sections:[{title:"基础用法",code:`
        <Tabs items={tabsItems} />;
      `,content:e.jsx(a,{items:s})},{title:"禁用标签",code:`
        <Tabs items={docsItems} defaultValue="css" />;
      `,content:e.jsx(a,{items:l,defaultValue:"css"})},{title:"图标标签",code:`
        <Tabs items={docsItems} />;
      `,content:e.jsx(a,{items:l})},{title:"小尺寸",code:`
        <Tabs size="sm" items={tabsItems} />;
      `,content:e.jsx(a,{size:"sm",items:s})},{title:"受控状态",code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Tabs } from "willa/Tabs";
        import "willa/Badge.css";
        import "willa/Tabs.css";

        const Demo = () => {
          const [value, setValue] = useState("draft");

          return (
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <Badge tone="info">当前：{value}</Badge>
              <Tabs
                value={value}
                onValueChange={setValue}
                items={[
                  {
                    value: "draft",
                    label: "草稿",
                    children: "保存还没有发布的内容提纲。",
                  },
                  {
                    value: "review",
                    label: "审核",
                    children: "集中查看需要修改或确认的信息。",
                  },
                  {
                    value: "published",
                    label: "已发布",
                    children: "展示已经对外可见的内容版本。",
                  },
                ]}
              />
            </div>
          );
        };
      `,content:e.jsx(u,{})},{title:"使用边界",code:`
        <Badge tone="info">
          Tabs 用于内容分组；Segmented 用于视图、模式和筛选维度切换。
        </Badge>;
      `,content:e.jsxs("div",{style:{display:"grid",gap:"0.75rem",maxWidth:"34rem"},children:[e.jsx(i,{tone:"info",children:"Tabs：每个选项对应独立内容面板"}),e.jsx("p",{style:{margin:0,color:"var(--willa-content-muted)"},children:"例如安装说明、代码示例、参数解释、多版本内容。若只是切换列表/看板、 预览/源码、紧凑/宽松或一组显示开关，使用 Segmented 更合适。"})]})}],props:[{name:"items",type:"Array<TabsItem>",required:!0,description:"标签和面板内容列表。"},{name:"value",type:"string",description:"当前选中的标签值，传入后组件进入受控模式。"},{name:"defaultValue",type:"string",defaultValue:"第一个可用项",description:"非受控模式下的默认选中值。"},{name:"onValueChange",type:"(value: string) => void",description:"选中标签变化时触发。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"标签按钮尺寸。"},{name:"ariaLabel",type:"string",defaultValue:'"Tabs"',description:"标签列表的无障碍名称。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"TabsItem.icon",type:"ReactNode",group:"TabsItem",description:"展示在标签文案前面的图标。"},{name:"TabsItem.value",type:"string",required:!0,group:"TabsItem",description:"标签唯一值。"},{name:"TabsItem.label",type:"ReactNode",required:!0,group:"TabsItem",description:"标签按钮内容。"},{name:"TabsItem.children",type:"ReactNode",required:!0,group:"TabsItem",description:"标签对应的面板内容。"},{name:"TabsItem.disabled",type:"boolean",group:"TabsItem",description:"是否禁用当前标签。"}]});export{g as default};
