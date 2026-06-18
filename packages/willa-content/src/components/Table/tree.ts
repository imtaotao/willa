import type { TableItem } from "#content/components/Table";

export const flattenTreeItems = (
  items: Array<TableItem>,
  expandedSet: Set<string | number>,
) => {
  const result: Array<{
    item: TableItem;
    depth: number;
    parentKey?: string | number;
  }> = [];

  const walk = (
    currentItems: Array<TableItem>,
    depth: number,
    parentKey?: string | number,
  ) => {
    currentItems.forEach((item) => {
      result.push({ item, depth, parentKey });
      if (item.children?.length && expandedSet.has(item.key)) {
        walk(item.children, depth + 1, item.key);
      }
    });
  };

  walk(items, 0);
  return result;
};
