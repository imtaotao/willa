import{an as a}from"./index-B_h_YYgH.js";import{A as e}from"./index-Bqk4cW0g.js";import{d as r}from"./defineDoc-Bzp7FD3_.js";const t={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},o={display:"grid",minWidth:"12rem",gap:"0.35rem"},i={color:"var(--willa-text-strong)",fontSize:"0.92rem",fontWeight:600,lineHeight:1.3},s={color:"var(--willa-text-soft)",fontSize:"0.82rem",lineHeight:1.45},n={display:"flex",gap:"0.5rem",color:"var(--willa-text-faint)",fontSize:"0.78rem"},c=r({id:"avatar",name:"Avatar",packageName:"willa/Avatar",description:"用于作者、评论、社区内容和引用来源中的头像展示。",imports:[{name:"Avatar",from:"willa/Avatar"}],css:"willa/Avatar.css",demo:{name:"Avatar",component:e,props:{src:"https://github.com/imtaotao.png",name:"Tao Tao",alt:"Tao Tao",previewable:!0}},code:`
    import { Avatar } from "willa/Avatar";
    import "willa/Avatar.css";

    <Avatar
      src="https://github.com/imtaotao.png"
      name="Tao Tao"
      alt="Tao Tao"
      previewable
    />;
  `,sections:[{title:"悬浮信息",code:`
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="Tao Tao"
            hoverCard={
              <div style={profileCardStyle}>
                <strong style={profileNameStyle}>Tao Tao</strong>
                <span style={profileMetaStyle}>
                  Willa 组件库维护者，关注内容平台和文档体验。
                </span>
                <span style={profileStatStyle}>
                  <span>128 篇文章</span>
                  <span>4.8k 关注</span>
                </span>
              </div>
            }
          />
        </div>;
      `,content:a.jsx("div",{style:t,children:a.jsx(e,{src:"https://github.com/imtaotao.png",name:"Tao Tao",alt:"Tao Tao",hoverCard:a.jsxs("div",{style:o,children:[a.jsx("strong",{style:i,children:"Tao Tao"}),a.jsx("span",{style:s,children:"Willa 组件库维护者，关注内容平台和文档体验。"}),a.jsxs("span",{style:n,children:[a.jsx("span",{children:"128 篇文章"}),a.jsx("span",{children:"4.8k 关注"})]})]})})})},{title:"点击预览和跳转",code:`
        <div style={avatarRowStyle}>
          <Avatar
            src="https://github.com/imtaotao.png"
            name="Tao Tao"
            alt="点击预览头像"
            previewable
          />
          <Avatar
            src="https://github.com/github.png"
            name="GitHub"
            alt="打开 GitHub"
            href="https://github.com"
            target="_blank"
          />
          <Avatar name="Hover Only" hoverable />
        </div>;
      `,content:a.jsxs("div",{style:t,children:[a.jsx(e,{src:"https://github.com/imtaotao.png",name:"Tao Tao",alt:"点击预览头像",previewable:!0}),a.jsx(e,{src:"https://github.com/github.png",name:"GitHub",alt:"打开 GitHub",href:"https://github.com",target:"_blank"}),a.jsx(e,{name:"Hover Only",hoverable:!0})]})},{title:"图片和文本",code:`
        <div style={avatarRowStyle}>
          <Avatar src="https://github.com/imtaotao.png" name="Tao Tao" alt="Tao Tao" />
          <Avatar name="Willa UI" />
          <Avatar name="Content Author" alt="文档作者" />
          <Avatar src="https://example.invalid/avatar.png" name="Broken Image" />
        </div>;
      `,content:a.jsxs("div",{style:t,children:[a.jsx(e,{src:"https://github.com/imtaotao.png",name:"Tao Tao",alt:"Tao Tao"}),a.jsx(e,{name:"Willa UI"}),a.jsx(e,{name:"Content Author",alt:"文档作者"}),a.jsx(e,{src:"https://example.invalid/avatar.png",name:"Broken Image"})]})},{title:"尺寸",code:`
        <div style={avatarRowStyle}>
          <Avatar name="Small" size="sm" />
          <Avatar name="Medium" size="md" />
          <Avatar name="Large" size="lg" />
          <Avatar name="Extra Large" size="xl" />
        </div>;
      `,content:a.jsxs("div",{style:t,children:[a.jsx(e,{name:"Small",size:"sm"}),a.jsx(e,{name:"Medium",size:"md"}),a.jsx(e,{name:"Large",size:"lg"}),a.jsx(e,{name:"Extra Large",size:"xl"})]})},{title:"形状",code:`
        <div style={avatarRowStyle}>
          <Avatar name="Circle" shape="circle" />
          <Avatar name="Rounded" shape="rounded" />
          <Avatar name="Square" shape="square" />
        </div>;
      `,content:a.jsxs("div",{style:t,children:[a.jsx(e,{name:"Circle",shape:"circle"}),a.jsx(e,{name:"Rounded",shape:"rounded"}),a.jsx(e,{name:"Square",shape:"square"})]})},{title:"自定义颜色",code:`
        <div style={avatarRowStyle}>
          <Avatar backgroundColor="#f6e7c8" name="Warm Author" textColor="#3f2a12" />
          <Avatar backgroundColor="rgba(96, 165, 250, 0.14)" name="Blue Writer" />
        </div>;
      `,content:a.jsxs("div",{style:t,children:[a.jsx(e,{backgroundColor:"#f6e7c8",name:"Warm Author",textColor:"#3f2a12"}),a.jsx(e,{backgroundColor:"rgba(96, 165, 250, 0.14)",name:"Blue Writer"})]})}],props:[{name:"src",type:"string",description:"头像图片地址。"},{name:"alt",type:"string",description:"图片头像的替代文本；未传时使用 name。"},{name:"name",type:"string",required:!0,description:"头像名称，必填；图片缺失或加载失败时取后两个单词首字母展示。"},{name:"previewable",type:"boolean",description:"启用点击放大预览。"},{name:"previewSrc",type:"string",description:"预览时使用的图片地址，未传时复用 src。"},{name:"hoverCard",type:"ReactNode",description:"头像 hover 或键盘聚焦时展示的自定义弹框内容。"},{name:"hoverCardClassName",type:"string",description:"传给 hover 弹框容器的类名。"},{name:"href",type:"string",description:"传入后渲染为可跳转链接；与 previewable 同时传入时优先预览。"},{name:"hoverable",type:"boolean",description:"仅启用 hover 交互状态，不改变点击行为。"},{name:"size",type:'"sm" | "md" | "lg" | "xl"',description:"头像尺寸。"},{name:"shape",type:'"circle" | "rounded" | "square"',description:"头像外形。"},{name:"imageProps",type:"ImgHTMLAttributes<HTMLImageElement>",description:"透传给内部图片的属性，不包含 src、alt、className 和 children。"},{name:"backgroundColor",type:"string",description:"自定义文字头像背景颜色，支持 CSS 颜色值。"},{name:"textColor",type:"string",description:"自定义文字头像颜色，支持 CSS 颜色值。"}]});export{c as default};
