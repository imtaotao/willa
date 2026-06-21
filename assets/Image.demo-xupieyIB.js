import{aZ as t}from"./index-CpyxvJzx.js";import{I as e}from"./index-CGt09MD0.js";/* empty css              */import{d as o}from"./defineDoc-gWuO_T4x.js";import"./media-jqkUhN7m.js";import"./index-DwRt03MO.js";const p=o({id:"image",name:"Image",packageName:"willa/Image",description:"响应式图片组件，支持可选说明和灯箱预览。",imports:[{name:"Image",from:"willa/Image"}],css:"willa/Image.css",demo:{name:"Image",component:e,props:{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",alt:"金色时刻的湖边风景",title:"风景预览"}},code:`
    import { Image } from "willa/Image";
    import "willa/Image.css";

    <Image
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      alt="金色时刻的湖边风景"
      title="风景预览"
    />;
  `,sections:[{title:"Hover 放大",code:`
        <Image
          hoverZoom
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80"
          alt="看向窗边的人像"
          title="适合人物和封面图片的轻微 hover 放大"
        />;
      `,content:t.jsx("div",{style:{width:"min(100%, 34rem)",margin:"0 auto"},children:t.jsx(e,{hoverZoom:!0,src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",alt:"看向窗边的人像",title:"适合人物和封面图片的轻微 hover 放大"})})},{title:"自定义背景",code:`
        <Image
          backgroundColor="transparent"
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80"
          alt="浅色背景中的人像"
          title="背景可以自定义，也可以设为透明"
        />;
      `,content:t.jsx("div",{style:{width:"min(100%, 34rem)",margin:"0 auto"},children:t.jsx(e,{backgroundColor:"transparent",src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",alt:"浅色背景中的人像",title:"背景可以自定义，也可以设为透明"})})}],props:[{name:"src",type:"string",required:!0,description:"图片资源地址。"},{name:"alt",type:"string",description:"用于无障碍访问的替代文本。"},{name:"title",type:"string",description:"展示在图片下方的可选说明。"},{name:"hoverZoom",type:"boolean",defaultValue:"false",description:"是否在鼠标悬浮时轻微放大图片，默认关闭。"},{name:"backgroundColor",type:"CSSProperties['backgroundColor']",description:"自定义图片容器和透明区域的背景色，可传 transparent。"},{name:"openLightbox",type:"(state: LightboxState | null) => void",description:"可选的灯箱状态回调。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对图片资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对图片资源转换为可访问 URL。"},{name:"...imgProps",type:"ComponentProps<'img'>",description:"透传给内部 img，例如 width、height、loading、className。"}]});export{p as default};
