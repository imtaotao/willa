import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{x as i}from"./react-icons.esm-mVdwEXuX.js";import{H as a}from"./src-D2lZkBJ2.js";import{t as o}from"./Button-O1aY2iqB.js";import{t as s}from"./Stack-DwlHdG-i.js";import"./index-B2UoUlCX.js";import"./style-B00R6KjV.js";import{t as c}from"./defineDoc-Cid5xIoZ.js";import{t as l}from"./Tag-R3pz2yYt.js";import"./style-aOUeSybD.js";var u=n(e()),d=n(r()),f=t(),ee=[`Enter`,`,`],p=(0,u.forwardRef)((e,t)=>{let{value:n,defaultValue:r=[],inputValue:o,defaultInputValue:s=``,name:c,size:p=`md`,variant:g=`outline`,width:_,placeholder:v=`输入后按 Enter 添加`,disabled:y=!1,readOnly:b=!1,invalid:x=!1,clearable:S=!0,maxTags:C,allowDuplicates:w=!1,commitOnBlur:ie=!0,separators:T=ee,suggestions:E=[],maxSuggestions:D=8,emptySuggestion:O,renderTag:k,normalizeTag:A=m,validateTag:j,onValueChange:ae,onInputValueChange:oe,onTagReject:M,className:se,style:ce,id:le,onBlur:ue,onFocus:de,onKeyDown:N,onPaste:P,...fe}=e,pe=(0,u.useId)(),F=le??pe,[I,L]=a({value:n,defaultValue:r,onChange:ae}),[R,z]=a({value:o,defaultValue:s,onChange:oe}),[me,B]=(0,u.useState)(!1),[V,H]=(0,u.useState)(0),U=!y&&!b,he=S&&U&&I.length>0,W=C===void 0||I.length<C,G=(0,u.useMemo)(()=>re({allowDuplicates:w,inputValue:R,maxSuggestions:D,suggestions:E,tags:I}),[w,R,I,D,E]),K=me&&U&&(G.length>0||!!O),ge={...ce,..._===void 0?void 0:{width:_}},q=e=>{L(e)},J=e=>{z(e)},Y=(e,t)=>{M?.(e,t)},X=e=>{let t=A(e);if(!t)return Y(e,`empty`),!1;if(!w&&I.includes(t))return Y(t,`duplicate`),!1;if(!W)return Y(t,`max`),!1;let n=j?.(t,I);return n===!1||typeof n==`string`?(Y(t,`invalid`),!1):(q([...I,t]),J(``),H(0),!0)},Z=()=>R.trim()?X(R):!1,_e=e=>{let t=I;for(let n of e){let e=A(n);if(!e){Y(n,`empty`);continue}if(!w&&t.includes(e)){Y(e,`duplicate`);continue}if(C!==void 0&&t.length>=C){Y(e,`max`);continue}let r=j?.(e,t);if(r===!1||typeof r==`string`){Y(e,`invalid`);continue}t=[...t,e]}t!==I&&(q(t),J(``),H(0))},Q=e=>{U&&q(I.filter((t,n)=>n!==e))},ve=()=>{U&&q([])},$=e=>{X(e)},ye=e=>{if(y||b){N?.(e);return}if(K&&e.key===`ArrowDown`){e.preventDefault(),H(e=>Math.min(e+1,G.length-1));return}if(K&&e.key===`ArrowUp`){e.preventDefault(),H(e=>Math.max(e-1,0));return}if(K&&e.key===`Enter`&&G[V]){e.preventDefault(),$(G[V]);return}if(ne(e,T)){e.preventDefault(),Z();return}e.key===`Backspace`&&!R&&Q(I.length-1),N?.(e)},be=e=>{if(!U){P?.(e);return}let t=h(e.clipboardData.getData(`text`),T).filter(Boolean);if(t.length>1){e.preventDefault(),_e(t);return}P?.(e)},xe=e=>{e.currentTarget.contains(e.relatedTarget)||(B(!1),ie&&U&&Z()),ue?.(e)},Se=e=>{B(!0),de?.(e)};return(0,f.jsxs)(`div`,{...fe,className:(0,d.default)(`willa-tag-input`,`willa-tag-input--${p}`,`willa-tag-input--${g}`,y&&`willa-tag-input--disabled`,b&&`willa-tag-input--readonly`,x&&`willa-tag-input--invalid`,se),style:ge,"aria-disabled":y||void 0,onBlur:xe,onFocus:Se,children:[(0,f.jsxs)(`div`,{className:`willa-tag-input__control`,onClick:te,children:[I.map((e,t)=>{let n=c?(0,f.jsx)(`input`,{type:`hidden`,name:c,value:e,readOnly:!0}):null;return k?(0,f.jsxs)(u.Fragment,{children:[(0,f.jsx)(`span`,{className:`willa-tag-input__custom-tag`,children:k(e,{index:t,disabled:y,readOnly:b,onRemove:()=>Q(t)})}),n]},`${e}-${t}`):(0,f.jsxs)(u.Fragment,{children:[(0,f.jsx)(l,{className:`willa-tag-input__tag`,size:p===`lg`?`md`:p,shape:`pill`,close:U?{ariaLabel:`移除 ${e}`,onClose:()=>Q(t)}:!1,children:e}),n]},`${e}-${t}`)}),(0,f.jsx)(`input`,{ref:t,id:F,className:`willa-tag-input__input`,value:R,placeholder:I.length===0?v:void 0,disabled:y,readOnly:b||!W,"aria-invalid":x||void 0,"aria-autocomplete":E.length>0?`list`:void 0,"aria-expanded":K||void 0,"aria-controls":K?`${F}-suggestions`:void 0,onChange:e=>J(e.target.value),onKeyDown:ye,onPaste:be}),he?(0,f.jsx)(`button`,{className:`willa-tag-input__clear`,type:`button`,"aria-label":`清空标签`,onClick:e=>{e.stopPropagation(),ve()},children:(0,f.jsx)(i,{"aria-hidden":`true`})}):null]}),K?(0,f.jsx)(`div`,{className:`willa-tag-input__suggestions`,id:`${F}-suggestions`,role:`listbox`,children:G.length>0?G.map((e,t)=>(0,f.jsx)(`button`,{className:(0,d.default)(`willa-tag-input__suggestion`,t===V&&`willa-tag-input__suggestion--active`),type:`button`,role:`option`,"aria-selected":t===V,onMouseDown:t=>{t.preventDefault(),$(e)},children:e},e)):O}):null]})});p.displayName=`TagInput`;var te=e=>{e.currentTarget.querySelector(`input:not([type='hidden'])`)?.focus()},m=e=>e.trim(),ne=(e,t)=>e.nativeEvent.isComposing?!1:t.includes(e.key),h=(e,t)=>{let n=t.filter(e=>e.length===1).map(g),r=RegExp(`[\\n\\r\\t${n.join(``)}]+`,`g`);return e.split(r).map(e=>e.trim())},g=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),re=e=>{let{allowDuplicates:t,inputValue:n,maxSuggestions:r,suggestions:i,tags:a}=e,o=n.trim().toLowerCase();return i.filter(e=>!t&&a.includes(e)?!1:o?e.toLowerCase().includes(o):!0).slice(0,r)},_=[`AI 产品`,`文档站`,`表单`,`移动端`,`主题变量`,`上传`,`批量操作`,`日历`],v=c({id:`tag-input`,name:`TagInput`,category:`form`,packageName:`willa/TagInput`,description:`用于输入、编辑和提交多个文本标签的表单组件。`,imports:[{name:`Button`,from:`willa/Button`},{name:`Stack`,from:`willa/Stack`},{name:`Tag`,from:`willa/Tag`},{name:`TagInput`,from:`willa/TagInput`}],css:`willa/TagInput.css`,demo:{name:`TagInput`,component:p,props:{defaultValue:[`AI 产品`,`文档站`],suggestions:_,placeholder:`输入标签后按 Enter`,width:`min(100%, 34rem)`}},code:`
    import { TagInput } from "willa/TagInput";
    import "willa/TagInput.css";

    <TagInput
      defaultValue={["AI 产品", "文档站"]}
      suggestions={["AI 产品", "文档站", "表单", "移动端"]}
      placeholder="输入标签后按 Enter"
      width="min(100%, 34rem)"
    />;
  `,sections:[{title:`建议项`,code:`
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
      `,content:(0,f.jsx)(p,{defaultValue:[`AI 产品`],suggestions:_,placeholder:`搜索或新增标签`,width:`min(100%, 34rem)`})},{title:`受控和校验`,code:`
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
      `,content:(0,f.jsx)(()=>{let[e,t]=(0,u.useState)([`AI 产品`,`主题变量`]);return(0,f.jsxs)(s,{gap:`sm`,style:{width:`min(100%, 34rem)`},children:[(0,f.jsx)(p,{value:e,invalid:e.length===0,placeholder:`至少添加一个标签`,suggestions:_,onValueChange:t}),(0,f.jsx)(o,{size:`sm`,variant:`soft`,onClick:()=>t([`移动端`]),children:`重置为移动端`})]})},{})},{title:`分隔符和粘贴`,code:`
        <TagInput
          defaultValue={["表单"]}
          separators={["Enter", ",", "，"]}
          placeholder="支持逗号、中文逗号和 Enter"
          width="min(100%, 34rem)"
        />;
      `,content:(0,f.jsx)(p,{defaultValue:[`表单`],separators:[`Enter`,`,`,`，`],placeholder:`支持逗号、中文逗号和 Enter`,width:`min(100%, 34rem)`})},{title:`数量限制`,code:`
        const suggestions = ["AI 产品", "文档站", "表单", "移动端"];

        <TagInput
          defaultValue={["AI 产品", "文档站"]}
          maxTags={3}
          suggestions={suggestions}
          placeholder="最多 3 个标签"
          width="min(100%, 34rem)"
        />;
      `,content:(0,f.jsx)(p,{defaultValue:[`AI 产品`,`文档站`],maxTags:3,suggestions:_,placeholder:`最多 3 个标签`,width:`min(100%, 34rem)`})},{title:`自定义标签`,code:`
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
      `,content:(0,f.jsx)(p,{defaultValue:[`稳定`,`待复核`,`内部文档`],renderTag:(e,t)=>(0,f.jsx)(l,{tone:e===`待复核`?`warning`:`info`,shape:`pill`,close:{ariaLabel:`移除 ${e}`,disabled:t.disabled||t.readOnly,onClose:t.onRemove},children:e}),width:`min(100%, 34rem)`})},{title:`状态`,code:`
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,content:(0,f.jsxs)(s,{gap:`sm`,style:{width:`min(100%, 34rem)`},children:[(0,f.jsx)(p,{defaultValue:[`只读`],readOnly:!0}),(0,f.jsx)(p,{defaultValue:[`不可编辑`],disabled:!0}),(0,f.jsx)(p,{defaultValue:[`错误标签`],invalid:!0})]})}],props:[{name:`value`,type:`Array<string>`,description:`受控标签值。`},{name:`defaultValue`,type:`Array<string>`,defaultValue:`[]`,description:`默认标签值。`},{name:`inputValue`,type:`string`,description:`受控输入框内容。`},{name:`defaultInputValue`,type:`string`,defaultValue:`""`,description:`默认输入框内容。`},{name:`name`,type:`string`,description:`表单字段名。传入后会为每个标签渲染 hidden input。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`组件尺寸。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`视觉类型。`},{name:`width`,type:`CSSProperties['width']`,description:`组件宽度。`},{name:`placeholder`,type:`string`,defaultValue:`"输入后按 Enter 添加"`,description:`空标签时的占位提示。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`禁用组件。`},{name:`readOnly`,type:`boolean`,defaultValue:`false`,description:`只读展示标签，不允许新增或删除。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`错误状态。`},{name:`clearable`,type:`boolean`,defaultValue:`true`,description:`是否展示清空按钮。`},{name:`maxTags`,type:`number`,description:`最多允许的标签数量。`},{name:`allowDuplicates`,type:`boolean`,defaultValue:`false`,description:`是否允许重复标签。`},{name:`commitOnBlur`,type:`boolean`,defaultValue:`true`,description:`失焦时是否提交当前输入内容。`},{name:`separators`,type:`Array<string>`,defaultValue:`defaultSeparators`,description:`提交标签的按键或字符，默认 Enter 和英文逗号。`},{name:`suggestions`,type:`Array<string>`,defaultValue:`[]`,description:`建议标签列表。`},{name:`maxSuggestions`,type:`number`,defaultValue:`8`,description:`最多展示的建议项数量。`},{name:`emptySuggestion`,type:`ReactNode`,description:`没有建议项时展示的内容。`},{name:`renderTag`,type:`(tag: string, context: TagInputRenderContext) => ReactNode`,description:`自定义标签渲染。`},{name:`normalizeTag`,type:`(tag: string) => string`,defaultValue:`defaultNormalizeTag`,description:`提交前规范化标签内容。`},{name:`validateTag`,type:`(tag: string, tags: Array<string>) => boolean | string`,description:`自定义标签校验。`},{name:`onValueChange`,type:`(tags: Array<string>) => void`,description:`标签变化回调。`},{name:`onInputValueChange`,type:`(value: string) => void`,description:`输入框内容变化回调。`},{name:`onTagReject`,type:`(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void`,description:`标签被拒绝时触发。`}]});export{v as default};