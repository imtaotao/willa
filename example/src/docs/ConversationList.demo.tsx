import { useState } from "react";

import {
  ConversationList,
  type ConversationListItem,
  type ConversationListMode,
} from "willa/ConversationList";
import "willa/ConversationList.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 42rem)",
} as const;

const statusStyle = {
  width: "max-content",
  maxWidth: "100%",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.62rem",
  background: "var(--willa-panel-bg)",
  color: "var(--willa-text-soft)",
  fontSize: "0.86rem",
  fontWeight: 520,
  lineHeight: 1.45,
  padding: "0.48rem 0.62rem",
} as const;

const baseItems: Array<ConversationListItem> = [
  {
    id: "conv-product",
    title: "产品反馈归因",
    preview: "整理最近 30 天用户反馈里的高频问题和可执行建议。",
    groupId: "today",
    updatedAt: Date.now() - 12 * 60 * 1000,
  },
  {
    id: "conv-release",
    title: "发布说明草稿",
    preview: "根据 merged PR、issue 和补充说明生成本周发布说明。",
    groupId: "today",
    updatedAt: Date.now() - 52 * 60 * 1000,
  },
  {
    id: "conv-risk",
    title: "导出失败排查",
    preview: "按现象、原因、影响和建议梳理排查路径。",
    groupId: "week",
    updatedAt: Date.now() - 8 * 60 * 60 * 1000,
  },
  {
    id: "conv-archived",
    title: "旧版埋点梳理",
    preview: "归档会话，仅在已归档筛选中查看。",
    groupId: "week",
    status: "archived",
    updatedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
];

const groups = [
  { id: "today", title: "今天" },
  { id: "week", title: "本周" },
];

const ConversationListPreview = () => {
  const [items, setItems] = useState(baseItems);
  const [activeId, setActiveId] = useState("conv-product");
  const [scope, setScope] = useState<ConversationListMode>("all");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={frameStyle}>
      <ConversationList
        items={items}
        groups={groups}
        activeId={activeId}
        scope={scope}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onScopeChange={setScope}
        onActivate={setActiveId}
        onRename={({ id, title }) => {
          setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, title } : item)),
          );
        }}
        onArchive={(id) => {
          setItems((prev) =>
            prev.map((item) =>
              item.id === id
                ? {
                    ...item,
                    status: item.status === "archived" ? "active" : "archived",
                  }
                : item,
            ),
          );
        }}
        onDelete={(id) => {
          setItems((prev) => prev.filter((item) => item.id !== id));
        }}
      />
      <div style={statusStyle}>当前会话：{activeId}</div>
    </div>
  );
};

const ConversationListLoading = () => (
  <div style={frameStyle}>
    <ConversationList
      items={[]}
      loading
      onActivate={() => {
        return;
      }}
      emptyText="加载完成后会展示最近会话。"
    />
  </div>
);

const ConversationListEmpty = () => (
  <div style={frameStyle}>
    <ConversationList
      items={[]}
      searchValue="不存在的会话"
      onSearchChange={() => {
        return;
      }}
      onActivate={() => {
        return;
      }}
      emptyText="没有匹配会话，请调整关键词。"
    />
  </div>
);

export default defineDoc({
  id: "conversation-list",
  name: "ConversationList",
  displayName: "会话列表",
  category: "ai",
  packageName: "willa/ConversationList",
  description: "AI 会话列表，支持分组、搜索、筛选、激活和生命周期操作。",
  imports: [{ name: "ConversationList", from: "willa/ConversationList" }],
  css: "willa/ConversationList.css",
  demo: {
    name: "ConversationListPreview",
    component: ConversationListPreview,
  },
  code: `
    import { useState } from "react";
    import { ConversationList } from "willa/ConversationList";
    import "willa/ConversationList.css";

    const Demo = () => {
      const [activeId, setActiveId] = useState("conv-product");

      return (
        <ConversationList
          items={items}
          groups={groups}
          activeId={activeId}
          onActivate={setActiveId}
        />
      );
    };
  `,
  sections: [
    {
      title: "主链路（搜索 + 分组 + 操作）",
      code: `
        <ConversationList
          items={items}
          groups={groups}
          activeId={activeId}
          scope={scope}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onScopeChange={setScope}
          onActivate={setActiveId}
          onRename={({ id, title }) => updateTitle(id, title)}
          onArchive={(id) => toggleArchived(id)}
          onDelete={(id) => removeConversation(id)}
        />;
      `,
      content: <ConversationListPreview />,
    },
    {
      title: "边界（加载中）",
      code: `
        <ConversationList
          items={[]}
          loading
          onActivate={() => {}}
          emptyText="加载完成后会展示最近会话。"
        />;
      `,
      content: <ConversationListLoading />,
    },
    {
      title: "边界（空态）",
      code: `
        <ConversationList
          items={[]}
          searchValue="不存在的会话"
          onSearchChange={() => {}}
          onActivate={() => {}}
          emptyText="没有匹配会话，请调整关键词。"
        />;
      `,
      content: <ConversationListEmpty />,
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<ConversationListItem>",
      required: true,
      description: "会话数据列表。",
    },
    {
      name: "groups",
      type: "Array<ConversationGroup>",
      description: "可选分组配置，按 item.groupId 归类展示。",
    },
    {
      name: "activeId",
      type: "string",
      description: "当前激活会话 ID。",
    },
    {
      name: "scope",
      type: '"all" | "active" | "archived"',
      defaultValue: '"all"',
      description: "会话筛选范围。",
    },
    {
      name: "searchValue",
      type: "string",
      description: "受控搜索关键词。",
    },
    {
      name: "onSearchChange",
      type: "(value: string) => void",
      description: "搜索关键词变化时触发。",
    },
    {
      name: "onScopeChange",
      type: "(scope: ConversationListMode) => void",
      description: "筛选范围变化时触发。",
    },
    {
      name: "onActivate",
      type: "(id: string) => void",
      required: true,
      description: "点击会话时触发。",
    },
    {
      name: "onRename",
      type: "(payload: { id: string; title: string }) => void | Promise<void>",
      description: "确认重命名时触发。",
    },
    {
      name: "onDelete",
      type: "(id: string) => void | Promise<void>",
      description: "删除会话时触发。",
    },
    {
      name: "onArchive",
      type: "(id: string) => void | Promise<void>",
      description: "归档或恢复会话时触发。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示加载态。",
    },
    {
      name: "emptyText",
      type: "string",
      defaultValue: '"暂无会话"',
      description: "空态描述文案。",
    },
  ],
});
