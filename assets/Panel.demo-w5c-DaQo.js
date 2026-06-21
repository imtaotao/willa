import{aZ as e,ab as t,W as n,B as a,h as i}from"./index-D7YaWUUW.js";/* empty css              *//* empty css              */import{d as o}from"./defineDoc-BHlsbD-w.js";const d=o({id:"panel",name:"Panel",category:"layout",packageName:"willa/Panel",description:"用于产品页面中的内容区域，提供标题、操作区、主体和底部区域。",imports:[{name:"Panel",from:"willa/Panel"},{name:"Button",from:"willa/Button"},{name:"Badge",from:"willa/Badge"},{name:"Group",from:"willa/Group"}],css:"willa/Panel.css",demo:{name:"Panel",component:t,props:{title:"发布概览",description:"展示当前组件发布状态。"},children:"已完成导出、样式和示例检查。"},code:`
    import { Panel } from "willa/Panel";
    import "willa/Panel.css";

    <Panel title="发布概览" description="展示当前组件发布状态。">
      已完成导出、样式和示例检查。
    </Panel>;
  `,sections:[{title:"带操作区",code:`
        <Panel
          title="发布概览"
          description="展示当前组件发布状态。"
          actions={<Button size="sm">查看详情</Button>}
        >
          <Group gap="xs">
            <Badge tone="success">已构建</Badge>
            <Badge tone="info">3 个入口</Badge>
            <Badge>layout</Badge>
          </Group>
        </Panel>;
      `,content:e.jsx(t,{title:"发布概览",description:"展示当前组件发布状态。",actions:e.jsx(i,{size:"sm",children:"查看详情"}),children:e.jsxs(n,{gap:"xs",children:[e.jsx(a,{tone:"success",children:"已构建"}),e.jsx(a,{tone:"info",children:"3 个入口"}),e.jsx(a,{children:"layout"})]})})},{title:"区域变体",code:`
        <Group direction="column" align="stretch" gap="md">
          <Panel variant="surface" title="Surface">
            默认产品区域。
          </Panel>
          <Panel variant="soft" title="Soft">
            更轻的内容承载区。
          </Panel>
          <Panel variant="outline" title="Outline">
            强调边界的区域。
          </Panel>
        </Group>;
      `,content:e.jsxs(n,{direction:"column",align:"stretch",gap:"md",children:[e.jsx(t,{variant:"surface",title:"Surface",children:"默认产品区域。"}),e.jsx(t,{variant:"soft",title:"Soft",children:"更轻的内容承载区。"}),e.jsx(t,{variant:"outline",title:"Outline",children:"强调边界的区域。"})]})},{title:"底部内容",code:`
        <Panel
          title="任务结果"
          footer={
            <Group justify="end" gap="sm">
              <Button size="sm" variant="ghost">
                忽略
              </Button>
              <Button size="sm">确认</Button>
            </Group>
          }
        >
          已生成 12 条检查建议。
        </Panel>;
      `,content:e.jsx(t,{title:"任务结果",footer:e.jsxs(n,{justify:"end",gap:"sm",children:[e.jsx(i,{size:"sm",variant:"ghost",children:"忽略"}),e.jsx(i,{size:"sm",children:"确认"})]}),children:"已生成 12 条检查建议。"})}],props:[{name:"children",type:"ReactNode",description:"主体内容。"},{name:"title",type:"ReactNode",description:"区域标题。"},{name:"description",type:"ReactNode",description:"标题下方的补充说明。"},{name:"actions",type:"ReactNode",description:"标题右侧操作区。"},{name:"footer",type:"ReactNode",description:"底部内容或操作区。"},{name:"variant",type:'"surface" | "soft" | "outline" | "plain"',defaultValue:'"surface"',description:"区域视觉变体。"},{name:"padding",type:'"none" | "sm" | "md" | "lg"',defaultValue:'"md"',description:"主体内边距。"}]});export{d as default};
