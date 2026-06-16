import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type CSSProperties,
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import { formatCssSize, getFocusableElements } from "@willa-ui/shared";
import { isPromiseLike } from "aidly";
import classNames from "classnames";

import { Button } from "#content/components/Button";
import { IconButton } from "#content/components/IconButton";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export type DrawerProps = {
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: ReactElement<DrawerTriggerProps>;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  extra?: ReactNode;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  width?: number | string;
  height?: number | string;
  closeText?: ReactNode;
  confirmText?: ReactNode;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  ariaLabel?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  panelClassName?: string;
  onConfirm?: () => void | Promise<void>;
  onOpenChange?: (open: boolean) => void;
};

type DrawerTriggerProps = {
  onClick?: MouseEventHandler<HTMLElement>;
  [key: string]: unknown;
};

export function Drawer(props: DrawerProps) {
  const {
    open,
    defaultOpen,
    trigger,
    title,
    description,
    children,
    footer,
    extra,
    placement = "right",
    size = "md",
    width,
    height,
    closeText = "取消",
    confirmText,
    confirmDisabled = false,
    confirmLoading = false,
    ariaLabel,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    className,
    overlayClassName,
    panelClassName,
    onConfirm,
    onOpenChange,
  } = props;
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );
  const [confirmPending, setConfirmPending] = useState(false);
  const isOpen = open ?? uncontrolledOpen;
  const drawerId = useId();
  const titleId = title ? `${drawerId}-title` : undefined;
  const descriptionId = description ? `${drawerId}-description` : undefined;
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const setDrawerOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, [setDrawerOpen]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const panel = panelRef.current;
      if (!panel) return;

      const firstFocusable = getFocusableElements(panel)[0];
      (firstFocusable ?? panel).focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setConfirmPending(false);
    }
  }, [isOpen]);

  const handleTriggerClick = (event: MouseEvent<HTMLElement>) => {
    trigger?.props.onClick?.(event);
    if (!event.defaultPrevented) {
      setDrawerOpen(true);
    }
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!closeOnOverlayClick || event.target !== event.currentTarget) return;
    closeDrawer();
  };

  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && closeOnEscape) {
      event.stopPropagation();
      closeDrawer();
      return;
    }

    if (event.key !== "Tab") return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusableElements = getFocusableElements(panel);
    if (focusableElements.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const handleConfirm = () => {
    if (confirmDisabled || confirmLoading || confirmPending) return;

    try {
      const result = onConfirm?.();

      if (isPromiseLike(result)) {
        setConfirmPending(true);
        void result
          .then(() => {
            closeDrawer();
          })
          .catch(() => {
            setConfirmPending(false);
          });
        return;
      }

      closeDrawer();
    } catch {
      setConfirmPending(false);
    }
  };

  const resolvedTrigger = isValidElement(trigger)
    ? cloneElement(trigger, {
        "aria-expanded": isOpen,
        "aria-haspopup": "dialog",
        onClick: handleTriggerClick,
      })
    : null;

  const shouldRenderDefaultFooter =
    footer === undefined && (confirmText !== undefined || onConfirm);

  const resolvedFooter =
    footer ??
    (shouldRenderDefaultFooter ? (
      <>
        <Button type="button" variant="ghost" onClick={closeDrawer}>
          {closeText}
        </Button>
        <Button
          type="button"
          variant="solid"
          loading={confirmLoading || confirmPending}
          disabled={confirmDisabled}
          onClick={handleConfirm}
        >
          {confirmText ?? "确认"}
        </Button>
      </>
    ) : null);
  const customDrawerSize =
    placement === "left" || placement === "right" ? width : height;
  const panelStyle =
    customDrawerSize === undefined
      ? undefined
      : ({
          "--willa-drawer-size": formatCssSize(customDrawerSize),
        } as CSSProperties);

  const drawerContent =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className={classNames(
              "willa-drawer",
              `willa-drawer--${placement}`,
              overlayClassName,
            )}
            onClick={handleOverlayClick}
          >
            <div
              className={classNames(
                "willa-drawer__panel",
                `willa-drawer__panel--${size}`,
                panelClassName,
              )}
              style={panelStyle}
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              tabIndex={-1}
              onKeyDown={handlePanelKeyDown}
            >
              <div className="willa-drawer__header">
                <div className="willa-drawer__heading">
                  {title ? (
                    <h2 className="willa-drawer__title" id={titleId}>
                      {title}
                    </h2>
                  ) : null}
                  {description ? (
                    <p className="willa-drawer__description" id={descriptionId}>
                      {description}
                    </p>
                  ) : null}
                </div>
                {extra ? (
                  <div className="willa-drawer__extra">{extra}</div>
                ) : null}
                {showCloseButton ? (
                  <IconButton
                    ariaLabel="关闭抽屉"
                    icon={<Cross2Icon />}
                    variant="ghost"
                    size="sm"
                    onClick={closeDrawer}
                  />
                ) : null}
              </div>
              <div className="willa-drawer__body">{children}</div>
              {resolvedFooter ? (
                <div className="willa-drawer__footer">{resolvedFooter}</div>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {resolvedTrigger}
      <span className={classNames("willa-drawer-root", className)}>
        {drawerContent}
      </span>
    </>
  );
}
