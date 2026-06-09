import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type CitationTone = "neutral" | "info" | "success" | "warning";
export type CitationSize = "sm" | "md";

export type CitationProps = {
  label: ReactNode;
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
  const content = (
    <>
      <span className="willa-citation-mark" aria-hidden="true">
        {icon ?? index ?? "C"}
      </span>
      <span className="willa-citation-body">
        <span className="willa-citation-main">
          <span className="willa-citation-label">{label}</span>
          {source ? (
            <span className="willa-citation-source">{source}</span>
          ) : null}
        </span>
        {children ? (
          <span className="willa-citation-detail">{children}</span>
        ) : null}
      </span>
      {status ? <span className="willa-citation-status">{status}</span> : null}
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
