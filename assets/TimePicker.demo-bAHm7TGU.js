import{aN as X,b5 as m,b8 as Be,b3 as a,aO as k,E as me,t as he,m as Le,aM as Fe}from"./index-BFdlIxUH.js";import{F as Oe,a as Ke}from"./floatingPanelParts-C7IvrLy-.js";import{u as _e}from"./useFloatingPanel-DpYTaepU.js";import{d as qe}from"./defineDoc-CmN89srR.js";function Ge(l){return Array.isArray(l)?l:["hour","minute","second"]}function N(l){var o;const e=new Date,i={hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()};if(!l)return P(i);const n=l.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(n)return P({hour:Number(n[1]),minute:Number(n[2]),second:Number(n[3]??i.second)});const s=l.match(/^(?:\d{4}-\d{2}-\d{2}[ T])?(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/);if(s){const b=(o=s[4])==null?void 0:o.toLowerCase(),u=Number(s[1]);return P({hour:b==="pm"&&u<12?u+12:b==="am"&&u===12?0:u,minute:Number(s[2]),second:Number(s[3]??i.second)})}return P(i)}function P(l){return{hour:X(Math.trunc(l.hour),0,23),minute:X(Math.trunc(l.minute),0,59),second:X(Math.trunc(l.second),0,59)}}function K(l,e){const i=e.includes("hour"),n=e.includes("minute"),s=e.includes("second");return!i&&!n&&!s?"":[i?_(l.hour):null,n?_(l.minute):null,s?_(l.second):null].filter(b=>b!==null).join(":")}function Je(l,e){const i=N(l);return K(i,e)}function Qe(l,e){var x,H,y,M,V,E;const i=Math.max(1,Math.trunc((e==null?void 0:e.hourStep)??1)),n=Math.max(1,Math.trunc((e==null?void 0:e.minuteStep)??1)),s=Math.max(1,Math.trunc((e==null?void 0:e.secondStep)??1)),o=(e==null?void 0:e.use12Hours)??!1,b=((H=(x=e==null?void 0:e.disabledTime)==null?void 0:x.disabledHours)==null?void 0:H.call(x))??[],u=(e==null?void 0:e.selectedParts)??N("");if(l==="hour"){const d=o?1:0,C=o?12:23,q=e==null?void 0:e.period;return Y(d,C,i).map(T=>{const R=o?Xe(T.value,q):T.value;return{...T,disabled:b.includes(R)}})}if(l==="minute"){const d=((M=(y=e==null?void 0:e.disabledTime)==null?void 0:y.disabledMinutes)==null?void 0:M.call(y,u.hour))??[];return Y(0,59,n).map(C=>({...C,disabled:d.includes(C.value)}))}const z=((E=(V=e==null?void 0:e.disabledTime)==null?void 0:V.disabledSeconds)==null?void 0:E.call(V,u.hour,u.minute))??[];return Y(0,59,s).map(d=>({...d,disabled:z.includes(d.value)}))}function Ue(l){return Math.max(244,l*4.25*16)}const Y=(l,e,i)=>Array.from({length:Math.floor((e-l)/i)+1},(n,s)=>{const o=l+s*i;return{value:o,label:_(o)}}).filter(n=>n.value<=e),Xe=(l,e)=>{const i=Math.trunc(l);return e==="pm"?i===12?12:i+12:e==="am"&&i===12?0:i},_=l=>String(l).padStart(2,"0");function c(l){const{ref:e,allowClear:i=!1,disabledTime:n=null,format:s,hourStep:o=1,minuteStep:b=1,needConfirm:u=!1,presets:z=[],secondStep:x=1,showNow:H=!1,showScrollbar:y=!1,wheelColumns:M="time",size:V="md",variant:E="outline",use12Hours:d=!1,width:C,invalid:q=!1,placeholder:T,name:R,value:we,defaultValue:ae="",onValueChange:ke,className:ye,disabled:$,style:ve,id:Pe,onBlur:xe,onClick:G,onKeyDown:J,...I}=l,Ve=m.useId(),te=Pe??Ve,Q=`${te}-panel`,ie=`${Q}-label`,re=m.useRef(null),B=m.useRef(null),U=m.useRef(null),[h,v]=m.useState(!1),[p,Ce]=Be({value:we,defaultValue:ae,onChange:ke}),[ne,g]=m.useState(ae),w=m.useMemo(()=>Ge(M),[M]),L=w.includes("hour"),S=u&&h?ne:p,D=m.useMemo(()=>N(S),[S]),F=m.useMemo(()=>d&&L?le(D.hour):void 0,[L,D.hour,d]),Te=m.useCallback(()=>v(!1),[]),{position:ge,updatePosition:se}=_e({open:h,rootRef:re,triggerRef:B,panelRef:U,minWidth:Ue(w.length),matchTriggerWidth:!0,fullWidthBelow:420,fallbackHeight:250,onClose:Te}),ue=q||I["aria-invalid"]===!0||I["aria-invalid"]==="true",Se=Ze({width:C,style:ve}),ce=el({value:p,columns:w,format:s,use12Hours:d}),je=ce??T??"选择时间",Ne=`${T??"选择时间"}面板`,He=t=>{B.current=t,Fe(e,t)};m.useEffect(()=>{u&&g(p)},[p,u,h]),m.useEffect(()=>{h&&se()},[h,se]),m.useEffect(()=>{var t;h&&((t=U.current)==null||t.querySelectorAll(".willa-time-picker-wheel-option--selected").forEach(r=>{r.scrollIntoView({block:"center",behavior:"smooth"})}))},[h,S]);const j=(t,r)=>{Ce(t),r&&v(!1)},Me=t=>{if(u){g(t);return}j(t,!1)},De=(t,r)=>{const W=N(S),f=P({...W,[t]:d&&t==="hour"?pe(r,F):r});Me(K(f,w))},We=t=>{if(J==null||J(t),!t.defaultPrevented){if(t.key==="Escape"){v(!1);return}(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),v(r=>!r))}},Ae=t=>{var r;t.key==="Escape"&&(t.stopPropagation(),u&&g(p),v(!1),(r=B.current)==null||r.focus())},ze=t=>{if(u){g(t);return}j(t,!0)},Ee=()=>{const t=P({hour:new Date().getHours(),minute:new Date().getMinutes(),second:new Date().getSeconds()});j(K(t,w),!0)},oe=()=>{j("",!0)},Re=()=>{j(ne,!0)},$e=()=>{var t;g(p),v(!1),(t=B.current)==null||t.focus()},de=t=>{if(!d||!L)return;const r=ee(D.hour),W=P({...D,hour:pe(r,t)}),f=K(W,w);if(u){g(f);return}j(f,!1)},Ie=h?a.jsx(Oe,{open:h,children:a.jsxs(Ke,{panelRef:U,id:Q,className:k("willa-time-picker-panel","willa-time-picker-panel--wheel"),position:ge,role:"dialog",ariaLabelledBy:ie,onKeyDown:Ae,children:[a.jsx("span",{id:ie,className:"willa-time-picker-panel-label",children:Ne}),z.length>0?a.jsx("div",{className:"willa-time-picker-presets","aria-label":"快捷时间预设",children:z.map(t=>{const r=t.value===S;return a.jsx("button",{className:k("willa-time-picker-preset",r&&"willa-time-picker-preset--selected"),type:"button",onClick:()=>ze(t.value),children:t.label},t.value)})}):null,a.jsx("div",{className:"willa-time-picker-wheel",style:{gridTemplateColumns:`repeat(${w.length}, minmax(3.75rem, 1fr))`},children:w.map(t=>{const r=N(S),W=d&&t==="hour"?ee(r.hour):r[t];return a.jsxs("div",{className:"willa-time-picker-wheel-column",children:[a.jsx("div",{className:"willa-time-picker-wheel-label",children:Ye[t]}),a.jsx("div",{className:k("willa-time-picker-wheel-options",y&&"willa-time-picker-wheel-options--scrollbar",y&&"willa-form-scrollbar"),children:Qe(t,{hourStep:o,minuteStep:b,secondStep:x,use12Hours:d,disabledTime:n,selectedParts:D,period:F??void 0}).map(f=>a.jsx("button",{className:k("willa-time-picker-wheel-option",f.disabled&&"willa-time-picker-wheel-option--disabled",f.value===W&&"willa-time-picker-wheel-option--selected"),type:"button",disabled:f.disabled,onClick:()=>De(t,f.value),children:f.label},f.value))})]},t)})}),d&&L?a.jsxs("div",{className:"willa-time-picker-periods","aria-label":"上午下午切换",children:[a.jsx("button",{type:"button",className:k("willa-time-picker-period",F==="am"&&"willa-time-picker-period--selected"),onClick:()=>de("am"),children:"上午"}),a.jsx("button",{type:"button",className:k("willa-time-picker-period",F==="pm"&&"willa-time-picker-period--selected"),onClick:()=>de("pm"),children:"下午"})]}):null,i||H||u?a.jsxs("div",{className:"willa-time-picker-footer",children:[a.jsxs("div",{className:"willa-time-picker-footer-start",children:[i?a.jsxs("button",{type:"button",className:"willa-time-picker-action",onClick:oe,children:[a.jsx(me,{}),"清除"]}):null,H?a.jsxs("button",{type:"button",className:"willa-time-picker-action",onClick:Ee,children:[a.jsx(he,{"aria-hidden":"true"}),"现在"]}):null]}),u?a.jsxs("div",{className:"willa-time-picker-footer-end",children:[a.jsx("button",{type:"button",className:"willa-time-picker-action",onClick:$e,children:"取消"}),a.jsxs("button",{type:"button",className:"willa-time-picker-action willa-time-picker-action--primary",onClick:Re,children:[a.jsx(Le,{}),"确定"]})]}):null]}):null]})}):null;return a.jsxs("span",{ref:re,className:k("willa-time-picker",`willa-time-picker--${V}`,`willa-time-picker--${E}`,i&&"willa-time-picker--clearable",h&&"willa-time-picker--open",$&&"willa-time-picker--disabled",ue&&"willa-time-picker--invalid",ye),style:Se,"aria-disabled":$||void 0,children:[R?a.jsx("input",{type:"hidden",name:R,value:p,disabled:$}):null,a.jsxs("button",{...I,ref:He,id:te,type:"button",className:"willa-time-picker-control",disabled:$,"aria-expanded":h,"aria-controls":h?Q:void 0,"aria-haspopup":"dialog","aria-invalid":ue||I["aria-invalid"],onBlur:xe,onClick:t=>{G==null||G(t),t.defaultPrevented||v(r=>!r)},onKeyDown:We,children:[a.jsx("span",{className:k("willa-time-picker-value",!ce&&"willa-time-picker-value--placeholder"),children:je}),i&&p?null:a.jsx(he,{className:"willa-time-picker-icon","aria-hidden":"true"})]}),i&&p?a.jsx("button",{type:"button",className:"willa-time-picker-clear","aria-label":"清除时间",onClick:t=>{t.stopPropagation(),oe()},children:a.jsx(me,{"aria-hidden":"true"})}):null,Ie]})}c.displayName="TimePicker";const Ye={hour:"时",minute:"分",second:"秒"},Ze=l=>{const{width:e,style:i}=l;return{...i,...e===void 0?void 0:{width:e}}},el=l=>{const{value:e,columns:i,format:n,use12Hours:s=!1}=l;if(!e)return;const o=N(e);return n?fe(o,n):s&&i.includes("hour")?fe(o,ll(i)):Je(e,i)},ll=l=>`${[l.includes("hour")?"hh":null,l.includes("minute")?"mm":null,l.includes("second")?"ss":null].filter(i=>i!==null).join(":")} A`,fe=(l,e)=>{const i=ee(l.hour),n={HH:O(l.hour),H:String(l.hour),hh:O(i),h:String(i),mm:O(l.minute),m:String(l.minute),ss:O(l.second),s:String(l.second),A:le(l.hour)==="pm"?"PM":"AM",a:le(l.hour)==="pm"?"pm":"am"};return e.replace(/HH|hh|mm|ss|H|h|m|s|A|a/g,s=>n[s]??s)},ee=l=>{const e=Math.trunc(l)%24;return e%12===0?12:e%12},le=l=>Math.trunc(l)>=12?"pm":"am",pe=(l,e)=>{const i=Math.trunc(l);return e==="pm"?i===12?12:i+12:e==="am"&&i===12?0:i},O=l=>String(l).padStart(2,"0"),A={display:"grid",gap:"0.76rem",maxWidth:"42rem"},be=["hour","minute"],Z=["hour","minute","second"],al=[{label:"08:30",value:"08:30:00"},{label:"12:00",value:"12:00:00"},{label:"18:30",value:"18:30:00"}],tl={disabledHours:()=>[0,1,2,3,4,5],disabledMinutes:l=>l===9?[0,1,2,3,4,5]:[],disabledSeconds:(l,e)=>l===9&&e===30?[0,1,2,3,4]:[]},il=()=>{const[l,e]=m.useState("09:30:00");return a.jsx(c,{value:l,onValueChange:e,width:"100%","aria-label":"选择时间"})},rl=()=>{const[l,e]=m.useState("09:30:00");return a.jsx(c,{value:l,onValueChange:e,needConfirm:!0,showNow:!0,allowClear:!0,use12Hours:!0,format:"hh:mm A",width:"100%","aria-label":"选择时间"})},ol=qe({id:"time-picker",name:"TimePicker",category:"form",packageName:"willa/TimePicker",description:"用于选择时间点、时分秒和调度时间。",imports:[{name:"TimePicker",from:"willa/TimePicker"}],css:"willa/TimePicker.css",demo:{name:"TimePickerPreview",component:il},code:`
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
  `,sections:[{title:"基础用法",code:`
        <TimePicker defaultValue="09:30:00" width="100%" aria-label="选择时间" />;
      `,content:a.jsx(c,{defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})},{title:"列配置",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:be,defaultValue:"09:30:00",width:"100%","aria-label":"选择时分"}),a.jsx(c,{wheelColumns:["minute","second"],defaultValue:"09:30:45",width:"100%","aria-label":"选择分秒"})]})},{title:"12 小时制",code:`
        <TimePicker
          use12Hours
          format="hh:mm A"
          defaultValue="09:30:00"
          width="100%"
          aria-label="选择时间"
        />;
      `,content:a.jsx(c,{use12Hours:!0,format:"hh:mm A",defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})},{title:"步进与禁用",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:Z,hourStep:2,minuteStep:15,secondStep:10,defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"}),a.jsx(c,{wheelColumns:be,disabledTime:tl,defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})]})},{title:"确认模式",code:`
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
      `,content:a.jsx(rl,{})},{title:"滚动条",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:Z,defaultValue:"09:30:00",width:"100%","aria-label":"隐藏滚动条"}),a.jsx(c,{wheelColumns:Z,showScrollbar:!0,defaultValue:"09:30:00",width:"100%","aria-label":"显示滚动条"})]})},{title:"快捷预设",code:`
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
      `,content:a.jsx(c,{presets:al,defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})},{title:"视觉类型",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{variant:"outline",defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"}),a.jsx(c,{variant:"soft",defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <TimePicker size="sm" defaultValue="09:30:00" />
          <TimePicker size="md" defaultValue="09:30:00" />
          <TimePicker size="lg" defaultValue="09:30:00" />
        </div>;
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{size:"sm",defaultValue:"09:30:00"}),a.jsx(c,{size:"md",defaultValue:"09:30:00"}),a.jsx(c,{size:"lg",defaultValue:"09:30:00"})]})}],props:[{name:"wheelColumns",type:'"time" | Array<TimePickerWheelColumn>',defaultValue:'"time"',description:"滚动选择器展示的列。"},{name:"allowClear",type:"boolean",defaultValue:"false",description:"展示清除操作。"},{name:"disabledTime",type:"TimePickerDisabledTime",description:"按小时、分钟、秒禁用选项。"},{name:"format",type:"string",description:"输入框显示格式，支持 HH / hh / mm / ss / A / a。"},{name:"hourStep",type:"number",defaultValue:"1",description:"小时列步进。"},{name:"minuteStep",type:"number",defaultValue:"1",description:"分钟列步进。"},{name:"needConfirm",type:"boolean",defaultValue:"false",description:"开启确认模式，选择后先保留草稿，确认后提交。"},{name:"presets",type:"Array<TimePickerPreset>",description:"快捷时间预设。"},{name:"secondStep",type:"number",defaultValue:"1",description:"秒列步进。"},{name:"showNow",type:"boolean",defaultValue:"false",description:"展示当前时间快捷操作。"},{name:"showScrollbar",type:"boolean",defaultValue:"false",description:"是否显示滚动条和右侧预留。"},{name:"value",type:"string",description:"受控值，格式为 HH:mm 或 HH:mm:ss。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"placeholder",type:"string",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"时间选择器尺寸。"},{name:"use12Hours",type:"boolean",defaultValue:"false",description:"使用 12 小时制并显示上午 / 下午。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"时间选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"ref",type:"Ref<HTMLButtonElement>",description:"透传 ref。"}]});export{ol as default};
