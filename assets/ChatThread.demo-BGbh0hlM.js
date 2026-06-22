import{C as a}from"./index-rB2mKcdX.js";import{d as t}from"./defineDoc-vm2MDznr.js";import"./index-AT3pq52c.js";import"./index-B-tZgo3j.js";import"./index-BaoAAVTW.js";const e=[{name:"林夏",avatarSrc:"https://github.com/imtaotao.png",content:["我把组件文档里的安装示例补齐了。","主题容器的最小结构也放进去了。"]},{align:"right",name:"周舟",avatarSrc:"https://github.com/rauchg.png",time:"10:32",content:"收到，我再看一下单组件引入的示例。"},{name:"陈然",avatarSrc:"https://github.com/gaearon.png",content:["顺便把 API 边界写清楚吧。","这个组件只处理复制动作，不需要承载链接按钮。"]}],m=t({id:"chat-thread",name:"ChatThread",packageName:"willa/ChatThread",description:"用于博客、文档站和 MDX 内容里的轻量聊天记录块；AI 产品对话流优先使用 MessageList 和 ChatMessage。",imports:[{name:"ChatThread",from:"willa/ChatThread"}],css:"willa/ChatThread.css",demo:{name:"ChatThread",component:a,props:{messages:e}},code:`
    import { ChatThread } from "willa/ChatThread";
    import "willa/ChatThread.css";

    <ChatThread
      messages={[
        {
          name: "林夏",
          avatarSrc: "https://github.com/imtaotao.png",
          content: [
            "我把组件文档里的安装示例补齐了。",
            "主题容器的最小结构也放进去了。",
          ],
        },
        {
          align: "right",
          name: "周舟",
          avatarSrc: "https://github.com/rauchg.png",
          time: "10:32",
          content: "收到，我再看一下单组件引入的示例。",
        },
        {
          name: "陈然",
          avatarSrc: "https://github.com/gaearon.png",
          content: [
            "顺便把 API 边界写清楚吧。",
            "这个组件只处理复制动作，不需要承载链接按钮。",
          ],
        },
      ]}
    />;
  `,props:[{name:"title",type:"string",defaultValue:'"对话记录"',description:"聊天记录标题，折叠模式下会作为摘要标题。"},{name:"messages",type:"Array<{ align?: 'left' | 'right'; avatarSrc?: string; name?: string; time?: string; content: string | Array<string> }>",required:!0,description:"需要渲染的消息列表。"},{name:"collapsible",type:"boolean",description:"是否将聊天记录渲染在可折叠区域内。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"折叠模式下的初始展开状态。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{m as default};
