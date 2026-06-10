import{aj as u,ai as Te,ah as l,a9 as k,i as Ge,j as Oe,C as _e}from"./index-C2E4XHzt.js";import{B as se}from"./index-3DZYmbrW.js";import{F as qe,a as He}from"./index-B-96IVYX.js";import{F as Ke}from"./index-9QevSMD0.js";import{F as Ue}from"./index-K99hVKm2.js";import{F as Je}from"./index-D-qRX90i.js";/* empty css              */import{d as Qe}from"./defineDoc-5r0NM0Fx.js";import"./heading-BzvB6qDP.js";const m=u.forwardRef((e,t)=>{const{picker:a="calendar",mode:n="month",wheelColumns:i="date",range:s=!1,size:d="md",variant:c="outline",width:D,invalid:j=!1,placeholder:ye,name:Q,value:X,defaultValue:ge="",min:ke,max:be,disabledDate:De,onValueChange:z,className:xe,disabled:S,style:Pe,id:ve,onBlur:je,onClick:B,onKeyDown:I,...F}=e,Ve=u.useId(),Z=ve??Ve,ee=`${Z}-panel`,te=u.useRef(null),A=u.useRef(null),N=u.useRef(null),[f,V]=u.useState(!1),[$e,Me]=u.useState(ge),w=X??$e,y=u.useMemo(()=>pe(i),[i]),[x,T]=u.useState(()=>O(oe(w,n))),[C,ae]=u.useState(null),ne=j||F["aria-invalid"]===!0||F["aria-invalid"]==="true",Se=et({width:D,style:Pe}),re=u.useMemo(()=>it(x),[x]),Fe=u.useMemo(()=>st(n,x,re),[re,n,x]),Ne=ue(w,{mode:n,picker:a,range:s,wheelColumns:y})??ye??tt({mode:n,picker:a,range:s,wheelColumns:i}),Ce=r=>{A.current=r,kt(t,r)},G=()=>{var ie;if(!A.current)return;const r=A.current.getBoundingClientRect(),o=8,h=6,g=((ie=N.current)==null?void 0:ie.offsetHeight)??290,$=window.innerWidth,M=$-o*2,Ee=a==="wheel"?mt(y.length):n==="day"?264:244,le=$<=520?M:Math.min(Math.max(r.width,Ee),M),ze=b(r.left,o,window.innerWidth-o-le),Be=r.bottom+h,Ie=r.top-h-g,Ae=window.innerHeight-r.bottom-o>=g?Be:Math.max(o,Ie);ae({left:ze,top:Ae,width:le})};u.useEffect(()=>{T(O(oe(w,n)))},[w,n]),u.useEffect(()=>{if(!f)return;const r=h=>{var $,M;const g=h.target;!(($=te.current)!=null&&$.contains(g))&&!((M=N.current)!=null&&M.contains(g))&&V(!1)},o=()=>{G()};return G(),window.addEventListener("pointerdown",r),window.addEventListener("resize",o),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("pointerdown",r),window.removeEventListener("resize",o),window.removeEventListener("scroll",o,!0)}},[f]),u.useEffect(()=>{f?G():ae(null)},[f,n,a,y.length,x]),u.useEffect(()=>{var r;!f||a!=="wheel"||(r=N.current)==null||r.querySelectorAll(".willa-date-picker-wheel-option--selected").forEach(o=>{o.scrollIntoView({block:"center"})})},[w,f,a]);const L=(r,o)=>{X===void 0&&Me(r),z==null||z(r),o&&V(!1)},Le=r=>{if(!s){L(r,!0);return}const o=J(w);if(!(o!=null&&o.start)||o.end){L({start:r},!1);return}L(ft(o.start,r),!0)},We=(r,o)=>{const h=q(w),g=P({...h,[r]:o});L(we(g,y),!1)},Re=r=>{if(I==null||I(r),!r.defaultPrevented){if(r.key==="Escape"){V(!1);return}(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),V(o=>!o))}},Ye=f&&typeof document<"u"?Te.createPortal(l.jsx("div",{ref:N,id:ee,className:k("willa-date-picker-panel",`willa-date-picker-panel--${n}`,a==="wheel"&&"willa-date-picker-panel--wheel"),style:C?{left:C.left,top:C.top,width:C.width}:{left:0,top:0,visibility:"hidden"},children:a==="wheel"?l.jsx("div",{className:"willa-date-picker-wheel",style:{gridTemplateColumns:`repeat(${y.length}, minmax(3.75rem, 1fr))`},children:y.map(r=>{const o=q(w);return l.jsxs("div",{className:"willa-date-picker-wheel-column",children:[l.jsx("div",{className:"willa-date-picker-wheel-label",children:Ze[r]}),l.jsx("div",{className:"willa-date-picker-wheel-options",children:pt(r,o).map(h=>l.jsx("button",{className:k("willa-date-picker-wheel-option",h.value===o[r]&&"willa-date-picker-wheel-option--selected"),type:"button",onClick:()=>We(r,h.value),children:h.label},h.value))})]},r)})}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"willa-date-picker-header",children:[l.jsx("button",{className:"willa-date-picker-nav",type:"button","aria-label":"上一页",onClick:()=>T(r=>ce(r,n,-1)),children:l.jsx(Ge,{})}),l.jsx("div",{className:"willa-date-picker-title",children:ot(x,n)}),l.jsx("button",{className:"willa-date-picker-nav",type:"button","aria-label":"下一页",onClick:()=>T(r=>ce(r,n,1)),children:l.jsx(Oe,{})})]}),n==="day"?l.jsx("div",{className:"willa-date-picker-weekdays","aria-hidden":"true",children:Xe.map((r,o)=>l.jsx("span",{className:k(lt(o)&&"willa-date-picker-weekday--weekend"),children:r},r))}):null,l.jsx("div",{className:k("willa-date-picker-grid",`willa-date-picker-grid--${n}`),role:"grid",children:Fe.map(r=>{const o=yt({range:s,optionValue:r.value,value:w}),h=gt(r.value,{min:ke,max:be,disabledDate:De});return l.jsx("button",{className:k("willa-date-picker-day",`willa-date-picker-day--${n}`,r.muted&&"willa-date-picker-day--muted",r.today&&"willa-date-picker-day--today",o.inRange&&"willa-date-picker-day--in-range",o.edge&&"willa-date-picker-day--range-edge",o.selected&&"willa-date-picker-day--selected"),type:"button",role:"gridcell","aria-selected":o.selected,disabled:h,onClick:()=>Le(r.value),children:n==="week"?l.jsxs("span",{className:"willa-date-picker-week-range",children:[l.jsx("span",{children:r.startLabel}),l.jsx("span",{className:"willa-date-picker-week-line","aria-hidden":"true"}),l.jsx("span",{children:r.endLabel})]}):r.label},r.value)})})]})}),document.body):null;return l.jsxs("span",{ref:te,className:k("willa-date-picker",`willa-date-picker--${d}`,`willa-date-picker--${c}`,f&&"willa-date-picker--open",S&&"willa-date-picker--disabled",ne&&"willa-date-picker--invalid",xe),style:Se,"aria-disabled":S||void 0,children:[Q?l.jsx("input",{type:"hidden",name:Q,value:wt(w),disabled:S}):null,l.jsxs("button",{...F,ref:Ce,id:Z,type:"button",className:"willa-date-picker-control",disabled:S,"aria-expanded":f,"aria-controls":f?ee:void 0,"aria-haspopup":"dialog","aria-invalid":ne||F["aria-invalid"],onBlur:je,onClick:r=>{B==null||B(r),r.defaultPrevented||V(o=>!o)},onKeyDown:Re,children:[l.jsx("span",{className:k("willa-date-picker-value",!ue(w,{mode:n,picker:a,range:s,wheelColumns:y})&&"willa-date-picker-value--placeholder"),children:Ne}),l.jsx(_e,{className:"willa-date-picker-icon","aria-hidden":"true"})]}),Ye]})});m.displayName="DatePicker";const Xe=["日","一","二","三","四","五","六"],Ze={year:"年",month:"月",day:"日",hour:"时",minute:"分",second:"秒"},et=e=>{const{width:t,style:a}=e;return{...a,...t===void 0?void 0:{width:t}}},tt=e=>{const{mode:t,picker:a,range:n,wheelColumns:i}=e;if(a==="wheel"){const d=pe(i),c=d.some(j=>["year","month","day"].includes(j)),D=d.some(j=>["hour","minute","second"].includes(j));return c&&D?"选择日期时间":D?"选择时间":"选择日期"}const s={year:"年份",month:"月份",week:"周",day:"日期"};return n?`选择${s[t]}范围`:`选择${s[t]}`},oe=(e,t)=>{const a=typeof e=="string"?e:e.start||e.end;return(a?at(a,t):null)??new Date},at=(e,t)=>{if(t==="year"&&/^\d{4}$/.test(e))return new Date(Number(e),0,1);if(t==="month"&&/^\d{4}-\d{2}$/.test(e)){const[a,n]=e.split("-").map(Number),i=new Date(a,n-1,1);return i.getFullYear()===a&&i.getMonth()===n-1?i:null}return H(e)},H=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return null;const[t,a,n]=e.split("-").map(Number),i=new Date(t,a-1,n);return i.getFullYear()!==t||i.getMonth()!==a-1||i.getDate()!==n?null:i},p=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${n}`},Y=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0");return`${t}-${a}`},nt=(e,t)=>t==="year"?String(e.getFullYear()):t==="month"?Y(e):p(t==="week"?E(e):e),O=e=>new Date(e.getFullYear(),e.getMonth(),1),rt=(e,t)=>new Date(e.getFullYear(),e.getMonth()+t,1),de=(e,t)=>new Date(e.getFullYear()+t,e.getMonth(),1),E=e=>{const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),me(t)},K=e=>{const t=E(e);return t.setDate(t.getDate()+6),t},me=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),_=e=>e.getDay()===0||e.getDay()===6,lt=e=>e===0||e===6,it=e=>{const t=O(e),a=t.getDay(),n=new Date(t),i=[],s=p(new Date);n.setDate(t.getDate()-a);for(let d=0;d<42;d+=1){const c=new Date(n);i.push({date:c,value:p(c),currentMonth:c.getMonth()===e.getMonth(),weekend:_(c),today:p(c)===s}),n.setDate(n.getDate()+1)}return i},st=(e,t,a)=>{if(e==="year"){const n=he(t.getFullYear());return Array.from({length:12},(i,s)=>{const d=n+s;return{value:String(d),label:String(d),startLabel:"",endLabel:"",weekend:!1,muted:!1,today:d===new Date().getFullYear()}})}return e==="month"?Array.from({length:12},(n,i)=>{const s=new Date(t.getFullYear(),i,1);return{value:Y(s),label:`${i+1} 月`,startLabel:"",endLabel:"",weekend:!1,muted:!1,today:Y(s)===Y(new Date)}}):e==="week"?Array.from({length:6},(n,i)=>{const s=a[i*7].date,d=K(s),c=me(new Date);return{value:p(E(s)),label:`${p(s)} - ${p(d)}`,startLabel:p(s),endLabel:p(d),weekend:_(s)||_(d),muted:s.getMonth()!==t.getMonth(),today:c>=E(s)&&c<=d}}):a.map(n=>({value:nt(n.date,e),label:String(n.date.getDate()),startLabel:"",endLabel:"",weekend:n.weekend,muted:!n.currentMonth,today:n.today}))},he=e=>Math.floor(e/12)*12,ot=(e,t)=>{if(t==="year"){const a=he(e.getFullYear());return`${a} - ${a+11}`}return t==="month"?`${e.getFullYear()} 年`:`${e.getFullYear()} 年 ${e.getMonth()+1} 月`},ce=(e,t,a)=>t==="year"?de(e,a*12):t==="month"?de(e,a):rt(e,a),ue=(e,t)=>{const{mode:a,picker:n,range:i,wheelColumns:s}=t;if(n==="wheel")return typeof e=="string"&&e?ht(e,s):void 0;if(i){const d=J(e);return d!=null&&d.start?dt(d,a):""}return typeof e=="string"&&e?U(e,a):void 0},dt=(e,t)=>{const a=ct(e.start,t),n=e.end?ut(e.end,t):"";return n?`${a} - ${n}`:`${a} -`},ct=(e,t)=>t!=="week"?U(e,t):e,ut=(e,t)=>{if(t!=="week")return U(e,t);const a=H(e);return a?p(K(a)):e},U=(e,t)=>{if(t==="week"){const a=H(e);return a?`${p(a)} - ${p(K(a))}`:e}return e},pe=e=>Array.isArray(e)?e:e==="time"?["hour","minute","second"]:e==="datetime"?["year","month","day","hour","minute","second"]:["year","month","day"],mt=e=>Math.max(244,e*4.25*16),q=e=>{const t=new Date,a={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:0,minute:0,second:0};if(typeof e!="string"||!e)return P(a);const n=e.match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/);if(n)return P({year:Number(n[1]),month:Number(n[2]),day:Number(n[3]),hour:Number(n[4]??a.hour),minute:Number(n[5]??a.minute),second:Number(n[6]??a.second)});const i=e.match(/^(\d{2}):(\d{2})(?::(\d{2}))?$/);if(i)return P({...a,hour:Number(i[1]),minute:Number(i[2]),second:Number(i[3]??a.second)});const s=e.match(/^(\d{4})-(\d{2})$/);return P(s?{...a,year:Number(s[1]),month:Number(s[2]),day:1}:a)},P=e=>{const t=b(Math.trunc(e.year),1900,2100),a=b(Math.trunc(e.month),1,12),n=fe(t,a);return{year:t,month:a,day:b(Math.trunc(e.day),1,n),hour:b(Math.trunc(e.hour),0,23),minute:b(Math.trunc(e.minute),0,59),second:b(Math.trunc(e.second),0,59)}},we=(e,t)=>{const a=t.some(d=>["year","month","day"].includes(d)),n=t.some(d=>["hour","minute","second"].includes(d)),i=`${e.year}-${v(e.month)}-${v(e.day)}`,s=`${v(e.hour)}:${v(e.minute)}:${v(e.second)}`;return a&&n?`${i} ${s}`:n?s:i},ht=(e,t)=>{const a=q(e);return we(a,t)},pt=(e,t)=>e==="year"?W(1900,2100,""):e==="month"?W(1,12,"月"):e==="day"?W(1,fe(t.year,t.month),"日"):W(0,59,"",!0).filter(a=>e==="hour"?a.value<=23:!0),W=(e,t,a,n=!1)=>Array.from({length:t-e+1},(i,s)=>{const d=e+s,c=n?v(d):String(d);return{value:d,label:`${c}${a}`}}),fe=(e,t)=>new Date(e,t,0).getDate(),v=e=>String(e).padStart(2,"0"),wt=e=>typeof e=="string"?e:e.end?`${e.start},${e.end}`:e.start,J=e=>typeof e=="string"?null:e,ft=(e,t)=>e<=t?{start:e,end:t}:{start:t,end:e},yt=e=>{const{range:t,optionValue:a,value:n}=e;if(!t)return{selected:typeof n=="string"&&n===a,inRange:!1,edge:!1};const i=J(n),s=i==null?void 0:i.start,d=i==null?void 0:i.end,c=a===s||a===d,D=!!(s&&d&&a>s&&a<d);return{selected:c,inRange:D,edge:c&&!!(s&&d)}},gt=(e,t)=>{const{min:a,max:n,disabledDate:i}=t;return a&&e<a||n&&e>n?!0:(i==null?void 0:i(e))??!1},b=(e,t,a)=>Math.min(Math.max(e,t),a),kt=(e,t)=>{if(typeof e=="function"){e(t);return}e&&(e.current=t)},R={display:"grid",gap:"0.76rem",maxWidth:"42rem"},bt={display:"grid",gap:"0.76rem",gridTemplateColumns:"repeat(auto-fit, minmax(13rem, 1fr))"},Dt=()=>{const[e,t]=u.useState({start:"2026-06",end:"2026-09"});return l.jsx(m,{range:!0,value:e,onValueChange:t,width:"100%","aria-label":"选择分析周期"})},Ct=Qe({id:"date-picker",name:"DatePicker",category:"form",packageName:"willa/DatePicker",description:"用于选择年份、月份、周、日期及时间范围。",imports:[{name:"DatePicker",from:"willa/DatePicker"}],css:"willa/DatePicker.css",demo:{name:"DatePickerPreview",component:Dt},code:`
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
      `,content:l.jsxs("div",{style:bt,children:[l.jsx(m,{mode:"day",defaultValue:"2026-06-10",width:"100%","aria-label":"选择日期"}),l.jsx(m,{mode:"week",defaultValue:"2026-06-07",width:"100%","aria-label":"选择周"}),l.jsx(m,{mode:"month",defaultValue:"2026-06",width:"100%","aria-label":"选择月份"}),l.jsx(m,{mode:"year",defaultValue:"2026",width:"100%","aria-label":"选择年份"})]})},{title:"范围选择",code:`
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
      `,content:l.jsxs("div",{style:R,children:[l.jsx(m,{range:!0,mode:"day",defaultValue:{start:"2026-06-10",end:"2026-06-18"},width:"100%","aria-label":"选择日期范围"}),l.jsx(m,{range:!0,mode:"week",defaultValue:{start:"2026-06-07",end:"2026-06-21"},width:"100%","aria-label":"选择周范围"})]})},{title:"滚动选择",code:`
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
      `,content:l.jsxs("div",{style:R,children:[l.jsx(m,{picker:"wheel",wheelColumns:"date",defaultValue:"2026-06-10",width:"100%","aria-label":"滚动选择年月日"}),l.jsx(m,{picker:"wheel",wheelColumns:"time",defaultValue:"09:30:00",width:"100%","aria-label":"滚动选择时分秒"}),l.jsx(m,{picker:"wheel",wheelColumns:"datetime",defaultValue:"2026-06-10 09:30:00",width:"100%","aria-label":"滚动选择日期时间"})]})},{title:"表单内使用",code:`
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
      `,content:l.jsx(qe,{actions:l.jsxs(Ke,{children:[l.jsx(se,{variant:"ghost",children:"取消"}),l.jsx(se,{type:"submit",children:"保存"})]}),children:l.jsxs(He,{title:"报表周期",children:[l.jsx(Ue,{label:"月份范围",required:!0,children:l.jsx(m,{range:!0,name:"reportRange",defaultValue:{start:"2026-06",end:"2026-09"},width:"100%"})}),l.jsx(Je,{tone:"info",children:"默认按月份选择，提交值会序列化为 start,end。"})]})})},{title:"范围限制",code:`
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
      `,content:l.jsxs("div",{style:R,children:[l.jsx(m,{defaultValue:"2026-06",min:"2026-04",max:"2026-12",width:"100%"}),l.jsx(m,{mode:"day",placeholder:"仅工作日可选",disabledDate:e=>{const t=new Date(`${e}T00:00:00`).getDay();return t===0||t===6},width:"100%"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <DatePicker size="sm" defaultValue="2026-06" />
          <DatePicker size="md" defaultValue="2026-06" />
          <DatePicker size="lg" defaultValue="2026-06" />
        </div>;
      `,content:l.jsxs("div",{style:R,children:[l.jsx(m,{size:"sm",defaultValue:"2026-06"}),l.jsx(m,{size:"md",defaultValue:"2026-06"}),l.jsx(m,{size:"lg",defaultValue:"2026-06"})]})}],props:[{name:"picker",type:'"calendar" | "wheel"',description:"选择面板类型；默认是日历面板。"},{name:"mode",type:'"year" | "month" | "week" | "day"',description:"日历面板的选择粒度；默认按年月选择。"},{name:"wheelColumns",type:'"date" | "time" | "datetime" | Array<DatePickerWheelColumn>',description:"滚动选择器展示的列。"},{name:"range",type:"boolean",description:"开启范围选择。"},{name:"value",type:"DatePickerValue",description:"受控值；范围模式传入 { start, end }。"},{name:"defaultValue",type:"DatePickerValue",description:"非受控默认值。"},{name:"onValueChange",type:"(value: DatePickerValue) => void",description:"选择值变化时触发。"},{name:"name",type:"string",description:"表单提交字段名。"},{name:"min",type:"string",description:"最小可选值，格式随 mode 变化。"},{name:"max",type:"string",description:"最大可选值，格式随 mode 变化。"},{name:"disabledDate",type:"(value: string) => boolean",description:"禁用指定值。"},{name:"placeholder",type:"string",description:"未选择时展示的占位文本。"},{name:"size",type:'"sm" | "md" | "lg"',description:"日期选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',description:"日期选择器视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"自定义宽度；设置为 100% 时占满父容器。"},{name:"invalid",type:"boolean",description:"展示错误状态。"}]});export{Ct as default};
