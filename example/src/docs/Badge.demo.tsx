import {
  CheckCircledIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import "willa/Badge.css";

import { defineDoc } from "#example/catalog/defineDoc";

const badgeRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.65rem",
  alignItems: "center",
} as const;

export default defineDoc({
  id: "badge",
  name: "Badge",
  packageName: "willa/Badge",
  description: "用于文章、文档和 MDX 内容中的分类、版本、状态和轻量标记。",
  imports: [{ name: "Badge", from: "willa/Badge" }],
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

    export function Example() {
      return (
        <Badge tone="info" icon={<RocketIcon />}>
          新功能
        </Badge>
      );
    }
  `,
  sections: [
    {
      title: "语义类型",
      content: (
        <div style={badgeRowStyle}>
          <Badge>默认</Badge>
          <Badge tone="info">文档</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">实验性</Badge>
          <Badge tone="danger">已废弃</Badge>
        </div>
      ),
    },
    {
      title: "视觉类型",
      content: (
        <div style={badgeRowStyle}>
          <Badge tone="info" variant="soft">
            Soft
          </Badge>
          <Badge tone="info" variant="outline">
            Outline
          </Badge>
          <Badge tone="info" variant="solid">
            Solid
          </Badge>
        </div>
      ),
    },
    {
      title: "尺寸和图标",
      content: (
        <div style={badgeRowStyle}>
          <Badge size="sm" tone="success" icon={<CheckCircledIcon />}>
            稳定
          </Badge>
          <Badge size="md" tone="warning" icon={<ExclamationTriangleIcon />}>
            Beta
          </Badge>
          <Badge tone="neutral" trailingIcon={<ClockIcon />}>
            3 分钟阅读
          </Badge>
        </div>
      ),
    },
    {
      title: "常见组合",
      content: (
        <div style={badgeRowStyle}>
          <Badge tone="info">v0.3</Badge>
          <Badge tone="success">推荐</Badge>
          <Badge tone="warning" variant="outline">
            Preview
          </Badge>
          <Badge tone="danger" variant="soft">
            Breaking
          </Badge>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"soft" | "outline" | "solid"',
      description: "徽标的视觉类型。",
    },
    {
      name: "tone",
      type: '"neutral" | "info" | "success" | "warning" | "danger"',
      description: "徽标的语义颜色。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
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
