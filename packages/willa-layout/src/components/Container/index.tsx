import type { ElementType, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type ContainerPadding = "none" | "sm" | "md" | "lg";

export type ContainerProps = {
  as?: ElementType;
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Container(props: ContainerProps) {
  const {
    as: Component = "div",
    size = "lg",
    padding = "md",
    centered = true,
    className,
    children,
    ...containerProps
  } = props;

  return (
    <Component
      {...containerProps}
      className={classNames(
        "willa-container",
        `willa-container--${size}`,
        `willa-container--padding-${padding}`,
        centered && "willa-container--centered",
        className,
      )}
    >
      {children}
    </Component>
  );
}

Container.displayName = "Container";
