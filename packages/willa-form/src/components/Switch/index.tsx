import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type SwitchSize = "sm" | "md";

export type SwitchProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "size" | "type" | "role"
> & {
  label?: ReactNode;
  description?: ReactNode;
  size?: SwitchSize;
  invalid?: boolean;
  inputClassName?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
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
          "willa-switch",
          `willa-switch--${size}`,
          disabled && "willa-switch--disabled",
          isInvalid && "willa-switch--invalid",
          className,
        )}
      >
        {label || description ? (
          <span className="willa-switch-content">
            {label ? <span className="willa-switch-label">{label}</span> : null}
            {description ? (
              <span className="willa-switch-description">{description}</span>
            ) : null}
          </span>
        ) : null}
        <span className="willa-switch-control">
          <input
            {...inputProps}
            ref={ref}
            className={classNames("willa-switch-input", inputClassName)}
            disabled={disabled}
            type="checkbox"
            role="switch"
            aria-invalid={isInvalid || inputProps["aria-invalid"]}
          />
          <span className="willa-switch-track" aria-hidden="true">
            <span className="willa-switch-thumb" />
          </span>
        </span>
      </label>
    );
  },
);

Switch.displayName = "Switch";
