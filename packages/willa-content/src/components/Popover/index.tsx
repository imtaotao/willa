import {
  cloneElement,
  isValidElement,
  useCallback,
  useId,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
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
  getFocusableElements,
  useFloatingLayer,
  useControllableState,
  useWillaThemeScopeProps,
  type FloatingPanelAlign,
  type FloatingPanelSide,
  type FloatingLayerPosition,
} from "@willa-ui/shared";

export type PopoverSide = FloatingPanelSide;
export type PopoverAlign = FloatingPanelAlign;
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
  const [isOpen, setPopoverOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const themeScopeProps = useWillaThemeScopeProps();

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, [setPopoverOpen]);

  const focusPopoverContent = useCallback(() => {
    if (!autoFocus) return;
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const firstFocusable = getFocusableElements(contentElement)[0];
    (firstFocusable ?? contentElement).focus();
  }, [autoFocus]);

  const { position } = useFloatingLayer({
    open: isOpen,
    triggerRef,
    floatingRef: contentRef,
    side,
    align,
    offset: showArrow ? offset + 6 : offset,
    matchAnchorMinWidth: true,
    closeOnOutsidePointerDown,
    restoreFocus: true,
    onClose: closePopover,
    onOpenAutoFocus: focusPopoverContent,
  });

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
              {...themeScopeProps}
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

const getPopoverContentStyle = (position?: FloatingLayerPosition) => {
  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    minWidth: position ? `${position.minWidth}px` : undefined,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};

Popover.displayName = "Popover";
