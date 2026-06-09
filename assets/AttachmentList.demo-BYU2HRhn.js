import{af as t,x as n,ah as i,Y as u,J as h}from"./index-B9hRX5g5.js";import{A as s}from"./index-B2EdO-wF.js";import{B as o}from"./index-DB5BfnjE.js";import{G as f}from"./index-CpVp7-dX.js";/* empty css              */import{d as g}from"./defineDoc-DC6pS5Ki.js";import"./heading-EO6dVfnk.js";const x=[{id:"feedback",name:"feedback.csv",meta:"12 KB",href:"data:text/csv;charset=utf-8,id,feedback%0A1,export%20is%20slow",downloadName:"feedback.csv"},{id:"roadmap",name:"roadmap.md",meta:"8 KB",href:"data:text/markdown;charset=utf-8,%23%20Roadmap",downloadName:"roadmap.md"},{id:"screenshot",name:"screen-capture.png",meta:"上传中",icon:t.jsx(h,{}),status:"uploading",progress:64}],I={display:"grid",gap:"0.85rem",width:"min(100%, 42rem)"},v=()=>{const[r,m]=i.useState(x),[c,d]=i.useState(36);i.useEffect(()=>{const e=window.setInterval(()=>{d(a=>a>=96?12:a+12)},900);return()=>window.clearInterval(e)},[]);const p=r.map(e=>e.status==="uploading"?{...e,progress:c}:e);return t.jsxs("div",{style:I,children:[t.jsx(s,{items:p,onRemove:e=>m(a=>a.filter(l=>l.id!==e.id))}),t.jsx(s,{layout:"stack",size:"md",items:[{id:"error",name:"customer-export.xlsx",meta:"上传失败",status:"error",actions:t.jsx(o,{size:"sm",variant:"ghost",icon:t.jsx(u,{}),children:"重试"})}]})]})},R=g({id:"attachment-list",name:"AttachmentList",category:"ai",packageName:"willa/AttachmentList",description:"用于展示 AI 输入、消息和上下文面板里的附件列表。",imports:[{name:"AttachmentList",from:"willa/AttachmentList"}],css:"willa/AttachmentList.css",demo:{name:"AttachmentListPreview",component:v},code:`
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
        },
        {
          id: "screenshot",
          name: "screen-capture.png",
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
  `,sections:[{title:"纵向布局",content:t.jsx(s,{layout:"stack",items:[{id:"architecture",name:"architecture.md",meta:"仓库结构和包边界",icon:t.jsx(n,{})},{id:"component",name:"component.md",meta:"组件创建和迁移规则",icon:t.jsx(n,{})}]})},{title:"空状态",content:t.jsx(s,{items:[],empty:"暂无上下文附件"})},{title:"组合操作",content:t.jsx(f,{gap:"sm",direction:"column",align:"stretch",children:t.jsx(s,{items:[{id:"logs",name:"agent-run.log",meta:"执行日志",actions:t.jsx(o,{size:"sm",variant:"ghost",children:"查看"})}]})})}],props:[{name:"items",type:"Array<AttachmentListItem>",required:!0,description:"附件数据列表。"},{name:"size",type:'"sm" | "md"',description:"尺寸，默认 sm。"},{name:"layout",type:'"inline" | "stack"',description:"布局方式，默认 inline。"},{name:"empty",type:"ReactNode",description:"空列表时展示的内容。"},{name:"onOpen",type:"(event: AttachmentListItemEvent) => void",description:"点击附件时触发。"},{name:"onRemove",type:"(item: AttachmentListItem) => void",description:"点击移除按钮时触发。传入后每个附件展示移除按钮。"}]});export{R as default};
