import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { AppShell } from "willa/AppShell";
import { Panel } from "willa/Panel";
import { Stack } from "willa/Stack";
import "willa/AppShell.css";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Panel.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const shellNavStyle = {
  display: "grid",
  gap: "0.45rem",
  color: "var(--willa-text-soft)",
} as const;

export default defineDoc({
  id: "app-shell",
  name: "AppShell",
  category: "layout",
  packageName: "willa/AppShell",
  description: "用于产品级页面骨架，组合顶栏、侧栏、主内容、辅助栏和底部区域。",
  imports: [
    { name: "AppShell", from: "willa/AppShell" },
    { name: "Panel", from: "willa/Panel" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Button", from: "willa/Button" },
    { name: "Badge", from: "willa/Badge" },
  ],
  css: "willa/AppShell.css",
  demo: {
    name: "AppShell",
    component: AppShell,
    props: {
      header: "Willa",
      sidebar: "导航",
      aside: "详情",
    },
    children: "工作区",
  },
  code: `
    import { AppShell } from "willa/AppShell";
    import "willa/AppShell.css";

    <AppShell header="Willa" sidebar="导航" aside="详情">
      工作区
    </AppShell>;
  `,
  sections: [
    {
      title: "产品骨架",
      code: `
        <AppShell
          header={
            <strong>Willa Console</strong>
          }
          sidebar={
            <div style={{ display: "grid", gap: "0.45rem", color: "var(--willa-text-soft)" }}>
              <span>概览</span>
              <span>组件</span>
              <span>设置</span>
            </div>
          }
          aside={
            <Stack gap="sm">
              <Badge tone="info">当前项目</Badge>
              <span>产品反馈分析</span>
            </Stack>
          }
          footer="当前工作区会保存上下文和最近操作。"
        >
          <Panel
            title="组件工作台"
            description="集中展示任务、组件状态和配置入口。"
            actions={<Button size="sm">新建任务</Button>}
          >
            已同步 12 个组件状态。
          </Panel>
        </AppShell>;
      `,
      content: (
        <AppShell
          header={<strong>Willa Console</strong>}
          sidebar={
            <div style={shellNavStyle}>
              <span>概览</span>
              <span>组件</span>
              <span>设置</span>
            </div>
          }
          aside={
            <Stack gap="sm">
              <Badge tone="info">当前项目</Badge>
              <span>产品反馈分析</span>
            </Stack>
          }
          footer="当前工作区会保存上下文和最近操作。"
        >
          <Panel
            title="组件工作台"
            description="集中展示任务、组件状态和配置入口。"
            actions={<Button size="sm">新建任务</Button>}
          >
            已同步 12 个组件状态。
          </Panel>
        </AppShell>
      ),
    },
    {
      title: "无辅助栏",
      code: `
        <AppShell
          header="文档工作台"
          sidebar={<Stack gap="xs"><span>开始</span><span>组件</span></Stack>}
        >
          <Panel title="文档内容">适合文档站和设置页的基础框架。</Panel>
        </AppShell>;
      `,
      content: (
        <AppShell
          header="文档工作台"
          sidebar={
            <Stack gap="xs">
              <span>开始</span>
              <span>组件</span>
            </Stack>
          }
        >
          <Panel title="文档内容">适合文档站和设置页的基础框架。</Panel>
        </AppShell>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "主内容。",
    },
    {
      name: "header",
      type: "ReactNode",
      description: "顶部区域。",
    },
    {
      name: "sidebar",
      type: "ReactNode",
      description: "左侧栏内容。",
    },
    {
      name: "aside",
      type: "ReactNode",
      description: "右侧辅助区域。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "底部区域。",
    },
    {
      name: "sidebarWidth",
      type: "string",
      defaultValue: '"16rem"',
      description: "侧栏宽度。",
    },
    {
      name: "asideWidth",
      type: "string",
      defaultValue: '"18rem"',
      description: "辅助栏宽度。",
    },
    {
      name: "stickyHeader",
      type: "boolean",
      defaultValue: "false",
      description: "顶部区域是否吸顶。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
    {
      name: "minContentWidth",
      type: "string",
      description: "最小内容宽度。",
    },
  ],
});
