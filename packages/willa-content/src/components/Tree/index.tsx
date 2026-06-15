import {
  useId,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { CheckIcon, ChevronRightIcon, MinusIcon } from "@radix-ui/react-icons";

export type TreeKey = string | number;
export type TreeSize = "sm" | "md" | "lg";
export type TreeSelectionMode = "single" | "multiple";
export type TreeCheckStrategy = "cascade" | "strict";

export type TreeItem = {
  key: TreeKey;
  title: ReactNode;
  children?: Array<TreeItem>;
  description?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  extra?: ReactNode;
  disabled?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  muted?: boolean;
  className?: string;
};

export type TreeItemRenderInfo = {
  item: TreeItem;
  depth: number;
  expanded: boolean;
  selected: boolean;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  leaf: boolean;
};

export type TreeChangeInfo = TreeItemRenderInfo & {
  key: TreeKey;
};

export type TreeProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | "onSelect"
> & {
  items: Array<TreeItem>;
  size?: TreeSize;
  expandedKeys?: Array<TreeKey>;
  defaultExpandedKeys?: Array<TreeKey>;
  selectedKeys?: Array<TreeKey>;
  defaultSelectedKeys?: Array<TreeKey>;
  checkedKeys?: Array<TreeKey>;
  defaultCheckedKeys?: Array<TreeKey>;
  selectionMode?: TreeSelectionMode;
  checkStrategy?: TreeCheckStrategy;
  selectable?: boolean;
  checkable?: boolean;
  disabled?: boolean;
  showLine?: boolean;
  expandOnClick?: boolean;
  defaultExpandAll?: boolean;
  emptyText?: ReactNode;
  renderTitle?: (info: TreeItemRenderInfo) => ReactNode;
  renderIcon?: (info: TreeItemRenderInfo) => ReactNode;
  renderExtra?: (info: TreeItemRenderInfo) => ReactNode;
  onExpandedChange?: (keys: Array<TreeKey>, info: TreeChangeInfo) => void;
  onSelectedChange?: (keys: Array<TreeKey>, info: TreeChangeInfo) => void;
  onCheckedChange?: (keys: Array<TreeKey>, info: TreeChangeInfo) => void;
  onItemClick?: (info: TreeChangeInfo) => void;
};

type FlatTreeItem = {
  item: TreeItem;
  depth: number;
  parentKey?: TreeKey;
};

export function Tree(props: TreeProps) {
  const {
    items,
    size = "md",
    expandedKeys,
    defaultExpandedKeys,
    selectedKeys,
    defaultSelectedKeys = [],
    checkedKeys,
    defaultCheckedKeys = [],
    selectionMode = "single",
    checkStrategy = "cascade",
    selectable = true,
    checkable = false,
    disabled = false,
    showLine = false,
    expandOnClick = false,
    defaultExpandAll = false,
    emptyText = "暂无节点",
    renderTitle,
    renderIcon,
    renderExtra,
    onExpandedChange,
    onSelectedChange,
    onCheckedChange,
    onItemClick,
    className,
    id,
    ...rootProps
  } = props;
  const generatedId = useId();
  const treeId = id ?? generatedId;
  const defaultExpanded = useMemo(() => {
    if (defaultExpandedKeys) return defaultExpandedKeys;
    return defaultExpandAll ? collectExpandableKeys(items) : [];
  }, [defaultExpandAll, defaultExpandedKeys, items]);
  const [innerExpandedKeys, setInnerExpandedKeys] =
    useState<Array<TreeKey>>(defaultExpanded);
  const [innerSelectedKeys, setInnerSelectedKeys] =
    useState<Array<TreeKey>>(defaultSelectedKeys);
  const [innerCheckedKeys, setInnerCheckedKeys] =
    useState<Array<TreeKey>>(defaultCheckedKeys);
  const resolvedExpandedKeys = expandedKeys ?? innerExpandedKeys;
  const resolvedSelectedKeys = selectedKeys ?? innerSelectedKeys;
  const resolvedCheckedKeys = checkedKeys ?? innerCheckedKeys;
  const expandedSet = useMemo(
    () => new Set(resolvedExpandedKeys),
    [resolvedExpandedKeys],
  );
  const selectedSet = useMemo(
    () => new Set(resolvedSelectedKeys),
    [resolvedSelectedKeys],
  );
  const checkedSet = useMemo(
    () => new Set(resolvedCheckedKeys),
    [resolvedCheckedKeys],
  );
  const visibleItems = useMemo(
    () => flattenVisibleTreeItems(items, expandedSet),
    [expandedSet, items],
  );
  const firstVisibleKey = visibleItems[0]?.item.key;
  const [activeKey, setActiveKey] = useState<TreeKey | undefined>(
    firstVisibleKey,
  );
  const resolvedActiveKey = visibleItems.some(
    ({ item }) => item.key === activeKey,
  )
    ? activeKey
    : firstVisibleKey;

  const updateExpandedKeys = (
    key: TreeKey,
    info: TreeItemRenderInfo,
    nextKeys: Array<TreeKey>,
  ) => {
    if (expandedKeys === undefined) {
      setInnerExpandedKeys(nextKeys);
    }

    onExpandedChange?.(nextKeys, { ...info, key });
  };

  const updateSelectedKeys = (
    key: TreeKey,
    info: TreeItemRenderInfo,
    nextKeys: Array<TreeKey>,
  ) => {
    if (selectedKeys === undefined) {
      setInnerSelectedKeys(nextKeys);
    }

    onSelectedChange?.(nextKeys, { ...info, key });
  };

  const updateCheckedKeys = (
    key: TreeKey,
    info: TreeItemRenderInfo,
    nextKeys: Array<TreeKey>,
  ) => {
    if (checkedKeys === undefined) {
      setInnerCheckedKeys(nextKeys);
    }

    onCheckedChange?.(nextKeys, { ...info, key });
  };

  const getInfo = (entry: FlatTreeItem): TreeItemRenderInfo => {
    const hasChildren = Boolean(entry.item.children?.length);
    const selfChecked = checkedSet.has(entry.item.key);
    const descendantKeys = collectTreeItemDescendantKeys(entry.item);
    const checkedDescendantCount = descendantKeys.filter((key) =>
      checkedSet.has(key),
    ).length;
    const allDescendantsChecked =
      descendantKeys.length > 0 &&
      checkedDescendantCount === descendantKeys.length;
    const anyDescendantChecked = checkedDescendantCount > 0;
    const checked =
      checkStrategy === "cascade" && hasChildren
        ? selfChecked || allDescendantsChecked
        : selfChecked;

    return {
      item: entry.item,
      depth: entry.depth,
      expanded: expandedSet.has(entry.item.key),
      selected: selectedSet.has(entry.item.key),
      checked,
      indeterminate:
        checkStrategy === "cascade" &&
        hasChildren &&
        !checked &&
        anyDescendantChecked,
      disabled: disabled || Boolean(entry.item.disabled),
      leaf: !hasChildren,
    };
  };

  const toggleExpanded = (entry: FlatTreeItem) => {
    if (!entry.item.children?.length) return;

    const info = getInfo(entry);
    if (info.disabled) return;

    const nextSet = new Set(expandedSet);
    if (nextSet.has(entry.item.key)) {
      nextSet.delete(entry.item.key);
    } else {
      nextSet.add(entry.item.key);
    }

    updateExpandedKeys(entry.item.key, info, orderKeysByTree(items, nextSet));
  };

  const toggleSelected = (entry: FlatTreeItem) => {
    const info = getInfo(entry);
    if (!selectable || info.disabled || entry.item.selectable === false) return;

    const nextKeys =
      selectionMode === "multiple"
        ? toggleKeyInList(resolvedSelectedKeys, entry.item.key)
        : info.selected
          ? []
          : [entry.item.key];

    updateSelectedKeys(entry.item.key, info, nextKeys);
  };

  const toggleChecked = (entry: FlatTreeItem) => {
    const info = getInfo(entry);
    if (!checkable || info.disabled || entry.item.checkable === false) return;

    const nextSet = new Set(checkedSet);
    const affectedKeys =
      checkStrategy === "cascade"
        ? [entry.item.key, ...collectTreeItemDescendantKeys(entry.item)]
        : [entry.item.key];
    const nextChecked = !info.checked || info.indeterminate;

    affectedKeys.forEach((key) => {
      if (nextChecked) {
        nextSet.add(key);
      } else {
        nextSet.delete(key);
      }
    });

    updateCheckedKeys(entry.item.key, info, orderKeysByTree(items, nextSet));
  };

  const focusTreeItem = (key: TreeKey) => {
    const element = document.getElementById(getTreeItemId(treeId, key));
    element?.focus();
  };

  const moveActive = (entry: FlatTreeItem, offset: number) => {
    const currentIndex = visibleItems.findIndex(
      ({ item }) => item.key === entry.item.key,
    );
    const nextEntry = visibleItems[currentIndex + offset];
    if (!nextEntry) return;

    setActiveKey(nextEntry.item.key);
    focusTreeItem(nextEntry.item.key);
  };

  const handleItemKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    entry: FlatTreeItem,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActive(entry, 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActive(entry, -1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (entry.item.children?.length && !expandedSet.has(entry.item.key)) {
        toggleExpanded(entry);
        return;
      }

      const nextEntry = visibleItems.find(
        (item) => item.parentKey === entry.item.key,
      );
      if (nextEntry) {
        setActiveKey(nextEntry.item.key);
        focusTreeItem(nextEntry.item.key);
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (entry.item.children?.length && expandedSet.has(entry.item.key)) {
        toggleExpanded(entry);
        return;
      }

      if (entry.parentKey !== undefined) {
        setActiveKey(entry.parentKey);
        focusTreeItem(entry.parentKey);
      }
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      const nextEntry = visibleItems[0];
      if (nextEntry) {
        setActiveKey(nextEntry.item.key);
        focusTreeItem(nextEntry.item.key);
      }
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const nextEntry = visibleItems[visibleItems.length - 1];
      if (nextEntry) {
        setActiveKey(nextEntry.item.key);
        focusTreeItem(nextEntry.item.key);
      }
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    if (checkable) {
      toggleChecked(entry);
      return;
    }

    toggleSelected(entry);
  };

  return (
    <div
      {...rootProps}
      id={treeId}
      className={classNames(
        "willa-tree",
        `willa-tree--${size}`,
        showLine && "willa-tree--line",
        checkable && "willa-tree--checkable",
        disabled && "willa-tree--disabled",
        className,
      )}
      role="tree"
      aria-multiselectable={
        selectionMode === "multiple" || checkable ? true : undefined
      }
    >
      {visibleItems.length > 0 ? (
        visibleItems.map((entry) => {
          const info = getInfo(entry);
          const hasChildren = !info.leaf;
          const title = renderTitle?.(info) ?? entry.item.title;
          const icon = renderIcon?.(info) ?? entry.item.icon;
          const extra = renderExtra?.(info) ?? entry.item.extra;

          return (
            <div
              key={entry.item.key}
              id={getTreeItemId(treeId, entry.item.key)}
              className={classNames(
                "willa-tree-node",
                info.selected && "willa-tree-node--selected",
                info.disabled && "willa-tree-node--disabled",
                entry.item.muted && "willa-tree-node--muted",
                entry.item.className,
              )}
              style={
                {
                  "--willa-tree-depth": entry.depth,
                } as CSSProperties
              }
              role="treeitem"
              aria-level={entry.depth + 1}
              aria-expanded={hasChildren ? info.expanded : undefined}
              aria-selected={selectable ? info.selected : undefined}
              aria-disabled={info.disabled || undefined}
              tabIndex={entry.item.key === resolvedActiveKey ? 0 : -1}
              onFocus={() => setActiveKey(entry.item.key)}
              onKeyDown={(event) => handleItemKeyDown(event, entry)}
              onClick={() => {
                onItemClick?.({ ...info, key: entry.item.key });
                if (expandOnClick && hasChildren) {
                  toggleExpanded(entry);
                  return;
                }

                toggleSelected(entry);
              }}
            >
              <button
                className="willa-tree-expander"
                type="button"
                aria-label={info.expanded ? "收起节点" : "展开节点"}
                aria-hidden={!hasChildren}
                tabIndex={-1}
                disabled={!hasChildren || info.disabled}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleExpanded(entry);
                }}
              >
                {hasChildren ? (
                  <ChevronRightIcon
                    className={classNames(
                      "willa-tree-expander-icon",
                      info.expanded && "willa-tree-expander-icon--open",
                    )}
                  />
                ) : null}
              </button>
              {checkable ? (
                <button
                  className={classNames(
                    "willa-tree-check",
                    info.checked && "willa-tree-check--checked",
                    info.indeterminate && "willa-tree-check--indeterminate",
                  )}
                  type="button"
                  aria-label={`选择 ${getTreeText(entry.item.title)}`}
                  aria-pressed={info.checked}
                  tabIndex={-1}
                  disabled={info.disabled || entry.item.checkable === false}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleChecked(entry);
                  }}
                >
                  {info.indeterminate ? <MinusIcon /> : null}
                  {info.checked && !info.indeterminate ? <CheckIcon /> : null}
                </button>
              ) : null}
              {icon ? (
                <span className="willa-tree-icon" aria-hidden="true">
                  {icon}
                </span>
              ) : null}
              <span className="willa-tree-content">
                <span className="willa-tree-title">{title}</span>
                {entry.item.description ? (
                  <span className="willa-tree-description">
                    {entry.item.description}
                  </span>
                ) : null}
              </span>
              {entry.item.meta ? (
                <span className="willa-tree-meta">{entry.item.meta}</span>
              ) : null}
              {extra ? <span className="willa-tree-extra">{extra}</span> : null}
            </div>
          );
        })
      ) : (
        <div className="willa-tree-empty">{emptyText}</div>
      )}
    </div>
  );
}

