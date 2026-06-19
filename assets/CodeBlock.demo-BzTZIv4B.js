import{aX as e,t,a$ as d}from"./index-3_sPVMI1.js";import{d as o}from"./defineDoc-0G99HOBK.js";const n="export function greet(name: string) {\n  return `Hello, ${name}`;\n}",s=d(`
  const items = ["Button", "Input", "CodeBlock"];

  export const names = items.map((item) => item.toLowerCase());
`),a=o({id:"code-block",name:"CodeBlock",packageName:"willa/CodeBlock",description:"带语法高亮和复制操作的代码块。",imports:[{name:"CodeBlock",from:"willa/CodeBlock"}],css:"willa/CodeBlock.css",demo:{name:"CodeBlock",component:t,props:{code:n,language:"ts",showLineNumbers:!0,highlightLines:[2]}},code:d(`
    import { CodeBlock } from "willa/CodeBlock";
    import "willa/CodeBlock.css";

    <CodeBlock
      code={\`export function greet(name: string) {
        return \\\`Hello, \\\${name}\\\`;
      }\`}
      language="ts"
      showLineNumbers
      highlightLines={[2]}
    />
  `),props:[{name:"code",type:"string",description:"代码内容。直接使用组件时推荐传入该参数。"},{name:"language",type:"string",defaultValue:'"text"',description:"代码语言，用于语法高亮和右上角语言标记。"},{name:"showLineNumbers",type:"boolean",defaultValue:"false",description:"是否展示行号。"},{name:"highlightLines",type:"Array<number | [number, number]>",description:"需要高亮的代码行，支持单行或区间。"},{name:"copiedDuration",type:"number",defaultValue:"300",description:"复制成功反馈持续时间，单位为毫秒，默认 300。"},{name:"children",type:"ReactNode",defaultValue:'""',description:"MDX 兼容入口；传入 code 子元素时仍会解析 language-* className。"},{name:"...rootProps",type:"ComponentPropsWithoutRef<'div'>",description:"透传给外层容器的原生属性，例如 className、id、style。"}],sections:[{title:"MDX 兼容",code:`
        <dl className="docs-meta-list">
          <div>
            <dt>
              <code>language-ts</code>
            </dt>
            <dd>设置语法高亮语言，不显示行号。</dd>
          </div>
          <div>
            <dt>
              <code>language-ts--meta-ln</code>
            </dt>
            <dd>显示行号。</dd>
          </div>
          <div>
            <dt>
              <code>language-ts--meta-{"{2,4-6}"}</code>
            </dt>
            <dd>高亮第 2 行和第 4 到 6 行。</dd>
          </div>
          <div>
            <dt>
              <code>language-ts--meta-ln_{"{2,4-6}"}</code>
            </dt>
            <dd>同时显示行号并高亮指定行。</dd>
          </div>
        </dl>;
      `,content:e.jsxs("dl",{className:"docs-meta-list",children:[e.jsxs("div",{children:[e.jsx("dt",{children:e.jsx("code",{children:"language-ts"})}),e.jsx("dd",{children:"设置语法高亮语言，不显示行号。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsx("code",{children:"language-ts--meta-ln"})}),e.jsx("dd",{children:"显示行号。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsxs("code",{children:["language-ts--meta-","{2,4-6}"]})}),e.jsx("dd",{children:"高亮第 2 行和第 4 到 6 行。"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:e.jsxs("code",{children:["language-ts--meta-ln_","{2,4-6}"]})}),e.jsx("dd",{children:"同时显示行号并高亮指定行。"})]})]})},{title:"高亮区间",code:d(`
        const highlightRangeCode = \`
          const items = ["Button", "Input", "CodeBlock"];

          export const names = items.map((item) => item.toLowerCase());
        \`;

        <CodeBlock
          code={highlightRangeCode}
          language="ts"
          showLineNumbers
          highlightLines={[[1, 3]]}
        />
      `),content:e.jsx(t,{code:s,language:"ts",showLineNumbers:!0,highlightLines:[[1,3]]})}]});export{a as default};
