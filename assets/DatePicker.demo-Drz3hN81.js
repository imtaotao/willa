import{b2 as u,b5 as ve,b0 as a,aN as y,C as je,aL as Ce,aM as S,h as O}from"./index-BXsQUvzN.js";import{C as Se}from"./index-CZNgR2rj.js";import{F as Fe,a as $e}from"./floatingPanelParts-DTcHFzVu.js";import{u as Me}from"./useFloatingPanel-xBf20LvO.js";import{F as Ne,a as Re}from"./index-CikPepvw.js";import{F as We}from"./index-BMwNgaXT.js";import{F as ze}from"./index-CCvLAwv-.js";import{F as Be}from"./index-9ULiDTpZ.js";/* empty css              *//* empty css              */import{d as Ee}from"./defineDoc-DlZvCPX0.js";import"./floatingLayer-DSNI4mZV.js";function o(e){const{ref:t,picker:r="calendar",mode:n="month",wheelColumns:i="date",range:d=!1,size:f="md",variant:V="outline",width:Q,invalid:U=!1,placeholder:X,name:W,value:Z,defaultValue:ee="",min:te,max:ae,markers:re=[],getMarker:le,disabledDate:ne,showScrollbar:z=!1,onValueChange:ie,className:se,disabled:g,style:oe,id:de,onBlur:ce,onClick:x,onKeyDown:P,...b}=e,ue=u.useId(),B=de??ue,v=`${B}-panel`,E=`${v}-label`,A=u.useRef(null),j=u.useRef(null),C=u.useRef(null),[c,h]=u.useState(!1),[p,me]=ve({value:Z,defaultValue:ee,onChange:ie}),D=u.useMemo(()=>Ge(i),[i]),pe=u.useCallback(()=>h(!1),[]),{position:he,updatePosition:L}=Me({open:c,rootRef:A,triggerRef:j,panelRef:C,minWidth:r==="wheel"?Ke(D.length):void 0,matchTriggerWidth:r==="wheel",fullWidthBelow:520,fallbackHeight:290,onClose:pe}),I=U||b["aria-invalid"]===!0||b["aria-invalid"]==="true",fe=Le({width:Q,style:oe}),ye=q(p,{mode:n,picker:r,range:d})??X??Y({mode:n,picker:r,range:d}),we=`${Y({mode:n,picker:r,range:d})}面板`,ke=l=>{j.current=l,Ce(t,l)};u.useEffect(()=>{c&&L()},[c,n,r,D.length,L]),u.useEffect(()=>{var l;!c||r!=="wheel"||(l=C.current)==null||l.querySelectorAll(".willa-date-picker-wheel-option--selected").forEach(s=>{s.scrollIntoView({block:"center",behavior:"smooth"})})},[p,c,r]);const T=(l,s)=>{me(l),s&&h(!1)},ge=l=>{var m;const s=!d||!!((m=J(l))!=null&&m.end);T(l,s)},be=(l,s)=>{const m=M(p),Pe=k({...m,[l]:s});T(H(Pe),!1)},De=l=>{if(P==null||P(l),!l.defaultPrevented){if(l.key==="Escape"){h(!1);return}(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),h(s=>!s))}},Ve=l=>{var s;l.key==="Escape"&&(l.stopPropagation(),h(!1),(s=j.current)==null||s.focus())},xe=c?a.jsx(Fe,{open:c,children:a.jsxs($e,{panelRef:C,id:v,className:y("willa-date-picker-panel",`willa-date-picker-panel--${n}`,r==="wheel"&&"willa-date-picker-panel--wheel"),position:he,role:"dialog",ariaLabelledBy:E,onKeyDown:Ve,children:[a.jsx("span",{id:E,className:"willa-date-picker-panel-label",children:we}),r==="wheel"?a.jsx("div",{className:"willa-date-picker-wheel",style:{gridTemplateColumns:`repeat(${D.length}, minmax(3.75rem, 1fr))`},children:D.map(l=>{const s=M(p);return a.jsxs("div",{className:"willa-date-picker-wheel-column",children:[a.jsx("div",{className:"willa-date-picker-wheel-label",children:Ae[l]}),a.jsx("div",{className:y("willa-date-picker-wheel-options",z&&"willa-date-picker-wheel-options--scrollbar",z&&"willa-form-scrollbar"),children:_e(l,s).map(m=>a.jsx("button",{className:y("willa-date-picker-wheel-option",m.value===s[l]&&"willa-date-picker-wheel-option--selected"),type:"button",onClick:()=>be(l,m.value),children:m.label},m.value))})]},l)})}):a.jsx(Se,{className:"willa-date-picker-calendar",mode:n,range:d,value:p,min:te,max:ae,markers:re,getMarker:le,disabledDate:ne,onValueChange:ge})]})}):null;return a.jsxs("span",{ref:A,className:y("willa-date-picker",`willa-date-picker--${f}`,`willa-date-picker--${V}`,c&&"willa-date-picker--open",g&&"willa-date-picker--disabled",I&&"willa-date-picker--invalid",se),style:fe,"aria-disabled":g||void 0,children:[W?a.jsx("input",{type:"hidden",name:W,value:Je(p),disabled:g}):null,a.jsxs("button",{...b,ref:ke,id:B,type:"button",className:"willa-date-picker-control",disabled:g,"aria-expanded":c,"aria-controls":c?v:void 0,"aria-haspopup":"dialog","aria-invalid":I||b["aria-invalid"],onBlur:ce,onClick:l=>{x==null||x(l),l.defaultPrevented||h(s=>!s)},onKeyDown:De,children:[a.jsx("span",{className:y("willa-date-picker-value",!q(p,{mode:n,picker:r,range:d})&&"willa-date-picker-value--placeholder"),children:ye}),a.jsx(je,{className:"willa-date-picker-icon","aria-hidden":"true"})]}),xe]})}o.displayName="DatePicker";const Ae={year:"年",month:"月",day:"日"},Le=e=>{const{width:t,style:r}=e;return{...r,...t===void 0?void 0:{width:t}}},Y=e=>{const{mode:t,picker:r,range:n}=e;if(r==="wheel")return"选择日期";const i={year:"年份",month:"月份",week:"周",day:"日期"};return n?`选择${i[t]}范围`:`选择${i[t]}`},G=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;const[t,r,n]=e.split("-").map(Number),i=new Date(t,r-1,n);return i.getFullYear()!==t||i.getMonth()!==r-1||i.getDate()!==n?null:i},$=e=>{const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${n}`},Ie=e=>{const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),Te(t)},K=e=>{const t=Ie(e);return t.setDate(t.getDate()+6),t},Te=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),q=(e,t)=>{const{mode:r,picker:n,range:i}=t;if(n==="wheel")return typeof e=="string"&&e?He(e):void 0;if(i){const d=J(e);return d!=null&&d.start?Oe(d,r):""}return typeof e=="string"&&e?R(e,r):void 0},Oe=(e,t)=>{const r=Ye(e.start,t),n=e.end?qe(e.end,t):"";return n?`${r} - ${n}`:`${r} -`},Ye=(e,t)=>t!=="week"?R(e,t):e,qe=(e,t)=>{if(t!=="week")return R(e,t);const r=G(e);return r?$(K(r)):e},R=(e,t)=>{if(t==="week"){const r=G(e);return r?`${$(r)} - ${$(K(r))}`:e}return e},Ge=e=>Array.isArray(e)?e:["year","month","day"],Ke=e=>Math.max(244,e*4.25*16),M=e=>{const t=new Date,r={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()};if(typeof e!="string"||!e)return k(r);const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n)return k({year:Number(n[1]),month:Number(n[2]),day:Number(n[3])});const i=e.match(/^(\d{4})-(\d{2})$/);return k(i?{year:Number(i[1]),month:Number(i[2]),day:1}:r)},k=e=>{const t=S(Math.trunc(e.year),1900,2100),r=S(Math.trunc(e.month),1,12),n=_(t,r);return{year:t,month:r,day:S(Math.trunc(e.day),1,n)}},H=e=>`${e.year}-${N(e.month)}-${N(e.day)}`,He=e=>{const t=M(e);return H(t)},_e=(e,t)=>e==="year"?F(1900,2100,""):e==="month"?F(1,12,"月"):F(1,_(t.year,t.month),"日"),F=(e,t,r,n=!1)=>Array.from({length:t-e+1},(i,d)=>{const f=e+d,V=n?N(f):String(f);return{value:f,label:`${V}${r}`}}),_=(e,t)=>new Date(e,t,0).getDate(),N=e=>String(e).padStart(2,"0"),Je=e=>typeof e=="string"?e:e.end?`${e.start},${e.end}`:e.start,J=e=>typeof e=="string"?null:e,w={display:"grid",gap:"0.76rem",maxWidth:"42rem"},Qe={display:"grid",gap:"0.76rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},Ue=[{value:"2026-06-16",label:"发布",tone:"success"},{value:"2026-06-19",label:"端午",tone:"warning"},{value:"2026-06-24",label:"维护",tone:"info"}],Xe=()=>{const[e,t]=u.useState({start:"2026-06",end:"2026-09"});return a.jsx(o,{range:!0,value:e,onValueChange:t,width:"100%","aria-label":"选择分析周期"})},ut=Ee({id:"date-picker",name:"DatePicker",category:"form",packageName:"willa/DatePicker",description:"用于选择年份、月份、周和日期范围。",imports:[{name:"DatePicker",from:"willa/DatePicker"}],css:"willa/DatePicker.css",demo:{name:"DatePickerPreview",component:Xe},code:`
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
      `,content:a.jsxs("div",{style:Qe,children:[a.jsx(o,{mode:"day",defaultValue:"2026-06-10",width:"100%","aria-label":"选择日期"}),a.jsx(o,{mode:"week",defaultValue:"2026-06-07",width:"100%","aria-label":"选择周"}),a.jsx(o,{mode:"month",defaultValue:"2026-06",width:"100%","aria-label":"选择月份"}),a.jsx(o,{mode:"year",defaultValue:"2026",width:"100%","aria-label":"选择年份"})]})},{title:"范围选择",code:`
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
      `,content:a.jsx("div",{style:w,children:a.jsx(o,{mode:"day",defaultValue:"2026-06-19",markers:Ue,getMarker:(e,t)=>t.date&&t.date.getDay()===1?{value:e,label:"周会",tone:"neutral"}:null,width:"100%","aria-label":"选择带标记的日期"})})},{title:"滚动选择",code:`
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
      `,content:a.jsx(Ne,{actions:a.jsxs(We,{children:[a.jsx(O,{variant:"ghost",children:"取消"}),a.jsx(O,{type:"submit",children:"保存"})]}),children:a.jsxs(Re,{title:"报表周期",children:[a.jsx(ze,{label:"月份范围",required:!0,children:a.jsx(o,{range:!0,name:"reportRange",defaultValue:{start:"2026-06",end:"2026-09"},width:"100%"})}),a.jsx(Be,{tone:"info",children:"默认按月份选择，提交值会序列化为 start,end。"})]})})},{title:"范围限制",code:`
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
      `,content:a.jsxs("div",{style:w,children:[a.jsx(o,{size:"sm",defaultValue:"2026-06"}),a.jsx(o,{size:"md",defaultValue:"2026-06"}),a.jsx(o,{size:"lg",defaultValue:"2026-06"})]})}],props:[{name:"picker",type:'"calendar" | "wheel"',defaultValue:'"calendar"',description:"选择面板类型；默认是日历面板。"},{name:"mode",type:'"year" | "month" | "week" | "day"',defaultValue:'"month"',description:"日历面板的选择粒度；默认按年月选择。"},{name:"wheelColumns",type:'"date" | Array<DatePickerWheelColumn>',defaultValue:'"date"',description:"滚动选择器展示的列。"},{name:"range",type:"boolean",defaultValue:"false",description:"开启范围选择。"},{name:"value",type:"DatePickerValue",description:"受控值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"DatePickerValue",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: DatePickerValue) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"min",type:"string",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",description:"最大可选值，格式随 mode 变化。"},{name:"markers",type:"Array<DatePickerMarker>",defaultValue:"[]",description:"静态日期标记，value 格式随 mode 变化。"},{name:"getMarker",type:"(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined",description:"动态返回日期标记，适合节假日、固定周期和公司日程规则。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定值。"},{name:"showScrollbar",type:"boolean",defaultValue:"false",description:"是否显示滚动条和右侧预留。"},{name:"placeholder",type:"string",defaultValue:"由 mode 和 range 决定",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"日期选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"日期选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"ref",type:"Ref<HTMLButtonElement>",description:"透传 ref。"}]});export{ut as default};
