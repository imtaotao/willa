import {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Tooltip } from "@willa-ui/content/components/Tooltip";
import classNames from "classnames";
import {
  addDays,
  addMonths,
  clampHour,
  formatDateValue,
  formatShortDateValue,
  getCalendarStyle,
  getDateOnly,
  getWeekEnd,
  getWeekStart,
  isWeekend,
  parseDateValue,
} from "#form/components/Calendar/utils";

export type ScheduleCalendarTone =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger";
export type ScheduleCalendarView = "week" | "month";

export type ScheduleCalendarEvent = {
  id: string;
  title: ReactNode;
  start: string;
  end: string;
  tone?: ScheduleCalendarTone;
  meta?: ReactNode;
};

export type ScheduleCalendarEventContext = {
  allDay: boolean;
  dateValue: string;
};

export type ScheduleCalendarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onSelect"
> & {
  width?: CSSProperties["width"];
  view?: ScheduleCalendarView;
  defaultView?: ScheduleCalendarView;
  visibleDate?: Date;
  defaultVisibleDate?: Date;
  startHour?: number;
  endHour?: number;
  slotMinutes?: number;
  events?: Array<ScheduleCalendarEvent>;
  allDayEvents?: Array<ScheduleCalendarEvent>;
  selectedEventId?: string;
  selectedSlot?: string;
  emptyText?: ReactNode;
  disabledDate?: (value: string) => boolean;
  disabledSlot?: (value: string) => boolean;
  renderEvent?: (
    event: ScheduleCalendarEvent,
    context: ScheduleCalendarEventContext,
  ) => ReactNode;
  onVisibleDateChange?: (date: Date) => void;
  onViewChange?: (view: ScheduleCalendarView) => void;
  onSlotClick?: (value: string) => void;
  onEventClick?: (event: ScheduleCalendarEvent) => void;
};

export const ScheduleCalendar = forwardRef<
  HTMLDivElement,
  ScheduleCalendarProps
