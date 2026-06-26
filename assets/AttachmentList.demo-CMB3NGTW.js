import{b1 as t,Y as l,h as m,b3 as n,am as u}from"./index-Kfv3pNKk.js";import{A as a}from"./index-BNr_JU1j.js";/* empty css              *//* empty css              */import{d as h}from"./defineDoc-EZFsevgg.js";import"./index-DqErJIz7.js";import"./index-DvS-ZgDn.js";import"./dom-DvRKQOia.js";import"./index-DfjawlS7.js";const g=[{id:"feedback",name:"feedback.csv",meta:"12 KB",href:"data:text/csv;charset=utf-8,id,feedback%0A1,export%20is%20slow",downloadName:"feedback.csv",previewType:"csv",text:`id,feedback
1,export is slow`},{id:"roadmap",name:"roadmap.md",meta:"8 KB",href:"data:text/markdown;charset=utf-8,%23%20Roadmap",downloadName:"roadmap.md",previewType:"code",language:"markdown",text:`# Roadmap

- 优化文件预览
- 补充上下文附件`},{id:"screenshot",name:"screen-capture.png",meta:"428 KB",href:"https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg",previewType:"image",alt:"屏幕截图预览"},{id:"brief",name:"research-brief.pdf",meta:"上传中",status:"uploading",progress:64},{id:"error",name:"customer-export.xlsx",meta:"上传失败",status:"error",actions:t.jsx(m,{size:"sm",variant:"ghost",icon:t.jsx(u,{}),children:"重试"})}],A={display:"grid",gap:"0.85rem",width:"min(100%, 48rem)"},I={display:"grid",width:"min(100%, 34rem)"},L=()=>{const[s,r]=n.useState(g),[o,c]=n.useState(36);n.useEffect(()=>{const e=window.setInterval(()=>{c(i=>i>=96?12:i+12)},900);return()=>window.clearInterval(e)},[]);const d=s.map(e=>e.status==="uploading"?{...e,progress:o}:e);return t.jsx("div",{style:A,children:t.jsx(a,{items:d,onRemove:e=>r(i=>i.filter(p=>p.id!==e.id))})})},R=h({id:"attachment-list",name:"AttachmentList",category:"ai",packageName:"willa/AttachmentList",description:"用于展示 AI 输入、消息和上下文面板里的附件列表。带 href 的附件默认在当前页面弹窗预览。",imports:[{name:"AttachmentList",from:"willa/AttachmentList"}],css:"willa/AttachmentList.css",demo:{name:"AttachmentListPreview",component:L},code:`
    import { useEffect, useState } from "react";
    import { ReloadIcon } from "@radix-ui/react-icons";
    import { AttachmentList } from "willa/AttachmentList";
    import { Button } from "willa/Button";
    import "willa/AttachmentList.css";
    import "willa/Button.css";

    const Demo = () => {
      const [items, setItems] = useState([
        {
          id: "feedback",
          name: "feedback.csv",
          meta: "12 KB",
          href: "/feedback.csv",
          previewMode: "dialog",
        },
        {
          id: "screenshot",
          name: "screen-capture.png",
          meta: "428 KB",
          href: "https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg",
          previewType: "image",
        },
        {
          id: "brief",
          name: "research-brief.pdf",
          status: "uploading",
          progress: 64,
        },
        {
          id: "export",
          name: "customer-export.xlsx",
          status: "error",
          actions: (
            <Button size="sm" variant="ghost" icon={<ReloadIcon />}>
              重试
            </Button>
          ),
        },
      ]);
      const [progress, setProgress] = useState(36);

      useEffect(() => {
        const timer = window.setInterval(() => {
          setProgress((currentProgress) =>
            currentProgress >= 96 ? 12 : currentProgress + 12,
          );
        }, 900);

        return () => window.clearInterval(timer);
      }, []);

      const displayItems = items.map((item) =>
        item.status === "uploading" ? { ...item, progress } : item,
      );

      return (
        <AttachmentList
          items={displayItems}
          onOpen={({ item }) => {
            console.log("open", item.name);
          }}
          onRemove={(item) => {
            setItems((currentItems) =>
              currentItems.filter((currentItem) => currentItem.id !== item.id),
            );
          }}
        />
      );
    };
  `,sections:[{title:"纵向布局",code:`
        <div style={{ width: "min(100%, 34rem)" }}>
          <AttachmentList
            layout="stack"
            items={[
              {
                id: "architecture",
                name: "architecture.md",
                meta: "仓库结构和包边界",
              },
              {
                id: "component",
                name: "component.md",
                meta: "组件创建和迁移规则",
              },
            ]}
          />
        </div>;
      `,content:t.jsx("div",{style:I,children:t.jsx(a,{layout:"stack",items:[{id:"architecture",name:"architecture.md",meta:"仓库结构和包边界"},{id:"component",name:"component.md",meta:"组件创建和迁移规则"}]})})},{title:"空状态",code:`
        <AttachmentList items={[]} empty="暂无上下文附件" />;
      `,content:t.jsx(a,{items:[],empty:"暂无上下文附件"})},{title:"组合操作",code:`
        <AttachmentList
          items={[
            {
              id: "logs",
              name: "agent-run.log",
              meta: "执行日志",
              actions: (
                <Button size="sm" variant="ghost">
                  查看
                </Button>
              ),
            },
          ]}
        />;
      `,content:t.jsx(l,{gap:"sm",direction:"column",align:"stretch",children:t.jsx(a,{items:[{id:"logs",name:"agent-run.log",meta:"执行日志",actions:t.jsx(m,{size:"sm",variant:"ghost",children:"查看"})}]})})}],props:[{name:"items",type:"Array<AttachmentListItem>",required:!0,description:"附件数据列表。"},{name:"size",type:'"sm" | "md"',defaultValue:'"sm"',description:"尺寸，默认 sm。"},{name:"layout",type:'"inline" | "stack"',defaultValue:'"inline"',description:"布局方式，默认 inline。"},{name:"previewMode",type:'"dialog" | "link" | "download" | "none"',defaultValue:'"dialog"',description:"附件预览方式。dialog 在当前页面弹窗预览，link 新窗口打开，download 直接下载，none 只展示附件信息。"},{name:"empty",type:"ReactNode",description:"空列表时展示的内容。"},{name:"onOpen",type:"(event: AttachmentListItemEvent) => void",description:"点击附件时触发。"},{name:"onRemove",type:"(item: AttachmentListItem) => void",description:"点击移除按钮时触发。传入后每个附件展示移除按钮。"},{name:"AttachmentListItem.status",type:'"ready" | "uploading" | "error"',group:"AttachmentListItem",defaultValue:'"ready"',description:"附件状态。"},{name:"AttachmentListItem.id",type:"string",required:!0,group:"AttachmentListItem",description:"附件唯一标识。"},{name:"AttachmentListItem.name",type:"string",required:!0,group:"AttachmentListItem",description:"附件名称。"},{name:"AttachmentListItem.meta",type:"ReactNode",group:"AttachmentListItem",description:"附件辅助信息。"},{name:"AttachmentListItem.href",type:"string",group:"AttachmentListItem",description:"附件链接地址，用于打开或下载。"},{name:"AttachmentListItem.icon",type:"ReactNode",group:"AttachmentListItem",defaultValue:"由 name 推导",description:"自定义附件图标；未传时根据文件名后缀推导。"},{name:"AttachmentListItem.previewMode",type:'"dialog" | "link" | "download" | "none"',group:"AttachmentListItem",description:"覆盖单个附件的预览方式。"},{name:"AttachmentListItem.previewType",type:'"auto" | "image" | "video" | "audio" | "pdf" | "csv" | "code" | "text" | "download"',group:"AttachmentListItem",defaultValue:'"auto"',description:"覆盖单个附件的 FilePreview 类型。"},{name:"AttachmentListItem.text",type:"string",group:"AttachmentListItem",description:"文本或代码附件的预览内容。"},{name:"AttachmentListItem.language",type:"string",group:"AttachmentListItem",description:"代码或文本附件的语言标识。"},{name:"AttachmentListItem.mimeType",type:"string",group:"AttachmentListItem",description:"附件 MIME 类型，用于辅助推断预览方式。"},{name:"AttachmentListItem.poster",type:"string",group:"AttachmentListItem",description:"视频或媒体附件的封面地址。"},{name:"AttachmentListItem.alt",type:"string",group:"AttachmentListItem",description:"图片或媒体附件的替代文本。"},{name:"AttachmentListItem.progress",type:"number",group:"AttachmentListItem",description:"上传进度，通常为 0 到 100。"},{name:"AttachmentListItem.actions",type:"ReactNode",group:"AttachmentListItem",description:"附件右侧自定义操作。"},{name:"AttachmentListItem.disabled",type:"boolean",group:"AttachmentListItem",description:"是否禁用当前附件交互。"},{name:"AttachmentListItem.downloadName",type:"string",group:"AttachmentListItem",description:"下载保存时使用的文件名。"}]});export{R as default};
