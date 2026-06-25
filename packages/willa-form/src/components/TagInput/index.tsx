import {
  Fragment,
  forwardRef,
  useId,
  useMemo,
  useState,
  type ClipboardEvent,
  type CSSProperties,
  type FocusEvent,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Tag } from "@willa-ui/content/components/Tag";
import { useControllableState } from "@willa-ui/shared";
import classNames from "classnames";

export type TagInputSize = "sm" | "md" | "lg";
export type TagInputVariant = "outline" | "soft";
export type TagInputRejectReason = "empty" | "duplicate" | "max" | "invalid";

export type TagInputRenderContext = {
  index: number;
  disabled: boolean;
  readOnly: boolean;
  onRemove: () => void;
};

export type TagInputProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "defaultValue" | "onChange"
> & {
  value?: Array<string>;
  defaultValue?: Array<string>;
  inputValue?: string;
  defaultInputValue?: string;
  name?: string;
  size?: TagInputSize;
  variant?: TagInputVariant;
  width?: CSSProperties["width"];
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  clearable?: boolean;
  maxTags?: number;
  allowDuplicates?: boolean;
  commitOnBlur?: boolean;
  separators?: Array<string>;
  suggestions?: Array<string>;
  maxSuggestions?: number;
  emptySuggestion?: ReactNode;
  renderTag?: (tag: string, context: TagInputRenderContext) => ReactNode;
  normalizeTag?: (tag: string) => string;
  validateTag?: (tag: string, tags: Array<string>) => boolean | string;
  onValueChange?: (tags: Array<string>) => void;
  onInputValueChange?: (value: string) => void;
  onTagReject?: (tag: string, reason: TagInputRejectReason) => void;
};

