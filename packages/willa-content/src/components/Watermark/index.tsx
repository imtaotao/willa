import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { resolveMediaAsset, type MediaContextProps } from "@willa-ui/shared";

export type WatermarkFont = {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: CSSProperties["fontStyle"];
  fontWeight?: number | string;
  letterSpacing?: number;
  lineHeight?: number;
};

export type WatermarkProps = {
  children?: ReactNode;
  content?: string | Array<string>;
  image?: string;
  width?: number;
  height?: number;
  gap?: [number, number];
  offset?: [number, number];
  rotate?: number;
  opacity?: number;
  zIndex?: number;
  fixed?: boolean;
  font?: WatermarkFont;
} & MediaContextProps &
  Omit<ComponentPropsWithoutRef<"div">, "content">;

const DEFAULT_WIDTH = 152;
const DEFAULT_HEIGHT = 84;
const DEFAULT_GAP: [number, number] = [96, 88];
const DEFAULT_OFFSET: [number, number] = [24, 12];
const DEFAULT_ROTATE = -22;
const DEFAULT_OPACITY = 1;
const LIGHT_FALLBACK_COLOR = "rgba(15, 23, 42, 0.12)";
const DARK_FALLBACK_COLOR = "rgba(255, 255, 255, 0.12)";

export function Watermark(props: WatermarkProps) {
  const {
    articleSourcePath,
    resolveAssetUrl,
    children,
    content,
    image,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    gap = DEFAULT_GAP,
    offset = DEFAULT_OFFSET,
    rotate = DEFAULT_ROTATE,
    opacity = DEFAULT_OPACITY,
    zIndex = 1,
    fixed = false,
    font,
    className,
    style,
    ...rootProps
  } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [themeColor, setThemeColor] = useState(LIGHT_FALLBACK_COLOR);
  const resolvedImage = resolveMediaAsset(
    { articleSourcePath, resolveAssetUrl },
    image,
  );
  const lines = normalizeWatermarkContent(content);
  const watermarkFont = {
    color: font?.color ?? themeColor,
    fontFamily: font?.fontFamily,
    fontSize: font?.fontSize,
    fontStyle: font?.fontStyle,
    fontWeight: font?.fontWeight,
    letterSpacing: font?.letterSpacing,
    lineHeight: font?.lineHeight,
  };
  const imageWatermarkDataUrl = useMemo(
    () =>
      resolvedImage
        ? createWatermarkDataUrl({
            lines: [],
            image: resolvedImage,
            width,
            height,
            gap,
            rotate,
            font: watermarkFont,
          })
        : "",
    [resolvedImage, width, height, gap, rotate, watermarkFont],
  );
  const textWatermarkDataUrl = useMemo(
    () =>
      lines.length
        ? createWatermarkDataUrl({
            lines,
            width,
            height,
            gap,
            rotate,
            font: watermarkFont,
          })
        : "",
    [lines, width, height, gap, rotate, watermarkFont],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const readThemeColor = () => {
      const scopedColor = getComputedStyle(root)
        .getPropertyValue("--willa-watermark-ink")
        .trim();

      if (scopedColor) {
        setThemeColor(scopedColor);
        return;
      }

      const theme = document.documentElement.getAttribute("data-wk-theme");
      setThemeColor(
        theme === "dark" ? DARK_FALLBACK_COLOR : LIGHT_FALLBACK_COLOR,
      );
    };

    readThemeColor();

    const observer = new MutationObserver(readThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-wk-theme", "class"],
    });

    return () => observer.disconnect();
  }, []);

  const mergedStyle = {
    ...style,
    "--willa-watermark-size": `${width + gap[0]}px ${height + gap[1]}px`,
    "--willa-watermark-position": `${offset[0]}px ${offset[1]}px`,
    "--willa-watermark-opacity": `${opacity}`,
    "--willa-watermark-z-index": `${zIndex}`,
  } as CSSProperties;

  return (
    <div
      {...rootProps}
      ref={rootRef}
      className={classNames(
        "willa-watermark",
        fixed && "willa-watermark--fixed",
        className,
      )}
      style={mergedStyle}
    >
      <div
        className="willa-watermark__layer willa-watermark__layer--image"
        aria-hidden="true"
        style={
          {
            backgroundImage: imageWatermarkDataUrl
              ? `url("${imageWatermarkDataUrl}")`
              : "none",
          } as CSSProperties
        }
      />
      <div
        className="willa-watermark__layer willa-watermark__layer--text"
        aria-hidden="true"
        style={
          {
            backgroundImage: textWatermarkDataUrl
              ? `url("${textWatermarkDataUrl}")`
              : "none",
          } as CSSProperties
        }
      />
      {children ? (
        <div className="willa-watermark__content">{children}</div>
      ) : null}
    </div>
  );
}

