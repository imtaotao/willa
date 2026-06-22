import { cloneElement, type ReactElement } from "react";

import { resolveMediaAsset, type MediaContextProps } from "@willa-ui/shared";

export type MediaEmbedKind = "audio" | "video";

export type MediaEmbedContentProps = {
  kind: MediaEmbedKind;
  icon: ReactElement<{ className?: string }>;
  title: string;
  description?: string;
  duration?: string;
  provider?: string;
};

export function resolveMediaEmbedAsset(
  context: MediaContextProps,
  src?: string,
) {
  const normalizedSrc = src?.trim() ?? "";
  if (!normalizedSrc) return undefined;
  return resolveMediaAsset(context, normalizedSrc);
}

export function MediaEmbedContent(props: MediaEmbedContentProps) {
  const { kind, icon, title, description, duration, provider } = props;
  const label = provider ? `${provider} ${kind}` : kind;

  return (
    <span className={`willa-prose-${kind}-embed-content`}>
      <span className={`willa-prose-${kind}-embed-kicker`}>
        {cloneElement(icon, {
          className: `willa-prose-${kind}-embed-inline-icon ${
            icon.props.className ?? ""
          }`.trim(),
        })}
        <span>{label}</span>
        {duration ? (
          <span className={`willa-prose-${kind}-embed-duration`}>
            {duration}
          </span>
        ) : null}
      </span>
      <span className={`willa-prose-${kind}-embed-title`}>{title}</span>
      {description ? (
        <span className={`willa-prose-${kind}-embed-description`}>
          {description}
        </span>
      ) : null}
    </span>
  );
}
