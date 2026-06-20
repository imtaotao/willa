export type FileItemKind = "image" | "audio" | "video" | "file";
export type FilePreviewMode = "dialog" | "link" | "download" | "none";
export type FilePreviewType =
  | "auto"
  | "image"
  | "video"
  | "audio"
  | "pdf"
  | "csv"
  | "code"
  | "text"
  | "download";
export type FileItemStatus = "ready" | "uploading" | "error";

export type ObjectFileItem = {
  id: string;
  file: File;
  url: string;
  kind: FileItemKind;
};

export type FilePreviewDialogOptions = {
  disabled?: boolean;
  href?: string;
  previewMode: FilePreviewMode;
  status?: FileItemStatus;
};

export type ResolveFilePreviewTypeOptions = {
  name: string;
  type: FilePreviewType;
  mimeType?: string;
};

export const createObjectFileItem = (file: File): ObjectFileItem => {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()
      .toString(36)
      .slice(2)}`,
    file,
    url: URL.createObjectURL(file),
    kind: resolveFileKind(file),
  };
};

export const resolveFileKind = (file: Pick<File, "type">): FileItemKind => {
  if (file.type.startsWith("image/")) {
    return "image";
  }

  if (file.type.startsWith("audio/")) {
    return "audio";
  }

  if (file.type.startsWith("video/")) {
    return "video";
  }

  return "file";
};

export const resolveFilePreviewType = (
  options: ResolveFilePreviewTypeOptions,
): Exclude<FilePreviewType, "auto"> => {
  if (options.type !== "auto") return options.type;

  const mimeType = options.mimeType?.toLowerCase() ?? "";
  const extension = getFileExtension(options.name);

  if (mimeType.startsWith("image/") || imageExtensions.has(extension)) {
    return "image";
  }

  if (mimeType.startsWith("video/") || videoExtensions.has(extension)) {
    return "video";
  }

  if (mimeType.startsWith("audio/") || audioExtensions.has(extension)) {
    return "audio";
  }

  if (mimeType === "application/pdf" || extension === "pdf") {
    return "pdf";
  }

  if (mimeType === "text/csv" || extension === "csv") {
    return "csv";
  }

  if (codeExtensions.has(extension)) {
    return "code";
  }

  if (mimeType.startsWith("text/") || textExtensions.has(extension)) {
    return "text";
  }

  return "download";
};

export const getFileExtension = (name: string) => {
  return name.trim().toLowerCase().split(".").filter(Boolean).pop() ?? "";
};

export const getFileCodeLanguage = (name: string) => {
  const extension = getFileExtension(name);

  return codeLanguageByExtension[extension] ?? extension;
};

export const resolveFileKindLabel = (kind: FileItemKind) => {
  if (kind === "image") {
    return "图片";
  }

  if (kind === "audio") {
    return "音频";
  }

  if (kind === "video") {
    return "视频";
  }

  return "文件";
};

export const formatFileSize = (size: number) => {
  if (size <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const unitIndex = Math.min(
    Math.floor(Math.log(size) / Math.log(1024)),
    units.length - 1,
  );
  const value = size / 1024 ** unitIndex;
  const fractionDigits = value >= 10 || unitIndex === 0 ? 0 : 1;

  return `${value.toFixed(fractionDigits)} ${units[unitIndex]}`;
};

export const normalizeFileProgress = (progress?: number) => {
  if (typeof progress !== "number" || Number.isNaN(progress)) {
    return undefined;
  }

  return Math.min(100, Math.max(0, progress));
};

export const resolveFilePreviewMode = (
  itemMode: FilePreviewMode | undefined,
  fallbackMode: FilePreviewMode,
) => itemMode ?? fallbackMode;

export const canOpenFilePreviewDialog = (options: FilePreviewDialogOptions) => {
  const { disabled, href, previewMode, status = "ready" } = options;

  return (
    previewMode === "dialog" && Boolean(href) && status === "ready" && !disabled
  );
};

const imageExtensions = new Set(["avif", "gif", "jpeg", "jpg", "png", "webp"]);
const videoExtensions = new Set(["mov", "mp4", "webm"]);
const audioExtensions = new Set(["aac", "flac", "m4a", "mp3", "ogg", "wav"]);
const codeExtensions = new Set([
  "bash",
  "c",
  "cpp",
  "css",
  "diff",
  "go",
  "html",
  "java",
  "js",
  "json",
  "jsx",
  "md",
  "py",
  "rs",
  "sh",
  "sql",
  "ts",
  "tsx",
  "xml",
  "yaml",
  "yml",
]);
const textExtensions = new Set(["log", "txt"]);

const codeLanguageByExtension: Record<string, string> = {
  bash: "bash",
  c: "c",
  cpp: "cpp",
  css: "css",
  diff: "diff",
  go: "go",
  html: "html",
  java: "java",
  js: "javascript",
  json: "json",
  jsx: "jsx",
  md: "markdown",
  py: "python",
  rs: "rust",
  sh: "bash",
  sql: "sql",
  ts: "typescript",
  tsx: "tsx",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
};
