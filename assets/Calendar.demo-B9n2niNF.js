import{a_ as e,aD as o,b0 as s,B as m}from"./index-Bo8PUlF-.js";import{C as t}from"./index-DFwpr7W3.js";/* empty css              */import{d as u}from"./defineDoc-B4fQnlag.js";const n={display:"grid",justifyItems:"center"},d={width:"min(100%, 42rem)",border:"1px solid var(--willa-border)",borderRadius:"0.86rem",padding:"1rem"},c={display:"grid",gap:"0.82rem",justifyItems:"center"},p={display:"grid",width:"100%",gridTemplateColumns:"2rem minmax(0, 1fr) 2rem",alignItems:"center",gap:"0.4rem"},v={minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},y=[{value:"2026-06-16",endValue:"2026-06-18",label:"发布窗口",tone:"success"},{value:"2026-06-19",label:"风险复核",tone:"warning"},{value:"2026-06-19",label:"假期确认",tone:"info"},{value:"2026-06-24",label:"维护",tone:"info"}],b={"2026-06-16":[{label:"发布窗口",tone:"success"}],"2026-06-19":[{label:"风险复核",tone:"warning"},{label:"假期确认",tone:"info"}],"2026-06-24":[{label:"维护排期",tone:"info"}]},g=()=>{const[a,r]=s.useState("2026-06-19");return e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"day",value:a,markers:y,getMarker:(i,l)=>l.date&&l.date.getDay()===1?{value:i,label:"周会",tone:"neutral"}:null,onValueChange:r})})})},x=()=>{const[a,r]=s.useState(new Date(2026,5,1));return e.jsxs("div",{style:c,children:[e.jsxs(m,{tone:"info",children:["当前面板：",a.getFullYear()," 年 ",a.getMonth()+1," 月"]}),e.jsx("div",{style:d,children:e.jsx(t,{mode:"day",visibleDate:a,onVisibleDateChange:r})})]})},C=a=>{const r=b[a.value]??[],i=r.length>0?r:(a.markers??[]).map(l=>({label:l.label,tone:l.tone??"info"}));return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"willa-calendar-day-label",children:a.label}),e.jsx("span",{style:{display:"grid",maxWidth:"100%",minHeight:"1.08rem",gap:"0.18rem",color:i.length>0?void 0:"transparent",overflow:"hidden",fontSize:"0.7rem",fontWeight:720,lineHeight:1.2,textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.length>0?i.map(l=>e.jsxs("span",{style:{display:"inline-grid",minWidth:0,gridTemplateColumns:"0.45rem minmax(0, 1fr)",alignItems:"center",gap:"0.3rem",color:l.tone==="success"?"var(--willa-calendar-marker-success-text)":l.tone==="warning"?"var(--willa-calendar-marker-warning-text)":l.tone==="neutral"?"var(--willa-calendar-marker-neutral-text)":"var(--willa-calendar-marker-text)",overflow:"hidden"},children:[e.jsx("span",{style:{width:"0.38rem",height:"0.38rem",borderRadius:"999px",background:"currentColor",opacity:.66}}),e.jsx(o,{content:l.label,delay:180,side:"top",children:e.jsx("span",{style:{minWidth:0,overflow:"hidden",textAlign:"left",textOverflow:"ellipsis"},children:l.label})})]},`${a.value}-${String(l.label)}`)):"占位"})]})},V=u({id:"calendar",name:"Calendar",category:"form",packageName:"willa/Calendar",description:"日期选择面板，用于 DatePicker 等输入入口里的日期、周、月份和年份选择。",imports:[{name:"Calendar",from:"willa/Calendar"},{name:"Badge",from:"willa/Badge"},{name:"Tooltip",from:"willa/Tooltip"}],css:"willa/Calendar.css",demo:{name:"CalendarPreview",component:g},code:`
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
      { value: "2026-06-19", label: "风险复核", tone: "warning" },
      { value: "2026-06-19", label: "假期确认", tone: "info" },
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"day",range:!0,defaultValue:{start:"2026-06-10",end:"2026-06-18"}})})})},{title:"日期粒度",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"day",defaultValue:"2026-06-19"})})})},{title:"周粒度",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"week",defaultValue:"2026-06-07"})})})},{title:"周序号与周一开始",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{showWeekNumber:!0,firstDayOfWeek:1,defaultValue:"2026-06-19"})})})},{title:"自定义格子",code:`
        import { Calendar, type CalendarCellContext } from "willa/Calendar";
        import "willa/Calendar.css";

        const cellMeta = {
          "2026-06-16": [{ label: "发布窗口" }],
          "2026-06-19": [{ label: "风险复核" }, { label: "假期确认" }],
          "2026-06-24": [{ label: "维护排期" }],
        };

        const renderCell = (context: CalendarCellContext) => {
          const items = cellMeta[context.value] ?? [];

          return (
            <>
              <span className="willa-calendar-day-label">{context.label}</span>
              <span style={{ display: "grid", gap: "0.18rem" }}>
                {items.map((item) => (
                  <span key={item.label} style={{ fontSize: "0.68rem", fontWeight: 720 }}>
                    {item.label}
                  </span>
                ))}
              </span>
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{defaultValue:"2026-06-19",renderCell:C})})})},{title:"自定义头部",code:`
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
              <div
                style={{
                  display: "grid",
                  width: "100%",
                  gridTemplateColumns: "2rem minmax(0, 1fr) 2rem",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <button
                  className="willa-calendar-nav"
                  type="button"
                  aria-label="上一个月"
                  onClick={previous}
                >
                  ‹
                </button>
                <div
                  className="willa-calendar-title"
                  style={{
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  排期 · {title}
                </div>
                <button
                  className="willa-calendar-nav"
                  type="button"
                  aria-label="下一个月"
                  onClick={next}
                >
                  ›
                </button>
              </div>
            )}
          />
        </div>;
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{defaultValue:"2026-06-19",headerRender:({title:a,previous:r,next:i})=>e.jsxs("div",{style:p,children:[e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":"上一个月",onClick:r,children:"‹"}),e.jsxs("div",{className:"willa-calendar-title",style:v,children:["排期 · ",a]}),e.jsx("button",{className:"willa-calendar-nav",type:"button","aria-label":"下一个月",onClick:i,children:"›"})]})})})})},{title:"月份粒度",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"month",defaultValue:"2026-06"})})})},{title:"年份粒度",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"year",defaultValue:"2026"})})})},{title:"禁用规则",code:`
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
      `,content:e.jsx("div",{style:n,children:e.jsx("div",{style:d,children:e.jsx(t,{mode:"day",min:"2026-06-08",max:"2026-06-26",disabledDate:a=>{const r=new Date(`${a}T00:00:00`).getDay();return r===0||r===6}})})})},{title:"可控月份",code:`
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
      `,content:e.jsx(x,{})}],props:[{name:"width",type:"CSSProperties['width']",group:"Calendar",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"mode",type:'"year" | "month" | "week" | "day"',defaultValue:'"day"',group:"Calendar",description:"日期网格的选择粒度；默认按日期选择。"},{name:"range",type:"boolean",defaultValue:"false",group:"Calendar",description:"开启范围选择。"},{name:"showWeekNumber",type:"boolean",defaultValue:"false",group:"Calendar",description:"在日期网格左侧展示周序号。"},{name:"firstDayOfWeek",type:"0 | 1",defaultValue:"0",group:"Calendar",description:"设置一周起始日；0 表示周日，1 表示周一。"},{name:"value",type:"CalendarValue",group:"Calendar",description:"受控选择值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"CalendarValue",defaultValue:'""',group:"Calendar",description:"非受控默认值。"},{name:"visibleDate",type:"Date",group:"Calendar",description:"受控面板日期，用于控制当前展示的年份或月份。"},{name:"defaultVisibleDate",type:"Date",group:"Calendar",defaultValue:"当前值或今天",description:"非受控初始面板日期。"},{name:"onValueChange",type:"(value: CalendarValue) => void",group:"Calendar",description:"选择值变化时触发。"},{name:"onVisibleDateChange",type:"(date: Date) => void",group:"Calendar",description:"面板翻页或切换展示日期时触发。"},{name:"min",type:"string",group:"Calendar",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",group:"Calendar",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<CalendarMarker>",defaultValue:"[]",group:"Calendar",description:"静态日期标记，value 格式随 mode 变化；传入 endValue 时展示为连续日程条。"},{name:"getMarker",type:"(value: string, context: CalendarMarkerContext) => CalendarMarker | null | undefined",group:"Calendar",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"renderCell",type:"(context: CalendarCellContext) => ReactNode",group:"Calendar",description:"自定义日期、周、月份或年份格子的内容；按钮语义和选中态仍由 Calendar 维护。"},{name:"headerRender",type:"(context: CalendarHeaderRenderContext) => ReactNode",group:"Calendar",description:"自定义面板头部，context 提供标题和前后翻页方法。"},{name:"disabledDate",type:"(value: string) => boolean",group:"Calendar",description:"禁用指定值。"},{name:"onSelect",type:"(value: string, context: CalendarSelectContext) => void",group:"Calendar",description:"点击可选格子时触发，context.source 表示当前选择粒度。"}]});export{V as default};
