import{b4 as o,b7 as pe,b2 as e,aO as I,aF as me,aA as h,Y as V,h as y}from"./index-BNqLp1iH.js";/* empty css              *//* empty css              */import{d as fe}from"./defineDoc-Bvvk0NBK.js";const ve=5,u=o.forwardRef((t,l)=>{const{value:i,defaultValue:r=0,count:c=ve,allowClear:b=!0,allowHalf:m=!1,autoFocus:B=!1,character:D,disabled:s=!1,keyboard:W=!0,name:E,size:_="md",tooltips:z=[],className:O,style:U,tabIndex:X,onBlur:R,onChange:Y,onFocus:j,onHoverChange:C,onKeyDown:S,onMouseLeave:k,...J}=t,v=o.useRef(null),d=Math.max(1,Math.floor(c)),[Q,Z]=pe({value:i,defaultValue:()=>N(r,d,m),onChange:Y}),[ee,te]=o.useState(null),[H,P]=o.useState(!1),g=N(Q,d,m),f=ee??g,ae=m?.5:1,le=o.useMemo(()=>Array.from({length:d},(a,n)=>n+1),[d]);o.useImperativeHandle(l,()=>({focus:()=>{var a;return(a=v.current)==null?void 0:a.focus()},blur:()=>{var a;return(a=v.current)==null?void 0:a.blur()}}),[]),o.useEffect(()=>{var a;B&&!s&&((a=v.current)==null||a.focus())},[B,s]);const G=(a,n={})=>{const p=N(a,d,m),w=n.clearable&&b&&p===g?0:p;Z(w)},M=a=>{te(a),C==null||C(a??0)},re=(a,n)=>{s||M(K(a,n,m))},ne=(a,n)=>{var p;s||((p=v.current)==null||p.focus(),G(K(a,n,m),{clearable:!0}))},oe=a=>{if(S==null||S(a),a.defaultPrevented||s||!W)return;const n=ge({count:d,currentValue:g,key:a.key,step:ae});n!==null&&(a.preventDefault(),G(n))},se=a=>{P(!0),j==null||j(a)},ue=a=>{P(!1),M(null),R==null||R(a)},ie=a=>{M(null),k==null||k(a)},ce=z[Math.ceil(f)-1]??`${f}/${d}`;return e.jsxs("div",{...J,ref:v,className:I("willa-rate",`willa-rate--${_}`,s&&"willa-rate--disabled",H&&"willa-rate--focused",O),style:U,role:"slider","aria-disabled":s||void 0,"aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":f,"aria-valuetext":ce,tabIndex:s?void 0:X??0,onBlur:ue,onFocus:se,onKeyDown:oe,onMouseLeave:ie,children:[e.jsx("span",{className:"willa-rate-items","aria-hidden":"true",children:le.map(a=>{const n=he(f,a),p=n>0,w=n>0&&n<100,de={"--willa-rate-active-width":`${n}%`},L=e.jsxs("span",{className:I("willa-rate-item",p&&"willa-rate-item--active",w&&"willa-rate-item--half"),style:de,onClick:F=>ne(F,a),onMouseMove:F=>re(F,a),children:[e.jsx("span",{className:"willa-rate-character willa-rate-character--base",children:q({character:D,disabled:s,focused:H,active:!1,half:!1,index:a,value:f})}),e.jsx("span",{className:"willa-rate-character willa-rate-character--active","aria-hidden":"true",children:q({character:D,disabled:s,focused:H,active:p,half:w,index:a,value:f})})]},a),A=z[a-1];return A?e.jsx(me,{content:A,side:"top",size:"sm",children:L},a):L})}),E?e.jsx("input",{type:"hidden",name:E,value:g,disabled:s}):null]})});u.displayName="Rate";const q=t=>typeof t.character=="function"?t.character({active:t.active,disabled:t.disabled,focused:t.focused,half:t.half,index:t.index,value:t.value}):t.character??e.jsx($,{}),$=()=>e.jsx("svg",{className:"willa-rate-star",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M12 2.8l2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 17.2l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.8z"})});$.displayName="RateStarIcon";const N=(t,l,i)=>{const r=Number.isFinite(t)?Number(t):0,c=i?.5:1,b=Math.round(r/c)*c;return Math.min(l,Math.max(0,b))},K=(t,l,i)=>{if(!i)return l;const r=t.currentTarget.getBoundingClientRect();return t.clientX-r.left<=r.width/2?l-.5:l},he=(t,l)=>t>=l?100:t<=l-1?0:(t-(l-1))*100,ge=t=>{const{count:l,currentValue:i,key:r,step:c}=t;return r==="ArrowRight"||r==="ArrowUp"?Math.min(l,i+c):r==="ArrowLeft"||r==="ArrowDown"?Math.max(0,i-c):r==="Home"?0:r==="End"?l:null},x=["很差","一般","还行","满意","推荐"],we={display:"grid",gap:"0.35rem",minWidth:"10rem",padding:"0.85rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.75rem",background:"var(--willa-panel-bg)"},T={color:"var(--willa-text-soft)",fontSize:"0.88rem",lineHeight:1.55},ye=()=>{const[t,l]=o.useState(3);return e.jsxs(V,{align:"center",gap:"lg",wrap:!0,children:[e.jsx(u,{value:t,tooltips:x,onChange:l}),e.jsxs("div",{style:we,children:[e.jsx("strong",{children:"服务体验"}),e.jsxs("span",{style:T,children:["当前 ",t," 分，",x[t-1]??"尚未评分","。"]})]})]})},xe=()=>e.jsxs(h,{gap:"md",children:[e.jsx(u,{allowHalf:!0,defaultValue:3.5}),e.jsx(u,{allowHalf:!0,defaultValue:2.5,count:7,size:"lg"})]}),Ve=()=>{const[t,l]=o.useState(4);return e.jsxs(V,{align:"center",gap:"md",wrap:!0,children:[e.jsx(u,{value:t,tooltips:x,onChange:l}),e.jsx("span",{style:T,children:x[t-1]})]})},be=()=>{const[t,l]=o.useState(2);return e.jsxs(h,{gap:"sm",children:[e.jsx(u,{value:t,allowClear:!0,onChange:l}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(y,{variant:"outline",onClick:()=>l(0),children:"清空"}),e.jsx(y,{variant:"outline",onClick:()=>l(5),children:"满分"})]})]})},Re=()=>e.jsxs(h,{gap:"md",children:[e.jsx(u,{defaultValue:4,character:"赞"}),e.jsx(u,{allowHalf:!0,defaultValue:3.5,character:({index:t})=>e.jsx("span",{children:t})})]}),je=()=>e.jsxs(h,{gap:"md",children:[e.jsx(u,{defaultValue:4,disabled:!0}),e.jsx(u,{allowHalf:!0,defaultValue:3.5,disabled:!0})]}),Ce=()=>{const t=o.useRef(null),[l,i]=o.useState(3);return e.jsxs(h,{gap:"sm",children:[e.jsx(u,{ref:t,allowHalf:!0,value:l,onChange:i}),e.jsxs(V,{gap:"sm",wrap:!0,children:[e.jsx(y,{variant:"outline",onClick:()=>{var r;return(r=t.current)==null?void 0:r.focus()},children:"聚焦"}),e.jsx(y,{variant:"outline",onClick:()=>{var r;return(r=t.current)==null?void 0:r.blur()},children:"失焦"})]}),e.jsx("span",{style:T,children:"聚焦后可用方向键、Home 和 End 调整评分。"})]})},Fe=fe({id:"rate",name:"Rate",displayName:"Rate 评分",category:"form",packageName:"willa/Rate",description:"用于评价、满意度和偏好强度选择的评分控件。",imports:[{name:"Rate, type RateRef",from:"willa/Rate"}],css:"willa/Rate.css",demo:{name:"RatePreview",component:ye},code:`
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
  `,sections:[{title:"半星与数量",content:e.jsx(xe,{}),code:`
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
      `}],propGroups:[{title:"值",description:"控制评分数值、默认值和表单提交。"},{title:"交互",description:"控制清除、半星、键盘、禁用和回调。"},{title:"展示",description:"控制图标数量、尺寸、字符和提示文案。"}],props:[{name:"value",type:"number",group:"值",description:"受控评分值。"},{name:"defaultValue",type:"number",defaultValue:"0",group:"值",description:"非受控默认评分值。"},{name:"name",type:"string",group:"值",description:"表单提交时使用的隐藏 input 名称。"},{name:"allowClear",type:"boolean",defaultValue:"true",group:"交互",description:"再次点击当前评分时是否清空。"},{name:"allowHalf",type:"boolean",defaultValue:"false",group:"交互",description:"是否允许选择半星。"},{name:"autoFocus",type:"boolean",defaultValue:"false",group:"交互",description:"是否自动聚焦。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"交互",description:"是否禁用交互。"},{name:"keyboard",type:"boolean",defaultValue:"true",group:"交互",description:"是否允许键盘调整评分。"},{name:"onChange",type:"(value: number) => void",group:"交互",description:"评分变化时触发。"},{name:"onHoverChange",type:"(value: number) => void",group:"交互",description:"鼠标悬停评分变化时触发，离开时回传 0。"},{name:"onFocus / onBlur / onKeyDown",type:"function",group:"交互",description:"焦点和键盘事件回调。"},{name:"count",type:"number",defaultValue:"5",group:"展示",description:"评分字符数量。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',group:"展示",description:"评分字符尺寸。"},{name:"character",type:"ReactNode | ((context: RateCharacterRenderContext) => ReactNode)",group:"展示",description:"自定义评分字符，函数模式会收到当前项索引和激活状态。"},{name:"tooltips",type:"Array<string>",group:"展示",description:"每一项评分对应的提示文案，同时用于可访问性文案。"},{name:"onBlur",type:'(import("react").FocusEventHandler<HTMLDivElement> & ((event: FocusEvent<HTMLDivElement>) => void)) | undefined',description:"${''}处理 Blur 事件。"},{name:"onFocus",type:'(import("react").FocusEventHandler<HTMLDivElement> & ((event: FocusEvent<HTMLDivElement>) => void)) | undefined',description:"${''}处理 Focus 事件。"},{name:"onKeyDown",type:"((event: KeyboardEvent<HTMLDivElement>) => void)",description:"${''}处理 KeyDown 事件。"}]});export{Fe as default};
