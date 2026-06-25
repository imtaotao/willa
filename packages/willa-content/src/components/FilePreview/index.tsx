import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  CrossCircledIcon,
  DownloadIcon,
  EnterFullScreenIcon,
  ExternalLinkIcon,
  FileTextIcon,
  PauseIcon,
  PlayIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import {
  getFileCodeLanguage,
  resolveFilePreviewType,
  type FilePreviewType as SharedFilePreviewType,
} from "@willa-ui/shared";
import classNames from "classnames";

import { Button } from "#content/components/Button";
import { CodeBlock } from "#content/components/CodeBlock";
import {
  Dialog,
  type DialogProps,
  type DialogSize,
} from "#content/components/Dialog";
import { FileCardIcon } from "#content/components/FileCard";
import { Spinner } from "#content/components/Spinner";
import { Table, type TableItem } from "#content/components/Table";

export type FilePreviewType = SharedFilePreviewType;
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
  loading?: boolean;
  loadingText?: ReactNode;
  error?: ReactNode;
  errorText?: ReactNode;
  downloadName?: string;
  actions?: ReactNode;
  expandable?: boolean;
  openInNewWindow?: boolean;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export type FilePreviewDialogProps = FilePreviewProps & {
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: DialogProps["trigger"];
  dialogTitle?: ReactNode;
  dialogDescription?: ReactNode;
  dialogSize?: DialogSize;
  onOpenChange?: (open: boolean) => void;
};

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
    loading,
    loadingText,
    error,
    errorText,
    downloadName,
    actions,
    expandable = true,
    openInNewWindow = true,
    className,
    ...sectionProps
  } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const resolvedType = resolveFilePreviewType({ name, type, mimeType });
  const canExpand = expandable && resolvedType !== "download";

  return (
    <>
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
          <FileCardIcon
            className="willa-file-preview__icon"
            name={name}
            size="sm"
          />
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
            {canExpand ? (
              <Button
                variant="ghost"
                size="sm"
                icon={<EnterFullScreenIcon />}
                onClick={() => setPreviewOpen(true)}
              >
                放大
              </Button>
            ) : null}
            {openInNewWindow ? (
              <Button
                href={src}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="sm"
                icon={<ExternalLinkIcon />}
              >
                新窗口
              </Button>
            ) : null}
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
            loading,
            loadingText,
            error,
            errorText,
          })}
        </div>
      </section>
      {canExpand ? (
        <FilePreviewDialog
          alt={alt}
          dialogTitle="放大预览"
          downloadName={downloadName}
          language={language}
          meta={meta}
          mimeType={mimeType}
          name={name}
          open={previewOpen}
          poster={poster}
          showLineNumbers={showLineNumbers}
          size="lg"
          src={src}
          text={text}
          type={resolvedType}
          loading={loading}
          loadingText={loadingText}
          error={error}
          errorText={errorText}
          onOpenChange={setPreviewOpen}
        />
      ) : null}
    </>
  );
}

