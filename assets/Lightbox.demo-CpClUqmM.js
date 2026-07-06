import{c as e,d as t,l as n,p as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as i}from"./Button-O1aY2iqB.js";import{t as a}from"./Separator-DiGkZuT6.js";import"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";import{t as s}from"./Lightbox-D5I4GSpc.js";import{t as c}from"./Image-C3PXRamu.js";import"./style-DtBYgVcB.js";import{t as l}from"./ImageGallery-BuKQzyut.js";import"./style-BbML9x1e2.js";import"./Lightbox-Con4kZUP.js";var u=r(t(),1),d=n(),f={src:`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,alt:`金色时刻的湖边风景`,caption:`湖泊`},p={src:`https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80`,alt:`山间公路`,caption:`公路`},m=[p,{src:`https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80`,alt:`雾气里的森林`,caption:`森林`}],h=o({id:`lightbox`,name:`Lightbox`,packageName:`willa/Lightbox`,description:`占满视口的图片预览弹层，打开时会锁定页面滚动，并支持 Escape 关闭和左右方向键切换。`,imports:[{name:`Button`,from:`willa/Button`},{name:`Image`,from:`willa/Image`},{name:`ImageGallery`,from:`willa/ImageGallery`},{name:`Lightbox`,from:`willa/Lightbox`}],css:`willa/Lightbox.css`,demo:{name:`LightboxPreview`,component:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(`div`,{className:`docs-demo-stack`,children:[(0,d.jsxs)(`section`,{className:`docs-demo-group`,children:[(0,d.jsx)(`div`,{className:`docs-demo-title`,children:`自动接管 Image 和 ImageGallery`}),(0,d.jsxs)(s,{backdrop:`solid`,children:[(0,d.jsx)(c,{...f,title:`风景预览`}),(0,d.jsx)(l,{images:m,columns:2})]})]}),(0,d.jsx)(a,{className:`docs-demo-separator`,size:`sm`}),(0,d.jsxs)(`section`,{className:`docs-demo-group`,children:[(0,d.jsx)(`div`,{className:`docs-demo-title`,children:`传入 image 的受控弹层`}),(0,d.jsx)(i,{variant:`outline`,onClick:()=>t(!0),children:`打开受控预览`}),e?(0,d.jsx)(s,{image:p,onClose:()=>t(!1)}):null]})]})}},code:e(`
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
  `),props:[{name:`children`,type:`ReactNode`,required:!0,description:`通常传入 Image 或 ImageGallery，Lightbox 会自动接管打开和切换状态。`},{name:`image`,type:`LightboxImage`,description:`受控模式下在弹层中渲染的图片。`},{name:`onClose`,type:`() => void`,description:`受控模式下弹层需要关闭时触发；点击背景、点击图片或按 Escape 都会调用。`},{name:`onPrev`,type:`() => void`,description:`可选的上一张图片操作；传入后左侧按钮和 ArrowLeft 都会调用。`},{name:`onNext`,type:`() => void`,description:`可选的下一张图片操作；传入后右侧按钮和 ArrowRight 都会调用。`},{name:`backdrop`,type:`"translucent" | "solid"`,description:`弹层背景模式，默认半透明，可切换为纯色背景。`},{name:`className`,type:`string`,description:`受控弹层模式下传给弹层根节点的 className。`},{name:`transitionDirection`,type:`-1 | 0 | 1`,defaultValue:`0`,description:`受控模式下的图片切换动画方向。`}]});export{h as default};