import {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useControllableState } from "@willa-ui/shared";
import classNames from "classnames";

import {
  Input,
  type InputProps,
  type InputVariant,
} from "#form/components/Input";

export type NumberInputValue = number | null;
export type NumberInputStatus = "error" | "warning";
export type NumberInputVariant =
  | InputVariant
  | "borderless"
  | "filled"
  | "underlined";
export type NumberInputControls =
  | boolean
  | {
      upIcon?: ReactNode;
      downIcon?: ReactNode;
    };
export type NumberInputStepInfo = {
  offset: number;
  type: "up" | "down";
  emitter: "handler" | "keyboard";
};
export type NumberInputFormatterInfo = {
  userTyping: boolean;
  input: string;
};

export type NumberInputProps = Omit<
  InputProps,
  | "defaultValue"
  | "leadingAddon"
  | "max"
  | "min"
  | "step"
  | "trailingAddon"
  | "type"
  | "value"
  | "variant"
> & {
  value?: NumberInputValue;
  defaultValue?: NumberInputValue;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  changeOnBlur?: boolean;
  controls?: NumberInputControls;
  keyboard?: boolean;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  status?: NumberInputStatus;
  variant?: NumberInputVariant;
  decimalSeparator?: string;
  incrementLabel?: string;
  decrementLabel?: string;
  formatter?: (
    value: NumberInputValue,
    info: NumberInputFormatterInfo,
  ) => string;
  parser?: (value: string) => string | number;
  onValueChange?: (value: NumberInputValue) => void;
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onStep?: (value: number, info: NumberInputStepInfo) => void;
};

