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
  const inputStyle = getInputStyle({
    backgroundColor,
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
        className={classNames("willa-input-control", inputClassName)}
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
  textColor?: string;
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { backgroundColor, textColor, width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(backgroundColor
      ? { "--willa-input-custom-bg": backgroundColor }
      : undefined),
    ...(textColor ? { "--willa-input-custom-text": textColor } : undefined),
  } as CSSProperties;
};
