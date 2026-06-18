import { forwardRef, type HTMLAttributes } from "react";

import type { TableProps, TableRef } from "#content/components/Table/types";
import { TableView } from "#content/components/Table/TableView";
import { useTableState } from "#content/components/Table/useTableState";

export type {
  TableAlign,
  TableCell,
  TableColumnFixed,
  TableColumnState,
  TableDisplayRow,
  TableGroupContext,
  TableItem,
  TablePagination,
  TableProps,
  TableRef,
  TableRowTone,
  TableSelectionBarContext,
  TableSelectionMode,
  TableSize,
  TableSortDirection,
  TableSortState,
} from "#content/components/Table/types";

const tablePropKeys = new Set([
  "items",
  "caption",
  "header",
  "footer",
  "size",
  "stickyHeader",
  "stickyActions",
  "actionsWidth",
  "loading",
  "loadingText",
  "empty",
  "actionsLabel",
  "sort",
  "defaultSort",
  "onSortChange",
  "selectionMode",
  "selectedKeys",
  "defaultSelectedKeys",
  "onSelectionChange",
  "selectionBar",
  "selectionBarActions",
  "selectionBarDescription",
  "selectionBarSticky",
  "expandedKeys",
  "defaultExpandedKeys",
  "onExpandedChange",
  "pagination",
  "resizableColumns",
  "columnDraggable",
  "columnOrder",
  "defaultColumnOrder",
  "hiddenColumns",
  "defaultHiddenColumns",
  "columnWidths",
  "defaultColumnWidths",
  "onColumnOrderChange",
  "onColumnWidthsChange",
  "onHiddenColumnsChange",
  "columnStateKey",
  "treeMode",
  "groupBy",
  "groupLabel",
  "groupSummary",
  "virtualScroll",
  "virtualScrollOverscan",
  "infiniteScroll",
  "hasMore",
  "scrollThreshold",
  "onLoadMore",
  "tableClassName",
]);

export const Table = forwardRef<TableRef, TableProps>((props, forwardedRef) => {
  const { className, tableClassName, ...rootProps } = props;
  const tableRootProps = Object.fromEntries(
    Object.entries(rootProps).filter(([key]) => !tablePropKeys.has(key)),
  ) as Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;
  const { tableState } = useTableState({
    ...props,
    className,
    tableClassName,
    forwardedRef,
    rootProps: tableRootProps,
  });

  return <TableView {...tableState} />;
});
