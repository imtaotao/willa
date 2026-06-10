import{ah as t,J as i,_ as n,u as e,g as r,q as a}from"./index-Bbpg_ggT.js";import{B as o}from"./index-Do-PX5Hd.js";import{F as s}from"./index-BMqUe5_C.js";/* empty css              */import{d as c}from"./defineDoc-staImyBT.js";import"./heading-CsXbdISV.js";const m={display:"grid",gap:"1rem",maxWidth:"34rem"},u=c({id:"form-actions",name:"FormActions",category:"form",packageName:"willa/FormActions",description:"用于表单底部提交、取消和辅助操作的布局组件。",imports:[{name:"FormActions",from:"willa/FormActions"}],css:"willa/FormActions.css",demo:{name:"FormActions",component:s,props:{gap:"md"},children:[{name:"Button",component:o,props:{variant:"ghost"},children:"取消"},{name:"Button",component:o,props:{type:"submit"},children:"保存"}]},code:`
    import { Button } from "willa/Button";
    import { FormActions } from "willa/FormActions";
    import "willa/Button.css";
    import "willa/FormActions.css";

    <FormActions gap="md">
      <Button variant="ghost">取消</Button>
      <Button type="submit">保存</Button>
    </FormActions>
  `,sections:[{title:"对齐方式",content:t.jsxs("div",{style:m,children:[t.jsxs(s,{align:"start",children:[t.jsx(o,{size:"sm",children:"保存"}),t.jsx(o,{size:"sm",variant:"ghost",children:"取消"})]}),t.jsxs(s,{align:"between",children:[t.jsx(o,{size:"sm",variant:"ghost",children:"删除"}),t.jsx(o,{size:"sm",children:"保存"})]})]})},{title:"图标操作",content:t.jsxs(s,{align:"start",gap:"xs",children:[t.jsx(i,{icon:t.jsx(n,{}),ariaLabel:"重新加载",size:"sm",variant:"ghost"}),t.jsx(i,{icon:t.jsx(e,{}),ariaLabel:"下载",size:"sm",variant:"ghost"}),t.jsx(i,{icon:t.jsx(r,{}),ariaLabel:"确认",size:"sm",variant:"ghost"}),t.jsx(i,{icon:t.jsx(a,{}),ariaLabel:"关闭",size:"sm",variant:"ghost"})]})},{title:"纵向布局",content:t.jsxs(s,{direction:"column",children:[t.jsx(o,{children:"确认提交"}),t.jsx(o,{variant:"outline",children:"稍后再说"})]})}],props:[{name:"children",type:"ReactNode",required:!0,description:"操作按钮或自定义操作内容。"},{name:"align",type:'"start" | "end" | "between"',description:"横向对齐方式。"},{name:"direction",type:'"row" | "column"',description:"排列方向。"},{name:"gap",type:'"xs" | "sm" | "md"',description:"操作项之间的间距。"},{name:"sticky",type:"boolean",description:"吸附在滚动容器底部。"}]});export{u as default};
