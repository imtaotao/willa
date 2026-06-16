import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { clampNumber, formatCssSize } from "@willa-ui/shared";

export type ProgressSize = "sm" | "md" | "lg";
export type ProgressTone =
  | "default"
  | "neutral"
  | "success"
  | "warning"
  | "danger";

export type ProgressProps = {
  value?: number;
  max?: number;
  bufferValue?: number;
  label?: ReactNode;
  description?: ReactNode;
  valueLabel?: ReactNode;
  showValue?: boolean;
  indeterminate?: boolean;
  size?: ProgressSize;
  tone?: ProgressTone;
  width?: number | string;
  height?: number | string;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Progress({
  value = 0,
  max = 100,
  bufferValue,
  label,
  description,
  valueLabel,
  showValue,
  indeterminate,
  size = "md",
  tone = "default",
  width,
  height,
  className,
  ...rootProps
}: ProgressProps) {
  const resolvedMax = Number.isFinite(max) && max > 0 ? max : 100;
  const normalizedValue = normalizeProgressValue(value, resolvedMax);
  const normalizedBufferValue =
    typeof bufferValue === "number"
      ? normalizeProgressValue(bufferValue, resolvedMax)
      : undefined;
  const resolvedValueLabel =
    valueLabel ?? `${Math.round((normalizedValue / resolvedMax) * 100)}%`;
  const hasHeader = label || description || showValue || valueLabel;
  const progressStyle = {
    width: formatCssSize(width),
    "--willa-progress-height-custom": formatCssSize(height),
    "--willa-progress-value": `${(normalizedValue / resolvedMax) * 100}%`,
    "--willa-progress-buffer-value":
      normalizedBufferValue === undefined
        ? undefined
        : `${(normalizedBufferValue / resolvedMax) * 100}%`,
  } as CSSProperties;

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-progress",
        `willa-progress--${size}`,
        `willa-progress--${tone}`,
        indeterminate && "willa-progress--indeterminate",
        className,
      )}
      style={{ ...progressStyle, ...rootProps.style }}
    >
      {hasHeader ? (
        <div className="willa-progress-header">
          <div className="willa-progress-label-group">
            {label ? <div className="willa-progress-label">{label}</div> : null}
            {description ? (
              <div className="willa-progress-description">{description}</div>
            ) : null}
          </div>
          {showValue || valueLabel ? (
            <div className="willa-progress-value-label">
              {resolvedValueLabel}
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        className="willa-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={indeterminate ? undefined : resolvedMax}
        aria-valuenow={indeterminate ? undefined : normalizedValue}
        aria-valuetext={
          typeof resolvedValueLabel === "string"
            ? resolvedValueLabel
            : undefined
        }
      >
        {normalizedBufferValue === undefined ? null : (
          <span className="willa-progress-buffer" />
        )}
        <span className="willa-progress-indicator" />
      </div>
    </div>
  );
}

const normalizeProgressValue = (value: number, max: number) => {
  if (!Number.isFinite(value)) return 0;
  return clampNumber(value, 0, max);
};
