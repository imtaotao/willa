import{at as e,c as t,av as u}from"./index-JcQunHAD.js";import{C as s}from"./index-CSbHrHUR.js";import{F as i,a as r}from"./index-Psw27bS1.js";import{F as l}from"./index-DCIznFdx.js";import{F as o}from"./index-C-kj_Gd1.js";import{F as p}from"./index-Ck_VGxOP.js";import{I as a}from"./index-BwjYQo1y.js";import{S as F}from"./index-BDg4q-ZE.js";/* empty css              *//* empty css              */import{d as b}from"./defineDoc-C6LiP5te.js";import"./index-B7OQIdTb.js";import"./useSelectablePanel-Cddf7TLe.js";import"./useFloatingPanel-Df_RH96T.js";const f=[{value:"fast",label:"快速模式"},{value:"balanced",label:"均衡模式"},{value:"quality",label:"高质量模式"}],h=()=>{const[n,m]=u.useState(!1),d=c=>{c.preventDefault(),m(!0),window.setTimeout(()=>m(!1),900)};return e.jsx(i,{onSubmit:d,actions:e.jsxs(l,{children:[e.jsx(t,{variant:"ghost",children:"取消"}),e.jsx(t,{type:"submit",loading:n,children:"保存"})]}),children:e.jsxs(r,{title:"创建 AI 配置",description:"用于产品后台、模型配置和轻量提交场景。",children:[e.jsx(o,{label:"配置名称",required:!0,children:e.jsx(a,{name:"name",defaultValue:"内容生成助手",width:"100%"})}),e.jsx(o,{label:"默认模式",children:e.jsx(F,{name:"mode",defaultValue:"balanced",options:f,width:"100%"})}),e.jsx(s,{name:"search",defaultChecked:!0,label:"允许联网检索",description:"回答前可以读取公开资料。"})]})})},M=b({id:"form",name:"Form",category:"form",packageName:"willa/Form",description:"统一表单语义、表单级错误、提交状态和底部操作区。",imports:[{name:"Form",from:"willa/Form"}],css:"willa/Form.css",demo:{name:"FormPreview",component:h},code:`
    import { useState, type FormEvent } from "react";
    import { Button } from "willa/Button";
    import { Checkbox } from "willa/Checkbox";
    import { Form } from "willa/Form";
    import { FormActions } from "willa/FormActions";
    import { FormField } from "willa/FormField";
    import { FormGroup } from "willa/FormGroup";
    import { FormMessage } from "willa/FormMessage";
    import { Input } from "willa/Input";
    import { Select } from "willa/Select";
    import "willa/Button.css";
    import "willa/Checkbox.css";
    import "willa/Form.css";
    import "willa/FormActions.css";
    import "willa/FormField.css";
    import "willa/FormGroup.css";
    import "willa/FormMessage.css";
    import "willa/Input.css";
    import "willa/Select.css";

    const options = [
      { value: "fast", label: "快速模式" },
      { value: "balanced", label: "均衡模式" },
      { value: "quality", label: "高质量模式" },
    ];

    const FormPreview = () => {
      const [submitting, setSubmitting] = useState(false);

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        window.setTimeout(() => setSubmitting(false), 900);
      };

      return (
        <Form
          onSubmit={handleSubmit}
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit" loading={submitting}>
                保存
              </Button>
            </FormActions>
          }
        >
          <FormGroup
            title="创建 AI 配置"
            description="用于产品后台、模型配置和轻量提交场景。"
          >
            <FormField label="配置名称" required>
              <Input name="name" defaultValue="内容生成助手" width="100%" />
            </FormField>
            <FormField label="默认模式">
              <Select
                name="mode"
                defaultValue="balanced"
                options={options}
                width="100%"
              />
            </FormField>
            <Checkbox
              name="search"
              defaultChecked
              label="允许联网检索"
              description="回答前可以读取公开资料。"
            />
          </FormGroup>
        </Form>
      );
    };
  `,sections:[{title:"表单级错误",code:`
        <Form
          error="保存失败，请检查配置名称和默认模式。"
          actions={
            <FormActions>
              <Button variant="outline">返回</Button>
              <Button type="submit">重新提交</Button>
            </FormActions>
          }
        >
          <FormGroup title="提交配置">
            <FormField label="配置名称" error="配置名称不能为空。">
              <Input invalid defaultValue="" width="100%" />
            </FormField>
          </FormGroup>
        </Form>;
      `,content:e.jsx(i,{error:"保存失败，请检查配置名称和默认模式。",actions:e.jsxs(l,{children:[e.jsx(t,{variant:"outline",children:"返回"}),e.jsx(t,{type:"submit",children:"重新提交"})]}),children:e.jsx(r,{title:"提交配置",children:e.jsx(o,{label:"配置名称",error:"配置名称不能为空。",children:e.jsx(a,{invalid:!0,defaultValue:"",width:"100%"})})})})},{title:"禁用状态",code:`
        <Form
          disabled
          actions={
            <FormActions>
              <Button disabled>保存</Button>
            </FormActions>
          }
        >
          <FormGroup title="只读配置">
            <FormMessage tone="info">loading 或 disabled 会禁用表单主体。</FormMessage>
            <FormField label="配置名称">
              <Input defaultValue="已锁定配置" width="100%" />
            </FormField>
            <Checkbox defaultChecked label="企业策略锁定" />
          </FormGroup>
        </Form>;
      `,content:e.jsx(i,{disabled:!0,actions:e.jsx(l,{children:e.jsx(t,{disabled:!0,children:"保存"})}),children:e.jsxs(r,{title:"只读配置",children:[e.jsx(p,{tone:"info",children:"loading 或 disabled 会禁用表单主体。"}),e.jsx(o,{label:"配置名称",children:e.jsx(a,{defaultValue:"已锁定配置",width:"100%"})}),e.jsx(s,{defaultChecked:!0,label:"企业策略锁定"})]})})}],props:[{name:"children",type:"ReactNode",required:!0,description:"表单主体字段。"},{name:"error",type:"ReactNode",description:"表单级错误提示。"},{name:"actions",type:"ReactNode",description:"底部操作区，通常放 FormActions。"},{name:"gap",type:'"sm" | "md" | "lg"',description:"表单字段间距。"},{name:"disabled",type:"boolean",description:"禁用表单主体。"},{name:"loading",type:"boolean",description:"标记提交中，并禁用表单主体。"}]});export{M as default};
