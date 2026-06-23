import{a_ as e,B as r,b0 as u}from"./index-B3pVmlUa.js";import{S as a}from"./index-B5h06xZ4.js";/* empty css              */import{d as m}from"./defineDoc-_c-0B-WB.js";const y={display:"grid",justifyItems:"center"},d={display:"grid",width:"min(100%, 56rem)",minWidth:0,gap:"0.82rem"},o={maxWidth:"100%",whiteSpace:"normal",lineHeight:1.5,textAlign:"left"},s=[{id:"standup",title:"产品站会",start:"2026-06-16 09:30",end:"2026-06-16 10:00",tone:"info",meta:"30 分钟"},{id:"review",title:"发布评审",start:"2026-06-18 14:00",end:"2026-06-18 15:30",tone:"success",meta:"组件和文档"},{id:"holiday",title:"端午排期冻结",start:"2026-06-19 11:00",end:"2026-06-19 12:00",tone:"warning",meta:"发布窗口"},{id:"risk-review",title:"风险复核",start:"2026-06-18 14:30",end:"2026-06-18 15:30",tone:"warning",meta:"并行评审"}],l=[{id:"freeze",title:"发布冻结",start:"2026-06-19",end:"2026-06-20",tone:"warning"}],S=()=>{const[t,n]=u.useState("review");return e.jsx("div",{style:y,children:e.jsx(a,{width:"min(100%, 56rem)",defaultVisibleDate:new Date(2026,5,16),selectedEventId:t,slotMinutes:30,startHour:8,endHour:18,events:s,allDayEvents:l,onEventClick:i=>n(i.id)})})},D=()=>{const[t,n]=u.useState("review"),[i,v]=u.useState("2026-06-17 10:00");return e.jsxs("div",{style:d,children:[e.jsxs(r,{tone:"info",style:o,children:["当前选择：",t||i||"未选择"]}),e.jsx(a,{defaultVisibleDate:new Date(2026,5,16),selectedEventId:t,selectedSlot:i,slotMinutes:30,startHour:8,endHour:18,events:s,allDayEvents:l,onEventClick:c=>{n(c.id),v("")},onSlotClick:c=>{n(""),v(c)}})]})},f=m({id:"schedule-calendar",name:"ScheduleCalendar",displayName:"排期日历",category:"form",packageName:"willa/Calendar",description:"排期查看器，用于展示周排期、月排期、全天事件和可点击的时间格；适合查看、选择和触发外部操作，不内置拖拽创建或事件编辑。",imports:[{name:"ScheduleCalendar",from:"willa/Calendar"},{name:"Badge",from:"willa/Badge"}],css:"willa/Calendar.css",demo:{name:"ScheduleCalendarPreview",component:S},code:`
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
  `,sections:[{title:"定位边界",code:`
        <ScheduleCalendar
          width="min(100%, 56rem)"
          defaultVisibleDate={new Date(2026, 5, 16)}
          events={scheduleEvents}
          allDayEvents={allDayScheduleEvents}
        />
      `,content:e.jsxs("div",{style:d,children:[e.jsx(r,{tone:"info",style:o,children:"适合排期查看、事件选择和空白时间格点击；编辑表单、拖拽创建和保存流程由业务侧承接。"}),e.jsx(r,{tone:"warning",style:o,children:"周视图和月视图是桌面优先的信息密度，移动端保留横向浏览，不压缩为完整移动排期工作台。"}),e.jsx(a,{width:"min(100%, 56rem)",defaultVisibleDate:new Date(2026,5,16),events:s,allDayEvents:l})]})},{title:"周视图和月视图",code:`
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
      `,content:e.jsxs("div",{style:d,children:[e.jsx(a,{defaultVisibleDate:new Date(2026,5,16),defaultView:"week",slotMinutes:30,startHour:8,endHour:18,events:s,allDayEvents:l}),e.jsx(a,{defaultVisibleDate:new Date(2026,5,16),defaultView:"month",events:s,allDayEvents:l})]})},{title:"选中态",code:`
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
      `,content:e.jsx(D,{})},{title:"空态和禁用",code:`
        <ScheduleCalendar
          defaultVisibleDate={new Date(2026, 5, 16)}
          emptyText="当前范围没有排期"
          disabledDate={(value) => {
            const day = new Date(\`\${value}T00:00:00\`).getDay();

            return day === 0 || day === 6;
          }}
          disabledSlot={(value) => value.endsWith("12:00")}
        />;
      `,content:e.jsx("div",{style:d,children:e.jsx(a,{defaultVisibleDate:new Date(2026,5,16),emptyText:"当前范围没有排期",disabledDate:t=>{const n=new Date(`${t}T00:00:00`).getDay();return n===0||n===6},disabledSlot:t=>t.endsWith("12:00")})})},{title:"事件时间语义",code:`
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
      `,content:e.jsxs("div",{style:d,children:[e.jsx(r,{tone:"warning",style:o,children:"全天事件的 end 是包含结束日；events 只接收单日时段，跨天或无时间的时段事件会被忽略并提示。"}),e.jsx(a,{defaultVisibleDate:new Date(2026,5,16),allDayEvents:l})]})}],props:[{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"view",type:'"week" | "month"',description:"受控排期视图；week 展示小时网格，month 展示月排期网格。两种视图都是桌面优先布局，移动端保留横向浏览。"},{name:"defaultView",type:'"week" | "month"',defaultValue:'"week"',description:"非受控默认排期视图。"},{name:"visibleDate",type:"Date",description:"受控当前展示日期；周视图定位周，月视图定位月份。"},{name:"defaultVisibleDate",type:"Date",defaultValue:"今天所在视图",description:"非受控初始展示日期；week 锚定到所在周，month 锚定到所在月。"},{name:"events",type:"Array<ScheduleCalendarEvent>",defaultValue:"[]",description:"时段事件，start 和 end 使用 YYYY-MM-DD HH:mm；只按单日时段布局，跨天或无时间的事件会被忽略并提示。"},{name:"allDayEvents",type:"Array<ScheduleCalendarEvent>",defaultValue:"[]",description:"全天或日期区间事件，start 和 end 可以只传日期，end 为包含结束日。跨天排期优先放到这里表达。"},{name:"selectedEventId",type:"string",description:"当前选中的事件 id。"},{name:"selectedSlot",type:"string",description:"当前选中的空白时间格，格式为 YYYY-MM-DD 或 YYYY-MM-DD HH:mm。"},{name:"emptyText",type:"ReactNode",defaultValue:'"暂无日程"',description:"没有事件时展示的空态内容；不内置创建入口。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定日期；会影响全天格和月视图日期格。"},{name:"disabledSlot",type:"(value: string) => boolean",description:"禁用指定时段格，value 为 YYYY-MM-DD HH:mm。"},{name:"slotMinutes",type:"number",defaultValue:"60",description:"时间格粒度；常用 15、30 或 60。"},{name:"startHour",type:"number",defaultValue:"8",description:"周排期网格的起始小时。"},{name:"endHour",type:"number",defaultValue:"18",description:"周排期网格的结束小时。"},{name:"renderEvent",type:"(event: ScheduleCalendarEvent, context: ScheduleCalendarEventContext) => ReactNode",description:"自定义事件块展示内容；编辑表单和保存流程由业务侧处理。"},{name:"onViewChange",type:"(view: ScheduleCalendarView) => void",description:"排期视图切换时触发。"},{name:"onVisibleDateChange",type:"(date: Date) => void",description:"排期面板翻页时触发。"},{name:"onSlotClick",type:"(value: string) => void",description:"点击空白时间格时触发，可用于打开外部创建流程；组件不内置创建交互。"},{name:"onEventClick",type:"(event: ScheduleCalendarEvent) => void",description:"点击事件块时触发，可用于打开外部详情或编辑流程；组件不内置事件编辑。"}]});export{f as default};
