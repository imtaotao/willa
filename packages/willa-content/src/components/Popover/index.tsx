import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type MutableRefObject,
  type ReactElement,
  type ReactNode,
  type Ref,
  type RefCallback,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

export type PopoverSide = "top" | "right" | "bottom" | "left";
export type PopoverAlign = "start" | "center" | "end";
export type PopoverSize = "sm" | "md" | "lg";

export type PopoverProps = {
  trigger: ReactElement<PopoverTriggerProps>;
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: PopoverSide;
  align?: PopoverAlign;
  offset?: number;
  size?: PopoverSize;
  autoFocus?: boolean;
  closeOnOutsidePointerDown?: boolean;
  closeOnEscape?: boolean;
  showArrow?: boolean;
  ariaLabel?: string;
  className?: string;
  contentClassName?: string;
};

type PopoverTriggerProps = {
  onClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  [key: string]: unknown;
};

type PopoverPosition = {
  top: number;
  left: number;
  minWidth: number;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const getFocusableElements = (container: HTMLElement) => {
  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector));
};

export function Popover(props: PopoverProps) {
  const {
    trigger,
    children,
    title,
    description,
    footer,
    open,
    defaultOpen = false,
    onOpenChange,
    side = "bottom",
    align = "start",
    offset = 10,
    size = "md",
    autoFocus = true,
    closeOnOutsidePointerDown = true,
    closeOnEscape = true,
    showArrow = true,
    ariaLabel,
    className,
    contentClassName,
  } = props;
  const id = useId();
  const titleId = title ? `${id}-title` : undefined;
  const descriptionId = description ? `${id}-description` : undefined;
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = open ?? uncontrolledOpen;
  const [position, setPosition] = useState<PopoverPosition>();
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const setPopoverOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, [setPopoverOpen]);

  const updatePosition = useCallback(() => {
    const triggerElement = triggerRef.current;
    const popoverElement = contentRef.current;
    if (!triggerElement || !popoverElement || typeof window === "undefined") {
      return;
    }

    const triggerRect = triggerElement.getBoundingClientRect();
    const popoverRect = popoverElement.getBoundingClientRect();
    const nextPosition = getPopoverPosition({
      triggerRect,
      popoverRect,
      side,
      align,
      offset: showArrow ? offset + 6 : offset,
    });

    setPosition({
      top: clamp(
        nextPosition.top,
        8,
        window.innerHeight - popoverRect.height - 8,
      ),
      left: clamp(
        nextPosition.left,
        8,
        window.innerWidth - popoverRect.width - 8,
      ),
      minWidth: Math.min(triggerRect.width, window.innerWidth - 16),
    });
  }, [align, offset, showArrow, side]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    updatePosition();

    const frame = window.requestAnimationFrame(updatePosition);
    const focusTimer = window.setTimeout(() => {
      if (!autoFocus) return;
      const contentElement = contentRef.current;
      if (!contentElement) return;

      const firstFocusable = getFocusableElements(contentElement)[0];
      (firstFocusable ?? contentElement).focus();
    }, 0);

    const handlePointerDown = (event: PointerEvent) => {
      if (!closeOnOutsidePointerDown) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (contentRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      closePopover();
    };

    const handleWindowUpdate = () => updatePosition();

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleWindowUpdate);
    window.addEventListener("scroll", handleWindowUpdate, true);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(focusTimer);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleWindowUpdate);
      window.removeEventListener("scroll", handleWindowUpdate, true);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [
    autoFocus,
    closeOnOutsidePointerDown,
    closePopover,
    isOpen,
    updatePosition,
  ]);

  const handleTriggerClick = (event: MouseEvent<HTMLElement>) => {
    trigger.props.onClick?.(event);
    if (!event.defaultPrevented) {
      setPopoverOpen(!isOpen);
    }
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    trigger.props.onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (
      event.key === "ArrowDown" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setPopoverOpen(true);
    }
  };

  const handleContentKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && closeOnEscape) {
      event.stopPropagation();
      closePopover();
    }
  };

  const renderTrigger = () => {
    if (!isValidElement(trigger)) return null;

    const triggerElement = trigger as ReactElement<
      PopoverTriggerProps & { ref?: Ref<HTMLElement> }
    >;

    return cloneElement(triggerElement, {
      ref: composeRefs(triggerElement.props.ref, triggerRef),
      "aria-controls": isOpen ? id : undefined,
      "aria-expanded": isOpen,
      "aria-haspopup": "dialog",
      onClick: handleTriggerClick,
      onKeyDown: handleTriggerKeyDown,
    } as PopoverTriggerProps);
  };

  return (
    <span className={classNames("willa-popover", className)}>
      {renderTrigger()}
      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={contentRef}
              id={id}
              className={classNames(
                "willa-popover-content",
                `willa-popover-content--${size}`,
                showArrow && `willa-popover-content--${side}`,
                contentClassName,
              )}
              style={getPopoverContentStyle(position)}
              role="dialog"
              aria-label={title ? undefined : (ariaLabel ?? "Popover")}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              tabIndex={-1}
              onKeyDown={handleContentKeyDown}
            >
              {showArrow ? (
                <span className="willa-popover-arrow" aria-hidden="true" />
              ) : null}
              {title || description ? (
                <header className="willa-popover-header">
                  {title ? (
                    <h2 id={titleId} className="willa-popover-title">
                      {title}
                    </h2>
                  ) : null}
                  {description ? (
                    <p id={descriptionId} className="willa-popover-description">
                      {description}
                    </p>
                  ) : null}
                </header>
              ) : null}
              {children ? (
                <div className="willa-popover-body">{children}</div>
              ) : null}
              {footer ? (
                <footer className="willa-popover-footer">{footer}</footer>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}

const getPopoverPosition = (options: {
  triggerRect: DOMRect;
  popoverRect: DOMRect;
  side: PopoverSide;
  align: PopoverAlign;
  offset: number;
}) => {
  const { triggerRect, popoverRect, side, align, offset } = options;
  const centerLeft =
    triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
  const centerTop =
    triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;

  if (side === "top" || side === "bottom") {
    const top =
      side === "top"
        ? triggerRect.top - popoverRect.height - offset
        : triggerRect.bottom + offset;
    const left = getAlignedPosition(
      triggerRect.left,
      triggerRect.right,
      popoverRect.width,
      centerLeft,
      align,
    );

    return { top, left };
  }

  const left =
    side === "left"
      ? triggerRect.left - popoverRect.width - offset
      : triggerRect.right + offset;
  const top = getAlignedPosition(
    triggerRect.top,
    triggerRect.bottom,
    popoverRect.height,
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
  align: PopoverAlign,
) => {
  if (align === "start") return start;
  if (align === "end") return end - size;
  return center;
};

const getPopoverContentStyle = (position: PopoverPosition | undefined) => {
  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    minWidth: position ? `${position.minWidth}px` : undefined,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), Math.max(min, max));
};

const composeRefs = <T,>(
  ...refs: Array<Ref<T> | undefined>
): RefCallback<T> => {
  return (value) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(value);
        return;
      }
      (ref as MutableRefObject<T | null>).current = value;
    });
  };
};
