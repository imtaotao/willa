import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import {
  clampNumber,
  useControllableState,
  getFloatingPanelPosition,
  useWillaThemeScopeProps,
  type FloatingPanelAlign,
  type FloatingPanelRect,
  type FloatingPanelSide,
} from "@willa-ui/shared";

import { Button } from "#content/components/Button";
import { IconButton } from "#content/components/IconButton";

export type TourPlacement =
  | "center"
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";
export type TourType = "default" | "primary";
export type TourTarget =
  | HTMLElement
  | string
  | (() => HTMLElement | null)
  | null;
export type TourGap =
  | number
  | {
      offset?: number | readonly [horizontal: number, vertical: number];
      radius?: number;
    };

export type TourActionRenderInfo = {
  current: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type TourLabels = {
  next?: ReactNode;
  prev?: ReactNode;
  finish?: ReactNode;
  closeAriaLabel?: string;
};

export type TourBehavior = {
  keyboard?: boolean;
  disabledInteraction?: boolean;
  mask?: boolean;
  scrollIntoView?: boolean | ScrollIntoViewOptions;
};

export type TourPositioning = {
  placement?: TourPlacement;
  arrow?: boolean;
  gap?: TourGap;
  zIndex?: number;
};

export type TourRenderers = {
  indicators?: (current: number, total: number) => ReactNode;
  actions?: (originNode: ReactNode, info: TourActionRenderInfo) => ReactNode;
};

export type TourClasses = {
  root?: string;
  panel?: string;
  mask?: string;
};

export type TourStepLabels = Pick<TourLabels, "next" | "prev">;
export type TourStepBehavior = Pick<TourBehavior, "mask">;
export type TourStepPositioning = Pick<TourPositioning, "arrow" | "placement">;

export type TourStep = {
  target?: TourTarget;
  title?: ReactNode;
  description?: ReactNode;
  cover?: ReactNode;
  type?: TourType;
  labels?: TourStepLabels;
  behavior?: TourStepBehavior;
  positioning?: TourStepPositioning;
};

export type TourProps = {
  open?: boolean;
  defaultOpen?: boolean;
  current?: number;
  defaultCurrent?: number;
  steps: Array<TourStep>;
  type?: TourType;
  labels?: TourLabels;
  behavior?: TourBehavior;
  positioning?: TourPositioning;
  render?: TourRenderers;
  classes?: TourClasses;
  onChange?: (current: number) => void;
  onClose?: () => void;
  onFinish?: () => void;
  onOpenChange?: (open: boolean) => void;
};

type TourRect = {
  top: number;
  left: number;
  width: number;
  height: number;
  radius: number;
};

type TourPanelPosition = {
  top: number;
  left: number;
  placement: TourPlacement;
};

const viewportPadding = 12;
const defaultOffset = 8;
const defaultRadius = 8;
const defaultGap = { offset: 8, radius: 10 } satisfies TourGap;

export function Tour(props: TourProps) {
  const {
    open,
    defaultOpen = false,
    current,
    defaultCurrent = 0,
    steps,
    type = "default",
    labels,
    behavior,
    positioning,
    render,
    classes,
    onChange,
    onClose,
    onFinish,
    onOpenChange,
  } = props;
  const {
    closeAriaLabel = "关闭引导",
    finish = "完成",
    next = "下一步",
    prev = "上一步",
  } = labels ?? {};
  const {
    disabledInteraction = false,
    keyboard = true,
    mask = true,
    scrollIntoView = true,
  } = behavior ?? {};
  const {
    arrow = true,
    gap = defaultGap,
    placement = "bottom",
    zIndex,
  } = positioning ?? {};
  const id = useId();
  const [isOpen, setTourOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const [currentStep, setCurrentStep] = useControllableState({
    value: current,
    defaultValue: defaultCurrent,
  });
  const activeIndex = clampNumber(currentStep, 0, steps.length - 1);
  const activeStep = steps[activeIndex];
  const total = steps.length;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;
  const resolvedType = activeStep?.type ?? type;
  const resolvedMask = activeStep?.behavior?.mask ?? mask;
  const resolvedArrow = activeStep?.positioning?.arrow ?? arrow;
  const resolvedPlacement = activeStep?.positioning?.placement ?? placement;
  const activeTarget = activeStep?.target;
  const panelRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = useState<TourRect | null>(null);
  const [panelPosition, setPanelPosition] = useState<TourPanelPosition | null>(
    null,
  );
  const [animateMotion, setAnimateMotion] = useState(false);
  const [stepTransitioning, setStepTransitioning] = useState(false);
  const motionFrameRef = useRef<number | null>(null);
  const activeIndexRef = useRef(activeIndex);

  const setTourCurrent = useCallback(
    (nextCurrent: number) => {
      const normalizedCurrent = clampNumber(nextCurrent, 0, steps.length - 1);

      setCurrentStep(normalizedCurrent);
      onChange?.(normalizedCurrent);
    },
    [onChange, setCurrentStep, steps.length],
  );

  const closeTour = useCallback(() => {
    setTourOpen(false);
    onClose?.();
  }, [onClose, setTourOpen]);

  const finishTour = useCallback(() => {
    onFinish?.();
    setTourOpen(false);
  }, [onFinish, setTourOpen]);

  const showPreviousStep = useCallback(() => {
    if (!isFirst) {
      setTourCurrent(activeIndex - 1);
    }
  }, [activeIndex, isFirst, setTourCurrent]);

  const showNextStep = useCallback(() => {
    if (isLast) {
      finishTour();
      return;
    }

    setTourCurrent(activeIndex + 1);
  }, [activeIndex, finishTour, isLast, setTourCurrent]);

  const updateLayout = useCallback(() => {
    if (!isOpen || !activeStep || typeof window === "undefined") return;
    const panelElement = panelRef.current;
    const targetElement = resolveTarget(activeTarget);

    if (targetElement && scrollIntoView) {
      targetElement.scrollIntoView(
        typeof scrollIntoView === "boolean"
          ? { block: "center", inline: "center" }
          : scrollIntoView,
      );
    }

    const nextTargetRect = targetElement
      ? createHighlightRect(targetElement.getBoundingClientRect(), gap)
      : null;

    setTargetRect((previousRect) =>
      areTourRectsEqual(previousRect, nextTargetRect)
        ? previousRect
        : nextTargetRect,
    );
    setPanelPosition(
      getTourPanelPosition({
        panelElement,
        placement: resolvedPlacement,
        targetRect: nextTargetRect,
      }),
    );
  }, [
    activeStep,
    activeTarget,
    gap,
    isOpen,
    resolvedPlacement,
    scrollIntoView,
  ]);

  useLayoutEffect(() => {
    if (!isOpen || steps.length === 0 || typeof window === "undefined") return;

    updateLayout();

    const handleUpdate = () => updateLayout();

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true);

    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
    };
  }, [isOpen, steps.length, updateLayout]);

  useEffect(() => {
    if (!isOpen || !keyboard || typeof document === "undefined") return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeTour();
        return;
      }
      if (event.key === "ArrowRight") {
        showNextStep();
        return;
      }
      if (event.key === "ArrowLeft") {
        showPreviousStep();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeTour, isOpen, keyboard, showNextStep, showPreviousStep]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;

    if (motionFrameRef.current !== null) {
      window.cancelAnimationFrame(motionFrameRef.current);
      motionFrameRef.current = null;
    }

    setAnimateMotion(false);
    setStepTransitioning(false);
    setTargetRect(null);
    setPanelPosition(null);
  }, [isOpen]);

  const hasPositionedPanel = panelPosition !== null;

  useEffect(() => {
    if (!hasPositionedPanel || animateMotion || typeof window === "undefined") {
      return;
    }

    if (motionFrameRef.current !== null) {
      window.cancelAnimationFrame(motionFrameRef.current);
      motionFrameRef.current = null;
    }

    motionFrameRef.current = window.requestAnimationFrame(() => {
      setAnimateMotion(true);
      motionFrameRef.current = null;
    });

    return () => {
      if (motionFrameRef.current !== null) {
        window.cancelAnimationFrame(motionFrameRef.current);
        motionFrameRef.current = null;
      }
    };
  }, [animateMotion, hasPositionedPanel]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      activeIndexRef.current = activeIndex;
      setStepTransitioning(false);
      return;
    }

    if (activeIndexRef.current === activeIndex) return;
    activeIndexRef.current = activeIndex;

    setStepTransitioning(true);
    const timer = window.setTimeout(() => {
      setStepTransitioning(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isOpen]);

  const titleId = activeStep?.title ? `${id}-title` : undefined;

  const descriptionId = activeStep?.description
    ? `${id}-description`
    : undefined;

  const zIndexStyle =
    zIndex === undefined
      ? {}
      : ({ "--willa-tour-z-index": zIndex } as CSSProperties);

  const panelStyle = {
    ...zIndexStyle,
    top: panelPosition?.placement === "center" ? "50%" : 0,
    left: panelPosition?.placement === "center" ? "50%" : 0,
    transform:
      panelPosition?.placement === "center"
        ? "translate3d(-50%, -50%, 0)"
        : panelPosition
          ? `translate3d(${panelPosition.left}px, ${panelPosition.top}px, 0)`
          : undefined,
    opacity: panelPosition ? 1 : 0,
    visibility: panelPosition ? "visible" : "hidden",
  } as CSSProperties;

  const rootStyle = zIndexStyle;
  const themeScopeProps = useWillaThemeScopeProps();
  const indicators = useMemo(() => {
    if (render?.indicators) return render.indicators(activeIndex, total);

    return (
      <span className="willa-tour__dots" aria-hidden="true">
        {steps.map((_, index) => (
          <span
            key={index}
            className={classNames(
              "willa-tour__dot",
              index === activeIndex && "willa-tour__dot--active",
            )}
          />
        ))}
      </span>
    );
  }, [activeIndex, render, steps, total]);

  if (
    !isOpen ||
    !activeStep ||
    total === 0 ||
    typeof document === "undefined"
  ) {
    return null;
  }

  const defaultActions = (
    <>
      {!isFirst ? (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={showPreviousStep}
        >
          {activeStep.labels?.prev ?? prev}
        </Button>
      ) : null}
      <Button type="button" variant="solid" size="sm" onClick={showNextStep}>
        {isLast ? finish : (activeStep.labels?.next ?? next)}
      </Button>
    </>
  );

  const actions = render?.actions
    ? render.actions(defaultActions, {
        current: activeIndex,
        total,
        isFirst,
        isLast,
      })
    : defaultActions;

  return createPortal(
    <div
      {...themeScopeProps}
      className={classNames(
        "willa-tour",
        `willa-tour--${resolvedType}`,
        animateMotion && "willa-tour--animate",
        stepTransitioning && "willa-tour--step-transitioning",
        classes?.root,
      )}
      style={rootStyle}
    >
      {resolvedMask ? (
        <TourMask
          ariaLabel={closeAriaLabel}
          className={classes?.mask}
          rect={targetRect}
          onClick={closeTour}
        />
      ) : null}
      {targetRect ? (
        <div
          className={classNames(
            "willa-tour__highlight",
            disabledInteraction && "willa-tour__highlight--disabled",
          )}
          style={getHighlightStyle(targetRect)}
          aria-hidden="true"
        />
      ) : null}
      <div
        ref={panelRef}
        className={classNames(
          "willa-tour__panel",
          `willa-tour__panel--${panelPosition?.placement ?? resolvedPlacement}`,
          classes?.panel,
        )}
        style={panelStyle}
        role="dialog"
        aria-modal={resolvedMask}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onKeyDown={handlePanelKeyDown}
      >
        {resolvedArrow && panelPosition?.placement !== "center" ? (
          <span className="willa-tour__arrow" aria-hidden="true" />
        ) : null}
        <IconButton
          className="willa-tour__close"
          ariaLabel={closeAriaLabel}
          icon={<Cross2Icon />}
          variant="ghost"
          size="sm"
          onClick={closeTour}
        />
        {activeStep.cover ? (
          <div className="willa-tour__cover">{activeStep.cover}</div>
        ) : null}
        <div className="willa-tour__content">
          {activeStep.title ? (
            <h2 className="willa-tour__title" id={titleId}>
              {activeStep.title}
            </h2>
          ) : null}
          {activeStep.description ? (
            <div className="willa-tour__description" id={descriptionId}>
              {activeStep.description}
            </div>
          ) : null}
        </div>
        <div className="willa-tour__footer">
          <div className="willa-tour__indicators">
            <span className="willa-tour__count">
              {activeIndex + 1} / {total}
            </span>
            {indicators}
          </div>
          <div className="willa-tour__actions">{actions}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

const TourMask = (props: {
  ariaLabel: string;
  rect: TourRect | null;
  className?: string;
  onClick: () => void;
}) => {
  if (typeof window === "undefined") return null;

  if (!props.rect) {
    return (
      <button
        type="button"
        className={classNames("willa-tour__mask", props.className)}
        aria-label={props.ariaLabel}
        onClick={props.onClick}
      />
    );
  }

  const hitAreaStyles = getMaskHitAreaStyles(props.rect);

  return (
    <>
      <div
        className={classNames(
          "willa-tour__mask",
          "willa-tour__mask--cutout",
          props.className,
        )}
        aria-hidden="true"
      >
        <span
          className="willa-tour__mask-cutout"
          style={getMaskCutoutStyle(props.rect)}
        />
      </div>
      {hitAreaStyles.map((style, index) => (
        <button
          key={index}
          type="button"
          className="willa-tour__mask-hit-area"
          aria-label={props.ariaLabel}
          style={style}
          onClick={props.onClick}
        />
      ))}
    </>
  );
};

const getMaskHitAreaStyles = (rect: TourRect) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const overlap = 1;
  const leftEdge = Math.max(0, rect.left - overlap);
  const rightEdge = Math.min(viewportWidth, rect.left + rect.width + overlap);

  return [
    {
      top: 0,
      left: 0,
      width: viewportWidth,
      height: rect.top,
    },
    {
      top: rect.top,
      left: 0,
      width: leftEdge + overlap,
      height: rect.height,
    },
    {
      top: rect.top,
      left: rightEdge - overlap,
      width: Math.max(0, viewportWidth - rightEdge + overlap),
      height: rect.height,
    },
    {
      top: rect.top + rect.height,
      left: 0,
      width: viewportWidth,
      height: Math.max(0, viewportHeight - rect.top - rect.height),
    },
  ].filter(
    (style) => style.width > 0 && style.height > 0,
  ) satisfies Array<CSSProperties>;
};

const getMaskCutoutStyle = (rect: TourRect) => {
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    borderRadius: rect.radius,
  } satisfies CSSProperties;
};

