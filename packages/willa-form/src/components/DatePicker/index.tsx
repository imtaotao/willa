import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ForwardedRef,
  type KeyboardEvent,
} from "react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { createPortal } from "react-dom";
import classNames from "classnames";

export type DatePickerSize = "sm" | "md" | "lg";
export type DatePickerVariant = "outline" | "soft";
export type DatePickerMode = "year" | "month" | "week" | "day";
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

export type DatePickerRangeValue = {
  start: string;
  end?: string;
};

export type DatePickerValue = string | DatePickerRangeValue;

type DatePickerPanelPosition = {
  left: number;
  top: number;
  width: number;
};

type CalendarDay = {
  date: Date;
  value: string;
  currentMonth: boolean;
  weekend: boolean;
  today: boolean;
};

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
    const [visibleMonth, setVisibleMonth] = useState(() =>
      getMonthStart(getInitialDate(currentValue, mode)),
    );
    const [panelPosition, setPanelPosition] =
      useState<DatePickerPanelPosition | null>(null);
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";
    const datePickerStyle = getDatePickerStyle({ width, style });
    const calendarDays = useMemo(
      () => createCalendarDays(visibleMonth),
      [visibleMonth],
    );
    const optionGrid = useMemo(
      () => createOptionGrid(mode, visibleMonth, calendarDays),
      [calendarDays, mode, visibleMonth],
    );
    const label =
      formatDisplayValue(currentValue, {
        mode,
        picker,
        range,
        wheelColumns: normalizedWheelColumns,
      }) ??
      placeholder ??
      getDefaultPlaceholder({ mode, picker, range, wheelColumns });

    const setButtonRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      assignForwardedRef(ref, node);
    };

    const updatePanelPosition = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const viewportPadding = 8;
      const gap = 6;
      const panelHeight = panelRef.current?.offsetHeight ?? 290;
      const viewportWidth = window.innerWidth;
      const maxWidth = viewportWidth - viewportPadding * 2;
      const minPanelWidth =
        picker === "wheel"
          ? getWheelPanelMinWidth(normalizedWheelColumns.length)
          : mode === "day"
            ? 264
            : 244;
      const nextWidth =
        viewportWidth <= 520
          ? maxWidth
          : Math.min(Math.max(rect.width, minPanelWidth), maxWidth);
      const left = clamp(
        rect.left,
        viewportPadding,
        window.innerWidth - viewportPadding - nextWidth,
      );
      const belowTop = rect.bottom + gap;
      const aboveTop = rect.top - gap - panelHeight;
      const hasBottomSpace =
        window.innerHeight - rect.bottom - viewportPadding >= panelHeight;
      const top = hasBottomSpace
        ? belowTop
        : Math.max(viewportPadding, aboveTop);

      setPanelPosition({ left, top, width: nextWidth });
    };

    useEffect(() => {
      setVisibleMonth(getMonthStart(getInitialDate(currentValue, mode)));
    }, [currentValue, mode]);

    useEffect(() => {
      if (!open) return;

      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node;

        if (
          !rootRef.current?.contains(target) &&
          !panelRef.current?.contains(target)
        ) {
          setOpen(false);
        }
      };
      const handleViewportChange = () => {
        updatePanelPosition();
      };

      updatePanelPosition();
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("resize", handleViewportChange);
      window.addEventListener("scroll", handleViewportChange, true);

      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("resize", handleViewportChange);
        window.removeEventListener("scroll", handleViewportChange, true);
      };
    }, [open]);

    useEffect(() => {
      if (open) {
        updatePanelPosition();
      } else {
        setPanelPosition(null);
      }
    }, [open, mode, picker, normalizedWheelColumns.length, visibleMonth]);

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

    const handleSelect = (nextValue: string) => {
      if (!range) {
        commitValue(nextValue, true);
        return;
      }

      const currentRange = getRangeValue(currentValue);

      if (!currentRange?.start || currentRange.end) {
        commitValue({ start: nextValue }, false);
        return;
      }

      commitValue(sortRange(currentRange.start, nextValue), true);
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

    const panel =
      open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              id={panelId}
              className={classNames(
                "willa-date-picker-panel",
                `willa-date-picker-panel--${mode}`,
                picker === "wheel" && "willa-date-picker-panel--wheel",
              )}
              style={
                panelPosition
                  ? {
                      left: panelPosition.left,
                      top: panelPosition.top,
                      width: panelPosition.width,
                    }
                  : { left: 0, top: 0, visibility: "hidden" }
              }
            >
              {picker === "wheel" ? (
                <div
                  className="willa-date-picker-wheel"
                  style={{
                    gridTemplateColumns: `repeat(${normalizedWheelColumns.length}, minmax(0, 1fr))`,
                  }}
                >
                  {normalizedWheelColumns.map((column) => {
                    const parts = getWheelParts(currentValue);

                    return (
                      <div
                        key={column}
                        className="willa-date-picker-wheel-column"
                      >
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
                <>
                  <div className="willa-date-picker-header">
                    <button
                      className="willa-date-picker-nav"
                      type="button"
                      aria-label="上一页"
                      onClick={() =>
                        setVisibleMonth((current) =>
                          moveVisibleMonth(current, mode, -1),
                        )
                      }
                    >
                      <ChevronLeftIcon />
                    </button>
                    <div className="willa-date-picker-title">
                      {formatPanelTitle(visibleMonth, mode)}
                    </div>
                    <button
                      className="willa-date-picker-nav"
                      type="button"
                      aria-label="下一页"
                      onClick={() =>
                        setVisibleMonth((current) =>
                          moveVisibleMonth(current, mode, 1),
                        )
                      }
                    >
                      <ChevronRightIcon />
                    </button>
                  </div>
                  {mode === "day" ? (
                    <div
                      className="willa-date-picker-weekdays"
                      aria-hidden="true"
                    >
                      {weekdayLabels.map((weekday, index) => (
                        <span
                          key={weekday}
                          className={classNames(
                            isWeekendIndex(index) &&
                              "willa-date-picker-weekday--weekend",
                          )}
                        >
                          {weekday}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      "willa-date-picker-grid",
                      `willa-date-picker-grid--${mode}`,
                    )}
                    role="grid"
                  >
                    {optionGrid.map((option) => {
                      const selectedState = getSelectedState({
                        mode,
                        range,
                        optionValue: option.value,
                        value: currentValue,
                      });
                      const unavailable = isValueUnavailable(option.value, {
                        min,
                        max,
                        disabledDate,
                      });

                      return (
                        <button
                          key={option.value}
                          className={classNames(
                            "willa-date-picker-day",
                            `willa-date-picker-day--${mode}`,
                            option.muted && "willa-date-picker-day--muted",
                            option.today && "willa-date-picker-day--today",
                            selectedState.inRange &&
                              "willa-date-picker-day--in-range",
                            selectedState.edge &&
                              "willa-date-picker-day--range-edge",
                            selectedState.selected &&
                              "willa-date-picker-day--selected",
                          )}
                          type="button"
                          role="gridcell"
                          aria-selected={selectedState.selected}
                          disabled={unavailable}
                          onClick={() => handleSelect(option.value)}
                        >
                          {mode === "week" ? (
                            <span className="willa-date-picker-week-range">
                              <span>{option.startLabel}</span>
                              <span
                                className="willa-date-picker-week-line"
                                aria-hidden="true"
                              />
                              <span>{option.endLabel}</span>
                            </span>
                          ) : (
                            option.label
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>,
            document.body,
          )
        : null;

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

const weekdayLabels = ["日", "一", "二", "三", "四", "五", "六"];

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

const getInitialDate = (value: DatePickerValue, mode: DatePickerMode) => {
  const rawValue = typeof value === "string" ? value : value.start || value.end;
  const date = rawValue ? parseValue(rawValue, mode) : null;

  return date ?? new Date();
};

const parseValue = (value: string, mode: DatePickerMode) => {
  if (mode === "year" && /^\d{4}$/.test(value)) {
    return new Date(Number(value), 0, 1);
  }

  if (mode === "month" && /^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-").map(Number);
    const date = new Date(year, month - 1, 1);

    return date.getFullYear() === year && date.getMonth() === month - 1
      ? date
      : null;
  }

  return parseDateValue(value);
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

const formatMonthValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}`;
};

const formatValue = (date: Date, mode: DatePickerMode) => {
  if (mode === "year") return String(date.getFullYear());
  if (mode === "month") return formatMonthValue(date);

  return formatDateValue(mode === "week" ? getWeekStart(date) : date);
};

const getMonthStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const addMonths = (date: Date, offset: number) =>
  new Date(date.getFullYear(), date.getMonth() + offset, 1);

const addYears = (date: Date, offset: number) =>
  new Date(date.getFullYear() + offset, date.getMonth(), 1);

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

const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

const isWeekendIndex = (index: number) => index === 0 || index === 6;

const createCalendarDays = (month: Date) => {
  const start = getMonthStart(month);
  const firstDay = start.getDay();
  const cursor = new Date(start);
  const days: Array<CalendarDay> = [];
  const todayValue = formatDateValue(new Date());

  cursor.setDate(start.getDate() - firstDay);

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(cursor);

    days.push({
      date,
      value: formatDateValue(date),
      currentMonth: date.getMonth() === month.getMonth(),
      weekend: isWeekend(date),
      today: formatDateValue(date) === todayValue,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
};

const createOptionGrid = (
  mode: DatePickerMode,
  visibleMonth: Date,
  calendarDays: Array<CalendarDay>,
) => {
  if (mode === "year") {
    const startYear = getYearPageStart(visibleMonth.getFullYear());

    return Array.from({ length: 12 }, (_, index) => {
      const year = startYear + index;

      return {
        value: String(year),
        label: String(year),
        startLabel: "",
        endLabel: "",
        weekend: false,
        muted: false,
        today: year === new Date().getFullYear(),
      };
    });
  }

  if (mode === "month") {
    return Array.from({ length: 12 }, (_, index) => {
      const date = new Date(visibleMonth.getFullYear(), index, 1);

      return {
        value: formatMonthValue(date),
        label: `${index + 1} 月`,
        startLabel: "",
        endLabel: "",
        weekend: false,
        muted: false,
        today: formatMonthValue(date) === formatMonthValue(new Date()),
      };
    });
  }

  if (mode === "week") {
    return Array.from({ length: 6 }, (_, index) => {
      const start = calendarDays[index * 7].date;
      const end = getWeekEnd(start);
      const today = getDateOnly(new Date());

      return {
        value: formatDateValue(getWeekStart(start)),
        label: `${formatDateValue(start)} - ${formatDateValue(end)}`,
        startLabel: formatDateValue(start),
        endLabel: formatDateValue(end),
        weekend: isWeekend(start) || isWeekend(end),
        muted: start.getMonth() !== visibleMonth.getMonth(),
        today: today >= getWeekStart(start) && today <= end,
      };
    });
  }

  return calendarDays.map((day) => ({
    value: formatValue(day.date, mode),
    label: String(day.date.getDate()),
    startLabel: "",
    endLabel: "",
    weekend: day.weekend,
    muted: !day.currentMonth,
    today: day.today,
  }));
};

const getYearPageStart = (year: number) => Math.floor(year / 12) * 12;

const formatPanelTitle = (date: Date, mode: DatePickerMode) => {
  if (mode === "year") {
    const startYear = getYearPageStart(date.getFullYear());

    return `${startYear} - ${startYear + 11}`;
  }

  if (mode === "month") return `${date.getFullYear()} 年`;

  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;
};

const moveVisibleMonth = (
  date: Date,
  mode: DatePickerMode,
  direction: number,
) => {
  if (mode === "year") return addYears(date, direction * 12);
  if (mode === "month") return addYears(date, direction);

  return addMonths(date, direction);
};

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
  const year = clamp(Math.trunc(parts.year), 1900, 2100);
  const month = clamp(Math.trunc(parts.month), 1, 12);
  const maxDay = getDaysInMonth(year, month);

  return {
    year,
    month,
    day: clamp(Math.trunc(parts.day), 1, maxDay),
    hour: clamp(Math.trunc(parts.hour), 0, 23),
    minute: clamp(Math.trunc(parts.minute), 0, 59),
    second: clamp(Math.trunc(parts.second), 0, 59),
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

const sortRange = (start: string, end: string) =>
  start <= end ? { start, end } : { start: end, end: start };

const getSelectedState = (options: {
  mode: DatePickerMode;
  range: boolean;
  optionValue: string;
  value: DatePickerValue;
}) => {
  const { range, optionValue, value } = options;

  if (!range) {
    return {
      selected: typeof value === "string" && value === optionValue,
      inRange: false,
      edge: false,
    };
  }

  const rangeValue = getRangeValue(value);
  const start = rangeValue?.start;
  const end = rangeValue?.end;
  const selected = optionValue === start || optionValue === end;
  const inRange = Boolean(
    start && end && optionValue > start && optionValue < end,
  );

  return {
    selected,
    inRange,
    edge: selected && Boolean(start && end),
  };
};

const isValueUnavailable = (
  value: string,
  options: {
    min?: string;
    max?: string;
    disabledDate?: (value: string) => boolean;
  },
) => {
  const { min, max, disabledDate } = options;

  if (min && value < min) return true;
  if (max && value > max) return true;

  return disabledDate?.(value) ?? false;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const assignForwardedRef = (
  ref: ForwardedRef<HTMLButtonElement>,
  node: HTMLButtonElement | null,
) => {
  if (typeof ref === "function") {
    ref(node);
    return;
  }

  if (ref) {
    ref.current = node;
  }
};
