import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";

import { Button } from "#content/components/Button";

export type InputPanelSize = "md" | "lg";
export type InputPanelSubmitShortcut = "enter" | "mod-enter" | "none";
export type InputPanelSubmitEvent = Parameters<
  NonNullable<ComponentPropsWithoutRef<"form">["onSubmit"]>
>[0];

export type InputPanelSlotClassNames = {
  control?: string;
  footer?: string;
  meta?: string;
  actions?: string;
  submit?: string;
};

export type InputPanelProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "children" | "onSubmit" | "size"
> & {
  size?: InputPanelSize;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  submitShortcut?: InputPanelSubmitShortcut;
  allowEmptySubmit?: boolean;
  loading?: boolean;
  beforeInput?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  submitLabel?: ReactNode;
  submitIcon?: ReactNode;
  submitButton?: ReactNode;
  slotClassNames?: InputPanelSlotClassNames;
  onValueChange?: (
    value: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onSubmit?: (value: string, event: InputPanelSubmitEvent) => void;
};

export const InputPanel = forwardRef<HTMLTextAreaElement, InputPanelProps>(
  (props, forwardedRef) => {
    const {
      size = "md",
      autoResize = true,
      minRows = 3,
      maxRows = 8,
      submitShortcut = "mod-enter",
      allowEmptySubmit = false,
      loading = false,
      beforeInput,
      footer,
      actions,
      submitLabel = "提交",
      submitIcon,
      submitButton,
      slotClassNames,
      value,
      defaultValue,
      placeholder,
      disabled = false,
      className,
      style,
      onChange,
      onKeyDown,
      onValueChange,
      onSubmit,
      ...textAreaProps
    } = props;
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [uncontrolledValue, setUncontrolledValue] = useState(() =>
      String(defaultValue ?? ""),
    );
    const isControlled = value !== undefined;
    const currentValue = String(isControlled ? value : uncontrolledValue);
    const isSubmitDisabled =
      disabled || loading || (!allowEmptySubmit && currentValue.trim() === "");
    const inputPanelStyle = getInputPanelStyle({ maxRows, minRows, style });

    useImperativeHandle(forwardedRef, () => textAreaRef.current!, []);

    useEffect(() => {
      if (!autoResize) return;

      resizeTextArea(textAreaRef.current);
    }, [autoResize, currentValue, minRows, maxRows]);

    const submitForm = () => {
      const form = textAreaRef.current?.form;
      if (!form) return;

      form.requestSubmit();
    };

    const handleSubmit = (event: InputPanelSubmitEvent) => {
      event.preventDefault();

      if (isSubmitDisabled) return;

      onSubmit?.(currentValue, event);
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }

      onValueChange?.(nextValue, event);
      onChange?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      onKeyDown?.(event);

      if (
        event.defaultPrevented ||
        !shouldSubmitByShortcut(event, submitShortcut)
      ) {
        return;
      }

      event.preventDefault();
      submitForm();
    };

    return (
      <form
        className={classNames(
          "willa-input-panel",
          `willa-input-panel--${size}`,
          disabled && "willa-input-panel--disabled",
          className,
        )}
        style={inputPanelStyle}
        onSubmit={handleSubmit}
      >
        {beforeInput}
        <textarea
          {...textAreaProps}
          ref={textAreaRef}
          className={classNames(
            "willa-input-panel-control",
            slotClassNames?.control,
          )}
          value={value}
          defaultValue={isControlled ? undefined : defaultValue}
          placeholder={placeholder}
          disabled={disabled || loading}
          rows={minRows}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div
          className={classNames(
            "willa-input-panel-footer",
            slotClassNames?.footer,
          )}
        >
          <div
            className={classNames(
              "willa-input-panel-meta",
              slotClassNames?.meta,
            )}
          >
            {footer}
          </div>
          <div
            className={classNames(
              "willa-input-panel-actions",
              slotClassNames?.actions,
            )}
          >
            {actions}
            {submitButton ?? (
              <Button
                className={classNames(
                  "willa-input-panel-submit",
                  slotClassNames?.submit,
                )}
                type="submit"
                size={size === "lg" ? "md" : "sm"}
                loading={loading}
                disabled={isSubmitDisabled}
                icon={submitIcon}
              >
                {submitLabel}
              </Button>
            )}
          </div>
        </div>
      </form>
    );
  },
);

InputPanel.displayName = "InputPanel";

const resizeTextArea = (textArea: HTMLTextAreaElement | null) => {
  if (!textArea) return;

  textArea.style.height = "auto";
  textArea.style.height = `${textArea.scrollHeight}px`;
};

const shouldSubmitByShortcut = (
  event: KeyboardEvent<HTMLTextAreaElement>,
  shortcut: InputPanelSubmitShortcut,
) => {
  if (
    event.key !== "Enter" ||
    event.shiftKey ||
    event.altKey ||
    event.nativeEvent.isComposing
  ) {
    return false;
  }

  if (shortcut === "enter") {
    return !event.metaKey && !event.ctrlKey;
  }

  if (shortcut === "mod-enter") {
    return event.metaKey || event.ctrlKey;
  }

  return false;
};

const getInputPanelStyle = (options: {
  maxRows: number;
  minRows: number;
  style?: CSSProperties;
}) => {
  const { maxRows, minRows, style } = options;

  return {
    ...style,
    "--willa-input-panel-max-rows": maxRows,
    "--willa-input-panel-min-rows": minRows,
  } as CSSProperties;
};
