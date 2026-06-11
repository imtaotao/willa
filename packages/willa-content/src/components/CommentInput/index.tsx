import {
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import classNames from "classnames";

import { Avatar } from "#content/components/Avatar";
import {
  InputPanel,
  type InputPanelSubmitEvent,
} from "#content/components/InputPanel";

export type CommentInputSubmitContext = {
  clear: () => void;
};

export type CommentInputQuote = {
  author: ReactNode;
  content: ReactNode;
};

export type CommentInputProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string, context: CommentInputSubmitContext) => void;
  placeholder?: string;
  submitLabel?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  minRows?: number;
  maxLength?: number;
  autoFocus?: boolean;
  avatarSrc?: string;
  avatarName?: string;
  quote?: CommentInputQuote;
  mentionLabel?: ReactNode;
  onMentionClick?: () => void;
  actions?: ReactNode;
  footer?: ReactNode;
  className?: string;
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "autoFocus"
    | "children"
    | "className"
    | "defaultValue"
    | "disabled"
    | "maxLength"
    | "onChange"
    | "placeholder"
    | "rows"
    | "value"
  >;
};

export function CommentInput(props: CommentInputProps) {
  const {
    value,
    defaultValue = "",
    onValueChange,
    onSubmit,
    placeholder = "写下你的评论...",
    submitLabel = "发布",
    disabled = false,
    loading = false,
    minRows = 3,
    maxLength,
    autoFocus = false,
    avatarSrc,
    avatarName,
    quote,
    mentionLabel = "@",
    onMentionClick,
    actions,
    footer,
    className,
    textareaProps,
  } = props;
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue);
  const currentValue = isControlled ? value : innerValue;
  const trimmedValue = currentValue.trim();

  const updateValue = (nextValue: string) => {
    if (!isControlled) {
      setInnerValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const clear = () => {
    updateValue("");
  };

  const handleSubmit = (_value: string, _event: InputPanelSubmitEvent) => {
    if (!trimmedValue) return;

    onSubmit?.(trimmedValue, { clear });
  };

  const showAvatar = Boolean(avatarSrc || avatarName);
  const showTools = Boolean(onMentionClick || actions);

  return (
    <InputPanel
      {...textareaProps}
      className={classNames(
        "willa-comment-input",
        showAvatar && "willa-comment-input--with-author",
        loading && "willa-comment-input--loading",
        className,
      )}
      slotClassNames={{
        actions: "willa-comment-input-actions",
        control: "willa-comment-input-control",
        footer: "willa-comment-input-footer",
        meta: "willa-comment-input-extra",
        submit: "willa-comment-input-submit",
      }}
      autoFocus={autoFocus}
      autoResize={false}
      minRows={minRows}
      maxRows={minRows}
      maxLength={maxLength}
      submitShortcut="mod-enter"
      loading={loading}
      beforeInput={
        <>
          {showAvatar ? (
            <div className="willa-comment-input-author">
              <Avatar
                className="willa-comment-input-avatar"
                src={avatarSrc}
                name={avatarName ?? "Comment Author"}
                alt={avatarName ?? "Comment Author"}
                size="sm"
              />
              <span className="willa-comment-input-author-name">
                {avatarName ?? "评论者"}
              </span>
            </div>
          ) : null}
          {quote ? (
            <div className="willa-comment-input-quote">
              <div className="willa-comment-input-quote-content">
                <span
                  className="willa-comment-input-quote-mark"
                  aria-hidden="true"
                >
                  “
                </span>
                <span className="willa-comment-input-quote-author">
                  @{quote.author}
                </span>
                {quote.content}
                <span
                  className="willa-comment-input-quote-mark"
                  aria-hidden="true"
                >
                  ”
                </span>
              </div>
            </div>
          ) : null}
        </>
      }
      footer={
        footer ? (
          <span>{footer}</span>
        ) : maxLength ? (
          <span>
            {currentValue.length}/{maxLength}
          </span>
        ) : (
          <span>⌘ Enter 发布</span>
        )
      }
      actions={
        showTools ? (
          <>
            {onMentionClick ? (
              <CommentInputToolButton
                aria-label="提及用户"
                onClick={onMentionClick}
                disabled={disabled || loading}
              >
                {mentionLabel}
              </CommentInputToolButton>
            ) : null}
            {actions}
          </>
        ) : null
      }
      submitLabel={submitLabel}
      value={currentValue}
      placeholder={placeholder}
      disabled={disabled}
      onValueChange={updateValue}
      onSubmit={handleSubmit}
    />
  );
}

const CommentInputToolButton = (props: CommentInputToolButtonProps) => {
  const { className, type = "button", ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classNames("willa-comment-input-tool", className)}
    />
  );
};

type CommentInputToolButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