>((props, ref) => {
  const {
    width,
    view,
    defaultView = "week",
    visibleDate,
    defaultVisibleDate,
    startHour = 8,
    endHour = 18,
    slotMinutes = 60,
    events = [],
    allDayEvents = [],
    selectedEventId,
    selectedSlot,
    emptyText = "暂无日程",
    disabledDate,
    disabledSlot,
    renderEvent,
    onVisibleDateChange,
    onViewChange,
    onSlotClick,
    onEventClick,
    className,
    style,
    ...rootProps
  } = props;
  const [innerVisibleDate, setInnerVisibleDate] = useState(() =>
    getInitialScheduleVisibleDate(
      defaultVisibleDate ?? new Date(),
      view ?? defaultView,
    ),
  );
  const [innerView, setInnerView] = useState<ScheduleCalendarView>(defaultView);
  const currentVisibleDate = visibleDate ?? innerVisibleDate;
  const currentView = view ?? innerView;
  const invalidTimedEvents = useMemo(
    () => events.filter((event) => !isSingleDayTimedEvent(event)),
    [events],
  );
  const validTimedEvents = useMemo(
    () => events.filter((event) => isSingleDayTimedEvent(event)),
    [events],
  );
  const hasEvents = validTimedEvents.length > 0 || allDayEvents.length > 0;
  const weekDays = useMemo(
    () => createWeekDays(currentVisibleDate),
    [currentVisibleDate],
  );
  const monthDays = useMemo(
    () => createMonthDays(currentVisibleDate),
    [currentVisibleDate],
  );
  const slots = useMemo(
    () => createScheduleSlots(startHour, endHour, slotMinutes),
    [endHour, slotMinutes, startHour],
  );
  const eventLayouts = useMemo(
    () => createEventLayoutMap(validTimedEvents),
    [validTimedEvents],
  );
  const calendarStyle = getCalendarStyle({ width, style });

  useEffect(() => {
    warnInvalidTimedEvents(invalidTimedEvents);
  }, [invalidTimedEvents]);

  const setVisibleDate = (nextDate: Date) => {
    if (visibleDate === undefined) {
      setInnerVisibleDate(nextDate);
    }

    onVisibleDateChange?.(nextDate);
  };
  const setView = (nextView: ScheduleCalendarView) => {
    if (view === undefined) {
      setInnerView(nextView);
    }

    setVisibleDate(getInitialScheduleVisibleDate(currentVisibleDate, nextView));
    onViewChange?.(nextView);
  };
  const moveByView = (direction: number) => {
    setVisibleDate(
      currentView === "month"
        ? addMonths(currentVisibleDate, direction)
        : addDays(currentVisibleDate, direction * 7),
    );
  };
  const scheduleTitle =
    currentView === "month"
      ? formatMonthTitle(currentVisibleDate)
      : formatScheduleTitle(currentVisibleDate);

  return (
    <div
      {...rootProps}
      ref={ref}
      className={classNames("willa-schedule-calendar", className)}
      style={calendarStyle}
    >
      <div className="willa-calendar-header willa-schedule-calendar-header">
        <button
          className="willa-calendar-nav"
          type="button"
          aria-label={currentView === "month" ? "上一月" : "上一周"}
          onClick={() => moveByView(-1)}
        >
          <ChevronLeftIcon />
        </button>
        <div className="willa-calendar-title">{scheduleTitle}</div>
        <button
          className="willa-calendar-today"
          type="button"
          onClick={() =>
            setVisibleDate(
              getInitialScheduleVisibleDate(new Date(), currentView),
            )
          }
        >
          今天
        </button>
        <button
          className="willa-calendar-nav"
          type="button"
          aria-label={currentView === "month" ? "下一月" : "下一周"}
          onClick={() => moveByView(1)}
        >
          <ChevronRightIcon />
        </button>
        <div className="willa-schedule-calendar-view-switch">
          {(["week", "month"] as Array<ScheduleCalendarView>).map((item) => (
            <button
              key={item}
              className={classNames(
                "willa-schedule-calendar-view-button",
                currentView === item &&
                  "willa-schedule-calendar-view-button--active",
              )}
              type="button"
              aria-pressed={currentView === item}
              onClick={() => setView(item)}
            >
              {item === "week" ? "周" : "月"}
            </button>
          ))}
        </div>
      </div>
      {currentView === "month" ? (
        <ScheduleCalendarMonth
          allDayEvents={allDayEvents}
          days={monthDays}
          disabledDate={disabledDate}
          emptyText={emptyText}
          events={validTimedEvents}
          hasEvents={hasEvents}
          renderEvent={renderEvent}
          selectedEventId={selectedEventId}
          selectedSlot={selectedSlot}
          visibleDate={currentVisibleDate}
          onEventClick={onEventClick}
          onSlotClick={onSlotClick}
        />
      ) : (
        <ScheduleCalendarWeek
          allDayEvents={allDayEvents}
          disabledDate={disabledDate}
          disabledSlot={disabledSlot}
          emptyText={emptyText}
          eventLayouts={eventLayouts}
          events={validTimedEvents}
          hasEvents={hasEvents}
          renderEvent={renderEvent}
          selectedEventId={selectedEventId}
          selectedSlot={selectedSlot}
          slots={slots}
          slotMinutes={normalizeSlotMinutes(slotMinutes)}
          weekDays={weekDays}
          onEventClick={onEventClick}
          onSlotClick={onSlotClick}
        />
      )}
    </div>
  );
});

ScheduleCalendar.displayName = "ScheduleCalendar";

type ScheduleDay = {
  date: Date;
  value: string;
  weekend: boolean;
  today: boolean;
};

type ScheduleSlot = {
  hour: number;
  minute: number;
};

type ScheduleEventLayout = {
  column: number;
  columns: number;
};

