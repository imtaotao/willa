import { useState } from "react";
import { DotsHorizontalIcon, FileTextIcon } from "@radix-ui/react-icons";

import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { ContextPanel, type ContextItem } from "willa/ContextPanel";
import "willa/Button.css";
import "willa/Group.css";
import "willa/ContextPanel.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 58rem)",
} as const;

const contextItems: Array<ContextItem> = [
  {
    id: "file-1",
    title: "用户手册草稿 v1.2",
    source: "file",
    type: "file",
    addedAt: Date.now() - 3_600_000,
    snippet: "说明会话上下文管理规则与隐私约定，支持导出、引用和撤回。",
  },
  {
    id: "web-1",
    title: "OpenAI 速率限制说明页",
    source: "web",
    type: "web",
    addedAt: Date.now() - 7_200_000,
    snippet: "介绍了当前请求配额、重试策略与高负载场景下的降级建议。",
  },
  {
    id: "doc-1",
    title: "2026 财报数据表",
    source: "doc",
    type: "doc",
    addedAt: Date.now() - 18_000_000,
    expiresAt: Date.now() - 600_000,
    snippet: "该文档在本地会话窗口内已过期，不再纳入检索上下文。",
  },
  {
    id: "kb-1",
    title: "A/B 实验规范知识库",
    source: "kb",
    type: "kb",
    addedAt: Date.now() - 4_000_000,
    disabledReason: "当前标签空间离线",
    snippet: "用于校验实验指标命名与分层指标定义。",
  },
];

const ContextPanelPreview = () => {
  const [activeIds, setActiveIds] = useState(["file-1"]);

  return (
    <div style={frameStyle}>
      <ContextPanel
        items={contextItems}
        activeIds={activeIds}
        onToggleItem={(id, checked) => {
          setActiveIds((prev) =>
            checked
              ? [...new Set([...prev, id])]
              : prev.filter((itemId) => itemId !== id),
          );
        }}
        onClearAll={() => {
          setActiveIds([]);
        }}
        onRemove={(id) => {
          setActiveIds((prev) => prev.filter((itemId) => itemId !== id));
        }}
        onRefresh={() => {
          return Promise.resolve();
        }}
        renderPreview={(item) => (
          <span className="willa-context-panel__item-preview">
            <span className="willa-context-panel__item-preview-label">
              摘要：
            </span>
            {item.snippet}
          </span>
        )}
        title="上下文管理"
      />
    </div>
  );
};

const ContextPanelErrorState = () => {
  const [activeIds, setActiveIds] = useState(["file-1", "web-1"]);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div style={frameStyle}>
      <ContextPanel
        items={contextItems}
        key={refreshKey}
        activeIds={activeIds}
        onToggleItem={(id, checked) => {
          setActiveIds((prev) =>
            checked
              ? [...new Set([...prev, id])]
              : prev.filter((itemId) => itemId !== id),
          );
        }}
        onRefresh={() => {
          return new Promise((_, reject) => {
            window.setTimeout(() => reject(new Error("服务暂时不可达")), 400);
          });
        }}
        onClearAll={() => {
          setActiveIds([]);
        }}
        renderPreview={(item) => (
          <span className="willa-context-panel__item-preview">
            {item.snippet}
          </span>
        )}
        title="刷新重试示例"
      />
      <Group gap="sm">
        <Button
          size="sm"
          variant="outline"
          icon={<DotsHorizontalIcon />}
          onClick={() => {
            setRefreshKey((prev) => prev + 1);
          }}
        >
          重建面板实例
        </Button>
      </Group>
    </div>
  );
};

const ContextPanelCompact = () => {
  const [activeIds, setActiveIds] = useState(["file-1"]);

  return (
    <ContextPanel
      items={contextItems}
      activeIds={activeIds}
      onToggleItem={(id, checked) => {
        setActiveIds((prev) =>
          checked
            ? [...new Set([...prev, id])]
            : prev.filter((itemId) => itemId !== id),
        );
      }}
      onRemove={(id) => {
        setActiveIds((prev) => prev.filter((itemId) => itemId !== id));
      }}
      onClearAll={() => {
        setActiveIds([]);
      }}
      compact
      title="紧凑展示"
      renderPreview={(item) => (
        <span className="willa-context-panel__item-preview">
          <FileTextIcon /> {item.snippet}
        </span>
      )}
    />
  );
};

