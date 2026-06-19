import type { ComponentPropsWithoutRef, ReactNode } from "react";
import classNames from "classnames";

export type StatisticTone =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";
export type StatisticSize = "sm" | "md" | "lg";
export type StatisticTrend = "up" | "down" | "neutral";

export type StatisticProps = {
  label: ReactNode;
  value: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  description?: ReactNode;
  trend?: StatisticTrend;
  trendLabel?: ReactNode;
  icon?: ReactNode;
  tone?: StatisticTone;
  size?: StatisticSize;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function Statistic(props: StatisticProps) {
  const {
    label,
    value,
    prefix,
    suffix,
    description,
    trend = "neutral",
    trendLabel,
    icon,
    tone = "default",
    size = "md",
    className,
    ...divProps
  } = props;

  return (
    <div
      {...divProps}
      className={classNames(
        "willa-statistic",
        `willa-statistic--${tone}`,
        `willa-statistic--${size}`,
        className,
      )}
    >
      <div className="willa-statistic__header">
        {icon ? (
          <span className="willa-statistic__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span className="willa-statistic__label">{label}</span>
      </div>
      <div className="willa-statistic__value">
        {prefix ? (
          <span className="willa-statistic__prefix">{prefix}</span>
        ) : null}
        <span className="willa-statistic__number">{value}</span>
        {suffix ? (
          <span className="willa-statistic__suffix">{suffix}</span>
        ) : null}
      </div>
      {description || trendLabel ? (
        <div className="willa-statistic__meta">
          {trendLabel ? (
            <span
              className={classNames(
                "willa-statistic__trend",
                `willa-statistic__trend--${trend}`,
              )}
            >
              {trendLabel}
            </span>
          ) : null}
          {description ? (
            <span className="willa-statistic__description">{description}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

Statistic.displayName = "Statistic";
