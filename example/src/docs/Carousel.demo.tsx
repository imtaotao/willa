import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { unindent } from "aidly";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Carousel, type CarouselItem, type CarouselRef } from "willa/Carousel";
import { Group } from "willa/Group";
import { Stack } from "willa/Stack";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Carousel.css";
import "willa/Group.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const carouselFrameStyle = {
  width: "min(100%, 48rem)",
} satisfies CSSProperties;

const slideBaseStyle = {
  display: "grid",
  minHeight: "18rem",
  alignContent: "end",
  justifyItems: "start",
  gap: "0.65rem",
  padding: "2.4rem",
  color: "var(--willa-text-strong)",
} satisfies CSSProperties;

const primarySlideStyle = {
  ...slideBaseStyle,
  background: "linear-gradient(135deg, #f7fbff 0%, #edf3ff 45%, #f4f7f1 100%)",
} satisfies CSSProperties;

const warmSlideStyle = {
  ...slideBaseStyle,
  background: "linear-gradient(135deg, #fffdf7 0%, #fff4dd 42%, #eef5ff 100%)",
} satisfies CSSProperties;

const darkSlideStyle = {
  ...slideBaseStyle,
  color: "#ffffff",
  background: "linear-gradient(135deg, #111827 0%, #24324a 50%, #3d4a62 100%)",
} satisfies CSSProperties;

const slideTitleStyle = {
  margin: 0,
  fontSize: "1.55rem",
  fontWeight: 760,
  lineHeight: 1.25,
} satisfies CSSProperties;

const slideDescriptionStyle = {
  maxWidth: "30rem",
  margin: 0,
  color: "var(--willa-text)",
  fontSize: "0.98rem",
  lineHeight: 1.65,
} satisfies CSSProperties;

const darkSlideDescriptionStyle = {
  ...slideDescriptionStyle,
  color: "rgba(255, 255, 255, 0.82)",
} satisfies CSSProperties;

const compactSlideStyle = {
  ...slideBaseStyle,
  minHeight: "14rem",
  padding: "1.6rem",
} satisfies CSSProperties;

const customArrowStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.35rem",
  height: "2.35rem",
  color: "var(--willa-text-strong)",
  font: "inherit",
  fontSize: "1.3rem",
  cursor: "pointer",
  background: "var(--willa-surface)",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.65rem",
  boxShadow: "var(--willa-shadow-sm)",
} satisfies CSSProperties;

const customDotStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "1.6rem",
  height: "1.2rem",
  padding: "0 0.4rem",
  fontSize: "0.72rem",
  fontWeight: 700,
  lineHeight: 1,
  borderRadius: "0.45rem",
} satisfies CSSProperties;

const CarouselDemoFrame = (props: { children: ReactNode }) => {
  return (
    <Stack align="center" width="100%">
      <div style={carouselFrameStyle}>{props.children}</div>
    </Stack>
  );
};

const BasicCarouselPreview = () => {
  const slides: Array<CarouselItem> = [
    {
      key: "summary",
      label: "摘要",
      content: (
        <article style={primarySlideStyle}>
          <Badge tone="info">AI 工作台</Badge>
          <h3 style={slideTitleStyle}>把反馈整理成可执行摘要</h3>
          <p style={slideDescriptionStyle}>
            轮播适合承载推荐内容、引导卡片和运营位，也可以直接放入业务组件。
          </p>
        </article>
      ),
    },
    {
      key: "report",
      label: "报告",
      content: (
        <article style={warmSlideStyle}>
          <Badge tone="warning">数据报告</Badge>
          <h3 style={slideTitleStyle}>展示周期趋势和关键指标</h3>
          <p style={slideDescriptionStyle}>
            dots 和拖拽默认开启，arrows 可以通过参数打开。
          </p>
        </article>
      ),
    },
    {
      key: "release",
      label: "发布",
      content: (
        <article style={darkSlideStyle}>
          <Badge tone="neutral">发布流程</Badge>
          <h3 style={slideTitleStyle}>把变更说明推送到团队频道</h3>
          <p style={darkSlideDescriptionStyle}>
            items 适合数据驱动的场景，children 适合页面内直接组合内容。
          </p>
        </article>
      ),
    },
  ];

  return (
    <CarouselDemoFrame>
      <Carousel items={slides} />
    </CarouselDemoFrame>
  );
};

