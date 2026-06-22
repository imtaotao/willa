import {
  forwardRef,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  Tree,
  type TreeChangeInfo,
  type TreeItem,
} from "@willa-ui/content/components/Tree";
import { assignRef } from "@willa-ui/shared";
import classNames from "classnames";

import { FloatingPanelShell } from "#form/internal/floatingPanelParts";
import { handleSelectablePanelKeyDown } from "#form/internal/selectablePanelKeyboard";
import {
  SelectablePanelPortal,
  SelectablePanelSearch,
} from "#form/internal/selectablePanelParts";
import { ComboboxField } from "#form/internal/comboboxField";
import { useComboboxState } from "#form/internal/useComboboxState";

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
  leafOnly?: boolean;
  showPath?: boolean;
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

const treeSelectTreeSelector = ".willa-tree-select-tree .willa-tree-node";

export const TreeSelect = forwardRef<HTMLButtonElement, TreeSelectProps>(
  function TreeSelect(props, ref) {
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
      leafOnly = false,
      showPath = false,
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
    const treeItemMap = useMemo(() => buildTreeSelectItemMap(items), [items]);
    const mappedTreeItems = useMemo(
      () =>
        mapTreeSelectItems(items, {
          leafOnly,
        }),
      [items, leafOnly],
    );
    const pathMap = useMemo(() => buildTreeSelectPathMap(items), [items]);
    const resolvedRenderValue = useMemo(() => {
      if (renderValue) return renderValue;
      if (!showPath) return undefined;

      return (selectedItems: Array<TreeSelectItem>) =>
        formatTreeSelectPath(selectedItems, pathMap, mode);
    }, [mode, pathMap, renderValue, showPath]);
    const panelContentVersion = useMemo(
      () => ({ expandedValues, items }),
      [expandedValues, items],
    );
    const {
      clearValue,
      commitItem,
      displayValue,
      hasValue,
      hiddenValue,
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
      selectedValues,
    } = useComboboxState({
      defaultValue,
      items: flattenAllTreeItems(items),
      mode,
      onValueChange,
      placeholder,
      renderValue: resolvedRenderValue,
      value,
      contentVersion: panelContentVersion,
      fallbackHeight: 340,
      id,
      minWidth: 300,
      searchable,
    });
    const searching = query.trim() !== "";
    const visibleTreeItems = useMemo(
      () => filterTreeSelectItems(mappedTreeItems, query),
      [mappedTreeItems, query],
    );
    const searchableExpandedKeys = useMemo(
      () => collectExpandableTreeKeys(visibleTreeItems),
      [visibleTreeItems],
    );
    const resolvedExpandedKeys = searching
      ? searchableExpandedKeys
      : expandedValues;
    const treeSelectStyle = getTreeSelectStyle({ width, style });
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";
    const hasClear = clearable && hasValue && !disabled;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
      assignRef(ref, node);
    };

    const setExpandedValuesState = (nextValues: Array<string>) => {
      setExpandedValues(nextValues);
      onExpandedChange?.(nextValues);
    };

    const handleTreePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        closePanel();
        triggerRef.current?.focus();
        return;
      }

      const isTreeNodeTarget =
        event.target instanceof HTMLElement
          ? event.target.closest(treeSelectTreeSelector) !== null
          : false;

      if (isTreeNodeTarget) return;

      handleSelectablePanelKeyDown(event, {
        panel: panelRef.current,
        selector: treeSelectTreeSelector,
        onClose: closePanel,
        trigger: triggerRef.current,
      });
    };

    const handleTreeExpandedChange = (keys: Array<string | number>) => {
      const nextValues = keys.map((key) => String(key));
      setExpandedValuesState(nextValues);
    };

    const handleTreeSelectedChange = (
      _keys: Array<string | number>,
      info: TreeChangeInfo,
    ) => {
      const originalItem = treeItemMap.get(String(info.key));
      if (!originalItem) return;

      const committed = commitItem(originalItem);

      if (committed && mode === "single") {
        setOpen(false);
      }
    };

    const panel = (
      <SelectablePanelPortal open={open}>
        <FloatingPanelShell
          panelRef={panelRef}
          id={panelId}
          className="willa-tree-select-panel"
          role="presentation"
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
          <div
            ref={listRef}
            className={classNames(
              "willa-tree-select-list",
              scrollable && "willa-tree-select-list--scrollable",
            )}
          >
            <Tree
              className="willa-tree-select-tree"
              items={visibleTreeItems}
              size={size}
              selectedKeys={selectedValues}
              expandedKeys={resolvedExpandedKeys}
              selectionMode={mode}
              selectable
              expandOnClick={leafOnly}
              emptyText={emptyText}
              renderExtra={({ selected }) =>
                selected ? <CheckIcon aria-hidden="true" /> : null
              }
              onExpandedChange={handleTreeExpandedChange}
              onSelectedChange={handleTreeSelectedChange}
            />
          </div>
        </FloatingPanelShell>
      </SelectablePanelPortal>
    );

    return (
      <ComboboxField
        rootRef={rootRef}
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
        triggerProps={buttonProps}
        buttonRef={setButtonRef}
        buttonId={buttonId}
        panelId={panelId}
        popupRole="tree"
        expanded={open}
        hasValue={hasValue}
        invalid={isInvalid}
        disabled={disabled}
        controls={open ? panelId : undefined}
        displayValue={displayValue}
        placeholderClassName="willa-tree-select-value--placeholder"
        triggerClassName="willa-tree-select-trigger"
        valueClassName="willa-tree-select-value"
        iconClassName="willa-tree-select-icon"
        hasClear={hasClear}
        clearClassName="willa-tree-select-clear"
        clearLabel="清空选择"
        triggerRef={triggerRef}
        hiddenName={name}
        hiddenValue={hiddenValue}
        onClear={clearValue}
        onTriggerBlur={onBlur}
        onTriggerClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) setOpen((currentOpen) => !currentOpen);
        }}
        onTriggerKeyDown={(event) =>
          handleTriggerKeyDown(event, {
            selector: treeSelectTreeSelector,
            onKeyDown,
          })
        }
      >
        {panel}
      </ComboboxField>
    );
  },
);

