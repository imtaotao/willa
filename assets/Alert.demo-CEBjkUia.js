import{a_ as e,h as i}from"./index-BqJrBk0S.js";import{A as t}from"./index-Dx0AS8I6.js";/* empty css              */import{d as o}from"./defineDoc-AD2LY6T6.js";const s={display:"grid",gap:"0.85rem"},n={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"0.85rem"},p=o({id:"alert",name:"Alert",packageName:"willa/Alert",description:"用于页面或区块内展示操作结果、异步状态和系统反馈，支持关闭、操作区、横幅和可访问性播报；文档正文里的长文本语义提示优先使用 Callout。",imports:[{name:"Alert",from:"willa/Alert"}],css:"willa/Alert.css",demo:{name:"Alert",component:t,props:{type:"success",showIcon:!0,title:"发布成功",description:"内容已保存并进入发布队列，稍后可在任务中心查看处理结果。"}},code:`
    import { Alert } from "willa/Alert";
    import "willa/Alert.css";

    <Alert
      type="success"
      showIcon
      title="发布成功"
      description="内容已保存并进入发布队列，稍后可在任务中心查看处理结果。"
    />;
  `,sections:[{title:"语义类型",code:`
        <div style={{ display: "grid", gap: "0.85rem" }}>
          <Alert type="info" showIcon title="同步进行中" description="系统正在拉取最新配置，页面数据可能会短暂延迟。" />
          <Alert type="success" showIcon title="保存完成" description="表单变更已写入服务端，团队成员可以查看最新版本。" />
          <Alert type="warning" showIcon title="发布窗口即将关闭" description="当前任务仍可继续提交，但建议在截止前完成确认。" />
          <Alert type="error" showIcon title="提交失败" description="接口返回校验错误，请修复表单中的必填项后重试。" />
        </div>;
      `,content:e.jsxs("div",{style:s,children:[e.jsx(t,{type:"info",showIcon:!0,title:"同步进行中",description:"系统正在拉取最新配置，页面数据可能会短暂延迟。"}),e.jsx(t,{type:"success",showIcon:!0,title:"保存完成",description:"表单变更已写入服务端，团队成员可以查看最新版本。"}),e.jsx(t,{type:"warning",showIcon:!0,title:"发布窗口即将关闭",description:"当前任务仍可继续提交，但建议在截止前完成确认。"}),e.jsx(t,{type:"error",showIcon:!0,title:"提交失败",description:"接口返回校验错误，请修复表单中的必填项后重试。"})]})},{title:"操作与关闭",code:`
        <Alert
          type="warning"
          showIcon
          closable
          title="版本即将过期"
          description="当前配置仍可继续使用，但建议在下次发布前完成迁移。"
          action={<Button size="sm" variant="soft">查看详情</Button>}
        />;
      `,content:e.jsx(t,{type:"warning",showIcon:!0,closable:!0,title:"版本即将过期",description:"当前配置仍可继续使用，但建议在下次发布前完成迁移。",action:e.jsx(i,{size:"sm",variant:"soft",children:"查看详情"})})},{title:"横幅提示",code:`
        <Alert
          banner
          showIcon
          closable={{ closeLabel: "关闭发布提示" }}
          title="系统将在 22:00 发布更新"
          description="发布期间部分写入操作可能短暂排队。"
        />;
      `,content:e.jsx(t,{banner:!0,showIcon:!0,closable:{closeLabel:"关闭发布提示"},title:"系统将在 22:00 发布更新",description:"发布期间部分写入操作可能短暂排队。"})},{title:"视觉样式",code:`
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.85rem" }}>
          <Alert type="success" variant="outlined" showIcon title="Outlined" description="适合普通页面信息提示。" />
          <Alert type="success" variant="filled" showIcon title="Filled" description="适合需要更强视觉提示的状态。" />
        </div>;
      `,content:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"success",variant:"outlined",showIcon:!0,title:"Outlined",description:"适合普通页面信息提示。"}),e.jsx(t,{type:"success",variant:"filled",showIcon:!0,title:"Filled",description:"适合需要更强视觉提示的状态。"})]})}],props:[{name:"type",type:'"success" | "info" | "warning" | "error"',defaultValue:'banner ? "warning" : "info"',description:"提示的语义类型，同时影响默认图标、颜色和默认 role。"},{name:"variant",type:'"outlined" | "filled"',defaultValue:'"outlined"',description:"提示的视觉样式。"},{name:"title",type:"ReactNode",description:"提示标题。"},{name:"description",type:"ReactNode",description:"提示说明内容。"},{name:"action",type:"ReactNode",description:"右侧操作区，常用于放置按钮或链接。"},{name:"banner",type:"boolean",defaultValue:"false",description:"使用横幅样式；未指定 type 时默认使用 warning。"},{name:"showIcon",type:"boolean",defaultValue:"banner 时为 true，否则为 false",description:"是否展示左侧语义图标。"},{name:"icon",type:"ReactNode",description:"自定义左侧图标，未传时按 type 使用默认图标。"},{name:"closable",type:"boolean | AlertClosableOptions",defaultValue:"false",description:"是否展示关闭按钮；对象形式可配置 closeIcon、closeLabel、onClose 和 afterClose。"},{name:"classes",type:'Partial<Record<"root" | "icon" | "content" | "title" | "description" | "actions" | "close", string>>',description:"语义槽位 className，用于局部样式扩展。"},{name:"styles",type:'Partial<Record<"root" | "icon" | "content" | "title" | "description" | "actions" | "close", CSSProperties>>',description:"语义槽位内联样式，用于局部样式扩展。"},{name:"role",type:"ComponentPropsWithoutRef<'div'>['role']",defaultValue:"warning/error 为 alert，其它类型为 status",description:"覆盖根节点可访问性语义。"}]});export{p as default};
