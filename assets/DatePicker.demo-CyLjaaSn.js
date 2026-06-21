import{a$ as u,aZ as r,aK as v,C as ve,aI as $e,aJ as w,h as q}from"./index-D-LV62RM.js";import{C as Ce}from"./index-OHIjqBy4.js";import{F as Ne,a as Fe}from"./floatingPanelParts-Bt6TCwun.js";import{u as Me}from"./useFloatingPanel-CdeSl92G.js";import{F as Se,a as Re}from"./index-w6AJdqcr.js";import{F as We}from"./index-D1eyKGQa.js";import{F as ze}from"./index-3HA4i46L.js";import{F as Ie}from"./index-BFBFCgKh.js";/* empty css              */import{d as Ae}from"./defineDoc-CMyXJ6JB.js";const o=u.forwardRef((e,t)=>{const{picker:a="calendar",mode:l="month",wheelColumns:i="date",range:s=!1,size:d="md",variant:b="outline",width:P,invalid:D=!1,placeholder:ee,name:A,value:B,defaultValue:te="",min:ae,max:re,markers:le=[],getMarker:ne,disabledDate:ie,onValueChange:C,className:se,disabled:V,style:oe,id:de,onBlur:ce,onClick:N,onKeyDown:F,...j}=e,ue=u.useId(),E=de??ue,M=`${E}-panel`,T=`${M}-label`,L=u.useRef(null),S=u.useRef(null),R=u.useRef(null),[m,y]=u.useState(!1),[me,he]=u.useState(te),f=B??me,p=u.useMemo(()=>Z(i),[i]),pe=u.useCallback(()=>y(!1),[]),{position:fe,updatePosition:K}=Me({open:m,rootRef:L,triggerRef:S,panelRef:R,minWidth:a==="wheel"?qe(p.length):void 0,matchTriggerWidth:a==="wheel",fullWidthBelow:520,fallbackHeight:290,onClose:pe}),O=D||j["aria-invalid"]===!0||j["aria-invalid"]==="true",ye=Ee({width:P,style:oe}),we=_(f,{mode:l,picker:a,range:s,wheelColumns:p})??ee??G({mode:l,picker:a,range:s,wheelColumns:i}),ke=`${G({mode:l,picker:a,range:s,wheelColumns:p})}面板`,ge=n=>{S.current=n,$e(t,n)};u.useEffect(()=>{m&&K()},[m,l,a,p.length,K]),u.useEffect(()=>{var n;!m||a!=="wheel"||(n=R.current)==null||n.querySelectorAll(".willa-date-picker-wheel-option--selected").forEach(c=>{c.scrollIntoView({block:"center"})})},[f,m,a]);const Y=(n,c)=>{B===void 0&&he(n),C==null||C(n),c&&y(!1)},be=n=>{var h;const c=!s||!!((h=X(n))!=null&&h.end);Y(n,c)},De=(n,c)=>{const h=z(f),je=k({...h,[n]:c});Y(Q(je,p),!1)},xe=n=>{if(F==null||F(n),!n.defaultPrevented){if(n.key==="Escape"){y(!1);return}(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),y(c=>!c))}},Pe=n=>{var c;n.key==="Escape"&&(n.stopPropagation(),y(!1),(c=S.current)==null||c.focus())},Ve=m?r.jsx(Ne,{open:m,children:r.jsxs(Fe,{panelRef:R,id:M,className:v("willa-date-picker-panel",`willa-date-picker-panel--${l}`,a==="wheel"&&"willa-date-picker-panel--wheel"),position:fe,role:"dialog",ariaLabelledBy:T,onKeyDown:Pe,children:[r.jsx("span",{id:T,className:"willa-date-picker-panel-label",children:ke}),a==="wheel"?r.jsx("div",{className:"willa-date-picker-wheel",style:{gridTemplateColumns:`repeat(${p.length}, minmax(3.75rem, 1fr))`},children:p.map(n=>{const c=z(f);return r.jsxs("div",{className:"willa-date-picker-wheel-column",children:[r.jsx("div",{className:"willa-date-picker-wheel-label",children:Be[n]}),r.jsx("div",{className:"willa-date-picker-wheel-options",children:_e(n,c).map(h=>r.jsx("button",{className:v("willa-date-picker-wheel-option",h.value===c[n]&&"willa-date-picker-wheel-option--selected"),type:"button",onClick:()=>De(n,h.value),children:h.label},h.value))})]},n)})}):r.jsx(Ce,{className:"willa-date-picker-calendar",mode:l,range:s,value:f,min:ae,max:re,markers:le,getMarker:ne,disabledDate:ie,onValueChange:be})]})}):null;return r.jsxs("span",{ref:L,className:v("willa-date-picker",`willa-date-picker--${d}`,`willa-date-picker--${b}`,m&&"willa-date-picker--open",V&&"willa-date-picker--disabled",O&&"willa-date-picker--invalid",se),style:ye,"aria-disabled":V||void 0,children:[A?r.jsx("input",{type:"hidden",name:A,value:He(f),disabled:V}):null,r.jsxs("button",{...j,ref:ge,id:E,type:"button",className:"willa-date-picker-control",disabled:V,"aria-expanded":m,"aria-controls":m?M:void 0,"aria-haspopup":"dialog","aria-invalid":O||j["aria-invalid"],onBlur:ce,onClick:n=>{N==null||N(n),n.defaultPrevented||y(c=>!c)},onKeyDown:xe,children:[r.jsx("span",{className:v("willa-date-picker-value",!_(f,{mode:l,picker:a,range:s,wheelColumns:p})&&"willa-date-picker-value--placeholder"),children:we}),r.jsx(ve,{className:"willa-date-picker-icon","aria-hidden":"true"})]}),Ve]})});o.displayName="DatePicker";const Be={year:"年",month:"月",day:"日",hour:"时",minute:"分",second:"秒"},Ee=e=>{const{width:t,style:a}=e;return{...a,...t===void 0?void 0:{width:t}}},G=e=>{const{mode:t,picker:a,range:l,wheelColumns:i}=e;if(a==="wheel"){const d=Z(i),b=d.some(D=>["year","month","day"].includes(D)),P=d.some(D=>["hour","minute","second"].includes(D));return b&&P?"选择日期时间":P?"选择时间":"选择日期"}const s={year:"年份",month:"月份",week:"周",day:"日期"};return l?`选择${s[t]}范围`:`选择${s[t]}`},H=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;const[t,a,l]=e.split("-").map(Number),i=new Date(t,a-1,l);return i.getFullYear()!==t||i.getMonth()!==a-1||i.getDate()!==l?null:i},W=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${l}`},Te=e=>{const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),Le(t)},J=e=>{const t=Te(e);return t.setDate(t.getDate()+6),t},Le=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),_=(e,t)=>{const{mode:a,picker:l,range:i,wheelColumns:s}=t;if(l==="wheel")return typeof e=="string"&&e?Ge(e,s):void 0;if(i){const d=X(e);return d!=null&&d.start?Ke(d,a):""}return typeof e=="string"&&e?I(e,a):void 0},Ke=(e,t)=>{const a=Oe(e.start,t),l=e.end?Ye(e.end,t):"";return l?`${a} - ${l}`:`${a} -`},Oe=(e,t)=>t!=="week"?I(e,t):e,Ye=(e,t)=>{if(t!=="week")return I(e,t);const a=H(e);return a?W(J(a)):e},I=(e,t)=>{if(t==="week"){const a=H(e);return a?`${W(a)} - ${W(J(a))}`:e}return e},Z=e=>Array.isArray(e)?e:e==="time"?["hour","minute","second"]:e==="datetime"?["year","month","day","hour","minute","second"]:["year","month","day"],qe=e=>Math.max(244,e*4.25*16),z=e=>{const t=new Date,a={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:0,minute:0,second:0};if(typeof e!="string"||!e)return k(a);const l=e.match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/);if(l)return k({year:Number(l[1]),month:Number(l[2]),day:Number(l[3]),hour:Number(l[4]??a.hour),minute:Number(l[5]??a.minute),second:Number(l[6]??a.second)});const i=e.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(i)return k({...a,hour:Number(i[1]),minute:Number(i[2]),second:Number(i[3]??a.second)});const s=e.match(/^(\d{4})-(\d{2})$/);return k(s?{...a,year:Number(s[1]),month:Number(s[2]),day:1}:a)},k=e=>{const t=w(Math.trunc(e.year),1900,2100),a=w(Math.trunc(e.month),1,12),l=U(t,a);return{year:t,month:a,day:w(Math.trunc(e.day),1,l),hour:w(Math.trunc(e.hour),0,23),minute:w(Math.trunc(e.minute),0,59),second:w(Math.trunc(e.second),0,59)}},Q=(e,t)=>{const a=t.some(d=>["year","month","day"].includes(d)),l=t.some(d=>["hour","minute","second"].includes(d)),i=`${e.year}-${g(e.month)}-${g(e.day)}`,s=`${g(e.hour)}:${g(e.minute)}:${g(e.second)}`;return a&&l?`${i} ${s}`:l?s:i},Ge=(e,t)=>{const a=z(e);return Q(a,t)},_e=(e,t)=>e==="year"?$(1900,2100,""):e==="month"?$(1,12,"月"):e==="day"?$(1,U(t.year,t.month),"日"):$(0,59,"",!0).filter(a=>e==="hour"?a.value<=23:!0),$=(e,t,a,l=!1)=>Array.from({length:t-e+1},(i,s)=>{const d=e+s,b=l?g(d):String(d);return{value:d,label:`${b}${a}`}}),U=(e,t)=>new Date(e,t,0).getDate(),g=e=>String(e).padStart(2,"0"),He=e=>typeof e=="string"?e:e.end?`${e.start},${e.end}`:e.start,X=e=>typeof e=="string"?null:e,x={display:"grid",gap:"0.76rem",maxWidth:"42rem"},Je={display:"grid",gap:"0.76rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},Ze=[{value:"2026-06-16",label:"发布",tone:"success"},{value:"2026-06-19",label:"端午",tone:"warning"},{value:"2026-06-24",label:"维护",tone:"info"}],Qe=()=>{const[e,t]=u.useState({start:"2026-06",end:"2026-09"});return r.jsx(o,{range:!0,value:e,onValueChange:t,width:"100%","aria-label":"选择分析周期"})},ot=Ae({id:"date-picker",name:"DatePicker",category:"form",packageName:"willa/DatePicker",description:"用于选择年份、月份、周、日期及时间范围。",imports:[{name:"DatePicker",from:"willa/DatePicker"}],css:"willa/DatePicker.css",demo:{name:"DatePickerPreview",component:Qe},code:`
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
  `,sections:[{title:"粒度切换",code:`
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
      `,content:r.jsxs("div",{style:Je,children:[r.jsx(o,{mode:"day",defaultValue:"2026-06-10",width:"100%","aria-label":"选择日期"}),r.jsx(o,{mode:"week",defaultValue:"2026-06-07",width:"100%","aria-label":"选择周"}),r.jsx(o,{mode:"month",defaultValue:"2026-06",width:"100%","aria-label":"选择月份"}),r.jsx(o,{mode:"year",defaultValue:"2026",width:"100%","aria-label":"选择年份"})]})},{title:"范围选择",code:`
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
      `,content:r.jsxs("div",{style:x,children:[r.jsx(o,{range:!0,mode:"day",defaultValue:{start:"2026-06-10",end:"2026-06-18"},width:"100%","aria-label":"选择日期范围"}),r.jsx(o,{range:!0,mode:"week",defaultValue:{start:"2026-06-07",end:"2026-06-21"},width:"100%","aria-label":"选择周范围"})]})},{title:"日期标记",code:`
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
      `,content:r.jsx("div",{style:x,children:r.jsx(o,{mode:"day",defaultValue:"2026-06-19",markers:Ze,getMarker:(e,t)=>t.date&&t.date.getDay()===1?{value:e,label:"周会",tone:"neutral"}:null,width:"100%","aria-label":"选择带标记的日期"})})},{title:"滚动选择",code:`
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
      `,content:r.jsxs("div",{style:x,children:[r.jsx(o,{picker:"wheel",wheelColumns:"date",defaultValue:"2026-06-10",width:"100%","aria-label":"滚动选择年月日"}),r.jsx(o,{picker:"wheel",wheelColumns:"time",defaultValue:"09:30:00",width:"100%","aria-label":"滚动选择时分秒"}),r.jsx(o,{picker:"wheel",wheelColumns:"datetime",defaultValue:"2026-06-10 09:30:00",width:"100%","aria-label":"滚动选择日期时间"})]})},{title:"表单内使用",code:`
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
      `,content:r.jsx(Se,{actions:r.jsxs(We,{children:[r.jsx(q,{variant:"ghost",children:"取消"}),r.jsx(q,{type:"submit",children:"保存"})]}),children:r.jsxs(Re,{title:"报表周期",children:[r.jsx(ze,{label:"月份范围",required:!0,children:r.jsx(o,{range:!0,name:"reportRange",defaultValue:{start:"2026-06",end:"2026-09"},width:"100%"})}),r.jsx(Ie,{tone:"info",children:"默认按月份选择，提交值会序列化为 start,end。"})]})})},{title:"范围限制",code:`
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
      `,content:r.jsxs("div",{style:x,children:[r.jsx(o,{defaultValue:"2026-06",min:"2026-04",max:"2026-12",width:"100%"}),r.jsx(o,{mode:"day",placeholder:"仅工作日可选",disabledDate:e=>{const t=new Date(`${e}T00:00:00`).getDay();return t===0||t===6},width:"100%"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>;
      `,content:r.jsxs("div",{style:x,children:[r.jsx(o,{size:"sm",defaultValue:"2026-06"}),r.jsx(o,{size:"md",defaultValue:"2026-06"}),r.jsx(o,{size:"lg",defaultValue:"2026-06"})]})}],props:[{name:"picker",type:'"calendar" | "wheel"',defaultValue:'"calendar"',description:"选择面板类型；默认是日历面板。"},{name:"mode",type:'"year" | "month" | "week" | "day"',defaultValue:'"month"',description:"日历面板的选择粒度；默认按年月选择。"},{name:"wheelColumns",type:'"date" | "time" | "datetime" | Array<DatePickerWheelColumn>',defaultValue:'"date"',description:"滚动选择器展示的列。"},{name:"range",type:"boolean",defaultValue:"false",description:"开启范围选择。"},{name:"value",type:"DatePickerValue",description:"受控值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"DatePickerValue",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: DatePickerValue) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"min",type:"string",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<DatePickerMarker>",defaultValue:"[]",description:"静态日期标记，value 格式随 mode 变化。"},{name:"getMarker",type:"(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定值。"},{name:"placeholder",type:"string",defaultValue:"由 mode 和 range 决定",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"日期选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"日期选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"}]});export{ot as default};
