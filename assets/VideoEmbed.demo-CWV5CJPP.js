import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";import{t as i}from"./mediaEventProps-DixrlsLD.js";import{t as a}from"./VideoEmbed-gPHHLyS-.js";var o=n(e(),1),s=t(),c={width:`min(100%, 48rem)`,margin:`0 auto`},l={margin:`0.75rem 0 0`,fontSize:`0.875rem`,opacity:.72},u=(e,t)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${t.replace(/^\.\//,``)}`,d=i(`video`),f=r({id:`video-embed`,name:`VideoEmbed`,packageName:`willa/VideoEmbed`,description:`视频卡片组件，可选择在页面内播放。`,imports:[{name:`VideoEmbed`,from:`willa/VideoEmbed`}],css:`willa/VideoEmbed.css`,propGroups:[{title:`媒体事件`,description:`这些事件透传给内联 video 元素；仅外部链接状态不会触发。`}],demo:{name:`VideoEmbedPreview`,component:()=>(0,s.jsx)(`div`,{style:c,children:(0,s.jsx)(a,{title:`Big Buck Bunny`,description:`一个带内联控制条的短视频示例。`,duration:`0:10`,provider:`MDN`,volume:.35,src:`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`,href:`https://developer.mozilla.org/`})})},code:`
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
  `,sections:[{title:`事件循环播放`,code:`
        const [status, setStatus] = useState("等待播放");
        const [endedCount, setEndedCount] = useState(0);

        <VideoEmbed
          title="循环播放事件验证"
          description="首次需要手动播放；结束后由 onEnded 重新播放。"
          duration="0:05"
          provider="MDN"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          onPlay={() => setStatus("正在播放")}
          onPause={() => setStatus("已暂停")}
          onEnded={(event) => {
            setEndedCount((count) => count + 1);
            setStatus("播放结束，正在重新播放");
            event.currentTarget.currentTime = 0;
            void event.currentTarget.play();
          }}
        />;
      `,content:(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`等待播放`),[n,r]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsx)(a,{title:`循环播放事件验证`,description:`首次需要手动播放；结束后由 onEnded 重新播放。`,duration:`0:05`,provider:`MDN`,src:`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`,onPlay:()=>t(`正在播放`),onPause:()=>t(`已暂停`),onEnded:e=>{r(e=>e+1),t(`播放结束，正在重新播放`),e.currentTarget.currentTime=0,e.currentTarget.play()}}),(0,s.jsxs)(`p`,{style:l,children:[`状态：`,e,`；onEnded 已触发 `,n,` 次`]})]})},{})},{title:`仅外部链接`,code:`
        <VideoEmbed
          title="外部视频"
          description="没有 src 时，组件会渲染为可点击的视频外链卡片。"
          duration="0:10"
          provider="MDN"
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          href="https://developer.mozilla.org/"
        />;
      `,content:(0,s.jsx)(`div`,{style:c,children:(0,s.jsx)(a,{title:`外部视频`,description:`没有 src 时，组件会渲染为可点击的视频外链卡片。`,duration:`0:10`,provider:`MDN`,poster:`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`,href:`https://developer.mozilla.org/`})})},{title:`文章相对资源`,code:`
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
      `,content:(0,s.jsx)(`div`,{style:c,children:(0,s.jsx)(a,{title:`文章内视频`,description:`src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。`,duration:`0:10`,provider:`MDX`,volume:.35,articleSourcePath:`/posts/video-demo.mdx`,resolveAssetUrl:u,src:`./flower.mp4`})})},{title:`加载和错误状态`,code:`
        <VideoEmbed
          title="不可用视频"
          description="无效 src 会触发组件内置的加载和错误状态。"
          duration="0:00"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />;
      `,content:(0,s.jsx)(`div`,{style:c,children:(0,s.jsx)(a,{title:`不可用视频`,description:`无效 src 会触发组件内置的加载和错误状态。`,duration:`0:00`,provider:`Demo`,src:`/media/missing-video.mp4`,href:`https://developer.mozilla.org/`})})}],props:[{name:`title`,type:`string`,required:!0,description:`视频卡片的主标题。`},{name:`src`,type:`string`,description:`用于内联播放的视频地址。`},{name:`href`,type:`string`,description:`可选的外部视频链接。`},{name:`volume`,type:`number`,description:`初始播放音量，取值范围为 0 到 1。`},{name:`description`,type:`string`,description:`标题下方的辅助说明。`},{name:`duration`,type:`string`,description:`展示在来源旁边的时长文本。`},{name:`poster`,type:`string`,description:`外链卡片中使用的可选封面图。`},{name:`provider`,type:`string`,description:`展示在卡片顶部的来源标签。`},{name:`className`,type:`string`,description:`传给视频嵌入根节点的 className。`},{name:`articleSourcePath`,type:`string`,description:`当前文章路径，用于解析相对视频或封面资源。`},{name:`resolveAssetUrl`,type:`(articleSourcePath: string, assetPath: string) => string | undefined`,description:`把相对视频或封面资源转换为可访问 URL。`},...d]});export{f as default};