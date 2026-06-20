import{aX as e,aw as l}from"./index-BvNxTYr_.js";import{P as a}from"./index-DrkAiSrw.js";import{d as s}from"./defineDoc-Cynn6Kgz.js";const t=()=>e.jsxs(l,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(a,{label:"下载进度",description:"willa-components.zip",value:68,showValue:!0,tone:"default"}),e.jsx(a,{label:"视频播放",value:42,bufferValue:64,size:"sm"})]}),o=s({id:"progress",name:"Progress",packageName:"willa/Progress",description:"用于视频播放、音频播放、下载任务和加载状态中的进度展示。",imports:[{name:"Progress",from:"willa/Progress"},{name:"Stack",from:"willa/Stack"}],css:"willa/Progress.css",demo:{name:"ProgressPreview",component:t},code:`
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
      `,content:e.jsxs(l,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(a,{label:"视频播放",value:42,bufferValue:64,size:"sm"}),e.jsx(a,{label:"音频播放",description:"01:24 / 03:40",value:38,bufferValue:56,valueLabel:"01:24",tone:"neutral"})]})},{title:"下载进度",code:`
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
      `,content:e.jsxs(l,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(a,{label:"资源包下载",description:"还剩 12 MB",value:76,showValue:!0,tone:"success",size:"lg"}),e.jsx(a,{label:"同步失败",description:"网络连接已中断",value:31,valueLabel:"31%",tone:"danger"})]})},{title:"自定义尺寸",code:`
        <Progress label="窄条进度" value={58} width={260} height={10} showValue />;
      `,content:e.jsx(a,{label:"窄条进度",value:58,width:260,height:10,showValue:!0})},{title:"不确定进度",code:`
        <Progress
          label="正在准备文件"
          description="等待服务端返回文件大小。"
          indeterminate
        />;
      `,content:e.jsx(a,{label:"正在准备文件",description:"等待服务端返回文件大小。",indeterminate:!0})},{title:"语义类型",code:`
        <Stack gap="lg" width="min(100%, 28rem)">
          <Progress label="Default" value={62} tone="default" />
          <Progress label="Neutral" value={62} tone="neutral" />
          <Progress label="Success" value={62} tone="success" />
          <Progress label="Warning" value={62} tone="warning" />
          <Progress label="Danger" value={62} tone="danger" />
        </Stack>;
      `,content:e.jsxs(l,{gap:"lg",width:"min(100%, 28rem)",children:[e.jsx(a,{label:"Default",value:62,tone:"default"}),e.jsx(a,{label:"Neutral",value:62,tone:"neutral"}),e.jsx(a,{label:"Success",value:62,tone:"success"}),e.jsx(a,{label:"Warning",value:62,tone:"warning"}),e.jsx(a,{label:"Danger",value:62,tone:"danger"})]})}],props:[{name:"value",type:"number",defaultValue:"0",description:"当前进度值，默认 0。"},{name:"max",type:"number",defaultValue:"100",description:"最大进度值，默认 100。"},{name:"bufferValue",type:"number",description:"缓冲进度值，适合视频和音频播放场景。"},{name:"label",type:"ReactNode",description:"进度条标题。"},{name:"description",type:"ReactNode",description:"标题下方的辅助信息。"},{name:"valueLabel",type:"ReactNode",defaultValue:"当前百分比",description:"自定义右侧进度文案。"},{name:"showValue",type:"boolean",description:"是否展示自动计算的百分比文案。"},{name:"indeterminate",type:"boolean",description:"展示不确定进度动画。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"进度条尺寸。"},{name:"width",type:"number | string",description:"组件整体宽度；数字会按 px 处理。"},{name:"height",type:"number | string",description:"进度轨道高度；数字会按 px 处理。"},{name:"tone",type:'"default" | "neutral" | "success" | "warning" | "danger"',defaultValue:'"default"',description:"进度条语义色。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{o as default};
