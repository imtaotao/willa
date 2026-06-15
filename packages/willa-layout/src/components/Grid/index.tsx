import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type GridGapPreset = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GridGap = GridGapPreset | (string & {});
export type GridAlign = "start" | "center" | "end" | "stretch";
export type GridJustify = "start" | "center" | "end" | "stretch";

export type GridProps = {
  as?: ElementType;
  columns?: number | string;
  minColumnWidth?: string;
  gap?: GridGap;
  rowGap?: GridGap;
  columnGap?: GridGap;
  align?: GridAlign;
  justify?: GridJustify;
  width?: string;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Grid(props: GridProps) {
  const {
    style,
    rowGap,
    columns,
    columnGap,
    className,
    children,
    gap = "md",
    width = "100%",
    align = "stretch",
    justify = "stretch",
    as: Component = "div",
    minColumnWidth = "14rem",
    ...gridProps
  } = props;

  const gridStyle = {
    width,
    alignItems: align,
    justifyItems: justify,
    gridTemplateColumns: resolveGridColumns(columns, minColumnWidth),
    rowGap: rowGap ? resolveGridGap(rowGap) : resolveGridGap(gap),
    columnGap: columnGap ? resolveGridGap(columnGap) : resolveGridGap(gap),
    gap:
      rowGap === undefined && columnGap === undefined
        ? resolveGridGap(gap)
        : undefined,
    ...style,
  } satisfies CSSProperties;

  return (
    <Component
      {...gridProps}
      style={gridStyle}
      className={classNames("willa-grid", className)}
    >
      {children}
    </Component>
  );
}

const gridGapMap: Record<GridGapPreset, string> = {
  none: "0",
  xs: "0.35rem",
  sm: "0.55rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
};

const isGridGapPreset = (gap: GridGap): gap is GridGapPreset => {
  return gap in gridGapMap;
};

const resolveGridGap = (gap: GridGap) => {
  return isGridGapPreset(gap) ? gridGapMap[gap] : gap;
};

const resolveGridColumns = (
  columns: GridProps["columns"],
  minColumnWidth: string,
) => {
  if (typeof columns === "number") {
    return `repeat(${columns}, minmax(0, 1fr))`;
  }
  if (typeof columns === "string") {
    return columns;
  }
  return `repeat(auto-fit, minmax(min(100%, ${minColumnWidth}), 1fr))`;
};
