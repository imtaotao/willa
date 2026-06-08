import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type GroupGapPreset = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GroupGap = GroupGapPreset | (string & {});
export type GroupAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type GroupJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type GroupDirection = "row" | "column";

export type GroupProps = {
  as?: ElementType;
  gap?: GroupGap;
  align?: GroupAlign;
  justify?: GroupJustify;
  direction?: GroupDirection;
  wrap?: boolean;
  grow?: boolean;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Group(props: GroupProps) {
  const {
    as: Component = "div",
    gap = "sm",
    align = "center",
    justify = "start",
    direction = "row",
    wrap = true,
    grow = false,
    inline = false,
    className,
    children,
    style,
    ...groupProps
  } = props;
  const groupStyle = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
    alignItems: groupAlignMap[align],
    justifyContent: groupJustifyMap[justify],
    gap: resolveGroupGap(gap),
    ...style,
  } satisfies CSSProperties;

  return (
    <Component
      {...groupProps}
      style={groupStyle}
      className={classNames(
        "willa-group",
        grow && "willa-group--grow",
        className,
      )}
    >
      {children}
    </Component>
  );
}

const groupGapMap: Record<GroupGapPreset, string> = {
  none: "0",
  xs: "0.35rem",
  sm: "0.55rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
};

const isGroupGapPreset = (gap: GroupGap): gap is GroupGapPreset => {
  return gap in groupGapMap;
};

const resolveGroupGap = (gap: GroupGap) => {
  return isGroupGapPreset(gap) ? groupGapMap[gap] : gap;
};

const groupAlignMap: Record<GroupAlign, CSSProperties["alignItems"]> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const groupJustifyMap: Record<GroupJustify, CSSProperties["justifyContent"]> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};
