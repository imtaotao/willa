import { useEffect, useRef } from "react";
import { ExternalLinkIcon, PlayIcon, VideoIcon } from "@radix-ui/react-icons";

import {
  resolveMediaAsset,
  resolveMediaVolume,
  type MediaContextProps,
} from "#content/media";

export type VideoEmbedProps = MediaContextProps & {
  href?: string;
  title: string;
  src?: string;
  volume?: number;
  description?: string;
  duration?: string;
  poster?: string;
  provider?: string;
};

export function VideoEmbed({
  href,
  src,
  title,
  description,
  duration,
  volume,
  provider,
  poster,
  articleSourcePath,
  resolveAssetUrl,
}: VideoEmbedProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const normalizedHref = href?.trim() ?? "";
  const normalizedSrc = src?.trim() ?? "";
  const normalizedTitle = title.trim();
  const mediaContext = { articleSourcePath, resolveAssetUrl };
  const resolvedSrc = normalizedSrc
    ? resolveMediaAsset(mediaContext, normalizedSrc)
    : undefined;
  const resolvedPoster = resolveMediaAsset(mediaContext, poster);
  const hasInlinePlayer = Boolean(resolvedSrc);
  const hasExternalLink = Boolean(normalizedHref);

  useEffect(() => {
    const resolvedVolume = resolveMediaVolume(volume);
    if (resolvedVolume !== undefined && videoRef.current) {
      videoRef.current.volume = resolvedVolume;
    }
  }, [volume, resolvedSrc]);

  if ((!hasExternalLink && !hasInlinePlayer) || !normalizedTitle) return null;

  const content = (
    <span className="willa-prose-video-embed-content">
      <span className="willa-prose-video-embed-kicker">
        <VideoIcon className="willa-prose-video-embed-inline-icon" />
        <span>{provider ? `${provider} video` : "video"}</span>
        {duration ? (
          <span className="willa-prose-video-embed-duration">{duration}</span>
        ) : null}
      </span>
      <span className="willa-prose-video-embed-title">{normalizedTitle}</span>
      {description ? (
        <span className="willa-prose-video-embed-description">
          {description}
        </span>
      ) : null}
    </span>
  );

  if (!hasInlinePlayer) {
    return (
      <a
        className="willa-prose-video-embed"
        href={normalizedHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open external video: ${normalizedTitle}`}
      >
        <span className="willa-prose-video-embed-visual" aria-hidden="true">
          {resolvedPoster ? (
            <img
              src={resolvedPoster}
              alt=""
              className="willa-prose-video-embed-poster"
              loading="lazy"
            />
          ) : (
            <span className="willa-prose-video-embed-fallback">
              <VideoIcon className="willa-prose-video-embed-kind-icon" />
            </span>
          )}
          <span className="willa-prose-video-embed-play">
            <PlayIcon />
          </span>
        </span>
        {content}
        <ExternalLinkIcon className="willa-prose-video-embed-external" />
      </a>
    );
  }

  return (
    <article className="willa-prose-video-embed willa-prose-video-embed--inline">
      {content}
      {hasExternalLink ? (
        <a
          className="willa-prose-video-embed-external-link"
          href={normalizedHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open external video: ${normalizedTitle}`}
          title="Open external video"
        >
          <ExternalLinkIcon className="willa-prose-video-embed-external" />
        </a>
      ) : (
        <span className="willa-prose-video-embed-external willa-prose-video-embed-external--placeholder" />
      )}
      <div className="willa-prose-video-embed-player-shell">
        <video
          ref={videoRef}
          className="willa-prose-video-embed-player"
          controls
          preload="metadata"
          src={resolvedSrc}
        />
      </div>
    </article>
  );
}
