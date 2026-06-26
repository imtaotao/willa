import{b0 as e,b as a,ac as l,h as i,aA as s,B as t}from"./index-OxPLBg-5.js";/* empty css              */import{d as n}from"./defineDoc-CWgp7IjM.js";const p={display:"grid",gap:"0.45rem",color:"var(--willa-text-soft)"},c=n({id:"app-shell",name:"AppShell",category:"layout",packageName:"willa/AppShell",description:"用于产品级页面骨架，组合顶栏、侧栏、主内容、辅助栏和底部区域。",imports:[{name:"AppShell",from:"willa/AppShell"},{name:"Panel",from:"willa/Panel"},{name:"Stack",from:"willa/Stack"},{name:"Button",from:"willa/Button"},{name:"Badge",from:"willa/Badge"}],css:"willa/AppShell.css",demo:{name:"AppShell",component:a,props:{header:"Willa",sidebar:"导航",aside:"详情"},children:"工作区"},code:`
    import { AppShell } from "willa/AppShell";
    import "willa/AppShell.css";

    <AppShell header="Willa" sidebar="导航" aside="详情">
      工作区
    </AppShell>;
  `,sections:[{title:"产品骨架",code:`
        <AppShell
          header={
            <strong>Willa Console</strong>
          }
          sidebar={
            <div style={{ display: "grid", gap: "0.45rem", color: "var(--willa-text-soft)" }}>
              <span>概览</span>
              <span>组件</span>
              <span>设置</span>
            </div>
          }
          aside={
            <Stack gap="sm">
              <Badge tone="info">当前项目</Badge>
              <span>产品反馈分析</span>
            </Stack>
          }
          footer="当前工作区会保存上下文和最近操作。"
        >
          <Panel
            title="组件工作台"
            description="集中展示任务、组件状态和配置入口。"
            actions={<Button size="sm">新建任务</Button>}
          >
            已同步 12 个组件状态。
          </Panel>
        </AppShell>;
      `,content:e.jsx(a,{header:e.jsx("strong",{children:"Willa Console"}),sidebar:e.jsxs("div",{style:p,children:[e.jsx("span",{children:"概览"}),e.jsx("span",{children:"组件"}),e.jsx("span",{children:"设置"})]}),aside:e.jsxs(s,{gap:"sm",children:[e.jsx(t,{tone:"info",children:"当前项目"}),e.jsx("span",{children:"产品反馈分析"})]}),footer:"当前工作区会保存上下文和最近操作。",children:e.jsx(l,{title:"组件工作台",description:"集中展示任务、组件状态和配置入口。",actions:e.jsx(i,{size:"sm",children:"新建任务"}),children:"已同步 12 个组件状态。"})})},{title:"无辅助栏",code:`
        <AppShell
          header="文档工作台"
          sidebar={<Stack gap="xs"><span>开始</span><span>组件</span></Stack>}
        >
          <Panel title="文档内容">适合文档站和设置页的基础框架。</Panel>
        </AppShell>;
      `,content:e.jsx(a,{header:"文档工作台",sidebar:e.jsxs(s,{gap:"xs",children:[e.jsx("span",{children:"开始"}),e.jsx("span",{children:"组件"})]}),children:e.jsx(l,{title:"文档内容",children:"适合文档站和设置页的基础框架。"})})}],props:[{name:"children",type:"ReactNode",description:"主内容。"},{name:"header",type:"ReactNode",description:"顶部区域。"},{name:"sidebar",type:"ReactNode",description:"左侧栏内容。"},{name:"aside",type:"ReactNode",description:"右侧辅助区域。"},{name:"footer",type:"ReactNode",description:"底部区域。"},{name:"sidebarWidth",type:"string",defaultValue:'"16rem"',description:"侧栏宽度。"},{name:"asideWidth",type:"string",defaultValue:'"18rem"',description:"辅助栏宽度。"},{name:"stickyHeader",type:"boolean",defaultValue:"false",description:"顶部区域是否吸顶。"},{name:"className",type:"string",description:"自定义 className。"},{name:"minContentWidth",type:"string",description:"最小内容宽度。"}]});export{c as default};
