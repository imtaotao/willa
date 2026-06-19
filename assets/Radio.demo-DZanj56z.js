import{aZ as b,aX as a,aH as n}from"./index-57PE8A73.js";import{d as R}from"./defineDoc-BvXI7Opj.js";const e=b.forwardRef((r,c)=>{const{label:i,description:s,size:m="md",invalid:p=!1,inputClassName:u,className:v,disabled:d,...l}=r,t=p||l["aria-invalid"]===!0||l["aria-invalid"]==="true";return a.jsxs("label",{className:n("willa-radio",`willa-radio--${m}`,d&&"willa-radio--disabled",t&&"willa-radio--invalid",v),children:[a.jsxs("span",{className:"willa-radio-control",children:[a.jsx("input",{...l,ref:c,className:n("willa-radio-input",u),disabled:d,type:"radio","aria-invalid":t||l["aria-invalid"]}),a.jsx("span",{className:"willa-radio-dot","aria-hidden":"true"})]}),i||s?a.jsxs("span",{className:"willa-radio-content",children:[i?a.jsx("span",{className:"willa-radio-label",children:i}):null,s?a.jsx("span",{className:"willa-radio-description",children:s}):null]}):null]})});e.displayName="Radio";const o={display:"grid",gap:"0.9rem",maxWidth:"42rem"},y=R({id:"radio",name:"Radio",category:"form",packageName:"willa/Radio",description:"用于互斥选项和轻量配置选择。",imports:[{name:"Radio",from:"willa/Radio"}],css:"willa/Radio.css",demo:{name:"Radio",component:e,props:{name:"model",value:"balanced",label:"均衡模式",description:"兼顾响应速度和回答质量。",defaultChecked:!0}},code:`
    import { Radio } from "willa/Radio";
    import "willa/Radio.css";

    <Radio
      name="model"
      value="balanced"
      label="均衡模式"
      description="兼顾响应速度和回答质量。"
      defaultChecked
    />;
  `,sections:[{title:"选项组",code:`
        <div style={stackStyle}>
          <Radio name="tone" value="fast" label="快速" />
          <Radio
            name="tone"
            value="balanced"
            label="均衡"
            description="推荐给大多数任务。"
            defaultChecked
          />
          <Radio name="tone" value="quality" label="高质量" />
          <Radio name="tone" value="disabled" label="不可用选项" disabled />
        </div>;
      `,content:a.jsxs("div",{style:o,children:[a.jsx(e,{name:"tone",value:"fast",label:"快速"}),a.jsx(e,{name:"tone",value:"balanced",label:"均衡",description:"推荐给大多数任务。",defaultChecked:!0}),a.jsx(e,{name:"tone",value:"quality",label:"高质量"}),a.jsx(e,{name:"tone",value:"disabled",label:"不可用选项",disabled:!0})]})},{title:"状态",code:`
        <div style={stackStyle}>
          <Radio name="state" value="invalid" label="错误状态" invalid />
          <Radio name="state-size" value="sm" size="sm" label="紧凑选项" />
        </div>;
      `,content:a.jsxs("div",{style:o,children:[a.jsx(e,{name:"state",value:"invalid",label:"错误状态",invalid:!0}),a.jsx(e,{name:"state-size",value:"sm",size:"sm",label:"紧凑选项"})]})}],props:[{name:"label",type:"ReactNode",description:"选项文案。"},{name:"description",type:"ReactNode",description:"选项补充说明。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"单选框尺寸。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{y as default};
