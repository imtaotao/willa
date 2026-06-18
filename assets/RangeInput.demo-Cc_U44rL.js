import{aQ as u,aO as e,az as h}from"./index-C-tGzq2u.js";import{d as b}from"./defineDoc-BM8EvMRd.js";const t=u.forwardRef((r,a)=>{const{width:n,height:i,color:l,thumbColor:o,trackColor:s,className:c,style:d,...m}=r,g=y({color:l,height:i,thumbColor:o,trackColor:s,width:n,style:d});return e.jsx("input",{...m,ref:a,type:"range",className:h("willa-range-input",c),style:g})});t.displayName="RangeInput";const y=r=>{const{color:a,height:n,thumbColor:i,trackColor:l,width:o,style:s}=r;return{...s,...o===void 0?void 0:{width:o},...a?{"--willa-range-input-custom-color":a}:void 0,...n?{"--willa-range-input-custom-height":n}:void 0,...i?{"--willa-range-input-custom-thumb":i}:void 0,...l?{"--willa-range-input-custom-track":l}:void 0}},p={display:"grid",gap:"0.85rem",width:"min(100%, 28rem)"},f=()=>{const[r,a]=u.useState(60);return e.jsxs("div",{style:p,children:[e.jsx(t,{min:0,max:100,step:1,value:r,width:"18rem",height:"0.5rem",color:"#3b82f6",trackColor:"rgba(59, 130, 246, 0.18)","aria-label":"生成强度",onChange:n=>a(Number(n.currentTarget.value))}),e.jsx(t,{min:0,max:1,step:.1,defaultValue:.7,color:"#14b8a6",thumbColor:"#ecfeff",trackColor:"rgba(20, 184, 166, 0.18)","aria-label":"温度"})]})},w=b({id:"range-input",name:"RangeInput",category:"form",packageName:"willa/RangeInput",description:"用于模型参数、音视频进度和数值配置的范围输入。",imports:[{name:"RangeInput",from:"willa/RangeInput"}],css:"willa/RangeInput.css",demo:{name:"RangeInputPreview",component:f},code:`
    import { RangeInput } from "willa/RangeInput";
    import "willa/RangeInput.css";

    <RangeInput
      min={0}
      max={100}
      step={1}
      defaultValue={60}
      aria-label="生成强度"
    />;
  `,sections:[{title:"宽高与颜色",code:`
        <div style={stackStyle}>
          <RangeInput
            defaultValue={35}
            width="100%"
            height="0.42rem"
            color="#2563eb"
            aria-label="蓝色滑块"
          />
          <RangeInput
            defaultValue={72}
            height="0.5rem"
            color="#0f766e"
            thumbColor="#ecfeff"
            trackColor="rgba(15, 118, 110, 0.16)"
            aria-label="自定义滑块"
          />
        </div>;
      `,content:e.jsxs("div",{style:p,children:[e.jsx(t,{defaultValue:35,width:"100%",height:"0.42rem",color:"#2563eb","aria-label":"蓝色滑块"}),e.jsx(t,{defaultValue:72,height:"0.5rem",color:"#0f766e",thumbColor:"#ecfeff",trackColor:"rgba(15, 118, 110, 0.16)","aria-label":"自定义滑块"})]})},{title:"状态",code:`
        <div style={stackStyle}>
          <RangeInput defaultValue={45} aria-label="默认滑块" />
          <RangeInput disabled defaultValue={45} aria-label="禁用滑块" />
        </div>;
      `,content:e.jsxs("div",{style:p,children:[e.jsx(t,{defaultValue:45,"aria-label":"默认滑块"}),e.jsx(t,{disabled:!0,defaultValue:45,"aria-label":"禁用滑块"})]})}],props:[{name:"value",type:"number | string | ReadonlyArray<string>",description:"受控值，沿用原生 input range 语义。"},{name:"defaultValue",type:"number | string | ReadonlyArray<string>",description:"非受控默认值。"},{name:"min",type:"number | string",description:"最小值。"},{name:"max",type:"number | string",description:"最大值。"},{name:"step",type:"number | string",description:"步进值。"},{name:"width",type:"CSSProperties['width']",description:"滑块宽度，默认占满父容器。"},{name:"height",type:"CSSProperties['height']",description:"轨道高度，滑块尺寸会随高度自动调整。"},{name:"color",type:"string",description:"主色，影响滑块边框和浏览器强调色。"},{name:"thumbColor",type:"string",description:"滑块圆点背景色。"},{name:"trackColor",type:"string",description:"轨道背景色。"},{name:"onChange",type:"ChangeEventHandler<HTMLInputElement>",description:"值变化后的回调，沿用原生 input 事件。"},{name:"onInput",type:"FormEventHandler<HTMLInputElement>",description:"拖拽过程中的原生 input 事件回调。"},{name:"disabled",type:"boolean",description:"是否禁用。"}]});export{w as default};
