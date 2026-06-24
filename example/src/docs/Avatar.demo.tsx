import { Avatar } from "willa/Avatar";
import "willa/Avatar.css";

import { defineDoc } from "#example/catalog/defineDoc";

const avatarRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

const profileCardStyle = {
  display: "grid",
  minWidth: "12rem",
  gap: "0.35rem",
} as const;

const profileNameStyle = {
  color: "var(--willa-text-strong)",
  fontSize: "0.92rem",
  fontWeight: 600,
  lineHeight: 1.3,
} as const;

const profileMetaStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.82rem",
  lineHeight: 1.45,
} as const;

const profileStatStyle = {
  display: "flex",
  gap: "0.5rem",
  color: "var(--willa-text-faint)",
  fontSize: "0.78rem",
} as const;

export default defineDoc({
  id: "avatar",
  name: "Avatar",
  packageName: "willa/Avatar",
  description: "用于作者、评论、社区内容和引用来源中的头像展示。",
  imports: [{ name: "Avatar", from: "willa/Avatar" }],
  css: "willa/Avatar.css",
  demo: {
    name: "Avatar",
    component: Avatar,
    props: {
      src: "https://github.com/imtaotao.png",
      name: "Tao Tao",
      alt: "Tao Tao",
      previewable: true,
    },
  },
  code: `
    import { Avatar } from "willa/Avatar";
    import "willa/Avatar.css";

    <Avatar
      src="https://github.com/imtaotao.png"
      name="Tao Tao"
      alt="Tao Tao"
      previewable
    />;
  `,
  sections: [
    {
      title: "悬浮信息",
      code: `
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="Tao Tao"
            hoverCard={
              <div style={profileCardStyle}>
                <strong style={profileNameStyle}>Tao Tao</strong>
                <span style={profileMetaStyle}>
                  Willa 组件库维护者，关注内容平台和文档体验。
                </span>
                <span style={profileStatStyle}>
                  <span>128 篇文章</span>
                  <span>4.8k 关注</span>
                </span>
              </div>
            }
          />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="Tao Tao"
            hoverCard={
              <div style={profileCardStyle}>
                <strong style={profileNameStyle}>Tao Tao</strong>
                <span style={profileMetaStyle}>
                  Willa 组件库维护者，关注内容平台和文档体验。
                </span>
                <span style={profileStatStyle}>
                  <span>128 篇文章</span>
                  <span>4.8k 关注</span>
                </span>
              </div>
            }
          />
        </div>
      ),
    },
    {
      title: "点击预览和跳转",
      code: `
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="点击预览头像"
            previewable
          />
          <Avatar
            src="https://github.com/github.png"
            name="GitHub"
            alt="打开 GitHub"
            href="https://github.com"
            target="_blank"
          />
          <Avatar name="Hover Only" hoverable />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="点击预览头像"
            previewable
          />
          <Avatar
            src="https://github.com/github.png"
            name="GitHub"
            alt="打开 GitHub"
            href="https://github.com"
            target="_blank"
          />
          <Avatar name="Hover Only" hoverable />
        </div>
      ),
    },
    {
      title: "图片和文本",
      code: `
        <div style={avatarRowStyle}>
          <Avatar src="https://github.com/imtaotao.png" name="Tao Tao" alt="Tao Tao" />
          <Avatar name="Willa UI" />
          <Avatar name="Content Author" alt="文档作者" />
          <Avatar src="https://example.invalid/avatar.png" name="Broken Image" />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="Tao Tao"
          />
          <Avatar name="Willa UI" />
          <Avatar name="Content Author" alt="文档作者" />
          <Avatar
            src="https://example.invalid/avatar.png"
            name="Broken Image"
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={avatarRowStyle}>
          <Avatar name="Small" size="sm" />
          <Avatar name="Medium" size="md" />
          <Avatar name="Large" size="lg" />
          <Avatar name="Extra Large" size="xl" />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar name="Small" size="sm" />
          <Avatar name="Medium" size="md" />
          <Avatar name="Large" size="lg" />
          <Avatar name="Extra Large" size="xl" />
        </div>
      ),
    },
    {
      title: "形状",
      code: `
        <div style={avatarRowStyle}>
          <Avatar name="Circle" shape="circle" />
          <Avatar name="Rounded" shape="rounded" />
          <Avatar name="Square" shape="square" />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar name="Circle" shape="circle" />
          <Avatar name="Rounded" shape="rounded" />
          <Avatar name="Square" shape="square" />
        </div>
      ),
    },
    {
      title: "自定义颜色",
      code: `
        <div style={avatarRowStyle}>
          <Avatar backgroundColor="#f6e7c8" name="Warm Author" textColor="#3f2a12" />
          <Avatar backgroundColor="rgba(96, 165, 250, 0.14)" name="Blue Writer" />
        </div>;
      `,
      content: (
        <div style={avatarRowStyle}>
          <Avatar
            backgroundColor="#f6e7c8"
            name="Warm Author"
            textColor="#3f2a12"
          />
          <Avatar
            backgroundColor="rgba(96, 165, 250, 0.14)"
            name="Blue Writer"
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "src",
      type: "string",
      description: "头像图片地址。",
    },
    {
      name: "alt",
      type: "string",
      description: "图片头像的替代文本；未传时使用 name。",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description:
        "头像名称，必填；图片缺失或加载失败时取后两个单词首字母展示。",
    },
    {
      name: "previewable",
      type: "boolean",
      defaultValue: "false",
      description: "启用点击放大预览。",
    },
    {
      name: "previewSrc",
      type: "string",
      description: "预览时使用的图片地址，未传时复用 src。",
    },
    {
      name: "hoverCard",
      type: "ReactNode",
      description: "头像 hover 或键盘聚焦时展示的自定义弹框内容。",
    },
    {
      name: "hoverCardClassName",
      type: "string",
      description: "传给 hover 弹框容器的类名。",
    },
    {
      name: "href",
      type: "string",
      description:
        "传入后渲染为可跳转链接；与 previewable 同时传入时优先预览。",
    },
    {
      name: "hoverable",
      type: "boolean",
      defaultValue: "false",
      description: "仅启用 hover 交互状态，不改变点击行为。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "xl"',
      defaultValue: '"md"',
      description: "头像尺寸。",
    },
    {
      name: "shape",
      type: '"circle" | "rounded" | "square"',
      defaultValue: '"circle"',
      description: "头像外形。",
    },
    {
      name: "imageProps",
      type: "ImgHTMLAttributes<HTMLImageElement>",
      description:
        "透传给内部图片的属性，不包含 src、alt、className 和 children。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "自定义文字头像背景颜色，支持 CSS 颜色值。",
    },
    {
      name: "textColor",
      type: "string",
      description: "自定义文字头像颜色，支持 CSS 颜色值。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
    {
      name: "closeLabel",
      type: "string",
      description: "文案标签。",
    },
    {
      name: "previewLabel",
      type: "string",
      description: "文案标签。",
    },
    {
      name: "rel",
      type: "string",
      description: "链接关系属性。",
    },
    {
      name: "target",
      type: "string",
      description: "链接打开方式。",
    },
  ],
});
