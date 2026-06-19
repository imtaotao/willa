import type { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import { formatCssSize } from "@willa-ui/shared";

type SkeletonLineSpec =
  | number
  | string
  | {
      width?: number | string;
      height?: number | string;
    };

export type SkeletonProps = {
  loading: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  skeletonClassName?: string;
  lines?: number | Array<SkeletonLineSpec>;
  block?: boolean;
  blockHeight?: number | string;
  inline?: boolean;
  keepChildrenMounted?: boolean;
  label?: string;
  color?: string;
};

const resolveLines = (lines: SkeletonProps["lines"]) => {
  if (Array.isArray(lines)) return lines;
  return Array.from({ length: lines ?? 3 }, (_, index) =>
    index === 0 ? "44%" : index % 3 === 2 ? "76%" : "100%",
  );
};

const createLineStyle = (line: SkeletonLineSpec) => {
  if (typeof line === "number" || typeof line === "string") {
    return {
      "--willa-skeleton-line-width": formatCssSize(line),
    } as CSSProperties;
  }

  return {
    "--willa-skeleton-line-width": formatCssSize(line.width),
    "--willa-skeleton-line-height": formatCssSize(line.height),
  } as CSSProperties;
};

const createSkeletonBackground = (color: string | undefined) => {
  const value = color?.trim();
  if (!value) return undefined;

  return `linear-gradient(90deg, color-mix(in srgb, ${value} 72%, transparent), ${value}, color-mix(in srgb, ${value} 72%, transparent))`;
};

export function Skeleton({
  loading,
  children,
  className,
  contentClassName,
  skeletonClassName,
  lines,
  block,
  blockHeight,
  inline,
  keepChildrenMounted,
  label = "Loading",
  color,
}: SkeletonProps) {
  if (!loading && !keepChildrenMounted) return <>{children}</>;

  const Component = inline ? "span" : "div";
  const ContentComponent = inline ? "span" : "div";
  const skeletonRootClassName = classNames(
    "willa-prose-skeleton",
    inline && "willa-prose-skeleton--inline",
    className,
  );
  const resolvedContentClassName = classNames(
    "willa-prose-skeleton-content",
    contentClassName,
  );
  const resolvedSkeletonClassName = classNames(
    "willa-prose-skeleton-placeholder",
    skeletonClassName,
  );
  const skeletonStyle = {
    "--willa-skeleton-block-height": formatCssSize(blockHeight),
    "--willa-skeleton-bg": createSkeletonBackground(color),
  } as CSSProperties;

  return (
    <Component
      className={skeletonRootClassName}
      data-loading={loading ? "true" : "false"}
      data-keep-children-mounted={keepChildrenMounted ? "true" : "false"}
      aria-busy={loading}
      aria-label={loading ? label : undefined}
    >
      {loading ? (
        <span
          className={resolvedSkeletonClassName}
          style={skeletonStyle}
          aria-hidden="true"
        >
          <span className="willa-prose-skeleton-lines">
            {resolveLines(lines).map((line, index) => (
              <span
                className="willa-prose-skeleton-line"
                key={index}
                style={createLineStyle(line)}
              />
            ))}
          </span>
          {block ? <span className="willa-prose-skeleton-block" /> : null}
        </span>
      ) : null}
      {keepChildrenMounted || !loading ? (
        <ContentComponent className={resolvedContentClassName}>
          {children}
        </ContentComponent>
      ) : null}
    </Component>
  );
}

Skeleton.displayName = "Skeleton";
