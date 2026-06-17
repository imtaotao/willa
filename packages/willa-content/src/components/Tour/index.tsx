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
import { clampNumber } from "@willa-ui/shared";

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

export type TourStep = {
  target?: TourTarget;
  title?: ReactNode;
  description?: ReactNode;
  cover?: ReactNode;
  placement?: TourPlacement;
  type?: TourType;
  arrow?: boolean;
  mask?: boolean;
  nextText?: ReactNode;
  prevText?: ReactNode;
};

export type TourActionRenderInfo = {
  current: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
};

export type TourProps = {
  open?: boolean;
  defaultOpen?: boolean;
  current?: number;
  defaultCurrent?: number;
  steps: Array<TourStep>;
  placement?: TourPlacement;
  type?: TourType;
  mask?: boolean;
  arrow?: boolean;
  gap?: TourGap;
  keyboard?: boolean;
  disabledInteraction?: boolean;
  scrollIntoView?: boolean | ScrollIntoViewOptions;
  nextText?: ReactNode;
  prevText?: ReactNode;
  finishText?: ReactNode;
  closeAriaLabel?: string;
  zIndex?: number;
  className?: string;
  panelClassName?: string;
  maskClassName?: string;
  indicatorsRender?: (current: number, total: number) => ReactNode;
  actionsRender?: (
    originNode: ReactNode,
    info: TourActionRenderInfo,
  ) => ReactNode;
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
    placement = "bottom",
    type = "default",
    mask = true,
    arrow = true,
    gap = defaultGap,
    keyboard = true,
    disabledInteraction = false,
    scrollIntoView = true,
    nextText = "下一步",
    prevText = "上一步",
    finishText = "完成",
    closeAriaLabel = "关闭引导",
    zIndex,
    className,
    panelClassName,
    maskClassName,
    indicatorsRender,
    actionsRender,
    onChange,
    onClose,
    onFinish,
    onOpenChange,
  } = props;
  const id = useId();
  const isOpenControlled = open !== undefined;
  const isCurrentControlled = current !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [uncontrolledCurrent, setUncontrolledCurrent] =
    useState(defaultCurrent);
  const isOpen = open ?? uncontrolledOpen;
  const activeIndex = clampNumber(
    current ?? uncontrolledCurrent,
    0,
    steps.length - 1,
  );
  const activeStep = steps[activeIndex];
  const total = steps.length;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;
  const resolvedType = activeStep?.type ?? type;
  const resolvedMask = activeStep?.mask ?? mask;
  const resolvedArrow = activeStep?.arrow ?? arrow;
  const resolvedPlacement = activeStep?.placement ?? placement;
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

  const setTourOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isOpenControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isOpenControlled, onOpenChange],
  );

  const setTourCurrent = useCallback(
    (nextCurrent: number) => {
      const normalizedCurrent = clampNumber(nextCurrent, 0, steps.length - 1);

      if (!isCurrentControlled) {
        setUncontrolledCurrent(normalizedCurrent);
      }

      onChange?.(normalizedCurrent);
    },
    [isCurrentControlled, onChange, steps.length],
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
    const targetElement = resolveTarget(activeTarget);

    if (targetElement && scrollIntoView) {
      targetElement.scrollIntoView(
        typeof scrollIntoView === "boolean"
          ? { block: "center", inline: "center" }
          : scrollIntoView,
      );
    }

    const panelElement = panelRef.current;
    const nextTargetRect = targetElement
      ? createHighlightRect(targetElement.getBoundingClientRect(), gap)
      : null;

    setTargetRect((previousRect) =>
      areTourRectsEqual(previousRect, nextTargetRect)
        ? previousRect
        : nextTargetRect,
    );

    if (!panelElement) return;

    if (!targetElement || resolvedPlacement === "center") {
      setPanelPosition((previousPosition) =>
        previousPosition?.placement === "center"
          ? previousPosition
          : {
              top: viewportPadding,
              left: viewportPadding,
              placement: "center",
            },
      );
      return;
    }

    const panelRect = panelElement.getBoundingClientRect();
    const nextPanelPosition = getPanelPosition({
      panelRect,
      placement: resolvedPlacement,
      targetRect: nextTargetRect,
    });

    setPanelPosition((previousPosition) =>
      areTourPanelPositionsEqual(previousPosition, nextPanelPosition)
        ? previousPosition
        : nextPanelPosition,
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

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    if (motionFrameRef.current !== null) {
      window.cancelAnimationFrame(motionFrameRef.current);
      motionFrameRef.current = null;
    }

    setAnimateMotion(false);
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
  }, [isOpen]);

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
  const indicators = useMemo(() => {
    if (indicatorsRender) return indicatorsRender(activeIndex, total);

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
  }, [activeIndex, indicatorsRender, steps, total]);

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
          {activeStep.prevText ?? prevText}
        </Button>
      ) : null}
      <Button type="button" variant="solid" size="sm" onClick={showNextStep}>
        {isLast ? finishText : (activeStep.nextText ?? nextText)}
      </Button>
    </>
  );

  const actions = actionsRender
    ? actionsRender(defaultActions, {
        current: activeIndex,
        total,
        isFirst,
        isLast,
      })
    : defaultActions;

  return createPortal(
    <div
      className={classNames(
        "willa-tour",
        `willa-tour--${resolvedType}`,
        animateMotion && "willa-tour--animate",
        stepTransitioning && "willa-tour--step-transitioning",
        className,
      )}
      style={rootStyle}
    >
      {resolvedMask ? (
        <TourMask
          className={maskClassName}
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
          panelClassName,
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
  rect: TourRect | null;
  className?: string;
  onClick: () => void;
}) => {
  if (!props.rect || typeof window === "undefined") {
    return (
      <button
        type="button"
        className={classNames("willa-tour__mask", props.className)}
        aria-label="关闭引导"
        style={{
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
        onClick={props.onClick}
      />
    );
  }

  const rect = props.rect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const overlap = 1;
  const leftEdge = Math.max(0, rect.left - overlap);
  const rightEdge = Math.min(viewportWidth, rect.left + rect.width + overlap);
  const pieces = [
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
  ];

  return (
    <>
      {pieces.map((piece, index) => (
        <button
          key={index}
          type="button"
          className={classNames("willa-tour__mask", props.className)}
          aria-label="关闭引导"
          style={piece}
          onClick={props.onClick}
        />
      ))}
    </>
  );
};

const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  if (event.key === "Tab") {
    event.stopPropagation();
  }
};

const resolveTarget = (target: TourTarget | undefined) => {
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
    clipPath: `inset(${rect.top}px ${window.innerWidth - rect.left - rect.width}px ${
      window.innerHeight - rect.top - rect.height
    }px ${rect.left}px round ${rect.radius}px)`,
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

const areTourPanelPositionsEqual = (
  previousPosition: TourPanelPosition | null,
  nextPosition: TourPanelPosition,
) => {
  if (!previousPosition) return false;

  return (
    previousPosition.top === nextPosition.top &&
    previousPosition.left === nextPosition.left &&
    previousPosition.placement === nextPosition.placement
  );
};

const getPanelPosition = (options: {
  targetRect: TourRect | null;
  panelRect: DOMRect;
  placement: TourPlacement;
}): TourPanelPosition => {
  const { targetRect, panelRect } = options;
  const placement = targetRect ? options.placement : "center";

  if (!targetRect || placement === "center") {
    return {
      top: viewportPadding,
      left: viewportPadding,
      placement: "center",
    };
  }

  const [side, align = "center"] = placement.split("-") as [
    "top" | "right" | "bottom" | "left",
    "start" | "end" | "center" | undefined,
  ];
  const offset = 14;
  const position = getSidePosition({
    align,
    offset,
    panelRect,
    side,
    targetRect,
  });

  return {
    top: clampNumber(
      position.top,
      viewportPadding,
      window.innerHeight - panelRect.height - viewportPadding,
    ),
    left: clampNumber(
      position.left,
      viewportPadding,
      window.innerWidth - panelRect.width - viewportPadding,
    ),
    placement,
  };
};

const getSidePosition = (options: {
  side: "top" | "right" | "bottom" | "left";
  align: "start" | "end" | "center" | undefined;
  offset: number;
  panelRect: DOMRect;
  targetRect: TourRect;
}) => {
  const { align, offset, panelRect, side, targetRect } = options;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;

  if (side === "top" || side === "bottom") {
    const top =
      side === "top"
        ? targetRect.top - panelRect.height - offset
        : targetRect.top + targetRect.height + offset;
    const left =
      align === "start"
        ? targetRect.left
        : align === "end"
          ? targetRect.left + targetRect.width - panelRect.width
          : targetCenterX - panelRect.width / 2;

    return { top, left };
  }

  const left =
    side === "left"
      ? targetRect.left - panelRect.width - offset
      : targetRect.left + targetRect.width + offset;
  const top =
    align === "start"
      ? targetRect.top
      : align === "end"
        ? targetRect.top + targetRect.height - panelRect.height
        : targetCenterY - panelRect.height / 2;

  return { top, left };
};
