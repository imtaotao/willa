import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { CopyButton } from "@willa-ui/content/components/CopyButton";
import { Spinner } from "@willa-ui/content/components/Spinner";
import classNames from "classnames";

export type MessageActionsSize = "sm" | "md";
export type MessageActionsVariant = "ghost" | "soft";
export type MessageActionTone = "neutral" | "positive" | "negative" | "danger";

export type MessageActionItem = {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  copiedIcon?: ReactNode;
  failedIcon?: ReactNode;
  copyText?: string;
  copiedClassName?: string;
  failedClassName?: string;
  copiedLabel?: ReactNode;
  failedLabel?: ReactNode;
  copiedDuration?: number;
  tone?: MessageActionTone;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onCopyText?: (text: string) => void;
};

export type MessageActionsProps = {
  items?: Array<MessageActionItem>;
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
      {items.map((item) =>
        item.copyText !== undefined && !item.loading ? (
          <CopyButton
            key={item.id}
            ariaLabel={resolveAriaLabel(item.label)}
            className={getMessageActionClassName(item)}
            copiedClassName={
              item.copiedClassName ?? "willa-message-action--active"
            }
            copiedDuration={item.copiedDuration}
            copiedIcon={item.copiedIcon}
            copiedLabel={item.copiedLabel}
            disabled={item.disabled}
            failedClassName={item.failedClassName}
            failedIcon={item.failedIcon}
            failedLabel={item.failedLabel}
            hideLabel={!showLabels && Boolean(item.icon)}
            icon={item.icon}
            onClick={(event) => {
              item.onClick?.(event);
              onAction?.(item, event);
            }}
            onCopyText={item.onCopyText}
            size={size}
            statusClassName="willa-message-action-status"
            text={item.copyText}
            title={resolveTitle(item.label)}
            type="button"
            variant={variant}
            aria-pressed={item.active}
          >
            {item.label}
          </CopyButton>
        ) : (
          <button
            key={item.id}
            className={getMessageActionClassName(item)}
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
              <Spinner
                className="willa-message-action-spinner"
                size="xs"
                label=""
                aria-hidden="true"
              />
            ) : item.icon ? (
              <span className="willa-message-action-icon" aria-hidden="true">
                {item.icon}
              </span>
            ) : null}
            <span className="willa-message-action-label">{item.label}</span>
          </button>
        ),
      )}
      {children}
    </div>
  );
}

const getMessageActionClassName = (item: MessageActionItem) => {
  return classNames(
    "willa-message-action",
    `willa-message-action--${item.tone ?? "neutral"}`,
    item.active && "willa-message-action--active",
    item.loading && "willa-message-action--loading",
  );
};

const resolveAriaLabel = (label: ReactNode) => {
  return typeof label === "string" ? label : undefined;
};

const resolveTitle = (label: ReactNode) => {
  return typeof label === "string" ? label : undefined;
};

MessageActions.displayName = "MessageActions";
