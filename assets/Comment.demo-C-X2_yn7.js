import{aA as t,B as i,N as n,e,h as s,j as m}from"./index-CqEhPxJh.js";import{C as a}from"./index-5T3r3Mwk.js";/* empty css              *//* empty css              */import{d as r}from"./defineDoc-E7lv7YTw.js";import"./index-BthY6qqz.js";const o={display:"grid",gap:"0.8rem",width:"min(100%, 48rem)",margin:"0 auto"},v=r({id:"comment",name:"Comment",category:"content",packageName:"willa/Comment",description:"用于评论、批注、审核意见和讨论记录中的单条内容展示。",imports:[{name:"Comment",from:"willa/Comment"}],css:"willa/Comment.css",demo:{name:"Comment",component:a,props:{author:"Tao Tao",avatarSrc:"https://github.com/imtaotao.png",avatarName:"Tao Tao",meta:"刚刚",actions:t.jsx(e,{size:"sm",variant:"ghost",children:"回复"}),children:t.jsx("p",{children:"这里可以作为文章评论，也可以用于文档批注和产品审核意见。核心内容保持清晰， 操作区放轻量动作。"})}},code:`
    import { Button } from "willa/Button";
    import { Comment } from "willa/Comment";
    import "willa/Button.css";
    import "willa/Comment.css";

    <Comment
      author="Tao Tao"
      avatarSrc="https://github.com/imtaotao.png"
      avatarName="Tao Tao"
      meta="刚刚"
      actions={
        <Button size="sm" variant="ghost">
          回复
        </Button>
      }
    >
      <p>
        这里可以作为文章评论，也可以用于文档批注和产品审核意见。核心内容保持清晰，
        操作区放轻量动作。
      </p>
    </Comment>;
  `,sections:[{title:"审核意见",code:`
        <div style={demoFrameStyle}>
          <Comment
            author="内容审核"
            avatarName="内容审核"
            meta="09:42"
            highlighted
            actions={<Badge tone="success">已处理</Badge>}
            footer="关联：docs/component.md"
          >
            <p>
              建议把组件定位改成面向 AI 产品、文档站和内容平台的通用组件库。
            </p>
          </Comment>
        </div>;
      `,content:t.jsx("div",{style:o,children:t.jsx(a,{author:"内容审核",avatarName:"内容审核",meta:"09:42",highlighted:!0,actions:t.jsx(i,{tone:"success",children:"已处理"}),footer:"关联：docs/component.md",children:t.jsx("p",{children:"建议把组件定位改成面向 AI 产品、文档站和内容平台的通用组件库。"})})})},{title:"紧凑尺寸",code:`
        <div style={demoFrameStyle}>
          <Comment
            size="sm"
            author="文档协作者"
            avatarName="文档协作者"
            meta="2 分钟前"
            actions={
              <Group gap="xs">
                <Button size="sm" variant="ghost" icon={<ChatBubbleIcon />}>
                  回复
                </Button>
                <Button size="sm" variant="ghost" icon={<CheckIcon />}>
                  解决
                </Button>
              </Group>
            }
          >
            <p>这个段落可以再补一个移动端截图，方便评审时核对。</p>
          </Comment>
        </div>;
      `,content:t.jsx("div",{style:o,children:t.jsx(a,{size:"sm",author:"文档协作者",avatarName:"文档协作者",meta:"2 分钟前",actions:t.jsxs(n,{gap:"xs",children:[t.jsx(e,{size:"sm",variant:"ghost",icon:t.jsx(s,{}),children:"回复"}),t.jsx(e,{size:"sm",variant:"ghost",icon:t.jsx(m,{}),children:"解决"})]}),children:t.jsx("p",{children:"这个段落可以再补一个移动端截图，方便评审时核对。"})})})},{title:"评论流",code:`
        <div style={demoFrameStyle}>
          <Comment
            variant="feed"
            author="内容编辑"
            avatarSrc="https://github.com/vercel.png"
            avatarName="内容编辑"
            meta="2026-06-10"
            actions={
              <Group gap="xs">
                <Button size="sm" variant="ghost">
                  赞 24
                </Button>
                <Button size="sm" variant="ghost">
                  回复
                </Button>
              </Group>
            }
          >
            <p>
              这次组件调整后，评论区的信息密度比之前更合适，列表阅读起来也更轻。
            </p>
            <p>建议再补一个移动端截图，确认头像、正文和操作区不会挤在一起。</p>
          </Comment>
          <Comment
            variant="feed"
            author="产品设计"
            avatarSrc="https://github.com/tailwindlabs.png"
            avatarName="产品设计"
            meta="2026-06-11"
            actions={
              <Button size="sm" variant="ghost">
                赞 12
              </Button>
            }
          >
            <p>我更喜欢现在这种评论流样式，适合放在文档详情页和文章页下面。</p>
          </Comment>
        </div>;
      `,content:t.jsxs("div",{style:o,children:[t.jsxs(a,{variant:"feed",author:"内容编辑",avatarSrc:"https://github.com/vercel.png",avatarName:"内容编辑",meta:"2026-06-10",actions:t.jsxs(n,{gap:"xs",children:[t.jsx(e,{size:"sm",variant:"ghost",children:"赞 24"}),t.jsx(e,{size:"sm",variant:"ghost",children:"回复"})]}),children:[t.jsx("p",{children:"这次组件调整后，评论区的信息密度比之前更合适，列表阅读起来也更轻。"}),t.jsx("p",{children:"建议再补一个移动端截图，确认头像、正文和操作区不会挤在一起。"})]}),t.jsx(a,{variant:"feed",author:"产品设计",avatarSrc:"https://github.com/tailwindlabs.png",avatarName:"产品设计",meta:"2026-06-11",actions:t.jsx(e,{size:"sm",variant:"ghost",children:"赞 12"}),children:t.jsx("p",{children:"我更喜欢现在这种评论流样式，适合放在文档详情页和文章页下面。"})})]})}],props:[{name:"author",type:"ReactNode",required:!0,description:"评论作者。"},{name:"children",type:"ReactNode",required:!0,description:"评论正文。"},{name:"avatarSrc",type:"string",description:"头像图片地址。"},{name:"avatarName",type:"string",description:"头像 fallback 名称。"},{name:"avatar",type:"ReactNode",description:"完全自定义头像节点。"},{name:"meta",type:"ReactNode",description:"时间、状态或来源信息。"},{name:"actions",type:"ReactNode",description:"评论操作区。"},{name:"footer",type:"ReactNode",description:"底部补充信息。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"评论尺寸，默认 md。"},{name:"variant",type:'"card" | "feed"',defaultValue:'"card"',description:"评论展示形态，默认 card；评论详情页或长评论流可使用 feed。"},{name:"highlighted",type:"boolean",defaultValue:"false",description:"是否展示为重点评论或审核意见。"}]});export{v as default};
