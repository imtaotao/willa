import { useEffect, useState } from "react";
import { FileTextIcon, ImageIcon, ReloadIcon } from "@radix-ui/react-icons";

import { AttachmentList, type AttachmentListItem } from "willa/AttachmentList";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import "willa/AttachmentList.css";
import "willa/Button.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

const initialItems: Array<AttachmentListItem> = [
  {
    id: "feedback",
    name: "feedback.csv",
    meta: "12 KB",
    href: "data:text/csv;charset=utf-8,id,feedback%0A1,export%20is%20slow",
    downloadName: "feedback.csv",
  },
  {
    id: "roadmap",
    name: "roadmap.md",
    meta: "8 KB",
    href: "data:text/markdown;charset=utf-8,%23%20Roadmap",
    downloadName: "roadmap.md",
  },
  {
    id: "screenshot",
    name: "screen-capture.png",
    meta: "上传中",
    icon: <ImageIcon />,
    status: "uploading",
    progress: 64,
  },
  {
    id: "error",
    name: "customer-export.xlsx",
    meta: "上传失败",
    status: "error",
    actions: (
      <Button size="sm" variant="ghost" icon={<ReloadIcon />}>
        重试
      </Button>
    ),
  },
];

const frameStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 48rem)",
} as const;

const stackFrameStyle = {
  display: "grid",
  width: "min(100%, 34rem)",
} as const;

const AttachmentListPreview = () => {
  const [items, setItems] = useState(initialItems);
  const [progress, setProgress] = useState(36);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((currentProgress) =>
        currentProgress >= 96 ? 12 : currentProgress + 12,
      );
    }, 900);

    return () => window.clearInterval(timer);
  }, []);

  const previewItems = items.map((item) =>
    item.status === "uploading" ? { ...item, progress } : item,
  );

  return (
    <div style={frameStyle}>
      <AttachmentList
        items={previewItems}
        onRemove={(item) =>
          setItems((currentItems) =>
            currentItems.filter((currentItem) => currentItem.id !== item.id),
          )
        }
      />
    </div>
  );
};

export default defineDoc({
  id: "attachment-list",
  name: "AttachmentList",
  category: "ai",
  packageName: "willa/AttachmentList",
  description: "用于展示 AI 输入、消息和上下文面板里的附件列表。",
  imports: [{ name: "AttachmentList", from: "willa/AttachmentList" }],
  css: "willa/AttachmentList.css",
  demo: {
    name: "AttachmentListPreview",
    component: AttachmentListPreview,
  },
  code: `
    import { useEffect, useState } from "react";
    import { ReloadIcon } from "@radix-ui/react-icons";
    import { AttachmentList } from "willa/AttachmentList";
    import { Button } from "willa/Button";
    import "willa/AttachmentList.css";
    import "willa/Button.css";

    const Demo = () => {
      const [items, setItems] = useState([
        {
          id: "feedback",
          name: "feedback.csv",
          meta: "12 KB",
          href: "/feedback.csv",
        },
        {
          id: "screenshot",
          name: "screen-capture.png",
          status: "uploading",
          progress: 64,
        },
        {
          id: "export",
          name: "customer-export.xlsx",
          status: "error",
          actions: (
            <Button size="sm" variant="ghost" icon={<ReloadIcon />}>
              重试
            </Button>
          ),
        },
      ]);
      const [progress, setProgress] = useState(36);

      useEffect(() => {
        const timer = window.setInterval(() => {
          setProgress((currentProgress) =>
            currentProgress >= 96 ? 12 : currentProgress + 12,
          );
        }, 900);

        return () => window.clearInterval(timer);
      }, []);

      const displayItems = items.map((item) =>
        item.status === "uploading" ? { ...item, progress } : item,
      );

      return (
        <AttachmentList
          items={displayItems}
          onOpen={({ item }) => {
            console.log("open", item.name);
          }}
          onRemove={(item) => {
            setItems((currentItems) =>
              currentItems.filter((currentItem) => currentItem.id !== item.id),
            );
          }}
        />
      );
    };
  `,
  sections: [
    {
      title: "纵向布局",
      code: `
        <div style={{ width: "min(100%, 34rem)" }}>
          <AttachmentList
            layout="stack"
            items={[
              {
                id: "architecture",
                name: "architecture.md",
                meta: "仓库结构和包边界",
              },
              {
                id: "component",
                name: "component.md",
                meta: "组件创建和迁移规则",
              },
            ]}
          />
        </div>;
      `,
      content: (
        <div style={stackFrameStyle}>
          <AttachmentList
            layout="stack"
            items={[
              {
                id: "architecture",
                name: "architecture.md",
                meta: "仓库结构和包边界",
                icon: <FileTextIcon />,
              },
              {
                id: "component",
                name: "component.md",
                meta: "组件创建和迁移规则",
                icon: <FileTextIcon />,
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "空状态",
      code: `
        <AttachmentList items={[]} empty="暂无上下文附件" />;
      `,
      content: <AttachmentList items={[]} empty="暂无上下文附件" />,
    },
    {
      title: "组合操作",
      code: `
        <AttachmentList
          items={[
            {
              id: "logs",
              name: "agent-run.log",
              meta: "执行日志",
              actions: (
                <Button size="sm" variant="ghost">
                  查看
                </Button>
              ),
            },
          ]}
        />;
      `,
      content: (
        <Group gap="sm" direction="column" align="stretch">
          <AttachmentList
            items={[
              {
                id: "logs",
                name: "agent-run.log",
                meta: "执行日志",
                actions: (
                  <Button size="sm" variant="ghost">
                    查看
                  </Button>
                ),
              },
            ]}
          />
        </Group>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<AttachmentListItem>",
      required: true,
      description: "附件数据列表。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"sm"',
      description: "尺寸，默认 sm。",
    },
    {
      name: "layout",
      type: '"inline" | "stack"',
      defaultValue: '"inline"',
      description: "布局方式，默认 inline。",
    },
    {
      name: "empty",
      type: "ReactNode",
      description: "空列表时展示的内容。",
    },
    {
      name: "onOpen",
      type: "(event: AttachmentListItemEvent) => void",
      description: "点击附件时触发。",
    },
    {
      name: "onRemove",
      type: "(item: AttachmentListItem) => void",
      description: "点击移除按钮时触发。传入后每个附件展示移除按钮。",
    },
    {
      name: "AttachmentListItem.status",
      type: '"ready" | "uploading" | "error"',
      group: "AttachmentListItem",
      defaultValue: '"ready"',
      description: "附件状态。",
    },
    {
      name: "AttachmentListItem.icon",
      type: "ReactNode",
      group: "AttachmentListItem",
      defaultValue: "<FileTextIcon />",
      description: "附件图标。",
    },
    {
      name: "AttachmentListItem.downloadName",
      type: "string",
      group: "AttachmentListItem",
      defaultValue: "true",
      description: "下载保存时使用的文件名；默认开启原生 download。",
    },
  ],
});
