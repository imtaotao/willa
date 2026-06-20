import{A as i}from"./index-ZHvbmS5s.js";import{d as e}from"./defineDoc-DENur0VI.js";import"./index-eHrgCGTo.js";import"./mediaInline-I1-JRXU1.js";import"./media-CjUSokrN.js";const m=e({id:"audio-link",name:"AudioLink",packageName:"willa/AudioLink",description:"可展开为小播放器的内联音频链接。",imports:[{name:"AudioLink",from:"willa/AudioLink"}],css:"willa/AudioLink.css",demo:{name:"AudioLink",component:i,props:{label:"播放音乐片段",provider:"网易云音乐",volume:.4,src:"http://music.163.com/song/media/outer/url?id=3370714076.mp3",href:"http://music.163.com/song?id=3370714076"}},code:`
    import { AudioLink } from "willa/AudioLink";
    import "willa/AudioLink.css";

    <AudioLink
      label="播放音乐片段"
      provider="网易云音乐"
      volume={0.4}
      src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
      href="http://music.163.com/song?id=3370714076"
    />;
  `,props:[{name:"src",type:"string",description:"内联播放器使用的音频地址。"},{name:"href",type:"string",description:"可选的外部音频链接。"},{name:"label",type:"string",description:"链接展示的标题。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"provider",type:"string",description:"标题上方展示的来源标签。"},{name:"className",type:"string",description:"传给音频链接根节点的 className。"},{name:"articleSourcePath",type:"string",defaultValue:'""',description:"当前文章路径，用于解析相对音频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对音频资源转换为可访问 URL。"},{name:"children",type:"ReactNode",description:"自定义链接内容。"}]});export{m as default};
