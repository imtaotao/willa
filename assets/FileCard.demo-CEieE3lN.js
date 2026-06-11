import{al as i,ac as N}from"./index-CQ5SwHlJ.js";import{d as K}from"./defineDoc-BYfb4gho.js";const E={csv:"excel",doc:"word",docx:"word",gz:"archive",java:"code",js:"code",json:"code",md:"text",pdf:"pdf",ppt:"ppt",pptx:"ppt",py:"code",rar:"archive",ts:"code",tsx:"code",txt:"text",xls:"excel",xlsx:"excel",zip:"archive"};function a(e){if(L(e)){const{name:r,size:v,extension:l,tone:F,icon:j,className:C,href:y,target:c,rel:o,...w}=e,B=c==="_blank"&&!o?"noreferrer":o;return i.jsx("a",{...w,className:d({className:C,interactive:!0,tone:p({name:r,extension:l,tone:F})}),href:y,target:c,rel:B,children:m({name:r,size:v,extension:l,icon:j})})}const{name:n,size:s,extension:t,tone:z,icon:u,className:h,...g}=e;return i.jsx("div",{...g,className:d({className:h,interactive:!1,tone:p({name:n,extension:t,tone:z})}),children:m({name:n,size:s,extension:t,icon:u})})}const L=e=>typeof e.href=="string",d=e=>N("willa-file-card",`willa-file-card--${e.tone}`,e.interactive&&"willa-file-card--interactive",e.className),m=e=>{const n=f(e.extension??e.name);return i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"willa-file-card-icon","aria-hidden":"true",children:e.icon??i.jsx("span",{className:"willa-file-card-icon-label",children:b(n)})}),i.jsxs("span",{className:"willa-file-card-content",children:[i.jsx("span",{className:"willa-file-card-name",title:e.name,children:e.name}),e.size?i.jsx("span",{className:"willa-file-card-meta",children:e.size}):null]})]})},p=e=>{if(e.tone)return e.tone;const n=f(e.extension??e.name);return E[n]??"neutral"},f=e=>{const n=e.trim().toLowerCase(),s=n.split(".").filter(Boolean);return(n.includes(".")?s[s.length-1]:n)??""},b=e=>e?e==="javascript"?"JS":e==="typescript"?"TS":e.slice(0,4).toUpperCase():"FILE",x={display:"grid",gap:"0.75rem",justifyItems:"center"},k={...x,gridTemplateColumns:"repeat(auto-fit, minmax(13.5rem, 1fr))",width:"min(100%, 56rem)"},R=[{name:"excel-has-long-long-long-file-name.xlsx",size:"1 KB"},{name:"word-file.docx",size:"1 KB"},{name:"pdf-file.pdf",size:"1 KB"},{name:"ppt-file.pptx",size:"1 KB"},{name:"zip-file.zip",size:"1 KB"},{name:"javascript-file.js",size:"1 KB"}],M=()=>i.jsx("div",{style:x,children:R.map(e=>i.jsx(a,{name:e.name,size:e.size},e.name))}),T=K({id:"file-card",name:"FileCard",packageName:"willa/FileCard",description:"用于文章、资料下载和附件列表中的文件卡片。",imports:[{name:"FileCard",from:"willa/FileCard"}],css:"willa/FileCard.css",demo:{name:"FileListPreview",component:M},code:`
    import { FileCard } from "willa/FileCard";
    import "willa/FileCard.css";

    const files = [
      { name: "excel-has-long-long-long-file-name.xlsx", size: "1 KB" },
      { name: "word-file.docx", size: "1 KB" },
      { name: "pdf-file.pdf", size: "1 KB" },
      { name: "ppt-file.pptx", size: "1 KB" },
    ];

    <div style={{ display: "grid", gap: "0.75rem" }}>
      {files.map((file) => (
        <FileCard key={file.name} name={file.name} size={file.size} />
      ))}
    </div>;
  `,sections:[{title:"链接文件",code:`
        <FileCard
          href="https://example.com/report.pdf"
          target="_blank"
          name="quarterly-report.pdf"
          size="428 KB"
        />;
      `,content:i.jsx(a,{href:"https://example.com/report.pdf",target:"_blank",name:"quarterly-report.pdf",size:"428 KB"})},{title:"自定义类型",code:`
        <div style={compactFileListStyle}>
          <FileCard name="README" extension="md" size="2 KB" />
          <FileCard name="dataset" extension="csv" size="24 KB" />
          <FileCard name="archive.backup" tone="archive" size="1.2 MB" />
        </div>;
      `,content:i.jsxs("div",{style:k,children:[i.jsx(a,{name:"README",extension:"md",size:"2 KB"}),i.jsx(a,{name:"dataset",extension:"csv",size:"24 KB"}),i.jsx(a,{name:"archive.backup",tone:"archive",size:"1.2 MB"})]})},{title:"自定义图标",code:`
        <FileCard
          name="design-source.fig"
          extension="fig"
          icon={<span>F</span>}
          tone="neutral"
          size="860 KB"
        />;
      `,content:i.jsx(a,{name:"design-source.fig",extension:"fig",icon:i.jsx("span",{children:"F"}),tone:"neutral",size:"860 KB"})}],props:[{name:"name",type:"string",required:!0,description:"文件名，组件会根据扩展名自动推断图标色调。"},{name:"href",type:"string",description:"传入后渲染为可点击链接卡片。"},{name:"size",type:"ReactNode",description:"文件大小或副文案。"},{name:"extension",type:"string",description:"手动指定扩展名，适合文件名不包含后缀的场景。"},{name:"tone",type:'"excel" | "word" | "pdf" | "ppt" | "archive" | "code" | "text" | "neutral"',description:"手动指定图标色调。"},{name:"icon",type:"ReactNode",description:"自定义文件图标内容。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{T as default};
