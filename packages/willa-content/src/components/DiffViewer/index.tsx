import {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { diffLines as createDiffLineChanges } from "diff";
import classNames from "classnames";

import { copyToClipboard, highlightCodeToHtml } from "@willa-ui/shared";

export type DiffViewerVariant = "unified" | "split";

export type DiffViewerProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> & {
  before: string;
  after: string;
  language?: string;
  title?: ReactNode;
  beforeLabel?: ReactNode;
  afterLabel?: ReactNode;
  variant?: DiffViewerVariant;
  showLineNumbers?: boolean;
  contextLines?: number;
  copyable?: boolean;
  copiedDuration?: number;
};

type DiffLine = {
  type: "equal" | "delete" | "insert";
  text: string;
  oldLine?: number;
  newLine?: number;
};

type SplitRowSide = {
  type: "equal" | "delete" | "insert" | "empty";
  text: string;
  line?: number;
};

type SplitRow =
  | {
      type: "line";
      oldSide: SplitRowSide;
      newSide: SplitRowSide;
    }
  | {
      type: "omitted";
      count: number;
    };

type UnifiedRow =
  | {
      type: "line";
      line: DiffLine;
    }
  | {
      type: "omitted";
      count: number;
    };

export function DiffViewer(props: DiffViewerProps) {
  const {
    before,
    after,
    language = "text",
    title,
    beforeLabel = "Before",
    afterLabel = "After",
    variant = "unified",
    showLineNumbers = true,
    contextLines,
    copyable = true,
    copiedDuration = 300,
    className,
    style,
    ...rootProps
  } = props;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const lineDiff = useMemo(
    () => createLineDiff(before, after),
    [after, before],
  );
  const stats = useMemo(() => createDiffStats(lineDiff), [lineDiff]);
  const unifiedRows = useMemo(
    () => createUnifiedRows(lineDiff, contextLines),
    [contextLines, lineDiff],
  );
  const splitRows = useMemo(
    () => createSplitRows(lineDiff, contextLines),
    [contextLines, lineDiff],
  );

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timer = window.setTimeout(
      () => setCopyStatus("idle"),
      copiedDuration,
    );
    return () => window.clearTimeout(timer);
  }, [copiedDuration, copyStatus]);

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-diff-viewer",
        `willa-diff-viewer--${variant}`,
        !showLineNumbers && "willa-diff-viewer--no-line-numbers",
        className,
      )}
      style={style}
    >
      <div className="willa-diff-viewer__header">
        <div className="willa-diff-viewer__heading">
          {title ? (
            <div className="willa-diff-viewer__title">{title}</div>
          ) : null}
          <div className="willa-diff-viewer__meta">
            <span className="willa-diff-viewer__stat willa-diff-viewer__stat--insert">
              +{stats.insertions}
            </span>
            <span className="willa-diff-viewer__stat willa-diff-viewer__stat--delete">
              -{stats.deletions}
            </span>
            <span className="willa-diff-viewer__language">
              {language.toLowerCase()}
            </span>
          </div>
        </div>
        {copyable ? (
          <button
            type="button"
            className={classNames(
              "willa-diff-viewer__copy",
              copyStatus === "copied" && "willa-diff-viewer__copy--copied",
            )}
            onClick={(event) => {
              if (event.detail > 0) {
                event.currentTarget.blur();
              }
              void (async () => {
                setCopyStatus("idle");
                const ok = await copyToClipboard(after);
                setCopyStatus(ok ? "copied" : "failed");
              })();
            }}
          >
            {copyStatus === "copied" ? <CheckIcon /> : <ClipboardIcon />}
            <span>{copyStatus === "copied" ? "已复制" : "复制新版"}</span>
          </button>
        ) : null}
      </div>

      {variant === "split" ? (
        <div className="willa-diff-viewer__split-labels">
          <div>{beforeLabel}</div>
          <div>{afterLabel}</div>
        </div>
      ) : null}

      <div className="willa-diff-viewer__body" role="table">
        {variant === "split"
          ? splitRows.map((row, index) => (
              <SplitDiffRow
                key={index}
                row={row}
                language={language}
                showLineNumbers={showLineNumbers}
              />
            ))
          : unifiedRows.map((row, index) => (
              <UnifiedDiffRow
                key={index}
                row={row}
                language={language}
                showLineNumbers={showLineNumbers}
              />
            ))}
      </div>
    </div>
  );
}

