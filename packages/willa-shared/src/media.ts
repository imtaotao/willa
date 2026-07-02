import { clampNumber } from "#shared/number";
import type { ResolveAssetUrl } from "#shared/types";

export type MediaContextProps = {
  articleSourcePath?: string;
  resolveAssetUrl?: ResolveAssetUrl;
};

export type MediaSeekingListenerRegistrar = (
  endSeeking: () => void,
) => (() => void) | null;

export function createMediaSeekingController() {
  let isSeeking = false;
  let removeEndListeners: (() => void) | null = null;

  const end = () => {
    isSeeking = false;
    removeEndListeners?.();
    removeEndListeners = null;
  };

  const begin = (
    registerEndListeners: MediaSeekingListenerRegistrar | null = null,
  ) => {
    isSeeking = true;
    if (removeEndListeners || !registerEndListeners) return;
    removeEndListeners = registerEndListeners(end);
  };

  return {
    begin,
    end,
    isSeeking: () => isSeeking,
  };
}

export function resolveMediaAsset(
  props: MediaContextProps,
  assetPath?: string,
) {
  if (!assetPath) return undefined;
  return props.resolveAssetUrl
    ? props.resolveAssetUrl(props.articleSourcePath ?? "", assetPath)
    : assetPath;
}

export function resolveMediaVolume(volume?: number) {
  if (volume === undefined) return undefined;
  if (!Number.isFinite(volume)) return undefined;
  return clampNumber(volume, 0, 1);
}

export function formatMediaTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainSeconds = totalSeconds % 60;
  return `${minutes}:${String(remainSeconds).padStart(2, "0")}`;
}

export function getMediaDuration(media: HTMLMediaElement | null) {
  if (!media || !Number.isFinite(media.duration) || media.duration <= 0) {
    return 0;
  }
  return media.duration;
}

export function clampMediaTime(value: number, duration: number) {
  const safeValue = Number.isFinite(value) ? value : 0;
  if (!Number.isFinite(duration) || duration <= 0) {
    return Math.max(safeValue, 0);
  }
  return clampNumber(safeValue, 0, duration);
}

export function getMediaBufferedPercent(media: HTMLMediaElement) {
  const duration = getMediaDuration(media);
  if (duration <= 0 || media.buffered.length === 0) return 0;

  let bufferedEnd = 0;
  const { currentTime } = media;

  for (let index = 0; index < media.buffered.length; index += 1) {
    const start = media.buffered.start(index);
    const end = media.buffered.end(index);

    if (currentTime >= start && currentTime <= end) {
      bufferedEnd = end;
      break;
    }

    bufferedEnd = Math.max(bufferedEnd, end);
  }

  return clampNumber((bufferedEnd / duration) * 100, 0, 100);
}
