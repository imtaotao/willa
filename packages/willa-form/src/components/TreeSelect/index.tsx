import {
  forwardRef,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ForwardedRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { handleSelectablePanelKeyDown } from "#form/internal/selectablePanelKeyboard";
import {
  SelectablePanelClearButton,
  SelectablePanelHiddenInput,
  SelectablePanelList,
  SelectablePanelPortal,
  SelectablePanelSearch,
  SelectablePanelShell,
  SelectablePanelTrigger,
} from "#form/internal/selectablePanelParts";
import { useSelectablePanel } from "#form/internal/useSelectablePanel";

export type TreeSelectSize = "sm" | "md" | "lg";
export type TreeSelectVariant = "outline" | "soft";
export type TreeSelectMode = "single" | "multiple";

export type TreeSelectItem = {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  children?: Array<TreeSelectItem>;
};

type FlatTreeSelectItem = {
  item: TreeSelectItem;
  level: number;
  hasChildren: boolean;
};

export type TreeSelectProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  items: Array<TreeSelectItem>;
  mode?: TreeSelectMode;
  size?: TreeSelectSize;
  variant?: TreeSelectVariant;
  width?: CSSProperties["width"];
  invalid?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: ReactNode;
  name?: string;
  value?: string | Array<string>;
  defaultValue?: string | Array<string>;
  defaultExpandedValues?: Array<string>;
  renderValue?: (items: Array<TreeSelectItem>) => ReactNode;
  onValueChange?: (
    value: string | Array<string>,
    items: Array<TreeSelectItem>,
  ) => void;
  onExpandedChange?: (values: Array<string>) => void;
};

const treeSelectNodeSelector = ".willa-tree-select-node";

