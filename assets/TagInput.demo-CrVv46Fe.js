import{b3 as u,b6 as Y,b1 as a,E as be,aN as Z,aA as ee,h as Se}from"./index-BjtE9AVd.js";import{T as te}from"./index-ZAK5Ve-s.js";/* empty css              *//* empty css              */import{d as je}from"./defineDoc-CWmZ2fbW.js";const Ce=["Enter",","],o=u.forwardRef((n,s)=>{const{value:g,defaultValue:x=[],inputValue:v,defaultInputValue:d="",name:b,size:m="md",variant:ae="outline",width:M,placeholder:ne="输入后按 Enter 添加",disabled:f=!1,readOnly:S=!1,invalid:L=!1,clearable:se=!0,maxTags:j,allowDuplicates:C=!1,commitOnBlur:le=!0,separators:F=Ce,suggestions:N=[],maxSuggestions:q=8,emptySuggestion:P,renderTag:U,normalizeTag:G=ke,validateTag:h,onValueChange:ie,onInputValueChange:oe,onTagReject:D,className:re,style:ue,id:de,onBlur:$,onFocus:B,onKeyDown:y,onPaste:I,...ce}=n,pe=u.useId(),R=de??pe,[i,ge]=Y({value:g,defaultValue:x,onChange:ie}),[w,me]=Y({value:v,defaultValue:d,onChange:oe}),[fe,H]=u.useState(!1),[A,k]=u.useState(0),c=!f&&!S,he=se&&c&&i.length>0,J=j===void 0||i.length<j,T=u.useMemo(()=>De({allowDuplicates:C,inputValue:w,maxSuggestions:q,suggestions:N,tags:i}),[C,w,i,q,N]),V=fe&&c&&(T.length>0||!!P),ye={...ue,...M===void 0?void 0:{width:M}},E=e=>{ge(e)},O=e=>{me(e)},r=(e,t)=>{D==null||D(e,t)},K=e=>{const t=G(e);if(!t)return r(e,"empty"),!1;if(!C&&i.includes(t))return r(t,"duplicate"),!1;if(!J)return r(t,"max"),!1;const l=h==null?void 0:h(t,i);return l===!1||typeof l=="string"?(r(t,"invalid"),!1):(E([...i,t]),O(""),k(0),!0)},Q=()=>w.trim()?K(w):!1,Ie=e=>{let t=i;for(const l of e){const p=G(l);if(!p){r(l,"empty");continue}if(!C&&t.includes(p)){r(p,"duplicate");continue}if(j!==void 0&&t.length>=j){r(p,"max");continue}const X=h==null?void 0:h(p,t);if(X===!1||typeof X=="string"){r(p,"invalid");continue}t=[...t,p]}t!==i&&(E(t),O(""),k(0))},z=e=>{c&&E(i.filter((t,l)=>l!==e))},we=()=>{c&&E([])},W=e=>{K(e)},Te=e=>{if(f||S){y==null||y(e);return}if(V&&e.key==="ArrowDown"){e.preventDefault(),k(t=>Math.min(t+1,T.length-1));return}if(V&&e.key==="ArrowUp"){e.preventDefault(),k(t=>Math.max(t-1,0));return}if(V&&e.key==="Enter"&&T[A]){e.preventDefault(),W(T[A]);return}if(Ee(e,F)){e.preventDefault(),Q();return}e.key==="Backspace"&&!w&&z(i.length-1),y==null||y(e)},Ve=e=>{if(!c){I==null||I(e);return}const t=e.clipboardData.getData("text"),l=_e(t,F).filter(Boolean);if(l.length>1){e.preventDefault(),Ie(l);return}I==null||I(e)},xe=e=>{e.currentTarget.contains(e.relatedTarget)||(H(!1),le&&c&&Q()),$==null||$(e)},ve=e=>{H(!0),B==null||B(e)};return a.jsxs("div",{...ce,className:Z("willa-tag-input",`willa-tag-input--${m}`,`willa-tag-input--${ae}`,f&&"willa-tag-input--disabled",S&&"willa-tag-input--readonly",L&&"willa-tag-input--invalid",re),style:ye,"aria-disabled":f||void 0,onBlur:xe,onFocus:ve,children:[a.jsxs("div",{className:"willa-tag-input__control",onClick:Ae,children:[i.map((e,t)=>{const l=b?a.jsx("input",{type:"hidden",name:b,value:e,readOnly:!0}):null;return U?a.jsxs(u.Fragment,{children:[a.jsx("span",{className:"willa-tag-input__custom-tag",children:U(e,{index:t,disabled:f,readOnly:S,onRemove:()=>z(t)})}),l]},`${e}-${t}`):a.jsxs(u.Fragment,{children:[a.jsx(te,{className:"willa-tag-input__tag",size:m==="lg"?"md":m,shape:"pill",close:c?{ariaLabel:`移除 ${e}`,onClose:()=>z(t)}:!1,children:e}),l]},`${e}-${t}`)}),a.jsx("input",{ref:s,id:R,className:"willa-tag-input__input",value:w,placeholder:i.length===0?ne:void 0,disabled:f,readOnly:S||!J,"aria-invalid":L||void 0,"aria-autocomplete":N.length>0?"list":void 0,"aria-expanded":V||void 0,"aria-controls":V?`${R}-suggestions`:void 0,onChange:e=>O(e.target.value),onKeyDown:Te,onPaste:Ve}),he?a.jsx("button",{className:"willa-tag-input__clear",type:"button","aria-label":"清空标签",onClick:e=>{e.stopPropagation(),we()},children:a.jsx(be,{"aria-hidden":"true"})}):null]}),V?a.jsx("div",{className:"willa-tag-input__suggestions",id:`${R}-suggestions`,role:"listbox",children:T.length>0?T.map((e,t)=>a.jsx("button",{className:Z("willa-tag-input__suggestion",t===A&&"willa-tag-input__suggestion--active"),type:"button",role:"option","aria-selected":t===A,onMouseDown:l=>{l.preventDefault(),W(e)},children:e},e)):P}):null]})});o.displayName="TagInput";const Ae=n=>{const s=n.currentTarget.querySelector("input:not([type='hidden'])");s==null||s.focus()},ke=n=>n.trim(),Ee=(n,s)=>n.nativeEvent.isComposing?!1:s.includes(n.key),_e=(n,s)=>{const x=s.filter(d=>d.length===1).map(Ne),v=new RegExp(`[\\n\\r\\t${x.join("")}]+`,"g");return n.split(v).map(d=>d.trim())},Ne=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),De=n=>{const{allowDuplicates:s,inputValue:g,maxSuggestions:x,suggestions:v,tags:d}=n,b=g.trim().toLowerCase();return v.filter(m=>!s&&d.includes(m)?!1:b?m.toLowerCase().includes(b):!0).slice(0,x)},_=["AI 产品","文档站","表单","移动端","主题变量","上传","批量操作","日历"],$e=()=>{const[n,s]=u.useState(["AI 产品","主题变量"]),g=n.length===0;return a.jsxs(ee,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{value:n,invalid:g,placeholder:"至少添加一个标签",suggestions:_,onValueChange:s}),a.jsx(Se,{size:"sm",variant:"soft",onClick:()=>s(["移动端"]),children:"重置为移动端"})]})},Le=je({id:"tag-input",name:"TagInput",category:"form",packageName:"willa/TagInput",description:"用于输入、编辑和提交多个文本标签的表单组件。",imports:[{name:"Button",from:"willa/Button"},{name:"Stack",from:"willa/Stack"},{name:"Tag",from:"willa/Tag"},{name:"TagInput",from:"willa/TagInput"}],css:"willa/TagInput.css",demo:{name:"TagInput",component:o,props:{defaultValue:["AI 产品","文档站"],suggestions:_,placeholder:"输入标签后按 Enter",width:"min(100%, 34rem)"}},code:`
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
      `,content:a.jsx(o,{defaultValue:["AI 产品"],suggestions:_,placeholder:"搜索或新增标签",width:"min(100%, 34rem)"})},{title:"受控和校验",code:`
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
      `,content:a.jsx($e,{})},{title:"分隔符和粘贴",code:`
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
      `,content:a.jsx(o,{defaultValue:["AI 产品","文档站"],maxTags:3,suggestions:_,placeholder:"最多 3 个标签",width:"min(100%, 34rem)"})},{title:"自定义标签",code:`
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
      `,content:a.jsx(o,{defaultValue:["稳定","待复核","内部文档"],renderTag:(n,s)=>a.jsx(te,{tone:n==="待复核"?"warning":"info",shape:"pill",close:{ariaLabel:`移除 ${n}`,disabled:s.disabled||s.readOnly,onClose:s.onRemove},children:n}),width:"min(100%, 34rem)"})},{title:"状态",code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:a.jsxs(ee,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{defaultValue:["只读"],readOnly:!0}),a.jsx(o,{defaultValue:["不可编辑"],disabled:!0}),a.jsx(o,{defaultValue:["错误标签"],invalid:!0})]})}],props:[{name:"value",type:"Array<string>",description:"受控标签值。"},{name:"defaultValue",type:"Array<string>",defaultValue:"[]",description:"默认标签值。"},{name:"inputValue",type:"string",description:"受控输入框内容。"},{name:"defaultInputValue",type:"string",defaultValue:'""',description:"默认输入框内容。"},{name:"name",type:"string",description:"表单字段名。传入后会为每个标签渲染 hidden input。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"组件尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"组件宽度。"},{name:"placeholder",type:"string",defaultValue:'"输入后按 Enter 添加"',description:"空标签时的占位提示。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用组件。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"只读展示标签，不允许新增或删除。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"错误状态。"},{name:"clearable",type:"boolean",defaultValue:"true",description:"是否展示清空按钮。"},{name:"maxTags",type:"number",description:"最多允许的标签数量。"},{name:"allowDuplicates",type:"boolean",defaultValue:"false",description:"是否允许重复标签。"},{name:"commitOnBlur",type:"boolean",defaultValue:"true",description:"失焦时是否提交当前输入内容。"},{name:"separators",type:"Array<string>",defaultValue:"defaultSeparators",description:"提交标签的按键或字符，默认 Enter 和英文逗号。"},{name:"suggestions",type:"Array<string>",defaultValue:"[]",description:"建议标签列表。"},{name:"maxSuggestions",type:"number",defaultValue:"8",description:"最多展示的建议项数量。"},{name:"emptySuggestion",type:"ReactNode",description:"没有建议项时展示的内容。"},{name:"renderTag",type:"(tag: string, context: TagInputRenderContext) => ReactNode",description:"自定义标签渲染。"},{name:"normalizeTag",type:"(tag: string) => string",defaultValue:"defaultNormalizeTag",description:"提交前规范化标签内容。"},{name:"validateTag",type:"(tag: string, tags: Array<string>) => boolean | string",description:"自定义标签校验。"},{name:"onValueChange",type:"(tags: Array<string>) => void",description:"标签变化回调。"},{name:"onInputValueChange",type:"(value: string) => void",description:"输入框内容变化回调。"},{name:"onTagReject",type:'(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',description:"标签被拒绝时触发。"}]});export{Le as default};
