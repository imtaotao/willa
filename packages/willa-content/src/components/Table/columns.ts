import type { TableCell, TableItem } from "#content/components/Table";

import { getCellKey, getVisibleCells } from "#content/components/Table/utils";

export const getOrderedCells = (options: {
  cells: Array<TableCell>;
  order: Array<string>;
  hidden: Array<string>;
}) => {
  const { cells, order, hidden } = options;
  const visibleCells = getVisibleCells(cells);
  const hiddenSet = new Set(hidden);
  const cellMap = new Map(
    visibleCells.map((cell, index) => [getCellKey(cell, index), cell] as const),
  );
  const orderedKeys = [
    ...order.filter((key) => cellMap.has(key) && !hiddenSet.has(key)),
    ...visibleCells
      .map((cell, index) => getCellKey(cell, index))
      .filter((key) => !order.includes(key) && !hiddenSet.has(key)),
  ];

  return orderedKeys
    .map((key) => cellMap.get(key))
    .filter((cell): cell is TableCell => Boolean(cell));
};

export const getOrderedHeaderKeys = (headers: Array<TableCell>) => {
  return headers.map((cell, index) => getCellKey(cell, index));
};

export const getOrderedRowCells = (
  item: TableItem,
  orderedHeaderKeys: Array<string>,
) => {
  const visibleCells = getVisibleCells(item.cells);
  const cellMap = new Map(
    visibleCells.map((cell, index) => [getCellKey(cell, index), cell] as const),
  );

  return orderedHeaderKeys
    .map((key) => cellMap.get(key))
    .filter((cell): cell is TableCell => Boolean(cell));
};

export const moveColumn = (options: {
  sourceKey: string;
  targetKey: string;
  columnOrder: Array<string>;
  allHeaderKeys: Array<string>;
}) => {
  const { sourceKey, targetKey, columnOrder, allHeaderKeys } = options;
  if (sourceKey === targetKey) return columnOrder;

  const nextOrder = Array.from(new Set([...columnOrder, ...allHeaderKeys]));
  const sourceIndex = nextOrder.indexOf(sourceKey);
  const targetIndex = nextOrder.indexOf(targetKey);
  if (sourceIndex < 0 || targetIndex < 0) return columnOrder;

  nextOrder.splice(sourceIndex, 1);
  nextOrder.splice(targetIndex, 0, sourceKey);
  return nextOrder;
};
