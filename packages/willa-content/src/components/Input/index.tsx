import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "outline" | "soft";

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> & {
  size?: InputSize;
  variant?: InputVariant;
  width?: CSSProperties["width"];
  invalid?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  leadingAddon?: ReactNode;
  trailingAddon?: ReactNode;
  inputClassName?: string;
  backgroundColor?: string;
  rangeColor?: string;
  rangeHeight?: CSSProperties["height"];
  rangeThumbColor?: string;
  rangeTrackColor?: string;
  textColor?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = "md",
    variant = "outline",
    width,
    invalid = false,
    leadingIcon,
    trailingIcon,
    leadingAddon,
    trailingAddon,
    inputClassName,
    backgroundColor,
    rangeColor,
    rangeHeight,
    rangeThumbColor,
    rangeTrackColor,
    textColor,
    className,
    disabled,
    style,
    ...inputProps
  } = props;
  const isInvalid =
    invalid ||
    inputProps["aria-invalid"] === true ||
    inputProps["aria-invalid"] === "true";
  const isRange = inputProps.type === "range";
  const inputStyle = getInputStyle({
    backgroundColor,
    rangeColor,
    rangeHeight,
    rangeThumbColor,
    rangeTrackColor,
    textColor,
    width,
    style,
  });

  return (
    <span
      className={classNames(
        "willa-input",
        `willa-input--${size}`,
        `willa-input--${variant}`,
        isRange && "willa-input--range",
        disabled && "willa-input--disabled",
        isInvalid && "willa-input--invalid",
        className,
      )}
      style={inputStyle}
      aria-disabled={disabled || undefined}
    >
      {leadingAddon ? (
        <span className="willa-input-addon">{leadingAddon}</span>
      ) : null}
      {leadingIcon ? (
        <span className="willa-input-icon" aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      <input
        {...inputProps}
        ref={ref}
        className={classNames(
          "willa-input-control",
          isRange && "willa-input-control--range",
          inputClassName,
        )}
        disabled={disabled}
        aria-invalid={isInvalid || inputProps["aria-invalid"]}
      />
      {trailingIcon ? (
        <span className="willa-input-icon" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
      {trailingAddon ? (
        <span className="willa-input-addon">{trailingAddon}</span>
      ) : null}
    </span>
  );
});

Input.displayName = "Input";

const getInputStyle = (options: {
  backgroundColor?: string;
  rangeColor?: string;
  rangeHeight?: CSSProperties["height"];
  rangeThumbColor?: string;
  rangeTrackColor?: string;
  textColor?: string;
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const {
    backgroundColor,
    rangeColor,
    rangeHeight,
    rangeThumbColor,
    rangeTrackColor,
    textColor,
    width,
    style,
  } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(backgroundColor
      ? { "--willa-input-custom-bg": backgroundColor }
      : undefined),
    ...(rangeColor ? { "--willa-input-custom-range": rangeColor } : undefined),
    ...(rangeHeight
      ? { "--willa-input-custom-range-height": rangeHeight }
      : undefined),
    ...(rangeThumbColor
      ? { "--willa-input-custom-range-thumb": rangeThumbColor }
      : undefined),
    ...(rangeTrackColor
      ? { "--willa-input-custom-range-track": rangeTrackColor }
      : undefined),
    ...(textColor ? { "--willa-input-custom-text": textColor } : undefined),
  } as CSSProperties;
};
