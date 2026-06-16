import { clampNumber } from "#shared/number";
import type { ResolveAssetUrl } from "#shared/types";

export type MediaContextProps = {
  articleSourcePath?: string;
  resolveAssetUrl?: ResolveAssetUrl;
};

export function resolveMediaAsset(
  props: MediaContextProps,
  assetPath: string | undefined,
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
