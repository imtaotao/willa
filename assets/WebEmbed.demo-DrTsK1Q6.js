import{b1 as e}from"./index-bb53V0rC.js";import{W as i}from"./index-CT592FR7.js";import{d as r}from"./defineDoc-C-wlAd1r.js";const t={width:"min(100%, 58rem)",margin:"0 auto"},m=()=>e.jsx("div",{style:t,children:e.jsx(i,{src:"https://example.com",title:"示例网站",description:"一个简单的 iframe 嵌入示例。",provider:"示例",height:360})}),a=r({id:"web-embed",name:"WebEmbed",category:"widgets",packageName:"willa/WebEmbed",description:"带来源信息和降级文案的 iframe 嵌入组件。",imports:[{name:"WebEmbed",from:"willa/WebEmbed"}],css:"willa/WebEmbed.css",demo:{name:"WebEmbedPreview",component:m},code:`
    import { WebEmbed } from "willa/WebEmbed";
    import "willa/WebEmbed.css";

    <WebEmbed
      src="https://example.com"
      title="示例网站"
      description="一个简单的 iframe 嵌入示例。"
      provider="示例"
      height={360}
    />;
  `,props:[{name:"src",type:"string",required:!0,description:"iframe 加载的页面地址。"},{name:"title",type:"string",required:!0,description:"用于无障碍访问的 iframe 标题。"},{name:"href",type:"string",description:"标题和外链按钮跳转地址，未传时使用 src。"},{name:"description",type:"string",description:"嵌入标题下方的辅助说明。"},{name:"provider",type:"string",description:"展示在嵌入标题上方的来源标签。"},{name:"height",type:"number | string",description:"嵌入区域高度，数字会按像素处理。"},{name:"allow",type:"string",description:"透传给 iframe 的 allow 属性。"},{name:"allowFullScreen",type:"boolean",description:"是否允许 iframe 全屏。"},{name:"className",type:"string",description:"传给网页嵌入根节点的 className。"}]});export{a as default};