const AutoplayCarouselPreview = () => {
  return (
    <CarouselDemoFrame>
      <Carousel
        arrows
        autoplay
        autoplaySpeed={2400}
        transitionDuration={620}
        pauseOnHover
      >
        <article style={primarySlideStyle}>
          <Badge tone="success">自动播放</Badge>
          <h3 style={slideTitleStyle}>默认悬停暂停</h3>
          <p style={slideDescriptionStyle}>
            适合公告、推荐位和内容平台的精选卡片。
          </p>
        </article>
        <article style={warmSlideStyle}>
          <Badge tone="warning">可控节奏</Badge>
          <h3 style={slideTitleStyle}>通过 autoplaySpeed 控制间隔</h3>
          <p style={slideDescriptionStyle}>
            内置 arrows 会覆盖在轮播内容上，也可以继续用 dots、拖拽或键盘切换。
          </p>
        </article>
      </Carousel>
    </CarouselDemoFrame>
  );
};

const FadeCarouselPreview = () => {
  return (
    <CarouselDemoFrame>
      <Carousel effect="fade" adaptiveHeight dotsPosition="top">
        <article style={compactSlideStyle}>
          <Badge tone="info">Fade</Badge>
          <h3 style={slideTitleStyle}>淡入淡出切换</h3>
          <p style={slideDescriptionStyle}>适合视觉卡片、图片和营销区块。</p>
        </article>
        <article style={{ ...compactSlideStyle, minHeight: "18rem" }}>
          <Badge tone="success">Adaptive</Badge>
          <h3 style={slideTitleStyle}>高度可以跟随当前内容变化</h3>
          <p style={slideDescriptionStyle}>
            adaptiveHeight 会让视口高度跟随当前 slide，避免短内容留下过多空白。
          </p>
        </article>
      </Carousel>
    </CarouselDemoFrame>
  );
};

const StackCarouselPreview = () => {
  return (
    <CarouselDemoFrame>
      <Carousel arrows effect="stack">
        <article style={{ ...primarySlideStyle, minHeight: "15.5rem" }}>
          <Badge tone="info">重点展示</Badge>
          <h3 style={slideTitleStyle}>当前卡片保持在最前方</h3>
          <p style={slideDescriptionStyle}>
            stack 效果适合模板库、作品集、AI 结果和产品特性展示。
          </p>
        </article>
        <article style={{ ...warmSlideStyle, minHeight: "15.5rem" }}>
          <Badge tone="warning">层次切换</Badge>
          <h3 style={slideTitleStyle}>上一张和下一张退到后方</h3>
          <p style={slideDescriptionStyle}>
            仍然复用 arrows、dots、拖拽、键盘和自动播放能力。
          </p>
        </article>
        <article style={{ ...primarySlideStyle, minHeight: "15.5rem" }}>
          <Badge tone="success">沉浸预览</Badge>
          <h3 style={slideTitleStyle}>用视觉层级强调当前内容</h3>
          <p style={slideDescriptionStyle}>
            移动端会保留当前卡片优先的层叠效果。
          </p>
        </article>
      </Carousel>
    </CarouselDemoFrame>
  );
};

const DotsPositionCarouselPreview = () => {
  return (
    <CarouselDemoFrame>
      <Carousel arrows={false} dotsPosition="right">
        <article style={primarySlideStyle}>
          <Badge tone="info">右侧指示器</Badge>
          <h3 style={slideTitleStyle}>指示器可以放在四个方向</h3>
          <p style={slideDescriptionStyle}>
            dotsPosition 支持 top、bottom、left 和 right。
          </p>
        </article>
        <article style={darkSlideStyle}>
          <Badge tone="neutral">无箭头</Badge>
          <h3 style={slideTitleStyle}>只保留 dots 和拖拽</h3>
          <p style={darkSlideDescriptionStyle}>
            适合空间更紧凑、内容数量较少的展示场景。
          </p>
        </article>
      </Carousel>
    </CarouselDemoFrame>
  );
};

const CustomControlsCarouselPreview = () => {
  return (
    <CarouselDemoFrame>
      <Carousel
        arrows
        renderArrow={(info) => (
          <button
            aria-label={info.ariaLabel}
            disabled={info.disabled}
            style={{
              ...customArrowStyle,
              opacity: info.disabled ? 0.4 : 1,
            }}
            type="button"
            onClick={info.onClick}
          >
            {info.direction === "previous" ? "‹" : "›"}
          </button>
        )}
        renderDot={(info) => (
          <span
            style={{
              ...customDotStyle,
              color: info.active
                ? "var(--willa-button-solid-text)"
                : "var(--willa-text-muted)",
              background: info.active
                ? "var(--willa-button-solid-bg)"
                : "var(--willa-surface-soft)",
            }}
          >
            {info.index + 1}
          </span>
        )}
      >
        <article style={primarySlideStyle}>
          <Badge tone="info">自定义控件</Badge>
          <h3 style={slideTitleStyle}>按钮 UI 可以完全接管</h3>
          <p style={slideDescriptionStyle}>
            Carousel 仍负责切换、拖拽、键盘和自动播放逻辑。
          </p>
        </article>
        <article style={warmSlideStyle}>
          <Badge tone="warning">保留语义</Badge>
          <h3 style={slideTitleStyle}>指示器内容可以自定义</h3>
          <p style={slideDescriptionStyle}>
            renderDot 渲染在内部 button 里，不需要重复处理 tab 和 aria。
          </p>
        </article>
      </Carousel>
    </CarouselDemoFrame>
  );
};

