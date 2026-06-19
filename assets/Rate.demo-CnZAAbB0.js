import{aZ as o,aX as e,aH as L,az as me,av as g,T as V,h as x}from"./index-5sTLDkyP.js";/* empty css              *//* empty css              */import{d as fe}from"./defineDoc-Cmo537E5.js";const he=5,i=o.forwardRef((a,l)=>{const{value:s,defaultValue:r=0,count:c=he,allowClear:R=!0,allowHalf:m=!1,autoFocus:P=!1,character:G,disabled:u=!1,keyboard:_=!0,name:F,size:U="md",tooltips:I=[],className:Z,style:J,tabIndex:O,onBlur:b,onChange:j,onFocus:C,onHoverChange:S,onKeyDown:k,onMouseLeave:H,...Q}=a,h=o.useRef(null),D=s!==void 0,d=Math.max(1,Math.floor(c)),[Y,ee]=o.useState(()=>z(r,d,m)),[ae,te]=o.useState(null),[N,q]=o.useState(!1),w=z(D?s:Y,d,m),f=ae??w,le=m?.5:1,re=o.useMemo(()=>Array.from({length:d},(t,n)=>n+1),[d]);o.useImperativeHandle(l,()=>({focus:()=>{var t;return(t=h.current)==null?void 0:t.focus()},blur:()=>{var t;return(t=h.current)==null?void 0:t.blur()}}),[]),o.useEffect(()=>{var t;P&&!u&&((t=h.current)==null||t.focus())},[P,u]);const A=(t,n={})=>{const p=z(t,d,m),v=n.clearable&&R&&p===w?0:p;D||ee(v),j==null||j(v)},M=t=>{te(t),S==null||S(t??0)},ne=(t,n)=>{u||M($(t,n,m))},oe=(t,n)=>{var p;u||((p=h.current)==null||p.focus(),A($(t,n,m),{clearable:!0}))},se=t=>{if(k==null||k(t),t.defaultPrevented||u||!_)return;const n=ge({count:d,currentValue:w,key:t.key,step:le});n!==null&&(t.preventDefault(),A(n))},ue=t=>{q(!0),C==null||C(t)},ie=t=>{q(!1),M(null),b==null||b(t)},ce=t=>{M(null),H==null||H(t)},de=I[Math.ceil(f)-1]??`${f}/${d}`;return e.jsxs("div",{...Q,ref:h,className:L("willa-rate",`willa-rate--${U}`,u&&"willa-rate--disabled",N&&"willa-rate--focused",Z),style:J,role:"slider","aria-disabled":u||void 0,"aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":f,"aria-valuetext":de,tabIndex:u?void 0:O??0,onBlur:ie,onFocus:ue,onKeyDown:se,onMouseLeave:ce,children:[e.jsx("span",{className:"willa-rate-items","aria-hidden":"true",children:re.map(t=>{const n=ve(f,t),p=n>0,v=n>0&&n<100,pe={"--willa-rate-active-width":`${n}%`},E=e.jsxs("span",{className:L("willa-rate-item",p&&"willa-rate-item--active",v&&"willa-rate-item--half"),style:pe,onClick:B=>oe(B,t),onMouseMove:B=>ne(B,t),children:[e.jsx("span",{className:"willa-rate-character willa-rate-character--base",children:W({character:G,disabled:u,focused:N,active:!1,half:!1,index:t,value:f})}),e.jsx("span",{className:"willa-rate-character willa-rate-character--active","aria-hidden":"true",children:W({character:G,disabled:u,focused:N,active:p,half:v,index:t,value:f})})]},t),K=I[t-1];return K?e.jsx(me,{content:K,side:"top",size:"sm",children:E},t):E})}),F?e.jsx("input",{type:"hidden",name:F,value:w,disabled:u}):null]})});i.displayName="Rate";const W=a=>typeof a.character=="function"?a.character({active:a.active,disabled:a.disabled,focused:a.focused,half:a.half,index:a.index,value:a.value}):a.character??e.jsx(X,{}),X=()=>e.jsx("svg",{className:"willa-rate-star",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M12 2.8l2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 17.2l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.8z"})});X.displayName="RateStarIcon";const z=(a,l,s)=>{const r=Number.isFinite(a)?Number(a):0,c=s?.5:1,R=Math.round(r/c)*c;return Math.min(l,Math.max(0,R))},$=(a,l,s)=>{if(!s)return l;const r=a.currentTarget.getBoundingClientRect();return a.clientX-r.left<=r.width/2?l-.5:l},ve=(a,l)=>a>=l?100:a<=l-1?0:(a-(l-1))*100,ge=a=>{const{count:l,currentValue:s,key:r,step:c}=a;return r==="ArrowRight"||r==="ArrowUp"?Math.min(l,s+c):r==="ArrowLeft"||r==="ArrowDown"?Math.max(0,s-c):r==="Home"?0:r==="End"?l:null},y=["很差","一般","还行","满意","推荐"],we={display:"grid",gap:"0.35rem",minWidth:"10rem",padding:"0.85rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem",background:"var(--willa-panel-bg)"},T={color:"var(--willa-text-soft)",fontSize:"0.88rem",lineHeight:1.55},xe=()=>{const[a,l]=o.useState(3);return e.jsxs(V,{align:"center",gap:"lg",wrap:!0,children:[e.jsx(i,{value:a,tooltips:y,onChange:l}),e.jsxs("div",{style:we,children:[e.jsx("strong",{children:"服务体验"}),e.jsxs("span",{style:T,children:["当前 ",a," 分，",y[a-1]??"尚未评分","。"]})]})]})},ye=()=>e.jsxs(g,{gap:"md",children:[e.jsx(i,{allowHalf:!0,defaultValue:3.5}),e.jsx(i,{allowHalf:!0,defaultValue:2.5,count:7,size:"lg"})]}),Ve=()=>{const[a,l]=o.useState(4);return e.jsxs(V,{align:"center",gap:"md",wrap:!0,children:[e.jsx(i,{value:a,tooltips:y,onChange:l}),e.jsx("span",{style:T,children:y[a-1]})]})},Re=()=>{const[a,l]=o.useState(2);return e.jsxs(g,{gap:"sm",children:[e.jsx(i,{value:a,allowClear:!0,onChange:l}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(x,{variant:"outline",onClick:()=>l(0),children:"清空"}),e.jsx(x,{variant:"outline",onClick:()=>l(5),children:"满分"})]})]})},be=()=>e.jsxs(g,{gap:"md",children:[e.jsx(i,{defaultValue:4,character:"赞"}),e.jsx(i,{allowHalf:!0,defaultValue:3.5,character:({index:a})=>e.jsx("span",{children:a})})]}),je=()=>e.jsxs(g,{gap:"md",children:[e.jsx(i,{defaultValue:4,disabled:!0}),e.jsx(i,{allowHalf:!0,defaultValue:3.5,disabled:!0})]}),Ce=()=>{const a=o.useRef(null),[l,s]=o.useState(3);return e.jsxs(g,{gap:"sm",children:[e.jsx(i,{ref:a,allowHalf:!0,value:l,onChange:s}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(x,{variant:"outline",onClick:()=>{var r;return(r=a.current)==null?void 0:r.focus()},children:"聚焦"}),e.jsx(x,{variant:"outline",onClick:()=>{var r;return(r=a.current)==null?void 0:r.blur()},children:"失焦"})]}),e.jsx("span",{style:T,children:"聚焦后可用方向键、Home 和 End 调整评分。"})]})},Me=fe({id:"rate",name:"Rate",displayName:"Rate 评分",category:"form",packageName:"willa/Rate",description:"用于评价、满意度和偏好强度选择的评分控件。",imports:[{name:"Rate, type RateRef",from:"willa/Rate"}],css:"willa/Rate.css",demo:{name:"RatePreview",component:xe},code:`
    import { useState } from "react";

    const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];

    const Demo = () => {
      const [value, setValue] = useState(3);

      return (
        <Group align="center" gap="lg" wrap>
          <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
          <div
            style={{
              display: "grid",
              gap: "0.35rem",
              minWidth: "10rem",
              padding: "0.85rem",
              border: "1px solid var(--willa-panel-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-panel-bg)",
            }}
          >
            <strong>服务体验</strong>
            <span
              style={{
                color: "var(--willa-text-soft)",
                fontSize: "0.88rem",
                lineHeight: 1.55,
              }}
            >
              当前 {value} 分，{qualityTooltips[value - 1] ?? "尚未评分"}。
            </span>
          </div>
        </Group>
      );
    };

    <Demo />;
  `,sections:[{title:"半星与数量",content:e.jsx(ye,{}),code:`
        <Stack gap="md">
          <Rate allowHalf defaultValue={3.5} />
          <Rate allowHalf defaultValue={2.5} count={7} size="lg" />
        </Stack>;
      `},{title:"文案提示",content:e.jsx(Ve,{}),code:`
        const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];
        const [value, setValue] = useState(4);

        <Group align="center" gap="md" wrap>
          <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
          <span>{qualityTooltips[value - 1]}</span>
        </Group>;
      `},{title:"受控与清除",content:e.jsx(Re,{}),code:`
        const [value, setValue] = useState(2);

        <Stack gap="sm">
          <Rate value={value} allowClear onChange={setValue} />
          <Group gap="sm" wrap>
            <Button variant="outline" onClick={() => setValue(0)}>
              清空
            </Button>
            <Button variant="outline" onClick={() => setValue(5)}>
              满分
            </Button>
          </Group>
        </Stack>;
      `},{title:"自定义字符",content:e.jsx(be,{}),code:`
        <Stack gap="md">
          <Rate defaultValue={4} character="赞" />
          <Rate
            allowHalf
            defaultValue={3.5}
            character={({ index }) => <span>{index}</span>}
          />
        </Stack>;
      `},{title:"只读状态",content:e.jsx(je,{}),code:`
        <Stack gap="md">
          <Rate defaultValue={4} disabled />
          <Rate allowHalf defaultValue={3.5} disabled />
        </Stack>;
      `},{title:"键盘与方法",content:e.jsx(Ce,{}),code:`
        const rateRef = useRef<RateRef>(null);
        const [value, setValue] = useState(3);

        <Stack gap="sm">
          <Rate ref={rateRef} allowHalf value={value} onChange={setValue} />
          <Group gap="sm" wrap>
            <Button variant="outline" onClick={() => rateRef.current?.focus()}>
              聚焦
            </Button>
            <Button variant="outline" onClick={() => rateRef.current?.blur()}>
              失焦
            </Button>
          </Group>
        </Stack>;
      `}],propGroups:[{title:"值",description:"控制评分数值、默认值和表单提交。"},{title:"交互",description:"控制清除、半星、键盘、禁用和回调。"},{title:"展示",description:"控制图标数量、尺寸、字符和提示文案。"}],props:[{name:"value",type:"number",group:"值",description:"受控评分值。"},{name:"defaultValue",type:"number",defaultValue:"0",group:"值",description:"非受控默认评分值。"},{name:"name",type:"string",group:"值",description:"表单提交时使用的隐藏 input 名称。"},{name:"allowClear",type:"boolean",defaultValue:"true",group:"交互",description:"再次点击当前评分时是否清空。"},{name:"allowHalf",type:"boolean",defaultValue:"false",group:"交互",description:"是否允许选择半星。"},{name:"autoFocus",type:"boolean",defaultValue:"false",group:"交互",description:"是否自动聚焦。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"交互",description:"是否禁用交互。"},{name:"keyboard",type:"boolean",defaultValue:"true",group:"交互",description:"是否允许键盘调整评分。"},{name:"onChange",type:"(value: number) => void",group:"交互",description:"评分变化时触发。"},{name:"onHoverChange",type:"(value: number) => void",group:"交互",description:"鼠标悬停评分变化时触发，离开时回传 0。"},{name:"onFocus / onBlur / onKeyDown",type:"function",group:"交互",description:"焦点和键盘事件回调。"},{name:"count",type:"number",defaultValue:"5",group:"展示",description:"评分字符数量。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',group:"展示",description:"评分字符尺寸。"},{name:"character",type:"ReactNode | ((context: RateCharacterRenderContext) => ReactNode)",group:"展示",description:"自定义评分字符，函数模式会收到当前项索引和激活状态。"},{name:"tooltips",type:"string[]",group:"展示",description:"每一项评分对应的提示文案，同时用于可访问性文案。"}]});export{Me as default};
