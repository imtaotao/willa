import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type FileCardTone =
  | "excel"
  | "word"
  | "pdf"
  | "ppt"
  | "archive"
  | "code"
  | "text"
  | "neutral";

type FileCardBaseProps = {
  name: string;
  size?: ReactNode;
  extension?: string;
  tone?: FileCardTone;
  icon?: ReactNode;
  className?: string;
};

type FileCardAnchorProps = FileCardBaseProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof FileCardBaseProps | "href"
  >;

type FileCardDivProps = FileCardBaseProps & {
  href?: undefined;
} & Omit<HTMLAttributes<HTMLDivElement>, keyof FileCardBaseProps>;

export type FileCardProps = FileCardAnchorProps | FileCardDivProps;

const extensionToneMap: Record<string, FileCardTone> = {
  csv: "excel",
  doc: "word",
  docx: "word",
  gz: "archive",
  java: "code",
  js: "code",
  json: "code",
  md: "text",
  pdf: "pdf",
  ppt: "ppt",
  pptx: "ppt",
  py: "code",
  rar: "archive",
  ts: "code",
  tsx: "code",
  txt: "text",
  xls: "excel",
  xlsx: "excel",
  zip: "archive",
};

export function FileCard(props: FileCardProps) {
  if (isFileCardAnchorProps(props)) {
    const {
      name,
      size,
      extension,
      tone,
      icon,
      className,
      href,
      target,
      rel,
      ...anchorProps
    } = props;
    const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;

    return (
      <a
        {...anchorProps}
        className={getFileCardClassName({
          className,
          interactive: true,
          tone: resolveTone({ name, extension, tone }),
        })}
        href={href}
        target={target}
        rel={resolvedRel}
      >
        {renderFileCardContent({ name, size, extension, icon })}
      </a>
    );
  }

  const { name, size, extension, tone, icon, className, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={getFileCardClassName({
        className,
        interactive: false,
        tone: resolveTone({ name, extension, tone }),
      })}
    >
      {renderFileCardContent({ name, size, extension, icon })}
    </div>
  );
}

const isFileCardAnchorProps = (
  props: FileCardProps,
): props is FileCardAnchorProps => {
  return typeof props.href === "string";
};

const getFileCardClassName = (options: {
  tone: FileCardTone;
  interactive: boolean;
  className?: string;
}) => {
  return classNames(
    "willa-file-card",
    `willa-file-card--${options.tone}`,
    options.interactive && "willa-file-card--interactive",
    options.className,
  );
};

const renderFileCardContent = (options: {
  name: string;
  size?: ReactNode;
  extension?: string;
  icon?: ReactNode;
}) => {
  const fileExtension = normalizeExtension(options.extension ?? options.name);

  return (
    <>
      <span className="willa-file-card-icon" aria-hidden="true">
        {options.icon ?? (
          <span className="willa-file-card-icon-label">
            {getIconLabel(fileExtension)}
          </span>
        )}
      </span>
      <span className="willa-file-card-content">
        <span className="willa-file-card-name" title={options.name}>
          {options.name}
        </span>
        {options.size ? (
          <span className="willa-file-card-meta">{options.size}</span>
        ) : null}
      </span>
    </>
  );
};

const resolveTone = (options: {
  name: string;
  extension?: string;
  tone?: FileCardTone;
}) => {
  if (options.tone) return options.tone;

  const extension = normalizeExtension(options.extension ?? options.name);
  return extensionToneMap[extension] ?? "neutral";
};

const normalizeExtension = (value: string) => {
  const normalizedValue = value.trim().toLowerCase();
  const parts = normalizedValue.split(".").filter(Boolean);
  const extension = normalizedValue.includes(".")
    ? parts[parts.length - 1]
    : normalizedValue;

  return extension ?? "";
};

const getIconLabel = (extension: string) => {
  if (!extension) return "FILE";
  if (extension === "javascript") return "JS";
  if (extension === "typescript") return "TS";
  return extension.slice(0, 4).toUpperCase();
};
