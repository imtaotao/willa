import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";
import classNames from "classnames";

export type BorderBeamColorStop = {
  color: string;
  percent: number;
};

export type BorderBeamColor = string | Array<BorderBeamColorStop>;

export type BorderBeamProps = {
  as?: ElementType;
  children?: ReactNode;
  color?: BorderBeamColor;
  width?: number | string;
  outset?: number | string;
  radius?: number | string;
  duration?: number | string;
  delay?: number | string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "color">;

type BorderBeamStyle = CSSProperties & {
  "--willa-border-beam-width"?: string;
  "--willa-border-beam-outset"?: string;
  "--willa-border-beam-radius"?: string;
  "--willa-border-beam-duration"?: string;
  "--willa-border-beam-delay"?: string;
  "--willa-border-beam-gradient"?: string;
};

const MAX_BEAM_COLOR_STOP_PERCENT = 70;

export function BorderBeam(props: BorderBeamProps) {
  const {
    as: Component = "div",
    children,
    color,
    width,
    outset,
    radius,
    duration,
    delay,
    disabled = false,
    className,
    style,
    ...borderBeamProps
  } = props;
  const borderBeamStyle = createBorderBeamStyle({
    color,
    delay,
    duration,
    outset,
    radius,
    style,
    width,
  });

  return (
    <Component
      {...borderBeamProps}
      className={classNames(
        "willa-border-beam",
        disabled && "willa-border-beam--disabled",
        className,
      )}
      style={borderBeamStyle}
    >
      <span className="willa-border-beam__effect" aria-hidden="true" />
      {children}
    </Component>
  );
}

const createBorderBeamStyle = (options: {
  color?: BorderBeamColor;
  width?: number | string;
  outset?: number | string;
  radius?: number | string;
  duration?: number | string;
  delay?: number | string;
  style?: CSSProperties;
}) => {
  const nextStyle: BorderBeamStyle = {
    ...options.style,
  };
  const gradient = createBorderBeamGradient(options.color);

  if (options.width !== undefined) {
    nextStyle["--willa-border-beam-width"] = toCssLength(options.width);
  }
  if (options.outset !== undefined) {
    nextStyle["--willa-border-beam-outset"] = toCssLength(options.outset);
  }
  if (options.radius !== undefined) {
    nextStyle["--willa-border-beam-radius"] = toCssLength(options.radius);
  }
  if (options.duration !== undefined) {
    nextStyle["--willa-border-beam-duration"] = toCssDuration(options.duration);
  }
  if (options.delay !== undefined) {
    nextStyle["--willa-border-beam-delay"] = toCssDuration(options.delay);
  }
  if (gradient) {
    nextStyle["--willa-border-beam-gradient"] = gradient;
  }
  return nextStyle;
};

const createBorderBeamGradient = (color?: BorderBeamColor) => {
  if (!color) return null;

  const stops =
    typeof color === "string" ? [{ color, percent: 0 }] : color.slice();
  const gradientStops = fillGradientEnd(stops);

  if (gradientStops.length === 0) return null;

  const normalizedStops = gradientStops
    .sort((current, next) => current.percent - next.percent)
    .map((item) => {
      const percent =
        (clampPercent(item.percent) / 100) * MAX_BEAM_COLOR_STOP_PERCENT;
      return `${item.color} ${formatPercent(percent)}`;
    });

  if (normalizedStops.length === 0) return null;
  return `linear-gradient(to left, ${normalizedStops.join(", ")}, transparent)`;
};

const fillGradientEnd = (stops: Array<BorderBeamColorStop>) => {
  if (stops.length === 0) return stops;
  const lastStop = stops[stops.length - 1];
  if (lastStop.percent === 100) return stops;
  return [...stops, { ...lastStop, percent: 100 }];
};

const clampPercent = (value: number) => {
  return Math.min(Math.max(value, 0), 100);
};

const toCssLength = (value: number | string) => {
  return typeof value === "number" ? `${value}px` : value;
};

const toCssDuration = (value: number | string) => {
  return typeof value === "number" ? `${value}s` : value;
};

const formatPercent = (value: number) => {
  return `${Number(value.toFixed(2))}%`;
};

BorderBeam.displayName = "BorderBeam";