const defaultSeparators = ["Enter", ","];

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (props, ref) => {
    const {
      value,
      defaultValue = [],
      inputValue,
      defaultInputValue = "",
      name,
      size = "md",
      variant = "outline",
      width,
      placeholder = "输入后按 Enter 添加",
      disabled = false,
      readOnly = false,
      invalid = false,
      clearable = true,
      maxTags,
      allowDuplicates = false,
      commitOnBlur = true,
      separators = defaultSeparators,
      suggestions = [],
      maxSuggestions = 8,
      emptySuggestion,
      renderTag,
      normalizeTag = defaultNormalizeTag,
      validateTag,
      onValueChange,
      onInputValueChange,
      onTagReject,
      className,
      style,
      id,
      onBlur,
      onFocus,
      onKeyDown,
      onPaste,
      ...rootProps
    } = props;
    const fallbackId = useId();
    const inputId = id ?? fallbackId;
    const [currentValue, setCurrentValue] = useControllableState<Array<string>>(
      {
        value,
        defaultValue,
        onChange: onValueChange,
      },
    );
    const [currentInputValue, setCurrentInputValue] =
      useControllableState<string>({
        value: inputValue,
        defaultValue: defaultInputValue,
        onChange: onInputValueChange,
      });
    const [focused, setFocused] = useState(false);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const canEdit = !disabled && !readOnly;
    const hasClear = clearable && canEdit && currentValue.length > 0;
    const canAddMore = maxTags === undefined || currentValue.length < maxTags;
    const filteredSuggestions = useMemo(
      () =>
        filterSuggestions({
          allowDuplicates,
          inputValue: currentInputValue,
          maxSuggestions,
          suggestions,
          tags: currentValue,
        }),
      [
        allowDuplicates,
        currentInputValue,
        currentValue,
        maxSuggestions,
        suggestions,
      ],
    );
    const showSuggestions =
      focused &&
      canEdit &&
      (filteredSuggestions.length > 0 || Boolean(emptySuggestion));
    const rootStyle = {
      ...style,
      ...(width === undefined ? undefined : { width }),
    } satisfies CSSProperties;

    const updateTags = (nextTags: Array<string>) => {
      setCurrentValue(nextTags);
    };

    const updateInputValue = (nextInputValue: string) => {
      setCurrentInputValue(nextInputValue);
    };

    const rejectTag = (tag: string, reason: TagInputRejectReason) => {
      onTagReject?.(tag, reason);
    };

    const commitTag = (rawTag: string) => {
      const tag = normalizeTag(rawTag);
      if (!tag) {
        rejectTag(rawTag, "empty");
        return false;
      }

      if (!allowDuplicates && currentValue.includes(tag)) {
        rejectTag(tag, "duplicate");
        return false;
      }

      if (!canAddMore) {
        rejectTag(tag, "max");
        return false;
      }

      const validateResult = validateTag?.(tag, currentValue);
      if (validateResult === false || typeof validateResult === "string") {
        rejectTag(tag, "invalid");
        return false;
      }

      updateTags([...currentValue, tag]);
      updateInputValue("");
      setActiveSuggestionIndex(0);
      return true;
    };

    const commitInputValue = () => {
      if (!currentInputValue.trim()) return false;
      return commitTag(currentInputValue);
    };

    const commitMany = (rawTags: Array<string>) => {
      let nextTags = currentValue;

      for (const rawTag of rawTags) {
        const tag = normalizeTag(rawTag);
        if (!tag) {
          rejectTag(rawTag, "empty");
          continue;
        }

        if (!allowDuplicates && nextTags.includes(tag)) {
          rejectTag(tag, "duplicate");
          continue;
        }

        if (maxTags !== undefined && nextTags.length >= maxTags) {
          rejectTag(tag, "max");
          continue;
        }

        const validateResult = validateTag?.(tag, nextTags);
        if (validateResult === false || typeof validateResult === "string") {
          rejectTag(tag, "invalid");
          continue;
        }

        nextTags = [...nextTags, tag];
      }

      if (nextTags !== currentValue) {
        updateTags(nextTags);
        updateInputValue("");
        setActiveSuggestionIndex(0);
      }
    };

    const removeTag = (tagIndex: number) => {
      if (!canEdit) return;
      updateTags(currentValue.filter((_, index) => index !== tagIndex));
    };

    const clearTags = () => {
      if (!canEdit) return;
      updateTags([]);
    };

    const commitSuggestion = (suggestion: string) => {
      commitTag(suggestion);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        onKeyDown?.(event);
        return;
      }

      if (showSuggestions && event.key === "ArrowDown") {
        event.preventDefault();
        setActiveSuggestionIndex((index) =>
          Math.min(index + 1, filteredSuggestions.length - 1),
        );
        return;
      }

      if (showSuggestions && event.key === "ArrowUp") {
        event.preventDefault();
        setActiveSuggestionIndex((index) => Math.max(index - 1, 0));
        return;
      }

      if (
        showSuggestions &&
        event.key === "Enter" &&
        filteredSuggestions[activeSuggestionIndex]
      ) {
        event.preventDefault();
        commitSuggestion(filteredSuggestions[activeSuggestionIndex]);
        return;
      }

      if (shouldCommitOnKey(event, separators)) {
        event.preventDefault();
        commitInputValue();
        return;
      }

      if (event.key === "Backspace" && !currentInputValue) {
        removeTag(currentValue.length - 1);
      }

      onKeyDown?.(event);
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      if (!canEdit) {
        onPaste?.(event);
        return;
      }

      const text = event.clipboardData.getData("text");
      const tags = splitTags(text, separators).filter(Boolean);
      if (tags.length > 1) {
        event.preventDefault();
        commitMany(tags);
        return;
      }

      onPaste?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setFocused(false);
        if (commitOnBlur && canEdit) {
          commitInputValue();
        }
      }

      onBlur?.(event);
    };

    const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    return (
      <div
        {...rootProps}
        className={classNames(
          "willa-tag-input",
          `willa-tag-input--${size}`,
          `willa-tag-input--${variant}`,
          disabled && "willa-tag-input--disabled",
          readOnly && "willa-tag-input--readonly",
          invalid && "willa-tag-input--invalid",
          className,
        )}
        style={rootStyle}
        aria-disabled={disabled || undefined}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <div className="willa-tag-input__control" onClick={focusInput}>
          {currentValue.map((tag, index) => {
            const hiddenInput = name ? (
              <input type="hidden" name={name} value={tag} readOnly />
            ) : null;

            if (renderTag) {
              return (
                <Fragment key={`${tag}-${index}`}>
                  <span className="willa-tag-input__custom-tag">
                    {renderTag(tag, {
                      index,
                      disabled,
                      readOnly,
                      onRemove: () => removeTag(index),
                    })}
                  </span>
                  {hiddenInput}
                </Fragment>
              );
            }

            return (
              <Fragment key={`${tag}-${index}`}>
                <Tag
                  className="willa-tag-input__tag"
                  size={size === "lg" ? "md" : size}
                  shape="pill"
                  close={
                    canEdit
                      ? {
                          ariaLabel: `移除 ${tag}`,
                          onClose: () => removeTag(index),
                        }
                      : false
                  }
                >
                  {tag}
                </Tag>
                {hiddenInput}
              </Fragment>
            );
          })}
          <input
            ref={ref}
            id={inputId}
            className="willa-tag-input__input"
            value={currentInputValue}
            placeholder={currentValue.length === 0 ? placeholder : undefined}
            disabled={disabled}
            readOnly={readOnly || !canAddMore}
            aria-invalid={invalid || undefined}
            aria-autocomplete={suggestions.length > 0 ? "list" : undefined}
            aria-expanded={showSuggestions || undefined}
            aria-controls={
              showSuggestions ? `${inputId}-suggestions` : undefined
            }
            onChange={(event) => updateInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
          />
          {hasClear ? (
            <button
              className="willa-tag-input__clear"
              type="button"
              aria-label="清空标签"
              onClick={(event) => {
                event.stopPropagation();
                clearTags();
              }}
            >
              <Cross2Icon aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {showSuggestions ? (
          <div
            className="willa-tag-input__suggestions"
            id={`${inputId}-suggestions`}
            role="listbox"
          >
            {filteredSuggestions.length > 0
              ? filteredSuggestions.map((suggestion, index) => (
                  <button
                    className={classNames(
                      "willa-tag-input__suggestion",
                      index === activeSuggestionIndex &&
                        "willa-tag-input__suggestion--active",
                    )}
                    key={suggestion}
                    type="button"
                    role="option"
                    aria-selected={index === activeSuggestionIndex}
                    onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
                      event.preventDefault();
                      commitSuggestion(suggestion);
                    }}
                  >
                    {suggestion}
                  </button>
                ))
              : emptySuggestion}
          </div>
        ) : null}
      </div>
    );
  },
);

