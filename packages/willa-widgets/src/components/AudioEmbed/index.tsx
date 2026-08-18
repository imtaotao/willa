import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  ExternalLinkIcon,
  PauseIcon,
  PlayIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

import {
  clampMediaTime,
  createMediaSeekingController,
  formatMediaTime,
  getMediaBufferedPercent,
  getMediaDuration,
  markMdxBlockComponent,
  parseMediaTime,
  resolveMediaVolume,
  setMediaCurrentTime,
  type MediaContextProps,
  type MediaEventHandlers,
} from "@willa-ui/shared";
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

export type AudioEmbedHandle = {
  play: () => Promise<void>;
  pause: () => void;
};

type SeekInputEvent = {
  currentTarget: HTMLInputElement;
};

const registerSeekingEndListeners = (endSeeking: () => void) => {
  window.addEventListener("pointerup", endSeeking, true);
  window.addEventListener("pointercancel", endSeeking, true);
  window.addEventListener("blur", endSeeking, true);

  return () => {
    window.removeEventListener("pointerup", endSeeking, true);
    window.removeEventListener("pointercancel", endSeeking, true);
    window.removeEventListener("blur", endSeeking, true);
  };
};

export const AudioEmbed = forwardRef<AudioEmbedHandle, AudioEmbedProps>(
  function AudioEmbed(props, ref) {
    const {
      href,
      title,
      description,
      duration,
      provider,
      volume,
      className,
      onLoadStart,
      onLoadedData,
      onProgress,
      onCanPlay,
      onCanPlayThrough,
      onLoadedMetadata,
      onDurationChange,
      onSuspend,
      onAbort,
      onEmptied,
      onTimeUpdate,
      onWaiting,
      onStalled,
      onPlay,
      onPlaying,
      onPause,
      onEnded,
      onSeeking,
      onSeeked,
      onRateChange,
      onVolumeChange,
      onEncrypted,
      onError,
    } = props;
    const normalizedHref = href?.trim() ?? "";
    const normalizedTitle = title.trim();
    const resolvedSrc = resolveMediaEmbedAsset(props, props.src);
    const hasInlinePlayer = Boolean(resolvedSrc);
    const hasExternalLink = Boolean(normalizedHref);
    const fallbackDurationSeconds = useMemo(
      () => parseMediaTime(duration),
      [duration],
    );

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const loadErrorSourceRef = useRef<string | undefined>(undefined);
    const seekFrameRef = useRef<number | null>(null);
    const seekingController = useMemo(() => createMediaSeekingController(), []);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(Boolean(hasInlinePlayer));
    const [isBuffering, setIsBuffering] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationSeconds, setDurationSeconds] = useState(
      fallbackDurationSeconds,
    );
    const [bufferedPercent, setBufferedPercent] = useState(0);
    const progressValue =
      durationSeconds > 0 ? currentTime / durationSeconds : 0;
    const progressRatio = Math.min(Math.max(progressValue, 0), 1);
    const progressPercent = progressRatio * 100;
    const progressOffset = 0.45 - progressRatio * 0.9;
    const canSeek = durationSeconds > 0 && isReady && !loadError;

    const durationLabel = useMemo(() => {
      if (durationSeconds > 0) return formatMediaTime(durationSeconds);
      return duration?.trim() || "0:00";
    }, [duration, durationSeconds]);

    const statusLabel = loadError
      ? loadError
      : isLoading && !isReady
        ? "loading audio"
        : isBuffering
          ? "buffering audio"
          : null;
    const endSeeking = seekingController.end;
    const cancelScheduledSeek = () => {
      if (seekFrameRef.current === null) return;
      cancelAnimationFrame(seekFrameRef.current);
      seekFrameRef.current = null;
    };

    const playAudio = useCallback(async () => {
      const audio = audioRef.current;
      if (!audio) {
        throw new Error("AudioEmbed is not rendering an inline audio player");
      }
      if (loadError && loadErrorSourceRef.current === resolvedSrc) {
        throw new Error(loadError);
      }

      setIsLoading(true);
      try {
        await audio.play();
      } catch (error) {
        setIsPlaying(false);
        setIsLoading(false);
        setIsBuffering(false);
        throw error;
      }
    }, [loadError, resolvedSrc]);

    const pauseAudio = useCallback(() => {
      audioRef.current?.pause();
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        play: playAudio,
        pause: pauseAudio,
      }),
      [pauseAudio, playAudio],
    );

    useEffect(() => {
      endSeeking();
      cancelScheduledSeek();
      setIsPlaying(false);
      setIsReady(false);
      setIsLoading(Boolean(hasInlinePlayer));
      setIsBuffering(false);
      setLoadError(null);
      loadErrorSourceRef.current = undefined;
      setCurrentTime(0);
      setDurationSeconds(fallbackDurationSeconds);
      setBufferedPercent(0);
    }, [endSeeking, fallbackDurationSeconds, hasInlinePlayer, resolvedSrc]);

    useEffect(() => {
      const resolvedVolume = resolveMediaVolume(volume);
      if (resolvedVolume !== undefined && audioRef.current) {
        audioRef.current.volume = resolvedVolume;
      }
    }, [volume, resolvedSrc]);

    useEffect(
      () => () => {
        endSeeking();
        cancelScheduledSeek();
      },
      [endSeeking],
    );

    if ((!hasExternalLink && !hasInlinePlayer) || !normalizedTitle) return null;

    const syncBufferedPercent = (audio: HTMLAudioElement) => {
      setBufferedPercent(getMediaBufferedPercent(audio));
    };

    const syncDuration = (audio: HTMLAudioElement) => {
      const nextDuration = getMediaDuration(audio) || fallbackDurationSeconds;
      if (nextDuration > 0) {
        setDurationSeconds((currentDuration) =>
          currentDuration === nextDuration ? currentDuration : nextDuration,
        );
      }
      return nextDuration;
    };

    const commitMediaSeek = (audio: HTMLAudioElement, nextTime: number) => {
      if (setMediaCurrentTime(audio, nextTime)) {
        syncBufferedPercent(audio);
      } else {
        setCurrentTime(audio.currentTime);
      }
    };

    const seekTo = (value: number, commit = false) => {
      const audio = audioRef.current;
      const upperBound =
        durationSeconds ||
        (audio ? syncDuration(audio) : fallbackDurationSeconds);
      const nextTime = clampMediaTime(value, upperBound);

      if (!audio || !canSeek) return;

      setCurrentTime(nextTime);

      if (commit) {
        cancelScheduledSeek();
        commitMediaSeek(audio, nextTime);
        return;
      }

      cancelScheduledSeek();
      seekFrameRef.current = requestAnimationFrame(() => {
        seekFrameRef.current = null;
        commitMediaSeek(audio, nextTime);
      });
    };

    const handleSeekInput = (event: SeekInputEvent) => {
      seekTo(Number(event.currentTarget.value));
    };

    const handleSeekCommit = (event: SeekInputEvent) => {
      seekTo(Number(event.currentTarget.value), true);
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
                  try {
                    await playAudio();
                  } catch {
                    // State is restored by playAudio. The button cannot surface
                    // the rejected play promise to its caller.
                  }
                  return;
                }
                pauseAudio();
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
                    step="any"
                    value={Math.min(
                      currentTime,
                      durationSeconds || currentTime,
                    )}
                    onPointerDown={(event) => {
                      seekingController.begin(registerSeekingEndListeners);
                      event.currentTarget.setPointerCapture(event.pointerId);
                    }}
                    onPointerUp={(event) => {
                      handleSeekCommit(event);
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
                      handleSeekCommit(event);
                      endSeeking();
                      if (
                        event.currentTarget.hasPointerCapture(event.pointerId)
                      ) {
                        event.currentTarget.releasePointerCapture(
                          event.pointerId,
                        );
                      }
                    }}
                    onLostPointerCapture={(event) => {
                      handleSeekCommit(event);
                      endSeeking();
                    }}
                    onBlur={(event) => {
                      handleSeekCommit(event);
                      endSeeking();
                    }}
                    onKeyUp={handleSeekCommit}
                    onInput={handleSeekInput}
                    onChange={handleSeekInput}
                    aria-label="Seek audio"
                    disabled={!canSeek}
                  />
                </div>
                <div className="willa-prose-audio-embed-time">
                  <span>{formatMediaTime(currentTime)}</span>
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
              onLoadedData={onLoadedData}
              onProgress={(event) => {
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                onProgress?.(event);
              }}
              onCanPlay={(event) => {
                setIsReady(true);
                setIsLoading(false);
                setIsBuffering(false);
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                onCanPlay?.(event);
              }}
              onCanPlayThrough={onCanPlayThrough}
              onLoadedMetadata={(event) => {
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                onLoadedMetadata?.(event);
              }}
              onDurationChange={(event) => {
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                onDurationChange?.(event);
              }}
              onSuspend={onSuspend}
              onAbort={onAbort}
              onEmptied={(event) => {
                endSeeking();
                cancelScheduledSeek();
                setIsPlaying(false);
                setIsReady(false);
                setIsLoading(Boolean(hasInlinePlayer));
                setIsBuffering(false);
                setLoadError(null);
                setCurrentTime(0);
                setDurationSeconds(fallbackDurationSeconds);
                setBufferedPercent(0);
                onEmptied?.(event);
              }}
              onTimeUpdate={(event) => {
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                if (!seekingController.isSeeking()) {
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
                endSeeking();
                setIsPlaying(true);
                setIsReady(true);
                setIsLoading(false);
                setIsBuffering(false);
                setLoadError(null);
                syncDuration(event.currentTarget);
                onPlay?.(event);
              }}
              onPlaying={(event) => {
                setIsPlaying(true);
                setIsReady(true);
                setIsLoading(false);
                setIsBuffering(false);
                setLoadError(null);
                syncDuration(event.currentTarget);
                syncBufferedPercent(event.currentTarget);
                onPlaying?.(event);
              }}
              onPause={(event) => {
                endSeeking();
                setIsPlaying(false);
                onPause?.(event);
              }}
              onError={(event) => {
                endSeeking();
                setIsPlaying(false);
                setIsReady(false);
                setIsLoading(false);
                setIsBuffering(false);
                setBufferedPercent(0);
                setLoadError("audio unavailable");
                loadErrorSourceRef.current = resolvedSrc;
                onError?.(event);
              }}
              onEnded={(event) => {
                endSeeking();
                setIsPlaying(false);
                setCurrentTime(0);
                onEnded?.(event);
              }}
              onSeeking={onSeeking}
              onSeeked={onSeeked}
              onRateChange={onRateChange}
              onVolumeChange={onVolumeChange}
              onEncrypted={onEncrypted}
            />
          </div>
        </div>
      </article>
    );
  },
);

markMdxBlockComponent(AudioEmbed);

AudioEmbed.displayName = "AudioEmbed";
