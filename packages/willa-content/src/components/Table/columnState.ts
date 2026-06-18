import { isArray } from "aidly";

import type { TableColumnState } from "#content/components/Table/types";

const storagePrefix = "willa-table:column-state";

const getStorageKey = (key: string) => `${storagePrefix}:${key}`;

export const readColumnState = (key: string) => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(getStorageKey(key));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<TableColumnState>;
    return {
      order: isArray(parsed.order) ? parsed.order : undefined,
      hidden: isArray(parsed.hidden) ? parsed.hidden : undefined,
      widths:
        parsed.widths && typeof parsed.widths === "object"
          ? parsed.widths
          : undefined,
    };
  } catch {
    return null;
  }
};

export const writeColumnState = (key: string, state: TableColumnState) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(getStorageKey(key), JSON.stringify(state));
  } catch {
    // Ignore persistence failures.
  }
};
