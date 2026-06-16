import{aB as e}from"./index-C1QWwz82.js";import{X as t}from"./index-C7tS1w4o.js";import{d as i}from"./defineDoc-DiUWnIsG.js";const o={width:"min(100%, 35rem)",margin:"0 auto"},s=()=>e.jsx("div",{style:o,children:e.jsx(t,{id:"20",title:"Twitter 账号的第一条公开帖子"})}),a=i({id:"x-post-embed",name:"XPostEmbed",category:"widgets",packageName:"willa/XPostEmbed",description:"带加载和错误状态的 X 帖子嵌入组件。",imports:[{name:"XPostEmbed",from:"willa/XPostEmbed"}],css:"willa/XPostEmbed.css",demo:{name:"XPostEmbedPreview",component:s},code:`
    import { XPostEmbed } from "willa/XPostEmbed";
    import "willa/XPostEmbed.css";

    <XPostEmbed id="20" title="Twitter 账号的第一条公开帖子" />;
  `,props:[{name:"id",type:"string",description:"X 帖子 id，未提供 url 时使用。"},{name:"url",type:"string",description:"完整的 X 帖子链接，组件会从中提取状态 id。"},{name:"title",type:"string",description:"嵌入帖子的无障碍标签。"}]});export{a as default};