const normalizeWatermarkContent = (content?: string | Array<string>) => {
  if (!content) return new Array<string>();

  return (Array.isArray(content) ? content : [content])
    .map((item) => item.trim())
    .filter(Boolean);
};

const escapeSvgText = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const createWatermarkDataUrl = (options: {
  lines: Array<string>;
  image?: string;
  width: number;
  height: number;
  gap: [number, number];
  rotate: number;
  font: WatermarkFont;
}) => {
  const { lines, image, width, height, gap, rotate, font } = options;
  if (!image && lines.length === 0) return "";

  const tileWidth = width + gap[0];
  const tileHeight = height + gap[1];
  const centerX = tileWidth / 2;
  const centerY = tileHeight / 2;
  const fontSize = font.fontSize ?? 15;
  const lineHeight = font.lineHeight ?? fontSize * 1.45;
  const letterSpacing = font.letterSpacing ?? 0.6;
  const fontWeight = font.fontWeight ?? 560;
  const fontFamily =
    font.fontFamily ?? "Inter, ui-sans-serif, system-ui, sans-serif";
  const fontStyle = font.fontStyle ?? "normal";
  const textColor = font.color ?? LIGHT_FALLBACK_COLOR;

  const imageBlockHeight = image ? Math.min(height * 0.34, 34) : 0;
  const textBlockHeight = lines.length
    ? lineHeight * lines.length - (lineHeight - fontSize)
    : 0;
  const blockGap = image && lines.length ? Math.max(height * 0.08, 6) : 0;
  const totalHeight = imageBlockHeight + blockGap + textBlockHeight;
  const startY = centerY - totalHeight / 2;

  const imageMarkup = image
    ? createWatermarkImageMarkup({
        image,
        centerX,
        startY,
        width,
        imageBlockHeight,
      })
    : "";

  const textMarkup = lines
    .map((line, index) => {
      const y =
        startY +
        imageBlockHeight +
        blockGap +
        fontSize +
        lineHeight * index -
        fontSize * 0.16;

      return `<text x="${centerX}" y="${y}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}" font-weight="${fontWeight}" font-family="${fontFamily}" font-style="${fontStyle}" letter-spacing="${letterSpacing}">${escapeSvgText(line)}</text>`;
    })
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${tileWidth}" height="${tileHeight}" viewBox="0 0 ${tileWidth} ${tileHeight}">
      <g transform="rotate(${rotate} ${centerX} ${centerY})">
        ${imageMarkup}
        ${textMarkup}
      </g>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const createWatermarkImageMarkup = (options: {
  image: string;
  centerX: number;
  startY: number;
  width: number;
  imageBlockHeight: number;
}) => {
  const { image, centerX, startY, width, imageBlockHeight } = options;
  const imageWidth = Math.min(width * 0.36, 52);
  const imageX = centerX - imageWidth / 2;
  const imageY = startY;

  return `<image href="${escapeSvgText(image)}" x="${imageX}" y="${imageY}" width="${imageWidth}" height="${imageBlockHeight}" preserveAspectRatio="xMidYMid meet" opacity="0.96" />`;
};

Watermark.displayName = "Watermark";
