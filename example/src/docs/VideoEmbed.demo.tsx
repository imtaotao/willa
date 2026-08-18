import { useState } from "react";
import { VideoEmbed } from "willa/VideoEmbed";
import "willa/VideoEmbed.css";

import { defineDoc } from "#example/catalog/defineDoc";
import { createMediaEventProps } from "#example/docs/mediaEventProps";

const previewStyle = {
  width: "min(100%, 48rem)",
  margin: "0 auto",
} as const;

const eventStatusStyle = {
  margin: "0.75rem 0 0",
  fontSize: "0.875rem",
  opacity: 0.72,
} as const;

const resolveDemoAssetUrl = (_articleSourcePath: string, assetPath: string) =>
  `https://interactive-examples.mdn.mozilla.net/media/cc0-videos/${assetPath.replace(
    /^\.\//,
    "",
  )}`;

const mediaEventProps = createMediaEventProps("video");

const VideoEmbedPreview = () => (
  <div style={previewStyle}>
    <VideoEmbed
      title="Big Buck Bunny"
      description="一个带内联控制条的短视频示例。"
      duration="0:10"
      provider="MDN"
      volume={0.35}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      href="https://developer.mozilla.org/"
    />
  </div>
);

const VideoEmbedLoopDemo = () => {
  const [status, setStatus] = useState("等待播放");
  const [endedCount, setEndedCount] = useState(0);

  return (
    <div style={previewStyle}>
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
      />
      <p style={eventStatusStyle}>
        状态：{status}；onEnded 已触发 {endedCount} 次
      </p>
    </div>
  );
};

export default defineDoc({
  id: "video-embed",
  name: "VideoEmbed",
  packageName: "willa/VideoEmbed",
  description: "视频卡片组件，可选择在页面内播放。",
  imports: [{ name: "VideoEmbed", from: "willa/VideoEmbed" }],
  css: "willa/VideoEmbed.css",
  propGroups: [
    {
      title: "媒体事件",
      description: "这些事件透传给内联 video 元素；仅外部链接状态不会触发。",
    },
  ],
  demo: {
    name: "VideoEmbedPreview",
    component: VideoEmbedPreview,
  },
  code: `
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
  `,
  sections: [
    {
      title: "事件循环播放",
      code: `
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
      `,
      content: <VideoEmbedLoopDemo />,
    },
    {
      title: "仅外部链接",
      code: `
        <VideoEmbed
          title="外部视频"
          description="没有 src 时，组件会渲染为可点击的视频外链卡片。"
          duration="0:10"
          provider="MDN"
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          href="https://developer.mozilla.org/"
        />;
      `,
      content: (
        <div style={previewStyle}>
          <VideoEmbed
            title="外部视频"
            description="没有 src 时，组件会渲染为可点击的视频外链卡片。"
            duration="0:10"
            provider="MDN"
            poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
            href="https://developer.mozilla.org/"
          />
        </div>
      ),
    },
    {
      title: "文章相对资源",
      code: `
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
      `,
      content: (
        <div style={previewStyle}>
          <VideoEmbed
            title="文章内视频"
            description="src 可以是相对路径，由 articleSourcePath 和 resolveAssetUrl 转成可访问地址。"
            duration="0:10"
            provider="MDX"
            volume={0.35}
            articleSourcePath="/posts/video-demo.mdx"
            resolveAssetUrl={resolveDemoAssetUrl}
            src="./flower.mp4"
          />
        </div>
      ),
    },
    {
      title: "加载和错误状态",
      code: `
        <VideoEmbed
          title="不可用视频"
          description="无效 src 会触发组件内置的加载和错误状态。"
          duration="0:00"
          provider="Demo"
          src="/media/missing-video.mp4"
          href="https://developer.mozilla.org/"
        />;
      `,
      content: (
        <div style={previewStyle}>
          <VideoEmbed
            title="不可用视频"
            description="无效 src 会触发组件内置的加载和错误状态。"
            duration="0:00"
            provider="Demo"
            src="/media/missing-video.mp4"
            href="https://developer.mozilla.org/"
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "string",
      required: true,
      description: "视频卡片的主标题。",
    },
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
      name: "volume",
      type: "number",
      description: "初始播放音量，取值范围为 0 到 1。",
    },
    {
      name: "description",
      type: "string",
      description: "标题下方的辅助说明。",
    },
    {
      name: "duration",
      type: "string",
      description: "展示在来源旁边的时长文本。",
    },
    {
      name: "poster",
      type: "string",
      description: "外链卡片中使用的可选封面图。",
    },
    {
      name: "provider",
      type: "string",
      description: "展示在卡片顶部的来源标签。",
    },
    {
      name: "className",
      type: "string",
      description: "传给视频嵌入根节点的 className。",
    },
    {
      name: "articleSourcePath",
      type: "string",
      description: "当前文章路径，用于解析相对视频或封面资源。",
    },
    {
      name: "resolveAssetUrl",
      type: "(articleSourcePath: string, assetPath: string) => string | undefined",
      description: "把相对视频或封面资源转换为可访问 URL。",
    },
    ...mediaEventProps,
  ],
});
