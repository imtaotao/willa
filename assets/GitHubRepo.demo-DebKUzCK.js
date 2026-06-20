import{aW as e}from"./index-B5z5h9bf.js";import{G as t}from"./index-eFSowFYp.js";import{d as o}from"./defineDoc-zSMVVw_7.js";import"./useGitHubHoverCardResource-B1XLF-U5.js";import"./request-CKe9rru2.js";const r=i=>e.jsx("div",{className:"docs-github-preview",children:i.children}),c=o({id:"github-repo",name:"GitHubRepo",category:"widgets",packageName:"willa/GitHubRepo",description:"紧凑的 GitHub 仓库引用卡片。",imports:[{name:"GitHubRepo",from:"willa/GitHubRepo"}],css:"willa/GitHubRepo.css",demo:{name:"GitHubPreview",component:r,children:e.jsx(t,{repo:"imtaotao/auklet",description:"这个 monorepo 使用的构建工具。",language:"TypeScript"})},code:`
    import { GitHubRepo } from "willa/GitHubRepo";
    import "willa/GitHubRepo.css";

    <GitHubRepo
      repo="imtaotao/auklet"
      description="这个 monorepo 使用的构建工具。"
      language="TypeScript"
    />;
  `,props:[{name:"repo",type:"string",required:!0,description:"形如 owner/name 的仓库名称。"},{name:"label",type:"string",description:"自定义展示的仓库名称。"},{name:"href",type:"string",description:"自定义仓库链接，未传时使用 GitHub 仓库地址。"},{name:"description",type:"string",description:"可选的仓库简介。"},{name:"language",type:"string",description:"主要语言标签。"},{name:"stars",type:"string | number",description:"悬浮卡片中的 star 数量。"},{name:"owner",type:"string",description:"自定义仓库所有者名称。"},{name:"ownerAvatarUrl",type:"string",description:"自定义仓库所有者头像。"},{name:"className",type:"string",description:"传给 GitHub 仓库根节点的 className。"}]});export{c as default};
