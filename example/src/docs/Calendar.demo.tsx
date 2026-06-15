import { useState, type CSSProperties } from "react";
import {
  Calendar,
  ScheduleCalendar,
  type CalendarCellContext,
  type CalendarMarker,
  type ScheduleCalendarEvent,
  type CalendarValue,
} from "willa/Calendar";
import { Badge } from "willa/Badge";
import "willa/Calendar.css";
import "willa/Badge.css";

import { defineDoc } from "#example/catalog/defineDoc";

const demoFrameStyle: CSSProperties = {
  display: "grid",
  justifyItems: "center",
};

const panelStyle: CSSProperties = {
  width: "min(100%, 42rem)",
  border: "1px solid var(--willa-border)",
  borderRadius: "0.86rem",
  padding: "1rem",
};

const rowStyle: CSSProperties = {
  display: "grid",
  gap: "0.82rem",
  justifyItems: "center",
};

const calendarMarkers: Array<CalendarMarker> = [
  {
    value: "2026-06-16",
    endValue: "2026-06-18",
    label: "发布窗口",
    tone: "success",
  },
  {
    value: "2026-06-19",
    endValue: "2026-06-21",
    label: "端午假期",
    tone: "warning",
  },
  { value: "2026-06-24", label: "维护", tone: "info" },
];

const scheduleEvents: Array<ScheduleCalendarEvent> = [
  {
    id: "standup",
    title: "产品站会",
    start: "2026-06-16 09:30",
    end: "2026-06-16 10:00",
    tone: "info",
    meta: "30 分钟",
  },
  {
    id: "review",
    title: "发布评审",
    start: "2026-06-18 14:00",
    end: "2026-06-18 15:30",
    tone: "success",
    meta: "组件和文档",
  },
  {
    id: "holiday",
    title: "端午排期冻结",
    start: "2026-06-19 11:00",
    end: "2026-06-19 12:00",
    tone: "warning",
    meta: "发布窗口",
  },
  {
    id: "risk-review",
    title: "风险复核",
    start: "2026-06-18 14:30",
    end: "2026-06-18 15:30",
    tone: "warning",
    meta: "并行评审",
  },
];

const allDayScheduleEvents: Array<ScheduleCalendarEvent> = [
  {
    id: "freeze",
    title: "发布冻结",
    start: "2026-06-19",
    end: "2026-06-20",
    tone: "warning",
  },
];

const customCellMeta: Record<
  string,
  { count: number; label: string; tone: "info" | "success" | "warning" }
> = {
  "2026-06-16": { count: 4, label: "发布", tone: "success" },
  "2026-06-19": { count: 2, label: "风险", tone: "warning" },
  "2026-06-24": { count: 3, label: "维护", tone: "info" },
};

const CalendarPreview = () => {
  const [value, setValue] = useState<CalendarValue>("2026-06-19");

  return (
    <div style={demoFrameStyle}>
      <div style={panelStyle}>
        <Calendar
          mode="day"
          value={value}
          markers={calendarMarkers}
          getMarker={(dateValue, context) => {
            if (!context.date) return null;
            if (context.date.getDay() === 1) {
              return { value: dateValue, label: "周会", tone: "neutral" };
            }

            return null;
          }}
          onValueChange={setValue}
        />
      </div>
    </div>
  );
};

const ControlledVisibleCalendar = () => {
  const [visibleDate, setVisibleDate] = useState(new Date(2026, 5, 1));

  return (
    <div style={rowStyle}>
      <Badge tone="info">
        当前面板：{visibleDate.getFullYear()} 年 {visibleDate.getMonth() + 1} 月
      </Badge>
      <div style={panelStyle}>
        <Calendar
          mode="day"
          visibleDate={visibleDate}
          onVisibleDateChange={setVisibleDate}
        />
      </div>
    </div>
  );
};

