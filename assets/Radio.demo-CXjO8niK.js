import{ag as e}from"./index-BHVmaN2F.js";import{R as a}from"./index-jMxpQQQ-.js";import{d as t}from"./defineDoc-CUYqPx2J.js";const i={display:"grid",gap:"0.9rem",maxWidth:"34rem"},d=t({id:"radio",name:"Radio",packageName:"willa/Radio",description:"用于互斥选项和轻量配置选择。",imports:[{name:"Radio",from:"willa/Radio"}],css:"willa/Radio.css",demo:{name:"Radio",component:a,props:{name:"model",value:"balanced",label:"均衡模式",description:"兼顾响应速度和回答质量。",defaultChecked:!0}},code:`
    import { Radio } from "willa/Radio";
    import "willa/Radio.css";

    <Radio
      name="model"
      value="balanced"
      label="均衡模式"
      description="兼顾响应速度和回答质量。"
      defaultChecked
    />
  `,sections:[{title:"选项组",content:e.jsxs("div",{style:i,children:[e.jsx(a,{name:"tone",value:"fast",label:"快速"}),e.jsx(a,{name:"tone",value:"balanced",label:"均衡",description:"推荐给大多数任务。",defaultChecked:!0}),e.jsx(a,{name:"tone",value:"quality",label:"高质量"}),e.jsx(a,{name:"tone",value:"disabled",label:"不可用选项",disabled:!0})]})},{title:"状态",content:e.jsxs("div",{style:i,children:[e.jsx(a,{name:"state",value:"invalid",label:"错误状态",invalid:!0}),e.jsx(a,{name:"state-size",value:"sm",size:"sm",label:"紧凑选项"})]})}],props:[{name:"label",type:"ReactNode",description:"选项文案。"},{name:"description",type:"ReactNode",description:"选项补充说明。"},{name:"size",type:'"sm" | "md"',description:"单选框尺寸。"},{name:"invalid",type:"boolean",description:"展示错误状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{d as default};
