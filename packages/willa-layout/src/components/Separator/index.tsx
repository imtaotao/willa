import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type SeparatorOrientation = "horizontal" | "vertical";
export type SeparatorSize = "sm" | "md" | "lg";
export type SeparatorAlign = "start" | "center" | "end";
export type SeparatorVariant = "solid" | "dashed" | "dotted";

export type SeparatorProps = {
  orientation?: SeparatorOrientation;
  size?: SeparatorSize;
  align?: SeparatorAlign;
  variant?: SeparatorVariant;
  plain?: boolean;
  decorative?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Separator(props: SeparatorProps) {
  const {
    orientation = "horizontal",
    size = "md",
    align = "center",
    variant = "solid",
    plain = false,
    decorative = true,
    className,
    children,
    ...separatorProps
  } = props;
  const hasLabel = orientation === "horizontal" && Boolean(children);

  return (
    <div
      {...separatorProps}
      className={classNames(
        "willa-separator",
        `willa-separator--${orientation}`,
        `willa-separator--${size}`,
        `willa-separator--${variant}`,
        plain && "willa-separator--plain",
        hasLabel && `willa-separator--${align}`,
        hasLabel && "willa-separator--labeled",
        className,
      )}
      role={decorative ? "presentation" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
    >
      {hasLabel ? (
        <>
          <span className="willa-separator-line" />
          <span className="willa-separator-label">{children}</span>
          <span className="willa-separator-line" />
        </>
      ) : null}
    </div>
  );
}
