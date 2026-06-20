import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type RefObject,
} from "react";

import type { TableCell } from "#content/components/Table/types";
import {
  escapeCssAttribute,
  getCellKey,
} from "#content/components/Table/utils";

const resizeMinWidth = 80;
const keyboardResizeStep = 16;
const keyboardResizeLargeStep = 48;

type SetColumnWidths = (
  nextWidths:
    | Record<string, number>
    | ((currentWidths: Record<string, number>) => Record<string, number>),
) => void;

type UseTableColumnResizeOptions = {
  resizableColumns: boolean;
  orderedHeaders: Array<TableCell>;
  tableRef: RefObject<HTMLTableElement | null>;
  headerCellRefs: RefObject<Record<string, HTMLTableCellElement | null>>;
  setColumnWidths: SetColumnWidths;
};

export function useTableColumnResize(options: UseTableColumnResizeOptions) {
  const {
    resizableColumns,
    orderedHeaders,
    tableRef,
    headerCellRefs,
    setColumnWidths,
  } = options;
  const [isResizing, setIsResizing] = useState(false);
  const setColumnWidthsRef = useRef(setColumnWidths);

  const resizeStateRef = useRef<{
    key: string;
    pointerId: number;
    startX: number;
    startWidth: number;
    widths: Record<string, number>;
  } | null>(null);

  useEffect(() => {
    setColumnWidthsRef.current = setColumnWidths;
  }, [setColumnWidths]);

  const handleColumnResizeMove = useCallback(
    (event: globalThis.PointerEvent) => {
      const resizeState = resizeStateRef.current;
      if (!resizeState) return;
      if (event.pointerId !== resizeState.pointerId) return;

      const nextWidth = Math.max(
        resizeState.startWidth + (event.clientX - resizeState.startX),
        resizeMinWidth,
      );

      setColumnWidthsRef.current((currentWidths) =>
        currentWidths[resizeState.key] === nextWidth
          ? currentWidths
          : {
              ...currentWidths,
              ...resizeState.widths,
              [resizeState.key]: nextWidth,
            },
      );
    },
    [],
  );

  const handleColumnResizeEnd = useCallback(
    (event?: globalThis.PointerEvent) => {
      const resizeState = resizeStateRef.current;
      if (event && resizeState && event.pointerId !== resizeState.pointerId) {
        return;
      }

      resizeStateRef.current = null;
      setIsResizing(false);
      window.removeEventListener("pointermove", handleColumnResizeMove);
      window.removeEventListener("pointerup", handleColumnResizeEnd);
      window.removeEventListener("pointercancel", handleColumnResizeEnd);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    },
    [handleColumnResizeMove],
  );

  const measureHeaderWidths = useCallback(() => {
    return orderedHeaders.reduce<Record<string, number>>(
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
  }, [headerCellRefs, orderedHeaders]);

  const startColumnResize = useCallback(
    (
      event: PointerEvent<HTMLButtonElement>,
      cell: TableCell,
      index: number,
    ) => {
      if (!resizableColumns || typeof window === "undefined") return;
      if (event.button !== 0) return;

      event.preventDefault();
      event.stopPropagation();

      const columnKey = getCellKey(cell, index);
      const headerCell = headerCellRefs.current[columnKey];
      if (!headerCell) return;

      const measuredWidths = measureHeaderWidths();

      resizeStateRef.current = {
        key: columnKey,
        pointerId: event.pointerId,
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
      window.addEventListener("pointermove", handleColumnResizeMove);
      window.addEventListener("pointerup", handleColumnResizeEnd);
      window.addEventListener("pointercancel", handleColumnResizeEnd);
    },
    [
      handleColumnResizeEnd,
      handleColumnResizeMove,
      headerCellRefs,
      measureHeaderWidths,
      resizableColumns,
      setColumnWidths,
    ],
  );

  const resizeColumnBy = useCallback(
    (cell: TableCell, index: number, delta: number) => {
      if (!resizableColumns || typeof window === "undefined") return;

      const columnKey = getCellKey(cell, index);
      const headerCell = headerCellRefs.current[columnKey];
      if (!headerCell) return;

      const measuredWidths = measureHeaderWidths();
      const currentWidth =
        measuredWidths[columnKey] ?? headerCell.getBoundingClientRect().width;
      const nextWidth = Math.max(
        Math.ceil(currentWidth + delta),
        resizeMinWidth,
      );

      setColumnWidths((currentWidths) => ({
        ...currentWidths,
        ...measuredWidths,
        [columnKey]: nextWidth,
      }));
    },
    [headerCellRefs, measureHeaderWidths, resizableColumns, setColumnWidths],
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
    [resizableColumns, setColumnWidths, tableRef],
  );

  useEffect(() => {
    return () => {
      handleColumnResizeEnd();
    };
  }, [handleColumnResizeEnd]);

  return {
    isResizing,
    startColumnResize,
    resizeColumnBy,
    autoSizeColumn,
    keyboardResizeLargeStep,
    keyboardResizeStep,
  };
}
