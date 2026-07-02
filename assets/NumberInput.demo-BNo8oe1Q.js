import{b5 as f,b8 as Pe,b3 as t,a1 as Ee,q as Te,n as Oe,aO as We,a9 as G,ai as U,B as $e,h as $}from"./index-CX7dlnN9.js";/* empty css              */import{d as He}from"./defineDoc-DzpR41Bj.js";const r=f.forwardRef((e,l)=>{const{value:u,defaultValue:i=null,constraints:a,stepper:s,behavior:o,format:c,slots:p,status:q,variant:_="outline",className:xe,disabled:J,invalid:Ne,readOnly:Q,inputMode:ve="decimal",onBlur:z,onChange:R,onKeyDown:A,onValueChange:Ie,...h}=e,I=a==null?void 0:a.min,g=a==null?void 0:a.max,V=a==null?void 0:a.precision,ge=(s==null?void 0:s.step)??1,ye=(s==null?void 0:s.controls)??!0,D=s==null?void 0:s.onStep,he=(o==null?void 0:o.changeOnBlur)??!0,Ve=(o==null?void 0:o.keyboard)??!0,L=o==null?void 0:o.onPressEnter,F=c==null?void 0:c.decimalSeparator,P=c==null?void 0:c.formatter,E=c==null?void 0:c.parser,X=p==null?void 0:p.addonBefore,Y=p==null?void 0:p.addonAfter,Z=p==null?void 0:p.prefix,ee=p==null?void 0:p.suffix,we=f.useMemo(()=>K(i,{min:I,max:g,precision:V,clamp:!0}),[i,g,I,V]),[b,te]=Pe({value:u,defaultValue:we,onChange:Ie}),w=f.useMemo(()=>me(b,P),[b,P]),[ae,j]=f.useState(w),[ne,le]=f.useState(!1),N=M(I),v=M(g),d=qe(ye),je=(d==null?void 0:d.incrementLabel)??"增加数值",Se=(d==null?void 0:d.decrementLabel)??"减少数值",T=!J&&!Q,Ce=!T||b!==null&&v!==null&&b>=v,Be=!T||b!==null&&N!==null&&b<=N,ke=_e(_),Me=Ne||q==="error",S=!!X,C=!!Y,re=!!Z,O=!!ee,se=!!d,ze=S||re,ue=O||se||C,Re=S&&C;f.useEffect(()=>{ne||j(w)},[ne,w]);const B=(n,m)=>{const x=K(n,{min:I,max:g,precision:V,clamp:m});return te(x),j(me(x,P)),x},k=(n,m=1,x)=>{if(!T)return;const oe=H(ae,E,F),ce=Je({currentValue:b,inputValue:oe.valid?oe.value:null}),W=Ue(ge)*m,Fe=ce===null?Qe({direction:n,max:v,min:N,stepAmount:W}):ce+n*W,pe=B(Fe,!0);pe!==null&&(D==null||D(pe,{emitter:x,offset:n*W,type:n>0?"up":"down"}))},Ae=n=>{const m=n.target.value,x=H(m,E,F);j(m),x.valid&&te(K(x.value,{min:I,max:g,precision:V,clamp:!1})),R==null||R(n)},De=n=>{le(!1);const m=H(n.target.value,E,F);m.valid?B(m.value,he):j(w),z==null||z(n)},Le=n=>{A==null||A(n),!(n.defaultPrevented||n.nativeEvent.isComposing)&&(n.key==="Enter"&&(L==null||L(n)),Ve&&(n.key==="ArrowUp"&&(n.preventDefault(),k(1,n.shiftKey?10:1,"keyboard")),n.key==="ArrowDown"&&(n.preventDefault(),k(-1,n.shiftKey?10:1,"keyboard")),n.key==="Home"&&N!==null&&(n.preventDefault(),B(N,!0)),n.key==="End"&&v!==null&&(n.preventDefault(),B(v,!0))))},ie=n=>{n.preventDefault()};return t.jsx(Ee,{...h,ref:l,type:"text",role:"spinbutton",variant:ke,className:We("willa-number-input",`willa-number-input--${_}`,q==="warning"&&"willa-number-input--warning",ue&&"willa-number-input--with-trailing",S&&"willa-number-input--with-addon-before",C&&"willa-number-input--with-addon-after",Re&&"willa-number-input--segmented",O&&"willa-number-input--with-suffix",se&&"willa-number-input--with-controls",xe),inputMode:ve,value:ae,disabled:J,invalid:Me,readOnly:Q,leadingAddon:ze?t.jsxs("span",{className:"willa-number-input-leading",children:[S?t.jsx("span",{className:"willa-number-input-addon-before",children:X}):null,re?t.jsx("span",{className:"willa-number-input-prefix",children:Z}):null]}):null,"aria-valuemin":N??void 0,"aria-valuemax":v??void 0,"aria-valuenow":b??void 0,trailingAddon:ue?t.jsxs("span",{className:"willa-number-input-trailing",children:[O?t.jsx("span",{className:"willa-number-input-suffix",children:ee}):null,d?t.jsxs("span",{className:"willa-number-input-controls",children:[t.jsx("button",{className:"willa-number-input-control-button",type:"button",tabIndex:-1,"aria-label":je,disabled:Ce,onMouseDown:ie,onClick:()=>k(1,1,"handler"),children:t.jsx("span",{className:"willa-number-input-control-icon","aria-hidden":"true",children:d.upIcon??t.jsx(Te,{})})}),t.jsx("button",{className:"willa-number-input-control-button",type:"button",tabIndex:-1,"aria-label":Se,disabled:Be,onMouseDown:ie,onClick:()=>k(-1,1,"handler"),children:t.jsx("span",{className:"willa-number-input-control-icon","aria-hidden":"true",children:d.downIcon??t.jsx(Oe,{})})})]}):null,C?t.jsx("span",{className:"willa-number-input-addon-after",children:Y}):null]}):null,onFocus:n=>{var m;le(!0),(m=h.onFocus)==null||m.call(h,n)},onBlur:De,onChange:Ae,onKeyDown:Le})});r.displayName="NumberInput";const me=(e,l)=>l?l(e):e===null?"":String(e),H=(e,l,u)=>{const i=l?l(e):Ke(e,u),a=String(i).trim();if(!a)return{valid:!0,value:null};const s=Number(a);return Number.isFinite(s)?{valid:!0,value:s}:{valid:!1}},Ke=(e,l)=>(l&&l!=="."?e.split(l).join("."):e).replace(/,/g,""),K=(e,l)=>{if(e===null||!Number.isFinite(e))return null;const u=M(l.min),i=M(l.max),a=Ge(l.precision);let s=e;return l.clamp&&(u!==null&&(s=Math.max(s,u)),i!==null&&(s=Math.min(s,i))),a!==null&&(s=Number(s.toFixed(a))),Object.is(s,-0)?0:s},Ge=e=>typeof e!="number"||!Number.isFinite(e)?null:Math.max(0,Math.trunc(e)),M=e=>typeof e=="number"&&Number.isFinite(e)?e:null,Ue=e=>Number.isFinite(e)&&e>0?e:1,qe=e=>e?typeof e=="boolean"?{}:e:null,_e=e=>e==="filled"||e==="soft"?"soft":"outline",Je=e=>{const{currentValue:l,inputValue:u}=e;return u!==null?u:l!==null?l:null},Qe=e=>{const{direction:l,max:u,min:i,stepAmount:a}=e;return l>0?i??a:u??-a},y={display:"grid",gap:"0.85rem",maxWidth:"34rem",marginInline:"auto"},de={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.75rem",maxWidth:"42rem",marginInline:"auto"},Xe={display:"flex",flexWrap:"wrap",gap:"0.55rem"},be={display:"grid",gap:"0.75rem",width:"min(100%, 34rem)",marginInline:"auto"},Ye=()=>{const[e,l]=f.useState(6),[u,i]=f.useState(5),a=o=>{l(c=>fe((c??0)+o))},s=o=>{i(c=>fe((c??0)+o))};return t.jsxs("div",{style:y,children:[t.jsx(r,{value:e,constraints:{min:0,max:12},stepper:{controls:!1},slots:{addonBefore:t.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"减少席位",onClick:()=>a(-1),children:t.jsx(G,{})}),addonAfter:t.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"增加席位",onClick:()=>a(1),children:t.jsx(U,{})})},"aria-label":"席位数量"}),t.jsx(r,{value:u,constraints:{min:0,max:12},stepper:{controls:!1},slots:{addonBefore:t.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"减少访客",onClick:()=>s(-1),children:t.jsx(G,{})}),addonAfter:t.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"增加访客",onClick:()=>s(1),children:t.jsx(U,{})})},"aria-label":"访客数量"})]})},Ze=()=>{const[e,l]=f.useState(.7);return t.jsxs("div",{style:y,children:[t.jsx(r,{value:e,constraints:{min:0,max:2,precision:1},stepper:{step:.1},slots:{suffix:"temp"},"aria-label":"模型温度",onValueChange:l}),t.jsxs($e,{tone:"info",children:["当前温度：",e===null?"未设置":e.toFixed(1)]})]})},et=()=>{const e=f.useRef(null),l=()=>{var a;(a=e.current)==null||a.focus()},u=()=>{const a=e.current;a==null||a.focus(),a==null||a.setSelectionRange(a.value.length,a.value.length)},i=()=>{var a;(a=e.current)==null||a.select()};return t.jsxs("div",{style:be,children:[t.jsxs("div",{style:Xe,children:[t.jsx($,{variant:"outline",onClick:l,children:"Focus"}),t.jsx($,{variant:"outline",onClick:u,children:"Focus last"}),t.jsx($,{variant:"outline",onClick:i,children:"Select all"})]}),t.jsx(r,{ref:e,defaultValue:999,stepper:{controls:!1},"aria-label":"可编程聚焦数字"})]})},fe=e=>Math.min(12,Math.max(0,e)),lt=He({id:"number-input",name:"NumberInput",displayName:"数字输入",category:"form",packageName:"willa/NumberInput",description:"用于价格、数量、比例和模型参数配置的数字输入框。",imports:[{name:"NumberInput",from:"willa/NumberInput"}],css:"willa/NumberInput.css",demo:{name:"NumberInput",component:r,props:{defaultValue:80,constraints:{min:0,max:100},slots:{suffix:"%"},width:"16rem","aria-label":"完成度"}},code:`
    import { NumberInput } from "willa/NumberInput";
    import "willa/NumberInput.css";

    <NumberInput
      defaultValue={80}
      constraints={{ min: 0, max: 100 }}
      slots={{ suffix: "%" }}
      aria-label="完成度"
    />;
  `,sections:[{title:"基础用法",code:`
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
      `,content:t.jsxs("div",{style:de,children:[t.jsx(r,{defaultValue:24,"aria-label":"数量"}),t.jsx(r,{defaultValue:80,constraints:{min:0,max:100},slots:{suffix:"%"},"aria-label":"完成度"}),t.jsx(r,{defaultValue:1,constraints:{precision:1},stepper:{step:.5},slots:{suffix:"x"},"aria-label":"倍率"}),t.jsx(r,{defaultValue:12800,stepper:{step:100},slots:{prefix:"￥",suffix:"RMB"},format:{formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,"")},"aria-label":"预算金额"})]})},{title:"尺寸",code:`
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
      `,content:t.jsxs("div",{style:de,children:[t.jsx(r,{size:"sm",defaultValue:12,"aria-label":"小尺寸数字"}),t.jsx(r,{size:"md",defaultValue:24,"aria-label":"默认尺寸数字"}),t.jsx(r,{size:"lg",defaultValue:36,"aria-label":"大尺寸数字"})]})},{title:"前缀和后缀",code:`
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
      `,content:t.jsxs("div",{style:be,children:[t.jsx(r,{defaultValue:12800,constraints:{min:0},stepper:{step:100,controls:!1},slots:{addonBefore:"￥"},format:{formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,"")},"aria-label":"预算金额"}),t.jsx(r,{defaultValue:12800,constraints:{min:0},stepper:{step:100,controls:!1},slots:{prefix:"￥",suffix:"RMB"},format:{formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,"")},"aria-label":"预算金额"}),t.jsx(r,{defaultValue:.7,constraints:{min:0,max:2,precision:1},stepper:{step:.1,controls:!1},slots:{suffix:"temp"},"aria-label":"模型温度"})]})},{title:"形态和状态",code:`
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
      `,content:t.jsxs("div",{style:y,children:[t.jsx(r,{size:"sm",defaultValue:12,stepper:{controls:!1},"aria-label":"紧凑数字"}),t.jsx(r,{variant:"filled",defaultValue:42,stepper:{controls:!1},"aria-label":"填充形态"}),t.jsx(r,{variant:"underlined",defaultValue:64,stepper:{controls:!1},"aria-label":"下划线形态"}),t.jsx(r,{variant:"borderless",defaultValue:128,stepper:{controls:!1},"aria-label":"无边框形态"}),t.jsx(r,{status:"warning",defaultValue:88,stepper:{controls:!1},"aria-label":"警告数字"}),t.jsx(r,{status:"error",defaultValue:108,stepper:{controls:!1},"aria-label":"错误数字"}),t.jsx(r,{size:"lg",defaultValue:256,disabled:!0,stepper:{controls:!1},"aria-label":"禁用数字"})]})},{title:"分段按钮",code:`
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
      `,content:t.jsx(Ye,{})},{title:"格式化",code:`
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
      `,content:t.jsxs("div",{style:y,children:[t.jsx(r,{defaultValue:12800,constraints:{min:0},stepper:{step:100},format:{formatter:e=>e===null?"":`${e.toLocaleString("zh-CN")} 元`,parser:e=>e.replace(/[^\d.-]/g,"")},"aria-label":"预算金额"}),t.jsx(r,{defaultValue:.72,constraints:{min:0,max:1,precision:2},stepper:{step:.01},format:{formatter:e=>e===null?"":`${e*100}%`,parser:e=>String(Number(e.replace("%",""))/100)},"aria-label":"命中率"})]})},{title:"步进控制",code:`
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
      `,content:t.jsxs("div",{style:y,children:[t.jsx(r,{defaultValue:10,constraints:{min:0,max:20},stepper:{controls:{upIcon:t.jsx(U,{}),downIcon:t.jsx(G,{})}},"aria-label":"自定义步进图标"}),t.jsx(r,{defaultValue:12,stepper:{controls:!1},behavior:{keyboard:!1},"aria-label":"关闭步进和键盘快捷"})]})},{title:"受控",code:`
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
      `,content:t.jsx(Ze,{})},{title:"聚焦控制",code:`
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
      `,content:t.jsx(et,{})}],props:[{name:"value",type:"number | null",description:"受控数字值，空输入对应 null。"},{name:"defaultValue",type:"number | null",defaultValue:"null",description:"非受控默认数字值。"},{name:"constraints",type:"{ min?: number; max?: number; precision?: number }",description:"数值约束。min 和 max 同时作为 spinbutton 的 aria-valuemin / aria-valuemax；precision 控制提交时保留的小数位数。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"输入框尺寸，继承 Input 的尺寸体系。"},{name:"width",type:"CSSProperties['width']",description:"自定义输入框宽度，继承 Input 的宽度设置。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用输入和步进操作。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"是否只读；只读时仍可聚焦，但不会响应步进操作。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"是否展示错误状态，等价于 status 为 error 的视觉效果。"},{name:"stepper",type:"{ step?: number; controls?: boolean | { upIcon?: ReactNode; downIcon?: ReactNode; incrementLabel?: string; decrementLabel?: string }; onStep?: (value: number, info: NumberInputStepInfo) => void }",description:"步进配置。step 控制增减步长；controls 控制右侧步进按钮和图标；onStep 在按钮或键盘步进时触发。"},{name:"behavior",type:"{ changeOnBlur?: boolean; keyboard?: boolean; onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void }",description:"交互行为。changeOnBlur 控制失焦时是否夹取到 min/max；keyboard 控制方向键、Home 和 End；onPressEnter 处理 Enter。"},{name:"format",type:"{ decimalSeparator?: string; formatter?: (value: number | null) => string; parser?: (value: string) => string | number }",description:"格式化配置。formatter 把数字转为展示文本，parser 从展示文本还原数字，小数分隔符在默认解析时生效。"},{name:"slots",type:"{ addonBefore?: ReactNode; addonAfter?: ReactNode; prefix?: ReactNode; suffix?: ReactNode }",description:"输入框周边内容。addonBefore / addonAfter 用于分段区域，prefix / suffix 用于内联前后缀。"},{name:"status",type:'"error" | "warning"',description:"校验状态。error 会复用 Input 的错误态，warning 使用警告边框。"},{name:"variant",type:'"outline" | "soft" | "filled" | "borderless" | "underlined"',defaultValue:'"outline"',description:"视觉形态，filled 会复用柔和背景，borderless 和 underlined 用于紧凑表单。"},{name:"onValueChange",type:"(value: number | null) => void",description:"数字值变化时触发。"},{name:"backgroundColor",type:"string",description:"背景色。"},{name:"inputClassName",type:"string",description:"input 元素 className。"},{name:"leadingIcon",type:"ReactNode",description:"前后缀图标。"},{name:"textColor",type:"string",description:"文本色。"},{name:"trailingIcon",type:"ReactNode",description:"前后缀图标。"}]});export{lt as default};