TreeSelect.displayName = "TreeSelect";

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

const mapTreeSelectItems = (
  items: Array<TreeSelectItem>,
  options: {
    leafOnly: boolean;
  },
): Array<TreeItem> => {
  return items.map((item) => {
    const hasChildren = Boolean(item.children?.length);

    return {
      key: item.value,
      title: item.label,
      description: item.description,
      disabled: item.disabled,
      selectable: options.leafOnly && hasChildren ? false : undefined,
      children: item.children?.length
        ? mapTreeSelectItems(item.children, options)
        : undefined,
    };
  });
};

const filterTreeSelectItems = (
  items: Array<TreeItem>,
  query: string,
): Array<TreeItem> => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return items;

  const walk = (currentItems: Array<TreeItem>): Array<TreeItem> => {
    return currentItems.flatMap((item) => {
      const matches =
        getTextValue(item.title).toLowerCase().includes(normalizedQuery) ||
        getTextValue(item.description).toLowerCase().includes(normalizedQuery);
      const childMatches = item.children?.length
        ? hasTreeSelectMatch(item.children, normalizedQuery)
        : false;

      if (!matches && !childMatches) return [];
      return [item];
    });
  };

  return walk(items);
};

const hasTreeSelectMatch = (items: Array<TreeItem>, query: string): boolean => {
  return items.some((item) => {
    return (
      getTextValue(item.title).toLowerCase().includes(query) ||
      getTextValue(item.description).toLowerCase().includes(query) ||
      hasTreeSelectMatch(item.children ?? [], query)
    );
  });
};

const collectExpandableTreeKeys = (items: Array<TreeItem>) => {
  const result: Array<string> = [];

  const walk = (currentItems: Array<TreeItem>) => {
    currentItems.forEach((item) => {
      if (item.children?.length) {
        result.push(String(item.key));
        walk(item.children);
      }
    });
  };

  walk(items);
  return result;
};

const buildTreeSelectItemMap = (items: Array<TreeSelectItem>) => {
  const map = new Map<string, TreeSelectItem>();

  const walk = (currentItems: Array<TreeSelectItem>) => {
    currentItems.forEach((item) => {
      map.set(item.value, item);
      if (item.children?.length) {
        walk(item.children);
      }
    });
  };

  walk(items);
  return map;
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
  return { ...style, width };
};

const buildTreeSelectPathMap = (items: Array<TreeSelectItem>) => {
  const pathMap = new Map<string, string>();

  const walk = (currentItems: Array<TreeSelectItem>, path: Array<string>) => {
    currentItems.forEach((item) => {
      const label = getTextValue(item.label) || item.value;
      const nextPath = [...path, label];

      pathMap.set(item.value, nextPath.join(" / "));

      if (item.children?.length) {
        walk(item.children, nextPath);
      }
    });
  };

  walk(items, []);
  return pathMap;
};

const formatTreeSelectPath = (
  items: Array<TreeSelectItem>,
  pathMap: Map<string, string>,
  mode: TreeSelectMode,
) => {
  if (items.length === 0) return "";

  const paths = items.map((item) => {
    return pathMap.get(item.value) ?? getTextValue(item.label) ?? item.value;
  });

  if (mode === "single") {
    return paths[0] ?? "";
  }

  return paths.join("，");
};
