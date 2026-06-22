import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  type Ref,
} from "react";
import { ClockIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { assignRef } from "@willa-ui/shared";
import classNames from "classnames";

import {
  FloatingPanelPortal,
  FloatingPanelShell,
} from "#form/internal/floatingPanelParts";
import { useFloatingPanel } from "#form/internal/useFloatingPanel";
import {
  createTimeWheelOptions,
  formatTimeWheelDisplayValue,
  formatTimeWheelValue,
  getTimeWheelPanelMinWidth,
  getTimeWheelParts,
  normalizeTimeWheelColumns,
  normalizeTimeWheelParts,
  type TimePickerDisabledTime,
  type TimePickerWheelColumn,
  type TimePickerWheelColumns,
} from "#form/internal/timePickerParts";

export type {
  TimePickerDisabledTime,
  TimePickerWheelColumn,
  TimePickerWheelColumns,
} from "#form/internal/timePickerParts";

export type TimePickerSize = "sm" | "md" | "lg";
export type TimePickerVariant = "outline" | "soft";

export type TimePickerPreset = {
  label: ReactNode;
  value: string;
};

export type TimePickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  ref?: Ref<HTMLButtonElement>;
  allowClear?: boolean;
  disabledTime?: TimePickerDisabledTime | null;
  format?: string;
  hourStep?: number;
  minuteStep?: number;
  needConfirm?: boolean;
  presets?: Array<TimePickerPreset>;
  secondStep?: number;
  showNow?: boolean;
  showScrollbar?: boolean;
  wheelColumns?: TimePickerWheelColumns;
  size?: TimePickerSize;
  variant?: TimePickerVariant;
  use12Hours?: boolean;
  width?: CSSProperties["width"];
  invalid?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export function TimePicker(props: TimePickerProps) {
  const {
    ref,
    allowClear = false,
    disabledTime = null,
    format,
    hourStep = 1,
    minuteStep = 1,
    needConfirm = false,
    presets = [],
    secondStep = 1,
    showNow = false,
    showScrollbar = false,
    wheelColumns = "time",
    size = "md",
    variant = "outline",
    use12Hours = false,
    width,
    invalid = false,
    placeholder,
    name,
    value,
    defaultValue = "",
    onValueChange,
    className,
    disabled,
    style,
    id,
    onBlur,
    onClick,
    onKeyDown,
    ...buttonProps
  } = props;
  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const panelId = `${buttonId}-panel`;
  const panelLabelId = `${panelId}-label`;
  const rootRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [draftValue, setDraftValue] = useState(defaultValue);
  const currentValue = value ?? innerValue;
  const normalizedWheelColumns = useMemo(
    () => normalizeTimeWheelColumns(wheelColumns),
    [wheelColumns],
  );
  const hasHour = normalizedWheelColumns.includes("hour");
  const panelValue = needConfirm && open ? draftValue : currentValue;
  const panelParts = useMemo(() => getTimeWheelParts(panelValue), [panelValue]);
  const panelPeriod = useMemo(
    () =>
      use12Hours && hasHour ? getTimePickerPeriod(panelParts.hour) : undefined,
    [hasHour, panelParts.hour, use12Hours],
  );
  const closePanel = useCallback(() => setOpen(false), []);
  const { position, updatePosition } = useFloatingPanel({
    open,
    rootRef,
    triggerRef: buttonRef,
    panelRef,
    minWidth: getTimeWheelPanelMinWidth(normalizedWheelColumns.length),
    matchTriggerWidth: true,
    fullWidthBelow: 420,
    fallbackHeight: 250,
    onClose: closePanel,
  });
  const isInvalid =
    invalid ||
    buttonProps["aria-invalid"] === true ||
    buttonProps["aria-invalid"] === "true";
  const timePickerStyle = getTimePickerStyle({ width, style });
  const displayValue = formatTimePickerDisplayValue({
    value: currentValue,
    columns: normalizedWheelColumns,
    format,
    use12Hours,
  });
  const label = displayValue ?? placeholder ?? "选择时间";
  const panelLabel = `${placeholder ?? "选择时间"}面板`;

  const setButtonRef = (node: HTMLButtonElement | null) => {
    buttonRef.current = node;
    assignRef(ref, node);
  };

  useEffect(() => {
    if (!needConfirm) return;

    setDraftValue(currentValue);
  }, [currentValue, needConfirm, open]);

  useEffect(() => {
    if (open) {
      updatePosition();
    }
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    panelRef.current
      ?.querySelectorAll(".willa-time-picker-wheel-option--selected")
      .forEach((element) => {
        element.scrollIntoView({ block: "center" });
      });
  }, [open, panelValue]);

  const commitValue = (nextValue: string, shouldClose: boolean) => {
    if (value === undefined) {
      setInnerValue(nextValue);
    }

    onValueChange?.(nextValue);

    if (shouldClose) {
      setOpen(false);
    }
  };

  const updatePanelValue = (nextValue: string) => {
    if (needConfirm) {
      setDraftValue(nextValue);
      return;
    }

    commitValue(nextValue, false);
  };

  const handleWheelChange = (
    column: TimePickerWheelColumn,
    nextValue: number,
  ) => {
    const parts = getTimeWheelParts(panelValue);
    const nextParts = normalizeTimeWheelParts({
      ...parts,
      [column]:
        use12Hours && column === "hour"
          ? convertDisplayHourTo24Hour(nextValue, panelPeriod)
          : nextValue,
    });

    updatePanelValue(formatTimeWheelValue(nextParts, normalizedWheelColumns));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((current) => !current);
    }
  };

  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Escape") return;

    event.stopPropagation();
    if (needConfirm) {
      setDraftValue(currentValue);
    }
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handlePresetClick = (nextValue: string) => {
    if (needConfirm) {
      setDraftValue(nextValue);
      return;
    }

    commitValue(nextValue, true);
  };

  const handleNowClick = () => {
    const nextParts = normalizeTimeWheelParts({
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    });

    commitValue(formatTimeWheelValue(nextParts, normalizedWheelColumns), true);
  };

  const handleClearClick = () => {
    commitValue("", true);
  };

  const handleConfirmClick = () => {
    commitValue(draftValue, true);
  };

  const handleCancelClick = () => {
    setDraftValue(currentValue);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handlePeriodChange = (nextPeriod: "am" | "pm") => {
    if (!use12Hours || !hasHour) return;

    const displayHour = getDisplayHour(panelParts.hour);
    const nextParts = normalizeTimeWheelParts({
      ...panelParts,
      hour: convertDisplayHourTo24Hour(displayHour, nextPeriod),
    });
    const nextValue = formatTimeWheelValue(nextParts, normalizedWheelColumns);

    if (needConfirm) {
      setDraftValue(nextValue);
      return;
    }

    commitValue(nextValue, false);
  };

  const panel = open ? (
    <FloatingPanelPortal open={open}>
      <FloatingPanelShell
        panelRef={panelRef}
        id={panelId}
        className={classNames(
          "willa-time-picker-panel",
          "willa-time-picker-panel--wheel",
        )}
        position={position}
        role="dialog"
        ariaLabelledBy={panelLabelId}
        onKeyDown={handlePanelKeyDown}
      >
        <span id={panelLabelId} className="willa-time-picker-panel-label">
          {panelLabel}
        </span>
        {presets.length > 0 ? (
          <div className="willa-time-picker-presets" aria-label="快捷时间预设">
            {presets.map((preset) => {
              const selected = preset.value === panelValue;

              return (
                <button
                  key={preset.value}
                  className={classNames(
                    "willa-time-picker-preset",
                    selected && "willa-time-picker-preset--selected",
                  )}
                  type="button"
                  onClick={() => handlePresetClick(preset.value)}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        ) : null}
        <div
          className="willa-time-picker-wheel"
          style={{
            gridTemplateColumns: `repeat(${normalizedWheelColumns.length}, minmax(3.75rem, 1fr))`,
          }}
        >
          {normalizedWheelColumns.map((column) => {
            const parts = getTimeWheelParts(panelValue);
            const selectedValue =
              use12Hours && column === "hour"
                ? getDisplayHour(parts.hour)
                : parts[column];

            return (
              <div key={column} className="willa-time-picker-wheel-column">
                <div className="willa-time-picker-wheel-label">
                  {wheelColumnLabels[column]}
                </div>
                <div
                  className={classNames(
                    "willa-time-picker-wheel-options",
                    showScrollbar &&
                      "willa-time-picker-wheel-options--scrollbar",
                  )}
                >
                  {createTimeWheelOptions(column, {
                    hourStep,
                    minuteStep,
                    secondStep,
                    use12Hours,
                    disabledTime,
                    selectedParts: panelParts,
                    period: panelPeriod ?? undefined,
                  }).map((option) => (
                    <button
                      key={option.value}
                      className={classNames(
                        "willa-time-picker-wheel-option",
                        option.disabled &&
                          "willa-time-picker-wheel-option--disabled",
                        option.value === selectedValue &&
                          "willa-time-picker-wheel-option--selected",
                      )}
                      type="button"
                      disabled={option.disabled}
                      onClick={() => handleWheelChange(column, option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {use12Hours && hasHour ? (
          <div className="willa-time-picker-periods" aria-label="上午下午切换">
            <button
              type="button"
              className={classNames(
                "willa-time-picker-period",
                panelPeriod === "am" && "willa-time-picker-period--selected",
              )}
              onClick={() => handlePeriodChange("am")}
            >
              上午
            </button>
            <button
              type="button"
              className={classNames(
                "willa-time-picker-period",
                panelPeriod === "pm" && "willa-time-picker-period--selected",
              )}
              onClick={() => handlePeriodChange("pm")}
            >
              下午
            </button>
          </div>
        ) : null}
        {allowClear || showNow || needConfirm ? (
          <div className="willa-time-picker-footer">
            <div className="willa-time-picker-footer-start">
              {allowClear ? (
                <button
                  type="button"
                  className="willa-time-picker-action"
                  onClick={handleClearClick}
                >
                  <Cross2Icon />
                  清除
                </button>
              ) : null}
              {showNow ? (
                <button
                  type="button"
                  className="willa-time-picker-action"
                  onClick={handleNowClick}
                >
                  <ClockIcon aria-hidden="true" />
                  现在
                </button>
              ) : null}
            </div>
            {needConfirm ? (
              <div className="willa-time-picker-footer-end">
                <button
                  type="button"
                  className="willa-time-picker-action"
                  onClick={handleCancelClick}
                >
                  取消
                </button>
                <button
                  type="button"
                  className="willa-time-picker-action willa-time-picker-action--primary"
                  onClick={handleConfirmClick}
                >
                  <CheckIcon />
                  确定
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </FloatingPanelShell>
    </FloatingPanelPortal>
  ) : null;

  return (
    <span
      ref={rootRef}
      className={classNames(
        "willa-time-picker",
        `willa-time-picker--${size}`,
        `willa-time-picker--${variant}`,
        allowClear && "willa-time-picker--clearable",
        open && "willa-time-picker--open",
        disabled && "willa-time-picker--disabled",
        isInvalid && "willa-time-picker--invalid",
        className,
      )}
      style={timePickerStyle}
      aria-disabled={disabled || undefined}
    >
      {name ? (
        <input
          type="hidden"
          name={name}
          value={currentValue}
          disabled={disabled}
        />
      ) : null}
      <button
        {...buttonProps}
        ref={setButtonRef}
        id={buttonId}
        type="button"
        className="willa-time-picker-control"
        disabled={disabled}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-haspopup="dialog"
        aria-invalid={isInvalid || buttonProps["aria-invalid"]}
        onBlur={onBlur}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            setOpen((current) => !current);
          }
        }}
        onKeyDown={handleKeyDown}
      >
        <span
          className={classNames(
            "willa-time-picker-value",
            !displayValue && "willa-time-picker-value--placeholder",
          )}
        >
          {label}
        </span>
        {allowClear && currentValue ? null : (
          <ClockIcon className="willa-time-picker-icon" aria-hidden="true" />
        )}
      </button>
      {allowClear && currentValue ? (
        <button
          type="button"
          className="willa-time-picker-clear"
          aria-label="清除时间"
          onClick={(event) => {
            event.stopPropagation();
            handleClearClick();
          }}
        >
          <Cross2Icon aria-hidden="true" />
        </button>
      ) : null}
      {panel}
    </span>
  );
}

TimePicker.displayName = "TimePicker";

const wheelColumnLabels: Record<TimePickerWheelColumn, string> = {
  hour: "时",
  minute: "分",
  second: "秒",
};

const getTimePickerStyle = (options: {
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { width, style } = options;
  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
  } as CSSProperties;
};

const formatTimePickerDisplayValue = (options: {
  value: string;
  columns: Array<TimePickerWheelColumn>;
  format?: string;
  use12Hours?: boolean;
}) => {
  const { value, columns, format, use12Hours = false } = options;

  if (!value) return undefined;

  const parts = getTimeWheelParts(value);

  if (format) {
    return formatTimeByPattern(parts, format);
  }

  if (use12Hours && columns.includes("hour")) {
    return formatTimeByPattern(parts, buildDefault12HourFormat(columns));
  }

  return formatTimeWheelDisplayValue(value, columns);
};

const buildDefault12HourFormat = (columns: Array<TimePickerWheelColumn>) => {
  const parts = [
    columns.includes("hour") ? "hh" : null,
    columns.includes("minute") ? "mm" : null,
    columns.includes("second") ? "ss" : null,
  ].filter((part): part is string => part !== null);

  return `${parts.join(":")} A`;
};

const formatTimeByPattern = (
  parts: ReturnType<typeof getTimeWheelParts>,
  pattern: string,
) => {
  const hour12 = getDisplayHour(parts.hour);
  const replacements: Record<string, string> = {
    HH: padNumber(parts.hour),
    H: String(parts.hour),
    hh: padNumber(hour12),
    h: String(hour12),
    mm: padNumber(parts.minute),
    m: String(parts.minute),
    ss: padNumber(parts.second),
    s: String(parts.second),
    A: getTimePickerPeriod(parts.hour) === "pm" ? "PM" : "AM",
    a: getTimePickerPeriod(parts.hour) === "pm" ? "pm" : "am",
  };

  return pattern.replace(/HH|hh|mm|ss|H|h|m|s|A|a/g, (token) => {
    return replacements[token] ?? token;
  });
};

const getDisplayHour = (hour: number) => {
  const normalizedHour = Math.trunc(hour) % 24;
  return normalizedHour % 12 === 0 ? 12 : normalizedHour % 12;
};

const getTimePickerPeriod = (hour: number) => {
  return Math.trunc(hour) >= 12 ? "pm" : "am";
};

const convertDisplayHourTo24Hour = (
  displayHour: number,
  period?: "am" | "pm",
) => {
  const normalizedDisplayHour = Math.trunc(displayHour);

  if (period === "pm") {
    return normalizedDisplayHour === 12 ? 12 : normalizedDisplayHour + 12;
  }

  if (period === "am") {
    return normalizedDisplayHour === 12 ? 0 : normalizedDisplayHour;
  }

  return normalizedDisplayHour;
};

const padNumber = (value: number) => {
  return String(value).padStart(2, "0");
};
