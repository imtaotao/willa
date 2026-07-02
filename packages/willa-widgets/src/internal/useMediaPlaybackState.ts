import { useCallback, useEffect, useMemo, useState } from "react";

import type { MediaEventHandlers } from "./media";

export type MediaPlaybackState =
  | "loading"
  | "ready"
  | "buffering"
  | "playing"
  | "paused"
  | "error";

export type UseMediaPlaybackStateOptions<T extends HTMLMediaElement> = {
  hasSource: boolean;
  initialLoading?: boolean;
  sourceKey?: string;
  errorLabel: string;
  loadingLabel: string;
  bufferingLabel: string;
  handlers?: MediaEventHandlers<T>;
};

export function useMediaPlaybackState<T extends HTMLMediaElement>({
  hasSource,
  initialLoading = true,
  sourceKey,
  errorLabel,
  loadingLabel,
  bufferingLabel,
  handlers,
}: UseMediaPlaybackStateOptions<T>) {
  const {
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
  } = handlers ?? {};
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(
    Boolean(hasSource && initialLoading),
  );
  const [isBuffering, setIsBuffering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const state: MediaPlaybackState = loadError
    ? "error"
    : isLoading && !isReady
      ? "loading"
      : isBuffering
        ? "buffering"
        : isPlaying
          ? "playing"
          : isReady
            ? hasPlayed
              ? "paused"
              : "ready"
            : "paused";
  const statusLabel = loadError
    ? loadError
    : state === "loading"
      ? loadingLabel
      : state === "buffering"
        ? bufferingLabel
        : null;
  const isBusy = state === "loading" || state === "buffering";

  useEffect(() => {
    setIsReady(false);
    setIsLoading(Boolean(hasSource && initialLoading));
    setIsBuffering(false);
    setIsPlaying(false);
    setHasPlayed(false);
    setLoadError(null);
  }, [hasSource, initialLoading, sourceKey]);

  const preparePlayback = useCallback(() => {
    if (!isReady) {
      setIsLoading(true);
    }
    setLoadError(null);
  }, [isReady]);

  const stopPlayback = useCallback(() => {
    setIsLoading(false);
    setIsPlaying(false);
    setIsBuffering(false);
  }, []);

  const mediaEventHandlers = useMemo<MediaEventHandlers<T>>(
    () => ({
      onLoadStart: (event) => {
        setIsLoading(true);
        setIsBuffering(false);
        setLoadError(null);
        onLoadStart?.(event);
      },
      onProgress,
      onCanPlay: (event) => {
        setIsReady(true);
        setIsLoading(false);
        setIsBuffering(false);
        onCanPlay?.(event);
      },
      onLoadedMetadata: (event) => {
        setLoadError(null);
        onLoadedMetadata?.(event);
      },
      onTimeUpdate: (event) => {
        if (isReady) {
          setIsBuffering(false);
        }
        onTimeUpdate?.(event);
      },
      onWaiting: (event) => {
        if (isReady) {
          setIsBuffering(true);
        } else {
          setIsLoading(true);
        }
        onWaiting?.(event);
      },
      onStalled: (event) => {
        if (isReady) {
          setIsBuffering(true);
        } else {
          setIsLoading(true);
        }
        onStalled?.(event);
      },
      onPlay: (event) => {
        setIsPlaying(true);
        setHasPlayed(true);
        setIsLoading(false);
        setIsBuffering(false);
        setLoadError(null);
        onPlay?.(event);
      },
      onPause: (event) => {
        setIsPlaying(false);
        onPause?.(event);
      },
      onEnded: (event) => {
        setIsPlaying(false);
        onEnded?.(event);
      },
      onError: (event) => {
        setIsPlaying(false);
        setIsReady(false);
        setIsLoading(false);
        setIsBuffering(false);
        setHasPlayed(false);
        setLoadError(errorLabel);
        onError?.(event);
      },
    }),
    [
      errorLabel,
      isReady,
      onCanPlay,
      onEnded,
      onError,
      onLoadStart,
      onLoadedMetadata,
      onPause,
      onPlay,
      onProgress,
      onStalled,
      onTimeUpdate,
      onWaiting,
    ],
  );

  return {
    isBusy,
    preparePlayback,
    state,
    statusLabel,
    stopPlayback,
    mediaEventHandlers,
  };
}
