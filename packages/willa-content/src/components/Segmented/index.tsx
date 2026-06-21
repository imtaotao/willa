import {
  useEffect,
  useMemo,
  useRef,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { useControllableState } from "@willa-ui/shared";
import { useSingleSelection } from "#content/internal/useSingleSelection";

export type SegmentedSize = "sm" | "md" | "lg";
export type SegmentedSelectionMode = "single" | "multiple";

export type SegmentedOption = {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
};

type SegmentedBaseProps = {
  options: Array<SegmentedOption>;
  size?: SegmentedSize;
  block?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
} & Omit<
  HTMLAttributes<HTMLDivElement>,
  | "aria-label"
  | "aria-labelledby"
  | "children"
  | "defaultValue"
  | "onChange"
  | "role"
>;

export type SegmentedSingleProps = SegmentedBaseProps & {
  selectionMode?: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  values?: never;
  defaultValues?: never;
  onValuesChange?: never;
};

export type SegmentedMultipleProps = SegmentedBaseProps & {
  selectionMode: "multiple";
  values?: Array<string>;
  defaultValues?: Array<string>;
  onValuesChange?: (values: Array<string>) => void;
  value?: never;
  defaultValue?: never;
  onValueChange?: never;
};

export type SegmentedProps = SegmentedSingleProps | SegmentedMultipleProps;

export function Segmented(props: SegmentedProps) {
  const {
    options,
    selectionMode: selectionModeProp,
    value,
    defaultValue,
    onValueChange,
    values,
    defaultValues,
    onValuesChange,
    size = "md",
    block = false,
    disabled = false,
    ariaLabel,
    ariaLabelledBy,
    className,
    ...segmentedProps
  } = props;
  const selectionMode = selectionModeProp ?? "single";
  const multiple = selectionMode === "multiple";
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const singleSelection = useSingleSelection({
    items: options,
    value: multiple ? undefined : value,
    defaultValue: multiple ? "" : defaultValue,
    onValueChange: multiple ? undefined : onValueChange,
    syncInvalidValue: !multiple,
  });
  const {
    enabledItems: enabledOptions,
    enabledValues,
    selectedValue,
  } = singleSelection;
  const [currentValues, setCurrentValues, multipleControlled] =
    useControllableState<Array<string>>({
      value: multiple ? values : undefined,
      defaultValue: multiple ? (defaultValues ?? []) : [],
      onChange: multiple ? onValuesChange : undefined,
    });
  const normalizedValues = useMemo(() => {
    return uniqueValues(currentValues).filter((item) =>
      enabledValues.has(item),
    );
  }, [currentValues, enabledValues]);
  const selectedValues = useMemo(() => {
    return new Set(multiple ? normalizedValues : [selectedValue]);
  }, [multiple, normalizedValues, selectedValue]);
  const focusValue =
    normalizedValues.find((item) => enabledValues.has(item)) ||
    selectedValue ||
    singleSelection.firstEnabledValue;

  useEffect(() => {
    if (!multiple || multipleControlled) return;
    if (areStringArraysEqual(currentValues, normalizedValues)) return;

    setCurrentValues(normalizedValues);
  }, [
    currentValues,
    multiple,
    multipleControlled,
    normalizedValues,
    setCurrentValues,
  ]);

  const focusOption = (nextValue: string) => {
    const nextIndex = options.findIndex((option) => option.value === nextValue);
    optionRefs.current[nextIndex]?.focus();
  };

  const selectOption = (nextValue: string, focus = false) => {
    if (disabled) return;
    const nextIndex = options.findIndex((option) => option.value === nextValue);
    const nextOption = options[nextIndex];
    if (!nextOption || nextOption.disabled) return;

    if (multiple) {
      setCurrentValues((currentItems) => {
        const currentSet = new Set(
          uniqueValues(currentItems).filter((item) => enabledValues.has(item)),
        );

        if (currentSet.has(nextValue)) {
          currentSet.delete(nextValue);
        } else {
          currentSet.add(nextValue);
        }

        return Array.from(currentSet);
      });
    } else {
      singleSelection.selectValue(nextValue);
    }

    if (focus) {
      focusOption(nextValue);
    }
  };

  const moveOption = (nextValue: string) => {
    if (multiple) {
      focusOption(nextValue);
      return;
    }

    selectOption(nextValue, true);
  };

  const getCurrentKeyboardIndex = (event: KeyboardEvent<HTMLDivElement>) => {
    const targetIndex = optionRefs.current.findIndex(
      (element) => element === event.target,
    );
    const activeValue =
      targetIndex >= 0 ? options[targetIndex]?.value : focusValue;

    return enabledOptions.findIndex((option) => option.value === activeValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    segmentedProps.onKeyDown?.(event);
    if (event.defaultPrevented || disabled || !enabledOptions.length) return;

    const currentIndex = getCurrentKeyboardIndex(event);
    const safeIndex = currentIndex >= 0 ? currentIndex : 0;
    const lastIndex = enabledOptions.length - 1;
    const nextIndex = safeIndex >= lastIndex ? 0 : safeIndex + 1;
    const previousIndex = safeIndex <= 0 ? lastIndex : safeIndex - 1;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveOption(enabledOptions[nextIndex].value);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveOption(enabledOptions[previousIndex].value);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveOption(enabledOptions[0].value);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      moveOption(enabledOptions[lastIndex].value);
    }
  };

  if (!options.length) return null;

  optionRefs.current = [];

  return (
    <div
      {...segmentedProps}
      className={classNames(
        "willa-segmented",
        `willa-segmented--${size}`,
        block && "willa-segmented--block",
        disabled && "willa-segmented--disabled",
        className,
      )}
      role={multiple ? "group" : "radiogroup"}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-disabled={disabled || undefined}
      data-selection-mode={selectionMode}
      onKeyDown={handleKeyDown}
    >
      {options.map((option, index) => {
        const selected = selectedValues.has(option.value);
        const optionDisabled = disabled || option.disabled;

        return (
          <button
            key={option.value}
            ref={(element) => {
              optionRefs.current[index] = element;
            }}
            className="willa-segmented-option"
            type="button"
            role={multiple ? undefined : "radio"}
            aria-checked={multiple ? undefined : selected}
            aria-pressed={multiple ? selected : undefined}
            aria-label={option.ariaLabel}
            disabled={optionDisabled}
            tabIndex={option.value === focusValue && !optionDisabled ? 0 : -1}
            onClick={() => selectOption(option.value)}
          >
            {option.icon ? (
              <span className="willa-segmented-option-icon" aria-hidden="true">
                {option.icon}
              </span>
            ) : null}
            <span className="willa-segmented-option-label">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Segmented.displayName = "Segmented";

const uniqueValues = (values: Array<string>) => {
  return Array.from(new Set(values));
};

const areStringArraysEqual = (
  firstValues: Array<string>,
  secondValues: Array<string>,
) => {
  if (firstValues.length !== secondValues.length) return false;

  return firstValues.every((value, index) => value === secondValues[index]);
};
