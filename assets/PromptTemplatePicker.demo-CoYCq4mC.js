import{b3 as D,b0 as r,a_ as e,h as I,ao as O,aq as U,J as M,aL as X,Y as Z}from"./index-kOedO2Qb.js";import{L as ee}from"./index-KxefGftU.js";import{T as j}from"./index-VpT3IkxR.js";/* empty css              */import{d as te}from"./defineDoc-BwDFvUQh.js";const k="__all";function _(a){const{templates:i,value:l,defaultValue:d,onSelect:p,recentTemplateIds:n=[],favorites:s=[],onToggleFavorite:o,searchValue:C,onSearchChange:b,categories:m,activeCategoryId:g,onCategoryChange:x,disabled:c=!1,emptyText:B="未找到可用模板",showTagFilter:z=!0,className:H,...J}=a,[u,f]=D({value:C,defaultValue:"",onChange:b}),[h,N]=D({value:l,defaultValue:d??"",onChange:p}),[S,Q]=D({value:g??k,defaultValue:k,onChange:t=>{x==null||x(t===k?null:t)}}),P=r.useMemo(()=>new Set(s),[s]),w=r.useMemo(()=>new Set(n),[n]),Y=r.useMemo(()=>new Map(i.map(t=>[t.id,t])),[i]),V=u.trim().toLowerCase(),R=r.useMemo(()=>[{value:k,label:"全部"},...(m??[]).map(t=>({value:t.id,label:t.label}))],[m]),A=r.useMemo(()=>{const t=i.filter(v=>S===k?!0:v.categoryId===S);return L(V?{templates:t.filter(v=>{const $=ae(v);return se($).includes(V)}),favorites:P,recents:w}:{templates:t,favorites:P,recents:w})},[S,P,V,w,i]),y=h?Y.get(h)??null:null,G=R.length>1,K=r.useMemo(()=>A.map(t=>{const v=P.has(t.id),$=w.has(t.id);return{id:t.id,title:e.jsx("span",{className:"willa-prompt-template-picker__item-title",children:e.jsx("span",{className:"willa-prompt-template-picker__item-title-main",children:E(t.title,u)})}),description:e.jsx("span",{className:"willa-prompt-template-picker__item-description",children:E(t.description??t.content,u)}),meta:e.jsxs("span",{className:"willa-prompt-template-picker__item-meta",children:[v?e.jsx(j,{tone:"success",children:"收藏"}):null,$?e.jsx(j,{tone:"info",children:"最近"}):null,(z?t.tags??[]:[]).map(T=>e.jsx(j,{size:"sm",tone:"neutral",children:T},`${t.id}-${T}`))]}),actions:e.jsxs("span",{className:"willa-prompt-template-picker__actions",children:[o?e.jsx(I,{size:"sm",variant:"soft",disabled:c,onClick:T=>{T.stopPropagation(),o(t.id)},children:v?"取消收藏":"收藏"}):null,e.jsx(I,{size:"sm",variant:"ghost",disabled:c,onClick:T=>{T.stopPropagation(),c||N(t.id)},children:"回填"})]}),selected:h===t.id,disabled:c}}),[P,o,w,u,h,N,z,c]);return e.jsxs("section",{...J,className:X("willa-prompt-template-picker",c&&"willa-prompt-template-picker--disabled",H),children:[e.jsxs("div",{className:"willa-prompt-template-picker__toolbar",children:[e.jsx(O,{className:"willa-prompt-template-picker__search",value:u,onValueChange:f,onChange:t=>f(t.currentTarget.value),onSearch:f,onClear:()=>f(""),placeholder:"搜索模板关键词",clearable:!0,disabled:c}),G?e.jsx(U,{className:"willa-prompt-template-picker__category",options:R,value:S,onValueChange:t=>Q(t),disabled:c}):null]}),u.trim()?e.jsxs("div",{className:"willa-prompt-template-picker__summary",children:["已匹配 ",A.length," 个模板"]}):null,i.length===0?e.jsx(M,{className:"willa-prompt-template-picker--empty",title:"暂无模板",description:B}):e.jsx(ee,{className:"willa-prompt-template-picker__list",items:K,empty:u.trim()?e.jsx(M,{title:"无匹配模板",description:"请调整关键词或清空筛选条件后重试。",actions:u.trim()?e.jsx(I,{size:"sm",variant:"ghost",onClick:()=>f(""),children:"清空搜索"}):null}):null,onItemClick:t=>{c||N(t.id)}}),y?e.jsxs("div",{className:"willa-prompt-template-picker__preview",children:[e.jsxs("div",{className:"willa-prompt-template-picker__preview-title",children:["已选模板：",y.title]}),e.jsx("div",{className:"willa-prompt-template-picker__selected-meta",children:(y.tags??[]).map(t=>e.jsx(j,{size:"sm",tone:"neutral",children:t},`${y.id}-${t}`))}),e.jsx("pre",{className:"willa-prompt-template-picker__preview-content",children:y.content})]}):null,h&&!y?e.jsxs("div",{className:"willa-prompt-template-picker__selected",children:["当前已选模板 ID ",h," 不在当前列表中，请检查筛选条件。"]}):null]})}const ae=a=>{const i=a.description??a.content;return`${a.title}
${i}
${(a.tags??[]).join(" ")}`},ie=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),se=a=>a.trim().toLowerCase(),L=a=>{const{templates:i,favorites:l,recents:d}=a;return[...i].sort((p,n)=>{const s=(l.has(p.id)?0:1)*2+(d.has(p.id)?0:1),o=(l.has(n.id)?0:1)*2+(d.has(n.id)?0:1);return s!==o?s-o:p.title.localeCompare(n.title)})},E=(a,i)=>{const l=i.trim();if(!l)return a;const d=ie(l),p=new RegExp(`(${d})`,"i"),n=a.split(p);return n.length<=1?a:e.jsx(e.Fragment,{children:n.map((s,o)=>p.test(s)?e.jsx("mark",{className:"willa-prompt-template-picker__mark",children:s},`${s}-${o}`):e.jsx("span",{children:s},`${s}-${o}`))})};_.displayName="PromptTemplatePicker";const F={display:"grid",gap:"1rem",width:"min(100%, 58rem)"},re={width:"max-content",maxWidth:"100%",border:"1px solid var(--willa-line)",borderRadius:"0.62rem",background:"var(--willa-panel-bg)",color:"var(--willa-text-soft)",fontSize:"0.86rem",fontWeight:520,lineHeight:1.45,padding:"0.48rem 0.62rem"},le=[{id:"writing",label:"写作"},{id:"analysis",label:"分析"},{id:"coding",label:"研发"}],W=[{id:"daily-summary",categoryId:"writing",title:"会议纪要提炼",description:"抽取决议、风险与行动项，生成可直接同步到任务系统的摘要。",content:"请将以下内容整理为：目标、背景、关键决议、下一步行动。",tags:["总结","中文","简报"]},{id:"feature-brief",categoryId:"writing",title:"PRD 提示词",description:"生成含验收标准和边界条件的功能说明。",content:"请按【问题-方案-验证】结构写出一版 PRD 草稿。",tags:["产品","PRD"]},{id:"user-complaint",categoryId:"analysis",title:"用户投诉聚类",description:"对多条反馈做聚类并输出前 3 个共性问题。",content:"请将反馈内容按问题主题聚类并给出优先级建议。",tags:["反馈","聚类","客服"]},{id:"bug-investigation",categoryId:"analysis",title:"故障根因排查",description:"结合日志与复现步骤输出可执行的排查清单。",content:"请基于异常现象给出根因分析与修复建议。",tags:["运维","排障","日志"]},{id:"code-review",categoryId:"coding",title:"代码评审指引",description:"输出可复用的代码评审清单与改进建议。",content:"请对以下变更输出安全、性能和兼容性维度的 review 建议。",tags:["前端","质量","检查清单"]}],q=()=>{const[a,i]=r.useState(null),[l,d]=r.useState(""),[p,n]=r.useState(["feature-brief","daily-summary"]),[s,o]=r.useState(["user-complaint"]),[C,b]=r.useState("");return e.jsxs("div",{style:F,children:[e.jsx(_,{templates:W,categories:le,activeCategoryId:a,onCategoryChange:i,searchValue:C,onSearchChange:b,value:l,onSelect:m=>{d(m),o(g=>[...new Set([m,...g])].slice(0,5))},recentTemplateIds:s,favorites:p,onToggleFavorite:m=>{n(g=>g.includes(m)?g.filter(c=>c!==m):[...g,m])},showTagFilter:!0}),e.jsxs("div",{style:re,children:["当前选中：",l||"未选择"]})]})},ne=()=>e.jsx("div",{style:F,children:e.jsx(_,{templates:[],onSelect:()=>{},emptyText:"暂未配置模板",showTagFilter:!1})}),oe=()=>{const[a,i]=r.useState("code");return e.jsxs("div",{style:F,children:[e.jsx(_,{templates:W,searchValue:a,onSearchChange:i,onSelect:()=>{},disabled:!0}),e.jsx(I,{icon:e.jsx(Z,{}),size:"sm",disabled:!0,children:"已禁用场景按钮"})]})},ge=te({id:"prompt-template-picker",name:"PromptTemplatePicker",displayName:"提示词模板选择器",category:"ai",packageName:"willa/PromptTemplatePicker",description:"AI 提示词模板选择器，支持分类筛选、搜索、收藏和最近使用。",imports:[{name:"PromptTemplatePicker",from:"willa/PromptTemplatePicker"}],css:"willa/PromptTemplatePicker.css",demo:{name:"PromptTemplatePickerPreview",component:q},code:`
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
      `,content:e.jsx(q,{})},{title:"边界（空态）",code:`
        <PromptTemplatePicker
          templates={[]}
          onSelect={() => {}}
          emptyText="暂未配置模板"
        />;
      `,content:e.jsx(ne,{})},{title:"边界（禁用）",code:`
        <PromptTemplatePicker
          templates={templates}
          searchValue="code"
          onSearchChange={() => {}}
          onSelect={() => {}}
          disabled
        />;
      `,content:e.jsx(oe,{})}],props:[{name:"templates",type:"Array<PromptTemplate>",required:!0,description:"可选择的 Prompt 模板列表。"},{name:"value",type:"string",description:"受控选中的模板 ID。"},{name:"defaultValue",type:"string",description:"非受控默认选中的模板 ID。"},{name:"onSelect",type:"(id: string) => void",required:!0,description:"选择模板或点击回填时触发。"},{name:"recentTemplateIds",type:"Array<string>",defaultValue:"[]",description:"最近使用模板 ID，用于排序和标记。"},{name:"favorites",type:"Array<string>",defaultValue:"[]",description:"收藏模板 ID，用于排序和标记。"},{name:"onToggleFavorite",type:"(id: string) => void",description:"点击收藏或取消收藏时触发。"},{name:"searchValue",type:"string",description:"受控搜索关键词。"},{name:"onSearchChange",type:"(value: string) => void",description:"搜索关键词变化时触发。"},{name:"categories",type:"Array<PromptTemplateCategory>",description:"模板分类列表。"},{name:"activeCategoryId",type:"string | null",description:"受控的当前分类 ID；null 表示全部。"},{name:"onCategoryChange",type:"(categoryId: string | null) => void",description:"分类变化时触发。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用选择、搜索和收藏操作。"},{name:"emptyText",type:"string",defaultValue:'"未找到可用模板"',description:"模板列表为空时的描述文案。"},{name:"showTagFilter",type:"boolean",defaultValue:"true",description:"是否在列表项中展示模板 tags。"}]});export{ge as default};
