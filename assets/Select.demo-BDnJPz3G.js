import{ak as e}from"./index-qn4eWa1o.js";import{S as t}from"./index-CiOigAa4.js";import{d as i}from"./defineDoc-BS0X7wWk.js";import"./index-C027SJLx.js";import"./useFloatingPanel-CP_gjnYk.js";const a={display:"grid",gap:"0.9rem",maxWidth:"42rem"},l=[{value:"fast",label:"快速模式"},{value:"balanced",label:"均衡模式"},{value:"quality",label:"高质量模式"}],p=i({id:"select",name:"Select",category:"form",packageName:"willa/Select",description:"用于单选下拉，适合表单、筛选和配置场景。",imports:[{name:"Select",from:"willa/Select"}],css:"willa/Select.css",demo:{name:"Select",component:t,props:{options:l,defaultValue:"balanced",width:"100%"}},code:`
    import { Select } from "willa/Select";
    import "willa/Select.css";

    const options = [
      { value: "fast", label: "快速模式" },
      { value: "balanced", label: "均衡模式" },
      { value: "quality", label: "高质量模式" },
    ];

    <Select options={options} defaultValue="balanced" width="100%" />;
  `,sections:[{title:"基础状态",code:`
        <div style={stackStyle}>
          <Select placeholder="选择模型模式" options={options} width="100%" />
          <Select
            defaultValue="balanced"
            options={options}
            variant="soft"
            width="100%"
          />
          <Select
            invalid
            defaultValue=""
            placeholder="请选择必填项"
            options={options}
            width="100%"
          />
          <Select disabled defaultValue="fast" options={options} width="100%" />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{placeholder:"选择模型模式",options:l,width:"100%"}),e.jsx(t,{defaultValue:"balanced",options:l,variant:"soft",width:"100%"}),e.jsx(t,{invalid:!0,defaultValue:"",placeholder:"请选择必填项",options:l,width:"100%"}),e.jsx(t,{disabled:!0,defaultValue:"fast",options:l,width:"100%"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <Select size="sm" options={options} defaultValue="fast" />
          <Select size="md" options={options} defaultValue="balanced" />
          <Select size="lg" options={options} defaultValue="quality" />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{size:"sm",options:l,defaultValue:"fast"}),e.jsx(t,{size:"md",options:l,defaultValue:"balanced"}),e.jsx(t,{size:"lg",options:l,defaultValue:"quality"})]})}],props:[{name:"options",type:"Array<SelectOption>",required:!0,description:"下拉选项。"},{name:"placeholder",type:"string",description:"未选择时展示的占位选项。"},{name:"size",type:'"sm" | "md" | "lg"',description:"选择框尺寸。"},{name:"variant",type:'"outline" | "soft"',description:"选择框视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择框宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",description:"展示错误状态。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"onValueChange",type:"(value: string, option: SelectOption) => void",description:"选中值变化时触发。"}]});export{p as default};