const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  if (event.key === "Tab") {
    event.stopPropagation();
  }
};

const resolveTarget = (target?: TourTarget) => {
  if (!target || typeof document === "undefined") return null;
  if (target instanceof HTMLElement) return target;
  if (typeof target === "function") return target();
  return document.querySelector<HTMLElement>(target);
};

const createHighlightRect = (rect: DOMRect, gap: TourGap): TourRect => {
  const normalizedGap = normalizeGap(gap);
  const leftOffset = normalizedGap.offsetX;
  const topOffset = normalizedGap.offsetY;

  return {
    top: clampNumber(rect.top - topOffset, 0, window.innerHeight),
    left: clampNumber(rect.left - leftOffset, 0, window.innerWidth),
    width: Math.min(rect.width + leftOffset * 2, window.innerWidth),
    height: Math.min(rect.height + topOffset * 2, window.innerHeight),
    radius: normalizedGap.radius,
  };
};

const normalizeGap = (gap: TourGap) => {
  if (typeof gap === "number") {
    return { offsetX: gap, offsetY: gap, radius: defaultRadius };
  }

  const offset = gap.offset ?? defaultOffset;

  if (Array.isArray(offset)) {
    return {
      offsetX: offset[0],
      offsetY: offset[1],
      radius: gap.radius ?? defaultRadius,
    };
  }

  return {
    offsetX: offset,
    offsetY: offset,
    radius: gap.radius ?? defaultRadius,
  };
};

