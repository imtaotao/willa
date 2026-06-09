import {
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type SuggestionChipsSize = "sm" | "md";
export type SuggestionChipsVariant = "soft" | "outline";

export type SuggestionChipItem = {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type SuggestionChipsProps = {
  items: Array<SuggestionChipItem>;
  size?: SuggestionChipsSize;
  variant?: SuggestionChipsVariant;
  selectedIds?: Array<string>;
  defaultSelectedIds?: Array<string>;
  multiple?: boolean;
  disabled?: boolean;
  onSelect?: (
    item: SuggestionChipItem,
    event: MouseEvent<HTMLButtonElement>,
  ) => void;
  onChange?: (
    selectedIds: Array<string>,
    item: SuggestionChipItem,
    event: MouseEvent<HTMLButtonElement>,
  ) => void;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "onSelect">;

export function SuggestionChips({
  items,
  size = "md",
  variant = "soft",
  selectedIds,
  defaultSelectedIds = [],
  multiple = false,
  disabled = false,
  onSelect,
  onChange,
  className,
  ...props
}: SuggestionChipsProps) {
  const [uncontrolledSelectedIds, setUncontrolledSelectedIds] =
    useState(defaultSelectedIds);
  const isControlled = selectedIds !== undefined;
  const currentSelectedIds = isControlled
    ? selectedIds
    : uncontrolledSelectedIds;

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      {...props}
      className={classNames(
        "willa-suggestion-chips",
        `willa-suggestion-chips--${size}`,
        `willa-suggestion-chips--${variant}`,
        disabled && "willa-suggestion-chips--disabled",
        className,
      )}
      role="list"
    >
      {items.map((item) => {
        const isSelected = currentSelectedIds.includes(item.id);
        const isDisabled = disabled || item.disabled;

        return (
          <span
            key={item.id}
            className="willa-suggestion-chip-item"
            role="listitem"
          >
            <button
              className={classNames(
                "willa-suggestion-chip",
                isSelected && "willa-suggestion-chip--selected",
              )}
              type="button"
              disabled={isDisabled}
              aria-pressed={isSelected}
              onClick={(event) => {
                const nextSelectedIds = getNextSelectedIds({
                  id: item.id,
                  multiple,
                  selectedIds: currentSelectedIds,
                });

                if (!isControlled) {
                  setUncontrolledSelectedIds(nextSelectedIds);
                }

                onSelect?.(item, event);
                onChange?.(nextSelectedIds, item, event);
              }}
            >
              {item.icon ? (
                <span className="willa-suggestion-chip-icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : null}
              <span className="willa-suggestion-chip-content">
                <span className="willa-suggestion-chip-label">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="willa-suggestion-chip-description">
                    {item.description}
                  </span>
                ) : null}
              </span>
            </button>
          </span>
        );
      })}
    </div>
  );
}

const getNextSelectedIds = (options: {
  id: string;
  multiple: boolean;
  selectedIds: Array<string>;
}) => {
  const { id, multiple, selectedIds } = options;

  if (multiple) {
    return selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
  }

  return selectedIds.includes(id) ? [] : [id];
};
