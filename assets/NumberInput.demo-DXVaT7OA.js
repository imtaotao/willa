import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{Q as i,W as a,d as o,m as s}from"./react-icons.esm-mVdwEXuX.js";import{H as ee}from"./src-D2lZkBJ2.js";import{t as c}from"./Button-O1aY2iqB.js";import{t as te}from"./Input-BaaTP3jc.js";import{a as l}from"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";var d=n(e()),ne=n(r()),f=t(),p=(0,d.forwardRef)((e,t)=>{let{value:n,defaultValue:r=null,constraints:i,stepper:a,behavior:c,format:l,slots:u,status:p,variant:h=`outline`,className:_,disabled:y,invalid:b,readOnly:x,inputMode:S=`decimal`,onBlur:C,onChange:le,onKeyDown:ue,onValueChange:w,...T}=e,E=i?.min,D=i?.max,O=i?.precision,de=a?.step??1,fe=a?.controls??!0,pe=a?.onStep,me=c?.changeOnBlur??!0,he=c?.keyboard??!0,ge=c?.onPressEnter,k=l?.decimalSeparator,A=l?.formatter,j=l?.parser,M=u?.addonBefore,N=u?.addonAfter,P=u?.prefix,F=u?.suffix,[I,L]=ee({value:n,defaultValue:(0,d.useMemo)(()=>g(r,{min:E,max:D,precision:O,clamp:!0}),[r,D,E,O]),onChange:w}),R=(0,d.useMemo)(()=>re(I,A),[I,A]),[z,B]=(0,d.useState)(R),[V,H]=(0,d.useState)(!1),U=v(E),W=v(D),G=ae(fe),_e=G?.incrementLabel??`增加数值`,ve=G?.decrementLabel??`减少数值`,K=!y&&!x,ye=!K||I!==null&&W!==null&&I>=W,be=!K||I!==null&&U!==null&&I<=U,xe=oe(h),Se=b||p===`error`,q=!!M,J=!!N,Ce=!!P,Y=!!F,X=!!G,we=q||Ce,Te=Y||X||J,Ee=q&&J;(0,d.useEffect)(()=>{V||B(R)},[V,R]);let Z=(e,t)=>{let n=g(e,{min:E,max:D,precision:O,clamp:t});return L(n),B(re(n,A)),n},Q=(e,t=1,n)=>{if(!K)return;let r=m(z,j,k),i=se({currentValue:I,inputValue:r.valid?r.value:null}),a=ie(de)*t,o=i===null?ce({direction:e,max:W,min:U,stepAmount:a}):i+e*a,s=Z(o,!0);s!==null&&pe?.(s,{emitter:n,offset:e*a,type:e>0?`up`:`down`})},De=e=>{let t=e.target.value,n=m(t,j,k);B(t),n.valid&&L(g(n.value,{min:E,max:D,precision:O,clamp:!1})),le?.(e)},Oe=e=>{H(!1);let t=m(e.target.value,j,k);t.valid?Z(t.value,me):B(R),C?.(e)},ke=e=>{ue?.(e),!(e.defaultPrevented||e.nativeEvent.isComposing)&&(e.key===`Enter`&&ge?.(e),he&&(e.key===`ArrowUp`&&(e.preventDefault(),Q(1,e.shiftKey?10:1,`keyboard`)),e.key===`ArrowDown`&&(e.preventDefault(),Q(-1,e.shiftKey?10:1,`keyboard`)),e.key===`Home`&&U!==null&&(e.preventDefault(),Z(U,!0)),e.key===`End`&&W!==null&&(e.preventDefault(),Z(W,!0))))},$=e=>{e.preventDefault()};return(0,f.jsx)(te,{...T,ref:t,type:`text`,role:`spinbutton`,variant:xe,className:(0,ne.default)(`willa-number-input`,`willa-number-input--${h}`,p===`warning`&&`willa-number-input--warning`,Te&&`willa-number-input--with-trailing`,q&&`willa-number-input--with-addon-before`,J&&`willa-number-input--with-addon-after`,Ee&&`willa-number-input--segmented`,Y&&`willa-number-input--with-suffix`,X&&`willa-number-input--with-controls`,_),inputMode:S,value:z,disabled:y,invalid:Se,readOnly:x,leadingAddon:we?(0,f.jsxs)(`span`,{className:`willa-number-input-leading`,children:[q?(0,f.jsx)(`span`,{className:`willa-number-input-addon-before`,children:M}):null,Ce?(0,f.jsx)(`span`,{className:`willa-number-input-prefix`,children:P}):null]}):null,"aria-valuemin":U??void 0,"aria-valuemax":W??void 0,"aria-valuenow":I??void 0,trailingAddon:Te?(0,f.jsxs)(`span`,{className:`willa-number-input-trailing`,children:[Y?(0,f.jsx)(`span`,{className:`willa-number-input-suffix`,children:F}):null,G?(0,f.jsxs)(`span`,{className:`willa-number-input-controls`,children:[(0,f.jsx)(`button`,{className:`willa-number-input-control-button`,type:`button`,tabIndex:-1,"aria-label":_e,disabled:ye,onMouseDown:$,onClick:()=>Q(1,1,`handler`),children:(0,f.jsx)(`span`,{className:`willa-number-input-control-icon`,"aria-hidden":`true`,children:G.upIcon??(0,f.jsx)(s,{})})}),(0,f.jsx)(`button`,{className:`willa-number-input-control-button`,type:`button`,tabIndex:-1,"aria-label":ve,disabled:be,onMouseDown:$,onClick:()=>Q(-1,1,`handler`),children:(0,f.jsx)(`span`,{className:`willa-number-input-control-icon`,"aria-hidden":`true`,children:G.downIcon??(0,f.jsx)(o,{})})})]}):null,J?(0,f.jsx)(`span`,{className:`willa-number-input-addon-after`,children:N}):null]}):null,onFocus:e=>{H(!0),T.onFocus?.(e)},onBlur:Oe,onChange:De,onKeyDown:ke})});p.displayName=`NumberInput`;var re=(e,t)=>t?t(e):e===null?``:String(e),m=(e,t,n)=>{let r=t?t(e):h(e,n),i=String(r).trim();if(!i)return{valid:!0,value:null};let a=Number(i);return Number.isFinite(a)?{valid:!0,value:a}:{valid:!1}},h=(e,t)=>(t&&t!==`.`?e.split(t).join(`.`):e).replace(/,/g,``),g=(e,t)=>{if(e===null||!Number.isFinite(e))return null;let n=v(t.min),r=v(t.max),i=_(t.precision),a=e;return t.clamp&&(n!==null&&(a=Math.max(a,n)),r!==null&&(a=Math.min(a,r))),i!==null&&(a=Number(a.toFixed(i))),Object.is(a,-0)?0:a},_=e=>typeof e!=`number`||!Number.isFinite(e)?null:Math.max(0,Math.trunc(e)),v=e=>typeof e==`number`&&Number.isFinite(e)?e:null,ie=e=>Number.isFinite(e)&&e>0?e:1,ae=e=>e?typeof e==`boolean`?{}:e:null,oe=e=>e===`filled`||e===`soft`?`soft`:`outline`,se=e=>{let{currentValue:t,inputValue:n}=e;return n===null?t===null?null:t:n},ce=e=>{let{direction:t,max:n,min:r,stepAmount:i}=e;return t>0?r??i:n??-i},y={display:`grid`,gap:`0.85rem`,maxWidth:`34rem`,marginInline:`auto`},b={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`0.75rem`,maxWidth:`42rem`,marginInline:`auto`},x={display:`flex`,flexWrap:`wrap`,gap:`0.55rem`},S={display:`grid`,gap:`0.75rem`,width:`min(100%, 34rem)`,marginInline:`auto`},C=()=>{let[e,t]=(0,d.useState)(6),[n,r]=(0,d.useState)(5),o=e=>{t(t=>w((t??0)+e))},s=e=>{r(t=>w((t??0)+e))};return(0,f.jsxs)(`div`,{style:y,children:[(0,f.jsx)(p,{value:e,constraints:{min:0,max:12},stepper:{controls:!1},slots:{addonBefore:(0,f.jsx)(`button`,{className:`willa-number-input-addon-action`,type:`button`,"aria-label":`减少席位`,onClick:()=>o(-1),children:(0,f.jsx)(a,{})}),addonAfter:(0,f.jsx)(`button`,{className:`willa-number-input-addon-action`,type:`button`,"aria-label":`增加席位`,onClick:()=>o(1),children:(0,f.jsx)(i,{})})},"aria-label":`席位数量`}),(0,f.jsx)(p,{value:n,constraints:{min:0,max:12},stepper:{controls:!1},slots:{addonBefore:(0,f.jsx)(`button`,{className:`willa-number-input-addon-action`,type:`button`,"aria-label":`减少访客`,onClick:()=>s(-1),children:(0,f.jsx)(a,{})}),addonAfter:(0,f.jsx)(`button`,{className:`willa-number-input-addon-action`,type:`button`,"aria-label":`增加访客`,onClick:()=>s(1),children:(0,f.jsx)(i,{})})},"aria-label":`访客数量`})]})},le=()=>{let[e,t]=(0,d.useState)(.7);return(0,f.jsxs)(`div`,{style:y,children:[(0,f.jsx)(p,{value:e,constraints:{min:0,max:2,precision:1},stepper:{step:.1},slots:{suffix:`temp`},"aria-label":`模型温度`,onValueChange:t}),(0,f.jsxs)(l,{tone:`info`,children:[`当前温度：`,e===null?`未设置`:e.toFixed(1)]})]})},ue=()=>{let e=(0,d.useRef)(null);return(0,f.jsxs)(`div`,{style:S,children:[(0,f.jsxs)(`div`,{style:x,children:[(0,f.jsx)(c,{variant:`outline`,onClick:()=>{e.current?.focus()},children:`Focus`}),(0,f.jsx)(c,{variant:`outline`,onClick:()=>{let t=e.current;t?.focus(),t?.setSelectionRange(t.value.length,t.value.length)},children:`Focus last`}),(0,f.jsx)(c,{variant:`outline`,onClick:()=>{e.current?.select()},children:`Select all`})]}),(0,f.jsx)(p,{ref:e,defaultValue:999,stepper:{controls:!1},"aria-label":`可编程聚焦数字`})]})},w=e=>Math.min(12,Math.max(0,e)),T=u({id:`number-input`,name:`NumberInput`,displayName:`数字输入`,category:`form`,packageName:`willa/NumberInput`,description:`用于价格、数量、比例和模型参数配置的数字输入框。`,imports:[{name:`NumberInput`,from:`willa/NumberInput`}],css:`willa/NumberInput.css`,demo:{name:`NumberInput`,component:p,props:{defaultValue:80,constraints:{min:0,max:100},slots:{suffix:`%`},width:`16rem`,"aria-label":`完成度`}},code:`
    import { NumberInput } from "willa/NumberInput";
    import "willa/NumberInput.css";

    <NumberInput
      defaultValue={80}
      constraints={{ min: 0, max: 100 }}
      slots={{ suffix: "%" }}
      aria-label="完成度"
    />;
  `,sections:[{title:`基础用法`,code:`
        <div style={rowStyle}>
          <NumberInput defaultValue={24} aria-label="数量" />
          <NumberInput
            defaultValue={80}
            constraints={{ min: 0, max: 100 }}
            slots={{ suffix: "%" }}
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            constraints={{ precision: 1 }}
            stepper={{ step: 0.5 }}
            slots={{ suffix: "x" }}
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            stepper={{ step: 100 }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:b,children:[(0,f.jsx)(p,{defaultValue:24,"aria-label":`数量`}),(0,f.jsx)(p,{defaultValue:80,constraints:{min:0,max:100},slots:{suffix:`%`},"aria-label":`完成度`}),(0,f.jsx)(p,{defaultValue:1,constraints:{precision:1},stepper:{step:.5},slots:{suffix:`x`},"aria-label":`倍率`}),(0,f.jsx)(p,{defaultValue:12800,stepper:{step:100},slots:{prefix:`￥`,suffix:`RMB`},format:{formatter:e=>e===null?``:e.toLocaleString(`zh-CN`),parser:e=>e.replace(/,/g,``)},"aria-label":`预算金额`})]})},{title:`尺寸`,code:`
        <div style={rowStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            aria-label="小尺寸数字"
          />
          <NumberInput
            size="md"
            defaultValue={24}
            aria-label="默认尺寸数字"
          />
          <NumberInput
            size="lg"
            defaultValue={36}
            aria-label="大尺寸数字"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:b,children:[(0,f.jsx)(p,{size:`sm`,defaultValue:12,"aria-label":`小尺寸数字`}),(0,f.jsx)(p,{size:`md`,defaultValue:24,"aria-label":`默认尺寸数字`}),(0,f.jsx)(p,{size:`lg`,defaultValue:36,"aria-label":`大尺寸数字`})]})},{title:`前缀和后缀`,code:`
        <div style={fullWidthStackStyle}>
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ addonBefore: "￥" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            constraints={{ min: 0, max: 2, precision: 1 }}
            stepper={{ step: 0.1, controls: false }}
            slots={{ suffix: "temp" }}
            aria-label="模型温度"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:S,children:[(0,f.jsx)(p,{defaultValue:12800,constraints:{min:0},stepper:{step:100,controls:!1},slots:{addonBefore:`￥`},format:{formatter:e=>e===null?``:e.toLocaleString(`zh-CN`),parser:e=>e.replace(/,/g,``)},"aria-label":`预算金额`}),(0,f.jsx)(p,{defaultValue:12800,constraints:{min:0},stepper:{step:100,controls:!1},slots:{prefix:`￥`,suffix:`RMB`},format:{formatter:e=>e===null?``:e.toLocaleString(`zh-CN`),parser:e=>e.replace(/,/g,``)},"aria-label":`预算金额`}),(0,f.jsx)(p,{defaultValue:.7,constraints:{min:0,max:2,precision:1},stepper:{step:.1,controls:!1},slots:{suffix:`temp`},"aria-label":`模型温度`})]})},{title:`形态和状态`,code:`
        <div style={stackStyle}>
            <NumberInput
              size="sm"
              defaultValue={12}
              stepper={{ controls: false }}
              aria-label="紧凑数字"
            />
            <NumberInput
              variant="filled"
              defaultValue={42}
              stepper={{ controls: false }}
              aria-label="填充形态"
            />
            <NumberInput
              variant="underlined"
              defaultValue={64}
              stepper={{ controls: false }}
              aria-label="下划线形态"
            />
            <NumberInput
              variant="borderless"
              defaultValue={128}
              stepper={{ controls: false }}
              aria-label="无边框形态"
            />
            <NumberInput
              status="warning"
              defaultValue={88}
              stepper={{ controls: false }}
              aria-label="警告数字"
            />
            <NumberInput
              status="error"
              defaultValue={108}
              stepper={{ controls: false }}
              aria-label="错误数字"
            />
            <NumberInput
              size="lg"
              defaultValue={256}
              disabled
              stepper={{ controls: false }}
              aria-label="禁用数字"
            />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:y,children:[(0,f.jsx)(p,{size:`sm`,defaultValue:12,stepper:{controls:!1},"aria-label":`紧凑数字`}),(0,f.jsx)(p,{variant:`filled`,defaultValue:42,stepper:{controls:!1},"aria-label":`填充形态`}),(0,f.jsx)(p,{variant:`underlined`,defaultValue:64,stepper:{controls:!1},"aria-label":`下划线形态`}),(0,f.jsx)(p,{variant:`borderless`,defaultValue:128,stepper:{controls:!1},"aria-label":`无边框形态`}),(0,f.jsx)(p,{status:`warning`,defaultValue:88,stepper:{controls:!1},"aria-label":`警告数字`}),(0,f.jsx)(p,{status:`error`,defaultValue:108,stepper:{controls:!1},"aria-label":`错误数字`}),(0,f.jsx)(p,{size:`lg`,defaultValue:256,disabled:!0,stepper:{controls:!1},"aria-label":`禁用数字`})]})},{title:`分段按钮`,code:`
        import { useState } from "react";
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        const Demo = () => {
          const [count, setCount] = useState<number | null>(6);

          return (
            <NumberInput
              value={count}
              constraints={{ min: 0, max: 12 }}
              stepper={{ controls: false }}
              slots={{
                addonBefore: (
                  <button
                    className="willa-number-input-addon-action"
                    type="button"
                    aria-label="减少"
                    onClick={() =>
                      setCount((value) => Math.max(0, (value ?? 0) - 1))
                    }
                  >
                    <MinusIcon />
                  </button>
                ),
                addonAfter: (
                  <button
                    className="willa-number-input-addon-action"
                    type="button"
                    aria-label="增加"
                    onClick={() =>
                      setCount((value) => Math.min(12, (value ?? 0) + 1))
                    }
                  >
                    <PlusIcon />
                  </button>
                ),
              }}
              aria-label="数量"
            />
          );
        };
      `,content:(0,f.jsx)(C,{})},{title:`格式化`,code:`
        <div style={stackStyle}>
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100 }}
            format={{
              formatter: (value) =>
                value === null ? "" : \`\${value.toLocaleString("zh-CN")} 元\`,
              parser: (value) => value.replace(/[^\\d.-]/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            constraints={{ min: 0, max: 1, precision: 2 }}
            stepper={{ step: 0.01 }}
            format={{
              formatter: (value) =>
                value === null ? "" : \`\${value * 100}%\`,
              parser: (value) => String(Number(value.replace("%", "")) / 100),
            }}
            aria-label="命中率"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:y,children:[(0,f.jsx)(p,{defaultValue:12800,constraints:{min:0},stepper:{step:100},format:{formatter:e=>e===null?``:`${e.toLocaleString(`zh-CN`)} 元`,parser:e=>e.replace(/[^\d.-]/g,``)},"aria-label":`预算金额`}),(0,f.jsx)(p,{defaultValue:.72,constraints:{min:0,max:1,precision:2},stepper:{step:.01},format:{formatter:e=>e===null?``:`${e*100}%`,parser:e=>String(Number(e.replace(`%`,``))/100)},"aria-label":`命中率`})]})},{title:`步进控制`,code:`
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        <div style={stackStyle}>
          <NumberInput
            defaultValue={10}
            constraints={{ min: 0, max: 20 }}
            stepper={{
              controls: { upIcon: <PlusIcon />, downIcon: <MinusIcon /> },
            }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            stepper={{ controls: false }}
            behavior={{ keyboard: false }}
            aria-label="关闭步进和键盘快捷"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:y,children:[(0,f.jsx)(p,{defaultValue:10,constraints:{min:0,max:20},stepper:{controls:{upIcon:(0,f.jsx)(i,{}),downIcon:(0,f.jsx)(a,{})}},"aria-label":`自定义步进图标`}),(0,f.jsx)(p,{defaultValue:12,stepper:{controls:!1},behavior:{keyboard:!1},"aria-label":`关闭步进和键盘快捷`})]})},{title:`受控`,code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { NumberInput } from "willa/NumberInput";
        import "willa/Badge.css";
        import "willa/NumberInput.css";

        const Demo = () => {
          const [temperature, setTemperature] = useState<number | null>(0.7);

          return (
            <div style={stackStyle}>
              <NumberInput
                value={temperature}
                constraints={{ min: 0, max: 2, precision: 1 }}
                stepper={{ step: 0.1 }}
                slots={{ suffix: "temp" }}
                aria-label="模型温度"
                onValueChange={setTemperature}
              />
              <Badge tone="info">
                当前温度：{temperature === null ? "未设置" : temperature.toFixed(1)}
              </Badge>
            </div>
          );
        };
      `,content:(0,f.jsx)(le,{})},{title:`聚焦控制`,code:`
        import { useRef } from "react";
        import { Button } from "willa/Button";
        import { NumberInput } from "willa/NumberInput";
        import "willa/Button.css";
        import "willa/NumberInput.css";

        const Demo = () => {
          const numberInputRef = useRef<HTMLInputElement>(null);

          return (
            <div style={fullWidthStackStyle}>
              <div style={buttonRowStyle}>
                <Button
                  variant="outline"
                  onClick={() => numberInputRef.current?.focus()}
                >
                  Focus
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const input = numberInputRef.current;

                    input?.focus();
                    input?.setSelectionRange(input.value.length, input.value.length);
                  }}
                >
                  Focus last
                </Button>
                <Button
                  variant="outline"
                  onClick={() => numberInputRef.current?.select()}
                >
                  Select all
                </Button>
              </div>
              <NumberInput
                ref={numberInputRef}
                defaultValue={999}
                stepper={{ controls: false }}
                aria-label="可编程聚焦数字"
              />
            </div>
          );
        };
      `,content:(0,f.jsx)(ue,{})}],props:[{name:`value`,type:`number | null`,description:`受控数字值，空输入对应 null。`},{name:`defaultValue`,type:`number | null`,defaultValue:`null`,description:`非受控默认数字值。`},{name:`constraints`,type:`{ min?: number; max?: number; precision?: number }`,description:`数值约束。min 和 max 同时作为 spinbutton 的 aria-valuemin / aria-valuemax；precision 控制提交时保留的小数位数。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`输入框尺寸，继承 Input 的尺寸体系。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义输入框宽度，继承 Input 的宽度设置。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用输入和步进操作。`},{name:`readOnly`,type:`boolean`,defaultValue:`false`,description:`是否只读；只读时仍可聚焦，但不会响应步进操作。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`是否展示错误状态，等价于 status 为 error 的视觉效果。`},{name:`stepper`,type:`{ step?: number; controls?: boolean | { upIcon?: ReactNode; downIcon?: ReactNode; incrementLabel?: string; decrementLabel?: string }; onStep?: (value: number, info: NumberInputStepInfo) => void }`,description:`步进配置。step 控制增减步长；controls 控制右侧步进按钮和图标；onStep 在按钮或键盘步进时触发。`},{name:`behavior`,type:`{ changeOnBlur?: boolean; keyboard?: boolean; onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void }`,description:`交互行为。changeOnBlur 控制失焦时是否夹取到 min/max；keyboard 控制方向键、Home 和 End；onPressEnter 处理 Enter。`},{name:`format`,type:`{ decimalSeparator?: string; formatter?: (value: number | null) => string; parser?: (value: string) => string | number }`,description:`格式化配置。formatter 把数字转为展示文本，parser 从展示文本还原数字，小数分隔符在默认解析时生效。`},{name:`slots`,type:`{ addonBefore?: ReactNode; addonAfter?: ReactNode; prefix?: ReactNode; suffix?: ReactNode }`,description:`输入框周边内容。addonBefore / addonAfter 用于分段区域，prefix / suffix 用于内联前后缀。`},{name:`status`,type:`"error" | "warning"`,description:`校验状态。error 会复用 Input 的错误态，warning 使用警告边框。`},{name:`variant`,type:`"outline" | "soft" | "filled" | "borderless" | "underlined"`,defaultValue:`"outline"`,description:`视觉形态，filled 会复用柔和背景，borderless 和 underlined 用于紧凑表单。`},{name:`onValueChange`,type:`(value: number | null) => void`,description:`数字值变化时触发。`},{name:`backgroundColor`,type:`string`,description:`背景色。`},{name:`inputClassName`,type:`string`,description:`input 元素 className。`},{name:`leadingIcon`,type:`ReactNode`,description:`前后缀图标。`},{name:`textColor`,type:`string`,description:`文本色。`},{name:`trailingIcon`,type:`ReactNode`,description:`前后缀图标。`}]});export{T as default};