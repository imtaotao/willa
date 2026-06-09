import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import {
  ChevronDownIcon,
  CheckCircledIcon,
  CrossCircledIcon,
  LightningBoltIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type GenerationCardStatus =
  | "pending"
  | "generating"
  | "completed"
  | "failed";

export type GenerationCardMetric = {
  label: ReactNode;
  value: ReactNode;
};

export type GenerationCardProps = {
  title: ReactNode;
  status?: GenerationCardStatus;
  description?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  metrics?: Array<GenerationCardMetric>;
  actions?: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  summary?: ReactNode;
  onCollapsedChange?: (collapsed: boolean) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "title">;

export function GenerationCard({
  title,
  status = "pending",
  description,
  meta,
  icon,
  metrics,
  actions,
  children,
  collapsible = false,
  collapsed,
  defaultCollapsed = false,
  summary,
  onCollapsedChange,
  className,
  ...props
}: GenerationCardProps) {
  const hasMetrics = metrics !== undefined && metrics.length > 0;
  const canCollapse = collapsible && Boolean(children);
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = canCollapse ? (collapsed ?? internalCollapsed) : false;
  const resolvedSummary = summary ?? "查看生成结果";

  const handleToggle = () => {
    const nextCollapsed = !isCollapsed;
    if (collapsed === undefined) {
      setInternalCollapsed(nextCollapsed);
    }
    onCollapsedChange?.(nextCollapsed);
  };

  return (
    <section
      {...props}
      className={classNames(
        "willa-generation-card",
        `willa-generation-card--${status}`,
        canCollapse && "willa-generation-card--collapsible",
        isCollapsed && "willa-generation-card--collapsed",
        className,
      )}
      data-status={status}
    >
      <div className="willa-generation-card-header">
        <span className="willa-generation-card-mark" aria-hidden="true">
          {icon ?? <GenerationStatusIcon status={status} />}
        </span>
        <div className="willa-generation-card-heading">
          <div className="willa-generation-card-title-row">
            <h3 className="willa-generation-card-title">{title}</h3>
            <span className="willa-generation-card-status">
              {generationStatusLabelMap[status]}
            </span>
          </div>
          {description ? (
            <div className="willa-generation-card-description">
              {description}
            </div>
          ) : null}
        </div>
        {meta ? <div className="willa-generation-card-meta">{meta}</div> : null}
      </div>

      {canCollapse ? (
        <button
          className="willa-generation-card-toggle"
          type="button"
          aria-expanded={!isCollapsed}
          onClick={handleToggle}
        >
          <span className="willa-generation-card-toggle-text">
            {resolvedSummary}
          </span>
          <ChevronDownIcon className="willa-generation-card-toggle-icon" />
        </button>
      ) : null}

      {children && !isCollapsed ? (
        <div className="willa-generation-card-content">{children}</div>
      ) : null}

      {hasMetrics || actions ? (
        <div className="willa-generation-card-footer">
          {hasMetrics ? (
            <dl className="willa-generation-card-metrics">
              {metrics.map((metric, index) => (
                <div className="willa-generation-card-metric" key={index}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {actions ? (
            <div className="willa-generation-card-actions">{actions}</div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

const GenerationStatusIcon = ({ status }: { status: GenerationCardStatus }) => {
  if (status === "completed") {
    return <CheckCircledIcon />;
  }
  if (status === "failed") {
    return <CrossCircledIcon />;
  }
  if (status === "generating") {
    return <LightningBoltIcon />;
  }
  return <MagicWandIcon />;
};

const generationStatusLabelMap: Record<GenerationCardStatus, string> = {
  pending: "等待生成",
  generating: "生成中",
  completed: "已生成",
  failed: "生成失败",
};
