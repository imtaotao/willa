import{a_ as e,h as s,B as l}from"./index-CiTBtHwL.js";import{D as i}from"./index-B7TSYtZV.js";/* empty css              */import{d as a}from"./defineDoc-C6xIJe2e.js";const n=[{label:"项目名称",value:"Willa AI Console",description:"用于管理 AI 组件、文档和示例站点。"},{label:"当前状态",value:e.jsx(l,{tone:"success",children:"运行中"})},{label:"负责人",value:"Design Platform"},{label:"更新时间",value:"2026-06-11 09:30"}],o=[{label:"模型",value:"willa-ai-default"},{label:"上下文",value:"64K"},{label:"温度",value:"0.7"},{label:"最大输出",value:"4096 tokens"},{label:"工具调用",value:"已启用"},{label:"安全策略",value:"企业默认策略"}],r=[{label:"数据源",value:"feedback.csv",description:"包含最近 7 天的用户反馈。",action:e.jsx(s,{size:"sm",variant:"ghost",children:"查看"})},{label:"生成结果",value:"产品反馈摘要",description:"已生成可直接进入周报的摘要。",action:e.jsx(s,{size:"sm",variant:"ghost",children:"复制"})}],t={width:"min(100%, 58rem)",marginInline:"auto"},u=a({id:"description-list",name:"DescriptionList",packageName:"willa/DescriptionList",description:"用于展示详情页、配置摘要和结果元信息的键值说明列表。",imports:[{name:"DescriptionList",from:"willa/DescriptionList"}],css:"willa/DescriptionList.css",demo:{name:"DescriptionList",component:i,props:{style:t,title:"项目概览",description:"把核心状态、归属和更新时间收拢到一个紧凑区域。",items:n}},code:`
    import {
      DescriptionList,
      type DescriptionListItem,
    } from "willa/DescriptionList";
    import "willa/DescriptionList.css";

    const items: Array<DescriptionListItem> = [
      {
        label: "项目名称",
        value: "Willa AI Console",
        description: "用于管理 AI 组件、文档和示例站点。",
      },
      { label: "当前状态", value: "运行中" },
      { label: "负责人", value: "Design Platform" },
    ];

    <DescriptionList
      title="项目概览"
      description="把核心状态、归属和更新时间收拢到一个紧凑区域。"
      items={items}
    />;
  `,sections:[{title:"多列布局",code:`
        const items = [
          { label: "模型", value: "willa-ai-default" },
          { label: "上下文", value: "64K" },
          { label: "温度", value: "0.7" },
          { label: "最大输出", value: "4096 tokens" },
          { label: "工具调用", value: "已启用" },
          { label: "安全策略", value: "企业默认策略" },
        ];

        <DescriptionList
          title="模型配置"
          items={items}
          columns={3}
          size="sm"
        />;
      `,content:e.jsx("div",{style:t,children:e.jsx(i,{title:"模型配置",items:o,columns:3,size:"sm"})})},{title:"带操作",code:`
        const items = [
          {
            label: "数据源",
            value: "feedback.csv",
            description: "包含最近 7 天的用户反馈。",
            action: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <DescriptionList title="任务产物" items={items} />;
      `,content:e.jsx("div",{style:t,children:e.jsx(i,{title:"任务产物",items:r})})},{title:"轻量列表",code:`
        <DescriptionList
          variant="plain"
          items={[
            { label: "请求 ID", value: "req_6a4c89" },
            { label: "耗时", value: "1.28s" },
            { label: "命中来源", value: "12 条" },
          ]}
        />;
      `,content:e.jsx("div",{style:t,children:e.jsx(i,{variant:"plain",items:[{label:"请求 ID",value:"req_6a4c89"},{label:"耗时",value:"1.28s"},{label:"命中来源",value:"12 条"}]})})}],props:[{name:"items",type:"Array<DescriptionListItem>",required:!0,description:"说明项列表。"},{name:"title",type:"ReactNode",description:"列表标题。"},{name:"description",type:"ReactNode",description:"列表补充说明。"},{name:"columns",type:"1 | 2 | 3",defaultValue:"1",description:"桌面端列数，移动端会自动收敛为单列。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"列表密度。"},{name:"variant",type:'"default" | "plain"',defaultValue:'"default"',description:"展示形态，plain 适合嵌入已有卡片或面板。"},{name:"DescriptionListItem.id",type:"string | number",group:"DescriptionListItem",description:"说明项稳定标识，未传时使用数组下标。"},{name:"DescriptionListItem.label",type:"ReactNode",required:!0,group:"DescriptionListItem",description:"说明项名称。"},{name:"DescriptionListItem.value",type:"ReactNode",required:!0,group:"DescriptionListItem",description:"说明项内容。"},{name:"DescriptionListItem.description",type:"ReactNode",group:"DescriptionListItem",description:"说明项补充描述。"},{name:"DescriptionListItem.action",type:"ReactNode",group:"DescriptionListItem",description:"说明项右侧操作。"}]});export{u as default};
