import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { useControllableState } from "@willa-ui/shared";

export type TraceViewerStatus = "pending" | "running" | "success" | "error";
type TraceViewerKnownKind = "agent" | "model" | "tool" | "retrieval" | "system";
export type TraceViewerKind = TraceViewerKnownKind | (string & {});

export type TraceViewerMetric = {
  label: ReactNode;
  value: ReactNode;
};

export type TraceViewerSpan = {
  id: string;
  name: ReactNode;
  kind?: TraceViewerKind;
  kindLabel?: ReactNode;
  status?: TraceViewerStatus;
  description?: ReactNode;
  startedAt?: ReactNode;
  duration?: ReactNode;
  tokens?: ReactNode;
  cost?: ReactNode;
  input?: ReactNode;
  output?: ReactNode;
  error?: ReactNode;
  metrics?: Array<TraceViewerMetric>;
  children?: Array<TraceViewerSpan>;
};

export type TraceViewerProps = {
  spans: Array<TraceViewerSpan>;
  title?: ReactNode;
  description?: ReactNode;
  summary?: Array<TraceViewerMetric>;
  selectedSpanId?: string;
  defaultSelectedSpanId?: string;
  expandedSpanIds?: Array<string>;
  defaultExpandedSpanIds?: Array<string>;
  empty?: ReactNode;
  onSpanSelect?: (span: TraceViewerSpan) => void;
  onExpandedSpanIdsChange?: (spanIds: Array<string>) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "title">;

type FlattenedTraceSpan = {
  span: TraceViewerSpan;
  depth: number;
  hasChildren: boolean;
};

export function TraceViewer({
  spans,
  title = "Trace",
  description,
  summary,
  selectedSpanId,
  defaultSelectedSpanId,
  expandedSpanIds,
  defaultExpandedSpanIds,
  empty = "暂无链路数据",
  onSpanSelect,
  onExpandedSpanIdsChange,
  className,
  ...props
}: TraceViewerProps) {
  const expandableSpanIds = useMemo(
    () => collectExpandableTraceSpanIds(spans),
    [spans],
  );
  const [
    currentExpandedSpanIds,
    setCurrentExpandedSpanIds,
    expandedSpanIdsControlled,
  ] = useControllableState<Array<string>>({
    value: expandedSpanIds,
    defaultValue: defaultExpandedSpanIds ?? expandableSpanIds,
    onChange: onExpandedSpanIdsChange,
  });
  const knownExpandableSpanIdsRef = useRef<Array<string>>(expandableSpanIds);
  const flattenedSpans = useMemo(
    () => flattenTraceSpans(spans, new Set(currentExpandedSpanIds)),
    [currentExpandedSpanIds, spans],
  );
  const [
    currentSelectedSpanId,
    setCurrentSelectedSpanId,
    selectedSpanControlled,
  ] = useControllableState<string>({
    value: selectedSpanId,
    defaultValue: defaultSelectedSpanId ?? "",
  });
  const matchedSelectedSpan = currentSelectedSpanId
    ? findTraceSpan(spans, currentSelectedSpanId)
    : null;
  const selectedSpan =
    matchedSelectedSpan ??
    (!selectedSpanControlled ? (flattenedSpans[0]?.span ?? null) : null);
  const hasSpans = flattenedSpans.length > 0;

  useEffect(() => {
    if (
      expandedSpanIdsControlled ||
      defaultExpandedSpanIds ||
      expandableSpanIds.length === 0
    ) {
      knownExpandableSpanIdsRef.current = expandableSpanIds;
      return;
    }

    const knownIds = new Set(knownExpandableSpanIdsRef.current);
    const nextSpanIds = expandableSpanIds.filter((id) => !knownIds.has(id));

    knownExpandableSpanIdsRef.current = expandableSpanIds;

    if (nextSpanIds.length > 0) {
      setCurrentExpandedSpanIds((previousSpanIds) => [
        ...previousSpanIds,
        ...nextSpanIds,
      ]);
    }
  }, [
    defaultExpandedSpanIds,
    expandableSpanIds,
    expandedSpanIdsControlled,
    setCurrentExpandedSpanIds,
  ]);

  const toggleExpandedSpan = (span: TraceViewerSpan) => {
    setCurrentExpandedSpanIds((previousSpanIds) => {
      const previousSpanIdSet = new Set(previousSpanIds);

      if (previousSpanIdSet.has(span.id)) {
        previousSpanIdSet.delete(span.id);
      } else {
        previousSpanIdSet.add(span.id);
      }

      return Array.from(previousSpanIdSet);
    });
  };

  return (
    <section {...props} className={classNames("willa-trace-viewer", className)}>
      <div className="willa-trace-viewer__header">
        <div className="willa-trace-viewer__heading">
          <h3 className="willa-trace-viewer__title">{title}</h3>
          {description ? (
            <div className="willa-trace-viewer__description">{description}</div>
          ) : null}
        </div>

        {summary && summary.length > 0 ? (
          <TraceViewerMetrics
            className="willa-trace-viewer__summary"
            metrics={summary}
          />
        ) : null}
      </div>

      {hasSpans ? (
        <div className="willa-trace-viewer__body">
          <div className="willa-trace-viewer__list">
            {flattenedSpans.map(({ span, depth, hasChildren }) => {
              const status = span.status ?? "pending";
              const selected = span.id === selectedSpan?.id;
              const kindLabel = resolveTraceViewerKindLabel(span);
              const expanded = currentExpandedSpanIds.includes(span.id);

              return (
                <div
                  className={classNames(
                    "willa-trace-viewer__row",
                    `willa-trace-viewer__row--${status}`,
                    depth > 0 && "willa-trace-viewer__row--nested",
                    hasChildren && "willa-trace-viewer__row--parent",
                    selected && "willa-trace-viewer__row--selected",
                  )}
                  key={span.id}
                  style={
                    {
                      "--willa-trace-viewer-row-indent": `${depth * 0.9}rem`,
                    } as CSSProperties
                  }
                >
                  {hasChildren ? (
                    <button
                      className="willa-trace-viewer__row-toggle"
                      type="button"
                      aria-expanded={expanded}
                      aria-label={expanded ? "收起子链路" : "展开子链路"}
                      onClick={() => {
                        toggleExpandedSpan(span);
                      }}
                    >
                      <ChevronDownIcon className="willa-trace-viewer__row-toggle-icon" />
                    </button>
                  ) : (
                    <span
                      className="willa-trace-viewer__row-toggle-spacer"
                      aria-hidden="true"
                    />
                  )}

                  <button
                    className="willa-trace-viewer__row-content"
                    type="button"
                    aria-current={selected ? "true" : undefined}
                    onClick={() => {
                      setCurrentSelectedSpanId(span.id);
                      onSpanSelect?.(span);
                    }}
                  >
                    <span
                      className="willa-trace-viewer__status-dot"
                      aria-hidden="true"
                    />
                    <span className="willa-trace-viewer__row-main">
                      <span className="willa-trace-viewer__row-title">
                        {span.name}
                      </span>
                      {span.description ? (
                        <span className="willa-trace-viewer__row-description">
                          {span.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="willa-trace-viewer__row-meta">
                      <span className="willa-trace-viewer__kind">
                        {kindLabel}
                      </span>
                      {span.duration ? (
                        <span className="willa-trace-viewer__meta-value">
                          {span.duration}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <TraceViewerDetail span={selectedSpan} />
        </div>
      ) : (
        <div className="willa-trace-viewer__empty">{empty}</div>
      )}
    </section>
  );
}

const TraceViewerDetail = ({ span }: { span: TraceViewerSpan | null }) => {
  if (!span) {
    return (
      <div className="willa-trace-viewer__detail willa-trace-viewer__detail--empty">
        未找到选中的链路节点
      </div>
    );
  }

  const status = span.status ?? "pending";
  const kindLabel = resolveTraceViewerKindLabel(span);
  const metrics = createTraceViewerDetailMetrics(span);

  return (
    <div className="willa-trace-viewer__detail">
      <div className="willa-trace-viewer__detail-header">
        <div className="willa-trace-viewer__detail-heading">
          <div className="willa-trace-viewer__detail-title-row">
            <h4 className="willa-trace-viewer__detail-title">{span.name}</h4>
            <span
              className={classNames(
                "willa-trace-viewer__status",
                `willa-trace-viewer__status--${status}`,
              )}
            >
              {traceViewerStatusLabelMap[status]}
            </span>
          </div>
          {span.description ? (
            <div className="willa-trace-viewer__detail-description">
              {span.description}
            </div>
          ) : null}
        </div>
        <span className="willa-trace-viewer__kind">{kindLabel}</span>
      </div>

      {metrics.length > 0 ? (
        <TraceViewerMetrics
          className="willa-trace-viewer__detail-metrics"
          metrics={metrics}
        />
      ) : null}

      <TraceViewerBlock label="输入" value={span.input} />
      <TraceViewerBlock label="输出" value={span.output} />
      <TraceViewerBlock label="错误" tone="danger" value={span.error} />
    </div>
  );
};

const TraceViewerMetrics = ({
  className,
  metrics,
}: {
  className?: string;
  metrics: Array<TraceViewerMetric>;
}) => (
  <dl className={classNames("willa-trace-viewer__metrics", className)}>
    {metrics.map((metric, index) => (
      <div className="willa-trace-viewer__metric" key={index}>
        <dt>{metric.label}</dt>
        <dd>{metric.value}</dd>
      </div>
    ))}
  </dl>
);

const TraceViewerBlock = ({
  label,
  tone,
  value,
}: {
  label: ReactNode;
  tone?: "danger";
  value?: ReactNode;
}) => {
  if (!isRenderableTraceNode(value)) {
    return null;
  }

  return (
    <div
      className={classNames(
        "willa-trace-viewer__block",
        tone && `willa-trace-viewer__block--${tone}`,
      )}
    >
      <div className="willa-trace-viewer__block-label">{label}</div>
      <div className="willa-trace-viewer__block-value">{value}</div>
    </div>
  );
};

const isRenderableTraceNode = (value: ReactNode) => {
  return value !== null && value !== undefined && value !== false;
};

const flattenTraceSpans = (
  spans: Array<TraceViewerSpan>,
  expandedSpanIds: Set<string>,
  depth = 0,
): Array<FlattenedTraceSpan> => {
  return spans.flatMap((span) => {
    const hasChildren = Boolean(span.children?.length);
    const currentSpan = { span, depth, hasChildren };

    if (!hasChildren || !expandedSpanIds.has(span.id)) {
      return [currentSpan];
    }
    return [
      currentSpan,
      ...flattenTraceSpans(span.children ?? [], expandedSpanIds, depth + 1),
    ];
  });
};

const collectExpandableTraceSpanIds = (
  spans: Array<TraceViewerSpan>,
): Array<string> => {
  return spans.flatMap((span) => {
    const childIds = collectExpandableTraceSpanIds(span.children ?? []);
    if (!span.children?.length) {
      return childIds;
    }
    return [span.id, ...childIds];
  });
};

const findTraceSpan = (spans: Array<TraceViewerSpan>, id: string) => {
  const pendingSpans = [...spans];

  while (pendingSpans.length > 0) {
    const span = pendingSpans.shift();
    if (!span) continue;
    if (span.id === id) return span;
    pendingSpans.unshift(...(span.children ?? []));
  }
  return null;
};

const createTraceViewerDetailMetrics = (span: TraceViewerSpan) => {
  const metrics: Array<TraceViewerMetric> = [];

  if (isRenderableTraceNode(span.startedAt)) {
    metrics.push({ label: "开始", value: span.startedAt });
  }
  if (isRenderableTraceNode(span.duration)) {
    metrics.push({ label: "耗时", value: span.duration });
  }
  if (isRenderableTraceNode(span.tokens)) {
    metrics.push({ label: "Tokens", value: span.tokens });
  }
  if (isRenderableTraceNode(span.cost)) {
    metrics.push({ label: "Cost", value: span.cost });
  }

  return [...metrics, ...(span.metrics ?? [])];
};

const traceViewerStatusLabelMap = {
  pending: "等待",
  running: "运行中",
  success: "成功",
  error: "失败",
} satisfies Record<TraceViewerStatus, string>;

const traceViewerKindLabelMap = {
  agent: "Agent",
  model: "Model",
  tool: "Tool",
  retrieval: "Retrieval",
  system: "System",
} satisfies Record<TraceViewerKnownKind, string>;

const resolveTraceViewerKindLabel = (span: TraceViewerSpan) => {
  if (isRenderableTraceNode(span.kindLabel)) {
    return span.kindLabel;
  }
  const kind = span.kind ?? "system";
  return traceViewerKindLabelMap[kind as TraceViewerKnownKind] ?? kind;
};

TraceViewer.displayName = "TraceViewer";
