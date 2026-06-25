import {
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  CheckCircledIcon,
  Pencil2Icon,
  DotsHorizontalIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { isPromiseLike } from "aidly";
import classNames from "classnames";

import { EmptyState } from "@willa-ui/content/components/EmptyState";
import { List, type ListItem } from "@willa-ui/content/components/List";
import { Menu, type MenuActionItem } from "@willa-ui/content/components/Menu";
import { SearchInput } from "@willa-ui/form/components/SearchInput";
import { Segmented } from "@willa-ui/content/components/Segmented";
import { Input } from "@willa-ui/form/components/Input";
import { Spinner } from "@willa-ui/content/components/Spinner";
import { Tag } from "@willa-ui/content/components/Tag";
import { Button } from "@willa-ui/content/components/Button";
import { useControllableState } from "@willa-ui/shared";
import {
  matchesSearchQuery,
  normalizeSearchQuery,
  renderHighlightedText,
} from "#ai/internal/searchText";

export type ConversationListMode = "all" | "active" | "archived";
export type ConversationListItemStatus = "active" | "archived";
export type ConversationListItem = {
  id: string;
  title: string;
  updatedAt: number;
  groupId?: string;
  status?: ConversationListItemStatus;
  preview?: string;
};

export type ConversationGroup = {
  id: string;
  title: string;
  count?: number;
};

export type ConversationListProps = {
  items: Array<ConversationListItem>;
  groups?: Array<ConversationGroup>;
  activeId?: string;
  scope?: ConversationListMode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onScopeChange?: (scope: ConversationListMode) => void;
  onActivate: (id: string) => void;
  onRename?: (payload: { id: string; title: string }) => void | Promise<void>;
  onDelete?: (id: string) => void | Promise<void>;
  onArchive?: (id: string) => void | Promise<void>;
  loading?: boolean;
  emptyText?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export function ConversationList(props: ConversationListProps) {
  const {
    items,
    groups = [],
    activeId,
    scope: scopeProp,
    searchValue,
    onSearchChange,
    onScopeChange,
    onActivate,
    onRename,
    onDelete,
    onArchive,
    loading = false,
    emptyText = "暂无会话",
    className,
    ...sectionProps
  } = props;

  const [scope, setScope] = useControllableState<ConversationListMode>({
    value: scopeProp,
    defaultValue: "all",
    onChange: onScopeChange,
  });
  const [searchTerm, setSearchTerm] = useControllableState({
    value: searchValue,
    defaultValue: "",
    onChange: onSearchChange,
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [renamedTitle, setRenamedTitle] = useState("");
  const [operationState, setOperationState] = useState<{
    pendingId: string | null;
    pendingType: string | null;
    error: ReactNode;
  }>({ pendingId: null, pendingType: null, error: null });

  const scopeOptions = useMemo(
    () => [
      { value: "all", label: "全部" },
      { value: "active", label: "进行中" },
      { value: "archived", label: "已归档" },
    ],
    [],
  );

  const filteredItems = useMemo(() => {
    const normalizedSearch = normalizeSearchQuery(searchTerm);

    const base = items.filter((item) => {
      if (scope === "active") {
        return item.status !== "archived";
      }

      if (scope === "archived") {
        return item.status === "archived";
      }

      return true;
    });

    if (!normalizedSearch) {
      return base;
    }

    return base.filter((item) =>
      matchesSearchQuery(
        `${item.title}\n${item.preview ?? ""}`,
        normalizedSearch,
      ),
    );
  }, [items, scope, searchTerm]);

  const groupedItems = useMemo(() => {
    if (groups.length === 0) {
      return [
        {
          group: {
            id: "default",
            title: "会话",
            count: filteredItems.length,
          },
          items: filteredItems,
        },
      ];
    }

    const groupMap = new Map(
      groups.map((group) => [
        group.id,
        { ...group, items: [] as Array<ConversationListItem> },
      ]),
    );
    const ungrouped: Array<ConversationListItem> = [];

    filteredItems.forEach((item) => {
      const target = item.groupId ? groupMap.get(item.groupId) : null;
      if (target) {
        target.items.push(item);
        return;
      }
      ungrouped.push(item);
    });

    const next = [...groupMap.values()]
      .map((group) => ({
        group,
        items: group.items,
      }))
      .filter((entry) => entry.items.length > 0);

    if (ungrouped.length > 0) {
      next.push({
        group: {
          id: "__ungrouped",
          title: "未分组",
          count: ungrouped.length,
          items: [] as Array<ConversationListItem>,
        },
        items: ungrouped,
      });
    }

    return next;
  }, [filteredItems, groups]);

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const runAsyncAction = async (options: {
    id: string;
    type: string;
    callback?: () => void | Promise<void>;
  }) => {
    const { id, type, callback } = options;
    if (!callback) {
      return;
    }

    setOperationState({
      pendingId: id,
      pendingType: type,
      error: null,
    });

    try {
      const result = callback();
      if (isPromiseLike(result)) {
        await result;
      }

      setOperationState({ pendingId: null, pendingType: null, error: null });
    } catch {
      setOperationState({
        pendingId: null,
        pendingType: null,
        error: "操作失败，已回退。请稍后重试。",
      });
    }
  };

  const isBusy = (id: string, type: string) => {
    return (
      operationState.pendingId === id && operationState.pendingType === type
    );
  };

  const getMeta = (item: ConversationListItem) => {
    const title = resolveUpdatedAt(item.updatedAt);
    return (
      <span className="willa-conversation-list__meta">
        <span className="willa-conversation-list__updated-at">{title}</span>
        {item.status === "archived" ? (
          <Tag
            className="willa-conversation-list__archived-tag"
            tone="warning"
            size="sm"
          >
            已归档
          </Tag>
        ) : null}
      </span>
    );
  };

  const renderSearchHint = searchTerm.trim() ? (
    <div className="willa-conversation-list__summary">
      已筛选 {filteredItems.length} 条会话；
      {searchTerm.trim() ? `关键词“${searchTerm.trim()}”` : ""}
      {searchTerm.trim() ? <CheckCircledIcon /> : null}
    </div>
  ) : null;

  if (loading) {
    return (
      <section
        {...sectionProps}
        className={classNames("willa-conversation-list", className)}
        aria-busy="true"
      >
        <div className="willa-conversation-list__empty">
          <EmptyState
            title="正在加载会话"
            description="请稍候，正在获取会话列表。"
            icon={<Spinner label={null} size="sm" />}
          />
        </div>
      </section>
    );
  }

  const noItems = filteredItems.length === 0;

  return (
    <section
      {...sectionProps}
      className={classNames("willa-conversation-list", className)}
    >
      <div className="willa-conversation-list__toolbar">
        <SearchInput
          className="willa-conversation-list__search"
          value={searchTerm}
          onValueChange={setSearchTerm}
          onSearch={setSearchTerm}
          placeholder="搜索会话名称、内容"
          onClear={clearSearch}
          onSubmit={handleSearchSubmit}
          clearable
        />
        <Segmented
          size="sm"
          options={scopeOptions}
          value={scope}
          onValueChange={(value) => setScope(value as ConversationListMode)}
        />
      </div>

      {renderSearchHint}

      {operationState.error ? (
        <div className="willa-conversation-list__notice" role="status">
          <CheckCircledIcon />
          {operationState.error}
        </div>
      ) : null}

      {noItems ? (
        <div className="willa-conversation-list__empty">
          <EmptyState
            title="无可显示的会话"
            description={emptyText}
            actions={
              searchTerm.trim() ? (
                <Button size="sm" variant="soft" onClick={clearSearch}>
                  清空搜索
                </Button>
              ) : null
            }
          />
        </div>
      ) : (
        <div className="willa-conversation-list__sections">
          {groupedItems.map((entry) => {
            const hasEditingItem = entry.items.some(
              (item) => editingId === item.id,
            );
            const renderedItems = entry.items.map((item) => {
              const isActive = activeId === item.id;
              const itemBusy = operationState.pendingId === item.id;
              const isEditing = editingId === item.id;

              const actions = isEditing ? null : (
                <div className="willa-conversation-list__item-actions">
                  <Menu
                    className="willa-conversation-list__menu"
                    trigger={
                      <button
                        className="willa-conversation-list__menu-trigger"
                        type="button"
                        disabled={itemBusy}
                        aria-label={`会话 ${item.title} 操作`}
                      >
                        <DotsHorizontalIcon />
                      </button>
                    }
                    items={getConversationMenuItems(item)}
                    onSelect={(value) => {
                      if (value === "rename") {
                        setEditingId(item.id);
                        setRenamedTitle(item.title);
                        return;
                      }

                      if (value === "toggleArchive") {
                        void runAsyncAction({
                          id: item.id,
                          type: "archive",
                          callback: () => onArchive?.(item.id),
                        });
                        return;
                      }

                      if (value === "delete") {
                        void runAsyncAction({
                          id: item.id,
                          type: "delete",
                          callback: () => onDelete?.(item.id),
                        });
                      }
                    }}
                  />
                </div>
              );

              const listItem = {
                id: item.id,
                title: isEditing ? (
                  <form
                    className="willa-conversation-list__rename-form"
                    onSubmit={(event) => {
                      event.preventDefault();
                      if (!renamedTitle.trim()) {
                        return;
                      }

                      if (onRename) {
                        void runAsyncAction({
                          id: item.id,
                          type: "rename",
                          callback: () =>
                            onRename({
                              id: item.id,
                              title: renamedTitle.trim(),
                            }),
                        });
                      }

                      setEditingId(null);
                    }}
                  >
                    <Input
                      size="sm"
                      value={renamedTitle}
                      onChange={(event) =>
                        setRenamedTitle(event.currentTarget.value)
                      }
                      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                        if (event.key !== "Escape") {
                          return;
                        }

                        setEditingId(null);
                        setRenamedTitle("");
                      }}
                    />
                    <div className="willa-conversation-list__rename-actions">
                      <Button
                        size="sm"
                        variant="soft"
                        type="submit"
                        disabled={
                          isBusy(item.id, "rename") || !renamedTitle.trim()
                        }
                      >
                        确认
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setRenamedTitle("");
                        }}
                      >
                        取消
                      </Button>
                    </div>
                  </form>
                ) : (
                  renderHighlightedText({
                    text: item.title,
                    query: searchTerm,
                    markClassName: "willa-conversation-list__mark",
                  })
                ),
                description: item.preview,
                meta: getMeta(item),
                media: isActive ? <CheckCircledIcon /> : null,
                actions,
                selected: isActive,
                disabled:
                  operationState.pendingId === item.id &&
                  Boolean(operationState.pendingType),
              } as ListItem;

              return listItem;
            });

            return (
              <div
                key={entry.group.id}
                className="willa-conversation-list__section"
              >
                <h3 className="willa-conversation-list__section-title">
                  {entry.group.title}
                  {typeof entry.group.count === "number" ? (
                    <span className="willa-conversation-list__section-description">
                      ({entry.group.count})
                    </span>
                  ) : null}
                </h3>
                <List
                  className="willa-conversation-list__list"
                  items={renderedItems}
                  onItemClick={
                    hasEditingItem
                      ? undefined
                      : (item) => {
                          if (!operationState.pendingId) {
                            onActivate(item.id);
                          }
                        }
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

const getConversationMenuItems = (item: ConversationListItem) => {
  const items: Array<MenuActionItem> = [
    {
      type: "item",
      value: "rename",
      label: "重命名",
      icon: <Pencil2Icon />,
    },
    {
      type: "item",
      value: "toggleArchive",
      label: item.status === "archived" ? "恢复会话" : "归档",
      icon: <CheckCircledIcon />,
    },
  ];

  if (item.id) {
    items.push({
      type: "item",
      value: "delete",
      label: "删除",
      icon: <TrashIcon />,
      danger: true,
    });
  }

  return items;
};

const resolveUpdatedAt = (timestamp: number) => {
  if (!Number.isFinite(timestamp)) {
    return "未知时间";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
};

ConversationList.displayName = "ConversationList";
