import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import classNames from "classnames";

import type {
  TableCell,
  TableItem,
  TableSortState,
  TableProps,
} from "#content/components/Table/types";

import { TableBody } from "#content/components/Table/TableBody";
import { TableCellTooltip } from "#content/components/Table/TableCellTooltip";
import { TableHeader } from "#content/components/Table/TableHeader";
import { TablePagination } from "#content/components/Table/TablePagination";
import { useTableHeaderScrollSync } from "#content/components/Table/useTableHeaderScrollSync";
import { useTableInfiniteScroll } from "#content/components/Table/useTableInfiniteScroll";
import { useTableViewModel } from "#content/components/Table/useTableViewModel";

type TableViewProps = {
  caption?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  size: "sm" | "md" | "lg";
  stickyHeader: boolean;
  stickyActions: boolean;
  resizableColumns: boolean;
  columnDraggable: boolean;
  actionsWidth?: number | string;
  loading: boolean;
  loadingText: ReactNode;
  empty: ReactNode;
  actionsLabel: ReactNode;
  sort?: TableSortState;
  selectionMode: "none" | "single" | "multiple";
  selectionBar?: TableProps["selectionBar"];
  selectionBarActions?: TableProps["selectionBarActions"];
  selectionBarDescription?: TableProps["selectionBarDescription"];
  selectionBarSticky: boolean;
  headers: Array<TableCell>;
  orderedHeaders: Array<TableCell>;
  hasActions: boolean;
  hasExpandableRows: boolean;
  hasSelection: boolean;
  columnCount: number;
  allVisibleSelected: boolean;
  someVisibleSelected: boolean;
  selectedKeySet: Set<string | number>;
  expandedKeySet: Set<string | number>;
  selectableItems: Array<TableItem>;
  visibleItems: Array<TableItem>;
  treeVisibleItems: Array<{
    item: TableItem;
    depth: number;
    parentKey?: string | number;
  }>;
  groupBy?: TableProps["groupBy"];
  groupLabel?: TableProps["groupLabel"];
  groupSummary?: TableProps["groupSummary"];
  currentSelectedKeys: Array<string | number>;
  allSelectableItems: Array<TableItem>;
  visibleSelectedCount: number;
  paginationState: {
    endIndex: number;
    page: number;
    pageCount: number;
    startIndex: number;
    total: number;
  } | null;
  selectionName: string;
  actionsColumnWidth?: string;
  isResizing: boolean;
  isColumnDragging: boolean;
  virtualScroll: boolean;
  virtualScrollOverscan: number;
  infiniteScroll: boolean;
  hasMore: boolean;
  scrollThreshold: number;
  className?: string;
  tableClassName?: string;
  rootProps: Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;
  columnWidths: Record<string, number>;
  columnOrder: Array<string>;
  treeMode: boolean;
  treeExpandedKeySet: Set<string | number>;
  columnDragStateRef: RefObject<{ key: string } | null>;
  allHeaderKeys: Array<string>;
  setIsColumnDragging: (dragging: boolean) => void;
  onLoadMore?: () => void | Promise<void>;
  onColumnOrderChange: (order: Array<string>) => void;
  onToggleTreeExpanded: (item: TableItem) => void;
  onClearSelection: () => void;
  onToggleVisibleSelection: () => void;
  onToggleItemSelection: (item: TableItem) => void;
  onToggleExpanded: (item: TableItem) => void;
  onToggleSort: (cell: TableCell, index: number) => void;
  onStartColumnResize: (
    event: MouseEvent<HTMLButtonElement>,
    cell: TableCell,
    index: number,
  ) => void;
  onAutoSizeColumn: (cell: TableCell, index: number) => void;
  onCellTooltipShow: (
    event: MouseEvent<HTMLSpanElement>,
    cell: TableCell,
  ) => void;
  onCellTooltipHide: () => void;
  onPageChange: (page: number) => void;
  cellTooltip: { text: string; x: number; y: number } | null;
  tableScrollRef: RefObject<HTMLDivElement | null>;
  tableRef: RefObject<HTMLTableElement | null>;
  headerCellRefs: RefObject<Record<string, HTMLTableCellElement | null>>;
};

