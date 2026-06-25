export type TimePickerWheelColumn = "hour" | "minute" | "second";
export type TimePickerWheelColumns = "time" | Array<TimePickerWheelColumn>;

export type TimePickerDisabledTime = {
  disabledHours?: () => Array<number>;
  disabledMinutes?: (hour: number) => Array<number>;
  disabledSeconds?: (hour: number, minute: number) => Array<number>;
};
