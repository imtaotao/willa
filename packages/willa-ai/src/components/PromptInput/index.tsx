import { forwardRef } from "react";
import classNames from "classnames";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  InputPanel,
  type InputPanelProps,
  type InputPanelSubmitEvent,
} from "@willa-ui/content/components/InputPanel";

export type PromptInputSize = "md" | "lg";
export type PromptInputSubmitEvent = InputPanelSubmitEvent;

export type PromptInputProps = Omit<
  InputPanelProps,
  "children" | "onSubmit" | "size" | "submitShortcut"
> & {
  size?: PromptInputSize;
  submitOnEnter?: boolean;
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

    return (
      <InputPanel
        {...textAreaProps}
        ref={forwardedRef}
        className={classNames(
          "willa-prompt-input",
          `willa-prompt-input--${size}`,
          disabled && "willa-prompt-input--disabled",
          className,
        )}
        slotClassNames={{
          actions: "willa-prompt-input-actions",
          control: "willa-prompt-input-control",
          footer: "willa-prompt-input-footer",
          meta: "willa-prompt-input-meta",
          submit: "willa-prompt-input-submit",
        }}
        style={style}
        size={size}
        autoResize={autoResize}
        minRows={minRows}
        maxRows={maxRows}
        submitShortcut={submitOnEnter ? "enter" : "none"}
        allowEmptySubmit={allowEmptySubmit}
        loading={loading}
        footer={footer}
        actions={actions}
        submitLabel={submitLabel}
        submitIcon={submitIcon}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
      />
    );
  },
);

PromptInput.displayName = "PromptInput";
