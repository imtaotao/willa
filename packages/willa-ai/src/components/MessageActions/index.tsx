import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import classNames from "classnames";

export type MessageActionsSize = "sm" | "md";
export type MessageActionsVariant = "ghost" | "soft";
export type MessageActionTone = "neutral" | "positive" | "negative" | "danger";

export type MessageActionItem = {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  tone?: MessageActionTone;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type MessageActionsProps = {
  items?: MessageActionItem[];
  size?: MessageActionsSize;
  variant?: MessageActionsVariant;
  showLabels?: boolean;
  onAction?: (
    action: MessageActionItem,
    event: MouseEvent<HTMLButtonElement>,
  ) => void;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function MessageActions({
  items = [],
  size = "sm",
  variant = "ghost",
  showLabels = false,
  onAction,
  children,
  className,
  ...props
}: MessageActionsProps) {
  if (items.length === 0 && !children) {
    return null;
  }

  return (
    <div
      {...props}
      className={classNames(
        "willa-message-actions",
        `willa-message-actions--${size}`,
        `willa-message-actions--${variant}`,
        showLabels && "willa-message-actions--labels",
        className,
      )}
    >
      {items.map((item) => (
        <button
          key={item.id}
          className={classNames(
            "willa-message-action",
            `willa-message-action--${item.tone ?? "neutral"}`,
            item.active && "willa-message-action--active",
            item.loading && "willa-message-action--loading",
          )}
          type="button"
          disabled={item.disabled || item.loading}
          aria-label={resolveAriaLabel(item.label)}
          aria-pressed={item.active}
          title={resolveTitle(item.label)}
          onClick={(event) => {
            item.onClick?.(event);
            onAction?.(item, event);
          }}
        >
          {item.loading ? (
            <span className="willa-message-action-spinner" aria-hidden="true" />
          ) : item.icon ? (
            <span className="willa-message-action-icon" aria-hidden="true">
              {item.icon}
            </span>
          ) : null}
          <span className="willa-message-action-label">{item.label}</span>
        </button>
      ))}
      {children}
    </div>
  );
}

const resolveAriaLabel = (label: ReactNode) => {
  return typeof label === "string" ? label : undefined;
};

const resolveTitle = (label: ReactNode) => {
  return typeof label === "string" ? label : undefined;
};