const ScheduleCalendarWeek = (props: {
  allDayEvents: Array<ScheduleCalendarEvent>;
  disabledDate?: (value: string) => boolean;
  disabledSlot?: (value: string) => boolean;
  emptyText: ReactNode;
  eventLayouts: Map<string, ScheduleEventLayout>;
  events: Array<ScheduleCalendarEvent>;
  hasEvents: boolean;
  renderEvent?: (
    event: ScheduleCalendarEvent,
    context: ScheduleCalendarEventContext,
  ) => ReactNode;
  selectedEventId?: string;
  selectedSlot?: string;
  slots: Array<ScheduleSlot>;
  slotMinutes: number;
  weekDays: Array<ScheduleDay>;
  onEventClick?: (event: ScheduleCalendarEvent) => void;
  onSlotClick?: (value: string) => void;
}) => {
  const {
    allDayEvents,
    disabledDate,
    disabledSlot,
    emptyText,
    eventLayouts,
    events,
    hasEvents,
    renderEvent,
    selectedEventId,
    selectedSlot,
    slots,
    slotMinutes,
    weekDays,
    onEventClick,
    onSlotClick,
  } = props;

  return (
    <div className="willa-schedule-calendar-grid">
      <div className="willa-schedule-calendar-axis" aria-hidden="true" />
      {weekDays.map((day) => (
        <div
          key={day.value}
          className={classNames(
            "willa-schedule-calendar-day-heading",
            day.weekend && "willa-schedule-calendar-day-heading--weekend",
            day.today && "willa-schedule-calendar-day-heading--today",
          )}
        >
          <span>{weekdayLabels[day.date.getDay()]}</span>
          <strong>{day.date.getDate()}</strong>
        </div>
      ))}
      <div className="willa-schedule-calendar-all-day-label">全天</div>
      {weekDays.map((day) => (
        <ScheduleCalendarDaySlot
          key={`${day.value}-all-day`}
          className="willa-schedule-calendar-all-day-cell"
          disabled={disabledDate?.(day.value)}
          selected={selectedSlot === day.value}
          value={day.value}
          onSlotClick={onSlotClick}
        >
          {allDayEvents
            .filter((event) => isDateInEventRange(event, day.value))
            .map((event) => (
              <ScheduleCalendarEventView
                key={event.id}
                allDay
                dateValue={day.value}
                event={event}
                renderEvent={renderEvent}
                selected={selectedEventId === event.id}
                onEventClick={onEventClick}
              />
            ))}
        </ScheduleCalendarDaySlot>
      ))}
      {!hasEvents ? (
        <div className="willa-schedule-calendar-empty">{emptyText}</div>
      ) : null}
      {slots.map((slot) => (
        <ScheduleCalendarRow
          key={`${slot.hour}-${slot.minute}`}
          disabledDate={disabledDate}
          disabledSlot={disabledSlot}
          eventLayouts={eventLayouts}
          events={events}
          renderEvent={renderEvent}
          selectedEventId={selectedEventId}
          selectedSlot={selectedSlot}
          slot={slot}
          slotMinutes={slotMinutes}
          weekDays={weekDays}
          onEventClick={onEventClick}
          onSlotClick={onSlotClick}
        />
      ))}
    </div>
  );
};

const ScheduleCalendarMonth = (props: {
  allDayEvents: Array<ScheduleCalendarEvent>;
  days: Array<ScheduleDay & { currentMonth: boolean }>;
  disabledDate?: (value: string) => boolean;
  emptyText: ReactNode;
  events: Array<ScheduleCalendarEvent>;
  hasEvents: boolean;
  renderEvent?: (
    event: ScheduleCalendarEvent,
    context: ScheduleCalendarEventContext,
  ) => ReactNode;
  selectedEventId?: string;
  selectedSlot?: string;
  visibleDate: Date;
  onEventClick?: (event: ScheduleCalendarEvent) => void;
  onSlotClick?: (value: string) => void;
}) => {
  const {
    allDayEvents,
    days,
    disabledDate,
    emptyText,
    events,
    hasEvents,
    renderEvent,
    selectedEventId,
    selectedSlot,
    visibleDate,
    onEventClick,
    onSlotClick,
  } = props;
  const allEvents = [...allDayEvents, ...events];

  return (
    <div className="willa-schedule-calendar-month">
      {weekdayLabels.map((weekday, index) => (
        <div
          key={weekday}
          className={classNames(
            "willa-schedule-calendar-month-heading",
            (index === 0 || index === 6) &&
              "willa-schedule-calendar-month-heading--weekend",
          )}
        >
          {weekday}
        </div>
      ))}
      {days.map((day) => {
        const dayEvents = allEvents.filter((event) =>
          isDateInEventRange(event, day.value),
        );
        const disabled = disabledDate?.(day.value);

        return (
          <ScheduleCalendarDaySlot
            key={day.value}
            className={classNames(
              "willa-schedule-calendar-month-cell",
              !day.currentMonth && "willa-schedule-calendar-month-cell--muted",
              day.weekend && "willa-schedule-calendar-month-cell--weekend",
              day.today && "willa-schedule-calendar-month-cell--today",
            )}
            disabled={disabled}
            selected={selectedSlot === day.value}
            value={day.value}
            onSlotClick={onSlotClick}
          >
            <span className="willa-schedule-calendar-month-date">
              {day.date.getMonth() === visibleDate.getMonth()
                ? day.date.getDate()
                : formatShortDateValue(day.date)}
            </span>
            <div className="willa-schedule-calendar-month-events">
              {dayEvents.slice(0, 3).map((event) => (
                <ScheduleCalendarEventView
                  key={event.id}
                  allDay
                  dateValue={day.value}
                  event={event}
                  renderEvent={renderEvent}
                  selected={selectedEventId === event.id}
                  onEventClick={onEventClick}
                />
              ))}
              {dayEvents.length > 3 ? (
                <span className="willa-schedule-calendar-month-more">
                  还有 {dayEvents.length - 3} 项
                </span>
              ) : null}
            </div>
          </ScheduleCalendarDaySlot>
        );
      })}
      {!hasEvents ? (
        <div className="willa-schedule-calendar-month-empty">{emptyText}</div>
      ) : null}
    </div>
  );
};

