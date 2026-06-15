import{an as o}from"./index-B_h_YYgH.js";import{C as i}from"./index-BVzMWZ6u.js";import{B as l}from"./index-D_CHJp_x.js";import{F as m,a as t}from"./index-l6ZJPSPa.js";import{F as a}from"./index-Bm2EUj9E.js";import{F as e}from"./index-Bl0p6rBz.js";import{I as r}from"./index-BE7ArQSX.js";import{S as p}from"./index-B9b5vL8Y.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-Bzp7FD3_.js";import"./index-BBXrqVxy.js";import"./useSelectablePanel-D3QqV__f.js";import"./useFloatingPanel-LS65Lsu1.js";const n=[{value:"fast",label:"快速模型"},{value:"balanced",label:"均衡模型"},{value:"quality",label:"高质量模型"}],A=d({id:"form-group",name:"FormGroup",category:"form",packageName:"willa/FormGroup",description:"用于表单分组、字段间距和移动端自适应布局。",imports:[{name:"FormGroup",from:"willa/FormGroup"}],css:"willa/FormGroup.css",demo:{name:"FormGroup",component:t,props:{title:"基础配置",description:"把相关字段收拢在同一组里。"},children:[{name:"FormField",component:e,props:{label:"工作区名称"},children:[{name:"Input",component:r,props:{defaultValue:"Willa AI"}}]}]},code:`
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
    </FormGroup>;
  `,sections:[{title:"完整表单",code:`
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup
            title="模型配置"
            description="适合产品设置、AI 参数和后台筛选场景。"
          >
            <FormField label="配置名称" required>
              <Input defaultValue="内容生成助手" width="100%" />
            </FormField>
            <FormField label="默认模型">
              <Select defaultValue="balanced" options={modelOptions} width="100%" />
            </FormField>
            <Checkbox
              defaultChecked
              label="允许联网检索"
              description="启用后会在回答前检索公开资料。"
            />
          </FormGroup>
        </Form>;
      `,content:o.jsx(m,{actions:o.jsxs(a,{children:[o.jsx(l,{variant:"ghost",children:"取消"}),o.jsx(l,{type:"submit",children:"保存"})]}),children:o.jsxs(t,{title:"模型配置",description:"适合产品设置、AI 参数和后台筛选场景。",children:[o.jsx(e,{label:"配置名称",required:!0,children:o.jsx(r,{defaultValue:"内容生成助手",width:"100%"})}),o.jsx(e,{label:"默认模型",children:o.jsx(p,{defaultValue:"balanced",options:n,width:"100%"})}),o.jsx(i,{defaultChecked:!0,label:"允许联网检索",description:"启用后会在回答前检索公开资料。"})]})})},{title:"双列布局",code:`
        <FormGroup title="基础信息" columns={2}>
          <FormField label="项目名">
            <Input placeholder="项目名" width="100%" />
          </FormField>
          <FormField label="负责人">
            <Input placeholder="负责人" width="100%" />
          </FormField>
        </FormGroup>;
      `,content:o.jsxs(t,{title:"基础信息",columns:2,children:[o.jsx(e,{label:"项目名",children:o.jsx(r,{placeholder:"项目名",width:"100%"})}),o.jsx(e,{label:"负责人",children:o.jsx(r,{placeholder:"负责人",width:"100%"})})]})}],props:[{name:"children",type:"ReactNode",required:!0,description:"分组内的字段内容。"},{name:"title",type:"ReactNode",description:"分组标题。"},{name:"description",type:"ReactNode",description:"分组说明。"},{name:"gap",type:'"sm" | "md" | "lg"',description:"字段间距。"},{name:"columns",type:"1 | 2",description:"字段列数；移动端自动回到单列。"}]});export{A as default};