const ControlledCarouselPreview = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [active, setActive] = useState(0);

  return (
    <Stack align="center" gap="md" width="100%">
      <div style={carouselFrameStyle}>
        <Carousel
          ref={carouselRef}
          active={active}
          onChange={setActive}
          loop={false}
        >
          <article style={primarySlideStyle}>
            <Badge tone="info">第一步</Badge>
            <h3 style={slideTitleStyle}>确认内容范围</h3>
          </article>
          <article style={warmSlideStyle}>
            <Badge tone="warning">第二步</Badge>
            <h3 style={slideTitleStyle}>生成摘要草稿</h3>
          </article>
          <article style={darkSlideStyle}>
            <Badge tone="neutral">第三步</Badge>
            <h3 style={slideTitleStyle}>发布给团队</h3>
          </article>
        </Carousel>
      </div>
      <Group justify="center" gap="sm">
        <Button
          size="sm"
          variant="outline"
          onClick={() => carouselRef.current?.prev()}
        >
          上一张
        </Button>
        <Button size="sm" onClick={() => carouselRef.current?.next()}>
          下一张
        </Button>
      </Group>
    </Stack>
  );
};

export default defineDoc({
  id: "carousel",
  name: "Carousel",
  packageName: "willa/Carousel",
  description: "用于承载多张内容、运营位、图片或引导卡片的轮播组件。",
  imports: [
    { name: "Carousel", from: "willa/Carousel" },
    { name: "Badge", from: "willa/Badge" },
  ],
  css: "willa/Carousel.css",
  demo: {
    name: "BasicCarouselPreview",
    component: BasicCarouselPreview,
  },
  code: unindent(`
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
  `),
  sections: [
    {
      title: "自动播放",
      code: unindent(`
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
      `),
      content: <AutoplayCarouselPreview />,
    },
    {
      title: "淡入淡出",
      code: unindent(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel effect="fade" adaptiveHeight dotsPosition="top">
          <article>淡入淡出切换</article>
          <article>高度跟随当前内容变化</article>
        </Carousel>;
      `),
      content: <FadeCarouselPreview />,
    },
    {
      title: "层叠轮播",
      code: unindent(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows effect="stack">
          <article>当前卡片保持在最前方</article>
          <article>上一张和下一张退到后方</article>
          <article>用视觉层级强调当前内容</article>
        </Carousel>;
      `),
      content: <StackCarouselPreview />,
    },
    {
      title: "指示器位置",
      code: unindent(`
        import { Carousel } from "willa/Carousel";
        import "willa/Carousel.css";

        <Carousel arrows={false} dotsPosition="right">
          <article>右侧指示器</article>
          <article>只保留 dots 和拖拽</article>
        </Carousel>;
      `),
      content: <DotsPositionCarouselPreview />,
    },
    {
      title: "自定义控件",
      code: unindent(`
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
      `),
      content: <CustomControlsCarouselPreview />,
    },
    {
      title: "受控切换",
      code: unindent(`
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
      `),
      content: <ControlledCarouselPreview />,
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<CarouselItem>",
      description: "数据驱动的轮播项。传入 children 时可不传。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "直接作为轮播内容渲染，适合页面内组合。",
    },
    {
      name: "active",
      type: "number",
      description: "受控当前项下标。",
    },
    {
      name: "defaultActive",
      type: "number",
      defaultValue: "0",
      description: "非受控默认项下标。",
    },
    {
      name: "effect",
      type: '"slide" | "fade" | "stack"',
      defaultValue: '"slide"',
      description: "切换效果。stack 会把当前卡片放在前景，两侧卡片后退展示。",
    },
    {
      name: "arrows",
      type: "boolean",
      defaultValue: "false",
      description: "是否显示覆盖在轮播内容上的左右切换按钮，默认不展示。",
    },
    {
      name: "dots",
      type: "boolean",
      defaultValue: "true",
      description: "是否显示指示器。",
    },
    {
      name: "dotsPosition",
      type: '"top" | "bottom" | "left" | "right"',
      defaultValue: '"bottom"',
      description: "指示器位置。",
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: "false",
      description: "是否自动播放。",
    },
    {
      name: "autoplaySpeed",
      type: "number",
      defaultValue: "3000",
      description: "自动播放间隔，单位毫秒。",
    },
    {
      name: "transitionDuration",
      type: "number",
      defaultValue: "520",
      description:
        "切换动画时长，单位毫秒。控制 slide、fade、stack 的过渡速度。",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      defaultValue: "true",
      description: "鼠标悬停或聚焦时是否暂停自动播放。",
    },
    {
      name: "loop",
      type: "boolean",
      defaultValue: "true",
      description: "切换到边界后是否循环。",
    },
    {
      name: "draggable",
      type: "boolean",
      defaultValue: "true",
      description: "是否允许鼠标或触屏拖拽切换。",
    },
    {
      name: "adaptiveHeight",
      type: "boolean",
      defaultValue: "false",
      description: "是否让视口高度跟随当前内容。",
    },
    {
      name: "previousAriaLabel",
      type: "string",
      defaultValue: '"上一张"',
      description: "上一张按钮的无障碍标签。",
    },
    {
      name: "nextAriaLabel",
      type: "string",
      defaultValue: '"下一张"',
      description: "下一张按钮的无障碍标签。",
    },
    {
      name: "renderArrow",
      type: "(info: CarouselArrowRenderInfo) => ReactNode",
      description:
        "自定义上一张、下一张控件 UI。Carousel 仍负责切换逻辑和边界状态。",
    },
    {
      name: "renderDot",
      type: "(info: CarouselDotRenderInfo) => ReactNode",
      description: "自定义指示器内容，内容会渲染在内部 tab button 中。",
    },
    {
      name: "beforeChange",
      type: "(current: number, next: number) => void",
      description: "切换前触发。",
    },
    {
      name: "afterChange",
      type: "(current: number) => void",
      description: "切换后触发。",
    },
    {
      name: "onChange",
      type: "(current: number, previous: number) => void",
      description: "当前项变化时触发。",
    },
    {
      name: "CarouselItem.content",
      type: "ReactNode",
      required: true,
      group: "CarouselItem",
      description: "轮播项内容。",
    },
    {
      name: "CarouselItem.key",
      type: "string | number",
      group: "CarouselItem",
      description: "轮播项唯一标识。",
    },
    {
      name: "CarouselItem.label",
      type: "ReactNode",
      group: "CarouselItem",
      description: "可选的指示器标签。",
    },
    {
      name: "CarouselItem.ariaLabel",
      type: "string",
      group: "CarouselItem",
      description: "当前轮播项的无障碍标签。",
    },
    {
      name: "CarouselRef",
      type: "{ next: () => void; prev: () => void; goTo: (index: number) => void }",
      group: "CarouselRef",
      description: "通过 ref 暴露的命令式控制方法。",
    },
    {
      name: "CarouselArrowRenderInfo.direction",
      type: '"previous" | "next"',
      group: "CarouselArrowRenderInfo",
      description: "当前渲染的是上一张还是下一张控件。",
    },
    {
      name: "CarouselArrowRenderInfo.active",
      type: "number",
      group: "CarouselArrowRenderInfo",
      description: "当前项下标。",
    },
    {
      name: "CarouselArrowRenderInfo.total",
      type: "number",
      group: "CarouselArrowRenderInfo",
      description: "轮播项总数。",
    },
    {
      name: "CarouselArrowRenderInfo.disabled",
      type: "boolean",
      group: "CarouselArrowRenderInfo",
      description: "当前方向是否不可切换。",
    },
    {
      name: "CarouselArrowRenderInfo.ariaLabel",
      type: "string",
      group: "CarouselArrowRenderInfo",
      description: "切换控件的无障碍标签。",
    },
    {
      name: "CarouselArrowRenderInfo.onClick",
      type: "() => void",
      group: "CarouselArrowRenderInfo",
      description: "执行切换的回调。",
    },
    {
      name: "CarouselDotRenderInfo.index",
      type: "number",
      group: "CarouselDotRenderInfo",
      description: "指示器下标。",
    },
    {
      name: "CarouselDotRenderInfo.active",
      type: "boolean",
      group: "CarouselDotRenderInfo",
      description: "当前指示器是否激活。",
    },
    {
      name: "CarouselDotRenderInfo.label",
      type: "ReactNode",
      group: "CarouselDotRenderInfo",
      description: "轮播项传入的可选 label。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
    {
      name: "style",
      type: "CSSProperties",
      description: "自定义内联样式。",
    },
  ],
});
