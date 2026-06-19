import { useId, type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type FormFieldSize = "sm" | "md";
export type FormFieldOrientation = "vertical" | "horizontal";

export type FormFieldProps = Omit<ComponentPropsWithoutRef<"div">, "title"> & {
  label?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  size?: FormFieldSize;
  orientation?: FormFieldOrientation;
  labelClassName?: string;
  controlClassName?: string;
};

export function FormField(props: FormFieldProps) {
  const {
    label,
    children,
    description,
    error,
    required = false,
    htmlFor,
    size = "md",
    orientation = "vertical",
    labelClassName,
    controlClassName,
    className,
    ...fieldProps
  } = props;
  const generatedDescriptionId = useId();
  const generatedErrorId = useId();
  const descriptionId = description ? generatedDescriptionId : undefined;
  const errorId = error ? generatedErrorId : undefined;
  const hasError = Boolean(error);

  return (
    <div
      {...fieldProps}
      className={classNames(
        "willa-form-field",
        `willa-form-field--${size}`,
        `willa-form-field--${orientation}`,
        hasError && "willa-form-field--invalid",
        className,
      )}
    >
      {label ? (
        <label
          className={classNames("willa-form-field-label", labelClassName)}
          htmlFor={htmlFor}
        >
          <span className="willa-form-field-label-text">{label}</span>
          {required ? (
            <span className="willa-form-field-required" aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      ) : null}
      <div
        className={classNames("willa-form-field-control", controlClassName)}
        aria-describedby={descriptionId}
      >
        {children}
        {description ? (
          <div className="willa-form-field-description" id={descriptionId}>
            {description}
          </div>
        ) : null}
        {error ? (
          <div className="willa-form-field-error" id={errorId} role="alert">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
}

FormField.displayName = "FormField";
