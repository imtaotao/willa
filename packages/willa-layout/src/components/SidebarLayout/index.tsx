import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type SidebarLayoutSide = "left" | "right";
export type SidebarLayoutGapPreset = "none" | "sm" | "md" | "lg";
export type SidebarLayoutGap = SidebarLayoutGapPreset | (string & {});

export type SidebarLayoutProps = {
  sidebar: ReactNode;
  side?: SidebarLayoutSide;
  sidebarWidth?: string;
  gap?: SidebarLayoutGap;
  minContentWidth?: string;
  collapseBelow?: "none" | "tablet";
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function SidebarLayout(props: SidebarLayoutProps) {
  const {
    sidebar,
    side = "left",
    sidebarWidth = "16rem",
    gap = "md",
    minContentWidth = "0",
    collapseBelow = "tablet",
    className,
    children,
    style,
    ...layoutProps
  } = props;
  const layoutStyle = {
    "--willa-sidebar-layout-sidebar-width": sidebarWidth,
    "--willa-sidebar-layout-gap": resolveSidebarLayoutGap(gap),
    "--willa-sidebar-layout-min-content-width": minContentWidth,
    ...style,
  } as CSSProperties;

  return (
    <div
      {...layoutProps}
      style={layoutStyle}
      className={classNames(
        "willa-sidebar-layout",
        `willa-sidebar-layout--${side}`,
        `willa-sidebar-layout--collapse-${collapseBelow}`,
        className,
      )}
    >
      <aside className="willa-sidebar-layout-sidebar">{sidebar}</aside>
      <main className="willa-sidebar-layout-main">{children}</main>
    </div>
  );
}

const sidebarLayoutGapMap: Record<SidebarLayoutGapPreset, string> = {
  none: "0",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
};

const isSidebarLayoutGapPreset = (
  gap: SidebarLayoutGap,
): gap is keyof typeof sidebarLayoutGapMap => {
  return gap in sidebarLayoutGapMap;
};

const resolveSidebarLayoutGap = (gap: SidebarLayoutGap) => {
  return isSidebarLayoutGapPreset(gap) ? sidebarLayoutGapMap[gap] : gap;
};

SidebarLayout.displayName = "SidebarLayout";
