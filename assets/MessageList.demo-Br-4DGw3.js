import{ai as g,ag as e,a8 as b,l as L,g as I}from"./index-BkrGUlgT.js";import{B as W}from"./index-B3S08x7g.js";import{C as l}from"./index-DqO9y4ZH.js";import{T as A}from"./index-B8xhqjde.js";/* empty css              */import{d as N}from"./defineDoc-CmhGL0pl.js";import"./heading-hY4KEvez.js";import"./index-FojYucrU.js";function r(i){const{children:t,empty:s,loading:a=!1,loadingLabel:n="正在加载消息...",autoScroll:p=!0,maxWidth:u,gap:j,className:f,style:w,...c}=i,h=g.useRef(null),C=y(t),S=k({gap:j,maxWidth:u,style:w});return g.useEffect(()=>{if(!p)return;const d=h.current;d&&(d.scrollTop=d.scrollHeight)},[p,t,a]),e.jsxs("div",{...c,ref:h,className:b("willa-message-list",f),style:S,role:c.role??"log","aria-live":c["aria-live"]??"polite",children:[a?e.jsx("div",{className:"willa-message-list-loading",children:n}):null,C?e.jsx("div",{className:"willa-message-list-content",children:t}):e.jsx("div",{className:"willa-message-list-empty",children:y(s)?s:"暂无消息"})]})}const y=i=>i!=null&&i!==!1,k=i=>{const{gap:t,maxWidth:s,style:a}=i,n={...a};return t!==void 0&&(n["--willa-message-list-gap"]=typeof t=="number"?`${t}px`:t),s!==void 0&&(n["--willa-message-list-max-width"]=typeof s=="number"?`${s}px`:s),n},x={display:"grid",width:"min(100%, 60rem)",height:"28rem",minWidth:0,gridTemplateRows:"auto minmax(0, 1fr)",overflow:"hidden",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)"},m={...x,width:"min(100%, 52rem)",height:"22rem"},v={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",borderBottom:"1px solid var(--willa-line)",padding:"0.72rem 0.8rem"},M={color:"var(--willa-text-soft)",fontSize:"0.82rem",lineHeight:1.4},o={minWidth:0,minHeight:0,padding:"1rem"},T=[{role:"system",content:"会话已连接当前项目文档。",meta:""},{role:"user",content:"帮我总结这次组件调整的影响范围。",meta:"09:41"},{role:"assistant",content:"本次主要影响 AI 包、willa 聚合入口和示例站。",meta:"已生成"}],R=["还需要验证单组件 CSS、暗黑主题和移动端消息间距。","如果后续引入虚拟滚动，可以继续放在 MessageList 这一层。","ChatMessage 仍只关心单条消息，不处理列表状态。"],F=()=>{const[i,t]=g.useState(0);return e.jsxs("div",{style:x,children:[e.jsxs("div",{style:v,children:[e.jsx("span",{style:M,children:"固定消息视窗，追加消息后自动滚到底部"}),e.jsx(W,{size:"sm",variant:"soft",onClick:()=>t(s=>(s+1)%4),children:"追加消息"})]}),e.jsx("div",{style:o,children:e.jsxs(r,{children:[T.map((s,a)=>e.jsx(l,{role:s.role,meta:s.meta||void 0,name:s.role==="assistant"?"Willa AI":void 0,compact:s.role==="system",status:s.role==="assistant"?e.jsxs(e.Fragment,{children:[e.jsx(I,{})," 完成"]}):void 0,children:s.content},`${s.role}-${a}`)),e.jsx(l,{role:"assistant",name:"Willa AI",status:"检索中",children:e.jsx(A,{compact:!0,status:"searching",label:"正在检索相关组件"})}),R.slice(0,i).map((s,a)=>e.jsx(l,{role:a%2===0?"assistant":"tool",name:a%2===0?"Willa AI":"检查任务",compact:a%2===1,children:s},s))]})})]})},q=N({id:"message-list",name:"MessageList",category:"ai",packageName:"willa/MessageList",description:"用于 AI 对话流的消息列表容器，承载消息堆叠、空态和加载态。",imports:[{name:"MessageList",from:"willa/MessageList"}],css:"willa/MessageList.css",demo:{name:"MessageListPreview",component:F},code:`
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
          <ThinkingIndicator compact status="searching" label="正在检索相关组件" />
        </ChatMessage>
        <ChatMessage role="assistant" name="Willa AI">
          本次主要影响 AI 包、willa 聚合入口和示例站。
        </ChatMessage>
      </MessageList>
    </div>;
  `,sections:[{title:"加载历史",code:`
        <div style={compactFrameStyle}>
          <div style={toolbarStyle}>
            <span style={toolbarTextStyle}>顶部可放历史消息加载状态</span>
          </div>
          <div style={viewportStyle}>
            <MessageList
              loading
              loadingLabel={
                <>
                  <ClockIcon /> 正在加载更早的消息
                </>
              }
            >
              <ChatMessage role="user" meta="09:38">
                先看一下有哪些文件改动。
              </ChatMessage>
              <ChatMessage role="assistant" name="Willa AI" meta="09:39">
                我会先检查工作区、组件入口和文档注册。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,content:e.jsxs("div",{style:m,children:[e.jsx("div",{style:v,children:e.jsx("span",{style:M,children:"顶部可放历史消息加载状态"})}),e.jsx("div",{style:o,children:e.jsxs(r,{loading:!0,loadingLabel:e.jsxs(e.Fragment,{children:[e.jsx(L,{})," 正在加载更早的消息"]}),children:[e.jsx(l,{role:"user",meta:"09:38",children:"先看一下有哪些文件改动。"}),e.jsx(l,{role:"assistant",name:"Willa AI",meta:"09:39",children:"我会先检查工作区、组件入口和文档注册。"})]})})]})},{title:"空列表",code:`
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList empty="还没有消息，可以从一个问题或提示词开始。" />
          </div>
        </div>;
      `,content:e.jsx("div",{style:m,children:e.jsx("div",{style:o,children:e.jsx(r,{empty:"还没有消息，可以从一个问题或提示词开始。"})})})},{title:"内容宽度",code:`
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList maxWidth="34rem" gap="0.75rem">
              <ChatMessage role="user">这个区域适合嵌入在窄侧栏里吗？</ChatMessage>
              <ChatMessage role="assistant" name="Willa AI">
                可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,content:e.jsx("div",{style:m,children:e.jsx("div",{style:o,children:e.jsxs(r,{maxWidth:"34rem",gap:"0.75rem",children:[e.jsx(l,{role:"user",children:"这个区域适合嵌入在窄侧栏里吗？"}),e.jsx(l,{role:"assistant",name:"Willa AI",children:"可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"消息列表内容，通常组合 ChatMessage。"},{name:"empty",type:"ReactNode",description:"没有 children 时展示的空状态内容。"},{name:"loading",type:"boolean",description:"是否展示加载提示，适合加载历史消息。"},{name:"loadingLabel",type:"ReactNode",description:"加载提示内容，默认“正在加载消息...”。"},{name:"autoScroll",type:"boolean",description:"children 或 loading 变化后是否滚动到底部，默认开启。"},{name:"maxWidth",type:"number | string",description:"消息内容最大宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。"},{name:"gap",type:"number | string",description:"消息之间的间距；number 会按 px 处理，也可以传 CSS 长度。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{q as default};
