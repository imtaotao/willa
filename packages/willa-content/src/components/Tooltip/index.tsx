import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type FocusEventHandler,
  type KeyboardEvent,
  type KeyboardEventHandler,
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { clampNumber, composeRefs } from "@willa-ui/shared";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";
export type TooltipSize = "sm" | "md";

export type TooltipProps = {
  content: ReactNode;
  children: ReactElement<TooltipTriggerProps>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: TooltipSide;
  align?: TooltipAlign;
  offset?: number;
  delay?: number;
  disabled?: boolean;
  size?: TooltipSize;
  className?: string;
  contentClassName?: string;
};

type TooltipTriggerProps = {
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  [key: string]: unknown;
};

type TooltipPosition = {
  top: number;
  left: number;
};

export function Tooltip(props: TooltipProps) {
  const {
    content,
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    side = "top",
    align = "center",
    offset = 8,
    delay = 450,
    disabled = false,
    size = "md",
    className,
    contentClassName,
  } = props;
  const id = useId();
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = !disabled && Boolean(content) && (open ?? uncontrolledOpen);
  const [position, setPosition] = useState<TooltipPosition>();
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef<number | undefined>(undefined);

  const setTooltipOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const clearOpenTimer = useCallback(() => {
    if (openTimerRef.current === undefined) return;
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = undefined;
  }, []);

  const openTooltip = useCallback(() => {
    if (disabled || !content) return;
    clearOpenTimer();

    if (delay <= 0) {
      setTooltipOpen(true);
      return;
    }

    openTimerRef.current = window.setTimeout(() => {
      setTooltipOpen(true);
      openTimerRef.current = undefined;
    }, delay);
  }, [clearOpenTimer, content, delay, disabled, setTooltipOpen]);

  const closeTooltip = useCallback(() => {
    clearOpenTimer();
    setTooltipOpen(false);
  }, [clearOpenTimer, setTooltipOpen]);

  const updatePosition = useCallback(() => {
    const triggerElement = triggerRef.current;
    const tooltipElement = contentRef.current;
    if (!triggerElement || !tooltipElement || typeof window === "undefined") {
      return;
    }

    const triggerRect = triggerElement.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const nextPosition = getTooltipPosition({
      triggerRect,
      tooltipRect,
      side,
      align,
      offset,
    });

    setPosition({
      top: clampNumber(
        nextPosition.top,
        8,
        Math.max(8, window.innerHeight - tooltipRect.height - 8),
      ),
      left: clampNumber(
        nextPosition.left,
        8,
        Math.max(8, window.innerWidth - tooltipRect.width - 8),
      ),
    });
  }, [align, offset, side]);

  useEffect(() => {
    return () => {
      clearOpenTimer();
    };
  }, [clearOpenTimer]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    updatePosition();
    const frame = window.requestAnimationFrame(updatePosition);
    const handleWindowUpdate = () => updatePosition();

    window.addEventListener("resize", handleWindowUpdate);
    window.addEventListener("scroll", handleWindowUpdate, true);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleWindowUpdate);
      window.removeEventListener("scroll", handleWindowUpdate, true);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const handleDocumentPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (triggerRef.current?.contains(target)) return;
      if (contentRef.current?.contains(target)) return;

      closeTooltip();
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
    };
  }, [closeTooltip, isOpen]);

  const handleTriggerMouseEnter = (event: MouseEvent<HTMLElement>) => {
    children.props.onMouseEnter?.(event);
    if (!event.defaultPrevented) {
      openTooltip();
    }
  };

  const handleTriggerMouseLeave = (event: MouseEvent<HTMLElement>) => {
    children.props.onMouseLeave?.(event);
    if (!event.defaultPrevented) {
      closeTooltip();
    }
  };

  const handleTriggerClick = (event: MouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    if (event.defaultPrevented || !isCoarsePointer()) return;

    clearOpenTimer();
    setTooltipOpen(!isOpen);
  };

  const handleTriggerFocus = (event: FocusEvent<HTMLElement>) => {
    children.props.onFocus?.(event);
    if (!event.defaultPrevented) {
      openTooltip();
    }
  };

  const handleTriggerBlur = (event: FocusEvent<HTMLElement>) => {
    children.props.onBlur?.(event);
    if (!event.defaultPrevented) {
      closeTooltip();
    }
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    children.props.onKeyDown?.(event);
    if (event.key === "Escape") {
      closeTooltip();
    }
  };

  const renderTrigger = () => {
    if (!isValidElement(children)) return null;

    const triggerElement = children as ReactElement<
      TooltipTriggerProps & { ref?: Ref<HTMLElement> }
    >;

    return cloneElement(triggerElement, {
      ref: composeRefs(triggerElement.props.ref, triggerRef),
      "aria-describedby": isOpen ? id : undefined,
      onMouseEnter: handleTriggerMouseEnter,
      onMouseLeave: handleTriggerMouseLeave,
      onClick: handleTriggerClick,
      onFocus: handleTriggerFocus,
      onBlur: handleTriggerBlur,
      onKeyDown: handleTriggerKeyDown,
    } as TooltipTriggerProps);
  };

  return (
    <span className={classNames("willa-tooltip", className)}>
      {renderTrigger()}
      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={contentRef}
              id={id}
              className={classNames(
                "willa-tooltip-content",
                `willa-tooltip-content--${size}`,
                `willa-tooltip-content--${side}`,
                contentClassName,
              )}
              style={getTooltipContentStyle(position)}
              role="tooltip"
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}

const getTooltipPosition = (options: {
  triggerRect: DOMRect;
  tooltipRect: DOMRect;
  side: TooltipSide;
  align: TooltipAlign;
  offset: number;
}) => {
  const { triggerRect, tooltipRect, side, align, offset } = options;
  const centerLeft =
    triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
  const centerTop =
    triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;

  if (side === "top" || side === "bottom") {
    const top =
      side === "top"
        ? triggerRect.top - tooltipRect.height - offset
        : triggerRect.bottom + offset;
    const left = getAlignedPosition(
      triggerRect.left,
      triggerRect.right,
      tooltipRect.width,
      centerLeft,
      align,
    );

    return { top, left };
  }

  const left =
    side === "left"
      ? triggerRect.left - tooltipRect.width - offset
      : triggerRect.right + offset;
  const top = getAlignedPosition(
    triggerRect.top,
    triggerRect.bottom,
    tooltipRect.height,
    centerTop,
    align,
  );

  return { top, left };
};

const getAlignedPosition = (
  start: number,
  end: number,
  size: number,
  center: number,
  align: TooltipAlign,
) => {
  if (align === "start") return start;
  if (align === "end") return end - size;
  return center;
};

const getTooltipContentStyle = (position: TooltipPosition | undefined) => {
  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};

const isCoarsePointer = () => {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia("(pointer: coarse)").matches;
};

Tooltip.displayName = "Tooltip";
