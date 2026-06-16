import{aA as s,e as N,y as _,ao as P,R as F,an as b,ad as T,J as c,q as L,aD as o}from"./index-8h0iXH-K.js";import{d as B}from"./defineDoc-WQsG9bI2.js";function r(e){const{src:a,name:i,type:t="auto",mimeType:d,size:p="md",meta:l,text:w,language:x,showLineNumbers:u,poster:v,alt:f,downloadName:g,actions:h,className:y,...j}=e,n=q({name:i,type:t,mimeType:d});return s.jsxs("section",{...j,className:P("willa-file-preview",`willa-file-preview--${n}`,`willa-file-preview--${p}`,y),children:[s.jsxs("div",{className:"willa-file-preview__header",children:[s.jsx("span",{className:"willa-file-preview__icon","aria-hidden":"true",children:I(n)}),s.jsxs("span",{className:"willa-file-preview__heading",children:[s.jsx("span",{className:"willa-file-preview__name",title:i,children:i}),l?s.jsx("span",{className:"willa-file-preview__meta",children:l}):null]}),s.jsxs("div",{className:"willa-file-preview__actions",children:[h,s.jsx(N,{href:a,variant:"ghost",size:"sm",icon:s.jsx(_,{}),download:g??!0,children:"下载"})]})]}),s.jsx("div",{className:"willa-file-preview__body",children:E({alt:f,language:x,name:i,poster:v,resolvedType:n,showLineNumbers:u,src:a,text:w})})]})}const E=e=>e.resolvedType==="image"?s.jsx("img",{className:"willa-file-preview__image",src:e.src,alt:e.alt??e.name}):e.resolvedType==="video"?s.jsx("video",{className:"willa-file-preview__media",src:e.src,poster:e.poster,controls:!0}):e.resolvedType==="audio"?s.jsx("audio",{className:"willa-file-preview__audio",src:e.src,controls:!0}):e.resolvedType==="pdf"?s.jsx("iframe",{className:"willa-file-preview__frame",src:e.src,title:e.name}):e.resolvedType==="text"?s.jsx("pre",{className:"willa-file-preview__text",children:s.jsx("code",{children:e.text??"暂无可预览文本。"})}):e.resolvedType==="code"?s.jsx(L,{className:"willa-file-preview__code",code:e.text??"",language:e.language??S(e.name),showLineNumbers:e.showLineNumbers}):s.jsxs("div",{className:"willa-file-preview__download",children:[s.jsx(c,{}),s.jsx("strong",{children:e.name}),s.jsx("span",{children:"此文件类型不支持内联预览，可以直接下载查看。"})]}),q=e=>{var t;if(e.type!=="auto")return e.type;const a=((t=e.mimeType)==null?void 0:t.toLowerCase())??"",i=m(e.name);return a.startsWith("image/")||D.has(i)?"image":a.startsWith("video/")||k.has(i)?"video":a.startsWith("audio/")||C.has(i)?"audio":a==="application/pdf"||i==="pdf"?"pdf":M.has(i)?"code":a.startsWith("text/")||R.has(i)?"text":"download"},I=e=>e==="image"?s.jsx(F,{}):e==="video"?s.jsx(b,{}):e==="audio"?s.jsx(T,{}):s.jsx(c,{}),m=e=>e.trim().toLowerCase().split(".").filter(Boolean).pop()??"",S=e=>{const a=m(e);return W[a]??a},D=new Set(["avif","gif","jpeg","jpg","png","webp"]),k=new Set(["mov","mp4","webm"]),C=new Set(["aac","flac","m4a","mp3","ogg","wav"]),M=new Set(["bash","c","cpp","css","diff","go","html","java","js","json","jsx","md","py","rs","sh","sql","ts","tsx","xml","yaml","yml"]),R=new Set(["csv","log","txt"]),W={bash:"bash",c:"c",cpp:"cpp",css:"css",diff:"diff",go:"go",html:"html",java:"java",js:"javascript",json:"json",jsx:"jsx",md:"markdown",py:"python",rs:"rust",sh:"bash",sql:"sql",ts:"typescript",tsx:"tsx",xml:"xml",yaml:"yaml",yml:"yaml"},z="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",J=B({id:"file-preview",name:"FilePreview",category:"content",packageName:"willa/FilePreview",description:"用于文件预览，默认支持图片、视频、音频、PDF、代码和普通文本内联展示，其他文件提供下载兜底。",imports:[{name:"FilePreview",from:"willa/FilePreview"}],css:"willa/FilePreview.css",demo:{name:"FilePreview",component:r,props:{src:z,name:"landscape-preview.jpg",meta:"图片 · 1.2 MB",alt:"湖边风景"}},code:o(`
    import { FilePreview } from "willa/FilePreview";
    import "willa/FilePreview.css";

    <FilePreview
      src="https://example.com/landscape.jpg"
      name="landscape-preview.jpg"
      meta="图片 · 1.2 MB"
      alt="湖边风景"
    />
  `),props:[{name:"src",type:"string",required:!0,description:"文件地址。"},{name:"name",type:"string",required:!0,description:"文件名称。"},{name:"type",type:'"auto" | "image" | "video" | "audio" | "pdf" | "code" | "text" | "download"',defaultValue:'"auto"',description:"预览类型。auto 会根据 mimeType 或扩展名推断。"},{name:"mimeType",type:"string",description:"文件 MIME 类型。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"预览区域尺寸。"},{name:"meta",type:"ReactNode",description:"文件辅助信息。"},{name:"text",type:"string",description:"文本或代码预览内容。FilePreview 不会自动请求 src 内容。"},{name:"language",type:"string",description:"代码预览语言。未传时会根据文件扩展名推断。"},{name:"showLineNumbers",type:"boolean",description:"代码预览是否展示行号。"},{name:"poster",type:"string",description:"视频封面。"},{name:"alt",type:"string",description:"图片替代文本。"},{name:"downloadName",type:"string",description:"下载文件名。"},{name:"actions",type:"ReactNode",description:"头部额外操作。"}],sections:[{title:"代码预览",code:`
        <FilePreview
          name="config.json"
          src="/config.json"
          showLineNumbers
          text={'{ "theme": "light", "status": "ready" }'}
        />
      `,content:s.jsx(r,{name:"config.json",src:"/willa/",meta:"JSON · 2 KB",showLineNumbers:!0,text:o(`
            {
              "theme": "light",
              "status": "ready",
              "components": ["FilePreview", "Upload", "Download"]
            }
          `)})},{title:"文本预览",code:`
        <FilePreview
          type="text"
          name="notes.txt"
          src="/notes.txt"
          text="这是一段普通文本内容。"
        />
      `,content:s.jsx(r,{type:"text",name:"notes.txt",src:"/willa/",meta:"TXT · 1 KB",text:"这是一段普通文本内容，适合预览日志摘要、说明文档或纯文本片段。"})},{title:"下载兜底",code:`
        <FilePreview type="download" src="/report.xlsx" name="report.xlsx" meta="无法内联预览" />
      `,content:s.jsx(r,{type:"download",src:"/willa/",name:"quarterly-report.xlsx",meta:"Excel · 42 KB"})}]});export{J as default};
