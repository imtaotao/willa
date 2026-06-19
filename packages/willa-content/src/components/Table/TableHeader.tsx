import {
  type DragEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import classNames from "classnames";

import type {
  TableCell,
  TableSortState,
} from "#content/components/Table/types";
import {
  getActionsStyle,
  getAriaSort,
  getCellKey,
} from "#content/components/Table/utils";
import { getResolvedCellStyle } from "#content/components/Table/layout";

type TableHeaderProps = {
  headers: Array<TableCell>;
  orderedHeaders: Array<TableCell>;
  hasSelection: boolean;
  selectionMode: "none" | "single" | "multiple";
  allVisibleSelected: boolean;
  someVisibleSelected: boolean;
  hasExpandableRows: boolean;
  hasActions: boolean;
  actionsLabel: ReactNode;
  actionsWidth?: number | string;
  resizableColumns: boolean;
  columnDraggable: boolean;
  isColumnDragging: boolean;
  stickyFixedColumns: boolean;
  sort?: TableSortState;
  columnWidths: Record<string, number>;
  headerCellRefs: RefObject<Record<string, HTMLTableCellElement | null>>;
  stickyActions: boolean;
  actionsColumnWidth?: string;
  onToggleVisibleSelection: () => void;
  onToggleSort: (cell: TableCell, index: number) => void;
  onStartColumnResize: (
    event: MouseEvent<HTMLButtonElement>,
    cell: TableCell,
    index: number,
  ) => void;
  onResizeColumnBy: (cell: TableCell, index: number, delta: number) => void;
  onAutoSizeColumn: (cell: TableCell, index: number) => void;
  keyboardResizeLargeStep: number;
  keyboardResizeStep: number;
  onColumnDragStart: (
    event: DragEvent<HTMLTableCellElement>,
    cell: TableCell,
    index: number,
  ) => void;
  onColumnDrop: (
    event: DragEvent<HTMLTableCellElement>,
    cell: TableCell,
    index: number,
  ) => void;
  onColumnDragEnd: () => void;
};

export function TableHeader(props: TableHeaderProps) {
  const {
    headers,
    orderedHeaders,
    hasSelection,
    selectionMode,
    allVisibleSelected,
    someVisibleSelected,
    hasExpandableRows,
    hasActions,
    actionsLabel,
    actionsWidth,
    resizableColumns,
    columnDraggable,
    isColumnDragging,
    stickyFixedColumns,
    sort,
    columnWidths,
    headerCellRefs,
    stickyActions,
    actionsColumnWidth,
    onToggleVisibleSelection,
    onToggleSort,
    onStartColumnResize,
    onResizeColumnBy,
    onAutoSizeColumn,
    keyboardResizeLargeStep,
    keyboardResizeStep,
    onColumnDragStart,
    onColumnDrop,
    onColumnDragEnd,
  } = props;

  if (headers.length === 0) return null;

  const handleResizeHandleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    cell: TableCell,
    index: number,
  ) => {
    const step = event.shiftKey ? keyboardResizeLargeStep : keyboardResizeStep;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      onResizeColumnBy(cell, index, -step);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      onResizeColumnBy(cell, index, step);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onAutoSizeColumn(cell, index);
    }
  };

  return (
    <thead>
      <tr>
        {hasSelection ? (
          <th className="willa-table-selection-header" scope="col">
            {selectionMode === "multiple" ? (
              <input
                className="willa-table-selection-control"
                type="checkbox"
                aria-label="选择当前页"
                checked={allVisibleSelected}
                ref={(element) => {
                  if (element) {
                    element.indeterminate = someVisibleSelected;
                  }
                }}
                onChange={onToggleVisibleSelection}
              />
            ) : null}
          </th>
        ) : null}
        {hasExpandableRows ? (
          <th className="willa-table-expand-header" scope="col" />
        ) : null}
        {orderedHeaders.map((cell, index) => {
          const sortKey = getCellKey(cell, index);
          const sortDirection =
            sort?.key === sortKey ? sort.direction : undefined;
          const resolvedCellStyle = getResolvedCellStyle({
            cell,
            index,
            isHeader: stickyFixedColumns,
            stickyFixedColumns,
            headers: orderedHeaders,
            hasSelection,
            hasExpandableRows,
            hasActions,
            stickyActions,
            actionsColumnWidth,
            columnWidths,
          });

          return (
            <th
              key={sortKey}
              ref={(element) => {
                headerCellRefs.current[sortKey] = element;
              }}
              className={classNames(
                cell.headerClassName,
                cell.fixed && "willa-table-cell--fixed",
                cell.fixed && `willa-table-cell--fixed-${cell.fixed}`,
                columnDraggable && "willa-table-cell--draggable",
                isColumnDragging && "willa-table-cell--dragging",
              )}
              data-align={cell.align}
              data-column-key={sortKey}
              data-resizable={resizableColumns ? "true" : undefined}
              data-fixed={cell.fixed}
              draggable={columnDraggable}
              data-sort-direction={sortDirection}
              aria-sort={getAriaSort(sortDirection)}
              style={resolvedCellStyle}
              scope="col"
              onDragStart={(event) => onColumnDragStart(event, cell, index)}
              onDragOver={(event) => {
                if (columnDraggable) event.preventDefault();
              }}
              onDrop={(event) => onColumnDrop(event, cell, index)}
              onDragEnd={onColumnDragEnd}
            >
              {cell.sortable ? (
                <button
                  className="willa-table-sort-button"
                  type="button"
                  onClick={() => onToggleSort(cell, index)}
                >
                  <span>{cell.label}</span>
                  <span
                    className="willa-table-sort-indicator"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                cell.label
              )}
              {resizableColumns ? (
                <button
                  className="willa-table-resize-handle"
                  type="button"
                  aria-label="调整列宽，使用左右方向键调整"
                  onKeyDown={(event) =>
                    handleResizeHandleKeyDown(event, cell, index)
                  }
                  onDoubleClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onAutoSizeColumn(cell, index);
                  }}
                  onMouseDown={(event) =>
                    event.detail === 1
                      ? onStartColumnResize(event, cell, index)
                      : undefined
                  }
                />
              ) : null}
            </th>
          );
        })}
        {hasActions ? (
          <th
            className="willa-table-actions-header"
            data-align="end"
            style={getActionsStyle(actionsWidth)}
            scope="col"
          >
            {actionsLabel}
          </th>
        ) : null}
      </tr>
    </thead>
  );
}

TableHeader.displayName = "TableHeader";
