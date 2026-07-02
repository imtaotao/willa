import{b3 as e}from"./index-x8GQ-vXc.js";import{A as t}from"./index-85BKPE7J.js";import{d as o}from"./defineDoc-C27-iyXB.js";import"./nodes-Dp2bW0pc.js";import"./media-BCJ_ZfUH.js";import"./media-BQozCIUp.js";import"./mediaEmbed-NTvYE3MP.js";const i={width:"min(100%, 48rem)",margin:"0 auto"},s=(a,r)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/${r.replace(/^\.\//,"")}`,d=[{name:"onLoadStart",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频开始加载时触发；仅在传入 src 时生效。"},{name:"onProgress",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频加载缓冲进度变化时触发；仅在传入 src 时生效。"},{name:"onCanPlay",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频可以播放时触发；仅在传入 src 时生效。"},{name:"onLoadedMetadata",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频元数据加载完成时触发；仅在传入 src 时生效。"},{name:"onTimeUpdate",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频播放进度变化时触发；仅在传入 src 时生效。"},{name:"onWaiting",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频等待更多数据时触发；仅在传入 src 时生效。"},{name:"onStalled",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频取数停滞时触发；仅在传入 src 时生效。"},{name:"onPlay",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频开始播放时触发；仅在传入 src 时生效。"},{name:"onPause",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频暂停时触发；仅在传入 src 时生效。"},{name:"onEnded",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频播放结束时触发；仅在传入 src 时生效。"},{name:"onError",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频加载或播放失败时触发；仅在传入 src 时生效。"}],n=()=>e.jsx("div",{style:i,children:e.jsx(t,{title:"音乐片段",description:"来自网易云音乐的外链音频示例。",duration:"3:45",provider:"网易云音乐",volume:.4,src:"http://music.163.com/song/media/outer/url?id=3370714076.mp3",href:"http://music.163.com/song?id=3370714076"})}),g=o({id:"audio-embed",name:"AudioEmbed",packageName:"willa/AudioEmbed",description:"紧凑的音频卡片，可选择在页面内播放。",imports:[{name:"AudioEmbed",from:"willa/AudioEmbed"}],css:"willa/AudioEmbed.css",propGroups:[{title:"媒体事件",description:"这些事件透传给内联 audio 元素；仅外部链接状态不会触发。"}],demo:{name:"AudioEmbedPreview",component:n},code:`
    import { AudioEmbed } from "willa/AudioEmbed";
    import "willa/AudioEmbed.css";

    <AudioEmbed
      title="音乐片段"
      description="来自网易云音乐的外链音频示例。"
      duration="3:45"
      provider="网易云音乐"
      volume={0.4}
      src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
      href="http://music.163.com/song?id=3370714076"
    />;
  `,sections:[{title:"仅外部链接",code:`
        <AudioEmbed
          title="外部音频"
          description="没有 src 时，组件会渲染为可点击的外链卡片。"
          duration="3:45"
          provider="网易云音乐"
          href="http://music.163.com/song?id=3370714076"
        />;
      `,content:e.jsx("div",{style:i,children:e.jsx(t,{title:"外部音频",description:"没有 src 时，组件会渲染为可点击的外链卡片。",duration:"3:45",provider:"网易云音乐",href:"http://music.163.com/song?id=3370714076"})})},{title:"文章相对资源",code:`
        const resolveAssetUrl = (_articleSourcePath, assetPath) =>
          \`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/\${assetPath}\`;

        <AudioEmbed
          title="文章内音频"
          description="src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。"
          duration="0:04"
          provider="MDX"
          volume={0.45}
          articleSourcePath="/posts/audio-demo.mdx"
          resolveAssetUrl={resolveAssetUrl}
          src="./t-rex-roar.mp3"
        />;
      `,content:e.jsx("div",{style:i,children:e.jsx(t,{title:"文章内音频",description:"src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。",duration:"0:04",provider:"MDX",volume:.45,articleSourcePath:"/posts/audio-demo.mdx",resolveAssetUrl:s,src:"./t-rex-roar.mp3"})})},{title:"加载和错误状态",code:`
        <AudioEmbed
          title="不可用音频"
          description="无效 src 会触发组件内置的加载和错误状态。"
          duration="0:00"
          provider="Demo"
          src="/media/missing-audio.mp3"
          href="https://developer.mozilla.org/"
        />;
      `,content:e.jsx("div",{style:i,children:e.jsx(t,{title:"不可用音频",description:"无效 src 会触发组件内置的加载和错误状态。",duration:"0:00",provider:"Demo",src:"/media/missing-audio.mp3",href:"https://developer.mozilla.org/"})})}],props:[{name:"title",type:"string",required:!0,description:"音频卡片的主标题。"},{name:"src",type:"string",description:"用于内联播放的音频地址。"},{name:"href",type:"string",description:"可选的外部音频链接。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"description",type:"string",description:"标题下方的辅助说明。"},{name:"duration",type:"string",description:"展示在来源旁边的时长文本。"},{name:"provider",type:"string",description:"展示在卡片顶部的来源标签。"},{name:"className",type:"string",description:"传给音频嵌入根节点的 className。"},{name:"articleSourcePath",type:"string",defaultValue:'""',description:"当前文章路径，用于解析相对音频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对音频资源转换为可访问 URL。"},...d]});export{g as default};
