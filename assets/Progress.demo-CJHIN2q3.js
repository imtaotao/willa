import{aH as b,aO as e,az as y,ay as z,ao as i}from"./index-DFk63Vca.js";import{d as S}from"./defineDoc-CbEAUI29.js";function s({value:r=0,max:l=100,bufferValue:p,label:t,description:n,valueLabel:o,showValue:g,indeterminate:u,size:f="md",tone:h="default",width:x,height:j,className:P,...v}){const a=Number.isFinite(l)&&l>0?l:100,c=w(r,a),d=typeof p=="number"?w(p,a):void 0,m=o??`${Math.round(c/a*100)}%`,N=t||n||g||o,V={width:b(x),"--willa-progress-height-custom":b(j),"--willa-progress-value":`${c/a*100}%`,"--willa-progress-buffer-value":d===void 0?void 0:`${d/a*100}%`};return e.jsxs("div",{...v,className:y("willa-progress",`willa-progress--${f}`,`willa-progress--${h}`,u&&"willa-progress--indeterminate",P),style:{...V,...v.style},children:[N?e.jsxs("div",{className:"willa-progress-header",children:[e.jsxs("div",{className:"willa-progress-label-group",children:[t?e.jsx("div",{className:"willa-progress-label",children:t}):null,n?e.jsx("div",{className:"willa-progress-description",children:n}):null]}),g||o?e.jsx("div",{className:"willa-progress-value-label",children:m}):null]}):null,e.jsxs("div",{className:"willa-progress-track",role:"progressbar","aria-valuemin":0,"aria-valuemax":u?void 0:a,"aria-valuenow":u?void 0:c,"aria-valuetext":typeof m=="string"?m:void 0,children:[d===void 0?null:e.jsx("span",{className:"willa-progress-buffer"}),e.jsx("span",{className:"willa-progress-indicator"})]})]})}const w=(r,l)=>Number.isFinite(r)?z(r,0,l):0,k=()=>e.jsxs(i,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"下载进度",description:"willa-components.zip",value:68,showValue:!0,tone:"default"}),e.jsx(s,{label:"视频播放",value:42,bufferValue:64,size:"sm"})]}),L=S({id:"progress",name:"Progress",packageName:"willa/Progress",description:"用于视频播放、音频播放、下载任务和加载状态中的进度展示。",imports:[{name:"Progress",from:"willa/Progress"},{name:"Stack",from:"willa/Stack"}],css:"willa/Progress.css",demo:{name:"ProgressPreview",component:k},code:`
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
      `,content:e.jsxs(i,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"视频播放",value:42,bufferValue:64,size:"sm"}),e.jsx(s,{label:"音频播放",description:"01:24 / 03:40",value:38,bufferValue:56,valueLabel:"01:24",tone:"neutral"})]})},{title:"下载进度",code:`
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
      `,content:e.jsxs(i,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"资源包下载",description:"还剩 12 MB",value:76,showValue:!0,tone:"success",size:"lg"}),e.jsx(s,{label:"同步失败",description:"网络连接已中断",value:31,valueLabel:"31%",tone:"danger"})]})},{title:"自定义尺寸",code:`
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
      `,content:e.jsxs(i,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(s,{label:"Default",value:62,tone:"default"}),e.jsx(s,{label:"Neutral",value:62,tone:"neutral"}),e.jsx(s,{label:"Success",value:62,tone:"success"}),e.jsx(s,{label:"Warning",value:62,tone:"warning"}),e.jsx(s,{label:"Danger",value:62,tone:"danger"})]})}],props:[{name:"value",type:"number",defaultValue:"0",description:"当前进度值，默认 0。"},{name:"max",type:"number",defaultValue:"100",description:"最大进度值，默认 100。"},{name:"bufferValue",type:"number",description:"缓冲进度值，适合视频和音频播放场景。"},{name:"label",type:"ReactNode",description:"进度条标题。"},{name:"description",type:"ReactNode",description:"标题下方的辅助信息。"},{name:"valueLabel",type:"ReactNode",defaultValue:"当前百分比",description:"自定义右侧进度文案。"},{name:"showValue",type:"boolean",description:"是否展示自动计算的百分比文案。"},{name:"indeterminate",type:"boolean",description:"展示不确定进度动画。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"进度条尺寸。"},{name:"width",type:"number | string",description:"组件整体宽度；数字会按 px 处理。"},{name:"height",type:"number | string",description:"进度轨道高度；数字会按 px 处理。"},{name:"tone",type:'"default" | "neutral" | "success" | "warning" | "danger"',defaultValue:'"default"',description:"进度条语义色。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{L as default};
