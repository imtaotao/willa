import{b3 as P,b0 as r,a_ as e,h as b,J as S,ax as T,l as $,aL as C,a3 as A,t as O,D as E,X as G,al as I}from"./index-CC59UgBO.js";import{T as h}from"./index-Cig451im.js";import{P as J}from"./index-Di41MjLt.js";/* empty css              *//* empty css              */import{d as Q}from"./defineDoc-CD9LX1OM.js";import"./useComboboxState-B_-FzaMN.js";import"./floatingPanelParts-DnGSmlQU.js";import"./useFloatingPanel-CdWxKAA5.js";function M(t){const{models:l,value:i,defaultValue:s,onChange:o,onManageModels:d,showCapabilityBadges:p=!0,showCosts:c=!0,disabled:g=!1,loading:v=!1,emptyText:q="未找到可选模型",title:R="模型配置",className:W,...k}=t,[j,B]=P({value:i,defaultValue:s??"",onChange:o}),y=r.useMemo(()=>new Map(l.map(a=>[a.id,a])),[l]),w=r.useMemo(()=>F({loading:v,models:l}),[v,l]),u=r.useMemo(()=>l.filter(a=>!a.disabledReason),[l]),n=r.useMemo(()=>{const a=K({models:l,modelById:y,selectedModelId:j,availableModels:u,fallbackModelId:""});return y.get(a)??null},[u,y,l,j]),L=r.useMemo(()=>l.map(a=>({value:a.id,disabled:!!a.disabledReason,label:U(a,c)})),[l,c]),z=r.useMemo(()=>n?X({model:n,showCapabilityBadges:p,showCosts:c}):null,[n,p,c]),V=l.length>0,D=Y({status:w,hasModels:V,selectedModel:n});return e.jsxs("section",{...k,className:C("willa-model-selector",g&&"willa-model-selector--disabled",W),"aria-busy":w==="loading"||void 0,children:[e.jsxs("div",{className:"willa-model-selector__toolbar",children:[e.jsxs("div",{children:[e.jsx("div",{className:"willa-model-selector__toolbar-title",children:R}),e.jsx("div",{className:"willa-model-selector__status",children:D})]}),d?e.jsx(b,{size:"sm",variant:"outline",disabled:g,onClick:d,children:"管理模型"}):null]}),e.jsx("div",{className:"willa-model-selector__picker",children:w==="loading"?e.jsx(S,{className:"willa-model-selector__empty",title:"模型列表加载中",description:"请稍候，正在获取当前可用模型。",icon:e.jsx(T,{label:null,size:"sm"})}):w==="empty"?e.jsx(S,{className:"willa-model-selector__empty",title:"暂无模型",description:q}):e.jsx(J,{value:(n==null?void 0:n.id)??"",items:L,onValueChange:a=>{const m=Array.isArray(a)?a[0]??"":a;m&&B(m)},clearable:!1,placeholder:"请选择模型",searchable:!0,searchPlaceholder:"搜索模型",emptyText:"未匹配到模型",disabled:g,renderValue:a=>{var _;const m=a[0];return m?((_=y.get(m.value))==null?void 0:_.name)??m.value:"请选择模型"}})}),n?e.jsxs("div",{className:"willa-model-selector__preview",children:[e.jsxs("div",{className:"willa-model-selector__preview-title",children:["当前模型：",n.name]}),e.jsx("div",{className:"willa-model-selector__preview-meta",children:z})]}):null,e.jsx("div",{className:"willa-model-selector__footer","aria-hidden":"true",children:e.jsxs("span",{className:"willa-model-selector__status",children:[e.jsx($,{}),u.length>0?`${u.length} 个可用模型，${l.length-u.length} 个不可用`:"当前无可用模型，已默认展示不可用模型详情。"]})})]})}const U=(t,l)=>{const i=[t.contextWindow?H(t.contextWindow):null,t.latencyHint?`延迟${x("latency",t.latencyHint)}`:null,l&&t.priceHint?`费用${x("price",t.priceHint)}`:null].filter(Boolean);return e.jsxs("span",{className:"willa-model-selector__option-label",children:[e.jsxs("span",{className:C("willa-model-selector__option-name",t.disabledReason&&"willa-model-selector__option-disabled"),children:[e.jsx("span",{children:t.name}),t.disabledReason?e.jsx("span",{className:"willa-model-selector__option-status",children:"不可用"}):null]}),i.length>0?e.jsx("span",{className:"willa-model-selector__option-summary",children:i.map(s=>e.jsx("span",{className:"willa-model-selector__option-summary-item",children:s},s))}):null]})},X=t=>{const{model:l,showCapabilityBadges:i=!0,showCosts:s=!0}=t,o=[];if(l.contextWindow!==void 0&&o.push(e.jsx("span",{className:"willa-model-selector__preview-meta-item",children:e.jsxs(h,{size:"sm",tone:"neutral",children:["上下文 ",H(l.contextWindow)]})},"context")),l.latencyHint&&o.push(e.jsx("span",{className:"willa-model-selector__preview-meta-item",children:e.jsxs(h,{size:"sm",tone:"info",icon:e.jsx(A,{}),children:["延迟 ",x("latency",l.latencyHint)]})},"latency")),l.qualityHint&&o.push(e.jsx("span",{className:"willa-model-selector__preview-meta-item",children:e.jsxs(h,{size:"sm",tone:"success",icon:e.jsx(O,{}),children:["质量 ",x("quality",l.qualityHint)]})},"quality")),s&&l.priceHint&&o.push(e.jsx("span",{className:"willa-model-selector__preview-meta-item",children:e.jsxs(h,{size:"sm",tone:"neutral",children:["费用 ",x("price",l.priceHint)]})},"price")),i&&(l.capabilities??[]).length>0)for(const d of l.capabilities??[])o.push(e.jsx("span",{className:"willa-model-selector__preview-meta-item",children:e.jsx(h,{size:"sm",tone:"neutral",variant:"outline",children:d})},`capability-${d}`));return l.disabledReason&&o.push(e.jsxs("span",{className:"willa-model-selector__preview-reason",children:[e.jsx(E,{})," ",l.disabledReason]},"disabled-reason")),o},x=(t,l)=>t==="latency"?l==="fast"?"快":l==="balanced"?"均衡":"慢":t==="quality"?l==="quality"?"质量":l==="creative"?"创意":"速度优先":l==="cheap"?"低价":l==="normal"?"标准":"高端",H=t=>`${t.toLocaleString()} tokens`,F=t=>t.loading?"loading":t.models.length===0?"empty":"ready",K=t=>{var p,c;const{models:l,modelById:i,selectedModelId:s,availableModels:o,fallbackModelId:d}=t;return s&&i.has(s)?s:o.length>0?((p=o[0])==null?void 0:p.id)??d:((c=l[0])==null?void 0:c.id)??d},Y=t=>{const{status:l,hasModels:i,selectedModel:s}=t;return l==="loading"?"模型列表加载中，约 2 秒刷新完成。":l==="empty"?"当前无可选模型。请联系管理员补充可用配置。":s?`已选择：${s.name}`:i?"选择一个模型开始配置":"暂无法继续：暂无模型"};M.displayName="ModelSelector";const f={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},Z={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},ee=[{id:"o3-mini",name:"OpenAI O3-Mini",contextWindow:96e3,latencyHint:"fast",qualityHint:"quality",priceHint:"cheap",capabilities:["推理","长上下文","工具调用"]},{id:"qwen-coder",name:"Qwen2.5 Coder",contextWindow:65536,latencyHint:"balanced",qualityHint:"quality",priceHint:"normal",capabilities:["代码","重写","长文本"]},{id:"deep-research",name:"Deep Research Pro",contextWindow:128e3,latencyHint:"slow",qualityHint:"creative",priceHint:"premium",disabledReason:"该模型当前不可用"}],N=()=>{const[t,l]=r.useState("o3-mini");return e.jsxs("div",{style:f,children:[e.jsx(M,{models:ee,value:t,defaultValue:"o3-mini",onChange:l,onManageModels:()=>{window.alert("模型管理入口由宿主系统接管。")}}),e.jsxs("div",{style:Z,children:["当前模型 ID：",t]})]})},le=()=>e.jsx("div",{style:f,children:e.jsx(M,{models:[],loading:!0,onChange:()=>{},emptyText:"加载完成后将展示可用模型。"})}),te=()=>{const[t,l]=r.useState("deep-research");return e.jsxs("div",{style:f,children:[e.jsx(M,{models:[{id:"legacy-disabled",name:"Legacy Model",contextWindow:2048,disabledReason:"模型配额不足，暂时不可用"},{id:"deprecated-lite",name:"Deprecated Lite",contextWindow:8192,disabledReason:"仅在企业版可见"}],value:t,onChange:l}),e.jsxs(G,{gap:"sm",children:[e.jsx(b,{size:"sm",variant:"ghost",icon:e.jsx(I,{}),onClick:()=>{l("legacy-disabled")},children:"重试同步"}),e.jsx(b,{size:"sm",variant:"outline",icon:e.jsx(I,{}),disabled:!0,children:"禁用按钮"})]})]})},pe=Q({id:"model-selector",name:"ModelSelector",displayName:"模型选择器",category:"ai",packageName:"willa/ModelSelector",description:"模型配置区域，支持展示能力标签、上下文窗口与速度/质量/成本倾向。",imports:[{name:"ModelSelector",from:"willa/ModelSelector"}],css:"willa/ModelSelector.css",demo:{name:"ModelSelectorBasic",component:N},code:`
    import { useState } from "react";
    import { ModelSelector } from "willa/ModelSelector";
    import "willa/ModelSelector.css";

    const models = [
      {
        id: "o3-mini",
        name: "OpenAI O3-Mini",
        contextWindow: 96000,
        latencyHint: "fast",
        qualityHint: "quality",
        priceHint: "cheap",
      },
    ];

    const Demo = () => {
      const [selectedModelId, setSelectedModelId] = useState("o3-mini");

      return (
        <ModelSelector
          models={models}
          value={selectedModelId}
          onChange={setSelectedModelId}
        />
      );
    };
  `,sections:[{title:"主链路（可受控切换）",code:`
        <ModelSelector
          models={models}
          value={selectedModelId}
          onChange={setSelectedModelId}
          onManageModels={() => {
            window.alert("模型管理入口由宿主系统接管。");
          }}
        />;
      `,content:e.jsx(N,{})},{title:"边界（加载中）",code:`
        <ModelSelector
          models={[]}
          loading
          onChange={() => {}}
          emptyText="加载完成后将展示可用模型。"
        />;
      `,content:e.jsx(le,{})},{title:"边界（全部不可用）",code:`
        <ModelSelector
          models={[
            {
              id: "legacy-disabled",
              name: "Legacy Model",
              contextWindow: 2048,
              disabledReason: "模型配额不足，暂时不可用",
            },
            {
              id: "deprecated-lite",
              name: "Deprecated Lite",
              contextWindow: 8192,
              disabledReason: "仅在企业版可见",
            },
          ]}
          value="legacy-disabled"
          onChange={setSelectedModelId}
        />;
      `,content:e.jsx(te,{})}],props:[{name:"models",type:"Array<ModelOption>",required:!0,description:"可选模型列表。"},{name:"value",type:"string",description:"受控选中的模型 ID。"},{name:"defaultValue",type:"string",description:"非受控默认选中的模型 ID。"},{name:"onChange",type:"(modelId: string) => void",required:!0,description:"模型选择变化时触发。"},{name:"onManageModels",type:"() => void",description:"点击管理模型按钮时触发；未传入时不展示按钮。"},{name:"showCapabilityBadges",type:"boolean",defaultValue:"true",description:"是否展示模型能力标签。"},{name:"showCosts",type:"boolean",defaultValue:"true",description:"是否展示费用倾向标签。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用模型选择和管理入口。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示模型列表加载态。"},{name:"emptyText",type:"string",defaultValue:'"未找到可选模型"',description:"模型列表为空时的描述文案。"},{name:"title",type:"string",defaultValue:'"模型配置"',description:"面板标题。"}]});export{pe as default};
