import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type DragEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { Cross2Icon, FileTextIcon, UploadIcon } from "@radix-ui/react-icons";
import {
  createObjectFileItem,
  formatFileSize,
  normalizeFileProgress,
  resolveFileKindLabel,
  type FileItemKind,
  type FilePreviewMode,
  type ObjectFileItem,
} from "@willa-ui/shared";
import { isPromiseLike } from "aidly";

import { Download } from "@willa-ui/content/components/Download";
import { FilePreviewDialog } from "@willa-ui/content/components/FilePreview";

export type UploadFileKind = FileItemKind;
export type UploadSize = "sm" | "md";
export type UploadPreviewMode = FilePreviewMode;

export type UploadItem = ObjectFileItem;

export type UploadHandler = (
  files: Array<UploadItem>,
  allFiles: Array<UploadItem>,
  reportProgress: (progress: number) => void,
) => void | Promise<void>;

export type UploadStatusHandler = (
  files: Array<UploadItem>,
  allFiles: Array<UploadItem>,
) => void;

export type UploadErrorHandler = (
  error: unknown,
  files: Array<UploadItem>,
  allFiles: Array<UploadItem>,
) => void;

type UploadBaseProps = {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  loading?: boolean;
  progress?: number;
  maxFiles?: number;
  label?: ReactNode;
  description?: ReactNode;
  actionLabel?: ReactNode;
  loadingLabel?: ReactNode;
  emptyLabel?: ReactNode;
  size?: UploadSize;
  onUpload?: UploadHandler;
  onUploadStart?: UploadStatusHandler;
  onUploadComplete?: UploadStatusHandler;
  onUploadError?: UploadErrorHandler;
  onFilesChange?: (files: Array<UploadItem>) => void;
  onPreview?: (file: UploadItem) => void;
  onFileRemove?: (file: UploadItem) => void;
  previewMode?: UploadPreviewMode;
  className?: string;
};

export type UploadProps = UploadBaseProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof UploadBaseProps | "onChange">;

