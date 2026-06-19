import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type PageHeaderAlign = "start" | "center";

export type PageHeaderProps = Omit<
  ComponentPropsWithoutRef<"header">,
  "title"
> & {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  breadcrumb?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  align?: PageHeaderAlign;
  divided?: boolean;
};

export function PageHeader(props: PageHeaderProps) {
  const {
    title,
    description,
    eyebrow,
    breadcrumb,
    meta,
    actions,
    children,
    align = "start",
    divided = true,
    className,
    ...headerProps
  } = props;

  return (
    <header
      {...headerProps}
      className={classNames(
        "willa-page-header",
        `willa-page-header--${align}`,
        divided && "willa-page-header--divided",
        className,
      )}
    >
      {breadcrumb ? (
        <div className="willa-page-header-breadcrumb">{breadcrumb}</div>
      ) : null}
      <div className="willa-page-header-row">
        <div className="willa-page-header-main">
          {eyebrow ? (
            <div className="willa-page-header-eyebrow">{eyebrow}</div>
          ) : null}
          <div className="willa-page-header-heading">
            <h1 className="willa-page-header-title">{title}</h1>
            {meta ? <div className="willa-page-header-meta">{meta}</div> : null}
          </div>
          {description ? (
            <p className="willa-page-header-description">{description}</p>
          ) : null}
          {children ? (
            <div className="willa-page-header-content">{children}</div>
          ) : null}
        </div>
        {actions ? (
          <div className="willa-page-header-actions">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}

PageHeader.displayName = "PageHeader";
