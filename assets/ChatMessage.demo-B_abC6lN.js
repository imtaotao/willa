import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{b as t,tt as n,u as r}from"./react-icons.esm-mVdwEXuX.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";import{t as a}from"./style-POIZQ0ik.js";import{t as o}from"./style-Ckr7mJhn.js";var s=e(),c=`https://github.com/imtaotao.png`,l=`https://github.com/openai.png`,u=`https://github.com/vercel.png`,d=`https://github.com/github.png`,f={display:`grid`,gap:`1rem`,width:`min(100%, 58rem)`,border:`1px solid var(--willa-line)`,borderRadius:`0.9rem`,background:`var(--willa-panel-bg)`,padding:`1rem`},p=i({id:`chat-message`,name:`ChatMessage`,category:`ai`,packageName:`willa/ChatMessage`,description:`用于 AI 对话流里的单条消息，支持角色、头像、状态和操作区。`,imports:[{name:`ChatMessage`,from:`willa/ChatMessage`}],css:`willa/ChatMessage.css`,demo:{name:`ChatMessagePreview`,component:()=>(0,s.jsxs)(`div`,{style:f,children:[(0,s.jsx)(a,{role:`assistant`,name:`Willa AI`,avatarSrc:l,meta:`准备就绪`,compact:!0,children:`你可以把产品反馈、会议纪要或用户访谈贴进来，我会帮你整理结构。`}),(0,s.jsx)(a,{role:`user`,showAvatar:!0,avatarSrc:c,avatarAlt:`imtaotao`,meta:`刚刚`,children:`帮我把这段产品反馈整理成三个优先级。`}),(0,s.jsxs)(a,{role:`assistant`,name:`Willa AI`,avatarSrc:l,meta:`已生成`,actions:(0,s.jsx)(o,{items:[{id:`copy`,label:`复制`,icon:(0,s.jsx)(t,{}),copyText:`可以先按影响面、紧急程度和实现成本拆分。
我建议优先处理登录失败，其次是批量导出，最后再看主题配置。`},{id:`retry`,label:`重试`,icon:(0,s.jsx)(n,{})}]}),footer:`基于 12 条反馈归纳`,children:[(0,s.jsx)(`p`,{children:`可以先按影响面、紧急程度和实现成本拆分。`}),(0,s.jsx)(`p`,{children:`我建议优先处理登录失败，其次是批量导出，最后再看主题配置。`})]})]})},code:`
    import { CopyIcon, ReloadIcon } from "@radix-ui/react-icons";
    import { ChatMessage } from "willa/ChatMessage";
    import { MessageActions } from "willa/MessageActions";
    import "willa/ChatMessage.css";
    import "willa/MessageActions.css";

    const chatFrameStyle = {
      display: "grid",
      gap: "1rem",
      width: "min(100%, 58rem)",
      border: "1px solid var(--willa-line)",
      borderRadius: "0.9rem",
      background: "var(--willa-panel-bg)",
      padding: "1rem",
    };

    <div style={chatFrameStyle}>
      <ChatMessage
        role="assistant"
        name="Willa AI"
        avatarSrc="https://github.com/openai.png"
        meta="准备就绪"
        compact
      >
        你可以把产品反馈、会议纪要或用户访谈贴进来，我会帮你整理结构。
      </ChatMessage>
      <ChatMessage
        role="user"
        showAvatar
        avatarSrc="https://github.com/imtaotao.png"
        avatarAlt="imtaotao"
        meta="刚刚"
      >
        帮我把这段产品反馈整理成三个优先级。
      </ChatMessage>
      <ChatMessage
        role="assistant"
        name="Willa AI"
        avatarSrc="https://github.com/openai.png"
        meta="已生成"
        actions={
          <MessageActions
            items={[
              {
                id: "copy",
                label: "复制",
                icon: <CopyIcon />,
                copyText:
                  "可以先按影响面、紧急程度和实现成本拆分。\\n我建议优先处理登录失败，其次是批量导出，最后再看主题配置。",
              },
              { id: "retry", label: "重试", icon: <ReloadIcon /> },
            ]}
          />
        }
        footer="基于 12 条反馈归纳"
      >
        <p>可以先按影响面、紧急程度和实现成本拆分。</p>
        <p>我建议优先处理登录失败，其次是批量导出，最后再看主题配置。</p>
      </ChatMessage>
    </div>;
  `,sections:[{title:`完整角色`,code:`
        <div style={chatFrameStyle}>
          <ChatMessage role="system" compact>
            系统策略已加载，会优先使用仓库内组件规范。
          </ChatMessage>
          <ChatMessage
            role="developer"
            avatarSrc="https://github.com/vercel.png"
            meta="约束"
          >
            回答必须包含改动范围、验证命令和剩余风险。
          </ChatMessage>
          <ChatMessage
            role="user"
            showAvatar
            avatarSrc="https://github.com/imtaotao.png"
            avatarAlt="imtaotao"
            meta="09:41"
          >
            检查一下这个组件为什么样式没有生效。
          </ChatMessage>
          <ChatMessage
            role="assistant"
            name="Willa AI"
            avatarSrc="https://github.com/openai.png"
            meta="09:42"
          >
            我会先确认入口导出、CSS 依赖和示例站实际 import 路径。
          </ChatMessage>
          <ChatMessage
            role="tool"
            name="构建检查"
            avatarSrc="https://github.com/github.png"
            status={
              <>
                <CheckIcon /> 通过
              </>
            }
          >
            \`pnpm run build\` 已生成 ChatMessage 的 CSS 产物。
          </ChatMessage>
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:f,children:[(0,s.jsx)(a,{role:`system`,compact:!0,children:`系统策略已加载，会优先使用仓库内组件规范。`}),(0,s.jsx)(a,{role:`developer`,avatarSrc:u,meta:`约束`,children:`回答必须包含改动范围、验证命令和剩余风险。`}),(0,s.jsx)(a,{role:`user`,showAvatar:!0,avatarSrc:c,avatarAlt:`imtaotao`,meta:`09:41`,children:`检查一下这个组件为什么样式没有生效。`}),(0,s.jsx)(a,{role:`assistant`,name:`Willa AI`,avatarSrc:l,meta:`09:42`,children:`我会先确认入口导出、CSS 依赖和示例站实际 import 路径。`}),(0,s.jsx)(a,{role:`tool`,name:`构建检查`,avatarSrc:d,status:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),` 通过`]}),children:"`pnpm run build` 已生成 ChatMessage 的 CSS 产物。"})]})},{title:`状态与工具消息`,code:`
        <div style={chatFrameStyle}>
          <ChatMessage role="system" compact>
            模型已切换到更适合长上下文的配置。
          </ChatMessage>
          <ChatMessage
            role="tool"
            name="文件检索"
            avatarSrc="https://github.com/github.png"
            status={
              <>
                <CheckIcon /> 已完成
              </>
            }
            footer="读取 4 个文件，用时 1.2s"
          >
            已命中 architecture.md、component.md 和 css.md 中的相关规则。
          </ChatMessage>
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:f,children:[(0,s.jsx)(a,{role:`system`,compact:!0,children:`模型已切换到更适合长上下文的配置。`}),(0,s.jsx)(a,{role:`tool`,name:`文件检索`,avatarSrc:d,status:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),` 已完成`]}),footer:`读取 4 个文件，用时 1.2s`,children:`已命中 architecture.md、component.md 和 css.md 中的相关规则。`})]})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`消息主体内容，可以放文本、段落、Markdown 渲染结果或代码块。`},{name:`role`,type:`'assistant' | 'user' | 'system' | 'developer' | 'tool'`,defaultValue:`"assistant"`,description:`消息角色，默认 assistant，并会影响默认对齐和视觉样式。`},{name:`align`,type:`'left' | 'right' | 'center'`,defaultValue:`由 role 决定`,description:`覆盖角色默认对齐方式。`},{name:`name`,type:`string`,defaultValue:`由 role 决定`,description:`消息发送者名称，assistant、developer 和 tool 未传时使用默认名称。`},{name:`avatarSrc`,type:`string`,description:`头像图片地址。`},{name:`avatarAlt`,type:`string`,description:`头像图片替代文本。`},{name:`showAvatar`,type:`boolean`,description:`是否展示头像；默认 assistant、developer 和 tool 展示，user 和 system 不展示。`},{name:`meta`,type:`ReactNode`,description:`时间、模型、来源等辅助信息。`},{name:`status`,type:`ReactNode`,description:`生成中、已完成、失败等状态信息。`},{name:`actions`,type:`ReactNode`,description:`复制、重试、反馈等消息操作区。`},{name:`footer`,type:`ReactNode`,description:`消息底部说明，例如来源数量、耗时或 token 信息。`},{name:`compact`,type:`boolean`,defaultValue:`false`,description:`使用更紧凑的消息间距和内容尺寸。`},{name:`className`,type:`string`,description:`可选的外层 className。`}]});export{p as default};