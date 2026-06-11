import { Badge } from "willa/Badge";
import { Breadcrumb } from "willa/Breadcrumb";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { PageHeader } from "willa/PageHeader";
import "willa/Badge.css";
import "willa/Breadcrumb.css";
import "willa/Button.css";
import "willa/Group.css";
import "willa/PageHeader.css";

import { defineDoc } from "#example/catalog/defineDoc";

const previewStyle = {
  width: "min(100%, 64rem)",
  marginInline: "auto",
} as const;

const breadcrumb = (
  <Breadcrumb
    items={[
      { label: "首页", href: "#/" },
      { label: "AI 组件", href: "#/prompt-input" },
      { label: "产品分析" },
    ]}
  />
);

const actions = (
  <Group gap="sm">
    <Button variant="outline">导出</Button>
    <Button>新建任务</Button>
  </Group>
);

export default defineDoc({
  id: "page-header",
  name: "PageHeader",
  packageName: "willa/PageHeader",
  description: "用于页面顶部的标题、层级、摘要和操作区。",
  imports: [{ name: "PageHeader", from: "willa/PageHeader" }],
  css: "willa/PageHeader.css",
  demo: {
    name: "PageHeader",
    component: PageHeader,
    props: {
      style: previewStyle,
      breadcrumb,
      eyebrow: "AI Workspace",
      title: "产品反馈分析",
      description:
        "汇总用户反馈、来源证据和生成状态，帮助团队快速进入下一步处理。",
      meta: <Badge tone="success">已同步</Badge>,
      actions,
    },
  },
  code: `
    import { Badge } from "willa/Badge";
    import { Breadcrumb } from "willa/Breadcrumb";
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import { PageHeader } from "willa/PageHeader";
    import "willa/Badge.css";
    import "willa/Breadcrumb.css";
    import "willa/Button.css";
    import "willa/Group.css";
    import "willa/PageHeader.css";

    <PageHeader
      breadcrumb={
        <Breadcrumb
          items={[
            { label: "首页", href: "#/" },
            { label: "AI 组件", href: "#/prompt-input" },
            { label: "产品分析" },
          ]}
        />
      }
      eyebrow="AI Workspace"
      title="产品反馈分析"
      description="汇总用户反馈、来源证据和生成状态，帮助团队快速进入下一步处理。"
      meta={<Badge tone="success">已同步</Badge>}
      actions={
        <Group gap="sm">
          <Button variant="outline">导出</Button>
          <Button>新建任务</Button>
        </Group>
      }
    />;
  `,
  sections: [
    {
      title: "居中展示",
      code: `
        <PageHeader
          align="center"
          divided={false}
          eyebrow="Documentation"
          title="构建更清晰的产品页面"
          description="适合文档页、空状态详情页或需要强调单一主题的页面顶部。"
          actions={<Button>开始使用</Button>}
        />;
      `,
      content: (
        <div style={previewStyle}>
          <PageHeader
            align="center"
            divided={false}
            eyebrow="Documentation"
            title="构建更清晰的产品页面"
            description="适合文档页、空状态详情页或需要强调单一主题的页面顶部。"
            actions={<Button>开始使用</Button>}
          />
        </div>
      ),
    },
    {
      title: "补充内容",
      code: `
        <PageHeader
          title="模型配置"
          description="页面头下方可以承载标签、筛选摘要或额外说明。"
        >
          <Group gap="xs">
            <Badge>64K 上下文</Badge>
            <Badge tone="success">工具已启用</Badge>
            <Badge tone="warning">需要复核</Badge>
          </Group>
        </PageHeader>;
      `,
      content: (
        <div style={previewStyle}>
          <PageHeader
            title="模型配置"
            description="页面头下方可以承载标签、筛选摘要或额外说明。"
          >
            <Group gap="xs">
              <Badge>64K 上下文</Badge>
              <Badge tone="success">工具已启用</Badge>
              <Badge tone="warning">需要复核</Badge>
            </Group>
          </PageHeader>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      required: true,
      description: "页面标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方说明。",
    },
    {
      name: "eyebrow",
      type: "ReactNode",
      description: "标题上方的短标签或分组名。",
    },
    {
      name: "breadcrumb",
      type: "ReactNode",
      description: "页面层级导航，通常传入 Breadcrumb。",
    },
    {
      name: "meta",
      type: "ReactNode",
      description: "标题旁边的状态、时间或版本信息。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "右侧或下方操作区。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "描述下方的补充内容。",
    },
    {
      name: "align",
      type: '"start" | "center"',
      description: "对齐方式，默认 start。",
    },
    {
      name: "divided",
      type: "boolean",
      description: "是否展示底部分隔线，默认 true。",
    },
  ],
});
