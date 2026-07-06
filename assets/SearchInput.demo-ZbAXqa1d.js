import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{a as r,s as i}from"./index-Coe6wwj0.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";var o=n(e(),1),s=t(),c={display:`grid`,gap:`0.85rem`,maxWidth:`44rem`,marginInline:`auto`},l=a({id:`search-input`,name:`SearchInput`,category:`form`,packageName:`willa/SearchInput`,description:`带搜索图标、清除按钮和回车搜索语义的单行输入框。`,imports:[{name:`SearchInput`,from:`willa/SearchInput`}],css:`willa/SearchInput.css`,demo:{name:`SearchInput`,component:i,props:{placeholder:`搜索组件、文档或示例`,width:`100%`}},code:`
    import { SearchInput } from "willa/SearchInput";
    import "willa/SearchInput.css";

    <SearchInput placeholder="搜索组件、文档或示例" width="100%" />;
  `,sections:[{title:`基础搜索`,code:`
        <div style={stackStyle}>
          <SearchInput placeholder="搜索项目" width="100%" />
          <SearchInput size="sm" placeholder="紧凑搜索" width="16rem" />
          <SearchInput size="lg" placeholder="大尺寸搜索" width="100%" />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsx)(i,{placeholder:`搜索项目`,width:`100%`}),(0,s.jsx)(i,{size:`sm`,placeholder:`紧凑搜索`,width:`16rem`}),(0,s.jsx)(i,{size:`lg`,placeholder:`大尺寸搜索`,width:`100%`})]})},{title:`受控和清除`,code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { SearchInput } from "willa/SearchInput";
        import "willa/Badge.css";
        import "willa/SearchInput.css";

        const Demo = () => {
          const [keyword, setKeyword] = useState("组件文档");
          const [submitted, setSubmitted] = useState("组件文档");

          return (
            <div style={stackStyle}>
              <SearchInput
                value={keyword}
                onValueChange={setKeyword}
                onSearch={setSubmitted}
                onClear={() => setSubmitted("")}
                placeholder="搜索组件、文档或示例"
                width="100%"
              />
              <Badge tone={submitted ? "info" : "neutral"}>
                {submitted ? \`已搜索：\${submitted}\` : "暂无搜索内容"}
              </Badge>
            </div>
          );
        };
      `,content:(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`组件文档`),[n,a]=(0,o.useState)(`组件文档`);return(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsx)(i,{value:e,onValueChange:t,onSearch:a,onClear:()=>a(``),placeholder:`搜索组件、文档或示例`,width:`100%`}),(0,s.jsx)(r,{tone:n?`info`:`neutral`,children:n?`已搜索：${n}`:`暂无搜索内容`})]})},{})},{title:`状态`,code:`
        <div style={rowStyle}>
          <SearchInput defaultValue="发布记录" clearable={false} />
          <SearchInput invalid defaultValue="错误关键词" />
          <SearchInput disabled placeholder="当前不可搜索" />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`0.75rem`,maxWidth:`44rem`,marginInline:`auto`},children:[(0,s.jsx)(i,{defaultValue:`发布记录`,clearable:!1}),(0,s.jsx)(i,{invalid:!0,defaultValue:`错误关键词`}),(0,s.jsx)(i,{disabled:!0,placeholder:`当前不可搜索`})]})}],props:[{name:`value`,type:`string`,description:`受控搜索内容。`},{name:`defaultValue`,type:`string`,defaultValue:`""`,description:`非受控搜索默认内容。`},{name:`clearable`,type:`boolean`,defaultValue:`true`,description:`是否在有内容时展示清除按钮，默认开启。`},{name:`clearLabel`,type:`string`,defaultValue:`"清空搜索"`,description:`清除按钮的无障碍文案。`},{name:`onValueChange`,type:`(value: string) => void`,description:`输入内容变化时触发。`},{name:`onSearch`,type:`(value: string) => void`,description:`按 Enter 触发搜索时回调，传入 trim 后的内容。`},{name:`onClear`,type:`() => void`,description:`点击清除按钮后触发。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`继承 Input 的尺寸。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义搜索框宽度。`},{name:`backgroundColor`,type:`string`,description:`背景色。`},{name:`inputClassName`,type:`string`,description:`input 元素 className。`},{name:`invalid`,type:`boolean`,description:`是否无效状态。`},{name:`leadingAddon`,type:`ReactNode`,description:`前后置附加元素。`},{name:`textColor`,type:`string`,description:`文本色。`},{name:`variant`,type:`InputVariant`,description:`展示变体。`}]});export{l as default};