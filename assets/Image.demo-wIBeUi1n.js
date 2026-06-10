import{I as e}from"./index-DPycmCQp.js";/* empty css              */import{d as t}from"./defineDoc-CU4WbHug.js";import"./index-DcKe6ljB.js";import"./index-DfX1Tw1W.js";import"./media-DMQAY2_H.js";const p=t({id:"image",name:"Image",packageName:"willa/Image",description:"响应式图片组件，支持可选说明和灯箱预览。",imports:[{name:"Image",from:"willa/Image"}],css:"willa/Image.css",demo:{name:"Image",component:e,props:{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",alt:"金色时刻的湖边风景",title:"风景预览"}},code:`
    import { Image } from "willa/Image";
    import "willa/Image.css";

    <Image
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      alt="金色时刻的湖边风景"
      title="风景预览"
    />;
  `,props:[{name:"src",type:"string",required:!0,description:"图片资源地址。"},{name:"alt",type:"string",description:"用于无障碍访问的替代文本。"},{name:"title",type:"string",description:"展示在图片下方的可选说明。"},{name:"openLightbox",type:"(state: LightboxState | null) => void",description:"可选的灯箱状态回调。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对图片资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对图片资源转换为可访问 URL。"},{name:"...imgProps",type:"ComponentProps<'img'>",description:"透传给内部 img，例如 width、height、loading、className。"}]});export{p as default};
