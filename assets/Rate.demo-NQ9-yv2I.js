import{a_ as o,b1 as pe,aY as e,aJ as E,aB as me,ax as g,V,i as x}from"./index-NdHawjWy.js";/* empty css              *//* empty css              */import{d as fe}from"./defineDoc-cGpRJMLM.js";const he=5,u=o.forwardRef((a,l)=>{const{value:i,defaultValue:r=0,count:c=he,allowClear:b=!0,allowHalf:m=!1,autoFocus:P=!1,character:T,disabled:s=!1,keyboard:$=!0,name:G,size:_="md",tooltips:F=[],className:J,style:U,tabIndex:X,onBlur:R,onChange:Y,onFocus:j,onHoverChange:C,onKeyDown:S,onMouseLeave:k,...O}=a,h=o.useRef(null),d=Math.max(1,Math.floor(c)),[Q,Z]=pe({value:i,defaultValue:()=>B(r,d,m),onChange:Y}),[ee,ae]=o.useState(null),[H,D]=o.useState(!1),v=B(Q,d,m),f=ee??v,te=m?.5:1,le=o.useMemo(()=>Array.from({length:d},(t,n)=>n+1),[d]);o.useImperativeHandle(l,()=>({focus:()=>{var t;return(t=h.current)==null?void 0:t.focus()},blur:()=>{var t;return(t=h.current)==null?void 0:t.blur()}}),[]),o.useEffect(()=>{var t;P&&!s&&((t=h.current)==null||t.focus())},[P,s]);const I=(t,n={})=>{const p=B(t,d,m),w=n.clearable&&b&&p===v?0:p;Z(w)},N=t=>{ae(t),C==null||C(t??0)},re=(t,n)=>{s||N(L(t,n,m))},ne=(t,n)=>{var p;s||((p=h.current)==null||p.focus(),I(L(t,n,m),{clearable:!0}))},oe=t=>{if(S==null||S(t),t.defaultPrevented||s||!$)return;const n=ve({count:d,currentValue:v,key:t.key,step:te});n!==null&&(t.preventDefault(),I(n))},se=t=>{D(!0),j==null||j(t)},ue=t=>{D(!1),N(null),R==null||R(t)},ie=t=>{N(null),k==null||k(t)},ce=F[Math.ceil(f)-1]??`${f}/${d}`;return e.jsxs("div",{...O,ref:h,className:E("willa-rate",`willa-rate--${_}`,s&&"willa-rate--disabled",H&&"willa-rate--focused",J),style:U,role:"slider","aria-disabled":s||void 0,"aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":f,"aria-valuetext":ce,tabIndex:s?void 0:X??0,onBlur:ue,onFocus:se,onKeyDown:oe,onMouseLeave:ie,children:[e.jsx("span",{className:"willa-rate-items","aria-hidden":"true",children:le.map(t=>{const n=ge(f,t),p=n>0,w=n>0&&n<100,de={"--willa-rate-active-width":`${n}%`},q=e.jsxs("span",{className:E("willa-rate-item",p&&"willa-rate-item--active",w&&"willa-rate-item--half"),style:de,onClick:M=>ne(M,t),onMouseMove:M=>re(M,t),children:[e.jsx("span",{className:"willa-rate-character willa-rate-character--base",children:K({character:T,disabled:s,focused:H,active:!1,half:!1,index:t,value:f})}),e.jsx("span",{className:"willa-rate-character willa-rate-character--active","aria-hidden":"true",children:K({character:T,disabled:s,focused:H,active:p,half:w,index:t,value:f})})]},t),A=F[t-1];return A?e.jsx(me,{content:A,side:"top",size:"sm",children:q},t):q})}),G?e.jsx("input",{type:"hidden",name:G,value:v,disabled:s}):null]})});u.displayName="Rate";const K=a=>typeof a.character=="function"?a.character({active:a.active,disabled:a.disabled,focused:a.focused,half:a.half,index:a.index,value:a.value}):a.character??e.jsx(W,{}),W=()=>e.jsx("svg",{className:"willa-rate-star",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M12 2.8l2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 17.2l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.8z"})});W.displayName="RateStarIcon";const B=(a,l,i)=>{const r=Number.isFinite(a)?Number(a):0,c=i?.5:1,b=Math.round(r/c)*c;return Math.min(l,Math.max(0,b))},L=(a,l,i)=>{if(!i)return l;const r=a.currentTarget.getBoundingClientRect();return a.clientX-r.left<=r.width/2?l-.5:l},ge=(a,l)=>a>=l?100:a<=l-1?0:(a-(l-1))*100,ve=a=>{const{count:l,currentValue:i,key:r,step:c}=a;return r==="ArrowRight"||r==="ArrowUp"?Math.min(l,i+c):r==="ArrowLeft"||r==="ArrowDown"?Math.max(0,i-c):r==="Home"?0:r==="End"?l:null},y=["很差","一般","还行","满意","推荐"],we={display:"grid",gap:"0.35rem",minWidth:"10rem",padding:"0.85rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem",background:"var(--willa-panel-bg)"},z={color:"var(--willa-text-soft)",fontSize:"0.88rem",lineHeight:1.55},xe=()=>{const[a,l]=o.useState(3);return e.jsxs(V,{align:"center",gap:"lg",wrap:!0,children:[e.jsx(u,{value:a,tooltips:y,onChange:l}),e.jsxs("div",{style:we,children:[e.jsx("strong",{children:"服务体验"}),e.jsxs("span",{style:z,children:["当前 ",a," 分，",y[a-1]??"尚未评分","。"]})]})]})},ye=()=>e.jsxs(g,{gap:"md",children:[e.jsx(u,{allowHalf:!0,defaultValue:3.5}),e.jsx(u,{allowHalf:!0,defaultValue:2.5,count:7,size:"lg"})]}),Ve=()=>{const[a,l]=o.useState(4);return e.jsxs(V,{align:"center",gap:"md",wrap:!0,children:[e.jsx(u,{value:a,tooltips:y,onChange:l}),e.jsx("span",{style:z,children:y[a-1]})]})},be=()=>{const[a,l]=o.useState(2);return e.jsxs(g,{gap:"sm",children:[e.jsx(u,{value:a,allowClear:!0,onChange:l}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(x,{variant:"outline",onClick:()=>l(0),children:"清空"}),e.jsx(x,{variant:"outline",onClick:()=>l(5),children:"满分"})]})]})},Re=()=>e.jsxs(g,{gap:"md",children:[e.jsx(u,{defaultValue:4,character:"赞"}),e.jsx(u,{allowHalf:!0,defaultValue:3.5,character:({index:a})=>e.jsx("span",{children:a})})]}),je=()=>e.jsxs(g,{gap:"md",children:[e.jsx(u,{defaultValue:4,disabled:!0}),e.jsx(u,{allowHalf:!0,defaultValue:3.5,disabled:!0})]}),Ce=()=>{const a=o.useRef(null),[l,i]=o.useState(3);return e.jsxs(g,{gap:"sm",children:[e.jsx(u,{ref:a,allowHalf:!0,value:l,onChange:i}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(x,{variant:"outline",onClick:()=>{var r;return(r=a.current)==null?void 0:r.focus()},children:"聚焦"}),e.jsx(x,{variant:"outline",onClick:()=>{var r;return(r=a.current)==null?void 0:r.blur()},children:"失焦"})]}),e.jsx("span",{style:z,children:"聚焦后可用方向键、Home 和 End 调整评分。"})]})},Me=fe({id:"rate",name:"Rate",displayName:"Rate 评分",category:"form",packageName:"willa/Rate",description:"用于评价、满意度和偏好强度选择的评分控件。",imports:[{name:"Rate, type RateRef",from:"willa/Rate"}],css:"willa/Rate.css",demo:{name:"RatePreview",component:xe},code:`
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
      `},{title:"受控与清除",content:e.jsx(be,{}),code:`
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
      `},{title:"自定义字符",content:e.jsx(Re,{}),code:`
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
      `}],propGroups:[{title:"值",description:"控制评分数值、默认值和表单提交。"},{title:"交互",description:"控制清除、半星、键盘、禁用和回调。"},{title:"展示",description:"控制图标数量、尺寸、字符和提示文案。"}],props:[{name:"value",type:"number",group:"值",description:"受控评分值。"},{name:"defaultValue",type:"number",defaultValue:"0",group:"值",description:"非受控默认评分值。"},{name:"name",type:"string",group:"值",description:"表单提交时使用的隐藏 input 名称。"},{name:"allowClear",type:"boolean",defaultValue:"true",group:"交互",description:"再次点击当前评分时是否清空。"},{name:"allowHalf",type:"boolean",defaultValue:"false",group:"交互",description:"是否允许选择半星。"},{name:"autoFocus",type:"boolean",defaultValue:"false",group:"交互",description:"是否自动聚焦。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"交互",description:"是否禁用交互。"},{name:"keyboard",type:"boolean",defaultValue:"true",group:"交互",description:"是否允许键盘调整评分。"},{name:"onChange",type:"(value: number) => void",group:"交互",description:"评分变化时触发。"},{name:"onHoverChange",type:"(value: number) => void",group:"交互",description:"鼠标悬停评分变化时触发，离开时回传 0。"},{name:"onFocus / onBlur / onKeyDown",type:"function",group:"交互",description:"焦点和键盘事件回调。"},{name:"count",type:"number",defaultValue:"5",group:"展示",description:"评分字符数量。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',group:"展示",description:"评分字符尺寸。"},{name:"character",type:"ReactNode | ((context: RateCharacterRenderContext) => ReactNode)",group:"展示",description:"自定义评分字符，函数模式会收到当前项索引和激活状态。"},{name:"tooltips",type:"Array<string>",group:"展示",description:"每一项评分对应的提示文案，同时用于可访问性文案。"}]});export{Me as default};
