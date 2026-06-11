import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type MasonryGapPreset = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type MasonryGap = MasonryGapPreset | (string & {});

export type MasonryProps = {
  as?: ElementType;
  columns?: number;
  columnWidth?: string;
  gap?: MasonryGap;
  width?: string;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Masonry(props: MasonryProps) {
  const {
    as: Component = "div",
    columns,
    columnWidth,
    gap = "md",
    width,
    className,
    children,
    style,
    ...masonryProps
  } = props;
  const masonryStyle = {
    columnCount: columns,
    columnWidth,
    columnGap: resolveMasonryGap(gap),
    "--willa-masonry-item-gap": resolveMasonryGap(gap),
    width,
    ...style,
  } as CSSProperties;

  return (
    <Component
      {...masonryProps}
      style={masonryStyle}
      className={classNames("willa-masonry", className)}
    >
      {children}
    </Component>
  );
}

const masonryGapMap: Record<MasonryGapPreset, string> = {
  none: "0",
  xs: "0.35rem",
  sm: "0.55rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
};

const isMasonryGapPreset = (gap: MasonryGap): gap is MasonryGapPreset => {
  return gap in masonryGapMap;
};

const resolveMasonryGap = (gap: MasonryGap) => {
  return isMasonryGapPreset(gap) ? masonryGapMap[gap] : gap;
};
