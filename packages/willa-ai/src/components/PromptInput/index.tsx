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
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "@willa-ui/content/components/Button";

export type PromptInputSize = "md" | "lg";
export type PromptInputSubmitEvent = Parameters<
  NonNullable<ComponentPropsWithoutRef<"form">["onSubmit"]>
>[0];

export type PromptInputProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "children" | "onSubmit" | "size"
> & {
  size?: PromptInputSize;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  submitOnEnter?: boolean;
  allowEmptySubmit?: boolean;
  loading?: boolean;
  footer?: ReactNode;
  actions?: ReactNode;
  submitLabel?: ReactNode;
  submitIcon?: ReactNode;
  onSubmit?: (value: string, event: PromptInputSubmitEvent) => void;
};

export const PromptInput = forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (props, forwardedRef) => {
    const {
      size = "md",
      autoResize = true,
      minRows = 3,
      maxRows = 8,
      submitOnEnter = true,
      allowEmptySubmit = false,
      loading = false,
      footer,
      actions,
      submitLabel = "发送",
      submitIcon = <PaperPlaneIcon />,
      value,
      defaultValue,
      placeholder = "输入提示词、问题或操作指令",
      disabled = false,
      className,
      style,
      onChange,
      onKeyDown,
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
    const promptInputStyle = getPromptInputStyle({ maxRows, minRows, style });

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

    const handleSubmit = (event: PromptInputSubmitEvent) => {
      event.preventDefault();

      if (isSubmitDisabled) return;

      onSubmit?.(currentValue, event);
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setUncontrolledValue(event.currentTarget.value);
      }

      onChange?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      onKeyDown?.(event);

      if (
        event.defaultPrevented ||
        !submitOnEnter ||
        event.key !== "Enter" ||
        event.shiftKey ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.nativeEvent.isComposing
      ) {
        return;
      }

      event.preventDefault();
      submitForm();
    };

    return (
      <form
        className={classNames(
          "willa-prompt-input",
          `willa-prompt-input--${size}`,
          disabled && "willa-prompt-input--disabled",
          className,
        )}
        style={promptInputStyle}
        onSubmit={handleSubmit}
      >
        <textarea
          {...textAreaProps}
          ref={textAreaRef}
          className="willa-prompt-input-control"
          value={value}
          defaultValue={isControlled ? undefined : defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          rows={minRows}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="willa-prompt-input-footer">
          <div className="willa-prompt-input-meta">{footer}</div>
          <div className="willa-prompt-input-actions">
            {actions}
            <Button
              className="willa-prompt-input-submit"
              type="submit"
              size={size === "lg" ? "md" : "sm"}
              loading={loading}
              disabled={isSubmitDisabled}
              icon={submitIcon}
            >
              {submitLabel}
            </Button>
          </div>
        </div>
      </form>
    );
  },
);

PromptInput.displayName = "PromptInput";

const resizeTextArea = (textArea: HTMLTextAreaElement | null) => {
  if (!textArea) return;

  textArea.style.height = "auto";
  textArea.style.height = `${textArea.scrollHeight}px`;
};

const getPromptInputStyle = (options: {
  maxRows: number;
  minRows: number;
  style?: CSSProperties;
}) => {
  const { maxRows, minRows, style } = options;

  return {
    ...style,
    "--willa-prompt-input-max-rows": maxRows,
    "--willa-prompt-input-min-rows": minRows,
  } as CSSProperties;
};
