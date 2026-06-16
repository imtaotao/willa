import{C as a}from"./index-Cy0X3IzC.js";import{d as e}from"./defineDoc-DraEbAe5.js";import"./index-DlOA7KkB.js";import"./index-E7Ih7zC2.js";const t=[{name:"作者",avatar:"idea",content:"公共包会导出所有组件。"},{align:"right",name:"审阅者",avatar:"user",content:"单组件引入可以让示例更轻量。"}],o=e({id:"chat-thread",name:"ChatThread",packageName:"willa/ChatThread",description:"用于博客、文档站和 MDX 内容里的轻量聊天记录块；AI 产品对话流优先使用 MessageList 和 ChatMessage。",imports:[{name:"ChatThread",from:"willa/ChatThread"}],css:"willa/ChatThread.css",demo:{name:"ChatThread",component:a,props:{title:"组件备注",messages:t}},code:`
    import { ChatThread } from "willa/ChatThread";
    import "willa/ChatThread.css";

    <ChatThread
      title="组件备注"
      messages={[
        {
          name: "作者",
          avatar: "idea",
          content: "公共包会导出所有组件。",
        },
        {
          align: "right",
          name: "审阅者",
          avatar: "user",
          content: "单组件引入可以让示例更轻量。",
        },
      ]}
    />;
  `,props:[{name:"title",type:"string",defaultValue:'"对话记录"',description:"聊天记录标题，折叠模式下会作为摘要标题。"},{name:"messages",type:"Array<{ align?: 'left' | 'right'; avatar?: string; name?: string; content: string | Array<string> }>",required:!0,description:"需要渲染的消息列表。"},{name:"collapsible",type:"boolean",description:"是否将聊天记录渲染在可折叠区域内。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"折叠模式下的初始展开状态。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{o as default};
