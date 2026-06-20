import{aY as e,B as u,a_ as o}from"./index-DHvN3l_E.js";import{S as n}from"./index-DgDNflA8.js";/* empty css              */import{d as v}from"./defineDoc-BYYK5kYX.js";const m={display:"grid",justifyItems:"center"},s={display:"grid",width:"min(100%, 56rem)",gap:"0.82rem"},i=[{id:"standup",title:"产品站会",start:"2026-06-16 09:30",end:"2026-06-16 10:00",tone:"info",meta:"30 分钟"},{id:"review",title:"发布评审",start:"2026-06-18 14:00",end:"2026-06-18 15:30",tone:"success",meta:"组件和文档"},{id:"holiday",title:"端午排期冻结",start:"2026-06-19 11:00",end:"2026-06-19 12:00",tone:"warning",meta:"发布窗口"},{id:"risk-review",title:"风险复核",start:"2026-06-18 14:30",end:"2026-06-18 15:30",tone:"warning",meta:"并行评审"}],l=[{id:"freeze",title:"发布冻结",start:"2026-06-19",end:"2026-06-20",tone:"warning"}],p=()=>{const[t,a]=o.useState("review");return e.jsx("div",{style:m,children:e.jsx(n,{width:"min(100%, 56rem)",defaultVisibleDate:new Date(2026,5,16),selectedEventId:t,slotMinutes:30,startHour:8,endHour:18,events:i,allDayEvents:l,onEventClick:d=>a(d.id)})})},S=()=>{const[t,a]=o.useState("review"),[d,c]=o.useState("2026-06-17 10:00");return e.jsxs("div",{style:s,children:[e.jsxs(u,{tone:"info",children:["当前选择：",t||d||"未选择"]}),e.jsx(n,{defaultVisibleDate:new Date(2026,5,16),selectedEventId:t,selectedSlot:d,slotMinutes:30,startHour:8,endHour:18,events:i,allDayEvents:l,onEventClick:r=>{a(r.id),c("")},onSlotClick:r=>{a(""),c(r)}})]})},E=v({id:"schedule-calendar",name:"ScheduleCalendar",displayName:"排期日历",category:"form",packageName:"willa/Calendar",description:"排期视图，用于展示周排期、月排期、全天事件和可点击的时间格。",imports:[{name:"ScheduleCalendar",from:"willa/Calendar"},{name:"Badge",from:"willa/Badge"}],css:"willa/Calendar.css",demo:{name:"ScheduleCalendarPreview",component:p},code:`
    import { useState } from "react";
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
    ];

    const Demo = () => {
      const [selectedEventId, setSelectedEventId] = useState("review");

      return (
        <ScheduleCalendar
          width="min(100%, 56rem)"
          defaultVisibleDate={new Date(2026, 5, 16)}
          selectedEventId={selectedEventId}
          slotMinutes={30}
          startHour={8}
          endHour={18}
          events={events}
          onEventClick={(event) => setSelectedEventId(event.id)}
        />
      );
    };
  `,sections:[{title:"周视图和月视图",code:`
        <div style={stackStyle}>
          <ScheduleCalendar
            defaultVisibleDate={new Date(2026, 5, 16)}
            defaultView="week"
            slotMinutes={30}
            startHour={8}
            endHour={18}
            events={scheduleEvents}
            allDayEvents={allDayScheduleEvents}
          />
          <ScheduleCalendar
            defaultVisibleDate={new Date(2026, 5, 16)}
            defaultView="month"
            events={scheduleEvents}
            allDayEvents={allDayScheduleEvents}
          />
        </div>
      `,content:e.jsxs("div",{style:s,children:[e.jsx(n,{defaultVisibleDate:new Date(2026,5,16),defaultView:"week",slotMinutes:30,startHour:8,endHour:18,events:i,allDayEvents:l}),e.jsx(n,{defaultVisibleDate:new Date(2026,5,16),defaultView:"month",events:i,allDayEvents:l})]})},{title:"选中态",code:`
        const [selectedEventId, setSelectedEventId] = useState("review");
        const [selectedSlot, setSelectedSlot] = useState("2026-06-17 10:00");

        <ScheduleCalendar
          defaultVisibleDate={new Date(2026, 5, 16)}
          selectedEventId={selectedEventId}
          selectedSlot={selectedSlot}
          slotMinutes={30}
          startHour={8}
          endHour={18}
          events={scheduleEvents}
          allDayEvents={allDayScheduleEvents}
          onEventClick={(event) => {
            setSelectedEventId(event.id);
            setSelectedSlot("");
          }}
          onSlotClick={(value) => {
            setSelectedEventId("");
            setSelectedSlot(value);
          }}
        />;
      `,content:e.jsx(S,{})},{title:"空态和禁用",code:`
        <ScheduleCalendar
          defaultVisibleDate={new Date(2026, 5, 16)}
          emptyText="当前范围没有排期"
          disabledDate={(value) => {
            const day = new Date(\`\${value}T00:00:00\`).getDay();

            return day === 0 || day === 6;
          }}
          disabledSlot={(value) => value.endsWith("12:00")}
        />;
      `,content:e.jsx("div",{style:s,children:e.jsx(n,{defaultVisibleDate:new Date(2026,5,16),emptyText:"当前范围没有排期",disabledDate:t=>{const a=new Date(`${t}T00:00:00`).getDay();return a===0||a===6},disabledSlot:t=>t.endsWith("12:00")})})},{title:"事件时间语义",code:`
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
          allDayEvents={allDayEvents}
        />;
      `,content:e.jsxs("div",{style:s,children:[e.jsx(u,{tone:"warning",children:"全天事件的 end 是包含结束日；跨天时段事件不拆分展示，建议放入 allDayEvents 或拆成单日时段事件。"}),e.jsx(n,{defaultVisibleDate:new Date(2026,5,16),allDayEvents:l})]})}],props:[{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"view",type:'"week" | "month"',description:"受控排期视图；week 展示小时网格，month 展示月排期网格。"},{name:"defaultView",type:'"week" | "month"',defaultValue:'"week"',description:"非受控默认排期视图。"},{name:"visibleDate",type:"Date",description:"受控当前展示日期；周视图定位周，月视图定位月份。"},{name:"defaultVisibleDate",type:"Date",defaultValue:"今天所在视图",description:"非受控初始展示日期；week 锚定到所在周，month 锚定到所在月。"},{name:"events",type:"Array<ScheduleCalendarEvent>",defaultValue:"[]",description:"时段事件，start 和 end 使用 YYYY-MM-DD HH:mm；跨天时段事件不会拆分展示。"},{name:"allDayEvents",type:"Array<ScheduleCalendarEvent>",defaultValue:"[]",description:"全天或日期区间事件，start 和 end 可以只传日期，end 为包含结束日。"},{name:"selectedEventId",type:"string",description:"当前选中的事件 id。"},{name:"selectedSlot",type:"string",description:"当前选中的空白时间格，格式为 YYYY-MM-DD 或 YYYY-MM-DD HH:mm。"},{name:"emptyText",type:"ReactNode",defaultValue:'"暂无日程"',description:"没有事件时展示的空态内容。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定日期；会影响全天格和月视图日期格。"},{name:"disabledSlot",type:"(value: string) => boolean",description:"禁用指定时段格，value 为 YYYY-MM-DD HH:mm。"},{name:"slotMinutes",type:"number",defaultValue:"60",description:"时间格粒度；常用 15、30 或 60。"},{name:"startHour",type:"number",defaultValue:"8",description:"周排期网格的起始小时。"},{name:"endHour",type:"number",defaultValue:"18",description:"周排期网格的结束小时。"},{name:"renderEvent",type:"(event: ScheduleCalendarEvent, context: ScheduleCalendarEventContext) => ReactNode",description:"自定义事件块内容。"},{name:"onViewChange",type:"(view: ScheduleCalendarView) => void",description:"排期视图切换时触发。"},{name:"onVisibleDateChange",type:"(date: Date) => void",description:"排期面板翻页时触发。"},{name:"onSlotClick",type:"(value: string) => void",description:"点击空白时间格时触发。"},{name:"onEventClick",type:"(event: ScheduleCalendarEvent) => void",description:"点击事件块时触发。"}]});export{E as default};
