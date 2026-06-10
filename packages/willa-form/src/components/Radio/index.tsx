import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type RadioSize = "sm" | "md";

export type RadioProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "size" | "type"
> & {
  label?: ReactNode;
  description?: ReactNode;
  size?: RadioSize;
  invalid?: boolean;
  inputClassName?: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    label,
    description,
    size = "md",
    invalid = false,
    inputClassName,
    className,
    disabled,
    ...inputProps
  } = props;
  const isInvalid =
    invalid ||
    inputProps["aria-invalid"] === true ||
    inputProps["aria-invalid"] === "true";

  return (
    <label
      className={classNames(
        "willa-radio",
        `willa-radio--${size}`,
        disabled && "willa-radio--disabled",
        isInvalid && "willa-radio--invalid",
        className,
      )}
    >
      <span className="willa-radio-control">
        <input
          {...inputProps}
          ref={ref}
          className={classNames("willa-radio-input", inputClassName)}
          disabled={disabled}
          type="radio"
          aria-invalid={isInvalid || inputProps["aria-invalid"]}
        />
        <span className="willa-radio-dot" aria-hidden="true" />
      </span>
      {label || description ? (
        <span className="willa-radio-content">
          {label ? <span className="willa-radio-label">{label}</span> : null}
          {description ? (
            <span className="willa-radio-description">{description}</span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
});

Radio.displayName = "Radio";
