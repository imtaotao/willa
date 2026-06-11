import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { Panel } from "willa/Panel";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Group.css";
import "willa/Panel.css";

import { defineDoc } from "#example/catalog/defineDoc";

export default defineDoc({
  id: "panel",
  name: "Panel",
  category: "layout",
  packageName: "willa/Panel",
  description: "用于产品页面中的内容区域，提供标题、操作区、主体和底部区域。",
  imports: [
    { name: "Panel", from: "willa/Panel" },
    { name: "Button", from: "willa/Button" },
    { name: "Badge", from: "willa/Badge" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/Panel.css",
  demo: {
    name: "Panel",
    component: Panel,
    props: {
      title: "发布概览",
      description: "展示当前组件发布状态。",
    },
    children: "已完成导出、样式和示例检查。",
  },
  code: `
    import { Panel } from "willa/Panel";
    import "willa/Panel.css";

    <Panel title="发布概览" description="展示当前组件发布状态。">
      已完成导出、样式和示例检查。
    </Panel>;
  `,
  sections: [
    {
      title: "带操作区",
      code: `
        <Panel
          title="发布概览"
          description="展示当前组件发布状态。"
          actions={<Button size="sm">查看详情</Button>}
        >
          <Group gap="xs">
            <Badge tone="success">已构建</Badge>
            <Badge tone="info">3 个入口</Badge>
            <Badge>layout</Badge>
          </Group>
        </Panel>;
      `,
      content: (
        <Panel
          title="发布概览"
          description="展示当前组件发布状态。"
          actions={<Button size="sm">查看详情</Button>}
        >
          <Group gap="xs">
            <Badge tone="success">已构建</Badge>
            <Badge tone="info">3 个入口</Badge>
            <Badge>layout</Badge>
          </Group>
        </Panel>
      ),
    },
    {
      title: "区域变体",
      code: `
        <Group direction="column" align="stretch" gap="md">
          <Panel variant="surface" title="Surface">
            默认产品区域。
          </Panel>
          <Panel variant="soft" title="Soft">
            更轻的内容承载区。
          </Panel>
          <Panel variant="outline" title="Outline">
            强调边界的区域。
          </Panel>
        </Group>;
      `,
      content: (
        <Group direction="column" align="stretch" gap="md">
          <Panel variant="surface" title="Surface">
            默认产品区域。
          </Panel>
          <Panel variant="soft" title="Soft">
            更轻的内容承载区。
          </Panel>
          <Panel variant="outline" title="Outline">
            强调边界的区域。
          </Panel>
        </Group>
      ),
    },
    {
      title: "底部内容",
      code: `
        <Panel
          title="任务结果"
          footer={
            <Group justify="end" gap="sm">
              <Button size="sm" variant="ghost">
                忽略
              </Button>
              <Button size="sm">确认</Button>
            </Group>
          }
        >
          已生成 12 条检查建议。
        </Panel>;
      `,
      content: (
        <Panel
          title="任务结果"
          footer={
            <Group justify="end" gap="sm">
              <Button size="sm" variant="ghost">
                忽略
              </Button>
              <Button size="sm">确认</Button>
            </Group>
          }
        >
          已生成 12 条检查建议。
        </Panel>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "主体内容。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "区域标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方的补充说明。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "标题右侧操作区。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "底部内容或操作区。",
    },
    {
      name: "variant",
      type: '"surface" | "soft" | "outline" | "plain"',
      description: "区域视觉变体。",
    },
    {
      name: "padding",
      type: '"none" | "sm" | "md" | "lg"',
      description: "主体内边距。",
    },
  ],
});
