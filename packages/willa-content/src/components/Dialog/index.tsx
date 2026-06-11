import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { isPromiseLike } from "aidly";

import { Button } from "#content/components/Button";

export type DialogSize = "sm" | "md" | "lg";
export type DialogTone = "default" | "danger";

export type DialogProps = {
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: ReactElement<DialogTriggerProps>;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  closeText?: ReactNode;
  confirmText?: ReactNode;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  ariaLabel?: string;
  size?: DialogSize;
  tone?: DialogTone;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  onConfirm?: () => void | Promise<void>;
  onOpenChange?: (open: boolean) => void;
};

type DialogTriggerProps = {
  onClick?: MouseEventHandler<HTMLElement>;
  [key: string]: unknown;
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

export function Dialog(props: DialogProps) {
  const {
    open,
    defaultOpen,
    onOpenChange,
    trigger,
    title,
    description,
    children,
    footer,
    closeText = "取消",
    confirmText,
    confirmDisabled = false,
    confirmLoading = false,
    onConfirm,
    ariaLabel,
    size = "md",
    tone = "default",
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    className,
    overlayClassName,
    contentClassName,
  } = props;
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );
  const [confirmPending, setConfirmPending] = useState(false);
  const isOpen = open ?? uncontrolledOpen;
  const dialogId = useId();
  const titleId = title ? `${dialogId}-title` : undefined;
  const descriptionId = description ? `${dialogId}-description` : undefined;
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const setDialogOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

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
      setDialogOpen(true);
    }
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!closeOnOverlayClick || event.target !== event.currentTarget) return;
    closeDialog();
  };

  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && closeOnEscape) {
      event.stopPropagation();
      closeDialog();
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
            closeDialog();
          })
          .catch(() => {
            setConfirmPending(false);
          });
        return;
      }

      closeDialog();
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
        <Button type="button" variant="ghost" onClick={closeDialog}>
          {closeText}
        </Button>
        <Button
          type="button"
          variant="solid"
          className={`willa-dialog-confirm willa-dialog-confirm--${tone}`}
          disabled={confirmDisabled}
          loading={confirmLoading || confirmPending}
          onClick={handleConfirm}
        >
          {confirmText ?? "确认"}
        </Button>
      </>
    ) : null);

  const dialogContent =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className={classNames("willa-dialog", overlayClassName)}
            onClick={handleOverlayClick}
          >
            <div
              ref={panelRef}
              className={classNames(
                "willa-dialog-panel",
                `willa-dialog-panel--${size}`,
                className,
              )}
              role="dialog"
              aria-modal="true"
              aria-label={title ? undefined : (ariaLabel ?? "Dialog")}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              tabIndex={-1}
              onKeyDown={handlePanelKeyDown}
            >
              {showCloseButton ? (
                <button
                  type="button"
                  className="willa-dialog-close"
                  onClick={closeDialog}
                  aria-label="关闭"
                >
                  <Cross2Icon />
                </button>
              ) : null}
              {title || description ? (
                <header className="willa-dialog-header">
                  {title ? (
                    <h2 id={titleId} className="willa-dialog-title">
                      {title}
                    </h2>
                  ) : null}
                  {description ? (
                    <p id={descriptionId} className="willa-dialog-description">
                      {description}
                    </p>
                  ) : null}
                </header>
              ) : null}
              {children ? (
                <div
                  className={classNames("willa-dialog-body", contentClassName)}
                >
                  {children}
                </div>
              ) : null}
              {resolvedFooter ? (
                <footer className="willa-dialog-footer">
                  {resolvedFooter}
                </footer>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {resolvedTrigger}
      {dialogContent}
    </>
  );
}