const UnifiedDiffRow = (props: {
  row: UnifiedRow;
  language: string;
  showLineNumbers: boolean;
}) => {
  if (props.row.type === "omitted") {
    return <OmittedRow count={props.row.count} />;
  }

  const { line } = props.row;
  const marker =
    line.type === "insert" ? "+" : line.type === "delete" ? "-" : " ";

  return (
    <div
      className={classNames(
        "willa-diff-viewer__row",
        `willa-diff-viewer__row--${line.type}`,
      )}
      role="row"
    >
      {props.showLineNumbers ? (
        <span className="willa-diff-viewer__line-number">
          {line.oldLine ?? ""}
        </span>
      ) : null}
      {props.showLineNumbers ? (
        <span className="willa-diff-viewer__line-number">
          {line.newLine ?? ""}
        </span>
      ) : null}
      <span className="willa-diff-viewer__marker">{marker}</span>
      <CodeLine text={line.text} language={props.language} />
    </div>
  );
};

const SplitDiffRow = (props: {
  row: SplitRow;
  language: string;
  showLineNumbers: boolean;
}) => {
  if (props.row.type === "omitted") {
    return <OmittedRow count={props.row.count} />;
  }

  return (
    <div className="willa-diff-viewer__split-row" role="row">
      <SplitDiffCell
        side={props.row.oldSide}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
      />
      <SplitDiffCell
        side={props.row.newSide}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
      />
    </div>
  );
};

const SplitDiffCell = (props: {
  side: SplitRowSide;
  language: string;
  showLineNumbers: boolean;
}) => {
  const marker =
    props.side.type === "insert"
      ? "+"
      : props.side.type === "delete"
        ? "-"
        : " ";

  return (
    <div
      className={classNames(
        "willa-diff-viewer__split-cell",
        `willa-diff-viewer__split-cell--${props.side.type}`,
      )}
      role="cell"
    >
      {props.showLineNumbers ? (
        <span className="willa-diff-viewer__line-number">
          {props.side.line ?? ""}
        </span>
      ) : null}
      <span className="willa-diff-viewer__marker">{marker}</span>
      <CodeLine text={props.side.text} language={props.language} />
    </div>
  );
};

const OmittedRow = (props: { count: number }) => {
  return (
    <div className="willa-diff-viewer__omitted" role="row">
      <span>省略 {props.count} 行未变化内容</span>
    </div>
  );
};

const CodeLine = (props: { text: string; language: string }) => {
  const { html } = highlightCodeToHtml(props.text || " ", props.language);

  return (
    <code
      className="willa-diff-viewer__code hljs"
      dangerouslySetInnerHTML={{ __html: html || " " }}
    />
  );
};

const createLineDiff = (before: string, after: string) => {
  const changes = createDiffLineChanges(before, after);
  const lines: Array<DiffLine> = [];
  let oldLine = 1;
  let newLine = 1;

  if (changes.length === 0) {
    return [{ type: "equal", text: "", oldLine, newLine } satisfies DiffLine];
  }

  for (const change of changes) {
    const type = change.added ? "insert" : change.removed ? "delete" : "equal";

    for (const text of splitChangeValue(change.value)) {
      if (type === "insert") {
        lines.push({ type, text, newLine });
        newLine += 1;
        continue;
      }

      if (type === "delete") {
        lines.push({ type, text, oldLine });
        oldLine += 1;
        continue;
      }

      lines.push({ type, text, oldLine, newLine });
      oldLine += 1;
      newLine += 1;
    }
  }

  return lines;
};

