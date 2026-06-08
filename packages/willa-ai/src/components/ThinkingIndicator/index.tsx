import type { ComponentPropsWithoutRef, ReactNode } from "react";
import classNames from "classnames";

export type ThinkingIndicatorStatus =
  | "thinking"
  | "searching"
  | "reading"
  | "generating"
  | "working";
export type ThinkingIndicatorSize = "sm" | "md";
export type ThinkingIndicatorTone =
  | "neutral"
  | "accent"
  | "success"
  | "warning";

export type ThinkingIndicatorProps = {
  status?: ThinkingIndicatorStatus;
  label?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  steps?: ReactNode[];
  activeStep?: number;
  size?: ThinkingIndicatorSize;
  tone?: ThinkingIndicatorTone;
  animated?: boolean;
  compact?: boolean;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function ThinkingIndicator({
  status = "thinking",
  label,
  description,
  icon,
  steps,
  activeStep = 0,
  size = "md",
  tone = "accent",
  animated = true,
  compact = false,
  className,
  ...props
}: ThinkingIndicatorProps) {
  const resolvedLabel = label ?? thinkingIndicatorLabelMap[status];
  const hasSteps = steps !== undefined && steps.length > 0;

  return (
    <div
      {...props}
      className={classNames(
        "willa-thinking-indicator",
        `willa-thinking-indicator--${status}`,
        `willa-thinking-indicator--${size}`,
        `willa-thinking-indicator--${tone}`,
        animated && "willa-thinking-indicator--animated",
        compact && "willa-thinking-indicator--compact",
        className,
      )}
      role={props.role ?? "status"}
      aria-live={props["aria-live"] ?? "polite"}
    >
      <span className="willa-thinking-indicator-mark" aria-hidden="true">
        {icon ?? <ThinkingDots />}
      </span>
      <span className="willa-thinking-indicator-body">
        <span className="willa-thinking-indicator-label">{resolvedLabel}</span>
        {description ? (
          <span className="willa-thinking-indicator-description">
            {description}
          </span>
        ) : null}
        {hasSteps ? (
          <span className="willa-thinking-indicator-steps">
            {steps.map((step, index) => (
              <span
                key={index}
                className={classNames(
                  "willa-thinking-indicator-step",
                  index < activeStep && "willa-thinking-indicator-step--done",
                  index === activeStep &&
                    "willa-thinking-indicator-step--active",
                )}
              >
                {step}
              </span>
            ))}
          </span>
        ) : null}
      </span>
    </div>
  );
}

const ThinkingDots = () => (
  <span className="willa-thinking-indicator-dots">
    <span />
    <span />
    <span />
  </span>
);

const thinkingIndicatorLabelMap: Record<ThinkingIndicatorStatus, string> = {
  thinking: "正在思考",
  searching: "正在检索",
  reading: "正在读取",
  generating: "正在生成",
  working: "正在处理",
};
