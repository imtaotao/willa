import{b2 as T,b5 as Z,b0 as a,E as ee,aN as L,aA as te,h as be}from"./index-MvDtKvGL.js";import{T as Se}from"./index-Bqffayqq.js";/* empty css              *//* empty css              */import{d as je}from"./defineDoc-BE2V2Usy.js";const Ce=["Enter",","],o=T.forwardRef((n,s)=>{const{value:p,defaultValue:V=[],inputValue:x,defaultInputValue:u="",name:v,size:S="md",variant:ae="outline",width:F,placeholder:ne="输入后按 Enter 添加",disabled:g=!1,readOnly:b=!1,invalid:P=!1,clearable:se=!0,maxTags:j,allowDuplicates:C=!1,commitOnBlur:le=!0,separators:q=Ce,suggestions:N=[],maxSuggestions:U=8,emptySuggestion:G,renderTag:D,normalizeTag:H=ke,validateTag:m,onValueChange:ie,onInputValueChange:oe,onTagReject:B,className:re,style:ue,id:de,onBlur:R,onFocus:$,onKeyDown:f,onPaste:h,...ce}=n,pe=T.useId(),O=de??pe,[i,ge]=Z({value:p,defaultValue:V,onChange:ie}),[y,me]=Z({value:x,defaultValue:u,onChange:oe}),[fe,J]=T.useState(!1),[A,k]=T.useState(0),d=!g&&!b,he=se&&d&&i.length>0,K=j===void 0||i.length<j,w=T.useMemo(()=>De({allowDuplicates:C,inputValue:y,maxSuggestions:U,suggestions:N,tags:i}),[C,y,i,U,N]),I=fe&&d&&(w.length>0||!!G),ye={...ue,...F===void 0?void 0:{width:F}},_=e=>{ge(e)},z=e=>{me(e)},r=(e,t)=>{B==null||B(e,t)},Q=e=>{const t=H(e);if(!t)return r(e,"empty"),!1;if(!C&&i.includes(t))return r(t,"duplicate"),!1;if(!K)return r(t,"max"),!1;const l=m==null?void 0:m(t,i);return l===!1||typeof l=="string"?(r(t,"invalid"),!1):(_([...i,t]),z(""),k(0),!0)},W=()=>y.trim()?Q(y):!1,we=e=>{let t=i;for(const l of e){const c=H(l);if(!c){r(l,"empty");continue}if(!C&&t.includes(c)){r(c,"duplicate");continue}if(j!==void 0&&t.length>=j){r(c,"max");continue}const Y=m==null?void 0:m(c,t);if(Y===!1||typeof Y=="string"){r(c,"invalid");continue}t=[...t,c]}t!==i&&(_(t),z(""),k(0))},M=e=>{d&&_(i.filter((t,l)=>l!==e))},Ie=()=>{d&&_([])},X=e=>{Q(e)},Te=e=>{if(g||b){f==null||f(e);return}if(I&&e.key==="ArrowDown"){e.preventDefault(),k(t=>Math.min(t+1,w.length-1));return}if(I&&e.key==="ArrowUp"){e.preventDefault(),k(t=>Math.max(t-1,0));return}if(I&&e.key==="Enter"&&w[A]){e.preventDefault(),X(w[A]);return}if(_e(e,q)){e.preventDefault(),W();return}e.key==="Backspace"&&!y&&M(i.length-1),f==null||f(e)},Ve=e=>{if(!d){h==null||h(e);return}const t=e.clipboardData.getData("text"),l=Ee(t,q).filter(Boolean);if(l.length>1){e.preventDefault(),we(l);return}h==null||h(e)},xe=e=>{e.currentTarget.contains(e.relatedTarget)||(J(!1),le&&d&&W()),R==null||R(e)},ve=e=>{J(!0),$==null||$(e)};return a.jsxs("div",{...ce,className:L("willa-tag-input",`willa-tag-input--${S}`,`willa-tag-input--${ae}`,g&&"willa-tag-input--disabled",b&&"willa-tag-input--readonly",P&&"willa-tag-input--invalid",re),style:ye,"aria-disabled":g||void 0,onBlur:xe,onFocus:ve,children:[a.jsxs("div",{className:"willa-tag-input__control",onClick:Ae,children:[i.map((e,t)=>a.jsxs("span",{className:L("willa-tag-input__tag",D&&"willa-tag-input__tag--custom"),children:[D?D(e,{index:t,disabled:g,readOnly:b,onRemove:()=>M(t)}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"willa-tag-input__tag-label",children:e}),d?a.jsx("button",{className:"willa-tag-input__remove",type:"button","aria-label":`移除 ${e}`,onClick:l=>{l.stopPropagation(),M(t)},children:a.jsx(ee,{"aria-hidden":"true"})}):null]}),v?a.jsx("input",{type:"hidden",name:v,value:e,readOnly:!0}):null]},`${e}-${t}`)),a.jsx("input",{ref:s,id:O,className:"willa-tag-input__input",value:y,placeholder:i.length===0?ne:void 0,disabled:g,readOnly:b||!K,"aria-invalid":P||void 0,"aria-autocomplete":N.length>0?"list":void 0,"aria-expanded":I||void 0,"aria-controls":I?`${O}-suggestions`:void 0,onChange:e=>z(e.target.value),onKeyDown:Te,onPaste:Ve}),he?a.jsx("button",{className:"willa-tag-input__clear",type:"button","aria-label":"清空标签",onClick:e=>{e.stopPropagation(),Ie()},children:a.jsx(ee,{"aria-hidden":"true"})}):null]}),I?a.jsx("div",{className:"willa-tag-input__suggestions",id:`${O}-suggestions`,role:"listbox",children:w.length>0?w.map((e,t)=>a.jsx("button",{className:L("willa-tag-input__suggestion",t===A&&"willa-tag-input__suggestion--active"),type:"button",role:"option","aria-selected":t===A,onMouseDown:l=>{l.preventDefault(),X(e)},children:e},e)):G}):null]})});o.displayName="TagInput";const Ae=n=>{const s=n.currentTarget.querySelector("input:not([type='hidden'])");s==null||s.focus()},ke=n=>n.trim(),_e=(n,s)=>n.nativeEvent.isComposing?!1:s.includes(n.key),Ee=(n,s)=>{const V=s.filter(u=>u.length===1).map(Ne),x=new RegExp(`[\\n\\r\\t${V.join("")}]+`,"g");return n.split(x).map(u=>u.trim())},Ne=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),De=n=>{const{allowDuplicates:s,inputValue:p,maxSuggestions:V,suggestions:x,tags:u}=n,v=p.trim().toLowerCase();return x.filter(S=>!s&&u.includes(S)?!1:v?S.toLowerCase().includes(v):!0).slice(0,V)},E=["AI 产品","文档站","表单","移动端","主题变量","上传","批量操作","日历"],Be=()=>{const[n,s]=T.useState(["AI 产品","主题变量"]),p=n.length===0;return a.jsxs(te,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{value:n,invalid:p,placeholder:"至少添加一个标签",suggestions:E,onValueChange:s}),a.jsx(be,{size:"sm",variant:"soft",onClick:()=>s(["移动端"]),children:"重置为移动端"})]})},Le=je({id:"tag-input",name:"TagInput",category:"form",packageName:"willa/TagInput",description:"用于输入、编辑和提交多个文本标签的表单组件。",imports:[{name:"Button",from:"willa/Button"},{name:"Stack",from:"willa/Stack"},{name:"Tag",from:"willa/Tag"},{name:"TagInput",from:"willa/TagInput"}],css:"willa/TagInput.css",demo:{name:"TagInput",component:o,props:{defaultValue:["AI 产品","文档站"],suggestions:E,placeholder:"输入标签后按 Enter",width:"min(100%, 34rem)"}},code:`
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
      `,content:a.jsx(o,{defaultValue:["AI 产品"],suggestions:E,placeholder:"搜索或新增标签",width:"min(100%, 34rem)"})},{title:"受控和校验",code:`
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
      `,content:a.jsx(Be,{})},{title:"分隔符和粘贴",code:`
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
      `,content:a.jsx(o,{defaultValue:["AI 产品","文档站"],maxTags:3,suggestions:E,placeholder:"最多 3 个标签",width:"min(100%, 34rem)"})},{title:"自定义标签",code:`
        <TagInput
          defaultValue={["稳定", "待复核", "内部文档"]}
          renderTag={(tag, context) => (
            <Tag
              tone={tag === "待复核" ? "warning" : "info"}
              shape="pill"
              close={{
                ariaLabel: \`移除 \${tag}\`,
                disabled: context.disabled || context.readOnly,
                onClose: context.onRemove,
              }}
            >
              {tag}
            </Tag>
          )}
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(o,{defaultValue:["稳定","待复核","内部文档"],renderTag:(n,s)=>a.jsx(Se,{tone:n==="待复核"?"warning":"info",shape:"pill",close:{ariaLabel:`移除 ${n}`,disabled:s.disabled||s.readOnly,onClose:s.onRemove},children:n}),width:"min(100%, 34rem)"})},{title:"状态",code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:a.jsxs(te,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{defaultValue:["只读"],readOnly:!0}),a.jsx(o,{defaultValue:["不可编辑"],disabled:!0}),a.jsx(o,{defaultValue:["错误标签"],invalid:!0})]})}],props:[{name:"value",type:"Array<string>",description:"受控标签值。"},{name:"defaultValue",type:"Array<string>",defaultValue:"[]",description:"默认标签值。"},{name:"inputValue",type:"string",description:"受控输入框内容。"},{name:"defaultInputValue",type:"string",defaultValue:'""',description:"默认输入框内容。"},{name:"name",type:"string",description:"表单字段名。传入后会为每个标签渲染 hidden input。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"组件尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"组件宽度。"},{name:"placeholder",type:"string",defaultValue:'"输入后按 Enter 添加"',description:"空标签时的占位提示。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用组件。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"只读展示标签，不允许新增或删除。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"错误状态。"},{name:"clearable",type:"boolean",defaultValue:"true",description:"是否展示清空按钮。"},{name:"maxTags",type:"number",description:"最多允许的标签数量。"},{name:"allowDuplicates",type:"boolean",defaultValue:"false",description:"是否允许重复标签。"},{name:"commitOnBlur",type:"boolean",defaultValue:"true",description:"失焦时是否提交当前输入内容。"},{name:"separators",type:"Array<string>",defaultValue:"defaultSeparators",description:"提交标签的按键或字符，默认 Enter 和英文逗号。"},{name:"suggestions",type:"Array<string>",defaultValue:"[]",description:"建议标签列表。"},{name:"maxSuggestions",type:"number",defaultValue:"8",description:"最多展示的建议项数量。"},{name:"emptySuggestion",type:"ReactNode",description:"没有建议项时展示的内容。"},{name:"renderTag",type:"(tag: string, context: TagInputRenderContext) => ReactNode",description:"自定义标签渲染。"},{name:"normalizeTag",type:"(tag: string) => string",defaultValue:"defaultNormalizeTag",description:"提交前规范化标签内容。"},{name:"validateTag",type:"(tag: string, tags: Array<string>) => boolean | string",description:"自定义标签校验。"},{name:"onValueChange",type:"(tags: Array<string>) => void",description:"标签变化回调。"},{name:"onInputValueChange",type:"(value: string) => void",description:"输入框内容变化回调。"},{name:"onTagReject",type:'(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',description:"标签被拒绝时触发。"}]});export{Le as default};
