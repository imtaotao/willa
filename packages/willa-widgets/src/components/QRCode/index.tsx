import { useRef, type CSSProperties, type ReactNode } from "react";
import {
  CheckCircledIcon,
  DownloadIcon,
  ReloadIcon,
  SymbolIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

export type QRCodeType = "svg" | "canvas";
export type QRCodeErrorLevel = "L" | "M" | "Q" | "H";
export type QRCodeStatus = "active" | "expired" | "loading" | "scanned";

export type QRCodeIconSize =
  | number
  | {
      width: number;
      height: number;
    };

export type QRCodeStatusRenderInfo = {
  status: Exclude<QRCodeStatus, "active">;
  onRefresh?: () => void;
};

export type QRCodeProps = {
  value: string | Array<string>;
  type?: QRCodeType;
  size?: number;
  color?: string;
  bgColor?: string;
  icon?: string;
  iconSize?: QRCodeIconSize;
  iconCrossOrigin?: "anonymous" | "use-credentials" | "";
  errorLevel?: QRCodeErrorLevel;
  marginSize?: number;
  minVersion?: number;
  boostLevel?: boolean;
  status?: QRCodeStatus;
  statusRender?: (info: QRCodeStatusRenderInfo) => ReactNode;
  onRefresh?: () => void;
  title?: string;
  description?: ReactNode;
  bordered?: boolean;
  downloadable?: boolean;
  downloadFileName?: string;
  downloadLabel?: string;
  className?: string;
  style?: CSSProperties;
};

const statusLabels = {
  expired: "二维码已过期",
  loading: "正在生成二维码",
  scanned: "已扫描",
} satisfies Record<Exclude<QRCodeStatus, "active">, string>;

const normalizeIconSize = (iconSize: QRCodeIconSize | undefined) => {
  if (typeof iconSize === "number") {
    return { width: iconSize, height: iconSize };
  }

  return iconSize;
};

const createDownloadName = (fileName: string | undefined, type: QRCodeType) => {
  const trimmedFileName = fileName?.trim();
  if (trimmedFileName) return trimmedFileName;
  return type === "svg" ? "willa-qrcode.svg" : "willa-qrcode.png";
};

const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
};

const serializeSvg = (svg: SVGSVGElement) => {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return new XMLSerializer().serializeToString(clone);
};

const renderStatus = (
  status: QRCodeStatus,
  statusRender: QRCodeProps["statusRender"],
  onRefresh: QRCodeProps["onRefresh"],
) => {
  if (status === "active") return null;

  if (statusRender) {
    return statusRender({ status, onRefresh });
  }

  if (status === "loading") {
    return (
      <div className="willa-qr-code-status">
        <span className="willa-qr-code-status-text">
          <SymbolIcon className="willa-qr-code-status-icon willa-qr-code-status-icon--spin" />
          {statusLabels.loading}
        </span>
      </div>
    );
  }

  if (status === "scanned") {
    return (
      <div className="willa-qr-code-status">
        <span className="willa-qr-code-status-text">
          <CheckCircledIcon className="willa-qr-code-status-icon" />
          {statusLabels.scanned}
        </span>
      </div>
    );
  }

  return (
    <div className="willa-qr-code-status">
      <span className="willa-qr-code-status-text">{statusLabels.expired}</span>
      {onRefresh ? (
        <button
          className="willa-qr-code-status-action"
          type="button"
          onClick={onRefresh}
        >
          <ReloadIcon />
          刷新
        </button>
      ) : null}
    </div>
  );
};

export function QRCode(props: QRCodeProps) {
  const {
    value,
    type = "svg",
    size = 168,
    color = "#111827",
    bgColor = "#ffffff",
    icon,
    iconSize,
    iconCrossOrigin,
    errorLevel = "M",
    marginSize = 2,
    minVersion,
    boostLevel,
    status = "active",
    statusRender,
    onRefresh,
    title,
    description,
    bordered = true,
    downloadable = false,
    downloadFileName,
    downloadLabel = "下载二维码",
    className,
    style,
  } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const normalizedIconSize = normalizeIconSize(iconSize);
  const qrNodeProps = {
    value,
    size,
    level: errorLevel,
    bgColor,
    fgColor: color,
    marginSize,
    title,
    minVersion,
    boostLevel,
    imageSettings: icon
      ? {
          src: icon,
          width: normalizedIconSize?.width ?? 36,
          height: normalizedIconSize?.height ?? 36,
          excavate: true,
          crossOrigin: iconCrossOrigin,
        }
      : undefined,
  };
  const statusNode = renderStatus(status, statusRender, onRefresh);

  const handleDownload = () => {
    const root = rootRef.current;
    if (!root) return;

    const fileName = createDownloadName(downloadFileName, type);
    const canvas = root.querySelector("canvas");
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, fileName);
      });
      return;
    }

    const svg = root.querySelector("svg");
    if (!svg) return;

    const source = serializeSvg(svg);
    downloadBlob(
      new Blob([source], { type: "image/svg+xml;charset=utf-8" }),
      fileName,
    );
  };

  return (
    <figure
      className={classNames(
        "willa-qr-code",
        bordered && "willa-qr-code--bordered",
        status !== "active" && "willa-qr-code--covered",
        className,
      )}
      style={
        {
          "--willa-qr-code-size": `${size}px`,
          ...style,
        } as CSSProperties
      }
    >
      <div ref={rootRef} className="willa-qr-code-box">
        {type === "canvas" ? (
          <QRCodeCanvas className="willa-qr-code-canvas" {...qrNodeProps} />
        ) : (
          <QRCodeSVG className="willa-qr-code-svg" {...qrNodeProps} />
        )}
        {statusNode ? (
          <div className="willa-qr-code-cover">{statusNode}</div>
        ) : null}
      </div>
      {description || downloadable ? (
        <figcaption className="willa-qr-code-caption">
          {description ? (
            <span className="willa-qr-code-description">{description}</span>
          ) : null}
          {downloadable ? (
            <button
              className="willa-qr-code-download"
              type="button"
              onClick={handleDownload}
            >
              <DownloadIcon />
              {downloadLabel}
            </button>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

QRCode.displayName = "QRCode";
