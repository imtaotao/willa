import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { clampNumber, composeRefs } from "@willa-ui/shared";

export type MenuSize = "sm" | "md";
export type MenuSide = "top" | "bottom";
export type MenuAlign = "start" | "center" | "end";

export type MenuActionItem = {
  type?: "item";
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  onSelect?: (value: string) => void;
};

export type MenuSeparatorItem = {
  type: "separator";
  value?: string;
};

export type MenuItem = MenuActionItem | MenuSeparatorItem;

export type MenuProps = {
  items: Array<MenuItem>;
  trigger: ReactElement<MenuTriggerProps>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSelect?: (value: string) => void;
  size?: MenuSize;
  side?: MenuSide;
  align?: MenuAlign;
  offset?: number;
  closeOnSelect?: boolean;
  ariaLabel?: string;
  className?: string;
  contentClassName?: string;
};

type MenuTriggerProps = {
  onClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  [key: string]: unknown;
};

type MenuPosition = {
  top: number;
  left: number;
  minWidth: number;
};

export function Menu(props: MenuProps) {
  const {
    items,
    trigger,
    open,
    defaultOpen = false,
    onOpenChange,
    onSelect,
    size = "md",
    side = "bottom",
    align = "start",
    offset = 8,
    closeOnSelect = true,
    ariaLabel = "Menu",
    className,
    contentClassName,
  } = props;
  const id = useId();
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = open ?? uncontrolledOpen;
  const [position, setPosition] = useState<MenuPosition>();
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const enabledItems = useMemo(() => {
    return items.filter(isEnabledActionItem);
  }, [items]);

  const setMenuOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const updatePosition = useCallback(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement || typeof window === "undefined") return;

    const rect = triggerElement.getBoundingClientRect();
    const contentElement = contentRef.current;
    const contentWidth = contentElement?.offsetWidth ?? rect.width;
    const contentHeight = contentElement?.offsetHeight ?? 0;
    const top =
      side === "bottom"
        ? rect.bottom + offset
        : rect.top - contentHeight - offset;
    const left = getMenuLeft(rect, contentWidth, align);

    setPosition({
      top: clampNumber(
        top,
        8,
        Math.max(8, window.innerHeight - contentHeight - 8),
      ),
      left: clampNumber(
        left,
        8,
        Math.max(8, window.innerWidth - contentWidth - 8),
      ),
      minWidth: Math.min(rect.width, window.innerWidth - 16),
    });
  }, [align, offset, side]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    updatePosition();

    const focusTimer = window.setTimeout(() => {
      const firstItem = getEnabledButtons(itemRefs.current)[0];
      firstItem?.focus();
    }, 0);

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (contentRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      closeMenu();
    };

    const handleWindowUpdate = () => updatePosition();

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleWindowUpdate);
    window.addEventListener("scroll", handleWindowUpdate, true);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleWindowUpdate);
      window.removeEventListener("scroll", handleWindowUpdate, true);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [closeMenu, isOpen, updatePosition]);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
    } else {
      setPosition(undefined);
    }
  }, [isOpen, updatePosition]);

  const handleTriggerClick = (event: MouseEvent<HTMLElement>) => {
    trigger.props.onClick?.(event);
    if (!event.defaultPrevented) {
      setMenuOpen(!isOpen);
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
      setMenuOpen(true);
    }
  };

  const handleContentKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    const enabledButtons = getEnabledButtons(itemRefs.current);
    if (!enabledButtons.length) return;

    const currentIndex = enabledButtons.findIndex(
      (item) => item === document.activeElement,
    );
    const lastIndex = enabledButtons.length - 1;
    const nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
    const previousIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      enabledButtons[nextIndex].focus();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      enabledButtons[previousIndex].focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      enabledButtons[0].focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      enabledButtons[lastIndex].focus();
    }
  };

  const renderTrigger = () => {
    if (!isValidElement(trigger)) return null;

    const triggerElement = trigger as ReactElement<
      MenuTriggerProps & { ref?: React.Ref<HTMLElement> }
    >;

    return cloneElement(triggerElement, {
      ref: composeRefs(triggerElement.props.ref, triggerRef),
      "aria-controls": isOpen ? id : undefined,
      "aria-expanded": isOpen,
      "aria-haspopup": "menu",
      onClick: handleTriggerClick,
      onKeyDown: handleTriggerKeyDown,
    } as MenuTriggerProps);
  };

  itemRefs.current = [];

  return (
    <span className={classNames("willa-menu", className)}>
      {renderTrigger()}
      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={contentRef}
              id={id}
              className={classNames(
                "willa-menu-content",
                `willa-menu-content--${size}`,
                contentClassName,
              )}
              style={getMenuContentStyle(position)}
              role="menu"
              aria-label={ariaLabel}
              onKeyDown={handleContentKeyDown}
            >
              {items.map((item, index) => {
                if (item.type === "separator") {
                  return (
                    <div
                      key={item.value ?? `separator-${index}`}
                      className="willa-menu-separator"
                      role="separator"
                    />
                  );
                }

                return (
                  <button
                    key={item.value}
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    className={classNames(
                      "willa-menu-item",
                      item.danger && "willa-menu-item--danger",
                    )}
                    type="button"
                    role="menuitem"
                    disabled={item.disabled}
                    onClick={() => {
                      if (item.disabled) return;
                      item.onSelect?.(item.value);
                      onSelect?.(item.value);
                      if (closeOnSelect) {
                        closeMenu();
                      }
                    }}
                  >
                    {item.icon ? (
                      <span className="willa-menu-item-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}
                    <span className="willa-menu-item-content">
                      <span className="willa-menu-item-label">
                        {item.label}
                      </span>
                      {item.description ? (
                        <span className="willa-menu-item-description">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                    {item.trailing ? (
                      <span className="willa-menu-item-trailing">
                        {item.trailing}
                      </span>
                    ) : null}
                  </button>
                );
              })}
              {!enabledItems.length ? (
                <div className="willa-menu-empty">暂无可选项</div>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}

const isActionItem = (item: MenuItem): item is MenuActionItem => {
  return item.type !== "separator";
};

const isEnabledActionItem = (item: MenuItem): item is MenuActionItem => {
  return isActionItem(item) && !item.disabled;
};

const getEnabledButtons = (items: Array<HTMLButtonElement | null>) => {
  return items.filter((item): item is HTMLButtonElement => {
    return item !== null && !item.disabled;
  });
};

const getMenuLeft = (rect: DOMRect, contentWidth: number, align: MenuAlign) => {
  if (align === "center") {
    return rect.left + rect.width / 2 - contentWidth / 2;
  }

  if (align === "end") {
    return rect.right - contentWidth;
  }

  return rect.left;
};

const getMenuContentStyle = (position: MenuPosition | undefined) => {
  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    minWidth: position ? `${position.minWidth}px` : undefined,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};
