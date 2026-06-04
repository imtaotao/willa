import { unindent } from "aidly";
import { Card } from "willa/Card";
import { CodeBlock } from "willa/CodeBlock";
import { CodeTabs, type CodeTabsItem } from "willa/CodeTabs";
import "willa/Card.css";
import "willa/CodeBlock.css";
import "willa/CodeTabs.css";

const installItems: Array<CodeTabsItem> = [
  {
    label: "npm",
    language: "bash",
    code: "npm install willa",
  },
  {
    label: "pnpm",
    language: "bash",
    code: "pnpm add willa",
  },
  {
    label: "yarn",
    language: "bash",
    code: "yarn add willa",
  },
];

const bundledCssCode = unindent(`
  // src/main.tsx
  import "willa/style.css";

  // src/Article.tsx
  import { Callout } from "willa/Callout";

  <Callout title="提示">这里是正文内容。</Callout>
`);

const componentCssCode = unindent(`
  // src/main.tsx
  import "willa/external.css";
  import "willa/themes/light.css";
  import "willa/themes/dark.css";

  // src/Article.tsx
  import { Callout } from "willa/Callout";
  import "willa/Callout.css";

  <Callout title="提示">这里是正文内容。</Callout>
`);

const iifeCode = unindent(`
  <link rel="stylesheet" href="https://unpkg.com/willa/dist/index.css" />
  <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/willa/dist/index.global.js"></script>

  <script>
    const { Callout } = Willa;
  </script>
`);

const usageItems = [
  {
    title: "IIFE",
    description:
      "无构建环境可以通过全局变量 Willa 使用组件，CSS 使用 dist 产物路径。",
    code: iifeCode,
    language: "language-html",
  },
  {
    title: "模块化引入",
    description: "入口文件引入全量组件样式，业务代码直接按组件入口使用组件。",
    code: bundledCssCode,
    language: "language-tsx",
  },
  {
    title: "单组件引入",
    description:
      "入口文件只引入 external.css 和主题 CSS；组件文件按需引入组件入口和组件 CSS。",
    code: componentCssCode,
    language: "language-tsx",
  },
];

export function UsageGuide() {
  return (
    <Card className="docs-usage" id="usage" padding="lg">
      <div className="docs-usage-heading">
        <p className="docs-panel-title">安装使用</p>
        <h2>在项目中使用 Willa</h2>
        <p>
          根据项目构建方式选择全局引入或单组件引入。使用单组件入口时，仍需要额外引入主题
          CSS 和 external.css。
        </p>
      </div>

      <div className="docs-usage-grid">
        <section className="docs-usage-section">
          <div>
            <h3>安装</h3>
            <p>Willa 对外提供统一包，内部按组件拆分产物。</p>
          </div>
          <CodeTabs items={installItems} size="sm" />
        </section>

        {usageItems.map((item) => (
          <section className="docs-usage-section" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <CodeBlock>
              <code className={`${item.language}--meta-ln`}>{item.code}</code>
            </CodeBlock>
          </section>
        ))}
      </div>
    </Card>
  );
}
