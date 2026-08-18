import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";import{t as i}from"./mediaEventProps-DixrlsLD.js";import{t as a}from"./VideoLink-CBZ5LbRT.js";var o=n(e(),1),s=t(),c=(e,t)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${t.replace(/^\.\//,``)}`,l={margin:`0.75rem 0 0`,fontSize:`0.875rem`,opacity:.72},u=i(`video`),d=r({id:`video-link`,name:`VideoLink`,packageName:`willa/VideoLink`,description:`可弹出播放层的内联视频链接。`,imports:[{name:`VideoLink`,from:`willa/VideoLink`}],css:`willa/VideoLink.css`,propGroups:[{title:`媒体事件`,description:`这些事件透传给内联 video 元素；仅外部链接状态不会触发。`}],demo:{name:`VideoLink`,component:a,props:{label:`观看示例视频`,provider:`MDN`,volume:.35,src:`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`,href:`https://developer.mozilla.org/`}},code:`
    import { VideoLink } from "willa/VideoLink";
    import "willa/VideoLink.css";

    <VideoLink
      label="观看示例视频"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />;
  `,sections:[{title:`事件循环播放`,code:`
        const [status, setStatus] = useState("等待播放");
        const [endedCount, setEndedCount] = useState(0);

        <VideoLink
          label="循环播放事件验证"
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
      `,content:(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`等待播放`),[n,r]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(a,{label:`循环播放事件验证`,provider:`MDN`,src:`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`,onPlay:()=>t(`正在播放`),onPause:()=>t(`已暂停`),onEnded:e=>{r(e=>e+1),t(`播放结束，正在重新播放`),e.currentTarget.currentTime=0,e.currentTarget.play()}}),(0,s.jsxs)(`p`,{style:l,children:[`状态：`,e,`；onEnded 已触发 `,n,` 次`]})]})},{})},{title:`仅外部链接`,code:`
        <VideoLink
          label="打开视频来源"
          provider="MDN"
          href="https://developer.mozilla.org/"
        />;
      `,content:(0,s.jsx)(a,{label:`打开视频来源`,provider:`MDN`,href:`https://developer.mozilla.org/`})},{title:`文章相对资源`,code:`
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
      `,content:(0,s.jsx)(a,{provider:`MDX`,volume:.35,articleSourcePath:`/posts/video-demo.mdx`,resolveAssetUrl:c,src:`./flower.mp4`,children:`播放文章视频`})},{title:`加载和错误状态`,code:`
        <VideoLink
          label="打开不可用视频"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />;
      `,content:(0,s.jsx)(a,{label:`打开不可用视频`,provider:`Demo`,src:`/media/missing-video.mp4`,href:`https://developer.mozilla.org/`})}],props:[{name:`src`,type:`string`,description:`用于内联播放的视频地址。`},{name:`href`,type:`string`,description:`可选的外部视频链接。`},{name:`label`,type:`string`,description:`未传 children 时展示的文本标签。`},{name:`volume`,type:`number`,description:`初始播放音量，取值范围为 0 到 1。`},{name:`provider`,type:`string`,description:`标题上方展示的来源标签。`},{name:`className`,type:`string`,description:`传给视频链接根节点的 className。`},{name:`articleSourcePath`,type:`string`,description:`当前文章路径，用于解析相对视频资源。`},{name:`resolveAssetUrl`,type:`(articleSourcePath: string, assetPath: string) => string | undefined`,description:`把相对视频资源转换为可访问 URL。`},{name:`children`,type:`ReactNode`,description:`自定义内联内容。`},...u]});export{d as default};