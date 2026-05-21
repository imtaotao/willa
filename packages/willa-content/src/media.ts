import { createElement, type ReactNode } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import type { ResolveAssetUrl } from "@willa-ui/shared";

export type MediaContextProps = {
  articleSourcePath?: string;
  resolveAssetUrl?: ResolveAssetUrl;
};

export function resolveMediaAsset(
  props: MediaContextProps,
  assetPath: string | undefined,
) {
  if (!assetPath) return undefined;
  return props.resolveAssetUrl
    ? props.resolveAssetUrl(props.articleSourcePath ?? "", assetPath)
    : assetPath;
}

export function resolveMediaVolume(volume: number | undefined) {
  if (volume === undefined) return undefined;
  if (!Number.isFinite(volume)) return undefined;

  return Math.min(1, Math.max(0, volume));
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
