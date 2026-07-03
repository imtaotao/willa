import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./Group-C-JhzSsC.js";import{t as r}from"./Panel-PK5WEqr0.js";import{t as i}from"./SidebarLayout-DEPzeGZz.js";import{t as a}from"./Stack-DwlHdG-i.js";import{a as o}from"./index-B2UoUlCX.js";import"./style-B00R6KjV.js";import{t as s}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var c=e(),l={padding:`0.55rem 0.7rem`,borderRadius:`0.55rem`,background:`var(--willa-panel-soft-bg)`,fontWeight:600},u=s({id:`sidebar-layout`,name:`SidebarLayout`,category:`layout`,packageName:`willa/SidebarLayout`,description:`用于设置页、文档页和资源管理中常见的侧栏加主内容布局。`,imports:[{name:`SidebarLayout`,from:`willa/SidebarLayout`},{name:`Panel`,from:`willa/Panel`},{name:`Stack`,from:`willa/Stack`},{name:`Group`,from:`willa/Group`},{name:`Button`,from:`willa/Button`},{name:`Badge`,from:`willa/Badge`}],css:`willa/SidebarLayout.css`,demo:{name:`SidebarLayout`,component:i,props:{sidebar:`导航`,sidebarWidth:`12rem`},children:`主内容`},code:`
    import { SidebarLayout } from "willa/SidebarLayout";
    import "willa/SidebarLayout.css";

    <SidebarLayout sidebar="导航" sidebarWidth="12rem">
      主内容
    </SidebarLayout>;
  `,sections:[{title:`文档侧栏`,code:`
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
      `,content:(0,c.jsx)(i,{sidebarWidth:`13rem`,sidebar:(0,c.jsxs)(a,{gap:`xs`,children:[(0,c.jsx)(`strong`,{children:`组件分类`}),(0,c.jsx)(`span`,{style:l,children:`布局组件`}),(0,c.jsx)(`span`,{style:l,children:`表单组件`})]}),children:(0,c.jsx)(r,{title:`布局组件`,description:`用于页面骨架、分栏和区域排列。`,actions:(0,c.jsx)(o,{tone:`info`,children:`layout`}),children:(0,c.jsxs)(n,{gap:`sm`,children:[(0,c.jsx)(t,{size:`sm`,children:`查看指南`}),(0,c.jsx)(t,{size:`sm`,variant:`ghost`,children:`查看源码`})]})})})},{title:`右侧栏`,code:`
        <SidebarLayout
          side="right"
          sidebarWidth="12rem"
          sidebar={<Panel padding="sm">辅助信息</Panel>}
        >
          <Panel title="主内容">右侧栏适合详情页的状态、目录和快捷操作。</Panel>
        </SidebarLayout>;
      `,content:(0,c.jsx)(i,{side:`right`,sidebarWidth:`12rem`,sidebar:(0,c.jsx)(r,{padding:`sm`,children:`辅助信息`}),children:(0,c.jsx)(r,{title:`主内容`,children:`右侧栏适合详情页的状态、目录和快捷操作。`})})}],props:[{name:`sidebar`,type:`ReactNode`,required:!0,description:`侧栏内容。`},{name:`children`,type:`ReactNode`,description:`主内容。`},{name:`side`,type:`"left" | "right"`,defaultValue:`"left"`,description:`侧栏位置。`},{name:`sidebarWidth`,type:`string`,defaultValue:`"16rem"`,description:`侧栏宽度。`},{name:`gap`,type:`"none" | "sm" | "md" | "lg" | string`,defaultValue:`"md"`,description:`侧栏和主内容之间的间距。`},{name:`minContentWidth`,type:`string`,defaultValue:`"0"`,description:`主内容最小宽度。`},{name:`collapseBelow`,type:`"none" | "tablet"`,defaultValue:`"tablet"`,description:`移动端是否折叠为上下布局。`},{name:`className`,type:`string`,description:`自定义 className。`}]});export{u as default};