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
  const Badge = components.Badge ?? "span";
  const Card = components.Card ?? "div";
  const Citation = components.Citation ?? "span";
  const Collapse = components.Collapse ?? "div";
  const DescriptionList = components.DescriptionList ?? "dl";
  const DiffViewer = components.DiffViewer ?? "div";
  const Download = components.Download ?? "a";
  const FileCard = components.FileCard ?? "div";
  const FileTree = components.FileTree ?? "div";
  const ChatThread = components.ChatThread ?? "div";
  const KbdShortcut = components.KbdShortcut ?? "span";
  const List = components.List ?? "div";
  const SourceCard = components.SourceCard ?? "div";
  const Table = components.Table ?? "table";
  const Timeline = components.Timeline ?? "div";
  const Poem = components.Poem ?? "div";
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
      <Card title="内容组件" description="MDX 可以直接使用常见内容型组件。">
        <Badge tone="success">已内置</Badge>
        <p>
          快捷键也可以直接写成 <KbdShortcut keys={["⌘", "K"]} />。
        </p>
      </Card>
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
      <Img {...lakeImage} />
      <ImageGallery images={galleryImages} columns={2} />
      <H2>文档增强组件</H2>
      <DescriptionList
        items={[
          { label: "包", value: "willa/Mdx" },
          { label: "资源解析", value: "支持相对路径转换" },
        ]}
      />
      <Table
        items={[
          {
            key: "content",
            cells: [
              { label: "类型", value: "内容组件" },
              { label: "示例", value: "Badge、Card、Table" },
            ],
          },
          {
            key: "asset",
            cells: [
              { label: "类型", value: "资源组件" },
              { label: "示例", value: "Download、FileCard" },
            ],
          },
        ]}
      />
      <FileCard name="component-roadmap.md" size="组件规划" />
      <Download href="/willa/" name="下载示例资源" meta="willa 文档入口" />
      <SourceCard
        title="组件文档"
        source="component.md"
        description="组件创建、迁移和验收规则。"
        index="1"
      />
      <List
        items={[
          {
            id: "diff",
            title: "查看改动",
            description: "使用 DiffViewer 展示文本差异。",
          },
          {
            id: "timeline",
            title: "记录过程",
            description: "使用 Timeline 展示发布或执行阶段。",
          },
        ]}
      />
      <Timeline
        items={[
          {
            id: "draft",
            title: "整理内容",
            time: "09:30",
            tone: "success",
          },
          {
            id: "review",
            title: "校对示例",
            time: "10:00",
            tone: "info",
          },
        ]}
      />
      <H2>更多内置块</H2>
      <Citation
        label="组件指南"
        source="docs/component.md"
        href="/willa/?#/component"
        tone="info"
        size="sm"
        status="推荐"
      >
        适合放在正文里的参考链接和补充说明。
      </Citation>
      <Collapse
        title="折叠说明"
        hint="适合 FAQ、步骤说明和补充材料"
        defaultOpen
        size="sm"
      >
        <P>折叠块可以承载更长的说明，适合在 MDX 里收起不希望默认展开的内容。</P>
        <FileTree
          items={[
            {
              name: "docs",
              type: "folder",
              children: [
                { name: "component.md", type: "file" },
                { name: "component-roadmap.md", type: "file" },
              ],
            },
            {
              name: "packages",
              type: "folder",
              children: [{ name: "willa-widgets", type: "folder" }],
            },
          ]}
          collapsible
        />
      </Collapse>
      <ChatThread
        title="文档讨论"
        messages={[
          {
            name: "作者",
            time: "10:32",
            content: "MDX 里可以直接嵌入结构化内容块。",
          },
          {
            align: "right",
            name: "审阅者",
            time: "10:35",
            content: "这样正文里的信息层级会更清楚。",
          },
        ]}
      />
      <Poem
        title="静夜思"
        author="李白"
        dynasty="唐"
        width={420}
        lines={[
          ["床前明月光", "疑是地上霜"],
          ["举头望明月", "低头思故乡"],
        ]}
      />
      <DiffViewer
        before={"export const status = 'draft';"}
        after={"export const status = 'ready';"}
        language="ts"
      />
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
          <Badge tone="success">已内置</Badge>
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
