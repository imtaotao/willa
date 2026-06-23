import {
  useState,
  useMemo,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
  type ChangeEvent,
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

export type CommentInputMentionItem = {
  id?: string;
  label?: ReactNode;
  value: string;
  [key: string]: unknown;
};

export type CommentInputMentionContext = {
  trigger: string;
  query: string;
  start: number;
  end: number;
  replace: (value: string) => void;
};

type MentionState = Omit<CommentInputMentionContext, "replace">;

export type CommentInputProps = {
  value?: string;
  defaultValue?: string;
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
  mentionTriggers?: Array<string>;
  mentionOptions?: Array<CommentInputMentionItem>;
  mentionMaxSuggestions?: number;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string, context: CommentInputSubmitContext) => void;
  onMentionClick?: () => void;
  onMentionQuery?: (context: CommentInputMentionContext | null) => void;
  renderMentionOptions?: (
    context: MentionState,
    options: Array<CommentInputMentionItem>,
    onSelect: (item: CommentInputMentionItem) => void,
  ) => ReactNode;
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
    mentionTriggers = ["@"],
    mentionOptions = [],
    mentionMaxSuggestions = 6,
    onMentionQuery,
    renderMentionOptions,
    actions,
    footer,
    className,
    textareaProps,
  } = props;
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue);
  const currentValue = isControlled ? value : innerValue;
  const trimmedValue = currentValue.trim();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeMention, setActiveMention] = useState<MentionState | null>(null);
  const activeMentionRef = useRef<MentionState | null>(null);
  const normalizedMentions = useMemo(
    () => [...new Set(mentionTriggers.filter(Boolean))],
    [mentionTriggers],
  );

  const updateValue = (nextValue: string) => {
    if (!isControlled) {
      setInnerValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  const clear = () => {
    updateValue("");
  };

  const applyMentionInsert = (replaceValue: string, context: MentionState) => {
    const targetValue = textareaRef.current?.value ?? currentValue;
    const nextValue =
      targetValue.slice(0, context.start) +
      replaceValue +
      targetValue.slice(context.end);

    updateValue(nextValue);
    setActiveMention(null);
    activeMentionRef.current = null;
    onMentionQuery?.(null);

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const nextCursor = context.start + replaceValue.length;
      textarea.focus();
      textarea.setSelectionRange(nextCursor, nextCursor);
    });
  };

  const detectMention = (nextValue: string, caret: number) => {
    if (!normalizedMentions.length || caret <= 0) return null;

    let start = caret;
    while (start > 0 && !/\s/.test(nextValue[start - 1])) {
      start -= 1;
    }

    const token = nextValue.slice(start, caret);
    if (!token) return null;

    const match = normalizedMentions.find((trigger) =>
      token.startsWith(trigger),
    );
    if (!match) return null;

    return {
      trigger: match,
      query: token.slice(match.length),
      start,
      end: caret,
    };
  };

  const updateMentionContext = (value: string, cursor: number) => {
    const match = detectMention(value, cursor);
    const nextMention = match ? { ...match } : null;
    activeMentionRef.current = nextMention;
    setActiveMention(nextMention);
    onMentionQuery?.(
      nextMention
        ? {
            ...nextMention,
            replace: (insertValue) => {
              applyMentionInsert(insertValue, nextMention);
            },
          }
        : null,
    );
  };

  const handleValueChange = (
    nextValue: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    updateValue(nextValue);
    const cursor = event?.currentTarget.selectionStart ?? nextValue.length;
    updateMentionContext(nextValue, cursor);
  };

  const handleMentionSelect = (item: CommentInputMentionItem) => {
    const match = activeMentionRef.current;
    if (!match) return;
    applyMentionInsert(item.value, match);
  };

  const filteredMentions = useMemo(() => {
    if (!activeMention) return [];

    const options = mentionOptions;
    if (!options.length) return [];

    const normalizedQuery = activeMention.query.trim().toLowerCase();
    if (!normalizedQuery) return options.slice(0, mentionMaxSuggestions);

    const filtered = options.filter((option) => {
      const text = String(option.label ?? option.value).toLowerCase();
      return text.includes(normalizedQuery);
    });

    if (mentionMaxSuggestions <= 0) return filtered;

    return filtered.slice(0, mentionMaxSuggestions);
  }, [activeMention, mentionOptions, mentionMaxSuggestions]);

  const mentionPanel = (() => {
    if (!activeMention) return null;
    if (!mentionOptions.length) return null;
    if (!filteredMentions.length) return null;

    if (renderMentionOptions) {
      return renderMentionOptions(
        activeMention,
        filteredMentions,
        handleMentionSelect,
      );
    }

    return (
      <div className="willa-comment-input-mentions">
        {filteredMentions.map((option) => (
          <button
            key={option.id ?? option.value}
            type="button"
            className="willa-comment-input-mention"
            onClick={() => handleMentionSelect(option)}
          >
            {option.label ?? option.value}
          </button>
        ))}
      </div>
    );
  })();

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
              <span className="willa-comment-input-quote-author">
                @{quote.author}
              </span>
              <span className="willa-comment-input-quote-content">
                {quote.content}
              </span>
            </div>
          ) : null}
          {mentionPanel}
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
      onValueChange={handleValueChange}
      ref={textareaRef}
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

CommentInput.displayName = "CommentInput";
