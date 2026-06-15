import{aB as u,az as i,an as d}from"./index-C16Conw4.js";import{d as b}from"./defineDoc-CN769hh-.js";const e=u.forwardRef((r,o)=>{const{label:l,description:s,size:p="md",invalid:w=!1,inputClassName:h,className:m,disabled:t,...a}=r,c=w||a["aria-invalid"]===!0||a["aria-invalid"]==="true";return i.jsxs("label",{className:d("willa-switch",`willa-switch--${p}`,t&&"willa-switch--disabled",c&&"willa-switch--invalid",m),children:[l||s?i.jsxs("span",{className:"willa-switch-content",children:[l?i.jsx("span",{className:"willa-switch-label",children:l}):null,s?i.jsx("span",{className:"willa-switch-description",children:s}):null]}):null,i.jsxs("span",{className:"willa-switch-control",children:[i.jsx("input",{...a,ref:o,className:d("willa-switch-input",h),disabled:t,type:"checkbox",role:"switch","aria-invalid":c||a["aria-invalid"]}),i.jsx("span",{className:"willa-switch-track","aria-hidden":"true",children:i.jsx("span",{className:"willa-switch-thumb"})})]})]})});e.displayName="Switch";const n={display:"grid",gap:"0.9rem",maxWidth:"42rem"},f=b({id:"switch",name:"Switch",category:"form",packageName:"willa/Switch",description:"用于开关型配置，适合产品设置和能力启停。",imports:[{name:"Switch",from:"willa/Switch"}],css:"willa/Switch.css",demo:{name:"Switch",component:e,props:{label:"启用自动摘要",description:"生成结果后自动提取重点。",defaultChecked:!0}},code:`
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
      `,content:i.jsxs("div",{style:n,children:[i.jsx(e,{label:"联网检索",description:"允许模型访问公开资料。"}),i.jsx(e,{defaultChecked:!0,label:"引用来源",description:"回答里展示来源和可信度。"}),i.jsx(e,{disabled:!0,label:"企业策略锁定"})]})},{title:"状态",code:`
        <div style={stackStyle}>
          <Switch invalid label="错误状态" />
          <Switch size="sm" label="紧凑开关" />
        </div>;
      `,content:i.jsxs("div",{style:n,children:[i.jsx(e,{invalid:!0,label:"错误状态"}),i.jsx(e,{size:"sm",label:"紧凑开关"})]})}],props:[{name:"label",type:"ReactNode",description:"开关文案。"},{name:"description",type:"ReactNode",description:"开关补充说明。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"开关尺寸。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"inputClassName",type:"string",description:"传给内部 input 元素的 className。"}]});export{f as default};