export function TableView(props: TableViewProps) {
  const {
    caption,
    header,
    footer,
    size,
    stickyHeader,
    stickyActions,
    resizableColumns,
    columnDraggable,
    actionsWidth,
    loading,
    loadingText,
    empty,
    actionsLabel,
    selectionMode,
    selectionBar,
    selectionBarActions,
    selectionBarDescription,
    selectionBarSticky,
    headers,
    orderedHeaders,
    hasActions,
    hasExpandableRows,
    hasSelection,
    columnCount,
    allVisibleSelected,
    someVisibleSelected,
    selectedKeySet,
    selectableItems,
    visibleItems,
    treeVisibleItems,
    groupBy,
    groupLabel,
    groupSummary,
    currentSelectedKeys,
    allSelectableItems,
    visibleSelectedCount,
    paginationState,
    selectionName,
    actionsColumnWidth,
    isResizing,
    isColumnDragging,
    virtualScroll,
    virtualScrollOverscan,
    infiniteScroll,
    hasMore,
    scrollThreshold,
    onLoadMore,
    className,
    tableClassName,
    rootProps,
    onClearSelection,
    onToggleVisibleSelection,
    onToggleItemSelection,
    onToggleExpanded,
    onToggleSort,
    onStartColumnResize,
    onAutoSizeColumn,
    onCellTooltipShow,
    onCellTooltipHide,
    onPageChange,
    cellTooltip,
    tableScrollRef,
    tableRef,
    headerCellRefs,
    columnWidths,
    columnOrder,
    onColumnOrderChange,
    treeMode,
    treeExpandedKeySet,
    onToggleTreeExpanded,
    columnDragStateRef,
    setIsColumnDragging,
    allHeaderKeys,
  } = props;

  const {
    headerTableRef,
    renderedSelectionBar,
    resolvedVisibleItems,
    virtualWindow,
    orderedHeaderKeys,
    handleColumnDragStart,
    handleColumnDragEnd,
    handleColumnDrop,
  } = useTableViewModel({
    size,
    virtualScroll,
    virtualScrollOverscan,
    hasExpandableRows,
    treeMode,
    treeVisibleItems,
    visibleItems,
    groupBy,
    groupLabel,
    groupSummary,
    orderedHeaders,
    columnDraggable,
    columnOrder,
    allHeaderKeys,
    columnDragStateRef,
    setIsColumnDragging,
    onColumnOrderChange,
    selectionBar,
    selectionBarActions,
    selectionBarDescription,
    selectionBarSticky,
    currentSelectedKeys,
    allSelectableItems,
    selectableItems,
    visibleSelectedCount,
    allVisibleSelected,
    onClearSelection,
    onToggleVisibleSelection,
    tableScrollRef,
  });

  useTableHeaderScrollSync({
    enabled: stickyHeader,
    scrollContainerRef: tableScrollRef,
    headerTableRef,
    deps: [
      headers,
      columnWidths,
      hasSelection,
      hasExpandableRows,
      hasActions,
      actionsColumnWidth,
    ],
  });

  useTableInfiniteScroll({
    enabled: infiniteScroll,
    loading,
    hasMore,
    onLoadMore,
    scrollThreshold,
    containerRef: tableScrollRef,
  });

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-table",
        `willa-table--${size}`,
        stickyHeader && "willa-table--sticky-header",
        stickyActions && "willa-table--sticky-actions",
        isResizing && "willa-table--resizing",
        className,
      )}
    >
      {header ? <div className="willa-table-header-slot">{header}</div> : null}
      {renderedSelectionBar ? (
        <div className="willa-table-selection-bar-slot">
          {renderedSelectionBar}
        </div>
      ) : null}
      {stickyHeader ? (
        <div className="willa-table-header-scroll" aria-hidden="true">
          <table
            ref={headerTableRef}
            className={classNames("willa-table-element", tableClassName)}
          >
            {caption ? (
              <caption className="willa-table-caption">{caption}</caption>
            ) : null}
            <TableHeader
              headers={headers}
              orderedHeaders={orderedHeaders}
              hasSelection={hasSelection}
              selectionMode={selectionMode}
              allVisibleSelected={allVisibleSelected}
              someVisibleSelected={someVisibleSelected}
              hasExpandableRows={hasExpandableRows}
              hasActions={hasActions}
              actionsLabel={actionsLabel}
              actionsWidth={actionsWidth}
              resizableColumns={resizableColumns}
              columnDraggable={columnDraggable}
              isColumnDragging={isColumnDragging}
              stickyFixedColumns={false}
              sort={props.sort}
              columnWidths={columnWidths}
              headerCellRefs={headerCellRefs}
              stickyActions={stickyActions}
              actionsColumnWidth={actionsColumnWidth}
              onToggleVisibleSelection={onToggleVisibleSelection}
              onToggleSort={onToggleSort}
              onStartColumnResize={onStartColumnResize}
              onAutoSizeColumn={onAutoSizeColumn}
              onColumnDragStart={handleColumnDragStart}
              onColumnDrop={handleColumnDrop}
              onColumnDragEnd={handleColumnDragEnd}
            />
          </table>
        </div>
      ) : null}
      <div className="willa-table-scroll" ref={tableScrollRef}>
        <table
          ref={tableRef}
          className={classNames("willa-table-element", tableClassName)}
        >
          {caption && !stickyHeader ? (
            <caption className="willa-table-caption">{caption}</caption>
          ) : null}
          {!stickyHeader && headers.length > 0 ? (
            <TableHeader
              headers={headers}
              orderedHeaders={orderedHeaders}
              hasSelection={hasSelection}
              selectionMode={selectionMode}
              allVisibleSelected={allVisibleSelected}
              someVisibleSelected={someVisibleSelected}
              hasExpandableRows={hasExpandableRows}
              hasActions={hasActions}
              actionsLabel={actionsLabel}
              actionsWidth={actionsWidth}
              resizableColumns={resizableColumns}
              columnDraggable={columnDraggable}
              isColumnDragging={isColumnDragging}
              stickyFixedColumns
              sort={props.sort}
              columnWidths={columnWidths}
              headerCellRefs={headerCellRefs}
              stickyActions={stickyActions}
              actionsColumnWidth={actionsColumnWidth}
              onToggleVisibleSelection={onToggleVisibleSelection}
              onToggleSort={onToggleSort}
              onStartColumnResize={onStartColumnResize}
              onAutoSizeColumn={onAutoSizeColumn}
              onColumnDragStart={handleColumnDragStart}
              onColumnDrop={handleColumnDrop}
              onColumnDragEnd={handleColumnDragEnd}
            />
          ) : null}
          <TableBody
            loading={loading}
            loadingText={loadingText}
            empty={empty}
            columnCount={columnCount}
            virtualScroll={virtualScroll}
            virtualWindow={virtualWindow}
            resolvedVisibleItems={resolvedVisibleItems}
            orderedHeaderKeys={orderedHeaderKeys}
            orderedHeaders={orderedHeaders}
            hasSelection={hasSelection}
            selectionMode={selectionMode}
            selectionName={selectionName}
            selectedKeySet={selectedKeySet}
            hasExpandableRows={hasExpandableRows}
            hasActions={hasActions}
            actionsWidth={actionsWidth}
            stickyActions={stickyActions}
            actionsColumnWidth={actionsColumnWidth}
            columnWidths={columnWidths}
            treeMode={treeMode}
            treeExpandedKeySet={treeExpandedKeySet}
            onToggleTreeExpanded={onToggleTreeExpanded}
            onToggleItemSelection={onToggleItemSelection}
            onToggleExpanded={onToggleExpanded}
            onCellTooltipShow={onCellTooltipShow}
            onCellTooltipHide={onCellTooltipHide}
          />
        </table>
      </div>
      {footer ? <div className="willa-table-footer-slot">{footer}</div> : null}
      {paginationState ? (
        <TablePagination
          paginationState={paginationState}
          onPageChange={onPageChange}
        />
      ) : null}
      {cellTooltip ? <TableCellTooltip {...cellTooltip} /> : null}
    </div>
  );
}

TableView.displayName = "TableView";
