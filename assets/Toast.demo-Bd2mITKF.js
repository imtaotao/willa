import{Z as t}from"./index-Bj2tkJiI.js";import{B as o}from"./index-CQnk2js0.js";import{t as e,c as s}from"./index-BdtA4rvP.js";import{d as p}from"./defineDoc-6MZyo7Ww.js";import"./heading-BSqJKdBj.js";const r={display:"flex",flexWrap:"wrap",gap:"0.65rem",alignItems:"center"};let n,i,a;const c=()=>(n??(n=s({placement:"top",duration:1600,maxToasts:2})),n),l=()=>(i??(i=s({placement:"bottom"})),i),m=()=>(a??(a=s({placement:"bottom-right"})),a),d=()=>t.jsxs("div",{style:r,children:[t.jsx(o,{variant:"solid",onClick:()=>{e.success("发布成功",{description:"内容已经进入公开队列。"})},children:"成功提示"}),t.jsx(o,{variant:"soft",onClick:()=>{c().info("顶部配置",{description:"由 createToast 创建的实例触发。"})},children:"配置实例"})]}),u=()=>t.jsx(o,{variant:"soft",onClick:()=>{e.info("草稿已归档",{action:{label:"撤销",onClick:()=>e.success("已撤销归档")}})},children:"显示操作"}),T=()=>t.jsx(o,{variant:"outline",onClick:()=>{e.warning("同步仍在进行",{description:"这个提示不会自动关闭。",duration:!1})},children:"常驻提示"}),f=()=>t.jsxs("div",{style:r,children:[t.jsx(o,{variant:"soft",onClick:()=>{c().info("顶部居中",{description:"这个提示会更快关闭。"})},children:"顶部配置"}),t.jsx(o,{variant:"outline",onClick:()=>{m().success("右下角提示")},children:"右下角配置"})]}),w=p({id:"toast",name:"Toast",packageName:"willa/Toast",description:"用于操作反馈、状态变化和轻量通知的浮层提示。",imports:[{name:"toast",from:"willa/Toast"},{name:"createToast",from:"willa/Toast"}],css:"willa/Toast.css",demo:{name:"ToastPreview",component:d},code:`
    import { Button } from "willa/Button";
    import { createToast, toast } from "willa/Toast";
    import "willa/Button.css";
    import "willa/Toast.css";

    const compactToast = createToast({
      placement: "top-right",
      duration: 3000,
      maxToasts: 4,
    });

    <>
      <Button onClick={() => toast.success("默认提示")}>
        默认实例
      </Button>
      <Button onClick={() => compactToast.info("配置后的提示")}>
        配置实例
      </Button>
    </>
  `,sections:[{title:"带操作",content:t.jsx(u,{})},{title:"常驻提示",content:t.jsx(T,{})},{title:"配置 ToastConfig",content:t.jsx(f,{})},{title:"底部展示",content:t.jsx(o,{variant:"soft",onClick:()=>{l().info("会从底部出现")},children:"底部提示"})}],props:[{name:"title",type:"ReactNode",required:!0,group:"ToastOptions",description:"提示主文案。"},{name:"description",type:"ReactNode",group:"ToastOptions",description:"提示补充说明。"},{name:"tone",type:'"info" | "success" | "warning" | "error"',group:"ToastOptions",description:"提示类型，默认是 info。"},{name:"duration",type:"number | false",group:"ToastOptions",description:"单条提示的自动关闭时间；传 false 时不会自动关闭。"},{name:"action",type:"{ label: ReactNode; onClick: () => void }",group:"ToastOptions",description:"提示右侧的可选操作。"},{name:"id",type:"string",group:"ToastOptions",description:"自定义提示 ID；相同 ID 会替换已有提示。"},{name:"placement",type:'"top-right" | "top" | "bottom" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"',group:"ToastConfig",description:"提示出现的位置，默认是右上角；top 和 bottom 分别表示顶部/底部居中。"},{name:"duration",type:"number",group:"ToastConfig",description:"默认自动关闭时间，单位毫秒，默认 3000。"},{name:"maxToasts",type:"number",group:"ToastConfig",description:"最多同时展示的提示数量，默认 4。"},{name:"className",type:"string",group:"ToastConfig",description:"传给浮层容器的类名。"}]});export{w as default};
