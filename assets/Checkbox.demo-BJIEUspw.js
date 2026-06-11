import{al as e}from"./index-CVWWokxc.js";import{C as l}from"./index-C85x3qgm.js";import{d as t}from"./defineDoc-e_S1Bl0w.js";const i={display:"grid",gap:"0.9rem",maxWidth:"42rem"},c=t({id:"checkbox",name:"Checkbox",category:"form",packageName:"willa/Checkbox",description:"用于多选、协议确认、布尔配置和列表选择。",imports:[{name:"Checkbox",from:"willa/Checkbox"}],css:"willa/Checkbox.css",demo:{name:"Checkbox",component:l,props:{label:"允许 AI 读取当前文档",description:"只会读取你选择的上下文范围。",defaultChecked:!0}},code:`
    import { Checkbox } from "willa/Checkbox";
    import "willa/Checkbox.css";

    <Checkbox
      label="允许 AI 读取当前文档"
      description="只会读取你选择的上下文范围。"
      defaultChecked
    />;
  `,sections:[{title:"状态",code:`
        <div style={stackStyle}>
          <Checkbox label="普通选项" />
          <Checkbox defaultChecked label="已选中选项" />
          <Checkbox indeterminate label="部分选中" />
          <Checkbox invalid label="错误状态" />
          <Checkbox disabled label="禁用选项" />
        </div>;
      `,content:e.jsxs("div",{style:i,children:[e.jsx(l,{label:"普通选项"}),e.jsx(l,{defaultChecked:!0,label:"已选中选项"}),e.jsx(l,{indeterminate:!0,label:"部分选中"}),e.jsx(l,{invalid:!0,label:"错误状态"}),e.jsx(l,{disabled:!0,label:"禁用选项"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <Checkbox size="sm" label="紧凑选项" />
          <Checkbox size="md" label="默认选项" />
        </div>;
      `,content:e.jsxs("div",{style:i,children:[e.jsx(l,{size:"sm",label:"紧凑选项"}),e.jsx(l,{size:"md",label:"默认选项"})]})}],props:[{name:"label",type:"ReactNode",description:"选项文案。"},{name:"description",type:"ReactNode",description:"选项补充说明。"},{name:"size",type:'"sm" | "md"',description:"复选框尺寸。"},{name:"invalid",type:"boolean",description:"展示错误状态。"},{name:"indeterminate",type:"boolean",description:"展示部分选中状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{c as default};
