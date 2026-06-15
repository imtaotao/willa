import { Container } from "willa/Container";
import "willa/Container.css";

import { defineDoc } from "#example/catalog/defineDoc";

const sampleStyle = {
  border: "1px solid var(--willa-border)",
  borderRadius: "0.75rem",
  background: "var(--willa-surface)",
} as const;

export default defineDoc({
  id: "container",
  name: "Container",
  category: "layout",
  packageName: "willa/Container",
  description: "用于控制页面或区块主体宽度，并提供一致的左右留白。",
  imports: [{ name: "Container", from: "willa/Container" }],
  css: "willa/Container.css",
  demo: {
    name: "Container",
    component: Container,
    props: { size: "sm", padding: "md" },
    children: "适合文档、设置页和窄内容表单。",
  },
  code: `
    import { Container } from "willa/Container";
    import "willa/Container.css";

    <Container size="sm" padding="md">
      适合文档、设置页和窄内容表单。
    </Container>;
  `,
  sections: [
    {
      title: "内容宽度",
      code: `
        <Container
          size="md"
          padding="lg"
          style={{
            border: "1px solid var(--willa-border)",
            borderRadius: "0.75rem",
            background: "var(--willa-surface)",
          }}
        >
          <strong>项目概览</strong>
          <p style={{ color: "var(--willa-text-soft)", margin: "0.5rem 0 0" }}>
            主体内容保持可读宽度，宽屏下不会无限拉伸。
          </p>
        </Container>;
      `,
      content: (
        <Container size="md" padding="lg" style={sampleStyle}>
          <strong>项目概览</strong>
          <p
            style={{
              color: "var(--willa-text-soft)",
              margin: "0.5rem 0 0",
            }}
          >
            主体内容保持可读宽度，宽屏下不会无限拉伸。
          </p>
        </Container>
      ),
    },
    {
      title: "不同尺寸",
      code: `
        <Container
          size="xs"
          padding="md"
          style={{
            border: "1px solid var(--willa-border)",
            borderRadius: "0.75rem",
            background: "var(--willa-surface)",
          }}
        >
          小尺寸适合登录、确认和轻量表单。
        </Container>;
      `,
      content: (
        <Container size="xs" padding="md" style={sampleStyle}>
          小尺寸适合登录、确认和轻量表单。
        </Container>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "容器内容。",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
      defaultValue: '"lg"',
      description: "最大内容宽度。",
    },
    {
      name: "padding",
      type: '"none" | "sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "左右内边距。",
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: "true",
      description: "是否居中容器，默认开启。",
    },
    {
      name: "as",
      type: "ElementType",
      defaultValue: '"div"',
      description: "自定义渲染标签或组件。",
    },
  ],
});
