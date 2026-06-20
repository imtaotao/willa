import {
  forwardRef,
  useRef,
  useMemo,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Tooltip } from "@willa-ui/content/components/Tooltip";
import { assignRef } from "@willa-ui/shared";
import classNames from "classnames";
import {
  formatDateValue,
  formatShortDateValue,
  getCalendarStyle,
  getDateOnly,
  getWeekEnd,
  getWeekStart,
  isWeekend,
  parseDateValue,
} from "#form/components/Calendar/utils";

export type CalendarMode = "year" | "month" | "week" | "day";
export type CalendarRangeValue = {
  start: string;
  end?: string;
};
export type CalendarValue = string | CalendarRangeValue;
export type CalendarMarkerTone =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger";
export type CalendarMarker = {
  value: string;
  endValue?: string;
  label: ReactNode;
  tone?: CalendarMarkerTone;
};
export type CalendarMarkerContext = {
  mode: CalendarMode;
  value: string;
  date?: Date;
  weekend?: boolean;
  currentMonth?: boolean;
};
export type CalendarCellContext = CalendarMarkerContext & {
  label: string;
  startLabel: string;
  endLabel: string;
  markers?: Array<CalendarMarker>;
  selected: boolean;
  inRange: boolean;
  rangeEdge: boolean;
  muted: boolean;
  today: boolean;
  unavailable: boolean;
};
export type CalendarHeaderRenderContext = {
  mode: CalendarMode;
  visibleDate: Date;
  title: string;
  previous: () => void;
  next: () => void;
};
export type CalendarSelectContext = {
  mode: CalendarMode;
  value: string;
  date?: Date;
  source: CalendarMode;
};

type CalendarDay = {
  date: Date;
  value: string;
  currentMonth: boolean;
  weekend: boolean;
  today: boolean;
};

type CalendarOption = {
  value: string;
  label: string;
  startLabel: string;
  endLabel: string;
  date?: Date;
  weekend: boolean;
  currentMonth?: boolean;
  muted: boolean;
  today: boolean;
  weekNumber?: number;
};

type CalendarMarkerSegment = {
  marker: CalendarMarker;
  position: "single" | "start" | "middle" | "end";
};

