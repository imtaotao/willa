import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

import { HeaderBlock } from "#layout/internal/headerBlock";

export type SectionHeaderAlign = "start" | "center";
export type SectionHeaderSize = "sm" | "md";
export type SectionHeaderVariant = "default" | "centered-line";

export type SectionHeaderProps = Omit<
  ComponentPropsWithoutRef<"header">,
  "title"
> & {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  align?: SectionHeaderAlign;
  size?: SectionHeaderSize;
  variant?: SectionHeaderVariant;
  divided?: boolean;
};

export function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    description,
    eyebrow,
    meta,
    actions,
    align = "start",
    size = "md",
    variant = "default",
    divided = false,
    className,
    ...headerProps
  } = props;

  return (
    <header
      {...headerProps}
      className={classNames(
        "willa-section-header",
        `willa-section-header--${align}`,
        `willa-section-header--${size}`,
        `willa-section-header--${variant}`,
        divided && "willa-section-header--divided",
        className,
      )}
    >
      <div className="willa-section-header-main">
        <HeaderBlock
          eyebrow={eyebrow}
          title={title}
          meta={meta}
          description={description}
          titleAs="h2"
          eyebrowClassName="willa-section-header-eyebrow"
          headingClassName="willa-section-header-heading"
          titleClassName="willa-section-header-title"
          metaClassName="willa-section-header-meta"
          descriptionClassName="willa-section-header-description"
        />
      </div>
      {actions ? (
        <div className="willa-section-header-actions">{actions}</div>
      ) : null}
    </header>
  );
}

SectionHeader.displayName = "SectionHeader";
