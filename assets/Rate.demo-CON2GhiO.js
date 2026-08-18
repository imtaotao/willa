import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{H as i}from"./src-D2lZkBJ2.js";import{t as a}from"./Tooltip-qsRvQdsp.js";import{t as o}from"./Button-O1aY2iqB.js";import{t as s}from"./Group-C-JhzSsC.js";import{t as c}from"./Stack-DwlHdG-i.js";import"./index-y4TTR3pk.js";import"./style-B00R6KjV.js";import{t as l}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var u=n(e()),d=n(r()),f=t(),p=5,m=(0,u.forwardRef)((e,t)=>{let{value:n,defaultValue:r=0,count:o=p,allowClear:s=!0,allowHalf:c=!1,autoFocus:l=!1,character:m,disabled:g=!1,keyboard:x=!0,name:S,size:C=`md`,tooltips:w=[],className:T,style:E,tabIndex:D,onBlur:O,onChange:k,onFocus:A,onHoverChange:j,onKeyDown:M,onMouseLeave:N,...P}=e,F=(0,u.useRef)(null),I=Math.max(1,Math.floor(o)),[L,R]=i({value:n,defaultValue:()=>_(r,I,c),onChange:k}),[z,B]=(0,u.useState)(null),[V,H]=(0,u.useState)(!1),U=_(L,I,c),W=z??U,G=c?.5:1,K=(0,u.useMemo)(()=>Array.from({length:I},(e,t)=>t+1),[I]);(0,u.useImperativeHandle)(t,()=>({focus:()=>F.current?.focus(),blur:()=>F.current?.blur()}),[]),(0,u.useEffect)(()=>{l&&!g&&F.current?.focus()},[l,g]);let q=(e,t={})=>{let n=_(e,I,c),r=t.clearable&&s&&n===U?0:n;R(r)},J=e=>{B(e),j?.(e??0)},Y=(e,t)=>{g||J(v(e,t,c))},X=(e,t)=>{g||(F.current?.focus(),q(v(e,t,c),{clearable:!0}))},Z=e=>{if(M?.(e),e.defaultPrevented||g||!x)return;let t=b({count:I,currentValue:U,key:e.key,step:G});t!==null&&(e.preventDefault(),q(t))},Q=e=>{H(!0),A?.(e)},$=e=>{H(!1),J(null),O?.(e)},ee=e=>{J(null),N?.(e)},te=w[Math.ceil(W)-1]??`${W}/${I}`;return(0,f.jsxs)(`div`,{...P,ref:F,className:(0,d.default)(`willa-rate`,`willa-rate--${C}`,g&&`willa-rate--disabled`,V&&`willa-rate--focused`,T),style:E,role:`slider`,"aria-disabled":g||void 0,"aria-valuemin":0,"aria-valuemax":I,"aria-valuenow":W,"aria-valuetext":te,tabIndex:g?void 0:D??0,onBlur:$,onFocus:Q,onKeyDown:Z,onMouseLeave:ee,children:[(0,f.jsx)(`span`,{className:`willa-rate-items`,"aria-hidden":`true`,children:K.map(e=>{let t=y(W,e),n=t>0,r=t>0&&t<100,i={"--willa-rate-active-width":`${t}%`},o=(0,f.jsxs)(`span`,{className:(0,d.default)(`willa-rate-item`,n&&`willa-rate-item--active`,r&&`willa-rate-item--half`),style:i,onClick:t=>X(t,e),onMouseMove:t=>Y(t,e),children:[(0,f.jsx)(`span`,{className:`willa-rate-character willa-rate-character--base`,children:h({character:m,disabled:g,focused:V,active:!1,half:!1,index:e,value:W})}),(0,f.jsx)(`span`,{className:`willa-rate-character willa-rate-character--active`,"aria-hidden":`true`,children:h({character:m,disabled:g,focused:V,active:n,half:r,index:e,value:W})})]},e),s=w[e-1];return s?(0,f.jsx)(a,{content:s,side:`top`,size:`sm`,children:o},e):o})}),S?(0,f.jsx)(`input`,{type:`hidden`,name:S,value:U,disabled:g}):null]})});m.displayName=`Rate`;var h=e=>typeof e.character==`function`?e.character({active:e.active,disabled:e.disabled,focused:e.focused,half:e.half,index:e.index,value:e.value}):e.character??(0,f.jsx)(g,{}),g=()=>(0,f.jsx)(`svg`,{className:`willa-rate-star`,viewBox:`0 0 24 24`,focusable:`false`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M12 2.8l2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 17.2l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.8z`})});g.displayName=`RateStarIcon`;var _=(e,t,n)=>{let r=Number.isFinite(e)?Number(e):0,i=n?.5:1,a=Math.round(r/i)*i;return Math.min(t,Math.max(0,a))},v=(e,t,n)=>{if(!n)return t;let r=e.currentTarget.getBoundingClientRect();return e.clientX-r.left<=r.width/2?t-.5:t},y=(e,t)=>e>=t?100:e<=t-1?0:(e-(t-1))*100,b=e=>{let{count:t,currentValue:n,key:r,step:i}=e;return r===`ArrowRight`||r===`ArrowUp`?Math.min(t,n+i):r===`ArrowLeft`||r===`ArrowDown`?Math.max(0,n-i):r===`Home`?0:r===`End`?t:null},x=[`很差`,`一般`,`还行`,`满意`,`推荐`],S={display:`grid`,gap:`0.35rem`,minWidth:`10rem`,padding:`0.85rem`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.75rem`,background:`var(--willa-panel-bg)`},C={color:`var(--willa-text-soft)`,fontSize:`0.88rem`,lineHeight:1.55},w=l({id:`rate`,name:`Rate`,displayName:`Rate 评分`,category:`form`,packageName:`willa/Rate`,description:`用于评价、满意度和偏好强度选择的评分控件。`,imports:[{name:`Rate, type RateRef`,from:`willa/Rate`}],css:`willa/Rate.css`,demo:{name:`RatePreview`,component:()=>{let[e,t]=(0,u.useState)(3);return(0,f.jsxs)(s,{align:`center`,gap:`lg`,wrap:!0,children:[(0,f.jsx)(m,{value:e,tooltips:x,onChange:t}),(0,f.jsxs)(`div`,{style:S,children:[(0,f.jsx)(`strong`,{children:`服务体验`}),(0,f.jsxs)(`span`,{style:C,children:[`当前 `,e,` 分，`,x[e-1]??`尚未评分`,`。`]})]})]})}},code:`
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
  `,sections:[{title:`半星与数量`,content:(0,f.jsx)(()=>(0,f.jsxs)(c,{gap:`md`,children:[(0,f.jsx)(m,{allowHalf:!0,defaultValue:3.5}),(0,f.jsx)(m,{allowHalf:!0,defaultValue:2.5,count:7,size:`lg`})]}),{}),code:`
        <Stack gap="md">
          <Rate allowHalf defaultValue={3.5} />
          <Rate allowHalf defaultValue={2.5} count={7} size="lg" />
        </Stack>;
      `},{title:`文案提示`,content:(0,f.jsx)(()=>{let[e,t]=(0,u.useState)(4);return(0,f.jsxs)(s,{align:`center`,gap:`md`,wrap:!0,children:[(0,f.jsx)(m,{value:e,tooltips:x,onChange:t}),(0,f.jsx)(`span`,{style:C,children:x[e-1]})]})},{}),code:`
        const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];
        const [value, setValue] = useState(4);

        <Group align="center" gap="md" wrap>
          <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
          <span>{qualityTooltips[value - 1]}</span>
        </Group>;
      `},{title:`受控与清除`,content:(0,f.jsx)(()=>{let[e,t]=(0,u.useState)(2);return(0,f.jsxs)(c,{gap:`sm`,children:[(0,f.jsx)(m,{value:e,allowClear:!0,onChange:t}),(0,f.jsxs)(s,{gap:`sm`,wrap:!0,children:[(0,f.jsx)(o,{variant:`outline`,onClick:()=>t(0),children:`清空`}),(0,f.jsx)(o,{variant:`outline`,onClick:()=>t(5),children:`满分`})]})]})},{}),code:`
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
      `},{title:`自定义字符`,content:(0,f.jsx)(()=>(0,f.jsxs)(c,{gap:`md`,children:[(0,f.jsx)(m,{defaultValue:4,character:`赞`}),(0,f.jsx)(m,{allowHalf:!0,defaultValue:3.5,character:({index:e})=>(0,f.jsx)(`span`,{children:e})})]}),{}),code:`
        <Stack gap="md">
          <Rate defaultValue={4} character="赞" />
          <Rate
            allowHalf
            defaultValue={3.5}
            character={({ index }) => <span>{index}</span>}
          />
        </Stack>;
      `},{title:`只读状态`,content:(0,f.jsx)(()=>(0,f.jsxs)(c,{gap:`md`,children:[(0,f.jsx)(m,{defaultValue:4,disabled:!0}),(0,f.jsx)(m,{allowHalf:!0,defaultValue:3.5,disabled:!0})]}),{}),code:`
        <Stack gap="md">
          <Rate defaultValue={4} disabled />
          <Rate allowHalf defaultValue={3.5} disabled />
        </Stack>;
      `},{title:`键盘与方法`,content:(0,f.jsx)(()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(3);return(0,f.jsxs)(c,{gap:`sm`,children:[(0,f.jsx)(m,{ref:e,allowHalf:!0,value:t,onChange:n}),(0,f.jsxs)(s,{gap:`sm`,wrap:!0,children:[(0,f.jsx)(o,{variant:`outline`,onClick:()=>e.current?.focus(),children:`聚焦`}),(0,f.jsx)(o,{variant:`outline`,onClick:()=>e.current?.blur(),children:`失焦`})]}),(0,f.jsx)(`span`,{style:C,children:`聚焦后可用方向键、Home 和 End 调整评分。`})]})},{}),code:`
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
      `}],propGroups:[{title:`值`,description:`控制评分数值、默认值和表单提交。`},{title:`交互`,description:`控制清除、半星、键盘、禁用和回调。`},{title:`展示`,description:`控制图标数量、尺寸、字符和提示文案。`}],props:[{name:`value`,type:`number`,group:`值`,description:`受控评分值。`},{name:`defaultValue`,type:`number`,defaultValue:`0`,group:`值`,description:`非受控默认评分值。`},{name:`name`,type:`string`,group:`值`,description:`表单提交时使用的隐藏 input 名称。`},{name:`allowClear`,type:`boolean`,defaultValue:`true`,group:`交互`,description:`再次点击当前评分时是否清空。`},{name:`allowHalf`,type:`boolean`,defaultValue:`false`,group:`交互`,description:`是否允许选择半星。`},{name:`autoFocus`,type:`boolean`,defaultValue:`false`,group:`交互`,description:`是否自动聚焦。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,group:`交互`,description:`是否禁用交互。`},{name:`keyboard`,type:`boolean`,defaultValue:`true`,group:`交互`,description:`是否允许键盘调整评分。`},{name:`onChange`,type:`(value: number) => void`,group:`交互`,description:`评分变化时触发。`},{name:`onHoverChange`,type:`(value: number) => void`,group:`交互`,description:`鼠标悬停评分变化时触发，离开时回传 0。`},{name:`onFocus / onBlur / onKeyDown`,type:`function`,group:`交互`,description:`焦点和键盘事件回调。`},{name:`count`,type:`number`,defaultValue:`5`,group:`展示`,description:`评分字符数量。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,group:`展示`,description:`评分字符尺寸。`},{name:`character`,type:`ReactNode | ((context: RateCharacterRenderContext) => ReactNode)`,group:`展示`,description:`自定义评分字符，函数模式会收到当前项索引和激活状态。`},{name:`tooltips`,type:`Array<string>`,group:`展示`,description:`每一项评分对应的提示文案，同时用于可访问性文案。`},{name:`onBlur`,type:`(import("react").FocusEventHandler<HTMLDivElement> & ((event: FocusEvent<HTMLDivElement>) => void)) | undefined`,description:"${''}处理 Blur 事件。"},{name:`onFocus`,type:`(import("react").FocusEventHandler<HTMLDivElement> & ((event: FocusEvent<HTMLDivElement>) => void)) | undefined`,description:"${''}处理 Focus 事件。"},{name:`onKeyDown`,type:`((event: KeyboardEvent<HTMLDivElement>) => void)`,description:"${''}处理 KeyDown 事件。"}]});export{w as default};