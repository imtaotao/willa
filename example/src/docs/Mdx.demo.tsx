import { unindent } from "aidly";
import { useState, type ElementType } from "react";
import { Lightbox } from "willa/Lightbox";
import { Mdx } from "willa/Mdx";

import "willa/Mdx.css";

import { defineDoc } from "#example/catalog/defineDoc";
import type { LightboxState } from "willa/Lightbox";

const lakeImage = {
  src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  alt: "金色时刻的湖边风景",
  title: "MDX 图片",
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    alt: "山间公路",
    caption: "公路",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    alt: "雾气里的森林",
    caption: "森林",
  },
];

const resolveDemoAssetUrl = (_articleSourcePath: string, assetPath: string) =>
  assetPath;

const DemoMdxContent = (props: Record<string, unknown>) => {
  const components = (props.components ?? {}) as Record<string, ElementType>;
  const H1 = components.h1 ?? "h1";
  const H2 = components.h2 ?? "h2";
  const P = components.p ?? "p";
  const A = components.a ?? "a";
  const Pre = components.pre ?? "pre";
  const Code = components.code ?? "code";
  const Img = components.img ?? "img";
  const Callout = components.Callout ?? "div";
  const GitHubRepo = components.GitHubRepo ?? "div";
  const EnglishCards = components.EnglishCards ?? "div";
  const ImageGallery = components.ImageGallery ?? "div";

  return (
    <>
      <H1>MDX 渲染示例</H1>
      <P>
        这个内容组件模拟 MDX 编译后的输出，所有基础标签和 Willa 组件都会由 Mdx
        注入的 components 映射接管。
      </P>
      <Callout tone="tip" title="组件映射">
        MDX 中的标题、链接、代码块、图片和自定义组件会统一使用 Willa
        的展示样式。
      </Callout>
      <GitHubRepo
        repo="imtaotao/willa"
        description="Willa 组件库的公开仓库。"
        language="TypeScript"
        stars="demo"
      />
      <H2>链接和代码</H2>
      <P>
        这是一个 <A href="https://github.com/imtaotao/willa">项目链接</A>，
        也可以渲染内联代码 <Code>const name = "willa"</Code>。
      </P>
      <Pre>
        <Code className="language-tsx--meta-ln">
          {unindent(`
            <Mdx
              Content={DemoMdxContent}
              articleSourcePath="/posts/demo.mdx"
              resolveAssetUrl={resolveAssetUrl}
            />
          `)}
        </Code>
      </Pre>
      <H2>图片组件</H2>
      <P>
        <Img {...lakeImage} />
      </P>
      <ImageGallery images={galleryImages} columns={2} />
      <H2>场景组件</H2>
      <EnglishCards
        title="MDX 内嵌词卡"
        items={[
          {
            word: "compose",
            translation: "组合；构成",
            explanation: "To build something from smaller parts.",
          },
        ]}
      />
    </>
  );
};

const MdxPreview = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <>
      <Mdx
        Content={DemoMdxContent}
        articleSourcePath="/posts/demo.mdx"
        resolveAssetUrl={resolveDemoAssetUrl}
        openLightbox={setLightbox}
      />
      {lightbox?.selectedImage ? (
        <Lightbox
          image={lightbox.selectedImage}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  );
};

export default defineDoc({
  id: "mdx",
  name: "Mdx",
  category: "widgets",
  packageName: "willa/Mdx",
  description: "用于渲染 MDX 内容，并把基础标签映射到 Willa 组件体系。",
  imports: [{ name: "Mdx", from: "willa/Mdx" }],
  css: "willa/Mdx.css",
  demo: {
    name: "MdxPreview",
    component: MdxPreview,
  },
  code: unindent(`
    import { Mdx } from "willa/Mdx";
    import "willa/Mdx.css";

    const resolveAssetUrl = (_articleSourcePath: string, assetPath: string) =>
      assetPath;

    function DemoMdxContent(props) {
      const {
        h1: H1 = "h1",
        p: P = "p",
        Callout = "div",
        GitHubRepo = "div",
      } = props.components ?? {};

      return (
        <>
          <H1>MDX 渲染示例</H1>
          <P>这段内容会使用 Mdx 注入的 components 映射渲染。</P>
          <Callout tone="tip" title="组件映射">
            自定义组件也会进入 Willa 的展示体系。
          </Callout>
          <GitHubRepo repo="imtaotao/willa" />
        </>
      );
    }

    <Mdx
      Content={DemoMdxContent}
      articleSourcePath="/posts/demo.mdx"
      resolveAssetUrl={resolveAssetUrl}
    />;
  `),
  props: [
    {
      name: "Content",
      type: "ComponentType<Record<string, unknown>>",
      required: true,
      description: "MDX 编译后的内容组件。",
    },
    {
      name: "articleSourcePath",
      type: "string",
      required: true,
      description: "当前文章路径，用于解析相对资源。",
    },
    {
      name: "resolveAssetUrl",
      type: "(articleSourcePath: string, assetPath: string) => string | undefined",
      required: true,
      description: "把 MDX 中的相对资源转换为可访问 URL。",
    },
    {
      name: "openLightbox",
      type: "(state: LightboxState | null) => void",
      description: "图片或图片组触发预览时的灯箱状态回调。",
    },
  ],
});
