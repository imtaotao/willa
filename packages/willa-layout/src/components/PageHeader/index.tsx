import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

import { HeaderBlock } from "#layout/internal/headerBlock";

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
          <HeaderBlock
            eyebrow={eyebrow}
            title={title}
            meta={meta}
            description={description}
            children={children}
            titleAs="h1"
            eyebrowClassName="willa-page-header-eyebrow"
            headingClassName="willa-page-header-heading"
            titleClassName="willa-page-header-title"
            metaClassName="willa-page-header-meta"
            descriptionClassName="willa-page-header-description"
            contentClassName="willa-page-header-content"
          />
        </div>
        {actions ? (
          <div className="willa-page-header-actions">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}

PageHeader.displayName = "PageHeader";
