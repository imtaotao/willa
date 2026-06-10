import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type FormGroupGap = "sm" | "md" | "lg";
export type FormGroupColumns = 1 | 2;

export type FormGroupProps = Omit<
  ComponentPropsWithoutRef<"fieldset">,
  "title"
> & {
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  gap?: FormGroupGap;
  columns?: FormGroupColumns;
};

export function FormGroup(props: FormGroupProps) {
  const {
    title,
    description,
    children,
    gap = "md",
    columns = 1,
    className,
    ...groupProps
  } = props;

  return (
    <fieldset
      {...groupProps}
      className={classNames(
        "willa-form-group",
        `willa-form-group--gap-${gap}`,
        `willa-form-group--columns-${columns}`,
        className,
      )}
    >
      {title || description ? (
        <legend className="willa-form-group-header">
          {title ? (
            <span className="willa-form-group-title">{title}</span>
          ) : null}
          {description ? (
            <span className="willa-form-group-description">{description}</span>
          ) : null}
        </legend>
      ) : null}
      <div className="willa-form-group-content">{children}</div>
    </fieldset>
  );
}
