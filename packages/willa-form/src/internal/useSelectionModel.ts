import { useState, type ReactNode } from "react";

export type SelectionModelMode = "single" | "multiple";
export type SelectionModelValue = string | Array<string>;

export type SelectionModelItem = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

export type UseSelectionModelOptions<Item extends SelectionModelItem> = {
  items: Array<Item>;
  mode: SelectionModelMode;
  placeholder: ReactNode;
  value?: SelectionModelValue;
  defaultValue?: SelectionModelValue;
  renderValue?: (items: Array<Item>) => ReactNode;
  onValueChange?: (value: SelectionModelValue, items: Array<Item>) => void;
};

export function useSelectionModel<Item extends SelectionModelItem>(
  options: UseSelectionModelOptions<Item>,
) {
  const {
    items,
    mode,
    placeholder,
    value,
    defaultValue,
    renderValue,
    onValueChange,
  } = options;
  const [innerValue, setInnerValue] = useState<SelectionModelValue>(
    defaultValue ?? getEmptySelectionValue(mode),
  );
  const currentValue = value ?? innerValue;
  const selectedValues = normalizeSelectionValue(currentValue, mode);
  const selectedItems = items.filter((item) =>
    selectedValues.includes(item.value),
  );
  const hasValue = selectedItems.length > 0;
  const displayValue = hasValue
    ? (renderValue?.(selectedItems) ??
      selectedItems.map((item) => item.label).join("、"))
    : placeholder;

  const commitItem = (item: Item) => {
    if (item.disabled) {
      return false;
    }

    const nextValues =
      mode === "multiple"
        ? toggleSelectionValue(selectedValues, item.value)
        : [item.value];
    const nextValue = getSelectionValue(nextValues, mode);
    const nextItems = items.filter((option) =>
      nextValues.includes(option.value),
    );

    if (value === undefined) {
      setInnerValue(nextValue);
    }

    onValueChange?.(nextValue, nextItems);

    return true;
  };

  const clearValue = () => {
    const nextValue = getEmptySelectionValue(mode);

    if (value === undefined) {
      setInnerValue(nextValue);
    }

    onValueChange?.(nextValue, []);
  };

  return {
    clearValue,
    commitItem,
    displayValue,
    hasValue,
    selectedItems,
    selectedValues,
    hiddenValue: selectedValues.join(","),
  };
}

export const normalizeSelectionValue = (
  value: SelectionModelValue,
  mode: SelectionModelMode,
) => {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return [];
  }

  return mode === "multiple" ? value.split(",").filter(Boolean) : [value];
};

const getEmptySelectionValue = (mode: SelectionModelMode) =>
  mode === "multiple" ? [] : "";

const getSelectionValue = (values: Array<string>, mode: SelectionModelMode) =>
  mode === "multiple" ? values : (values[0] ?? "");

const toggleSelectionValue = (values: Array<string>, value: string) => {
  if (values.includes(value)) {
    return values.filter((item) => item !== value);
  }

  return [...values, value];
};
