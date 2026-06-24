import { useState, type CSSProperties } from "react";
import {
  TimePicker,
  type TimePickerDisabledTime,
  type TimePickerPreset,
  type TimePickerWheelColumn,
} from "willa/TimePicker";
import "willa/TimePicker.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle: CSSProperties = {
  display: "grid",
  gap: "0.76rem",
  maxWidth: "42rem",
};

const timeColumns: Array<TimePickerWheelColumn> = ["hour", "minute"];
const timeWithSeconds: Array<TimePickerWheelColumn> = [
  "hour",
  "minute",
  "second",
];
const presets: Array<TimePickerPreset> = [
  { label: "08:30", value: "08:30:00" },
  { label: "12:00", value: "12:00:00" },
  { label: "18:30", value: "18:30:00" },
];
const disabledTime: TimePickerDisabledTime = {
  disabledHours: () => [0, 1, 2, 3, 4, 5],
  disabledMinutes: (hour) => (hour === 9 ? [0, 1, 2, 3, 4, 5] : []),
  disabledSeconds: (hour, minute) =>
    hour === 9 && minute === 30 ? [0, 1, 2, 3, 4] : [],
};

const TimePickerPreview = () => {
  const [value, setValue] = useState("09:30:00");

  return (
    <TimePicker
      value={value}
      onValueChange={setValue}
      width="100%"
      aria-label="选择时间"
    />
  );
};

const TimePickerConfirmPreview = () => {
  const [value, setValue] = useState("09:30:00");

  return (
    <TimePicker
      value={value}
      onValueChange={setValue}
      needConfirm
      showNow
      allowClear
      use12Hours
      format="hh:mm A"
      width="100%"
      aria-label="选择时间"
    />
  );
};

