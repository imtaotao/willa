import{b0 as i,aY as e,U as a,a2 as n,A as s}from"./index-5Xo7nplC.js";import{S as t}from"./index-D2MKyG_4.js";/* empty css              */import{d as o}from"./defineDoc-DZKWvp5z.js";const p=o({id:"statistic",name:"Statistic",category:"content",packageName:"willa/Statistic",description:"用于展示指标、趋势和轻量统计数据。",imports:[{name:"Statistic",from:"willa/Statistic"}],css:"willa/Statistic.css",demo:{name:"Statistic",component:t,props:{label:"本月调用量",value:"128.4K",description:"包含 API 与组件站点请求",trend:"up",trendLabel:"+12.8%",icon:e.jsx(s,{}),tone:"info"}},code:i(`
    import { Statistic } from "willa/Statistic";
    import "willa/Statistic.css";

    <Statistic
      label="本月调用量"
      value="128.4K"
      trend="up"
      trendLabel="+12.8%"
      description="包含 API 与组件站点请求"
    />
  `),props:[{name:"label",type:"ReactNode",required:!0,description:"指标名称。"},{name:"value",type:"ReactNode",required:!0,description:"指标值。"},{name:"prefix",type:"ReactNode",description:"数值前缀。"},{name:"suffix",type:"ReactNode",description:"数值后缀。"},{name:"description",type:"ReactNode",description:"辅助说明。"},{name:"trend",type:'"up" | "down" | "neutral"',defaultValue:'"neutral"',description:"趋势语义。"},{name:"trendLabel",type:"ReactNode",description:"趋势文案。"},{name:"icon",type:"ReactNode",description:"指标图标。"},{name:"tone",type:'"default" | "info" | "success" | "warning" | "danger"',defaultValue:'"default"',description:"指标强调色。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"尺寸。"},{name:"...divProps",type:"ComponentPropsWithoutRef<'div'>",description:"透传到外层容器。"}],sections:[{title:"指标组",code:`
        <Grid columns={3} gap="lg">
          <Statistic label="成功率" value="99.2" suffix="%" tone="success" />
          <Statistic label="平均耗时" value="420" suffix="ms" tone="warning" />
          <Statistic label="失败任务" value="18" tone="danger" />
        </Grid>
      `,content:e.jsxs(a,{columns:3,gap:"lg",children:[e.jsx(t,{label:"成功率",value:"99.2",suffix:"%",tone:"success",trend:"up",trendLabel:"+1.4%"}),e.jsx(t,{label:"平均耗时",value:"420",suffix:"ms",tone:"warning",trend:"down",trendLabel:"-30ms"}),e.jsx(t,{label:"失败任务",value:"18",tone:"danger",icon:e.jsx(n,{}),description:"近 7 天"})]})}]});export{p as default};
