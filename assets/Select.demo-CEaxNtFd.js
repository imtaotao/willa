import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./defineDoc-Cid5xIoZ.js";import{t as n}from"./style-CMEqrC15.js";var r=e(),i={display:`grid`,gap:`0.9rem`,maxWidth:`42rem`},a=[{value:`fast`,label:`快速模式`},{value:`balanced`,label:`均衡模式`},{value:`quality`,label:`高质量模式`}],o=t({id:`select`,name:`Select`,category:`form`,packageName:`willa/Select`,description:`用于单选下拉，适合表单、筛选和配置场景。`,imports:[{name:`Select`,from:`willa/Select`}],css:`willa/Select.css`,demo:{name:`Select`,component:n,props:{options:a,defaultValue:`balanced`,width:`100%`}},code:`
    import { Select } from "willa/Select";
    import "willa/Select.css";

    const options = [
      { value: "fast", label: "快速模式" },
      { value: "balanced", label: "均衡模式" },
      { value: "quality", label: "高质量模式" },
    ];

    <Select options={options} defaultValue="balanced" width="100%" />;
  `,sections:[{title:`基础状态`,code:`
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
      `,content:(0,r.jsxs)(`div`,{style:i,children:[(0,r.jsx)(n,{placeholder:`选择模型模式`,options:a,width:`100%`}),(0,r.jsx)(n,{defaultValue:`balanced`,options:a,variant:`soft`,width:`100%`}),(0,r.jsx)(n,{invalid:!0,defaultValue:``,placeholder:`请选择必填项`,options:a,width:`100%`}),(0,r.jsx)(n,{disabled:!0,defaultValue:`fast`,options:a,width:`100%`})]})},{title:`尺寸`,code:`
        <div style={stackStyle}>
          <Select size="sm" options={options} defaultValue="fast" />
          <Select size="md" options={options} defaultValue="balanced" />
          <Select size="lg" options={options} defaultValue="quality" />
        </div>;
      `,content:(0,r.jsxs)(`div`,{style:i,children:[(0,r.jsx)(n,{size:`sm`,options:a,defaultValue:`fast`}),(0,r.jsx)(n,{size:`md`,options:a,defaultValue:`balanced`}),(0,r.jsx)(n,{size:`lg`,options:a,defaultValue:`quality`})]})}],props:[{name:`options`,type:`Array<SelectOption>`,required:!0,description:`下拉选项。`},{name:`placeholder`,type:`string`,defaultValue:`"请选择"`,description:`未选择时展示的占位选项。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`选择框尺寸。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`选择框视觉类型。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义选择框宽度；设置为 100% 时占满父容器。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`展示错误状态。`},{name:`name`,type:`string`,description:`表单提交字段名。`},{name:`onValueChange`,type:`(value: string, option: SelectOption) => void`,description:`选中值变化时触发。`},{name:`defaultValue`,type:`string`,description:`默认值。`},{name:`value`,type:`string`,description:`受控值。`}]});export{o as default};