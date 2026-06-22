import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Spinner } from "@willa-ui/content/components/Spinner";
import classNames from "classnames";

import { CardToggle, useCardCollapse } from "#ai/internal/cardCollapse";

export type ToolCallCardStatus = "pending" | "running" | "success" | "error";

export type ToolCallCardProps = {
  name: ReactNode;
  status?: ToolCallCardStatus;
  description?: ReactNode;
  parameters?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  summary?: ReactNode;
  onCollapsedChange?: (collapsed: boolean) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "title">;

export function ToolCallCard({
  name,
  status = "pending",
  description,
  parameters,
  meta,
  icon,
  actions,
  children,
  collapsible = false,
  collapsed,
  defaultCollapsed = false,
  summary,
  onCollapsedChange,
  className,
  ...props
}: ToolCallCardProps) {
  const hasBody = parameters || children;
  const { canCollapse, isCollapsed, resolvedSummary, toggleCollapsed } =
    useCardCollapse({
      collapsible,
      collapsed,
      defaultCollapsed,
      hasContent: Boolean(hasBody),
      summary,
      defaultSummary: "查看工具输入和执行结果",
      onCollapsedChange,
    });

  return (
    <section
      {...props}
      className={classNames(
        "willa-tool-call-card",
        `willa-tool-call-card--${status}`,
        canCollapse && "willa-tool-call-card--collapsible",
        isCollapsed && "willa-tool-call-card--collapsed",
        className,
      )}
      data-status={status}
    >
      <span className="willa-tool-call-card-mark" aria-hidden="true">
        {icon ?? <ToolCallStatusMark status={status} />}
      </span>
      <div className="willa-tool-call-card-body">
        <div className="willa-tool-call-card-header">
          <div className="willa-tool-call-card-title-row">
            <span className="willa-tool-call-card-name">{name}</span>
            <span className="willa-tool-call-card-status">
              {toolCallStatusLabelMap[status]}
            </span>
          </div>
          {meta ? (
            <span className="willa-tool-call-card-meta">{meta}</span>
          ) : null}
        </div>
        {description ? (
          <div className="willa-tool-call-card-description">{description}</div>
        ) : null}
        {canCollapse ? (
          <CardToggle
            className="willa-tool-call-card-toggle"
            textClassName="willa-tool-call-card-toggle-text"
            iconClassName="willa-tool-call-card-toggle-icon"
            summary={resolvedSummary}
            expanded={!isCollapsed}
            onClick={toggleCollapsed}
          />
        ) : null}
        {hasBody && !isCollapsed ? (
          <div className="willa-tool-call-card-content">
            {parameters ? (
              <div className="willa-tool-call-card-parameters">
                {parameters}
              </div>
            ) : null}
            {children ? (
              <div className="willa-tool-call-card-result">{children}</div>
            ) : null}
          </div>
        ) : null}
        {actions ? (
          <div className="willa-tool-call-card-actions">{actions}</div>
        ) : null}
      </div>
    </section>
  );
}

const ToolCallStatusMark = ({ status }: { status: ToolCallCardStatus }) => {
  if (status === "running") {
    return <Spinner size="xs" label="" aria-hidden="true" />;
  }

  return <span className="willa-tool-call-card-status-dot" />;
};

const toolCallStatusLabelMap: Record<ToolCallCardStatus, string> = {
  pending: "等待中",
  running: "执行中",
  success: "已完成",
  error: "失败",
};

ToolCallCard.displayName = "ToolCallCard";
