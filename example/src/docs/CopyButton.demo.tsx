import { CopyButton } from "willa/CopyButton";
import { Group } from "willa/Group";
import "willa/CopyButton.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

export default defineDoc({
  id: "copy-button",
  name: "CopyButton",
  packageName: "willa/CopyButton",
  description: "用于复制命令、链接和代码片段，并内置复制成功与失败状态。",
  imports: [
    { name: "CopyButton", from: "willa/CopyButton" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/CopyButton.css",
  demo: {
    name: "CopyButton",
    component: CopyButton,
    props: {
      text: "pnpm add willa",
    },
    children: "复制安装命令",
  },
  code: `
    import { CopyButton } from "willa/CopyButton";
    import "willa/CopyButton.css";

    <CopyButton text="pnpm add willa">复制安装命令</CopyButton>;
  `,
  sections: [
    {
      title: "基础复制",
      code: `
        <Group gap="md">
          <CopyButton text="pnpm add willa">复制安装命令</CopyButton>
          <CopyButton
            text="import { CopyButton } from 'willa/CopyButton';"
            variant="outline"
          >
            复制组件引入
          </CopyButton>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <CopyButton text="pnpm add willa">复制安装命令</CopyButton>
          <CopyButton
            text="import { CopyButton } from 'willa/CopyButton';"
            variant="outline"
          >
            复制组件引入
          </CopyButton>
        </Group>
      ),
    },
    {
      title: "反馈文案",
      code: `
        <Group gap="md">
          <CopyButton text="https://willa-ui.dev" copiedLabel="链接已复制">
            复制链接
          </CopyButton>
          <CopyButton
            text="const message = 'hello willa';"
            copiedDuration={1800}
            copiedLabel="代码已复制"
            failedLabel="请手动复制"
            variant="ghost"
          >
            复制代码
          </CopyButton>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <CopyButton text="https://willa-ui.dev" copiedLabel="链接已复制">
            复制链接
          </CopyButton>
          <CopyButton
            text="const message = 'hello willa';"
            copiedDuration={1800}
            copiedLabel="代码已复制"
            failedLabel="请手动复制"
            variant="ghost"
          >
            复制代码
          </CopyButton>
        </Group>
      ),
    },
    {
      title: "尺寸",
      code: `
        <Group gap="md">
          <CopyButton text="small" size="sm">
            小尺寸
          </CopyButton>
          <CopyButton text="medium">默认尺寸</CopyButton>
          <CopyButton text="large" size="lg">
            大尺寸
          </CopyButton>
        </Group>;
      `,
      content: (
        <Group gap="md">
          <CopyButton text="small" size="sm">
            小尺寸
          </CopyButton>
          <CopyButton text="medium">默认尺寸</CopyButton>
          <CopyButton text="large" size="lg">
            大尺寸
          </CopyButton>
        </Group>
      ),
    },
    {
      title: "图标入口",
      code: `
        <Group gap="md">
          <CopyButton
            ariaLabel="复制安装命令"
            hideLabel
            text="pnpm add willa"
          />
          <CopyButton
            ariaLabel="复制链接"
            hideLabel
            text="https://willa-ui.dev"
            variant="ghost"
          />
        </Group>;
      `,
      content: (
        <Group gap="md">
          <CopyButton
            ariaLabel="复制安装命令"
            hideLabel
            text="pnpm add willa"
          />
          <CopyButton
            ariaLabel="复制链接"
            hideLabel
            text="https://willa-ui.dev"
            variant="ghost"
          />
        </Group>
      ),
    },
  ],
  propGroups: [
    {
      title: "属性",
      description:
        "CopyButton 是面向复制动作的原生 button 封装，复用 Button 的 variant、size 和颜色能力；不支持 href、loading 或 loadingText 等完整 ButtonProps。",
    },
  ],
  props: [
    {
      name: "variant",
      type: '"solid" | "soft" | "outline" | "ghost" | "link"',
      defaultValue: '"soft"',
      description: "按钮的视觉类型，沿用 Button 的 variant。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "按钮尺寸，沿用 Button 的 size。",
    },
    {
      name: "copiedLabel",
      type: "ReactNode",
      defaultValue: '"已复制"',
      description: "复制成功后的临时文案。",
    },
    {
      name: "failedLabel",
      type: "ReactNode",
      defaultValue: '"复制失败"',
      description: "复制失败后的临时文案。",
    },
    {
      name: "copiedDuration",
      type: "number",
      defaultValue: "1200",
      description: "复制反馈持续时间，单位为毫秒。",
    },
    {
      name: "onCopyText",
      type: "(text: string) => void",
      description: "复制成功后的回调。",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: '"复制"',
      description: "默认状态的按钮文案。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "按钮无障碍名称，适合只展示图标的复制入口。",
    },
    {
      name: "hideLabel",
      type: "boolean",
      defaultValue: "false",
      description: "是否隐藏按钮文案，仅保留图标和无障碍名称。",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "背景色。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
    {
      name: "copiedClassName",
      type: "string",
      description: "复制成功状态追加到按钮上的 className。",
    },
    {
      name: "copiedIcon",
      type: "ReactNode",
      description: "copiedIcon 属性。",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "是否禁用。",
    },
    {
      name: "failedIcon",
      type: "ReactNode",
      description: "failedIcon 属性。",
    },
    {
      name: "failedClassName",
      type: "string",
      description: "复制失败状态追加到按钮上的 className。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "icon 属性。",
    },
    {
      name: "statusClassName",
      type: "string",
      description: "复制状态播报节点的 className。",
    },
    {
      name: "text",
      type: "string",
      required: true,
      description: "text 属性。",
    },
    {
      name: "textColor",
      type: "string",
      description: "文本色。",
    },
    {
      name: "type",
      type: '"button" | "submit" | "reset"',
      description: "组件类型。",
    },
  ],
});
