import { createElement, type ReactEventHandler, type ReactNode } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { resolveMediaAsset, type MediaContextProps } from "@willa-ui/shared";

export type MediaInlineOptions = MediaContextProps & {
  children?: ReactNode;
  href?: string;
  label?: string;
  mediaLabel: string;
  provider?: string;
  src?: string;
};

export type MediaEventHandlers<T extends HTMLMediaElement> = {
  onLoadStart?: ReactEventHandler<T>;
  onProgress?: ReactEventHandler<T>;
  onCanPlay?: ReactEventHandler<T>;
  onLoadedMetadata?: ReactEventHandler<T>;
  onTimeUpdate?: ReactEventHandler<T>;
  onWaiting?: ReactEventHandler<T>;
  onStalled?: ReactEventHandler<T>;
  onPlay?: ReactEventHandler<T>;
  onPause?: ReactEventHandler<T>;
  onEnded?: ReactEventHandler<T>;
  onError?: ReactEventHandler<T>;
};

export function getMediaBufferedPercent(media: HTMLMediaElement) {
  const { buffered, duration } = media;
  if (!Number.isFinite(duration) || duration <= 0 || buffered.length === 0) {
    return 0;
  }

  let bufferedEnd = 0;
  const currentTime = media.currentTime;

  for (let index = 0; index < buffered.length; index += 1) {
    const start = buffered.start(index);
    const end = buffered.end(index);

    if (currentTime >= start && currentTime <= end) {
      bufferedEnd = end;
      break;
    }

    bufferedEnd = Math.max(bufferedEnd, end);
  }

  return Math.min(100, Math.max(0, (bufferedEnd / duration) * 100));
}

export function resolveMediaInline(options: MediaInlineOptions) {
  const normalizedHref = options.href?.trim() ?? "";
  const normalizedSrc = options.src?.trim() ?? "";
  const resolvedSrc = normalizedSrc
    ? resolveMediaAsset(options, normalizedSrc)
    : undefined;
  const content = renderMediaLinkContent(
    options.children,
    options.provider,
    options.mediaLabel,
    options.label?.trim(),
    normalizedHref,
  );

  return {
    content,
    normalizedHref,
    resolvedSrc,
  };
}

export function renderMediaLinkContent(
  children: ReactNode,
  provider: string | undefined,
  mediaLabel: string,
  label: string | undefined,
  href: string,
) {
  return (
    children ??
    createElement(
      "span",
      { className: "willa-prose-media-link-content" },
      createElement(
        "span",
        { className: "willa-prose-media-link-kicker" },
        provider ? `${provider} ${mediaLabel}` : mediaLabel,
      ),
      createElement(
        "span",
        { className: "willa-prose-media-link-title" },
        label || href,
      ),
    )
  );
}

export function MediaLinkExternalAction({
  href,
  mediaLabel,
  className,
}: {
  href: string;
  mediaLabel: string;
  className: string;
}) {
  return createElement(
    "a",
    {
      className,
      href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Open external ${mediaLabel}`,
    },
    createElement(ExternalLinkIcon, {
      className: "willa-prose-media-link-external",
    }),
  );
}
