import{a$ as e,D as a,am as o,m as t}from"./index-UtuKQqEd.js";import{C as n}from"./index-BtMksQuc.js";import{M as s}from"./index-DYMBqUaY.js";import{d as c}from"./defineDoc-CkmLSGT-.js";import"./index-DUdUlVT6.js";const r="https://github.com/openai.png",l={display:"grid",gap:"1rem",width:"min(100%, 58rem)",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)",padding:"1rem"},p=()=>{const i=[{id:"copy",label:"复制",icon:e.jsx(a,{}),copyText:`可以先按影响面、紧急程度和实现成本拆分。
优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。`},{id:"regenerate",label:"重试",icon:e.jsx(o,{})},{id:"accept",label:"采纳",icon:e.jsx(t,{}),tone:"positive"}];return e.jsx("div",{style:l,children:e.jsxs(n,{role:"assistant",name:"Willa AI",avatarSrc:r,meta:"已生成",actions:e.jsx(s,{items:i}),children:[e.jsx("p",{children:"可以先按影响面、紧急程度和实现成本拆分。"}),e.jsx("p",{children:"优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。"})]})})},A=c({id:"message-actions",name:"MessageActions",category:"ai",packageName:"willa/MessageActions",description:"用于 AI 消息上的复制、重试、采纳和反馈等轻量操作。",imports:[{name:"MessageActions",from:"willa/MessageActions"}],css:"willa/MessageActions.css",demo:{name:"MessageActionsPreview",component:p},code:`
    import { CheckIcon, CopyIcon, ReloadIcon } from "@radix-ui/react-icons";
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageActions, type MessageActionItem } from "willa/MessageActions";
    import "willa/ChatMessage.css";
    import "willa/MessageActions.css";

    const assistantAvatarSrc = "https://github.com/openai.png";

    const Demo = () => {
      const actions: Array<MessageActionItem> = [
        {
          id: "copy",
          label: "复制",
          icon: <CopyIcon />,
          copyText:
            "可以先按影响面、紧急程度和实现成本拆分。\\n优先处理阻塞登录的问题，其次是批量导出，最后再看主题配置。",
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
            {
              id: "copy",
              label: "复制",
              icon: <CopyIcon />,
              copyText: "生成结果摘要",
            },
            { id: "retry", label: "重新生成", icon: <ReloadIcon /> },
            {
              id: "accept",
              label: "采纳",
              icon: <CheckIcon />,
              tone: "positive",
            },
          ]}
        />;
      `,content:e.jsx(s,{showLabels:!0,variant:"soft",items:[{id:"copy",label:"复制",icon:e.jsx(a,{}),copyText:"生成结果摘要"},{id:"retry",label:"重新生成",icon:e.jsx(o,{})},{id:"accept",label:"采纳",icon:e.jsx(t,{}),tone:"positive"}]})},{title:"状态",code:`
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
      `,content:e.jsx(s,{showLabels:!0,items:[{id:"copied",label:"已复制",icon:e.jsx(t,{}),active:!0},{id:"retrying",label:"重试中",loading:!0},{id:"disabled",label:"不可用",disabled:!0}]})}],props:[{name:"items",type:"Array<MessageActionItem>",defaultValue:"[]",description:"动作项列表。"},{name:"size",type:'"sm" | "md"',defaultValue:'"sm"',description:"动作按钮尺寸，默认 sm。"},{name:"variant",type:'"ghost" | "soft"',defaultValue:'"ghost"',description:"动作按钮样式，默认 ghost。"},{name:"showLabels",type:"boolean",defaultValue:"false",description:"是否展示文字标签；默认只展示 icon，文字用于无障碍名称。"},{name:"onAction",type:"(action: MessageActionItem, event: MouseEvent<HTMLButtonElement>) => void",description:"任意动作点击后的统一回调。"},{name:"children",type:"ReactNode",description:"追加自定义操作节点。"},{name:"MessageActionItem.id",type:"string",required:!0,group:"MessageActionItem",description:"动作唯一标识。"},{name:"MessageActionItem.label",type:"ReactNode",required:!0,group:"MessageActionItem",description:"动作文案，也会作为默认无障碍名称。"},{name:"MessageActionItem.icon",type:"ReactNode",group:"MessageActionItem",description:"动作图标。"},{name:"MessageActionItem.copyText",type:"string",group:"MessageActionItem",description:"复制到剪贴板的文本；设置后该动作会复用 CopyButton 的复制状态。"},{name:"MessageActionItem.copiedLabel",type:"ReactNode",group:"MessageActionItem",defaultValue:'"已复制"',description:"复制成功后的临时文案。"},{name:"MessageActionItem.failedLabel",type:"ReactNode",group:"MessageActionItem",defaultValue:'"复制失败"',description:"复制失败后的临时文案。"},{name:"MessageActionItem.copiedIcon",type:"ReactNode",group:"MessageActionItem",description:"复制成功后的临时图标。"},{name:"MessageActionItem.copiedClassName",type:"string",group:"MessageActionItem",defaultValue:'"willa-message-action--active"',description:"复制成功状态追加到复制动作按钮上的 className。"},{name:"MessageActionItem.failedIcon",type:"ReactNode",group:"MessageActionItem",description:"复制失败后的临时图标。"},{name:"MessageActionItem.failedClassName",type:"string",group:"MessageActionItem",description:"复制失败状态追加到复制动作按钮上的 className。"},{name:"MessageActionItem.copiedDuration",type:"number",group:"MessageActionItem",defaultValue:"1200",description:"复制反馈持续时间，单位为毫秒。"},{name:"MessageActionItem.tone",type:'"neutral" | "positive" | "negative" | "danger"',group:"MessageActionItem",defaultValue:'"neutral"',description:"动作语义色，默认 neutral。"},{name:"MessageActionItem.active",type:"boolean",group:"MessageActionItem",description:"是否处于选中或完成状态。"},{name:"MessageActionItem.disabled",type:"boolean",group:"MessageActionItem",description:"是否禁用。"},{name:"MessageActionItem.loading",type:"boolean",group:"MessageActionItem",description:"是否展示处理中状态。"},{name:"MessageActionItem.onClick",type:"(event: MouseEvent<HTMLButtonElement>) => void",group:"MessageActionItem",description:"单个动作点击回调。"},{name:"MessageActionItem.onCopyText",type:"(text: string) => void",group:"MessageActionItem",description:"复制成功后的回调。"}]});export{A as default};
