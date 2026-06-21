import{b0 as n,aY as e,W as s,h as i}from"./index-8_Ro2kKr.js";import{R as t}from"./index-RoRRe_DJ.js";/* empty css              *//* empty css              */import{d as o}from"./defineDoc-C10JAUTq.js";const l=o({id:"result",name:"Result",category:"content",packageName:"willa/Result",description:"用于成功、失败、无权限和流程结束等结果反馈。",imports:[{name:"Result",from:"willa/Result"}],css:"willa/Result.css",demo:{name:"Result",component:t,props:{tone:"success",status:"提交成功",title:"配置已保存",description:"新的模型配置已经生效，可以继续查看运行记录。",actions:e.jsxs(s,{justify:"center",children:[e.jsx(i,{children:"查看记录"}),e.jsx(i,{variant:"ghost",children:"返回列表"})]})}},code:n(`
    import { Result } from "willa/Result";
    import "willa/Result.css";

    <Result
      tone="success"
      status="提交成功"
      title="配置已保存"
      description="新的模型配置已经生效，可以继续查看运行记录。"
    />
  `),props:[{name:"title",type:"ReactNode",required:!0,description:"结果标题。"},{name:"description",type:"ReactNode",description:"结果说明。"},{name:"status",type:"ReactNode",description:"标题上方的状态短文案。"},{name:"icon",type:"ReactNode",description:"自定义图标。"},{name:"image",type:"ReactNode",description:"自定义图片，传入后优先于 icon 展示。"},{name:"actions",type:"ReactNode",description:"主要操作区。"},{name:"extra",type:"ReactNode",description:"补充内容区。"},{name:"tone",type:'"default" | "success" | "info" | "warning" | "danger"',defaultValue:'"default"',description:"结果语义。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"尺寸。"},{name:"align",type:'"start" | "center"',defaultValue:'"center"',description:"内容对齐方式。"},{name:"...sectionProps",type:"ComponentPropsWithoutRef<'section'>",description:"透传到外层 section。"}],sections:[{title:"状态类型",code:`
        <Result tone="warning" title="需要人工确认" description="该操作会影响线上规则。" />
      `,content:e.jsxs(s,{wrap:!0,align:"stretch",children:[e.jsx(t,{tone:"info",size:"sm",title:"等待处理",description:"任务已进入队列。"}),e.jsx(t,{tone:"warning",size:"sm",title:"需要确认",description:"该操作会影响线上规则。"}),e.jsx(t,{tone:"danger",size:"sm",title:"提交失败",description:"请检查配置后重试。"})]})}]});export{l as default};
