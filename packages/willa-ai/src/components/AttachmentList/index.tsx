import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { Cross2Icon, DownloadIcon, FileTextIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type AttachmentListItemStatus = "ready" | "uploading" | "error";
export type AttachmentListSize = "sm" | "md";
export type AttachmentListLayout = "inline" | "stack";

export type AttachmentListItem = {
  id: string;
  name: string;
  meta?: ReactNode;
  href?: string;
  downloadName?: string;
  icon?: ReactNode;
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
  empty?: ReactNode;
  onOpen?: (event: AttachmentListItemEvent) => void;
  onRemove?: (item: AttachmentListItem) => void;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function AttachmentList({
  items,
  size = "sm",
  layout = "inline",
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
          onOpen={onOpen}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

const AttachmentListItemView = ({
  item,
  onOpen,
  onRemove,
}: {
  item: AttachmentListItem;
  onOpen?: (event: AttachmentListItemEvent) => void;
  onRemove?: (item: AttachmentListItem) => void;
}) => {
  const status = item.status ?? "ready";
  const entryClassName = classNames(
    "willa-attachment-list-entry",
    `willa-attachment-list-entry--${status}`,
    item.disabled && "willa-attachment-list-entry--disabled",
  );
  const content = (
    <>
      <span className="willa-attachment-list-icon" aria-hidden="true">
        {item.icon ?? <FileTextIcon />}
      </span>
      <span className="willa-attachment-list-content">
        <span className="willa-attachment-list-name" title={item.name}>
          {item.name}
        </span>
        {item.meta || status !== "ready" ? (
          <span className="willa-attachment-list-meta">
            {status !== "ready" ? attachmentStatusLabelMap[status] : item.meta}
          </span>
        ) : null}
        {status === "uploading" && typeof item.progress === "number" ? (
          <span className="willa-attachment-list-progress" aria-hidden="true">
            <span
              style={{
                inlineSize: `${Math.min(100, Math.max(0, item.progress))}%`,
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
      {item.href ? (
        <a
          className={itemClassName}
          href={item.disabled ? undefined : item.href}
          download={item.disabled ? undefined : (item.downloadName ?? true)}
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
