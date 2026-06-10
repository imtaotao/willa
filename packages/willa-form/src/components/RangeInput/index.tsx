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
  thumbColor?: string;
  trackColor?: string;
};

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (props, ref) => {
    const {
      width,
      height,
      color,
      thumbColor,
      trackColor,
      className,
      style,
      ...inputProps
    } = props;
    const rangeStyle = getRangeInputStyle({
      color,
      height,
      thumbColor,
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
  thumbColor?: string;
  trackColor?: string;
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { color, height, thumbColor, trackColor, width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(color ? { "--willa-range-input-custom-color": color } : undefined),
    ...(height ? { "--willa-range-input-custom-height": height } : undefined),
    ...(thumbColor
      ? { "--willa-range-input-custom-thumb": thumbColor }
      : undefined),
    ...(trackColor
      ? { "--willa-range-input-custom-track": trackColor }
      : undefined),
  } as CSSProperties;
};