const splitChangeValue = (value: string) => {
  if (!value) return [];
  const normalizedValue = value.endsWith("\n") ? value.slice(0, -1) : value;
  return normalizedValue.split("\n");
};

const createDiffStats = (lines: Array<DiffLine>) => {
  return lines.reduce(
    (stats, line) => {
      if (line.type === "insert") {
        stats.insertions += 1;
      }

      if (line.type === "delete") {
        stats.deletions += 1;
      }

      return stats;
    },
    { deletions: 0, insertions: 0 },
  );
};

const createUnifiedRows = (
  lines: Array<DiffLine>,
  contextLines: number | undefined,
) => {
  return applyContext(lines, contextLines).map((chunk) =>
    "count" in chunk
      ? ({
          type: "omitted",
          count: chunk.count,
        } satisfies UnifiedRow)
      : ({
          type: "line",
          line: chunk,
        } satisfies UnifiedRow),
  );
};

const createSplitRows = (
  lines: Array<DiffLine>,
  contextLines: number | undefined,
) => {
  const visibleLines = applyContext(lines, contextLines);
  const rows: Array<SplitRow> = [];
  let index = 0;

  while (index < visibleLines.length) {
    const line = visibleLines[index];

    if ("count" in line) {
      rows.push({ type: "omitted", count: line.count });
      index += 1;
      continue;
    }

    if (line.type === "equal") {
      rows.push({
        type: "line",
        oldSide: {
          type: "equal",
          text: line.text,
          line: line.oldLine,
        },
        newSide: {
          type: "equal",
          text: line.text,
          line: line.newLine,
        },
      });
      index += 1;
      continue;
    }

    const deletions: Array<DiffLine> = [];
    const insertions: Array<DiffLine> = [];

    while (index < visibleLines.length) {
      const current = visibleLines[index];

      if ("count" in current || current.type === "equal") {
        break;
      }

      if (current.type === "delete") {
        deletions.push(current);
      } else {
        insertions.push(current);
      }

      index += 1;
    }

    const count = Math.max(deletions.length, insertions.length);

    for (let rowIndex = 0; rowIndex < count; rowIndex += 1) {
      const deletion = deletions[rowIndex];
      const insertion = insertions[rowIndex];
      rows.push({
        type: "line",
        oldSide: deletion
          ? {
              type: "delete",
              text: deletion.text,
              line: deletion.oldLine,
            }
          : {
              type: "empty",
              text: "",
            },
        newSide: insertion
          ? {
              type: "insert",
              text: insertion.text,
              line: insertion.newLine,
            }
          : {
              type: "empty",
              text: "",
            },
      });
    }
  }

  return rows;
};

const applyContext = (
  lines: Array<DiffLine>,
  contextLines: number | undefined,
) => {
  if (contextLines === undefined || contextLines < 0) {
    return lines;
  }

  const changedIndexes = lines
    .map((line, index) => (line.type === "equal" ? -1 : index))
    .filter((index) => index >= 0);

  if (changedIndexes.length === 0) {
    return lines;
  }

  const visibleIndexes = new Set<number>();

  for (const index of changedIndexes) {
    const start = Math.max(0, index - contextLines);
    const end = Math.min(lines.length - 1, index + contextLines);

    for (let visibleIndex = start; visibleIndex <= end; visibleIndex += 1) {
      visibleIndexes.add(visibleIndex);
    }
  }

  const result: Array<DiffLine | { count: number }> = [];
  let omittedCount = 0;

  lines.forEach((line, index) => {
    if (!visibleIndexes.has(index)) {
      omittedCount += 1;
      return;
    }

    if (omittedCount > 0) {
      result.push({ count: omittedCount });
      omittedCount = 0;
    }

    result.push(line);
  });

  if (omittedCount > 0) {
    result.push({ count: omittedCount });
  }

  return result;
};

DiffViewer.displayName = "DiffViewer";
