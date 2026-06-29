import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
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
import {
  composeRefs,
  useFloatingLayer,
  useControllableState,
  useWillaThemeScopeProps,
  type FloatingLayerPosition,
} from "@willa-ui/shared";

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
  const [tooltipOpen, setTooltipOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const isOpen = !disabled && Boolean(content) && tooltipOpen;
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef<number | undefined>(undefined);
  const themeScopeProps = useWillaThemeScopeProps();

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

  const { position } = useFloatingLayer({
    open: isOpen,
    triggerRef,
    floatingRef: contentRef,
    side,
    align,
    offset,
    onClose: closeTooltip,
  });

  useEffect(() => {
    return () => {
      clearOpenTimer();
    };
  }, [clearOpenTimer]);

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
              {...themeScopeProps}
              ref={contentRef}
              id={id}
              className={classNames(
                "willa-tooltip-content",
                `willa-tooltip-content--${size}`,
                `willa-tooltip-content--${side}`,
                contentClassName,
              )}
              style={getTooltipContentStyle(position, side)}
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

const getTooltipContentStyle = (
  position: FloatingLayerPosition | undefined,
  side: TooltipSide,
) => {
  const arrowPosition = getTooltipArrowPosition(position, side);

  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    "--willa-tooltip-arrow-x":
      arrowPosition.x === null ? undefined : `${arrowPosition.x}px`,
    "--willa-tooltip-arrow-y":
      arrowPosition.y === null ? undefined : `${arrowPosition.y}px`,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};

const getTooltipArrowPosition = (
  position: FloatingLayerPosition | undefined,
  side: TooltipSide,
) => {
  const anchorRect = position?.anchorRect;
  if (!position || !anchorRect) {
    return { x: null, y: null };
  }

  if (side === "top" || side === "bottom") {
    return {
      x: anchorRect.left + anchorRect.width / 2 - position.left,
      y: null,
    };
  }

  return {
    x: null,
    y: anchorRect.top + anchorRect.height / 2 - position.top,
  };
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
