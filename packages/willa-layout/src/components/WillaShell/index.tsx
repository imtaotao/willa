import type { ElementType, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type WillaShellProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function WillaShell(props: WillaShellProps) {
  const { as: Component = "div", className, children, ...shellProps } = props;

  return (
    <Component {...shellProps} className={classNames("willa-shell", className)}>
      {children}
    </Component>
  );
}

WillaShell.displayName = "WillaShell";
