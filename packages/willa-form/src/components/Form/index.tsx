import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type FormGap = "sm" | "md" | "lg";

export type FormProps = Omit<ComponentPropsWithoutRef<"form">, "title"> & {
  error?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  gap?: FormGap;
  disabled?: boolean;
  loading?: boolean;
};

export function Form(props: FormProps) {
  const {
    error,
    children,
    actions,
    gap = "md",
    disabled = false,
    loading = false,
    className,
    ...formProps
  } = props;
  const isDisabled = disabled || loading;

  return (
    <form
      {...formProps}
      className={classNames("willa-form", `willa-form--gap-${gap}`, className)}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
    >
      <fieldset className="willa-form-body" disabled={isDisabled}>
        {children}
      </fieldset>
      {error ? (
        <div className="willa-form-error" role="alert">
          {error}
        </div>
      ) : null}
      {actions ? (
        <div className="willa-form-actions-slot">{actions}</div>
      ) : null}
    </form>
  );
}

Form.displayName = "Form";
