import{b1 as e,b5 as i}from"./index-C37Rprsh.js";import{F as t}from"./index-CIsPjnMf.js";import{d as r}from"./defineDoc-UoumDtnn.js";import"./index-B7PFAEj2.js";import"./dom-DvRKQOia.js";import"./index-CWNEp3-Q.js";const a="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",o="http://music.163.com/song/media/outer/url?id=3370714076.mp3",n="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",s="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",p=i(`
  id,feedback,owner,status
  1,export is slow,Grace,pending
  2,theme preview missing,Lin,resolved
  3,mobile layout wraps too early,Chen,reviewing
`),u=r({id:"file-preview",name:"FilePreview",category:"content",packageName:"willa/FilePreview",description:"用于文件预览，默认支持图片、视频、音频、PDF、代码和普通文本内联展示，其他文件提供下载兜底。",imports:[{name:"FilePreview",from:"willa/FilePreview"}],css:"willa/FilePreview.css",demo:{name:"FilePreview",component:t,props:{src:a,name:"landscape-preview.jpg",meta:"图片 · 1.2 MB",alt:"湖边风景"}},code:i(`
    import { FilePreview } from "willa/FilePreview";
    import "willa/FilePreview.css";

    <FilePreview
      src="https://example.com/landscape.jpg"
      name="landscape-preview.jpg"
      meta="图片 · 1.2 MB"
      alt="湖边风景"
    />
  `),props:[{name:"src",type:"string",required:!0,description:"文件地址。"},{name:"name",type:"string",required:!0,description:"文件名称。"},{name:"type",type:'"auto" | "image" | "video" | "audio" | "pdf" | "csv" | "code" | "text" | "download"',defaultValue:'"auto"',description:"预览类型。auto 会根据 mimeType 或扩展名推断。"},{name:"mimeType",type:"string",description:"文件 MIME 类型。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"预览区域尺寸。"},{name:"meta",type:"ReactNode",description:"文件辅助信息。"},{name:"text",type:"string",description:"文本或代码预览内容。FilePreview 不会自动请求 src 内容。"},{name:"language",type:"string",description:"代码预览语言。未传时会根据文件扩展名推断。"},{name:"showLineNumbers",type:"boolean",description:"代码预览是否展示行号。"},{name:"poster",type:"string",description:"视频封面。"},{name:"alt",type:"string",description:"图片替代文本。"},{name:"loading",type:"boolean",description:"是否展示文件加载中状态。"},{name:"loadingText",type:"ReactNode",defaultValue:'"文件加载中"',description:"加载中提示文案。"},{name:"error",type:"ReactNode",description:"文件加载错误状态；传 true 时展示 errorText。"},{name:"errorText",type:"ReactNode",defaultValue:'"文件加载失败，请重试。"',description:"文件加载失败提示文案。"},{name:"downloadName",type:"string",description:"下载文件名。"},{name:"actions",type:"ReactNode",description:"头部额外操作。"},{name:"expandable",type:"boolean",defaultValue:"true",description:"是否展示放大预览按钮。download 类型不会展示放大入口。"},{name:"openInNewWindow",type:"boolean",defaultValue:"true",description:"是否展示新窗口打开按钮。"}],sections:[{title:"加载与错误状态",code:`
        <>
          <FilePreview
            type="image"
            name="loading-preview.jpg"
            src="/loading-preview.jpg"
            meta="图片 · 加载中"
            loading
            loadingText="正在加载文件内容"
          />
          <FilePreview
            type="pdf"
            name="missing-report.pdf"
            src="/missing-report.pdf"
            meta="PDF · 加载失败"
            error
            errorText="文件加载失败，请检查文件地址或稍后重试。"
          />
        </>
      `,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"image",name:"loading-preview.jpg",src:"/loading-preview.jpg",meta:"图片 · 加载中",loading:!0,loadingText:"正在加载文件内容"}),e.jsx(t,{type:"pdf",name:"missing-report.pdf",src:"/missing-report.pdf",meta:"PDF · 加载失败",error:!0,errorText:"文件加载失败，请检查文件地址或稍后重试。"})]})},{title:"视频预览",code:`
        <FilePreview
          type="video"
          name="flower.mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          meta="MP4 · 示例视频"
        />
      `,content:e.jsx(t,{type:"video",name:"flower.mp4",src:n,meta:"MP4 · 示例视频"})},{title:"音频预览",code:`
        <FilePreview
          type="audio"
          name="netease-music-preview.mp3"
          src="http://music.163.com/song/media/outer/url?id=3370714076.mp3"
          meta="网易云音乐 · 音乐片段"
        />
      `,content:e.jsx(t,{type:"audio",name:"netease-music-preview.mp3",src:o,meta:"网易云音乐 · 音乐片段"})},{title:"PDF 预览",code:`
        <FilePreview
          type="pdf"
          name="research-paper.pdf"
          src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
          meta="PDF · 示例文档"
        />
      `,content:e.jsx(t,{type:"pdf",name:"research-paper.pdf",src:s,meta:"PDF · 示例文档"})},{title:"代码预览",code:`
        <FilePreview
          name="config.json"
          src="/config.json"
          showLineNumbers
          text={'{ "theme": "light", "status": "ready" }'}
        />
      `,content:e.jsx(t,{name:"config.json",src:"/willa/",meta:"JSON · 2 KB",showLineNumbers:!0,text:i(`
            {
              "theme": "light",
              "status": "ready",
              "components": ["FilePreview", "Upload", "Download"]
            }
          `)})},{title:"CSV 预览",code:`
        <>
          <FilePreview
            name="feedback.csv"
            src="/feedback.csv"
            meta="CSV · 12 KB"
            text={"id,feedback,owner,status\\n1,export is slow,Grace,pending"}
          />
          <FilePreview
            name="empty.csv"
            src="/empty.csv"
            meta="CSV · 空数据"
            text=""
          />
        </>
      `,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"feedback.csv",src:"/willa/",meta:"CSV · 12 KB",text:p}),e.jsx(t,{name:"empty.csv",src:"/willa/",meta:"CSV · 空数据",text:""})]})},{title:"文本预览",code:`
        <FilePreview
          type="text"
          name="notes.txt"
          src="/notes.txt"
          text="这是一段普通文本内容。"
        />
      `,content:e.jsx(t,{type:"text",name:"notes.txt",src:"/willa/",meta:"TXT · 1 KB",text:"这是一段普通文本内容，适合预览日志摘要、说明文档或纯文本片段。"})},{title:"下载兜底",code:`
        <FilePreview type="download" src="/report.xlsx" name="report.xlsx" meta="无法内联预览" />
      `,content:e.jsx(t,{type:"download",src:"/willa/",name:"quarterly-report.xlsx",meta:"Excel · 42 KB"})}]});export{u as default};
