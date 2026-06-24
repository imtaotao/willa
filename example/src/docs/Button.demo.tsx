import {
  ArrowRightIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import "willa/Button.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

export default defineDoc({
  id: "button",
  name: "Button",
  packageName: "willa/Button",
  description: "用于文章、文档和 MDX 内容中的跳转、下载、复制和 CTA 操作。",
  imports: [
    { name: "Button", from: "willa/Button" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/Button.css",
  demo: {
    name: "Button",
    component: Button,
    props: {
      href: "https://github.com",
      target: "_blank",
      trailingIcon: <ArrowRightIcon />,
    },
    children: "阅读原文",
  },
  code: `
    import { ArrowRightIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import "willa/Button.css";

    <Button
      href="https://github.com"
      target="_blank"
      trailingIcon={<ArrowRightIcon />}
    >
      阅读原文
    </Button>;
  `,
  sections: [
    {
      title: "视觉类型",
      code: `
        <Group gap="md">
          <Button>主要操作</Button>
          <Button variant="soft">柔和操作</Button>
          <Button variant="outline">次要操作</Button>
          <Button variant="ghost">轻量操作</Button>
          <Button variant="link">文本链接</Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button>主要操作</Button>
          <Button variant="soft">柔和操作</Button>
          <Button variant="outline">次要操作</Button>
          <Button variant="ghost">轻量操作</Button>
          <Button variant="link" trailingIcon={<ExternalLinkIcon />}>
            文本链接
          </Button>
        </Group>
      ),
    },
    {
      title: "尺寸和图标",
      code: `
        import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";

        <Group gap="md">
          <Button size="sm" icon={<DownloadIcon />}>
            下载
          </Button>
          <Button size="md" trailingIcon={<ArrowRightIcon />}>
            查看详情
          </Button>
          <Button size="lg">开始阅读</Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button size="sm" icon={<DownloadIcon />}>
            下载
          </Button>
          <Button size="md" trailingIcon={<ArrowRightIcon />}>
            查看详情
          </Button>
          <Button size="lg">开始阅读</Button>
        </Group>
      ),
    },
    {
      title: "禁用状态",
      code: `
        <Group gap="md">
          <Button disabled>不可点击</Button>
          <Button href="https://github.com" disabled variant="outline">
            禁用链接
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button disabled>不可点击</Button>
          <Button href="https://github.com" disabled variant="outline">
            禁用链接
          </Button>
        </Group>
      ),
    },
    {
      title: "加载状态",
      code: `
        <Group gap="md">
          <Button loading>保存中</Button>
          <Button loading loadingText="提交中" variant="outline">
            提交
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button loading>保存中</Button>
          <Button loading loadingText="提交中" variant="outline">
            提交
          </Button>
          <Button href="https://github.com" loading variant="soft">
            跳转中
          </Button>
        </Group>
      ),
    },
    {
      title: "按下态",
      code: `
        <Group gap="md">
          <Button pressed variant="ghost">
            自动换行
          </Button>
          <Button pressed variant="outline">
            预览模式
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button pressed variant="ghost">
            自动换行
          </Button>
          <Button pressed variant="outline">
            预览模式
          </Button>
        </Group>
      ),
    },
    {
      title: "点击复制",
      code: `
        <Group gap="md">
          <Button copyText variant="soft">
            pnpm add willa
          </Button>
          <Button copyText="import { Button } from 'willa/Button';">
            复制组件引入
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button copyText variant="soft">
            pnpm add willa
          </Button>
          <Button copyText="import { Button } from 'willa/Button';">
            复制组件引入
          </Button>
          <Button copyText="pnpm add willa" variant="outline">
            复制安装命令
          </Button>
        </Group>
      ),
    },
    {
      title: "自定义颜色",
      code: `
        <Group gap="md">
          <Button backgroundColor="#f6e7c8" textColor="#3f2a12">
            暖色按钮
          </Button>
          <Button variant="outline" backgroundColor="rgba(96, 165, 250, 0.12)">
            自定义背景
          </Button>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <Button backgroundColor="#f6e7c8" textColor="#3f2a12">
            暖色按钮
          </Button>
          <Button variant="outline" backgroundColor="rgba(96, 165, 250, 0.12)">
            自定义背景
          </Button>
        </Group>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: '"solid" | "soft" | "outline" | "ghost" | "link"',
      defaultValue: '"solid"',
      description: "按钮的视觉类型。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "按钮尺寸。",
    },
    {
      name: "href",
      type: "string",
      description: "传入后渲染为链接按钮。",
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
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "禁用按钮或链接按钮。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "展示加载状态，并阻止点击、复制和链接跳转。",
    },
    {
      name: "loadingText",
      type: "ReactNode",
      description: "加载时展示的替代文案，未传时保留原文案。",
    },
    {
      name: "pressed",
      type: "boolean",
      description: "按钮是否处于按下态；传入后会同步 aria-pressed 语义。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "自定义按钮背景颜色，支持 CSS 颜色值。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义按钮文字颜色，支持 CSS 颜色值。",
    },
    {
      name: "copyText",
      type: "boolean | string",
      description:
        "点击复制能力。传 true 时复制按钮文本，传字符串时复制指定文本，未传时不启用。",
    },
    {
      name: "copiedDuration",
      type: "number",
      defaultValue: "300",
      description: "复制成功后的视觉反馈持续时间，单位为毫秒，默认为 300。",
    },
    {
      name: "onCopyText",
      type: "(text: string) => void",
      description: "复制成功后的回调。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "按钮内容。",
    },
    {
      name: "type",
      type: "string",
      description: "组件类型。",
    },
  ],
});
