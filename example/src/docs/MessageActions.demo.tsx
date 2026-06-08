import { useState } from "react";
import { CheckIcon, CopyIcon, ReloadIcon } from "@radix-ui/react-icons";

import { ChatMessage } from "willa/ChatMessage";
import { MessageActions, type MessageActionItem } from "willa/MessageActions";
import "willa/ChatMessage.css";
import "willa/MessageActions.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 46rem)",
  margin: "0 auto",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.9rem",
  background: "var(--willa-panel-bg)",
  padding: "1rem",
} as const;

const MessageActionsPreview = () => {
  const [copied, setCopied] = useState(false);

  const actions: MessageActionItem[] = [
    {
      id: "copy",
      label: copied ? "已复制" : "复制",
      icon: copied ? <CheckIcon /> : <CopyIcon />,
      active: copied,
      onClick: () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 600);
      },
    },
    {
      id: "regenerate",
      label: "重试",
      icon: <ReloadIcon />,
    },
    {
      id: "accept",
      label: "采纳",
      icon: <CheckIcon />,
      tone: "positive",
    },
  ];

  return (
    <div style={frameStyle}>
      <ChatMessage
        role="assistant"
        name="Willa AI"
        meta="已生成"
        actions={<MessageActions items={actions} />}
      >
        <p>可以先按影响面、紧急程度和实现成本拆分。</p>
        <p>优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。</p>
      </ChatMessage>
    </div>
  );
};

export default defineDoc({
  id: "message-actions",
  name: "MessageActions",
  category: "ai",
  packageName: "willa/MessageActions",
  description: "用于 AI 消息上的复制、重试、采纳和反馈等轻量操作。",
  imports: [{ name: "MessageActions", from: "willa/MessageActions" }],
  css: "willa/MessageActions.css",
  demo: {
    name: "MessageActionsPreview",
    component: MessageActionsPreview,
  },
  code: `
    import { CopyIcon, ReloadIcon } from "@radix-ui/react-icons";
    import { MessageActions } from "willa/MessageActions";
    import "willa/MessageActions.css";

    <MessageActions
      items={[
        { id: "copy", label: "复制", icon: <CopyIcon /> },
        { id: "regenerate", label: "重试", icon: <ReloadIcon /> },
      ]}
    />
  `,
  sections: [
    {
      title: "文字标签",
      content: (
        <MessageActions
          showLabels
          variant="soft"
          items={[
            { id: "copy", label: "复制", icon: <CopyIcon /> },
            { id: "retry", label: "重新生成", icon: <ReloadIcon /> },
            {
              id: "accept",
              label: "采纳",
              icon: <CheckIcon />,
              tone: "positive",
            },
          ]}
        />
      ),
    },
    {
      title: "状态",
      content: (
        <MessageActions
          showLabels
          items={[
            {
              id: "copied",
              label: "已复制",
              icon: <CheckIcon />,
              active: true,
            },
            {
              id: "retrying",
              label: "重试中",
              loading: true,
            },
            {
              id: "disabled",
              label: "不可用",
              disabled: true,
            },
          ]}
        />
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "MessageActionItem[]",
      description: "动作项列表。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "动作按钮尺寸，默认 sm。",
    },
    {
      name: "variant",
      type: '"ghost" | "soft"',
      description: "动作按钮样式，默认 ghost。",
    },
    {
      name: "showLabels",
      type: "boolean",
      description: "是否展示文字标签；默认只展示 icon，文字用于无障碍名称。",
    },
    {
      name: "onAction",
      type: "(action: MessageActionItem, event: MouseEvent<HTMLButtonElement>) => void",
      description: "任意动作点击后的统一回调。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "追加自定义操作节点。",
    },
    {
      name: "id",
      type: "string",
      required: true,
      group: "MessageActionItem",
      description: "动作唯一标识。",
    },
    {
      name: "label",
      type: "ReactNode",
      required: true,
      group: "MessageActionItem",
      description: "动作文案，也会作为默认无障碍名称。",
    },
    {
      name: "ariaLabel",
      type: "string",
      group: "MessageActionItem",
      description: "当 label 不是字符串时，补充无障碍名称。",
    },
    {
      name: "icon",
      type: "ReactNode",
      group: "MessageActionItem",
      description: "动作图标。",
    },
    {
      name: "tone",
      type: '"neutral" | "positive" | "negative" | "danger"',
      group: "MessageActionItem",
      description: "动作语义色，默认 neutral。",
    },
    {
      name: "active",
      type: "boolean",
      group: "MessageActionItem",
      description: "是否处于选中或完成状态。",
    },
    {
      name: "disabled",
      type: "boolean",
      group: "MessageActionItem",
      description: "是否禁用。",
    },
    {
      name: "loading",
      type: "boolean",
      group: "MessageActionItem",
      description: "是否展示处理中状态。",
    },
    {
      name: "onClick",
      type: "(event: MouseEvent<HTMLButtonElement>) => void",
      group: "MessageActionItem",
      description: "单个动作点击回调。",
    },
  ],
});
