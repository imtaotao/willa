import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { assignRef, clampNumber } from "@willa-ui/shared";
import classNames from "classnames";

import {
  Calendar,
  type CalendarMarker,
  type CalendarMarkerContext,
  type CalendarMarkerTone,
  type CalendarMode,
  type CalendarRangeValue,
  type CalendarValue,
} from "#form/components/Calendar";
import {
  FloatingPanelPortal,
  FloatingPanelShell,
} from "#form/internal/floatingPanelParts";
import { useFloatingPanel } from "#form/internal/useFloatingPanel";

export type DatePickerSize = "sm" | "md" | "lg";
export type DatePickerVariant = "outline" | "soft";
export type DatePickerMode = CalendarMode;
export type DatePickerPicker = "calendar" | "wheel";
export type DatePickerWheelColumn =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "minute"
  | "second";
export type DatePickerWheelColumns =
  | "date"
  | "time"
  | "datetime"
  | Array<DatePickerWheelColumn>;

export type DatePickerRangeValue = CalendarRangeValue;
export type DatePickerValue = CalendarValue;
export type DatePickerMarkerTone = CalendarMarkerTone;
export type DatePickerMarker = CalendarMarker;
export type DatePickerMarkerContext = CalendarMarkerContext;

export type DatePickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  picker?: DatePickerPicker;
  mode?: DatePickerMode;
  wheelColumns?: DatePickerWheelColumns;
  range?: boolean;
  size?: DatePickerSize;
  variant?: DatePickerVariant;
  width?: CSSProperties["width"];
  invalid?: boolean;
  placeholder?: string;
  name?: string;
  value?: DatePickerValue;
  defaultValue?: DatePickerValue;
  min?: string;
  max?: string;
  markers?: Array<DatePickerMarker>;
  getMarker?: (
    value: string,
    context: DatePickerMarkerContext,
  ) => DatePickerMarker | null | undefined;
  disabledDate?: (value: string) => boolean;
  onValueChange?: (value: DatePickerValue) => void;
};

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props, ref) => {
    const {
      picker = "calendar",
      mode = "month",
      wheelColumns = "date",
      range = false,
      size = "md",
      variant = "outline",
      width,
      invalid = false,
      placeholder,
      name,
      value,
      defaultValue = "",
      min,
      max,
      markers = [],
      getMarker,
      disabledDate,
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
    const [innerValue, setInnerValue] = useState<DatePickerValue>(defaultValue);
    const currentValue = value ?? innerValue;
    const normalizedWheelColumns = useMemo(
      () => normalizeWheelColumns(wheelColumns),
      [wheelColumns],
    );
    const closePanel = useCallback(() => setOpen(false), []);
    const { position, updatePosition } = useFloatingPanel({
      open,
      rootRef,
      triggerRef: buttonRef,
      panelRef,
      minWidth:
        picker === "wheel"
          ? getWheelPanelMinWidth(normalizedWheelColumns.length)
          : undefined,
      matchTriggerWidth: picker === "wheel",
      fullWidthBelow: 520,
      fallbackHeight: 290,
      onClose: closePanel,
    });
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";
    const datePickerStyle = getDatePickerStyle({ width, style });
    const label =
      formatDisplayValue(currentValue, {
        mode,
        picker,
        range,
        wheelColumns: normalizedWheelColumns,
      }) ??
      placeholder ??
      getDefaultPlaceholder({ mode, picker, range, wheelColumns });
    const panelLabel = `${getDefaultPlaceholder({
      mode,
      picker,
      range,
      wheelColumns: normalizedWheelColumns,
    })}面板`;

    const setButtonRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      assignRef(ref, node);
    };

    useEffect(() => {
      if (open) {
        updatePosition();
      }
    }, [open, mode, picker, normalizedWheelColumns.length, updatePosition]);

    useEffect(() => {
      if (!open || picker !== "wheel") return;

      panelRef.current
        ?.querySelectorAll(".willa-date-picker-wheel-option--selected")
        .forEach((element) => {
          element.scrollIntoView({ block: "center" });
        });
    }, [currentValue, open, picker]);

    const commitValue = (nextValue: DatePickerValue, shouldClose: boolean) => {
      if (value === undefined) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue);

      if (shouldClose) {
        setOpen(false);
      }
    };

    const handleCalendarValueChange = (nextValue: CalendarValue) => {
      const shouldClose = !range || Boolean(getRangeValue(nextValue)?.end);

      commitValue(nextValue, shouldClose);
    };

    const handleWheelChange = (
      column: DatePickerWheelColumn,
      nextValue: number,
    ) => {
      const parts = getWheelParts(currentValue);
      const nextParts = normalizeWheelParts({
        ...parts,
        [column]: nextValue,
      });

      commitValue(formatWheelValue(nextParts, normalizedWheelColumns), false);
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
      setOpen(false);
      buttonRef.current?.focus();
    };

    const panel = open ? (
      <FloatingPanelPortal open={open}>
        <FloatingPanelShell
          panelRef={panelRef}
          id={panelId}
          className={classNames(
            "willa-date-picker-panel",
            `willa-date-picker-panel--${mode}`,
            picker === "wheel" && "willa-date-picker-panel--wheel",
          )}
          position={position}
          role="dialog"
          ariaLabelledBy={panelLabelId}
          onKeyDown={handlePanelKeyDown}
        >
          <span id={panelLabelId} className="willa-date-picker-panel-label">
            {panelLabel}
          </span>
          {picker === "wheel" ? (
            <div
              className="willa-date-picker-wheel"
              style={{
                gridTemplateColumns: `repeat(${normalizedWheelColumns.length}, minmax(3.75rem, 1fr))`,
              }}
            >
              {normalizedWheelColumns.map((column) => {
                const parts = getWheelParts(currentValue);

                return (
                  <div key={column} className="willa-date-picker-wheel-column">
                    <div className="willa-date-picker-wheel-label">
                      {wheelColumnLabels[column]}
                    </div>
                    <div className="willa-date-picker-wheel-options">
                      {createWheelOptions(column, parts).map((option) => (
                        <button
                          key={option.value}
                          className={classNames(
                            "willa-date-picker-wheel-option",
                            option.value === parts[column] &&
                              "willa-date-picker-wheel-option--selected",
                          )}
                          type="button"
                          onClick={() =>
                            handleWheelChange(column, option.value)
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Calendar
              className="willa-date-picker-calendar"
              mode={mode}
              range={range}
              value={currentValue}
              min={min}
              max={max}
              markers={markers}
              getMarker={getMarker}
              disabledDate={disabledDate}
              onValueChange={handleCalendarValueChange}
            />
          )}
        </FloatingPanelShell>
      </FloatingPanelPortal>
    ) : null;

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-date-picker",
          `willa-date-picker--${size}`,
          `willa-date-picker--${variant}`,
          open && "willa-date-picker--open",
          disabled && "willa-date-picker--disabled",
          isInvalid && "willa-date-picker--invalid",
          className,
        )}
        style={datePickerStyle}
        aria-disabled={disabled || undefined}
      >
        {name ? (
          <input
            type="hidden"
            name={name}
            value={serializeValue(currentValue)}
            disabled={disabled}
          />
        ) : null}
        <button
          {...buttonProps}
          ref={setButtonRef}
          id={buttonId}
          type="button"
          className="willa-date-picker-control"
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
              "willa-date-picker-value",
              !formatDisplayValue(currentValue, {
                mode,
                picker,
                range,
                wheelColumns: normalizedWheelColumns,
              }) && "willa-date-picker-value--placeholder",
            )}
          >
            {label}
          </span>
          <CalendarIcon className="willa-date-picker-icon" aria-hidden="true" />
        </button>
        {panel}
      </span>
    );
  },
);

DatePicker.displayName = "DatePicker";

const wheelColumnLabels: Record<DatePickerWheelColumn, string> = {
  year: "年",
  month: "月",
  day: "日",
  hour: "时",
  minute: "分",
  second: "秒",
};

const getDatePickerStyle = (options: {
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
  } as CSSProperties;
};

const getDefaultPlaceholder = (options: {
  mode: DatePickerMode;
  picker: DatePickerPicker;
  range: boolean;
  wheelColumns: DatePickerWheelColumns;
}) => {
  const { mode, picker, range, wheelColumns } = options;

  if (picker === "wheel") {
    const columns = normalizeWheelColumns(wheelColumns);
    const hasDate = columns.some((column) =>
      ["year", "month", "day"].includes(column),
    );
    const hasTime = columns.some((column) =>
      ["hour", "minute", "second"].includes(column),
    );

    if (hasDate && hasTime) return "选择日期时间";
    if (hasTime) return "选择时间";

    return "选择日期";
  }

  const unitMap: Record<DatePickerMode, string> = {
    year: "年份",
    month: "月份",
    week: "周",
    day: "日期",
  };

  return range ? `选择${unitMap[mode]}范围` : `选择${unitMap[mode]}`;
};

const parseDateValue = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};

const formatDateValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getWeekStart = (date: Date) => {
  const nextDate = new Date(date);

  nextDate.setDate(date.getDate() - date.getDay());

  return getDateOnly(nextDate);
};

const getWeekEnd = (date: Date) => {
  const nextDate = getWeekStart(date);

  nextDate.setDate(nextDate.getDate() + 6);

  return nextDate;
};

const getDateOnly = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const formatDisplayValue = (
  value: DatePickerValue,
  options: {
    mode: DatePickerMode;
    picker: DatePickerPicker;
    range: boolean;
    wheelColumns: Array<DatePickerWheelColumn>;
  },
) => {
  const { mode, picker, range, wheelColumns } = options;

  if (picker === "wheel") {
    return typeof value === "string" && value
      ? formatWheelDisplayValue(value, wheelColumns)
      : undefined;
  }

  if (range) {
    const rangeValue = getRangeValue(value);

    if (!rangeValue?.start) return "";

    return formatRangeLabel(rangeValue, mode);
  }

  return typeof value === "string" && value
    ? formatLabel(value, mode)
    : undefined;
};

const formatRangeLabel = (
  value: DatePickerRangeValue,
  mode: DatePickerMode,
) => {
  const start = formatRangeStartLabel(value.start, mode);
  const end = value.end ? formatRangeEndLabel(value.end, mode) : "";

  return end ? `${start} - ${end}` : `${start} -`;
};

