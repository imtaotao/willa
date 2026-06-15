import{aA as m,ay as t,am as V,L as H,c as g,B as M}from"./index-DBsCKa5b.js";import{A as T}from"./index-j0wNnR1u.js";import{I as G}from"./index-DqRtx5VZ.js";/* empty css              *//* empty css              */import{d as _}from"./defineDoc-CeA5kaJR.js";function i(n){const{value:e,defaultValue:a="",onValueChange:o,onSubmit:s,placeholder:c="写下你的评论...",submitLabel:B="发布",disabled:C=!1,loading:u=!1,minRows:b=3,maxLength:p,autoFocus:L=!1,avatarSrc:j,avatarName:l,quote:d,mentionLabel:k="@",onMentionClick:h,actions:w,footer:f,className:q,textareaProps:R}=n,y=e!==void 0,[z,A]=m.useState(a),x=y?e:z,I=x.trim(),N=v=>{y||A(v),o==null||o(v)},E=()=>{N("")},P=(v,K)=>{I&&(s==null||s(I,{clear:E}))},S=!!(j||l),F=!!(h||w);return t.jsx(G,{...R,className:V("willa-comment-input",S&&"willa-comment-input--with-author",u&&"willa-comment-input--loading",q),slotClassNames:{actions:"willa-comment-input-actions",control:"willa-comment-input-control",footer:"willa-comment-input-footer",meta:"willa-comment-input-extra",submit:"willa-comment-input-submit"},autoFocus:L,autoResize:!1,minRows:b,maxRows:b,maxLength:p,submitShortcut:"mod-enter",loading:u,beforeInput:t.jsxs(t.Fragment,{children:[S?t.jsxs("div",{className:"willa-comment-input-author",children:[t.jsx(T,{className:"willa-comment-input-avatar",src:j,name:l??"Comment Author",alt:l??"Comment Author",size:"sm"}),t.jsx("span",{className:"willa-comment-input-author-name",children:l??"评论者"})]}):null,d?t.jsx("div",{className:"willa-comment-input-quote",children:t.jsxs("div",{className:"willa-comment-input-quote-content",children:[t.jsx("span",{className:"willa-comment-input-quote-mark","aria-hidden":"true",children:"“"}),t.jsxs("span",{className:"willa-comment-input-quote-author",children:["@",d.author]}),d.content,t.jsx("span",{className:"willa-comment-input-quote-mark","aria-hidden":"true",children:"”"})]})}):null]}),footer:f?t.jsx("span",{children:f}):p?t.jsxs("span",{children:[x.length,"/",p]}):t.jsx("span",{children:"⌘ Enter 发布"}),actions:F?t.jsxs(t.Fragment,{children:[h?t.jsx(D,{"aria-label":"提及用户",onClick:h,disabled:C||u,children:k}):null,w]}):null,submitLabel:B,value:x,placeholder:c,disabled:C,onValueChange:N,onSubmit:P})}const D=n=>{const{className:e,type:a="button",...o}=n;return t.jsx("button",{...o,type:a,className:V("willa-comment-input-tool",e)})},r={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},Q=()=>{const[n,e]=m.useState(""),[a,o]=m.useState("");return t.jsxs("div",{style:r,children:[t.jsx(i,{value:n,onValueChange:e,maxLength:180,onSubmit:(s,c)=>{o(s),c.clear()}}),a?t.jsxs(M,{tone:"success",children:["已发布：",a]}):null]})},J=()=>{const[n,e]=m.useState("");return t.jsx("div",{style:r,children:t.jsx(i,{placeholder:"回复这条评论...",quote:{author:"产品设计",content:"这个输入区需要支持评论扩展能力。"},onMentionClick:()=>e("打开成员选择面板"),actions:t.jsx(g,{size:"sm",variant:"ghost",onClick:()=>e("打开业务自己的表情包面板"),children:"表情"}),footer:n||"点击 @ 或表情按钮接入业务面板"})})},$=_({id:"comment-input",name:"CommentInput",category:"content",packageName:"willa/CommentInput",description:"用于评论、批注和反馈场景的轻量输入组件。",imports:[{name:"CommentInput",from:"willa/CommentInput"}],css:"willa/CommentInput.css",demo:{name:"CommentInputPreview",component:Q},code:`
    import { useState } from "react";
    import { CommentInput } from "willa/CommentInput";
    import "willa/CommentInput.css";

    const Demo = () => {
      const [value, setValue] = useState("");

      return (
        <CommentInput
          value={value}
          onValueChange={setValue}
          maxLength={180}
          onSubmit={(nextValue, context) => {
            console.log(nextValue);
            context.clear();
          }}
        />
      );
    };
  `,sections:[{title:"附加操作",code:`
        <CommentInput
          placeholder="写下批注意见..."
          actions={
            <Group gap="xs">
              <Button size="sm" variant="ghost">
                引用段落
              </Button>
              <Button size="sm" variant="ghost">
                添加截图
              </Button>
            </Group>
          }
          footer="支持 ⌘ Enter 快捷发布"
        />;
      `,content:t.jsx("div",{style:r,children:t.jsx(i,{placeholder:"写下批注意见...",actions:t.jsxs(H,{gap:"xs",children:[t.jsx(g,{size:"sm",variant:"ghost",children:"引用段落"}),t.jsx(g,{size:"sm",variant:"ghost",children:"添加截图"})]}),footer:"支持 ⌘ Enter 快捷发布"})})},{title:"提及、表情和引用",code:`
        const [hint, setHint] = useState("");

        <CommentInput
          placeholder="回复这条评论..."
          quote={{
            author: "产品设计",
            content: "这个输入区需要支持评论扩展能力。",
          }}
          onMentionClick={() => setHint("打开成员选择面板")}
          actions={
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setHint("打开业务自己的表情包面板")}
            >
              表情
            </Button>
          }
          footer={hint || "点击 @ 或表情按钮接入业务面板"}
        />;
      `,content:t.jsx(J,{})},{title:"提交状态",code:`
        <div style={inputFrameStyle}>
          <CommentInput
            loading
            defaultValue="正在提交这条评论..."
          />
          <CommentInput
            disabled
            placeholder="当前内容已锁定，不能继续评论。"
          />
        </div>;
      `,content:t.jsxs("div",{style:r,children:[t.jsx(i,{loading:!0,defaultValue:"正在提交这条评论..."}),t.jsx(i,{disabled:!0,placeholder:"当前内容已锁定，不能继续评论。"})]})}],props:[{name:"value",type:"string",description:"受控输入值。"},{name:"defaultValue",type:"string",description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, context: CommentInputSubmitContext) => void",description:"提交回调，context.clear 可清空输入。"},{name:"placeholder",type:"string",description:"占位文案。"},{name:"submitLabel",type:"ReactNode",description:"提交按钮文案。"},{name:"disabled",type:"boolean",description:"是否禁用。"},{name:"loading",type:"boolean",description:"是否处于提交中。"},{name:"minRows",type:"number",description:"输入框最小行数，默认 3。"},{name:"maxLength",type:"number",description:"最大输入长度。"},{name:"autoFocus",type:"boolean",description:"是否自动聚焦。"},{name:"avatarSrc",type:"string",description:"输入者头像地址。"},{name:"avatarName",type:"string",description:"输入者头像名称。"},{name:"quote",type:"CommentInputQuote",description:"引用内容，包含被引用作者和正文内容。"},{name:"mentionLabel",type:"ReactNode",description:"@ 提及入口的展示内容，默认 @。"},{name:"onMentionClick",type:"() => void",description:"点击 @ 提及入口时触发，用于打开成员选择面板。"},{name:"actions",type:"ReactNode",description:"输入区附加操作，适合接入业务自己的表情、附件或快捷操作。"},{name:"footer",type:"ReactNode",description:"底部说明。"},{name:"textareaProps",type:"TextareaHTMLAttributes<HTMLTextAreaElement>",description:"透传到底层 textarea 的属性。"}]});export{$ as default};
