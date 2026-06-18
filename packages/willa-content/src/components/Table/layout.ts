import type { CSSProperties } from "react";

import type { TableCell, TableColumnFixed } from "#content/components/Table";
import {
  defaultFixedColumnWidth,
  getCellKey,
  getCellStyle,
  getCellWidth,
  getFixedColumnStyle,
} from "#content/components/Table/utils";

export const getResolvedCellStyle = (options: {
  cell: TableCell;
  index: number;
  isHeader: boolean;
  stickyFixedColumns: boolean;
  headers: Array<TableCell>;
  hasSelection: boolean;
  hasExpandableRows: boolean;
  hasActions: boolean;
  stickyActions: boolean;
  actionsColumnWidth?: string;
  columnWidths: Record<string, number>;
}) => {
  const {
    cell,
    index,
    isHeader,
    stickyFixedColumns,
    headers,
    hasSelection,
    hasExpandableRows,
    hasActions,
    stickyActions,
    actionsColumnWidth,
    columnWidths,
  } = options;
  const width = columnWidths[getCellKey(cell, index)] ?? cell.width;
  const fixedSide = cell.fixed as TableColumnFixed | undefined;
  const resolvedWidth =
    width ?? (fixedSide ? defaultFixedColumnWidth : undefined);
  if (resolvedWidth === undefined && !fixedSide) return getCellStyle(cell);

  const style: CSSProperties = {
    ...(resolvedWidth !== undefined
      ? {
          width: getCellWidth(resolvedWidth),
          minWidth: getCellWidth(resolvedWidth),
        }
      : {}),
  };

  if (!fixedSide || !stickyFixedColumns) {
    return style;
  }

  const fixedStyle = getFixedColumnStyle({
    fixed: fixedSide,
    index,
    isHeader,
    headers,
    hasSelection,
    hasExpandableRows,
    hasActions,
    stickyActions,
    actionsColumnWidth,
    columnWidths,
  });

  return {
    ...style,
    ...fixedStyle,
  };
};

export const getEstimatedTableRowHeight = (size: "sm" | "md" | "lg") => {
  if (size === "lg") return 64;
  if (size === "sm") return 40;
  return 52;
};
