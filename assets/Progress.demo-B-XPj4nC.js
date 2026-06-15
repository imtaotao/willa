import{az as e,an as V,af as t}from"./index-C7qrHHGg.js";import{d as z}from"./defineDoc-Clz3CsHg.js";function s({value:a=0,max:r=100,bufferValue:p,label:i,description:n,valueLabel:o,showValue:g,indeterminate:u,size:w="md",tone:h="default",width:x,height:j,className:P,...b}){const l=Number.isFinite(r)&&r>0?r:100,c=v(a,l),d=typeof p=="number"?v(p,l):void 0,m=o??`${Math.round(c/l*100)}%`,N=i||n||g||o,y={width:f(x),"--willa-progress-height-custom":f(j),"--willa-progress-value":`${c/l*100}%`,"--willa-progress-buffer-value":d===void 0?void 0:`${d/l*100}%`};return e.jsxs("div",{...b,className:V("willa-progress",`willa-progress--${w}`,`willa-progress--${h}`,u&&"willa-progress--indeterminate",P),style:{...y,...b.style},children:[N?e.jsxs("div",{className:"willa-progress-header",children:[e.jsxs("div",{className:"willa-progress-label-group",children:[i?e.jsx("div",{className:"willa-progress-label",children:i}):null,n?e.jsx("div",{className:"willa-progress-description",children:n}):null]}),g||o?e.jsx("div",{className:"willa-progress-value-label",children:m}):null]}):null,e.jsxs("div",{className:"willa-progress-track",role:"progressbar","aria-valuemin":0,"aria-valuemax":u?void 0:l,"aria-valuenow":u?void 0:c,"aria-valuetext":typeof m=="string"?m:void 0,children:[d===void 0?null:e.jsx("span",{className:"willa-progress-buffer"}),e.jsx("span",{className:"willa-progress-indicator"})]})]})}const v=(a,r)=>Number.isFinite(a)?Math.min(Math.max(a,0),r):0,f=a=>{if(typeof a=="number"&&Number.isFinite(a))return`${a}px`;if(typeof a=="string")return a.trim()},S=()=>e.jsxs(t,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"下载进度",description:"willa-components.zip",value:68,showValue:!0,tone:"default"}),e.jsx(s,{label:"视频播放",value:42,bufferValue:64,size:"sm"})]}),$=z({id:"progress",name:"Progress",packageName:"willa/Progress",description:"用于视频播放、音频播放、下载任务和加载状态中的进度展示。",imports:[{name:"Progress",from:"willa/Progress"},{name:"Stack",from:"willa/Stack"}],css:"willa/Progress.css",demo:{name:"ProgressPreview",component:S},code:`
    import { Progress } from "willa/Progress";
    import "willa/Progress.css";

    <Progress
      label="下载进度"
      description="willa-components.zip"
      value={68}
      showValue
    />;
  `,sections:[{title:"媒体播放",code:`
        <Stack gap="lg" width="min(100%, 28rem)">
          <Progress label="视频播放" value={42} bufferValue={64} size="sm" />
          <Progress
            label="音频播放"
            description="01:24 / 03:40"
            value={38}
            bufferValue={56}
            valueLabel="01:24"
            tone="neutral"
          />
        </Stack>;
      `,content:e.jsxs(t,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"视频播放",value:42,bufferValue:64,size:"sm"}),e.jsx(s,{label:"音频播放",description:"01:24 / 03:40",value:38,bufferValue:56,valueLabel:"01:24",tone:"neutral"})]})},{title:"下载进度",code:`
        <Stack gap="lg" width="min(100%, 28rem)">
          <Progress
            label="资源包下载"
            description="还剩 12 MB"
            value={76}
            showValue
            tone="success"
            size="lg"
          />
          <Progress
            label="同步失败"
            description="网络连接已中断"
            value={31}
            valueLabel="31%"
            tone="danger"
          />
        </Stack>;
      `,content:e.jsxs(t,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"资源包下载",description:"还剩 12 MB",value:76,showValue:!0,tone:"success",size:"lg"}),e.jsx(s,{label:"同步失败",description:"网络连接已中断",value:31,valueLabel:"31%",tone:"danger"})]})},{title:"自定义尺寸",code:`
        <Progress label="窄条进度" value={58} width={260} height={10} showValue />;
      `,content:e.jsx(s,{label:"窄条进度",value:58,width:260,height:10,showValue:!0})},{title:"不确定进度",code:`
        <Progress
          label="正在准备文件"
          description="等待服务端返回文件大小。"
          indeterminate
        />;
      `,content:e.jsx(s,{label:"正在准备文件",description:"等待服务端返回文件大小。",indeterminate:!0})},{title:"语义类型",code:`
        <Stack gap="lg" width="min(100%, 28rem)">
          <Progress label="Default" value={62} tone="default" />
          <Progress label="Neutral" value={62} tone="neutral" />
          <Progress label="Success" value={62} tone="success" />
          <Progress label="Warning" value={62} tone="warning" />
          <Progress label="Danger" value={62} tone="danger" />
        </Stack>;
      `,content:e.jsxs(t,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"Default",value:62,tone:"default"}),e.jsx(s,{label:"Neutral",value:62,tone:"neutral"}),e.jsx(s,{label:"Success",value:62,tone:"success"}),e.jsx(s,{label:"Warning",value:62,tone:"warning"}),e.jsx(s,{label:"Danger",value:62,tone:"danger"})]})}],props:[{name:"value",type:"number",defaultValue:"0",description:"当前进度值，默认 0。"},{name:"max",type:"number",defaultValue:"100",description:"最大进度值，默认 100。"},{name:"bufferValue",type:"number",description:"缓冲进度值，适合视频和音频播放场景。"},{name:"label",type:"ReactNode",description:"进度条标题。"},{name:"description",type:"ReactNode",description:"标题下方的辅助信息。"},{name:"valueLabel",type:"ReactNode",defaultValue:"当前百分比",description:"自定义右侧进度文案。"},{name:"showValue",type:"boolean",description:"是否展示自动计算的百分比文案。"},{name:"indeterminate",type:"boolean",description:"展示不确定进度动画。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"进度条尺寸。"},{name:"width",type:"number | string",description:"组件整体宽度；数字会按 px 处理。"},{name:"height",type:"number | string",description:"进度轨道高度；数字会按 px 处理。"},{name:"tone",type:'"default" | "neutral" | "success" | "warning" | "danger"',defaultValue:'"default"',description:"进度条语义色。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{$ as default};
