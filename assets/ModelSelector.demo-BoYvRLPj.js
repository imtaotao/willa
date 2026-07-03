import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{B as i,_ as a,l as o,tt as s,x as c}from"./react-icons.esm-mVdwEXuX.js";import{H as l}from"./src-D2lZkBJ2.js";import{t as u}from"./Button-O1aY2iqB.js";import{t as d}from"./EmptyState-CjHyXyY4.js";import{t as f}from"./Spinner-DJVkTLj1.js";import{t as p}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as m}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as h}from"./Tag-R3pz2yYt.js";import{t as g}from"./Picker-BqAnbn5P.js";var _=n(e()),v=n(r()),y=t();function b(e){let{models:t,value:n,defaultValue:r,onChange:i,onManageModels:a,showCapabilityBadges:s=!0,showCosts:c=!0,disabled:p=!1,loading:m=!1,emptyText:h=`未找到可选模型`,title:b=`模型配置`,className:C,...w}=e,[O,k]=l({value:n,defaultValue:r??``,onChange:i}),A=(0,_.useMemo)(()=>new Map(t.map(e=>[e.id,e])),[t]),j=(0,_.useMemo)(()=>T({loading:m,models:t}),[m,t]),M=(0,_.useMemo)(()=>t.filter(e=>!e.disabledReason),[t]),N=(0,_.useMemo)(()=>{let e=E({models:t,modelById:A,selectedModelId:O,availableModels:M,fallbackModelId:``});return A.get(e)??null},[M,A,t,O]),P=(0,_.useMemo)(()=>t.map(e=>({value:e.id,disabled:!!e.disabledReason,label:x(e,c)})),[t,c]),F=(0,_.useMemo)(()=>N?S({model:N,showCapabilityBadges:s,showCosts:c}):null,[N,s,c]),I=D({status:j,hasModels:t.length>0,selectedModel:N});return(0,y.jsxs)(`section`,{...w,className:(0,v.default)(`willa-model-selector`,p&&`willa-model-selector--disabled`,C),"aria-busy":j===`loading`||void 0,children:[(0,y.jsxs)(`div`,{className:`willa-model-selector__toolbar`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{className:`willa-model-selector__toolbar-title`,children:b}),(0,y.jsx)(`div`,{className:`willa-model-selector__status`,children:I})]}),a?(0,y.jsx)(u,{size:`sm`,variant:`outline`,disabled:p,onClick:a,children:`管理模型`}):null]}),(0,y.jsx)(`div`,{className:`willa-model-selector__picker`,children:j===`loading`?(0,y.jsx)(d,{className:`willa-model-selector__empty`,title:`模型列表加载中`,description:`请稍候，正在获取当前可用模型。`,icon:(0,y.jsx)(f,{label:null,size:`sm`})}):j===`empty`?(0,y.jsx)(d,{className:`willa-model-selector__empty`,title:`暂无模型`,description:h}):(0,y.jsx)(g,{value:N?.id??``,items:P,onValueChange:e=>{let t=Array.isArray(e)?e[0]??``:e;t&&k(t)},clearable:!1,placeholder:`请选择模型`,searchable:!0,searchPlaceholder:`搜索模型`,emptyText:`未匹配到模型`,disabled:p,renderValue:e=>{let t=e[0];return t?A.get(t.value)?.name??t.value:`请选择模型`}})}),N?(0,y.jsxs)(`div`,{className:`willa-model-selector__preview`,children:[(0,y.jsxs)(`div`,{className:`willa-model-selector__preview-title`,children:[`当前模型：`,N.name]}),(0,y.jsx)(`div`,{className:`willa-model-selector__preview-meta`,children:F})]}):null,(0,y.jsx)(`div`,{className:`willa-model-selector__footer`,"aria-hidden":`true`,children:(0,y.jsxs)(`span`,{className:`willa-model-selector__status`,children:[(0,y.jsx)(o,{}),M.length>0?`${M.length} 个可用模型，${t.length-M.length} 个不可用`:`当前无可用模型，已默认展示不可用模型详情。`]})})]})}var x=(e,t)=>{let n=[e.contextWindow?w(e.contextWindow):null,e.latencyHint?`延迟${C(`latency`,e.latencyHint)}`:null,t&&e.priceHint?`费用${C(`price`,e.priceHint)}`:null].filter(Boolean);return(0,y.jsxs)(`span`,{className:`willa-model-selector__option-label`,children:[(0,y.jsxs)(`span`,{className:(0,v.default)(`willa-model-selector__option-name`,e.disabledReason&&`willa-model-selector__option-disabled`),children:[(0,y.jsx)(`span`,{children:e.name}),e.disabledReason?(0,y.jsx)(`span`,{className:`willa-model-selector__option-status`,children:`不可用`}):null]}),n.length>0?(0,y.jsx)(`span`,{className:`willa-model-selector__option-summary`,children:n.map(e=>(0,y.jsx)(`span`,{className:`willa-model-selector__option-summary-item`,children:e},e))}):null]})},S=e=>{let{model:t,showCapabilityBadges:n=!0,showCosts:r=!0}=e,o=[];if(t.contextWindow!==void 0&&o.push((0,y.jsx)(`span`,{className:`willa-model-selector__preview-meta-item`,children:(0,y.jsxs)(h,{size:`sm`,tone:`neutral`,children:[`上下文 `,w(t.contextWindow)]})},`context`)),t.latencyHint&&o.push((0,y.jsx)(`span`,{className:`willa-model-selector__preview-meta-item`,children:(0,y.jsxs)(h,{size:`sm`,tone:`info`,icon:(0,y.jsx)(i,{}),children:[`延迟 `,C(`latency`,t.latencyHint)]})},`latency`)),t.qualityHint&&o.push((0,y.jsx)(`span`,{className:`willa-model-selector__preview-meta-item`,children:(0,y.jsxs)(h,{size:`sm`,tone:`success`,icon:(0,y.jsx)(a,{}),children:[`质量 `,C(`quality`,t.qualityHint)]})},`quality`)),r&&t.priceHint&&o.push((0,y.jsx)(`span`,{className:`willa-model-selector__preview-meta-item`,children:(0,y.jsxs)(h,{size:`sm`,tone:`neutral`,children:[`费用 `,C(`price`,t.priceHint)]})},`price`)),n&&(t.capabilities??[]).length>0)for(let e of t.capabilities??[])o.push((0,y.jsx)(`span`,{className:`willa-model-selector__preview-meta-item`,children:(0,y.jsx)(h,{size:`sm`,tone:`neutral`,variant:`outline`,children:e})},`capability-${e}`));return t.disabledReason&&o.push((0,y.jsxs)(`span`,{className:`willa-model-selector__preview-reason`,children:[(0,y.jsx)(c,{}),` `,t.disabledReason]},`disabled-reason`)),o},C=(e,t)=>e===`latency`?t===`fast`?`快`:t===`balanced`?`均衡`:`慢`:e===`quality`?t===`quality`?`质量`:t===`creative`?`创意`:`速度优先`:t===`cheap`?`低价`:t===`normal`?`标准`:`高端`,w=e=>`${e.toLocaleString()} tokens`,T=e=>e.loading?`loading`:e.models.length===0?`empty`:`ready`,E=e=>{let{models:t,modelById:n,selectedModelId:r,availableModels:i,fallbackModelId:a}=e;return r&&n.has(r)?r:i.length>0?i[0]?.id??a:t[0]?.id??a},D=e=>{let{status:t,hasModels:n,selectedModel:r}=e;return t===`loading`?`模型列表加载中，约 2 秒刷新完成。`:t===`empty`?`当前无可选模型。请联系管理员补充可用配置。`:r?`已选择：${r.name}`:n?`选择一个模型开始配置`:`暂无法继续：暂无模型`};b.displayName=`ModelSelector`;var O={display:`grid`,gap:`1rem`,width:`min(100%, 58rem)`},k={width:`max-content`,maxWidth:`100%`,border:`1px solid var(--willa-line)`,borderRadius:`0.62rem`,background:`var(--willa-panel-bg)`,color:`var(--willa-text-soft)`,fontSize:`0.86rem`,fontWeight:520,lineHeight:1.45,padding:`0.48rem 0.62rem`},A=[{id:`o3-mini`,name:`OpenAI O3-Mini`,contextWindow:96e3,latencyHint:`fast`,qualityHint:`quality`,priceHint:`cheap`,capabilities:[`推理`,`长上下文`,`工具调用`]},{id:`qwen-coder`,name:`Qwen2.5 Coder`,contextWindow:65536,latencyHint:`balanced`,qualityHint:`quality`,priceHint:`normal`,capabilities:[`代码`,`重写`,`长文本`]},{id:`deep-research`,name:`Deep Research Pro`,contextWindow:128e3,latencyHint:`slow`,qualityHint:`creative`,priceHint:`premium`,disabledReason:`该模型当前不可用`}],j=()=>{let[e,t]=(0,_.useState)(`o3-mini`);return(0,y.jsxs)(`div`,{style:O,children:[(0,y.jsx)(b,{models:A,value:e,defaultValue:`o3-mini`,onChange:t,onManageModels:()=>{window.alert(`模型管理入口由宿主系统接管。`)}}),(0,y.jsxs)(`div`,{style:k,children:[`当前模型 ID：`,e]})]})},M=m({id:`model-selector`,name:`ModelSelector`,displayName:`模型选择器`,category:`ai`,packageName:`willa/ModelSelector`,description:`模型配置区域，支持展示能力标签、上下文窗口与速度/质量/成本倾向。`,imports:[{name:`ModelSelector`,from:`willa/ModelSelector`}],css:`willa/ModelSelector.css`,demo:{name:`ModelSelectorBasic`,component:j},code:`
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
  `,sections:[{title:`主链路（可受控切换）`,code:`
        <ModelSelector
          models={models}
          value={selectedModelId}
          onChange={setSelectedModelId}
          onManageModels={() => {
            window.alert("模型管理入口由宿主系统接管。");
          }}
        />;
      `,content:(0,y.jsx)(j,{})},{title:`边界（加载中）`,code:`
        <ModelSelector
          models={[]}
          loading
          onChange={() => {}}
          emptyText="加载完成后将展示可用模型。"
        />;
      `,content:(0,y.jsx)(()=>(0,y.jsx)(`div`,{style:O,children:(0,y.jsx)(b,{models:[],loading:!0,onChange:()=>{},emptyText:`加载完成后将展示可用模型。`})}),{})},{title:`边界（全部不可用）`,code:`
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
      `,content:(0,y.jsx)(()=>{let[e,t]=(0,_.useState)(`deep-research`);return(0,y.jsxs)(`div`,{style:O,children:[(0,y.jsx)(b,{models:[{id:`legacy-disabled`,name:`Legacy Model`,contextWindow:2048,disabledReason:`模型配额不足，暂时不可用`},{id:`deprecated-lite`,name:`Deprecated Lite`,contextWindow:8192,disabledReason:`仅在企业版可见`}],value:e,onChange:t}),(0,y.jsxs)(p,{gap:`sm`,children:[(0,y.jsx)(u,{size:`sm`,variant:`ghost`,icon:(0,y.jsx)(s,{}),onClick:()=>{t(`legacy-disabled`)},children:`重试同步`}),(0,y.jsx)(u,{size:`sm`,variant:`outline`,icon:(0,y.jsx)(s,{}),disabled:!0,children:`禁用按钮`})]})]})},{})}],props:[{name:`models`,type:`Array<ModelOption>`,required:!0,description:`可选模型列表。`},{name:`value`,type:`string`,description:`受控选中的模型 ID。`},{name:`defaultValue`,type:`string`,description:`非受控默认选中的模型 ID。`},{name:`onChange`,type:`(modelId: string) => void`,required:!0,description:`模型选择变化时触发。`},{name:`onManageModels`,type:`() => void`,description:`点击管理模型按钮时触发；未传入时不展示按钮。`},{name:`showCapabilityBadges`,type:`boolean`,defaultValue:`true`,description:`是否展示模型能力标签。`},{name:`showCosts`,type:`boolean`,defaultValue:`true`,description:`是否展示费用倾向标签。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用模型选择和管理入口。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`是否展示模型列表加载态。`},{name:`emptyText`,type:`string`,defaultValue:`"未找到可选模型"`,description:`模型列表为空时的描述文案。`},{name:`title`,type:`string`,defaultValue:`"模型配置"`,description:`面板标题。`}]});export{M as default};