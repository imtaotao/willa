import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";
export type SpinnerTone =
  | "default"
  | "neutral"
  | "success"
  | "warning"
  | "danger";
export type SpinnerLabelPosition = "inline" | "block";

export type SpinnerProps = {
  label?: ReactNode;
  size?: SpinnerSize;
  tone?: SpinnerTone;
  labelPosition?: SpinnerLabelPosition;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function Spinner(props: SpinnerProps) {
  const {
    label = "加载中",
    size = "md",
    tone = "default",
    labelPosition = "inline",
    className,
    ...spinnerProps
  } = props;
  const hasVisibleLabel = label !== undefined && label !== null && label !== "";

  return (
    <span
      {...spinnerProps}
      className={classNames(
        "willa-spinner",
        `willa-spinner--${size}`,
        `willa-spinner--${tone}`,
        `willa-spinner--${labelPosition}`,
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <span className="willa-spinner-indicator" aria-hidden="true" />
      {hasVisibleLabel ? (
        <span className="willa-spinner-label">{label}</span>
      ) : (
        <span className="willa-spinner-sr-only">加载中</span>
      )}
    </span>
  );
}

Spinner.displayName = "Spinner";
