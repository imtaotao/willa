import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useMemo,
  useState,
} from "react";
import classNames from "classnames";
import { isPromiseLike } from "aidly";

import { Checkbox } from "@willa-ui/form/components/Checkbox";
import { Tabs, type TabsItem } from "@willa-ui/content/components/Tabs";
import { Button } from "@willa-ui/content/components/Button";
import { List, type ListItem } from "@willa-ui/content/components/List";
import { EmptyState } from "@willa-ui/content/components/EmptyState";
import { Tag } from "@willa-ui/content/components/Tag";
import { Badge } from "@willa-ui/content/components/Badge";
import { useControllableState } from "@willa-ui/shared";
import {
  ArchiveIcon,
  CheckCircledIcon,
  ClockIcon,
  Cross2Icon,
  FileTextIcon,
  GlobeIcon,
  ReaderIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

export type ContextPanelSource = "file" | "web" | "doc" | "kb";
export type ContextItemStatus = "active" | "expired" | "disabled";

export type ContextItem = {
  id: string;
  type: ContextPanelSource;
  title: string;
  source: string;
  addedAt: number;
  expiresAt?: number;
  snippet?: string;
  disabledReason?: string;
  status?: ContextItemStatus;
};

export type ContextPanelProps = {
  items: Array<ContextItem>;
  activeIds?: Array<string>;
  onToggleItem: (id: string, checked: boolean) => void;
  onClearAll?: () => void;
  onRefresh?: () => Promise<void> | void;
  onRemove?: (id: string) => void;
  renderPreview?: (item: ContextItem) => ReactNode;
  compact?: boolean;
  title?: string;
  emptyText?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

type ContextPanelSourceFilter = ContextPanelSource | "all";

export function ContextPanel(props: ContextPanelProps) {
  const {
    items,
    activeIds,
    onToggleItem,
    onClearAll,
    onRefresh,
    onRemove,
    renderPreview,
    compact = false,
    title = "上下文管理",
    emptyText = "暂无上下文",
    className,
    ...sectionProps
  } = props;

  const [activeIdsState, setActiveIds] = useControllableState<Array<string>>({
    value: activeIds,
    defaultValue: [],
  });
  const [activeSource, setActiveSource] =
    useState<ContextPanelSourceFilter>("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState<ReactNode>(null);

  const itemById = useMemo(
    () => new Map(items.map((item) => [item.id, item])),
    [items],
  );
  const selectedIds = useMemo(
    () => activeIdsState.filter((id) => itemById.has(id)),
    [activeIdsState, itemById],
  );
  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const selectedCount = selectedIds.length;
  const countsBySource = useMemo(() => {
    const counts: Record<ContextPanelSourceFilter, number> = {
      all: items.length,
      file: 0,
      web: 0,
      doc: 0,
      kb: 0,
    };

    for (const item of items) {
      counts[item.type] += 1;
    }

    return counts;
  }, [items]);

  const visibleItems = useMemo(
    () =>
      activeSource === "all"
        ? items
        : items.filter((item) => item.type === activeSource),
    [activeSource, items],
  );

  const tabs = useMemo<Array<TabsItem>>(
    () => [
      {
        value: "all",
        label: `全部 (${countsBySource.all})`,
        children: null,
      },
      {
        value: "file",
        label: `文件 (${countsBySource.file})`,
        children: null,
      },
      {
        value: "web",
        label: `网页 (${countsBySource.web})`,
        children: null,
      },
      {
        value: "doc",
        label: `文档 (${countsBySource.doc})`,
        children: null,
      },
      {
        value: "kb",
        label: `知识库 (${countsBySource.kb})`,
        children: null,
      },
    ],
    [
      countsBySource.all,
      countsBySource.doc,
      countsBySource.file,
      countsBySource.kb,
      countsBySource.web,
    ],
  );

  const handleToggleItem = (id: string, checked: boolean) => {
    setActiveIds((prev) =>
      checked
        ? [...new Set([...prev, id])]
        : prev.filter((itemId) => itemId !== id),
    );
    onToggleItem(id, checked);
  };

  const handleCheckboxChange =
    (item: ContextItem) => (event: ChangeEvent<HTMLInputElement>) => {
      if (resolveContextItemStatus({ item, now: Date.now() }) !== "active") {
        return;
      }

      handleToggleItem(item.id, event.currentTarget.checked);
    };

  const handleClearAll = () => {
    if (selectedCount === 0) {
      return;
    }

    const selectedItems = selectedIds;
    setActiveIds([]);
    onClearAll?.();
    for (const id of selectedItems) {
      onToggleItem(id, false);
    }
  };

  const handleRefresh = () => {
    if (!onRefresh || isRefreshing) {
      return;
    }

    setRefreshError(null);
    setIsRefreshing(true);
    try {
      const result = onRefresh();
      if (!isPromiseLike(result)) {
        setIsRefreshing(false);
        return;
      }

      result
        .then(() => {
          setIsRefreshing(false);
        })
        .catch(() => {
          setRefreshError("刷新失败，请稍后重试。");
          setIsRefreshing(false);
        });
    } catch {
      setRefreshError("刷新失败，请稍后重试。");
      setIsRefreshing(false);
    }
  };

  const listItems = useMemo(
    () =>
      visibleItems.map<ListItem>((item) => {
        const status = resolveContextItemStatus({ item, now: Date.now() });
        const disabled = status !== "active";
        const sourceMeta = resolveSourceMeta(item.type);
        const reason = getItemReason(item, status, Date.now());

        return {
          id: item.id,
          title: (
            <span className="willa-context-panel__item-title">
              <span className="willa-context-panel__item-checkbox">
                <Checkbox
                  checked={selectedIdSet.has(item.id)}
                  onChange={handleCheckboxChange(item)}
                  disabled={disabled}
                />
              </span>
              <span className="willa-context-panel__item-title-text">
                {item.title}
              </span>
              <span className="willa-context-panel__item-badge">
                {status === "disabled" ? (
                  <Badge
                    size="sm"
                    tone="danger"
                    variant="outline"
                    icon={<Cross2Icon />}
                  >
                    已禁用
                  </Badge>
                ) : status === "expired" ? (
                  <Badge
                    size="sm"
                    tone="warning"
                    variant="outline"
                    icon={<ClockIcon />}
                  >
                    已失效
                  </Badge>
                ) : null}
              </span>
            </span>
          ),
          description: renderPreview ? (
            renderPreview(item)
          ) : item.snippet ? (
            <span className="willa-context-panel__item-snippet">
              {compact && item.snippet.length > 90
                ? `${item.snippet.slice(0, 87)}...`
                : item.snippet}
            </span>
          ) : null,
          meta: (
            <span className="willa-context-panel__item-meta">
              <span className="willa-context-panel__item-meta-line">
                <Tag
                  className="willa-context-panel__source-tag"
                  size="sm"
                  tone="info"
                  icon={sourceMeta.icon}
                >
                  {sourceMeta.label}
                </Tag>
                <span>来源：{item.source}</span>
                <span>添加：{formatContextDate(item.addedAt)}</span>
                {item.expiresAt ? (
                  <span>失效：{formatContextDate(item.expiresAt)}</span>
                ) : null}
              </span>
              {reason && !compact ? (
                <span className="willa-context-panel__item-reason">
                  {reason}
                </span>
              ) : null}
            </span>
          ),
          actions: onRemove ? (
            <span className="willa-context-panel__item-actions">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onRemove(item.id)}
              >
                移除
              </Button>
            </span>
          ) : null,
          selected: selectedIdSet.has(item.id),
          disabled,
        } as ListItem;
      }),
    [compact, onRemove, renderPreview, selectedIdSet, visibleItems],
  );

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-context-panel",
        compact && "willa-context-panel--compact",
        className,
      )}
      aria-busy={isRefreshing || undefined}
    >
      <header className="willa-context-panel__header">
        <div>
          <div className="willa-context-panel__title">{title}</div>
          <div className="willa-context-panel__status">
            <span className="willa-context-panel__status-item">
              已勾选 {selectedCount} 项
            </span>
            <span className="willa-context-panel__status-item">
              当前筛选{" "}
              {activeSource === "all"
                ? "全部"
                : resolveSourceMeta(activeSource).label}
              ，共 {visibleItems.length} 条
            </span>
          </div>
        </div>
        <div className="willa-context-panel__actions">
          <Button
            size="sm"
            variant="outline"
            onClick={handleClearAll}
            disabled={selectedCount === 0}
          >
            清空选择
          </Button>
          {onRefresh ? (
            <Button
              size="sm"
              variant="ghost"
              icon={isRefreshing ? undefined : <ReloadIcon />}
              loading={isRefreshing}
              loadingText="刷新中"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              刷新上下文
            </Button>
          ) : null}
        </div>
      </header>
      <div className="willa-context-panel__tabs">
        <Tabs
          items={tabs}
          value={activeSource}
          onValueChange={(value) => {
            setActiveSource(value as ContextPanelSourceFilter);
          }}
        />
      </div>
      {refreshError ? (
        <div className="willa-context-panel__error" role="alert">
          <span>{refreshError}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setRefreshError(null)}
          >
            关闭
          </Button>
          <Cross2Icon aria-hidden="true" />
        </div>
      ) : null}
      <List
        className="willa-context-panel__list"
        items={listItems}
        split={!compact}
        empty={
          <EmptyState
            className="willa-context-panel__empty"
            title={emptyText}
            description="点击切换来源查看更多"
          />
        }
        loading={isRefreshing}
        loadingLabel="刷新中"
      />
      <div className="willa-context-panel__footer">
        <span className="willa-context-panel__status-item">
          共计 {countsBySource.all} 条上下文来源
        </span>
        <span className="willa-context-panel__status-item">
          支持文件 / 网页 / 文档 / 知识库
        </span>
      </div>
    </section>
  );
}

