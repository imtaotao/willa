import{c as e,l as t}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as n}from"./Button-O1aY2iqB.js";import{t as r}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as a}from"./Result-Dw-p2PNX.js";var o=t(),s=i({id:`result`,name:`Result`,category:`content`,packageName:`willa/Result`,description:`用于成功、失败、无权限和流程结束等结果反馈。`,imports:[{name:`Result`,from:`willa/Result`}],css:`willa/Result.css`,demo:{name:`Result`,component:a,props:{tone:`success`,status:`提交成功`,title:`配置已保存`,description:`新的模型配置已经生效，可以继续查看运行记录。`,actions:(0,o.jsxs)(r,{justify:`center`,children:[(0,o.jsx)(n,{children:`查看记录`}),(0,o.jsx)(n,{variant:`ghost`,children:`返回列表`})]})}},code:e(`
    import { Result } from "willa/Result";
    import "willa/Result.css";

    <Result
      tone="success"
      status="提交成功"
      title="配置已保存"
      description="新的模型配置已经生效，可以继续查看运行记录。"
    />
  `),props:[{name:`title`,type:`ReactNode`,required:!0,description:`结果标题。`},{name:`description`,type:`ReactNode`,description:`结果说明。`},{name:`status`,type:`ReactNode`,description:`标题上方的状态短文案。`},{name:`icon`,type:`ReactNode`,description:`自定义图标。`},{name:`image`,type:`ReactNode`,description:`自定义图片，传入后优先于 icon 展示。`},{name:`actions`,type:`ReactNode`,description:`主要操作区。`},{name:`extra`,type:`ReactNode`,description:`补充内容区。`},{name:`tone`,type:`"default" | "success" | "info" | "warning" | "danger"`,defaultValue:`"default"`,description:`结果语义。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`尺寸。`},{name:`align`,type:`"start" | "center"`,defaultValue:`"center"`,description:`内容对齐方式。`},{name:`...sectionProps`,type:`ComponentPropsWithoutRef<'section'>`,description:`透传到外层 section。`}],sections:[{title:`状态类型`,code:`
        <Result tone="warning" title="需要人工确认" description="该操作会影响线上规则。" />
      `,content:(0,o.jsxs)(r,{wrap:!0,align:`stretch`,children:[(0,o.jsx)(a,{tone:`info`,size:`sm`,title:`等待处理`,description:`任务已进入队列。`}),(0,o.jsx)(a,{tone:`warning`,size:`sm`,title:`需要确认`,description:`该操作会影响线上规则。`}),(0,o.jsx)(a,{tone:`danger`,size:`sm`,title:`提交失败`,description:`请检查配置后重试。`})]})}]});export{s as default};