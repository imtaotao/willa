import { useEffect, useMemo } from "react";
import { useControllableState } from "@willa-ui/shared";

export type SingleSelectionItem = {
  value: string;
  disabled?: boolean;
};

export type UseSingleSelectionOptions<Item extends SingleSelectionItem> = {
  items: Array<Item>;
  value?: string;
  defaultValue?: string;
  syncInvalidValue?: boolean;
  onValueChange?: (value: string) => void;
};

export function useSingleSelection<Item extends SingleSelectionItem>(
  options: UseSingleSelectionOptions<Item>,
) {
  const {
    items,
    value,
    defaultValue,
    onValueChange,
    syncInvalidValue = true,
  } = options;

  const enabledItems = useMemo(() => {
    return items.filter((item) => !item.disabled);
  }, [items]);

  const firstEnabledValue = enabledItems[0]?.value ?? "";

  const enabledValues = useMemo(() => {
    return new Set(enabledItems.map((item) => item.value));
  }, [enabledItems]);

  const [currentValue, setCurrentValue, controlled] = useControllableState({
    value,
    defaultValue: defaultValue ?? firstEnabledValue,
    onChange: onValueChange,
  });

  const selectedValue = enabledValues.has(currentValue)
    ? currentValue
    : firstEnabledValue;

  const selectedItem =
    enabledItems.find((item) => item.value === selectedValue) ??
    enabledItems[0];

  useEffect(() => {
    if (!syncInvalidValue) return;
    if (controlled) return;
    if (!firstEnabledValue) return;
    if (enabledValues.has(currentValue)) return;
    setCurrentValue(firstEnabledValue);
  }, [
    controlled,
    currentValue,
    enabledValues,
    firstEnabledValue,
    setCurrentValue,
    syncInvalidValue,
  ]);

  const selectValue = (nextValue: string) => {
    if (!enabledValues.has(nextValue)) return;
    setCurrentValue(nextValue);
  };

  return {
    enabledItems,
    enabledValues,
    firstEnabledValue,
    selectedItem,
    selectedValue,
    selectValue,
  };
}
