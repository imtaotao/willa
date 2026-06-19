import{aQ as e}from"./index-coXx_Neu.js";import{S as i}from"./index-3S_Y1IBq.js";import{d as l}from"./defineDoc-DluqpvSt.js";const t={display:"grid",gap:"0.9rem",maxWidth:"42rem"},d=l({id:"switch",name:"Switch",category:"form",packageName:"willa/Switch",description:"用于开关型配置，适合产品设置和能力启停。",imports:[{name:"Switch",from:"willa/Switch"}],css:"willa/Switch.css",demo:{name:"Switch",component:i,props:{label:"启用自动摘要",description:"生成结果后自动提取重点。",defaultChecked:!0}},code:`
    import { Switch } from "willa/Switch";
    import "willa/Switch.css";

    <Switch
      label="启用自动摘要"
      description="生成结果后自动提取重点。"
      defaultChecked
    />;
  `,sections:[{title:"配置项",code:`
        <div style={stackStyle}>
          <Switch label="联网检索" description="允许模型访问公开资料。" />
          <Switch
            defaultChecked
            label="引用来源"
            description="回答里展示来源和可信度。"
          />
          <Switch disabled label="企业策略锁定" />
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(i,{label:"联网检索",description:"允许模型访问公开资料。"}),e.jsx(i,{defaultChecked:!0,label:"引用来源",description:"回答里展示来源和可信度。"}),e.jsx(i,{disabled:!0,label:"企业策略锁定"})]})},{title:"状态",code:`
        <div style={stackStyle}>
          <Switch invalid label="错误状态" />
          <Switch size="sm" label="紧凑开关" />
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(i,{invalid:!0,label:"错误状态"}),e.jsx(i,{size:"sm",label:"紧凑开关"})]})}],props:[{name:"label",type:"ReactNode",description:"开关文案。"},{name:"description",type:"ReactNode",description:"开关补充说明。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"开关尺寸。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{d as default};
