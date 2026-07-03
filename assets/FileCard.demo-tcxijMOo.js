import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./defineDoc-Cid5xIoZ.js";import{n,t as r}from"./FileCard-DzmAO_fw.js";var i=e(),a={display:`grid`,gap:`0.75rem`,justifyItems:`center`},o={...a,gridTemplateColumns:`repeat(auto-fit, minmax(13.5rem, 1fr))`,width:`min(100%, 56rem)`},s=[{name:`excel-has-long-long-long-file-name.xlsx`,size:`1 KB`},{name:`word-file.docx`,size:`1 KB`},{name:`pdf-file.pdf`,size:`1 KB`},{name:`ppt-file.pptx`,size:`1 KB`},{name:`feedback.csv`,size:`12 KB`},{name:`screen-capture.png`,size:`428 KB`},{name:`meeting-audio.mp3`,size:`8 MB`},{name:`launch-video.mp4`,size:`26 MB`},{name:`component-data.json`,size:`2 KB`},{name:`zip-file.zip`,size:`1 KB`},{name:`javascript-file.js`,size:`1 KB`}],c=t({id:`file-card`,name:`FileCard`,packageName:`willa/FileCard`,description:`用于文章、资料下载和附件列表中的文件卡片。`,imports:[{name:`FileCard`,from:`willa/FileCard`},{name:`FileCardIcon`,from:`willa/FileCard`}],css:`willa/FileCard.css`,demo:{name:`FileListPreview`,component:()=>(0,i.jsx)(`div`,{style:a,children:s.map(e=>(0,i.jsx)(r,{name:e.name,size:e.size},e.name))})},code:`
    import { FileCard } from "willa/FileCard";
    import "willa/FileCard.css";

    const files = [
      { name: "excel-has-long-long-long-file-name.xlsx", size: "1 KB" },
      { name: "word-file.docx", size: "1 KB" },
      { name: "pdf-file.pdf", size: "1 KB" },
      { name: "ppt-file.pptx", size: "1 KB" },
      { name: "feedback.csv", size: "12 KB" },
      { name: "screen-capture.png", size: "428 KB" },
      { name: "meeting-audio.mp3", size: "8 MB" },
      { name: "launch-video.mp4", size: "26 MB" },
      { name: "component-data.json", size: "2 KB" },
    ];

    <div style={{ display: "grid", gap: "0.75rem" }}>
      {files.map((file) => (
        <FileCard key={file.name} name={file.name} size={file.size} />
      ))}
    </div>;
  `,sections:[{title:`链接文件`,code:`
        <FileCard
          href="https://example.com/report.pdf"
          target="_blank"
          name="quarterly-report.pdf"
          size="428 KB"
        />;
      `,content:(0,i.jsx)(r,{href:`https://example.com/report.pdf`,target:`_blank`,name:`quarterly-report.pdf`,size:`428 KB`})},{title:`自定义类型`,code:`
        <div style={compactFileListStyle}>
          <FileCard name="README" extension="md" size="2 KB" />
          <FileCard name="dataset" extension="csv" size="24 KB" />
          <FileCard name="archive.backup" tone="archive" size="1.2 MB" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:o,children:[(0,i.jsx)(r,{name:`README`,extension:`md`,size:`2 KB`}),(0,i.jsx)(r,{name:`dataset`,extension:`csv`,size:`24 KB`}),(0,i.jsx)(r,{name:`archive.backup`,tone:`archive`,size:`1.2 MB`})]})},{title:`图片和媒体类型`,code:`
        <div style={compactFileListStyle}>
          <FileCard name="feedback.csv" size="12 KB" />
          <FileCard name="screen-capture.png" size="428 KB" />
          <FileCard name="meeting-audio.mp3" size="8 MB" />
          <FileCard name="launch-video.mp4" size="26 MB" />
          <FileCard name="component-data.json" size="2 KB" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:o,children:[(0,i.jsx)(r,{name:`feedback.csv`,size:`12 KB`}),(0,i.jsx)(r,{name:`screen-capture.png`,size:`428 KB`}),(0,i.jsx)(r,{name:`meeting-audio.mp3`,size:`8 MB`}),(0,i.jsx)(r,{name:`launch-video.mp4`,size:`26 MB`}),(0,i.jsx)(r,{name:`component-data.json`,size:`2 KB`})]})},{title:`文件图标`,code:`
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FileCardIcon name="feedback.csv" size="sm" />
          <FileCardIcon name="roadmap.md" size="md" />
          <FileCardIcon name="screen-capture.png" size="lg" />
        </div>;
      `,content:(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,alignItems:`center`,justifyContent:`center`},children:[(0,i.jsx)(n,{name:`feedback.csv`,size:`sm`}),(0,i.jsx)(n,{name:`roadmap.md`,size:`md`}),(0,i.jsx)(n,{name:`screen-capture.png`,size:`lg`})]})},{title:`自定义图标`,code:`
        <FileCard
          name="design-source.fig"
          extension="fig"
          icon={<span>F</span>}
          tone="neutral"
          size="860 KB"
        />;
      `,content:(0,i.jsx)(r,{name:`design-source.fig`,extension:`fig`,icon:(0,i.jsx)(`span`,{children:`F`}),tone:`neutral`,size:`860 KB`})}],props:[{name:`name`,type:`string`,required:!0,description:`文件名，组件会根据扩展名自动推断图标色调。`},{name:`href`,type:`string`,description:`传入后渲染为可点击链接卡片。`},{name:`size`,type:`ReactNode`,description:`文件大小或副文案。`},{name:`extension`,type:`string`,defaultValue:`从 name 推导`,description:`手动指定扩展名，适合文件名不包含后缀的场景。`},{name:`tone`,type:`"excel" | "word" | "pdf" | "ppt" | "image" | "audio" | "video" | "archive" | "code" | "text" | "neutral"`,description:`手动指定图标色调。`},{name:`icon`,type:`ReactNode`,defaultValue:`由文件类型决定`,description:`自定义文件图标内容。`},{name:`FileCardIcon.size`,type:`"sm" | "md" | "lg"`,group:`FileCardIcon`,defaultValue:`"md"`,description:`文件图标尺寸。列表、预览类场景通常使用 sm。`},{name:`className`,type:`string`,description:`可选的外层 className。`}]});export{c as default};