import{aY as e}from"./index-DMUChNuV.js";import{X as t}from"./index-Dle6ZiZH.js";import{d as s}from"./defineDoc-BrbLAnP5.js";const i={width:"min(100%, 35rem)",margin:"0 auto"},o=()=>e.jsx("div",{style:i,children:e.jsx(t,{id:"20",title:"Twitter 账号的第一条公开帖子"})}),a=s({id:"x-post-embed",name:"XPostEmbed",category:"widgets",packageName:"willa/XPostEmbed",description:"带加载和错误状态的 X 帖子嵌入组件。",imports:[{name:"XPostEmbed",from:"willa/XPostEmbed"}],css:"willa/XPostEmbed.css",demo:{name:"XPostEmbedPreview",component:o},code:`
    import { XPostEmbed } from "willa/XPostEmbed";
    import "willa/XPostEmbed.css";

    <XPostEmbed id="20" title="Twitter 账号的第一条公开帖子" />;
  `,props:[{name:"id",type:"string",description:"X 帖子 id，未提供 url 时使用。"},{name:"url",type:"string",description:"完整的 X 帖子链接，组件会从中提取状态 id。"},{name:"title",type:"string",description:"嵌入帖子的无障碍标签。"},{name:"className",type:"string",description:"传给 X 内容嵌入根节点的 className。"}]});export{a as default};
