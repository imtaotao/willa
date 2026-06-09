import{ai as s,ah as r,af as o}from"./index-Bin0Lb9S.js";import{B as m}from"./index-CY0ApMQF.js";import{I as l}from"./index-DdUHawtf.js";import{I as n}from"./index-BjiiXvPO.js";import{L as e}from"./index-fPpxFbcB.js";/* empty css              *//* empty css              *//* empty css              */import{d as c}from"./defineDoc-DcXD0RKg.js";import"./heading-CUnGkhXI.js";import"./media-DZXkIOOz.js";const p={src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",alt:"金色时刻的湖边风景",caption:"湖泊"},a={src:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",alt:"山间公路",caption:"公路"},g={src:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",alt:"雾气里的森林",caption:"森林"},d=[a,g],h=()=>{const[i,t]=r.useState(!1);return o.jsxs("div",{className:"docs-demo-stack",children:[o.jsxs("section",{className:"docs-demo-group",children:[o.jsx("div",{className:"docs-demo-title",children:"自动接管 Image 和 ImageGallery"}),o.jsxs(e,{backdrop:"solid",children:[o.jsx(l,{...p,title:"风景预览"}),o.jsx(n,{images:d,columns:2})]})]}),o.jsxs("section",{className:"docs-demo-group",children:[o.jsx("div",{className:"docs-demo-title",children:"传入 image 的受控弹层"}),o.jsx(m,{variant:"outline",onClick:()=>t(!0),children:"打开受控预览"}),i?o.jsx(e,{image:a,onClose:()=>t(!1)}):null]})]})},B=c({id:"lightbox",name:"Lightbox",packageName:"willa/Lightbox",description:"占满视口的图片预览弹层。",imports:[{name:"Button",from:"willa/Button"},{name:"Image",from:"willa/Image"},{name:"ImageGallery",from:"willa/ImageGallery"},{name:"Lightbox",from:"willa/Lightbox"}],css:"willa/Lightbox.css",demo:{name:"LightboxPreview",component:h},code:s(`
    import { useState } from "react";
    import { Button } from "willa/Button";
    import { Image } from "willa/Image";
    import { ImageGallery } from "willa/ImageGallery";
    import { Lightbox } from "willa/Lightbox";

    import "willa/Button.css";
    import "willa/Image.css";
    import "willa/ImageGallery.css";
    import "willa/Lightbox.css";

    const lakeImage = {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      alt: "金色时刻的湖边风景",
      caption: "湖泊",
    };

    const roadImage = {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      alt: "山间公路",
      caption: "公路",
    };

    const forestImage = {
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      alt: "雾气里的森林",
      caption: "森林",
    };

    const galleryImages = [roadImage, forestImage];

    function LightboxPreview() {
      const [controlledOpen, setControlledOpen] = useState(false);

      return (
        <>
          <Lightbox backdrop="solid">
            <Image {...lakeImage} title="风景预览" />
            <ImageGallery images={galleryImages} columns={2} />
          </Lightbox>

          <Button variant="outline" onClick={() => setControlledOpen(true)}>
            打开受控预览
          </Button>
          {controlledOpen ? (
            <Lightbox
              image={roadImage}
              onClose={() => setControlledOpen(false)}
            />
          ) : null}
        </>
      );
    }
  `),props:[{name:"children",type:"ReactNode",required:!0,description:"通常传入 Image 或 ImageGallery，Lightbox 会自动接管打开和切换状态。"},{name:"image",type:"LightboxImage",description:"受控模式下在弹层中渲染的图片。"},{name:"onClose",type:"() => void",description:"受控模式下弹层需要关闭时触发。"},{name:"onPrev",type:"() => void",description:"可选的上一张图片操作。"},{name:"onNext",type:"() => void",description:"可选的下一张图片操作。"},{name:"backdrop",type:'"translucent" | "solid"',description:"弹层背景模式，默认半透明，可切换为纯色背景。"},{name:"transitionDirection",type:"-1 | 0 | 1",description:"受控模式下的图片切换动画方向。"}]});export{B as default};
