import{aZ as e}from"./index-DesJK3DR.js";import{D as a}from"./index-hCeZMiZE.js";import{d}from"./defineDoc-CDKatl68.js";import"./index-CJICW0Sh.js";const o="data:text/plain;charset=utf-8,%E8%BF%99%E6%98%AF%20Willa%20Download%20%E7%BB%84%E4%BB%B6%E7%9A%84%E6%BC%94%E7%A4%BA%E6%96%87%E4%BB%B6%E3%80%82",t={display:"flex",minWidth:0,alignItems:"center",flexWrap:"wrap",gap:"0.75rem"},n=()=>e.jsxs("div",{style:t,children:[e.jsx(a,{href:o,name:"product-brief.txt",meta:"2 KB"}),e.jsx(a,{href:o,name:"feedback.csv",downloadName:"feedback.csv",variant:"button",size:"md"})]}),s=d({id:"download",name:"Download",packageName:"willa/Download",description:"用于附件、资料和导出结果的轻量下载入口。",imports:[{name:"Download",from:"willa/Download"}],css:"willa/Download.css",demo:{name:"DownloadPreview",component:n},code:`
    import { Download } from "willa/Download";
    import "willa/Download.css";

    <Download
      href="/files/product-brief.txt"
      name="product-brief.txt"
      meta="2 KB"
    />;
  `,sections:[{title:"附件下载",code:`
        <div style={stackStyle}>
          <Download href={demoFileHref} name="feedback.csv" meta="12 KB" />
          <Download href={demoFileHref} name="roadmap.md" meta="Markdown" />
          <Download href={demoFileHref} name="report.pdf" meta="428 KB" />
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(a,{href:o,name:"feedback.csv",meta:"12 KB"}),e.jsx(a,{href:o,name:"roadmap.md",meta:"Markdown"}),e.jsx(a,{href:o,name:"report.pdf",meta:"428 KB"})]})},{title:"按钮形态",code:`
        <div style={stackStyle}>
          <Download
            href={demoFileHref}
            name="下载报告"
            downloadName="report.pdf"
            variant="button"
            size="md"
          />
          <Download
            href={demoFileHref}
            name="不可下载"
            variant="button"
            size="md"
            disabled
          />
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(a,{href:o,name:"下载报告",downloadName:"report.pdf",variant:"button",size:"md"}),e.jsx(a,{href:o,name:"不可下载",variant:"button",size:"md",disabled:!0})]})},{title:"纯文本形态",code:`
        <Download href={demoFileHref} name="下载原始数据" meta="CSV" variant="plain" />;
      `,content:e.jsx(a,{href:o,name:"下载原始数据",meta:"CSV",variant:"plain"})}],props:[{name:"href",type:"string",required:!0,description:"下载地址。"},{name:"name",type:"ReactNode",required:!0,description:"下载入口主文案，通常是文件名或动作文案。"},{name:"meta",type:"ReactNode",description:"文件大小、格式或补充说明。"},{name:"downloadName",type:"string",defaultValue:"true",description:"下载保存时使用的文件名；默认开启原生 download。"},{name:"variant",type:'"chip" | "button" | "plain"',defaultValue:'"chip"',description:"下载入口形态，默认 chip。"},{name:"size",type:'"sm" | "md"',defaultValue:'"sm"',description:"尺寸，默认 sm。"},{name:"icon",type:"ReactNode",defaultValue:"<FileTextIcon />",description:"左侧图标。"},{name:"trailingIcon",type:"ReactNode",defaultValue:"<DownloadIcon />",description:"右侧图标，默认下载图标。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用下载入口。"}]});export{s as default};
