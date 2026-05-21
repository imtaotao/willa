import type { ReactNode } from "react";
import { Link2Icon } from "@radix-ui/react-icons";

export type UrlLinkProps = {
  href: string;
  label?: string;
  children?: ReactNode;
};

const resolveUrlLabel = (href: string) => {
  try {
    const url = new URL(href);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};

export function UrlLink({ href, label, children }: UrlLinkProps) {
  const normalizedHref = href.trim();

  if (!normalizedHref) return null;

  const displayLabel =
    (typeof children === "string" && children.trim()) ||
    label?.trim() ||
    resolveUrlLabel(normalizedHref);

  return (
    <a
      className="willa-prose-url-link"
      href={normalizedHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open external site: ${displayLabel}`}
    >
      <Link2Icon className="willa-prose-url-link-icon" />
      <span className="willa-prose-url-link-name">{displayLabel}</span>
    </a>
  );
}
