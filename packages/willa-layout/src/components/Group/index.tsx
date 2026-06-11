import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Children } from "react";
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
  inline?: boolean;
  grow?: boolean;
  reverse?: boolean;
  width?: string;
  separator?: ReactNode;
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
    inline = false,
    grow = false,
    reverse = false,
    width,
    separator,
    className,
    children,
    style,
    ...groupProps
  } = props;
  const groupStyle = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: resolveGroupDirection(direction, reverse),
    flexWrap: wrap ? "wrap" : "nowrap",
    alignItems: groupAlignMap[align],
    justifyContent: groupJustifyMap[justify],
    gap: resolveGroupGap(gap),
    width,
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
      {separator
        ? renderGroupChildrenWithSeparator(children, separator)
        : children}
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

const resolveGroupDirection = (direction: GroupDirection, reverse: boolean) => {
  if (!reverse) return direction;
  return direction === "row" ? "row-reverse" : "column-reverse";
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

const renderGroupChildrenWithSeparator = (
  children: ReactNode,
  separator: ReactNode,
) => {
  return Children.toArray(children)
    .filter((child) => child !== null && child !== undefined)
    .flatMap((child, index, array) => {
      const item = child;
      if (index === array.length - 1) return [item];

      return [
        item,
        <span
          key={`separator-${index}`}
          className="willa-group-separator"
          aria-hidden="true"
        >
          {separator}
        </span>,
      ];
    });
};
