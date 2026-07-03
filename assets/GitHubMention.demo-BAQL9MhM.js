import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./defineDoc-Cid5xIoZ.js";import{t as n}from"./GitHubMention-UhuTnp1i.js";var r=e(),i=t({id:`github-mention`,name:`GitHubMention`,category:`widgets`,packageName:`willa/GitHubMention`,description:`带头像和个人主页链接的 GitHub 用户提及。`,imports:[{name:`GitHubMention`,from:`willa/GitHubMention`}],css:`willa/GitHubMention.css`,demo:{name:`GitHubPreview`,component:e=>(0,r.jsx)(`div`,{className:`docs-github-preview`,children:e.children}),children:(0,r.jsx)(n,{username:`imtaotao`,name:`Tao`,avatarUrl:`https://github.com/imtaotao.png`})},code:`
    import { GitHubMention } from "willa/GitHubMention";
    import "willa/GitHubMention.css";

    <GitHubMention
      username="imtaotao"
      name="Tao"
      avatarUrl="https://github.com/imtaotao.png"
    />;
  `,props:[{name:`username`,type:`string`,required:!0,description:`GitHub 用户名。`},{name:`name`,type:`string`,description:`可选的展示名称。`},{name:`href`,type:`string`,description:`自定义用户主页链接，未传时使用 GitHub 主页。`},{name:`avatarUrl`,type:`string`,description:`可选的头像图片地址。`},{name:`bio`,type:`string`,description:`悬浮卡片中的个人简介，未传时尝试从 GitHub API 获取。`},{name:`followers`,type:`string | number`,description:`悬浮卡片中的关注者数量。`},{name:`repositories`,type:`string | number`,description:`悬浮卡片中的仓库数量。`},{name:`className`,type:`string`,description:`传给 GitHub 提及根节点的 className。`}]});export{i as default};