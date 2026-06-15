import{I as a}from"./index-Vq19HkEc.js";/* empty css              */import{d as t}from"./defineDoc-CeA5kaJR.js";import"./index-DBsCKa5b.js";import"./media-DvsrxCtM.js";import"./index-DwNU4i8T.js";const l=t({id:"image-gallery",name:"ImageGallery",packageName:"willa/ImageGallery",description:"紧凑的响应式图片画廊。",imports:[{name:"ImageGallery",from:"willa/ImageGallery"}],css:"willa/ImageGallery.css",demo:{name:"ImageGallery",component:a,props:{columns:3,images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",alt:"湖边风景",caption:"湖泊"},{src:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",alt:"山间公路",caption:"公路"},{src:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",alt:"沙漠丘陵",caption:"丘陵"}]}},code:`
    import { ImageGallery } from "willa/ImageGallery";
    import "willa/ImageGallery.css";

    <ImageGallery
      columns={3}
      images={[
        {
          src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
          alt: "湖边风景",
          caption: "湖泊",
        },
        {
          src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
          alt: "山间公路",
          caption: "公路",
        },
      ]}
    />;
  `,props:[{name:"images",type:"Array<string | { src: string; alt?: string; caption?: string }>",required:!0,description:"画廊中渲染的图片列表。"},{name:"columns",type:"2 | 3 | 4",description:"桌面端优先使用的列数。"},{name:"openLightbox",type:"(state: LightboxState | null) => void",description:"可选的灯箱状态回调。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对图片资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对图片资源转换为可访问 URL。"}]});export{l as default};
