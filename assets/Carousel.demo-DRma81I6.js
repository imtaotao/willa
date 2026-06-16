import{aA as e,aD as i,B as t,aC as m,ag as y,N as w,e as h}from"./index-8h0iXH-K.js";import{C as o}from"./index-CLkn5tr8.js";/* empty css              *//* empty css              */import{d as v}from"./defineDoc-WQsG9bI2.js";const x={width:"min(100%, 48rem)"},n={display:"grid",minHeight:"18rem",alignContent:"end",justifyItems:"start",gap:"0.65rem",padding:"2.4rem",color:"var(--willa-text-strong)"},c={...n,background:"linear-gradient(135deg, #f7fbff 0%, #edf3ff 45%, #f4f7f1 100%)"},u={...n,background:"linear-gradient(135deg, #fffdf7 0%, #fff4dd 42%, #eef5ff 100%)"},p={...n,color:"#ffffff",background:"linear-gradient(135deg, #111827 0%, #24324a 50%, #3d4a62 100%)"},r={margin:0,fontSize:"1.55rem",fontWeight:760,lineHeight:1.25},l={maxWidth:"30rem",margin:0,color:"var(--willa-text)",fontSize:"0.98rem",lineHeight:1.65},g={...l,color:"rgba(255, 255, 255, 0.82)"},f={...n,minHeight:"14rem",padding:"1.6rem"},d=s=>e.jsx(y,{align:"center",width:"100%",children:e.jsx("div",{style:x,children:s.children})}),b=()=>{const s=[{key:"summary",label:"摘要",content:e.jsxs("article",{style:c,children:[e.jsx(t,{tone:"info",children:"AI 工作台"}),e.jsx("h3",{style:r,children:"把反馈整理成可执行摘要"}),e.jsx("p",{style:l,children:"轮播适合承载推荐内容、引导卡片和运营位，也可以直接放入业务组件。"})]})},{key:"report",label:"报告",content:e.jsxs("article",{style:u,children:[e.jsx(t,{tone:"warning",children:"数据报告"}),e.jsx("h3",{style:r,children:"展示周期趋势和关键指标"}),e.jsx("p",{style:l,children:"dots 和拖拽默认开启，arrows 可以通过参数打开。"})]})},{key:"release",label:"发布",content:e.jsxs("article",{style:p,children:[e.jsx(t,{tone:"neutral",children:"发布流程"}),e.jsx("h3",{style:r,children:"把变更说明推送到团队频道"}),e.jsx("p",{style:g,children:"items 适合数据驱动的场景，children 适合页面内直接组合内容。"})]})}];return e.jsx(d,{children:e.jsx(o,{items:s})})},S=()=>e.jsx(d,{children:e.jsxs(o,{arrows:!0,autoplay:!0,autoplaySpeed:2400,pauseOnHover:!0,children:[e.jsxs("article",{style:c,children:[e.jsx(t,{tone:"success",children:"自动播放"}),e.jsx("h3",{style:r,children:"默认悬停暂停"}),e.jsx("p",{style:l,children:"适合公告、推荐位和内容平台的精选卡片。"})]}),e.jsxs("article",{style:u,children:[e.jsx(t,{tone:"warning",children:"可控节奏"}),e.jsx("h3",{style:r,children:"通过 autoplaySpeed 控制间隔"}),e.jsx("p",{style:l,children:"内置 arrows 会覆盖在轮播内容上，也可以继续用 dots、拖拽或键盘切换。"})]})]})}),B=()=>e.jsx(d,{children:e.jsxs(o,{effect:"fade",adaptiveHeight:!0,dotsPosition:"top",children:[e.jsxs("article",{style:f,children:[e.jsx(t,{tone:"info",children:"Fade"}),e.jsx("h3",{style:r,children:"淡入淡出切换"}),e.jsx("p",{style:l,children:"适合视觉卡片、图片和营销区块。"})]}),e.jsxs("article",{style:{...f,minHeight:"18rem"},children:[e.jsx(t,{tone:"success",children:"Adaptive"}),e.jsx("h3",{style:r,children:"高度可以跟随当前内容变化"}),e.jsx("p",{style:l,children:"adaptiveHeight 会让视口高度跟随当前 slide，避免短内容留下过多空白。"})]})]})}),k=()=>e.jsx(d,{children:e.jsxs(o,{arrows:!1,dotsPosition:"right",children:[e.jsxs("article",{style:c,children:[e.jsx(t,{tone:"info",children:"右侧指示器"}),e.jsx("h3",{style:r,children:"指示器可以放在四个方向"}),e.jsx("p",{style:l,children:"dotsPosition 支持 top、bottom、left 和 right。"})]}),e.jsxs("article",{style:p,children:[e.jsx(t,{tone:"neutral",children:"无箭头"}),e.jsx("h3",{style:r,children:"只保留 dots 和拖拽"}),e.jsx("p",{style:g,children:"适合空间更紧凑、内容数量较少的展示场景。"})]})]})}),R=()=>{const s=m.useRef(null),[j,C]=m.useState(0);return e.jsxs(y,{align:"center",gap:"md",width:"100%",children:[e.jsx("div",{style:x,children:e.jsxs(o,{ref:s,active:j,onChange:C,loop:!1,children:[e.jsxs("article",{style:c,children:[e.jsx(t,{tone:"info",children:"第一步"}),e.jsx("h3",{style:r,children:"确认内容范围"})]}),e.jsxs("article",{style:u,children:[e.jsx(t,{tone:"warning",children:"第二步"}),e.jsx("h3",{style:r,children:"生成摘要草稿"})]}),e.jsxs("article",{style:p,children:[e.jsx(t,{tone:"neutral",children:"第三步"}),e.jsx("h3",{style:r,children:"发布给团队"})]})]})}),e.jsxs(w,{justify:"center",gap:"sm",children:[e.jsx(h,{size:"sm",variant:"outline",onClick:()=>{var a;return(a=s.current)==null?void 0:a.prev()},children:"上一张"}),e.jsx(h,{size:"sm",onClick:()=>{var a;return(a=s.current)==null?void 0:a.next()},children:"下一张"})]})]})},D=v({id:"carousel",name:"Carousel",packageName:"willa/Carousel",description:"用于承载多张内容、运营位、图片或引导卡片的轮播组件。",imports:[{name:"Carousel",from:"willa/Carousel"},{name:"Badge",from:"willa/Badge"}],css:"willa/Carousel.css",demo:{name:"BasicCarouselPreview",component:b},code:i(`
    import { Badge } from "willa/Badge";
    import { Carousel, type CarouselItem } from "willa/Carousel";
    import "willa/Badge.css";
    import "willa/Carousel.css";

    const slides: Array<CarouselItem> = [
      {
        key: "summary",
        label: "摘要",
        content: (
          <article>
            <Badge tone="info">AI 工作台</Badge>
            <h3>把反馈整理成可执行摘要</h3>
            <p>轮播适合承载推荐内容、引导卡片和运营位。</p>
          </article>
        ),
      },
      {
        key: "report",
        label: "报告",
        content: (
          <article>
            <Badge tone="warning">数据报告</Badge>
            <h3>展示周期趋势和关键指标</h3>
            <p>默认显示 dots 并支持拖拽，arrows 可按需开启。</p>
          </article>
        ),
      },
    ];

    <Carousel items={slides} />;
  `),sections:[{title:"自动播放",code:i(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows autoplay autoplaySpeed={2400} pauseOnHover>
          <article>默认悬停暂停</article>
          <article>可用 autoplaySpeed 控制间隔</article>
        </Carousel>;
      `),content:e.jsx(S,{})},{title:"淡入淡出",code:i(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel effect="fade" adaptiveHeight dotsPosition="top">
          <article>淡入淡出切换</article>
          <article>高度跟随当前内容变化</article>
        </Carousel>;
      `),content:e.jsx(B,{})},{title:"指示器位置",code:i(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows={false} dotsPosition="right">
          <article>右侧指示器</article>
          <article>只保留 dots 和拖拽</article>
        </Carousel>;
      `),content:e.jsx(k,{})},{title:"受控切换",code:i(`
        import { useRef, useState } from "react";
        import { Button } from "willa/Button";
        import { Carousel, type CarouselRef } from "willa/Carousel";
        import "willa/Button.css";
        import "willa/Carousel.css";

        const Demo = () => {
          const carouselRef = useRef<CarouselRef>(null);
          const [active, setActive] = useState(0);

          return (
            <>
              <Carousel ref={carouselRef} active={active} onChange={setActive} loop={false}>
                <article>确认内容范围</article>
                <article>生成摘要草稿</article>
                <article>发布给团队</article>
              </Carousel>
              <Button onClick={() => carouselRef.current?.prev()}>上一张</Button>
              <Button onClick={() => carouselRef.current?.next()}>下一张</Button>
            </>
          );
        };
      `),content:e.jsx(R,{})}],props:[{name:"items",type:"Array<CarouselItem>",description:"数据驱动的轮播项。传入 children 时可不传。"},{name:"children",type:"ReactNode",description:"直接作为轮播内容渲染，适合页面内组合。"},{name:"active",type:"number",description:"受控当前项下标。"},{name:"defaultActive",type:"number",defaultValue:"0",description:"非受控默认项下标。"},{name:"effect",type:'"slide" | "fade"',defaultValue:'"slide"',description:"切换效果。"},{name:"arrows",type:"boolean",defaultValue:"false",description:"是否显示覆盖在轮播内容上的左右切换按钮，默认不展示。"},{name:"dots",type:"boolean",defaultValue:"true",description:"是否显示指示器。"},{name:"dotsPosition",type:'"top" | "bottom" | "left" | "right"',defaultValue:'"bottom"',description:"指示器位置。"},{name:"autoplay",type:"boolean",defaultValue:"false",description:"是否自动播放。"},{name:"autoplaySpeed",type:"number",defaultValue:"3000",description:"自动播放间隔，单位毫秒。"},{name:"pauseOnHover",type:"boolean",defaultValue:"true",description:"鼠标悬停或聚焦时是否暂停自动播放。"},{name:"loop",type:"boolean",defaultValue:"true",description:"切换到边界后是否循环。"},{name:"draggable",type:"boolean",defaultValue:"true",description:"是否允许鼠标或触屏拖拽切换。"},{name:"adaptiveHeight",type:"boolean",defaultValue:"false",description:"是否让视口高度跟随当前内容。"},{name:"previousAriaLabel",type:"string",defaultValue:'"上一张"',description:"上一张按钮的无障碍标签。"},{name:"nextAriaLabel",type:"string",defaultValue:'"下一张"',description:"下一张按钮的无障碍标签。"},{name:"beforeChange",type:"(current: number, next: number) => void",description:"切换前触发。"},{name:"afterChange",type:"(current: number) => void",description:"切换后触发。"},{name:"onChange",type:"(current: number, previous: number) => void",description:"当前项变化时触发。"},{name:"CarouselItem.content",type:"ReactNode",required:!0,group:"CarouselItem",description:"轮播项内容。"},{name:"CarouselItem.key",type:"string | number",group:"CarouselItem",description:"轮播项唯一标识。"},{name:"CarouselItem.label",type:"ReactNode",group:"CarouselItem",description:"可选的指示器标签。"},{name:"CarouselItem.ariaLabel",type:"string",group:"CarouselItem",description:"当前轮播项的无障碍标签。"},{name:"CarouselRef",type:"{ next: () => void; prev: () => void; goTo: (index: number) => void }",group:"CarouselRef",description:"通过 ref 暴露的命令式控制方法。"}]});export{D as default};
