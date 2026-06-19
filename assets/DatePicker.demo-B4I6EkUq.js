import{aQ as u,aP as xe,aO as r,az as C,C as Ve,ax as Pe,ay as y,g as G}from"./index-BXts13Uw.js";import{C as ve}from"./index-BUDZmVYn.js";import{u as je}from"./useFloatingPanel-e6W7Sskk.js";import{F as Ce,a as $e}from"./index-D7c1CO0N.js";import{F as Me}from"./index-DiOqACWe.js";import{F as Ne}from"./index-DMo_4lkA.js";import{F as Fe}from"./index-DgZfqoOD.js";/* empty css              */import{d as Se}from"./defineDoc-Bo3aJZNH.js";const o=u.forwardRef((e,t)=>{const{picker:a="calendar",mode:n="month",wheelColumns:i="date",range:s=!1,size:d="md",variant:g="outline",width:V,invalid:D=!1,placeholder:Z,name:A,value:E,defaultValue:ee="",min:te,max:ae,markers:re=[],getMarker:ne,disabledDate:le,onValueChange:M,className:ie,disabled:P,style:se,id:oe,onBlur:de,onClick:N,onKeyDown:F,...v}=e,ce=u.useId(),B=oe??ce,I=`${B}-panel`,T=u.useRef(null),L=u.useRef(null),S=u.useRef(null),[m,b]=u.useState(!1),[ue,me]=u.useState(ee),f=E??ue,p=u.useMemo(()=>Q(i),[i]),he=u.useCallback(()=>b(!1),[]),{position:j,updatePosition:O}=je({open:m,rootRef:T,triggerRef:L,panelRef:S,minWidth:a==="wheel"?Le(p.length):void 0,matchTriggerWidth:a==="wheel",fullWidthBelow:520,fallbackHeight:290,onClose:he}),Y=D||v["aria-invalid"]===!0||v["aria-invalid"]==="true",fe=We({width:V,style:se}),pe=_(f,{mode:n,picker:a,range:s,wheelColumns:p})??Z??ze({mode:n,picker:a,range:s,wheelColumns:i}),ye=l=>{L.current=l,Pe(t,l)};u.useEffect(()=>{m&&O()},[m,n,a,p.length,O]),u.useEffect(()=>{var l;!m||a!=="wheel"||(l=S.current)==null||l.querySelectorAll(".willa-date-picker-wheel-option--selected").forEach(c=>{c.scrollIntoView({block:"center"})})},[f,m,a]);const q=(l,c)=>{E===void 0&&me(l),M==null||M(l),c&&b(!1)},we=l=>{var h;const c=!s||!!((h=X(l))!=null&&h.end);q(l,c)},ke=(l,c)=>{const h=W(f),be=w({...h,[l]:c});q(J(be,p),!1)},ge=l=>{if(F==null||F(l),!l.defaultPrevented){if(l.key==="Escape"){b(!1);return}(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),b(c=>!c))}},De=m&&typeof document<"u"?xe.createPortal(r.jsx("div",{ref:S,id:I,className:C("willa-date-picker-panel",`willa-date-picker-panel--${n}`,a==="wheel"&&"willa-date-picker-panel--wheel"),style:j?{left:j.left,top:j.top,width:j.width}:{left:0,top:0,visibility:"hidden"},children:a==="wheel"?r.jsx("div",{className:"willa-date-picker-wheel",style:{gridTemplateColumns:`repeat(${p.length}, minmax(3.75rem, 1fr))`},children:p.map(l=>{const c=W(f);return r.jsxs("div",{className:"willa-date-picker-wheel-column",children:[r.jsx("div",{className:"willa-date-picker-wheel-label",children:Re[l]}),r.jsx("div",{className:"willa-date-picker-wheel-options",children:Ye(l,c).map(h=>r.jsx("button",{className:C("willa-date-picker-wheel-option",h.value===c[l]&&"willa-date-picker-wheel-option--selected"),type:"button",onClick:()=>ke(l,h.value),children:h.label},h.value))})]},l)})}):r.jsx(ve,{className:"willa-date-picker-calendar",mode:n,range:s,value:f,min:te,max:ae,markers:re,getMarker:ne,disabledDate:le,onValueChange:we})}),document.body):null;return r.jsxs("span",{ref:T,className:C("willa-date-picker",`willa-date-picker--${d}`,`willa-date-picker--${g}`,m&&"willa-date-picker--open",P&&"willa-date-picker--disabled",Y&&"willa-date-picker--invalid",ie),style:fe,"aria-disabled":P||void 0,children:[A?r.jsx("input",{type:"hidden",name:A,value:qe(f),disabled:P}):null,r.jsxs("button",{...v,ref:ye,id:B,type:"button",className:"willa-date-picker-control",disabled:P,"aria-expanded":m,"aria-controls":m?I:void 0,"aria-haspopup":"dialog","aria-invalid":Y||v["aria-invalid"],onBlur:de,onClick:l=>{N==null||N(l),l.defaultPrevented||b(c=>!c)},onKeyDown:ge,children:[r.jsx("span",{className:C("willa-date-picker-value",!_(f,{mode:n,picker:a,range:s,wheelColumns:p})&&"willa-date-picker-value--placeholder"),children:pe}),r.jsx(Ve,{className:"willa-date-picker-icon","aria-hidden":"true"})]}),De]})});o.displayName="DatePicker";const Re={year:"年",month:"月",day:"日",hour:"时",minute:"分",second:"秒"},We=e=>{const{width:t,style:a}=e;return{...a,...t===void 0?void 0:{width:t}}},ze=e=>{const{mode:t,picker:a,range:n,wheelColumns:i}=e;if(a==="wheel"){const d=Q(i),g=d.some(D=>["year","month","day"].includes(D)),V=d.some(D=>["hour","minute","second"].includes(D));return g&&V?"选择日期时间":V?"选择时间":"选择日期"}const s={year:"年份",month:"月份",week:"周",day:"日期"};return n?`选择${s[t]}范围`:`选择${s[t]}`},H=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;const[t,a,n]=e.split("-").map(Number),i=new Date(t,a-1,n);return i.getFullYear()!==t||i.getMonth()!==a-1||i.getDate()!==n?null:i},R=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`},Ae=e=>{const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),Ee(t)},K=e=>{const t=Ae(e);return t.setDate(t.getDate()+6),t},Ee=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),_=(e,t)=>{const{mode:a,picker:n,range:i,wheelColumns:s}=t;if(n==="wheel")return typeof e=="string"&&e?Oe(e,s):void 0;if(i){const d=X(e);return d!=null&&d.start?Be(d,a):""}return typeof e=="string"&&e?z(e,a):void 0},Be=(e,t)=>{const a=Ie(e.start,t),n=e.end?Te(e.end,t):"";return n?`${a} - ${n}`:`${a} -`},Ie=(e,t)=>t!=="week"?z(e,t):e,Te=(e,t)=>{if(t!=="week")return z(e,t);const a=H(e);return a?R(K(a)):e},z=(e,t)=>{if(t==="week"){const a=H(e);return a?`${R(a)} - ${R(K(a))}`:e}return e},Q=e=>Array.isArray(e)?e:e==="time"?["hour","minute","second"]:e==="datetime"?["year","month","day","hour","minute","second"]:["year","month","day"],Le=e=>Math.max(244,e*4.25*16),W=e=>{const t=new Date,a={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:0,minute:0,second:0};if(typeof e!="string"||!e)return w(a);const n=e.match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/);if(n)return w({year:Number(n[1]),month:Number(n[2]),day:Number(n[3]),hour:Number(n[4]??a.hour),minute:Number(n[5]??a.minute),second:Number(n[6]??a.second)});const i=e.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(i)return w({...a,hour:Number(i[1]),minute:Number(i[2]),second:Number(i[3]??a.second)});const s=e.match(/^(\d{4})-(\d{2})$/);return w(s?{...a,year:Number(s[1]),month:Number(s[2]),day:1}:a)},w=e=>{const t=y(Math.trunc(e.year),1900,2100),a=y(Math.trunc(e.month),1,12),n=U(t,a);return{year:t,month:a,day:y(Math.trunc(e.day),1,n),hour:y(Math.trunc(e.hour),0,23),minute:y(Math.trunc(e.minute),0,59),second:y(Math.trunc(e.second),0,59)}},J=(e,t)=>{const a=t.some(d=>["year","month","day"].includes(d)),n=t.some(d=>["hour","minute","second"].includes(d)),i=`${e.year}-${k(e.month)}-${k(e.day)}`,s=`${k(e.hour)}:${k(e.minute)}:${k(e.second)}`;return a&&n?`${i} ${s}`:n?s:i},Oe=(e,t)=>{const a=W(e);return J(a,t)},Ye=(e,t)=>e==="year"?$(1900,2100,""):e==="month"?$(1,12,"月"):e==="day"?$(1,U(t.year,t.month),"日"):$(0,59,"",!0).filter(a=>e==="hour"?a.value<=23:!0),$=(e,t,a,n=!1)=>Array.from({length:t-e+1},(i,s)=>{const d=e+s,g=n?k(d):String(d);return{value:d,label:`${g}${a}`}}),U=(e,t)=>new Date(e,t,0).getDate(),k=e=>String(e).padStart(2,"0"),qe=e=>typeof e=="string"?e:e.end?`${e.start},${e.end}`:e.start,X=e=>typeof e=="string"?null:e,x={display:"grid",gap:"0.76rem",maxWidth:"42rem"},Ge={display:"grid",gap:"0.76rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},_e=[{value:"2026-06-16",label:"发布",tone:"success"},{value:"2026-06-19",label:"端午",tone:"warning"},{value:"2026-06-24",label:"维护",tone:"info"}],He=()=>{const[e,t]=u.useState({start:"2026-06",end:"2026-09"});return r.jsx(o,{range:!0,value:e,onValueChange:t,width:"100%","aria-label":"选择分析周期"})},rt=Se({id:"date-picker",name:"DatePicker",category:"form",packageName:"willa/DatePicker",description:"用于选择年份、月份、周、日期及时间范围。",imports:[{name:"DatePicker",from:"willa/DatePicker"}],css:"willa/DatePicker.css",demo:{name:"DatePickerPreview",component:He},code:`
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
      `,content:r.jsxs("div",{style:Ge,children:[r.jsx(o,{mode:"day",defaultValue:"2026-06-10",width:"100%","aria-label":"选择日期"}),r.jsx(o,{mode:"week",defaultValue:"2026-06-07",width:"100%","aria-label":"选择周"}),r.jsx(o,{mode:"month",defaultValue:"2026-06",width:"100%","aria-label":"选择月份"}),r.jsx(o,{mode:"year",defaultValue:"2026",width:"100%","aria-label":"选择年份"})]})},{title:"范围选择",code:`
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
      `,content:r.jsx("div",{style:x,children:r.jsx(o,{mode:"day",defaultValue:"2026-06-19",markers:_e,getMarker:(e,t)=>t.date&&t.date.getDay()===1?{value:e,label:"周会",tone:"neutral"}:null,width:"100%","aria-label":"选择带标记的日期"})})},{title:"滚动选择",code:`
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
      `,content:r.jsx(Ce,{actions:r.jsxs(Me,{children:[r.jsx(G,{variant:"ghost",children:"取消"}),r.jsx(G,{type:"submit",children:"保存"})]}),children:r.jsxs($e,{title:"报表周期",children:[r.jsx(Ne,{label:"月份范围",required:!0,children:r.jsx(o,{range:!0,name:"reportRange",defaultValue:{start:"2026-06",end:"2026-09"},width:"100%"})}),r.jsx(Fe,{tone:"info",children:"默认按月份选择，提交值会序列化为 start,end。"})]})})},{title:"范围限制",code:`
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
      `,content:r.jsxs("div",{style:x,children:[r.jsx(o,{size:"sm",defaultValue:"2026-06"}),r.jsx(o,{size:"md",defaultValue:"2026-06"}),r.jsx(o,{size:"lg",defaultValue:"2026-06"})]})}],props:[{name:"picker",type:'"calendar" | "wheel"',defaultValue:'"calendar"',description:"选择面板类型；默认是日历面板。"},{name:"mode",type:'"year" | "month" | "week" | "day"',defaultValue:'"month"',description:"日历面板的选择粒度；默认按年月选择。"},{name:"wheelColumns",type:'"date" | "time" | "datetime" | Array<DatePickerWheelColumn>',defaultValue:'"date"',description:"滚动选择器展示的列。"},{name:"range",type:"boolean",defaultValue:"false",description:"开启范围选择。"},{name:"value",type:"DatePickerValue",description:"受控值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"DatePickerValue",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: DatePickerValue) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"min",type:"string",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<DatePickerMarker>",defaultValue:"[]",description:"静态日期标记，value 格式随 mode 变化。"},{name:"getMarker",type:"(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定值。"},{name:"placeholder",type:"string",defaultValue:"由 mode 和 range 决定",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"日期选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"日期选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"}]});export{rt as default};
