import type { ReactNode } from "react";
import { isNil, isString } from "aidly";

import type {
  TableDisplayRow,
  TableGroupContext,
  TableItem,
} from "#content/components/Table/types";
import { getCellKey } from "#content/components/Table/utils";

const getGroupValue = (
  groupBy: string | ((item: TableItem) => string | number | undefined),
  item: TableItem,
) => {
  if (typeof groupBy === "function") return groupBy(item);

  const cell = item.cells.find(
    (entry, index) => getCellKey(entry, index) === groupBy,
  );
  const candidate = cell?.render ?? cell?.value ?? cell?.label;
  if (typeof candidate === "string" || typeof candidate === "number") {
    return candidate;
  }

  return undefined;
};

const getGroupLabel = (value?: string | number) => {
  if (isNil(value) || (isString(value) && value.length === 0)) {
    return "未分组";
  }
  return String(value);
};

export const buildTableDisplayRows = (options: {
  items: Array<TableItem>;
  groupBy?: string | ((item: TableItem) => string | number | undefined);
  groupLabel?: ReactNode | ((context: TableGroupContext) => ReactNode);
  groupSummary?: (context: TableGroupContext) => ReactNode;
  treeMode: boolean;
}) => {
  const { items, groupBy, groupLabel, groupSummary, treeMode } = options;

  if (!groupBy || treeMode) {
    return items.map((item) => ({
      type: "item",
      item,
      depth: 0,
      parentKey: undefined,
    })) satisfies Array<TableDisplayRow>;
  }

  const groups = new Map<
    string,
    {
      value: string | number | undefined;
      items: Array<TableItem>;
    }
  >();
  const order: Array<string> = [];

  items.forEach((item) => {
    const value = getGroupValue(groupBy, item);
    const key = value === undefined ? "__empty__" : String(value);
    if (!groups.has(key)) {
      groups.set(key, { value, items: [] });
      order.push(key);
    }
    groups.get(key)?.items.push(item);
  });

  const rows: Array<TableDisplayRow> = [];
  order.forEach((key, index) => {
    const group = groups.get(key);
    if (!group) return;

    const baseContext: TableGroupContext = {
      key,
      value: group.value,
      label: getGroupLabel(group.value),
      count: group.items.length,
      items: group.items,
      index,
    };
    const summary =
      typeof groupSummary === "function"
        ? groupSummary(baseContext)
        : undefined;
    const labelContext = {
      ...baseContext,
      summary,
    } satisfies TableGroupContext;
    const label =
      typeof groupLabel === "function"
        ? groupLabel(labelContext)
        : (groupLabel ?? labelContext.label);
    const context: TableGroupContext = {
      ...labelContext,
      label,
    };

    rows.push({ type: "group", context });
    group.items.forEach((item) => {
      rows.push({
        type: "item",
        item,
        depth: 0,
        parentKey: undefined,
      });
    });
  });

  return rows;
};