const formatRangeStartLabel = (value: string, mode: DatePickerMode) => {
  if (mode !== "week") return formatLabel(value, mode);

  return value;
};

const formatRangeEndLabel = (value: string, mode: DatePickerMode) => {
  if (mode !== "week") return formatLabel(value, mode);

  const start = parseDateValue(value);

  return start ? formatDateValue(getWeekEnd(start)) : value;
};

const formatLabel = (value: string, mode: DatePickerMode) => {
  if (mode === "week") {
    const start = parseDateValue(value);

    if (!start) return value;

    return `${formatDateValue(start)} - ${formatDateValue(getWeekEnd(start))}`;
  }

  return value;
};

const normalizeWheelColumns = (columns: DatePickerWheelColumns) => {
  if (Array.isArray(columns)) return columns;
  if (columns === "time") {
    return ["hour", "minute", "second"] satisfies Array<DatePickerWheelColumn>;
  }

  if (columns === "datetime") {
    return [
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
    ] satisfies Array<DatePickerWheelColumn>;
  }

  return ["year", "month", "day"] satisfies Array<DatePickerWheelColumn>;
};

const getWheelPanelMinWidth = (columnCount: number) =>
  Math.max(244, columnCount * 4.25 * 16);

const getWheelParts = (value: DatePickerValue) => {
  const now = new Date();
  const fallback = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: 0,
    minute: 0,
    second: 0,
  };

  if (typeof value !== "string" || !value) {
    return normalizeWheelParts(fallback);
  }

  const dateTimeMatch = value.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/,
  );

  if (dateTimeMatch) {
    return normalizeWheelParts({
      year: Number(dateTimeMatch[1]),
      month: Number(dateTimeMatch[2]),
      day: Number(dateTimeMatch[3]),
      hour: Number(dateTimeMatch[4] ?? fallback.hour),
      minute: Number(dateTimeMatch[5] ?? fallback.minute),
      second: Number(dateTimeMatch[6] ?? fallback.second),
    });
  }

  const timeMatch = value.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);

  if (timeMatch) {
    return normalizeWheelParts({
      ...fallback,
      hour: Number(timeMatch[1]),
      minute: Number(timeMatch[2]),
      second: Number(timeMatch[3] ?? fallback.second),
    });
  }

  const monthMatch = value.match(/^(\d{4})-(\d{2})$/);

  if (monthMatch) {
    return normalizeWheelParts({
      ...fallback,
      year: Number(monthMatch[1]),
      month: Number(monthMatch[2]),
      day: 1,
    });
  }

  return normalizeWheelParts(fallback);
};

