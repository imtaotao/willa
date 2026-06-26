import{b5 as A,b2 as l,b0 as e,h as _,ap as X,ar as Y,K as M,ay as ee,aN as te,Z as ae}from"./index-CGgO7K0r.js";import{L as ie}from"./index-BlNALkgs.js";import{T as I}from"./index-BHav86mg.js";import{n as le,m as se,r as H}from"./searchText-DKkzsET4.js";/* empty css              */import{d as re}from"./defineDoc-D7sNTAm-.js";const w="__all";function C(i){const{templates:a,value:r,defaultValue:g,onSelect:m,recentTemplateIds:n=[],favorites:d=[],onToggleFavorite:o,searchValue:N,onSearchChange:V,categories:s,activeCategoryId:u,onCategoryChange:x,disabled:S=!1,loading:b=!1,emptyText:Q="未找到可用模板",showTagFilter:$=!0,className:K,...Z}=i,[c,f]=A({value:N,defaultValue:"",onChange:V}),[h,D]=A({value:r,defaultValue:g??"",onChange:m}),[j,G]=A({value:u??w,defaultValue:w,onChange:t=>{x==null||x(t===w?null:t)}}),k=l.useMemo(()=>new Set(d),[d]),P=l.useMemo(()=>new Set(n),[n]),J=l.useMemo(()=>new Map(a.map(t=>[t.id,t])),[a]),z=le(c),q=l.useMemo(()=>[{value:w,label:"全部"},...(s??[]).map(t=>({value:t.id,label:t.label}))],[s]),E=l.useMemo(()=>{const t=a.filter(v=>j===w?!0:v.categoryId===j);return L(z?{templates:t.filter(v=>{const F=ne(v);return se(F,z)}),favorites:k,recents:P}:{templates:t,favorites:k,recents:P})},[j,k,z,P,a]),y=h?J.get(h)??null:null,O=q.length>1,p=S||b,U=l.useMemo(()=>E.map(t=>{const v=k.has(t.id),F=P.has(t.id);return{id:t.id,title:e.jsx("span",{className:"willa-prompt-template-picker__item-title",children:e.jsx("span",{className:"willa-prompt-template-picker__item-title-main",children:H({text:t.title,query:c,markClassName:"willa-prompt-template-picker__mark"})})}),description:e.jsx("span",{className:"willa-prompt-template-picker__item-description",children:H({text:t.description??t.content,query:c,markClassName:"willa-prompt-template-picker__mark"})}),meta:e.jsxs("span",{className:"willa-prompt-template-picker__item-meta",children:[v?e.jsx(I,{tone:"success",children:"收藏"}):null,F?e.jsx(I,{tone:"info",children:"最近"}):null,($?t.tags??[]:[]).map(T=>e.jsx(I,{size:"sm",tone:"neutral",children:T},`${t.id}-${T}`))]}),actions:e.jsxs("span",{className:"willa-prompt-template-picker__actions",children:[o?e.jsx(_,{size:"sm",variant:"soft",disabled:p,onClick:T=>{T.stopPropagation(),o(t.id)},children:v?"取消收藏":"收藏"}):null,e.jsx(_,{size:"sm",variant:"ghost",disabled:p,onClick:T=>{T.stopPropagation(),p||D(t.id)},children:"回填"})]}),selected:h===t.id,disabled:p}}),[k,o,P,c,h,D,$,p]);return e.jsxs("section",{...Z,className:te("willa-prompt-template-picker",S&&"willa-prompt-template-picker--disabled",b&&"willa-prompt-template-picker--loading",K),"aria-busy":b||void 0,children:[e.jsxs("div",{className:"willa-prompt-template-picker__toolbar",children:[e.jsx(X,{className:"willa-prompt-template-picker__search",value:c,onValueChange:f,onChange:t=>f(t.currentTarget.value),onSearch:f,onClear:()=>f(""),placeholder:"搜索模板关键词",clearable:!0,disabled:p}),O?e.jsx(Y,{className:"willa-prompt-template-picker__category",options:q,value:j,onValueChange:t=>G(t),disabled:p}):null]}),c.trim()?e.jsxs("div",{className:"willa-prompt-template-picker__summary",children:["已匹配 ",E.length," 个模板"]}):null,b?e.jsx(M,{className:"willa-prompt-template-picker--empty",title:"模板加载中",description:"请稍候，正在同步可用模板。",icon:e.jsx(ee,{label:null,size:"sm"})}):a.length===0?e.jsx(M,{className:"willa-prompt-template-picker--empty",title:"暂无模板",description:Q}):e.jsx(ie,{className:"willa-prompt-template-picker__list",items:U,empty:c.trim()?e.jsx(M,{title:"无匹配模板",description:"请调整关键词或清空筛选条件后重试。",actions:c.trim()?e.jsx(_,{size:"sm",variant:"ghost",onClick:()=>f(""),children:"清空搜索"}):null}):null,onItemClick:t=>{p||D(t.id)}}),y?e.jsxs("div",{className:"willa-prompt-template-picker__preview",children:[e.jsxs("div",{className:"willa-prompt-template-picker__preview-title",children:["已选模板：",y.title]}),e.jsx("div",{className:"willa-prompt-template-picker__selected-meta",children:(y.tags??[]).map(t=>e.jsx(I,{size:"sm",tone:"neutral",children:t},`${y.id}-${t}`))}),e.jsx("pre",{className:"willa-prompt-template-picker__preview-content",children:y.content})]}):null,h&&!y?e.jsxs("div",{className:"willa-prompt-template-picker__selected",children:["当前已选模板 ID ",h," 不在当前列表中，请检查筛选条件。"]}):null]})}const ne=i=>{const a=i.description??i.content;return`${i.title}
${a}
${(i.tags??[]).join(" ")}`},L=i=>{const{templates:a,favorites:r,recents:g}=i;return[...a].sort((m,n)=>{const d=(r.has(m.id)?0:1)*2+(g.has(m.id)?0:1),o=(r.has(n.id)?0:1)*2+(g.has(n.id)?0:1);return d!==o?d-o:m.title.localeCompare(n.title)})};C.displayName="PromptTemplatePicker";const R={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},oe={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},ce=[{id:"writing",label:"写作"},{id:"analysis",label:"分析"},{id:"coding",label:"研发"}],B=[{id:"daily-summary",categoryId:"writing",title:"会议纪要提炼",description:"抽取决议、风险与行动项，生成可直接同步到任务系统的摘要。",content:"请将以下内容整理为：目标、背景、关键决议、下一步行动。",tags:["总结","中文","简报"]},{id:"feature-brief",categoryId:"writing",title:"PRD 提示词",description:"生成含验收标准和边界条件的功能说明。",content:"请按【问题-方案-验证】结构写出一版 PRD 草稿。",tags:["产品","PRD"]},{id:"user-complaint",categoryId:"analysis",title:"用户投诉聚类",description:"对多条反馈做聚类并输出前 3 个共性问题。",content:"请将反馈内容按问题主题聚类并给出优先级建议。",tags:["反馈","聚类","客服"]},{id:"bug-investigation",categoryId:"analysis",title:"故障根因排查",description:"结合日志与复现步骤输出可执行的排查清单。",content:"请基于异常现象给出根因分析与修复建议。",tags:["运维","排障","日志"]},{id:"code-review",categoryId:"coding",title:"代码评审指引",description:"输出可复用的代码评审清单与改进建议。",content:"请对以下变更输出安全、性能和兼容性维度的 review 建议。",tags:["前端","质量","检查清单"]}],W=()=>{const[i,a]=l.useState(null),[r,g]=l.useState(""),[m,n]=l.useState(["feature-brief","daily-summary"]),[d,o]=l.useState(["user-complaint"]),[N,V]=l.useState("");return e.jsxs("div",{style:R,children:[e.jsx(C,{templates:B,categories:ce,activeCategoryId:i,onCategoryChange:a,searchValue:N,onSearchChange:V,value:r,onSelect:s=>{g(s),o(u=>[...new Set([s,...u])].slice(0,5))},recentTemplateIds:d,favorites:m,onToggleFavorite:s=>{n(u=>u.includes(s)?u.filter(S=>S!==s):[...u,s])},showTagFilter:!0}),e.jsxs("div",{style:oe,children:["当前选中：",r||"未选择"]})]})},pe=()=>e.jsx("div",{style:R,children:e.jsx(C,{templates:[],loading:!0,onSelect:()=>{}})}),me=()=>{const[i,a]=l.useState("code");return e.jsxs("div",{style:R,children:[e.jsx(C,{templates:B,searchValue:i,onSearchChange:a,onSelect:()=>{},disabled:!0}),e.jsx(_,{icon:e.jsx(ae,{}),size:"sm",disabled:!0,children:"已禁用场景按钮"})]})},Te=re({id:"prompt-template-picker",name:"PromptTemplatePicker",displayName:"提示词模板选择器",category:"ai",packageName:"willa/PromptTemplatePicker",description:"AI 提示词模板选择器，支持分类筛选、搜索、收藏和最近使用。",imports:[{name:"PromptTemplatePicker",from:"willa/PromptTemplatePicker"}],css:"willa/PromptTemplatePicker.css",demo:{name:"PromptTemplatePickerPreview",component:W},code:`
    import { useState } from "react";
    import { PromptTemplatePicker } from "willa/PromptTemplatePicker";
    import "willa/PromptTemplatePicker.css";

    const templates = [
      {
        id: "daily-summary",
        title: "会议纪要提炼",
        description: "抽取决议、风险与行动项，生成可同步到任务系统的摘要。",
        content: "请将以下内容整理为：目标、背景、关键决议、下一步行动。",
      },
    ];

    const Demo = () => {
      const [selectedTemplateId, setSelectedTemplateId] = useState("");

      return (
        <PromptTemplatePicker
          templates={templates}
          value={selectedTemplateId}
          onSelect={setSelectedTemplateId}
          onSearchChange={() => {}}
        />
      );
    };
  `,sections:[{title:"主链路（搜索 + 分类 + 收藏）",code:`
        <PromptTemplatePicker
          templates={templates}
          categories={[
            { id: "writing", label: "写作" },
            { id: "analysis", label: "分析" },
            { id: "coding", label: "研发" },
          ]}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          value={selectedTemplateId}
          onSelect={(id) => setSelectedTemplateId(id)}
          recentTemplateIds={recentTemplateIds}
          favorites={favorites}
          onToggleFavorite={(id) => {
            setFavorites((prev) =>
              prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
            );
          }}
        />;
      `,content:e.jsx(W,{})},{title:"边界（空态）",code:`
        <PromptTemplatePicker
          templates={[]}
          loading
          onSelect={() => {}}
        />;
      `,content:e.jsx(pe,{})},{title:"边界（禁用）",code:`
        <PromptTemplatePicker
          templates={templates}
          searchValue="code"
          onSearchChange={() => {}}
          onSelect={() => {}}
          disabled
        />;
      `,content:e.jsx(me,{})}],props:[{name:"templates",type:"Array<PromptTemplate>",required:!0,description:"可选择的 Prompt 模板列表。"},{name:"value",type:"string",description:"受控选中的模板 ID。"},{name:"defaultValue",type:"string",description:"非受控默认选中的模板 ID。"},{name:"onSelect",type:"(id: string) => void",required:!0,description:"选择模板或点击回填时触发。"},{name:"recentTemplateIds",type:"Array<string>",defaultValue:"[]",description:"最近使用模板 ID，用于排序和标记。"},{name:"favorites",type:"Array<string>",defaultValue:"[]",description:"收藏模板 ID，用于排序和标记。"},{name:"onToggleFavorite",type:"(id: string) => void",description:"点击收藏或取消收藏时触发。"},{name:"searchValue",type:"string",description:"受控搜索关键词。"},{name:"onSearchChange",type:"(value: string) => void",description:"搜索关键词变化时触发。"},{name:"categories",type:"Array<PromptTemplateCategory>",description:"模板分类列表。"},{name:"activeCategoryId",type:"string | null",description:"受控的当前分类 ID；null 表示全部。"},{name:"onCategoryChange",type:"(categoryId: string | null) => void",description:"分类变化时触发。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用选择、搜索和收藏操作。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示模板列表加载态。"},{name:"emptyText",type:"string",defaultValue:'"未找到可用模板"',description:"模板列表为空时的描述文案。"},{name:"showTagFilter",type:"boolean",defaultValue:"true",description:"是否在列表项中展示模板 tags。"}]});export{Te as default};
