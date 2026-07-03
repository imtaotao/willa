import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./Input-BaaTP3jc.js";import"./style-B00R6KjV.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";import{t as i}from"./style-CCZxyfE-.js";import"./style-wbFRuzml.js";import{t as a}from"./TextArea-D_bElKyR.js";import"./style-Bra9Nbci.js";var o=e(),s={display:`grid`,gap:`1rem`,maxWidth:`42rem`},c=r({id:`form-field`,name:`FormField`,category:`form`,packageName:`willa/FormField`,description:`统一表单字段的 label、说明、必填和错误状态。`,imports:[{name:`FormField`,from:`willa/FormField`}],css:`willa/FormField.css`,demo:{name:`FormField`,component:i,props:{label:`项目名称`,description:`用于工作台、文档和分享链接中的展示名称。`,required:!0},children:[{name:`Input`,component:n,props:{placeholder:`输入项目名称`,width:`100%`}}]},code:`
    import { FormField } from "willa/FormField";
    import { Input } from "willa/Input";
    import "willa/FormField.css";
    import "willa/Input.css";

    <FormField
      label="项目名称"
      description="用于工作台、文档和分享链接中的展示名称。"
      required
    >
      <Input placeholder="输入项目名称" width="100%" />
    </FormField>;
  `,sections:[{title:`字段状态`,code:`
        <div style={stackStyle}>
          <FormField label="名称" description="建议控制在 20 个字以内。">
            <Input defaultValue="客户反馈分析" width="100%" />
          </FormField>
          <FormField label="说明" required>
            <TextArea placeholder="描述这个配置的用途" width="100%" />
          </FormField>
          <FormField label="API Key" error="请输入有效的 API Key。">
            <Input invalid defaultValue="missing" width="100%" />
          </FormField>
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:s,children:[(0,o.jsx)(i,{label:`名称`,description:`建议控制在 20 个字以内。`,children:(0,o.jsx)(n,{defaultValue:`客户反馈分析`,width:`100%`})}),(0,o.jsx)(i,{label:`说明`,required:!0,children:(0,o.jsx)(a,{placeholder:`描述这个配置的用途`,width:`100%`})}),(0,o.jsx)(i,{label:`API Key`,error:`请输入有效的 API Key。`,children:(0,o.jsx)(n,{invalid:!0,defaultValue:`missing`,width:`100%`})})]})},{title:`横向布局`,code:`
        <div style={stackStyle}>
          <FormField
            label="默认模型"
            description="适合设置页和密集配置表单。"
            orientation="horizontal"
          >
            <Input defaultValue="willa-ai-default" width="100%" />
          </FormField>
          <FormField label="提交" orientation="horizontal">
            <div style={rowStyle}>
              <Button size="sm">保存</Button>
              <Button size="sm" variant="ghost">
                取消
              </Button>
            </div>
          </FormField>
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:s,children:[(0,o.jsx)(i,{label:`默认模型`,description:`适合设置页和密集配置表单。`,orientation:`horizontal`,children:(0,o.jsx)(n,{defaultValue:`willa-ai-default`,width:`100%`})}),(0,o.jsx)(i,{label:`提交`,orientation:`horizontal`,children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.7rem`},children:[(0,o.jsx)(t,{size:`sm`,children:`保存`}),(0,o.jsx)(t,{size:`sm`,variant:`ghost`,children:`取消`})]})})]})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`字段控件内容。`},{name:`label`,type:`ReactNode`,description:`字段名称。`},{name:`description`,type:`ReactNode`,description:`字段补充说明。`},{name:`error`,type:`ReactNode`,description:`错误提示；存在时展示错误状态。`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`展示必填标记。`},{name:`htmlFor`,type:`string`,description:`关联内部控件 id。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`字段文字尺寸。`},{name:`orientation`,type:`"vertical" | "horizontal"`,defaultValue:`"vertical"`,description:`字段标签和控件的排列方式。`},{name:`controlClassName`,type:`string`,description:`控制层 className。`},{name:`labelClassName`,type:`string`,description:`标签 className。`}]});export{c as default};