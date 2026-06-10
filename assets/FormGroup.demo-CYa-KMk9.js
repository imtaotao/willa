import{ah as e}from"./index-Bdj8Q3L_.js";import{C as l}from"./index-Dt6Em6EV.js";import{B as i}from"./index-mSh11lIp.js";import{F as m,a as t}from"./index-DjlUW_b-.js";import{F as a}from"./index-C_Nbs1IV.js";import{F as o}from"./index-4yI3jWIL.js";import{I as r}from"./index-CUVCdjQm.js";import{S as p}from"./index-XnbSExbP.js";/* empty css              */import{d as s}from"./defineDoc-ClbrtoXF.js";import"./heading-D9kAmVXU.js";const n=[{value:"fast",label:"快速模型"},{value:"balanced",label:"均衡模型"},{value:"quality",label:"高质量模型"}],I=s({id:"form-group",name:"FormGroup",category:"form",packageName:"willa/FormGroup",description:"用于表单分组、字段间距和移动端自适应布局。",imports:[{name:"FormGroup",from:"willa/FormGroup"}],css:"willa/FormGroup.css",demo:{name:"FormGroup",component:t,props:{title:"基础配置",description:"把相关字段收拢在同一组里。"},children:[{name:"FormField",component:o,props:{label:"工作区名称"},children:[{name:"Input",component:r,props:{defaultValue:"Willa AI"}}]}]},code:`
    import { FormField } from "willa/FormField";
    import { FormGroup } from "willa/FormGroup";
    import { Input } from "willa/Input";
    import "willa/FormField.css";
    import "willa/FormGroup.css";
    import "willa/Input.css";

    <FormGroup title="基础配置" description="把相关字段收拢在同一组里。">
      <FormField label="工作区名称">
        <Input defaultValue="Willa AI" />
      </FormField>
    </FormGroup>
  `,sections:[{title:"完整表单",content:e.jsx(m,{actions:e.jsxs(a,{children:[e.jsx(i,{variant:"ghost",children:"取消"}),e.jsx(i,{type:"submit",children:"保存"})]}),children:e.jsxs(t,{title:"模型配置",description:"适合产品设置、AI 参数和后台筛选场景。",children:[e.jsx(o,{label:"配置名称",required:!0,children:e.jsx(r,{defaultValue:"内容生成助手",width:"100%"})}),e.jsx(o,{label:"默认模型",children:e.jsx(p,{defaultValue:"balanced",options:n,width:"100%"})}),e.jsx(l,{defaultChecked:!0,label:"允许联网检索",description:"启用后会在回答前检索公开资料。"})]})})},{title:"双列布局",content:e.jsxs(t,{title:"基础信息",columns:2,children:[e.jsx(o,{label:"项目名",children:e.jsx(r,{placeholder:"项目名",width:"100%"})}),e.jsx(o,{label:"负责人",children:e.jsx(r,{placeholder:"负责人",width:"100%"})})]})}],props:[{name:"children",type:"ReactNode",required:!0,description:"分组内的字段内容。"},{name:"title",type:"ReactNode",description:"分组标题。"},{name:"description",type:"ReactNode",description:"分组说明。"},{name:"gap",type:'"sm" | "md" | "lg"',description:"字段间距。"},{name:"columns",type:"1 | 2",description:"字段列数；移动端自动回到单列。"}]});export{I as default};
