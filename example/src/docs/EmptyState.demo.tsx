import {
  ChatBubbleIcon,
  FileTextIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { EmptyState } from "willa/EmptyState";
import "willa/Button.css";
import "willa/EmptyState.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "grid",
  gap: "0.9rem",
  width: "100%",
} as const;

const actionStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.55rem",
} as const;

export default defineDoc({
  id: "empty-state",
  name: "EmptyState",
  packageName: "willa/EmptyState",
  description: "用于列表为空、搜索无结果和 AI 上下文缺失时的空状态提示。",
  imports: [
    { name: "EmptyState", from: "willa/EmptyState" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/EmptyState.css",
  demo: {
    name: "EmptyState",
    component: EmptyState,
    props: {
      icon: <MagnifyingGlassIcon />,
      title: "没有找到结果",
      description: "换一个关键词，或清空筛选条件后重新搜索。",
      actions: (
        <>
          <Button size="sm" variant="solid">
            清空筛选
          </Button>
          <Button size="sm" variant="ghost">
            新建内容
          </Button>
        </>
      ),
    },
  },
  code: `
    import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { EmptyState } from "willa/EmptyState";
    import "willa/Button.css";
    import "willa/EmptyState.css";

    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="没有找到结果"
      description="换一个关键词，或清空筛选条件后重新搜索。"
      actions={<Button size="sm">清空筛选</Button>}
    />
  `,
  sections: [
    {
      title: "搜索无结果",
      content: (
        <EmptyState
          icon={<MagnifyingGlassIcon />}
          title="没有找到匹配内容"
          description="当前筛选条件过窄，可以减少标签或换一个关键词。"
          actions={
            <div style={actionStyle}>
              <Button size="sm" variant="solid">
                清空筛选
              </Button>
              <Button size="sm" variant="outline">
                保存搜索
              </Button>
            </div>
          }
        />
      ),
    },
    {
      title: "AI 上下文为空",
      content: (
        <EmptyState
          align="start"
          icon={<ChatBubbleIcon />}
          title="还没有添加上下文"
          description="上传资料或选择知识库后，助手才能基于你的内容生成回答。"
          variant="outline"
          actions={
            <>
              <Button size="sm" variant="solid">
                添加资料
              </Button>
              <Button size="sm" variant="ghost">
                选择知识库
              </Button>
            </>
          }
          footer="建议优先添加和当前任务直接相关的文档，减少无关噪音。"
        />
      ),
    },
    {
      title: "尺寸和样式",
      content: (
        <div style={rowStyle}>
          <EmptyState
            icon={<FileTextIcon />}
            title="暂无文件"
            description="文件上传后会展示在这里。"
            size="sm"
            variant="plain"
          />
          <EmptyState
            icon={<FileTextIcon />}
            title="资料库为空"
            description="开始添加文档、链接或附件。"
            size="lg"
            variant="soft"
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      required: true,
      description: "空状态标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "辅助说明文案。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "展示在标题上方的图标。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "主要操作区，通常放 Button。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "底部补充说明。",
    },
    {
      name: "variant",
      type: '"plain" | "soft" | "outline"',
      description: "空状态样式。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "空状态尺寸。",
    },
    {
      name: "align",
      type: '"start" | "center"',
      description: "内容对齐方式。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "自定义主体内容。",
    },
  ],
});
