import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from "react";

import type {
  TableCell,
  TableColumnState,
  TableGroupContext,
  TableItem,
  TablePagination,
  TableSelectionBarContext,
  TableRef,
  TableSortState,
} from "#content/components/Table/types";
import {
  readColumnState,
  writeColumnState,
} from "#content/components/Table/columnState";
import {
  escapeCssAttribute,
  getCellKey,
  getCellTooltipText,
  getCellWidth,
  getPaginationState,
  getVisibleCells,
  sortItems,
} from "#content/components/Table/utils";
import { flattenTreeItems } from "#content/components/Table/tree";
import { getOrderedCells } from "#content/components/Table/columns";

const resizeMinWidth = 80;

type TableCellTooltip = {
  text: string;
  x: number;
  y: number;
};

type UseTableStateOptions = {
  items: Array<TableItem>;
  caption?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  stickyHeader?: boolean;
  stickyActions?: boolean;
  actionsWidth?: number | string;
  loading?: boolean;
  loadingText?: ReactNode;
  empty?: ReactNode;
  actionsLabel?: ReactNode;
  sort?: TableSortState;
  defaultSort?: TableSortState;
  onSortChange?: (sort: TableSortState) => void;
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: Array<string | number>;
  defaultSelectedKeys?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
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
  onExpandedChange?: (keys: Array<string | number>) => void;
  pagination?: TablePagination;
  resizableColumns?: boolean;
  columnDraggable?: boolean;
  columnOrder?: Array<string>;
  defaultColumnOrder?: Array<string>;
  hiddenColumns?: Array<string>;
  defaultHiddenColumns?: Array<string>;
  columnWidths?: Record<string, number>;
  defaultColumnWidths?: Record<string, number>;
  onColumnOrderChange?: (order: Array<string>) => void;
  onColumnWidthsChange?: (widths: Record<string, number>) => void;
  onHiddenColumnsChange?: (hiddenColumns: Array<string>) => void;
  columnStateKey?: string;
  treeMode?: boolean;
  groupBy?: string | ((item: TableItem) => string | number | undefined);
  groupLabel?: ReactNode | ((context: TableGroupContext) => ReactNode);
  groupSummary?: (context: TableGroupContext) => ReactNode;
  virtualScroll?: boolean;
  virtualScrollOverscan?: number;
  infiniteScroll?: boolean;
  hasMore?: boolean;
  scrollThreshold?: number;
  onLoadMore?: () => void | Promise<void>;
  forwardedRef: Ref<TableRef>;
  className?: string;
  tableClassName?: string;
  rootProps: Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;
};

