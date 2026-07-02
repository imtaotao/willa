import type { CSSProperties } from "react";
import { ExternalLinkIcon, GlobeIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { markMdxBlockComponent } from "@willa-ui/shared";

export type WebEmbedProps = {
  src: string;
  href?: string;
  title: string;
  description?: string;
  provider?: string;
  height?: number | string;
  allow?: string;
  allowFullScreen?: boolean;
  className?: string;
};

const normalizeHeight = (height?: number | string) => {
  if (typeof height === "number" && Number.isFinite(height)) {
    return `${height}px`;
  }
  return String(height)?.trim() || "420px";
};

export function WebEmbed({
  src,
  href,
  title,
  description,
  provider,
  height,
  allow,
  allowFullScreen,
  className,
}: WebEmbedProps) {
  const normalizedSrc = src.trim();
  const normalizedHref = href?.trim() || normalizedSrc;
  const normalizedTitle = title.trim();

  if (!normalizedSrc || !normalizedTitle) return null;

  const frameHeight = normalizeHeight(height);

  return (
    <article className={classNames("willa-prose-web-embed", className)}>
      <div className="willa-prose-web-embed-header">
        <div className="willa-prose-web-embed-copy">
          <div className="willa-prose-web-embed-kicker">
            <GlobeIcon className="willa-prose-web-embed-icon" />
            <span>{provider ? `${provider} web` : "web embed"}</span>
          </div>
          {normalizedHref ? (
            <a
              className="willa-prose-web-embed-title willa-prose-web-embed-title-link"
              href={normalizedHref}
              target="_blank"
              rel="noreferrer"
            >
              {normalizedTitle}
            </a>
          ) : (
            <div className="willa-prose-web-embed-title">{normalizedTitle}</div>
          )}
          {description ? (
            <p className="willa-prose-web-embed-description">{description}</p>
          ) : null}
        </div>
        {normalizedHref ? (
          <a
            className="willa-prose-web-embed-external"
            href={normalizedHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open external site: ${normalizedTitle}`}
            title="Open external site"
          >
            <ExternalLinkIcon />
          </a>
        ) : null}
      </div>
      <div
        className="willa-prose-web-embed-frame-shell"
        style={{ "--willa-web-embed-height": frameHeight } as CSSProperties}
      >
        <iframe
          className="willa-prose-web-embed-frame"
          src={normalizedSrc}
          title={normalizedTitle}
          loading="lazy"
          allow={allow}
          allowFullScreen={allowFullScreen}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </article>
  );
}

markMdxBlockComponent(WebEmbed);

WebEmbed.displayName = "WebEmbed";