export const TreeSelect = forwardRef<HTMLButtonElement, TreeSelectProps>(
  (props, ref) => {
    const {
      items,
      mode = "single",
      size = "md",
      variant = "outline",
      width,
      invalid = false,
      searchable = true,
      clearable = false,
      placeholder = "请选择",
      searchPlaceholder = "搜索节点",
      emptyText = "暂无节点",
      name,
      value,
      defaultValue,
      defaultExpandedValues = [],
      renderValue,
      onValueChange,
      onExpandedChange,
      className,
      disabled,
      style,
      id,
      onBlur,
      onClick,
      onKeyDown,
      ...buttonProps
    } = props;
    const [expandedValues, setExpandedValues] = useState<Array<string>>(
      defaultExpandedValues,
    );
    const [innerValue, setInnerValue] = useState<string | Array<string>>(
      defaultValue ?? (mode === "multiple" ? [] : ""),
    );
    const currentValue = value ?? innerValue;
    const selectedValues = normalizeTreeSelectValue(currentValue, mode);
    const allItems = useMemo(() => flattenAllTreeItems(items), [items]);
    const selectedItems = allItems.filter((item) =>
      selectedValues.includes(item.value),
    );
    const panelContentVersion = useMemo(
      () => ({ expandedValues, items }),
      [expandedValues, items],
    );
    const {
      buttonId,
      closePanel,
      listRef,
      open,
      panelId,
      panelRef,
      position,
      query,
      rootRef,
      scrollable,
      searchRef,
      setOpen,
      setQuery,
      triggerRef,
      handleTriggerKeyDown,
    } = useSelectablePanel({
      contentVersion: panelContentVersion,
      fallbackHeight: 340,
      id,
      minWidth: 300,
      searchable,
    });
    const visibleItems = useMemo(
      () => flattenVisibleTreeItems(items, expandedValues, query),
      [items, expandedValues, query],
    );
    const treeSelectStyle = getTreeSelectStyle({ width, style });
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";
    const hasValue = selectedItems.length > 0;
    const hasClear = clearable && hasValue && !disabled;
    const displayValue = hasValue
      ? (renderValue?.(selectedItems) ??
        selectedItems.map((item) => item.label).join("、"))
      : placeholder;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
      assignForwardedRef(ref, node);
    };

    const setExpandedValuesState = (nextValues: Array<string>) => {
      setExpandedValues(nextValues);
      onExpandedChange?.(nextValues);
    };

    const toggleExpanded = (item: TreeSelectItem) => {
      const nextValues = expandedValues.includes(item.value)
        ? expandedValues.filter((value) => value !== item.value)
        : [...expandedValues, item.value];

      setExpandedValuesState(nextValues);
    };

    const commitValue = (item: TreeSelectItem) => {
      if (item.disabled) return;

      const nextValues =
        mode === "multiple"
          ? toggleTreeSelectValue(selectedValues, item.value)
          : [item.value];
      const nextValue =
        mode === "multiple" ? nextValues : (nextValues[0] ?? "");
      const nextItems = allItems.filter((option) =>
        nextValues.includes(option.value),
      );

      if (value === undefined) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue, nextItems);

      if (mode === "single") {
        setOpen(false);
      }
    };

    const clearValue = () => {
      const nextValue = mode === "multiple" ? [] : "";

      if (value === undefined) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue, []);
    };

    const handleTreePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const node =
        event.target instanceof HTMLElement
          ? event.target.closest<HTMLButtonElement>(treeSelectNodeSelector)
          : null;

      if (
        node &&
        query.trim() === "" &&
        (event.key === "ArrowRight" || event.key === "ArrowLeft")
      ) {
        const value = node.dataset.value;
        const entry = visibleItems.find(({ item }) => item.value === value);

        if (entry?.hasChildren) {
          const expanded = expandedValues.includes(entry.item.value);

          if (event.key === "ArrowRight" && !expanded) {
            event.preventDefault();
            setExpandedValuesState([...expandedValues, entry.item.value]);
            return;
          }

          if (event.key === "ArrowLeft" && expanded) {
            event.preventDefault();
            setExpandedValuesState(
              expandedValues.filter((item) => item !== entry.item.value),
            );
            return;
          }
        }
      }

      handleSelectablePanelKeyDown(event, {
        panel: panelRef.current,
        selector: treeSelectNodeSelector,
        onClose: closePanel,
        trigger: triggerRef.current,
      });
    };

    const panel = (
      <SelectablePanelPortal open={open}>
        <SelectablePanelShell
          panelRef={panelRef}
          id={panelId}
          className="willa-tree-select-panel"
          role="tree"
          multiselectable={mode === "multiple"}
          labelledBy={buttonId}
          position={position}
          onKeyDown={handleTreePanelKeyDown}
        >
          {searchable ? (
            <SelectablePanelSearch
              className="willa-tree-select-search"
              inputRef={searchRef}
              value={query}
              placeholder={searchPlaceholder}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          ) : null}
          <SelectablePanelList
            listRef={listRef}
            className="willa-tree-select-list"
            scrollableClassName="willa-tree-select-list--scrollable"
            scrollable={scrollable}
          >
            {visibleItems.length > 0 ? (
              visibleItems.map(({ item, level, hasChildren }) => {
                const selected = selectedValues.includes(item.value);
                const expanded =
                  query.trim() !== "" || expandedValues.includes(item.value);

                return (
                  <div
                    key={item.value}
                    className="willa-tree-select-row"
                    style={
                      {
                        "--willa-tree-select-level": level,
                      } as CSSProperties
                    }
                  >
                    <button
                      type="button"
                      className="willa-tree-select-expand"
                      aria-label={expanded ? "收起节点" : "展开节点"}
                      aria-hidden={!hasChildren}
                      tabIndex={hasChildren ? 0 : -1}
                      onClick={() => toggleExpanded(item)}
                    >
                      {hasChildren ? (
                        <ChevronRightIcon
                          className={classNames(
                            expanded && "willa-tree-select-expand-icon--open",
                          )}
                        />
                      ) : null}
                    </button>
                    <button
                      type="button"
                      className={classNames(
                        "willa-tree-select-node",
                        selected && "willa-tree-select-node--selected",
                      )}
                      role="treeitem"
                      data-value={item.value}
                      aria-selected={selected}
                      aria-level={level + 1}
                      aria-expanded={hasChildren ? expanded : undefined}
                      disabled={item.disabled}
                      onClick={() => commitValue(item)}
                    >
                      <span className="willa-tree-select-node-main">
                        <span className="willa-tree-select-node-label">
                          {item.label}
                        </span>
                        {item.description ? (
                          <span className="willa-tree-select-node-description">
                            {item.description}
                          </span>
                        ) : null}
                      </span>
                      <span
                        className="willa-tree-select-node-check"
                        aria-hidden="true"
                      >
                        {selected ? <CheckIcon /> : null}
                      </span>
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="willa-tree-select-empty">{emptyText}</div>
            )}
          </SelectablePanelList>
        </SelectablePanelShell>
      </SelectablePanelPortal>
    );

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-tree-select",
          `willa-tree-select--${size}`,
          `willa-tree-select--${variant}`,
          open && "willa-tree-select--open",
          isInvalid && "willa-tree-select--invalid",
          hasClear && "willa-tree-select--has-clear",
          disabled && "willa-tree-select--disabled",
          className,
        )}
        style={treeSelectStyle}
      >
        <SelectablePanelTrigger
          {...buttonProps}
          buttonRef={setButtonRef}
          id={buttonId}
          triggerClassName="willa-tree-select-trigger"
          valueClassName="willa-tree-select-value"
          placeholderClassName="willa-tree-select-value--placeholder"
          iconClassName="willa-tree-select-icon"
          disabled={disabled}
          popupRole="tree"
          expanded={open}
          controls={open ? panelId : undefined}
          invalid={isInvalid}
          hasValue={hasValue}
          displayValue={displayValue}
          onBlur={onBlur}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) setOpen((currentOpen) => !currentOpen);
          }}
          onKeyDown={(event) =>
            handleTriggerKeyDown(event, {
              selector: treeSelectNodeSelector,
              onKeyDown,
            })
          }
        />
        {hasClear ? (
          <SelectablePanelClearButton
            className="willa-tree-select-clear"
            ariaLabel="清空选择"
            onClear={clearValue}
            triggerRef={triggerRef}
          />
        ) : null}
        <SelectablePanelHiddenInput
          name={name}
          value={selectedValues.join(",")}
        />
        {panel}
      </span>
    );
  },
);