export default defineDoc({
  id: "context-panel",
  name: "ContextPanel",
  displayName: "上下文面板",
  category: "ai",
  packageName: "willa/ContextPanel",
  description: "会话上下文面板，支持来源筛选、选择、移除与失效项提示。",
  imports: [{ name: "ContextPanel", from: "willa/ContextPanel" }],
  css: "willa/ContextPanel.css",
  demo: {
    name: "ContextPanelPreview",
    component: ContextPanelPreview,
  },
  code: `
    import { useState } from "react";
    import { ContextPanel } from "willa/ContextPanel";
    import "willa/ContextPanel.css";

    const contextItems = [
      {
        id: "file-1",
        title: "用户手册草稿 v1.2",
        source: "file",
        type: "file",
        addedAt: Date.now() - 3600000,
        snippet: "说明会话上下文管理规则与隐私约定。",
      },
    ];

    const Demo = () => {
      const [activeIds, setActiveIds] = useState(["file-1"]);

      return (
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          title="上下文管理"
        />
      );
    };
  `,
  sections: [
    {
      title: "主链路（来源筛选 + 勾选）",
      code: `
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          onRemove={(id) => {
            setActiveIds((prev) => prev.filter((itemId) => itemId !== id));
          }}
          renderPreview={(item) => <div>{item.snippet}</div>}
          title="上下文管理"
        />;
      `,
      content: <ContextPanelPreview />,
    },
    {
      title: "边界（刷新失败 + 受控源）",
      code: `
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onRefresh={() => {
            return Promise.reject(new Error("服务暂时不可达"));
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          renderPreview={(item) => <div>{item.snippet}</div>}
          title="刷新重试示例"
        />;
      `,
      content: <ContextPanelErrorState />,
    },
    {
      title: "边界（compact 模式）",
      code: `
        <ContextPanel
          items={contextItems}
          activeIds={activeIds}
          onToggleItem={(id, checked) => {
            setActiveIds((prev) =>
              checked ? [...new Set([...prev, id])] : prev.filter((itemId) => itemId !== id),
            );
          }}
          onClearAll={() => {
            setActiveIds([]);
          }}
          compact
          title="紧凑展示"
        />;
      `,
      content: <ContextPanelCompact />,
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<ContextItem>",
      required: true,
      description: "上下文来源条目列表。",
    },
    {
      name: "activeIds",
      type: "Array<string>",
      description: "受控已启用的上下文条目 ID。",
    },
    {
      name: "onToggleItem",
      type: "(id: string, checked: boolean) => void",
      required: true,
      description: "勾选或取消上下文条目时触发。",
    },
    {
      name: "onClearAll",
      type: "() => void",
      description: "点击清空选择时触发。",
    },
    {
      name: "onRefresh",
      type: "() => void | Promise<void>",
      description: "点击刷新上下文时触发；未传入时不展示刷新按钮。",
    },
    {
      name: "onRemove",
      type: "(id: string) => void",
      description: "点击条目移除按钮时触发；未传入时不展示移除按钮。",
    },
    {
      name: "renderPreview",
      type: "(item: ContextItem) => ReactNode",
      description: "自定义条目预览内容。",
    },
    {
      name: "compact",
      type: "boolean",
      defaultValue: "false",
      description: "是否使用紧凑展示模式。",
    },
    {
      name: "title",
      type: "string",
      defaultValue: '"上下文管理"',
      description: "面板标题。",
    },
    {
      name: "emptyText",
      type: "string",
      defaultValue: '"暂无上下文"',
      description: "当前筛选下无条目时的空态标题。",
    },
  ],
});
