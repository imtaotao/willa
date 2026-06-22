import{a_ as e,ax as l,h as i}from"./index-BuHhEwyH.js";/* empty css              */import{d as a}from"./defineDoc-Txe2hWsx.js";const n={display:"flex",flexWrap:"wrap",gap:"1rem",alignItems:"center"},t={display:"grid",gap:"0.9rem",width:"min(100%, 34rem)"},s={display:"grid",justifyItems:"center",gap:"0.7rem",width:"100%",padding:"1.4rem",border:"1px solid var(--willa-line)",borderRadius:"0.85rem",background:"var(--willa-surface-tint)"},p=a({id:"spinner",name:"Spinner",packageName:"willa/Spinner",description:"用于轻量加载状态、局部等待和异步任务反馈的旋转指示器。",imports:[{name:"Spinner",from:"willa/Spinner"}],css:"willa/Spinner.css",demo:{name:"Spinner",component:l,props:{label:"生成中",tone:"default"}},code:`
    import { Spinner } from "willa/Spinner";
    import "willa/Spinner.css";

    <Spinner label="生成中" />;
  `,sections:[{title:"基础用法",code:`
        <div style={rowStyle}>
          <Spinner label="" />
          <Spinner label="加载中" />
          <Spinner label="生成回答中" labelPosition="block" />
        </div>;
      `,content:e.jsxs("div",{style:n,children:[e.jsx(l,{label:""}),e.jsx(l,{label:"加载中"}),e.jsx(l,{label:"生成回答中",labelPosition:"block"})]})},{title:"尺寸",code:`
        <div style={rowStyle}>
          <Spinner size="xs" label="XS" />
          <Spinner size="sm" label="Small" />
          <Spinner size="md" label="Medium" />
          <Spinner size="lg" label="Large" />
        </div>;
      `,content:e.jsxs("div",{style:n,children:[e.jsx(l,{size:"xs",label:"XS"}),e.jsx(l,{size:"sm",label:"Small"}),e.jsx(l,{size:"md",label:"Medium"}),e.jsx(l,{size:"lg",label:"Large"})]})},{title:"色调",code:`
        <div style={rowStyle}>
          <Spinner tone="default" label="Default" />
          <Spinner tone="neutral" label="Neutral" />
          <Spinner tone="success" label="Success" />
          <Spinner tone="warning" label="Warning" />
          <Spinner tone="danger" label="Danger" />
        </div>;
      `,content:e.jsxs("div",{style:n,children:[e.jsx(l,{tone:"default",label:"Default"}),e.jsx(l,{tone:"neutral",label:"Neutral"}),e.jsx(l,{tone:"success",label:"Success"}),e.jsx(l,{tone:"warning",label:"Warning"}),e.jsx(l,{tone:"danger",label:"Danger"})]})},{title:"组合场景",code:`
        <div style={panelStyle}>
          <div style={loadingCardStyle}>
            <Spinner size="lg" label="正在分析上下文" labelPosition="block" />
          </div>
          <Button loading variant="outline">
            提交中
          </Button>
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx("div",{style:s,children:e.jsx(l,{size:"lg",label:"正在分析上下文",labelPosition:"block"})}),e.jsx(i,{loading:!0,variant:"outline",children:"提交中"})]})}],props:[{name:"label",type:"ReactNode",defaultValue:'"加载中"',description:"加载状态文案，传空字符串时只展示图形并保留无障碍文本。"},{name:"size",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"',description:"Spinner 尺寸。"},{name:"tone",type:'"default" | "neutral" | "success" | "warning" | "danger"',defaultValue:'"default"',description:"Spinner 色调。"},{name:"labelPosition",type:'"inline" | "block"',defaultValue:'"inline"',description:"文案和图形的排列方式。"},{name:"className",type:"string",description:"外层 className。"}]});export{p as default};
