import type { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

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
};

const formatSize = (value: number | string | undefined) => {
  if (typeof value === "number" && Number.isFinite(value)) return `${value}px`;
  if (typeof value === "string") return value.trim();
  return undefined;
};

const resolveLines = (lines: SkeletonProps["lines"]) => {
  if (Array.isArray(lines)) return lines;
  return Array.from({ length: lines ?? 3 }, (_, index) =>
    index === 0 ? "44%" : index % 3 === 2 ? "76%" : "100%",
  );
};

const createLineStyle = (line: SkeletonLineSpec) => {
  if (typeof line === "number" || typeof line === "string") {
    return { "--willa-skeleton-line-width": formatSize(line) } as CSSProperties;
  }

  return {
    "--willa-skeleton-line-width": formatSize(line.width),
    "--willa-skeleton-line-height": formatSize(line.height),
  } as CSSProperties;
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
    "--willa-skeleton-block-height": formatSize(blockHeight),
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