export function FilePreviewDialog(props: FilePreviewDialogProps) {
  const {
    open,
    defaultOpen,
    trigger,
    dialogTitle = "预览文件",
    dialogDescription,
    dialogSize = "xl",
    onOpenChange,
    ...previewProps
  } = props;
  const resolvedType = resolveFilePreviewType({
    name: previewProps.name,
    type: previewProps.type ?? "auto",
    mimeType: previewProps.mimeType,
  });

  return (
    <Dialog
      open={open}
      defaultOpen={defaultOpen}
      trigger={trigger}
      title={dialogTitle}
      description={dialogDescription}
      size={dialogSize}
      footer={null}
      className={classNames(
        "willa-file-preview-dialog",
        `willa-file-preview-dialog--${resolvedType}`,
      )}
      contentClassName="willa-file-preview-dialog__body"
      onOpenChange={onOpenChange}
    >
      <FilePreview
        {...previewProps}
        expandable={false}
        size={previewProps.size ?? "lg"}
        className={classNames(
          "willa-file-preview--dialog",
          previewProps.className,
        )}
      />
    </Dialog>
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
  loading?: boolean;
  loadingText?: ReactNode;
  error?: ReactNode;
  errorText?: ReactNode;
}) => {
  const hasForcedError = isErrorVisible(options.error);

  if (hasForcedError) {
    return (
      <FilePreviewStateSurface
        tone="error"
        message={normalizeErrorMessage(options.error, options.errorText)}
      />
    );
  }

  if (options.loading) {
    return (
      <FilePreviewStateSurface tone="loading" message={options.loadingText} />
    );
  }

  if (options.resolvedType === "image") {
    return (
      <LoadablePreviewSurface
        src={options.src}
        loadingText={options.loadingText}
        errorText={options.errorText}
      >
        {({ onLoad, onError }) => (
          <img
            className="willa-file-preview__image"
            src={options.src}
            alt={options.alt ?? options.name}
            onLoad={onLoad}
            onError={onError}
          />
        )}
      </LoadablePreviewSurface>
    );
  }

  if (options.resolvedType === "video") {
    return (
      <LoadablePreviewSurface
        src={options.src}
        loadingText={options.loadingText}
        errorText={options.errorText}
      >
        {({ onLoad, onError }) => (
          <video
            className="willa-file-preview__media"
            src={options.src}
            poster={options.poster}
            controls
            onLoadedData={onLoad}
            onCanPlay={onLoad}
            onError={onError}
          />
        )}
      </LoadablePreviewSurface>
    );
  }

  if (options.resolvedType === "pdf") {
    return (
      <LoadablePreviewSurface
        src={options.src}
        loadingText={options.loadingText}
        errorText={options.errorText}
      >
        {({ onLoad }) => (
          <iframe
            className="willa-file-preview__frame"
            src={getPdfPreviewSrc(options.src)}
            title={options.name}
            onLoad={onLoad}
          />
        )}
      </LoadablePreviewSurface>
    );
  }

  if (options.resolvedType === "audio") {
    return (
      <AudioPreviewPlayer
        name={options.name}
        src={options.src}
        label={options.alt}
        loadingText={options.loadingText}
        errorText={options.errorText}
      />
    );
  }

  if (options.resolvedType === "text") {
    return (
      <CodeBlock
        className="willa-file-preview__code"
        code={options.text ?? "暂无可预览文本。"}
        language="text"
        showLineNumbers={options.showLineNumbers}
      />
    );
  }

  if (options.resolvedType === "csv") {
    return <CsvPreview name={options.name} text={options.text} />;
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

const LoadablePreviewSurface = (props: {
  src: string;
  loadingText?: ReactNode;
  errorText?: ReactNode;
  children: (handlers: {
    onLoad: () => void;
    onError: () => void;
  }) => ReactNode;
}) => {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    setStatus("loading");
  }, [props.src]);

  return (
    <div
      className={classNames(
        "willa-file-preview__surface",
        status !== "ready" && "willa-file-preview__surface--pending",
      )}
    >
      {props.children({
        onLoad: () => setStatus("ready"),
        onError: () => setStatus("error"),
      })}
      {status === "loading" ? (
        <FilePreviewState tone="loading" message={props.loadingText} />
      ) : null}
      {status === "error" ? (
        <FilePreviewState tone="error" message={props.errorText} />
      ) : null}
    </div>
  );
};

const FilePreviewStateSurface = (props: {
  tone: "loading" | "error";
  message?: ReactNode;
}) => {
  return (
    <div className="willa-file-preview__surface willa-file-preview__surface--state">
      <FilePreviewState tone={props.tone} message={props.message} />
    </div>
  );
};

const FilePreviewState = (props: {
  tone: "loading" | "error";
  message?: ReactNode;
}) => {
  const message =
    props.message ??
    (props.tone === "loading" ? "文件加载中" : "文件加载失败，请重试。");

  if (props.tone === "loading") {
    return (
      <div className="willa-file-preview__state">
        <Spinner size="md" label={message} labelPosition="block" />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "willa-file-preview__state",
        `willa-file-preview__state--${props.tone}`,
      )}
      role="alert"
    >
      <span className="willa-file-preview__state-icon" aria-hidden="true">
        <CrossCircledIcon />
      </span>
      <span>{message}</span>
    </div>
  );
};

const normalizeErrorMessage = (error?: ReactNode, errorText?: ReactNode) => {
  if (!isErrorVisible(error)) return undefined;
  return error === true ? errorText : error;
};

const isErrorVisible = (error?: ReactNode) => {
  return error !== undefined && error !== null && error !== false;
};

