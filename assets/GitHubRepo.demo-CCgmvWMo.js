import{an as e}from"./index-D1DxGs20.js";import{G as t}from"./index-CAQeFdy6.js";import{d as o}from"./defineDoc-BreWiU-W.js";const r=i=>e.jsx("div",{className:"docs-github-preview",children:i.children}),s=o({id:"github-repo",name:"GitHubRepo",category:"widgets",packageName:"willa/GitHubRepo",description:"紧凑的 GitHub 仓库引用卡片。",imports:[{name:"GitHubRepo",from:"willa/GitHubRepo"}],css:"willa/GitHubRepo.css",demo:{name:"GitHubPreview",component:r,children:e.jsx(t,{repo:"imtaotao/auklet",description:"这个 monorepo 使用的构建工具。",language:"TypeScript"})},code:`
    import { GitHubRepo } from "willa/GitHubRepo";
    import "willa/GitHubRepo.css";

    <GitHubRepo
      repo="imtaotao/auklet"
      description="这个 monorepo 使用的构建工具。"
      language="TypeScript"
    />;
  `,props:[{name:"repo",type:"string",required:!0,description:"形如 owner/name 的仓库名称。"},{name:"label",type:"string",description:"自定义展示的仓库名称。"},{name:"href",type:"string",description:"自定义仓库链接，未传时使用 GitHub 仓库地址。"},{name:"description",type:"string",description:"可选的仓库简介。"},{name:"language",type:"string",description:"主要语言标签。"},{name:"stars",type:"string | number",description:"悬浮卡片中的 star 数量。"},{name:"owner",type:"string",description:"自定义仓库所有者名称。"},{name:"ownerAvatarUrl",type:"string",description:"自定义仓库所有者头像。"}]});export{s as default};