const ScheduleCalendarDaySlot = (props: {
  children?: ReactNode;
  className: string;
  disabled?: boolean;
  selected?: boolean;
  value: string;
  onSlotClick?: (value: string) => void;
}) => {
  const {
    children,
    className,
    disabled = false,
    selected = false,
    value,
    onSlotClick,
  } = props;

  return (
    <div
      className={classNames(
        className,
        selected && "willa-schedule-calendar-slot--selected",
        disabled && "willa-schedule-calendar-slot--disabled",
      )}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-pressed={selected || undefined}
      onClick={() => {
        if (disabled) return;

        onSlotClick?.(value);
      }}
      onKeyDown={(currentEvent) => {
        if (disabled) return;
        if (currentEvent.target !== currentEvent.currentTarget) return;
        if (currentEvent.key !== "Enter" && currentEvent.key !== " ") {
          return;
        }
        currentEvent.preventDefault();
        onSlotClick?.(value);
      }}
    >
      {children}
    </div>
  );
};

const ScheduleCalendarRow = (props: {
  disabledDate?: (value: string) => boolean;
  disabledSlot?: (value: string) => boolean;
  eventLayouts: Map<string, ScheduleEventLayout>;
  events: Array<ScheduleCalendarEvent>;
  renderEvent?: (
    event: ScheduleCalendarEvent,
    context: ScheduleCalendarEventContext,
  ) => ReactNode;
  selectedEventId?: string;
  selectedSlot?: string;
  slot: ScheduleSlot;
  slotMinutes: number;
  weekDays: Array<ScheduleDay>;
  onEventClick?: (event: ScheduleCalendarEvent) => void;
  onSlotClick?: (value: string) => void;
}) => {
  const {
    disabledDate,
    disabledSlot,
    eventLayouts,
    events,
    renderEvent,
    selectedEventId,
    selectedSlot,
    slot,
    slotMinutes,
    weekDays,
    onEventClick,
    onSlotClick,
  } = props;

  return (
    <>
      <div className="willa-schedule-calendar-hour">
        {slot.minute === 0 ? formatHourLabel(slot.hour) : null}
      </div>
      {weekDays.map((day) => {
        const slotValue = `${day.value} ${formatTimeValue(slot)}`;
        const slotEvents = events.filter((event) =>
          isScheduleEventInSlot(event, day.value, slot, slotMinutes),
        );
        const disabled =
          Boolean(disabledDate?.(day.value)) ||
          Boolean(disabledSlot?.(slotValue));

        return (
          <div
            key={`${day.value}-${slot.hour}-${slot.minute}`}
            className={classNames(
              "willa-schedule-calendar-slot",
              selectedSlot === slotValue &&
                "willa-schedule-calendar-slot--selected",
              disabled && "willa-schedule-calendar-slot--disabled",
            )}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled || undefined}
            aria-pressed={selectedSlot === slotValue || undefined}
            onClick={() => {
              if (disabled) return;

              onSlotClick?.(slotValue);
            }}
            onKeyDown={(currentEvent) => {
              if (disabled) return;
              if (currentEvent.target !== currentEvent.currentTarget) return;
              if (currentEvent.key !== "Enter" && currentEvent.key !== " ") {
                return;
              }

              currentEvent.preventDefault();
              onSlotClick?.(slotValue);
            }}
          >
            {slotEvents.map((event) => (
              <ScheduleCalendarEventView
                key={event.id}
                dateValue={day.value}
                event={event}
                layout={eventLayouts.get(event.id)}
                renderEvent={renderEvent}
                selected={selectedEventId === event.id}
                style={getScheduleEventStyle(event, slot, slotMinutes)}
                onEventClick={onEventClick}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

const ScheduleCalendarEventView = (props: {
  allDay?: boolean;
  dateValue: string;
  event: ScheduleCalendarEvent;
  layout?: ScheduleEventLayout;
  renderEvent?: (
    event: ScheduleCalendarEvent,
    context: ScheduleCalendarEventContext,
  ) => ReactNode;
  selected?: boolean;
  style?: CSSProperties;
  onEventClick?: (event: ScheduleCalendarEvent) => void;
}) => {
  const {
    allDay = false,
    dateValue,
    event,
    layout,
    renderEvent,
    selected = false,
    style,
    onEventClick,
  } = props;
  const eventStyle = getScheduleEventColumnStyle(style, layout);
  const content = renderEvent?.(event, { allDay, dateValue }) ?? (
    <>
      <span className="willa-schedule-calendar-event-title">{event.title}</span>
      {event.meta ? (
        <span className="willa-schedule-calendar-event-meta">{event.meta}</span>
      ) : null}
    </>
  );

  const trigger = (
    <span
      className={classNames(
        "willa-schedule-calendar-event",
        allDay && "willa-schedule-calendar-event--all-day",
        selected && "willa-schedule-calendar-event--selected",
        `willa-schedule-calendar-event--${event.tone ?? "info"}`,
      )}
      style={eventStyle}
      role="button"
      tabIndex={0}
      aria-label={getScheduleEventAccessibleLabel(event)}
      aria-pressed={selected || undefined}
      onPointerDown={(currentEvent) => {
        currentEvent.stopPropagation();
      }}
      onClick={(currentEvent) => {
        currentEvent.stopPropagation();
        onEventClick?.(event);
      }}
      onKeyDown={(currentEvent) => {
        if (currentEvent.key !== "Enter" && currentEvent.key !== " ") {
          return;
        }

        currentEvent.preventDefault();
        currentEvent.stopPropagation();
        onEventClick?.(event);
      }}
    >
      {content}
    </span>
  );

  return (
    <Tooltip
      content={renderScheduleEventTooltip(event)}
      contentClassName="willa-schedule-calendar-event-tooltip"
      delay={180}
      side="top"
    >
      {trigger}
    </Tooltip>
  );
};

const weekdayLabels = ["日", "一", "二", "三", "四", "五", "六"];

const createWeekDays = (date: Date) => {
  const cursor = getWeekStart(date);
  const days: Array<ScheduleDay> = [];
  const todayValue = formatDateValue(new Date());

  for (let index = 0; index < 7; index += 1) {
    const currentDate = new Date(cursor);

    days.push({
      date: currentDate,
      value: formatDateValue(currentDate),
      weekend: isWeekend(currentDate),
      today: formatDateValue(currentDate) === todayValue,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
};

const createMonthDays = (date: Date) => {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const cursor = getWeekStart(monthStart);
  const days: Array<ScheduleDay & { currentMonth: boolean }> = [];
  const todayValue = formatDateValue(new Date());

  for (let index = 0; index < 42; index += 1) {
    const currentDate = new Date(cursor);

    days.push({
      date: currentDate,
      value: formatDateValue(currentDate),
      weekend: isWeekend(currentDate),
      today: formatDateValue(currentDate) === todayValue,
      currentMonth: currentDate.getMonth() === date.getMonth(),
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
};

const createScheduleSlots = (
  startHour: number,
  endHour: number,
  slotMinutes: number,
) => {
  const safeStart = clampHour(startHour);
  const safeEnd = Math.max(safeStart + 1, clampHour(endHour));
  const safeSlotMinutes = normalizeSlotMinutes(slotMinutes);
  const slots: Array<ScheduleSlot> = [];

  for (
    let totalMinutes = safeStart * 60;
    totalMinutes < safeEnd * 60;
    totalMinutes += safeSlotMinutes
  ) {
    slots.push({
      hour: Math.floor(totalMinutes / 60),
      minute: totalMinutes % 60,
    });
  }

  return slots;
};

const formatScheduleTitle = (date: Date) => {
  const start = getWeekStart(date);
  const end = getWeekEnd(date);

  return `${formatDateValue(start)} - ${formatShortDateValue(end)}`;
};

const formatMonthTitle = (date: Date) =>
  `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;

const getInitialScheduleVisibleDate = (
  date: Date,
  view: ScheduleCalendarView,
) => {
  if (view === "month") {
    return getDateOnly(new Date(date.getFullYear(), date.getMonth(), 1));
  }

  return getWeekStart(date);
};

const formatHourLabel = (hour: number) => `${String(hour).padStart(2, "0")}:00`;

const renderScheduleEventTooltip = (event: ScheduleCalendarEvent) => (
  <span className="willa-schedule-calendar-event-tooltip-content">
    <span className="willa-schedule-calendar-event-tooltip-title">
      {event.title}
    </span>
    <span className="willa-schedule-calendar-event-tooltip-time">
      {event.start} - {event.end}
    </span>
    {event.meta ? (
      <span className="willa-schedule-calendar-event-tooltip-meta">
        {event.meta}
      </span>
    ) : null}
  </span>
);

const getScheduleEventAccessibleLabel = (event: ScheduleCalendarEvent) => {
  const parts = [event.title, `${event.start} - ${event.end}`, event.meta]
    .filter((part) => typeof part === "string" || typeof part === "number")
    .map(String);

  return parts.join("，");
};

const normalizeSlotMinutes = (slotMinutes: number) => {
  const value = Math.floor(slotMinutes);

  if (value <= 0) return 60;
  if (60 % value !== 0) return 60;

  return Math.min(60, value);
};

const formatTimeValue = (slot: ScheduleSlot) =>
  `${String(slot.hour).padStart(2, "0")}:${String(slot.minute).padStart(2, "0")}`;

const parseScheduleDateTime = (value: string) => {
  const [dateValue, timeValue = "00:00"] = value.trim().split(/\s+/);
  const date = parseDateValue(dateValue);
  const [hourText = "0", minuteText = "0"] = timeValue.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (!date || Number.isNaN(hour) || Number.isNaN(minute)) return null;

  return {
    date,
    dateValue,
    hour: clampHour(hour),
    minute: Math.min(59, Math.max(0, minute)),
  };
};

const isScheduleEventInSlot = (
  event: ScheduleCalendarEvent,
  dateValue: string,
  slot: ScheduleSlot,
  slotMinutes: number,
) => {
  const start = parseScheduleDateTime(event.start);

  if (!start || start.dateValue !== dateValue) return false;

  const slotStart = getSlotTotalMinutes(slot);
  const eventStart = getDateTimeTotalMinutes(start);

  return eventStart >= slotStart && eventStart < slotStart + slotMinutes;
};

const isSingleDayTimedEvent = (event: ScheduleCalendarEvent) => {
  if (!hasTimeValue(event.start) || !hasTimeValue(event.end)) return false;

  const start = parseScheduleDateTime(event.start);
  const end = parseScheduleDateTime(event.end);

  return Boolean(start && end && start.dateValue === end.dateValue);
};

const hasTimeValue = (value: string) => /\s+\d{1,2}:\d{2}/.test(value.trim());

const warnedInvalidTimedEventIds = new Set<string>();

const warnInvalidTimedEvents = (events: Array<ScheduleCalendarEvent>) => {
  if (events.length === 0) return;
  if (typeof console === "undefined") return;

  const freshEvents = events.filter(
    (event) => !warnedInvalidTimedEventIds.has(event.id),
  );

  if (freshEvents.length === 0) return;

  freshEvents.forEach((event) => warnedInvalidTimedEventIds.add(event.id));
  console.warn(
    `[Willa] ScheduleCalendar events only support single-day timed events. Move all-day or cross-day events to allDayEvents, or split them by day: ${freshEvents
      .map((event) => event.id)
      .join(", ")}`,
  );
};

const isDateInEventRange = (
  event: ScheduleCalendarEvent,
  dateValue: string,
) => {
  const start = parseScheduleDateTime(event.start);
  const end = parseScheduleDateTime(event.end);
  const startValue = start?.dateValue ?? event.start;
  const endValue = end?.dateValue ?? event.end;

  return dateValue >= startValue && dateValue <= endValue;
};

const getScheduleEventStyle = (
  event: ScheduleCalendarEvent,
  slot: ScheduleSlot,
  slotMinutes: number,
) => {
  const start = parseScheduleDateTime(event.start);
  const end = parseScheduleDateTime(event.end);
  const durationMinutes =
    start && end
      ? Math.max(30, (end.hour - start.hour) * 60 + end.minute - start.minute)
      : 60;
  const slotStart = getSlotTotalMinutes(slot);
  const eventStart = start ? getDateTimeTotalMinutes(start) : slotStart;
  const top = ((eventStart - slotStart) / slotMinutes) * 100;
  const height = (durationMinutes / slotMinutes) * 100;

  return {
    top: `calc(${top}% + var(--willa-schedule-calendar-event-inset))`,
    height: `calc(${height}% - var(--willa-schedule-calendar-event-inset) - var(--willa-schedule-calendar-event-inset))`,
  } satisfies CSSProperties;
};

const getScheduleEventColumnStyle = (
  style?: CSSProperties,
  layout?: ScheduleEventLayout,
) => {
  if (!layout || layout.columns <= 1) return style;

  const columnWidth = 100 / layout.columns;
  const left = `calc(${columnWidth * layout.column}% + 0.42rem)`;
  const right = `calc(${100 - columnWidth * (layout.column + 1)}% + 0.42rem)`;

  return {
    ...style,
    left,
    right,
  } satisfies CSSProperties;
};

const createEventLayoutMap = (events: Array<ScheduleCalendarEvent>) => {
  const layouts = new Map<string, ScheduleEventLayout>();
  const eventsByDate = groupTimedEventsByDate(events);

  eventsByDate.forEach((dayEvents) => {
    const sortedEvents = [...dayEvents].sort(
      (first, second) =>
        getEventStartMinutes(first) - getEventStartMinutes(second),
    );
    const activeColumns: Array<ScheduleCalendarEvent | null> = [];

    sortedEvents.forEach((event) => {
      const start = getEventStartMinutes(event);

      activeColumns.forEach((activeEvent, index) => {
        if (activeEvent && getEventEndMinutes(activeEvent) <= start) {
          activeColumns[index] = null;
        }
      });

      const emptyColumn = activeColumns.findIndex(
        (activeEvent) => activeEvent === null,
      );
      const column =
        emptyColumn === -1 ? activeColumns.length : Math.max(0, emptyColumn);

      activeColumns[column] = event;
      layouts.set(event.id, {
        column,
        columns: activeColumns.filter(Boolean).length,
      });
      activeColumns.forEach((activeEvent) => {
        if (!activeEvent || !eventsOverlap(activeEvent, event)) return;

        const activeLayout = layouts.get(activeEvent.id);
        if (!activeLayout) return;

        const columns = Math.max(activeLayout.columns, column + 1);
        layouts.set(activeEvent.id, { ...activeLayout, columns });
        layouts.set(event.id, { column, columns });
      });
    });
  });

  return layouts;
};

const groupTimedEventsByDate = (events: Array<ScheduleCalendarEvent>) => {
  const groups = new Map<string, Array<ScheduleCalendarEvent>>();

  events.forEach((event) => {
    const start = parseScheduleDateTime(event.start);
    if (!start) return;

    const group = groups.get(start.dateValue) ?? [];
    group.push(event);
    groups.set(start.dateValue, group);
  });

  return groups;
};

const eventsOverlap = (
  first: ScheduleCalendarEvent,
  second: ScheduleCalendarEvent,
) =>
  getEventStartMinutes(first) < getEventEndMinutes(second) &&
  getEventEndMinutes(first) > getEventStartMinutes(second);

const getEventStartMinutes = (event: ScheduleCalendarEvent) => {
  const start = parseScheduleDateTime(event.start);

  return start ? getDateTimeTotalMinutes(start) : 0;
};

const getEventEndMinutes = (event: ScheduleCalendarEvent) => {
  const end = parseScheduleDateTime(event.end);

  return end ? getDateTimeTotalMinutes(end) : getEventStartMinutes(event) + 60;
};

const getSlotTotalMinutes = (slot: ScheduleSlot) =>
  slot.hour * 60 + slot.minute;

const getDateTimeTotalMinutes = (dateTime: { hour: number; minute: number }) =>
  dateTime.hour * 60 + dateTime.minute;
