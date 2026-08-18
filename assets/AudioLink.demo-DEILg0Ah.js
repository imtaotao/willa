import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./defineDoc-Cid5xIoZ.js";import{t as i}from"./mediaEventProps-DixrlsLD.js";import{t as a}from"./AudioLink-BiS1Nk5v.js";var o=n(e(),1),s=t(),c=(e,t)=>`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/${t.replace(/^\.\//,``)}`,l={margin:`0.75rem 0 0`,fontSize:`0.875rem`,opacity:.72},u=i(`audio`),d=r({id:`audio-link`,name:`AudioLink`,packageName:`willa/AudioLink`,description:`可展开为小播放器的内联音频链接。`,imports:[{name:`AudioLink`,from:`willa/AudioLink`}],css:`willa/AudioLink.css`,propGroups:[{title:`媒体事件`,description:`这些事件透传给内联 audio 元素；仅外部链接状态不会触发。`}],demo:{name:`AudioLink`,component:a,props:{label:`播放音乐片段`,provider:`网易云音乐`,volume:.4,src:`http://music.163.com/song/media/outer/url?id=3370714076.mp3`,href:`http://music.163.com/song?id=3370714076`}},code:`
    import { AudioLink } from "willa/AudioLink";
    import "willa/AudioLink.css";

    <AudioLink
      label="播放音乐片段"
      provider="网易云音乐"
      volume={0.4}
      src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
      href="http://music.163.com/song?id=3370714076"
    />;
  `,sections:[{title:`事件循环播放`,code:`
        const [status, setStatus] = useState("等待播放");
        const [endedCount, setEndedCount] = useState(0);

        <AudioLink
          label="循环播放事件验证"
          provider="MDN"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          onPlay={() => setStatus("正在播放")}
          onPause={() => setStatus("已暂停")}
          onEnded={(event) => {
            setEndedCount((count) => count + 1);
            setStatus("播放结束，正在重新播放");
            event.currentTarget.currentTime = 0;
            void event.currentTarget.play();
          }}
        />;
      `,content:(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`等待播放`),[n,r]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(a,{label:`循环播放事件验证`,provider:`MDN`,src:`https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3`,onPlay:()=>t(`正在播放`),onPause:()=>t(`已暂停`),onEnded:e=>{r(e=>e+1),t(`播放结束，正在重新播放`),e.currentTarget.currentTime=0,e.currentTarget.play()}}),(0,s.jsxs)(`p`,{style:l,children:[`状态：`,e,`；onEnded 已触发 `,n,` 次`]})]})},{})},{title:`仅外部链接`,code:`
        <AudioLink
          label="打开音频来源"
          provider="网易云音乐"
          href="http://music.163.com/song?id=3370714076"
        />;
      `,content:(0,s.jsx)(a,{label:`打开音频来源`,provider:`网易云音乐`,href:`http://music.163.com/song?id=3370714076`})},{title:`文章相对资源`,code:`
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
      `,content:(0,s.jsx)(a,{provider:`MDX`,volume:.45,articleSourcePath:`/posts/audio-demo.mdx`,resolveAssetUrl:c,src:`./t-rex-roar.mp3`,children:`播放文章音频`})},{title:`加载和错误状态`,code:`
        <AudioLink
          label="播放不可用音频"
          provider="Demo"
          src="/media/missing-audio.mp3"
          href="https://developer.mozilla.org/"
        />;
      `,content:(0,s.jsx)(a,{label:`播放不可用音频`,provider:`Demo`,src:`/media/missing-audio.mp3`,href:`https://developer.mozilla.org/`})}],props:[{name:`src`,type:`string`,description:`内联播放器使用的音频地址。`},{name:`href`,type:`string`,description:`可选的外部音频链接。`},{name:`label`,type:`string`,description:`链接展示的标题。`},{name:`volume`,type:`number`,description:`初始播放音量，取值范围为 0 到 1。`},{name:`provider`,type:`string`,description:`标题上方展示的来源标签。`},{name:`className`,type:`string`,description:`传给音频链接根节点的 className。`},{name:`articleSourcePath`,type:`string`,defaultValue:`""`,description:`当前文章路径，用于解析相对音频资源。`},{name:`resolveAssetUrl`,type:`(articleSourcePath: string, assetPath: string) => string | undefined`,description:`把相对音频资源转换为可访问 URL。`},{name:`children`,type:`ReactNode`,description:`自定义链接内容。`},...u]});export{d as default};