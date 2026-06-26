import {
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";

import type {
  TableCell,
  TableCellBehavior,
  TableGroupContext,
  TableItem,
  TablePagination,
  TableSelectionBarContext,
  TableRef,
  TableSortState,
} from "#content/components/Table/types";
import {
  getCellKey,
  getCellWidth,
  getPaginationState,
  getVisibleCells,
  sortItems,
} from "#content/components/Table/utils";
import { flattenTreeItems } from "#content/components/Table/tree";
import { getOrderedCells } from "#content/components/Table/columns";
import { useTableColumnResize } from "#content/components/Table/useTableColumnResize";
import { useTableColumnState } from "#content/components/Table/useTableColumnState";
import { useTableExpansion } from "#content/components/Table/useTableExpansion";
import { useTableSelection } from "#content/components/Table/useTableSelection";

type UseTableStateOptions = {
  items: Array<TableItem>;
  caption?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  cellBehavior?: TableCellBehavior;
  cellTooltip?: boolean;
  stickyHeader?: boolean;
  stickyActions?: boolean;
  actionsWidth?: number | string;
  loading?: boolean;
  loadingText?: ReactNode;
  empty?: ReactNode;
  actionsLabel?: ReactNode;
  sort?: TableSortState;
  defaultSort?: TableSortState;
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: Array<string | number>;
  defaultSelectedKeys?: Array<string | number>;
  selectionBar?:
    | boolean
    | ReactNode
    | ((context: TableSelectionBarContext) => ReactNode);
  selectionBarActions?:
    | ReactNode
    | ((context: TableSelectionBarContext) => ReactNode);
  selectionBarDescription?:
    | ReactNode
    | ((context: TableSelectionBarContext) => ReactNode);
  selectionBarSticky?: boolean;
  expandedKeys?: Array<string | number>;
  defaultExpandedKeys?: Array<string | number>;
  pagination?: TablePagination;
  resizableColumns?: boolean;
  columnDraggable?: boolean;
  columnOrder?: Array<string>;
  defaultColumnOrder?: Array<string>;
  hiddenColumns?: Array<string>;
  defaultHiddenColumns?: Array<string>;
  columnWidths?: Record<string, number>;
  defaultColumnWidths?: Record<string, number>;
  columnStateKey?: string;
  treeMode?: boolean;
  groupBy?: string | ((item: TableItem) => string | number | undefined);
  groupLabel?: ReactNode | ((context: TableGroupContext) => ReactNode);
  virtualScroll?: boolean;
  virtualScrollOverscan?: number;
  infiniteScroll?: boolean;
  hasMore?: boolean;
  scrollThreshold?: number;
  forwardedRef: Ref<TableRef>;
  className?: string;
  tableClassName?: string;
  rootProps: Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;
  onSortChange?: (sort: TableSortState) => void;
  onSelectionChange?: (keys: Array<string | number>) => void;
  onExpandedChange?: (keys: Array<string | number>) => void;
  onColumnOrderChange?: (order: Array<string>) => void;
  onColumnWidthsChange?: (widths: Record<string, number>) => void;
  onHiddenColumnsChange?: (hiddenColumns: Array<string>) => void;
  onLoadMore?: () => void | Promise<void>;
  groupSummary?: (context: TableGroupContext) => ReactNode;
};

export function useTableState(options: UseTableStateOptions) {
  const {
    items,
    caption,
    header,
    footer,
    size = "md",
    cellBehavior,
    cellTooltip,
    stickyHeader = false,
    stickyActions = false,
    actionsWidth,
    loading = false,
    loadingText = "加载中",
    empty = "暂无数据",
    actionsLabel = "操作",
    sort,
    defaultSort,
    onSortChange,
    selectionMode = "none",
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    selectionBar,
    selectionBarActions,
    selectionBarDescription,
    selectionBarSticky = false,
    expandedKeys,
    defaultExpandedKeys,
    onExpandedChange,
    pagination,
    resizableColumns = false,
    columnDraggable = false,
    columnOrder,
    defaultColumnOrder = [],
    hiddenColumns,
    defaultHiddenColumns = [],
    columnWidths: controlledColumnWidths,
    defaultColumnWidths = {},
    onColumnOrderChange,
    onColumnWidthsChange,
    onHiddenColumnsChange,
    columnStateKey,
    treeMode = false,
    groupBy,
    groupLabel,
    groupSummary,
    virtualScroll = false,
    virtualScrollOverscan = 4,
    infiniteScroll = false,
    hasMore = false,
    scrollThreshold = 56,
    onLoadMore,
    forwardedRef,
    className,
    tableClassName,
    rootProps,
  } = options;

  const [internalSort, setInternalSort] = useState<TableSortState | undefined>(
    defaultSort,
  );

  const [internalPage, setInternalPage] = useState(
    pagination?.defaultPage ?? 1,
  );

  const [isColumnDragging, setIsColumnDragging] = useState(false);
  const selectionName = useId();
  const tableScrollRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  const headerCellRefs = useRef<Record<string, HTMLTableCellElement | null>>(
    {},
  );

  const columnDragStateRef = useRef<{
    key: string;
  } | null>(null);

  const currentSort = sort ?? internalSort;
  const {
    expandedKeySet,
    toggleExpanded,
    toggleTreeExpanded,
    treeExpandedKeySet,
  } = useTableExpansion({
    expandedKeys,
    defaultExpandedKeys,
    onExpandedChange,
  });

  const {
    columnWidths,
    currentColumnOrder,
    resolvedHiddenColumns,
    setColumnOrderState,
    setColumnWidths,
    setHiddenColumnsState,
  } = useTableColumnState({
    columnOrder,
    defaultColumnOrder,
    hiddenColumns,
    defaultHiddenColumns,
    columnWidths: controlledColumnWidths,
    defaultColumnWidths,
    onColumnOrderChange,
    onColumnWidthsChange,
    onHiddenColumnsChange,
    columnStateKey,
  });

  const headers = getVisibleCells(items[0]?.cells ?? []);

  const orderedHeaders = useMemo(
    () =>
      getOrderedCells({
        cells: headers,
        order: currentColumnOrder,
        hidden: resolvedHiddenColumns,
      }),
    [currentColumnOrder, headers, resolvedHiddenColumns],
  );

  const allHeaderKeys = useMemo(
    () => headers.map((cell, index) => getCellKey(cell, index)),
    [headers],
  );

  const hasActions = items.some((item) => item.actions);
  const hasExpandableRows = !treeMode && items.some((item) => item.expanded);
  const hasSelection = selectionMode !== "none";

  const sortedItems = useMemo(
    () => sortItems(items, currentSort),
    [items, currentSort],
  );

  const paginationState = getPaginationState({
    itemCount: sortedItems.length,
    page: pagination?.page ?? internalPage,
    pageSize: pagination?.pageSize,
    total: pagination?.total,
  });

  const visibleItems = paginationState
    ? sortedItems.slice(paginationState.startIndex, paginationState.endIndex)
    : sortedItems;

  const treeVisibleItems = useMemo(
    () =>
      treeMode
        ? flattenTreeItems(visibleItems, treeExpandedKeySet)
        : visibleItems.map((item) => ({
            item,
            depth: 0,
            parentKey: undefined,
          })),
    [treeExpandedKeySet, treeMode, visibleItems],
  );

  const {
    allSelectableItems,
    allVisibleSelected,
    clearSelection,
    currentSelectedKeys,
    selectableItems,
    selectedKeySet,
    someVisibleSelected,
    toggleItemSelection,
    toggleVisibleSelection,
    visibleSelectedCount,
  } = useTableSelection({
    sortedItems,
    visibleItems,
    selectionMode,
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
  });

  const columnCount = Math.max(
    orderedHeaders.length +
      (hasSelection ? 1 : 0) +
      (hasExpandableRows ? 1 : 0) +
      (hasActions ? 1 : 0),
    1,
  );
  const actionsColumnWidth = getCellWidth(actionsWidth);

  const {
    isResizing,
    startColumnResize,
    resizeColumnBy,
    autoSizeColumn,
    keyboardResizeLargeStep,
    keyboardResizeStep,
  } = useTableColumnResize({
    resizableColumns,
    orderedHeaders,
    tableRef,
    headerCellRefs,
    setColumnWidths,
  });

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollTo: (options) => {
        tableScrollRef.current?.scrollTo(options ?? {});
      },
      scrollToTop: (behavior) => {
        tableScrollRef.current?.scrollTo({ top: 0, behavior });
      },
      scrollToBottom: (behavior) => {
        const element = tableScrollRef.current;
        if (!element) return;

        element.scrollTo({ top: element.scrollHeight, behavior });
      },
      scrollToLeft: (behavior) => {
        tableScrollRef.current?.scrollTo({ left: 0, behavior });
      },
    }),
    [],
  );

  const setSortState = (nextSort: TableSortState) => {
    if (!sort) setInternalSort(nextSort);
    onSortChange?.(nextSort);
  };

  const setPageState = (nextPage: number) => {
    if (pagination?.page === undefined) setInternalPage(nextPage);
    pagination?.onPageChange?.(nextPage);
  };

  const toggleSort = (cell: TableCell, index: number) => {
    if (!cell.sortable) return;

    const sortKey = getCellKey(cell, index);
    const direction =
      currentSort?.key === sortKey && currentSort.direction === "asc"
        ? "desc"
        : "asc";

    setSortState({ key: sortKey, direction });
  };

  const resolvedCellTooltip = cellBehavior?.tooltip ?? cellTooltip ?? true;

  const tableState = {
    className,
    tableClassName,
    rootProps,
    caption,
    header,
    footer,
    size,
    cellTooltip: resolvedCellTooltip,
    stickyHeader,
    stickyActions,
    resizableColumns,
    columnDraggable,
    actionsWidth,
    loading,
    loadingText,
    empty,
    actionsLabel,
    sort: currentSort,
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
    expandedKeySet,
    selectableItems,
    visibleItems,
    treeVisibleItems,
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
    columnWidths,
    columnOrder: currentColumnOrder,
    treeMode,
    groupBy,
    groupLabel,
    groupSummary,
    treeExpandedKeySet,
    tableScrollRef,
    tableRef,
    headerCellRefs,
    onLoadMore,
    onPageChange: setPageState,
    onClearSelection: clearSelection,
    onToggleVisibleSelection: toggleVisibleSelection,
    onToggleItemSelection: toggleItemSelection,
    onToggleExpanded: toggleExpanded,
    onToggleSort: toggleSort,
    onStartColumnResize: startColumnResize,
    onResizeColumnBy: resizeColumnBy,
    onAutoSizeColumn: autoSizeColumn,
    keyboardResizeLargeStep,
    keyboardResizeStep,
    onColumnOrderChange: setColumnOrderState,
    onHiddenColumnsChange: setHiddenColumnsState,
    onToggleTreeExpanded: toggleTreeExpanded,
    columnDragStateRef,
    setIsColumnDragging,
    allHeaderKeys,
  };

  return {
    tableState,
    forwardedRef,
  };
}
