import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type CitationTone = "neutral" | "info" | "success" | "warning";
export type CitationSize = "xs" | "sm" | "md" | "lg";

export type CitationProps = {
  label?: ReactNode;
  source?: ReactNode;
  index?: ReactNode;
  status?: ReactNode;
  href?: string;
  target?: string;
  tone?: CitationTone;
  size?: CitationSize;
  selected?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onOpen?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
} & Omit<ComponentPropsWithoutRef<"span">, "children" | "onClick" | "title">;

const hasContent = (value: ReactNode) => {
  if (typeof value === "string") return value.trim().length > 0;
  return value !== undefined && value !== null && value !== false;
};

const resolveHrefLabel = (href?: string) => {
  if (!href) return undefined;
  try {
    const url = new URL(href);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};

export function Citation({
  label,
  source,
  index,
  status,
  href,
  target,
  tone = "neutral",
  size = "md",
  selected = false,
  icon,
  children,
  onOpen,
  className,
  ...props
}: CitationProps) {
  const displayLabel = hasContent(label) ? label : resolveHrefLabel(href);
  const hasDetail = hasContent(children);

  if (!hasContent(displayLabel) && !hasDetail) return null;

  const content = (
    <>
      <span className="willa-citation-mark" aria-hidden="true">
        {icon ?? index ?? "C"}
      </span>
      <span className="willa-citation-body">
        {hasContent(displayLabel) || hasContent(source) ? (
          <span className="willa-citation-main">
            {hasContent(displayLabel) ? (
              <span className="willa-citation-label">{displayLabel}</span>
            ) : null}
            {hasContent(source) ? (
              <span className="willa-citation-source">{source}</span>
            ) : null}
          </span>
        ) : null}
        {hasDetail ? (
          <span className="willa-citation-detail">{children}</span>
        ) : null}
      </span>
      {hasContent(status) ? (
        <span className="willa-citation-status">{status}</span>
      ) : null}
      {href ? (
        <span className="willa-citation-link-icon" aria-hidden="true">
          <ExternalLinkIcon />
        </span>
      ) : null}
    </>
  );

  const rootClassName = classNames(
    "willa-citation",
    `willa-citation--${tone}`,
    `willa-citation--${size}`,
    selected && "willa-citation--selected",
    hasDetail && "willa-citation--with-detail",
    (href || onOpen) && "willa-citation--interactive",
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
    <span {...props} className={rootClassName}>
      {content}
    </span>
  );
}