export type CalendarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "defaultValue" | "onChange" | "onSelect" | "value"
> & {
  mode?: CalendarMode;
  range?: boolean;
  showWeekNumber?: boolean;
  firstDayOfWeek?: 0 | 1;
  width?: CSSProperties["width"];
  value?: CalendarValue;
  defaultValue?: CalendarValue;
  visibleDate?: Date;
  defaultVisibleDate?: Date;
  min?: string;
  max?: string;
  markers?: Array<CalendarMarker>;
  getMarker?: (
    value: string,
    context: CalendarMarkerContext,
  ) => CalendarMarker | null | undefined;
  renderCell?: (context: CalendarCellContext) => ReactNode;
  headerRender?: (context: CalendarHeaderRenderContext) => ReactNode;
  disabledDate?: (value: string) => boolean;
  onValueChange?: (value: CalendarValue) => void;
  onVisibleDateChange?: (date: Date) => void;
  onSelect?: (value: string, context: CalendarSelectContext) => void;
};

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      mode = "day",
      range = false,
      showWeekNumber = false,
      firstDayOfWeek = 0,
      width,
      value,
      defaultValue = "",
      visibleDate,
      defaultVisibleDate,
      min,
      max,
      markers = [],
      getMarker,
      renderCell,
      headerRender,
      disabledDate,
      onValueChange,
      onVisibleDateChange,
      onSelect,
      className,
      style,
      ...rootProps
    } = props;
    const rootRef = useRef<HTMLDivElement | null>(null);
    const [innerValue, setInnerValue] = useState<CalendarValue>(defaultValue);
    const currentValue = value ?? innerValue;
    const [innerVisibleDate, setInnerVisibleDate] = useState(() =>
      getMonthStart(defaultVisibleDate ?? getInitialDate(currentValue, mode)),
    );
    const currentVisibleDate = visibleDate ?? innerVisibleDate;
    const calendarDays = useMemo(
      () => createCalendarDays(currentVisibleDate, firstDayOfWeek),
      [currentVisibleDate, firstDayOfWeek],
    );
    const optionGrid = useMemo(
      () =>
        createOptionGrid(mode, currentVisibleDate, calendarDays, {
          firstDayOfWeek,
          showWeekNumber,
        }),
      [calendarDays, firstDayOfWeek, mode, currentVisibleDate, showWeekNumber],
    );
    const calendarStyle = getCalendarStyle({ width, style });
    const panelTitle = formatPanelTitle(currentVisibleDate, mode);
    const selectableOptions = useMemo(
      () => optionGrid.filter((option) => option.weekNumber === undefined),
      [optionGrid],
    );

    const setRootRef = (node: HTMLDivElement | null) => {
      rootRef.current = node;
      assignRef(ref, node);
    };

    const setVisibleDate = (nextDate: Date) => {
      if (visibleDate === undefined) {
        setInnerVisibleDate(nextDate);
      }

      onVisibleDateChange?.(nextDate);
    };

    const commitValue = (nextValue: CalendarValue) => {
      if (value === undefined) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue);
    };

    const handleSelect = (option: CalendarOption) => {
      const nextValue = option.value;

      onSelect?.(nextValue, {
        mode,
        value: nextValue,
        date: option.date,
        source: mode,
      });

      if (!range) {
        commitValue(nextValue);
        return;
      }

      const currentRange = getRangeValue(currentValue);

      if (!currentRange?.start || currentRange.end) {
        commitValue({ start: nextValue });
        return;
      }

      commitValue(sortRange(currentRange.start, nextValue));
    };

    const focusOption = (targetIndex: number, direction: number) => {
      const maxIndex = selectableOptions.length - 1;
      let nextIndex = Math.min(maxIndex, Math.max(0, targetIndex));

      while (nextIndex >= 0 && nextIndex <= maxIndex) {
        const nextButton = rootRef.current?.querySelector<HTMLButtonElement>(
          `[data-willa-calendar-option-index="${nextIndex}"]`,
        );

        if (nextButton && !nextButton.disabled) {
          nextButton.focus();
          return;
        }

        nextIndex += direction;
      }
    };

    const handleCellKeyDown = (
      event: KeyboardEvent<HTMLButtonElement>,
      optionIndex: number,
    ) => {
      const columnCount = getCalendarColumnCount(mode);
      const rowStart = Math.floor(optionIndex / columnCount) * columnCount;
      const rowEnd = rowStart + columnCount - 1;
      const lastIndex = selectableOptions.length - 1;
      const keyMap: Partial<Record<string, number>> = {
        ArrowLeft: optionIndex - 1,
        ArrowRight: optionIndex + 1,
        ArrowUp: optionIndex - columnCount,
        ArrowDown: optionIndex + columnCount,
        Home: rowStart,
        End: Math.min(rowEnd, lastIndex),
      };
      const nextIndex = keyMap[event.key] ?? null;

      if (nextIndex === null) return;

      event.preventDefault();
      focusOption(nextIndex, nextIndex >= optionIndex ? 1 : -1);
    };

    return (
      <div
        {...rootProps}
        ref={setRootRef}
        className={classNames("willa-calendar", className)}
        style={calendarStyle}
      >
        {headerRender ? (
          headerRender({
            mode,
            visibleDate: currentVisibleDate,
            title: panelTitle,
            previous: () =>
              setVisibleDate(moveVisibleDate(currentVisibleDate, mode, -1)),
            next: () =>
              setVisibleDate(moveVisibleDate(currentVisibleDate, mode, 1)),
          })
        ) : (
          <div className="willa-calendar-header">
            <div className="willa-calendar-header-side">
              <button
                className="willa-calendar-nav"
                type="button"
                aria-label="上一页"
                onClick={() =>
                  setVisibleDate(moveVisibleDate(currentVisibleDate, mode, -1))
                }
              >
                <ChevronLeftIcon />
              </button>
            </div>
            <div className="willa-calendar-title">{panelTitle}</div>
            <div className="willa-calendar-header-side willa-calendar-header-side--end">
              <button
                className="willa-calendar-today"
                type="button"
                onClick={() => setVisibleDate(getMonthStart(new Date()))}
              >
                今天
              </button>
              <button
                className="willa-calendar-nav"
                type="button"
                aria-label="下一页"
                onClick={() =>
                  setVisibleDate(moveVisibleDate(currentVisibleDate, mode, 1))
                }
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        )}
        {mode === "day" ? (
          <div
            className={classNames(
              "willa-calendar-weekdays",
              showWeekNumber && "willa-calendar-weekdays--with-week-number",
            )}
            aria-hidden="true"
          >
            {showWeekNumber ? <span /> : null}
            {getWeekdayLabels(firstDayOfWeek).map((weekday, index) => (
              <span
                key={weekday}
                className={classNames(
                  isWeekendIndex(index, firstDayOfWeek) &&
                    "willa-calendar-weekday--weekend",
                )}
              >
                {weekday}
              </span>
            ))}
          </div>
        ) : null}
        <div
          className={classNames(
            "willa-calendar-grid",
            `willa-calendar-grid--${mode}`,
            mode === "day" &&
              showWeekNumber &&
              "willa-calendar-grid--with-week-number",
          )}
          role="grid"
        >
          {optionGrid.map((option) => {
            if (option.weekNumber !== undefined) {
              return (
                <span
                  key={option.value}
                  className="willa-calendar-week-number"
                  aria-hidden="true"
                >
                  {option.weekNumber}
                </span>
              );
            }

            const selectedState = getSelectedState({
              range,
              optionValue: option.value,
              value: currentValue,
            });
            const markerSegments = getCalendarMarkerSegments({
              getMarker,
              markers,
              mode,
              option,
            });
            const markerSegment = markerSegments[0];
            const marker = markerSegment?.marker;
            const unavailable = isValueUnavailable(option.value, {
              min,
              max,
              disabledDate,
            });
            const cellContext = {
              mode,
              value: option.value,
              date: option.date,
              weekend: option.weekend,
              currentMonth: option.currentMonth,
              label: option.label,
              startLabel: option.startLabel,
              endLabel: option.endLabel,
              markers: markerSegments.map((segment) => segment.marker),
              selected: selectedState.selected,
              inRange: selectedState.inRange,
              rangeEdge: selectedState.edge,
              muted: option.muted,
              today: option.today,
              unavailable,
            } satisfies CalendarCellContext;
            const selectableIndex = selectableOptions.findIndex(
              (item) => item.value === option.value,
            );

            return (
              <button
                key={option.value}
                className={classNames(
                  "willa-calendar-day",
                  `willa-calendar-day--${mode}`,
                  option.muted && "willa-calendar-day--muted",
                  option.today && "willa-calendar-day--today",
                  selectedState.inRange && "willa-calendar-day--in-range",
                  selectedState.edge && "willa-calendar-day--range-edge",
                  selectedState.selected && "willa-calendar-day--selected",
                  marker && "willa-calendar-day--marked",
                  marker &&
                    `willa-calendar-day--marked-${marker.tone ?? "info"}`,
                  markerSegment &&
                    `willa-calendar-day--marker-${markerSegment.position}`,
                )}
                type="button"
                role="gridcell"
                aria-selected={selectedState.selected}
                data-willa-calendar-option-index={selectableIndex}
                disabled={unavailable}
                onKeyDown={(event) => handleCellKeyDown(event, selectableIndex)}
                onClick={() => handleSelect(option)}
              >
                <span className="willa-calendar-day-content">
                  {renderCell
                    ? renderCell(cellContext)
                    : renderDefaultCell({
                        markerSegments,
                        mode,
                        option,
                      })}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

Calendar.displayName = "Calendar";

export { ScheduleCalendar } from "#form/components/Calendar/ScheduleCalendar";
export type {
  ScheduleCalendarEvent,
  ScheduleCalendarEventContext,
  ScheduleCalendarProps,
  ScheduleCalendarTone,
  ScheduleCalendarView,
} from "#form/components/Calendar/ScheduleCalendar";

const weekdayLabels = ["日", "一", "二", "三", "四", "五", "六"];

const renderDefaultCell = (options: {
  markerSegments: Array<CalendarMarkerSegment>;
  mode: CalendarMode;
  option: CalendarOption;
}) => {
  const { markerSegments, mode, option } = options;
  const visibleMarkerSegments = markerSegments.filter(
    (segment) => segment.position !== "middle" && segment.position !== "end",
  );

  return (
    <>
      {mode === "week" ? (
        <span className="willa-calendar-week-range">
          <span>{option.startLabel}</span>
          <span className="willa-calendar-week-line" aria-hidden="true" />
          <span>{option.endLabel}</span>
        </span>
      ) : (
        <span className="willa-calendar-day-label">{option.label}</span>
      )}
      {visibleMarkerSegments.length > 0 ? (
        <span className="willa-calendar-marker-list">
          {visibleMarkerSegments.map((segment) => {
            const markerContent = (
              <span
                className={classNames(
                  "willa-calendar-marker",
                  `willa-calendar-marker--${segment.position}`,
                )}
              >
                <span className="willa-calendar-marker-label">
                  {segment.marker.label}
                </span>
              </span>
            );

            return (
              <Tooltip
                key={`${segment.marker.value}-${segment.marker.endValue ?? ""}-${String(segment.marker.label)}`}
                content={segment.marker.label}
                delay={180}
                side="top"
              >
                {markerContent}
              </Tooltip>
            );
          })}
        </span>
      ) : (
        <span className="willa-calendar-marker-list">
          <span className="willa-calendar-marker willa-calendar-marker--empty" />
        </span>
      )}
    </>
  );
};

const getWeekdayLabels = (firstDayOfWeek: 0 | 1) =>
  firstDayOfWeek === 0 ? weekdayLabels : [...weekdayLabels.slice(1), "日"];

const getInitialDate = (value: CalendarValue, mode: CalendarMode) => {
  const rawValue = typeof value === "string" ? value : value.start || value.end;
  const date = rawValue ? parseValue(rawValue, mode) : null;

  return date ?? new Date();
};

const parseValue = (value: string, mode: CalendarMode) => {
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

const formatMonthValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}`;
};

const formatValue = (date: Date, mode: CalendarMode) => {
  if (mode === "year") return String(date.getFullYear());
  if (mode === "month") return formatMonthValue(date);

  return formatDateValue(mode === "week" ? getWeekStart(date) : date);
};

const getCalendarColumnCount = (mode: CalendarMode) => {
  if (mode === "day") return 7;
  if (mode === "week") return 1;

  return 3;
};

const getMonthStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const addMonths = (date: Date, offset: number) =>
  new Date(date.getFullYear(), date.getMonth() + offset, 1);

const addYears = (date: Date, offset: number) =>
  new Date(date.getFullYear() + offset, date.getMonth(), 1);

const isWeekendIndex = (index: number, firstDayOfWeek: 0 | 1) =>
  firstDayOfWeek === 0 ? index === 0 || index === 6 : index >= 5;

const createCalendarDays = (month: Date, firstDayOfWeek: 0 | 1) => {
  const start = getMonthStart(month);
  const firstDay = getWeekdayOffset(start, firstDayOfWeek);
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
  mode: CalendarMode,
  visibleMonth: Date,
  calendarDays: Array<CalendarDay>,
  options: {
    firstDayOfWeek: 0 | 1;
    showWeekNumber: boolean;
  },
): Array<CalendarOption> => {
  const { firstDayOfWeek, showWeekNumber } = options;

  if (mode === "year") {
    const startYear = getYearPageStart(visibleMonth.getFullYear());

    return Array.from({ length: 12 }, (_, index) => {
      const year = startYear + index;
      const date = new Date(year, 0, 1);

      return {
        value: String(year),
        label: String(year),
        startLabel: "",
        endLabel: "",
        date,
        weekend: false,
        currentMonth: true,
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
        date,
        weekend: false,
        currentMonth: true,
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
        startLabel: formatShortDateValue(start),
        endLabel: formatShortDateValue(end),
        date: start,
        weekend: isWeekend(start) || isWeekend(end),
        currentMonth: start.getMonth() === visibleMonth.getMonth(),
        muted: start.getMonth() !== visibleMonth.getMonth(),
        today: today >= getWeekStart(start) && today <= end,
      };
    });
  }

  const dayOptions = calendarDays.map((day) => ({
    value: formatValue(day.date, mode),
    label: String(day.date.getDate()),
    startLabel: "",
    endLabel: "",
    date: day.date,
    weekend: day.weekend,
    currentMonth: day.currentMonth,
    muted: !day.currentMonth,
    today: day.today,
  }));

  if (!showWeekNumber) return dayOptions;

  return dayOptions.flatMap((option, index) => {
    if (index % 7 !== 0) return [option];

    return [
      {
        value: `week-${option.value}`,
        label: "",
        startLabel: "",
        endLabel: "",
        weekend: false,
        muted: false,
        today: false,
        weekNumber: getWeekNumber(option.date ?? visibleMonth, firstDayOfWeek),
      },
      option,
    ];
  });
};

const getWeekdayOffset = (date: Date, firstDayOfWeek: 0 | 1) =>
  (date.getDay() - firstDayOfWeek + 7) % 7;

const getWeekNumber = (date: Date, firstDayOfWeek: 0 | 1) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const startOffset = getWeekdayOffset(yearStart, firstDayOfWeek);
  const start = new Date(yearStart);

  start.setDate(yearStart.getDate() - startOffset);

  const diff = getDateOnly(date).getTime() - start.getTime();

  return Math.floor(diff / 604800000) + 1;
};

const getCalendarMarkerSegments = (options: {
  getMarker?: (
    value: string,
    context: CalendarMarkerContext,
  ) => CalendarMarker | null | undefined;
  markers: Array<CalendarMarker>;
  mode: CalendarMode;
  option: CalendarOption;
}) => {
  const { getMarker, markers, mode, option } = options;
  const context = {
    mode,
    value: option.value,
    date: option.date,
    weekend: option.weekend,
    currentMonth: option.currentMonth,
  } satisfies CalendarMarkerContext;
  const dynamicMarker = getMarker?.(option.value, context);
  const matchedMarkers = markers.filter((candidate) =>
    isValueInMarker(option.value, candidate),
  );
  const cellMarkers = dynamicMarker
    ? [dynamicMarker, ...matchedMarkers]
    : matchedMarkers;

  return cellMarkers.map(
    (marker) =>
      ({
        marker,
        position: getMarkerSegmentPosition(option.value, marker),
      }) satisfies CalendarMarkerSegment,
  );
};

const getMarkerRange = (marker: CalendarMarker) => {
  const start = marker.value;
  const end = marker.endValue ?? marker.value;
  return start <= end ? { start, end } : { start: end, end: start };
};

const isValueInMarker = (value: string, marker: CalendarMarker) => {
  const range = getMarkerRange(marker);
  return value >= range.start && value <= range.end;
};

const getMarkerSegmentPosition = (
  value: string,
  marker: CalendarMarker,
): CalendarMarkerSegment["position"] => {
  const range = getMarkerRange(marker);

  if (range.start === range.end) return "single";
  if (value === range.start) return "start";
  if (value === range.end) return "end";
  return "middle";
};

const getYearPageStart = (year: number) => Math.floor(year / 12) * 12;

const formatPanelTitle = (date: Date, mode: CalendarMode) => {
  if (mode === "year") {
    const startYear = getYearPageStart(date.getFullYear());
    return `${startYear} - ${startYear + 11}`;
  }

  if (mode === "month") return `${date.getFullYear()} 年`;

  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;
};

const moveVisibleDate = (date: Date, mode: CalendarMode, direction: number) => {
  if (mode === "year") return addYears(date, direction * 12);
  if (mode === "month") return addYears(date, direction);
  return addMonths(date, direction);
};

const getRangeValue = (value: CalendarValue) =>
  typeof value === "string" ? null : value;

const sortRange = (start: string, end: string) =>
  start <= end ? { start, end } : { start: end, end: start };

const getSelectedState = (options: {
  range: boolean;
  optionValue: string;
  value: CalendarValue;
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
