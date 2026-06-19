import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";
import classNames from "classnames";

export type RangeInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "children" | "type" | "width"
> & {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  color?: string;
  minWidth?: CSSProperties["minWidth"];
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
      minWidth,
      thumbBorderColor,
      thumbColor,
      thumbSize,
      trackColor,
      className,
      style,
      ...inputProps
    } = props;
    const rangeStyle = getRangeInputStyle({
      color,
      height,
      minWidth,
      thumbBorderColor,
      thumbColor,
      thumbSize,
      trackColor,
      width,
      style,
    });

    return (
      <input
        {...inputProps}
        ref={ref}
        type="range"
        className={classNames("willa-range-input", className)}
        style={rangeStyle}
      />
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
  } as CSSProperties;
};
