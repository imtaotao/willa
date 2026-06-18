import{aN as g,aL as t,aw as L,r as I,g as W,l as N}from"./index-oUFDzASj.js";import{C as l}from"./index-DKySXalY.js";import{T as k}from"./index-DtTgsKVz.js";/* empty css              */import{d as T}from"./defineDoc-C-hb6epJ.js";import"./index-CSYTkRy5.js";function n(i){const{children:s,empty:e,loading:a=!1,loadingLabel:r="正在加载消息...",autoScroll:v=!0,maxWidth:w,gap:b,className:f,style:j,...m}=i,u=g.useRef(null),C=y(s),A=R({gap:b,maxWidth:w,style:j});return g.useEffect(()=>{if(!v)return;const d=u.current;d&&(d.scrollTop=d.scrollHeight)},[v,s,a]),t.jsxs("div",{...m,ref:u,className:L("willa-message-list",f),style:A,role:m.role??"log","aria-live":m["aria-live"]??"polite",children:[a?t.jsx("div",{className:"willa-message-list-loading",children:r}):null,C?t.jsx("div",{className:"willa-message-list-content",children:s}):t.jsx("div",{className:"willa-message-list-empty",children:y(e)?e:"暂无消息"})]})}const y=i=>i!=null&&i!==!1,R=i=>{const{gap:s,maxWidth:e,style:a}=i,r={...a};return s!==void 0&&(r["--willa-message-list-gap"]=typeof s=="number"?`${s}px`:s),e!==void 0&&(r["--willa-message-list-max-width"]=typeof e=="number"?`${e}px`:e),r},h="https://github.com/imtaotao.png",o="https://github.com/openai.png",F="https://github.com/github.png",x={display:"grid",width:"min(100%, 60rem)",height:"28rem",minWidth:0,gridTemplateRows:"auto minmax(0, 1fr)",overflow:"hidden",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)"},p={...x,width:"min(100%, 52rem)",height:"22rem"},M={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",borderBottom:"1px solid var(--willa-line)",padding:"0.72rem 0.8rem"},S={color:"var(--willa-text-soft)",fontSize:"0.82rem",lineHeight:1.4},c={minWidth:0,minHeight:0,padding:"1rem"},$=[{role:"system",content:"会话已连接当前项目文档。",meta:""},{role:"user",content:"帮我总结这次组件调整的影响范围。",meta:"09:41"},{role:"assistant",content:"本次主要影响 AI 包、willa 聚合入口和示例站。",meta:"已生成"}],E=["还需要验证单组件 CSS、暗黑主题和移动端消息间距。","如果后续引入虚拟滚动，可以继续放在 MessageList 这一层。","ChatMessage 仍只关心单条消息，不处理列表状态。"],H=()=>{const[i,s]=g.useState(0);return t.jsxs("div",{style:x,children:[t.jsxs("div",{style:M,children:[t.jsx("span",{style:S,children:"固定消息视窗，追加消息后自动滚到底部"}),t.jsx(W,{size:"sm",variant:"soft",onClick:()=>s(e=>(e+1)%4),children:"追加消息"})]}),t.jsx("div",{style:c,children:t.jsxs(n,{children:[$.map((e,a)=>t.jsx(l,{role:e.role,meta:e.meta||void 0,name:e.role==="assistant"?"Willa AI":void 0,showAvatar:e.role==="user"?!0:void 0,avatarSrc:e.role==="assistant"?o:e.role==="user"?h:void 0,avatarAlt:e.role==="user"?"imtaotao":void 0,compact:e.role==="system",status:e.role==="assistant"?t.jsxs(t.Fragment,{children:[t.jsx(N,{})," 完成"]}):void 0,children:e.content},`${e.role}-${a}`)),t.jsx(l,{role:"assistant",name:"Willa AI",avatarSrc:o,status:"检索中",children:t.jsx(k,{compact:!0,status:"searching",label:"正在检索相关组件"})}),E.slice(0,i).map((e,a)=>t.jsx(l,{role:a%2===0?"assistant":"tool",name:a%2===0?"Willa AI":"检查任务",avatarSrc:a%2===0?o:F,compact:a%2===1,children:e},e))]})})]})},q=T({id:"message-list",name:"MessageList",category:"ai",packageName:"willa/MessageList",description:"用于 AI 对话流的消息列表容器，承载消息堆叠、空态和加载态。",imports:[{name:"MessageList",from:"willa/MessageList"}],css:"willa/MessageList.css",demo:{name:"MessageListPreview",component:H},code:`
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageList } from "willa/MessageList";
    import { ThinkingIndicator } from "willa/ThinkingIndicator";
    import "willa/ChatMessage.css";
    import "willa/MessageList.css";
    import "willa/ThinkingIndicator.css";

    <div style={{ height: 360 }}>
      <MessageList>
        <ChatMessage
          role="user"
          showAvatar
          avatarSrc="https://github.com/imtaotao.png"
          avatarAlt="imtaotao"
        >
          帮我总结这次组件调整。
        </ChatMessage>
        <ChatMessage
          role="assistant"
          name="Willa AI"
          avatarSrc="https://github.com/openai.png"
          status="检索中"
        >
          <ThinkingIndicator compact status="searching" label="正在检索相关组件" />
        </ChatMessage>
        <ChatMessage
          role="assistant"
          name="Willa AI"
          avatarSrc="https://github.com/openai.png"
        >
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
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc="https://github.com/imtaotao.png"
                avatarAlt="imtaotao"
                meta="09:38"
              >
                先看一下有哪些文件改动。
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc="https://github.com/openai.png"
                meta="09:39"
              >
                我会先检查工作区、组件入口和文档注册。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,content:t.jsxs("div",{style:p,children:[t.jsx("div",{style:M,children:t.jsx("span",{style:S,children:"顶部可放历史消息加载状态"})}),t.jsx("div",{style:c,children:t.jsxs(n,{loading:!0,loadingLabel:t.jsxs(t.Fragment,{children:[t.jsx(I,{})," 正在加载更早的消息"]}),children:[t.jsx(l,{role:"user",showAvatar:!0,avatarSrc:h,avatarAlt:"imtaotao",meta:"09:38",children:"先看一下有哪些文件改动。"}),t.jsx(l,{role:"assistant",name:"Willa AI",avatarSrc:o,meta:"09:39",children:"我会先检查工作区、组件入口和文档注册。"})]})})]})},{title:"空列表",code:`
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList empty="还没有消息，可以从一个问题或提示词开始。" />
          </div>
        </div>;
      `,content:t.jsx("div",{style:p,children:t.jsx("div",{style:c,children:t.jsx(n,{empty:"还没有消息，可以从一个问题或提示词开始。"})})})},{title:"内容宽度",code:`
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList maxWidth="34rem" gap="0.75rem">
              <ChatMessage
                role="user"
                showAvatar
                avatarSrc="https://github.com/imtaotao.png"
                avatarAlt="imtaotao"
              >
                这个区域适合嵌入在窄侧栏里吗？
              </ChatMessage>
              <ChatMessage
                role="assistant"
                name="Willa AI"
                avatarSrc="https://github.com/openai.png"
              >
                可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。
              </ChatMessage>
            </MessageList>
          </div>
        </div>;
      `,content:t.jsx("div",{style:p,children:t.jsx("div",{style:c,children:t.jsxs(n,{maxWidth:"34rem",gap:"0.75rem",children:[t.jsx(l,{role:"user",showAvatar:!0,avatarSrc:h,avatarAlt:"imtaotao",children:"这个区域适合嵌入在窄侧栏里吗？"}),t.jsx(l,{role:"assistant",name:"Willa AI",avatarSrc:o,children:"可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"消息列表内容，通常组合 ChatMessage。"},{name:"empty",type:"ReactNode",description:"没有 children 时展示的空状态内容。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载提示，适合加载历史消息。"},{name:"loadingLabel",type:"ReactNode",defaultValue:'"正在加载消息..."',description:"加载提示内容，默认“正在加载消息...”。"},{name:"autoScroll",type:"boolean",defaultValue:"true",description:"children 或 loading 变化后是否滚动到底部，默认开启。"},{name:"maxWidth",type:"number | string",description:"消息内容最大宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。"},{name:"gap",type:"number | string",description:"消息之间的间距；number 会按 px 处理，也可以传 CSS 长度。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{q as default};
