import { useCallback, useEffect, useMemo, useState } from "react";

import type { TableColumnState } from "#content/components/Table/types";
import {
  readColumnState,
  writeColumnState,
} from "#content/components/Table/columnState";

type UseTableColumnStateOptions = {
  columnStateKey?: string;
  columnOrder?: Array<string>;
  defaultColumnOrder?: Array<string>;
  hiddenColumns?: Array<string>;
  defaultHiddenColumns?: Array<string>;
  columnWidths?: Record<string, number>;
  defaultColumnWidths?: Record<string, number>;
  onColumnOrderChange?: (order: Array<string>) => void;
  onColumnWidthsChange?: (widths: Record<string, number>) => void;
  onHiddenColumnsChange?: (hiddenColumns: Array<string>) => void;
};

const emptyColumnState: TableColumnState = {
  order: [],
  hidden: [],
  widths: {},
};

export function useTableColumnState(options: UseTableColumnStateOptions) {
  const {
    columnOrder,
    defaultColumnOrder = emptyColumnState.order,
    hiddenColumns,
    defaultHiddenColumns = emptyColumnState.hidden,
    columnWidths: controlledColumnWidths,
    defaultColumnWidths = emptyColumnState.widths,
    onColumnOrderChange,
    onColumnWidthsChange,
    onHiddenColumnsChange,
    columnStateKey,
  } = options;

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

  const resolvedHiddenColumns = hiddenColumns ?? internalHiddenColumns;
  const currentColumnOrder = columnOrder ?? internalColumnOrder;
  const columnWidths = controlledColumnWidths ?? internalColumnWidths;

  useEffect(() => {
    if (!columnStateKey) return;

    writeColumnState(columnStateKey, {
      order: currentColumnOrder,
      hidden: resolvedHiddenColumns,
      widths: columnWidths,
    });
  }, [columnStateKey, columnWidths, currentColumnOrder, resolvedHiddenColumns]);

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

  const setColumnOrderState = useCallback(
    (nextOrder: Array<string>) => {
      if (columnOrder === undefined) {
        setInternalColumnOrder(nextOrder);
      }
      onColumnOrderChange?.(nextOrder);
    },
    [columnOrder, onColumnOrderChange],
  );

  const setHiddenColumnsState = useCallback(
    (nextHiddenColumns: Array<string>) => {
      if (hiddenColumns === undefined) {
        setInternalHiddenColumns(nextHiddenColumns);
      }
      onHiddenColumnsChange?.(nextHiddenColumns);
    },
    [hiddenColumns, onHiddenColumnsChange],
  );

  const resetColumnState = useCallback(() => {
    setColumnOrderState(defaultColumnOrder);
    setHiddenColumnsState(defaultHiddenColumns);
    setColumnWidths(defaultColumnWidths);
  }, [
    defaultColumnOrder,
    defaultColumnWidths,
    defaultHiddenColumns,
    setColumnOrderState,
    setColumnWidths,
    setHiddenColumnsState,
  ]);

  return {
    columnOrder: currentColumnOrder,
    columnWidths,
    hiddenColumns: resolvedHiddenColumns,
    currentColumnOrder,
    resolvedHiddenColumns,
    resetColumnState,
    setColumnOrder: setColumnOrderState,
    setColumnOrderState,
    setHiddenColumns: setHiddenColumnsState,
    setColumnWidths,
    setHiddenColumnsState,
  };
}

export type { UseTableColumnStateOptions };