type NormalizeOptions = {
  min?: number;
  max?: number;
  precision?: number;
  clamp?: boolean;
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const {
      value,
      defaultValue = null,
      min,
      max,
      step = 1,
      precision,
      changeOnBlur = true,
      controls = true,
      keyboard = true,
      addonBefore,
      addonAfter,
      prefix,
      suffix,
      status,
      variant = "outline",
      decimalSeparator,
      incrementLabel = "增加数值",
      decrementLabel = "减少数值",
      formatter,
      parser,
      className,
      disabled,
      invalid,
      readOnly,
      inputMode = "decimal",
      onBlur,
      onChange,
      onKeyDown,
      onPressEnter,
      onStep,
      onValueChange,
      ...inputProps
    } = props;
    const normalizedDefaultValue = useMemo(
      () =>
        normalizeNumberValue(defaultValue, {
          min,
          max,
          precision,
          clamp: true,
        }),
      [defaultValue, max, min, precision],
    );
    const [currentValue, setCurrentValue] =
      useControllableState<NumberInputValue>({
        value,
        defaultValue: normalizedDefaultValue,
        onChange: onValueChange,
      });
    const formattedValue = useMemo(
      () =>
        formatNumberValue(currentValue, formatter, {
          input: "",
          userTyping: false,
        }),
      [currentValue, formatter],
    );
    const [inputValue, setInputValue] = useState(formattedValue);
    const [focused, setFocused] = useState(false);
    const finiteMin = getFiniteNumber(min);
    const finiteMax = getFiniteNumber(max);
    const controlsConfig = normalizeControls(controls);
    const canStep = !disabled && !readOnly;

    const disableIncrement =
      !canStep ||
      (currentValue !== null &&
        finiteMax !== null &&
        currentValue >= finiteMax);

    const disableDecrement =
      !canStep ||
      (currentValue !== null &&
        finiteMin !== null &&
        currentValue <= finiteMin);

    const inputVariant = getInputVariant(variant);
    const isInvalid = invalid || status === "error";
    const hasAddonBefore = Boolean(addonBefore);
    const hasAddonAfter = Boolean(addonAfter);
    const hasPrefix = Boolean(prefix);
    const hasSuffix = Boolean(suffix);
    const hasControls = Boolean(controlsConfig);
    const hasLeadingAddon = hasAddonBefore || hasPrefix;
    const hasTrailingAddon = hasSuffix || hasControls || hasAddonAfter;
    const isSegmented = hasAddonBefore && hasAddonAfter;

    useEffect(() => {
      if (!focused) {
        setInputValue(formattedValue);
      }
    }, [focused, formattedValue]);

    const commitValue = (nextValue: NumberInputValue, clamp: boolean) => {
      const normalizedValue = normalizeNumberValue(nextValue, {
        min,
        max,
        precision,
        clamp,
      });

      setCurrentValue(normalizedValue);
      setInputValue(
        formatNumberValue(normalizedValue, formatter, {
          input: "",
          userTyping: false,
        }),
      );

      return normalizedValue;
    };

    const stepBy = (
      direction: 1 | -1,
      multiplier = 1,
      emitter: NumberInputStepInfo["emitter"],
    ) => {
      if (!canStep) {
        return;
      }

      const parsedValue = parseNumberValue(
        inputValue,
        parser,
        decimalSeparator,
      );
      const baseValue = getStepBaseValue({
        currentValue,
        inputValue: parsedValue.valid ? parsedValue.value : null,
      });
      const stepAmount = normalizeStep(step) * multiplier;
      const nextValue =
        baseValue === null
          ? getInitialStepValue({
              direction,
              max: finiteMax,
              min: finiteMin,
              stepAmount,
            })
          : baseValue + direction * stepAmount;
      const committedValue = commitValue(nextValue, true);

      if (committedValue !== null) {
        onStep?.(committedValue, {
          emitter,
          offset: direction * stepAmount,
          type: direction > 0 ? "up" : "down",
        });
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const nextInputValue = event.target.value;
      const parsedValue = parseNumberValue(
        nextInputValue,
        parser,
        decimalSeparator,
      );

      setInputValue(nextInputValue);

      if (parsedValue.valid) {
        setCurrentValue(
          normalizeNumberValue(parsedValue.value, {
            min,
            max,
            precision,
            clamp: false,
          }),
        );
      }

      onChange?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);

      const parsedValue = parseNumberValue(
        event.target.value,
        parser,
        decimalSeparator,
      );

      if (parsedValue.valid) {
        commitValue(parsedValue.value, changeOnBlur);
      } else {
        setInputValue(formattedValue);
      }

      onBlur?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if (event.defaultPrevented || event.nativeEvent.isComposing) {
        return;
      }

      if (event.key === "Enter") {
        onPressEnter?.(event);
      }

      if (!keyboard) {
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        stepBy(1, event.shiftKey ? 10 : 1, "keyboard");
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        stepBy(-1, event.shiftKey ? 10 : 1, "keyboard");
      }

      if (event.key === "Home" && finiteMin !== null) {
        event.preventDefault();
        commitValue(finiteMin, true);
      }

      if (event.key === "End" && finiteMax !== null) {
        event.preventDefault();
        commitValue(finiteMax, true);
      }
    };

    const handleControlMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
      <Input
        {...inputProps}
        ref={ref}
        type="text"
        role="spinbutton"
        variant={inputVariant}
        className={classNames(
          "willa-number-input",
          `willa-number-input--${variant}`,
          status === "warning" && "willa-number-input--warning",
          hasTrailingAddon && "willa-number-input--with-trailing",
          hasAddonBefore && "willa-number-input--with-addon-before",
          hasAddonAfter && "willa-number-input--with-addon-after",
          isSegmented && "willa-number-input--segmented",
          hasSuffix && "willa-number-input--with-suffix",
          hasControls && "willa-number-input--with-controls",
          className,
        )}
        inputMode={inputMode}
        value={inputValue}
        disabled={disabled}
        invalid={isInvalid}
        readOnly={readOnly}
        leadingAddon={
          hasLeadingAddon ? (
            <span className="willa-number-input-leading">
              {hasAddonBefore ? (
                <span className="willa-number-input-addon-before">
                  {addonBefore}
                </span>
              ) : null}
              {hasPrefix ? (
                <span className="willa-number-input-prefix">{prefix}</span>
              ) : null}
            </span>
          ) : null
        }
        aria-valuemin={finiteMin ?? undefined}
        aria-valuemax={finiteMax ?? undefined}
        aria-valuenow={currentValue ?? undefined}
        trailingAddon={
          hasTrailingAddon ? (
            <span className="willa-number-input-trailing">
              {hasSuffix ? (
                <span className="willa-number-input-suffix">{suffix}</span>
              ) : null}
              {controlsConfig ? (
                <span className="willa-number-input-controls">
                  <button
                    className="willa-number-input-control-button"
                    type="button"
                    tabIndex={-1}
                    aria-label={incrementLabel}
                    disabled={disableIncrement}
                    onMouseDown={handleControlMouseDown}
                    onClick={() => stepBy(1, 1, "handler")}
                  >
                    <span
                      className="willa-number-input-control-icon"
                      aria-hidden="true"
                    >
                      {controlsConfig.upIcon ?? <ChevronUpIcon />}
                    </span>
                  </button>
                  <button
                    className="willa-number-input-control-button"
                    type="button"
                    tabIndex={-1}
                    aria-label={decrementLabel}
                    disabled={disableDecrement}
                    onMouseDown={handleControlMouseDown}
                    onClick={() => stepBy(-1, 1, "handler")}
                  >
                    <span
                      className="willa-number-input-control-icon"
                      aria-hidden="true"
                    >
                      {controlsConfig.downIcon ?? <ChevronDownIcon />}
                    </span>
                  </button>
                </span>
              ) : null}
              {hasAddonAfter ? (
                <span className="willa-number-input-addon-after">
                  {addonAfter}
                </span>
              ) : null}
            </span>
          ) : null
        }
        onFocus={(event) => {
          setFocused(true);
          inputProps.onFocus?.(event);
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  },
);

NumberInput.displayName = "NumberInput";

const formatNumberValue = (
  value: NumberInputValue,
  formatter: NumberInputProps["formatter"],
  info: NumberInputFormatterInfo,
) => {
  if (formatter) {
    return formatter(value, info);
  }

  return value === null ? "" : String(value);
};

const parseNumberValue = (
  value: string,
  parser: NumberInputProps["parser"],
  decimalSeparator?: string,
) => {
  const parsedValue = parser
    ? parser(value)
    : normalizeDecimalText(value, decimalSeparator);
  const parsedText = String(parsedValue).trim();

  if (!parsedText) {
    return { valid: true, value: null } as const;
  }

  const parsedNumber = Number(parsedText);

  if (!Number.isFinite(parsedNumber)) {
    return { valid: false } as const;
  }

  return { valid: true, value: parsedNumber } as const;
};

const normalizeDecimalText = (value: string, decimalSeparator?: string) => {
  const decimalText =
    decimalSeparator && decimalSeparator !== "."
      ? value.split(decimalSeparator).join(".")
      : value;

  return decimalText.replace(/,/g, "");
};

const normalizeNumberValue = (
  value: NumberInputValue,
  options: NormalizeOptions,
) => {
  if (value === null || !Number.isFinite(value)) {
    return null;
  }

  const finiteMin = getFiniteNumber(options.min);
  const finiteMax = getFiniteNumber(options.max);
  const normalizedPrecision = getNormalizedPrecision(options.precision);
  let nextValue = value;

  if (options.clamp) {
    if (finiteMin !== null) {
      nextValue = Math.max(nextValue, finiteMin);
    }

    if (finiteMax !== null) {
      nextValue = Math.min(nextValue, finiteMax);
    }
  }

  if (normalizedPrecision !== null) {
    nextValue = Number(nextValue.toFixed(normalizedPrecision));
  }

  return Object.is(nextValue, -0) ? 0 : nextValue;
};

const getNormalizedPrecision = (precision?: number) => {
  if (typeof precision !== "number" || !Number.isFinite(precision)) {
    return null;
  }

  return Math.max(0, Math.trunc(precision));
};

const getFiniteNumber = (value?: number) => {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
};

const normalizeStep = (step: number) => {
  return Number.isFinite(step) && step > 0 ? step : 1;
};

const normalizeControls = (controls: NumberInputControls) => {
  if (!controls) {
    return null;
  }

  return typeof controls === "boolean" ? {} : controls;
};

const getInputVariant = (variant: NumberInputVariant) => {
  return variant === "filled" || variant === "soft" ? "soft" : "outline";
};

const getStepBaseValue = (options: {
  currentValue: NumberInputValue;
  inputValue: NumberInputValue;
}) => {
  const { currentValue, inputValue } = options;

  if (inputValue !== null) {
    return inputValue;
  }

  if (currentValue !== null) {
    return currentValue;
  }

  return null;
};

const getInitialStepValue = (options: {
  direction: 1 | -1;
  min: number | null;
  max: number | null;
  stepAmount: number;
}) => {
  const { direction, max, min, stepAmount } = options;

  if (direction > 0) {
    return min ?? stepAmount;
  }

  return max ?? -stepAmount;
};
