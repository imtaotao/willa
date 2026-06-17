import {
  type ButtonHTMLAttributes,
  type ChangeEventHandler,
  type CSSProperties,
  type KeyboardEventHandler,
  type ReactNode,
  type Ref,
} from "react";
import { ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { createPortal } from "react-dom";

import type { FloatingPanelPosition } from "#form/internal/useFloatingPanel";

export type SelectablePanelPortalProps = {
  children: ReactNode;
  open: boolean;
};

export function SelectablePanelPortal(props: SelectablePanelPortalProps) {
  if (!props.open || typeof document === "undefined") return null;

  return createPortal(props.children, document.body);
}

export type SelectablePanelTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  buttonRef: Ref<HTMLButtonElement>;
  controls?: string;
  displayValue: ReactNode;
  expanded: boolean;
  hasValue: boolean;
  invalid?: boolean;
  placeholderClassName: string;
  popupRole: "listbox" | "tree";
  triggerClassName: string;
  valueClassName: string;
  iconClassName: string;
};

export function SelectablePanelTrigger(props: SelectablePanelTriggerProps) {
  const {
    buttonRef,
    controls,
    displayValue,
    expanded,
    hasValue,
    invalid,
    placeholderClassName,
    popupRole,
    triggerClassName,
    valueClassName,
    iconClassName,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      type="button"
      className={triggerClassName}
      aria-haspopup={popupRole}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-invalid={invalid || undefined}
    >
      <span
        className={classNames(
          valueClassName,
          !hasValue && placeholderClassName,
        )}
      >
        {displayValue}
      </span>
      <ChevronDownIcon className={iconClassName} aria-hidden="true" />
    </button>
  );
}

export type SelectablePanelClearButtonProps = {
  ariaLabel: string;
  className: string;
  onClear: () => void;
  triggerRef: { current: HTMLElement | null };
};

export function SelectablePanelClearButton(
  props: SelectablePanelClearButtonProps,
) {
  const { ariaLabel, className, onClear, triggerRef } = props;

  return (
    <button
      className={className}
      type="button"
      aria-label={ariaLabel}
      onClick={(event) => {
        event.stopPropagation();
        onClear();
        triggerRef.current?.focus();
      }}
    >
      <Cross2Icon />
    </button>
  );
}

export type SelectablePanelHiddenInputProps = {
  name?: string;
  value: string;
};

export function SelectablePanelHiddenInput(
  props: SelectablePanelHiddenInputProps,
) {
  if (!props.name) return null;

  return <input type="hidden" name={props.name} value={props.value} readOnly />;
}

export type SelectablePanelShellProps = {
  children: ReactNode;
  className: string;
  id: string;
  labelledBy: string;
  multiselectable?: boolean;
  panelRef: Ref<HTMLDivElement>;
  position: FloatingPanelPosition | null;
  role: "listbox" | "tree";
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export function SelectablePanelShell(props: SelectablePanelShellProps) {
  const {
    children,
    className,
    id,
    labelledBy,
    multiselectable,
    panelRef,
    position,
    role,
    onKeyDown,
  } = props;

  return (
    <div
      ref={panelRef}
      id={id}
      className={className}
      role={role}
      aria-multiselectable={multiselectable ? true : undefined}
      aria-labelledby={labelledBy}
      onKeyDown={onKeyDown}
      style={getSelectablePanelStyle(position)}
    >
      {children}
    </div>
  );
}

export type SelectablePanelSearchProps = {
  className: string;
  inputRef: Ref<HTMLInputElement>;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function SelectablePanelSearch(props: SelectablePanelSearchProps) {
  const { className, inputRef, placeholder, value, onChange } = props;

  return (
    <div className={className}>
      <input
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export type SelectablePanelListProps = {
  children: ReactNode;
  className: string;
  listRef: Ref<HTMLDivElement>;
  scrollable: boolean;
  scrollableClassName: string;
};

export function SelectablePanelList(props: SelectablePanelListProps) {
  const { children, className, listRef, scrollable, scrollableClassName } =
    props;

  return (
    <div
      ref={listRef}
      className={classNames(className, scrollable && scrollableClassName)}
    >
      {children}
    </div>
  );
}

const getSelectablePanelStyle = (
  position: FloatingPanelPosition | null,
): CSSProperties => {
  if (!position) {
    return { left: 0, top: 0, visibility: "hidden" };
  }

  return {
    left: position.left,
    top: position.top,
    width: position.width,
  };
};
