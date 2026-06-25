import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { clampNumber } from "@willa-ui/shared";

export type ContextWindowMeterTone =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger";

export type ContextWindowMeterSize = "sm" | "md";

export type ContextWindowMeterSegment = {
  id: string;
  label: ReactNode;
  value: number;
  tone?: ContextWindowMeterTone;
  meta?: ReactNode;
};

export type ContextWindowMeterProps = {
  value: number;
  max: number;
  label?: ReactNode;
  description?: ReactNode;
  unit?: ReactNode;
  size?: ContextWindowMeterSize;
  tone?: ContextWindowMeterTone;
  warningThreshold?: number;
  dangerThreshold?: number;
  segments?: Array<ContextWindowMeterSegment>;
  showValue?: boolean;
  formatValue?: (value: number, max: number) => ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

const defaultWarningThreshold = 0.72;
const defaultDangerThreshold = 0.9;
const remainderSegmentId = "__willa-context-window-meter-remainder";
const remainderSegmentLabel = "未分类";

export function ContextWindowMeter({
  value,
  max,
  label = "上下文窗口",
  description,
  unit = "tokens",
  size = "md",
  tone,
  warningThreshold = defaultWarningThreshold,
  dangerThreshold = defaultDangerThreshold,
  segments,
  showValue = true,
  formatValue,
  className,
  style,
  ...props
}: ContextWindowMeterProps) {
  const hasSegments = segments !== undefined && segments.length > 0;
  const resolvedMax = Number.isFinite(max) && max > 0 ? max : 0;
  const normalizedValue =
    resolvedMax > 0 ? clampNumber(value, 0, resolvedMax) : 0;
  const ratio = resolvedMax > 0 ? normalizedValue / resolvedMax : 0;
  const resolvedTone =
    tone ?? getContextWindowMeterTone(ratio, warningThreshold, dangerThreshold);
  const renderedSegments =
    hasSegments && resolvedMax > 0
      ? getContextWindowMeterSegments(
          segments,
          normalizedValue,
          resolvedMax,
          resolvedTone,
        )
      : [];

  const defaultValueText = `${formatCompactNumber(
    normalizedValue,
  )} / ${formatCompactNumber(resolvedMax)} ${
    typeof unit === "string" ? unit : ""
  }`.trim();

  const valueLabel =
    formatValue?.(normalizedValue, resolvedMax) ??
    renderContextWindowMeterValue(normalizedValue, resolvedMax, unit);

  const meterStyle = {
    "--willa-context-window-meter-value": `${ratio * 100}%`,
    ...style,
  } as CSSProperties;

  return (
    <section
      {...props}
      className={classNames(
        "willa-context-window-meter",
        `willa-context-window-meter--${size}`,
        `willa-context-window-meter--${resolvedTone}`,
        className,
      )}
      data-tone={resolvedTone}
      style={meterStyle}
    >
      <div className="willa-context-window-meter__header">
        <div className="willa-context-window-meter__heading">
          {label ? (
            <h3 className="willa-context-window-meter__title">{label}</h3>
          ) : null}
          {description ? (
            <div className="willa-context-window-meter__description">
              {description}
            </div>
          ) : null}
        </div>
        {showValue ? (
          <div className="willa-context-window-meter__value">{valueLabel}</div>
        ) : null}
      </div>

      <div
        className="willa-context-window-meter__track"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={resolvedMax}
        aria-valuenow={normalizedValue}
        aria-valuetext={
          typeof valueLabel === "string" ? valueLabel : defaultValueText
        }
      >
        {hasSegments ? (
          renderedSegments.map((segment) => (
            <span
              className={classNames(
                "willa-context-window-meter__segment",
                `willa-context-window-meter__segment--${segment.tone}`,
              )}
              key={segment.id}
              style={
                {
                  "--willa-context-window-meter-segment-value": `${
                    segment.ratio * 100
                  }%`,
                } as CSSProperties
              }
            />
          ))
        ) : (
          <span className="willa-context-window-meter__fill" />
        )}
      </div>

      {hasSegments ? (
        <dl className="willa-context-window-meter__legend">
          {renderedSegments.map((segment) => (
            <div
              className="willa-context-window-meter__legend-item"
              key={segment.id}
            >
              <dt>
                <span
                  className={classNames(
                    "willa-context-window-meter__legend-mark",
                    `willa-context-window-meter__legend-mark--${segment.tone}`,
                  )}
                  aria-hidden="true"
                />
                <span className="willa-context-window-meter__legend-label">
                  {segment.label}
                </span>
              </dt>
              <dd>
                {segment.meta ??
                  `${formatCompactNumber(segment.renderedValue)} ${
                    typeof unit === "string" ? unit : ""
                  }`}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}

const getContextWindowMeterSegments = (
  segments: Array<ContextWindowMeterSegment>,
  value: number,
  max: number,
  fallbackTone: ContextWindowMeterTone,
) => {
  let remainingValue = value;
  const renderedSegments = segments
    .map((segment) => {
      const segmentValue = clampNumber(segment.value, 0, max);
      const renderedValue = clampNumber(segmentValue, 0, remainingValue);
      remainingValue -= renderedValue;

      return {
        id: segment.id,
        label: segment.label,
        meta: renderedValue === segmentValue ? segment.meta : null,
        ratio: renderedValue / max,
        renderedValue,
        tone: segment.tone ?? "neutral",
      };
    })
    .filter((segment) => segment.renderedValue > 0);

  if (remainingValue > 0) {
    renderedSegments.push({
      id: remainderSegmentId,
      label: remainderSegmentLabel,
      meta: null,
      ratio: remainingValue / max,
      renderedValue: remainingValue,
      tone: fallbackTone,
    });
  }

  return renderedSegments;
};

const getContextWindowMeterTone = (
  ratio: number,
  warningThreshold: number,
  dangerThreshold: number,
) => {
  if (ratio >= dangerThreshold) {
    return "danger";
  }

  if (ratio >= warningThreshold) {
    return "warning";
  }

  return "info";
};

const renderContextWindowMeterValue = (
  value: number,
  max: number,
  unit: ReactNode,
) => {
  return (
    <>
      {formatCompactNumber(value)} / {formatCompactNumber(max)}
      {unit ? <> {unit}</> : null}
    </>
  );
};

const formatCompactNumber = (value: number) => {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: value >= 1000 ? 1 : 0,
    notation: value >= 10000 ? "compact" : "standard",
  }).format(value);
};

ContextWindowMeter.displayName = "ContextWindowMeter";
