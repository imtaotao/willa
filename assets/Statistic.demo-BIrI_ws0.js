import{aD as t,ar as c,aG as w,V as _,A as N}from"./index-D5uFLOdF.js";import{G as v}from"./index-DuU2ctpu.js";import{d as b}from"./defineDoc-Bhi9w6ym.js";function e(r){const{label:d,value:o,prefix:s,suffix:l,description:i,trend:p="neutral",trendLabel:a,icon:n,tone:u="default",size:m="md",className:f,...x}=r;return t.jsxs("div",{...x,className:c("willa-statistic",`willa-statistic--${u}`,`willa-statistic--${m}`,f),children:[t.jsxs("div",{className:"willa-statistic__header",children:[n?t.jsx("span",{className:"willa-statistic__icon","aria-hidden":"true",children:n}):null,t.jsx("span",{className:"willa-statistic__label",children:d})]}),t.jsxs("div",{className:"willa-statistic__value",children:[s?t.jsx("span",{className:"willa-statistic__prefix",children:s}):null,t.jsx("span",{className:"willa-statistic__number",children:o}),l?t.jsx("span",{className:"willa-statistic__suffix",children:l}):null]}),i||a?t.jsxs("div",{className:"willa-statistic__meta",children:[a?t.jsx("span",{className:c("willa-statistic__trend",`willa-statistic__trend--${p}`),children:a}):null,i?t.jsx("span",{className:"willa-statistic__description",children:i}):null]}):null]})}const S=b({id:"statistic",name:"Statistic",category:"content",packageName:"willa/Statistic",description:"用于展示指标、趋势和轻量统计数据。",imports:[{name:"Statistic",from:"willa/Statistic"}],css:"willa/Statistic.css",demo:{name:"Statistic",component:e,props:{label:"本月调用量",value:"128.4K",description:"包含 API 与组件站点请求",trend:"up",trendLabel:"+12.8%",icon:t.jsx(N,{}),tone:"info"}},code:w(`
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
      `,content:t.jsxs(v,{columns:3,gap:"lg",children:[t.jsx(e,{label:"成功率",value:"99.2",suffix:"%",tone:"success",trend:"up",trendLabel:"+1.4%"}),t.jsx(e,{label:"平均耗时",value:"420",suffix:"ms",tone:"warning",trend:"down",trendLabel:"-30ms"}),t.jsx(e,{label:"失败任务",value:"18",tone:"danger",icon:t.jsx(_,{}),description:"近 7 天"})]})}]});export{S as default};