TagInput.displayName = "TagInput";

const focusInput = (event: MouseEvent<HTMLDivElement>) => {
  const input = event.currentTarget.querySelector<HTMLInputElement>(
    "input:not([type='hidden'])",
  );
  input?.focus();
};

const defaultNormalizeTag = (tag: string) => tag.trim();

const shouldCommitOnKey = (
  event: KeyboardEvent<HTMLInputElement>,
  separators: Array<string>,
) => {
  if (event.nativeEvent.isComposing) return false;
  return separators.includes(event.key);
};

const splitTags = (value: string, separators: Array<string>) => {
  const characters = separators.filter((separator) => separator.length === 1);
  const escapedSeparators = characters.map(escapeRegExp);
  const pattern = new RegExp(`[\\n\\r\\t${escapedSeparators.join("")}]+`, "g");

  return value.split(pattern).map((tag) => tag.trim());
};

const escapeRegExp = (value: string) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const filterSuggestions = (options: {
  allowDuplicates: boolean;
  inputValue: string;
  maxSuggestions: number;
  suggestions: Array<string>;
  tags: Array<string>;
}) => {
  const { allowDuplicates, inputValue, maxSuggestions, suggestions, tags } =
    options;
  const query = inputValue.trim().toLowerCase();

  return suggestions
    .filter((suggestion) => {
      if (!allowDuplicates && tags.includes(suggestion)) return false;
      if (!query) return true;
      return suggestion.toLowerCase().includes(query);
    })
    .slice(0, maxSuggestions);
};