const resolveSourceMeta = (
  source: ContextPanelSource | ContextPanelSourceFilter,
) => {
  if (source === "all") {
    return {
      label: "全部",
      icon: <CheckCircledIcon />,
    };
  }

  if (source === "file") {
    return {
      label: "文件",
      icon: <FileTextIcon />,
    };
  }

  if (source === "web") {
    return {
      label: "网页",
      icon: <GlobeIcon />,
    };
  }

  if (source === "doc") {
    return {
      label: "文档",
      icon: <ReaderIcon />,
    };
  }

  return {
    label: "知识库",
    icon: <ArchiveIcon />,
  };
};

const resolveContextItemStatus = (options: {
  item: ContextItem;
  now: number;
}): ContextItemStatus => {
  const { item, now } = options;

  if (item.status) {
    return item.status;
  }

  if (item.disabledReason) {
    return "disabled";
  }

  if (item.expiresAt === undefined) {
    return "active";
  }

  const normalizedExpiresAt = normalizeTimestamp(item.expiresAt);
  if (normalizedExpiresAt === null) {
    return "active";
  }

  return normalizedExpiresAt <= now ? "expired" : "active";
};

const getItemReason = (
  item: ContextItem,
  status: ContextItemStatus,
  now: number,
) => {
  if (item.disabledReason) {
    return item.disabledReason;
  }

  if (status !== "expired") {
    return null;
  }

  return `来源 "${item.source}" 已到期（${formatContextDate(item.expiresAt as number, now)}）`;
};

const formatContextDate = (
  timestamp: number,
  fallbackNow: number = Date.now(),
) => {
  const normalized = normalizeTimestamp(timestamp) ?? fallbackNow;
  if (!Number.isFinite(normalized)) {
    return "未知时间";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(normalized));
};

const normalizeTimestamp = (timestamp: number) => {
  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return timestamp > 1e11 ? timestamp : timestamp * 1000;
};

ContextPanel.displayName = "ContextPanel";
