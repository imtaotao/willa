import classNames from "classnames";

import {
  Table,
  type TableAlign,
  type TableCell,
  type TableItem,
  type TablePagination,
  type TableProps,
  type TableRowTone,
  type TableSelectionMode,
  type TableSize,
  type TableSortDirection,
  type TableSortState,
} from "#content/components/Table";

export type DataTableAlign = TableAlign;
export type DataTableCell = TableCell;
export type DataTableItem = TableItem;
export type DataTablePagination = TablePagination;
export type DataTableRowTone = TableRowTone;
export type DataTableSelectionMode = TableSelectionMode;
export type DataTableSize = TableSize;
export type DataTableSortDirection = TableSortDirection;
export type DataTableSortState = TableSortState;

export type DataTableProps = TableProps;

export function DataTable(props: DataTableProps) {
  return (
    <Table
      {...props}
      tableClassName={classNames(
        "willa-data-table-element",
        props.tableClassName,
      )}
      className={classNames("willa-data-table", props.className)}
    />
  );
}
