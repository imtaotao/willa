import type { CSSProperties } from "react";

export const getCalendarStyle = (options: {
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
  } as CSSProperties;
};

export const parseDateValue = (value: string) => {
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

export const formatDateValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatShortDateValue = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}-${day}`;
};

export const getDateOnly = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const addDays = (date: Date, offset: number) => {
  const nextDate = new Date(date);

  nextDate.setDate(nextDate.getDate() + offset);

  return getDateOnly(nextDate);
};

export const getWeekStart = (date: Date) => {
  const nextDate = new Date(date);

  nextDate.setDate(date.getDate() - date.getDay());

  return getDateOnly(nextDate);
};

export const getWeekEnd = (date: Date) => addDays(getWeekStart(date), 6);

export const isWeekend = (date: Date) =>
  date.getDay() === 0 || date.getDay() === 6;

export const clampHour = (hour: number) =>
  Math.min(23, Math.max(0, Math.floor(hour)));
