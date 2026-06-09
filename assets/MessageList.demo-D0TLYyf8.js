import{af as e,k as p,ah as h,f as g}from"./index-N444S8s-.js";import{B as x}from"./index-DD-5Mr3o.js";import{C as t}from"./index-BKPf4CL8.js";import{M as a}from"./index-Cr6jVYkm.js";import{T as y}from"./index-DmBRyshc.js";/* empty css              */import{d as j}from"./defineDoc-BEY_f65q.js";import"./heading-B_KQWrAC.js";import"./index-DRVd_2l2.js";const r={display:"grid",width:"min(100%, 50rem)",height:"28rem",minWidth:0,gridTemplateRows:"auto minmax(0, 1fr)",overflow:"hidden",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)"},l={...r,width:"min(100%, 42rem)",height:"22rem"},o={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",borderBottom:"1px solid var(--willa-line)",padding:"0.72rem 0.8rem"},c={color:"var(--willa-text-soft)",fontSize:"0.82rem",lineHeight:1.4},n={minWidth:0,minHeight:0,padding:"1rem"},M=[{role:"system",content:"会话已连接当前项目文档。",meta:""},{role:"user",content:"帮我总结这次组件调整的影响范围。",meta:"09:41"},{role:"assistant",content:"本次主要影响 AI 包、willa 聚合入口和示例站。",meta:"已生成"}],u=["还需要验证单组件 CSS、暗黑主题和移动端消息间距。","如果后续引入虚拟滚动，可以继续放在 MessageList 这一层。","ChatMessage 仍只关心单条消息，不处理列表状态。"],v=()=>{const[m,d]=h.useState(0);return e.jsxs("div",{style:r,children:[e.jsxs("div",{style:o,children:[e.jsx("span",{style:c,children:"固定消息视窗，追加消息后自动滚到底部"}),e.jsx(x,{size:"sm",variant:"soft",onClick:()=>d(s=>(s+1)%4),children:"追加消息"})]}),e.jsx("div",{style:n,children:e.jsxs(a,{children:[M.map((s,i)=>e.jsx(t,{role:s.role,meta:s.meta||void 0,name:s.role==="assistant"?"Willa AI":void 0,compact:s.role==="system",status:s.role==="assistant"?e.jsxs(e.Fragment,{children:[e.jsx(g,{})," 完成"]}):void 0,children:s.content},`${s.role}-${i}`)),e.jsx(t,{role:"assistant",name:"Willa AI",status:"检索中",children:e.jsx(y,{compact:!0,status:"searching",label:"正在检索相关组件"})}),u.slice(0,m).map((s,i)=>e.jsx(t,{role:i%2===0?"assistant":"tool",name:i%2===0?"Willa AI":"检查任务",compact:i%2===1,children:s},s))]})})]})},A=j({id:"message-list",name:"MessageList",category:"ai",packageName:"willa/MessageList",description:"用于 AI 对话流的消息列表容器，承载消息堆叠、空态和加载态。",imports:[{name:"MessageList",from:"willa/MessageList"}],css:"willa/MessageList.css",demo:{name:"MessageListPreview",component:v},code:`
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageList } from "willa/MessageList";
    import { ThinkingIndicator } from "willa/ThinkingIndicator";
    import "willa/ChatMessage.css";
    import "willa/MessageList.css";
    import "willa/ThinkingIndicator.css";

    <div style={{ height: 360 }}>
      <MessageList>
        <ChatMessage role="user">帮我总结这次组件调整。</ChatMessage>
        <ChatMessage role="assistant" name="Willa AI" status="检索中">
          <ThinkingIndicator
            compact
            status="searching"
            label="正在检索相关组件"
          />
        </ChatMessage>
        <ChatMessage role="assistant" name="Willa AI">
          本次主要影响 AI 包、willa 聚合入口和示例站。
        </ChatMessage>
      </MessageList>
    </div>
  `,sections:[{title:"加载历史",content:e.jsxs("div",{style:l,children:[e.jsx("div",{style:o,children:e.jsx("span",{style:c,children:"顶部可放历史消息加载状态"})}),e.jsx("div",{style:n,children:e.jsxs(a,{loading:!0,loadingLabel:e.jsxs(e.Fragment,{children:[e.jsx(p,{})," 正在加载更早的消息"]}),children:[e.jsx(t,{role:"user",meta:"09:38",children:"先看一下有哪些文件改动。"}),e.jsx(t,{role:"assistant",name:"Willa AI",meta:"09:39",children:"我会先检查工作区、组件入口和文档注册。"})]})})]})},{title:"空列表",content:e.jsx("div",{style:l,children:e.jsx("div",{style:n,children:e.jsx(a,{empty:"还没有消息，可以从一个问题或提示词开始。"})})})},{title:"内容宽度",content:e.jsx("div",{style:l,children:e.jsx("div",{style:n,children:e.jsxs(a,{maxWidth:"34rem",gap:"0.75rem",children:[e.jsx(t,{role:"user",children:"这个区域适合嵌入在窄侧栏里吗？"}),e.jsx(t,{role:"assistant",name:"Willa AI",children:"可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"消息列表内容，通常组合 ChatMessage。"},{name:"empty",type:"ReactNode",description:"没有 children 时展示的空状态内容。"},{name:"loading",type:"boolean",description:"是否展示加载提示，适合加载历史消息。"},{name:"loadingLabel",type:"ReactNode",description:"加载提示内容，默认“正在加载消息...”。"},{name:"autoScroll",type:"boolean",description:"children 或 loading 变化后是否滚动到底部，默认开启。"},{name:"maxWidth",type:"number | string",description:"消息内容最大宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。"},{name:"gap",type:"number | string",description:"消息之间的间距；number 会按 px 处理，也可以传 CSS 长度。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{A as default};
