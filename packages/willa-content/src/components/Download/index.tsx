import type { AnchorHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { DownloadIcon } from "@radix-ui/react-icons";

import { FileCardIcon } from "#content/components/FileCard";

export type DownloadVariant = "chip" | "button" | "plain";
export type DownloadSize = "sm" | "md";

type DownloadBaseProps = {
  href: string;
  name: ReactNode;
  meta?: ReactNode;
  variant?: DownloadVariant;
  size?: DownloadSize;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  downloadName?: string;
  disabled?: boolean;
  className?: string;
};

export type DownloadProps = DownloadBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof DownloadBaseProps | "children" | "download" | "href"
  >;

export function Download(props: DownloadProps) {
  const {
    href,
    name,
    meta,
    variant = "chip",
    size = "sm",
    icon,
    trailingIcon = <DownloadIcon />,
    downloadName,
    disabled = false,
    className,
    target,
    rel,
    onClick,
    ...anchorProps
  } = props;
  const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;
  const iconName =
    downloadName ?? href ?? (typeof name === "string" ? name : "");

  return (
    <a
      {...anchorProps}
      className={classNames(
        "willa-download",
        `willa-download--${variant}`,
        `willa-download--${size}`,
        disabled && "willa-download--disabled",
        className,
      )}
      href={disabled ? undefined : href}
      download={disabled ? undefined : (downloadName ?? true)}
      target={target}
      rel={resolvedRel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : anchorProps.tabIndex}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
    >
      {icon !== null ? (
        <FileCardIcon
          className="willa-download-icon"
          icon={icon}
          name={iconName}
          size={size}
        />
      ) : null}
      <span className="willa-download-content">
        <span className="willa-download-name">{name}</span>
        {meta ? <span className="willa-download-meta">{meta}</span> : null}
      </span>
      {trailingIcon ? (
        <span className="willa-download-action" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
    </a>
  );
}

Download.displayName = "Download";
