import {
  useCallback,
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
  clampMediaTime,
  createMediaSeekingController,
  formatMediaTime,
  getFileCodeLanguage,
  getMediaDuration,
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

type FilePreviewCustomStyle = CSSProperties &
  Record<`--${string}`, string | number>;

type SeekInputEvent = {
  currentTarget: HTMLInputElement;
};

type FilePreviewMediaPlaybackState = {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  handoffKey: number;
  shouldResume: boolean;
};

type FilePreviewMediaPlaybackStatePatch = Partial<
  Pick<FilePreviewMediaPlaybackState, "currentTime" | "duration" | "isPlaying">
>;

type MediaPreviewPlaybackControl = {
  active: boolean;
  state: FilePreviewMediaPlaybackState;
  onStateChange: (patch: FilePreviewMediaPlaybackStatePatch) => void;
};

const registerSeekingEndListeners = (endSeeking: () => void) => {
  window.addEventListener("pointerup", endSeeking, true);
  window.addEventListener("pointercancel", endSeeking, true);
  window.addEventListener("blur", endSeeking, true);

  return () => {
    window.removeEventListener("pointerup", endSeeking, true);
    window.removeEventListener("pointercancel", endSeeking, true);
    window.removeEventListener("blur", endSeeking, true);
  };
};

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

const createInitialMediaPlaybackState = (): FilePreviewMediaPlaybackState => ({
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  handoffKey: 0,
  shouldResume: false,
});

export function FilePreview(props: FilePreviewProps) {
  const {
    alt,
    className,
    downloadName,
    error,
    errorText,
    language,
    loading,
    loadingText,
    meta,
    openInNewWindow,
    poster,
    showLineNumbers,
    src,
    text,
    name,
    type = "auto",
    mimeType,
    expandable = true,
  } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [mediaPlaybackState, setMediaPlaybackState] = useState(
    createInitialMediaPlaybackState,
  );
  const resolvedType = resolveFilePreviewType({ name, type, mimeType });
  const canExpand = expandable && resolvedType !== "download";
  const canHandoffMedia = resolvedType === "audio" || resolvedType === "video";

  useEffect(() => {
    setMediaPlaybackState(createInitialMediaPlaybackState());
  }, [props.src, resolvedType]);

  const updateMediaPlaybackState = useCallback(
    (patch: FilePreviewMediaPlaybackStatePatch) => {
      setMediaPlaybackState((state) => ({
        ...state,
        ...patch,
      }));
    },
    [],
  );
  const handlePreviewOpenChange = useCallback(
    (open: boolean) => {
      if (canHandoffMedia) {
        setMediaPlaybackState((state) => ({
          ...state,
          handoffKey: state.handoffKey + 1,
          shouldResume: state.isPlaying,
        }));
      }

      setPreviewOpen(open);
    },
    [canHandoffMedia],
  );

  const inlineMediaPlaybackControl = canHandoffMedia
    ? {
        active: !previewOpen,
        state: mediaPlaybackState,
        onStateChange: updateMediaPlaybackState,
      }
    : undefined;
  const dialogMediaPlaybackControl = canHandoffMedia
    ? {
        active: previewOpen,
        state: mediaPlaybackState,
        onStateChange: updateMediaPlaybackState,
      }
    : undefined;
  const dialogPreviewProps = {
    alt,
    className: classNames("willa-file-preview--dialog", className),
    downloadName,
    error,
    errorText,
    language,
    loading,
    loadingText,
    meta,
    mimeType,
    name,
    openInNewWindow,
    poster,
    showLineNumbers,
    src,
    text,
    type: resolvedType,
  };

  return (
    <>
      <FilePreviewSurface
        {...props}
        resolvedType={resolvedType}
        canExpand={canExpand}
        mediaPlaybackControl={inlineMediaPlaybackControl}
        onExpand={() => handlePreviewOpenChange(true)}
      />
      {canExpand ? (
        <Dialog
          open={previewOpen}
          title="放大预览"
          size="xl"
          footer={null}
          className={classNames(
            "willa-file-preview-dialog",
            `willa-file-preview-dialog--${resolvedType}`,
          )}
          contentClassName="willa-file-preview-dialog__body"
          onOpenChange={handlePreviewOpenChange}
        >
          <FilePreviewSurface
            {...dialogPreviewProps}
            resolvedType={resolvedType}
            size="lg"
            canExpand={false}
            mediaPlaybackControl={dialogMediaPlaybackControl}
          />
        </Dialog>
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
      <FilePreviewSurface
        {...previewProps}
        expandable={false}
        size={previewProps.size ?? "lg"}
        resolvedType={resolvedType}
        canExpand={false}
        className={classNames(
          "willa-file-preview--dialog",
          previewProps.className,
        )}
      />
    </Dialog>
  );
}

const FilePreviewSurface = (
  props: FilePreviewProps & {
    resolvedType: Exclude<FilePreviewType, "auto">;
    canExpand: boolean;
    mediaPlaybackControl?: MediaPreviewPlaybackControl;
    onExpand?: () => void;
  },
) => {
  const {
    src,
    name,
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
    openInNewWindow = true,
    className,
    resolvedType,
    canExpand,
    mediaPlaybackControl,
    onExpand,
    type,
    mimeType,
    expandable,
    ...sectionProps
  } = props;

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
              onClick={onExpand}
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
          mediaPlaybackControl,
        })}
      </div>
    </section>
  );
};

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
  mediaPlaybackControl?: MediaPreviewPlaybackControl;
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
          <VideoPreviewPlayer
            src={options.src}
            poster={options.poster}
            onLoad={onLoad}
            onError={onError}
            playbackControl={options.mediaPlaybackControl}
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
        playbackControl={options.mediaPlaybackControl}
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

