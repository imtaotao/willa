import { useState, type CSSProperties } from "react";
import { Button } from "willa/Button";
import {
  DatePicker,
  type DatePickerMarker,
  type DatePickerValue,
} from "willa/DatePicker";
import { Form } from "willa/Form";
import { FormActions } from "willa/FormActions";
import { FormField } from "willa/FormField";
import { FormGroup } from "willa/FormGroup";
import { FormMessage } from "willa/FormMessage";
import "willa/Button.css";
import "willa/DatePicker.css";
import "willa/Form.css";
import "willa/FormActions.css";
import "willa/FormField.css";
import "willa/FormGroup.css";
import "willa/FormMessage.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle: CSSProperties = {
  display: "grid",
  gap: "0.76rem",
  maxWidth: "42rem",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gap: "0.76rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
};

const dateMarkers: Array<DatePickerMarker> = [
  { value: "2026-06-16", label: "发布", tone: "success" },
  { value: "2026-06-19", label: "端午", tone: "warning" },
  { value: "2026-06-24", label: "维护", tone: "info" },
];

const DatePickerPreview = () => {
  const [value, setValue] = useState<DatePickerValue>({
    start: "2026-06",
    end: "2026-09",
  });

  return (
    <DatePicker
      range
      value={value}
      onValueChange={setValue}
      width="100%"
      aria-label="选择分析周期"
    />
  );
};

