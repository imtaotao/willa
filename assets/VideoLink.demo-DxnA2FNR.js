import{b3 as t}from"./index-BV4pINJl.js";import{V as e}from"./index-DOrMyqqj.js";import{d as i}from"./defineDoc-XrY6kqJ7.js";import"./media-CHWNKsyc.js";import"./media-Fzbw-AfG.js";import"./useMediaPlaybackState-DAqqbBp6.js";const r=(s,o)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${o.replace(/^\.\//,"")}`,n=[{name:"onLoadStart",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频开始加载时触发；仅在传入 src 时生效。"},{name:"onProgress",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频加载缓冲进度变化时触发；仅在传入 src 时生效。"},{name:"onCanPlay",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频可以播放时触发；仅在传入 src 时生效。"},{name:"onLoadedMetadata",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频元数据加载完成时触发；仅在传入 src 时生效。"},{name:"onTimeUpdate",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频播放进度变化时触发；仅在传入 src 时生效。"},{name:"onWaiting",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频等待更多数据时触发；仅在传入 src 时生效。"},{name:"onStalled",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频取数停滞时触发；仅在传入 src 时生效。"},{name:"onPlay",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频开始播放时触发；仅在传入 src 时生效。"},{name:"onPause",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频暂停时触发；仅在传入 src 时生效。"},{name:"onEnded",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频播放结束时触发；仅在传入 src 时生效。"},{name:"onError",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频加载或播放失败时触发；仅在传入 src 时生效。"}],v=i({id:"video-link",name:"VideoLink",packageName:"willa/VideoLink",description:"可弹出播放层的内联视频链接。",imports:[{name:"VideoLink",from:"willa/VideoLink"}],css:"willa/VideoLink.css",propGroups:[{title:"媒体事件",description:"这些事件透传给内联 video 元素；仅外部链接状态不会触发。"}],demo:{name:"VideoLink",component:e,props:{label:"观看示例视频",provider:"MDN",volume:.35,src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",href:"https://developer.mozilla.org/"}},code:`
    import { VideoLink } from "willa/VideoLink";
    import "willa/VideoLink.css";

    <VideoLink
      label="观看示例视频"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />;
  `,sections:[{title:"仅外部链接",code:`
        <VideoLink
          label="打开视频来源"
          provider="MDN"
          href="https://developer.mozilla.org/"
        />;
      `,content:t.jsx(e,{label:"打开视频来源",provider:"MDN",href:"https://developer.mozilla.org/"})},{title:"文章相对资源",code:`
        const resolveAssetUrl = (_articleSourcePath, assetPath) =>
          \`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/\${assetPath.replace(/^\\.\\//, "")}\`;

        <VideoLink
          provider="MDX"
          volume={0.35}
          articleSourcePath="/posts/video-demo.mdx"
          resolveAssetUrl={resolveAssetUrl}
          src="./flower.mp4"
        >
          播放文章视频
        </VideoLink>;
      `,content:t.jsx(e,{provider:"MDX",volume:.35,articleSourcePath:"/posts/video-demo.mdx",resolveAssetUrl:r,src:"./flower.mp4",children:"播放文章视频"})},{title:"加载和错误状态",code:`
        <VideoLink
          label="打开不可用视频"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />;
      `,content:t.jsx(e,{label:"打开不可用视频",provider:"Demo",src:"/media/missing-video.mp4",href:"https://developer.mozilla.org/"})}],props:[{name:"src",type:"string",description:"用于内联播放的视频地址。"},{name:"href",type:"string",description:"可选的外部视频链接。"},{name:"label",type:"string",description:"未传 children 时展示的文本标签。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"provider",type:"string",description:"标题上方展示的来源标签。"},{name:"className",type:"string",description:"传给视频链接根节点的 className。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对视频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对视频资源转换为可访问 URL。"},{name:"children",type:"ReactNode",description:"自定义内联内容。"},...n]});export{v as default};
