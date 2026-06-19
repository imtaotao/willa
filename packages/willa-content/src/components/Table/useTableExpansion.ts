import { useMemo, useState } from "react";

import type { TableItem } from "#content/components/Table/types";

type UseTableExpansionOptions = {
  expandedKeys?: Array<string | number>;
  defaultExpandedKeys?: Array<string | number>;
  onExpandedChange?: (keys: Array<string | number>) => void;
};

export function useTableExpansion(options: UseTableExpansionOptions) {
  const { expandedKeys, defaultExpandedKeys, onExpandedChange } = options;

  const [internalExpandedKeys, setInternalExpandedKeys] = useState<
    Array<string | number>
  >(defaultExpandedKeys ?? []);

  const [internalTreeExpandedKeys, setInternalTreeExpandedKeys] = useState<
    Array<string | number>
  >(defaultExpandedKeys ?? []);

  const currentExpandedKeys = expandedKeys ?? internalExpandedKeys;

  const expandedKeySet = useMemo(
    () => new Set(currentExpandedKeys),
    [currentExpandedKeys],
  );

  const treeExpandedKeySet = useMemo(() => {
    const resolvedKeys =
      expandedKeys ?? internalTreeExpandedKeys ?? internalExpandedKeys;
    return new Set(resolvedKeys);
  }, [expandedKeys, internalExpandedKeys, internalTreeExpandedKeys]);

  const setExpandedKeysState = (nextKeys: Array<string | number>) => {
    if (!expandedKeys) setInternalExpandedKeys(nextKeys);
    onExpandedChange?.(nextKeys);
  };

  const setTreeExpandedKeysState = (nextKeys: Array<string | number>) => {
    if (!expandedKeys) setInternalTreeExpandedKeys(nextKeys);
    onExpandedChange?.(nextKeys);
  };

  const toggleExpanded = (item: TableItem) => {
    if (!item.expanded) return;

    setExpandedKeysState(
      expandedKeySet.has(item.key)
        ? currentExpandedKeys.filter((key) => key !== item.key)
        : [...currentExpandedKeys, item.key],
    );
  };

  const toggleTreeExpanded = (item: TableItem) => {
    const nextKeys = treeExpandedKeySet.has(item.key)
      ? Array.from(treeExpandedKeySet).filter((key) => key !== item.key)
      : [...treeExpandedKeySet, item.key];

    setTreeExpandedKeysState(nextKeys);
  };

  return {
    expandedKeySet,
    toggleExpanded,
    toggleTreeExpanded,
    treeExpandedKeySet,
  };
}
