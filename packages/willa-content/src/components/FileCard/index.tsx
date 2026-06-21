import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import {
  FileCardIcon,
  resolveFileCardTone,
  type FileCardTone,
} from "#content/components/FileCard/fileIcon";

export { FileCardIcon } from "#content/components/FileCard/fileIcon";
export type {
  FileCardIconProps,
  FileCardIconSize,
  FileCardTone,
} from "#content/components/FileCard/fileIcon";

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
          tone: resolveFileCardTone({ name, extension, tone }),
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
        tone: resolveFileCardTone({ name, extension, tone }),
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
  return (
    <>
      <FileCardIcon
        extension={options.extension}
        icon={options.icon}
        name={options.name}
        size="lg"
      />
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

FileCard.displayName = "FileCard";
