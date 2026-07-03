import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{k as t,l as n,z as r}from"./react-icons.esm-mVdwEXuX.js";import{t as i}from"./Button-O1aY2iqB.js";import{t as a}from"./Input-BaaTP3jc.js";import"./style-B00R6KjV.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";import{n as s,t as c}from"./style-C6__NhS5.js";import{t as l}from"./style-C-Igh_7N.js";import{t as u}from"./style-CCZxyfE-.js";import{t as d}from"./FormMessage-B4bZfLM_.js";import"./style-BP72hdWL.js";import"./style-wbFRuzml.js";var f=e(),p=o({id:`form-message`,name:`FormMessage`,category:`form`,packageName:`willa/FormMessage`,description:`用于表单中的辅助提示、状态反馈和提交结果说明。`,imports:[{name:`FormMessage`,from:`willa/FormMessage`}],css:`willa/FormMessage.css`,demo:{name:`FormMessage`,component:d,props:{tone:`info`,icon:(0,f.jsx)(r,{})},children:`保存后会立即同步到当前工作区。`},code:`
    import { InfoCircledIcon } from "@radix-ui/react-icons";
    import { FormMessage } from "willa/FormMessage";
    import "willa/FormMessage.css";

    <FormMessage tone="info" icon={<InfoCircledIcon />}>
      保存后会立即同步到当前工作区。
    </FormMessage>;
  `,sections:[{title:`表单内使用`,code:`
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup title="发布配置" description="适合展示提交前后的状态信息。">
            <FormField label="配置名称" required>
              <Input defaultValue="模型发布策略" width="100%" />
            </FormField>
            <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
              当前配置会影响线上模型，请确认灰度范围。
            </FormMessage>
          </FormGroup>
        </Form>;
      `,content:(0,f.jsx)(s,{actions:(0,f.jsxs)(l,{children:[(0,f.jsx)(i,{variant:`ghost`,children:`取消`}),(0,f.jsx)(i,{type:`submit`,children:`保存`})]}),children:(0,f.jsxs)(c,{title:`发布配置`,description:`适合展示提交前后的状态信息。`,children:[(0,f.jsx)(u,{label:`配置名称`,required:!0,children:(0,f.jsx)(a,{defaultValue:`模型发布策略`,width:`100%`})}),(0,f.jsx)(d,{tone:`warning`,icon:(0,f.jsx)(t,{}),children:`当前配置会影响线上模型，请确认灰度范围。`})]})})},{title:`状态类型`,code:`
        <div style={stackStyle}>
          <FormMessage tone="info" icon={<InfoCircledIcon />}>
            保存后会立即同步到当前工作区。
          </FormMessage>
          <FormMessage tone="success" icon={<CheckCircledIcon />}>
            配置已保存，可以继续发布。
          </FormMessage>
          <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
            当前配置会影响线上模型，请确认灰度范围。
          </FormMessage>
          <FormMessage tone="error">提交失败，请检查必填字段。</FormMessage>
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`0.85rem`,maxWidth:`42rem`},children:[(0,f.jsx)(d,{tone:`info`,icon:(0,f.jsx)(r,{}),children:`保存后会立即同步到当前工作区。`}),(0,f.jsx)(d,{tone:`success`,icon:(0,f.jsx)(n,{}),children:`配置已保存，可以继续发布。`}),(0,f.jsx)(d,{tone:`warning`,icon:(0,f.jsx)(t,{}),children:`当前配置会影响线上模型，请确认灰度范围。`}),(0,f.jsx)(d,{tone:`error`,children:`提交失败，请检查必填字段。`})]})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`消息内容。`},{name:`tone`,type:`"info" | "success" | "warning" | "error"`,defaultValue:`"info"`,description:`消息语义类型。`},{name:`icon`,type:`ReactNode`,defaultValue:`由 tone 决定`,description:`消息前置图标。`},{name:`role`,type:`AriaRole`,defaultValue:`tone === "error" ? "alert" : "status"`,description:`自定义可访问性角色；错误态默认 alert，其余默认 status。`}]});export{p as default};