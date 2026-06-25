import{b4 as F,b1 as l,a$ as e,h as _,ap as X,ar as Y,K as M,ay as ee,aM as te,Z as ae}from"./index-D8h6quRF.js";import{L as ie}from"./index-CCrQJpLa.js";import{T as I}from"./index-DmbvMZD-.js";/* empty css              */import{d as se}from"./defineDoc-DgVgVUyg.js";const k="__all";function C(a){const{templates:i,value:r,defaultValue:m,onSelect:c,recentTemplateIds:n=[],favorites:s=[],onToggleFavorite:o,searchValue:N,onSearchChange:V,categories:p,activeCategoryId:g,onCategoryChange:f,disabled:S=!1,loading:j=!1,emptyText:K="未找到可用模板",showTagFilter:A=!0,className:Q,...Z}=a,[d,x]=F({value:N,defaultValue:"",onChange:V}),[h,$]=F({value:r,defaultValue:m??"",onChange:c}),[b,G]=F({value:g??k,defaultValue:k,onChange:t=>{f==null||f(t===k?null:t)}}),w=l.useMemo(()=>new Set(s),[s]),P=l.useMemo(()=>new Set(n),[n]),J=l.useMemo(()=>new Map(i.map(t=>[t.id,t])),[i]),D=d.trim().toLowerCase(),E=l.useMemo(()=>[{value:k,label:"全部"},...(p??[]).map(t=>({value:t.id,label:t.label}))],[p]),L=l.useMemo(()=>{const t=i.filter(v=>b===k?!0:v.categoryId===b);return W(D?{templates:t.filter(v=>{const z=le(v);return ne(z).includes(D)}),favorites:w,recents:P}:{templates:t,favorites:w,recents:P})},[b,w,D,P,i]),y=h?J.get(h)??null:null,O=E.length>1,u=S||j,U=l.useMemo(()=>L.map(t=>{const v=w.has(t.id),z=P.has(t.id);return{id:t.id,title:e.jsx("span",{className:"willa-prompt-template-picker__item-title",children:e.jsx("span",{className:"willa-prompt-template-picker__item-title-main",children:q(t.title,d)})}),description:e.jsx("span",{className:"willa-prompt-template-picker__item-description",children:q(t.description??t.content,d)}),meta:e.jsxs("span",{className:"willa-prompt-template-picker__item-meta",children:[v?e.jsx(I,{tone:"success",children:"收藏"}):null,z?e.jsx(I,{tone:"info",children:"最近"}):null,(A?t.tags??[]:[]).map(T=>e.jsx(I,{size:"sm",tone:"neutral",children:T},`${t.id}-${T}`))]}),actions:e.jsxs("span",{className:"willa-prompt-template-picker__actions",children:[o?e.jsx(_,{size:"sm",variant:"soft",disabled:u,onClick:T=>{T.stopPropagation(),o(t.id)},children:v?"取消收藏":"收藏"}):null,e.jsx(_,{size:"sm",variant:"ghost",disabled:u,onClick:T=>{T.stopPropagation(),u||$(t.id)},children:"回填"})]}),selected:h===t.id,disabled:u}}),[w,o,P,d,h,$,A,u]);return e.jsxs("section",{...Z,className:te("willa-prompt-template-picker",S&&"willa-prompt-template-picker--disabled",j&&"willa-prompt-template-picker--loading",Q),"aria-busy":j||void 0,children:[e.jsxs("div",{className:"willa-prompt-template-picker__toolbar",children:[e.jsx(X,{className:"willa-prompt-template-picker__search",value:d,onValueChange:x,onChange:t=>x(t.currentTarget.value),onSearch:x,onClear:()=>x(""),placeholder:"搜索模板关键词",clearable:!0,disabled:u}),O?e.jsx(Y,{className:"willa-prompt-template-picker__category",options:E,value:b,onValueChange:t=>G(t),disabled:u}):null]}),d.trim()?e.jsxs("div",{className:"willa-prompt-template-picker__summary",children:["已匹配 ",L.length," 个模板"]}):null,j?e.jsx(M,{className:"willa-prompt-template-picker--empty",title:"模板加载中",description:"请稍候，正在同步可用模板。",icon:e.jsx(ee,{label:null,size:"sm"})}):i.length===0?e.jsx(M,{className:"willa-prompt-template-picker--empty",title:"暂无模板",description:K}):e.jsx(ie,{className:"willa-prompt-template-picker__list",items:U,empty:d.trim()?e.jsx(M,{title:"无匹配模板",description:"请调整关键词或清空筛选条件后重试。",actions:d.trim()?e.jsx(_,{size:"sm",variant:"ghost",onClick:()=>x(""),children:"清空搜索"}):null}):null,onItemClick:t=>{u||$(t.id)}}),y?e.jsxs("div",{className:"willa-prompt-template-picker__preview",children:[e.jsxs("div",{className:"willa-prompt-template-picker__preview-title",children:["已选模板：",y.title]}),e.jsx("div",{className:"willa-prompt-template-picker__selected-meta",children:(y.tags??[]).map(t=>e.jsx(I,{size:"sm",tone:"neutral",children:t},`${y.id}-${t}`))}),e.jsx("pre",{className:"willa-prompt-template-picker__preview-content",children:y.content})]}):null,h&&!y?e.jsxs("div",{className:"willa-prompt-template-picker__selected",children:["当前已选模板 ID ",h," 不在当前列表中，请检查筛选条件。"]}):null]})}const le=a=>{const i=a.description??a.content;return`${a.title}
${i}
${(a.tags??[]).join(" ")}`},re=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ne=a=>a.trim().toLowerCase(),W=a=>{const{templates:i,favorites:r,recents:m}=a;return[...i].sort((c,n)=>{const s=(r.has(c.id)?0:1)*2+(m.has(c.id)?0:1),o=(r.has(n.id)?0:1)*2+(m.has(n.id)?0:1);return s!==o?s-o:c.title.localeCompare(n.title)})},q=(a,i)=>{const r=i.trim();if(!r)return a;const m=re(r),c=new RegExp(`(${m})`,"i"),n=a.split(c);return n.length<=1?a:e.jsx(e.Fragment,{children:n.map((s,o)=>c.test(s)?e.jsx("mark",{className:"willa-prompt-template-picker__mark",children:s},`${s}-${o}`):e.jsx("span",{children:s},`${s}-${o}`))})};C.displayName="PromptTemplatePicker";const R={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},oe={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},ce=[{id:"writing",label:"写作"},{id:"analysis",label:"分析"},{id:"coding",label:"研发"}],H=[{id:"daily-summary",categoryId:"writing",title:"会议纪要提炼",description:"抽取决议、风险与行动项，生成可直接同步到任务系统的摘要。",content:"请将以下内容整理为：目标、背景、关键决议、下一步行动。",tags:["总结","中文","简报"]},{id:"feature-brief",categoryId:"writing",title:"PRD 提示词",description:"生成含验收标准和边界条件的功能说明。",content:"请按【问题-方案-验证】结构写出一版 PRD 草稿。",tags:["产品","PRD"]},{id:"user-complaint",categoryId:"analysis",title:"用户投诉聚类",description:"对多条反馈做聚类并输出前 3 个共性问题。",content:"请将反馈内容按问题主题聚类并给出优先级建议。",tags:["反馈","聚类","客服"]},{id:"bug-investigation",categoryId:"analysis",title:"故障根因排查",description:"结合日志与复现步骤输出可执行的排查清单。",content:"请基于异常现象给出根因分析与修复建议。",tags:["运维","排障","日志"]},{id:"code-review",categoryId:"coding",title:"代码评审指引",description:"输出可复用的代码评审清单与改进建议。",content:"请对以下变更输出安全、性能和兼容性维度的 review 建议。",tags:["前端","质量","检查清单"]}],B=()=>{const[a,i]=l.useState(null),[r,m]=l.useState(""),[c,n]=l.useState(["feature-brief","daily-summary"]),[s,o]=l.useState(["user-complaint"]),[N,V]=l.useState("");return e.jsxs("div",{style:R,children:[e.jsx(C,{templates:H,categories:ce,activeCategoryId:a,onCategoryChange:i,searchValue:N,onSearchChange:V,value:r,onSelect:p=>{m(p),o(g=>[...new Set([p,...g])].slice(0,5))},recentTemplateIds:s,favorites:c,onToggleFavorite:p=>{n(g=>g.includes(p)?g.filter(S=>S!==p):[...g,p])},showTagFilter:!0}),e.jsxs("div",{style:oe,children:["当前选中：",r||"未选择"]})]})},pe=()=>e.jsx("div",{style:R,children:e.jsx(C,{templates:[],loading:!0,onSelect:()=>{}})}),me=()=>{const[a,i]=l.useState("code");return e.jsxs("div",{style:R,children:[e.jsx(C,{templates:H,searchValue:a,onSearchChange:i,onSelect:()=>{},disabled:!0}),e.jsx(_,{icon:e.jsx(ae,{}),size:"sm",disabled:!0,children:"已禁用场景按钮"})]})},ve=se({id:"prompt-template-picker",name:"PromptTemplatePicker",displayName:"提示词模板选择器",category:"ai",packageName:"willa/PromptTemplatePicker",description:"AI 提示词模板选择器，支持分类筛选、搜索、收藏和最近使用。",imports:[{name:"PromptTemplatePicker",from:"willa/PromptTemplatePicker"}],css:"willa/PromptTemplatePicker.css",demo:{name:"PromptTemplatePickerPreview",component:B},code:`
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
      `,content:e.jsx(B,{})},{title:"边界（空态）",code:`
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
      `,content:e.jsx(me,{})}],props:[{name:"templates",type:"Array<PromptTemplate>",required:!0,description:"可选择的 Prompt 模板列表。"},{name:"value",type:"string",description:"受控选中的模板 ID。"},{name:"defaultValue",type:"string",description:"非受控默认选中的模板 ID。"},{name:"onSelect",type:"(id: string) => void",required:!0,description:"选择模板或点击回填时触发。"},{name:"recentTemplateIds",type:"Array<string>",defaultValue:"[]",description:"最近使用模板 ID，用于排序和标记。"},{name:"favorites",type:"Array<string>",defaultValue:"[]",description:"收藏模板 ID，用于排序和标记。"},{name:"onToggleFavorite",type:"(id: string) => void",description:"点击收藏或取消收藏时触发。"},{name:"searchValue",type:"string",description:"受控搜索关键词。"},{name:"onSearchChange",type:"(value: string) => void",description:"搜索关键词变化时触发。"},{name:"categories",type:"Array<PromptTemplateCategory>",description:"模板分类列表。"},{name:"activeCategoryId",type:"string | null",description:"受控的当前分类 ID；null 表示全部。"},{name:"onCategoryChange",type:"(categoryId: string | null) => void",description:"分类变化时触发。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用选择、搜索和收藏操作。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示模板列表加载态。"},{name:"emptyText",type:"string",defaultValue:'"未找到可用模板"',description:"模板列表为空时的描述文案。"},{name:"showTagFilter",type:"boolean",defaultValue:"true",description:"是否在列表项中展示模板 tags。"}]});export{ve as default};
