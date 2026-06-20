import {
  useEffect,
  useMemo,
  useState,
  type DragEvent,
  type RefObject,
} from "react";

import type {
  TableCell,
  TableDisplayRow,
  TableItem,
  TableSelectionBarContext,
  TableProps,
} from "#content/components/Table/types";
import {
  getCellKey,
  renderTableSelectionBar,
} from "#content/components/Table/utils";
import { useVirtualScrollWindow } from "@willa-ui/shared";
import { getEstimatedTableRowHeight } from "#content/components/Table/layout";
import {
  getOrderedHeaderKeys,
  moveColumn,
} from "#content/components/Table/columns";
import { buildTableDisplayRows } from "#content/components/Table/group";

type UseTableViewModelOptions = {
  size: "sm" | "md" | "lg";
  virtualScroll: boolean;
  virtualScrollOverscan: number;
  hasExpandableRows: boolean;
  treeMode: boolean;
  treeVisibleItems: Array<{
    item: TableItem;
    depth: number;
    parentKey?: string | number;
  }>;
  visibleItems: Array<TableItem>;
  groupBy?: string | ((item: TableItem) => string | number | undefined);
  groupLabel?: TableProps["groupLabel"];
  groupSummary?: TableProps["groupSummary"];
  orderedHeaders: Array<TableCell>;
  columnDraggable: boolean;
  columnOrder: Array<string>;
  allHeaderKeys: Array<string>;
  columnDragStateRef: RefObject<{ key: string } | null>;
  setIsColumnDragging: (dragging: boolean) => void;
  onColumnOrderChange: (order: Array<string>) => void;
  selectionBar?: TableProps["selectionBar"];
  selectionBarActions?: TableProps["selectionBarActions"];
  selectionBarDescription?: TableProps["selectionBarDescription"];
  selectionBarSticky: boolean;
  currentSelectedKeys: Array<string | number>;
  allSelectableItems: Array<TableItem>;
  selectableItems: Array<TableItem>;
  visibleSelectedCount: number;
  allVisibleSelected: boolean;
  onClearSelection: () => void;
  onToggleVisibleSelection: () => void;
  tableScrollRef: RefObject<HTMLDivElement | null>;
};

export function useTableViewModel(options: UseTableViewModelOptions) {
  const {
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
  } = options;

  const [bodyScrollContainer, setBodyScrollContainer] =
    useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setBodyScrollContainer(tableScrollRef.current);
  });

  const selectionBarContext: TableSelectionBarContext = useMemo(
    () => ({
      selectedKeys: currentSelectedKeys,
      selectedCount: currentSelectedKeys.length,
      totalCount: allSelectableItems.length,
      visibleCount: selectableItems.length,
      visibleSelectedCount,
      allVisibleSelected,
      onClear: onClearSelection,
      onSelectVisible: onToggleVisibleSelection,
    }),
    [
      allSelectableItems.length,
      allVisibleSelected,
      currentSelectedKeys,
      onClearSelection,
      onToggleVisibleSelection,
      selectableItems.length,
      visibleSelectedCount,
    ],
  );

  const renderedSelectionBar = renderTableSelectionBar({
    selectionBar,
    selectionBarActions,
    selectionBarDescription,
    selectionBarSticky,
    context: selectionBarContext,
  });

  const resolvedVisibleItems = useMemo<Array<TableDisplayRow>>(() => {
    if (treeMode) {
      return treeVisibleItems.map((entry) => ({
        type: "item",
        ...entry,
      }));
    }

    return buildTableDisplayRows({
      items: visibleItems,
      groupBy,
      groupLabel,
      groupSummary,
      treeMode,
    });
  }, [
    groupBy,
    groupLabel,
    groupSummary,
    treeMode,
    treeVisibleItems,
    visibleItems,
  ]);

  const virtualWindow = useVirtualScrollWindow({
    enabled:
      virtualScroll && !hasExpandableRows && resolvedVisibleItems.length > 0,
    itemCount: resolvedVisibleItems.length,
    itemHeight: getEstimatedTableRowHeight(size),
    overscan: virtualScrollOverscan,
    container: bodyScrollContainer,
  });

  const orderedHeaderKeys = getOrderedHeaderKeys(orderedHeaders);

  const handleColumnDragStart = (
    event: DragEvent<HTMLTableCellElement>,
    cell: TableCell,
    index: number,
  ) => {
    if (!columnDraggable) return;

    const key = getCellKey(cell, index);
    columnDragStateRef.current = { key };
    setIsColumnDragging(true);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", key);
  };

  const handleColumnDragEnd = () => {
    columnDragStateRef.current = null;
    setIsColumnDragging(false);
  };

  const handleColumnDrop = (
    event: DragEvent<HTMLTableCellElement>,
    cell: TableCell,
    index: number,
  ) => {
    if (!columnDraggable) return;

    event.preventDefault();
    const targetKey = getCellKey(cell, index);
    const sourceKey =
      columnDragStateRef.current?.key ||
      event.dataTransfer.getData("text/plain");
    handleColumnDragEnd();
    if (!sourceKey) return;

    onColumnOrderChange(
      moveColumn({
        sourceKey,
        targetKey,
        columnOrder,
        allHeaderKeys,
      }),
    );
  };

  return {
    renderedSelectionBar,
    resolvedVisibleItems,
    virtualWindow,
    orderedHeaderKeys,
    handleColumnDragStart,
    handleColumnDragEnd,
    handleColumnDrop,
  };
}
