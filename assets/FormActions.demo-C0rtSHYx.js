import{aY as t,h as o,Z as s,ak as i,H as a,m as e,z as r}from"./index-DfbXHl_X.js";import{F as n}from"./index-j9cHNQSQ.js";/* empty css              */import{d as c}from"./defineDoc-C0wi4BKe.js";const m={display:"grid",gap:"1rem",maxWidth:"42rem"},h=c({id:"form-actions",name:"FormActions",category:"form",packageName:"willa/FormActions",description:"用于表单底部提交、取消和辅助操作的布局组件。",imports:[{name:"FormActions",from:"willa/FormActions"}],css:"willa/FormActions.css",demo:{name:"FormActions",component:n,props:{gap:"md"},children:[{name:"Button",component:o,props:{variant:"ghost"},children:"取消"},{name:"Button",component:o,props:{type:"submit"},children:"保存"}]},code:`
    import { Button } from "willa/Button";
    import { FormActions } from "willa/FormActions";
    import "willa/Button.css";
    import "willa/FormActions.css";

    <FormActions gap="md">
      <Button variant="ghost">取消</Button>
      <Button type="submit">保存</Button>
    </FormActions>;
  `,sections:[{title:"对齐方式",code:`
        <div style={stackStyle}>
          <FormActions align="start">
            <Button size="sm">保存</Button>
            <Button size="sm" variant="ghost">
              取消
            </Button>
          </FormActions>
          <FormActions align="between">
            <Button size="sm" variant="ghost">
              删除
            </Button>
            <Button size="sm">保存</Button>
          </FormActions>
        </div>;
      `,content:t.jsxs("div",{style:m,children:[t.jsxs(n,{align:"start",children:[t.jsx(o,{size:"sm",children:"保存"}),t.jsx(o,{size:"sm",variant:"ghost",children:"取消"})]}),t.jsxs(n,{align:"between",children:[t.jsx(o,{size:"sm",variant:"ghost",children:"删除"}),t.jsx(o,{size:"sm",children:"保存"})]})]})},{title:"图标操作",code:`
        <FormActions align="start" gap="xs">
          <IconButton
            icon={<ReloadIcon />}
            ariaLabel="重新加载"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<DownloadIcon />}
            ariaLabel="下载"
            size="sm"
            variant="ghost"
          />
          <IconButton icon={<CheckIcon />} ariaLabel="确认" size="sm" variant="ghost" />
          <IconButton
            icon={<Cross2Icon />}
            ariaLabel="关闭"
            size="sm"
            variant="ghost"
          />
        </FormActions>;
      `,content:t.jsxs(n,{align:"start",gap:"xs",children:[t.jsx(s,{icon:t.jsx(i,{}),ariaLabel:"重新加载",size:"sm",variant:"ghost"}),t.jsx(s,{icon:t.jsx(a,{}),ariaLabel:"下载",size:"sm",variant:"ghost"}),t.jsx(s,{icon:t.jsx(e,{}),ariaLabel:"确认",size:"sm",variant:"ghost"}),t.jsx(s,{icon:t.jsx(r,{}),ariaLabel:"关闭",size:"sm",variant:"ghost"})]})},{title:"纵向布局",code:`
        <FormActions direction="column">
          <Button>确认提交</Button>
          <Button variant="outline">稍后再说</Button>
        </FormActions>;
      `,content:t.jsxs(n,{direction:"column",children:[t.jsx(o,{children:"确认提交"}),t.jsx(o,{variant:"outline",children:"稍后再说"})]})}],props:[{name:"children",type:"ReactNode",required:!0,description:"操作按钮或自定义操作内容。"},{name:"align",type:'"start" | "end" | "between"',defaultValue:'"end"',description:"横向对齐方式。"},{name:"direction",type:'"row" | "column"',defaultValue:'"row"',description:"排列方向。"},{name:"gap",type:'"xs" | "sm" | "md"',defaultValue:'"sm"',description:"操作项之间的间距。"},{name:"sticky",type:"boolean",defaultValue:"false",description:"吸附在滚动容器底部。"}]});export{h as default};
