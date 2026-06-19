import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type AppShellProps = {
  header?: ReactNode;
  sidebar?: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: string;
  asideWidth?: string;
  minContentWidth?: string;
  stickyHeader?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function AppShell(props: AppShellProps) {
  const {
    header,
    sidebar,
    aside,
    footer,
    sidebarWidth = "16rem",
    asideWidth = "18rem",
    minContentWidth = "0",
    stickyHeader = false,
    className,
    children,
    style,
    ...shellProps
  } = props;
  const shellStyle = {
    "--willa-app-shell-sidebar-width": sidebarWidth,
    "--willa-app-shell-aside-width": asideWidth,
    "--willa-app-shell-min-content-width": minContentWidth,
    ...style,
  } as CSSProperties;

  return (
    <div
      {...shellProps}
      style={shellStyle}
      className={classNames(
        "willa-app-shell",
        Boolean(sidebar) && "willa-app-shell--with-sidebar",
        Boolean(aside) && "willa-app-shell--with-aside",
        stickyHeader && "willa-app-shell--sticky-header",
        className,
      )}
    >
      {header ? (
        <header className="willa-app-shell-header">{header}</header>
      ) : null}
      <div className="willa-app-shell-layout">
        {sidebar ? (
          <aside className="willa-app-shell-sidebar">{sidebar}</aside>
        ) : null}
        <main className="willa-app-shell-main">{children}</main>
        {aside ? (
          <aside className="willa-app-shell-aside">{aside}</aside>
        ) : null}
      </div>
      {footer ? (
        <footer className="willa-app-shell-footer">{footer}</footer>
      ) : null}
    </div>
  );
}

AppShell.displayName = "AppShell";
