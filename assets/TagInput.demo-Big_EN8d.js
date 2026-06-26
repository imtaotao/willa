import{b2 as u,b0 as a,E as ne,aN as P,aA as se,h as Ae}from"./index-CGgO7K0r.js";import{T as ke}from"./index-BHav86mg.js";/* empty css              *//* empty css              */import{d as _e}from"./defineDoc-D7sNTAm-.js";const Ce=["Enter",","],o=u.forwardRef((n,s)=>{const{value:d,defaultValue:x=[],inputValue:m,defaultInputValue:c="",name:v,size:S="md",variant:ie="outline",width:q,placeholder:le="输入后按 Enter 添加",disabled:f=!1,readOnly:b=!1,invalid:U=!1,clearable:oe=!0,maxTags:j,allowDuplicates:A=!1,commitOnBlur:re=!0,separators:G=Ce,suggestions:N=[],maxSuggestions:H=8,emptySuggestion:J,renderTag:D,normalizeTag:K=Ne,validateTag:h,onValueChange:B,onInputValueChange:R,onTagReject:$,className:ue,style:de,id:ce,onBlur:O,onFocus:z,onKeyDown:y,onPaste:w,...pe}=n,ge=u.useId(),M=ce??ge,Q=d!==void 0,W=m!==void 0,[me,fe]=u.useState(x),[he,ye]=u.useState(c),[we,X]=u.useState(!1),[k,_]=u.useState(0),l=Q?d:me,I=W?m:he,p=!f&&!b,Ie=oe&&p&&l.length>0,Y=j===void 0||l.length<j,T=u.useMemo(()=>$e({allowDuplicates:A,inputValue:I,maxSuggestions:H,suggestions:N,tags:l}),[A,I,l,H,N]),V=we&&p&&(T.length>0||!!J),Te={...de,...q===void 0?void 0:{width:q}},C=e=>{Q||fe(e),B==null||B(e)},L=e=>{W||ye(e),R==null||R(e)},r=(e,t)=>{$==null||$(e,t)},Z=e=>{const t=K(e);if(!t)return r(e,"empty"),!1;if(!A&&l.includes(t))return r(t,"duplicate"),!1;if(!Y)return r(t,"max"),!1;const i=h==null?void 0:h(t,l);return i===!1||typeof i=="string"?(r(t,"invalid"),!1):(C([...l,t]),L(""),_(0),!0)},ee=()=>I.trim()?Z(I):!1,Ve=e=>{let t=l;for(const i of e){const g=K(i);if(!g){r(i,"empty");continue}if(!A&&t.includes(g)){r(g,"duplicate");continue}if(j!==void 0&&t.length>=j){r(g,"max");continue}const ae=h==null?void 0:h(g,t);if(ae===!1||typeof ae=="string"){r(g,"invalid");continue}t=[...t,g]}t!==l&&(C(t),L(""),_(0))},F=e=>{p&&C(l.filter((t,i)=>i!==e))},xe=()=>{p&&C([])},te=e=>{Z(e)},ve=e=>{if(f||b){y==null||y(e);return}if(V&&e.key==="ArrowDown"){e.preventDefault(),_(t=>Math.min(t+1,T.length-1));return}if(V&&e.key==="ArrowUp"){e.preventDefault(),_(t=>Math.max(t-1,0));return}if(V&&e.key==="Enter"&&T[k]){e.preventDefault(),te(T[k]);return}if(De(e,G)){e.preventDefault(),ee();return}e.key==="Backspace"&&!I&&F(l.length-1),y==null||y(e)},be=e=>{if(!p){w==null||w(e);return}const t=e.clipboardData.getData("text"),i=Be(t,G).filter(Boolean);if(i.length>1){e.preventDefault(),Ve(i);return}w==null||w(e)},Se=e=>{e.currentTarget.contains(e.relatedTarget)||(X(!1),re&&p&&ee()),O==null||O(e)},je=e=>{X(!0),z==null||z(e)};return a.jsxs("div",{...pe,className:P("willa-tag-input",`willa-tag-input--${S}`,`willa-tag-input--${ie}`,f&&"willa-tag-input--disabled",b&&"willa-tag-input--readonly",U&&"willa-tag-input--invalid",ue),style:Te,"aria-disabled":f||void 0,onBlur:Se,onFocus:je,children:[a.jsxs("div",{className:"willa-tag-input__control",onClick:Ee,children:[l.map((e,t)=>a.jsxs("span",{className:P("willa-tag-input__tag",D&&"willa-tag-input__tag--custom"),children:[D?D(e,{index:t,disabled:f,readOnly:b,onRemove:()=>F(t)}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"willa-tag-input__tag-label",children:e}),p?a.jsx("button",{className:"willa-tag-input__remove",type:"button","aria-label":`移除 ${e}`,onClick:i=>{i.stopPropagation(),F(t)},children:a.jsx(ne,{"aria-hidden":"true"})}):null]}),v?a.jsx("input",{type:"hidden",name:v,value:e,readOnly:!0}):null]},`${e}-${t}`)),a.jsx("input",{ref:s,id:M,className:"willa-tag-input__input",value:I,placeholder:l.length===0?le:void 0,disabled:f,readOnly:b||!Y,"aria-invalid":U||void 0,"aria-autocomplete":N.length>0?"list":void 0,"aria-expanded":V||void 0,"aria-controls":V?`${M}-suggestions`:void 0,onChange:e=>L(e.target.value),onKeyDown:ve,onPaste:be}),Ie?a.jsx("button",{className:"willa-tag-input__clear",type:"button","aria-label":"清空标签",onClick:e=>{e.stopPropagation(),xe()},children:a.jsx(ne,{"aria-hidden":"true"})}):null]}),V?a.jsx("div",{className:"willa-tag-input__suggestions",id:`${M}-suggestions`,role:"listbox",children:T.length>0?T.map((e,t)=>a.jsx("button",{className:P("willa-tag-input__suggestion",t===k&&"willa-tag-input__suggestion--active"),type:"button",role:"option","aria-selected":t===k,onMouseDown:i=>{i.preventDefault(),te(e)},children:e},e)):J}):null]})});o.displayName="TagInput";const Ee=n=>{const s=n.currentTarget.querySelector("input:not([type='hidden'])");s==null||s.focus()},Ne=n=>n.trim(),De=(n,s)=>n.nativeEvent.isComposing?!1:s.includes(n.key),Be=(n,s)=>{const x=s.filter(c=>c.length===1).map(Re),m=new RegExp(`[\\n\\r\\t${x.join("")}]+`,"g");return n.split(m).map(c=>c.trim())},Re=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),$e=n=>{const{allowDuplicates:s,inputValue:d,maxSuggestions:x,suggestions:m,tags:c}=n,v=d.trim().toLowerCase();return m.filter(S=>!s&&c.includes(S)?!1:v?S.toLowerCase().includes(v):!0).slice(0,x)},E=["AI 产品","文档站","表单","移动端","主题变量","上传","批量操作","日历"],Oe=()=>{const[n,s]=u.useState(["AI 产品","主题变量"]),d=n.length===0;return a.jsxs(se,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{value:n,invalid:d,placeholder:"至少添加一个标签",suggestions:E,onValueChange:s}),a.jsx(Ae,{size:"sm",variant:"soft",onClick:()=>s(["移动端"]),children:"重置为移动端"})]})},qe=_e({id:"tag-input",name:"TagInput",category:"form",packageName:"willa/TagInput",description:"用于输入、编辑和提交多个文本标签的表单组件。",imports:[{name:"Button",from:"willa/Button"},{name:"Stack",from:"willa/Stack"},{name:"Tag",from:"willa/Tag"},{name:"TagInput",from:"willa/TagInput"}],css:"willa/TagInput.css",demo:{name:"TagInput",component:o,props:{defaultValue:["AI 产品","文档站"],suggestions:E,placeholder:"输入标签后按 Enter",width:"min(100%, 34rem)"}},code:`
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
      `,content:a.jsx(Oe,{})},{title:"分隔符和粘贴",code:`
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
      `,content:a.jsx(o,{defaultValue:["稳定","待复核","内部文档"],renderTag:(n,s)=>a.jsx(ke,{tone:n==="待复核"?"warning":"info",shape:"pill",close:{ariaLabel:`移除 ${n}`,disabled:s.disabled||s.readOnly,onClose:s.onRemove},children:n}),width:"min(100%, 34rem)"})},{title:"状态",code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:a.jsxs(se,{gap:"sm",style:{width:"min(100%, 34rem)"},children:[a.jsx(o,{defaultValue:["只读"],readOnly:!0}),a.jsx(o,{defaultValue:["不可编辑"],disabled:!0}),a.jsx(o,{defaultValue:["错误标签"],invalid:!0})]})}],props:[{name:"value",type:"Array<string>",description:"受控标签值。"},{name:"defaultValue",type:"Array<string>",defaultValue:"[]",description:"默认标签值。"},{name:"inputValue",type:"string",description:"受控输入框内容。"},{name:"defaultInputValue",type:"string",defaultValue:'""',description:"默认输入框内容。"},{name:"name",type:"string",description:"表单字段名。传入后会为每个标签渲染 hidden input。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"组件尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"视觉类型。"},{name:"width",type:"CSSProperties['width']",description:"组件宽度。"},{name:"placeholder",type:"string",defaultValue:'"输入后按 Enter 添加"',description:"空标签时的占位提示。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用组件。"},{name:"readOnly",type:"boolean",defaultValue:"false",description:"只读展示标签，不允许新增或删除。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"错误状态。"},{name:"clearable",type:"boolean",defaultValue:"true",description:"是否展示清空按钮。"},{name:"maxTags",type:"number",description:"最多允许的标签数量。"},{name:"allowDuplicates",type:"boolean",defaultValue:"false",description:"是否允许重复标签。"},{name:"commitOnBlur",type:"boolean",defaultValue:"true",description:"失焦时是否提交当前输入内容。"},{name:"separators",type:"Array<string>",defaultValue:"defaultSeparators",description:"提交标签的按键或字符，默认 Enter 和英文逗号。"},{name:"suggestions",type:"Array<string>",defaultValue:"[]",description:"建议标签列表。"},{name:"maxSuggestions",type:"number",defaultValue:"8",description:"最多展示的建议项数量。"},{name:"emptySuggestion",type:"ReactNode",description:"没有建议项时展示的内容。"},{name:"renderTag",type:"(tag: string, context: TagInputRenderContext) => ReactNode",description:"自定义标签渲染。"},{name:"normalizeTag",type:"(tag: string) => string",defaultValue:"defaultNormalizeTag",description:"提交前规范化标签内容。"},{name:"validateTag",type:"(tag: string, tags: Array<string>) => boolean | string",description:"自定义标签校验。"},{name:"onValueChange",type:"(tags: Array<string>) => void",description:"标签变化回调。"},{name:"onInputValueChange",type:"(value: string) => void",description:"输入框内容变化回调。"},{name:"onTagReject",type:'(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',description:"标签被拒绝时触发。"}]});export{qe as default};
