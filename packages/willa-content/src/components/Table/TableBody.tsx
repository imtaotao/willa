import { Fragment, type MouseEvent, type ReactNode } from "react";
import classNames from "classnames";

import { EmptyState } from "#content/components/EmptyState";
import { Spinner } from "#content/components/Spinner";

import type {
  TableCell,
  TableDisplayRow,
  TableItem,
} from "#content/components/Table/types";
import {
  getActionsStyle,
  getCellTooltipText,
} from "#content/components/Table/utils";
import { getResolvedCellStyle } from "#content/components/Table/layout";
import { getOrderedRowCells } from "#content/components/Table/columns";

type TableBodyProps = {
  loading: boolean;
  loadingText: ReactNode;
  empty: ReactNode;
  columnCount: number;
  virtualScroll: boolean;
  virtualWindow: {
    startIndex: number;
    endIndex: number;
    paddingTop: number;
    paddingBottom: number;
  };
  resolvedVisibleItems: Array<TableDisplayRow>;
  orderedHeaderKeys: Array<string>;
  orderedHeaders: Array<TableCell>;
  hasSelection: boolean;
  selectionMode: "none" | "single" | "multiple";
  selectionName: string;
  selectedKeySet: Set<string | number>;
  hasExpandableRows: boolean;
  hasActions: boolean;
  actionsWidth?: number | string;
  stickyActions: boolean;
  actionsColumnWidth?: string;
  columnWidths: Record<string, number>;
  treeMode: boolean;
  treeExpandedKeySet: Set<string | number>;
  onToggleTreeExpanded: (item: TableItem) => void;
  onToggleItemSelection: (item: TableItem) => void;
  onToggleExpanded: (item: TableItem) => void;
  onCellTooltipShow: (
    event: MouseEvent<HTMLSpanElement>,
    cell: TableCell,
  ) => void;
  onCellTooltipHide: () => void;
};

