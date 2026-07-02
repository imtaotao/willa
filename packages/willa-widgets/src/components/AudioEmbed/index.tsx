import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
} from "react";
import {
  ExternalLinkIcon,
  PauseIcon,
  PlayIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

import {
  markMdxBlockComponent,
  resolveMediaVolume,
  type MediaContextProps,
} from "@willa-ui/shared";
import {
  getMediaBufferedPercent,
  type MediaEventHandlers,
} from "#widgets/internal/media";
import {
  MediaEmbedContent,
  resolveMediaEmbedAsset,
} from "#widgets/internal/mediaEmbed";

export type AudioEmbedProps = MediaContextProps &
  MediaEventHandlers<HTMLAudioElement> & {
    href?: string;
    title: string;
    src?: string;
    volume?: number;
    description?: string;
    duration?: string;
    provider?: string;
    className?: string;
  };

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainSeconds).padStart(2, "0")}`;
};

export function AudioEmbed(props: AudioEmbedProps) {
  const {
    href,
    title,
    description,
    duration,
    provider,
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
  const normalizedHref = href?.trim() ?? "";
  const normalizedTitle = title.trim();
  const resolvedSrc = resolveMediaEmbedAsset(props, props.src);
  const hasInlinePlayer = Boolean(resolvedSrc);
  const hasExternalLink = Boolean(normalizedHref);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isSeekingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(Boolean(hasInlinePlayer));
  const [isBuffering, setIsBuffering] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [bufferedPercent, setBufferedPercent] = useState(0);
  const progressValue = durationSeconds > 0 ? currentTime / durationSeconds : 0;
  const progressRatio = Math.min(Math.max(progressValue, 0), 1);
  const progressPercent = progressRatio * 100;
  const progressOffset = 0.45 - progressRatio * 0.9;

  const durationLabel = useMemo(() => {
    if (durationSeconds > 0) return formatTime(durationSeconds);
    return duration?.trim() || "0:00";
  }, [duration, durationSeconds]);

  const statusLabel = loadError
    ? loadError
    : isLoading && !isReady
      ? "loading audio"
      : isBuffering
        ? "buffering audio"
        : null;

  useEffect(() => {
    isSeekingRef.current = false;
    setIsPlaying(false);
    setIsReady(false);
    setIsLoading(Boolean(hasInlinePlayer));
    setIsBuffering(false);
    setLoadError(null);
    setCurrentTime(0);
    setDurationSeconds(0);
    setBufferedPercent(0);
  }, [hasInlinePlayer, resolvedSrc]);

  useEffect(() => {
    const resolvedVolume = resolveMediaVolume(volume);
    if (resolvedVolume !== undefined && audioRef.current) {
      audioRef.current.volume = resolvedVolume;
    }
  }, [volume, resolvedSrc]);

  if ((!hasExternalLink && !hasInlinePlayer) || !normalizedTitle) return null;

  const syncBufferedPercent = (audio: HTMLAudioElement) => {
    setBufferedPercent(getMediaBufferedPercent(audio));
  };

  const seekTo = (value: number) => {
    const audio = audioRef.current;
    const upperBound = durationSeconds || audio?.duration || 0;
    const nextTime =
      Number.isFinite(upperBound) && upperBound > 0
        ? Math.min(Math.max(value, 0), upperBound)
        : Math.max(value, 0);

    setCurrentTime(nextTime);

    if (audio) {
      audio.currentTime = nextTime;
      syncBufferedPercent(audio);
    }
  };

  const handleSeekInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    seekTo(Number(event.currentTarget.value));
  };

  const endSeeking = () => {
    isSeekingRef.current = false;
  };

  const content = (
    <MediaEmbedContent
      kind="audio"
      icon={<SpeakerLoudIcon />}
      provider={provider}
      title={normalizedTitle}
      description={description}
      duration={duration}
    />
  );

  if (!hasInlinePlayer) {
    return (
      <a
        className={classNames("willa-prose-audio-embed", className)}
        href={normalizedHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open external audio: ${normalizedTitle}`}
      >
        <span className="willa-prose-audio-embed-visual" aria-hidden="true">
          <span className="willa-prose-audio-embed-fallback">
            <SpeakerLoudIcon className="willa-prose-audio-embed-kind-icon" />
            <span className="willa-prose-audio-embed-wave" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          </span>
        </span>
        {content}
        <ExternalLinkIcon className="willa-prose-audio-embed-external" />
      </a>
    );
  }

  return (
    <article
      className={classNames(
        "willa-prose-audio-embed",
        "willa-prose-audio-embed--inline",
        className,
      )}
    >
      {content}
      {hasExternalLink ? (
        <a
          className="willa-prose-audio-embed-external-link"
          href={normalizedHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open external audio: ${normalizedTitle}`}
          title="Open external audio"
        >
          <ExternalLinkIcon className="willa-prose-audio-embed-external" />
        </a>
      ) : (
        <span className="willa-prose-audio-embed-external willa-prose-audio-embed-external--placeholder" />
      )}
      <div className="willa-prose-audio-embed-player-shell">
        <div className="willa-prose-audio-embed-player">
          <button
            type="button"
            className={classNames(
              "willa-prose-audio-embed-toggle",
              isPlaying && "willa-prose-audio-embed-toggle--playing",
              isLoading &&
                !isReady &&
                "willa-prose-audio-embed-toggle--loading",
              loadError && "willa-prose-audio-embed-toggle--error",
            )}
            onClick={async () => {
              const audio = audioRef.current;
              if (!audio || loadError) return;

              if (audio.paused) {
                setIsLoading(true);
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
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            disabled={Boolean(loadError)}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className="willa-prose-audio-embed-timeline">
            <div className="willa-prose-audio-embed-scrubber">
              <div
                className="willa-prose-audio-embed-progress"
                style={
                  {
                    ["--willa-audio-progress" as string]: `${progressPercent}%`,
                    ["--willa-audio-progress-position" as string]: `calc(${progressPercent}% + ${progressOffset}rem)`,
                    ["--willa-audio-buffered" as string]: `${bufferedPercent}%`,
                  } as CSSProperties
                }
              >
                <input
                  type="range"
                  min={0}
                  max={durationSeconds || 0}
                  step={0.1}
                  value={Math.min(currentTime, durationSeconds || currentTime)}
                  onPointerDown={(event) => {
                    isSeekingRef.current = true;
                    event.currentTarget.setPointerCapture(event.pointerId);
                  }}
                  onPointerUp={(event) => {
                    endSeeking();
                    if (
                      event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                      event.currentTarget.releasePointerCapture(
                        event.pointerId,
                      );
                    }
                  }}
                  onPointerCancel={(event) => {
                    endSeeking();
                    if (
                      event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                      event.currentTarget.releasePointerCapture(
                        event.pointerId,
                      );
                    }
                  }}
                  onBlur={endSeeking}
                  onInput={handleSeekInput}
                  onChange={handleSeekInput}
                  aria-label="Seek audio"
                  disabled={durationSeconds <= 0}
                />
              </div>
              <div className="willa-prose-audio-embed-time">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{durationLabel}</span>
              </div>
            </div>
            {statusLabel ? (
              <div className="willa-prose-audio-embed-meta">
                <span className="willa-prose-audio-embed-status">
                  {statusLabel}
                </span>
              </div>
            ) : null}
          </div>
          <audio
            ref={audioRef}
            className="willa-prose-audio-embed-native"
            preload="metadata"
            src={resolvedSrc}
            onLoadStart={(event) => {
              setIsLoading(true);
              setIsBuffering(false);
              setLoadError(null);
              onLoadStart?.(event);
            }}
            onProgress={(event) => {
              syncBufferedPercent(event.currentTarget);
              onProgress?.(event);
            }}
            onCanPlay={(event) => {
              setIsReady(true);
              setIsLoading(false);
              setIsBuffering(false);
              syncBufferedPercent(event.currentTarget);
              onCanPlay?.(event);
            }}
            onLoadedMetadata={(event) => {
              const nextDuration = event.currentTarget.duration;
              if (Number.isFinite(nextDuration)) {
                setDurationSeconds(nextDuration);
              }
              syncBufferedPercent(event.currentTarget);
              onLoadedMetadata?.(event);
            }}
            onTimeUpdate={(event) => {
              syncBufferedPercent(event.currentTarget);
              if (!isSeekingRef.current) {
                setCurrentTime(event.currentTarget.currentTime);
              }
              onTimeUpdate?.(event);
            }}
            onWaiting={(event) => {
              if (isReady) {
                setIsBuffering(true);
              } else {
                setIsLoading(true);
              }
              onWaiting?.(event);
            }}
            onStalled={(event) => {
              if (isReady) {
                setIsBuffering(true);
              } else {
                setIsLoading(true);
              }
              onStalled?.(event);
            }}
            onPlay={(event) => {
              setIsPlaying(true);
              setIsLoading(false);
              setIsBuffering(false);
              setLoadError(null);
              onPlay?.(event);
            }}
            onPause={(event) => {
              setIsPlaying(false);
              onPause?.(event);
            }}
            onError={(event) => {
              setIsPlaying(false);
              setIsReady(false);
              setIsLoading(false);
              setIsBuffering(false);
              setBufferedPercent(0);
              setLoadError("audio unavailable");
              onError?.(event);
            }}
            onEnded={(event) => {
              setIsPlaying(false);
              setCurrentTime(0);
              onEnded?.(event);
            }}
          />
        </div>
      </div>
    </article>
  );
}

markMdxBlockComponent(AudioEmbed);

AudioEmbed.displayName = "AudioEmbed";