export default defineDoc({
  id: "date-picker",
  name: "DatePicker",
  category: "form",
  packageName: "willa/DatePicker",
  description: "用于选择年份、月份、周、日期及时间范围。",
  imports: [{ name: "DatePicker", from: "willa/DatePicker" }],
  css: "willa/DatePicker.css",
  demo: {
    name: "DatePickerPreview",
    component: DatePickerPreview,
  },
  code: `
    import { useState } from "react";
    import { DatePicker, type DatePickerValue } from "willa/DatePicker";
    import "willa/DatePicker.css";

    const DatePickerPreview = () => {
      const [value, setValue] = useState<DatePickerValue>({
        start: "2026-06",
        end: "2026-09",
      });

      return (
        <DatePicker
          range
          value={value}
          onValueChange={setValue}
          width="100%"
          aria-label="选择分析周期"
        />
      );
    };
  `,
  sections: [
    {
      title: "粒度切换",
      code: `
        <div style={gridStyle}>
          <DatePicker
            mode="day"
            defaultValue="2026-06-10"
            width="100%"
            aria-label="选择日期"
          />
          <DatePicker
            mode="week"
            defaultValue="2026-06-07"
            width="100%"
            aria-label="选择周"
          />
          <DatePicker
            mode="month"
            defaultValue="2026-06"
            width="100%"
            aria-label="选择月份"
          />
          <DatePicker
            mode="year"
            defaultValue="2026"
            width="100%"
            aria-label="选择年份"
          />
        </div>;
      `,
      content: (
        <div style={gridStyle}>
          <DatePicker
            mode="day"
            defaultValue="2026-06-10"
            width="100%"
            aria-label="选择日期"
          />
          <DatePicker
            mode="week"
            defaultValue="2026-06-07"
            width="100%"
            aria-label="选择周"
          />
          <DatePicker
            mode="month"
            defaultValue="2026-06"
            width="100%"
            aria-label="选择月份"
          />
          <DatePicker
            mode="year"
            defaultValue="2026"
            width="100%"
            aria-label="选择年份"
          />
        </div>
      ),
    },
    {
      title: "范围选择",
      code: `
        <div style={stackStyle}>
          <DatePicker
            range
            mode="day"
            defaultValue={{ start: "2026-06-10", end: "2026-06-18" }}
            width="100%"
            aria-label="选择日期范围"
          />
          <DatePicker
            range
            mode="week"
            defaultValue={{ start: "2026-06-07", end: "2026-06-21" }}
            width="100%"
            aria-label="选择周范围"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <DatePicker
            range
            mode="day"
            defaultValue={{ start: "2026-06-10", end: "2026-06-18" }}
            width="100%"
            aria-label="选择日期范围"
          />
          <DatePicker
            range
            mode="week"
            defaultValue={{ start: "2026-06-07", end: "2026-06-21" }}
            width="100%"
            aria-label="选择周范围"
          />
        </div>
      ),
    },
    {
      title: "日期标记",
      code: `
        const markers: Array<DatePickerMarker> = [
          { value: "2026-06-16", label: "发布", tone: "success" },
          { value: "2026-06-19", label: "端午", tone: "warning" },
          { value: "2026-06-24", label: "维护", tone: "info" },
        ];

        <DatePicker
          mode="day"
          defaultValue="2026-06-19"
          markers={markers}
          getMarker={(value, context) => {
            if (!context.date) return null;
            if (context.date.getDay() === 1) {
              return { value, label: "周会", tone: "neutral" };
            }

            return null;
          }}
          width="100%"
          aria-label="选择带标记的日期"
        />;
      `,
      content: (
        <div style={stackStyle}>
          <DatePicker
            mode="day"
            defaultValue="2026-06-19"
            markers={dateMarkers}
            getMarker={(value, context) => {
              if (!context.date) return null;
              if (context.date.getDay() === 1) {
                return { value, label: "周会", tone: "neutral" };
              }

              return null;
            }}
            width="100%"
            aria-label="选择带标记的日期"
          />
        </div>
      ),
    },
    {
      title: "滚动选择",
      code: `
        <div style={stackStyle}>
          <DatePicker
            picker="wheel"
            wheelColumns="date"
            defaultValue="2026-06-10"
            width="100%"
            aria-label="滚动选择年月日"
          />
          <DatePicker
            picker="wheel"
            wheelColumns="time"
            defaultValue="09:30:00"
            width="100%"
            aria-label="滚动选择时分秒"
          />
          <DatePicker
            picker="wheel"
            wheelColumns="datetime"
            defaultValue="2026-06-10 09:30:00"
            width="100%"
            aria-label="滚动选择日期时间"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <DatePicker
            picker="wheel"
            wheelColumns="date"
            defaultValue="2026-06-10"
            width="100%"
            aria-label="滚动选择年月日"
          />
          <DatePicker
            picker="wheel"
            wheelColumns="time"
            defaultValue="09:30:00"
            width="100%"
            aria-label="滚动选择时分秒"
          />
          <DatePicker
            picker="wheel"
            wheelColumns="datetime"
            defaultValue="2026-06-10 09:30:00"
            width="100%"
            aria-label="滚动选择日期时间"
          />
        </div>
      ),
    },
    {
      title: "表单内使用",
      code: `
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup title="报表周期">
            <FormField label="月份范围" required>
              <DatePicker
                range
                name="reportRange"
                defaultValue={{ start: "2026-06", end: "2026-09" }}
                width="100%"
              />
            </FormField>
            <FormMessage tone="info">
              默认按月份选择，提交值会序列化为 start,end。
            </FormMessage>
          </FormGroup>
        </Form>;
      `,
      content: (
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup title="报表周期">
            <FormField label="月份范围" required>
              <DatePicker
                range
                name="reportRange"
                defaultValue={{ start: "2026-06", end: "2026-09" }}
                width="100%"
              />
            </FormField>
            <FormMessage tone="info">
              默认按月份选择，提交值会序列化为 start,end。
            </FormMessage>
          </FormGroup>
        </Form>
      ),
    },
    {
      title: "范围限制",
      code: `
        <div style={stackStyle}>
          <DatePicker
            defaultValue="2026-06"
            min="2026-04"
            max="2026-12"
            width="100%"
          />
          <DatePicker
            mode="day"
            placeholder="仅工作日可选"
            disabledDate={(value) => {
              const day = new Date(\`\${value}T00:00:00\`).getDay();

              return day === 0 || day === 6;
            }}
            width="100%"
          />
        </div>
      `,
      content: (
        <div style={stackStyle}>
          <DatePicker
            defaultValue="2026-06"
            min="2026-04"
            max="2026-12"
            width="100%"
          />
          <DatePicker
            mode="day"
            placeholder="仅工作日可选"
            disabledDate={(value) => {
              const day = new Date(`${value}T00:00:00`).getDay();

              return day === 0 || day === 6;
            }}
            width="100%"
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "picker",
      type: '"calendar" | "wheel"',
      description: "选择面板类型；默认是日历面板。",
    },
    {
      name: "mode",
      type: '"year" | "month" | "week" | "day"',
      description: "日历面板的选择粒度；默认按年月选择。",
    },
    {
      name: "wheelColumns",
      type: '"date" | "time" | "datetime" | Array<DatePickerWheelColumn>',
      description: "滚动选择器展示的列。",
    },
    {
      name: "range",
      type: "boolean",
      description: "开启范围选择。",
    },
    {
      name: "value",
      type: "DatePickerValue",
      description: "受控值；范围模式传入 { start, end }。",
    },
    {
      name: "defaultValue",
      type: "DatePickerValue",
      description: "非受控默认值。",
    },
    {
      name: "onValueChange",
      type: "(value: DatePickerValue) => void",
      description: "选择值变化时触发。",
    },
    {
      name: "name",
      type: "string",
      description: "表单提交字段名。",
    },
    {
      name: "min",
      type: "string",
      description: "最小可选值，格式随 mode 变化。",
    },
    {
      name: "max",
      type: "string",
      description: "最大可选值，格式随 mode 变化。",
    },
    {
      name: "markers",
      type: "Array<DatePickerMarker>",
      description: "静态日期标记，value 格式随 mode 变化。",
    },
    {
      name: "getMarker",
      type: "(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined",
      description: "动态返回日期标记，适合节假日、固定周期和公司日程规则。",
    },
    {
      name: "disabledDate",
      type: "(value: string) => boolean",
      description: "禁用指定值。",
    },
    {
      name: "placeholder",
      type: "string",
      description: "未选择时展示的占位文本。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "日期选择器尺寸。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      description: "日期选择器视觉类型。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义宽度；设置为 100% 时占满父容器。",
    },
    {
      name: "invalid",
      type: "boolean",
      description: "展示错误状态。",
    },
  ],
});
