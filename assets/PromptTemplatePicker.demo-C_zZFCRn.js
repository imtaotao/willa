import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{L as i}from"./react-icons.esm-mVdwEXuX.js";import{H as a}from"./src-D2lZkBJ2.js";import{t as o}from"./Button-O1aY2iqB.js";import{t as s}from"./EmptyState-CjHyXyY4.js";import{t as c}from"./Spinner-DJVkTLj1.js";import{i as l,s as u}from"./index-Do4z6LCr.js";import"./style-B00R6KjV.js";import{t as d}from"./defineDoc-Cid5xIoZ.js";import{t as f}from"./List-CKoCxChV.js";import{t as p}from"./Tag-R3pz2yYt.js";import{n as m,r as h,t as g}from"./searchText-Bp4tZDL5.js";var _=n(e()),v=n(r()),y=t(),b=`__all`;function x(e){let{templates:t,value:n,defaultValue:r,onSelect:i,recentTemplateIds:d=[],favorites:x=[],onToggleFavorite:w,searchValue:T,onSearchChange:E,categories:D,activeCategoryId:O,onCategoryChange:k,disabled:A=!1,loading:j=!1,emptyText:M=`未找到可用模板`,showTagFilter:N=!0,className:P,...F}=e,[I,L]=a({value:T,defaultValue:``,onChange:E}),[R,z]=a({value:n,defaultValue:r??``,onChange:i}),[B,V]=a({value:O??b,defaultValue:b,onChange:e=>{k?.(e===b?null:e)}}),H=(0,_.useMemo)(()=>new Set(x),[x]),U=(0,_.useMemo)(()=>new Set(d),[d]),W=(0,_.useMemo)(()=>new Map(t.map(e=>[e.id,e])),[t]),G=m(I),K=(0,_.useMemo)(()=>[{value:b,label:`全部`},...(D??[]).map(e=>({value:e.id,label:e.label}))],[D]),q=(0,_.useMemo)(()=>{let e=t.filter(e=>B===b?!0:e.categoryId===B);return C(G?{templates:e.filter(e=>g(S(e),G)),favorites:H,recents:U}:{templates:e,favorites:H,recents:U})},[B,H,G,U,t]),J=R?W.get(R)??null:null,Y=K.length>1,X=A||j,Z=(0,_.useMemo)(()=>q.map(e=>{let t=H.has(e.id),n=U.has(e.id);return{id:e.id,title:(0,y.jsx)(`span`,{className:`willa-prompt-template-picker__item-title`,children:(0,y.jsx)(`span`,{className:`willa-prompt-template-picker__item-title-main`,children:h({text:e.title,query:I,markClassName:`willa-prompt-template-picker__mark`})})}),description:(0,y.jsx)(`span`,{className:`willa-prompt-template-picker__item-description`,children:h({text:e.description??e.content,query:I,markClassName:`willa-prompt-template-picker__mark`})}),meta:(0,y.jsxs)(`span`,{className:`willa-prompt-template-picker__item-meta`,children:[t?(0,y.jsx)(p,{tone:`success`,children:`收藏`}):null,n?(0,y.jsx)(p,{tone:`info`,children:`最近`}):null,(N?e.tags??[]:[]).map(t=>(0,y.jsx)(p,{size:`sm`,tone:`neutral`,children:t},`${e.id}-${t}`))]}),actions:(0,y.jsxs)(`span`,{className:`willa-prompt-template-picker__actions`,children:[w?(0,y.jsx)(o,{size:`sm`,variant:`soft`,disabled:X,onClick:t=>{t.stopPropagation(),w(e.id)},children:t?`取消收藏`:`收藏`}):null,(0,y.jsx)(o,{size:`sm`,variant:`ghost`,disabled:X,onClick:t=>{t.stopPropagation(),X||z(e.id)},children:`回填`})]}),selected:R===e.id,disabled:X}}),[H,w,U,I,R,z,N,X]);return(0,y.jsxs)(`section`,{...F,className:(0,v.default)(`willa-prompt-template-picker`,A&&`willa-prompt-template-picker--disabled`,j&&`willa-prompt-template-picker--loading`,P),"aria-busy":j||void 0,children:[(0,y.jsxs)(`div`,{className:`willa-prompt-template-picker__toolbar`,children:[(0,y.jsx)(u,{className:`willa-prompt-template-picker__search`,value:I,onValueChange:L,onChange:e=>L(e.currentTarget.value),onSearch:L,onClear:()=>L(``),placeholder:`搜索模板关键词`,clearable:!0,disabled:X}),Y?(0,y.jsx)(l,{className:`willa-prompt-template-picker__category`,options:K,value:B,onValueChange:e=>V(e),disabled:X}):null]}),I.trim()?(0,y.jsxs)(`div`,{className:`willa-prompt-template-picker__summary`,children:[`已匹配 `,q.length,` 个模板`]}):null,j?(0,y.jsx)(s,{className:`willa-prompt-template-picker--empty`,title:`模板加载中`,description:`请稍候，正在同步可用模板。`,icon:(0,y.jsx)(c,{label:null,size:`sm`})}):t.length===0?(0,y.jsx)(s,{className:`willa-prompt-template-picker--empty`,title:`暂无模板`,description:M}):(0,y.jsx)(f,{className:`willa-prompt-template-picker__list`,items:Z,empty:I.trim()?(0,y.jsx)(s,{title:`无匹配模板`,description:`请调整关键词或清空筛选条件后重试。`,actions:I.trim()?(0,y.jsx)(o,{size:`sm`,variant:`ghost`,onClick:()=>L(``),children:`清空搜索`}):null}):null,onItemClick:e=>{X||z(e.id)}}),J?(0,y.jsxs)(`div`,{className:`willa-prompt-template-picker__preview`,children:[(0,y.jsxs)(`div`,{className:`willa-prompt-template-picker__preview-title`,children:[`已选模板：`,J.title]}),(0,y.jsx)(`div`,{className:`willa-prompt-template-picker__selected-meta`,children:(J.tags??[]).map(e=>(0,y.jsx)(p,{size:`sm`,tone:`neutral`,children:e},`${J.id}-${e}`))}),(0,y.jsx)(`pre`,{className:`willa-prompt-template-picker__preview-content`,children:J.content})]}):null,R&&!J?(0,y.jsxs)(`div`,{className:`willa-prompt-template-picker__selected`,children:[`当前已选模板 ID `,R,` 不在当前列表中，请检查筛选条件。`]}):null]})}var S=e=>{let t=e.description??e.content;return`${e.title}\n${t}\n${(e.tags??[]).join(` `)}`},C=e=>{let{templates:t,favorites:n,recents:r}=e;return[...t].sort((e,t)=>{let i=!n.has(e.id)*2+ +!r.has(e.id),a=!n.has(t.id)*2+ +!r.has(t.id);return i===a?e.title.localeCompare(t.title):i-a})};x.displayName=`PromptTemplatePicker`;var w={display:`grid`,gap:`1rem`,width:`min(100%, 58rem)`},T={width:`max-content`,maxWidth:`100%`,border:`1px solid var(--willa-line)`,borderRadius:`0.62rem`,background:`var(--willa-panel-bg)`,color:`var(--willa-text-soft)`,fontSize:`0.86rem`,fontWeight:520,lineHeight:1.45,padding:`0.48rem 0.62rem`},E=[{id:`writing`,label:`写作`},{id:`analysis`,label:`分析`},{id:`coding`,label:`研发`}],D=[{id:`daily-summary`,categoryId:`writing`,title:`会议纪要提炼`,description:`抽取决议、风险与行动项，生成可直接同步到任务系统的摘要。`,content:`请将以下内容整理为：目标、背景、关键决议、下一步行动。`,tags:[`总结`,`中文`,`简报`]},{id:`feature-brief`,categoryId:`writing`,title:`PRD 提示词`,description:`生成含验收标准和边界条件的功能说明。`,content:`请按【问题-方案-验证】结构写出一版 PRD 草稿。`,tags:[`产品`,`PRD`]},{id:`user-complaint`,categoryId:`analysis`,title:`用户投诉聚类`,description:`对多条反馈做聚类并输出前 3 个共性问题。`,content:`请将反馈内容按问题主题聚类并给出优先级建议。`,tags:[`反馈`,`聚类`,`客服`]},{id:`bug-investigation`,categoryId:`analysis`,title:`故障根因排查`,description:`结合日志与复现步骤输出可执行的排查清单。`,content:`请基于异常现象给出根因分析与修复建议。`,tags:[`运维`,`排障`,`日志`]},{id:`code-review`,categoryId:`coding`,title:`代码评审指引`,description:`输出可复用的代码评审清单与改进建议。`,content:`请对以下变更输出安全、性能和兼容性维度的 review 建议。`,tags:[`前端`,`质量`,`检查清单`]}],O=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)([`feature-brief`,`daily-summary`]),[o,s]=(0,_.useState)([`user-complaint`]),[c,l]=(0,_.useState)(``);return(0,y.jsxs)(`div`,{style:w,children:[(0,y.jsx)(x,{templates:D,categories:E,activeCategoryId:e,onCategoryChange:t,searchValue:c,onSearchChange:l,value:n,onSelect:e=>{r(e),s(t=>[...new Set([e,...t])].slice(0,5))},recentTemplateIds:o,favorites:i,onToggleFavorite:e=>{a(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},showTagFilter:!0}),(0,y.jsxs)(`div`,{style:T,children:[`当前选中：`,n||`未选择`]})]})},k=d({id:`prompt-template-picker`,name:`PromptTemplatePicker`,displayName:`提示词模板选择器`,category:`ai`,packageName:`willa/PromptTemplatePicker`,description:`AI 提示词模板选择器，支持分类筛选、搜索、收藏和最近使用。`,imports:[{name:`PromptTemplatePicker`,from:`willa/PromptTemplatePicker`}],css:`willa/PromptTemplatePicker.css`,demo:{name:`PromptTemplatePickerPreview`,component:O},code:`
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
  `,sections:[{title:`主链路（搜索 + 分类 + 收藏）`,code:`
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
      `,content:(0,y.jsx)(O,{})},{title:`边界（空态）`,code:`
        <PromptTemplatePicker
          templates={[]}
          loading
          onSelect={() => {}}
        />;
      `,content:(0,y.jsx)(()=>(0,y.jsx)(`div`,{style:w,children:(0,y.jsx)(x,{templates:[],loading:!0,onSelect:()=>{}})}),{})},{title:`边界（禁用）`,code:`
        <PromptTemplatePicker
          templates={templates}
          searchValue="code"
          onSearchChange={() => {}}
          onSelect={() => {}}
          disabled
        />;
      `,content:(0,y.jsx)(()=>{let[e,t]=(0,_.useState)(`code`);return(0,y.jsxs)(`div`,{style:w,children:[(0,y.jsx)(x,{templates:D,searchValue:e,onSearchChange:t,onSelect:()=>{},disabled:!0}),(0,y.jsx)(o,{icon:(0,y.jsx)(i,{}),size:`sm`,disabled:!0,children:`已禁用场景按钮`})]})},{})}],props:[{name:`templates`,type:`Array<PromptTemplate>`,required:!0,description:`可选择的 Prompt 模板列表。`},{name:`value`,type:`string`,description:`受控选中的模板 ID。`},{name:`defaultValue`,type:`string`,description:`非受控默认选中的模板 ID。`},{name:`onSelect`,type:`(id: string) => void`,required:!0,description:`选择模板或点击回填时触发。`},{name:`recentTemplateIds`,type:`Array<string>`,defaultValue:`[]`,description:`最近使用模板 ID，用于排序和标记。`},{name:`favorites`,type:`Array<string>`,defaultValue:`[]`,description:`收藏模板 ID，用于排序和标记。`},{name:`onToggleFavorite`,type:`(id: string) => void`,description:`点击收藏或取消收藏时触发。`},{name:`searchValue`,type:`string`,description:`受控搜索关键词。`},{name:`onSearchChange`,type:`(value: string) => void`,description:`搜索关键词变化时触发。`},{name:`categories`,type:`Array<PromptTemplateCategory>`,description:`模板分类列表。`},{name:`activeCategoryId`,type:`string | null`,description:`受控的当前分类 ID；null 表示全部。`},{name:`onCategoryChange`,type:`(categoryId: string | null) => void`,description:`分类变化时触发。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用选择、搜索和收藏操作。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`是否展示模板列表加载态。`},{name:`emptyText`,type:`string`,defaultValue:`"未找到可用模板"`,description:`模板列表为空时的描述文案。`},{name:`showTagFilter`,type:`boolean`,defaultValue:`true`,description:`是否在列表项中展示模板 tags。`}]});export{k as default};