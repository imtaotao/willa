import { useCallback, useState, type SetStateAction } from "react";

export type ControllableStateOptions<Value> = {
  value?: Value;
  defaultValue: Value | (() => Value);
  onChange?: (value: Value) => void;
};

export function useControllableState<Value>(
  options: ControllableStateOptions<Value>,
) {
  const { value, defaultValue, onChange } = options;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const controlled = value !== undefined;
  const currentValue = controlled ? (value as Value) : uncontrolledValue;

  const setValue = useCallback(
    (nextValue: SetStateAction<Value>) => {
      const resolvedValue = resolveStateAction(nextValue, currentValue);

      if (!controlled) {
        setUncontrolledValue(resolvedValue);
      }

      onChange?.(resolvedValue);
    },
    [controlled, currentValue, onChange],
  );

  return [currentValue, setValue, controlled] as const;
}

const resolveStateAction = <Value>(
  value: SetStateAction<Value>,
  previousValue: Value,
) => {
  if (typeof value === "function") {
    return (value as (previousValue: Value) => Value)(previousValue);
  }

  return value;
};
