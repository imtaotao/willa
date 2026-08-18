import { useState } from "react";
import { VideoLink } from "willa/VideoLink";
import "willa/VideoLink.css";

import { defineDoc } from "#example/catalog/defineDoc";
import { createMediaEventProps } from "#example/docs/mediaEventProps";

const resolveDemoAssetUrl = (_articleSourcePath: string, assetPath: string) =>
  `https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${assetPath.replace(
    /^\.\//,
    "",
  )}`;

const eventStatusStyle = {
  margin: "0.75rem 0 0",
  fontSize: "0.875rem",
  opacity: 0.72,
} as const;

const mediaEventProps = createMediaEventProps("video");

const VideoLinkLoopDemo = () => {
  const [status, setStatus] = useState("等待播放");
  const [endedCount, setEndedCount] = useState(0);

  return (
    <div>
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
      />
      <p style={eventStatusStyle}>
        状态：{status}；onEnded 已触发 {endedCount} 次
      </p>
    </div>
  );
};

export default defineDoc({
  id: "video-link",
  name: "VideoLink",
  packageName: "willa/VideoLink",
  description: "可弹出播放层的内联视频链接。",
  imports: [{ name: "VideoLink", from: "willa/VideoLink" }],
  css: "willa/VideoLink.css",
  propGroups: [
    {
      title: "媒体事件",
      description: "这些事件透传给内联 video 元素；仅外部链接状态不会触发。",
    },
  ],
  demo: {
    name: "VideoLink",
    component: VideoLink,
    props: {
      label: "观看示例视频",
      provider: "MDN",
      volume: 0.35,
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      href: "https://developer.mozilla.org/",
    },
  },
  code: `
    import { VideoLink } from "willa/VideoLink";
    import "willa/VideoLink.css";

    <VideoLink
      label="观看示例视频"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />;
  `,
  sections: [
    {
      title: "事件循环播放",
      code: `
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
      `,
      content: <VideoLinkLoopDemo />,
    },
    {
      title: "仅外部链接",
      code: `
        <VideoLink
          label="打开视频来源"
          provider="MDN"
          href="https://developer.mozilla.org/"
        />;
      `,
      content: (
        <VideoLink
          label="打开视频来源"
          provider="MDN"
          href="https://developer.mozilla.org/"
        />
      ),
    },
    {
      title: "文章相对资源",
      code: `
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
      `,
      content: (
        <VideoLink
          provider="MDX"
          volume={0.35}
          articleSourcePath="/posts/video-demo.mdx"
          resolveAssetUrl={resolveDemoAssetUrl}
          src="./flower.mp4"
        >
          播放文章视频
        </VideoLink>
      ),
    },
    {
      title: "加载和错误状态",
      code: `
        <VideoLink
          label="打开不可用视频"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />;
      `,
      content: (
        <VideoLink
          label="打开不可用视频"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />
      ),
    },
  ],
  props: [
    {
      name: "src",
      type: "string",
      description: "用于内联播放的视频地址。",
    },
    {
      name: "href",
      type: "string",
      description: "可选的外部视频链接。",
    },
    {
      name: "label",
      type: "string",
      description: "未传 children 时展示的文本标签。",
    },
    {
      name: "volume",
      type: "number",
      description: "初始播放音量，取值范围为 0 到 1。",
    },
    {
      name: "provider",
      type: "string",
      description: "标题上方展示的来源标签。",
    },
    {
      name: "className",
      type: "string",
      description: "传给视频链接根节点的 className。",
    },
    {
      name: "articleSourcePath",
      type: "string",
      description: "当前文章路径，用于解析相对视频资源。",
    },
    {
      name: "resolveAssetUrl",
      type: "(articleSourcePath: string, assetPath: string) => string | undefined",
      description: "把相对视频资源转换为可访问 URL。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "自定义内联内容。",
    },
    ...mediaEventProps,
  ],
});
