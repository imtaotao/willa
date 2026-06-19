import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type BadgeVariant = "soft" | "outline" | "solid";
export type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md";

export type BadgeProps = {
  variant?: BadgeVariant;
  tone?: BadgeTone;
  size?: BadgeSize;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function Badge(props: BadgeProps) {
  const {
    variant = "soft",
    tone = "neutral",
    size = "md",
    icon,
    trailingIcon,
    className,
    children,
    ...badgeProps
  } = props;

  return (
    <span
      {...badgeProps}
      className={classNames(
        "willa-badge",
        `willa-badge--${variant}`,
        `willa-badge--${tone}`,
        `willa-badge--${size}`,
        className,
      )}
    >
      {icon ? (
        <span className="willa-badge-icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children ? <span className="willa-badge-label">{children}</span> : null}
      {trailingIcon ? (
        <span className="willa-badge-icon" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
    </span>
  );
}

Badge.displayName = "Badge";
