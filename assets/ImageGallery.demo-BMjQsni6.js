import{aD as t}from"./index-D5uFLOdF.js";import{I as a}from"./index-Co2TDQ_C.js";/* empty css              */import{d as o}from"./defineDoc-Bhi9w6ym.js";import"./media-CByawTcy.js";import"./index-DAg93zRs.js";const c=o({id:"image-gallery",name:"ImageGallery",packageName:"willa/ImageGallery",description:"紧凑的响应式图片画廊。",imports:[{name:"ImageGallery",from:"willa/ImageGallery"}],css:"willa/ImageGallery.css",demo:{name:"ImageGallery",component:a,props:{columns:3,images:[{src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",alt:"湖边风景",caption:"湖泊"},{src:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",alt:"山间公路",caption:"公路"},{src:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",alt:"沙漠丘陵",caption:"丘陵"}]}},code:`
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
  `,sections:[{title:"Hover 放大",code:`
        <ImageGallery
          hoverZoom
          columns={3}
          images={[
            {
              src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
              alt: "窗边人像",
              caption: "人像",
            },
            {
              src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
              alt: "自然光人像",
              caption: "自然光",
            },
            {
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
              alt: "户外人像",
              caption: "户外",
            },
          ]}
        />;
      `,content:t.jsx("div",{style:{width:"min(100%, 44rem)",margin:"0 auto"},children:t.jsx(a,{hoverZoom:!0,columns:3,images:[{src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",alt:"窗边人像",caption:"人像"},{src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",alt:"自然光人像",caption:"自然光"},{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",alt:"户外人像",caption:"户外"}]})})},{title:"自定义背景",code:`
        <ImageGallery
          columns={3}
          backgroundColor="#f2f6ee"
          images={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
              alt: "浅绿色背景的人像",
              caption: "柔和背景",
            },
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
              alt: "暖色人像",
              caption: "暖色",
            },
            {
              src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80",
              alt: "侧脸人像",
              caption: "侧脸",
            },
          ]}
        />;
      `,content:t.jsx("div",{style:{width:"min(100%, 44rem)",margin:"0 auto"},children:t.jsx(a,{columns:3,backgroundColor:"#f2f6ee",images:[{src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",alt:"浅绿色背景的人像",caption:"柔和背景"},{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",alt:"暖色人像",caption:"暖色"},{src:"https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80",alt:"侧脸人像",caption:"侧脸"}]})})}],props:[{name:"images",type:"Array<string | { src: string; alt?: string; caption?: string }>",required:!0,description:"画廊中渲染的图片列表。"},{name:"columns",type:"2 | 3 | 4",defaultValue:"2",description:"桌面端优先使用的列数。"},{name:"hoverZoom",type:"boolean",defaultValue:"false",description:"是否在鼠标悬浮图片时轻微放大，默认关闭。"},{name:"backgroundColor",type:"CSSProperties['backgroundColor']",description:"自定义图片容器和透明区域的背景色，可传 transparent。"},{name:"openLightbox",type:"(state: LightboxState | null) => void",description:"可选的灯箱状态回调。"},{name:"articleSourcePath",type:"string",description:"当前文章路径，用于解析相对图片资源。"},{name:"resolveAssetUrl",type:"(articleSourcePath: string, assetPath: string) => string | undefined",description:"把相对图片资源转换为可访问 URL。"}]});export{c as default};
