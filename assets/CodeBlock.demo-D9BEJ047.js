import{c as e,l as t}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as n}from"./CodeBlock-BYaA2QV-.js";import"./index-B2UoUlCX.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";var i=t(),a="export function greet(name: string) {\n  return `Hello, ${name}`;\n}",o=e(`
  const items = ["Button", "Input", "CodeBlock"];

  export const names = items.map((item) => item.toLowerCase());
`),s=r({id:`code-block`,name:`CodeBlock`,packageName:`willa/CodeBlock`,description:`带语法高亮和复制操作的代码块。`,imports:[{name:`CodeBlock`,from:`willa/CodeBlock`}],css:`willa/CodeBlock.css`,demo:{name:`CodeBlock`,component:n,props:{code:a,language:`ts`,showLineNumbers:!0,highlightLines:[2]}},code:e(`
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
  `),props:[{name:`code`,type:`string`,description:`代码内容。直接使用组件时推荐传入该参数。`},{name:`language`,type:`string`,defaultValue:`"text"`,description:`代码语言，用于语法高亮和右上角语言标记。`},{name:`showLineNumbers`,type:`boolean`,defaultValue:`false`,description:`是否展示行号。`},{name:`highlightLines`,type:`Array<number | [number, number]>`,description:`需要高亮的代码行，支持单行或区间。`},{name:`copiedDuration`,type:`number`,defaultValue:`300`,description:`复制成功反馈持续时间，单位为毫秒，默认 300。`},{name:`children`,type:`ReactNode`,defaultValue:`""`,description:`MDX 兼容入口；传入 code 子元素时仍会解析 language-* className。`},{name:`...rootProps`,type:`ComponentPropsWithoutRef<'div'>`,description:`透传给外层容器的原生属性，例如 className、id、style。`}],sections:[{title:`MDX 兼容`,code:`
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
      `,content:(0,i.jsxs)(`dl`,{className:`docs-meta-list`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:(0,i.jsx)(`code`,{children:`language-ts`})}),(0,i.jsx)(`dd`,{children:`设置语法高亮语言，不显示行号。`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:(0,i.jsx)(`code`,{children:`language-ts--meta-ln`})}),(0,i.jsx)(`dd`,{children:`显示行号。`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:(0,i.jsxs)(`code`,{children:[`language-ts--meta-`,`{2,4-6}`]})}),(0,i.jsx)(`dd`,{children:`高亮第 2 行和第 4 到 6 行。`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`dt`,{children:(0,i.jsxs)(`code`,{children:[`language-ts--meta-ln_`,`{2,4-6}`]})}),(0,i.jsx)(`dd`,{children:`同时显示行号并高亮指定行。`})]})]})},{title:`高亮区间`,code:e(`
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
      `),content:(0,i.jsx)(n,{code:o,language:`ts`,showLineNumbers:!0,highlightLines:[[1,3]]})}]});export{s as default};