const VideoPreviewPlayer = (props: {
  src: string;
  poster?: string;
  playbackControl?: MediaPreviewPlaybackControl;
  onLoad: () => void;
  onError: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isPlaybackActive = props.playbackControl?.active ?? true;
  const playbackState = props.playbackControl?.state;

  const syncPlaybackState = (patch: FilePreviewMediaPlaybackStatePatch) => {
    if (isPlaybackActive) {
      props.playbackControl?.onStateChange(patch);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!isPlaybackActive) {
      video?.pause();
      return;
    }

    if (!playbackState) return;

    const nextTime = clampMediaTime(
      playbackState.currentTime,
      playbackState.duration || getMediaDuration(video),
    );

    if (video && Math.abs(video.currentTime - nextTime) > 0.05) {
      video.currentTime = nextTime;
    }

    if (!playbackState.shouldResume || !video) return;

    void video.play().catch(() => {
      syncPlaybackState({ isPlaying: false });
    });
  }, [isPlaybackActive, playbackState?.handoffKey]);

  return (
    <video
      ref={videoRef}
      className="willa-file-preview__media"
      src={props.src}
      poster={props.poster}
      controls
      onLoadedData={props.onLoad}
      onCanPlay={props.onLoad}
      onLoadedMetadata={(event) => {
        syncPlaybackState({ duration: getMediaDuration(event.currentTarget) });
      }}
      onTimeUpdate={(event) => {
        syncPlaybackState({ currentTime: event.currentTarget.currentTime });
      }}
      onPlay={() => {
        syncPlaybackState({ isPlaying: true });
      }}
      onPause={() => {
        syncPlaybackState({ isPlaying: false });
      }}
      onEnded={() => {
        syncPlaybackState({ currentTime: 0, isPlaying: false });
      }}
      onError={() => {
        syncPlaybackState({ isPlaying: false });
        props.onError();
      }}
    />
  );
};

