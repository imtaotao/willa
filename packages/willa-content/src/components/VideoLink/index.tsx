import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExternalLinkIcon, PlayIcon, VideoIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import {
  MediaLinkExternalAction,
  resolveMediaAsset,
  resolveMediaVolume,
  renderMediaLinkContent,
  type MediaContextProps,
} from "#content/media";

export type VideoLinkProps = MediaContextProps & {
  href?: string;
  src?: string;
  volume?: number;
  children?: ReactNode;
  label?: string;
  provider?: string;
};

export function VideoLink({
  href,
  src,
  children,
  label,
  volume,
  provider,
  articleSourcePath,
  resolveAssetUrl,
}: VideoLinkProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const normalizedHref = href?.trim() ?? "";
  const normalizedSrc = src?.trim() ?? "";
  const resolvedSrc = normalizedSrc
    ? resolveMediaAsset({ articleSourcePath, resolveAssetUrl }, normalizedSrc)
    : undefined;
  const content = renderMediaLinkContent(
    children,
    provider,
    "video",
    label?.trim(),
    normalizedHref,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const resolvedVolume = resolveMediaVolume(volume);
    if (resolvedVolume !== undefined && videoRef.current) {
      videoRef.current.volume = resolvedVolume;
    }
  }, [volume, resolvedSrc, isOpen]);

  if (!normalizedHref && !resolvedSrc) return null;

  if (!resolvedSrc) {
    return (
      <a
        className="willa-prose-video-link"
        href={normalizedHref}
        target="_blank"
        rel="noreferrer"
      >
        <VideoIcon className="willa-prose-video-link-icon" />
        {content}
        <ExternalLinkIcon className="willa-prose-media-link-external" />
      </a>
    );
  }

  return (
    <span className="willa-prose-video-link-wrap">
      <button
        type="button"
        className={classNames(
          "willa-prose-video-link",
          "willa-prose-video-link--player",
          isOpen && "willa-prose-video-link--open",
        )}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Hide video player" : "Show video player"}
      >
        <VideoIcon className="willa-prose-video-link-icon" />
        {content}
        <PlayIcon className="willa-prose-video-link-icon willa-prose-video-link-icon--trigger" />
      </button>
      {normalizedHref ? (
        <MediaLinkExternalAction
          href={normalizedHref}
          mediaLabel="video"
          className="willa-prose-video-link-external-action"
        />
      ) : null}
      {isOpen ? (
        <span className="willa-prose-video-link-popover">
          <video
            ref={videoRef}
            className="willa-prose-video-link-player"
            controls
            preload="metadata"
            src={resolvedSrc}
          />
        </span>
      ) : null}
    </span>
  );
}
