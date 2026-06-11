import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type SectionHeaderAlign = "start" | "center";
export type SectionHeaderSize = "sm" | "md";

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
        divided && "willa-section-header--divided",
        className,
      )}
    >
      <div className="willa-section-header-main">
        {eyebrow ? (
          <div className="willa-section-header-eyebrow">{eyebrow}</div>
        ) : null}
        <div className="willa-section-header-heading">
          <h2 className="willa-section-header-title">{title}</h2>
          {meta ? (
            <div className="willa-section-header-meta">{meta}</div>
          ) : null}
        </div>
        {description ? (
          <p className="willa-section-header-description">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="willa-section-header-actions">{actions}</div>
      ) : null}
    </header>
  );
}
