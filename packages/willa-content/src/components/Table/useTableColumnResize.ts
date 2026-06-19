import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type RefObject,
} from "react";

import type { TableCell } from "#content/components/Table/types";
import {
  escapeCssAttribute,
  getCellKey,
} from "#content/components/Table/utils";

const resizeMinWidth = 80;

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
    startX: number;
    startWidth: number;
    widths: Record<string, number>;
  } | null>(null);

  useEffect(() => {
    setColumnWidthsRef.current = setColumnWidths;
  }, [setColumnWidths]);

  const handleColumnResizeMove = useCallback((event: globalThis.MouseEvent) => {
    const resizeState = resizeStateRef.current;
    if (!resizeState) return;

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
      headerCellRefs,
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
    autoSizeColumn,
  };
}
