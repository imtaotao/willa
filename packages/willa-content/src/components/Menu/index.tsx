import {
  cloneElement,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import {
  composeRefs,
  useFloatingLayer,
  useControllableState,
  type FloatingPanelAlign,
  type FloatingPanelPoint,
  type FloatingLayerPosition,
} from "@willa-ui/shared";

export type MenuSize = "sm" | "md";
export type MenuSide = "top" | "bottom";
export type MenuAlign = FloatingPanelAlign;
export type MenuTriggerType = "click" | "contextmenu";

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
  triggerType?: MenuTriggerType;
  offset?: number;
  closeOnSelect?: boolean;
  ariaLabel?: string;
  className?: string;
  contentClassName?: string;
};

type MenuTriggerProps = {
  onClick?: MouseEventHandler<HTMLElement>;
  onContextMenu?: MouseEventHandler<HTMLElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  [key: string]: unknown;
};

type MenuAnchor =
  | {
      type: "trigger";
    }
  | {
      type: "point";
      x: number;
      y: number;
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
    triggerType = "click",
    offset = 8,
    closeOnSelect = true,
    ariaLabel = "Menu",
    className,
    contentClassName,
  } = props;
  const id = useId();
  const [isOpen, setMenuOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const anchorRef = useRef<MenuAnchor>({ type: "trigger" });
  const enabledItems = useMemo(() => {
    return items.filter(isEnabledActionItem);
  }, [items]);

  const getMenuAnchorPoint = useCallback((): FloatingPanelPoint | null => {
    const anchor = anchorRef.current;
    return anchor.type === "point" ? { x: anchor.x, y: anchor.y } : null;
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  const focusFirstMenuItem = useCallback(() => {
    const firstItem = getEnabledButtons(itemRefs.current)[0];
    firstItem?.focus();
  }, []);

  const { position, updatePosition } = useFloatingLayer({
    open: isOpen,
    triggerRef,
    floatingRef: contentRef,
    getAnchorPoint: getMenuAnchorPoint,
    side,
    align,
    offset,
    matchAnchorMinWidth: anchorRef.current.type === "trigger",
    restoreFocus: true,
    onClose: closeMenu,
    onOpenAutoFocus: focusFirstMenuItem,
  });

  const handleTriggerClick = (event: MouseEvent<HTMLElement>) => {
    trigger.props.onClick?.(event);
    if (triggerType !== "click") return;
    if (!event.defaultPrevented) {
      anchorRef.current = { type: "trigger" };
      setMenuOpen(!isOpen);
    }
  };

  const handleTriggerContextMenu = (event: MouseEvent<HTMLElement>) => {
    trigger.props.onContextMenu?.(event);
    if (triggerType !== "contextmenu" || event.defaultPrevented) return;

    event.preventDefault();
    anchorRef.current = {
      type: "point",
      x: event.clientX,
      y: event.clientY,
    };
    if (isOpen) {
      updatePosition();
    }
    setMenuOpen(true);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    trigger.props.onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (
      event.key === "ArrowDown" ||
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ContextMenu" ||
      (event.shiftKey && event.key === "F10")
    ) {
      event.preventDefault();
      anchorRef.current = { type: "trigger" };
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
      onContextMenu: handleTriggerContextMenu,
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

const getMenuContentStyle = (position?: FloatingLayerPosition) => {
  return {
    top: position ? `${position.top}px` : undefined,
    left: position ? `${position.left}px` : undefined,
    minWidth:
      position && typeof position.minWidth === "number"
        ? `${position.minWidth}px`
        : undefined,
    visibility: position ? undefined : "hidden",
  } as CSSProperties;
};

Menu.displayName = "Menu";
