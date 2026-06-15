import{au as e}from"./index-VEztyUnl.js";import{V as i}from"./index-CUJrrg8w.js";import{d as t}from"./defineDoc-fv-G_8j9.js";import"./media-CbZiAJ-d.js";const r={width:"min(100%, 52rem)",margin:"0 auto"},o=()=>e.jsx("div",{style:r,children:e.jsx(i,{title:"Big Buck Bunny",description:"一个带内联控制条的短视频示例。",duration:"0:10",provider:"MDN",volume:.35,src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",href:"https://developer.mozilla.org/"})}),p=t({id:"video-embed",name:"VideoEmbed",packageName:"willa/VideoEmbed",description:"视频卡片组件，可选择在页面内播放。",imports:[{name:"VideoEmbed",from:"willa/VideoEmbed"}],css:"willa/VideoEmbed.css",demo:{name:"VideoEmbedPreview",component:o},code:`
    import { VideoEmbed } from "willa/VideoEmbed";
    import "willa/VideoEmbed.css";

    <VideoEmbed
      title="Big Buck Bunny"
      description="一个带内联控制条的短视频示例。"
      duration="0:10"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />;
  `,props:[{name:"title",type:"string",required:!0,description:"视频卡片的主标题。"},{name:"src",type:"string",description:"用于内联播放的视频地址。"},{name:"href",type:"string",description:"可选的外部视频链接。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"description",type:"string",description:"标题下方的辅助说明。"},{name:"duration",type:"string",description:"展示在来源旁边的时长文本。"},{name:"poster",type:"string",description:"外链卡片中使用的可选封面图。"},{name:"provider",type:"string",description:"展示在卡片顶部的来源标签。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对视频或封面资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对视频或封面资源转换为可访问 URL。"}]});export{p as default};
