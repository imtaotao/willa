import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import {
  canOpenFilePreviewDialog,
  normalizeFileProgress,
  resolveFilePreviewMode,
  type FileItemStatus,
  type FilePreviewMode,
} from "@willa-ui/shared";
import classNames from "classnames";

import {
  FilePreviewDialog,
  type FilePreviewType,
} from "@willa-ui/content/components/FilePreview";
import { FileCardIcon } from "@willa-ui/content/components/FileCard";

export type AttachmentListItemStatus = FileItemStatus;
export type AttachmentListSize = "sm" | "md";
export type AttachmentListLayout = "inline" | "stack";
export type AttachmentListPreviewMode = FilePreviewMode;

export type AttachmentListItem = {
  id: string;
  name: string;
  meta?: ReactNode;
  href?: string;
  downloadName?: string;
  icon?: ReactNode;
  previewMode?: AttachmentListPreviewMode;
  previewType?: FilePreviewType;
  mimeType?: string;
  text?: string;
  language?: string;
  poster?: string;
  alt?: string;
  status?: AttachmentListItemStatus;
  progress?: number;
  actions?: ReactNode;
  disabled?: boolean;
};

export type AttachmentListItemEvent = {
  item: AttachmentListItem;
  event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>;
};

export type AttachmentListProps = {
  items: Array<AttachmentListItem>;
  size?: AttachmentListSize;
  layout?: AttachmentListLayout;
  previewMode?: AttachmentListPreviewMode;
  empty?: ReactNode;
  onOpen?: (event: AttachmentListItemEvent) => void;
  onRemove?: (item: AttachmentListItem) => void;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function AttachmentList({
  items,
  size = "sm",
  layout = "inline",
  previewMode = "dialog",
  empty,
  onOpen,
  onRemove,
  className,
  ...props
}: AttachmentListProps) {
  if (items.length === 0) {
    return empty ? (
      <div
        {...props}
        className={classNames(
          "willa-attachment-list",
          "willa-attachment-list--empty",
          `willa-attachment-list--${size}`,
          `willa-attachment-list--${layout}`,
          className,
        )}
      >
        {empty}
      </div>
    ) : null;
  }

  return (
    <div
      {...props}
      className={classNames(
        "willa-attachment-list",
        `willa-attachment-list--${size}`,
        `willa-attachment-list--${layout}`,
        className,
      )}
    >
      {items.map((item) => (
        <AttachmentListItemView
          key={item.id}
          item={item}
          previewMode={previewMode}
          onOpen={onOpen}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

const AttachmentListItemView = ({
  item,
  previewMode,
  onOpen,
  onRemove,
}: {
  item: AttachmentListItem;
  previewMode: AttachmentListPreviewMode;
  onOpen?: (event: AttachmentListItemEvent) => void;
  onRemove?: (item: AttachmentListItem) => void;
}) => {
  const status = item.status ?? "ready";
  const resolvedPreviewMode = resolveFilePreviewMode(
    item.previewMode,
    previewMode,
  );
  const canPreviewInDialog = canOpenFilePreviewDialog({
    disabled: item.disabled,
    href: item.href,
    previewMode: resolvedPreviewMode,
    status,
  });
  const normalizedProgress = normalizeFileProgress(item.progress);
  const entryClassName = classNames(
    "willa-attachment-list-entry",
    `willa-attachment-list-entry--${status}`,
    item.disabled && "willa-attachment-list-entry--disabled",
  );
  const content = (
    <>
      <FileCardIcon
        className="willa-attachment-list-icon"
        icon={item.icon}
        name={item.name}
        size="sm"
      />
      <span className="willa-attachment-list-content">
        <span className="willa-attachment-list-name" title={item.name}>
          {item.name}
        </span>
        {item.meta || status !== "ready" ? (
          <span className="willa-attachment-list-meta">
            {status !== "ready" ? attachmentStatusLabelMap[status] : item.meta}
          </span>
        ) : null}
        {status === "uploading" && typeof normalizedProgress === "number" ? (
          <span className="willa-attachment-list-progress" aria-hidden="true">
            <span
              style={{
                inlineSize: `${normalizedProgress}%`,
              }}
            />
          </span>
        ) : null}
      </span>
      {item.href ? (
        <span className="willa-attachment-list-download" aria-hidden="true">
          <DownloadIcon />
        </span>
      ) : null}
    </>
  );
  const itemClassName = classNames("willa-attachment-list-item");

  return (
    <span className={entryClassName}>
      {canPreviewInDialog ? (
        <FilePreviewDialog
          src={item.href ?? ""}
          name={item.name}
          type={item.previewType}
          mimeType={item.mimeType}
          meta={item.meta}
          text={item.text}
          language={item.language}
          poster={item.poster}
          alt={item.alt}
          downloadName={item.downloadName ?? item.name}
          trigger={
            <button
              className={itemClassName}
              type="button"
              onClick={(event) => onOpen?.({ item, event })}
            >
              {content}
            </button>
          }
        />
      ) : item.href && resolvedPreviewMode !== "none" ? (
        <a
          className={itemClassName}
          href={item.disabled ? undefined : item.href}
          download={
            item.disabled || resolvedPreviewMode === "link"
              ? undefined
              : (item.downloadName ?? true)
          }
          target={resolvedPreviewMode === "link" ? "_blank" : undefined}
          rel={resolvedPreviewMode === "link" ? "noreferrer" : undefined}
          aria-disabled={item.disabled || undefined}
          tabIndex={item.disabled ? -1 : undefined}
          onClick={(event) => {
            if (item.disabled) {
              event.preventDefault();
              return;
            }

            onOpen?.({ item, event });
          }}
        >
          {content}
        </a>
      ) : (
        <button
          className={itemClassName}
          type="button"
          disabled={item.disabled}
          onClick={(event) => onOpen?.({ item, event })}
        >
          {content}
        </button>
      )}
      <span className="willa-attachment-list-trailing">
        {item.actions ? (
          <span className="willa-attachment-list-actions">{item.actions}</span>
        ) : null}
        {onRemove ? (
          <button
            className="willa-attachment-list-remove"
            type="button"
            aria-label={`移除 ${item.name}`}
            onClick={() => onRemove(item)}
          >
            <Cross2Icon />
          </button>
        ) : null}
      </span>
    </span>
  );
};

const attachmentStatusLabelMap: Record<AttachmentListItemStatus, string> = {
  error: "上传失败",
  ready: "已连接",
  uploading: "上传中",
};

AttachmentList.displayName = "AttachmentList";
