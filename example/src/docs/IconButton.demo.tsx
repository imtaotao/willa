import {
  ArrowRightIcon,
  BookmarkIcon,
  CheckIcon,
  ClipboardCopyIcon,
  DownloadIcon,
  ExternalLinkIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { IconButton } from "willa/IconButton";
import "willa/IconButton.css";

import { defineDoc } from "#example/catalog/defineDoc";

const iconButtonRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

export default defineDoc({
  id: "icon-button",
  name: "IconButton",
  packageName: "willa/IconButton",
  description: "用于工具栏、卡片操作区和内联内容中的纯图标按钮。",
  imports: [{ name: "IconButton", from: "willa/IconButton" }],
  css: "willa/IconButton.css",
  demo: {
    name: "IconButton",
    component: IconButton,
    props: {
      ariaLabel: "分享文章",
      icon: <Share2Icon />,
    },
  },
  code: `
    import { Share2Icon } from "@radix-ui/react-icons";
    import { IconButton } from "willa/IconButton";
    import "willa/IconButton.css";

    <IconButton ariaLabel="分享文章" icon={<Share2Icon />} />
  `,
  sections: [
    {
      title: "视觉类型",
      content: (
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="收藏"
            icon={<BookmarkIcon />}
            variant="solid"
          />
          <IconButton ariaLabel="喜欢" icon={<HeartIcon />} variant="soft" />
          <IconButton
            ariaLabel="下载"
            icon={<DownloadIcon />}
            variant="outline"
          />
          <IconButton
            ariaLabel="搜索"
            icon={<MagnifyingGlassIcon />}
            variant="ghost"
          />
        </div>
      ),
    },
    {
      title: "尺寸和形状",
      content: (
        <div style={iconButtonRowStyle}>
          <IconButton ariaLabel="上一步" icon={<ArrowRightIcon />} size="sm" />
          <IconButton
            ariaLabel="外部链接"
            icon={<ExternalLinkIcon />}
            shape="circle"
          />
          <IconButton
            ariaLabel="确认"
            icon={<CheckIcon />}
            shape="circle"
            size="lg"
            variant="outline"
          />
        </div>
      ),
    },
    {
      title: "链接、禁用和加载",
      content: (
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="打开 GitHub"
            href="https://github.com"
            icon={<ExternalLinkIcon />}
            target="_blank"
            variant="outline"
          />
          <IconButton ariaLabel="不可点击" disabled icon={<BookmarkIcon />} />
          <IconButton
            ariaLabel="保存"
            icon={<CheckIcon />}
            loading
            loadingLabel="保存中"
            variant="soft"
          />
        </div>
      ),
    },
    {
      title: "点击复制",
      content: (
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="复制安装命令"
            copyText="pnpm add willa"
            icon={<ClipboardCopyIcon />}
          />
          <IconButton
            ariaLabel="复制组件引入"
            copyText="import { IconButton } from 'willa/IconButton';"
            icon={<ClipboardCopyIcon />}
            variant="outline"
          />
        </div>
      ),
    },
    {
      title: "自定义颜色",
      content: (
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="暖色收藏"
            backgroundColor="#f6e7c8"
            icon={<BookmarkIcon />}
            textColor="#3f2a12"
          />
          <IconButton
            ariaLabel="蓝色搜索"
            backgroundColor="rgba(96, 165, 250, 0.14)"
            icon={<MagnifyingGlassIcon />}
            textColor="currentColor"
            variant="outline"
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "ariaLabel",
      type: "string",
      required: true,
      description: "无可见文字时提供给辅助技术的按钮名称。",
    },
    {
      name: "icon",
      type: "ReactNode",
      required: true,
      description: "按钮内展示的图标。",
    },
    {
      name: "variant",
      type: '"solid" | "soft" | "outline" | "ghost"',
      description: "按钮的视觉类型。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "按钮尺寸。",
    },
    {
      name: "shape",
      type: '"square" | "circle"',
      description: "按钮外形。",
    },
    {
      name: "href",
      type: "string",
      description: "传入后渲染为链接按钮。",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "禁用按钮或链接按钮。",
    },
    {
      name: "loading",
      type: "boolean",
      description: "展示加载状态，并阻止点击、复制和链接跳转。",
    },
    {
      name: "loadingLabel",
      type: "string",
      description: "加载时替换 ariaLabel 的辅助技术文案。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "自定义按钮背景颜色，支持 CSS 颜色值。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义图标颜色，支持 CSS 颜色值。",
    },
    {
      name: "copyText",
      type: "boolean | string",
      description:
        "启用复制能力；传 true 时复制 ariaLabel，传字符串时复制该字符串。",
    },
    {
      name: "copiedDuration",
      type: "number",
      description: "复制成功反馈持续时间，默认 300ms。",
    },
    {
      name: "onCopyText",
      type: "(text: string) => void",
      description: "复制成功后的回调。",
    },
  ],
});
