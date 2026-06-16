import{aA as e,ao as f,Z as t,N as S,e as r,B as w,ag as x}from"./index-CTfg97gY.js";/* empty css              *//* empty css              */import{d as L}from"./defineDoc-B3pFi3kU.js";function i(a){const{sidebar:o,side:l="left",sidebarWidth:n="16rem",gap:m="md",minContentWidth:c="0",collapseBelow:u="tablet",className:p,children:b,style:y,...g}=a,h={"--willa-sidebar-layout-sidebar-width":n,"--willa-sidebar-layout-gap":B(m),"--willa-sidebar-layout-min-content-width":c,...y};return e.jsxs("div",{...g,style:h,className:f("willa-sidebar-layout",`willa-sidebar-layout--${l}`,`willa-sidebar-layout--collapse-${u}`,p),children:[e.jsx("aside",{className:"willa-sidebar-layout-sidebar",children:o}),e.jsx("main",{className:"willa-sidebar-layout-main",children:b})]})}const d={none:"0",sm:"0.75rem",md:"1rem",lg:"1.5rem"},j=a=>a in d,B=a=>j(a)?d[a]:a,s={padding:"0.55rem 0.7rem",borderRadius:"0.55rem",background:"var(--willa-panel-soft-bg)",fontWeight:600},v=L({id:"sidebar-layout",name:"SidebarLayout",category:"layout",packageName:"willa/SidebarLayout",description:"用于设置页、文档页和资源管理中常见的侧栏加主内容布局。",imports:[{name:"SidebarLayout",from:"willa/SidebarLayout"},{name:"Panel",from:"willa/Panel"},{name:"Stack",from:"willa/Stack"},{name:"Group",from:"willa/Group"},{name:"Button",from:"willa/Button"},{name:"Badge",from:"willa/Badge"}],css:"willa/SidebarLayout.css",demo:{name:"SidebarLayout",component:i,props:{sidebar:"导航",sidebarWidth:"12rem"},children:"主内容"},code:`
    import { SidebarLayout } from "willa/SidebarLayout";
    import "willa/SidebarLayout.css";

    <SidebarLayout sidebar="导航" sidebarWidth="12rem">
      主内容
    </SidebarLayout>;
  `,sections:[{title:"文档侧栏",code:`
        <SidebarLayout
          sidebarWidth="13rem"
          sidebar={
            <Stack gap="xs">
              <strong>组件分类</strong>
              <span style={{ padding: "0.55rem 0.7rem", borderRadius: "0.55rem", background: "var(--willa-panel-soft-bg)", fontWeight: 600 }}>
                布局组件
              </span>
              <span style={{ padding: "0.55rem 0.7rem", borderRadius: "0.55rem", background: "var(--willa-panel-soft-bg)", fontWeight: 600 }}>
                表单组件
              </span>
            </Stack>
          }
        >
          <Panel
            title="布局组件"
            description="用于页面骨架、分栏和区域排列。"
            actions={<Badge tone="info">layout</Badge>}
          >
            <Group gap="sm">
              <Button size="sm">查看指南</Button>
              <Button size="sm" variant="ghost">
                查看源码
              </Button>
            </Group>
          </Panel>
        </SidebarLayout>;
      `,content:e.jsx(i,{sidebarWidth:"13rem",sidebar:e.jsxs(x,{gap:"xs",children:[e.jsx("strong",{children:"组件分类"}),e.jsx("span",{style:s,children:"布局组件"}),e.jsx("span",{style:s,children:"表单组件"})]}),children:e.jsx(t,{title:"布局组件",description:"用于页面骨架、分栏和区域排列。",actions:e.jsx(w,{tone:"info",children:"layout"}),children:e.jsxs(S,{gap:"sm",children:[e.jsx(r,{size:"sm",children:"查看指南"}),e.jsx(r,{size:"sm",variant:"ghost",children:"查看源码"})]})})})},{title:"右侧栏",code:`
        <SidebarLayout
          side="right"
          sidebarWidth="12rem"
          sidebar={<Panel padding="sm">辅助信息</Panel>}
        >
          <Panel title="主内容">右侧栏适合详情页的状态、目录和快捷操作。</Panel>
        </SidebarLayout>;
      `,content:e.jsx(i,{side:"right",sidebarWidth:"12rem",sidebar:e.jsx(t,{padding:"sm",children:"辅助信息"}),children:e.jsx(t,{title:"主内容",children:"右侧栏适合详情页的状态、目录和快捷操作。"})})}],props:[{name:"sidebar",type:"ReactNode",required:!0,description:"侧栏内容。"},{name:"children",type:"ReactNode",description:"主内容。"},{name:"side",type:'"left" | "right"',defaultValue:'"left"',description:"侧栏位置。"},{name:"sidebarWidth",type:"string",defaultValue:'"16rem"',description:"侧栏宽度。"},{name:"gap",type:'"none" | "sm" | "md" | "lg" | string',defaultValue:'"md"',description:"侧栏和主内容之间的间距。"},{name:"minContentWidth",type:"string",defaultValue:'"0"',description:"主内容最小宽度。"},{name:"collapseBelow",type:'"none" | "tablet"',defaultValue:'"tablet"',description:"移动端是否折叠为上下布局。"}]});export{v as default};
