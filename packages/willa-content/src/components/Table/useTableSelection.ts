import { useMemo, useState } from "react";

import type { TableItem } from "#content/components/Table/types";

type UseTableSelectionOptions = {
  sortedItems: Array<TableItem>;
  visibleItems: Array<TableItem>;
  selectionMode: "none" | "single" | "multiple";
  selectedKeys?: Array<string | number>;
  defaultSelectedKeys?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
};

export function useTableSelection(options: UseTableSelectionOptions) {
  const {
    sortedItems,
    visibleItems,
    selectionMode,
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
  } = options;

  const [internalSelectedKeys, setInternalSelectedKeys] = useState<
    Array<string | number>
  >(defaultSelectedKeys ?? []);

  const currentSelectedKeys = selectedKeys ?? internalSelectedKeys;

  const selectedKeySet = useMemo(
    () => new Set(currentSelectedKeys),
    [currentSelectedKeys],
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

  const setSelectedKeysState = (nextKeys: Array<string | number>) => {
    if (!selectedKeys) setInternalSelectedKeys(nextKeys);
    onSelectionChange?.(nextKeys);
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

  return {
    allSelectableItems,
    allVisibleSelected,
    clearSelection,
    currentSelectedKeys,
    selectableItems,
    selectedKeySet,
    someVisibleSelected,
    toggleItemSelection,
    toggleVisibleSelection,
    visibleSelectedCount,
  };
}
