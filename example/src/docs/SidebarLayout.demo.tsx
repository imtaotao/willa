import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { Panel } from "willa/Panel";
import { SidebarLayout } from "willa/SidebarLayout";
import { Stack } from "willa/Stack";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Group.css";
import "willa/Panel.css";
import "willa/SidebarLayout.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const navItemStyle = {
  padding: "0.55rem 0.7rem",
  borderRadius: "0.55rem",
  background: "var(--willa-panel-soft-bg)",
  fontWeight: 600,
} as const;

export default defineDoc({
  id: "sidebar-layout",
  name: "SidebarLayout",
  category: "layout",
  packageName: "willa/SidebarLayout",
  description: "用于设置页、文档页和资源管理中常见的侧栏加主内容布局。",
  imports: [
    { name: "SidebarLayout", from: "willa/SidebarLayout" },
    { name: "Panel", from: "willa/Panel" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Group", from: "willa/Group" },
    { name: "Button", from: "willa/Button" },
    { name: "Badge", from: "willa/Badge" },
  ],
  css: "willa/SidebarLayout.css",
  demo: {
    name: "SidebarLayout",
    component: SidebarLayout,
    props: {
      sidebar: "导航",
      sidebarWidth: "12rem",
    },
    children: "主内容",
  },
  code: `
    import { SidebarLayout } from "willa/SidebarLayout";
    import "willa/SidebarLayout.css";

    <SidebarLayout sidebar="导航" sidebarWidth="12rem">
      主内容
    </SidebarLayout>;
  `,
  sections: [
    {
      title: "文档侧栏",
      code: `
        <SidebarLayout
          sidebarWidth="13rem"
          sidebar={
            <Stack gap="xs">
              <strong>组件分类</strong>
              <span style={{ padding: "0.55rem 0.7rem", borderRadius: "0.55rem", background: "var(--willa-panel-soft-bg)", fontWeight: 600 }}>
                布局组件
              </span>
              <span style={{ padding: "0.55rem 0.7rem", borderRadius: "0.55rem", background: "var(--willa-panel-soft-bg)", fontWeight: 600 }}>
                表单组件
              </span>
            </Stack>
          }
        >
          <Panel
            title="布局组件"
            description="用于页面骨架、分栏和区域排列。"
            actions={<Badge tone="info">layout</Badge>}
          >
            <Group gap="sm">
              <Button size="sm">查看指南</Button>
              <Button size="sm" variant="ghost">
                查看源码
              </Button>
            </Group>
          </Panel>
        </SidebarLayout>;
      `,
      content: (
        <SidebarLayout
          sidebarWidth="13rem"
          sidebar={
            <Stack gap="xs">
              <strong>组件分类</strong>
              <span style={navItemStyle}>布局组件</span>
              <span style={navItemStyle}>表单组件</span>
            </Stack>
          }
        >
          <Panel
            title="布局组件"
            description="用于页面骨架、分栏和区域排列。"
            actions={<Badge tone="info">layout</Badge>}
          >
            <Group gap="sm">
              <Button size="sm">查看指南</Button>
              <Button size="sm" variant="ghost">
                查看源码
              </Button>
            </Group>
          </Panel>
        </SidebarLayout>
      ),
    },
    {
      title: "右侧栏",
      code: `
        <SidebarLayout
          side="right"
          sidebarWidth="12rem"
          sidebar={<Panel padding="sm">辅助信息</Panel>}
        >
          <Panel title="主内容">右侧栏适合详情页的状态、目录和快捷操作。</Panel>
        </SidebarLayout>;
      `,
      content: (
        <SidebarLayout
          side="right"
          sidebarWidth="12rem"
          sidebar={<Panel padding="sm">辅助信息</Panel>}
        >
          <Panel title="主内容">右侧栏适合详情页的状态、目录和快捷操作。</Panel>
        </SidebarLayout>
      ),
    },
  ],
  props: [
    {
      name: "sidebar",
      type: "ReactNode",
      required: true,
      description: "侧栏内容。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "主内容。",
    },
    {
      name: "side",
      type: '"left" | "right"',
      description: "侧栏位置。",
    },
    {
      name: "sidebarWidth",
      type: "string",
      description: "侧栏宽度。",
    },
    {
      name: "gap",
      type: '"none" | "sm" | "md" | "lg" | string',
      description: "侧栏和主内容之间的间距。",
    },
    {
      name: "minContentWidth",
      type: "string",
      description: "主内容最小宽度。",
    },
    {
      name: "collapseBelow",
      type: '"none" | "tablet"',
      description: "移动端是否折叠为上下布局。",
    },
  ],
});
