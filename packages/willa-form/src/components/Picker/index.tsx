import {
  forwardRef,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ForwardedRef,
  type ReactNode,
} from "react";
import { CheckIcon } from "@radix-ui/react-icons";
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

const pickerOptionSelector = ".willa-picker-option";

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
    const [innerValue, setInnerValue] = useState<string | Array<string>>(
      defaultValue ?? (mode === "multiple" ? [] : ""),
    );
    const currentValue = value ?? innerValue;
    const selectedValues = normalizePickerValue(currentValue, mode);
    const selectedItems = items.filter((item) =>
      selectedValues.includes(item.value),
    );
    const pickerStyle = getPickerStyle({ width, style });
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
      contentVersion: items,
      fallbackHeight: 320,
      id,
      minWidth: 280,
      searchable,
    });
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
    const hasClear = clearable && hasValue && !disabled;
    const displayValue = hasValue
      ? (renderValue?.(selectedItems) ??
        selectedItems.map((item) => item.label).join("、"))
      : placeholder;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      triggerRef.current = node;
      assignForwardedRef(ref, node);
    };

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

    const panel = (
      <SelectablePanelPortal open={open}>
        <SelectablePanelShell
          panelRef={panelRef}
          id={panelId}
          className="willa-picker-panel"
          role="listbox"
          multiselectable={mode === "multiple"}
          labelledBy={buttonId}
          position={position}
          onKeyDown={(event) =>
            handleSelectablePanelKeyDown(event, {
              panel: panelRef.current,
              selector: pickerOptionSelector,
              onClose: closePanel,
              trigger: triggerRef.current,
            })
          }
        >
          {searchable ? (
            <SelectablePanelSearch
              className="willa-picker-search"
              inputRef={searchRef}
              value={query}
              placeholder={searchPlaceholder}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          ) : null}
          <SelectablePanelList
            listRef={listRef}
            className="willa-picker-list"
            scrollableClassName="willa-picker-list--scrollable"
            scrollable={scrollable}
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
          </SelectablePanelList>
        </SelectablePanelShell>
      </SelectablePanelPortal>
    );

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-picker",
          `willa-picker--${size}`,
          `willa-picker--${variant}`,
          open && "willa-picker--open",
          isInvalid && "willa-picker--invalid",
          hasClear && "willa-picker--has-clear",
          disabled && "willa-picker--disabled",
          className,
        )}
        style={pickerStyle}
      >
        <SelectablePanelTrigger
          {...buttonProps}
          buttonRef={setButtonRef}
          id={buttonId}
          triggerClassName="willa-picker-trigger"
          valueClassName="willa-picker-value"
          placeholderClassName="willa-picker-value--placeholder"
          iconClassName="willa-picker-icon"
          disabled={disabled}
          popupRole="listbox"
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
              selector: pickerOptionSelector,
              onKeyDown,
            })
          }
        />
        {hasClear ? (
          <SelectablePanelClearButton
            className="willa-picker-clear"
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
