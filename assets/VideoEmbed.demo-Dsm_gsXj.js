import{b3 as e}from"./index-C0ExXCbR.js";import{V as t}from"./index-esLmGB2I.js";import{d as o}from"./defineDoc-BFfDgh6T.js";import"./media-KcPdvCId.js";import"./mediaEmbed-ByAdrWFY.js";const r={width:"min(100%, 48rem)",margin:"0 auto"},s=(a,i)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${i.replace(/^\.\//,"")}`,n=[{name:"onLoadStart",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频开始加载时触发；仅在传入 src 时生效。"},{name:"onCanPlay",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频可以播放时触发；仅在传入 src 时生效。"},{name:"onLoadedMetadata",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频元数据加载完成时触发；仅在传入 src 时生效。"},{name:"onTimeUpdate",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频播放进度变化时触发；仅在传入 src 时生效。"},{name:"onPlay",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频开始播放时触发；仅在传入 src 时生效。"},{name:"onPause",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频暂停时触发；仅在传入 src 时生效。"},{name:"onEnded",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频播放结束时触发；仅在传入 src 时生效。"},{name:"onError",type:"ReactEventHandler<HTMLVideoElement>",group:"媒体事件",description:"内联视频加载或播放失败时触发；仅在传入 src 时生效。"}],d=()=>e.jsx("div",{style:r,children:e.jsx(t,{title:"Big Buck Bunny",description:"一个带内联控制条的短视频示例。",duration:"0:10",provider:"MDN",volume:.35,src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",href:"https://developer.mozilla.org/"})}),u=o({id:"video-embed",name:"VideoEmbed",packageName:"willa/VideoEmbed",description:"视频卡片组件，可选择在页面内播放。",imports:[{name:"VideoEmbed",from:"willa/VideoEmbed"}],css:"willa/VideoEmbed.css",propGroups:[{title:"媒体事件",description:"这些事件透传给内联 video 元素；仅外部链接状态不会触发。"}],demo:{name:"VideoEmbedPreview",component:d},code:`
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
  `,sections:[{title:"仅外部链接",code:`
        <VideoEmbed
          title="外部视频"
          description="没有 src 时，组件会渲染为可点击的视频外链卡片。"
          duration="0:10"
          provider="MDN"
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          href="https://developer.mozilla.org/"
        />;
      `,content:e.jsx("div",{style:r,children:e.jsx(t,{title:"外部视频",description:"没有 src 时，组件会渲染为可点击的视频外链卡片。",duration:"0:10",provider:"MDN",poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",href:"https://developer.mozilla.org/"})})},{title:"文章相对资源",code:`
        const resolveAssetUrl = (_articleSourcePath, assetPath) =>
          \`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/\${assetPath.replace(/^\\.\\//, "")}\`;

        <VideoEmbed
          title="文章内视频"
          description="src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。"
          duration="0:10"
          provider="MDX"
          volume={0.35}
          articleSourcePath="/posts/video-demo.mdx"
          resolveAssetUrl={resolveAssetUrl}
          src="./flower.mp4"
        />;
      `,content:e.jsx("div",{style:r,children:e.jsx(t,{title:"文章内视频",description:"src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。",duration:"0:10",provider:"MDX",volume:.35,articleSourcePath:"/posts/video-demo.mdx",resolveAssetUrl:s,src:"./flower.mp4"})})}],props:[{name:"title",type:"string",required:!0,description:"视频卡片的主标题。"},{name:"src",type:"string",description:"用于内联播放的视频地址。"},{name:"href",type:"string",description:"可选的外部视频链接。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"description",type:"string",description:"标题下方的辅助说明。"},{name:"duration",type:"string",description:"展示在来源旁边的时长文本。"},{name:"poster",type:"string",description:"外链卡片中使用的可选封面图。"},{name:"provider",type:"string",description:"展示在卡片顶部的来源标签。"},{name:"className",type:"string",description:"传给视频嵌入根节点的 className。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对视频或封面资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对视频或封面资源转换为可访问 URL。"},...n]});export{u as default};
