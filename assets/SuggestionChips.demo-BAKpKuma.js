import{ak as e,P as a,Q as o,am as r,z as l,O as d}from"./index-qn4eWa1o.js";import{S as t}from"./index-BHjio-I9.js";import{P as p}from"./index-wqoCb6KQ.js";import{d as m}from"./defineDoc-BS0X7wWk.js";import"./index-B9RMTx5w.js";import"./index-MediO1tK.js";const c=[{id:"summarize",label:"总结这份文档",description:"输出重点和风险",icon:e.jsx(l,{})},{id:"search",label:"检索相关资料",description:"补充来源证据",icon:e.jsx(o,{})},{id:"plan",label:"拆成执行计划",description:"按优先级排序",icon:e.jsx(d,{})}],g={display:"grid",gap:"0.85rem",width:"min(100%, 56rem)",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)",padding:"1rem"},u=()=>{const[n,s]=r.useState("");return e.jsxs("div",{style:g,children:[e.jsx(t,{items:c,onSelect:i=>{s(String(i.label))}}),e.jsx(p,{value:n,placeholder:"选择一个建议，或直接输入问题...",minRows:2,maxRows:5,onChange:i=>s(i.currentTarget.value)})]})},x=m({id:"suggestion-chips",name:"SuggestionChips",category:"ai",packageName:"willa/SuggestionChips",description:"用于展示快捷提示词、推荐问题和 AI 任务入口。",imports:[{name:"SuggestionChips",from:"willa/SuggestionChips"}],css:"willa/SuggestionChips.css",demo:{name:"SuggestionChipsPreview",component:u},code:`
    import { SuggestionChips } from "willa/SuggestionChips";
    import "willa/SuggestionChips.css";

    <SuggestionChips
      items={[
        { id: "summarize", label: "总结这份文档" },
        { id: "search", label: "检索相关资料" },
        { id: "plan", label: "拆成执行计划" },
      ]}
      onSelect={(item) => {
        console.log(item.label);
      }}
    />;
  `,sections:[{title:"多选模式",code:`
        <SuggestionChips
          multiple
          variant="outline"
          defaultSelectedIds={["reason"]}
          items={[
            {
              id: "reason",
              label: "补充推理依据",
              icon: <MagicWandIcon />,
            },
            {
              id: "source",
              label: "附带来源链接",
              icon: <MagnifyingGlassIcon />,
            },
            {
              id: "short",
              label: "回答精简一点",
              disabled: true,
            },
          ]}
        />;
      `,content:e.jsx(t,{multiple:!0,variant:"outline",defaultSelectedIds:["reason"],items:[{id:"reason",label:"补充推理依据",icon:e.jsx(a,{})},{id:"source",label:"附带来源链接",icon:e.jsx(o,{})},{id:"short",label:"回答精简一点",disabled:!0}]})},{title:"紧凑建议",code:`
        <SuggestionChips
          size="sm"
          items={[
            { id: "translate", label: "翻译" },
            { id: "rewrite", label: "润色" },
            { id: "extract", label: "提取要点" },
            { id: "compare", label: "对比差异" },
          ]}
        />;
      `,content:e.jsx(t,{size:"sm",items:[{id:"translate",label:"翻译"},{id:"rewrite",label:"润色"},{id:"extract",label:"提取要点"},{id:"compare",label:"对比差异"}]})}],props:[{name:"items",type:"Array<SuggestionChipItem>",required:!0,description:"建议项列表。"},{name:"size",type:'"sm" | "md"',description:"尺寸，默认 md。"},{name:"variant",type:'"soft" | "outline"',description:"样式形态，默认 soft。"},{name:"selectedIds",type:"Array<string>",description:"受控选中项 id。"},{name:"defaultSelectedIds",type:"Array<string>",description:"非受控默认选中项 id。"},{name:"multiple",type:"boolean",description:"是否允许多选，默认 false。"},{name:"disabled",type:"boolean",description:"是否禁用整组建议。"},{name:"onSelect",type:"(item: SuggestionChipItem, event: MouseEvent<HTMLButtonElement>) => void",description:"点击建议项时触发。"},{name:"onChange",type:"(selectedIds: Array<string>, item: SuggestionChipItem, event: MouseEvent<HTMLButtonElement>) => void",description:"选中项变化时触发。"},{name:"id",type:"string",required:!0,group:"SuggestionChipItem",description:"建议项唯一标识。"},{name:"label",type:"ReactNode",required:!0,group:"SuggestionChipItem",description:"建议文案。"},{name:"description",type:"ReactNode",group:"SuggestionChipItem",description:"建议补充说明。"},{name:"icon",type:"ReactNode",group:"SuggestionChipItem",description:"建议图标。"},{name:"disabled",type:"boolean",group:"SuggestionChipItem",description:"是否禁用单个建议。"}]});export{x as default};
