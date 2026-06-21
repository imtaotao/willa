import{aZ as e,W as p,h as i,a$ as s,B as c}from"./index-D1WL8Azw.js";import{C as t}from"./index-CSeZXlwG.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-D4e1n7NZ.js";import"./index-B_LMw0jR.js";import"./index-DBfOji7i.js";const o={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},h=()=>{const[a,n]=s.useState(""),[m,r]=s.useState("");return e.jsxs("div",{style:o,children:[e.jsx(t,{value:a,onValueChange:n,maxLength:180,onSubmit:(l,u)=>{r(l),u.clear()}}),m?e.jsxs(c,{tone:"success",children:["已发布：",m]}):null]})},x=()=>{const[a,n]=s.useState("");return e.jsx("div",{style:o,children:e.jsx(t,{placeholder:"回复这条评论...",quote:{author:"产品设计",content:"这个输入区需要支持评论扩展能力。"},onMentionClick:()=>n("打开成员选择面板"),actions:e.jsx(i,{size:"sm",variant:"ghost",onClick:()=>n("打开业务自己的表情包面板"),children:"表情"}),footer:a||"点击 @ 或表情按钮接入业务面板"})})},b=d({id:"comment-input",name:"CommentInput",category:"content",packageName:"willa/CommentInput",description:"用于评论、批注和反馈场景的轻量输入组件。",imports:[{name:"CommentInput",from:"willa/CommentInput"}],css:"willa/CommentInput.css",demo:{name:"CommentInputPreview",component:h},code:`
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
      `,content:e.jsx("div",{style:o,children:e.jsx(t,{placeholder:"写下批注意见...",actions:e.jsxs(p,{gap:"xs",children:[e.jsx(i,{size:"sm",variant:"ghost",children:"引用段落"}),e.jsx(i,{size:"sm",variant:"ghost",children:"添加截图"})]}),footer:"支持 ⌘ Enter 快捷发布"})})},{title:"提及、表情和引用",code:`
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
      `,content:e.jsx(x,{})},{title:"提交状态",code:`
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
      `,content:e.jsxs("div",{style:o,children:[e.jsx(t,{loading:!0,defaultValue:"正在提交这条评论..."}),e.jsx(t,{disabled:!0,placeholder:"当前内容已锁定，不能继续评论。"})]})}],props:[{name:"value",type:"string",description:"受控输入值。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, context: CommentInputSubmitContext) => void",description:"提交回调，context.clear 可清空输入。"},{name:"placeholder",type:"string",defaultValue:'"写下你的评论..."',description:"占位文案。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"发布"',description:"提交按钮文案。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否处于提交中。"},{name:"minRows",type:"number",defaultValue:"3",description:"输入框最小行数，默认 3。"},{name:"maxLength",type:"number",description:"最大输入长度。"},{name:"autoFocus",type:"boolean",defaultValue:"false",description:"是否自动聚焦。"},{name:"avatarSrc",type:"string",description:"输入者头像地址。"},{name:"avatarName",type:"string",defaultValue:'"Comment Author"',description:"输入者头像名称。"},{name:"quote",type:"CommentInputQuote",description:"引用内容，包含被引用作者和正文内容。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',description:"@ 提及入口的展示内容，默认 @。"},{name:"onMentionClick",type:"() => void",description:"点击 @ 提及入口时触发，用于打开成员选择面板。"},{name:"actions",type:"ReactNode",description:"输入区附加操作，适合接入业务自己的表情、附件或快捷操作。"},{name:"footer",type:"ReactNode",description:"底部说明。"},{name:"textareaProps",type:"TextareaHTMLAttributes<HTMLTextAreaElement>",description:"透传到底层 textarea 的属性。"}]});export{b as default};
