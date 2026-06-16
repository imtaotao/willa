import { createElement, type ReactNode } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export {
  resolveMediaAsset,
  resolveMediaVolume,
  type MediaContextProps,
} from "@willa-ui/shared";

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
