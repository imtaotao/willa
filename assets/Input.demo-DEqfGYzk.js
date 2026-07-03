import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{O as t,U as n,l as r}from"./react-icons.esm-mVdwEXuX.js";import{t as i}from"./Input-BaaTP3jc.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";import"./style-wbFRuzml.js";var o=e(),s={display:`grid`,gap:`0.85rem`,maxWidth:`42rem`},c={...s,width:`min(100%, 22rem)`,gap:`0.95rem`},l=a({id:`input`,name:`Input`,category:`form`,packageName:`willa/Input`,description:`用于表单、搜索、配置和 AI 产品输入区域的单行输入框。`,imports:[{name:`Input`,from:`willa/Input`}],css:`willa/Input.css`,demo:{name:`Input`,component:i,props:{placeholder:`搜索文档、组件或提示词`,leadingIcon:(0,o.jsx)(n,{}),width:`100%`}},code:`
    import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
    import { Input } from "willa/Input";
    import "willa/Input.css";

    <Input
      placeholder="搜索文档、组件或提示词"
      leadingIcon={<MagnifyingGlassIcon />}
      width="100%"
    />;
  `,sections:[{title:`基础状态`,code:`
        <div style={stackStyle}>
          <Input placeholder="请输入项目名称" />
          <Input placeholder="搜索上下文" leadingIcon={<MagnifyingGlassIcon />} />
          <Input
            defaultValue="ready@example.com"
            leadingIcon={<EnvelopeClosedIcon />}
            trailingIcon={<CheckCircledIcon />}
          />
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:s,children:[(0,o.jsx)(i,{placeholder:`请输入项目名称`}),(0,o.jsx)(i,{placeholder:`搜索上下文`,leadingIcon:(0,o.jsx)(n,{})}),(0,o.jsx)(i,{defaultValue:`ready@example.com`,leadingIcon:(0,o.jsx)(t,{}),trailingIcon:(0,o.jsx)(r,{})})]})},{title:`尺寸`,code:`
        <div style={stackStyle}>
          <Input size="sm" placeholder="紧凑输入" />
          <Input size="md" placeholder="默认输入" />
          <Input size="lg" placeholder="大尺寸输入" />
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:s,children:[(0,o.jsx)(i,{size:`sm`,placeholder:`紧凑输入`}),(0,o.jsx)(i,{size:`md`,placeholder:`默认输入`}),(0,o.jsx)(i,{size:`lg`,placeholder:`大尺寸输入`})]})},{title:`附加内容`,code:`
        <div style={inputStackStyle}>
          <Input
            width="100%"
            leadingAddon="https://"
            trailingAddon=".com"
            defaultValue="willa-ui"
          />
          <Input width="100%" leadingAddon="模型" defaultValue="gpt-4.1" />
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:c,children:[(0,o.jsx)(i,{width:`100%`,leadingAddon:`https://`,trailingAddon:`.com`,defaultValue:`willa-ui`}),(0,o.jsx)(i,{width:`100%`,leadingAddon:`模型`,defaultValue:`gpt-4.1`})]})},{title:`状态`,code:`
        <div style={stackStyle}>
          <Input invalid defaultValue="missing-api-key" />
          <Input disabled defaultValue="不可编辑" />
          <Input variant="soft" placeholder="柔和背景" />
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:s,children:[(0,o.jsx)(i,{invalid:!0,defaultValue:`missing-api-key`}),(0,o.jsx)(i,{disabled:!0,defaultValue:`不可编辑`}),(0,o.jsx)(i,{variant:`soft`,placeholder:`柔和背景`})]})},{title:`自定义颜色`,code:`
        <div style={rowStyle}>
          <Input backgroundColor="rgba(147, 197, 253, 0.18)" placeholder="自定义背景" />
          <Input
            backgroundColor="#f6e7c8"
            textColor="#3f2a12"
            defaultValue="warm field"
          />
        </div>;
      `,content:(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.75rem`,alignItems:`center`},children:[(0,o.jsx)(i,{backgroundColor:`rgba(147, 197, 253, 0.18)`,placeholder:`自定义背景`}),(0,o.jsx)(i,{backgroundColor:`#f6e7c8`,textColor:`#3f2a12`,defaultValue:`warm field`})]})}],props:[{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`输入框尺寸。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`输入框视觉类型。`},{name:`type`,type:`HTMLInputTypeAttribute`,description:`原生 input 类型。滑块输入请使用 RangeInput。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`展示错误状态。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义输入框宽度；设置为 100% 时占满父容器。`},{name:`leadingIcon`,type:`ReactNode`,description:`输入内容前的图标。`},{name:`trailingIcon`,type:`ReactNode`,description:`输入内容后的图标。`},{name:`leadingAddon`,type:`ReactNode`,description:`输入内容前的附加文本或元素。`},{name:`trailingAddon`,type:`ReactNode`,description:`输入内容后的附加文本或元素。`},{name:`inputClassName`,type:`string`,description:`传给内部 input 元素的 className。`},{name:`backgroundColor`,type:`string`,description:`自定义输入框背景颜色，支持 CSS 颜色值。`},{name:`textColor`,type:`string`,description:`自定义输入框文字颜色，支持 CSS 颜色值。`}]});export{l as default};