import{u as e,e as o,s as c}from"./index-DowIJTea.js";import{d as l}from"./defineDoc-C9maZcxg.js";const a="export function greet(name: string) {\n  return `Hello, ${name}`;\n}",t=l({id:"code-block",name:"CodeBlock",packageName:"willa/CodeBlock",description:"带语法高亮和复制操作的代码块。",imports:[{name:"CodeBlock",from:"willa/CodeBlock"}],css:"willa/CodeBlock.css",demo:{name:"CodeBlock",component:o,children:c.jsx("code",{className:"language-ts--meta-ln",children:a})},code:e(`
    import { CodeBlock } from "willa/CodeBlock";
    import "willa/CodeBlock.css";

    <CodeBlock>
      <code className="language-ts--meta-ln">{
        \`export function greet(name: string) {
          return \\\`Hello, \\\${name}\\\`;
        }\`
      }</code>
    </CodeBlock>
  `),props:[{name:"children",type:"ReactNode",description:"代码元素，通常需要带上语言 className。"},{name:"...preProps",type:"ComponentProps<'pre'>",description:"透传给外层 pre 语义的原生属性，例如 className、id、style。"}]});export{t as default};
