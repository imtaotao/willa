import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  DownloadIcon,
  FileTextIcon,
  ImageIcon,
  SpeakerLoudIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

import { Button } from "#content/components/Button";
import { CodeBlock } from "#content/components/CodeBlock";

export type FilePreviewType =
  | "auto"
  | "image"
  | "video"
  | "audio"
  | "pdf"
  | "code"
  | "text"
  | "download";
export type FilePreviewSize = "sm" | "md" | "lg";

export type FilePreviewProps = {
  src: string;
  name: string;
  type?: FilePreviewType;
  mimeType?: string;
  size?: FilePreviewSize;
  meta?: ReactNode;
  text?: string;
  language?: string;
  showLineNumbers?: boolean;
  poster?: string;
  alt?: string;
  downloadName?: string;
  actions?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export function FilePreview(props: FilePreviewProps) {
  const {
    src,
    name,
    type = "auto",
    mimeType,
    size = "md",
    meta,
    text,
    language,
    showLineNumbers,
    poster,
    alt,
    downloadName,
    actions,
    className,
    ...sectionProps
  } = props;
  const resolvedType = resolvePreviewType({ name, type, mimeType });

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-file-preview",
        `willa-file-preview--${resolvedType}`,
        `willa-file-preview--${size}`,
        className,
      )}
    >
      <div className="willa-file-preview__header">
        <span className="willa-file-preview__icon" aria-hidden="true">
          {getPreviewIcon(resolvedType)}
        </span>
        <span className="willa-file-preview__heading">
          <span className="willa-file-preview__name" title={name}>
            {name}
          </span>
          {meta ? (
            <span className="willa-file-preview__meta">{meta}</span>
          ) : null}
        </span>
        <div className="willa-file-preview__actions">
          {actions}
          <Button
            href={src}
            variant="ghost"
            size="sm"
            icon={<DownloadIcon />}
            download={downloadName ?? true}
          >
            下载
          </Button>
        </div>
      </div>
      <div className="willa-file-preview__body">
        {renderPreviewBody({
          alt,
          language,
          name,
          poster,
          resolvedType,
          showLineNumbers,
          src,
          text,
        })}
      </div>
    </section>
  );
}

const renderPreviewBody = (options: {
  resolvedType: Exclude<FilePreviewType, "auto">;
  src: string;
  name: string;
  text?: string;
  language?: string;
  showLineNumbers?: boolean;
  poster?: string;
  alt?: string;
}) => {
  if (options.resolvedType === "image") {
    return (
      <img
        className="willa-file-preview__image"
        src={options.src}
        alt={options.alt ?? options.name}
      />
    );
  }

  if (options.resolvedType === "video") {
    return (
      <video
        className="willa-file-preview__media"
        src={options.src}
        poster={options.poster}
        controls
      />
    );
  }

  if (options.resolvedType === "audio") {
    return (
      <audio className="willa-file-preview__audio" src={options.src} controls />
    );
  }

  if (options.resolvedType === "pdf") {
    return (
      <iframe
        className="willa-file-preview__frame"
        src={options.src}
        title={options.name}
      />
    );
  }

  if (options.resolvedType === "text") {
    return (
      <pre className="willa-file-preview__text">
        <code>{options.text ?? "暂无可预览文本。"}</code>
      </pre>
    );
  }

  if (options.resolvedType === "code") {
    return (
      <CodeBlock
        className="willa-file-preview__code"
        code={options.text ?? ""}
        language={options.language ?? getCodeLanguage(options.name)}
        showLineNumbers={options.showLineNumbers}
      />
    );
  }

  return (
    <div className="willa-file-preview__download">
      <FileTextIcon />
      <strong>{options.name}</strong>
      <span>此文件类型不支持内联预览，可以直接下载查看。</span>
    </div>
  );
};

const resolvePreviewType = (options: {
  name: string;
  type: FilePreviewType;
  mimeType?: string;
}): Exclude<FilePreviewType, "auto"> => {
  if (options.type !== "auto") return options.type;

  const mimeType = options.mimeType?.toLowerCase() ?? "";
  const extension = getExtension(options.name);

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
  if (codeExtensions.has(extension)) {
    return "code";
  }
  if (mimeType.startsWith("text/") || textExtensions.has(extension)) {
    return "text";
  }

  return "download";
};

const getPreviewIcon = (type: Exclude<FilePreviewType, "auto">) => {
  if (type === "image") return <ImageIcon />;
  if (type === "video") return <VideoIcon />;
  if (type === "audio") return <SpeakerLoudIcon />;
  return <FileTextIcon />;
};

const getExtension = (name: string) => {
  return name.trim().toLowerCase().split(".").filter(Boolean).pop() ?? "";
};

const getCodeLanguage = (name: string) => {
  const extension = getExtension(name);
  return codeLanguageByExtension[extension] ?? extension;
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
const textExtensions = new Set(["csv", "log", "txt"]);

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