export default defineDoc({
  id: "time-picker",
  name: "TimePicker",
  category: "form",
  packageName: "willa/TimePicker",
  description: "用于选择时间点、时分秒和调度时间。",
  imports: [{ name: "TimePicker", from: "willa/TimePicker" }],
  css: "willa/TimePicker.css",
  demo: {
    name: "TimePickerPreview",
    component: TimePickerPreview,
  },
  code: `
    import { useState } from "react";
    import { TimePicker } from "willa/TimePicker";
    import "willa/TimePicker.css";

    const TimePickerPreview = () => {
      const [value, setValue] = useState("09:30:00");

      return (
        <TimePicker
          value={value}
          onValueChange={setValue}
          width="100%"
          aria-label="选择时间"
        />
      );
    };
  `,
  sections: [
    {
      title: "基础用法",
      code: `
        <TimePicker defaultValue="09:30:00" width="100%" aria-label="选择时间" />;
      `,
      content: (
        <TimePicker
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />
      ),
    },
    {
      title: "列配置",
      code: `
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute"]}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时分"
          />
          <TimePicker
            wheelColumns={["minute", "second"]}
            defaultValue="09:30:45"
            width="100%"
            aria-label="选择分秒"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={timeColumns}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时分"
          />
          <TimePicker
            wheelColumns={["minute", "second"]}
            defaultValue="09:30:45"
            width="100%"
            aria-label="选择分秒"
          />
        </div>
      ),
    },
    {
      title: "12 小时制",
      code: `
        <TimePicker
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,
      content: (
        <TimePicker
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />
      ),
    },
    {
      title: "步进与禁用",
      code: `
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            hourStep={2}
            minuteStep={15}
            secondStep={10}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            wheelColumns={["hour", "minute"]}
            disabledTime={disabledTime}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={timeWithSeconds}
            hourStep={2}
            minuteStep={15}
            secondStep={10}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            wheelColumns={timeColumns}
            disabledTime={disabledTime}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>
      ),
    },
    {
      title: "确认模式",
      code: `
        <TimePicker
          needConfirm
          showNow
          allowClear
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,
      content: <TimePickerConfirmPreview />,
    },
    {
      title: "滚动条",
      code: `
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            defaultValue="09:30:00"
            width="100%"
            aria-label="隐藏滚动条"
          />
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            showScrollbar
            defaultValue="09:30:00"
            width="100%"
            aria-label="显示滚动条"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={timeWithSeconds}
            defaultValue="09:30:00"
            width="100%"
            aria-label="隐藏滚动条"
          />
          <TimePicker
            wheelColumns={timeWithSeconds}
            showScrollbar
            defaultValue="09:30:00"
            width="100%"
            aria-label="显示滚动条"
          />
        </div>
      ),
    },
    {
      title: "快捷预设",
      code: `
        <TimePicker
          presets={[
            { label: "08:30", value: "08:30:00" },
            { label: "12:00", value: "12:00:00" },
            { label: "18:30", value: "18:30:00" },
          ]}
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,
      content: (
        <TimePicker
          presets={presets}
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />
      ),
    },
    {
      title: "视觉类型",
      code: `
        <div style={stackStyle}>
          <TimePicker
            variant="outline"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            variant="soft"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <TimePicker
            variant="outline"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            variant="soft"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={stackStyle}>
          <TimePicker size="sm" defaultValue="09:30:00" />
          <TimePicker size="md" defaultValue="09:30:00" />
          <TimePicker size="lg" defaultValue="09:30:00" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <TimePicker size="sm" defaultValue="09:30:00" />
          <TimePicker size="md" defaultValue="09:30:00" />
          <TimePicker size="lg" defaultValue="09:30:00" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "wheelColumns",
      type: '"time" | Array<TimePickerWheelColumn>',
      defaultValue: '"time"',
      description: "滚动选择器展示的列。",
    },
    {
      name: "allowClear",
      type: "boolean",
      defaultValue: "false",
      description: "展示清除操作。",
    },
    {
      name: "disabledTime",
      type: "TimePickerDisabledTime",
      description: "按小时、分钟、秒禁用选项。",
    },
    {
      name: "format",
      type: "string",
      description: "输入框显示格式，支持 HH / hh / mm / ss / A / a。",
    },
    {
      name: "hourStep",
      type: "number",
      defaultValue: "1",
      description: "小时列步进。",
    },
    {
      name: "minuteStep",
      type: "number",
      defaultValue: "1",
      description: "分钟列步进。",
    },
    {
      name: "needConfirm",
      type: "boolean",
      defaultValue: "false",
      description: "开启确认模式，选择后先保留草稿，确认后提交。",
    },
    {
      name: "presets",
      type: "Array<TimePickerPreset>",
      description: "快捷时间预设。",
    },
    {
      name: "secondStep",
      type: "number",
      defaultValue: "1",
      description: "秒列步进。",
    },
    {
      name: "showNow",
      type: "boolean",
      defaultValue: "false",
      description: "展示当前时间快捷操作。",
    },
    {
      name: "showScrollbar",
      type: "boolean",
      defaultValue: "false",
      description: "是否显示滚动条和右侧预留。",
    },
    {
      name: "value",
      type: "string",
      description: "受控值，格式为 HH:mm 或 HH:mm:ss。",
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: '""',
      description: "非受控默认值。",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "选择值变化时触发。",
    },
    {
      name: "name",
      type: "string",
      description: "表单提交字段名。",
    },
    {
      name: "placeholder",
      type: "string",
      description: "未选择时展示的占位文本。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "时间选择器尺寸。",
    },
    {
      name: "use12Hours",
      type: "boolean",
      defaultValue: "false",
      description: "使用 12 小时制并显示上午 / 下午。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      defaultValue: '"outline"',
      description: "时间选择器视觉类型。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义宽度；设置为 100% 时占满父容器。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      description: "展示错误状态。",
    },
    {
      name: "ref",
      type: "Ref<HTMLButtonElement>",
      description: "透传 ref。",
    },
  ],
});
