import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{_ as i,u as a,x as o}from"./react-icons.esm-mVdwEXuX.js";import{A as s,C as c,H as ee}from"./src-D2lZkBJ2.js";import{t as l}from"./defineDoc-Cid5xIoZ.js";import{t as te}from"./useFloatingPanel-DpwdahYX.js";import{n as ne,t as re}from"./floatingPanelParts-CvYlqcGS.js";var u=n(e()),d=n(r());function ie(e){return Array.isArray(e)?e:[`hour`,`minute`,`second`]}function f(e){let t=new Date,n={hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()};if(!e)return p(n);let r=e.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(r)return p({hour:Number(r[1]),minute:Number(r[2]),second:Number(r[3]??n.second)});let i=e.match(/^(?:\d{4}-\d{2}-\d{2}[ T])?(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/);if(i){let e=i[4]?.toLowerCase(),t=Number(i[1]);return p({hour:e===`pm`&&t<12?t+12:e===`am`&&t===12?0:t,minute:Number(i[2]),second:Number(i[3]??n.second)})}return p(n)}function p(e){return{hour:s(Math.trunc(e.hour),0,23),minute:s(Math.trunc(e.minute),0,59),second:s(Math.trunc(e.second),0,59)}}function m(e,t){let n=t.includes(`hour`),r=t.includes(`minute`),i=t.includes(`second`);return!n&&!r&&!i?``:[n?v(e.hour):null,r?v(e.minute):null,i?v(e.second):null].filter(e=>e!==null).join(`:`)}function h(e,t){return m(f(e),t)}function ae(e,t){let n=Math.max(1,Math.trunc(t?.hourStep??1)),r=Math.max(1,Math.trunc(t?.minuteStep??1)),i=Math.max(1,Math.trunc(t?.secondStep??1)),a=t?.use12Hours??!1,o=t?.disabledTime?.disabledHours?.()??[],s=t?.selectedParts??f(``);if(e===`hour`){let e=+!!a,r=a?12:23,i=t?.period;return g(e,r,n).map(e=>{let t=a?_(e.value,i):e.value;return{...e,disabled:o.includes(t)}})}if(e===`minute`){let e=t?.disabledTime?.disabledMinutes?.(s.hour)??[];return g(0,59,r).map(t=>({...t,disabled:e.includes(t.value)}))}let c=t?.disabledTime?.disabledSeconds?.(s.hour,s.minute)??[];return g(0,59,i).map(e=>({...e,disabled:c.includes(e.value)}))}function oe(e){return Math.max(244,e*4.25*16)}var g=(e,t,n)=>Array.from({length:Math.floor((t-e)/n)+1},(t,r)=>{let i=e+r*n;return{value:i,label:v(i)}}).filter(e=>e.value<=t),_=(e,t)=>{let n=Math.trunc(e);return t===`pm`?n===12?12:n+12:t===`am`&&n===12?0:n},v=e=>String(e).padStart(2,`0`),y=t();function b(e){let{ref:t,allowClear:n=!1,disabledTime:r=null,format:s,hourStep:l=1,minuteStep:h=1,needConfirm:g=!1,presets:_=[],secondStep:v=1,showNow:b=!1,showScrollbar:x=!1,wheelColumns:S=`time`,size:E=`md`,variant:D=`outline`,use12Hours:O=!1,width:k,invalid:ue=!1,placeholder:de,name:fe,value:pe,defaultValue:A=``,onValueChange:me,className:he,disabled:j,style:ge,id:_e,onBlur:ve,onClick:ye,onKeyDown:be,...M}=e,xe=(0,u.useId)(),N=_e??xe,P=`${N}-panel`,F=`${P}-label`,I=(0,u.useRef)(null),L=(0,u.useRef)(null),R=(0,u.useRef)(null),[z,B]=(0,u.useState)(!1),[V,Se]=ee({value:pe,defaultValue:A,onChange:me}),[H,U]=(0,u.useState)(A),W=(0,u.useMemo)(()=>ie(S),[S]),G=W.includes(`hour`),K=g&&z?H:V,q=(0,u.useMemo)(()=>f(K),[K]),J=(0,u.useMemo)(()=>O&&G?w(q.hour):void 0,[G,q.hour,O]),Ce=(0,u.useCallback)(()=>B(!1),[]),{position:we,updatePosition:Y}=te({open:z,rootRef:I,triggerRef:L,panelRef:R,minWidth:oe(W.length),matchTriggerWidth:!0,fullWidthBelow:420,fallbackHeight:250,onClose:Ce}),X=ue||M[`aria-invalid`]===!0||M[`aria-invalid`]===`true`,Te=ce({width:k,style:ge}),Z=le({value:V,columns:W,format:s,use12Hours:O}),Ee=Z??de??`选择时间`,De=`${de??`选择时间`}面板`,Oe=e=>{L.current=e,c(t,e)};(0,u.useEffect)(()=>{g&&U(V)},[V,g,z]),(0,u.useEffect)(()=>{z&&Y()},[z,Y]),(0,u.useEffect)(()=>{z&&R.current?.querySelectorAll(`.willa-time-picker-wheel-option--selected`).forEach(e=>{e.scrollIntoView({block:`center`,behavior:`smooth`})})},[z,K]);let Q=(e,t)=>{Se(e),t&&B(!1)},ke=e=>{if(g){U(e);return}Q(e,!1)},Ae=(e,t)=>{let n=p({...f(K),[e]:O&&e===`hour`?T(t,J):t});ke(m(n,W))},je=e=>{if(be?.(e),!e.defaultPrevented){if(e.key===`Escape`){B(!1);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),B(e=>!e))}},Me=e=>{e.key===`Escape`&&(e.stopPropagation(),g&&U(V),B(!1),L.current?.focus())},Ne=e=>{if(g){U(e);return}Q(e,!0)},Pe=()=>{let e=p({hour:new Date().getHours(),minute:new Date().getMinutes(),second:new Date().getSeconds()});Q(m(e,W),!0)},Fe=()=>{Q(``,!0)},Ie=()=>{Q(H,!0)},Le=()=>{U(V),B(!1),L.current?.focus()},$=e=>{if(!O||!G)return;let t=C(q.hour),n=m(p({...q,hour:T(t,e)}),W);if(g){U(n);return}Q(n,!1)},Re=z?(0,y.jsx)(re,{open:z,children:(0,y.jsxs)(ne,{panelRef:R,id:P,className:(0,d.default)(`willa-time-picker-panel`,`willa-time-picker-panel--wheel`),position:we,role:`dialog`,ariaLabelledBy:F,onKeyDown:Me,children:[(0,y.jsx)(`span`,{id:F,className:`willa-time-picker-panel-label`,children:De}),_.length>0?(0,y.jsx)(`div`,{className:`willa-time-picker-presets`,"aria-label":`快捷时间预设`,children:_.map(e=>(0,y.jsx)(`button`,{className:(0,d.default)(`willa-time-picker-preset`,e.value===K&&`willa-time-picker-preset--selected`),type:`button`,onClick:()=>Ne(e.value),children:e.label},e.value))}):null,(0,y.jsx)(`div`,{className:`willa-time-picker-wheel`,style:{gridTemplateColumns:`repeat(${W.length}, minmax(3.75rem, 1fr))`},children:W.map(e=>{let t=f(K),n=O&&e===`hour`?C(t.hour):t[e];return(0,y.jsxs)(`div`,{className:`willa-time-picker-wheel-column`,children:[(0,y.jsx)(`div`,{className:`willa-time-picker-wheel-label`,children:se[e]}),(0,y.jsx)(`div`,{className:(0,d.default)(`willa-time-picker-wheel-options`,x&&`willa-time-picker-wheel-options--scrollbar`,x&&`willa-form-scrollbar`),children:ae(e,{hourStep:l,minuteStep:h,secondStep:v,use12Hours:O,disabledTime:r,selectedParts:q,period:J??void 0}).map(t=>(0,y.jsx)(`button`,{className:(0,d.default)(`willa-time-picker-wheel-option`,t.disabled&&`willa-time-picker-wheel-option--disabled`,t.value===n&&`willa-time-picker-wheel-option--selected`),type:`button`,disabled:t.disabled,onClick:()=>Ae(e,t.value),children:t.label},t.value))})]},e)})}),O&&G?(0,y.jsxs)(`div`,{className:`willa-time-picker-periods`,"aria-label":`上午下午切换`,children:[(0,y.jsx)(`button`,{type:`button`,className:(0,d.default)(`willa-time-picker-period`,J===`am`&&`willa-time-picker-period--selected`),onClick:()=>$(`am`),children:`上午`}),(0,y.jsx)(`button`,{type:`button`,className:(0,d.default)(`willa-time-picker-period`,J===`pm`&&`willa-time-picker-period--selected`),onClick:()=>$(`pm`),children:`下午`})]}):null,n||b||g?(0,y.jsxs)(`div`,{className:`willa-time-picker-footer`,children:[(0,y.jsxs)(`div`,{className:`willa-time-picker-footer-start`,children:[n?(0,y.jsxs)(`button`,{type:`button`,className:`willa-time-picker-action`,onClick:Fe,children:[(0,y.jsx)(o,{}),`清除`]}):null,b?(0,y.jsxs)(`button`,{type:`button`,className:`willa-time-picker-action`,onClick:Pe,children:[(0,y.jsx)(i,{"aria-hidden":`true`}),`现在`]}):null]}),g?(0,y.jsxs)(`div`,{className:`willa-time-picker-footer-end`,children:[(0,y.jsx)(`button`,{type:`button`,className:`willa-time-picker-action`,onClick:Le,children:`取消`}),(0,y.jsxs)(`button`,{type:`button`,className:`willa-time-picker-action willa-time-picker-action--primary`,onClick:Ie,children:[(0,y.jsx)(a,{}),`确定`]})]}):null]}):null]})}):null;return(0,y.jsxs)(`span`,{ref:I,className:(0,d.default)(`willa-time-picker`,`willa-time-picker--${E}`,`willa-time-picker--${D}`,n&&`willa-time-picker--clearable`,z&&`willa-time-picker--open`,j&&`willa-time-picker--disabled`,X&&`willa-time-picker--invalid`,he),style:Te,"aria-disabled":j||void 0,children:[fe?(0,y.jsx)(`input`,{type:`hidden`,name:fe,value:V,disabled:j}):null,(0,y.jsxs)(`button`,{...M,ref:Oe,id:N,type:`button`,className:`willa-time-picker-control`,disabled:j,"aria-expanded":z,"aria-controls":z?P:void 0,"aria-haspopup":`dialog`,"aria-invalid":X||M[`aria-invalid`],onBlur:ve,onClick:e=>{ye?.(e),e.defaultPrevented||B(e=>!e)},onKeyDown:je,children:[(0,y.jsx)(`span`,{className:(0,d.default)(`willa-time-picker-value`,!Z&&`willa-time-picker-value--placeholder`),children:Ee}),n&&V?null:(0,y.jsx)(i,{className:`willa-time-picker-icon`,"aria-hidden":`true`})]}),n&&V?(0,y.jsx)(`button`,{type:`button`,className:`willa-time-picker-clear`,"aria-label":`清除时间`,onClick:e=>{e.stopPropagation(),Fe()},children:(0,y.jsx)(o,{"aria-hidden":`true`})}):null,Re]})}b.displayName=`TimePicker`;var se={hour:`时`,minute:`分`,second:`秒`},ce=e=>{let{width:t,style:n}=e;return{...n,...t===void 0?void 0:{width:t}}},le=e=>{let{value:t,columns:n,format:r,use12Hours:i=!1}=e;if(!t)return;let a=f(t);return r?S(a,r):i&&n.includes(`hour`)?S(a,x(n)):h(t,n)},x=e=>`${[e.includes(`hour`)?`hh`:null,e.includes(`minute`)?`mm`:null,e.includes(`second`)?`ss`:null].filter(e=>e!==null).join(`:`)} A`,S=(e,t)=>{let n=C(e.hour),r={HH:E(e.hour),H:String(e.hour),hh:E(n),h:String(n),mm:E(e.minute),m:String(e.minute),ss:E(e.second),s:String(e.second),A:w(e.hour)===`pm`?`PM`:`AM`,a:w(e.hour)===`pm`?`pm`:`am`};return t.replace(/HH|hh|mm|ss|H|h|m|s|A|a/g,e=>r[e]??e)},C=e=>{let t=Math.trunc(e)%24;return t%12==0?12:t%12},w=e=>Math.trunc(e)>=12?`pm`:`am`,T=(e,t)=>{let n=Math.trunc(e);return t===`pm`?n===12?12:n+12:t===`am`&&n===12?0:n},E=e=>String(e).padStart(2,`0`),D={display:`grid`,gap:`0.76rem`,maxWidth:`42rem`},O=[`hour`,`minute`],k=[`hour`,`minute`,`second`],ue=l({id:`time-picker`,name:`TimePicker`,category:`form`,packageName:`willa/TimePicker`,description:`用于选择时间点、时分秒和调度时间。`,imports:[{name:`TimePicker`,from:`willa/TimePicker`}],css:`willa/TimePicker.css`,demo:{name:`TimePickerPreview`,component:()=>{let[e,t]=(0,u.useState)(`09:30:00`);return(0,y.jsx)(b,{value:e,onValueChange:t,width:`100%`,"aria-label":`选择时间`})}},code:`
    import { useState } from "react";
    import { TimePicker } from "willa/TimePicker";
    import "willa/TimePicker.css";

    const TimePickerPreview = () => {
      const [value, setValue] = useState("09:30:00");

      return (
        <TimePicker
          value={value}
          onValueChange={setValue}
          width="100%"
          aria-label="选择时间"
        />
      );
    };
  `,sections:[{title:`基础用法`,code:`
        <TimePicker defaultValue="09:30:00" width="100%" aria-label="选择时间" />;
      `,content:(0,y.jsx)(b,{defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`})},{title:`列配置`,code:`
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute"]}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时分"
          />
          <TimePicker
            wheelColumns={["minute", "second"]}
            defaultValue="09:30:45"
            width="100%"
            aria-label="选择分秒"
          />
        </div>;
      `,content:(0,y.jsxs)(`div`,{style:D,children:[(0,y.jsx)(b,{wheelColumns:O,defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时分`}),(0,y.jsx)(b,{wheelColumns:[`minute`,`second`],defaultValue:`09:30:45`,width:`100%`,"aria-label":`选择分秒`})]})},{title:`12 小时制`,code:`
        <TimePicker
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,content:(0,y.jsx)(b,{use12Hours:!0,format:`hh:mm A`,defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`})},{title:`步进与禁用`,code:`
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            hourStep={2}
            minuteStep={15}
            secondStep={10}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            wheelColumns={["hour", "minute"]}
            disabledTime={disabledTime}
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>;
      `,content:(0,y.jsxs)(`div`,{style:D,children:[(0,y.jsx)(b,{wheelColumns:k,hourStep:2,minuteStep:15,secondStep:10,defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`}),(0,y.jsx)(b,{wheelColumns:O,disabledTime:{disabledHours:()=>[0,1,2,3,4,5],disabledMinutes:e=>e===9?[0,1,2,3,4,5]:[],disabledSeconds:(e,t)=>e===9&&t===30?[0,1,2,3,4]:[]},defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`})]})},{title:`确认模式`,code:`
        <TimePicker
          needConfirm
          showNow
          allowClear
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,content:(0,y.jsx)(()=>{let[e,t]=(0,u.useState)(`09:30:00`);return(0,y.jsx)(b,{value:e,onValueChange:t,needConfirm:!0,showNow:!0,allowClear:!0,use12Hours:!0,format:`hh:mm A`,width:`100%`,"aria-label":`选择时间`})},{})},{title:`滚动条`,code:`
        <div style={stackStyle}>
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            defaultValue="09:30:00"
            width="100%"
            aria-label="隐藏滚动条"
          />
          <TimePicker
            wheelColumns={["hour", "minute", "second"]}
            showScrollbar
            defaultValue="09:30:00"
            width="100%"
            aria-label="显示滚动条"
          />
        </div>;
      `,content:(0,y.jsxs)(`div`,{style:D,children:[(0,y.jsx)(b,{wheelColumns:k,defaultValue:`09:30:00`,width:`100%`,"aria-label":`隐藏滚动条`}),(0,y.jsx)(b,{wheelColumns:k,showScrollbar:!0,defaultValue:`09:30:00`,width:`100%`,"aria-label":`显示滚动条`})]})},{title:`快捷预设`,code:`
        <TimePicker
          presets={[
            { label: "08:30", value: "08:30:00" },
            { label: "12:00", value: "12:00:00" },
            { label: "18:30", value: "18:30:00" },
          ]}
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,content:(0,y.jsx)(b,{presets:[{label:`08:30`,value:`08:30:00`},{label:`12:00`,value:`12:00:00`},{label:`18:30`,value:`18:30:00`}],defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`})},{title:`视觉类型`,code:`
        <div style={stackStyle}>
          <TimePicker
            variant="outline"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
          <TimePicker
            variant="soft"
            defaultValue="09:30:00"
            width="100%"
            aria-label="选择时间"
          />
        </div>;
      `,content:(0,y.jsxs)(`div`,{style:D,children:[(0,y.jsx)(b,{variant:`outline`,defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`}),(0,y.jsx)(b,{variant:`soft`,defaultValue:`09:30:00`,width:`100%`,"aria-label":`选择时间`})]})},{title:`尺寸`,code:`
        <div style={stackStyle}>
          <TimePicker size="sm" defaultValue="09:30:00" />
          <TimePicker size="md" defaultValue="09:30:00" />
          <TimePicker size="lg" defaultValue="09:30:00" />
        </div>;
      `,content:(0,y.jsxs)(`div`,{style:D,children:[(0,y.jsx)(b,{size:`sm`,defaultValue:`09:30:00`}),(0,y.jsx)(b,{size:`md`,defaultValue:`09:30:00`}),(0,y.jsx)(b,{size:`lg`,defaultValue:`09:30:00`})]})}],props:[{name:`wheelColumns`,type:`"time" | Array<TimePickerWheelColumn>`,defaultValue:`"time"`,description:`滚动选择器展示的列。`},{name:`allowClear`,type:`boolean`,defaultValue:`false`,description:`展示清除操作。`},{name:`disabledTime`,type:`TimePickerDisabledTime`,description:`按小时、分钟、秒禁用选项。`},{name:`format`,type:`string`,description:`输入框显示格式，支持 HH / hh / mm / ss / A / a。`},{name:`hourStep`,type:`number`,defaultValue:`1`,description:`小时列步进。`},{name:`minuteStep`,type:`number`,defaultValue:`1`,description:`分钟列步进。`},{name:`needConfirm`,type:`boolean`,defaultValue:`false`,description:`开启确认模式，选择后先保留草稿，确认后提交。`},{name:`presets`,type:`Array<TimePickerPreset>`,description:`快捷时间预设。`},{name:`secondStep`,type:`number`,defaultValue:`1`,description:`秒列步进。`},{name:`showNow`,type:`boolean`,defaultValue:`false`,description:`展示当前时间快捷操作。`},{name:`showScrollbar`,type:`boolean`,defaultValue:`false`,description:`是否显示滚动条和右侧预留。`},{name:`value`,type:`string`,description:`受控值，格式为 HH:mm 或 HH:mm:ss。`},{name:`defaultValue`,type:`string`,defaultValue:`""`,description:`非受控默认值。`},{name:`onValueChange`,type:`(value: string) => void`,description:`选择值变化时触发。`},{name:`name`,type:`string`,description:`表单提交字段名。`},{name:`placeholder`,type:`string`,description:`未选择时展示的占位文本。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`时间选择器尺寸。`},{name:`use12Hours`,type:`boolean`,defaultValue:`false`,description:`使用 12 小时制并显示上午 / 下午。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`时间选择器视觉类型。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义宽度；设置为 100% 时占满父容器。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`展示错误状态。`},{name:`ref`,type:`Ref<HTMLButtonElement>`,description:`透传 ref。`}]});export{ue as default};