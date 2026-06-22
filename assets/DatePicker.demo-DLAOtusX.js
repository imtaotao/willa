import{a$ as c,aZ as a,aK as y,C as je,aI as Se,aJ as $,h as O}from"./index-BuvJf_nF.js";import{C as Fe}from"./index-DbM-UHSr.js";import{F as $e,a as Ce}from"./floatingPanelParts-4BeICuWz.js";import{u as Me}from"./useFloatingPanel-DfwCNGNj.js";import{F as Ne,a as We}from"./index-qdza9tOF.js";import{F as Re}from"./index-BG6ycCvq.js";import{F as ze}from"./index-BVSkEjlQ.js";import{F as Ie}from"./index-B79laxO1.js";/* empty css              */import{d as Ae}from"./defineDoc-BjvM3Vn5.js";function o(e){const{ref:t,picker:r="calendar",mode:n="month",wheelColumns:i="date",range:d=!1,size:f="md",variant:x="outline",width:Q,invalid:U=!1,placeholder:X,name:z,value:I,defaultValue:ee="",min:te,max:ae,markers:re=[],getMarker:le,disabledDate:ne,showScrollbar:ie=!1,onValueChange:P,className:se,disabled:g,style:oe,id:de,onBlur:ce,onClick:V,onKeyDown:v,...b}=e,ue=c.useId(),A=de??ue,j=`${A}-panel`,B=`${j}-label`,E=c.useRef(null),S=c.useRef(null),F=c.useRef(null),[u,h]=c.useState(!1),[me,pe]=c.useState(ee),p=I??me,D=c.useMemo(()=>qe(i),[i]),he=c.useCallback(()=>h(!1),[]),{position:fe,updatePosition:L}=Me({open:u,rootRef:E,triggerRef:S,panelRef:F,minWidth:r==="wheel"?Ge(D.length):void 0,matchTriggerWidth:r==="wheel",fullWidthBelow:520,fallbackHeight:290,onClose:he}),T=U||b["aria-invalid"]===!0||b["aria-invalid"]==="true",ye=Ee({width:Q,style:oe}),we=q(p,{mode:n,picker:r,range:d})??X??Y({mode:n,picker:r,range:d}),ke=`${Y({mode:n,picker:r,range:d})}面板`,ge=l=>{S.current=l,Se(t,l)};c.useEffect(()=>{u&&L()},[u,n,r,D.length,L]),c.useEffect(()=>{var l;!u||r!=="wheel"||(l=F.current)==null||l.querySelectorAll(".willa-date-picker-wheel-option--selected").forEach(s=>{s.scrollIntoView({block:"center"})})},[p,u,r]);const K=(l,s)=>{I===void 0&&pe(l),P==null||P(l),s&&h(!1)},be=l=>{var m;const s=!d||!!((m=Z(l))!=null&&m.end);K(l,s)},De=(l,s)=>{const m=N(p),ve=k({...m,[l]:s});K(H(ve),!1)},xe=l=>{if(v==null||v(l),!l.defaultPrevented){if(l.key==="Escape"){h(!1);return}(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),h(s=>!s))}},Pe=l=>{var s;l.key==="Escape"&&(l.stopPropagation(),h(!1),(s=S.current)==null||s.focus())},Ve=u?a.jsx($e,{open:u,children:a.jsxs(Ce,{panelRef:F,id:j,className:y("willa-date-picker-panel",`willa-date-picker-panel--${n}`,r==="wheel"&&"willa-date-picker-panel--wheel"),position:fe,role:"dialog",ariaLabelledBy:B,onKeyDown:Pe,children:[a.jsx("span",{id:B,className:"willa-date-picker-panel-label",children:ke}),r==="wheel"?a.jsx("div",{className:"willa-date-picker-wheel",style:{gridTemplateColumns:`repeat(${D.length}, minmax(3.75rem, 1fr))`},children:D.map(l=>{const s=N(p);return a.jsxs("div",{className:"willa-date-picker-wheel-column",children:[a.jsx("div",{className:"willa-date-picker-wheel-label",children:Be[l]}),a.jsx("div",{className:y("willa-date-picker-wheel-options",ie&&"willa-date-picker-wheel-options--scrollbar"),children:He(l,s).map(m=>a.jsx("button",{className:y("willa-date-picker-wheel-option",m.value===s[l]&&"willa-date-picker-wheel-option--selected"),type:"button",onClick:()=>De(l,m.value),children:m.label},m.value))})]},l)})}):a.jsx(Fe,{className:"willa-date-picker-calendar",mode:n,range:d,value:p,min:te,max:ae,markers:re,getMarker:le,disabledDate:ne,onValueChange:be})]})}):null;return a.jsxs("span",{ref:E,className:y("willa-date-picker",`willa-date-picker--${f}`,`willa-date-picker--${x}`,u&&"willa-date-picker--open",g&&"willa-date-picker--disabled",T&&"willa-date-picker--invalid",se),style:ye,"aria-disabled":g||void 0,children:[z?a.jsx("input",{type:"hidden",name:z,value:Je(p),disabled:g}):null,a.jsxs("button",{...b,ref:ge,id:A,type:"button",className:"willa-date-picker-control",disabled:g,"aria-expanded":u,"aria-controls":u?j:void 0,"aria-haspopup":"dialog","aria-invalid":T||b["aria-invalid"],onBlur:ce,onClick:l=>{V==null||V(l),l.defaultPrevented||h(s=>!s)},onKeyDown:xe,children:[a.jsx("span",{className:y("willa-date-picker-value",!q(p,{mode:n,picker:r,range:d})&&"willa-date-picker-value--placeholder"),children:we}),a.jsx(je,{className:"willa-date-picker-icon","aria-hidden":"true"})]}),Ve]})}o.displayName="DatePicker";const Be={year:"年",month:"月",day:"日"},Ee=e=>{const{width:t,style:r}=e;return{...r,...t===void 0?void 0:{width:t}}},Y=e=>{const{mode:t,picker:r,range:n}=e;if(r==="wheel")return"选择日期";const i={year:"年份",month:"月份",week:"周",day:"日期"};return n?`选择${i[t]}范围`:`选择${i[t]}`},G=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;const[t,r,n]=e.split("-").map(Number),i=new Date(t,r-1,n);return i.getFullYear()!==t||i.getMonth()!==r-1||i.getDate()!==n?null:i},M=e=>{const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${n}`},Le=e=>{const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),Te(t)},_=e=>{const t=Le(e);return t.setDate(t.getDate()+6),t},Te=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),q=(e,t)=>{const{mode:r,picker:n,range:i}=t;if(n==="wheel")return typeof e=="string"&&e?_e(e):void 0;if(i){const d=Z(e);return d!=null&&d.start?Ke(d,r):""}return typeof e=="string"&&e?R(e,r):void 0},Ke=(e,t)=>{const r=Oe(e.start,t),n=e.end?Ye(e.end,t):"";return n?`${r} - ${n}`:`${r} -`},Oe=(e,t)=>t!=="week"?R(e,t):e,Ye=(e,t)=>{if(t!=="week")return R(e,t);const r=G(e);return r?M(_(r)):e},R=(e,t)=>{if(t==="week"){const r=G(e);return r?`${M(r)} - ${M(_(r))}`:e}return e},qe=e=>Array.isArray(e)?e:["year","month","day"],Ge=e=>Math.max(244,e*4.25*16),N=e=>{const t=new Date,r={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()};if(typeof e!="string"||!e)return k(r);const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n)return k({year:Number(n[1]),month:Number(n[2]),day:Number(n[3])});const i=e.match(/^(\d{4})-(\d{2})$/);return k(i?{year:Number(i[1]),month:Number(i[2]),day:1}:r)},k=e=>{const t=$(Math.trunc(e.year),1900,2100),r=$(Math.trunc(e.month),1,12),n=J(t,r);return{year:t,month:r,day:$(Math.trunc(e.day),1,n)}},H=e=>`${e.year}-${W(e.month)}-${W(e.day)}`,_e=e=>{const t=N(e);return H(t)},He=(e,t)=>e==="year"?C(1900,2100,""):e==="month"?C(1,12,"月"):C(1,J(t.year,t.month),"日"),C=(e,t,r,n=!1)=>Array.from({length:t-e+1},(i,d)=>{const f=e+d,x=n?W(f):String(f);return{value:f,label:`${x}${r}`}}),J=(e,t)=>new Date(e,t,0).getDate(),W=e=>String(e).padStart(2,"0"),Je=e=>typeof e=="string"?e:e.end?`${e.start},${e.end}`:e.start,Z=e=>typeof e=="string"?null:e,w={display:"grid",gap:"0.76rem",maxWidth:"42rem"},Ze={display:"grid",gap:"0.76rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},Qe=[{value:"2026-06-16",label:"发布",tone:"success"},{value:"2026-06-19",label:"端午",tone:"warning"},{value:"2026-06-24",label:"维护",tone:"info"}],Ue=()=>{const[e,t]=c.useState({start:"2026-06",end:"2026-09"});return a.jsx(o,{range:!0,value:e,onValueChange:t,width:"100%","aria-label":"选择分析周期"})},dt=Ae({id:"date-picker",name:"DatePicker",category:"form",packageName:"willa/DatePicker",description:"用于选择年份、月份、周和日期范围。",imports:[{name:"DatePicker",from:"willa/DatePicker"}],css:"willa/DatePicker.css",demo:{name:"DatePickerPreview",component:Ue},code:`
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
      `,content:a.jsxs("div",{style:Ze,children:[a.jsx(o,{mode:"day",defaultValue:"2026-06-10",width:"100%","aria-label":"选择日期"}),a.jsx(o,{mode:"week",defaultValue:"2026-06-07",width:"100%","aria-label":"选择周"}),a.jsx(o,{mode:"month",defaultValue:"2026-06",width:"100%","aria-label":"选择月份"}),a.jsx(o,{mode:"year",defaultValue:"2026",width:"100%","aria-label":"选择年份"})]})},{title:"范围选择",code:`
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
      `,content:a.jsxs("div",{style:w,children:[a.jsx(o,{range:!0,mode:"day",defaultValue:{start:"2026-06-10",end:"2026-06-18"},width:"100%","aria-label":"选择日期范围"}),a.jsx(o,{range:!0,mode:"week",defaultValue:{start:"2026-06-07",end:"2026-06-21"},width:"100%","aria-label":"选择周范围"})]})},{title:"日期标记",code:`
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
      `,content:a.jsx("div",{style:w,children:a.jsx(o,{mode:"day",defaultValue:"2026-06-19",markers:Qe,getMarker:(e,t)=>t.date&&t.date.getDay()===1?{value:e,label:"周会",tone:"neutral"}:null,width:"100%","aria-label":"选择带标记的日期"})})},{title:"滚动选择",code:`
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
            wheelColumns="date"
            showScrollbar
            defaultValue="2026-06-10"
            width="100%"
            aria-label="显示滚动条的滚动选择"
          />
        </div>;
      `,content:a.jsxs("div",{style:w,children:[a.jsx(o,{picker:"wheel",wheelColumns:"date",defaultValue:"2026-06-10",width:"100%","aria-label":"滚动选择年月日"}),a.jsx(o,{picker:"wheel",wheelColumns:"date",showScrollbar:!0,defaultValue:"2026-06-10",width:"100%","aria-label":"显示滚动条的滚动选择"})]})},{title:"表单内使用",code:`
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
      `,content:a.jsx(Ne,{actions:a.jsxs(Re,{children:[a.jsx(O,{variant:"ghost",children:"取消"}),a.jsx(O,{type:"submit",children:"保存"})]}),children:a.jsxs(We,{title:"报表周期",children:[a.jsx(ze,{label:"月份范围",required:!0,children:a.jsx(o,{range:!0,name:"reportRange",defaultValue:{start:"2026-06",end:"2026-09"},width:"100%"})}),a.jsx(Ie,{tone:"info",children:"默认按月份选择，提交值会序列化为 start,end。"})]})})},{title:"范围限制",code:`
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
      `,content:a.jsxs("div",{style:w,children:[a.jsx(o,{defaultValue:"2026-06",min:"2026-04",max:"2026-12",width:"100%"}),a.jsx(o,{mode:"day",placeholder:"仅工作日可选",disabledDate:e=>{const t=new Date(`${e}T00:00:00`).getDay();return t===0||t===6},width:"100%"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>;
      `,content:a.jsxs("div",{style:w,children:[a.jsx(o,{size:"sm",defaultValue:"2026-06"}),a.jsx(o,{size:"md",defaultValue:"2026-06"}),a.jsx(o,{size:"lg",defaultValue:"2026-06"})]})}],props:[{name:"picker",type:'"calendar" | "wheel"',defaultValue:'"calendar"',description:"选择面板类型；默认是日历面板。"},{name:"mode",type:'"year" | "month" | "week" | "day"',defaultValue:'"month"',description:"日历面板的选择粒度；默认按年月选择。"},{name:"wheelColumns",type:'"date" | Array<DatePickerWheelColumn>',defaultValue:'"date"',description:"滚动选择器展示的列。"},{name:"range",type:"boolean",defaultValue:"false",description:"开启范围选择。"},{name:"value",type:"DatePickerValue",description:"受控值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"DatePickerValue",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: DatePickerValue) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"min",type:"string",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<DatePickerMarker>",defaultValue:"[]",description:"静态日期标记，value 格式随 mode 变化。"},{name:"getMarker",type:"(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定值。"},{name:"showScrollbar",type:"boolean",defaultValue:"false",description:"是否显示滚动条和右侧预留。"},{name:"placeholder",type:"string",defaultValue:"由 mode 和 range 决定",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"日期选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"日期选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"}]});export{dt as default};
