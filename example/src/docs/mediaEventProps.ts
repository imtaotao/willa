import type { PropRow } from "#example/catalog/types";

const mediaEventDefinitions = [
  ["onLoadStart", "开始加载"],
  ["onLoadedData", "首帧数据加载完成"],
  ["onLoadedMetadata", "元数据加载完成"],
  ["onDurationChange", "时长变化"],
  ["onCanPlay", "可以开始播放"],
  ["onCanPlayThrough", "预计可以连续播放至结束"],
  ["onSuspend", "浏览器暂停获取媒体数据"],
  ["onAbort", "媒体加载中止"],
  ["onEmptied", "媒体资源变为空"],
  ["onPlay", "开始播放"],
  ["onPlaying", "从暂停或缓冲状态恢复播放"],
  ["onPause", "暂停"],
  ["onEnded", "播放结束"],
  ["onTimeUpdate", "播放进度变化"],
  ["onProgress", "加载缓冲进度变化"],
  ["onSeeking", "开始跳转播放位置"],
  ["onSeeked", "完成播放位置跳转"],
  ["onRateChange", "播放速率变化"],
  ["onVolumeChange", "音量或静音状态变化"],
  ["onEncrypted", "检测到加密媒体数据"],
  ["onWaiting", "等待更多数据"],
  ["onStalled", "获取媒体数据停滞"],
  ["onError", "加载或播放失败"],
] as const;

export function createMediaEventProps(kind: "audio" | "video"): Array<PropRow> {
  const mediaLabel = kind === "audio" ? "音频" : "视频";
  const elementType =
    kind === "audio" ? "HTMLAudioElement" : "HTMLVideoElement";

  return mediaEventDefinitions.map(([name, description]) => ({
    name,
    type: `ReactEventHandler<${elementType}>`,
    group: "媒体事件",
    description: `内联${mediaLabel}${description}时触发；仅在传入 src 时生效。`,
  }));
}
