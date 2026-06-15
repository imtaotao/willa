import{D as e}from"./index-B0QwjzVk.js";import{d as t}from"./defineDoc-Bzp7FD3_.js";import"./index-B_h_YYgH.js";const o=t({id:"details-block",name:"DetailsBlock",packageName:"willa/DetailsBlock",description:"用于承载可选长内容的样式化折叠块。",imports:[{name:"DetailsBlock",from:"willa/DetailsBlock"}],css:"willa/DetailsBlock.css",demo:{name:"DetailsBlock",component:e,props:{title:"实现说明",defaultOpen:!0},children:"把补充细节收起来，不打断主要阅读流程。"},code:`
    import { DetailsBlock } from "willa/DetailsBlock";
    import "willa/DetailsBlock.css";

    <DetailsBlock title="实现说明" defaultOpen>
      把补充细节收起来，不打断主要阅读流程。
    </DetailsBlock>;
  `,props:[{name:"title",type:"ReactNode",required:!0,description:"折叠块的摘要内容。"},{name:"defaultOpen",type:"boolean",description:"初始展开状态。"},{name:"hint",type:"string",description:"摘要右侧的操作提示文本。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",description:"折叠区域中的内容。"}]});export{o as default};
