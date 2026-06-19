import { useId, type ComponentPropsWithoutRef, type ReactNode } from "react";
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
  const titleId = useId();
  const descriptionId = useId();

  return (
    <fieldset
      {...groupProps}
      aria-labelledby={title ? titleId : groupProps["aria-labelledby"]}
      aria-describedby={
        description ? descriptionId : groupProps["aria-describedby"]
      }
      className={classNames(
        "willa-form-group",
        `willa-form-group--gap-${gap}`,
        `willa-form-group--columns-${columns}`,
        className,
      )}
    >
      {title || description ? (
        <div className="willa-form-group-header">
          {title ? (
            <span className="willa-form-group-title" id={titleId}>
              {title}
            </span>
          ) : null}
          {description ? (
            <span className="willa-form-group-description" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="willa-form-group-content">{children}</div>
    </fieldset>
  );
}

FormGroup.displayName = "FormGroup";
