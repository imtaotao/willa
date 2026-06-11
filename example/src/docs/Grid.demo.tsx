import { Badge } from "willa/Badge";
import { Grid } from "willa/Grid";
import "willa/Badge.css";
import "willa/Grid.css";

import { defineDoc } from "#example/catalog/defineDoc";

const gridItemStyle = {
  minHeight: "5.5rem",
  padding: "1rem",
  border: "1px solid var(--willa-border)",
  borderRadius: "0.75rem",
  background: "var(--willa-surface)",
} as const;

export default defineDoc({
  id: "grid",
  name: "Grid",
  category: "layout",
  packageName: "willa/Grid",
  description: "用于卡片、表单列、资源列表和数据块的响应式网格布局。",
  imports: [
    { name: "Grid", from: "willa/Grid" },
    { name: "Badge", from: "willa/Badge" },
  ],
  css: "willa/Grid.css",
  demo: {
    name: "Grid",
    component: Grid,
    props: { minColumnWidth: "10rem", gap: "sm" },
    children: [
      {
        name: "Badge",
        component: Badge,
        props: { tone: "info" },
        children: "响应式",
      },
      {
        name: "Badge",
        component: Badge,
        props: { tone: "success" },
        children: "自适应",
      },
      {
        name: "Badge",
        component: Badge,
        props: { tone: "warning" },
        children: "可配置",
      },
    ],
  },
  code: `
    import { Badge } from "willa/Badge";
    import { Grid } from "willa/Grid";
    import "willa/Badge.css";
    import "willa/Grid.css";

    <Grid minColumnWidth="10rem" gap="sm">
      <Badge tone="info">响应式</Badge>
      <Badge tone="success">自适应</Badge>
      <Badge tone="warning">可配置</Badge>
    </Grid>;
  `,
  sections: [
    {
      title: "自适应列",
      code: `
        <Grid minColumnWidth="12rem" gap="md">
          {["输入", "反馈", "文件", "日历"].map((item) => (
            <div
              key={item}
              style={{
                minHeight: "5.5rem",
                padding: "1rem",
                border: "1px solid var(--willa-border)",
                borderRadius: "0.75rem",
                background: "var(--willa-surface)",
              }}
            >
              <strong>{item}</strong>
              <p style={{ color: "var(--willa-text-soft)", margin: "0.4rem 0 0" }}>
                根据容器宽度自动换行。
              </p>
            </div>
          ))}
        </Grid>;
      `,
      content: (
        <Grid minColumnWidth="12rem" gap="md">
          {["输入", "反馈", "文件", "日历"].map((item) => (
            <div key={item} style={gridItemStyle}>
              <strong>{item}</strong>
              <p
                style={{
                  color: "var(--willa-text-soft)",
                  margin: "0.4rem 0 0",
                }}
              >
                根据容器宽度自动换行。
              </p>
            </div>
          ))}
        </Grid>
      ),
    },
    {
      title: "固定列数",
      code: `
        <Grid columns={3} gap="sm">
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            A
          </div>
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            B
          </div>
          <div
            style={{
              minHeight: "5.5rem",
              padding: "1rem",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-surface)",
            }}
          >
            C
          </div>
        </Grid>;
      `,
      content: (
        <Grid columns={3} gap="sm">
          <div style={gridItemStyle}>A</div>
          <div style={gridItemStyle}>B</div>
          <div style={gridItemStyle}>C</div>
        </Grid>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "网格中的内容。",
    },
    {
      name: "columns",
      type: "number | string",
      description: "固定列数或自定义 grid-template-columns。",
    },
    {
      name: "minColumnWidth",
      type: "string",
      description: "自适应列的最小宽度。",
    },
    {
      name: "gap",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',
      description: "整体间距。",
    },
    {
      name: "rowGap",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',
      description: "行间距。",
    },
    {
      name: "columnGap",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',
      description: "列间距。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end" | "stretch"',
      description: "单元格交叉轴对齐方式。",
    },
    {
      name: "justify",
      type: '"start" | "center" | "end" | "stretch"',
      description: "单元格主轴对齐方式。",
    },
  ],
});
