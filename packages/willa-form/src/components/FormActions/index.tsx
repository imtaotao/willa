import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";

export type FormActionsAlign = "start" | "end" | "between";
export type FormActionsDirection = "row" | "column";
export type FormActionsGap = "xs" | "sm" | "md";

export type FormActionsProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  align?: FormActionsAlign;
  direction?: FormActionsDirection;
  gap?: FormActionsGap;
  sticky?: boolean;
};

export function FormActions(props: FormActionsProps) {
  const {
    children,
    align = "end",
    direction = "row",
    gap = "sm",
    sticky = false,
    className,
    ...actionsProps
  } = props;

  return (
    <div
      {...actionsProps}
      className={classNames(
        "willa-form-actions",
        `willa-form-actions--${align}`,
        `willa-form-actions--${direction}`,
        `willa-form-actions--gap-${gap}`,
        sticky && "willa-form-actions--sticky",
        className,
      )}
    >
      {children}
    </div>
  );
}

FormActions.displayName = "FormActions";
