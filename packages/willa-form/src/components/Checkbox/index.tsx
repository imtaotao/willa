import {
  forwardRef,
  useEffect,
  useRef,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { composeRefs } from "@willa-ui/shared";
import classNames from "classnames";

export type CheckboxSize = "sm" | "md";

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "size" | "type"
> & {
  label?: ReactNode;
  description?: ReactNode;
  size?: CheckboxSize;
  invalid?: boolean;
  indeterminate?: boolean;
  inputClassName?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      description,
      size = "md",
      invalid = false,
      indeterminate = false,
      inputClassName,
      className,
      disabled,
      onChange,
      ...inputProps
    } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isInvalid =
      invalid ||
      inputProps["aria-invalid"] === true ||
      inputProps["aria-invalid"] === "true";

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (inputRef.current) {
        inputRef.current.indeterminate = false;
      }

      onChange?.(event);
    };

    return (
      <label
        className={classNames(
          "willa-checkbox",
          `willa-checkbox--${size}`,
          disabled && "willa-checkbox--disabled",
          isInvalid && "willa-checkbox--invalid",
          className,
        )}
      >
        <span className="willa-checkbox-control">
          <input
            {...inputProps}
            ref={composeRefs(inputRef, ref)}
            className={classNames("willa-checkbox-input", inputClassName)}
            disabled={disabled}
            type="checkbox"
            aria-invalid={isInvalid || inputProps["aria-invalid"]}
            onChange={handleChange}
          />
          <span className="willa-checkbox-box" aria-hidden="true">
            {indeterminate ? (
              <MinusIcon className="willa-checkbox-mark" />
            ) : (
              <CheckIcon className="willa-checkbox-mark" />
            )}
          </span>
        </span>
        {label || description ? (
          <span className="willa-checkbox-content">
            {label ? (
              <span className="willa-checkbox-label">{label}</span>
            ) : null}
            {description ? (
              <span className="willa-checkbox-description">{description}</span>
            ) : null}
          </span>
        ) : null}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