const flattenAllTreeItems = (items: Array<TreeItem>) => {
  const result: Array<TreeItem> = [];
  const walk = (currentItems: Array<TreeItem>) => {
    currentItems.forEach((item) => {
      result.push(item);
      if (item.children?.length) walk(item.children);
    });
  };

  walk(items);
  return result;
};

const flattenVisibleTreeItems = (
  items: Array<TreeItem>,
  expandedSet: Set<TreeKey>,
) => {
  const result: Array<FlatTreeItem> = [];

  const walk = (
    currentItems: Array<TreeItem>,
    depth: number,
    parentKey?: TreeKey,
  ) => {
    currentItems.forEach((item) => {
      result.push({ item, depth, parentKey });

      if (item.children?.length && expandedSet.has(item.key)) {
        walk(item.children, depth + 1, item.key);
      }
    });
  };

  walk(items, 0);
  return result;
};

const collectExpandableKeys = (items: Array<TreeItem>) => {
  return flattenAllTreeItems(items)
    .filter((item) => item.children?.length)
    .map((item) => item.key);
};

const collectTreeItemDescendantKeys = (item: TreeItem) => {
  if (!item.children?.length) return [];

  return flattenAllTreeItems(item.children).map((child) => child.key);
};

const orderKeysByTree = (items: Array<TreeItem>, keys: Set<TreeKey>) => {
  return flattenAllTreeItems(items)
    .map((item) => item.key)
    .filter((key) => keys.has(key));
};

const toggleKeyInList = (keys: Array<TreeKey>, key: TreeKey) => {
  if (keys.includes(key)) return keys.filter((item) => item !== key);
  return [...keys, key];
};

const getTreeItemId = (treeId: string, key: TreeKey) => {
  return `${treeId}-node-${String(key).replace(/\s+/g, "-")}`;
};

const getTreeText = (value: ReactNode): string => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  return "节点";
};
