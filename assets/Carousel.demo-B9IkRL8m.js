import{c as e,d as t,l as n,p as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as i}from"./Button-O1aY2iqB.js";import{t as a}from"./Group-C-JhzSsC.js";import{t as o}from"./Stack-DwlHdG-i.js";import{a as s}from"./index-y4TTR3pk.js";import"./style-B00R6KjV.js";import{t as c}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as l}from"./Carousel-Cxo1d9_i.js";var u=r(t(),1),d=n(),f={width:`min(100%, 48rem)`},p={display:`grid`,minHeight:`18rem`,alignContent:`end`,justifyItems:`start`,gap:`0.65rem`,padding:`2.4rem`,color:`var(--willa-text-strong)`},m={...p,background:`linear-gradient(135deg, #f7fbff 0%, #edf3ff 45%, #f4f7f1 100%)`},h={...p,background:`linear-gradient(135deg, #fffdf7 0%, #fff4dd 42%, #eef5ff 100%)`},g={...p,color:`#ffffff`,background:`linear-gradient(135deg, #111827 0%, #24324a 50%, #3d4a62 100%)`},_={margin:0,fontSize:`1.55rem`,fontWeight:760,lineHeight:1.25},v={maxWidth:`30rem`,margin:0,color:`var(--willa-text)`,fontSize:`0.98rem`,lineHeight:1.65},y={...v,color:`rgba(255, 255, 255, 0.82)`},b={...p,minHeight:`14rem`,padding:`1.6rem`},x={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`2.35rem`,height:`2.35rem`,color:`var(--willa-text-strong)`,font:`inherit`,fontSize:`1.3rem`,cursor:`pointer`,background:`var(--willa-surface)`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.65rem`,boxShadow:`var(--willa-shadow-sm)`},S={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,minWidth:`1.6rem`,height:`1.2rem`,padding:`0 0.4rem`,fontSize:`0.72rem`,fontWeight:700,lineHeight:1,borderRadius:`0.45rem`},C=e=>(0,d.jsx)(o,{align:`center`,width:`100%`,children:(0,d.jsx)(`div`,{style:f,children:e.children})}),w=c({id:`carousel`,name:`Carousel`,packageName:`willa/Carousel`,description:`用于承载多张内容、运营位、图片或引导卡片的轮播组件。`,imports:[{name:`Carousel`,from:`willa/Carousel`},{name:`Badge`,from:`willa/Badge`}],css:`willa/Carousel.css`,demo:{name:`BasicCarouselPreview`,component:()=>(0,d.jsx)(C,{children:(0,d.jsx)(l,{items:[{key:`summary`,label:`摘要`,content:(0,d.jsxs)(`article`,{style:m,children:[(0,d.jsx)(s,{tone:`info`,children:`AI 工作台`}),(0,d.jsx)(`h3`,{style:_,children:`把反馈整理成可执行摘要`}),(0,d.jsx)(`p`,{style:v,children:`轮播适合承载推荐内容、引导卡片和运营位，也可以直接放入业务组件。`})]})},{key:`report`,label:`报告`,content:(0,d.jsxs)(`article`,{style:h,children:[(0,d.jsx)(s,{tone:`warning`,children:`数据报告`}),(0,d.jsx)(`h3`,{style:_,children:`展示周期趋势和关键指标`}),(0,d.jsx)(`p`,{style:v,children:`dots 和拖拽默认开启，arrows 可以通过参数打开。`})]})},{key:`release`,label:`发布`,content:(0,d.jsxs)(`article`,{style:g,children:[(0,d.jsx)(s,{tone:`neutral`,children:`发布流程`}),(0,d.jsx)(`h3`,{style:_,children:`把变更说明推送到团队频道`}),(0,d.jsx)(`p`,{style:y,children:`items 适合数据驱动的场景，children 适合页面内直接组合内容。`})]})}]})})},code:e(`
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
  `),sections:[{title:`自动播放`,code:e(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel
          arrows
          autoplay
          autoplaySpeed={2400}
          transitionDuration={620}
          pauseOnHover
        >
          <article>默认悬停暂停</article>
          <article>可用 autoplaySpeed 控制间隔</article>
        </Carousel>;
      `),content:(0,d.jsx)(()=>(0,d.jsx)(C,{children:(0,d.jsxs)(l,{arrows:!0,autoplay:!0,autoplaySpeed:2400,transitionDuration:620,pauseOnHover:!0,children:[(0,d.jsxs)(`article`,{style:m,children:[(0,d.jsx)(s,{tone:`success`,children:`自动播放`}),(0,d.jsx)(`h3`,{style:_,children:`默认悬停暂停`}),(0,d.jsx)(`p`,{style:v,children:`适合公告、推荐位和内容平台的精选卡片。`})]}),(0,d.jsxs)(`article`,{style:h,children:[(0,d.jsx)(s,{tone:`warning`,children:`可控节奏`}),(0,d.jsx)(`h3`,{style:_,children:`通过 autoplaySpeed 控制间隔`}),(0,d.jsx)(`p`,{style:v,children:`内置 arrows 会覆盖在轮播内容上，也可以继续用 dots、拖拽或键盘切换。`})]})]})}),{})},{title:`淡入淡出`,code:e(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel effect="fade" adaptiveHeight dotsPosition="top">
          <article>淡入淡出切换</article>
          <article>高度跟随当前内容变化</article>
        </Carousel>;
      `),content:(0,d.jsx)(()=>(0,d.jsx)(C,{children:(0,d.jsxs)(l,{effect:`fade`,adaptiveHeight:!0,dotsPosition:`top`,children:[(0,d.jsxs)(`article`,{style:b,children:[(0,d.jsx)(s,{tone:`info`,children:`Fade`}),(0,d.jsx)(`h3`,{style:_,children:`淡入淡出切换`}),(0,d.jsx)(`p`,{style:v,children:`适合视觉卡片、图片和营销区块。`})]}),(0,d.jsxs)(`article`,{style:{...b,minHeight:`18rem`},children:[(0,d.jsx)(s,{tone:`success`,children:`Adaptive`}),(0,d.jsx)(`h3`,{style:_,children:`高度可以跟随当前内容变化`}),(0,d.jsx)(`p`,{style:v,children:`adaptiveHeight 会让视口高度跟随当前 slide，避免短内容留下过多空白。`})]})]})}),{})},{title:`层叠轮播`,code:e(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows effect="stack">
          <article>当前卡片保持在最前方</article>
          <article>上一张和下一张退到后方</article>
          <article>用视觉层级强调当前内容</article>
        </Carousel>;
      `),content:(0,d.jsx)(()=>(0,d.jsx)(C,{children:(0,d.jsxs)(l,{arrows:!0,effect:`stack`,children:[(0,d.jsxs)(`article`,{style:{...m,minHeight:`15.5rem`},children:[(0,d.jsx)(s,{tone:`info`,children:`重点展示`}),(0,d.jsx)(`h3`,{style:_,children:`当前卡片保持在最前方`}),(0,d.jsx)(`p`,{style:v,children:`stack 效果适合模板库、作品集、AI 结果和产品特性展示。`})]}),(0,d.jsxs)(`article`,{style:{...h,minHeight:`15.5rem`},children:[(0,d.jsx)(s,{tone:`warning`,children:`层次切换`}),(0,d.jsx)(`h3`,{style:_,children:`上一张和下一张退到后方`}),(0,d.jsx)(`p`,{style:v,children:`仍然复用 arrows、dots、拖拽、键盘和自动播放能力。`})]}),(0,d.jsxs)(`article`,{style:{...m,minHeight:`15.5rem`},children:[(0,d.jsx)(s,{tone:`success`,children:`沉浸预览`}),(0,d.jsx)(`h3`,{style:_,children:`用视觉层级强调当前内容`}),(0,d.jsx)(`p`,{style:v,children:`移动端会保留当前卡片优先的层叠效果。`})]})]})}),{})},{title:`指示器位置`,code:e(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows={false} dotsPosition="right">
          <article>右侧指示器</article>
          <article>只保留 dots 和拖拽</article>
        </Carousel>;
      `),content:(0,d.jsx)(()=>(0,d.jsx)(C,{children:(0,d.jsxs)(l,{arrows:!1,dotsPosition:`right`,children:[(0,d.jsxs)(`article`,{style:m,children:[(0,d.jsx)(s,{tone:`info`,children:`右侧指示器`}),(0,d.jsx)(`h3`,{style:_,children:`指示器可以放在四个方向`}),(0,d.jsx)(`p`,{style:v,children:`dotsPosition 支持 top、bottom、left 和 right。`})]}),(0,d.jsxs)(`article`,{style:g,children:[(0,d.jsx)(s,{tone:`neutral`,children:`无箭头`}),(0,d.jsx)(`h3`,{style:_,children:`只保留 dots 和拖拽`}),(0,d.jsx)(`p`,{style:y,children:`适合空间更紧凑、内容数量较少的展示场景。`})]})]})}),{})},{title:`自定义控件`,code:e(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel
          arrows
          renderArrow={(info) => (
            <button
              aria-label={info.ariaLabel}
              disabled={info.disabled}
              type="button"
              onClick={info.onClick}
            >
              {info.direction === "previous" ? "‹" : "›"}
            </button>
          )}
          renderDot={(info) => (
            <span>{info.index + 1}</span>
          )}
        >
          <article>按钮 UI 可以完全接管</article>
          <article>指示器内容可以自定义</article>
        </Carousel>;
      `),content:(0,d.jsx)(()=>(0,d.jsx)(C,{children:(0,d.jsxs)(l,{arrows:!0,renderArrow:e=>(0,d.jsx)(`button`,{"aria-label":e.ariaLabel,disabled:e.disabled,style:{...x,opacity:e.disabled?.4:1},type:`button`,onClick:e.onClick,children:e.direction===`previous`?`‹`:`›`}),renderDot:e=>(0,d.jsx)(`span`,{style:{...S,color:e.active?`var(--willa-button-solid-text)`:`var(--willa-text-muted)`,background:e.active?`var(--willa-button-solid-bg)`:`var(--willa-surface-soft)`},children:e.index+1}),children:[(0,d.jsxs)(`article`,{style:m,children:[(0,d.jsx)(s,{tone:`info`,children:`自定义控件`}),(0,d.jsx)(`h3`,{style:_,children:`按钮 UI 可以完全接管`}),(0,d.jsx)(`p`,{style:v,children:`Carousel 仍负责切换、拖拽、键盘和自动播放逻辑。`})]}),(0,d.jsxs)(`article`,{style:h,children:[(0,d.jsx)(s,{tone:`warning`,children:`保留语义`}),(0,d.jsx)(`h3`,{style:_,children:`指示器内容可以自定义`}),(0,d.jsx)(`p`,{style:v,children:`renderDot 渲染在内部 button 里，不需要重复处理 tab 和 aria。`})]})]})}),{})},{title:`受控切换`,code:e(`
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
      `),content:(0,d.jsx)(()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(0);return(0,d.jsxs)(o,{align:`center`,gap:`md`,width:`100%`,children:[(0,d.jsx)(`div`,{style:f,children:(0,d.jsxs)(l,{ref:e,active:t,onChange:n,loop:!1,children:[(0,d.jsxs)(`article`,{style:m,children:[(0,d.jsx)(s,{tone:`info`,children:`第一步`}),(0,d.jsx)(`h3`,{style:_,children:`确认内容范围`})]}),(0,d.jsxs)(`article`,{style:h,children:[(0,d.jsx)(s,{tone:`warning`,children:`第二步`}),(0,d.jsx)(`h3`,{style:_,children:`生成摘要草稿`})]}),(0,d.jsxs)(`article`,{style:g,children:[(0,d.jsx)(s,{tone:`neutral`,children:`第三步`}),(0,d.jsx)(`h3`,{style:_,children:`发布给团队`})]})]})}),(0,d.jsxs)(a,{justify:`center`,gap:`sm`,children:[(0,d.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>e.current?.prev(),children:`上一张`}),(0,d.jsx)(i,{size:`sm`,onClick:()=>e.current?.next(),children:`下一张`})]})]})},{})}],props:[{name:`items`,type:`Array<CarouselItem>`,description:`数据驱动的轮播项。传入 children 时可不传。`},{name:`children`,type:`ReactNode`,description:`直接作为轮播内容渲染，适合页面内组合。`},{name:`active`,type:`number`,description:`受控当前项下标。`},{name:`defaultActive`,type:`number`,defaultValue:`0`,description:`非受控默认项下标。`},{name:`effect`,type:`"slide" | "fade" | "stack"`,defaultValue:`"slide"`,description:`切换效果。stack 会把当前卡片放在前景，两侧卡片后退展示。`},{name:`arrows`,type:`boolean`,defaultValue:`false`,description:`是否显示覆盖在轮播内容上的左右切换按钮，默认不展示。`},{name:`dots`,type:`boolean`,defaultValue:`true`,description:`是否显示指示器。`},{name:`dotsPosition`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`指示器位置。`},{name:`autoplay`,type:`boolean`,defaultValue:`false`,description:`是否自动播放。`},{name:`autoplaySpeed`,type:`number`,defaultValue:`3000`,description:`自动播放间隔，单位毫秒。`},{name:`transitionDuration`,type:`number`,defaultValue:`520`,description:`切换动画时长，单位毫秒。控制 slide、fade、stack 的过渡速度。`},{name:`pauseOnHover`,type:`boolean`,defaultValue:`true`,description:`鼠标悬停或聚焦时是否暂停自动播放。`},{name:`loop`,type:`boolean`,defaultValue:`true`,description:`切换到边界后是否循环。`},{name:`draggable`,type:`boolean`,defaultValue:`true`,description:`是否允许鼠标或触屏拖拽切换。`},{name:`adaptiveHeight`,type:`boolean`,defaultValue:`false`,description:`是否让视口高度跟随当前内容。`},{name:`previousAriaLabel`,type:`string`,defaultValue:`"上一张"`,description:`上一张按钮的无障碍标签。`},{name:`nextAriaLabel`,type:`string`,defaultValue:`"下一张"`,description:`下一张按钮的无障碍标签。`},{name:`renderArrow`,type:`(info: CarouselArrowRenderInfo) => ReactNode`,description:`自定义上一张、下一张控件 UI。Carousel 仍负责切换逻辑和边界状态。`},{name:`renderDot`,type:`(info: CarouselDotRenderInfo) => ReactNode`,description:`自定义指示器内容，内容会渲染在内部 tab button 中。`},{name:`beforeChange`,type:`(current: number, next: number) => void`,description:`切换前触发。`},{name:`afterChange`,type:`(current: number) => void`,description:`切换后触发。`},{name:`onChange`,type:`(current: number, previous: number) => void`,description:`当前项变化时触发。`},{name:`CarouselItem.content`,type:`ReactNode`,required:!0,group:`CarouselItem`,description:`轮播项内容。`},{name:`CarouselItem.key`,type:`string | number`,group:`CarouselItem`,description:`轮播项唯一标识。`},{name:`CarouselItem.label`,type:`ReactNode`,group:`CarouselItem`,description:`可选的指示器标签。`},{name:`CarouselItem.ariaLabel`,type:`string`,group:`CarouselItem`,description:`当前轮播项的无障碍标签。`},{name:`ref`,type:`{ next: () => void; prev: () => void; goTo: (index: number) => void }`,group:`命令式控制`,description:`通过 ref 暴露的命令式控制方法。`},{name:`CarouselRef.next`,type:`() => void`,group:`CarouselRef`,description:`切换到下一项。`},{name:`CarouselRef.prev`,type:`() => void`,group:`CarouselRef`,description:`切换到上一项。`},{name:`CarouselRef.goTo`,type:`(index: number) => void`,group:`CarouselRef`,description:`切换到指定下标。`},{name:`CarouselArrowRenderInfo.direction`,type:`"previous" | "next"`,group:`CarouselArrowRenderInfo`,description:`当前渲染的是上一张还是下一张控件。`},{name:`CarouselArrowRenderInfo.active`,type:`number`,group:`CarouselArrowRenderInfo`,description:`当前项下标。`},{name:`CarouselArrowRenderInfo.total`,type:`number`,group:`CarouselArrowRenderInfo`,description:`轮播项总数。`},{name:`CarouselArrowRenderInfo.disabled`,type:`boolean`,group:`CarouselArrowRenderInfo`,description:`当前方向是否不可切换。`},{name:`CarouselArrowRenderInfo.ariaLabel`,type:`string`,group:`CarouselArrowRenderInfo`,description:`切换控件的无障碍标签。`},{name:`CarouselArrowRenderInfo.onClick`,type:`() => void`,group:`CarouselArrowRenderInfo`,description:`执行切换的回调。`},{name:`CarouselDotRenderInfo.index`,type:`number`,group:`CarouselDotRenderInfo`,description:`指示器下标。`},{name:`CarouselDotRenderInfo.active`,type:`boolean`,group:`CarouselDotRenderInfo`,description:`当前指示器是否激活。`},{name:`CarouselDotRenderInfo.label`,type:`ReactNode`,group:`CarouselDotRenderInfo`,description:`轮播项传入的可选 label。`},{name:`className`,type:`string`,description:`自定义 className。`},{name:`style`,type:`CSSProperties`,description:`自定义内联样式。`}]});export{w as default};