const normalizeWheelParts = (parts: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}) => {
  const year = clampNumber(Math.trunc(parts.year), 1900, 2100);
  const month = clampNumber(Math.trunc(parts.month), 1, 12);
  const maxDay = getDaysInMonth(year, month);

  return {
    year,
    month,
    day: clampNumber(Math.trunc(parts.day), 1, maxDay),
    hour: clampNumber(Math.trunc(parts.hour), 0, 23),
    minute: clampNumber(Math.trunc(parts.minute), 0, 59),
    second: clampNumber(Math.trunc(parts.second), 0, 59),
  };
};

const formatWheelValue = (
  parts: ReturnType<typeof normalizeWheelParts>,
  columns: Array<DatePickerWheelColumn>,
) => {
  const hasDate = columns.some((column) =>
    ["year", "month", "day"].includes(column),
  );
  const hasTime = columns.some((column) =>
    ["hour", "minute", "second"].includes(column),
  );
  const date = `${parts.year}-${padNumber(parts.month)}-${padNumber(parts.day)}`;
  const time = `${padNumber(parts.hour)}:${padNumber(parts.minute)}:${padNumber(
    parts.second,
  )}`;

  if (hasDate && hasTime) return `${date} ${time}`;
  if (hasTime) return time;

  return date;
};

const formatWheelDisplayValue = (
  value: string,
  columns: Array<DatePickerWheelColumn>,
) => {
  const parts = getWheelParts(value);

  return formatWheelValue(parts, columns);
};

const createWheelOptions = (
  column: DatePickerWheelColumn,
  parts: ReturnType<typeof normalizeWheelParts>,
) => {
  if (column === "year") {
    return createNumberOptions(1900, 2100, "");
  }

  if (column === "month") return createNumberOptions(1, 12, "月");
  if (column === "day") {
    return createNumberOptions(
      1,
      getDaysInMonth(parts.year, parts.month),
      "日",
    );
  }

  return createNumberOptions(0, 59, "", true).filter((option) =>
    column === "hour" ? option.value <= 23 : true,
  );
};

const createNumberOptions = (
  start: number,
  end: number,
  suffix: string,
  padded = false,
) =>
  Array.from({ length: end - start + 1 }, (_, index) => {
    const value = start + index;
    const label = padded ? padNumber(value) : String(value);

    return {
      value,
      label: `${label}${suffix}`,
    };
  });

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

const padNumber = (value: number) => String(value).padStart(2, "0");

const serializeValue = (value: DatePickerValue) => {
  if (typeof value === "string") return value;

  return value.end ? `${value.start},${value.end}` : value.start;
};

const getRangeValue = (value: DatePickerValue) =>
  typeof value === "string" ? null : value;