const AudioPreviewPlayer = (props: {
  src: string;
  name: string;
  label?: string;
  loadingText?: ReactNode;
  errorText?: ReactNode;
  playbackControl?: MediaPreviewPlaybackControl;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekingController = useMemo(() => createMediaSeekingController(), []);
  const isPlaybackActive = props.playbackControl?.active ?? true;
  const playbackState = props.playbackControl?.state;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration > 0 ? Math.min(currentTime / duration, 1) : 0;
  const endSeeking = seekingController.end;

  const durationLabel = useMemo(() => formatMediaTime(duration), [duration]);
  const currentTimeLabel = useMemo(
    () => formatMediaTime(currentTime),
    [currentTime],
  );

  useEffect(() => {
    endSeeking();
    setIsPlaying(false);
    setIsLoading(true);
    setHasError(false);
    setCurrentTime(0);
    setDuration(0);
  }, [endSeeking, props.src]);

  useEffect(() => endSeeking, [endSeeking]);

  const syncPlaybackState = (patch: FilePreviewMediaPlaybackStatePatch) => {
    if (isPlaybackActive) {
      props.playbackControl?.onStateChange(patch);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!isPlaybackActive) {
      endSeeking();
      audio?.pause();
      return;
    }

    if (!playbackState) return;

    const nextTime = clampMediaTime(
      playbackState.currentTime,
      playbackState.duration || getMediaDuration(audio),
    );

    setCurrentTime(nextTime);

    if (playbackState.duration > 0) {
      setDuration(playbackState.duration);
    }

    if (audio && Math.abs(audio.currentTime - nextTime) > 0.05) {
      audio.currentTime = nextTime;
    }

    if (!playbackState.shouldResume || !audio) return;

    setIsLoading(true);
    void audio.play().catch(() => {
      setIsPlaying(false);
      setIsLoading(false);
      syncPlaybackState({ isPlaying: false });
    });
  }, [endSeeking, isPlaybackActive, playbackState?.handoffKey]);

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

  const seekTo = (value: number) => {
    const audio = audioRef.current;
    const nextTime = clampMediaTime(value, duration || getMediaDuration(audio));

    setCurrentTime(nextTime);
    syncPlaybackState({ currentTime: nextTime });

    if (audio) {
      audio.currentTime = nextTime;
    }
  };

  const handleSeekInput = (event: SeekInputEvent) => {
    seekTo(Number(event.currentTarget.value));
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
                onPointerDown={(event) => {
                  seekingController.begin(registerSeekingEndListeners);
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerUp={(event) => {
                  endSeeking();
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                }}
                onPointerCancel={(event) => {
                  endSeeking();
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                }}
                onLostPointerCapture={endSeeking}
                onBlur={endSeeking}
                onInput={handleSeekInput}
                onChange={handleSeekInput}
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
            syncPlaybackState({ duration: nextDuration });
          }
        }}
        onTimeUpdate={(event) => {
          if (!seekingController.isSeeking()) {
            const nextTime = event.currentTarget.currentTime;
            setCurrentTime(nextTime);
            syncPlaybackState({ currentTime: nextTime });
          }
        }}
        onPlay={() => {
          endSeeking();
          setIsPlaying(true);
          setIsLoading(false);
          setHasError(false);
          syncPlaybackState({ isPlaying: true });
        }}
        onPause={() => {
          endSeeking();
          setIsPlaying(false);
          syncPlaybackState({ isPlaying: false });
        }}
        onEnded={() => {
          endSeeking();
          setIsPlaying(false);
          setCurrentTime(0);
          syncPlaybackState({ currentTime: 0, isPlaying: false });
        }}
        onError={() => {
          endSeeking();
          setIsPlaying(false);
          setIsLoading(false);
          setHasError(true);
          syncPlaybackState({ isPlaying: false });
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
      style={csvTableStyle}
      items={tableItems}
      empty="暂无可预览表格数据。"
    />
  );
};

const csvTableStyle: FilePreviewCustomStyle = {
  "--willa-table-cell-padding-x": "0.68rem",
  "--willa-table-cell-padding-y": "0.52rem",
  "--willa-table-cell-font-weight": 500,
  "--willa-table-font-size": "0.8rem",
  "--willa-table-header-font-size": "0.78rem",
  "--willa-table-header-text": "var(--willa-file-preview-title)",
  "--willa-table-line-height": 1.45,
  "--willa-table-muted": "var(--willa-file-preview-muted)",
  "--willa-table-text": "var(--willa-file-preview-muted)",
};

const getCodeLanguage = (name: string) => getFileCodeLanguage(name);

const getPdfPreviewSrc = (src: string) => {
  return src.includes("#") ? `${src}&view=Fit` : `${src}#view=Fit`;
};

const createCsvTableItems = (text?: string) => {
  const rows = parseCsvRows(text ?? "");
  if (rows.length === 0) return [];

  const [headers, ...bodyRows] = rows;
  const columns = headers.map((header, index) => {
    const trimmedHeader = header.trim();
    return {
      key: `column-${index}`,
      label: trimmedHeader || `字段 ${index + 1}`,
    };
  });

  return bodyRows
    .filter((row) => row.some((cell) => cell.trim()))
    .map<TableItem>((row, rowIndex) => ({
      key: rowIndex,
      cells: columns.map((column, cellIndex) => {
        const value = row[cellIndex]?.trim() ?? "";

        return {
          key: column.key,
          label: column.label,
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
