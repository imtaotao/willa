import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ExternalLinkIcon,
  PauseIcon,
  PlayIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

import { resolveMediaVolume, type MediaContextProps } from "@willa-ui/shared";

import {
  MediaLinkExternalAction,
  type MediaEventHandlers,
  resolveMediaInline,
} from "#widgets/internal/media";

export type AudioLinkProps = MediaContextProps &
  MediaEventHandlers<HTMLAudioElement> & {
    href?: string;
    src?: string;
    volume?: number;
    children?: ReactNode;
    label?: string;
    provider?: string;
    className?: string;
  };

export function AudioLink(props: AudioLinkProps) {
  const {
    volume,
    className,
    onLoadStart,
    onProgress,
    onCanPlay,
    onLoadedMetadata,
    onTimeUpdate,
    onWaiting,
    onStalled,
    onPlay,
    onPause,
    onEnded,
    onError,
  } = props;
  const { content, normalizedHref, resolvedSrc } = resolveMediaInline({
    ...props,
    mediaLabel: "audio",
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(Boolean(resolvedSrc));
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    setIsPlaying(false);
    setIsReady(false);
    setIsLoading(Boolean(resolvedSrc));
    setLoadError(null);
  }, [resolvedSrc]);

  useEffect(() => {
    const resolvedVolume = resolveMediaVolume(volume);
    if (resolvedVolume !== undefined && audioRef.current) {
      audioRef.current.volume = resolvedVolume;
    }
  }, [volume, resolvedSrc]);

  if (!normalizedHref && !resolvedSrc) return null;

  if (!resolvedSrc) {
    return (
      <a
        className={classNames("willa-prose-audio-link", className)}
        href={normalizedHref}
        target="_blank"
        rel="noreferrer"
      >
        <SpeakerLoudIcon className="willa-prose-audio-link-icon" />
        {content}
        <ExternalLinkIcon className="willa-prose-media-link-external" />
      </a>
    );
  }
  const statusLabel = loadError
    ? "audio unavailable"
    : isLoading
      ? "loading"
      : !isReady
        ? "loading"
        : null;

  return (
    <span className={classNames("willa-prose-audio-link-wrap", className)}>
      <button
        type="button"
        className={classNames(
          "willa-prose-audio-link",
          "willa-prose-audio-link--player",
          isPlaying && "willa-prose-audio-link--playing",
          isLoading && "willa-prose-audio-link--loading",
          loadError && "willa-prose-audio-link--error",
        )}
        onClick={async () => {
          const audio = audioRef.current;
          if (!audio || loadError) return;

          if (audio.paused) {
            if (!isReady) {
              setIsLoading(true);
            }

            try {
              await audio.play();
            } catch {
              setIsPlaying(false);
              setIsLoading(false);
            }
            return;
          }

          audio.pause();
        }}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        aria-busy={isLoading}
        disabled={Boolean(loadError)}
        title={statusLabel ?? undefined}
      >
        <span
          className="willa-prose-audio-link-trigger"
          aria-hidden="true"
          data-state={isPlaying ? "playing" : "idle"}
        >
          <PlayIcon className="willa-prose-audio-link-icon willa-prose-audio-link-icon--trigger willa-prose-audio-link-icon--play" />
          <PauseIcon className="willa-prose-audio-link-icon willa-prose-audio-link-icon--trigger willa-prose-audio-link-icon--pause" />
        </span>
        {content}
        <span
          className="willa-prose-audio-link-status"
          data-visible={statusLabel ? "true" : "false"}
          aria-hidden={statusLabel ? undefined : true}
        >
          {statusLabel ?? ""}
        </span>
      </button>
      {normalizedHref ? (
        <MediaLinkExternalAction
          href={normalizedHref}
          mediaLabel="audio"
          className="willa-prose-audio-link-external-action"
        />
      ) : null}
      <audio
        ref={audioRef}
        className="willa-prose-audio-link-audio"
        preload="metadata"
        src={resolvedSrc}
        onLoadStart={(event) => {
          setIsLoading(true);
          setLoadError(null);
          onLoadStart?.(event);
        }}
        onProgress={onProgress}
        onCanPlay={(event) => {
          setIsReady(true);
          setIsLoading(false);
          onCanPlay?.(event);
        }}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onWaiting={(event) => {
          if (!isReady) {
            setIsLoading(true);
          }
          onWaiting?.(event);
        }}
        onStalled={(event) => {
          if (!isReady) {
            setIsLoading(true);
          }
          onStalled?.(event);
        }}
        onPlay={(event) => {
          setIsPlaying(true);
          setIsLoading(false);
          setLoadError(null);
          onPlay?.(event);
        }}
        onPause={(event) => {
          setIsPlaying(false);
          onPause?.(event);
        }}
        onEnded={(event) => {
          setIsPlaying(false);
          onEnded?.(event);
        }}
        onError={(event) => {
          setIsPlaying(false);
          setIsReady(false);
          setIsLoading(false);
          setLoadError("audio unavailable");
          onError?.(event);
        }}
      />
    </span>
  );
}

AudioLink.displayName = "AudioLink";
