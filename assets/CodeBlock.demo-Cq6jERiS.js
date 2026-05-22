import{w as d,u as e,e as o}from"./index-zy6oSEAa.js";import{d as s}from"./defineDoc-C3bBtIKW.js";const l="export function greet(name: string) {\n  return `Hello, ${name}`;\n}",t=s({id:"code-block",name:"CodeBlock",packageName:"willa/CodeBlock",description:"带语法高亮和复制操作的代码块。",imports:[{name:"CodeBlock",from:"willa/CodeBlock"}],css:"willa/CodeBlock.css",demo:{name:"CodeBlock",component:o,children:e.jsx("code",{className:"language-ts--meta-ln_{2}",children:l})},code:d(`
    import { CodeBlock } from "willa/CodeBlock";
    import "willa/CodeBlock.css";

    <CodeBlock>
      <code className="language-ts--meta-ln_{2}">{
        \`export function greet(name: string) {
          return \\\`Hello, \\\${name}\\\`;
        }\`
      }</code>
    </CodeBlock>
  `),props:[{name:"children",type:"ReactNode",description:"代码元素，通常需要带上语言 className。"},{name:"...preProps",type:"ComponentProps<'pre'>",description:"透传给外层 pre 语义的原生属性，例如 className、id、style。"}],sections:[{title:"Meta 配置",content:e.jsxs("dl",{className:"docs-meta-list",children:[e.jsxs("div",{children:[e.jsx("dt",{children:e.jsx("code",{children:"language-ts"})}),e.jsx("dd",{children:"设置语法高亮语言，不显示行号。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsx("code",{children:"language-ts--meta-ln"})}),e.jsx("dd",{children:"显示行号。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsxs("code",{children:["language-ts--meta-","{2,4-6}"]})}),e.jsx("dd",{children:"高亮第 2 行和第 4 到 6 行。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsxs("code",{children:["language-ts--meta-ln_","{2,4-6}"]})}),e.jsx("dd",{children:"同时显示行号并高亮指定行。"})]})]})}]});export{t as default};