export function Upload({
  accept,
  multiple = false,
  disabled = false,
  loading,
  progress,
  maxFiles,
  label = "上传文件",
  description = "点击选择文件，或拖拽文件到这里。",
  actionLabel = "选择文件",
  loadingLabel = "上传中",
  emptyLabel = "暂无文件",
  size = "md",
  onUpload,
  onUploadStart,
  onUploadComplete,
  onUploadError,
  onFilesChange,
  onPreview,
  onFileRemove,
  previewMode = "dialog",
  className,
  ...props
}: UploadProps) {
  const inputId = useId();
  const itemsRef = useRef<Array<UploadItem>>([]);
  const [items, setItems] = useState<Array<UploadItem>>([]);
  const [dragging, setDragging] = useState(false);
  const [pendingUploads, setPendingUploads] = useState(0);
  const [internalProgress, setInternalProgress] = useState<
    number | undefined
  >();
  const isUploading = loading ?? pendingUploads > 0;
  const resolvedProgress = normalizeFileProgress(progress ?? internalProgress);
  const isDisabled = disabled || isUploading;

  const commitItems = (nextItems: Array<UploadItem>) => {
    const nextIds = new Set(nextItems.map((item) => item.id));

    itemsRef.current.forEach((item) => {
      if (!nextIds.has(item.id)) {
        URL.revokeObjectURL(item.url);
      }
    });

    itemsRef.current = nextItems;
    setItems(nextItems);
    onFilesChange?.(nextItems);
  };

  const addFiles = (fileList: FileList | Array<File>) => {
    if (isDisabled) {
      return;
    }

    const selectedItems = Array.from(fileList).map(createObjectFileItem);
    const candidateItems = multiple
      ? [...itemsRef.current, ...selectedItems]
      : selectedItems.slice(0, 1);
    const limitedItems =
      maxFiles && maxFiles > 0
        ? candidateItems.slice(-maxFiles)
        : candidateItems;

    selectedItems.forEach((item) => {
      if (!limitedItems.includes(item)) {
        URL.revokeObjectURL(item.url);
      }
    });

    const uploadItems = selectedItems.filter((item) =>
      limitedItems.includes(item),
    );

    commitItems(limitedItems);
    runUpload(uploadItems, limitedItems);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setDragging(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    event.preventDefault();
    setDragging(false);

    if (event.dataTransfer.files.length > 0) {
      addFiles(event.dataTransfer.files);
    }
  };

  const removeItem = (item: UploadItem) => {
    const nextItems = itemsRef.current.filter(
      (currentItem) => currentItem.id !== item.id,
    );

    onFileRemove?.(item);
    commitItems(nextItems);
  };

  const runUpload = (
    uploadItems: Array<UploadItem>,
    allItems: Array<UploadItem>,
  ) => {
    if (
      uploadItems.length === 0 ||
      (!onUpload && !onUploadStart && !onUploadComplete)
    ) {
      return;
    }

    onUploadStart?.(uploadItems, allItems);
    setInternalProgress(undefined);

    try {
      const uploadResult = onUpload?.(uploadItems, allItems, setUploadProgress);

      if (isPromiseLike(uploadResult)) {
        setPendingUploads((current) => current + 1);
        uploadResult
          .then(() => {
            setUploadProgress(100);
            onUploadComplete?.(uploadItems, allItems);
          })
          .catch((error: unknown) => {
            onUploadError?.(error, uploadItems, allItems);
          })
          .finally(() => {
            setPendingUploads((current) => Math.max(0, current - 1));
          });
        return;
      }

      setUploadProgress(100);
      onUploadComplete?.(uploadItems, allItems);
    } catch (error) {
      onUploadError?.(error, uploadItems, allItems);
    }
  };

  const setUploadProgress = (nextProgress: number) => {
    setInternalProgress(normalizeFileProgress(nextProgress));
  };

  useEffect(
    () => () => {
      itemsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    },
    [],
  );

  return (
    <div
      {...props}
      className={classNames(
        "willa-upload",
        `willa-upload--${size}`,
        {
          "willa-upload--dragging": dragging,
          "willa-upload--disabled": isDisabled,
          "willa-upload--loading": isUploading,
        },
        className,
      )}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        id={inputId}
        className="willa-upload-input"
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={isDisabled}
        onChange={handleInputChange}
      />
      <label className="willa-upload-dropzone" htmlFor={inputId}>
        <span className="willa-upload-icon" aria-hidden="true">
          {isUploading ? (
            <span className="willa-upload-spinner" />
          ) : (
            <UploadIcon />
          )}
        </span>
        <span className="willa-upload-copy">
          <span className="willa-upload-label">{label}</span>
          <span className="willa-upload-description">{description}</span>
        </span>
        <span className="willa-upload-action">
          {isUploading ? loadingLabel : actionLabel}
        </span>
        {isUploading ? <UploadProgress progress={resolvedProgress} /> : null}
      </label>

      {items.length > 0 ? (
        <div className="willa-upload-list">
          {items.map((item) => (
            <UploadPreview
              key={item.id}
              item={item}
              disabled={isDisabled}
              previewMode={previewMode}
              onPreview={onPreview}
              onRemove={removeItem}
            />
          ))}
        </div>
      ) : (
        <div className="willa-upload-empty">{emptyLabel}</div>
      )}
    </div>
  );
}

type UploadProgressProps = {
  progress?: number;
};

const UploadProgress = ({ progress }: UploadProgressProps) => {
  const hasProgress = typeof progress === "number";

  return (
    <span
      className={classNames("willa-upload-progress", {
        "willa-upload-progress--indeterminate": !hasProgress,
      })}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={hasProgress ? progress : undefined}
    >
      <span
        className="willa-upload-progress-bar"
        style={hasProgress ? { width: `${progress}%` } : undefined}
      />
    </span>
  );
};

type UploadPreviewProps = {
  item: UploadItem;
  disabled: boolean;
  previewMode: UploadPreviewMode;
  onPreview?: (item: UploadItem) => void;
  onRemove: (item: UploadItem) => void;
};

const UploadPreview = ({
  item,
  disabled,
  previewMode,
  onPreview,
  onRemove,
}: UploadPreviewProps) => {
  const fileName = item.file.name;
  const meta = `${formatFileSize(item.file.size)} · ${resolveFileKindLabel(item.kind)}`;
  const handlePreview = () => {
    onPreview?.(item);
  };

  return (
    <article
      className={classNames(
        "willa-upload-item",
        `willa-upload-item--${item.kind}`,
      )}
    >
      <div className="willa-upload-preview">
        {item.kind === "image" ? (
          <UploadPreviewTrigger
            item={item}
            meta={meta}
            disabled={disabled}
            previewMode={previewMode}
            onPreview={handlePreview}
          >
            <img src={item.url} alt={fileName} />
          </UploadPreviewTrigger>
        ) : null}
        {item.kind === "audio" ? (
          <audio className="willa-upload-media" src={item.url} controls />
        ) : null}
        {item.kind === "video" ? (
          <video className="willa-upload-media" src={item.url} controls />
        ) : null}
        {item.kind === "file" ? (
          <UploadFileTrigger
            item={item}
            meta={meta}
            disabled={disabled}
            previewMode={previewMode}
            onPreview={handlePreview}
          />
        ) : null}
      </div>
      {item.kind !== "file" ? (
        <div className="willa-upload-item-info">
          <span className="willa-upload-item-icon" aria-hidden="true">
            <FileTextIcon />
          </span>
          <span className="willa-upload-item-text">
            <span className="willa-upload-item-name" title={fileName}>
              {fileName}
            </span>
            <span className="willa-upload-item-meta">{meta}</span>
          </span>
        </div>
      ) : null}
      <button
        className="willa-upload-remove"
        type="button"
        disabled={disabled}
        aria-label={`移除 ${fileName}`}
        onClick={() => onRemove(item)}
      >
        <Cross2Icon />
      </button>
    </article>
  );
};

type UploadPreviewTriggerProps = {
  item: UploadItem;
  meta: ReactNode;
  disabled: boolean;
  previewMode: UploadPreviewMode;
  children: ReactNode;
  onPreview: () => void;
};

const UploadPreviewTrigger = ({
  item,
  meta,
  disabled,
  previewMode,
  children,
  onPreview,
}: UploadPreviewTriggerProps) => {
  const fileName = item.file.name;

  if (previewMode === "none") {
    return <div className="willa-upload-media-link">{children}</div>;
  }

  if (previewMode === "link") {
    return (
      <a
        className="willa-upload-media-link"
        href={item.url}
        target="_blank"
        rel="noreferrer"
        title={fileName}
        onClick={onPreview}
      >
        {children}
      </a>
    );
  }

  if (previewMode === "download") {
    return (
      <a
        className="willa-upload-media-link"
        href={item.url}
        download={fileName}
        title={fileName}
        onClick={onPreview}
      >
        {children}
      </a>
    );
  }

  return (
    <FilePreviewDialog
      src={item.url}
      name={fileName}
      mimeType={item.file.type}
      meta={meta}
      alt={fileName}
      downloadName={fileName}
      trigger={
        <button
          className="willa-upload-media-link"
          type="button"
          disabled={disabled}
          title={fileName}
          onClick={onPreview}
        >
          {children}
        </button>
      }
    />
  );
};

type UploadFileTriggerProps = {
  item: UploadItem;
  meta: ReactNode;
  disabled: boolean;
  previewMode: UploadPreviewMode;
  onPreview: () => void;
};

const UploadFileTrigger = ({
  item,
  meta,
  disabled,
  previewMode,
  onPreview,
}: UploadFileTriggerProps) => {
  const fileName = item.file.name;

  if (previewMode === "dialog") {
    return (
      <FilePreviewDialog
        src={item.url}
        name={fileName}
        mimeType={item.file.type}
        meta={meta}
        downloadName={fileName}
        trigger={
          <button
            className="willa-upload-file-trigger"
            type="button"
            disabled={disabled}
            onClick={onPreview}
          >
            <span className="willa-upload-item-icon" aria-hidden="true">
              <FileTextIcon />
            </span>
            <span className="willa-upload-item-text">
              <span className="willa-upload-item-name" title={fileName}>
                {fileName}
              </span>
              <span className="willa-upload-item-meta">{meta}</span>
            </span>
          </button>
        }
      />
    );
  }

  if (previewMode === "none") {
    return (
      <div className="willa-upload-file-trigger" aria-disabled={disabled}>
        <span className="willa-upload-item-icon" aria-hidden="true">
          <FileTextIcon />
        </span>
        <span className="willa-upload-item-text">
          <span className="willa-upload-item-name" title={fileName}>
            {fileName}
          </span>
          <span className="willa-upload-item-meta">{meta}</span>
        </span>
      </div>
    );
  }

  return (
    <Download
      href={item.url}
      name={fileName}
      meta={meta}
      downloadName={previewMode === "download" ? fileName : undefined}
      target={previewMode === "link" ? "_blank" : undefined}
      variant="button"
      size="md"
      onClick={onPreview}
    />
  );
};

Upload.displayName = "Upload";
