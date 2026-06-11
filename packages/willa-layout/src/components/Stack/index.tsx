import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type StackGapPreset = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type StackGap = StackGapPreset | (string & {});
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type StackProps = {
  as?: ElementType;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  inline?: boolean;
  width?: string;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Stack(props: StackProps) {
  const {
    as: Component = "div",
    gap = "md",
    align = "stretch",
    justify = "start",
    inline = false,
    width,
    className,
    children,
    style,
    ...stackProps
  } = props;
  const stackStyle = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: "column",
    alignItems: stackAlignMap[align],
    justifyContent: stackJustifyMap[justify],
    gap: resolveStackGap(gap),
    width,
    ...style,
  } satisfies CSSProperties;

  return (
    <Component
      {...stackProps}
      style={stackStyle}
      className={classNames("willa-stack", className)}
    >
      {children}
    </Component>
  );
}

const stackGapMap: Record<StackGapPreset, string> = {
  none: "0",
  xs: "0.35rem",
  sm: "0.55rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
};

const isStackGapPreset = (gap: StackGap): gap is StackGapPreset => {
  return gap in stackGapMap;
};

const resolveStackGap = (gap: StackGap) => {
  return isStackGapPreset(gap) ? stackGapMap[gap] : gap;
};

const stackAlignMap: Record<StackAlign, CSSProperties["alignItems"]> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const stackJustifyMap: Record<StackJustify, CSSProperties["justifyContent"]> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};
