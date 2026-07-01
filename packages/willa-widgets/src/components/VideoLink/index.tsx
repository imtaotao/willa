import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExternalLinkIcon, PlayIcon, VideoIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { resolveMediaVolume, type MediaContextProps } from "@willa-ui/shared";

import {
  MediaLinkExternalAction,
  type MediaEventHandlers,
  resolveMediaInline,
} from "#widgets/internal/media";

export type VideoLinkProps = MediaContextProps &
  MediaEventHandlers<HTMLVideoElement> & {
    href?: string;
    src?: string;
    volume?: number;
    children?: ReactNode;
    label?: string;
    provider?: string;
    className?: string;
  };

export function VideoLink({
  href,
  src,
  children,
  label,
  volume,
  provider,
  className,
  articleSourcePath,
  resolveAssetUrl,
  onLoadStart,
  onCanPlay,
  onLoadedMetadata,
  onTimeUpdate,
  onPlay,
  onPause,
  onEnded,
  onError,
}: VideoLinkProps) {
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { content, normalizedHref, resolvedSrc } = resolveMediaInline({
    articleSourcePath,
    children,
    href,
    label,
    mediaLabel: "video",
    provider,
    resolveAssetUrl,
    src,
  });
  const [isOpen, setIsOpen] = useState(false);

  const closePlayer = () => {
    videoRef.current?.pause();
    setIsOpen(false);
  };

  const togglePlayer = () => {
    setIsOpen((open) => {
      if (open) {
        videoRef.current?.pause();
      }

      return !open;
    });
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (wrapRef.current?.contains(target)) {
        return;
      }

      closePlayer();
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closePlayer();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
        className={classNames("willa-prose-video-link", className)}
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
    <span
      ref={wrapRef}
      className={classNames("willa-prose-video-link-wrap", className)}
    >
      <button
        type="button"
        className={classNames(
          "willa-prose-video-link",
          "willa-prose-video-link--player",
          isOpen && "willa-prose-video-link--open",
        )}
        onClick={togglePlayer}
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
            onLoadStart={onLoadStart}
            onCanPlay={onCanPlay}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onEnded}
            onError={onError}
          />
        </span>
      ) : null}
    </span>
  );
}

VideoLink.displayName = "VideoLink";
