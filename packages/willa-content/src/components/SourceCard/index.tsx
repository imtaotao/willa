import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import classNames from "classnames";

export type SourceCardSize = "sm" | "md";
export type SourceCardVariant = "default" | "solid";

export type SourceCardProps = {
  title: ReactNode;
  description?: ReactNode;
  source?: ReactNode;
  url?: string;
  meta?: ReactNode;
  icon?: ReactNode;
  index?: ReactNode;
  href?: string;
  target?: string;
  selected?: boolean;
  size?: SourceCardSize;
  variant?: SourceCardVariant;
  onOpen?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
} & Omit<ComponentPropsWithoutRef<"article">, "children" | "title" | "onClick">;

export function SourceCard({
  title,
  description,
  source,
  url,
  meta,
  icon,
  index,
  href,
  target,
  selected = false,
  size = "md",
  variant = "default",
  onOpen,
  className,
  ...props
}: SourceCardProps) {
  const content = (
    <>
      <span className="willa-source-card-mark" aria-hidden="true">
        {icon ?? index ?? "S"}
      </span>
      <span className="willa-source-card-body">
        <span className="willa-source-card-header">
          <span className="willa-source-card-title">{title}</span>
          {meta ? <span className="willa-source-card-meta">{meta}</span> : null}
        </span>
        {description ? (
          <span className="willa-source-card-description">{description}</span>
        ) : null}
        {source || url ? (
          <span className="willa-source-card-footer">
            {source ? (
              <span className="willa-source-card-source">{source}</span>
            ) : null}
            {url ? <span className="willa-source-card-url">{url}</span> : null}
          </span>
        ) : null}
      </span>
    </>
  );
  const rootClassName = classNames(
    "willa-source-card",
    `willa-source-card--${size}`,
    `willa-source-card--${variant}`,
    selected && "willa-source-card--selected",
    (href || onOpen) && "willa-source-card--interactive",
    className,
  );

  if (href) {
    return (
      <a
        {...props}
        className={rootClassName}
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        onClick={onOpen}
      >
        {content}
      </a>
    );
  }

  if (onOpen) {
    return (
      <button
        {...props}
        className={rootClassName}
        type="button"
        onClick={onOpen}
      >
        {content}
      </button>
    );
  }

  return (
    <article {...props} className={rootClassName}>
      {content}
    </article>
  );
}

SourceCard.displayName = "SourceCard";
