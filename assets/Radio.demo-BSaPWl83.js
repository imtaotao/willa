import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as i}from"./defineDoc-Cid5xIoZ.js";var a=n(e()),o=n(r()),s=t(),c=(0,a.forwardRef)((e,t)=>{let{label:n,description:r,size:i=`md`,invalid:a=!1,inputClassName:c,className:l,disabled:u,...d}=e,f=a||d[`aria-invalid`]===!0||d[`aria-invalid`]===`true`;return(0,s.jsxs)(`label`,{className:(0,o.default)(`willa-radio`,`willa-radio--${i}`,u&&`willa-radio--disabled`,f&&`willa-radio--invalid`,l),children:[(0,s.jsxs)(`span`,{className:`willa-radio-control`,children:[(0,s.jsx)(`input`,{...d,ref:t,className:(0,o.default)(`willa-radio-input`,c),disabled:u,type:`radio`,"aria-invalid":f||d[`aria-invalid`]}),(0,s.jsx)(`span`,{className:`willa-radio-dot`,"aria-hidden":`true`})]}),n||r?(0,s.jsxs)(`span`,{className:`willa-radio-content`,children:[n?(0,s.jsx)(`span`,{className:`willa-radio-label`,children:n}):null,r?(0,s.jsx)(`span`,{className:`willa-radio-description`,children:r}):null]}):null]})});c.displayName=`Radio`;var l={display:`grid`,gap:`0.9rem`,maxWidth:`42rem`},u=i({id:`radio`,name:`Radio`,category:`form`,packageName:`willa/Radio`,description:`用于互斥选项和轻量配置选择。`,imports:[{name:`Radio`,from:`willa/Radio`}],css:`willa/Radio.css`,demo:{name:`Radio`,component:c,props:{name:`model`,value:`balanced`,label:`均衡模式`,description:`兼顾响应速度和回答质量。`,defaultChecked:!0}},code:`
    import { Radio } from "willa/Radio";
    import "willa/Radio.css";

    <Radio
      name="model"
      value="balanced"
      label="均衡模式"
      description="兼顾响应速度和回答质量。"
      defaultChecked
    />;
  `,sections:[{title:`选项组`,code:`
        <div style={stackStyle}>
          <Radio name="tone" value="fast" label="快速" />
          <Radio
            name="tone"
            value="balanced"
            label="均衡"
            description="推荐给大多数任务。"
            defaultChecked
          />
          <Radio name="tone" value="quality" label="高质量" />
          <Radio name="tone" value="disabled" label="不可用选项" disabled />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:l,children:[(0,s.jsx)(c,{name:`tone`,value:`fast`,label:`快速`}),(0,s.jsx)(c,{name:`tone`,value:`balanced`,label:`均衡`,description:`推荐给大多数任务。`,defaultChecked:!0}),(0,s.jsx)(c,{name:`tone`,value:`quality`,label:`高质量`}),(0,s.jsx)(c,{name:`tone`,value:`disabled`,label:`不可用选项`,disabled:!0})]})},{title:`状态`,code:`
        <div style={stackStyle}>
          <Radio name="state" value="invalid" label="错误状态" invalid />
          <Radio name="state-size" value="sm" size="sm" label="紧凑选项" />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:l,children:[(0,s.jsx)(c,{name:`state`,value:`invalid`,label:`错误状态`,invalid:!0}),(0,s.jsx)(c,{name:`state-size`,value:`sm`,size:`sm`,label:`紧凑选项`})]})}],props:[{name:`label`,type:`ReactNode`,description:`选项文案。`},{name:`description`,type:`ReactNode`,description:`选项补充说明。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`单选框尺寸。`},{name:`invalid`,type:`boolean`,defaultValue:`false`,description:`展示错误状态。`},{name:`inputClassName`,type:`string`,description:`传给内部 input 元素的 className。`}]});export{u as default};