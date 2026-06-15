import{av as c,at as a,ah as C,aj as L,G as ee,r as ae,ar as le,ac as se}from"./index-Cw1JahyG.js";import{D as ie}from"./index-BVvePtAU.js";import{d as te}from"./defineDoc-dA2rUq-z.js";function f({accept:e,multiple:s=!1,disabled:t=!1,loading:n,progress:d,maxFiles:g,label:j="上传文件",description:A="点击选择文件，或拖拽文件到这里。",actionLabel:M="选择文件",loadingLabel:z="上传中",emptyLabel:O="暂无文件",size:T="md",onUpload:w,onUploadStart:b,onUploadComplete:p,onUploadError:u,onFilesChange:v,onFileRemove:N,className:B,..._}){const k=c.useId(),h=c.useRef([]),[$,W]=c.useState([]),[K,U]=c.useState(!1),[G,R]=c.useState(0),[q,D]=c.useState(),x=n??G>0,H=S(d??q),m=t||x,I=l=>{const i=new Set(l.map(r=>r.id));h.current.forEach(r=>{i.has(r.id)||URL.revokeObjectURL(r.url)}),h.current=l,W(l),v==null||v(l)},F=l=>{if(m)return;const i=Array.from(l).map(oe),r=s?[...h.current,...i]:i.slice(0,1),o=g&&g>0?r.slice(-g):r;i.forEach(y=>{o.includes(y)||URL.revokeObjectURL(y.url)});const E=i.filter(y=>o.includes(y));I(o),Z(E,o)},J=l=>{l.target.files&&F(l.target.files),l.target.value=""},Q=l=>{m||(l.preventDefault(),U(!0))},V=l=>{l.currentTarget.contains(l.relatedTarget)||U(!1)},X=l=>{m||(l.preventDefault(),U(!1),l.dataTransfer.files.length>0&&F(l.dataTransfer.files))},Y=l=>{const i=h.current.filter(r=>r.id!==l.id);N==null||N(l),I(i)},Z=(l,i)=>{if(!(l.length===0||!w&&!b&&!p)){b==null||b(l,i),D(void 0);try{const r=w==null?void 0:w(l,i,P);if(le(r)){R(o=>o+1),r.then(()=>{P(100),p==null||p(l,i)}).catch(o=>{u==null||u(o,l,i)}).finally(()=>{R(o=>Math.max(0,o-1))});return}P(100),p==null||p(l,i)}catch(r){u==null||u(r,l,i)}}},P=l=>{D(S(l))};return c.useEffect(()=>()=>{h.current.forEach(l=>URL.revokeObjectURL(l.url))},[]),a.jsxs("div",{..._,className:L("willa-upload",`willa-upload--${T}`,{"willa-upload--dragging":K,"willa-upload--disabled":m,"willa-upload--loading":x},B),onDragLeave:V,onDragOver:Q,onDrop:X,children:[a.jsx("input",{id:k,className:"willa-upload-input",type:"file",accept:e,multiple:s,disabled:m,onChange:J}),a.jsxs("label",{className:"willa-upload-dropzone",htmlFor:k,children:[a.jsx("span",{className:"willa-upload-icon","aria-hidden":"true",children:x?a.jsx("span",{className:"willa-upload-spinner"}):a.jsx(C,{})}),a.jsxs("span",{className:"willa-upload-copy",children:[a.jsx("span",{className:"willa-upload-label",children:j}),a.jsx("span",{className:"willa-upload-description",children:A})]}),a.jsx("span",{className:"willa-upload-action",children:x?z:M}),x?a.jsx(re,{progress:H}):null]}),$.length>0?a.jsx("div",{className:"willa-upload-list",children:$.map(l=>a.jsx(ne,{item:l,disabled:m,onRemove:Y},l.id))}):a.jsx("div",{className:"willa-upload-empty",children:O})]})}const re=({progress:e})=>{const s=typeof e=="number";return a.jsx("span",{className:L("willa-upload-progress",{"willa-upload-progress--indeterminate":!s}),role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":s?e:void 0,children:a.jsx("span",{className:"willa-upload-progress-bar",style:s?{width:`${e}%`}:void 0})})},ne=({item:e,disabled:s,onRemove:t})=>{const n=e.file.name,d=`${pe(e.file.size)} · ${ce(e.kind)}`;return a.jsxs("article",{className:L("willa-upload-item",`willa-upload-item--${e.kind}`),children:[a.jsxs("div",{className:"willa-upload-preview",children:[e.kind==="image"?a.jsx("a",{className:"willa-upload-media-link",href:e.url,target:"_blank",rel:"noreferrer",title:n,children:a.jsx("img",{src:e.url,alt:n})}):null,e.kind==="audio"?a.jsx("audio",{className:"willa-upload-media",src:e.url,controls:!0}):null,e.kind==="video"?a.jsx("video",{className:"willa-upload-media",src:e.url,controls:!0}):null,e.kind==="file"?a.jsx(ie,{href:e.url,name:n,meta:d,downloadName:n,variant:"button",size:"md"}):null]}),e.kind!=="file"?a.jsxs("div",{className:"willa-upload-item-info",children:[a.jsx("span",{className:"willa-upload-item-icon","aria-hidden":"true",children:a.jsx(ee,{})}),a.jsxs("span",{className:"willa-upload-item-text",children:[a.jsx("span",{className:"willa-upload-item-name",title:n,children:n}),a.jsx("span",{className:"willa-upload-item-meta",children:d})]})]}):null,a.jsx("button",{className:"willa-upload-remove",type:"button",disabled:s,"aria-label":`移除 ${n}`,onClick:()=>t(e),children:a.jsx(ae,{})})]})},oe=e=>({id:`${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2)}`,file:e,url:URL.createObjectURL(e),kind:de(e)}),de=e=>e.type.startsWith("image/")?"image":e.type.startsWith("audio/")?"audio":e.type.startsWith("video/")?"video":"file",ce=e=>e==="image"?"图片":e==="audio"?"音频":e==="video"?"视频":"文件",pe=e=>{if(e<=0)return"0 B";const s=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(e)/Math.log(1024)),s.length-1),n=e/1024**t,d=n>=10||t===0?0:1;return`${n.toFixed(d)} ${s[t]}`},S=e=>{if(!(typeof e!="number"||Number.isNaN(e)))return Math.min(100,Math.max(0,e))},ue=()=>{const[e,s]=c.useState("暂无已选文件");return a.jsxs(se,{gap:"md",style:{minWidth:0},children:[a.jsx(f,{multiple:!0,maxFiles:6,label:"上传上下文文件",description:"支持点击选择，也可以把文件拖拽进来。图片、音频和视频会直接预览。",onFilesChange:t=>s(me(t)),onUploadStart:t=>s(`开始上传 ${t.length} 个文件`),onUpload:async(t,n,d)=>{for(const g of[20,48,76,100])await new Promise(j=>window.setTimeout(j,220)),d(g)},onUploadComplete:t=>s(`已完成 ${t.length} 个文件`)}),a.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.84rem"},children:e})]})},me=e=>e.length===0?"暂无已选文件":`已选择 ${e.length} 个文件`,xe=te({id:"upload",name:"Upload",category:"form",packageName:"willa/Upload",description:"用于任意文件上传，支持点击选择和拖拽上传；图片、音频、视频可预览，其他文件通过下载入口查看。",imports:[{name:"Upload",from:"willa/Upload"},{name:"Stack",from:"willa/Stack"}],css:"willa/Upload.css",demo:{name:"UploadPreview",component:ue},code:`
    import { Upload } from "willa/Upload";
    import "willa/Upload.css";

    <Upload
      multiple
      maxFiles={6}
      label="上传上下文文件"
      description="支持点击选择，也可以把文件拖拽进来。"
      onUpload={async (files, _allFiles, reportProgress) => {
        reportProgress(20);
        await uploadFiles(files);
        reportProgress(100);
      }}
      onUploadStart={(files) => console.log("start", files)}
      onUploadComplete={(files) => console.log("done", files)}
    />;
  `,sections:[{title:"任意文件",code:`
        <Upload
          multiple
          maxFiles={4}
          label="上传资料"
          description="选择图片、音频、视频或文档。非媒体文件会以下载入口展示。"
        />;
      `,content:a.jsx(f,{multiple:!0,maxFiles:4,label:"上传资料",description:"选择图片、音频、视频或文档。非媒体文件会以下载入口展示。"})},{title:"仅媒体文件",code:`
        <Upload
          accept="image/*,audio/*,video/*"
          multiple
          maxFiles={3}
          label="上传媒体"
          description="限制选择图片、音频和视频，适合多模态输入。"
          actionLabel="选择媒体"
        />;
      `,content:a.jsx(f,{accept:"image/*,audio/*,video/*",multiple:!0,maxFiles:3,label:"上传媒体",description:"限制选择图片、音频和视频，适合多模态输入。",actionLabel:"选择媒体"})},{title:"单文件",code:`
        <Upload
          label="上传头像或附件"
          description="未开启 multiple 时，每次选择会替换当前文件。"
        />;
      `,content:a.jsx(f,{label:"上传头像或附件",description:"未开启 multiple 时，每次选择会替换当前文件。"})},{title:"禁用状态",code:`
        <Upload
          disabled
          label="上传已关闭"
          description="当前任务不允许继续添加文件。"
        />;
      `,content:a.jsx(f,{disabled:!0,label:"上传已关闭",description:"当前任务不允许继续添加文件。"})},{title:"上传中",code:`
        <Upload
          loading
          progress={64}
          label="正在上传"
          description="业务侧可以通过 loading 接管上传状态。"
          loadingLabel="处理中"
        />;
      `,content:a.jsx(f,{loading:!0,progress:64,label:"正在上传",description:"业务侧可以通过 loading 接管上传状态。",loadingLabel:"处理中"})}],props:[{name:"accept",type:"string",description:"原生文件选择器 accept 规则。"},{name:"multiple",type:"boolean",description:"是否允许多文件选择和拖拽，默认 false。"},{name:"maxFiles",type:"number",description:"最多保留的文件数量；超出后保留最新文件。"},{name:"disabled",type:"boolean",description:"禁用选择、拖拽和移除操作。"},{name:"loading",type:"boolean",description:"受控上传中状态；传入后由业务侧接管 loading。"},{name:"progress",type:"number",description:"受控上传进度，范围 0-100；未传时异步上传会展示内部进度或不确定进度条。"},{name:"label",type:"ReactNode",description:"上传区域主文案。"},{name:"description",type:"ReactNode",description:"上传区域辅助说明。"},{name:"actionLabel",type:"ReactNode",description:"选择文件按钮文案。"},{name:"loadingLabel",type:"ReactNode",description:"上传中按钮文案。"},{name:"emptyLabel",type:"ReactNode",description:"没有文件时的提示文案。"},{name:"size",type:'"sm" | "md"',description:"上传区域尺寸，默认 md。"},{name:"onFilesChange",type:"(files: Array<UploadItem>) => void",description:"文件列表变化回调。"},{name:"onUpload",type:"(files: Array<UploadItem>, allFiles: Array<UploadItem>, reportProgress: (progress: number) => void) => void | Promise<void>",description:"实际上传逻辑。返回 Promise 时组件会自动展示内部 loading；调用 reportProgress 可更新内部进度。"},{name:"onUploadStart",type:"(files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",description:"文件进入上传流程时触发。"},{name:"onUploadComplete",type:"(files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",description:"上传 Promise 成功完成后触发；未传 onUpload 时会紧随 start 触发。"},{name:"onUploadError",type:"(error: unknown, files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",description:"上传 Promise 失败或同步抛错时触发。"},{name:"onFileRemove",type:"(file: UploadItem) => void",description:"移除单个文件时触发。"}]});export{xe as default};
