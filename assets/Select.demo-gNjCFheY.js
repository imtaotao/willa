import{ag as e}from"./index-BHVmaN2F.js";import{S as t}from"./index-C9kVgNxY.js";/* empty css              */import{d as i}from"./defineDoc-CUYqPx2J.js";const l={display:"grid",gap:"0.9rem",maxWidth:"34rem"},a=[{value:"fast",label:"快速模式"},{value:"balanced",label:"均衡模式"},{value:"quality",label:"高质量模式"}],c=i({id:"select",name:"Select",packageName:"willa/Select",description:"用于单选下拉，适合表单、筛选和配置场景。",imports:[{name:"Select",from:"willa/Select"}],css:"willa/Select.css",demo:{name:"Select",component:t,props:{options:a,defaultValue:"balanced",width:"100%"}},code:`
    import { Select } from "willa/Select";
    import "willa/Select.css";

    const options = [
      { value: "fast", label: "快速模式" },
      { value: "balanced", label: "均衡模式" },
      { value: "quality", label: "高质量模式" },
    ];

    <Select options={options} defaultValue="balanced" width="100%" />
  `,sections:[{title:"基础状态",content:e.jsxs("div",{style:l,children:[e.jsx(t,{placeholder:"选择模型模式",options:a,width:"100%"}),e.jsx(t,{defaultValue:"balanced",options:a,variant:"soft",width:"100%"}),e.jsx(t,{invalid:!0,defaultValue:"",placeholder:"请选择必填项",options:a,width:"100%"}),e.jsx(t,{disabled:!0,defaultValue:"fast",options:a,width:"100%"})]})},{title:"尺寸",content:e.jsxs("div",{style:l,children:[e.jsx(t,{size:"sm",options:a,defaultValue:"fast"}),e.jsx(t,{size:"md",options:a,defaultValue:"balanced"}),e.jsx(t,{size:"lg",options:a,defaultValue:"quality"})]})}],props:[{name:"options",type:"Array<SelectOption>",required:!0,description:"下拉选项。"},{name:"placeholder",type:"string",description:"未选择时展示的占位选项。"},{name:"size",type:'"sm" | "md" | "lg"',description:"选择框尺寸。"},{name:"variant",type:'"outline" | "soft"',description:"选择框视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择框宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",description:"展示错误状态。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"onValueChange",type:"(value: string, option: SelectOption) => void",description:"选中值变化时触发。"}]});export{c as default};