TreeSelect.displayName = "TreeSelect";

const normalizeTreeSelectValue = (
  value: string | Array<string>,
  mode: TreeSelectMode,
) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return mode === "multiple" ? value.split(",").filter(Boolean) : [value];
};

const toggleTreeSelectValue = (values: Array<string>, value: string) => {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }

  return [...values, value];
};

const flattenAllTreeItems = (items: Array<TreeSelectItem>) => {
  const result: Array<TreeSelectItem> = [];

  const walk = (currentItems: Array<TreeSelectItem>) => {
    currentItems.forEach((item) => {
      result.push(item);
      if (item.children) walk(item.children);
    });
  };

  walk(items);
  return result;
};

const flattenVisibleTreeItems = (
  items: Array<TreeSelectItem>,
  expandedValues: Array<string>,
  query: string,
) => {
  const result: Array<FlatTreeSelectItem> = [];
  const normalizedQuery = query.trim().toLowerCase();
  const searching = normalizedQuery !== "";

  const walk = (currentItems: Array<TreeSelectItem>, level: number) => {
    currentItems.forEach((item) => {
      const hasChildren = Boolean(item.children?.length);
      const matches = matchesTreeSelectQuery(item, normalizedQuery);
      const childMatches = hasChildren
        ? hasMatchedTreeSelectChild(item.children ?? [], normalizedQuery)
        : false;
      const visible = !searching || matches || childMatches;

      if (!visible) return;

      result.push({ item, level, hasChildren });

      if (hasChildren && (searching || expandedValues.includes(item.value))) {
        walk(item.children ?? [], level + 1);
      }
    });
  };

  walk(items, 0);
  return result;
};

const hasMatchedTreeSelectChild = (
  items: Array<TreeSelectItem>,
  query: string,
): boolean => {
  return items.some((item) => {
    return (
      matchesTreeSelectQuery(item, query) ||
      hasMatchedTreeSelectChild(item.children ?? [], query)
    );
  });
};

const matchesTreeSelectQuery = (item: TreeSelectItem, query: string) => {
  if (!query) return true;

  return (
    getTextValue(item.label).toLowerCase().includes(query) ||
    getTextValue(item.description).toLowerCase().includes(query)
  );
};

const getTextValue = (value: ReactNode): string => {
  if (value === null || value === undefined || typeof value === "boolean") {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(getTextValue).join(" ");
  }

  return "";
};

const getTreeSelectStyle = ({
  width,
  style,
}: {
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  if (width === undefined) return style;

  return {
    ...style,
    width,
  };
};

const assignForwardedRef = (
  ref: ForwardedRef<HTMLButtonElement>,
  value: HTMLButtonElement | null,
) => {
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
};