export function useTableState(options: UseTableStateOptions) {
  const {
    items,
    caption,
    header,
    footer,
    size = "md",
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

  const [internalSelectedKeys, setInternalSelectedKeys] = useState<
    Array<string | number>
  >(defaultSelectedKeys ?? []);

  const [internalExpandedKeys, setInternalExpandedKeys] = useState<
    Array<string | number>
  >(defaultExpandedKeys ?? []);

  const [internalTreeExpandedKeys, setInternalTreeExpandedKeys] = useState<
    Array<string | number>
  >(defaultExpandedKeys ?? []);

  const [internalPage, setInternalPage] = useState(
    pagination?.defaultPage ?? 1,
  );
  const [cellTooltip, setCellTooltip] = useState<TableCellTooltip | null>(null);

  const persistedColumnState = useMemo<TableColumnState | null>(() => {
    if (!columnStateKey) return null;

    const state = readColumnState(columnStateKey);
    if (!state) return null;

    return {
      order: state.order ?? defaultColumnOrder,
      hidden: state.hidden ?? defaultHiddenColumns,
      widths: state.widths ?? defaultColumnWidths,
    };
  }, [
    columnStateKey,
    defaultColumnOrder,
    defaultHiddenColumns,
    defaultColumnWidths,
  ]);

  const [internalColumnWidths, setInternalColumnWidths] = useState<
    Record<string, number>
  >(persistedColumnState?.widths ?? defaultColumnWidths);

  const [internalColumnOrder, setInternalColumnOrder] = useState<Array<string>>(
    persistedColumnState?.order ?? defaultColumnOrder,
  );

  const [internalHiddenColumns, setInternalHiddenColumns] = useState<
    Array<string>
  >(persistedColumnState?.hidden ?? defaultHiddenColumns);
  const [isResizing, setIsResizing] = useState(false);
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

  const resizeStateRef = useRef<{
    key: string;
    startX: number;
    startWidth: number;
    widths: Record<string, number>;
  } | null>(null);

  const currentSort = sort ?? internalSort;
  const currentSelectedKeys = selectedKeys ?? internalSelectedKeys;
  const currentExpandedKeys = expandedKeys ?? internalExpandedKeys;

  const selectedKeySet = useMemo(
    () => new Set(currentSelectedKeys),
    [currentSelectedKeys],
  );

  const expandedKeySet = useMemo(
    () => new Set(currentExpandedKeys),
    [currentExpandedKeys],
  );

  const treeExpandedKeySet = useMemo(() => {
    const resolvedKeys =
      expandedKeys ?? internalTreeExpandedKeys ?? internalExpandedKeys;
    return new Set(resolvedKeys);
  }, [expandedKeys, internalExpandedKeys, internalTreeExpandedKeys]);

  const headers = getVisibleCells(items[0]?.cells ?? []);
  const resolvedHiddenColumns = hiddenColumns ?? internalHiddenColumns;

  const orderedHeaders = useMemo(
    () =>
      getOrderedCells({
        cells: headers,
        order: columnOrder ?? internalColumnOrder,
        hidden: resolvedHiddenColumns,
      }),
    [columnOrder, headers, internalColumnOrder, resolvedHiddenColumns],
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

  const allSelectableItems = sortedItems.filter((item) => !item.disabled);
  const selectableItems = visibleItems.filter((item) => !item.disabled);

  const allVisibleSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedKeySet.has(item.key));

  const visibleSelectedCount = selectableItems.filter((item) =>
    selectedKeySet.has(item.key),
  ).length;

  const someVisibleSelected =
    selectableItems.some((item) => selectedKeySet.has(item.key)) &&
    !allVisibleSelected;

  const columnCount = Math.max(
    orderedHeaders.length +
      (hasSelection ? 1 : 0) +
      (hasExpandableRows ? 1 : 0) +
      (hasActions ? 1 : 0),
    1,
  );
  const actionsColumnWidth = getCellWidth(actionsWidth);
  const columnWidths = controlledColumnWidths ?? internalColumnWidths;

  useEffect(() => {
    if (!columnStateKey) return;

    const nextState: TableColumnState = {
      order: columnOrder ?? internalColumnOrder,
      hidden: resolvedHiddenColumns,
      widths: columnWidths,
    };
    writeColumnState(columnStateKey, nextState);
  }, [
    columnOrder,
    columnStateKey,
    columnWidths,
    internalColumnOrder,
    resolvedHiddenColumns,
  ]);

  const setColumnWidths = useCallback(
    (
      nextWidths:
        | Record<string, number>
        | ((currentWidths: Record<string, number>) => Record<string, number>),
    ) => {
      const resolvedWidths =
        typeof nextWidths === "function"
          ? nextWidths(controlledColumnWidths ?? internalColumnWidths)
          : nextWidths;

      if (controlledColumnWidths === undefined) {
        setInternalColumnWidths(resolvedWidths);
      }
      onColumnWidthsChange?.(resolvedWidths);
    },
    [controlledColumnWidths, internalColumnWidths, onColumnWidthsChange],
  );

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

  const handleColumnResizeMove = useCallback((event: globalThis.MouseEvent) => {
    const resizeState = resizeStateRef.current;
    if (!resizeState) return;

    const nextWidth = Math.max(
      resizeState.startWidth + (event.clientX - resizeState.startX),
      resizeMinWidth,
    );

    setColumnWidths((currentWidths) =>
      currentWidths[resizeState.key] === nextWidth
        ? currentWidths
        : {
            ...currentWidths,
            ...resizeState.widths,
            [resizeState.key]: nextWidth,
          },
    );
  }, []);

  const handleColumnResizeEnd = useCallback(() => {
    resizeStateRef.current = null;
    setIsResizing(false);
    window.removeEventListener("mousemove", handleColumnResizeMove);
    window.removeEventListener("mouseup", handleColumnResizeEnd);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, [handleColumnResizeMove]);

  const startColumnResize = useCallback(
    (event: MouseEvent<HTMLButtonElement>, cell: TableCell, index: number) => {
      if (!resizableColumns || typeof window === "undefined") return;

      event.preventDefault();
      event.stopPropagation();

      const columnKey = getCellKey(cell, index);
      const headerCell = headerCellRefs.current[columnKey];
      if (!headerCell) return;

      const measuredWidths = orderedHeaders.reduce<Record<string, number>>(
        (widths, headerCellItem, headerIndex) => {
          const key = getCellKey(headerCellItem, headerIndex);
          const element = headerCellRefs.current[key];
          if (!element) return widths;

          return {
            ...widths,
            [key]: Math.ceil(element.getBoundingClientRect().width),
          };
        },
        {},
      );

      resizeStateRef.current = {
        key: columnKey,
        startX: event.clientX,
        startWidth:
          measuredWidths[columnKey] ?? headerCell.getBoundingClientRect().width,
        widths: measuredWidths,
      };
      setColumnWidths((currentWidths) => ({
        ...currentWidths,
        ...measuredWidths,
      }));
      setIsResizing(true);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      window.addEventListener("mousemove", handleColumnResizeMove);
      window.addEventListener("mouseup", handleColumnResizeEnd);
    },
    [
      handleColumnResizeEnd,
      handleColumnResizeMove,
      orderedHeaders,
      resizableColumns,
      setColumnWidths,
    ],
  );

  const autoSizeColumn = useCallback(
    (cell: TableCell, index: number) => {
      if (!resizableColumns || typeof window === "undefined") return;

      const columnKey = getCellKey(cell, index);
      const tableElement = tableRef.current;
      if (!tableElement) return;

      const selector = `[data-column-key="${escapeCssAttribute(columnKey)}"]`;
      const candidates = tableElement.querySelectorAll<HTMLElement>(selector);
      let nextWidth = 0;

      candidates.forEach((element) => {
        nextWidth = Math.max(nextWidth, element.scrollWidth);
      });

      if (nextWidth <= 0) return;

      setColumnWidths((currentWidths) => ({
        ...currentWidths,
        [columnKey]: Math.ceil(nextWidth + 18),
      }));
    },
    [resizableColumns, setColumnWidths],
  );

  useEffect(() => {
    return () => {
      handleColumnResizeEnd();
    };
  }, [handleColumnResizeEnd]);

  const setSortState = (nextSort: TableSortState) => {
    if (!sort) setInternalSort(nextSort);
    onSortChange?.(nextSort);
  };

  const setSelectedKeysState = (nextKeys: Array<string | number>) => {
    if (!selectedKeys) setInternalSelectedKeys(nextKeys);
    onSelectionChange?.(nextKeys);
  };

  const setHiddenColumnsState = (nextHiddenColumns: Array<string>) => {
    if (hiddenColumns === undefined) {
      setInternalHiddenColumns(nextHiddenColumns);
    }
    onHiddenColumnsChange?.(nextHiddenColumns);
  };

  const setExpandedKeysState = (nextKeys: Array<string | number>) => {
    if (!expandedKeys) setInternalExpandedKeys(nextKeys);
    onExpandedChange?.(nextKeys);
  };

  const setTreeExpandedKeysState = (nextKeys: Array<string | number>) => {
    if (!expandedKeys) setInternalTreeExpandedKeys(nextKeys);
    onExpandedChange?.(nextKeys);
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

  const toggleItemSelection = (item: TableItem) => {
    if (item.disabled) return;

    if (selectionMode === "single") {
      setSelectedKeysState(selectedKeySet.has(item.key) ? [] : [item.key]);
      return;
    }

    if (selectionMode === "multiple") {
      setSelectedKeysState(
        selectedKeySet.has(item.key)
          ? currentSelectedKeys.filter((key) => key !== item.key)
          : [...currentSelectedKeys, item.key],
      );
    }
  };

  const toggleVisibleSelection = () => {
    if (selectionMode !== "multiple") return;

    const visibleKeys = selectableItems.map((item) => item.key);
    if (allVisibleSelected) {
      setSelectedKeysState(
        currentSelectedKeys.filter((key) => !visibleKeys.includes(key)),
      );
      return;
    }

    setSelectedKeysState(
      Array.from(new Set([...currentSelectedKeys, ...visibleKeys])),
    );
  };

  const clearSelection = () => setSelectedKeysState([]);

  const toggleExpanded = (item: TableItem) => {
    if (!item.expanded) return;

    setExpandedKeysState(
      expandedKeySet.has(item.key)
        ? currentExpandedKeys.filter((key) => key !== item.key)
        : [...currentExpandedKeys, item.key],
    );
  };

  const showCellTooltip = (
    event: MouseEvent<HTMLSpanElement>,
    cell: TableCell,
  ) => {
    const text = getCellTooltipText(cell);
    if (!text) return;

    const element = event.currentTarget;
    if (element.scrollWidth <= element.clientWidth + 1) return;

    const rect = element.getBoundingClientRect();
    setCellTooltip({
      text,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  const hideCellTooltip = () => setCellTooltip(null);

  const tableState = {
    className,
    tableClassName,
    rootProps,
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
    columnOrder: columnOrder ?? internalColumnOrder,
    treeMode,
    groupBy,
    groupLabel,
    groupSummary,
    treeExpandedKeySet,
    cellTooltip,
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
    onAutoSizeColumn: autoSizeColumn,
    onCellTooltipShow: showCellTooltip,
    onCellTooltipHide: hideCellTooltip,
    onColumnOrderChange: (nextOrder: Array<string>) => {
      if (columnOrder === undefined) {
        setInternalColumnOrder(nextOrder);
      }
      onColumnOrderChange?.(nextOrder);
    },
    onHiddenColumnsChange: setHiddenColumnsState,
    onToggleTreeExpanded: (item: TableItem) => {
      const nextKeys = treeExpandedKeySet.has(item.key)
        ? Array.from(treeExpandedKeySet).filter((key) => key !== item.key)
        : [...treeExpandedKeySet, item.key];

      setTreeExpandedKeysState(nextKeys);
    },
    columnDragStateRef,
    setIsColumnDragging,
    allHeaderKeys,
  };

  return {
    tableState,
    forwardedRef,
  };
}
