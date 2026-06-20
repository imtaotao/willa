import{a_ as u,aY as a,D as ne,aJ as q,B as Ae,ax as se,i as _e}from"./index-DcUYsctR.js";/* empty css              */import{d as ke}from"./defineDoc-Bnz_Om-_.js";const Be=["Enter",","],r=u.forwardRef((n,s)=>{const{value:d,defaultValue:T=[],inputValue:m,defaultInputValue:c="",name:v,size:b="md",variant:ie="outline",width:L,placeholder:le="输入后按 Enter 添加",disabled:f=!1,readOnly:S=!1,invalid:J=!1,clearable:re=!0,maxTags:j,allowDuplicates:A=!1,commitOnBlur:oe=!0,separators:U=Be,suggestions:E=[],maxSuggestions:Y=8,emptySuggestion:G,renderTag:N,normalizeTag:H=Ee,validateTag:h,onValueChange:D,onInputValueChange:R,onTagReject:$,className:ue,style:de,id:ce,onBlur:O,onFocus:z,onKeyDown:y,onPaste:w,...pe}=n,ge=u.useId(),M=ce??ge,K=d!==void 0,Q=m!==void 0,[me,fe]=u.useState(T),[he,ye]=u.useState(c),[we,W]=u.useState(!1),[_,k]=u.useState(0),l=K?d:me,I=Q?m:he,p=!f&&!S,Ie=re&&p&&l.length>0,X=j===void 0||l.length<j,V=u.useMemo(()=>$e({allowDuplicates:A,inputValue:I,maxSuggestions:Y,suggestions:E,tags:l}),[A,I,l,Y,E]),x=we&&p&&(V.length>0||!!G),Ve={...de,...L===void 0?void 0:{width:L}},B=e=>{K||fe(e),D==null||D(e)},F=e=>{Q||ye(e),R==null||R(e)},o=(e,t)=>{$==null||$(e,t)},Z=e=>{const t=H(e);if(!t)return o(e,"empty"),!1;if(!A&&l.includes(t))return o(t,"duplicate"),!1;if(!X)return o(t,"max"),!1;const i=h==null?void 0:h(t,l);return i===!1||typeof i=="string"?(o(t,"invalid"),!1):(B([...l,t]),F(""),k(0),!0)},ee=()=>I.trim()?Z(I):!1,xe=e=>{let t=l;for(const i of e){const g=H(i);if(!g){o(i,"empty");continue}if(!A&&t.includes(g)){o(g,"duplicate");continue}if(j!==void 0&&t.length>=j){o(g,"max");continue}const ae=h==null?void 0:h(g,t);if(ae===!1||typeof ae=="string"){o(g,"invalid");continue}t=[...t,g]}t!==l&&(B(t),F(""),k(0))},P=e=>{p&&B(l.filter((t,i)=>i!==e))},Te=()=>{p&&B([])},te=e=>{Z(e)},ve=e=>{if(f||S){y==null||y(e);return}if(x&&e.key==="ArrowDown"){e.preventDefault(),k(t=>Math.min(t+1,V.length-1));return}if(x&&e.key==="ArrowUp"){e.preventDefault(),k(t=>Math.max(t-1,0));return}if(x&&e.key==="Enter"&&V[_]){e.preventDefault(),te(V[_]);return}if(Ne(e,U)){e.preventDefault(),ee();return}e.key==="Backspace"&&!I&&P(l.length-1),y==null||y(e)},Se=e=>{if(!p){w==null||w(e);return}const t=e.clipboardData.getData("text"),i=De(t,U).filter(Boolean);if(i.length>1){e.preventDefault(),xe(i);return}w==null||w(e)},be=e=>{e.currentTarget.contains(e.relatedTarget)||(W(!1),oe&&p&&ee()),O==null||O(e)},je=e=>{W(!0),z==null||z(e)};return a.jsxs("div",{...pe,className:q("willa-tag-input",`willa-tag-input--${b}`,`willa-tag-input--${ie}`,f&&"willa-tag-input--disabled",S&&"willa-tag-input--readonly",J&&"willa-tag-input--invalid",ue),style:Ve,"aria-disabled":f||void 0,onBlur:be,onFocus:je,children:[a.jsxs("div",{className:"willa-tag-input__control",onClick:Ce,children:[l.map((e,t)=>a.jsxs("span",{className:q("willa-tag-input__tag",N&&"willa-tag-input__tag--custom"),children:[N?N(e,{index:t,disabled:f,readOnly:S,onRemove:()=>P(t)}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"willa-tag-input__tag-label",children:e}),p?a.jsx("button",{className:"willa-tag-input__remove",type:"button","aria-label":`移除 ${e}`,onClick:i=>{i.stopPropagation(),P(t)},children:a.jsx(ne,{"aria-hidden":"true"})}):null]}),v?a.jsx("input",{type:"hidden",name:v,value:e,readOnly:!0}):null]},`${e}-${t}`)),a.jsx("input",{ref:s,id:M,className:"willa-tag-input__input",value:I,placeholder:l.length===0?le:void 0,disabled:f,readOnly:S||!X,"aria-invalid":J||void 0,"aria-autocomplete":E.length>0?"list":void 0,"aria-expanded":x||void 0,"aria-controls":x?`${M}-suggestions`:void 0,onChange:e=>F(e.target.value),onKeyDown:ve,onPaste:Se}),Ie?a.jsx("button",{className:"willa-tag-input__clear",type:"button","aria-label":"清空标签",onClick:e=>{e.stopPropagation(),Te()},children:a.jsx(ne,{"aria-hidden":"true"})}):null]}),x?a.jsx("div",{className:"willa-tag-input__suggestions",id:`${M}-suggestions`,role:"listbox",children:V.length>0?V.map((e,t)=>a.jsx("button",{className:q("willa-tag-input__suggestion",t===_&&"willa-tag-input__suggestion--active"),type:"button",role:"option","aria-selected":t===_,onMouseDown:i=>{i.preventDefault(),te(e)},children:e},e)):G}):null]})});r.displayName="TagInput";const Ce=n=>{const s=n.currentTarget.querySelector("input:not([type='hidden'])");s==null||s.focus()},Ee=n=>n.trim(),Ne=(n,s)=>n.nativeEvent.isComposing?!1:s.includes(n.key),De=(n,s)=>{const T=s.filter(c=>c.length===1).map(Re),m=new RegExp(`[\\n\\r\\t${T.join("")}]+`,"g");return n.split(m).map(c=>c.trim())},Re=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),$e=n=>{const{allowDuplicates:s,inputValue:d,maxSuggestions:T,suggestions:m,tags:c}=n,v=d.trim().toLowerCase();return m.filter(b=>!s&&c.includes(b)?!1:v?b.toLowerCase().includes(v):!0).slice(0,T)},C=["AI 产品","文档站","表单","移动端","主题变量","上传","批量操作","日历"],Oe=()=>{const[n,s]=u.useState(["AI 产品","主题变量"]),d=n.length===0;return a.jsxs(se,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(r,{value:n,invalid:d,placeholder:"至少添加一个标签",suggestions:C,onValueChange:s}),a.jsx(_e,{size:"sm",variant:"soft",onClick:()=>s(["移动端"]),children:"重置为移动端"})]})},Pe=ke({id:"tag-input",name:"TagInput",category:"form",packageName:"willa/TagInput",description:"用于输入、编辑和提交多个文本标签的表单组件。",imports:[{name:"Badge",from:"willa/Badge"},{name:"Button",from:"willa/Button"},{name:"Stack",from:"willa/Stack"},{name:"TagInput",from:"willa/TagInput"}],css:"willa/TagInput.css",demo:{name:"TagInput",component:r,props:{defaultValue:["AI 产品","文档站"],suggestions:C,placeholder:"输入标签后按 Enter",width:"min(100%, 34rem)"}},code:`
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
      `,content:a.jsx(r,{defaultValue:["AI 产品"],suggestions:C,placeholder:"搜索或新增标签",width:"min(100%, 34rem)"})},{title:"受控和校验",code:`
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
      `,content:a.jsx(Oe,{})},{title:"分隔符和粘贴",code:`
        <TagInput
          defaultValue={["表单"]}
          separators={["Enter", ",", "，"]}
          placeholder="支持逗号、中文逗号和 Enter"
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(r,{defaultValue:["表单"],separators:["Enter",",","，"],placeholder:"支持逗号、中文逗号和 Enter",width:"min(100%, 34rem)"})},{title:"数量限制",code:`
        const suggestions = ["AI 产品", "文档站", "表单", "移动端"];

        <TagInput
          defaultValue={["AI 产品", "文档站"]}
          maxTags={3}
          suggestions={suggestions}
          placeholder="最多 3 个标签"
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(r,{defaultValue:["AI 产品","文档站"],maxTags:3,suggestions:C,placeholder:"最多 3 个标签",width:"min(100%, 34rem)"})},{title:"自定义标签",code:`
        <TagInput
          defaultValue={["稳定", "待复核", "内部文档"]}
          renderTag={(tag) => (
            <Badge tone={tag === "待复核" ? "warning" : "info"}>
              {tag}
            </Badge>
          )}
          width="min(100%, 34rem)"
        />;
      `,content:a.jsx(r,{defaultValue:["稳定","待复核","内部文档"],renderTag:n=>a.jsx(Ae,{tone:n==="待复核"?"warning":"info",children:n}),width:"min(100%, 34rem)"})},{title:"状态",code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:a.jsxs(se,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(r,{defaultValue:["只读"],readOnly:!0}),a.jsx(r,{defaultValue:["不可编辑"],disabled:!0}),a.jsx(r,{defaultValue:["错误标签"],invalid:!0})]})}],props:[{name:"value",type:"Array<string>",description:"受控标签值。"},{name:"defaultValue",type:"Array<string>",defaultValue:"[]",description:"默认标签值。"},{name:"inputValue",type:"string",description:"受控输入框内容。"},{name:"defaultInputValue",type:"string",defaultValue:'""',description:"默认输入框内容。"},{name:"name",type:"string",description:"表单字段名。传入后会为每个标签渲染 hidden input。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"组件尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"组件宽度。"},{name:"placeholder",type:"string",defaultValue:'"输入后按 Enter 添加"',description:"空标签时的占位提示。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用组件。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"只读展示标签，不允许新增或删除。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"错误状态。"},{name:"clearable",type:"boolean",defaultValue:"true",description:"是否展示清空按钮。"},{name:"maxTags",type:"number",description:"最多允许的标签数量。"},{name:"allowDuplicates",type:"boolean",defaultValue:"false",description:"是否允许重复标签。"},{name:"commitOnBlur",type:"boolean",defaultValue:"true",description:"失焦时是否提交当前输入内容。"},{name:"separators",type:"Array<string>",defaultValue:"defaultSeparators",description:"提交标签的按键或字符，默认 Enter 和英文逗号。"},{name:"suggestions",type:"Array<string>",defaultValue:"[]",description:"建议标签列表。"},{name:"maxSuggestions",type:"number",defaultValue:"8",description:"最多展示的建议项数量。"},{name:"emptySuggestion",type:"ReactNode",description:"没有建议项时展示的内容。"},{name:"renderTag",type:"(tag: string, context: TagInputRenderContext) => ReactNode",description:"自定义标签渲染。"},{name:"normalizeTag",type:"(tag: string) => string",defaultValue:"defaultNormalizeTag",description:"提交前规范化标签内容。"},{name:"validateTag",type:"(tag: string, tags: Array<string>) => boolean | string",description:"自定义标签校验。"},{name:"onValueChange",type:"(tags: Array<string>) => void",description:"标签变化回调。"},{name:"onInputValueChange",type:"(value: string) => void",description:"输入框内容变化回调。"},{name:"onTagReject",type:'(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',description:"标签被拒绝时触发。"}]});export{Pe as default};
