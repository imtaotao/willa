import{aQ as m,aO as t,az as S,Q as H,g as v,B as M}from"./index-CnafOytH.js";import{A as T}from"./index-CW85JB6-.js";import{I as G}from"./index-D3Dw64a6.js";/* empty css              *//* empty css              */import{d as Q}from"./defineDoc-CqxOYqEu.js";function i(n){const{value:e,defaultValue:o="",onValueChange:a,onSubmit:s,placeholder:u="写下你的评论...",submitLabel:B="发布",disabled:g=!1,loading:c=!1,minRows:C=3,maxLength:p,autoFocus:L=!1,avatarSrc:b,avatarName:l,quote:d,mentionLabel:z="@",onMentionClick:h,actions:j,footer:w,className:R,textareaProps:k}=n,y=e!==void 0,[A,q]=m.useState(o),x=y?e:A,V=x.trim(),I=f=>{y||q(f),a==null||a(f)},E=()=>{I("")},P=(f,J)=>{V&&(s==null||s(V,{clear:E}))},N=!!(b||l),F=!!(h||j);return t.jsx(G,{...k,className:S("willa-comment-input",N&&"willa-comment-input--with-author",c&&"willa-comment-input--loading",R),slotClassNames:{actions:"willa-comment-input-actions",control:"willa-comment-input-control",footer:"willa-comment-input-footer",meta:"willa-comment-input-extra",submit:"willa-comment-input-submit"},autoFocus:L,autoResize:!1,minRows:C,maxRows:C,maxLength:p,submitShortcut:"mod-enter",loading:c,beforeInput:t.jsxs(t.Fragment,{children:[N?t.jsxs("div",{className:"willa-comment-input-author",children:[t.jsx(T,{className:"willa-comment-input-avatar",src:b,name:l??"Comment Author",alt:l??"Comment Author",size:"sm"}),t.jsx("span",{className:"willa-comment-input-author-name",children:l??"评论者"})]}):null,d?t.jsxs("div",{className:"willa-comment-input-quote",children:[t.jsxs("span",{className:"willa-comment-input-quote-author",children:["@",d.author]}),t.jsx("span",{className:"willa-comment-input-quote-content",children:d.content})]}):null]}),footer:w?t.jsx("span",{children:w}):p?t.jsxs("span",{children:[x.length,"/",p]}):t.jsx("span",{children:"⌘ Enter 发布"}),actions:F?t.jsxs(t.Fragment,{children:[h?t.jsx(_,{"aria-label":"提及用户",onClick:h,disabled:g||c,children:z}):null,j]}):null,submitLabel:B,value:x,placeholder:u,disabled:g,onValueChange:I,onSubmit:P})}const _=n=>{const{className:e,type:o="button",...a}=n;return t.jsx("button",{...a,type:o,className:S("willa-comment-input-tool",e)})},r={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},D=()=>{const[n,e]=m.useState(""),[o,a]=m.useState("");return t.jsxs("div",{style:r,children:[t.jsx(i,{value:n,onValueChange:e,maxLength:180,onSubmit:(s,u)=>{a(s),u.clear()}}),o?t.jsxs(M,{tone:"success",children:["已发布：",o]}):null]})},O=()=>{const[n,e]=m.useState("");return t.jsx("div",{style:r,children:t.jsx(i,{placeholder:"回复这条评论...",quote:{author:"产品设计",content:"这个输入区需要支持评论扩展能力。"},onMentionClick:()=>e("打开成员选择面板"),actions:t.jsx(v,{size:"sm",variant:"ghost",onClick:()=>e("打开业务自己的表情包面板"),children:"表情"}),footer:n||"点击 @ 或表情按钮接入业务面板"})})},$=Q({id:"comment-input",name:"CommentInput",category:"content",packageName:"willa/CommentInput",description:"用于评论、批注和反馈场景的轻量输入组件。",imports:[{name:"CommentInput",from:"willa/CommentInput"}],css:"willa/CommentInput.css",demo:{name:"CommentInputPreview",component:D},code:`
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
      `,content:t.jsx("div",{style:r,children:t.jsx(i,{placeholder:"写下批注意见...",actions:t.jsxs(H,{gap:"xs",children:[t.jsx(v,{size:"sm",variant:"ghost",children:"引用段落"}),t.jsx(v,{size:"sm",variant:"ghost",children:"添加截图"})]}),footer:"支持 ⌘ Enter 快捷发布"})})},{title:"提及、表情和引用",code:`
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
      `,content:t.jsx(O,{})},{title:"提交状态",code:`
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
      `,content:t.jsxs("div",{style:r,children:[t.jsx(i,{loading:!0,defaultValue:"正在提交这条评论..."}),t.jsx(i,{disabled:!0,placeholder:"当前内容已锁定，不能继续评论。"})]})}],props:[{name:"value",type:"string",description:"受控输入值。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, context: CommentInputSubmitContext) => void",description:"提交回调，context.clear 可清空输入。"},{name:"placeholder",type:"string",defaultValue:'"写下你的评论..."',description:"占位文案。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"发布"',description:"提交按钮文案。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否处于提交中。"},{name:"minRows",type:"number",defaultValue:"3",description:"输入框最小行数，默认 3。"},{name:"maxLength",type:"number",description:"最大输入长度。"},{name:"autoFocus",type:"boolean",defaultValue:"false",description:"是否自动聚焦。"},{name:"avatarSrc",type:"string",description:"输入者头像地址。"},{name:"avatarName",type:"string",defaultValue:'"Comment Author"',description:"输入者头像名称。"},{name:"quote",type:"CommentInputQuote",description:"引用内容，包含被引用作者和正文内容。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',description:"@ 提及入口的展示内容，默认 @。"},{name:"onMentionClick",type:"() => void",description:"点击 @ 提及入口时触发，用于打开成员选择面板。"},{name:"actions",type:"ReactNode",description:"输入区附加操作，适合接入业务自己的表情、附件或快捷操作。"},{name:"footer",type:"ReactNode",description:"底部说明。"},{name:"textareaProps",type:"TextareaHTMLAttributes<HTMLTextAreaElement>",description:"透传到底层 textarea 的属性。"}]});export{$ as default};
