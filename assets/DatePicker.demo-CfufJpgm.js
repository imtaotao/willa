import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{s as i}from"./react-icons.esm-mVdwEXuX.js";import{A as a,C as ee,H as te}from"./src-D2lZkBJ2.js";import{t as o}from"./Button-O1aY2iqB.js";import"./style-B00R6KjV.js";import{t as s}from"./defineDoc-Cid5xIoZ.js";import{t as ne}from"./Calendar-hH4GYb4w.js";import{t as re}from"./useFloatingPanel-DpwdahYX.js";import{n as c,t as ie}from"./floatingPanelParts-CvYlqcGS.js";import{n as l,t as u}from"./style-C6__NhS5.js";import{t as d}from"./style-C-Igh_7N.js";import{t as f}from"./style-CCZxyfE-.js";import{t as p}from"./FormMessage-B4bZfLM_.js";import"./style-BP72hdWL.js";var m=n(e()),h=n(r()),g=t();function _(e){let{ref:t,picker:n=`calendar`,mode:r=`month`,wheelColumns:a=`date`,range:o=!1,size:s=`md`,variant:l=`outline`,width:u,invalid:d=!1,placeholder:f,name:p,value:_,defaultValue:y=``,min:b,max:x,markers:S=[],getMarker:C,disabledDate:T,showScrollbar:E=!1,onValueChange:D,className:O,disabled:M,style:N,id:P,onBlur:F,onClick:L,onKeyDown:R,...z}=e,de=(0,m.useId)(),B=P??de,V=`${B}-panel`,H=`${V}-label`,U=(0,m.useRef)(null),W=(0,m.useRef)(null),G=(0,m.useRef)(null),[K,q]=(0,m.useState)(!1),[J,fe]=te({value:_,defaultValue:y,onChange:D}),Y=(0,m.useMemo)(()=>se(a),[a]),pe=(0,m.useCallback)(()=>q(!1),[]),{position:me,updatePosition:X}=re({open:K,rootRef:U,triggerRef:W,panelRef:G,minWidth:n===`wheel`?ce(Y.length):void 0,matchTriggerWidth:n===`wheel`,fullWidthBelow:520,fallbackHeight:290,onClose:pe}),Z=d||z[`aria-invalid`]===!0||z[`aria-invalid`]===`true`,he=oe({width:u,style:N}),Q=w(J,{mode:r,picker:n,range:o})??f??v({mode:r,picker:n,range:o}),ge=`${v({mode:r,picker:n,range:o})}面板`,_e=e=>{W.current=e,ee(t,e)};(0,m.useEffect)(()=>{K&&X()},[K,r,n,Y.length,X]),(0,m.useEffect)(()=>{!K||n!==`wheel`||G.current?.querySelectorAll(`.willa-date-picker-wheel-option--selected`).forEach(e=>{e.scrollIntoView({block:`center`,behavior:`smooth`})})},[J,K,n]);let $=(e,t)=>{fe(e),t&&q(!1)},ve=e=>{let t=!o||!!I(e)?.end;$(e,t)},ye=(e,t)=>{let n=A({...k(J),[e]:t});$(j(n),!1)},be=e=>{if(R?.(e),!e.defaultPrevented){if(e.key===`Escape`){q(!1);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),q(e=>!e))}},xe=K?(0,g.jsx)(ie,{open:K,children:(0,g.jsxs)(c,{panelRef:G,id:V,className:(0,h.default)(`willa-date-picker-panel`,`willa-date-picker-panel--${r}`,n===`wheel`&&`willa-date-picker-panel--wheel`),position:me,role:`dialog`,ariaLabelledBy:H,onKeyDown:e=>{e.key===`Escape`&&(e.stopPropagation(),q(!1),W.current?.focus())},children:[(0,g.jsx)(`span`,{id:H,className:`willa-date-picker-panel-label`,children:ge}),n===`wheel`?(0,g.jsx)(`div`,{className:`willa-date-picker-wheel`,style:{gridTemplateColumns:`repeat(${Y.length}, minmax(3.75rem, 1fr))`},children:Y.map(e=>{let t=k(J);return(0,g.jsxs)(`div`,{className:`willa-date-picker-wheel-column`,children:[(0,g.jsx)(`div`,{className:`willa-date-picker-wheel-label`,children:ae[e]}),(0,g.jsx)(`div`,{className:(0,h.default)(`willa-date-picker-wheel-options`,E&&`willa-date-picker-wheel-options--scrollbar`,E&&`willa-form-scrollbar`),children:le(e,t).map(n=>(0,g.jsx)(`button`,{className:(0,h.default)(`willa-date-picker-wheel-option`,n.value===t[e]&&`willa-date-picker-wheel-option--selected`),type:`button`,onClick:()=>ye(e,n.value),children:n.label},n.value))})]},e)})}):(0,g.jsx)(ne,{className:`willa-date-picker-calendar`,mode:r,range:o,value:J,min:b,max:x,markers:S,getMarker:C,disabledDate:T,onValueChange:ve})]})}):null;return(0,g.jsxs)(`span`,{ref:U,className:(0,h.default)(`willa-date-picker`,`willa-date-picker--${s}`,`willa-date-picker--${l}`,K&&`willa-date-picker--open`,M&&`willa-date-picker--disabled`,Z&&`willa-date-picker--invalid`,O),style:he,"aria-disabled":M||void 0,children:[p?(0,g.jsx)(`input`,{type:`hidden`,name:p,value:ue(J),disabled:M}):null,(0,g.jsxs)(`button`,{...z,ref:_e,id:B,type:`button`,className:`willa-date-picker-control`,disabled:M,"aria-expanded":K,"aria-controls":K?V:void 0,"aria-haspopup":`dialog`,"aria-invalid":Z||z[`aria-invalid`],onBlur:F,onClick:e=>{L?.(e),e.defaultPrevented||q(e=>!e)},onKeyDown:be,children:[(0,g.jsx)(`span`,{className:(0,h.default)(`willa-date-picker-value`,!w(J,{mode:r,picker:n,range:o})&&`willa-date-picker-value--placeholder`),children:Q}),(0,g.jsx)(i,{className:`willa-date-picker-icon`,"aria-hidden":`true`})]}),xe]})}_.displayName=`DatePicker`;var ae={year:`年`,month:`月`,day:`日`},oe=e=>{let{width:t,style:n}=e;return{...n,...t===void 0?void 0:{width:t}}},v=e=>{let{mode:t,picker:n,range:r}=e;if(n===`wheel`)return`选择日期`;let i={year:`年份`,month:`月份`,week:`周`,day:`日期`};return r?`选择${i[t]}范围`:`选择${i[t]}`},y=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;let[t,n,r]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()!==t||i.getMonth()!==n-1||i.getDate()!==r?null:i},b=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,x=e=>{let t=new Date(e);return t.setDate(e.getDate()-e.getDay()),C(t)},S=e=>{let t=x(e);return t.setDate(t.getDate()+6),t},C=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),w=(e,t)=>{let{mode:n,picker:r,range:i}=t;if(r===`wheel`)return typeof e==`string`&&e?M(e):void 0;if(i){let t=I(e);return t?.start?T(t,n):``}return typeof e==`string`&&e?O(e,n):void 0},T=(e,t)=>{let n=E(e.start,t),r=e.end?D(e.end,t):``;return r?`${n} - ${r}`:`${n} -`},E=(e,t)=>t===`week`?e:O(e,t),D=(e,t)=>{if(t!==`week`)return O(e,t);let n=y(e);return n?b(S(n)):e},O=(e,t)=>{if(t===`week`){let t=y(e);return t?`${b(t)} - ${b(S(t))}`:e}return e},se=e=>Array.isArray(e)?e:[`year`,`month`,`day`],ce=e=>Math.max(244,e*4.25*16),k=e=>{let t=new Date,n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()};if(typeof e!=`string`||!e)return A(n);let r=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(r)return A({year:Number(r[1]),month:Number(r[2]),day:Number(r[3])});let i=e.match(/^(\d{4})-(\d{2})$/);return A(i?{...n,year:Number(i[1]),month:Number(i[2]),day:1}:n)},A=e=>{let t=a(Math.trunc(e.year),1900,2100),n=a(Math.trunc(e.month),1,12),r=P(t,n);return{year:t,month:n,day:a(Math.trunc(e.day),1,r)}},j=e=>`${e.year}-${F(e.month)}-${F(e.day)}`,M=e=>j(k(e)),le=(e,t)=>e===`year`?N(1900,2100,``):e===`month`?N(1,12,`月`):N(1,P(t.year,t.month),`日`),N=(e,t,n,r=!1)=>Array.from({length:t-e+1},(t,i)=>{let a=e+i;return{value:a,label:`${r?F(a):String(a)}${n}`}}),P=(e,t)=>new Date(e,t,0).getDate(),F=e=>String(e).padStart(2,`0`),ue=e=>typeof e==`string`?e:e.end?`${e.start},${e.end}`:e.start,I=e=>typeof e==`string`?null:e,L={display:`grid`,gap:`0.76rem`,maxWidth:`42rem`},R=s({id:`date-picker`,name:`DatePicker`,category:`form`,packageName:`willa/DatePicker`,description:`用于选择年份、月份、周和日期范围。`,imports:[{name:`DatePicker`,from:`willa/DatePicker`}],css:`willa/DatePicker.css`,demo:{name:`DatePickerPreview`,component:()=>{let[e,t]=(0,m.useState)({start:`2026-06`,end:`2026-09`});return(0,g.jsx)(_,{range:!0,value:e,onValueChange:t,width:`100%`,"aria-label":`选择分析周期`})}},code:`
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
  `,sections:[{title:`粒度切换`,code:`
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
      `,content:(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`0.76rem`,gridTemplateColumns:`repeat(auto-fit, minmax(13rem, 1fr))`},children:[(0,g.jsx)(_,{mode:`day`,defaultValue:`2026-06-10`,width:`100%`,"aria-label":`选择日期`}),(0,g.jsx)(_,{mode:`week`,defaultValue:`2026-06-07`,width:`100%`,"aria-label":`选择周`}),(0,g.jsx)(_,{mode:`month`,defaultValue:`2026-06`,width:`100%`,"aria-label":`选择月份`}),(0,g.jsx)(_,{mode:`year`,defaultValue:`2026`,width:`100%`,"aria-label":`选择年份`})]})},{title:`范围选择`,code:`
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
      `,content:(0,g.jsxs)(`div`,{style:L,children:[(0,g.jsx)(_,{range:!0,mode:`day`,defaultValue:{start:`2026-06-10`,end:`2026-06-18`},width:`100%`,"aria-label":`选择日期范围`}),(0,g.jsx)(_,{range:!0,mode:`week`,defaultValue:{start:`2026-06-07`,end:`2026-06-21`},width:`100%`,"aria-label":`选择周范围`})]})},{title:`日期标记`,code:`
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
      `,content:(0,g.jsx)(`div`,{style:L,children:(0,g.jsx)(_,{mode:`day`,defaultValue:`2026-06-19`,markers:[{value:`2026-06-16`,label:`发布`,tone:`success`},{value:`2026-06-19`,label:`端午`,tone:`warning`},{value:`2026-06-24`,label:`维护`,tone:`info`}],getMarker:(e,t)=>t.date&&t.date.getDay()===1?{value:e,label:`周会`,tone:`neutral`}:null,width:`100%`,"aria-label":`选择带标记的日期`})})},{title:`滚动选择`,code:`
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
      `,content:(0,g.jsxs)(`div`,{style:L,children:[(0,g.jsx)(_,{picker:`wheel`,wheelColumns:`date`,defaultValue:`2026-06-10`,width:`100%`,"aria-label":`滚动选择年月日`}),(0,g.jsx)(_,{picker:`wheel`,wheelColumns:`date`,showScrollbar:!0,defaultValue:`2026-06-10`,width:`100%`,"aria-label":`显示滚动条的滚动选择`})]})},{title:`表单内使用`,code:`
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
      `,content:(0,g.jsx)(l,{actions:(0,g.jsxs)(d,{children:[(0,g.jsx)(o,{variant:`ghost`,children:`取消`}),(0,g.jsx)(o,{type:`submit`,children:`保存`})]}),children:(0,g.jsxs)(u,{title:`报表周期`,children:[(0,g.jsx)(f,{label:`月份范围`,required:!0,children:(0,g.jsx)(_,{range:!0,name:`reportRange`,defaultValue:{start:`2026-06`,end:`2026-09`},width:`100%`})}),(0,g.jsx)(p,{tone:`info`,children:`默认按月份选择，提交值会序列化为 start,end。`})]})})},{title:`范围限制`,code:`
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
      `,content:(0,g.jsxs)(`div`,{style:L,children:[(0,g.jsx)(_,{defaultValue:`2026-06`,min:`2026-04`,max:`2026-12`,width:`100%`}),(0,g.jsx)(_,{mode:`day`,placeholder:`仅工作日可选`,disabledDate:e=>{let t=new Date(`${e}T00:00:00`).getDay();return t===0||t===6},width:`100%`})]})},{title:`尺寸`,code:`
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>;
      `,content:(0,g.jsxs)(`div`,{style:L,children:[(0,g.jsx)(_,{size:`sm`,defaultValue:`2026-06`}),(0,g.jsx)(_,{size:`md`,defaultValue:`2026-06`}),(0,g.jsx)(_,{size:`lg`,defaultValue:`2026-06`})]})}],props:[{name:`picker`,type:`"calendar" | "wheel"`,defaultValue:`"calendar"`,description:`选择面板类型；默认是日历面板。`},{name:`mode`,type:`"year" | "month" | "week" | "day"`,defaultValue:`"month"`,description:`日历面板的选择粒度；默认按年月选择。`},{name:`wheelColumns`,type:`"date" | Array<DatePickerWheelColumn>`,defaultValue:`"date"`,description:`滚动选择器展示的列。`},{name:`range`,type:`boolean`,defaultValue:`false`,description:`开启范围选择。`},{name:`value`,type:`DatePickerValue`,description:`受控值；范围模式传入 { start, end }。`},{name:`defaultValue`,type:`DatePickerValue`,defaultValue:`""`,description:`非受控默认值。`},{name:`onValueChange`,type:`(value: DatePickerValue) => void`,description:`选择值变化时触发。`},{name:`name`,type:`string`,description:`表单提交字段名。`},{name:`min`,type:`string`,description:`最小可选值，格式随 mode 变化。`},{name:`max`,type:`string`,description:`最大可选值，格式随 mode 变化。`},{name:`markers`,type:`Array<DatePickerMarker>`,defaultValue:`[]`,description:`静态日期标记，value 格式随 mode 变化。`},{name:`getMarker`,type:`(value: string, context: DatePickerMarkerContext) => DatePickerMarker | null | undefined`,description:`动态返回日期标记，适合节假日、固定周期和公司日程规则。`},{name:`disabledDate`,type:`(value: string) => boolean`,description:`禁用指定值。`},{name:`showScrollbar`,type:`boolean`,defaultValue:`false`,description:`是否显示滚动条和右侧预留。`},{name:`placeholder`,type:`string`,defaultValue:`由 mode 和 range 决定`,description:`未选择时展示的占位文本。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`日期选择器尺寸。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`日期选择器视觉类型。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义宽度；设置为 100% 时占满父容器。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`展示错误状态。`},{name:`ref`,type:`Ref<HTMLButtonElement>`,description:`透传 ref。`}]});export{R as default};