import{aZ as e,ap as t,h as i,X as a,B as n}from"./index-AT3pq52c.js";/* empty css              *//* empty css              */import{d as s}from"./defineDoc-vm2MDznr.js";const o={width:"min(100%, 58rem)",marginInline:"auto"},m=s({id:"section-header",name:"SectionHeader",category:"layout",packageName:"willa/SectionHeader",description:"用于页面区块、卡片区和详情段落的标题与操作区。",imports:[{name:"SectionHeader",from:"willa/SectionHeader"}],css:"willa/SectionHeader.css",demo:{name:"SectionHeader",component:t,props:{style:o,title:"来源证据",description:"展示本次生成使用的文档、链接和引用状态。",meta:e.jsx(n,{tone:"info",children:"12 条"}),actions:e.jsxs(a,{gap:"sm",children:[e.jsx(i,{size:"sm",variant:"ghost",children:"查看全部"}),e.jsx(i,{size:"sm",children:"添加来源"})]})}},code:`
    import { Badge } from "willa/Badge";
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import { SectionHeader } from "willa/SectionHeader";
    import "willa/Badge.css";
    import "willa/Button.css";
    import "willa/Group.css";
    import "willa/SectionHeader.css";

    <SectionHeader
      title="来源证据"
      description="展示本次生成使用的文档、链接和引用状态。"
      meta={<Badge tone="info">12 条</Badge>}
      actions={
        <Group gap="sm">
          <Button size="sm" variant="ghost">
            查看全部
          </Button>
          <Button size="sm">添加来源</Button>
        </Group>
      }
    />;
  `,sections:[{title:"带分隔线",code:`
        <SectionHeader
          divided
          eyebrow="Activity"
          title="最近操作"
          description="区块之间需要清晰分隔时，可以开启 divided。"
          actions={<Button size="sm" variant="outline">刷新</Button>}
        />;
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{divided:!0,eyebrow:"Activity",title:"最近操作",description:"区块之间需要清晰分隔时，可以开启 divided。",actions:e.jsx(i,{size:"sm",variant:"outline",children:"刷新"})})})},{title:"紧凑标题",code:`
        <SectionHeader
          size="sm"
          title="任务摘要"
          meta="刚刚更新"
          actions={<Button size="sm" variant="ghost">编辑</Button>}
        />;
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{size:"sm",title:"任务摘要",meta:"刚刚更新",actions:e.jsx(i,{size:"sm",variant:"ghost",children:"编辑"})})})},{title:"居中标题",code:`
        <SectionHeader
          align="center"
          title="选择一个模板开始"
          description="适合空状态、模板选择和引导型区块。"
        />;
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{align:"center",title:"选择一个模板开始",description:"适合空状态、模板选择和引导型区块。"})})}],props:[{name:"title",type:"ReactNode",required:!0,description:"区块标题。"},{name:"description",type:"ReactNode",description:"标题下方说明。"},{name:"eyebrow",type:"ReactNode",description:"标题上方的短标签或分组名。"},{name:"meta",type:"ReactNode",description:"标题旁边的状态、数量或时间。"},{name:"actions",type:"ReactNode",description:"右侧或下方操作区。"},{name:"align",type:'"start" | "center"',defaultValue:'"start"',description:"对齐方式，默认 start。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"divided",type:"boolean",defaultValue:"false",description:"是否展示底部分隔线，默认 false。"}]});export{m as default};
