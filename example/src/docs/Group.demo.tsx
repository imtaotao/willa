import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

export default defineDoc({
  id: "group",
  name: "Group",
  category: "layout",
  packageName: "willa/Group",
  description: "用于按钮组、标签组和工具栏等横向排列场景的轻量布局组件。",
  imports: [
    { name: "Group", from: "willa/Group" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/Group.css",
  demo: {
    name: "Group",
    component: Group,
    props: {
      gap: "sm",
    },
    children: [
      {
        name: "Button",
        component: Button,
        props: { size: "sm", variant: "solid" },
        children: "返回首页",
      },
      {
        name: "Button",
        component: Button,
        props: { size: "sm", variant: "ghost" },
        children: "查看文档",
      },
    ],
  },
  code: `
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import "willa/Button.css";
    import "willa/Group.css";

    <Group gap="sm">
      <Button size="sm">返回首页</Button>
      <Button size="sm" variant="ghost">
        查看文档
      </Button>
    </Group>;
  `,
  sections: [
    {
      title: "操作按钮",
      code: `
        <Group gap="sm">
          <Button size="sm" variant="solid">
            保存
          </Button>
          <Button size="sm" variant="outline">
            预览
          </Button>
          <Button size="sm" variant="ghost">
            取消
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="sm">
          <Button size="sm" variant="solid">
            保存
          </Button>
          <Button size="sm" variant="outline">
            预览
          </Button>
          <Button size="sm" variant="ghost">
            取消
          </Button>
        </Group>
      ),
    },
    {
      title: "标签集合",
      code: `
        <Group gap="xs">
          <Badge tone="info">AI 产品</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">需要审核</Badge>
          <Badge>文档站</Badge>
        </Group>;
      `,
      content: (
        <Group gap="xs">
          <Badge tone="info">AI 产品</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">需要审核</Badge>
          <Badge>文档站</Badge>
        </Group>
      ),
    },
    {
      title: "自定义间距",
      code: `
        <Group gap="14px">
          <Button size="sm" variant="solid">
            应用
          </Button>
          <Button size="sm" variant="outline">
            重置
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="14px">
          <Button size="sm" variant="solid">
            应用
          </Button>
          <Button size="sm" variant="outline">
            重置
          </Button>
        </Group>
      ),
    },
    {
      title: "分隔符",
      code: `
        <Group gap="xs" separator="/">
          <span>产品</span>
          <span>组件</span>
          <span>布局</span>
        </Group>;
      `,
      content: (
        <Group gap="xs" separator="/">
          <span>产品</span>
          <span>组件</span>
          <span>布局</span>
        </Group>
      ),
    },
    {
      title: "等宽填充",
      code: `
        <Group gap="sm" grow width="26rem">
          <Button size="sm" variant="outline">
            取消
          </Button>
          <Button size="sm">
            保存
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="sm" grow width="26rem">
          <Button size="sm" variant="outline">
            取消
          </Button>
          <Button size="sm">保存</Button>
        </Group>
      ),
    },
    {
      title: "竖向排列",
      code: `
        <Group direction="column" align="start" gap="sm">
          <Button size="sm" variant="solid">
            开始生成
          </Button>
          <Button size="sm" variant="outline">
            保存草稿
          </Button>
          <Button size="sm" variant="ghost">
            稍后处理
          </Button>
        </Group>;
      `,
      content: (
        <Group direction="column" align="start" gap="sm">
          <Button size="sm" variant="solid">
            开始生成
          </Button>
          <Button size="sm" variant="outline">
            保存草稿
          </Button>
          <Button size="sm" variant="ghost">
            稍后处理
          </Button>
        </Group>
      ),
    },
    {
      title: "对齐方式",
      code: `
        <Group gap="sm" justify="end">
          <Button size="sm" variant="outline">
            取消
          </Button>
          <Button size="sm" variant="solid">
            保存
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="sm" justify="end">
          <Button size="sm" variant="outline">
            取消
          </Button>
          <Button size="sm" variant="solid">
            保存
          </Button>
        </Group>
      ),
    },
    {
      title: "反向排列",
      code: `
        <Group gap="sm" reverse>
          <Button size="sm" variant="ghost">
            取消
          </Button>
          <Button size="sm">
            提交
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="sm" reverse>
          <Button size="sm" variant="ghost">
            取消
          </Button>
          <Button size="sm">提交</Button>
        </Group>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "需要排列的内容。",
    },
    {
      name: "gap",
      type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',
      description: "子元素之间的间距，支持预设值或任意 CSS 间距值。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end" | "stretch" | "baseline"',
      description: "交叉轴对齐方式。",
    },
    {
      name: "justify",
      type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
      description: "主轴对齐方式。",
    },
    {
      name: "direction",
      type: '"row" | "column"',
      description: "排列方向，默认是横向排列。",
    },
    {
      name: "wrap",
      type: "boolean",
      description: "是否允许换行，默认开启。",
    },
    {
      name: "inline",
      type: "boolean",
      description: "是否使用 inline-flex。",
    },
    {
      name: "grow",
      type: "boolean",
      description: "是否让子元素等宽填充可用空间。",
    },
    {
      name: "reverse",
      type: "boolean",
      description: "是否反向排列子元素。",
    },
    {
      name: "width",
      type: "string",
      description: "外层宽度。",
    },
    {
      name: "separator",
      type: "ReactNode",
      description: "子元素之间的分隔内容。",
    },
    {
      name: "as",
      type: "ElementType",
      description: "自定义渲染标签或组件。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
  ],
});
