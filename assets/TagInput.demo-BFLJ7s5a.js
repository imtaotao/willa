import{av as u,at as a,r as nt,aj as q,B as At,ac as st,c as kt}from"./index-Cw1JahyG.js";/* empty css              */import{d as _t}from"./defineDoc-dA2rUq-z.js";const Bt=["Enter",","],o=u.forwardRef((n,s)=>{const{value:c,defaultValue:v=[],inputValue:m,defaultInputValue:d="",name:S,size:j="md",variant:it="outline",width:L,placeholder:lt="输入后按 Enter 添加",disabled:f=!1,readOnly:V=!1,invalid:U=!1,clearable:ot=!0,maxTags:b,allowDuplicates:A=!1,commitOnBlur:rt=!0,separators:G=Bt,suggestions:E=[],maxSuggestions:H=8,emptySuggestion:J,renderTag:N,normalizeTag:K=Et,validateTag:h,onValueChange:D,onInputValueChange:R,onTagReject:$,className:ut,style:ct,id:dt,onBlur:O,onFocus:z,onKeyDown:y,onPaste:w,...pt}=n,gt=u.useId(),M=dt??gt,Q=c!==void 0,W=m!==void 0,[mt,ft]=u.useState(v),[ht,yt]=u.useState(d),[wt,X]=u.useState(!1),[k,_]=u.useState(0),l=Q?c:mt,I=W?m:ht,p=!f&&!V,It=ot&&p&&l.length>0,Y=b===void 0||l.length<b,x=u.useMemo(()=>$t({allowDuplicates:A,inputValue:I,maxSuggestions:H,suggestions:E,tags:l}),[A,I,l,H,E]),T=wt&&p&&(x.length>0||!!J),xt={...ct,...L===void 0?void 0:{width:L}},B=t=>{Q||ft(t),D==null||D(t)},F=t=>{W||yt(t),R==null||R(t)},r=(t,e)=>{$==null||$(t,e)},Z=t=>{const e=K(t);if(!e)return r(t,"empty"),!1;if(!A&&l.includes(e))return r(e,"duplicate"),!1;if(!Y)return r(e,"max"),!1;const i=h==null?void 0:h(e,l);return i===!1||typeof i=="string"?(r(e,"invalid"),!1):(B([...l,e]),F(""),_(0),!0)},tt=()=>I.trim()?Z(I):!1,Tt=t=>{let e=l;for(const i of t){const g=K(i);if(!g){r(i,"empty");continue}if(!A&&e.includes(g)){r(g,"duplicate");continue}if(b!==void 0&&e.length>=b){r(g,"max");continue}const at=h==null?void 0:h(g,e);if(at===!1||typeof at=="string"){r(g,"invalid");continue}e=[...e,g]}e!==l&&(B(e),F(""),_(0))},P=t=>{p&&B(l.filter((e,i)=>i!==t))},vt=()=>{p&&B([])},et=t=>{Z(t)},St=t=>{if(f||V){y==null||y(t);return}if(T&&t.key==="ArrowDown"){t.preventDefault(),_(e=>Math.min(e+1,x.length-1));return}if(T&&t.key==="ArrowUp"){t.preventDefault(),_(e=>Math.max(e-1,0));return}if(T&&t.key==="Enter"&&x[k]){t.preventDefault(),et(x[k]);return}if(Nt(t,G)){t.preventDefault(),tt();return}t.key==="Backspace"&&!I&&P(l.length-1),y==null||y(t)},Vt=t=>{if(!p){w==null||w(t);return}const e=t.clipboardData.getData("text"),i=Dt(e,G).filter(Boolean);if(i.length>1){t.preventDefault(),Tt(i);return}w==null||w(t)},jt=t=>{t.currentTarget.contains(t.relatedTarget)||(X(!1),rt&&p&&tt()),O==null||O(t)},bt=t=>{X(!0),z==null||z(t)};return a.jsxs("div",{...pt,className:q("willa-tag-input",`willa-tag-input--${j}`,`willa-tag-input--${it}`,f&&"willa-tag-input--disabled",V&&"willa-tag-input--readonly",U&&"willa-tag-input--invalid",ut),style:xt,"aria-disabled":f||void 0,onBlur:jt,onFocus:bt,children:[a.jsxs("div",{className:"willa-tag-input__control",onClick:Ct,children:[l.map((t,e)=>a.jsxs("span",{className:q("willa-tag-input__tag",N&&"willa-tag-input__tag--custom"),children:[N?N(t,{index:e,disabled:f,readOnly:V,onRemove:()=>P(e)}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"willa-tag-input__tag-label",children:t}),p?a.jsx("button",{className:"willa-tag-input__remove",type:"button","aria-label":`移除 ${t}`,onClick:i=>{i.stopPropagation(),P(e)},children:a.jsx(nt,{"aria-hidden":"true"})}):null]}),S?a.jsx("input",{type:"hidden",name:S,value:t,readOnly:!0}):null]},`${t}-${e}`)),a.jsx("input",{ref:s,id:M,className:"willa-tag-input__input",value:I,placeholder:l.length===0?lt:void 0,disabled:f,readOnly:V||!Y,"aria-invalid":U||void 0,"aria-autocomplete":E.length>0?"list":void 0,"aria-expanded":T||void 0,"aria-controls":T?`${M}-suggestions`:void 0,onChange:t=>F(t.target.value),onKeyDown:St,onPaste:Vt}),It?a.jsx("button",{className:"willa-tag-input__clear",type:"button","aria-label":"清空标签",onClick:t=>{t.stopPropagation(),vt()},children:a.jsx(nt,{"aria-hidden":"true"})}):null]}),T?a.jsx("div",{className:"willa-tag-input__suggestions",id:`${M}-suggestions`,role:"listbox",children:x.length>0?x.map((t,e)=>a.jsx("button",{className:q("willa-tag-input__suggestion",e===k&&"willa-tag-input__suggestion--active"),type:"button",role:"option","aria-selected":e===k,onMouseDown:i=>{i.preventDefault(),et(t)},children:t},t)):J}):null]})});o.displayName="TagInput";const Ct=n=>{const s=n.currentTarget.querySelector("input:not([type='hidden'])");s==null||s.focus()},Et=n=>n.trim(),Nt=(n,s)=>n.nativeEvent.isComposing?!1:s.includes(n.key),Dt=(n,s)=>{const v=s.filter(d=>d.length===1).map(Rt),m=new RegExp(`[\\n\\r\\t${v.join("")}]+`,"g");return n.split(m).map(d=>d.trim())},Rt=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),$t=n=>{const{allowDuplicates:s,inputValue:c,maxSuggestions:v,suggestions:m,tags:d}=n,S=c.trim().toLowerCase();return m.filter(j=>!s&&d.includes(j)?!1:S?j.toLowerCase().includes(S):!0).slice(0,v)},C=["AI 产品","文档站","表单","移动端","主题变量","上传","批量操作","日历"],Ot=()=>{const[n,s]=u.useState(["AI 产品","主题变量"]),c=n.length===0;return a.jsxs(st,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{value:n,invalid:c,placeholder:"至少添加一个标签",suggestions:C,onValueChange:s}),a.jsx(kt,{size:"sm",variant:"soft",onClick:()=>s(["移动端"]),children:"重置为移动端"})]})},Pt=_t({id:"tag-input",name:"TagInput",category:"form",packageName:"willa/TagInput",description:"用于输入、编辑和提交多个文本标签的表单组件。",imports:[{name:"Badge",from:"willa/Badge"},{name:"Button",from:"willa/Button"},{name:"Stack",from:"willa/Stack"},{name:"TagInput",from:"willa/TagInput"}],css:"willa/TagInput.css",demo:{name:"TagInput",component:o,props:{defaultValue:["AI 产品","文档站"],suggestions:C,placeholder:"输入标签后按 Enter",width:"min(100%, 34rem)"}},code:`
    import { TagInput } from "willa/TagInput";
    import "willa/TagInput.css";

    <TagInput
      defaultValue={["AI 产品", "文档站"]}
      suggestions={["AI 产品", "文档站", "表单", "移动端"]}
      placeholder="输入标签后按 Enter"
      width="min(100%, 34rem)"
    />;
  `,sections:[{title:"建议项",code:`
        const suggestions = [
          "AI 产品",
          "文档站",
          "表单",
          "移动端",
          "主题变量",
        ];

        <TagInput
          defaultValue={["AI 产品"]}
          suggestions={suggestions}
          placeholder="搜索或新增标签"
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(o,{defaultValue:["AI 产品"],suggestions:C,placeholder:"搜索或新增标签",width:"min(100%, 34rem)"})},{title:"受控和校验",code:`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { Stack } from "willa/Stack";

        const suggestions = ["AI 产品", "主题变量", "移动端"];

        const Demo = () => {
          const [tags, setTags] = useState(["AI 产品", "主题变量"]);
          const isInvalid = tags.length === 0;

          return (
            <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
              <TagInput
                value={tags}
                invalid={isInvalid}
                placeholder="至少添加一个标签"
                suggestions={suggestions}
                onValueChange={setTags}
              />
              <Button size="sm" variant="soft" onClick={() => setTags(["移动端"])}>
                重置为移动端
              </Button>
            </Stack>
          );
        };
      `,content:a.jsx(Ot,{})},{title:"分隔符和粘贴",code:`
        <TagInput
          defaultValue={["表单"]}
          separators={["Enter", ",", "，"]}
          placeholder="支持逗号、中文逗号和 Enter"
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(o,{defaultValue:["表单"],separators:["Enter",",","，"],placeholder:"支持逗号、中文逗号和 Enter",width:"min(100%, 34rem)"})},{title:"数量限制",code:`
        const suggestions = ["AI 产品", "文档站", "表单", "移动端"];

        <TagInput
          defaultValue={["AI 产品", "文档站"]}
          maxTags={3}
          suggestions={suggestions}
          placeholder="最多 3 个标签"
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(o,{defaultValue:["AI 产品","文档站"],maxTags:3,suggestions:C,placeholder:"最多 3 个标签",width:"min(100%, 34rem)"})},{title:"自定义标签",code:`
        <TagInput
          defaultValue={["稳定", "待复核", "内部文档"]}
          renderTag={(tag) => (
            <Badge tone={tag === "待复核" ? "warning" : "info"}>
              {tag}
            </Badge>
          )}
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(o,{defaultValue:["稳定","待复核","内部文档"],renderTag:n=>a.jsx(At,{tone:n==="待复核"?"warning":"info",children:n}),width:"min(100%, 34rem)"})},{title:"状态",code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:a.jsxs(st,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{defaultValue:["只读"],readOnly:!0}),a.jsx(o,{defaultValue:["不可编辑"],disabled:!0}),a.jsx(o,{defaultValue:["错误标签"],invalid:!0})]})}],props:[{name:"value",type:"Array<string>",description:"受控标签值。"},{name:"defaultValue",type:"Array<string>",description:"默认标签值。"},{name:"inputValue",type:"string",description:"受控输入框内容。"},{name:"defaultInputValue",type:"string",description:"默认输入框内容。"},{name:"name",type:"string",description:"表单字段名。传入后会为每个标签渲染 hidden input。"},{name:"size",type:'"sm" | "md" | "lg"',description:"组件尺寸。"},{name:"variant",type:'"outline" | "soft"',description:"视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"组件宽度。"},{name:"placeholder",type:"string",description:"空标签时的占位提示。"},{name:"disabled",type:"boolean",description:"禁用组件。"},{name:"readOnly",type:"boolean",description:"只读展示标签，不允许新增或删除。"},{name:"invalid",type:"boolean",description:"错误状态。"},{name:"clearable",type:"boolean",description:"是否展示清空按钮。"},{name:"maxTags",type:"number",description:"最多允许的标签数量。"},{name:"allowDuplicates",type:"boolean",description:"是否允许重复标签。"},{name:"commitOnBlur",type:"boolean",description:"失焦时是否提交当前输入内容。"},{name:"separators",type:"Array<string>",description:"提交标签的按键或字符，默认 Enter 和英文逗号。"},{name:"suggestions",type:"Array<string>",description:"建议标签列表。"},{name:"maxSuggestions",type:"number",description:"最多展示的建议项数量。"},{name:"emptySuggestion",type:"ReactNode",description:"没有建议项时展示的内容。"},{name:"renderTag",type:"(tag: string, context: TagInputRenderContext) => ReactNode",description:"自定义标签渲染。"},{name:"normalizeTag",type:"(tag: string) => string",description:"提交前规范化标签内容。"},{name:"validateTag",type:"(tag: string, tags: Array<string>) => boolean | string",description:"自定义标签校验。"},{name:"onValueChange",type:"(tags: Array<string>) => void",description:"标签变化回调。"},{name:"onInputValueChange",type:"(value: string) => void",description:"输入框内容变化回调。"},{name:"onTagReject",type:'(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',description:"标签被拒绝时触发。"}]});export{Pt as default};
