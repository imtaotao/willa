import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { clampNumber, useControllableState } from "@willa-ui/shared";

import { IconButton } from "#content/components/IconButton";

export type CarouselEffect = "slide" | "fade" | "stack";
export type CarouselDotsPosition = "top" | "bottom" | "left" | "right";
export type CarouselArrowDirection = "previous" | "next";

export type CarouselItem = {
  key?: string | number;
  content: ReactNode;
  label?: ReactNode;
  ariaLabel?: string;
};

export type CarouselRef = {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
};

export type CarouselArrowRenderInfo = {
  direction: CarouselArrowDirection;
  active: number;
  total: number;
  disabled: boolean;
  ariaLabel: string;
  onClick: () => void;
};

export type CarouselDotRenderInfo = {
  index: number;
  active: boolean;
  label?: ReactNode;
};

export type CarouselProps = {
  items?: Array<CarouselItem>;
  children?: ReactNode;
  active?: number;
  defaultActive?: number;
  effect?: CarouselEffect;
  arrows?: boolean;
  dots?: boolean;
  dotsPosition?: CarouselDotsPosition;
  autoplay?: boolean;
  autoplaySpeed?: number;
  transitionDuration?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  draggable?: boolean;
  adaptiveHeight?: boolean;
  previousAriaLabel?: string;
  nextAriaLabel?: string;
  renderArrow?: (info: CarouselArrowRenderInfo) => ReactNode;
  renderDot?: (info: CarouselDotRenderInfo) => ReactNode;
  className?: string;
  style?: CSSProperties;
  beforeChange?: (current: number, next: number) => void;
  afterChange?: (current: number) => void;
  onChange?: (current: number, previous: number) => void;
};

type CarouselSlide = {
  key: string | number;
  content: ReactNode;
  label?: ReactNode;
  ariaLabel?: string;
};

const dragThreshold = 36;

export const Carousel = forwardRef<CarouselRef, CarouselProps>(
  (props, forwardedRef) => {
    const {
      items,
      children,
      active,
      defaultActive = 0,
      effect = "slide",
      arrows = false,
      dots = true,
      dotsPosition = "bottom",
      autoplay = false,
      autoplaySpeed = 3000,
      transitionDuration = 520,
      pauseOnHover = true,
      loop = true,
      draggable = true,
      adaptiveHeight = false,
      previousAriaLabel = "上一张",
      nextAriaLabel = "下一张",
      renderArrow,
      renderDot,
      className,
      style,
      beforeChange,
      afterChange,
      onChange,
    } = props;
    const slides = useMemo(
      () => createSlides(items, children),
      [children, items],
    );
    const [activeValue, setActiveValue] = useControllableState({
      value: active,
      defaultValue: defaultActive,
    });
    const [paused, setPaused] = useState(false);
    const [activeHeight, setActiveHeight] = useState<number>();
    const pointerStartXRef = useRef<number | null>(null);
    const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
    const activeIndex = clampIndex(activeValue, slides.length);
    const canMove = slides.length > 1;
    const previousDisabled = !loop && activeIndex === 0;
    const nextDisabled = !loop && activeIndex === slides.length - 1;

    const goTo = useCallback(
      (nextIndex: number) => {
        if (!canMove) {
          return;
        }

        const normalizedIndex = normalizeIndex(nextIndex, slides.length, loop);

        if (normalizedIndex === activeIndex) {
          return;
        }

        beforeChange?.(activeIndex, normalizedIndex);

        setActiveValue(normalizedIndex);
        onChange?.(normalizedIndex, activeIndex);
        afterChange?.(normalizedIndex);
      },
      [
        activeIndex,
        afterChange,
        beforeChange,
        canMove,
        loop,
        onChange,
        setActiveValue,
        slides.length,
      ],
    );

    const showPrevious = useCallback(() => {
      goTo(activeIndex - 1);
    }, [activeIndex, goTo]);

    const showNext = useCallback(() => {
      goTo(activeIndex + 1);
    }, [activeIndex, goTo]);

    useImperativeHandle(
      forwardedRef,
      () => ({
        next: showNext,
        prev: showPrevious,
        goTo,
      }),
      [goTo, showNext, showPrevious],
    );

    useLayoutEffect(() => {
      if (!adaptiveHeight) {
        setActiveHeight(undefined);
        return;
      }

      const nextHeight = slideRefs.current[activeIndex]?.offsetHeight;
      setActiveHeight((currentHeight) =>
        currentHeight === nextHeight ? currentHeight : nextHeight,
      );
    }, [activeIndex, adaptiveHeight, slides.length]);

    useEffect(() => {
      if (!autoplay || !canMove || (pauseOnHover && paused)) {
        return;
      }

      const timer = window.setInterval(showNext, autoplaySpeed);

      return () => {
        window.clearInterval(timer);
      };
    }, [autoplay, autoplaySpeed, canMove, pauseOnHover, paused, showNext]);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      if (!draggable || !canMove) {
        return;
      }

      pointerStartXRef.current = event.clientX;
      event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
      if (!draggable || pointerStartXRef.current === null) {
        return;
      }

      const distance = event.clientX - pointerStartXRef.current;
      pointerStartXRef.current = null;

      if (Math.abs(distance) < dragThreshold) {
        return;
      }

      if (distance > 0) {
        showPrevious();
        return;
      }

      showNext();
    };

    const handlePointerCancel = () => {
      pointerStartXRef.current = null;
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    const rootStyle = {
      ...style,
      "--willa-carousel-active": activeIndex,
      "--willa-carousel-transition-duration": `${transitionDuration}ms`,
    } as CSSProperties;
    const viewportStyle =
      adaptiveHeight && activeHeight !== undefined
        ? ({ height: activeHeight } satisfies CSSProperties)
        : undefined;

    return (
      <section
        className={classNames(
          "willa-carousel",
          `willa-carousel--${effect}`,
          `willa-carousel--dots-${dotsPosition}`,
          {
            "willa-carousel--draggable": draggable && canMove,
            "willa-carousel--adaptive": adaptiveHeight,
          },
          className,
        )}
        style={rootStyle}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="willa-carousel__viewport"
          style={viewportStyle}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div className="willa-carousel__track">
            {slides.map((slide, index) => (
              <div
                key={slide.key}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className={classNames("willa-carousel__slide", {
                  "willa-carousel__slide--active": index === activeIndex,
                })}
                style={
                  effect === "stack"
                    ? resolveStackStyle(
                        resolveStackOffset(
                          index,
                          activeIndex,
                          slides.length,
                          loop,
                        ),
                      )
                    : undefined
                }
                aria-hidden={index === activeIndex ? undefined : true}
                aria-label={slide.ariaLabel}
              >
                {slide.content}
              </div>
            ))}
          </div>
        </div>

        {arrows && canMove ? (
          <div className="willa-carousel__arrows" aria-hidden={false}>
            <div className="willa-carousel__arrow willa-carousel__arrow--prev">
              {renderArrow?.({
                direction: "previous",
                active: activeIndex,
                total: slides.length,
                disabled: previousDisabled,
                ariaLabel: previousAriaLabel,
                onClick: showPrevious,
              }) ?? (
                <IconButton
                  ariaLabel={previousAriaLabel}
                  disabled={previousDisabled}
                  icon={<ChevronLeftIcon />}
                  variant="soft"
                  size="sm"
                  onClick={showPrevious}
                />
              )}
            </div>
            <div className="willa-carousel__arrow willa-carousel__arrow--next">
              {renderArrow?.({
                direction: "next",
                active: activeIndex,
                total: slides.length,
                disabled: nextDisabled,
                ariaLabel: nextAriaLabel,
                onClick: showNext,
              }) ?? (
                <IconButton
                  ariaLabel={nextAriaLabel}
                  disabled={nextDisabled}
                  icon={<ChevronRightIcon />}
                  variant="soft"
                  size="sm"
                  onClick={showNext}
                />
              )}
            </div>
          </div>
        ) : null}

        {dots && canMove ? (
          <div className="willa-carousel__dots" role="tablist">
            {slides.map((slide, index) => (
              <button
                key={slide.key}
                className={classNames("willa-carousel__dot", {
                  "willa-carousel__dot--active": index === activeIndex,
                })}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`切换到第 ${index + 1} 张`}
                onClick={() => goTo(index)}
              >
                {renderDot?.({
                  index,
                  active: index === activeIndex,
                  label: slide.label,
                }) ?? (
                  <>
                    <span className="willa-carousel__dot-mark" />
                    {slide.label === undefined ? null : (
                      <span className="willa-carousel__dot-label">
                        {slide.label}
                      </span>
                    )}
                  </>
                )}
              </button>
            ))}
          </div>
        ) : null}
      </section>
    );
  },
);

