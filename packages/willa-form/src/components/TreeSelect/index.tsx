import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ForwardedRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { createPortal } from "react-dom";
import classNames from "classnames";

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

type TreeSelectPanelPosition = {
  left: number;
  top: number;
  width: number;
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
    const generatedId = useId();
    const buttonId = id ?? generatedId;
    const panelId = `${buttonId}-panel`;
    const rootRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [scrollable, setScrollable] = useState(false);
    const [panelPosition, setPanelPosition] =
      useState<TreeSelectPanelPosition | null>(null);
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
    const displayValue = hasValue
      ? (renderValue?.(selectedItems) ??
        selectedItems.map((item) => item.label).join("、"))
      : placeholder;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      assignForwardedRef(ref, node);
    };

    const updatePanelPosition = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const viewportPadding = 8;
      const gap = 6;
      const panelHeight = panelRef.current?.offsetHeight ?? 340;
      const maxWidth = window.innerWidth - viewportPadding * 2;
      const nextWidth = Math.min(Math.max(rect.width, 300), maxWidth);
      const left = clamp(
        rect.left,
        viewportPadding,
        window.innerWidth - viewportPadding - nextWidth,
      );
      const belowTop = rect.bottom + gap;
      const aboveTop = rect.top - gap - panelHeight;
      const hasBottomSpace =
        window.innerHeight - rect.bottom - viewportPadding >= panelHeight;
      const top = hasBottomSpace
        ? belowTop
        : Math.max(viewportPadding, aboveTop);

      setPanelPosition({ left, top, width: nextWidth });
    };

    useEffect(() => {
      if (!open) return;

      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node;

        if (
          !rootRef.current?.contains(target) &&
          !panelRef.current?.contains(target)
        ) {
          setOpen(false);
        }
      };
      const handleViewportChange = () => {
        updatePanelPosition();
      };

      updatePanelPosition();
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("resize", handleViewportChange);
      window.addEventListener("scroll", handleViewportChange, true);

      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("resize", handleViewportChange);
        window.removeEventListener("scroll", handleViewportChange, true);
      };
    }, [open]);

    useEffect(() => {
      if (open) {
        updatePanelPosition();
        updateListScrollableState(listRef.current, setScrollable);
        if (searchable) {
          window.setTimeout(() => searchRef.current?.focus(), 0);
        }
      } else {
        setPanelPosition(null);
        setQuery("");
        setScrollable(false);
      }
    }, [open, searchable, items]);

    useEffect(() => {
      if (!open) return;

      updateListScrollableState(listRef.current, setScrollable);
    }, [open, query, visibleItems]);

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

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen((currentOpen) => !currentOpen);
      }
    };

    const panel =
      open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              id={panelId}
              className="willa-tree-select-panel"
              role="tree"
              aria-multiselectable={mode === "multiple" ? true : undefined}
              aria-labelledby={buttonId}
              style={
                panelPosition
                  ? {
                      left: panelPosition.left,
                      top: panelPosition.top,
                      width: panelPosition.width,
                    }
                  : { left: 0, top: 0, visibility: "hidden" }
              }
            >
              {searchable ? (
                <div className="willa-tree-select-search">
                  <input
                    ref={searchRef}
                    value={query}
                    placeholder={searchPlaceholder}
                    onChange={(event) => setQuery(event.currentTarget.value)}
                  />
                </div>
              ) : null}
              <div
                ref={listRef}
                className={classNames(
                  "willa-tree-select-list",
                  scrollable && "willa-tree-select-list--scrollable",
                )}
              >
                {visibleItems.length > 0 ? (
                  visibleItems.map(({ item, level, hasChildren }) => {
                    const selected = selectedValues.includes(item.value);
                    const expanded =
                      query.trim() !== "" ||
                      expandedValues.includes(item.value);

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
                                expanded &&
                                  "willa-tree-select-expand-icon--open",
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
              </div>
            </div>,
            document.body,
          )
        : null;

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-tree-select",
          `willa-tree-select--${size}`,
          `willa-tree-select--${variant}`,
          open && "willa-tree-select--open",
          isInvalid && "willa-tree-select--invalid",
          disabled && "willa-tree-select--disabled",
          className,
        )}
        style={treeSelectStyle}
      >
        <button
          {...buttonProps}
          ref={setButtonRef}
          id={buttonId}
          type="button"
          className="willa-tree-select-trigger"
          disabled={disabled}
          aria-haspopup="tree"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          aria-invalid={isInvalid || undefined}
          onBlur={onBlur}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) setOpen((currentOpen) => !currentOpen);
          }}
          onKeyDown={handleKeyDown}
        >
          <span
            className={classNames(
              "willa-tree-select-value",
              !hasValue && "willa-tree-select-value--placeholder",
            )}
          >
            {displayValue}
          </span>
          {clearable && hasValue && !disabled ? (
            <span
              className="willa-tree-select-clear"
              role="button"
              tabIndex={-1}
              aria-label="清空选择"
              onClick={(event) => {
                event.stopPropagation();
                clearValue();
              }}
            >
              <Cross2Icon />
            </span>
          ) : null}
          <ChevronDownIcon
            className="willa-tree-select-icon"
            aria-hidden="true"
          />
        </button>
        {name ? (
          <input
            type="hidden"
            name={name}
            value={selectedValues.join(",")}
            readOnly
          />
        ) : null}
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

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const updateListScrollableState = (
  list: HTMLDivElement | null,
  setScrollable: (scrollable: boolean) => void,
) => {
  if (!list) {
    setScrollable(false);
    return;
  }

  window.requestAnimationFrame(() => {
    setScrollable(list.scrollHeight > list.clientHeight + 1);
  });
};
