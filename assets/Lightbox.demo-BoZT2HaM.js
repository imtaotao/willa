import{u as i,t as m,s as e}from"./index-fQDWNz68.js";import{I as l}from"./index-C7tlbqku.js";import{I as r}from"./index-uK1Wrrfs.js";import{L as t}from"./index-p-BT7T4w.js";/* empty css              *//* empty css              */import{d as n}from"./defineDoc-bSd2F46W.js";import"./media-CyrjyXJo.js";const c={src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",alt:"金色时刻的湖边风景",caption:"湖泊"},a={src:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",alt:"山间公路",caption:"公路"},p={src:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",alt:"雾气里的森林",caption:"森林"},g=[a,p],d=()=>{const[s,o]=m.useState(!1);return e.jsxs("div",{className:"docs-demo-stack",children:[e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"自动接管 Image 和 ImageGallery"}),e.jsxs(t,{children:[e.jsx(l,{...c,title:"风景预览"}),e.jsx(r,{images:g,columns:2})]})]}),e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"传入 image 的受控弹层"}),e.jsx("button",{type:"button",className:"docs-demo-button",onClick:()=>o(!0),children:"打开受控预览"}),s?e.jsx(t,{image:a,onClose:()=>o(!1)}):null]})]})},L=n({id:"lightbox",name:"Lightbox",packageName:"willa/Lightbox",description:"占满视口的图片预览弹层。",imports:[{name:"Image",from:"willa/Image"},{name:"ImageGallery",from:"willa/ImageGallery"},{name:"Lightbox",from:"willa/Lightbox"}],css:"willa/Lightbox.css",demo:{name:"LightboxPreview",component:d},code:i(`
    import { useState } from "react";
    import { Image } from "willa/Image";
    import { ImageGallery } from "willa/ImageGallery";
    import { Lightbox } from "willa/Lightbox";

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
          <Lightbox>
            <Image {...lakeImage} title="风景预览" />
            <ImageGallery images={galleryImages} columns={2} />
          </Lightbox>

          <button type="button" onClick={() => setControlledOpen(true)}>
            打开受控预览
          </button>
          {controlledOpen ? (
            <Lightbox
              image={roadImage}
              onClose={() => setControlledOpen(false)}
            />
          ) : null}
        </>
      );
    }
  `),props:[{name:"children",type:"ReactNode",required:!0,description:"通常传入 Image 或 ImageGallery，Lightbox 会自动接管打开和切换状态。"},{name:"image",type:"LightboxImage",description:"受控模式下在弹层中渲染的图片。"},{name:"onClose",type:"() => void",description:"受控模式下弹层需要关闭时触发。"},{name:"onPrev",type:"() => void",description:"可选的上一张图片操作。"},{name:"onNext",type:"() => void",description:"可选的下一张图片操作。"},{name:"transitionDirection",type:"-1 | 0 | 1",description:"受控模式下的图片切换动画方向。"}]});export{L as default};
