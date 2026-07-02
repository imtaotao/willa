import{b3 as t}from"./index-CX7dlnN9.js";import{A as e}from"./index-e-xr6bh8.js";import{d as o}from"./defineDoc-DzpR41Bj.js";import"./media-Bt1qVdZv.js";import"./media-CBuuLKa9.js";const r=(s,i)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/${i.replace(/^\.\//,"")}`,n=[{name:"onLoadStart",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频开始加载时触发；仅在传入 src 时生效。"},{name:"onProgress",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频加载缓冲进度变化时触发；仅在传入 src 时生效。"},{name:"onCanPlay",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频可以播放时触发；仅在传入 src 时生效。"},{name:"onLoadedMetadata",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频元数据加载完成时触发；仅在传入 src 时生效。"},{name:"onTimeUpdate",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频播放进度变化时触发；仅在传入 src 时生效。"},{name:"onWaiting",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频等待更多数据时触发；仅在传入 src 时生效。"},{name:"onStalled",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频取数停滞时触发；仅在传入 src 时生效。"},{name:"onPlay",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频开始播放时触发；仅在传入 src 时生效。"},{name:"onPause",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频暂停时触发；仅在传入 src 时生效。"},{name:"onEnded",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频播放结束时触发；仅在传入 src 时生效。"},{name:"onError",type:"ReactEventHandler<HTMLAudioElement>",group:"媒体事件",description:"内联音频加载或播放失败时触发；仅在传入 src 时生效。"}],l=o({id:"audio-link",name:"AudioLink",packageName:"willa/AudioLink",description:"可展开为小播放器的内联音频链接。",imports:[{name:"AudioLink",from:"willa/AudioLink"}],css:"willa/AudioLink.css",propGroups:[{title:"媒体事件",description:"这些事件透传给内联 audio 元素；仅外部链接状态不会触发。"}],demo:{name:"AudioLink",component:e,props:{label:"播放音乐片段",provider:"网易云音乐",volume:.4,src:"http://music.163.com/song/media/outer/url?id=3370714076.mp3",href:"http://music.163.com/song?id=3370714076"}},code:`
    import { AudioLink } from "willa/AudioLink";
    import "willa/AudioLink.css";

    <AudioLink
      label="播放音乐片段"
      provider="网易云音乐"
      volume={0.4}
      src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
      href="http://music.163.com/song?id=3370714076"
    />;
  `,sections:[{title:"仅外部链接",code:`
        <AudioLink
          label="打开音频来源"
          provider="网易云音乐"
          href="http://music.163.com/song?id=3370714076"
        />;
      `,content:t.jsx(e,{label:"打开音频来源",provider:"网易云音乐",href:"http://music.163.com/song?id=3370714076"})},{title:"文章相对资源",code:`
        const resolveAssetUrl = (_articleSourcePath, assetPath) =>
          \`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/\${assetPath.replace(/^\\.\\//, "")}\`;

        <AudioLink
          provider="MDX"
          volume={0.45}
          articleSourcePath="/posts/audio-demo.mdx"
          resolveAssetUrl={resolveAssetUrl}
          src="./t-rex-roar.mp3"
        >
          播放文章音频
        </AudioLink>;
      `,content:t.jsx(e,{provider:"MDX",volume:.45,articleSourcePath:"/posts/audio-demo.mdx",resolveAssetUrl:r,src:"./t-rex-roar.mp3",children:"播放文章音频"})},{title:"加载和错误状态",code:`
        <AudioLink
          label="播放不可用音频"
          provider="Demo"
          src="/media/missing-audio.mp3"
          href="https://developer.mozilla.org/"
        />;
      `,content:t.jsx(e,{label:"播放不可用音频",provider:"Demo",src:"/media/missing-audio.mp3",href:"https://developer.mozilla.org/"})}],props:[{name:"src",type:"string",description:"内联播放器使用的音频地址。"},{name:"href",type:"string",description:"可选的外部音频链接。"},{name:"label",type:"string",description:"链接展示的标题。"},{name:"volume",type:"number",description:"初始播放音量，取值范围为 0 到 1。"},{name:"provider",type:"string",description:"标题上方展示的来源标签。"},{name:"className",type:"string",description:"传给音频链接根节点的 className。"},{name:"articleSourcePath",type:"string",defaultValue:'""',description:"当前文章路径，用于解析相对音频资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对音频资源转换为可访问 URL。"},{name:"children",type:"ReactNode",description:"自定义链接内容。"},...n]});export{l as default};
