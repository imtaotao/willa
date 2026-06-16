import{aA as e,aC as l,B as d}from"./index-DFfcD18c.js";import{S as t}from"./index-BXS1-6tt.js";import{d as o}from"./defineDoc-DszSfxEA.js";import"./index-XF1gHLrj.js";const i={display:"grid",gap:"0.85rem",maxWidth:"44rem",marginInline:"auto"},c={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.75rem",maxWidth:"44rem",marginInline:"auto"},p=()=>{const[n,s]=l.useState("组件文档"),[a,r]=l.useState("组件文档");return e.jsxs("div",{style:i,children:[e.jsx(t,{value:n,onValueChange:s,onSearch:r,onClear:()=>r(""),placeholder:"搜索组件、文档或示例",width:"100%"}),e.jsx(d,{tone:a?"info":"neutral",children:a?`已搜索：${a}`:"暂无搜索内容"})]})},w=o({id:"search-input",name:"SearchInput",category:"form",packageName:"willa/SearchInput",description:"带搜索图标、清除按钮和回车搜索语义的单行输入框。",imports:[{name:"SearchInput",from:"willa/SearchInput"}],css:"willa/SearchInput.css",demo:{name:"SearchInput",component:t,props:{placeholder:"搜索组件、文档或示例",width:"100%"}},code:`
    import { SearchInput } from "willa/SearchInput";
    import "willa/SearchInput.css";

    <SearchInput placeholder="搜索组件、文档或示例" width="100%" />;
  `,sections:[{title:"基础搜索",code:`
        <div style={stackStyle}>
          <SearchInput placeholder="搜索项目" width="100%" />
          <SearchInput size="sm" placeholder="紧凑搜索" width="16rem" />
          <SearchInput size="lg" placeholder="大尺寸搜索" width="100%" />
        </div>;
      `,content:e.jsxs("div",{style:i,children:[e.jsx(t,{placeholder:"搜索项目",width:"100%"}),e.jsx(t,{size:"sm",placeholder:"紧凑搜索",width:"16rem"}),e.jsx(t,{size:"lg",placeholder:"大尺寸搜索",width:"100%"})]})},{title:"受控和清除",code:`
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
      `,content:e.jsx(p,{})},{title:"状态",code:`
        <div style={rowStyle}>
          <SearchInput defaultValue="发布记录" clearable={false} />
          <SearchInput invalid defaultValue="错误关键词" />
          <SearchInput disabled placeholder="当前不可搜索" />
        </div>;
      `,content:e.jsxs("div",{style:c,children:[e.jsx(t,{defaultValue:"发布记录",clearable:!1}),e.jsx(t,{invalid:!0,defaultValue:"错误关键词"}),e.jsx(t,{disabled:!0,placeholder:"当前不可搜索"})]})}],props:[{name:"value",type:"string",description:"受控搜索内容。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控搜索默认内容。"},{name:"clearable",type:"boolean",defaultValue:"true",description:"是否在有内容时展示清除按钮，默认开启。"},{name:"clearLabel",type:"string",defaultValue:'"清空搜索"',description:"清除按钮的无障碍文案。"},{name:"onValueChange",type:"(value: string) => void",description:"输入内容变化时触发。"},{name:"onSearch",type:"(value: string) => void",description:"按 Enter 触发搜索时回调，传入 trim 后的内容。"},{name:"onClear",type:"() => void",description:"点击清除按钮后触发。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"继承 Input 的尺寸。"},{name:"width",type:"CSSProperties['width']",description:"自定义搜索框宽度。"}]});export{w as default};
