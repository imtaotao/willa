import{aK as Y,b0 as o,a_ as a,aL as k,D as fe,t as pe,m as Be,aJ as Fe}from"./index-CC59UgBO.js";import{F as Ke,a as Oe}from"./floatingPanelParts-DnGSmlQU.js";import{u as _e}from"./useFloatingPanel-CdWxKAA5.js";import{d as qe}from"./defineDoc-CD9LX1OM.js";function Je(l){return Array.isArray(l)?l:["hour","minute","second"]}function N(l){var d;const e=new Date,i={hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()};if(!l)return P(i);const n=l.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(n)return P({hour:Number(n[1]),minute:Number(n[2]),second:Number(n[3]??i.second)});const s=l.match(/^(?:\d{4}-\d{2}-\d{2}[ T])?(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/);if(s){const w=(d=s[4])==null?void 0:d.toLowerCase(),u=Number(s[1]);return P({hour:w==="pm"&&u<12?u+12:w==="am"&&u===12?0:u,minute:Number(s[2]),second:Number(s[3]??i.second)})}return P(i)}function P(l){return{hour:Y(Math.trunc(l.hour),0,23),minute:Y(Math.trunc(l.minute),0,59),second:Y(Math.trunc(l.second),0,59)}}function O(l,e){const i=e.includes("hour"),n=e.includes("minute"),s=e.includes("second");return!i&&!n&&!s?"":[i?_(l.hour):null,n?_(l.minute):null,s?_(l.second):null].filter(w=>w!==null).join(":")}function Ge(l,e){const i=N(l);return O(i,e)}function Qe(l,e){var x,H,y,M,V,I;const i=Math.max(1,Math.trunc((e==null?void 0:e.hourStep)??1)),n=Math.max(1,Math.trunc((e==null?void 0:e.minuteStep)??1)),s=Math.max(1,Math.trunc((e==null?void 0:e.secondStep)??1)),d=(e==null?void 0:e.use12Hours)??!1,w=((H=(x=e==null?void 0:e.disabledTime)==null?void 0:x.disabledHours)==null?void 0:H.call(x))??[],u=(e==null?void 0:e.selectedParts)??N("");if(l==="hour"){const m=d?1:0,T=d?12:23,q=e==null?void 0:e.period;return Z(m,T,i).map(C=>{const R=d?Xe(C.value,q):C.value;return{...C,disabled:w.includes(R)}})}if(l==="minute"){const m=((M=(y=e==null?void 0:e.disabledTime)==null?void 0:y.disabledMinutes)==null?void 0:M.call(y,u.hour))??[];return Z(0,59,n).map(T=>({...T,disabled:m.includes(T.value)}))}const z=((I=(V=e==null?void 0:e.disabledTime)==null?void 0:V.disabledSeconds)==null?void 0:I.call(V,u.hour,u.minute))??[];return Z(0,59,s).map(m=>({...m,disabled:z.includes(m.value)}))}function Ue(l){return Math.max(244,l*4.25*16)}const Z=(l,e,i)=>Array.from({length:Math.floor((e-l)/i)+1},(n,s)=>{const d=l+s*i;return{value:d,label:_(d)}}).filter(n=>n.value<=e),Xe=(l,e)=>{const i=Math.trunc(l);return e==="pm"?i===12?12:i+12:e==="am"&&i===12?0:i},_=l=>String(l).padStart(2,"0");function c(l){const{ref:e,allowClear:i=!1,disabledTime:n=null,format:s,hourStep:d=1,minuteStep:w=1,needConfirm:u=!1,presets:z=[],secondStep:x=1,showNow:H=!1,showScrollbar:y=!1,wheelColumns:M="time",size:V="md",variant:I="outline",use12Hours:m=!1,width:T,invalid:q=!1,placeholder:C,name:R,value:te,defaultValue:ie="",onValueChange:J,className:ye,disabled:$,style:ve,id:Pe,onBlur:xe,onClick:G,onKeyDown:Q,...E}=l,Ve=o.useId(),re=Pe??Ve,U=`${re}-panel`,ne=`${U}-label`,se=o.useRef(null),L=o.useRef(null),X=o.useRef(null),[h,v]=o.useState(!1),[Te,Ce]=o.useState(ie),[ue,S]=o.useState(ie),p=te??Te,b=o.useMemo(()=>Je(M),[M]),B=b.includes("hour"),g=u&&h?ue:p,D=o.useMemo(()=>N(g),[g]),F=o.useMemo(()=>m&&B?ae(D.hour):void 0,[B,D.hour,m]),Se=o.useCallback(()=>v(!1),[]),{position:ge,updatePosition:ce}=_e({open:h,rootRef:se,triggerRef:L,panelRef:X,minWidth:Ue(b.length),matchTriggerWidth:!0,fullWidthBelow:420,fallbackHeight:250,onClose:Se}),oe=q||E["aria-invalid"]===!0||E["aria-invalid"]==="true",je=Ze({width:T,style:ve}),de=el({value:p,columns:b,format:s,use12Hours:m}),Ne=de??C??"选择时间",He=`${C??"选择时间"}面板`,Me=t=>{L.current=t,Fe(e,t)};o.useEffect(()=>{u&&S(p)},[p,u,h]),o.useEffect(()=>{h&&ce()},[h,ce]),o.useEffect(()=>{var t;h&&((t=X.current)==null||t.querySelectorAll(".willa-time-picker-wheel-option--selected").forEach(r=>{r.scrollIntoView({block:"center",behavior:"smooth"})}))},[h,g]);const j=(t,r)=>{te===void 0&&Ce(t),J==null||J(t),r&&v(!1)},De=t=>{if(u){S(t);return}j(t,!1)},We=(t,r)=>{const W=N(g),f=P({...W,[t]:m&&t==="hour"?be(r,F):r});De(O(f,b))},Ae=t=>{if(Q==null||Q(t),!t.defaultPrevented){if(t.key==="Escape"){v(!1);return}(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),v(r=>!r))}},ze=t=>{var r;t.key==="Escape"&&(t.stopPropagation(),u&&S(p),v(!1),(r=L.current)==null||r.focus())},Ie=t=>{if(u){S(t);return}j(t,!0)},Re=()=>{const t=P({hour:new Date().getHours(),minute:new Date().getMinutes(),second:new Date().getSeconds()});j(O(t,b),!0)},me=()=>{j("",!0)},$e=()=>{j(ue,!0)},Ee=()=>{var t;S(p),v(!1),(t=L.current)==null||t.focus()},he=t=>{if(!m||!B)return;const r=le(D.hour),W=P({...D,hour:be(r,t)}),f=O(W,b);if(u){S(f);return}j(f,!1)},Le=h?a.jsx(Ke,{open:h,children:a.jsxs(Oe,{panelRef:X,id:U,className:k("willa-time-picker-panel","willa-time-picker-panel--wheel"),position:ge,role:"dialog",ariaLabelledBy:ne,onKeyDown:ze,children:[a.jsx("span",{id:ne,className:"willa-time-picker-panel-label",children:He}),z.length>0?a.jsx("div",{className:"willa-time-picker-presets","aria-label":"快捷时间预设",children:z.map(t=>{const r=t.value===g;return a.jsx("button",{className:k("willa-time-picker-preset",r&&"willa-time-picker-preset--selected"),type:"button",onClick:()=>Ie(t.value),children:t.label},t.value)})}):null,a.jsx("div",{className:"willa-time-picker-wheel",style:{gridTemplateColumns:`repeat(${b.length}, minmax(3.75rem, 1fr))`},children:b.map(t=>{const r=N(g),W=m&&t==="hour"?le(r.hour):r[t];return a.jsxs("div",{className:"willa-time-picker-wheel-column",children:[a.jsx("div",{className:"willa-time-picker-wheel-label",children:Ye[t]}),a.jsx("div",{className:k("willa-time-picker-wheel-options",y&&"willa-time-picker-wheel-options--scrollbar",y&&"willa-form-scrollbar"),children:Qe(t,{hourStep:d,minuteStep:w,secondStep:x,use12Hours:m,disabledTime:n,selectedParts:D,period:F??void 0}).map(f=>a.jsx("button",{className:k("willa-time-picker-wheel-option",f.disabled&&"willa-time-picker-wheel-option--disabled",f.value===W&&"willa-time-picker-wheel-option--selected"),type:"button",disabled:f.disabled,onClick:()=>We(t,f.value),children:f.label},f.value))})]},t)})}),m&&B?a.jsxs("div",{className:"willa-time-picker-periods","aria-label":"上午下午切换",children:[a.jsx("button",{type:"button",className:k("willa-time-picker-period",F==="am"&&"willa-time-picker-period--selected"),onClick:()=>he("am"),children:"上午"}),a.jsx("button",{type:"button",className:k("willa-time-picker-period",F==="pm"&&"willa-time-picker-period--selected"),onClick:()=>he("pm"),children:"下午"})]}):null,i||H||u?a.jsxs("div",{className:"willa-time-picker-footer",children:[a.jsxs("div",{className:"willa-time-picker-footer-start",children:[i?a.jsxs("button",{type:"button",className:"willa-time-picker-action",onClick:me,children:[a.jsx(fe,{}),"清除"]}):null,H?a.jsxs("button",{type:"button",className:"willa-time-picker-action",onClick:Re,children:[a.jsx(pe,{"aria-hidden":"true"}),"现在"]}):null]}),u?a.jsxs("div",{className:"willa-time-picker-footer-end",children:[a.jsx("button",{type:"button",className:"willa-time-picker-action",onClick:Ee,children:"取消"}),a.jsxs("button",{type:"button",className:"willa-time-picker-action willa-time-picker-action--primary",onClick:$e,children:[a.jsx(Be,{}),"确定"]})]}):null]}):null]})}):null;return a.jsxs("span",{ref:se,className:k("willa-time-picker",`willa-time-picker--${V}`,`willa-time-picker--${I}`,i&&"willa-time-picker--clearable",h&&"willa-time-picker--open",$&&"willa-time-picker--disabled",oe&&"willa-time-picker--invalid",ye),style:je,"aria-disabled":$||void 0,children:[R?a.jsx("input",{type:"hidden",name:R,value:p,disabled:$}):null,a.jsxs("button",{...E,ref:Me,id:re,type:"button",className:"willa-time-picker-control",disabled:$,"aria-expanded":h,"aria-controls":h?U:void 0,"aria-haspopup":"dialog","aria-invalid":oe||E["aria-invalid"],onBlur:xe,onClick:t=>{G==null||G(t),t.defaultPrevented||v(r=>!r)},onKeyDown:Ae,children:[a.jsx("span",{className:k("willa-time-picker-value",!de&&"willa-time-picker-value--placeholder"),children:Ne}),i&&p?null:a.jsx(pe,{className:"willa-time-picker-icon","aria-hidden":"true"})]}),i&&p?a.jsx("button",{type:"button",className:"willa-time-picker-clear","aria-label":"清除时间",onClick:t=>{t.stopPropagation(),me()},children:a.jsx(fe,{"aria-hidden":"true"})}):null,Le]})}c.displayName="TimePicker";const Ye={hour:"时",minute:"分",second:"秒"},Ze=l=>{const{width:e,style:i}=l;return{...i,...e===void 0?void 0:{width:e}}},el=l=>{const{value:e,columns:i,format:n,use12Hours:s=!1}=l;if(!e)return;const d=N(e);return n?we(d,n):s&&i.includes("hour")?we(d,ll(i)):Ge(e,i)},ll=l=>`${[l.includes("hour")?"hh":null,l.includes("minute")?"mm":null,l.includes("second")?"ss":null].filter(i=>i!==null).join(":")} A`,we=(l,e)=>{const i=le(l.hour),n={HH:K(l.hour),H:String(l.hour),hh:K(i),h:String(i),mm:K(l.minute),m:String(l.minute),ss:K(l.second),s:String(l.second),A:ae(l.hour)==="pm"?"PM":"AM",a:ae(l.hour)==="pm"?"pm":"am"};return e.replace(/HH|hh|mm|ss|H|h|m|s|A|a/g,s=>n[s]??s)},le=l=>{const e=Math.trunc(l)%24;return e%12===0?12:e%12},ae=l=>Math.trunc(l)>=12?"pm":"am",be=(l,e)=>{const i=Math.trunc(l);return e==="pm"?i===12?12:i+12:e==="am"&&i===12?0:i},K=l=>String(l).padStart(2,"0"),A={display:"grid",gap:"0.76rem",maxWidth:"42rem"},ke=["hour","minute"],ee=["hour","minute","second"],al=[{label:"08:30",value:"08:30:00"},{label:"12:00",value:"12:00:00"},{label:"18:30",value:"18:30:00"}],tl={disabledHours:()=>[0,1,2,3,4,5],disabledMinutes:l=>l===9?[0,1,2,3,4,5]:[],disabledSeconds:(l,e)=>l===9&&e===30?[0,1,2,3,4]:[]},il=()=>{const[l,e]=o.useState("09:30:00");return a.jsx(c,{value:l,onValueChange:e,width:"100%","aria-label":"选择时间"})},rl=()=>{const[l,e]=o.useState("09:30:00");return a.jsx(c,{value:l,onValueChange:e,needConfirm:!0,showNow:!0,allowClear:!0,use12Hours:!0,format:"hh:mm A",width:"100%","aria-label":"选择时间"})},ol=qe({id:"time-picker",name:"TimePicker",category:"form",packageName:"willa/TimePicker",description:"用于选择时间点、时分秒和调度时间。",imports:[{name:"TimePicker",from:"willa/TimePicker"}],css:"willa/TimePicker.css",demo:{name:"TimePickerPreview",component:il},code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:ke,defaultValue:"09:30:00",width:"100%","aria-label":"选择时分"}),a.jsx(c,{wheelColumns:["minute","second"],defaultValue:"09:30:45",width:"100%","aria-label":"选择分秒"})]})},{title:"12 小时制",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:ee,hourStep:2,minuteStep:15,secondStep:10,defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"}),a.jsx(c,{wheelColumns:ke,disabledTime:tl,defaultValue:"09:30:00",width:"100%","aria-label":"选择时间"})]})},{title:"确认模式",code:`
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
      `,content:a.jsxs("div",{style:A,children:[a.jsx(c,{wheelColumns:ee,defaultValue:"09:30:00",width:"100%","aria-label":"隐藏滚动条"}),a.jsx(c,{wheelColumns:ee,showScrollbar:!0,defaultValue:"09:30:00",width:"100%","aria-label":"显示滚动条"})]})},{title:"快捷预设",code:`
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
