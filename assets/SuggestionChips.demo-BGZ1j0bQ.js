import{aY as e,a4 as o,a5 as a,a_ as l,aa as r,P as d,a2 as p}from"./index-BEjXDIF1.js";import{S as t}from"./index-CPJyy5IZ.js";import{P as m}from"./index-Bsodl-lc.js";import{d as c}from"./defineDoc-hiznnev0.js";import"./index-DITdqgEY.js";const u=[{id:"summarize",label:"总结这份文档",description:"输出重点和风险",icon:e.jsx(d,{})},{id:"search",label:"检索相关资料",description:"补充来源证据",icon:e.jsx(a,{})},{id:"plan",label:"拆成执行计划",description:"按优先级排序",icon:e.jsx(p,{})}],g=()=>{const[n,s]=l.useState("");return e.jsxs(r,{padding:"md",style:{width:"min(100%, 56rem)"},children:[e.jsx(t,{items:u,style:{marginBottom:"0.8rem"},onSelect:i=>{s(String(i.label))}}),e.jsx(m,{value:n,placeholder:"选择一个建议，或直接输入问题...",minRows:2,maxRows:5,onChange:i=>s(i.currentTarget.value)})]})},y=c({id:"suggestion-chips",name:"SuggestionChips",category:"ai",packageName:"willa/SuggestionChips",description:"用于展示快捷提示词、推荐问题和 AI 任务入口。",imports:[{name:"SuggestionChips",from:"willa/SuggestionChips"},{name:"Panel",from:"willa/Panel"}],css:"willa/SuggestionChips.css",demo:{name:"SuggestionChipsPreview",component:g},code:`
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
      `,content:e.jsx(t,{multiple:!0,variant:"outline",defaultSelectedIds:["reason"],items:[{id:"reason",label:"补充推理依据",icon:e.jsx(o,{})},{id:"source",label:"附带来源链接",icon:e.jsx(a,{})},{id:"short",label:"回答精简一点",disabled:!0}]})},{title:"紧凑建议",code:`
        <SuggestionChips
          size="sm"
          items={[
            { id: "translate", label: "翻译" },
            { id: "rewrite", label: "润色" },
            { id: "extract", label: "提取要点" },
            { id: "compare", label: "对比差异" },
          ]}
        />;
      `,content:e.jsx(t,{size:"sm",items:[{id:"translate",label:"翻译"},{id:"rewrite",label:"润色"},{id:"extract",label:"提取要点"},{id:"compare",label:"对比差异"}]})}],props:[{name:"items",type:"Array<SuggestionChipItem>",required:!0,description:"建议项列表。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"尺寸，默认 md。"},{name:"variant",type:'"soft" | "outline"',defaultValue:'"soft"',description:"样式形态，默认 soft。"},{name:"selectedIds",type:"Array<string>",description:"受控选中项 id。"},{name:"defaultSelectedIds",type:"Array<string>",defaultValue:"[]",description:"非受控默认选中项 id。"},{name:"multiple",type:"boolean",defaultValue:"false",description:"是否允许多选，默认 false。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用整组建议。"},{name:"onSelect",type:"(item: SuggestionChipItem, event: MouseEvent<HTMLButtonElement>) => void",description:"点击建议项时触发。"},{name:"onChange",type:"(selectedIds: Array<string>, item: SuggestionChipItem, event: MouseEvent<HTMLButtonElement>) => void",description:"选中项变化时触发。"},{name:"id",type:"string",required:!0,group:"SuggestionChipItem",description:"建议项唯一标识。"},{name:"label",type:"ReactNode",required:!0,group:"SuggestionChipItem",description:"建议文案。"},{name:"description",type:"ReactNode",group:"SuggestionChipItem",description:"建议补充说明。"},{name:"icon",type:"ReactNode",group:"SuggestionChipItem",description:"建议图标。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"SuggestionChipItem",description:"是否禁用单个建议。"}]});export{y as default};
