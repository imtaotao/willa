import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./Button-O1aY2iqB.js";import{t as i}from"./Input-BaaTP3jc.js";import"./style-B00R6KjV.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";import{t as o}from"./Checkbox-Cb9D4hgn.js";import"./style-B0WmFYTY.js";import{n as s,t as c}from"./style-C6__NhS5.js";import{t as l}from"./style-C-Igh_7N.js";import{t as u}from"./style-CCZxyfE-.js";import{t as d}from"./FormMessage-B4bZfLM_.js";import"./style-BP72hdWL.js";import"./style-wbFRuzml.js";import{t as f}from"./style-CMEqrC15.js";var p=n(e(),1),m=t(),h=[{value:`fast`,label:`快速模式`},{value:`balanced`,label:`均衡模式`},{value:`quality`,label:`高质量模式`}],g=a({id:`form`,name:`Form`,category:`form`,packageName:`willa/Form`,description:`统一表单语义、表单级错误、提交状态和底部操作区。`,imports:[{name:`Form`,from:`willa/Form`}],css:`willa/Form.css`,demo:{name:`FormPreview`,component:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsx)(s,{onSubmit:e=>{e.preventDefault(),t(!0),window.setTimeout(()=>t(!1),900)},actions:(0,m.jsxs)(l,{children:[(0,m.jsx)(r,{variant:`ghost`,children:`取消`}),(0,m.jsx)(r,{type:`submit`,loading:e,children:`保存`})]}),children:(0,m.jsxs)(c,{title:`创建 AI 配置`,description:`用于产品后台、模型配置和轻量提交场景。`,children:[(0,m.jsx)(u,{label:`配置名称`,required:!0,children:(0,m.jsx)(i,{name:`name`,defaultValue:`内容生成助手`,width:`100%`})}),(0,m.jsx)(u,{label:`默认模式`,children:(0,m.jsx)(f,{name:`mode`,defaultValue:`balanced`,options:h,width:`100%`})}),(0,m.jsx)(o,{name:`search`,defaultChecked:!0,label:`允许联网检索`,description:`回答前可以读取公开资料。`})]})})}},code:`
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
  `,sections:[{title:`表单级错误`,code:`
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
      `,content:(0,m.jsx)(s,{error:`保存失败，请检查配置名称和默认模式。`,actions:(0,m.jsxs)(l,{children:[(0,m.jsx)(r,{variant:`outline`,children:`返回`}),(0,m.jsx)(r,{type:`submit`,children:`重新提交`})]}),children:(0,m.jsx)(c,{title:`提交配置`,children:(0,m.jsx)(u,{label:`配置名称`,error:`配置名称不能为空。`,children:(0,m.jsx)(i,{invalid:!0,defaultValue:``,width:`100%`})})})})},{title:`禁用状态`,code:`
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
      `,content:(0,m.jsx)(s,{disabled:!0,actions:(0,m.jsx)(l,{children:(0,m.jsx)(r,{disabled:!0,children:`保存`})}),children:(0,m.jsxs)(c,{title:`只读配置`,children:[(0,m.jsx)(d,{tone:`info`,children:`loading 或 disabled 会禁用表单主体。`}),(0,m.jsx)(u,{label:`配置名称`,children:(0,m.jsx)(i,{defaultValue:`已锁定配置`,width:`100%`})}),(0,m.jsx)(o,{defaultChecked:!0,label:`企业策略锁定`})]})})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`表单主体字段。`},{name:`error`,type:`ReactNode`,description:`表单级错误提示。`},{name:`actions`,type:`ReactNode`,description:`底部操作区，通常放 FormActions。`},{name:`gap`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`表单字段间距。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`禁用表单主体。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`标记提交中，并禁用表单主体。`}]});export{g as default};