const renderBusinessCell = (context: CalendarCellContext) => {
  const meta = customCellMeta[context.value];

  return (
    <>
      <span className="willa-calendar-day-label">{context.label}</span>
      {meta ? (
        <span
          style={{
            display: "inline-flex",
            maxWidth: "100%",
            alignItems: "center",
            gap: "0.24rem",
            borderRadius: "999px",
            background:
              meta.tone === "success"
                ? "var(--willa-calendar-marker-success-bg)"
                : meta.tone === "warning"
                  ? "var(--willa-calendar-marker-warning-bg)"
                  : "var(--willa-calendar-marker-bg)",
            color:
              meta.tone === "success"
                ? "var(--willa-calendar-marker-success-text)"
                : meta.tone === "warning"
                  ? "var(--willa-calendar-marker-warning-text)"
                  : "var(--willa-calendar-marker-text)",
            fontSize: "0.68rem",
            fontWeight: 720,
            lineHeight: 1,
            padding: "0.22rem 0.42rem",
          }}
        >
          {meta.label} {meta.count}
        </span>
      ) : null}
    </>
  );
};

export default defineDoc({
  id: "calendar",
  name: "Calendar",
  category: "form",
  packageName: "willa/Calendar",
  description: "用于展示日期网格、范围选择、日期标记和禁用规则。",
  imports: [
    { name: "Calendar", from: "willa/Calendar" },
    { name: "ScheduleCalendar", from: "willa/Calendar" },
  ],
  css: "willa/Calendar.css",
  demo: {
    name: "CalendarPreview",
    component: CalendarPreview,
  },
  code: `
    import { useState } from "react";
    import {
      Calendar,
      type CalendarMarker,
      type CalendarValue,
    } from "willa/Calendar";
    import "willa/Calendar.css";

    const markers: Array<CalendarMarker> = [
      {
        value: "2026-06-16",
        endValue: "2026-06-18",
        label: "发布窗口",
        tone: "success",
      },
      {
        value: "2026-06-19",
        endValue: "2026-06-21",
        label: "端午假期",
        tone: "warning",
      },
      { value: "2026-06-24", label: "维护", tone: "info" },
    ];

    const Demo = () => {
      const [value, setValue] = useState<CalendarValue>("2026-06-19");

      return (
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar
            value={value}
            markers={markers}
            getMarker={(dateValue, context) => {
              if (!context.date) return null;
              if (context.date.getDay() === 1) {
                return { value: dateValue, label: "周会", tone: "neutral" };
              }

              return null;
            }}
            onValueChange={setValue}
          />
        </div>
      );
    };
  `,
  sections: [
    {
      title: "范围选择",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar
            range
            defaultValue={{ start: "2026-06-10", end: "2026-06-18" }}
          />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar
              mode="day"
              range
              defaultValue={{ start: "2026-06-10", end: "2026-06-18" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "日期粒度",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar mode="day" defaultValue="2026-06-19" />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar mode="day" defaultValue="2026-06-19" />
          </div>
        </div>
      ),
    },
    {
      title: "周粒度",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar mode="week" defaultValue="2026-06-07" />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar mode="week" defaultValue="2026-06-07" />
          </div>
        </div>
      ),
    },
    {
      title: "周序号与周一开始",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar
            showWeekNumber
            firstDayOfWeek={1}
            defaultValue="2026-06-19"
          />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar
              showWeekNumber
              firstDayOfWeek={1}
              defaultValue="2026-06-19"
            />
          </div>
        </div>
      ),
    },
    {
      title: "自定义格子",
      code: `
        import { Calendar, type CalendarCellContext } from "willa/Calendar";
        import "willa/Calendar.css";

        const cellMeta = {
          "2026-06-16": { count: 4, label: "发布" },
          "2026-06-19": { count: 2, label: "风险" },
          "2026-06-24": { count: 3, label: "维护" },
        };

        const renderCell = (context: CalendarCellContext) => {
          const meta = cellMeta[context.value];

          return (
            <>
              <span className="willa-calendar-day-label">{context.label}</span>
              {meta ? (
                <span style={{ fontSize: "0.68rem", fontWeight: 720 }}>
                  {meta.label} {meta.count}
                </span>
              ) : null}
            </>
          );
        };

        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar renderCell={renderCell} defaultValue="2026-06-19" />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar
              defaultValue="2026-06-19"
              renderCell={renderBusinessCell}
            />
          </div>
        </div>
      ),
    },
    {
      title: "自定义头部",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar
            defaultValue="2026-06-19"
            headerRender={({ title, previous, next }) => (
              <div className="willa-calendar-header">
                <button
                  className="willa-calendar-nav"
                  type="button"
                  aria-label="上一个月"
                  onClick={previous}
                >
                  上
                </button>
                <div className="willa-calendar-title">排期视图 · {title}</div>
                <button
                  className="willa-calendar-nav"
                  type="button"
                  aria-label="下一个月"
                  onClick={next}
                >
                  下
                </button>
              </div>
            )}
          />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar
              defaultValue="2026-06-19"
              headerRender={({ title, previous, next }) => (
                <div className="willa-calendar-header">
                  <button
                    className="willa-calendar-nav"
                    type="button"
                    aria-label="上一个月"
                    onClick={previous}
                  >
                    上
                  </button>
                  <div className="willa-calendar-title">排期视图 · {title}</div>
                  <button
                    className="willa-calendar-nav"
                    type="button"
                    aria-label="下一个月"
                    onClick={next}
                  >
                    下
                  </button>
                </div>
              )}
            />
          </div>
        </div>
      ),
    },
    {
      title: "日程视图切换",
      code: `
        import {
          ScheduleCalendar,
          type ScheduleCalendarEvent,
        } from "willa/Calendar";
        import "willa/Calendar.css";

        const events: Array<ScheduleCalendarEvent> = [
          {
            id: "standup",
            title: "产品站会",
            start: "2026-06-16 09:30",
            end: "2026-06-16 10:00",
            tone: "info",
            meta: "30 分钟",
          },
          {
            id: "review",
            title: "发布评审",
            start: "2026-06-18 14:00",
            end: "2026-06-18 15:30",
            tone: "success",
            meta: "组件和文档",
          },
          {
            id: "risk-review",
            title: "风险复核",
            start: "2026-06-18 14:30",
            end: "2026-06-18 15:30",
            tone: "warning",
            meta: "并行评审",
          },
        ];

        const allDayEvents: Array<ScheduleCalendarEvent> = [
          {
            id: "freeze",
            title: "发布冻结",
            start: "2026-06-19",
            end: "2026-06-20",
            tone: "warning",
          },
        ];

        <ScheduleCalendar
          defaultVisibleDate={new Date(2026, 5, 16)}
          defaultView="week"
          slotMinutes={30}
          startHour={8}
          endHour={18}
          events={events}
          allDayEvents={allDayEvents}
          renderEvent={(event) => (
            <>
              <strong>{event.title}</strong>
              {event.meta ? <span>{event.meta}</span> : null}
            </>
          )}
        />;
      `,
      content: (
        <div style={demoFrameStyle}>
          <ScheduleCalendar
            defaultVisibleDate={new Date(2026, 5, 16)}
            defaultView="week"
            slotMinutes={30}
            startHour={8}
            endHour={18}
            events={scheduleEvents}
            allDayEvents={allDayScheduleEvents}
            renderEvent={(event) => (
              <>
                <strong>{event.title}</strong>
                {event.meta ? <span>{event.meta}</span> : null}
              </>
            )}
          />
        </div>
      ),
    },
    {
      title: "月份粒度",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar mode="month" defaultValue="2026-06" />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar mode="month" defaultValue="2026-06" />
          </div>
        </div>
      ),
    },
    {
      title: "年份粒度",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar mode="year" defaultValue="2026" />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar mode="year" defaultValue="2026" />
          </div>
        </div>
      ),
    },
    {
      title: "禁用规则",
      code: `
        <div
          style={{
            width: "min(100%, 42rem)",
            border: "1px solid var(--willa-border)",
            borderRadius: "0.72rem",
            padding: "0.8rem",
          }}
        >
          <Calendar
            min="2026-06-08"
            max="2026-06-26"
            disabledDate={(value) => {
              const day = new Date(\`\${value}T00:00:00\`).getDay();

              return day === 0 || day === 6;
            }}
          />
        </div>;
      `,
      content: (
        <div style={demoFrameStyle}>
          <div style={panelStyle}>
            <Calendar
              mode="day"
              min="2026-06-08"
              max="2026-06-26"
              disabledDate={(value) => {
                const day = new Date(`${value}T00:00:00`).getDay();

                return day === 0 || day === 6;
              }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "可控月份",
      code: `
        const [visibleDate, setVisibleDate] = useState(new Date(2026, 5, 1));

        <div style={{ display: "grid", gap: "0.82rem", justifyItems: "center" }}>
          <Badge tone="info">
            当前面板：{visibleDate.getFullYear()} 年 {visibleDate.getMonth() + 1} 月
          </Badge>
          <div
            style={{
              width: "min(100%, 42rem)",
              border: "1px solid var(--willa-border)",
              borderRadius: "0.72rem",
              padding: "0.8rem",
            }}
          >
            <Calendar
              visibleDate={visibleDate}
              onVisibleDateChange={setVisibleDate}
            />
          </div>
        </div>;
      `,
      content: <ControlledVisibleCalendar />,
    },
  ],
  props: [
    {
      name: "width",
      type: "CSSProperties['width']",
      group: "Calendar",
      description: "自定义宽度；设置为 100% 时占满父容器。",
    },
    {
      name: "mode",
      type: '"year" | "month" | "week" | "day"',
      defaultValue: '"day"',
      group: "Calendar",
      description: "日期网格的选择粒度；默认按日期选择。",
    },
    {
      name: "range",
      type: "boolean",
      defaultValue: "false",
      group: "Calendar",
      description: "开启范围选择。",
    },
    {
      name: "showWeekNumber",
      type: "boolean",
      defaultValue: "false",
      group: "Calendar",
      description: "在日期网格左侧展示周序号。",
    },
    {
      name: "firstDayOfWeek",
      type: "0 | 1",
      defaultValue: "0",
      group: "Calendar",
      description: "设置一周起始日；0 表示周日，1 表示周一。",
    },
    {
      name: "value",
      type: "CalendarValue",
      group: "Calendar",
      description: "受控选择值；范围模式传入 { start, end }。",
    },
    {
      name: "defaultValue",
      type: "CalendarValue",
      defaultValue: '""',
      group: "Calendar",
      description: "非受控默认值。",
    },
    {
      name: "visibleDate",
      type: "Date",
      group: "Calendar",
      description: "受控面板日期，用于控制当前展示的年份或月份。",
    },
    {
      name: "defaultVisibleDate",
      type: "Date",
      group: "Calendar",
      defaultValue: "当前值或今天",
      description: "非受控初始面板日期。",
    },
    {
      name: "onValueChange",
      type: "(value: CalendarValue) => void",
      group: "Calendar",
      description: "选择值变化时触发。",
    },
    {
      name: "onVisibleDateChange",
      type: "(date: Date) => void",
      group: "Calendar",
      description: "面板翻页或切换展示日期时触发。",
    },
    {
      name: "min",
      type: "string",
      group: "Calendar",
      description: "最小可选值，格式随 mode 变化。",
    },
    {
      name: "max",
      type: "string",
      group: "Calendar",
      description: "最大可选值，格式随 mode 变化。",
    },
    {
      name: "markers",
      type: "Array<CalendarMarker>",
      defaultValue: "[]",
      group: "Calendar",
      description:
        "静态日期标记，value 格式随 mode 变化；传入 endValue 时展示为连续日程条。",
    },
    {
      name: "getMarker",
      type: "(value: string, context: CalendarMarkerContext) => CalendarMarker | null | undefined",
      group: "Calendar",
      description: "动态返回日期标记，适合节假日、固定周期和公司日程规则。",
    },
    {
      name: "renderCell",
      type: "(context: CalendarCellContext) => ReactNode",
      group: "Calendar",
      description:
        "自定义日期、周、月份或年份格子的内容；按钮语义和选中态仍由 Calendar 维护。",
    },
    {
      name: "headerRender",
      type: "(context: CalendarHeaderRenderContext) => ReactNode",
      group: "Calendar",
      description: "自定义面板头部，context 提供标题和前后翻页方法。",
    },
    {
      name: "disabledDate",
      type: "(value: string) => boolean",
      group: "Calendar",
      description: "禁用指定值。",
    },
    {
      name: "onSelect",
      type: "(value: string, context: CalendarSelectContext) => void",
      group: "Calendar",
      description: "点击可选格子时触发，context.source 表示当前选择粒度。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      group: "ScheduleCalendar",
      description: "自定义宽度；设置为 100% 时占满父容器。",
    },
    {
      name: "view",
      type: '"week" | "month"',
      group: "ScheduleCalendar",
      description:
        "受控日程视图；week 展示小时网格，month 展示月日程网格。表格式日程在移动端保留横向滚动，避免压缩 7 列后影响阅读和点击。",
    },
    {
      name: "defaultView",
      type: '"week" | "month"',
      group: "ScheduleCalendar",
      defaultValue: '"week"',
      description: "非受控默认日程视图，默认 week。",
    },
    {
      name: "visibleDate",
      type: "Date",
      group: "ScheduleCalendar",
      description: "受控当前展示日期；周视图用于定位周，月视图用于定位月份。",
    },
    {
      name: "defaultVisibleDate",
      type: "Date",
      group: "ScheduleCalendar",
      defaultValue: "今天所在周",
      description: "非受控初始展示日期。",
    },
    {
      name: "onViewChange",
      type: "(view: ScheduleCalendarView) => void",
      group: "ScheduleCalendar",
      description: "日程视图切换时触发。",
    },
    {
      name: "onVisibleDateChange",
      type: "(date: Date) => void",
      group: "ScheduleCalendar",
      description: "日程面板翻页时触发。",
    },
    {
      name: "events",
      type: "Array<ScheduleCalendarEvent>",
      group: "ScheduleCalendar",
      description: "周日程视图的事件块，start 和 end 使用 YYYY-MM-DD HH:mm。",
    },
    {
      name: "allDayEvents",
      type: "Array<ScheduleCalendarEvent>",
      group: "ScheduleCalendar",
      description: "全天事件，start 和 end 可以只传日期。",
    },
    {
      name: "slotMinutes",
      type: "number",
      group: "ScheduleCalendar",
      description: "时间格粒度；默认 60，常用 15、30 或 60。",
    },
    {
      name: "renderEvent",
      type: "(event: ScheduleCalendarEvent, context: ScheduleCalendarEventContext) => ReactNode",
      group: "ScheduleCalendar",
      description: "自定义事件块内容。",
    },
    {
      name: "startHour",
      type: "number",
      group: "ScheduleCalendar",
      description: "日程网格的起始小时，默认 8。",
    },
    {
      name: "endHour",
      type: "number",
      group: "ScheduleCalendar",
      description: "日程网格的结束小时，默认 18。",
    },
    {
      name: "onSlotClick",
      type: "(value: string) => void",
      group: "ScheduleCalendar",
      description: "点击空白小时格时触发，value 为 YYYY-MM-DD HH:mm。",
    },
    {
      name: "onEventClick",
      type: "(event: ScheduleCalendarEvent) => void",
      group: "ScheduleCalendar",
      description: "点击事件块时触发。",
    },
  ],
});
