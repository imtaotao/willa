import{V as e}from"./index-KyMIvuip.js";import{d as i}from"./defineDoc-BjqN8DJU.js";import"./index-B2ZRy2dz.js";import"./media-DHcujjvy.js";import"./media-Cqoa-ZXu.js";const a=i({id:"video-link",name:"VideoLink",packageName:"willa/VideoLink",description:"可弹出播放层的内联视频链接。",imports:[{name:"VideoLink",from:"willa/VideoLink"}],css:"willa/VideoLink.css",demo:{name:"VideoLink",component:e,props:{label:"观看示例视频",provider:"MDN",volume:.35,src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",href:"https://developer.mozilla.org/"}},code:`
    import { VideoLink } from "willa/VideoLink";
    import "willa/VideoLink.css";

    <VideoLink
      label="观看示例视频"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />;
  `,props:[{name:"src",type:"string",description:"用于内联播放的视频地址。"},{name:"href",type:"string",description:"可选的外部视频链接。"},{name:"label",type:"string",description:"未传 children 时展示的文本标签。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"provider",type:"string",description:"标题上方展示的来源标签。"},{name:"className",type:"string",description:"传给视频链接根节点的 className。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对视频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对视频资源转换为可访问 URL。"},{name:"children",type:"ReactNode",description:"自定义内联内容。"}]});export{a as default};
