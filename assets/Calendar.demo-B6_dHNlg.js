import{an as C,al as e,i as le,ac as j,j as re,B as se}from"./index-CQ5SwHlJ.js";import{h as S,g as de,f,i as I,e as ie,b as Y,a as oe,c as N,d as ce,p as ue,C as y}from"./index-Dbm68L5D.js";import{d as me}from"./defineDoc-BYfb4gho.js";const T=C.forwardRef((a,t)=>{const{width:s,view:n,defaultView:l="week",visibleDate:d,defaultVisibleDate:i,startHour:c=8,endHour:u=18,slotMinutes:o=60,events:r=[],allDayEvents:m=[],renderEvent:h,onVisibleDateChange:k,onViewChange:M,onSlotClick:$,onEventClick:H,className:z,style:O,...K}=a,[_,q]=C.useState(()=>S(i??new Date)),[G,J]=C.useState(l),g=d??_,b=n??G,Q=C.useMemo(()=>ye(g),[g]),U=C.useMemo(()=>we(g),[g]),X=C.useMemo(()=>ge(c,u,o),[u,o,c]),Z=C.useMemo(()=>ke(r),[r]),ee=de({width:s,style:O}),ae=p=>{d===void 0&&q(p),k==null||k(p)},te=p=>{n===void 0&&J(p),M==null||M(p)},W=p=>{ae(b==="month"?be(g,p):oe(g,p*7))},ne=b==="month"?xe(g):Ce(g);return e.jsxs("div",{...K,ref:t,className:j("willa-schedule-calendar",z),style:ee,children:[e.jsxs("div",{className:"willa-calendar-header willa-schedule-calendar-header",children:[e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":b==="month"?"上一月":"上一周",onClick:()=>W(-1),children:e.jsx(le,{})}),e.jsx("div",{className:"willa-calendar-title",children:ne}),e.jsx("div",{className:"willa-schedule-calendar-view-switch",children:["week","month"].map(p=>e.jsx("button",{className:j("willa-schedule-calendar-view-button",b===p&&"willa-schedule-calendar-view-button--active"),type:"button","aria-pressed":b===p,onClick:()=>te(p),children:p==="week"?"周":"月"},p))}),e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":b==="month"?"下一月":"下一周",onClick:()=>W(1),children:e.jsx(re,{})})]}),b==="month"?e.jsx(pe,{allDayEvents:m,days:U,events:r,renderEvent:h,visibleDate:g,onEventClick:H,onSlotClick:$}):e.jsx(he,{allDayEvents:m,eventLayouts:Z,events:r,renderEvent:h,slots:X,slotMinutes:L(o),weekDays:Q,onEventClick:H,onSlotClick:$})]})});T.displayName="ScheduleCalendar";const he=a=>{const{allDayEvents:t,eventLayouts:s,events:n,renderEvent:l,slots:d,slotMinutes:i,weekDays:c,onEventClick:u,onSlotClick:o}=a;return e.jsxs("div",{className:"willa-schedule-calendar-grid",children:[e.jsx("div",{className:"willa-schedule-calendar-axis","aria-hidden":"true"}),c.map(r=>e.jsxs("div",{className:j("willa-schedule-calendar-day-heading",r.weekend&&"willa-schedule-calendar-day-heading--weekend",r.today&&"willa-schedule-calendar-day-heading--today"),children:[e.jsx("span",{children:F[r.date.getDay()]}),e.jsx("strong",{children:r.date.getDate()})]},r.value)),e.jsx("div",{className:"willa-schedule-calendar-all-day-label",children:"全天"}),c.map(r=>e.jsx(B,{className:"willa-schedule-calendar-all-day-cell",value:r.value,onSlotClick:o,children:t.filter(m=>P(m,r.value)).map(m=>e.jsx(R,{allDay:!0,dateValue:r.value,event:m,renderEvent:l,onEventClick:u},m.id))},`${r.value}-all-day`)),d.map(r=>e.jsx(ve,{eventLayouts:s,events:n,renderEvent:l,slot:r,slotMinutes:i,weekDays:c,onEventClick:u,onSlotClick:o},`${r.hour}-${r.minute}`))]})},pe=a=>{const{allDayEvents:t,days:s,events:n,renderEvent:l,visibleDate:d,onEventClick:i,onSlotClick:c}=a,u=[...t,...n];return e.jsxs("div",{className:"willa-schedule-calendar-month",children:[F.map((o,r)=>e.jsx("div",{className:j("willa-schedule-calendar-month-heading",(r===0||r===6)&&"willa-schedule-calendar-month-heading--weekend"),children:o},o)),s.map(o=>{const r=u.filter(m=>P(m,o.value));return e.jsxs(B,{className:j("willa-schedule-calendar-month-cell",!o.currentMonth&&"willa-schedule-calendar-month-cell--muted",o.weekend&&"willa-schedule-calendar-month-cell--weekend",o.today&&"willa-schedule-calendar-month-cell--today"),value:o.value,onSlotClick:c,children:[e.jsx("span",{className:"willa-schedule-calendar-month-date",children:o.date.getMonth()===d.getMonth()?o.date.getDate():Y(o.date)}),e.jsxs("div",{className:"willa-schedule-calendar-month-events",children:[r.slice(0,3).map(m=>e.jsx(R,{allDay:!0,dateValue:o.value,event:m,renderEvent:l,onEventClick:i},m.id)),r.length>3?e.jsxs("span",{className:"willa-schedule-calendar-month-more",children:["还有 ",r.length-3," 项"]}):null]})]},o.value)})]})},B=a=>{const{children:t,className:s,value:n,onSlotClick:l}=a;return e.jsx("div",{className:s,role:"button",tabIndex:0,onClick:()=>l==null?void 0:l(n),onKeyDown:d=>{d.key!=="Enter"&&d.key!==" "||(d.preventDefault(),l==null||l(n))},children:t})},ve=a=>{const{eventLayouts:t,events:s,renderEvent:n,slot:l,slotMinutes:d,weekDays:i,onEventClick:c,onSlotClick:u}=a;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"willa-schedule-calendar-hour",children:l.minute===0?fe(l.hour):null}),i.map(o=>{const r=`${o.value} ${De(l)}`,m=s.filter(h=>je(h,o.value,l,d));return e.jsx("div",{className:"willa-schedule-calendar-slot",role:"button",tabIndex:0,onClick:()=>u==null?void 0:u(r),onKeyDown:h=>{h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),u==null||u(r))},children:m.map(h=>e.jsx(R,{dateValue:o.value,event:h,layout:t.get(h.id),renderEvent:n,style:Se(h,l,d),onEventClick:c},h.id))},`${o.value}-${l.hour}-${l.minute}`)})]})},R=a=>{const{allDay:t=!1,dateValue:s,event:n,layout:l,renderEvent:d,style:i,onEventClick:c}=a,u=Ve(i,l),o=(d==null?void 0:d(n,{allDay:t,dateValue:s}))??e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"willa-schedule-calendar-event-title",children:n.title}),n.meta?e.jsx("span",{className:"willa-schedule-calendar-event-meta",children:n.meta}):null]});return e.jsx("span",{className:j("willa-schedule-calendar-event",t&&"willa-schedule-calendar-event--all-day",`willa-schedule-calendar-event--${n.tone??"info"}`),style:u,role:"button",tabIndex:0,onClick:r=>{r.stopPropagation(),c==null||c(n)},onKeyDown:r=>{r.key!=="Enter"&&r.key!==" "||(r.preventDefault(),r.stopPropagation(),c==null||c(n))},children:o})},F=["日","一","二","三","四","五","六"],ye=a=>{const t=S(a),s=[],n=f(new Date);for(let l=0;l<7;l+=1){const d=new Date(t);s.push({date:d,value:f(d),weekend:I(d),today:f(d)===n}),t.setDate(t.getDate()+1)}return s},we=a=>{const t=new Date(a.getFullYear(),a.getMonth(),1),s=S(t),n=[],l=f(new Date);for(let d=0;d<42;d+=1){const i=new Date(s);n.push({date:i,value:f(i),weekend:I(i),today:f(i)===l,currentMonth:i.getMonth()===a.getMonth()}),s.setDate(s.getDate()+1)}return n},ge=(a,t,s)=>{const n=N(a),l=Math.max(n+1,N(t)),d=L(s),i=[];for(let c=n*60;c<l*60;c+=d)i.push({hour:Math.floor(c/60),minute:c%60});return i},Ce=a=>{const t=S(a),s=ie(a);return`${f(t)} - ${Y(s)}`},xe=a=>`${a.getFullYear()} 年 ${a.getMonth()+1} 月`,be=(a,t)=>ce(new Date(a.getFullYear(),a.getMonth()+t,1)),fe=a=>`${String(a).padStart(2,"0")}:00`,L=a=>{const t=Math.floor(a);return t<=0||60%t!==0?60:Math.min(60,t)},De=a=>`${String(a.hour).padStart(2,"0")}:${String(a.minute).padStart(2,"0")}`,x=a=>{const[t,s="00:00"]=a.trim().split(/\s+/),n=ue(t),[l="0",d="0"]=s.split(":"),i=Number(l),c=Number(d);return!n||Number.isNaN(i)||Number.isNaN(c)?null:{date:n,dateValue:t,hour:N(i),minute:Math.min(59,Math.max(0,c))}},je=(a,t,s,n)=>{const l=x(a.start);if(!l||l.dateValue!==t)return!1;const d=A(s),i=V(l);return i>=d&&i<d+n},P=(a,t)=>{const s=x(a.start),n=x(a.end),l=(s==null?void 0:s.dateValue)??a.start,d=(n==null?void 0:n.dateValue)??a.end;return t>=l&&t<=d},Se=(a,t,s)=>{const n=x(a.start),l=x(a.end),d=n&&l?Math.max(30,(l.hour-n.hour)*60+l.minute-n.minute):60,i=A(t),u=((n?V(n):i)-i)/s*100,o=d/s*100;return{top:`${u}%`,height:`calc(${o}% - 0.3rem)`}},Ve=(a,t)=>{if(!t||t.columns<=1)return a;const s=100/t.columns,n=`calc(${s*t.column}% + 0.42rem)`,l=`calc(${100-s*(t.column+1)}% + 0.42rem)`;return{...a,left:n,right:l}},ke=a=>{const t=new Map;return Me(a).forEach(n=>{const l=[...n].sort((i,c)=>D(i)-D(c)),d=[];l.forEach(i=>{const c=D(i);d.forEach((r,m)=>{r&&E(r)<=c&&(d[m]=null)});const u=d.findIndex(r=>r===null),o=u===-1?d.length:Math.max(0,u);d[o]=i,t.set(i.id,{column:o,columns:d.filter(Boolean).length}),d.forEach(r=>{if(!r||!Ne(r,i))return;const m=t.get(r.id);if(!m)return;const h=Math.max(m.columns,o+1);t.set(r.id,{...m,columns:h}),t.set(i.id,{column:o,columns:h})})})}),t},Me=a=>{const t=new Map;return a.forEach(s=>{const n=x(s.start);if(!n)return;const l=t.get(n.dateValue)??[];l.push(s),t.set(n.dateValue,l)}),t},Ne=(a,t)=>D(a)<E(t)&&E(a)>D(t),D=a=>{const t=x(a.start);return t?V(t):0},E=a=>{const t=x(a.end);return t?V(t):D(a)+60},A=a=>a.hour*60+a.minute,V=a=>a.hour*60+a.minute,v={display:"grid",justifyItems:"center"},w={width:"min(100%, 42rem)",border:"1px solid var(--willa-border)",borderRadius:"0.86rem",padding:"1rem"},Ee={display:"grid",gap:"0.82rem",justifyItems:"center"},Re=[{value:"2026-06-16",endValue:"2026-06-18",label:"发布窗口",tone:"success"},{value:"2026-06-19",endValue:"2026-06-21",label:"端午假期",tone:"warning"},{value:"2026-06-24",label:"维护",tone:"info"}],$e=[{id:"standup",title:"产品站会",start:"2026-06-16 09:30",end:"2026-06-16 10:00",tone:"info",meta:"30 分钟"},{id:"review",title:"发布评审",start:"2026-06-18 14:00",end:"2026-06-18 15:30",tone:"success",meta:"组件和文档"},{id:"holiday",title:"端午排期冻结",start:"2026-06-19 11:00",end:"2026-06-19 12:00",tone:"warning",meta:"发布窗口"},{id:"risk-review",title:"风险复核",start:"2026-06-18 14:30",end:"2026-06-18 15:30",tone:"warning",meta:"并行评审"}],He=[{id:"freeze",title:"发布冻结",start:"2026-06-19",end:"2026-06-20",tone:"warning"}],We={"2026-06-16":{count:4,label:"发布",tone:"success"},"2026-06-19":{count:2,label:"风险",tone:"warning"},"2026-06-24":{count:3,label:"维护",tone:"info"}},Ie=()=>{const[a,t]=C.useState("2026-06-19");return e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"day",value:a,markers:Re,getMarker:(s,n)=>n.date&&n.date.getDay()===1?{value:s,label:"周会",tone:"neutral"}:null,onValueChange:t})})})},Ye=()=>{const[a,t]=C.useState(new Date(2026,5,1));return e.jsxs("div",{style:Ee,children:[e.jsxs(se,{tone:"info",children:["当前面板：",a.getFullYear()," 年 ",a.getMonth()+1," 月"]}),e.jsx("div",{style:w,children:e.jsx(y,{mode:"day",visibleDate:a,onVisibleDateChange:t})})]})},Te=a=>{const t=We[a.value];return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"willa-calendar-day-label",children:a.label}),t?e.jsxs("span",{style:{display:"inline-flex",maxWidth:"100%",alignItems:"center",gap:"0.24rem",borderRadius:"999px",background:t.tone==="success"?"var(--willa-calendar-marker-success-bg)":t.tone==="warning"?"var(--willa-calendar-marker-warning-bg)":"var(--willa-calendar-marker-bg)",color:t.tone==="success"?"var(--willa-calendar-marker-success-text)":t.tone==="warning"?"var(--willa-calendar-marker-warning-text)":"var(--willa-calendar-marker-text)",fontSize:"0.68rem",fontWeight:720,lineHeight:1,padding:"0.22rem 0.42rem"},children:[t.label," ",t.count]}):null]})},Pe=me({id:"calendar",name:"Calendar",category:"form",packageName:"willa/Calendar",description:"用于展示日期网格、范围选择、日期标记和禁用规则。",imports:[{name:"Calendar",from:"willa/Calendar"},{name:"ScheduleCalendar",from:"willa/Calendar"}],css:"willa/Calendar.css",demo:{name:"CalendarPreview",component:Ie},code:`
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
  `,sections:[{title:"范围选择",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"day",range:!0,defaultValue:{start:"2026-06-10",end:"2026-06-18"}})})})},{title:"日期粒度",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"day",defaultValue:"2026-06-19"})})})},{title:"周粒度",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"week",defaultValue:"2026-06-07"})})})},{title:"周序号与周一开始",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{showWeekNumber:!0,firstDayOfWeek:1,defaultValue:"2026-06-19"})})})},{title:"自定义格子",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{defaultValue:"2026-06-19",renderCell:Te})})})},{title:"自定义头部",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{defaultValue:"2026-06-19",headerRender:({title:a,previous:t,next:s})=>e.jsxs("div",{className:"willa-calendar-header",children:[e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":"上一个月",onClick:t,children:"上"}),e.jsxs("div",{className:"willa-calendar-title",children:["排期视图 · ",a]}),e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":"下一个月",onClick:s,children:"下"})]})})})})},{title:"日程视图切换",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx(T,{defaultVisibleDate:new Date(2026,5,16),defaultView:"week",slotMinutes:30,startHour:8,endHour:18,events:$e,allDayEvents:He,renderEvent:a=>e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:a.title}),a.meta?e.jsx("span",{children:a.meta}):null]})})})},{title:"月份粒度",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"month",defaultValue:"2026-06"})})})},{title:"年份粒度",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"year",defaultValue:"2026"})})})},{title:"禁用规则",code:`
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
      `,content:e.jsx("div",{style:v,children:e.jsx("div",{style:w,children:e.jsx(y,{mode:"day",min:"2026-06-08",max:"2026-06-26",disabledDate:a=>{const t=new Date(`${a}T00:00:00`).getDay();return t===0||t===6}})})})},{title:"可控月份",code:`
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
      `,content:e.jsx(Ye,{})}],props:[{name:"width",type:"CSSProperties['width']",group:"Calendar",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"mode",type:'"year" | "month" | "week" | "day"',group:"Calendar",description:"日期网格的选择粒度；默认按日期选择。"},{name:"range",type:"boolean",group:"Calendar",description:"开启范围选择。"},{name:"showWeekNumber",type:"boolean",group:"Calendar",description:"在日期网格左侧展示周序号。"},{name:"firstDayOfWeek",type:"0 | 1",group:"Calendar",description:"设置一周起始日；0 表示周日，1 表示周一。"},{name:"value",type:"CalendarValue",group:"Calendar",description:"受控选择值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"CalendarValue",group:"Calendar",description:"非受控默认值。"},{name:"visibleDate",type:"Date",group:"Calendar",description:"受控面板日期，用于控制当前展示的年份或月份。"},{name:"defaultVisibleDate",type:"Date",group:"Calendar",description:"非受控初始面板日期。"},{name:"onValueChange",type:"(value: CalendarValue) => void",group:"Calendar",description:"选择值变化时触发。"},{name:"onVisibleDateChange",type:"(date: Date) => void",group:"Calendar",description:"面板翻页或切换展示日期时触发。"},{name:"min",type:"string",group:"Calendar",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",group:"Calendar",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<CalendarMarker>",group:"Calendar",description:"静态日期标记，value 格式随 mode 变化；传入 endValue 时展示为连续日程条。"},{name:"getMarker",type:"(value: string, context: CalendarMarkerContext) => CalendarMarker | null | undefined",group:"Calendar",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"renderCell",type:"(context: CalendarCellContext) => ReactNode",group:"Calendar",description:"自定义日期、周、月份或年份格子的内容；按钮语义和选中态仍由 Calendar 维护。"},{name:"headerRender",type:"(context: CalendarHeaderRenderContext) => ReactNode",group:"Calendar",description:"自定义面板头部，context 提供标题和前后翻页方法。"},{name:"disabledDate",type:"(value: string) => boolean",group:"Calendar",description:"禁用指定值。"},{name:"onSelect",type:"(value: string, context: CalendarSelectContext) => void",group:"Calendar",description:"点击可选格子时触发，context.source 表示当前选择粒度。"},{name:"width",type:"CSSProperties['width']",group:"ScheduleCalendar",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"view",type:'"week" | "month"',group:"ScheduleCalendar",description:"受控日程视图；week 展示小时网格，month 展示月日程网格。表格式日程在移动端保留横向滚动，避免压缩 7 列后影响阅读和点击。"},{name:"defaultView",type:'"week" | "month"',group:"ScheduleCalendar",description:"非受控默认日程视图，默认 week。"},{name:"visibleDate",type:"Date",group:"ScheduleCalendar",description:"受控当前展示日期；周视图用于定位周，月视图用于定位月份。"},{name:"defaultVisibleDate",type:"Date",group:"ScheduleCalendar",description:"非受控初始展示日期。"},{name:"onViewChange",type:"(view: ScheduleCalendarView) => void",group:"ScheduleCalendar",description:"日程视图切换时触发。"},{name:"onVisibleDateChange",type:"(date: Date) => void",group:"ScheduleCalendar",description:"日程面板翻页时触发。"},{name:"events",type:"Array<ScheduleCalendarEvent>",group:"ScheduleCalendar",description:"周日程视图的事件块，start 和 end 使用 YYYY-MM-DD HH:mm。"},{name:"allDayEvents",type:"Array<ScheduleCalendarEvent>",group:"ScheduleCalendar",description:"全天事件，start 和 end 可以只传日期。"},{name:"slotMinutes",type:"number",group:"ScheduleCalendar",description:"时间格粒度；默认 60，常用 15、30 或 60。"},{name:"renderEvent",type:"(event: ScheduleCalendarEvent, context: ScheduleCalendarEventContext) => ReactNode",group:"ScheduleCalendar",description:"自定义事件块内容。"},{name:"startHour",type:"number",group:"ScheduleCalendar",description:"日程网格的起始小时，默认 8。"},{name:"endHour",type:"number",group:"ScheduleCalendar",description:"日程网格的结束小时，默认 18。"},{name:"onSlotClick",type:"(value: string) => void",group:"ScheduleCalendar",description:"点击空白小时格时触发，value 为 YYYY-MM-DD HH:mm。"},{name:"onEventClick",type:"(event: ScheduleCalendarEvent) => void",group:"ScheduleCalendar",description:"点击事件块时触发。"}]});export{Pe as default};
