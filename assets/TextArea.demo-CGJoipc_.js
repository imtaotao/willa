import{b1 as e}from"./index-Kfv3pNKk.js";import{T as t}from"./index-BJtDkJXf.js";/* empty css              */import{d as l}from"./defineDoc-EZFsevgg.js";const a={display:"grid",gap:"0.85rem",maxWidth:"42rem"},s=l({id:"text-area",name:"TextArea",category:"form",packageName:"willa/TextArea",description:"用于多行文本、提示词、反馈内容和 AI 输入区域的文本框。",imports:[{name:"TextArea",from:"willa/TextArea"}],css:"willa/TextArea.css",demo:{name:"TextArea",component:t,props:{placeholder:"告诉 Willa 你想生成什么内容...",width:"100%",rows:4}},code:`
    import { TextArea } from "willa/TextArea";
    import "willa/TextArea.css";

    <TextArea placeholder="告诉 Willa 你想生成什么内容..." width="100%" rows={4} />;
  `,sections:[{title:"基础输入",code:`
        <div style={stackStyle}>
          <TextArea placeholder="输入反馈内容" width="100%" />
          <TextArea
            defaultValue="总结这篇文章，并输出 3 个适合社交媒体传播的标题。"
            width="100%"
          />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{placeholder:"输入反馈内容",width:"100%"}),e.jsx(t,{defaultValue:"总结这篇文章，并输出 3 个适合社交媒体传播的标题。",width:"100%"})]})},{title:"尺寸",code:`
        <div style={stackStyle}>
          <TextArea size="sm" placeholder="紧凑文本框" width="100%" />
          <TextArea size="md" placeholder="默认文本框" width="100%" />
          <TextArea size="lg" placeholder="大尺寸文本框" width="100%" />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{size:"sm",placeholder:"紧凑文本框",width:"100%"}),e.jsx(t,{size:"md",placeholder:"默认文本框",width:"100%"}),e.jsx(t,{size:"lg",placeholder:"大尺寸文本框",width:"100%"})]})},{title:"Resize",code:`
        <div style={stackStyle}>
          <TextArea resize="none" placeholder="不可拖拽调整" width="100%" />
          <TextArea resize="vertical" placeholder="仅允许垂直调整" width="100%" />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{resize:"none",placeholder:"不可拖拽调整",width:"100%"}),e.jsx(t,{resize:"vertical",placeholder:"仅允许垂直调整",width:"100%"})]})},{title:"状态",code:`
        <div style={stackStyle}>
          <TextArea invalid defaultValue="提示词不能为空。" width="100%" />
          <TextArea disabled defaultValue="不可编辑的文本内容。" width="100%" />
          <TextArea variant="soft" placeholder="柔和背景" width="100%" />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{invalid:!0,defaultValue:"提示词不能为空。",width:"100%"}),e.jsx(t,{disabled:!0,defaultValue:"不可编辑的文本内容。",width:"100%"}),e.jsx(t,{variant:"soft",placeholder:"柔和背景",width:"100%"})]})},{title:"自定义颜色",code:`
        <div style={stackStyle}>
          <TextArea
            backgroundColor="rgba(147, 197, 253, 0.16)"
            placeholder="自定义背景"
            width="100%"
          />
          <TextArea
            backgroundColor="#f6e7c8"
            textColor="#3f2a12"
            defaultValue="可以用于特殊场景的自定义配色。"
            width="100%"
          />
        </div>;
      `,content:e.jsxs("div",{style:a,children:[e.jsx(t,{backgroundColor:"rgba(147, 197, 253, 0.16)",placeholder:"自定义背景",width:"100%"}),e.jsx(t,{backgroundColor:"#f6e7c8",textColor:"#3f2a12",defaultValue:"可以用于特殊场景的自定义配色。",width:"100%"})]})}],props:[{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"文本框尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"文本框视觉类型。"},{name:"resize",type:'"none" | "vertical" | "horizontal" | "both"',defaultValue:'"vertical"',description:"拖拽调整尺寸的方向。"},{name:"invalid",type:"boolean",defaultValue:"false",description:"展示错误状态。"},{name:"width",type:"CSSProperties['width']",description:"自定义文本框宽度；设置为 100% 时占满父容器。"},{name:"backgroundColor",type:"string",description:"自定义文本框背景颜色，支持 CSS 颜色值。"},{name:"textColor",type:"string",description:"自定义文本框文字颜色，支持 CSS 颜色值。"}]});export{s as default};
