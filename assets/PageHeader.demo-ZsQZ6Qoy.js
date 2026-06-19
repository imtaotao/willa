import{aO as e,az as x,g as t,Q as p,B as a}from"./index-CnafOytH.js";import{B}from"./index-C9AHXza-.js";/* empty css              *//* empty css              */import{d as j}from"./defineDoc-CqxOYqEu.js";function r(m){const{title:u,description:s,eyebrow:l,breadcrumb:d,meta:n,actions:o,children:c,align:g="start",divided:h=!0,className:w,...b}=m;return e.jsxs("header",{...b,className:x("willa-page-header",`willa-page-header--${g}`,h&&"willa-page-header--divided",w),children:[d?e.jsx("div",{className:"willa-page-header-breadcrumb",children:d}):null,e.jsxs("div",{className:"willa-page-header-row",children:[e.jsxs("div",{className:"willa-page-header-main",children:[l?e.jsx("div",{className:"willa-page-header-eyebrow",children:l}):null,e.jsxs("div",{className:"willa-page-header-heading",children:[e.jsx("h1",{className:"willa-page-header-title",children:u}),n?e.jsx("div",{className:"willa-page-header-meta",children:n}):null]}),s?e.jsx("p",{className:"willa-page-header-description",children:s}):null,c?e.jsx("div",{className:"willa-page-header-content",children:c}):null]}),o?e.jsx("div",{className:"willa-page-header-actions",children:o}):null]})]})}const i={width:"min(100%, 64rem)",marginInline:"auto"},y=e.jsx(B,{items:[{label:"首页",href:"#/"},{label:"AI 组件",href:"#/prompt-input"},{label:"产品分析"}]}),N=e.jsxs(p,{gap:"sm",children:[e.jsx(t,{variant:"outline",children:"导出"}),e.jsx(t,{children:"新建任务"})]}),R=j({id:"page-header",name:"PageHeader",category:"layout",packageName:"willa/PageHeader",description:"用于页面顶部的标题、层级、摘要和操作区。",imports:[{name:"PageHeader",from:"willa/PageHeader"}],css:"willa/PageHeader.css",demo:{name:"PageHeader",component:r,props:{style:i,breadcrumb:y,eyebrow:"AI Workspace",title:"产品反馈分析",description:"汇总用户反馈、来源证据和生成状态，帮助团队快速进入下一步处理。",meta:e.jsx(a,{tone:"success",children:"已同步"}),actions:N}},code:`
    import { Badge } from "willa/Badge";
    import { Breadcrumb } from "willa/Breadcrumb";
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import { PageHeader } from "willa/PageHeader";
    import "willa/Badge.css";
    import "willa/Breadcrumb.css";
    import "willa/Button.css";
    import "willa/Group.css";
    import "willa/PageHeader.css";

    <PageHeader
      breadcrumb={
        <Breadcrumb
          items={[
            { label: "首页", href: "#/" },
            { label: "AI 组件", href: "#/prompt-input" },
            { label: "产品分析" },
          ]}
        />
      }
      eyebrow="AI Workspace"
      title="产品反馈分析"
      description="汇总用户反馈、来源证据和生成状态，帮助团队快速进入下一步处理。"
      meta={<Badge tone="success">已同步</Badge>}
      actions={
        <Group gap="sm">
          <Button variant="outline">导出</Button>
          <Button>新建任务</Button>
        </Group>
      }
    />;
  `,sections:[{title:"居中展示",code:`
        <PageHeader
          align="center"
          divided={false}
          eyebrow="Documentation"
          title="构建更清晰的产品页面"
          description="适合文档页、空状态详情页或需要强调单一主题的页面顶部。"
          actions={<Button>开始使用</Button>}
        />;
      `,content:e.jsx("div",{style:i,children:e.jsx(r,{align:"center",divided:!1,eyebrow:"Documentation",title:"构建更清晰的产品页面",description:"适合文档页、空状态详情页或需要强调单一主题的页面顶部。",actions:e.jsx(t,{children:"开始使用"})})})},{title:"补充内容",code:`
        <PageHeader
          title="模型配置"
          description="页面头下方可以承载标签、筛选摘要或额外说明。"
        >
          <Group gap="xs">
            <Badge>64K 上下文</Badge>
            <Badge tone="success">工具已启用</Badge>
            <Badge tone="warning">需要复核</Badge>
          </Group>
        </PageHeader>;
      `,content:e.jsx("div",{style:i,children:e.jsx(r,{title:"模型配置",description:"页面头下方可以承载标签、筛选摘要或额外说明。",children:e.jsxs(p,{gap:"xs",children:[e.jsx(a,{children:"64K 上下文"}),e.jsx(a,{tone:"success",children:"工具已启用"}),e.jsx(a,{tone:"warning",children:"需要复核"})]})})})}],props:[{name:"title",type:"ReactNode",required:!0,description:"页面标题。"},{name:"description",type:"ReactNode",description:"标题下方说明。"},{name:"eyebrow",type:"ReactNode",description:"标题上方的短标签或分组名。"},{name:"breadcrumb",type:"ReactNode",description:"页面层级导航，通常传入 Breadcrumb。"},{name:"meta",type:"ReactNode",description:"标题旁边的状态、时间或版本信息。"},{name:"actions",type:"ReactNode",description:"右侧或下方操作区。"},{name:"children",type:"ReactNode",description:"描述下方的补充内容。"},{name:"align",type:'"start" | "center"',defaultValue:'"start"',description:"对齐方式，默认 start。"},{name:"divided",type:"boolean",defaultValue:"true",description:"是否展示底部分隔线，默认 true。"}]});export{R as default};
