import {
  CheckCircledIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Group } from "willa/Group";
import "willa/Badge.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

export default defineDoc({
  id: "badge",
  name: "Badge",
  packageName: "willa/Badge",
  description: "用于文章、文档和 MDX 内容中的分类、版本、状态和轻量标记。",
  imports: [
    { name: "Badge", from: "willa/Badge" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/Badge.css",
  demo: {
    name: "Badge",
    component: Badge,
    props: {
      tone: "info",
      icon: <RocketIcon />,
    },
    children: "新功能",
  },
  code: `
    import { RocketIcon } from "@radix-ui/react-icons";
    import { Badge } from "willa/Badge";
    import "willa/Badge.css";

    <Badge tone="info" icon={<RocketIcon />}>
      新功能
    </Badge>;
  `,
  sections: [
    {
      title: "语义类型",
      code: `
        <Group gap="sm">
          <Badge>默认</Badge>
          <Badge tone="info">文档</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">实验性</Badge>
          <Badge tone="danger">已废弃</Badge>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Badge>默认</Badge>
          <Badge tone="info">文档</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">实验性</Badge>
          <Badge tone="danger">已废弃</Badge>
        </Group>
      ),
    },
    {
      title: "视觉类型",
      code: `
        <Group gap="sm">
          <Badge tone="info" variant="soft">
            Soft
          </Badge>
          <Badge tone="info" variant="outline">
            Outline
          </Badge>
          <Badge tone="info" variant="solid">
            Solid
          </Badge>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Badge tone="info" variant="soft">
            Soft
          </Badge>
          <Badge tone="info" variant="outline">
            Outline
          </Badge>
          <Badge tone="info" variant="solid">
            Solid
          </Badge>
        </Group>
      ),
    },
    {
      title: "尺寸和图标",
      code: `
        import {
          CheckCircledIcon,
          ClockIcon,
          ExclamationTriangleIcon,
        } from "@radix-ui/react-icons";

        <Group gap="sm">
          <Badge size="sm" tone="success" icon={<CheckCircledIcon />}>
            稳定
          </Badge>
          <Badge size="md" tone="warning" icon={<ExclamationTriangleIcon />}>
            Beta
          </Badge>
          <Badge tone="neutral" trailingIcon={<ClockIcon />}>
            3 分钟阅读
          </Badge>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Badge size="sm" tone="success" icon={<CheckCircledIcon />}>
            稳定
          </Badge>
          <Badge size="md" tone="warning" icon={<ExclamationTriangleIcon />}>
            Beta
          </Badge>
          <Badge tone="neutral" trailingIcon={<ClockIcon />}>
            3 分钟阅读
          </Badge>
        </Group>
      ),
    },
    {
      title: "常见组合",
      code: `
        <Group gap="sm">
          <Badge tone="info">v0.3</Badge>
          <Badge tone="success">推荐</Badge>
          <Badge tone="warning" variant="outline">
            Preview
          </Badge>
          <Badge tone="danger" variant="soft">
            Breaking
          </Badge>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Badge tone="info">v0.3</Badge>
          <Badge tone="success">推荐</Badge>
          <Badge tone="warning" variant="outline">
            Preview
          </Badge>
          <Badge tone="danger" variant="soft">
            Breaking
          </Badge>
        </Group>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"soft" | "outline" | "solid"',
      defaultValue: '"soft"',
      description: "徽标的视觉类型。",
    },
    {
      name: "tone",
      type: '"neutral" | "info" | "success" | "warning" | "danger"',
      defaultValue: '"neutral"',
      description: "徽标的语义颜色。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "徽标尺寸。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "展示在文字前的图标。",
    },
    {
      name: "trailingIcon",
      type: "ReactNode",
      description: "展示在文字后的图标。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "徽标内容。",
    },
  ],
});
