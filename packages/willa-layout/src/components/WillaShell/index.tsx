import type { ElementType, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import {
  getWillaThemeScopeProps,
  WillaThemeProvider,
  type WillaTheme,
} from "@willa-ui/shared";

export type WillaShellProps = {
  as?: ElementType;
  theme?: WillaTheme;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function WillaShell(props: WillaShellProps) {
  const {
    as: Component = "div",
    theme,
    className,
    children,
    ...shellProps
  } = props;
  const themeScopeProps = getWillaThemeScopeProps(theme ?? null);

  const shell = (
    <Component
      {...shellProps}
      {...themeScopeProps}
      className={classNames("willa-shell", className)}
    >
      {children}
    </Component>
  );

  if (!theme) return shell;

  return <WillaThemeProvider theme={theme}>{shell}</WillaThemeProvider>;
}

WillaShell.displayName = "WillaShell";
