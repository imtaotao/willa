import { ChatThread } from "willa/ChatThread";
import "willa/ChatThread.css";

import { defineDoc } from "#example/catalog/defineDoc";

const messages = [
  {
    name: "作者",
    avatar: "idea",
    content: "公共包会导出所有组件。",
  },
  {
    align: "right" as const,
    name: "审阅者",
    avatar: "user",
    content: "单组件引入可以让示例更轻量。",
  },
];

export default defineDoc({
  id: "chat-thread",
  name: "ChatThread",
  packageName: "willa/ChatThread",
  description: "用于展示左右对齐消息的聊天记录块。",
  imports: [{ name: "ChatThread", from: "willa/ChatThread" }],
  css: "willa/ChatThread.css",
  demo: {
    name: "ChatThread",
    component: ChatThread,
    props: { title: "组件备注", messages },
  },
  props: [
    {
      name: "title",
      type: "string",
      description: "聊天记录标题，折叠模式下会作为摘要标题。",
    },
    {
      name: "messages",
      type: "Array<{ align?: 'left' | 'right'; avatar?: string; name?: string; content: string | string[] }>",
      required: true,
      description: "需要渲染的消息列表。",
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "是否将聊天记录渲染在可折叠区域内。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "折叠模式下的初始展开状态。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
  ],
});
