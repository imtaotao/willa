import type { HTMLAttributes, ReactNode } from "react";
import { Group } from "@willa-ui/layout/components/Group";
import type {
  GroupAlign,
  GroupGap,
  GroupJustify,
} from "@willa-ui/layout/components/Group";
import classNames from "classnames";

export type ToolbarOrientation = "horizontal" | "vertical";
export type ToolbarSize = "sm" | "md";

export type ToolbarProps = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  orientation?: ToolbarOrientation;
  size?: ToolbarSize;
  gap?: GroupGap;
  align?: GroupAlign;
  justify?: GroupJustify;
  wrap?: boolean;
  separator?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<
  HTMLAttributes<HTMLDivElement>,
  "aria-label" | "aria-labelledby" | "children" | "role" | "aria-orientation"
>;

export function Toolbar(props: ToolbarProps) {
  const {
    ariaLabel,
    ariaLabelledBy,
    orientation = "horizontal",
    size = "md",
    gap = "xs",
    align = "center",
    justify = "start",
    wrap = false,
    separator,
    className,
    children,
    ...toolbarProps
  } = props;

  return (
    <Group
      {...toolbarProps}
      as="div"
      role="toolbar"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-orientation={orientation}
      direction={orientation === "vertical" ? "column" : "row"}
      gap={gap}
      align={align}
      justify={justify}
      wrap={wrap}
      separator={separator}
      className={classNames(
        "willa-toolbar",
        `willa-toolbar--${orientation}`,
        `willa-toolbar--${size}`,
        wrap && "willa-toolbar--wrap",
        className,
      )}
    >
      {children}
    </Group>
  );
}

Toolbar.displayName = "Toolbar";
