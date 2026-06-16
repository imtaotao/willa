import{aD as e}from"./index-BRz9N_nD.js";import{A as i}from"./index-DzAIw8vD.js";import{d as t}from"./defineDoc-CgN3VSOD.js";import"./media-S8INSxIA.js";const o={width:"min(100%, 48rem)",margin:"0 auto"},r=()=>e.jsx("div",{style:o,children:e.jsx(i,{title:"音乐片段",description:"来自网易云音乐的外链音频示例。",provider:"网易云音乐",volume:.4,src:"http://music.163.com/song/media/outer/url?id=3370714076.mp3",href:"http://music.163.com/song?id=3370714076"})}),p=t({id:"audio-embed",name:"AudioEmbed",packageName:"willa/AudioEmbed",description:"紧凑的音频卡片，可选择在页面内播放。",imports:[{name:"AudioEmbed",from:"willa/AudioEmbed"}],css:"willa/AudioEmbed.css",demo:{name:"AudioEmbedPreview",component:r},code:`
    import { AudioEmbed } from "willa/AudioEmbed";
    import "willa/AudioEmbed.css";

    <AudioEmbed
      title="音乐片段"
      description="来自网易云音乐的外链音频示例。"
      provider="网易云音乐"
      volume={0.4}
      src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
      href="http://music.163.com/song?id=3370714076"
    />;
  `,props:[{name:"title",type:"string",required:!0,description:"音频卡片的主标题。"},{name:"src",type:"string",description:"用于内联播放的音频地址。"},{name:"href",type:"string",description:"可选的外部音频链接。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"description",type:"string",description:"标题下方的辅助说明。"},{name:"duration",type:"string",description:"展示在来源旁边的时长文本。"},{name:"provider",type:"string",description:"展示在卡片顶部的来源标签。"},{name:"articleSourcePath",type:"string",defaultValue:'""',description:"当前文章路径，用于解析相对音频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对音频资源转换为可访问 URL。"}]});export{p as default};
