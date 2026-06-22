import type {
  ButtonHTMLAttributes,
  CSSProperties,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from "react";

import {
  SelectablePanelClearButton,
  SelectablePanelHiddenInput,
  SelectablePanelTrigger,
} from "#form/internal/selectablePanelParts";

export type ComboboxFieldProps = {
  style?: CSSProperties;
  disabled?: boolean;
  controls?: string;
  hiddenName?: string;
  onTriggerBlur?: FocusEventHandler<HTMLButtonElement>;
  triggerProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  rootRef: Ref<HTMLSpanElement>;
  buttonRef: Ref<HTMLButtonElement>;
  popupRole: "listbox" | "tree";
  invalid: boolean;
  expanded: boolean;
  hasValue: boolean;
  hasClear: boolean;
  panelId: string;
  buttonId: string;
  className: string;
  clearLabel: string;
  hiddenValue: string;
  iconClassName: string;
  valueClassName: string;
  clearClassName: string;
  triggerClassName: string;
  placeholderClassName: string;
  children: ReactNode;
  displayValue: ReactNode;
  triggerRef: { current: HTMLElement | null };
  onTriggerClick: MouseEventHandler<HTMLButtonElement>;
  onTriggerKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  onClear: () => void;
};

export function ComboboxField(props: ComboboxFieldProps) {
  const {
    children,
    className,
    style,
    rootRef,
    triggerProps,
    buttonId,
    buttonRef,
    popupRole,
    expanded,
    hasValue,
    invalid,
    disabled,
    controls,
    displayValue,
    placeholderClassName,
    triggerClassName,
    valueClassName,
    iconClassName,
    hasClear,
    clearClassName,
    clearLabel,
    triggerRef,
    hiddenName,
    hiddenValue,
    onClear,
    onTriggerBlur,
    onTriggerClick,
    onTriggerKeyDown,
  } = props;

  return (
    <span ref={rootRef} className={className} style={style}>
      <SelectablePanelTrigger
        {...triggerProps}
        buttonRef={buttonRef}
        id={buttonId}
        triggerClassName={triggerClassName}
        valueClassName={valueClassName}
        placeholderClassName={placeholderClassName}
        iconClassName={iconClassName}
        disabled={disabled}
        popupRole={popupRole}
        expanded={expanded}
        controls={controls}
        invalid={invalid}
        hasValue={hasValue}
        displayValue={displayValue}
        onBlur={onTriggerBlur}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
      />
      {hasClear ? (
        <SelectablePanelClearButton
          className={clearClassName}
          ariaLabel={clearLabel}
          onClear={onClear}
          triggerRef={triggerRef}
        />
      ) : null}
      <SelectablePanelHiddenInput name={hiddenName} value={hiddenValue} />
      {children}
    </span>
  );
}
