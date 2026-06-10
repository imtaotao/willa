import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type EmptyStateVariant = "plain" | "soft" | "outline";
export type EmptyStateSize = "sm" | "md" | "lg";
export type EmptyStateAlign = "start" | "center";

export type EmptyStateProps = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  variant?: EmptyStateVariant;
  size?: EmptyStateSize;
  align?: EmptyStateAlign;
  compact?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "title">;

export function EmptyState(props: EmptyStateProps) {
  const {
    title,
    description,
    icon,
    actions,
    footer,
    variant = "soft",
    size = "md",
    align = "center",
    compact = false,
    className,
    children,
    ...sectionProps
  } = props;

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-empty-state",
        `willa-empty-state--${variant}`,
        `willa-empty-state--${size}`,
        `willa-empty-state--${align}`,
        compact && "willa-empty-state--compact",
        className,
      )}
    >
      {icon ? (
        <div className="willa-empty-state-icon" aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <div className="willa-empty-state-content">
        <h3 className="willa-empty-state-title">{title}</h3>
        {description ? (
          <p className="willa-empty-state-description">{description}</p>
        ) : null}
        {children ? (
          <div className="willa-empty-state-body">{children}</div>
        ) : null}
      </div>
      {actions ? (
        <div className="willa-empty-state-actions">{actions}</div>
      ) : null}
      {footer ? <div className="willa-empty-state-footer">{footer}</div> : null}
    </section>
  );
}
