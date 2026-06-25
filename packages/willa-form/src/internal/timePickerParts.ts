import { clampNumber } from "@willa-ui/shared";

import type {
  TimePickerDisabledTime,
  TimePickerWheelColumn,
  TimePickerWheelColumns,
} from "#form/components/TimePicker/types";

export type TimePickerParts = {
  hour: number;
  minute: number;
  second: number;
};

export type TimePickerWheelOption = {
  value: number;
  label: string;
  disabled: boolean;
};

export function normalizeTimeWheelColumns(columns: TimePickerWheelColumns) {
  if (Array.isArray(columns)) return columns;
  return ["hour", "minute", "second"] satisfies Array<TimePickerWheelColumn>;
}

export function getTimeWheelParts(value: string) {
  const now = new Date();
  const fallback = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };

  if (!value) return normalizeTimeWheelParts(fallback);

  const timeMatch = value.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);
  if (timeMatch) {
    return normalizeTimeWheelParts({
      hour: Number(timeMatch[1]),
      minute: Number(timeMatch[2]),
      second: Number(timeMatch[3] ?? fallback.second),
    });
  }

  const timeWithPrefixMatch = value.match(
    /^(?:\d{4}-\d{2}-\d{2}[ T])?(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/,
  );
  if (timeWithPrefixMatch) {
    const meridiem = timeWithPrefixMatch[4]?.toLowerCase();
    const hour = Number(timeWithPrefixMatch[1]);

    return normalizeTimeWheelParts({
      hour:
        meridiem === "pm" && hour < 12
          ? hour + 12
          : meridiem === "am" && hour === 12
            ? 0
            : hour,
      minute: Number(timeWithPrefixMatch[2]),
      second: Number(timeWithPrefixMatch[3] ?? fallback.second),
    });
  }

  return normalizeTimeWheelParts(fallback);
}

export function normalizeTimeWheelParts(parts: {
  hour: number;
  minute: number;
  second: number;
}) {
  return {
    hour: clampNumber(Math.trunc(parts.hour), 0, 23),
    minute: clampNumber(Math.trunc(parts.minute), 0, 59),
    second: clampNumber(Math.trunc(parts.second), 0, 59),
  };
}

export function formatTimeWheelValue(
  parts: TimePickerParts,
  columns: Array<TimePickerWheelColumn>,
) {
  const hasHour = columns.includes("hour");
  const hasMinute = columns.includes("minute");
  const hasSecond = columns.includes("second");

  if (!hasHour && !hasMinute && !hasSecond) {
    return "";
  }

  const timeParts = [
    hasHour ? padNumber(parts.hour) : null,
    hasMinute ? padNumber(parts.minute) : null,
    hasSecond ? padNumber(parts.second) : null,
  ].filter((part): part is string => part !== null);

  return timeParts.join(":");
}

export function formatTimeWheelDisplayValue(
  value: string,
  columns: Array<TimePickerWheelColumn>,
) {
  const parts = getTimeWheelParts(value);

  return formatTimeWheelValue(parts, columns);
}

export function createTimeWheelOptions(
  column: TimePickerWheelColumn,
  options?: {
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    use12Hours?: boolean;
    disabledTime?: TimePickerDisabledTime | null;
    selectedParts?: TimePickerParts;
    period?: "am" | "pm";
  },
) {
  const hourStep = Math.max(1, Math.trunc(options?.hourStep ?? 1));
  const minuteStep = Math.max(1, Math.trunc(options?.minuteStep ?? 1));
  const secondStep = Math.max(1, Math.trunc(options?.secondStep ?? 1));
  const use12Hours = options?.use12Hours ?? false;
  const disabledHours = options?.disabledTime?.disabledHours?.() ?? [];
  const selectedParts = options?.selectedParts ?? getTimeWheelParts("");

  if (column === "hour") {
    const start = use12Hours ? 1 : 0;
    const end = use12Hours ? 12 : 23;
    const period = options?.period;

    return createNumberOptions(start, end, hourStep).map((option) => {
      const currentHour = use12Hours
        ? convertDisplayHourTo24Hour(option.value, period)
        : option.value;

      return {
        ...option,
        disabled: disabledHours.includes(currentHour),
      };
    });
  }

  if (column === "minute") {
    const disabledMinutes =
      options?.disabledTime?.disabledMinutes?.(selectedParts.hour) ?? [];

    return createNumberOptions(0, 59, minuteStep).map((option) => {
      return {
        ...option,
        disabled: disabledMinutes.includes(option.value),
      };
    });
  }

  const disabledSeconds =
    options?.disabledTime?.disabledSeconds?.(
      selectedParts.hour,
      selectedParts.minute,
    ) ?? [];

  return createNumberOptions(0, 59, secondStep).map((option) => {
    return {
      ...option,
      disabled: disabledSeconds.includes(option.value),
    };
  });
}

export function getTimeWheelPanelMinWidth(columnCount: number) {
  return Math.max(244, columnCount * 4.25 * 16);
}

const createNumberOptions = (start: number, end: number, step: number) => {
  return Array.from(
    { length: Math.floor((end - start) / step) + 1 },
    (_, index) => {
      const value = start + index * step;
      return {
        value,
        label: padNumber(value),
      };
    },
  ).filter((option) => option.value <= end);
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
