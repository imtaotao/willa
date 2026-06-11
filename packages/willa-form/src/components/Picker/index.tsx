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
import { CheckIcon, ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import { createPortal } from "react-dom";
import classNames from "classnames";

export type PickerSize = "sm" | "md" | "lg";
export type PickerVariant = "outline" | "soft";
export type PickerMode = "single" | "multiple";

export type PickerItem = {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  group?: ReactNode;
  disabled?: boolean;
};

type PickerPanelPosition = {
  left: number;
  top: number;
  width: number;
};

export type PickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  items: Array<PickerItem>;
  mode?: PickerMode;
  size?: PickerSize;
  variant?: PickerVariant;
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
  renderValue?: (items: Array<PickerItem>) => ReactNode;
  onValueChange?: (
    value: string | Array<string>,
    items: Array<PickerItem>,
  ) => void;
};

export const Picker = forwardRef<HTMLButtonElement, PickerProps>(
  (props, ref) => {
    const {
      items,
      mode = "single",
      size = "md",
      variant = "outline",
      width,
      invalid = false,
      searchable = false,
      clearable = false,
      placeholder = "请选择",
      searchPlaceholder = "搜索选项",
      emptyText = "暂无选项",
      name,
      value,
      defaultValue,
      renderValue,
      onValueChange,
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
      useState<PickerPanelPosition | null>(null);
    const [innerValue, setInnerValue] = useState<string | Array<string>>(
      defaultValue ?? (mode === "multiple" ? [] : ""),
    );
    const currentValue = value ?? innerValue;
    const selectedValues = normalizePickerValue(currentValue, mode);
    const selectedItems = items.filter((item) =>
      selectedValues.includes(item.value),
    );
    const pickerStyle = getPickerStyle({ width, style });
    const filteredItems = useMemo(
      () => filterPickerItems(items, query),
      [items, query],
    );
    const groupedItems = useMemo(
      () => groupPickerItems(filteredItems),
      [filteredItems],
    );
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
      const panelHeight = panelRef.current?.offsetHeight ?? 320;
      const maxWidth = window.innerWidth - viewportPadding * 2;
      const nextWidth = Math.min(Math.max(rect.width, 280), maxWidth);
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
    }, [open, query, groupedItems]);

    const commitValue = (item: PickerItem) => {
      if (item.disabled) return;

      const nextValues =
        mode === "multiple"
          ? togglePickerValue(selectedValues, item.value)
          : [item.value];
      const nextValue =
        mode === "multiple" ? nextValues : (nextValues[0] ?? "");
      const nextItems = items.filter((option) =>
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
              className="willa-picker-panel"
              role="listbox"
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
                <div className="willa-picker-search">
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
                  "willa-picker-list",
                  scrollable && "willa-picker-list--scrollable",
                )}
              >
                {groupedItems.length > 0 ? (
                  groupedItems.map((group) => (
                    <div className="willa-picker-group" key={group.key}>
                      {group.label ? (
                        <div className="willa-picker-group-label">
                          {group.label}
                        </div>
                      ) : null}
                      {group.items.map((item) => {
                        const selected = selectedValues.includes(item.value);

                        return (
                          <button
                            key={item.value}
                            type="button"
                            className={classNames(
                              "willa-picker-option",
                              selected && "willa-picker-option--selected",
                            )}
                            role="option"
                            aria-selected={selected}
                            disabled={item.disabled}
                            onClick={() => commitValue(item)}
                          >
                            <span className="willa-picker-option-main">
                              <span className="willa-picker-option-label">
                                {item.label}
                              </span>
                              {item.description ? (
                                <span className="willa-picker-option-description">
                                  {item.description}
                                </span>
                              ) : null}
                            </span>
                            <span
                              className="willa-picker-option-check"
                              aria-hidden="true"
                            >
                              {selected ? <CheckIcon /> : null}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  <div className="willa-picker-empty">{emptyText}</div>
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
          "willa-picker",
          `willa-picker--${size}`,
          `willa-picker--${variant}`,
          open && "willa-picker--open",
          isInvalid && "willa-picker--invalid",
          disabled && "willa-picker--disabled",
          className,
        )}
        style={pickerStyle}
      >
        <button
          {...buttonProps}
          ref={setButtonRef}
          id={buttonId}
          type="button"
          className="willa-picker-trigger"
          disabled={disabled}
          aria-haspopup="listbox"
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
              "willa-picker-value",
              !hasValue && "willa-picker-value--placeholder",
            )}
          >
            {displayValue}
          </span>
          {clearable && hasValue && !disabled ? (
            <span
              className="willa-picker-clear"
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
          <ChevronDownIcon className="willa-picker-icon" aria-hidden="true" />
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

Picker.displayName = "Picker";

const normalizePickerValue = (
  value: string | Array<string>,
  mode: PickerMode,
) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return mode === "multiple" ? value.split(",").filter(Boolean) : [value];
};

const togglePickerValue = (values: Array<string>, value: string) => {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }

  return [...values, value];
};

const filterPickerItems = (items: Array<PickerItem>, query: string) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return items;

  return items.filter((item) => {
    const labelText = getTextValue(item.label).toLowerCase();
    const descriptionText = getTextValue(item.description).toLowerCase();

    return (
      labelText.includes(normalizedQuery) ||
      descriptionText.includes(normalizedQuery)
    );
  });
};

const groupPickerItems = (items: Array<PickerItem>) => {
  const groups: Array<{
    key: string;
    label?: ReactNode;
    items: Array<PickerItem>;
  }> = [];

  items.forEach((item) => {
    const key = getTextValue(item.group) || "__default";
    const group = groups.find((entry) => entry.key === key);

    if (group) {
      group.items.push(item);
      return;
    }

    groups.push({
      key,
      label: item.group,
      items: [item],
    });
  });

  return groups;
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

const getPickerStyle = ({
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
