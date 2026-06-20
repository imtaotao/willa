import type { ReactNode } from "react";

import { renderMediaLinkContent } from "@willa-ui/content/media";
import { resolveMediaAsset, type MediaContextProps } from "@willa-ui/shared";

export type MediaInlineOptions = MediaContextProps & {
  children?: ReactNode;
  href?: string;
  label?: string;
  mediaLabel: string;
  provider?: string;
  src?: string;
};

export const resolveMediaInline = (options: MediaInlineOptions) => {
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
};