const getHighlightStyle = (rect: TourRect) => {
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    borderRadius: rect.radius,
  } satisfies CSSProperties;
};

const areTourRectsEqual = (
  previousRect: TourRect | null,
  nextRect: TourRect | null,
) => {
  if (previousRect === nextRect) return true;
  if (!previousRect || !nextRect) return false;

  return (
    previousRect.top === nextRect.top &&
    previousRect.left === nextRect.left &&
    previousRect.width === nextRect.width &&
    previousRect.height === nextRect.height &&
    previousRect.radius === nextRect.radius
  );
};

const getTourFloatingPlacement = (
  placement: TourPlacement,
): { side: FloatingPanelSide; align: FloatingPanelAlign } | null => {
  if (placement === "center") return null;

  const [side, align = "center"] = placement.split("-") as [
    FloatingPanelSide,
    FloatingPanelAlign | undefined,
  ];

  return { side, align };
};

const getTourPanelPosition = (options: {
  panelElement: HTMLElement | null;
  placement: TourPlacement;
  targetRect: TourRect | null;
}): TourPanelPosition | null => {
  const { panelElement, placement, targetRect } = options;

  if (!targetRect || placement === "center") {
    return {
      top: viewportPadding,
      left: viewportPadding,
      placement: "center",
    };
  }

  const floatingPlacement = getTourFloatingPlacement(placement);
  if (!floatingPlacement || !panelElement) return null;

  const position = getFloatingPanelPosition({
    anchorRect: createFloatingRect(targetRect),
    floatingRect: {
      width: panelElement.offsetWidth,
      height: panelElement.offsetHeight,
    },
    side: floatingPlacement.side,
    align: floatingPlacement.align,
    offset: 14,
    viewportPadding,
  });

  return {
    top: position.top,
    left: position.left,
    placement,
  };
};

const createFloatingRect = (rect: TourRect): FloatingPanelRect => {
  return {
    top: rect.top,
    right: rect.left + rect.width,
    bottom: rect.top + rect.height,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
};

Tour.displayName = "Tour";
