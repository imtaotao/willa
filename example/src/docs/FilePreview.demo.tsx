import { unindent } from "aidly";
import { FilePreview } from "willa/FilePreview";
import "willa/FilePreview.css";

import { defineDoc } from "#example/catalog/defineDoc";

const imageSrc =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

export default defineDoc({
  id: "file-preview",
  name: "FilePreview",
  category: "content",
  packageName: "willa/FilePreview",
  description:
    "用于文件预览，默认支持图片、视频、音频、PDF、代码和普通文本内联展示，其他文件提供下载兜底。",
  imports: [{ name: "FilePreview", from: "willa/FilePreview" }],
  css: "willa/FilePreview.css",
  demo: {
    name: "FilePreview",
    component: FilePreview,
    props: {
      src: imageSrc,
      name: "landscape-preview.jpg",
      meta: "图片 · 1.2 MB",
      alt: "湖边风景",
    },
  },
  code: unindent(`
    import { FilePreview } from "willa/FilePreview";
    import "willa/FilePreview.css";

    <FilePreview
      src="https://example.com/landscape.jpg"
      name="landscape-preview.jpg"
      meta="图片 · 1.2 MB"
      alt="湖边风景"
    />
  `),
  props: [
    {
      name: "src",
      type: "string",
      required: true,
      description: "文件地址。",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "文件名称。",
    },
    {
      name: "type",
      type: '"auto" | "image" | "video" | "audio" | "pdf" | "code" | "text" | "download"',
      defaultValue: '"auto"',
      description: "预览类型。auto 会根据 mimeType 或扩展名推断。",
    },
    { name: "mimeType", type: "string", description: "文件 MIME 类型。" },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "预览区域尺寸。",
    },
    { name: "meta", type: "ReactNode", description: "文件辅助信息。" },
    {
      name: "text",
      type: "string",
      description: "文本或代码预览内容。FilePreview 不会自动请求 src 内容。",
    },
    {
      name: "language",
      type: "string",
      description: "代码预览语言。未传时会根据文件扩展名推断。",
    },
    {
      name: "showLineNumbers",
      type: "boolean",
      description: "代码预览是否展示行号。",
    },
    { name: "poster", type: "string", description: "视频封面。" },
    { name: "alt", type: "string", description: "图片替代文本。" },
    { name: "downloadName", type: "string", description: "下载文件名。" },
    { name: "actions", type: "ReactNode", description: "头部额外操作。" },
  ],
  sections: [
    {
      title: "代码预览",
      code: `
        <FilePreview
          name="config.json"
          src="/config.json"
          showLineNumbers
          text={'{ "theme": "light", "status": "ready" }'}
        />
      `,
      content: (
        <FilePreview
          name="config.json"
          src="/willa/"
          meta="JSON · 2 KB"
          showLineNumbers
          text={unindent(`
            {
              "theme": "light",
              "status": "ready",
              "components": ["FilePreview", "Upload", "Download"]
            }
          `)}
        />
      ),
    },
    {
      title: "文本预览",
      code: `
        <FilePreview
          type="text"
          name="notes.txt"
          src="/notes.txt"
          text="这是一段普通文本内容。"
        />
      `,
      content: (
        <FilePreview
          type="text"
          name="notes.txt"
          src="/willa/"
          meta="TXT · 1 KB"
          text="这是一段普通文本内容，适合预览日志摘要、说明文档或纯文本片段。"
        />
      ),
    },
    {
      title: "下载兜底",
      code: `
        <FilePreview type="download" src="/report.xlsx" name="report.xlsx" meta="无法内联预览" />
      `,
      content: (
        <FilePreview
          type="download"
          src="/willa/"
          name="quarterly-report.xlsx"
          meta="Excel · 42 KB"
        />
      ),
    },
  ],
});
