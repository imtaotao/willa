import { unindent } from "aidly";
import { CodeBlock } from "willa/CodeBlock";
import "willa/CodeBlock.css";

import { defineDoc } from "#example/catalog/defineDoc";

const code = `export function greet(name: string) {
  return \`Hello, \${name}\`;
}`;

export default defineDoc({
  id: "code-block",
  name: "CodeBlock",
  packageName: "willa/CodeBlock",
  description: "带语法高亮和复制操作的代码块。",
  imports: [{ name: "CodeBlock", from: "willa/CodeBlock" }],
  css: "willa/CodeBlock.css",
  demo: {
    name: "CodeBlock",
    component: CodeBlock,
    children: <code className="language-ts--meta-ln_{2}">{code}</code>,
  },
  code: unindent(`
    import { CodeBlock } from "willa/CodeBlock";
    import "willa/CodeBlock.css";

    <CodeBlock>
      <code className="language-ts--meta-ln_{2}">{
        \`export function greet(name: string) {
          return \\\`Hello, \\\${name}\\\`;
        }\`
      }</code>
    </CodeBlock>
  `),
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "代码元素，通常需要带上语言 className。",
    },
    {
      name: "...preProps",
      type: "ComponentProps<'pre'>",
      description: "透传给外层 pre 语义的原生属性，例如 className、id、style。",
    },
  ],
  sections: [
    {
      title: "Meta 配置",
      content: (
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
        </dl>
      ),
    },
  ],
});
