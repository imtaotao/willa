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
    props: {
      code,
      language: "ts",
      showLineNumbers: true,
      highlightLines: [2],
    },
  },
  code: unindent(`
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
  `),
  props: [
    {
      name: "code",
      type: "string",
      description: "代码内容。直接使用组件时推荐传入该参数。",
    },
    {
      name: "language",
      type: "string",
      defaultValue: '"text"',
      description: "代码语言，用于语法高亮和右上角语言标记。",
    },
    {
      name: "showLineNumbers",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示行号。",
    },
    {
      name: "highlightLines",
      type: "Array<number | [number, number]>",
      description: "需要高亮的代码行，支持单行或区间。",
    },
    {
      name: "copiedDuration",
      type: "number",
      defaultValue: "300",
      description: "复制成功反馈持续时间，单位为毫秒，默认 300。",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: '""',
      description:
        "MDX 兼容入口；传入 code 子元素时仍会解析 language-* className。",
    },
    {
      name: "...rootProps",
      type: "ComponentPropsWithoutRef<'div'>",
      description: "透传给外层容器的原生属性，例如 className、id、style。",
    },
  ],
  sections: [
    {
      title: "MDX 兼容",
      code: `
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
      `,
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
    {
      title: "高亮区间",
      code: `
        <CodeBlock
          code={\`const items = ["Button", "Input", "CodeBlock"];\n\nexport const names = items.map((item) => item.toLowerCase());\`}
          language="ts"
          showLineNumbers
          highlightLines={[[1, 3]]}
        />
      `,
      content: (
        <CodeBlock
          code={`const items = ["Button", "Input", "CodeBlock"];\n\nexport const names = items.map((item) => item.toLowerCase());`}
          language="ts"
          showLineNumbers
          highlightLines={[[1, 3]]}
        />
      ),
    },
  ],
});
