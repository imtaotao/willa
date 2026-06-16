import{aB as e,t as i,a7 as n,j as t,aD as r}from"./index-DlOA7KkB.js";import{C as l}from"./index-CYF6jKxH.js";import{M as a}from"./index-Cm0Xc47i.js";import{d}from"./defineDoc-DraEbAe5.js";import"./index-B8jTELeZ.js";const p="https://github.com/openai.png",m={display:"grid",gap:"1rem",width:"min(100%, 58rem)",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)",padding:"1rem"},g=()=>{const[s,o]=r.useState(!1),c=[{id:"copy",label:s?"已复制":"复制",icon:s?e.jsx(t,{}):e.jsx(i,{}),active:s,onClick:()=>{o(!0),window.setTimeout(()=>o(!1),600)}},{id:"regenerate",label:"重试",icon:e.jsx(n,{})},{id:"accept",label:"采纳",icon:e.jsx(t,{}),tone:"positive"}];return e.jsx("div",{style:m,children:e.jsxs(l,{role:"assistant",name:"Willa AI",avatarSrc:p,meta:"已生成",actions:e.jsx(a,{items:c}),children:[e.jsx("p",{children:"可以先按影响面、紧急程度和实现成本拆分。"}),e.jsx("p",{children:"优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。"})]})})},h=d({id:"message-actions",name:"MessageActions",category:"ai",packageName:"willa/MessageActions",description:"用于 AI 消息上的复制、重试、采纳和反馈等轻量操作。",imports:[{name:"MessageActions",from:"willa/MessageActions"}],css:"willa/MessageActions.css",demo:{name:"MessageActionsPreview",component:g},code:`
    import { useState } from "react";
    import { CheckIcon, CopyIcon, ReloadIcon } from "@radix-ui/react-icons";
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageActions, type MessageActionItem } from "willa/MessageActions";
    import "willa/ChatMessage.css";
    import "willa/MessageActions.css";

    const assistantAvatarSrc = "https://github.com/openai.png";

    const Demo = () => {
      const [copied, setCopied] = useState(false);

      const actions: Array<MessageActionItem> = [
        {
          id: "copy",
          label: copied ? "已复制" : "复制",
          icon: copied ? <CheckIcon /> : <CopyIcon />,
          active: copied,
          onClick: () => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 600);
          },
        },
        { id: "regenerate", label: "重试", icon: <ReloadIcon /> },
        {
          id: "accept",
          label: "采纳",
          icon: <CheckIcon />,
          tone: "positive",
        },
      ];

      return (
        <ChatMessage
          role="assistant"
          name="Willa AI"
          avatarSrc={assistantAvatarSrc}
          meta="已生成"
          actions={<MessageActions items={actions} />}
        >
          <p>可以先按影响面、紧急程度和实现成本拆分。</p>
          <p>优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。</p>
        </ChatMessage>
      );
    };
  `,sections:[{title:"文字标签",code:`
        <MessageActions
          showLabels
          variant="soft"
          items={[
            { id: "copy", label: "复制", icon: <CopyIcon /> },
            { id: "retry", label: "重新生成", icon: <ReloadIcon /> },
            {
              id: "accept",
              label: "采纳",
              icon: <CheckIcon />,
              tone: "positive",
            },
          ]}
        />;
      `,content:e.jsx(a,{showLabels:!0,variant:"soft",items:[{id:"copy",label:"复制",icon:e.jsx(i,{})},{id:"retry",label:"重新生成",icon:e.jsx(n,{})},{id:"accept",label:"采纳",icon:e.jsx(t,{}),tone:"positive"}]})},{title:"状态",code:`
        <MessageActions
          showLabels
          items={[
            {
              id: "copied",
              label: "已复制",
              icon: <CheckIcon />,
              active: true,
            },
            {
              id: "retrying",
              label: "重试中",
              loading: true,
            },
            {
              id: "disabled",
              label: "不可用",
              disabled: true,
            },
          ]}
        />;
      `,content:e.jsx(a,{showLabels:!0,items:[{id:"copied",label:"已复制",icon:e.jsx(t,{}),active:!0},{id:"retrying",label:"重试中",loading:!0},{id:"disabled",label:"不可用",disabled:!0}]})}],props:[{name:"items",type:"Array<MessageActionItem>",defaultValue:"[]",description:"动作项列表。"},{name:"size",type:'"sm" | "md"',defaultValue:'"sm"',description:"动作按钮尺寸，默认 sm。"},{name:"variant",type:'"ghost" | "soft"',defaultValue:'"ghost"',description:"动作按钮样式，默认 ghost。"},{name:"showLabels",type:"boolean",defaultValue:"false",description:"是否展示文字标签；默认只展示 icon，文字用于无障碍名称。"},{name:"onAction",type:"(action: MessageActionItem, event: MouseEvent<HTMLButtonElement>) => void",description:"任意动作点击后的统一回调。"},{name:"children",type:"ReactNode",description:"追加自定义操作节点。"},{name:"id",type:"string",required:!0,group:"MessageActionItem",description:"动作唯一标识。"},{name:"label",type:"ReactNode",required:!0,group:"MessageActionItem",description:"动作文案，也会作为默认无障碍名称。"},{name:"icon",type:"ReactNode",group:"MessageActionItem",description:"动作图标。"},{name:"tone",type:'"neutral" | "positive" | "negative" | "danger"',group:"MessageActionItem",defaultValue:'"neutral"',description:"动作语义色，默认 neutral。"},{name:"active",type:"boolean",group:"MessageActionItem",description:"是否处于选中或完成状态。"},{name:"disabled",type:"boolean",group:"MessageActionItem",description:"是否禁用。"},{name:"loading",type:"boolean",group:"MessageActionItem",description:"是否展示处理中状态。"},{name:"onClick",type:"(event: MouseEvent<HTMLButtonElement>) => void",group:"MessageActionItem",description:"单个动作点击回调。"}]});export{h as default};
