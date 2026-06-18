import { createElement, type CSSProperties, type ReactNode } from "react";

import { SelectionBar } from "#content/components/SelectionBar";

import type {
  TableCell,
  TableColumnFixed,
  TableItem,
  TableSelectionBarContext,
  TableSortDirection,
  TableSortState,
  TableProps,
} from "#content/components/Table";

export const selectionColumnWidth = 48;
export const expandColumnWidth = 48;
export const defaultFixedColumnWidth = 120;

export const getVisibleCells = (cells: Array<TableCell>) => {
  return cells.filter((cell) => !cell.hidden);
};

export const getCellKey = (cell: TableCell, index: number) => {
  return cell.key ?? String(index);
};

export const getCellTooltipText = (cell: TableCell) => {
  if (cell.title) return cell.title;

  if (typeof cell.value === "string" || typeof cell.value === "number") {
    return String(cell.value);
  }

  return undefined;
};

export const getAriaSort = (direction: TableSortDirection | undefined) => {
  if (direction === "asc") return "ascending";
  if (direction === "desc") return "descending";

  return undefined;
};

export const getCellStyle = (cell: TableCell) => {
  if (!cell.width) return undefined;

  return {
    width: getCellWidth(cell.width),
    minWidth: getCellWidth(cell.width),
  };
};

export const getCellWidth = (width: number | string | undefined) => {
  if (width === undefined) return undefined;

  return typeof width === "number" ? `${width}px` : width;
};

export const escapeCssAttribute = (value: string) => {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
};

export const getFixedColumnStyle = (options: {
  fixed: TableColumnFixed;
  index: number;
  isHeader?: boolean;
  headers: Array<TableCell>;
  hasSelection: boolean;
  hasExpandableRows: boolean;
  hasActions: boolean;
  stickyActions: boolean;
  actionsColumnWidth?: string;
  columnWidths: Record<string, number>;
}) => {
  const {
    fixed,
    index,
    isHeader = false,
    headers,
    hasSelection,
    hasExpandableRows,
    hasActions,
    stickyActions,
    actionsColumnWidth,
    columnWidths,
  } = options;

  let offset = "0px";

  if (fixed === "left") {
    if (hasSelection) {
      offset = addCssLength(offset, selectionColumnWidth);
    }
    if (hasExpandableRows) {
      offset = addCssLength(offset, expandColumnWidth);
    }

    for (let previous = 0; previous < index; previous += 1) {
      const previousCell = headers[previous];
      if (previousCell.fixed !== "left") continue;

      offset = addCssLength(
        offset,
        getResolvedWidthValue(previousCell, previous, columnWidths, true),
      );
    }

    return {
      position: "sticky",
      left: offset,
      zIndex: isHeader ? 2 : 1,
    } satisfies CSSProperties;
  }

  if (stickyActions && hasActions && actionsColumnWidth) {
    offset = addCssLength(offset, actionsColumnWidth);
  }

  for (let next = index + 1; next < headers.length; next += 1) {
    const nextCell = headers[next];
    if (nextCell.fixed !== "right") continue;

    offset = addCssLength(
      offset,
      getResolvedWidthValue(nextCell, next, columnWidths, true),
    );
  }

  return {
    position: "sticky",
    right: offset,
    zIndex: isHeader ? 2 : 1,
  } satisfies CSSProperties;
};

export const getResolvedWidthValue = (
  cell: TableCell,
  index: number,
  columnWidths: Record<string, number>,
  useFallback = false,
) => {
  const width = columnWidths[getCellKey(cell, index)] ?? cell.width;
  if (width === undefined) {
    return useFallback ? defaultFixedColumnWidth : undefined;
  }

  return width;
};

export const addCssLength = (base: string, next?: number | string) => {
  const nextValue = getCellWidth(next);
  if (!nextValue) return base;
  if (!base || base === "0px") return nextValue;

  return `calc(${base} + ${nextValue})`;
};

export const getActionsStyle = (width?: number | string) => {
  if (!width) return undefined;

  return { width };
};

export const renderTableSelectionBar = (options: {
  selectionBar: TableProps["selectionBar"];
  selectionBarActions: TableProps["selectionBarActions"];
  selectionBarDescription: TableProps["selectionBarDescription"];
  selectionBarSticky: boolean;
  context: TableSelectionBarContext;
}) => {
  const {
    selectionBar,
    selectionBarActions,
    selectionBarDescription,
    selectionBarSticky,
    context,
  } = options;

  if (!selectionBar || context.selectedCount === 0) return null;

  if (typeof selectionBar === "function") {
    return selectionBar(context);
  }

  if (selectionBar !== true) {
    return selectionBar;
  }

  const actions =
    typeof selectionBarActions === "function"
      ? selectionBarActions(context)
      : selectionBarActions;
  const description =
    typeof selectionBarDescription === "function"
      ? selectionBarDescription(context)
      : selectionBarDescription;

  return createElement(SelectionBar, {
    selectedCount: context.selectedCount,
    totalCount: context.totalCount,
    description,
    actions,
    sticky: selectionBarSticky,
    onSelectAll:
      context.visibleCount > 0 && !context.allVisibleSelected
        ? context.onSelectVisible
        : undefined,
    onClear: context.onClear,
  });
};

export const sortItems = (
  items: Array<TableItem>,
  sort: TableSortState | undefined,
) => {
  if (!sort) return items;

  return [...items].sort((a, b) => {
    const aCell = findCellBySort(a, sort.key);
    const bCell = findCellBySort(b, sort.key);
    if (!aCell || !bCell) return 0;

    const compared = aCell.compare
      ? aCell.compare(aCell, bCell, a, b)
      : compareValues(
          aCell.sortValue ?? aCell.value,
          bCell.sortValue ?? bCell.value,
        );

    return sort.direction === "asc" ? compared : -compared;
  });
};

export const findCellBySort = (item: TableItem, sortKey: string) => {
  return item.cells.find((cell, index) => getCellKey(cell, index) === sortKey);
};

export const compareValues = (a: ReactNode, b: ReactNode) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return String(a ?? "").localeCompare(String(b ?? ""), "zh-Hans-CN", {
    numeric: true,
  });
};

export const getPaginationState = (options: {
  itemCount: number;
  page: number;
  pageSize?: number;
  total?: number;
}) => {
  if (!options.pageSize || options.pageSize <= 0) return null;

  const total = options.total ?? options.itemCount;
  const pageCount = Math.max(Math.ceil(total / options.pageSize), 1);
  const page = Math.min(Math.max(options.page, 1), pageCount);
  const startIndex = (page - 1) * options.pageSize;
  const endIndex = Math.min(startIndex + options.pageSize, options.itemCount);

  return { endIndex, page, pageCount, startIndex, total };
};
