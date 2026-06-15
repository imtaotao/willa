import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import { Button } from "#content/components/Button";
import { Group } from "@willa-ui/layout";

export type SelectionBarAlign = "start" | "between" | "end";

export type SelectionBarProps = {
  selectedCount: number;
  totalCount?: number;
  label?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  secondaryActions?: ReactNode;
  clearLabel?: ReactNode;
  selectAllLabel?: ReactNode;
  sticky?: boolean;
  compact?: boolean;
  align?: SelectionBarAlign;
  loading?: boolean;
  onClear?: () => void;
  onSelectAll?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function SelectionBar(props: SelectionBarProps) {
  const {
    selectedCount,
    totalCount,
    label,
    description,
    actions,
    secondaryActions,
    clearLabel = "取消选择",
    selectAllLabel = "选择全部",
    sticky = false,
    compact = false,
    align = "between",
    loading = false,
    onClear,
    onSelectAll,
    className,
    ...rootProps
  } = props;
  const hasActions = Boolean(
    actions || secondaryActions || onClear || onSelectAll,
  );

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-selection-bar",
        `willa-selection-bar--${align}`,
        sticky && "willa-selection-bar--sticky",
        compact && "willa-selection-bar--compact",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy={loading || undefined}
    >
      <div className="willa-selection-bar__summary">
        <span className="willa-selection-bar__count">{selectedCount}</span>
        <span className="willa-selection-bar__copy">
          <span className="willa-selection-bar__label">
            {label ?? renderDefaultLabel(selectedCount, totalCount)}
          </span>
          {description ? (
            <span className="willa-selection-bar__description">
              {description}
            </span>
          ) : null}
        </span>
      </div>

      {hasActions ? (
        <Group
          className="willa-selection-bar__actions"
          gap="xs"
          justify="end"
          wrap
        >
          {secondaryActions}
          {onSelectAll ? (
            <Button
              size="sm"
              variant="ghost"
              disabled={loading}
              onClick={onSelectAll}
            >
              {selectAllLabel}
            </Button>
          ) : null}
          {actions}
          {onClear ? (
            <Button
              size="sm"
              variant="ghost"
              disabled={loading}
              onClick={onClear}
            >
              {clearLabel}
            </Button>
          ) : null}
        </Group>
      ) : null}
    </div>
  );
}

const renderDefaultLabel = (selectedCount: number, totalCount?: number) => {
  if (totalCount === undefined) {
    return `已选择 ${selectedCount} 项`;
  }

  return `已选择 ${selectedCount} / ${totalCount} 项`;
};
