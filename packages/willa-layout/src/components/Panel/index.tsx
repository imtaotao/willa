import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import classNames from "classnames";

export type PanelVariant = "surface" | "soft" | "outline" | "plain";
export type PanelPadding = "none" | "sm" | "md" | "lg";

export type PanelProps = {
  as?: ElementType;
  variant?: PanelVariant;
  padding?: PanelPadding;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "title">;

export function Panel(props: PanelProps) {
  const {
    as: Component = "section",
    variant = "surface",
    padding = "md",
    title,
    description,
    actions,
    footer,
    className,
    children,
    ...panelProps
  } = props;
  const hasHeader = title || description || actions;

  return (
    <Component
      {...panelProps}
      className={classNames(
        "willa-panel",
        `willa-panel--${variant}`,
        `willa-panel--padding-${padding}`,
        className,
      )}
    >
      {hasHeader ? (
        <div className="willa-panel-header">
          <div className="willa-panel-heading">
            {title ? <h3 className="willa-panel-title">{title}</h3> : null}
            {description ? (
              <p className="willa-panel-description">{description}</p>
            ) : null}
          </div>
          {actions ? (
            <div className="willa-panel-actions">{actions}</div>
          ) : null}
        </div>
      ) : null}
      {children ? <div className="willa-panel-body">{children}</div> : null}
      {footer ? <div className="willa-panel-footer">{footer}</div> : null}
    </Component>
  );
}

Panel.displayName = "Panel";
