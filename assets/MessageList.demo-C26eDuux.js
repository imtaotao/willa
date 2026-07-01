import{b5 as g,b3 as t,aO as I,t as W,h as N,m as k}from"./index-CAvvNH4Y.js";import{C as r}from"./index-fPPfMD6m.js";import{T}from"./index-BmJZ6sSC.js";/* empty css              */import{d as R}from"./defineDoc-Dq0MLT71.js";import"./index-bzKXW94X.js";import"./cardCollapse-DfTKrpd5.js";function o(a){const{children:s,empty:l,loading:e=!1,loadingLabel:i="正在加载消息...",autoScroll:v=!0,maxWidth:w,gap:f,className:j,style:C,...m}=a,u=g.useRef(null),A=y(s),L=F({gap:f,maxWidth:w,style:C});return g.useEffect(()=>{if(!v)return;const d=u.current;d&&(d.scrollTop=d.scrollHeight)},[v,s,e]),t.jsxs("div",{...m,ref:u,className:I("willa-message-list",j),style:L,role:m.role??"log","aria-live":m["aria-live"]??"polite",children:[e?t.jsx("div",{className:"willa-message-list-loading",children:i}):null,A?t.jsx("div",{className:"willa-message-list-content",children:s}):t.jsx("div",{className:"willa-message-list-empty",children:y(l)?l:"暂无消息"})]})}const y=a=>a!=null&&a!==!1,F=a=>{const{gap:s,maxWidth:l,style:e}=a,i={...e};return s!==void 0&&(i["--willa-message-list-gap"]=typeof s=="number"?`${s}px`:s),l!==void 0&&(i["--willa-message-list-max-width"]=typeof l=="number"?`${l}px`:l),i};o.displayName="MessageList";const p="https://github.com/imtaotao.png",n="https://github.com/openai.png",$="https://github.com/github.png",M={display:"grid",width:"min(100%, 60rem)",height:"28rem",minWidth:0,gridTemplateRows:"auto minmax(0, 1fr)",overflow:"hidden",border:"1px solid var(--willa-line)",borderRadius:"0.9rem",background:"var(--willa-panel-bg)"},h={...M,width:"min(100%, 52rem)",height:"22rem"},S={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",borderBottom:"1px solid var(--willa-line)",padding:"0.72rem 0.8rem"},b={color:"var(--willa-text-soft)",fontSize:"0.82rem",lineHeight:1.4},c={minWidth:0,minHeight:0,padding:"1rem"},E=[{role:"system",content:"会话已连接当前项目文档。",meta:""},{role:"user",content:"帮我总结这次组件调整的影响范围。",meta:"09:41"},{role:"assistant",content:"本次主要影响 AI 包、willa 聚合入口和示例站。",meta:"已生成"}],x=["还需要验证单组件 CSS、暗黑主题和移动端消息间距。","如果后续引入虚拟滚动，可以继续放在 MessageList 这一层。","ChatMessage 仍只关心单条消息，不处理列表状态。","我先检查组件树里所有可能的副作用并做静态校验。","MessageList 本身只负责排列和滚动，不应承载协议转换逻辑。","我建议后续补齐 aria-live 与边界态文案，增强可读性。","请优先修复 Table 横向滚动时列头与内容错位问题。","现在这条消息更长些，看看在窄屏下是否会自动换行。","我再补一条来模拟更真实的 AI 对话长度。","如果组件树里有重复导入，可继续做一次集中迁移。","建议把日期边界和日历语义说明写进文档，不要靠注释。","移动端需要更强的 touch 反馈，尤其是列表内的加载状态。","当前列表滚动条视觉需要和全局滚动条风格保持一致。","建议复用 MessageList 在 AI 编辑器中的容器布局样式。","如果你想，我再补一组工具消息用于异常链路。","收到。先发完当前结论，后续再补充执行日志。","工具消息通常只保留状态，正文可精简到一句。","组件化边界要持续收口，避免 UI 与交互能力混用。","还有一个点：空态和 loading 态都要有明显的布局占位。","我会继续记录这些差异，方便下轮回归。"],H=()=>{const a=x.length,[s,l]=g.useState(Math.min(14,a));return t.jsxs("div",{style:M,children:[t.jsxs("div",{style:S,children:[t.jsx("span",{style:b,children:"固定消息视窗，追加消息后自动滚到底部"}),t.jsx(N,{size:"sm",variant:"soft",disabled:s>=a,onClick:()=>l(e=>Math.min(e+3,a)),children:s>=a?"已全部加载":"追加消息"})]}),t.jsx("div",{style:c,children:t.jsxs(o,{children:[E.map((e,i)=>t.jsx(r,{role:e.role,meta:e.meta||void 0,name:e.role==="assistant"?"Willa AI":void 0,showAvatar:e.role==="user"?!0:void 0,avatarSrc:e.role==="assistant"?n:e.role==="user"?p:void 0,avatarAlt:e.role==="user"?"imtaotao":void 0,compact:e.role==="system",status:e.role==="assistant"?t.jsxs(t.Fragment,{children:[t.jsx(k,{})," 完成"]}):void 0,children:e.content},`${e.role}-${i}`)),t.jsx(r,{role:"assistant",name:"Willa AI",avatarSrc:n,status:"检索中",children:t.jsx(T,{compact:!0,status:"searching",label:"正在检索相关组件"})}),x.slice(0,s).map((e,i)=>t.jsx(r,{role:i%2===0?"assistant":"tool",name:i%2===0?"Willa AI":"检查任务",avatarSrc:i%2===0?n:$,compact:i%2===1,children:e},e))]})})]})},_=R({id:"message-list",name:"MessageList",category:"ai",packageName:"willa/MessageList",description:"用于 AI 对话流的消息列表容器，承载消息堆叠、空态和加载态。",imports:[{name:"MessageList",from:"willa/MessageList"}],css:"willa/MessageList.css",demo:{name:"MessageListPreview",component:H},code:`
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
      `,content:t.jsxs("div",{style:h,children:[t.jsx("div",{style:S,children:t.jsx("span",{style:b,children:"顶部可放历史消息加载状态"})}),t.jsx("div",{style:c,children:t.jsxs(o,{loading:!0,loadingLabel:t.jsxs(t.Fragment,{children:[t.jsx(W,{})," 正在加载更早的消息"]}),children:[t.jsx(r,{role:"user",showAvatar:!0,avatarSrc:p,avatarAlt:"imtaotao",meta:"09:38",children:"先看一下有哪些文件改动。"}),t.jsx(r,{role:"assistant",name:"Willa AI",avatarSrc:n,meta:"09:39",children:"我会先检查工作区、组件入口和文档注册。"})]})})]})},{title:"空列表",code:`
        <div style={compactFrameStyle}>
          <div style={viewportStyle}>
            <MessageList empty="还没有消息，可以从一个问题或提示词开始。" />
          </div>
        </div>;
      `,content:t.jsx("div",{style:h,children:t.jsx("div",{style:c,children:t.jsx(o,{empty:"还没有消息，可以从一个问题或提示词开始。"})})})},{title:"内容宽度",code:`
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
      `,content:t.jsx("div",{style:h,children:t.jsx("div",{style:c,children:t.jsxs(o,{maxWidth:"34rem",gap:"0.75rem",children:[t.jsx(r,{role:"user",showAvatar:!0,avatarSrc:p,avatarAlt:"imtaotao",children:"这个区域适合嵌入在窄侧栏里吗？"}),t.jsx(r,{role:"assistant",name:"Willa AI",avatarSrc:n,children:"可以，通过 maxWidth 和 gap 控制消息流的阅读宽度和间距。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"消息列表内容，通常组合 ChatMessage。"},{name:"empty",type:"ReactNode",description:"没有 children 时展示的空状态内容。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载提示，适合加载历史消息。"},{name:"loadingLabel",type:"ReactNode",defaultValue:'"正在加载消息..."',description:"加载提示内容，默认“正在加载消息...”。"},{name:"autoScroll",type:"boolean",defaultValue:"true",description:"children 或 loading 变化后是否滚动到底部，默认开启。"},{name:"maxWidth",type:"number | string",description:"消息内容最大宽度；number 会按 px 处理，也可以传 CSS 宽度字符串。"},{name:"gap",type:"number | string",description:"消息之间的间距；number 会按 px 处理，也可以传 CSS 长度。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{_ as default};
