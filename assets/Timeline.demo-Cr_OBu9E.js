import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{B as t,N as n,S as r,_ as i,l as a}from"./react-icons.esm-mVdwEXuX.js";import{t as o}from"./Button-O1aY2iqB.js";import{a as s}from"./index-Do4z6LCr.js";import"./style-B00R6KjV.js";import{t as c}from"./defineDoc-Cid5xIoZ.js";import{t as l}from"./Timeline-295Bn11_.js";var u=e(),d={width:`min(100%, 48rem)`,marginInline:`auto`},f={display:`flex`,flexWrap:`wrap`,gap:`0.45rem`},p=[{id:`created`,title:`创建项目`,time:`09:12`,description:`项目初始化完成，已生成默认目录和组件配置。`,tone:`success`,icon:(0,u.jsx)(a,{}),meta:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{size:`sm`,tone:`success`,children:`已完成`}),(0,u.jsx)(`span`,{children:`由 Willa Bot 执行`})]})},{id:`review`,title:`等待内容审核`,time:`10:04`,description:`审核通过后会进入发布队列。`,tone:`warning`,icon:(0,u.jsx)(i,{}),meta:(0,u.jsx)(s,{size:`sm`,tone:`warning`,children:`待处理`})},{id:`published`,title:`发布到文档站`,time:`11:30`,description:`本次发布包含 6 个组件页面和 2 个示例修复。`,tone:`info`,icon:(0,u.jsx)(n,{})}],m=[{id:`sync`,title:`同步组件状态`,time:`刚刚`,description:`已读取 packages、docs 和 example 的组件注册信息。`,tone:`success`,icon:(0,u.jsx)(a,{}),action:(0,u.jsx)(o,{size:`sm`,variant:`ghost`,children:`查看详情`})},{id:`build`,title:`构建校验失败`,time:`2 分钟前`,description:`Dialog.demo.tsx 存在未处理的异步示例类型错误。`,tone:`danger`,icon:(0,u.jsx)(r,{}),action:(0,u.jsxs)(`div`,{style:f,children:[(0,u.jsx)(o,{size:`sm`,variant:`soft`,children:`重试`}),(0,u.jsx)(o,{size:`sm`,variant:`ghost`,children:`查看日志`})]})},{id:`deploy`,title:`等待部署`,time:`5 分钟前`,description:`预览环境将在构建通过后自动更新。`,icon:(0,u.jsx)(t,{})}],h=c({id:`timeline`,name:`Timeline`,packageName:`willa/Timeline`,description:`用于展示事件流、操作记录、发布过程和审核轨迹。`,imports:[{name:`Timeline`,from:`willa/Timeline`}],css:`willa/Timeline.css`,demo:{name:`Timeline`,component:l,props:{title:`项目动态`,description:`按时间顺序展示关键事件和当前状态。`,items:p,style:d}},code:`
    import { Timeline, type TimelineItem } from "willa/Timeline";
    import "willa/Timeline.css";

    const items: Array<TimelineItem> = [
      {
        id: "created",
        title: "创建项目",
        time: "09:12",
        description: "项目初始化完成，已生成默认目录和组件配置。",
        tone: "success",
      },
      {
        id: "review",
        title: "等待内容审核",
        time: "10:04",
        description: "审核通过后会进入发布队列。",
        tone: "warning",
      },
      {
        id: "published",
        title: "发布到文档站",
        time: "11:30",
        description: "本次发布包含 6 个组件页面和 2 个示例修复。",
        tone: "info",
      },
    ];

    <Timeline
      title="项目动态"
      description="按时间顺序展示关键事件和当前状态。"
      items={items}
    />;
  `,sections:[{title:`操作记录`,code:`
        <Timeline
          items={operationItems}
          title="构建过程"
          description="每个节点都可以带图标、操作按钮和状态色。"
        />;
      `,content:(0,u.jsx)(`div`,{style:d,children:(0,u.jsx)(l,{items:m,title:`构建过程`,description:`每个节点都可以带图标、操作按钮和状态色。`})})},{title:`紧凑列表`,code:`
        <Timeline
          items={compactItems}
          variant="compact"
          size="sm"
        />;
      `,content:(0,u.jsx)(`div`,{style:d,children:(0,u.jsx)(l,{items:[{id:`draft`,title:`保存草稿`,time:`昨天 18:20`,description:`更新了组件 API 说明和可访问性备注。`},{id:`comment`,title:`新增评审意见`,time:`今天 09:18`,description:`建议补充移动端折叠状态。`,tone:`info`},{id:`done`,title:`完成修复`,time:`今天 10:02`,description:`已同步 demo 和 props 文档。`,tone:`success`}],variant:`compact`,size:`sm`})})}],props:[{name:`title`,type:`ReactNode`,description:`时间线标题。`},{name:`description`,type:`ReactNode`,description:`标题下方的说明。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`节点和内容密度，默认 md。`},{name:`variant`,type:`"default" | "compact"`,defaultValue:`"default"`,description:`默认卡片式时间线或轻量紧凑时间线。`},{name:`className`,type:`string`,description:`传给根节点的类名。`},{name:`TimelineItem.id`,type:`string | number`,description:`节点稳定标识，未传时使用数组下标。`},{name:`TimelineItem.title`,type:`ReactNode`,required:!0,description:`节点标题。`},{name:`TimelineItem.time`,type:`ReactNode`,description:`节点时间或阶段信息。`},{name:`TimelineItem.description`,type:`ReactNode`,description:`节点简短说明。`},{name:`TimelineItem.content`,type:`ReactNode`,description:`节点的扩展内容区域。`},{name:`TimelineItem.meta`,type:`ReactNode`,description:`标签、来源、执行人等辅助信息。`},{name:`TimelineItem.icon`,type:`ReactNode`,description:`自定义节点图标。`},{name:`TimelineItem.action`,type:`ReactNode`,description:`节点右侧操作区。`},{name:`TimelineItem.onClick`,type:`(event: MouseEvent | KeyboardEvent) => void`,description:`点击或键盘激活节点时触发。`},{name:`TimelineItem.tone`,type:`"default" | "info" | "success" | "warning" | "danger"`,defaultValue:`"default"`,description:`节点状态色。`},{name:`TimelineItem.className`,type:`string`,description:`节点根元素 className。`},{name:`items`,type:`Array<TimelineItem>`,required:!0,description:`数据项。`}]});export{h as default};