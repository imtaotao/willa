import { unindent } from "aidly";
import { Card } from "willa/Card";
import { CodeBlock } from "willa/CodeBlock";
import { CodeTabs, type CodeTabsItem } from "willa/CodeTabs";
import { Panel } from "willa/Panel";
import { Typography } from "willa/Typography";
import { Stack } from "willa/Stack";
import "willa/Card.css";
import "willa/CodeBlock.css";
import "willa/CodeTabs.css";
import "willa/Panel.css";
import "willa/Typography.css";
import "willa/Stack.css";

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

const tapHighlightCode = unindent(`
  button,
  a,
  input,
  textarea,
  select,
  [role="button"],
  [tabindex] {
    -webkit-tap-highlight-color: transparent;
  }
`);

const usageItems = [
  {
    title: "IIFE",
    description:
      "无构建环境可以通过全局变量 Willa 使用组件，CSS 使用 dist 产物路径。",
    code: iifeCode,
    language: "html",
  },
  {
    title: "模块化引入",
    description: "入口文件引入全量组件样式，业务代码直接按组件入口使用组件。",
    code: bundledCssCode,
    language: "tsx",
  },
  {
    title: "单组件引入",
    description:
      "入口文件只引入 external.css 和主题 CSS；组件文件按需引入组件入口和组件 CSS。",
    code: componentCssCode,
    language: "tsx",
  },
];

export function UsageGuide() {
  return (
    <Card className="docs-usage" id="usage" padding="lg">
      <Stack className="docs-usage-heading" gap="sm">
        <Typography.Text
          className="docs-panel-title"
          style={{ display: "block" }}
        >
          安装使用
        </Typography.Text>
        <Typography.Title level={2}>在项目中使用 Willa</Typography.Title>
        <Typography.Paragraph>
          根据项目构建方式选择全局引入或单组件引入。使用单组件入口时，仍需要额外引入主题
          CSS 和 external.css。
        </Typography.Paragraph>
      </Stack>

      <Stack className="docs-usage-grid" gap="lg">
        <Panel
          as="section"
          className="docs-usage-section"
          variant="plain"
          padding="none"
        >
          <Stack gap="xs">
            <Typography.Title level={3}>安装</Typography.Title>
            <Typography.Paragraph>
              Willa 对外提供统一包，内部按组件拆分产物。
            </Typography.Paragraph>
          </Stack>
          <CodeTabs items={installItems} size="sm" />
        </Panel>

        {usageItems.map((item) => (
          <Panel
            as="section"
            className="docs-usage-section"
            key={item.title}
            variant="plain"
            padding="none"
          >
            <Stack gap="xs">
              <Typography.Title level={3}>{item.title}</Typography.Title>
              <Typography.Paragraph>{item.description}</Typography.Paragraph>
            </Stack>
            <CodeBlock
              className="docs-usage-code-block"
              code={item.code}
              language={item.language}
              showLineNumbers
            />
          </Panel>
        ))}

        <Panel
          as="section"
          className="docs-usage-section"
          variant="plain"
          padding="none"
        >
          <Stack gap="xs">
            <Typography.Title level={3}>移动端点击高亮</Typography.Title>
            <Typography.Paragraph>
              移动端浏览器点击按钮、链接或表单控件时可能显示系统高亮色。宿主应用可以在全局样式里关闭
              WebKit tap highlight，同时保留键盘焦点样式。
            </Typography.Paragraph>
          </Stack>
          <CodeBlock
            className="docs-usage-code-block"
            code={tapHighlightCode}
            language="css"
            showLineNumbers
          />
        </Panel>
      </Stack>
    </Card>
  );
}
