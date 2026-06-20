import{aZ as c,b0 as Re,aX as a,_ as De,q as Fe,n as Ae,aI as Le,a6 as O,af as $,B as Te,h as P}from"./index-De2NcdRG.js";/* empty css              */import{d as Pe}from"./defineDoc-CsJG9Vs4.js";const r=c.forwardRef((e,n)=>{const{value:i,defaultValue:s=null,min:t,max:u,step:x=1,precision:d,changeOnBlur:me=!0,controls:pe=!0,keyboard:fe=!0,addonBefore:H,addonAfter:K,prefix:G,suffix:U,status:_,variant:q="outline",decimalSeparator:C,incrementLabel:be="增加数值",decrementLabel:xe="减少数值",formatter:B,parser:k,className:ye,disabled:X,invalid:Ne,readOnly:Z,inputMode:ve="decimal",onBlur:M,onChange:z,onKeyDown:R,onPressEnter:D,onStep:F,onValueChange:Ie,...N}=e,ge=c.useMemo(()=>W(s,{min:t,max:u,precision:d,clamp:!0}),[s,u,t,d]),[m,J]=Re({value:i,defaultValue:ge,onChange:Ie}),v=c.useMemo(()=>se(m,B,{input:"",userTyping:!1}),[m,B]),[Q,I]=c.useState(v),[Y,ee]=c.useState(!1),f=S(t),b=S(u),g=$e(pe),A=!X&&!Z,he=!A||m!==null&&b!==null&&m>=b,Ve=!A||m!==null&&f!==null&&m<=f,we=He(q),je=Ne||_==="error",h=!!H,V=!!K,ae=!!G,L=!!U,te=!!g,Se=h||ae,le=L||te||V,Ce=h&&V;c.useEffect(()=>{Y||I(v)},[Y,v]);const w=(l,o)=>{const p=W(l,{min:t,max:u,precision:d,clamp:o});return J(p),I(se(p,B,{input:"",userTyping:!1})),p},j=(l,o=1,p)=>{if(!A)return;const re=E(Q,k,C),ue=Ke({currentValue:m,inputValue:re.valid?re.value:null}),T=Oe(x)*o,ze=ue===null?Ge({direction:l,max:b,min:f,stepAmount:T}):ue+l*T,ie=w(ze,!0);ie!==null&&(F==null||F(ie,{emitter:p,offset:l*T,type:l>0?"up":"down"}))},Be=l=>{const o=l.target.value,p=E(o,k,C);I(o),p.valid&&J(W(p.value,{min:t,max:u,precision:d,clamp:!1})),z==null||z(l)},ke=l=>{ee(!1);const o=E(l.target.value,k,C);o.valid?w(o.value,me):I(v),M==null||M(l)},Me=l=>{R==null||R(l),!(l.defaultPrevented||l.nativeEvent.isComposing)&&(l.key==="Enter"&&(D==null||D(l)),fe&&(l.key==="ArrowUp"&&(l.preventDefault(),j(1,l.shiftKey?10:1,"keyboard")),l.key==="ArrowDown"&&(l.preventDefault(),j(-1,l.shiftKey?10:1,"keyboard")),l.key==="Home"&&f!==null&&(l.preventDefault(),w(f,!0)),l.key==="End"&&b!==null&&(l.preventDefault(),w(b,!0))))},ne=l=>{l.preventDefault()};return a.jsx(De,{...N,ref:n,type:"text",role:"spinbutton",variant:we,className:Le("willa-number-input",`willa-number-input--${q}`,_==="warning"&&"willa-number-input--warning",le&&"willa-number-input--with-trailing",h&&"willa-number-input--with-addon-before",V&&"willa-number-input--with-addon-after",Ce&&"willa-number-input--segmented",L&&"willa-number-input--with-suffix",te&&"willa-number-input--with-controls",ye),inputMode:ve,value:Q,disabled:X,invalid:je,readOnly:Z,leadingAddon:Se?a.jsxs("span",{className:"willa-number-input-leading",children:[h?a.jsx("span",{className:"willa-number-input-addon-before",children:H}):null,ae?a.jsx("span",{className:"willa-number-input-prefix",children:G}):null]}):null,"aria-valuemin":f??void 0,"aria-valuemax":b??void 0,"aria-valuenow":m??void 0,trailingAddon:le?a.jsxs("span",{className:"willa-number-input-trailing",children:[L?a.jsx("span",{className:"willa-number-input-suffix",children:U}):null,g?a.jsxs("span",{className:"willa-number-input-controls",children:[a.jsx("button",{className:"willa-number-input-control-button",type:"button",tabIndex:-1,"aria-label":be,disabled:he,onMouseDown:ne,onClick:()=>j(1,1,"handler"),children:a.jsx("span",{className:"willa-number-input-control-icon","aria-hidden":"true",children:g.upIcon??a.jsx(Fe,{})})}),a.jsx("button",{className:"willa-number-input-control-button",type:"button",tabIndex:-1,"aria-label":xe,disabled:Ve,onMouseDown:ne,onClick:()=>j(-1,1,"handler"),children:a.jsx("span",{className:"willa-number-input-control-icon","aria-hidden":"true",children:g.downIcon??a.jsx(Ae,{})})})]}):null,V?a.jsx("span",{className:"willa-number-input-addon-after",children:K}):null]}):null,onFocus:l=>{var o;ee(!0),(o=N.onFocus)==null||o.call(N,l)},onBlur:ke,onChange:Be,onKeyDown:Me})});r.displayName="NumberInput";const se=(e,n,i)=>n?n(e,i):e===null?"":String(e),E=(e,n,i)=>{const s=n?n(e):Ee(e,i),t=String(s).trim();if(!t)return{valid:!0,value:null};const u=Number(t);return Number.isFinite(u)?{valid:!0,value:u}:{valid:!1}},Ee=(e,n)=>(n&&n!=="."?e.split(n).join("."):e).replace(/,/g,""),W=(e,n)=>{if(e===null||!Number.isFinite(e))return null;const i=S(n.min),s=S(n.max),t=We(n.precision);let u=e;return n.clamp&&(i!==null&&(u=Math.max(u,i)),s!==null&&(u=Math.min(u,s))),t!==null&&(u=Number(u.toFixed(t))),Object.is(u,-0)?0:u},We=e=>typeof e!="number"||!Number.isFinite(e)?null:Math.max(0,Math.trunc(e)),S=e=>typeof e=="number"&&Number.isFinite(e)?e:null,Oe=e=>Number.isFinite(e)&&e>0?e:1,$e=e=>e?typeof e=="boolean"?{}:e:null,He=e=>e==="filled"||e==="soft"?"soft":"outline",Ke=e=>{const{currentValue:n,inputValue:i}=e;return i!==null?i:n!==null?n:null},Ge=e=>{const{direction:n,max:i,min:s,stepAmount:t}=e;return n>0?s??t:i??-t},y={display:"grid",gap:"0.85rem",maxWidth:"34rem",marginInline:"auto"},oe={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.75rem",maxWidth:"42rem",marginInline:"auto"},Ue={display:"flex",flexWrap:"wrap",gap:"0.55rem"},de={display:"grid",gap:"0.75rem",width:"min(100%, 34rem)",marginInline:"auto"},_e=()=>{const[e,n]=c.useState(6),[i,s]=c.useState(5),t=x=>{n(d=>ce((d??0)+x))},u=x=>{s(d=>ce((d??0)+x))};return a.jsxs("div",{style:y,children:[a.jsx(r,{value:e,min:0,max:12,controls:!1,addonBefore:a.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"减少席位",onClick:()=>t(-1),children:a.jsx(O,{})}),addonAfter:a.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"增加席位",onClick:()=>t(1),children:a.jsx($,{})}),"aria-label":"席位数量"}),a.jsx(r,{value:i,min:0,max:12,controls:!1,addonBefore:a.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"减少访客",onClick:()=>u(-1),children:a.jsx(O,{})}),addonAfter:a.jsx("button",{className:"willa-number-input-addon-action",type:"button","aria-label":"增加访客",onClick:()=>u(1),children:a.jsx($,{})}),"aria-label":"访客数量"})]})},qe=()=>{const[e,n]=c.useState(.7);return a.jsxs("div",{style:y,children:[a.jsx(r,{value:e,min:0,max:2,step:.1,precision:1,suffix:"temp","aria-label":"模型温度",onValueChange:n}),a.jsxs(Te,{tone:"info",children:["当前温度：",e===null?"未设置":e.toFixed(1)]})]})},Xe=()=>{const e=c.useRef(null),n=()=>{var t;(t=e.current)==null||t.focus()},i=()=>{const t=e.current;t==null||t.focus(),t==null||t.setSelectionRange(t.value.length,t.value.length)},s=()=>{var t;(t=e.current)==null||t.select()};return a.jsxs("div",{style:de,children:[a.jsxs("div",{style:Ue,children:[a.jsx(P,{variant:"outline",onClick:n,children:"Focus"}),a.jsx(P,{variant:"outline",onClick:i,children:"Focus last"}),a.jsx(P,{variant:"outline",onClick:s,children:"Select all"})]}),a.jsx(r,{ref:e,defaultValue:999,controls:!1,"aria-label":"可编程聚焦数字"})]})},ce=e=>Math.min(12,Math.max(0,e)),Ye=Pe({id:"number-input",name:"NumberInput",displayName:"数字输入",category:"form",packageName:"willa/NumberInput",description:"用于价格、数量、比例和模型参数配置的数字输入框。",imports:[{name:"NumberInput",from:"willa/NumberInput"}],css:"willa/NumberInput.css",demo:{name:"NumberInput",component:r,props:{defaultValue:80,min:0,max:100,suffix:"%",width:"16rem","aria-label":"完成度"}},code:`
    import { NumberInput } from "willa/NumberInput";
    import "willa/NumberInput.css";

    <NumberInput
      defaultValue={80}
      min={0}
      max={100}
      suffix="%"
      aria-label="完成度"
    />;
  `,sections:[{title:"基础用法",code:`
        <div style={rowStyle}>
          <NumberInput defaultValue={24} aria-label="数量" />
          <NumberInput
            defaultValue={80}
            min={0}
            max={100}
            suffix="%"
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            step={0.5}
            precision={1}
            suffix="x"
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            prefix="￥"
            suffix="RMB"
            step={100}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
        </div>;
      `,content:a.jsxs("div",{style:oe,children:[a.jsx(r,{defaultValue:24,"aria-label":"数量"}),a.jsx(r,{defaultValue:80,min:0,max:100,suffix:"%","aria-label":"完成度"}),a.jsx(r,{defaultValue:1,step:.5,precision:1,suffix:"x","aria-label":"倍率"}),a.jsx(r,{defaultValue:12800,prefix:"￥",suffix:"RMB",step:100,formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,""),"aria-label":"预算金额"})]})},{title:"尺寸",code:`
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
      `,content:a.jsxs("div",{style:oe,children:[a.jsx(r,{size:"sm",defaultValue:12,"aria-label":"小尺寸数字"}),a.jsx(r,{size:"md",defaultValue:24,"aria-label":"默认尺寸数字"}),a.jsx(r,{size:"lg",defaultValue:36,"aria-label":"大尺寸数字"})]})},{title:"前缀和后缀",code:`
        <div style={fullWidthStackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            addonBefore="￥"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            prefix="￥"
            suffix="RMB"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            min={0}
            max={2}
            step={0.1}
            precision={1}
            suffix="temp"
            controls={false}
            aria-label="模型温度"
          />
        </div>;
      `,content:a.jsxs("div",{style:de,children:[a.jsx(r,{defaultValue:12800,min:0,step:100,addonBefore:"￥",controls:!1,formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,""),"aria-label":"预算金额"}),a.jsx(r,{defaultValue:12800,min:0,step:100,prefix:"￥",suffix:"RMB",controls:!1,formatter:e=>e===null?"":e.toLocaleString("zh-CN"),parser:e=>e.replace(/,/g,""),"aria-label":"预算金额"}),a.jsx(r,{defaultValue:.7,min:0,max:2,step:.1,precision:1,suffix:"temp",controls:!1,"aria-label":"模型温度"})]})},{title:"形态和状态",code:`
        <div style={stackStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            controls={false}
            aria-label="紧凑数字"
          />
          <NumberInput
            variant="filled"
            defaultValue={42}
            controls={false}
            aria-label="填充形态"
          />
          <NumberInput
            variant="underlined"
            defaultValue={64}
            controls={false}
            aria-label="下划线形态"
          />
          <NumberInput
            variant="borderless"
            defaultValue={128}
            controls={false}
            aria-label="无边框形态"
          />
          <NumberInput
            status="warning"
            defaultValue={88}
            controls={false}
            aria-label="警告数字"
          />
          <NumberInput
            status="error"
            defaultValue={108}
            controls={false}
            aria-label="错误数字"
          />
          <NumberInput
            size="lg"
            defaultValue={256}
            disabled
            controls={false}
            aria-label="禁用数字"
          />
        </div>;
      `,content:a.jsxs("div",{style:y,children:[a.jsx(r,{size:"sm",defaultValue:12,controls:!1,"aria-label":"紧凑数字"}),a.jsx(r,{variant:"filled",defaultValue:42,controls:!1,"aria-label":"填充形态"}),a.jsx(r,{variant:"underlined",defaultValue:64,controls:!1,"aria-label":"下划线形态"}),a.jsx(r,{variant:"borderless",defaultValue:128,controls:!1,"aria-label":"无边框形态"}),a.jsx(r,{status:"warning",defaultValue:88,controls:!1,"aria-label":"警告数字"}),a.jsx(r,{status:"error",defaultValue:108,controls:!1,"aria-label":"错误数字"}),a.jsx(r,{size:"lg",defaultValue:256,disabled:!0,controls:!1,"aria-label":"禁用数字"})]})},{title:"分段按钮",code:`
        import { useState } from "react";
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        const Demo = () => {
          const [count, setCount] = useState<number | null>(6);

          return (
            <NumberInput
              value={count}
              min={0}
              max={12}
              controls={false}
              addonBefore={
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
              }
              addonAfter={
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
              }
              aria-label="数量"
            />
          );
        };
      `,content:a.jsx(_e,{})},{title:"格式化",code:`
        <div style={stackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            formatter={(value) =>
              value === null ? "" : \`\${value.toLocaleString("zh-CN")} 元\`
            }
            parser={(value) => value.replace(/[^\\d.-]/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            min={0}
            max={1}
            step={0.01}
            precision={2}
            formatter={(value) => (value === null ? "" : \`\${value * 100}%\`)}
            parser={(value) => String(Number(value.replace("%", "")) / 100)}
            aria-label="命中率"
          />
        </div>;
      `,content:a.jsxs("div",{style:y,children:[a.jsx(r,{defaultValue:12800,min:0,step:100,formatter:e=>e===null?"":`${e.toLocaleString("zh-CN")} 元`,parser:e=>e.replace(/[^\d.-]/g,""),"aria-label":"预算金额"}),a.jsx(r,{defaultValue:.72,min:0,max:1,step:.01,precision:2,formatter:e=>e===null?"":`${e*100}%`,parser:e=>String(Number(e.replace("%",""))/100),"aria-label":"命中率"})]})},{title:"步进控制",code:`
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        <div style={stackStyle}>
          <NumberInput
            defaultValue={10}
            min={0}
            max={20}
            controls={{ upIcon: <PlusIcon />, downIcon: <MinusIcon /> }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            controls={false}
            keyboard={false}
            aria-label="关闭步进和键盘快捷"
          />
        </div>;
      `,content:a.jsxs("div",{style:y,children:[a.jsx(r,{defaultValue:10,min:0,max:20,controls:{upIcon:a.jsx($,{}),downIcon:a.jsx(O,{})},"aria-label":"自定义步进图标"}),a.jsx(r,{defaultValue:12,controls:!1,keyboard:!1,"aria-label":"关闭步进和键盘快捷"})]})},{title:"受控",code:`
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
                min={0}
                max={2}
                step={0.1}
                precision={1}
                suffix="temp"
                aria-label="模型温度"
                onValueChange={setTemperature}
              />
              <Badge tone="info">
                当前温度：{temperature === null ? "未设置" : temperature.toFixed(1)}
              </Badge>
            </div>
          );
        };
      `,content:a.jsx(qe,{})},{title:"聚焦控制",code:`
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
                controls={false}
                aria-label="可编程聚焦数字"
              />
            </div>
          );
        };
      `,content:a.jsx(Xe,{})}],props:[{name:"value",type:"number | null",description:"受控数字值，空输入对应 null。"},{name:"defaultValue",type:"number | null",defaultValue:"null",description:"非受控默认数字值。"},{name:"min",type:"number",description:"允许输入的最小值，也会作为 spinbutton 的 aria-valuemin。"},{name:"max",type:"number",description:"允许输入的最大值，也会作为 spinbutton 的 aria-valuemax。"},{name:"step",type:"number",defaultValue:"1",description:"点击步进按钮或按上下方向键时的增减步长。"},{name:"precision",type:"number",description:"提交数值时保留的小数位数。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"输入框尺寸，继承 Input 的尺寸体系。"},{name:"width",type:"CSSProperties['width']",description:"自定义输入框宽度，继承 Input 的宽度设置。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用输入和步进操作。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"是否只读；只读时仍可聚焦，但不会响应步进操作。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"是否展示错误状态，等价于 status 为 error 的视觉效果。"},{name:"changeOnBlur",type:"boolean",defaultValue:"true",description:"失焦时是否把数值约束到 min 和 max 范围内并更新值。"},{name:"controls",type:"boolean | { upIcon?: ReactNode; downIcon?: ReactNode }",defaultValue:"true",description:"是否展示右侧步进按钮，或自定义上下按钮图标。"},{name:"keyboard",type:"boolean",defaultValue:"true",description:"是否启用上下方向键、Home 和 End 的快捷调整。"},{name:"addonBefore",type:"ReactNode",description:"展示在输入框左侧的分段前缀，适合货币符号或操作按钮。"},{name:"addonAfter",type:"ReactNode",description:"展示在输入框右侧的分段后缀，适合单位、按钮或组合操作。"},{name:"prefix",type:"ReactNode",description:"展示在输入框左侧的前缀内容。"},{name:"suffix",type:"ReactNode",description:"展示在输入框右侧的单位或补充内容。"},{name:"status",type:'"error" | "warning"',description:"校验状态。error 会复用 Input 的错误态，warning 使用警告边框。"},{name:"variant",type:'"outline" | "soft" | "filled" | "borderless" | "underlined"',defaultValue:'"outline"',description:"视觉形态，filled 会复用柔和背景，borderless 和 underlined 用于紧凑表单。"},{name:"decimalSeparator",type:"string",description:"自定义小数分隔符，未传 parser 时会参与默认解析。"},{name:"incrementLabel",type:"string",defaultValue:'"增加数值"',description:"增加按钮的无障碍文案。"},{name:"decrementLabel",type:"string",defaultValue:'"减少数值"',description:"减少按钮的无障碍文案。"},{name:"formatter",type:"(value: number | null, info: { userTyping: boolean; input: string }) => string",description:"把数字值格式化为展示文本。"},{name:"parser",type:"(value: string) => string | number",description:"从展示文本中还原可解析的数字字符串。"},{name:"onValueChange",type:"(value: number | null) => void",description:"数字值变化时触发。"},{name:"onPressEnter",type:"(event: KeyboardEvent<HTMLInputElement>) => void",description:"按下 Enter 时触发。"},{name:"onStep",type:"(value: number, info: { offset: number; type: 'up' | 'down'; emitter: 'handler' | 'keyboard' }) => void",description:"点击步进按钮或使用键盘快捷调整数值时触发。"}]});export{Ye as default};