const AudioPreviewPlayer = (props: {
  src: string;
  name: string;
  label?: string;
  loadingText?: ReactNode;
  errorText?: ReactNode;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration > 0 ? Math.min(currentTime / duration, 1) : 0;

  const durationLabel = useMemo(() => formatAudioTime(duration), [duration]);
  const currentTimeLabel = useMemo(
    () => formatAudioTime(currentTime),
    [currentTime],
  );

  useEffect(() => {
    setIsPlaying(false);
    setIsLoading(true);
    setHasError(false);
    setCurrentTime(0);
    setDuration(0);
  }, [props.src]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (audio.paused) {
      setIsLoading(true);
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
        setIsLoading(false);
      }
      return;
    }

    audio.pause();
  };

  return (
    <div className="willa-file-preview-audio">
      <div className="willa-file-preview-audio__visual" aria-hidden="true">
        <SpeakerLoudIcon />
        <span className="willa-file-preview-audio__wave">
          <span />
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="willa-file-preview-audio__content">
        <div className="willa-file-preview-audio__header">
          <span className="willa-file-preview-audio__label">
            {props.label ?? "音频预览"}
          </span>
          <span className="willa-file-preview-audio__name" title={props.name}>
            {props.name}
          </span>
        </div>
        <div className="willa-file-preview-audio__player">
          <button
            type="button"
            className="willa-file-preview-audio__toggle"
            disabled={hasError}
            onClick={togglePlayback}
            aria-label={isPlaying ? "暂停音频" : "播放音频"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className="willa-file-preview-audio__timeline">
            <div
              className="willa-file-preview-audio__progress"
              style={
                {
                  "--willa-file-preview-audio-progress": `${progress * 100}%`,
                } as CSSProperties
              }
            >
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || currentTime)}
                disabled={duration <= 0 || hasError}
                onChange={(event) => {
                  const nextTime = Number(event.target.value);
                  setCurrentTime(nextTime);
                  if (audioRef.current) {
                    audioRef.current.currentTime = nextTime;
                  }
                }}
                aria-label="调整播放进度"
              />
            </div>
            <div className="willa-file-preview-audio__time">
              <span>{currentTimeLabel}</span>
              <span>/</span>
              <span>{durationLabel}</span>
            </div>
          </div>
        </div>
        {hasError ? (
          <span className="willa-file-preview-audio__status">
            {props.errorText ?? "音频加载失败，请重试。"}
          </span>
        ) : isLoading ? (
          <span className="willa-file-preview-audio__status">
            {props.loadingText ?? "正在加载音频"}
          </span>
        ) : null}
      </div>
      <audio
        ref={audioRef}
        className="willa-file-preview-audio__native"
        preload="metadata"
        src={props.src}
        onLoadStart={() => {
          setIsLoading(true);
          setHasError(false);
        }}
        onCanPlay={() => {
          setIsLoading(false);
        }}
        onLoadedMetadata={(event) => {
          const nextDuration = event.currentTarget.duration;
          if (Number.isFinite(nextDuration)) {
            setDuration(nextDuration);
          }
        }}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onPlay={() => {
          setIsPlaying(true);
          setIsLoading(false);
          setHasError(false);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() => {
          setIsPlaying(false);
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

const CsvPreview = (props: { name: string; text?: string }) => {
  const tableItems = createCsvTableItems(props.text);
  const isEmpty = tableItems.length === 0;

  return (
    <Table
      className={classNames(
        "willa-file-preview__csv",
        isEmpty && "willa-file-preview__csv--empty",
      )}
      size="sm"
      items={tableItems}
      empty="暂无可预览表格数据。"
    />
  );
};

const getCodeLanguage = (name: string) => getFileCodeLanguage(name);

const getPdfPreviewSrc = (src: string) => {
  return src.includes("#") ? `${src}&view=Fit` : `${src}#view=Fit`;
};

const formatAudioTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainSeconds).padStart(2, "0")}`;
};

const createCsvTableItems = (text?: string) => {
  const rows = parseCsvRows(text ?? "");
  if (rows.length === 0) return [];

  const [headers, ...bodyRows] = rows;
  const normalizedHeaders = headers.map((header, index) => {
    const trimmedHeader = header.trim();
    return trimmedHeader || `字段 ${index + 1}`;
  });

  return bodyRows
    .filter((row) => row.some((cell) => cell.trim()))
    .map<TableItem>((row, rowIndex) => ({
      key: rowIndex,
      cells: normalizedHeaders.map((header, cellIndex) => {
        const value = row[cellIndex]?.trim() ?? "";

        return {
          key: `${rowIndex}-${cellIndex}`,
          label: header,
          value,
          ellipsis: true,
          title: value,
        };
      }),
    }));
};

const parseCsvRows = (text: string) => {
  const rows: Array<Array<string>> = [];
  let row: Array<string> = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const nextCharacter = text[index + 1];

    if (character === '"' && inQuotes && nextCharacter === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (character === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !inQuotes) {
      if (character === "\r" && nextCharacter === "\n") index += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += character;
  }

  row.push(cell);
  rows.push(row);

  return rows.filter((currentRow) =>
    currentRow.some((currentCell) => currentCell.trim()),
  );
};

FilePreview.displayName = "FilePreview";
FilePreviewDialog.displayName = "FilePreviewDialog";