export function TableBody(props: TableBodyProps) {
  const {
    loading,
    loadingText,
    empty,
    columnCount,
    virtualScroll,
    virtualWindow,
    resolvedVisibleItems,
    orderedHeaderKeys,
    orderedHeaders,
    hasSelection,
    selectionMode,
    selectionName,
    selectedKeySet,
    hasExpandableRows,
    hasActions,
    actionsWidth,
    stickyActions,
    actionsColumnWidth,
    columnWidths,
    treeMode,
    treeExpandedKeySet,
    onToggleTreeExpanded,
    onToggleItemSelection,
    onToggleExpanded,
    onCellTooltipShow,
    onCellTooltipHide,
  } = props;

  const rowSpanCoverage = new Map<number, number>();

  const renderCellContent = (cell: TableCell) => {
    const content = cell.render ?? cell.value;
    if (cell.ellipsis === false) return content;

    const tooltipText = getCellTooltipText(cell);
    return (
      <span
        className="willa-table-cell-content"
        aria-label={tooltipText}
        onMouseEnter={(event) => onCellTooltipShow(event, cell)}
        onMouseLeave={onCellTooltipHide}
      >
        {content}
      </span>
    );
  };

  const renderGroupRow = (
    entry: Extract<TableDisplayRow, { type: "group" }>,
  ) => {
    const { context } = entry;

    return (
      <tr key={context.key} className="willa-table-group-row">
        <td className="willa-table-group-cell" colSpan={columnCount}>
          <div className="willa-table-group-content">
            <div className="willa-table-group-title">
              <span className="willa-table-group-label">{context.label}</span>
              <span className="willa-table-group-count">{context.count}</span>
            </div>
            {context.summary !== undefined && context.summary !== null ? (
              <div className="willa-table-group-summary">{context.summary}</div>
            ) : null}
          </div>
        </td>
      </tr>
    );
  };

  const renderTableBodyRow = (
    entry: Extract<TableDisplayRow, { type: "item" }>,
  ) => {
    const { item, depth } = entry;
    const isExpanded = treeExpandedKeySet.has(item.key);
    const isSelected = selectedKeySet.has(item.key) || item.selected;
    const cellsByKey = new Map(
      getOrderedRowCells(item, orderedHeaderKeys).map(
        (cell, index) => [orderedHeaderKeys[index], cell] as const,
      ),
    );
    const rowCells: Array<ReactNode> = [];
    const consumedColumns = new Set<number>();

    orderedHeaderKeys.forEach((columnKey, columnIndex) => {
      if (consumedColumns.has(columnIndex)) return;

      const remainingSpan = rowSpanCoverage.get(columnIndex) ?? 0;
      if (remainingSpan > 0) {
        rowSpanCoverage.set(columnIndex, remainingSpan - 1);
        return;
      }

      const cell = cellsByKey.get(columnKey);
      if (!cell) return;

      const rowSpan = Math.max(1, cell.rowSpan ?? 1);
      const colSpan = Math.max(1, cell.colSpan ?? 1);
      const shouldRenderTreeToggle = treeMode && columnIndex === 0;

      if (colSpan > 1) {
        for (let offset = 1; offset < colSpan; offset += 1) {
          consumedColumns.add(columnIndex + offset);
        }
      }

      if (rowSpan > 1) {
        for (let offset = 0; offset < colSpan; offset += 1) {
          const coveredIndex = columnIndex + offset;
          rowSpanCoverage.set(
            coveredIndex,
            Math.max(rowSpanCoverage.get(coveredIndex) ?? 0, rowSpan - 1),
          );
        }
      }

      rowCells.push(
        <td
          key={columnKey}
          className={classNames(
            cell.ellipsis !== false && "willa-table-cell--ellipsis",
            cell.fixed && "willa-table-cell--fixed",
            cell.fixed && `willa-table-cell--fixed-${cell.fixed}`,
            cell.className,
          )}
          data-align={cell.align}
          data-column-key={columnKey}
          data-fixed={cell.fixed}
          rowSpan={rowSpan > 1 ? rowSpan : undefined}
          colSpan={colSpan > 1 ? colSpan : undefined}
          style={getResolvedCellStyle({
            cell,
            index: columnIndex,
            isHeader: false,
            stickyFixedColumns: true,
            headers: orderedHeaders,
            hasSelection,
            hasExpandableRows,
            hasActions,
            stickyActions,
            actionsColumnWidth,
            columnWidths,
          })}
        >
          {shouldRenderTreeToggle ? (
            <span
              className="willa-table-tree-cell"
              style={{ paddingInlineStart: `${Math.max(depth, 0) * 1.14}rem` }}
            >
              {item.children?.length ? (
                <button
                  className="willa-table-tree-toggle"
                  type="button"
                  aria-label={isExpanded ? "收起行" : "展开行"}
                  aria-expanded={isExpanded}
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleTreeExpanded(item);
                  }}
                >
                  <span aria-hidden="true">{isExpanded ? "-" : "+"}</span>
                </button>
              ) : (
                <span className="willa-table-tree-toggle willa-table-tree-toggle--spacer" />
              )}
              {renderCellContent(cell)}
            </span>
          ) : (
            renderCellContent(cell)
          )}
        </td>,
      );
    });

    return (
      <Fragment key={item.key}>
        <tr
          className={classNames(
            item.onClick && !item.disabled && "willa-table-row--interactive",
            isSelected && "willa-table-row--selected",
            item.disabled && "willa-table-row--disabled",
            item.tone && `willa-table-row--${item.tone}`,
            item.className,
          )}
          tabIndex={item.onClick && !item.disabled ? 0 : undefined}
          onClick={() => {
            if (item.disabled) return;
            item.onClick?.();
          }}
          onKeyDown={(event) => {
            if (item.disabled) return;
            if (event.key !== "Enter" && event.key !== " ") return;

            event.preventDefault();
            item.onClick?.();
          }}
        >
          {hasSelection ? (
            <td className="willa-table-selection-cell">
              <input
                className="willa-table-selection-control"
                type={selectionMode === "single" ? "radio" : "checkbox"}
                name={selectionMode === "single" ? selectionName : undefined}
                aria-label="选择行"
                checked={selectedKeySet.has(item.key)}
                disabled={item.disabled}
                onClick={(event) => event.stopPropagation()}
                onChange={() => onToggleItemSelection(item)}
              />
            </td>
          ) : null}
          {hasExpandableRows ? (
            <td className="willa-table-expand-cell">
              {item.expanded ? (
                <button
                  className="willa-table-expand-button"
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleExpanded(item);
                  }}
                >
                  <span aria-hidden="true">{isExpanded ? "-" : "+"}</span>
                </button>
              ) : null}
            </td>
          ) : null}
          {rowCells}
          {hasActions ? (
            <td
              className="willa-table-actions-cell"
              data-align="end"
              style={getActionsStyle(actionsWidth)}
              onClick={(event) => event.stopPropagation()}
            >
              {item.actions}
            </td>
          ) : null}
        </tr>
        {item.expanded && isExpanded && !treeMode ? (
          <tr className="willa-table-expanded-row">
            <td className="willa-table-expanded-cell" colSpan={columnCount}>
              {item.expanded}
            </td>
          </tr>
        ) : null}
      </Fragment>
    );
  };

  return (
    <tbody>
      {loading && resolvedVisibleItems.length === 0 ? (
        <tr>
          <td className="willa-table-state" colSpan={columnCount}>
            <Spinner label={loadingText} size="sm" />
          </td>
        </tr>
      ) : null}
      {!loading && resolvedVisibleItems.length === 0 ? (
        <tr>
          <td className="willa-table-state" colSpan={columnCount}>
            <EmptyState title={empty} variant="plain" size="sm" compact />
          </td>
        </tr>
      ) : null}
      {virtualScroll && virtualWindow.paddingTop > 0 ? (
        <tr aria-hidden="true" className="willa-table-virtual-spacer-row">
          <td
            colSpan={columnCount}
            style={{ height: virtualWindow.paddingTop }}
          />
        </tr>
      ) : null}
      {resolvedVisibleItems
        .slice(virtualWindow.startIndex, virtualWindow.endIndex)
        .map((entry) =>
          entry.type === "group"
            ? renderGroupRow(entry)
            : renderTableBodyRow(entry),
        )}
      {virtualScroll && virtualWindow.paddingBottom > 0 ? (
        <tr aria-hidden="true" className="willa-table-virtual-spacer-row">
          <td
            colSpan={columnCount}
            style={{ height: virtualWindow.paddingBottom }}
          />
        </tr>
      ) : null}
      {loading && resolvedVisibleItems.length > 0 ? (
        <tr>
          <td
            className="willa-table-state willa-table-state--loading-more"
            colSpan={columnCount}
          >
            <Spinner label={loadingText} size="sm" labelPosition="inline" />
          </td>
        </tr>
      ) : null}
    </tbody>
  );
}

TableBody.displayName = "TableBody";
