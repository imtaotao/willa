import{ag as e}from"./index-BHVmaN2F.js";import{C as t}from"./index-3PXXwQ1A.js";/* empty css              */import{d as o}from"./defineDoc-CUYqPx2J.js";const i={display:"grid",gap:"0.9rem",maxWidth:"34rem"},n=o({id:"checkbox",name:"Checkbox",packageName:"willa/Checkbox",description:"用于多选、协议确认、布尔配置和列表选择。",imports:[{name:"Checkbox",from:"willa/Checkbox"}],css:"willa/Checkbox.css",demo:{name:"Checkbox",component:t,props:{label:"允许 AI 读取当前文档",description:"只会读取你选择的上下文范围。",defaultChecked:!0}},code:`
    import { Checkbox } from "willa/Checkbox";
    import "willa/Checkbox.css";

    <Checkbox
      label="允许 AI 读取当前文档"
      description="只会读取你选择的上下文范围。"
      defaultChecked
    />
  `,sections:[{title:"状态",content:e.jsxs("div",{style:i,children:[e.jsx(t,{label:"普通选项"}),e.jsx(t,{defaultChecked:!0,label:"已选中选项"}),e.jsx(t,{indeterminate:!0,label:"部分选中"}),e.jsx(t,{invalid:!0,label:"错误状态"}),e.jsx(t,{disabled:!0,label:"禁用选项"})]})},{title:"尺寸",content:e.jsxs("div",{style:i,children:[e.jsx(t,{size:"sm",label:"紧凑选项"}),e.jsx(t,{size:"md",label:"默认选项"})]})}],props:[{name:"label",type:"ReactNode",description:"选项文案。"},{name:"description",type:"ReactNode",description:"选项补充说明。"},{name:"size",type:'"sm" | "md"',description:"复选框尺寸。"},{name:"invalid",type:"boolean",description:"展示错误状态。"},{name:"indeterminate",type:"boolean",description:"展示部分选中状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{n as default};