Carousel.displayName = "Carousel";

const createSlides = (
  items: Array<CarouselItem> | undefined,
  children: ReactNode,
) => {
  if (items?.length) {
    const itemSlides: Array<CarouselSlide> = items.map((item, index) => ({
      key: item.key ?? index,
      content: item.content,
      label: item.label,
      ariaLabel: item.ariaLabel,
    }));

    return itemSlides;
  }

  const childSlides: Array<CarouselSlide> = Children.toArray(children).map(
    (child, index) => ({
      key: index,
      content: child,
    }),
  );

  return childSlides;
};

const clampIndex = (index: number, length: number) => {
  if (length <= 0) {
    return 0;
  }

  return clampNumber(index, 0, length - 1);
};

const normalizeIndex = (index: number, length: number, loop: boolean) => {
  if (length <= 0) {
    return 0;
  }

  if (!loop) {
    return clampIndex(index, length);
  }

  return (index + length) % length;
};

const resolveStackOffset = (
  index: number,
  activeIndex: number,
  length: number,
  loop: boolean,
) => {
  if (length <= 0) {
    return 0;
  }

  const directOffset = index - activeIndex;

  if (!loop) {
    return clampStackOffset(directOffset);
  }

  const offsets = [directOffset, directOffset - length, directOffset + length];
  const shortestOffset = offsets.sort(
    (leftOffset, rightOffset) => Math.abs(leftOffset) - Math.abs(rightOffset),
  )[0];

  return clampStackOffset(shortestOffset);
};

const clampStackOffset = (offset: number) => clampNumber(offset, -2, 2);

const resolveStackStyle = (offset: number) => {
  const distance = Math.abs(offset);
  const scale = distance === 0 ? 1 : distance === 1 ? 0.78 : 0.62;
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.58 : 0.28;
  const translateX = offset * 54;
  const zIndex = 4 - distance;

  return {
    "--willa-carousel-stack-translate-x": `${translateX}%`,
    "--willa-carousel-stack-scale": scale,
    "--willa-carousel-stack-opacity": opacity,
    "--willa-carousel-stack-z-index": zIndex,
  } as CSSProperties;
};
