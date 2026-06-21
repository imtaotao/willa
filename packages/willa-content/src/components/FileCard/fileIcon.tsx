import type { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export type FileCardTone =
  | "excel"
  | "word"
  | "pdf"
  | "ppt"
  | "image"
  | "audio"
  | "video"
  | "archive"
  | "code"
  | "text"
  | "neutral";

export type FileCardIconSize = "sm" | "md" | "lg";

export type FileCardIconProps = {
  name: string;
  extension?: string;
  tone?: FileCardTone;
  icon?: ReactNode;
  size?: FileCardIconSize;
  className?: string;
};

const extensionToneMap: Record<string, FileCardTone> = {
  aac: "audio",
  aiff: "audio",
  avi: "video",
  avif: "image",
  bmp: "image",
  csv: "excel",
  doc: "word",
  docx: "word",
  flac: "audio",
  gif: "image",
  gz: "archive",
  heic: "image",
  java: "code",
  jpeg: "image",
  jpg: "image",
  js: "code",
  json: "code",
  m4a: "audio",
  mkv: "video",
  md: "text",
  mov: "video",
  mp3: "audio",
  mp4: "video",
  ogg: "audio",
  pdf: "pdf",
  png: "image",
  ppt: "ppt",
  pptx: "ppt",
  py: "code",
  rar: "archive",
  svg: "image",
  ts: "code",
  tsx: "code",
  txt: "text",
  wav: "audio",
  webm: "video",
  webp: "image",
  xls: "excel",
  xlsx: "excel",
  zip: "archive",
};

const toneVariableMap: Record<
  FileCardTone,
  { background: string; text: string }
> = {
  audio: {
    background: "var(--willa-file-card-audio-bg)",
    text: "var(--willa-file-card-audio-text)",
  },
  archive: {
    background: "var(--willa-file-card-archive-bg)",
    text: "var(--willa-file-card-archive-text)",
  },
  code: {
    background: "var(--willa-file-card-code-bg)",
    text: "var(--willa-file-card-code-text)",
  },
  excel: {
    background: "var(--willa-file-card-excel-bg)",
    text: "var(--willa-file-card-excel-text)",
  },
  image: {
    background: "var(--willa-file-card-image-bg)",
    text: "var(--willa-file-card-image-text)",
  },
  neutral: {
    background: "var(--willa-file-card-neutral-bg)",
    text: "var(--willa-file-card-neutral-text)",
  },
  pdf: {
    background: "var(--willa-file-card-pdf-bg)",
    text: "var(--willa-file-card-pdf-text)",
  },
  ppt: {
    background: "var(--willa-file-card-ppt-bg)",
    text: "var(--willa-file-card-ppt-text)",
  },
  text: {
    background: "var(--willa-file-card-neutral-icon-bg)",
    text: "var(--willa-file-card-neutral-icon-text)",
  },
  video: {
    background: "var(--willa-file-card-video-bg)",
    text: "var(--willa-file-card-video-text)",
  },
  word: {
    background: "var(--willa-file-card-word-bg)",
    text: "var(--willa-file-card-word-text)",
  },
};

type FileCardIconStyle = CSSProperties & {
  "--willa-file-card-icon-bg": string;
  "--willa-file-card-icon-text": string;
};

export function FileCardIcon(props: FileCardIconProps) {
  const { size = "md" } = props;
  const fileExtension = normalizeFileExtension(props.extension ?? props.name, {
    preserveBareExtension: Boolean(props.extension),
  });
  const resolvedTone = resolveFileCardTone(props);
  const iconLabel = getIconLabel(fileExtension, resolvedTone);
  const toneVariables = toneVariableMap[resolvedTone];
  const iconStyle: FileCardIconStyle = {
    "--willa-file-card-icon-bg": toneVariables.background,
    "--willa-file-card-icon-text": toneVariables.text,
  };

  return (
    <span
      className={classNames(
        "willa-file-card-icon",
        `willa-file-card-icon--${size}`,
        `willa-file-card--${resolvedTone}`,
        iconLabel.length >= 4 && "willa-file-card-icon--wide-label",
        props.className,
      )}
      style={iconStyle}
      aria-hidden="true"
    >
      {props.icon ?? (
        <span className="willa-file-card-icon-label">{iconLabel}</span>
      )}
    </span>
  );
}

export function resolveFileCardTone(options: {
  name: string;
  extension?: string;
  tone?: FileCardTone;
}) {
  if (options.tone) return options.tone;

  const extension = normalizeFileExtension(options.extension ?? options.name, {
    preserveBareExtension: Boolean(options.extension),
  });
  return extensionToneMap[extension] ?? "neutral";
}

const normalizeFileExtension = (
  value: string,
  options: { preserveBareExtension?: boolean } = {},
) => {
  const normalizedValue = value.trim().toLowerCase();
  const parts = normalizedValue.split(".").filter(Boolean);

  if (normalizedValue.includes(".")) {
    const extension = parts[parts.length - 1]?.match(/^[a-z0-9]+/)?.[0];
    return extension ?? "";
  }
  if (options.preserveBareExtension) {
    return normalizedValue;
  }
  return extensionToneMap[normalizedValue] ? normalizedValue : "";
};

const extensionLabelMap: Record<string, string> = {
  javascript: "JS",
  jpeg: "JPG",
  markdown: "MD",
  typescript: "TS",
};

const toneLabelMap: Record<FileCardTone, string> = {
  archive: "ZIP",
  audio: "AUD",
  code: "CODE",
  excel: "XLS",
  image: "IMG",
  neutral: "FILE",
  pdf: "PDF",
  ppt: "PPT",
  text: "TXT",
  video: "VID",
  word: "DOC",
};

const getIconLabel = (extension: string, tone: FileCardTone) => {
  if (!extension) return toneLabelMap[tone];
  const normalizedLabel = extensionLabelMap[extension];
  if (normalizedLabel) return normalizedLabel;
  if (extension.length <= 4) return extension.toUpperCase();
  return toneLabelMap[tone];
};
