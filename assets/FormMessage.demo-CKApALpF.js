import{ah as e,v as r,L as s,f as n}from"./index-C2E4XHzt.js";import{B as i}from"./index-3DZYmbrW.js";import{F as t,a}from"./index-B-96IVYX.js";import{F as c}from"./index-9QevSMD0.js";import{F as m}from"./index-K99hVKm2.js";import{F as o}from"./index-D-qRX90i.js";import{I as l}from"./index-D0Gv-xtK.js";/* empty css              */import{d}from"./defineDoc-5r0NM0Fx.js";import"./heading-BzvB6qDP.js";const p={display:"grid",gap:"0.85rem",maxWidth:"42rem"},y=d({id:"form-message",name:"FormMessage",category:"form",packageName:"willa/FormMessage",description:"用于表单中的辅助提示、状态反馈和提交结果说明。",imports:[{name:"FormMessage",from:"willa/FormMessage"}],css:"willa/FormMessage.css",demo:{name:"FormMessage",component:o,props:{tone:"info",icon:e.jsx(s,{})},children:"保存后会立即同步到当前工作区。"},code:`
    import { InfoCircledIcon } from "@radix-ui/react-icons";
    import { FormMessage } from "willa/FormMessage";
    import "willa/FormMessage.css";

    <FormMessage tone="info" icon={<InfoCircledIcon />}>
      保存后会立即同步到当前工作区。
    </FormMessage>;
  `,sections:[{title:"表单内使用",code:`
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
      `,content:e.jsx(t,{actions:e.jsxs(c,{children:[e.jsx(i,{variant:"ghost",children:"取消"}),e.jsx(i,{type:"submit",children:"保存"})]}),children:e.jsxs(a,{title:"发布配置",description:"适合展示提交前后的状态信息。",children:[e.jsx(m,{label:"配置名称",required:!0,children:e.jsx(l,{defaultValue:"模型发布策略",width:"100%"})}),e.jsx(o,{tone:"warning",icon:e.jsx(r,{}),children:"当前配置会影响线上模型，请确认灰度范围。"})]})})},{title:"状态类型",code:`
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
      `,content:e.jsxs("div",{style:p,children:[e.jsx(o,{tone:"info",icon:e.jsx(s,{}),children:"保存后会立即同步到当前工作区。"}),e.jsx(o,{tone:"success",icon:e.jsx(n,{}),children:"配置已保存，可以继续发布。"}),e.jsx(o,{tone:"warning",icon:e.jsx(r,{}),children:"当前配置会影响线上模型，请确认灰度范围。"}),e.jsx(o,{tone:"error",children:"提交失败，请检查必填字段。"})]})}],props:[{name:"children",type:"ReactNode",required:!0,description:"消息内容。"},{name:"tone",type:'"info" | "success" | "warning" | "error"',description:"消息语义类型。"},{name:"icon",type:"ReactNode",description:"消息前置图标。"},{name:"role",type:"AriaRole",description:"自定义可访问性角色；错误态默认 alert，其余默认 status。"}]});export{y as default};
