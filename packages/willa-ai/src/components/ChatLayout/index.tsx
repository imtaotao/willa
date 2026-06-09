import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import classNames from "classnames";

export type ChatLayoutSidebarPosition = "left" | "right";

export type ChatLayoutProps = {
  header?: ReactNode;
  sidebar?: ReactNode;
  sidebarPosition?: ChatLayoutSidebarPosition;
  sidebarWidth?: number | string;
  input?: ReactNode;
  footer?: ReactNode;
  empty?: ReactNode;
  stickyInput?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

export function ChatLayout(props: ChatLayoutProps) {
  const {
    header,
    sidebar,
    sidebarPosition = "left",
    sidebarWidth,
    input,
    footer,
    empty,
    stickyInput = true,
    className,
    style,
    children,
    ...layoutProps
  } = props;
  const hasHeader = isRenderable(header);
  const hasSidebar = isRenderable(sidebar);
  const hasInput = isRenderable(input);
  const hasFooter = isRenderable(footer);
  const content = children ?? empty;
  const layoutStyle = getChatLayoutStyle({ sidebarWidth, style });

  return (
    <section
      {...layoutProps}
      className={classNames(
        "willa-chat-layout",
        hasSidebar && "willa-chat-layout--with-sidebar",
        hasSidebar && `willa-chat-layout--sidebar-${sidebarPosition}`,
        stickyInput && "willa-chat-layout--sticky-input",
        className,
      )}
      style={layoutStyle}
    >
      {hasHeader ? (
        <header className="willa-chat-layout-header">{header}</header>
      ) : null}
      <div className="willa-chat-layout-body">
        {hasSidebar && sidebarPosition === "left" ? (
          <aside className="willa-chat-layout-sidebar">{sidebar}</aside>
        ) : null}
        <div className="willa-chat-layout-main">
          <div className="willa-chat-layout-messages">
            {isRenderable(content) ? (
              content
            ) : (
              <div className="willa-chat-layout-empty">暂无消息</div>
            )}
          </div>
          {hasInput ? (
            <div className="willa-chat-layout-input">{input}</div>
          ) : null}
        </div>
        {hasSidebar && sidebarPosition === "right" ? (
          <aside className="willa-chat-layout-sidebar">{sidebar}</aside>
        ) : null}
      </div>
      {hasFooter ? (
        <footer className="willa-chat-layout-footer">{footer}</footer>
      ) : null}
    </section>
  );
}

const isRenderable = (value: ReactNode) => {
  return value !== undefined && value !== null && value !== false;
};

const getChatLayoutStyle = (options: {
  sidebarWidth?: number | string;
  style?: CSSProperties;
}) => {
  const { sidebarWidth, style } = options;

  if (sidebarWidth === undefined) return style;

  const resolvedWidth =
    typeof sidebarWidth === "number" ? `${sidebarWidth}px` : sidebarWidth;

  return {
    ...style,
    "--willa-chat-layout-sidebar-width": resolvedWidth,
  } as CSSProperties;
};
