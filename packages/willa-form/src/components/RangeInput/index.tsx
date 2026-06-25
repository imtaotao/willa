import {
  forwardRef,
  useMemo,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type InputEvent,
  type ReactNode,
} from "react";
import { useControllableState } from "@willa-ui/shared";
import classNames from "classnames";

export type RangeInputSize = "sm" | "md" | "lg";
export type RangeInputMark =
  | number
  | {
      value: number;
      label?: ReactNode;
    };

export type RangeInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "children" | "size" | "type" | "width"
> & {
  size?: RangeInputSize;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  color?: string;
  formatValue?: (value: number) => ReactNode;
  marks?: Array<RangeInputMark>;
  minWidth?: CSSProperties["minWidth"];
  showValue?: boolean;
  thumbColor?: string;
  thumbBorderColor?: string;
  thumbSize?: CSSProperties["width"];
  trackColor?: string;
};

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (props, ref) => {
    const {
      width,
      height,
      color,
      formatValue,
      marks,
      minWidth,
      showValue = false,
      thumbBorderColor,
      thumbColor,
      thumbSize,
      trackColor,
      className,
      defaultValue,
      max,
      min,
      onChange,
      onInput,
      size = "md",
      style,
      value,
      ...inputProps
    } = props;
    const numericMin = getRangeNumber(min, 0);
    const numericMax = getRangeNumber(max, 100);
    const fallbackValue = getDefaultRangeValue(numericMin, numericMax);
    const normalizedMarks = useMemo(
      () => normalizeRangeMarks(marks, numericMin, numericMax),
      [marks, numericMax, numericMin],
    );
    const controlledValue =
      value === undefined ? undefined : getRangeNumber(value, fallbackValue);
    const [currentValue, setCurrentValue] = useControllableState({
      value: controlledValue,
      defaultValue: () => getRangeNumber(defaultValue, fallbackValue),
    });
    const progress = getRangeProgress(currentValue, numericMin, numericMax);
    const withMeta = showValue || normalizedMarks.length > 0;
    const rangeStyle = getRangeInputStyle({
      color,
      height,
      minWidth: withMeta ? 0 : minWidth,
      thumbBorderColor,
      thumbColor,
      thumbSize,
      trackColor,
      width: withMeta ? "100%" : width,
      style: withMeta ? undefined : style,
      progress,
    });
    const containerStyle = withMeta
      ? getRangeInputFieldStyle({ minWidth, style, width })
      : undefined;
    const formattedValue = formatValue
      ? formatValue(currentValue)
      : currentValue;

    const handleInput = (event: InputEvent<HTMLInputElement>) => {
      setCurrentValue(getRangeNumber(event.currentTarget.value, fallbackValue));
      onInput?.(event);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(getRangeNumber(event.currentTarget.value, fallbackValue));
      onChange?.(event);
    };

    const input = (
      <input
        {...inputProps}
        ref={ref}
        type="range"
        min={min}
        max={max}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onInput={handleInput}
        className={classNames(
          "willa-range-input",
          `willa-range-input--${size}`,
          className,
        )}
        style={rangeStyle}
      />
    );

    if (!withMeta) {
      return input;
    }

    return (
      <span
        className={classNames(
          "willa-range-input-field",
          `willa-range-input-field--${size}`,
        )}
        style={containerStyle}
      >
        <span className="willa-range-input-row">
          {input}
          {showValue ? (
            <output className="willa-range-input-value">
              {formattedValue}
            </output>
          ) : null}
        </span>
        {normalizedMarks.length > 0 ? (
          <span className="willa-range-input-marks" aria-hidden="true">
            {normalizedMarks.map((mark) => (
              <span
                key={mark.value}
                className="willa-range-input-mark"
                style={{ insetInlineStart: `${mark.position}%` }}
              >
                <span className="willa-range-input-mark-tick" />
                {mark.label !== undefined && mark.label !== null ? (
                  <span className="willa-range-input-mark-label">
                    {mark.label}
                  </span>
                ) : null}
              </span>
            ))}
          </span>
        ) : null}
      </span>
    );
  },
);

RangeInput.displayName = "RangeInput";

const getRangeInputStyle = (options: {
  color?: string;
  height?: CSSProperties["height"];
  minWidth?: CSSProperties["minWidth"];
  thumbBorderColor?: string;
  thumbColor?: string;
  thumbSize?: CSSProperties["width"];
  trackColor?: string;
  width?: CSSProperties["width"];
  style?: CSSProperties;
  progress?: number;
}) => {
  const {
    color,
    height,
    minWidth,
    thumbBorderColor,
    thumbColor,
    thumbSize,
    trackColor,
    width,
    style,
    progress,
  } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(minWidth === undefined
      ? undefined
      : { "--willa-range-input-custom-min-width": minWidth }),
    ...(color ? { "--willa-range-input-custom-color": color } : undefined),
    ...(height ? { "--willa-range-input-custom-height": height } : undefined),
    ...(thumbBorderColor
      ? { "--willa-range-input-custom-thumb-border": thumbBorderColor }
      : undefined),
    ...(thumbColor
      ? { "--willa-range-input-custom-thumb": thumbColor }
      : undefined),
    ...(thumbSize
      ? { "--willa-range-input-custom-thumb-size": thumbSize }
      : undefined),
    ...(trackColor
      ? { "--willa-range-input-custom-track": trackColor }
      : undefined),
    ...(progress === undefined
      ? undefined
      : { "--willa-range-input-progress": `${progress}%` }),
  } as CSSProperties;
};

const getRangeInputFieldStyle = (options: {
  minWidth?: CSSProperties["minWidth"];
  style?: CSSProperties;
  width?: CSSProperties["width"];
}) => {
  const { minWidth, style, width } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(minWidth === undefined ? undefined : { minWidth }),
  } as CSSProperties;
};

const getRangeNumber = (
  value: ComponentPropsWithoutRef<"input">["value"],
  fallback: number,
) => {
  if (Array.isArray(value)) {
    return fallback;
  }

  const numericValue = Number(value);

  return Number.isFinite(numericValue) ? numericValue : fallback;
};

const getRangeProgress = (value: number, min: number, max: number) => {
  const span = max - min;

  if (span <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, ((value - min) / span) * 100));
};

const getDefaultRangeValue = (min: number, max: number) => {
  if (max < min) {
    return min;
  }

  return min + (max - min) / 2;
};

const normalizeRangeMarks = (
  marks: Array<RangeInputMark> | undefined,
  min: number,
  max: number,
) => {
  if (!marks?.length) {
    return [];
  }

  return marks.map((mark) => {
    const value = typeof mark === "number" ? mark : mark.value;
    const label = typeof mark === "number" ? String(mark) : mark.label;

    return {
      label,
      value,
      position: getRangeProgress(value, min, max),
    };
  });
};
