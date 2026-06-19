import { type ChangeEvent, type KeyboardEvent, type RefObject } from "react";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

import { Button } from "#content/components/Button";
import { IconButton } from "#content/components/IconButton";

import type {
  TypographyClassNames,
  TypographyStyles,
} from "#content/components/Typography/types";
import type { NormalizedEditable } from "#content/components/Typography/utils";

type TypographyEditProps = {
  editableConfig: NormalizedEditable | undefined;
  editedText: string;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onEnd: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  classNames?: TypographyClassNames;
  styles?: TypographyStyles;
};

export function TypographyEdit(props: TypographyEditProps) {
  const {
    editableConfig,
    editedText,
    textAreaRef,
    onCancel,
    onChange,
    onEnd,
    onKeyDown,
    classNames,
    styles,
  } = props;
  const characterCount = editedText.length;
  const maxLength = editableConfig?.maxLength;
  const hasCharacterCount = typeof maxLength === "number";

  return (
    <div
      className={
        classNames?.content
          ? `willa-typography-edit ${classNames.content}`
          : "willa-typography-edit"
      }
      style={styles?.content}
    >
      <span className="willa-typography-edit-header">
        <span className="willa-typography-edit-status">Editing</span>
        <IconButton
          ariaLabel="取消编辑"
          className={
            classNames?.action
              ? `willa-typography-action willa-typography-action--edit-close ${classNames.action}`
              : "willa-typography-action willa-typography-action--edit-close"
          }
          style={styles?.action}
          icon={<Cross2Icon />}
          shape="square"
          size="sm"
          type="button"
          variant="ghost"
          onClick={onCancel}
        />
      </span>
      <span className="willa-typography-edit-field">
        <textarea
          ref={textAreaRef}
          aria-label="编辑文本"
          className={
            classNames?.textarea
              ? `willa-typography-edit-textarea ${classNames.textarea}`
              : "willa-typography-edit-textarea"
          }
          style={styles?.textarea}
          maxLength={maxLength}
          value={editedText}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <span
          className={
            classNames?.actions
              ? `willa-typography-edit-footer ${classNames.actions}`
              : "willa-typography-edit-footer"
          }
          style={styles?.actions}
        >
          {hasCharacterCount ? (
            <span className="willa-typography-edit-meta">
              <span className="willa-typography-edit-count">
                {characterCount}/{maxLength}
              </span>
            </span>
          ) : null}
          <span className="willa-typography-edit-actions">
            <Button
              className={
                classNames?.action
                  ? `willa-typography-edit-button willa-typography-edit-button--cancel ${classNames.action}`
                  : "willa-typography-edit-button willa-typography-edit-button--cancel"
              }
              style={styles?.action}
              icon={<Cross2Icon />}
              size="sm"
              type="button"
              variant="ghost"
              onClick={onCancel}
            >
              取消
            </Button>
            {editableConfig?.enterIcon === null ? null : (
              <Button
                className={
                  classNames?.action
                    ? `willa-typography-edit-button willa-typography-edit-button--confirm ${classNames.action}`
                    : "willa-typography-edit-button willa-typography-edit-button--confirm"
                }
                style={styles?.action}
                icon={editableConfig?.enterIcon ?? <CheckIcon />}
                size="sm"
                type="button"
                variant="soft"
                onClick={onEnd}
              >
                完成
              </Button>
            )}
          </span>
        </span>
      </span>
    </div>
  );
}

export const resizeEditTextArea = (
  textArea: HTMLTextAreaElement,
  autoSize: NormalizedEditable["autoSize"],
) => {
  if (!autoSize) return;

  textArea.style.height = "auto";

  const computed = window.getComputedStyle(textArea);
  const lineHeight = Number.parseFloat(computed.lineHeight) || 20;
  const config = typeof autoSize === "object" ? autoSize : undefined;
  const minRows = config?.minRows ?? 1;
  const maxRows = config?.maxRows;
  const minHeight = lineHeight * minRows;
  const maxHeight = maxRows ? lineHeight * maxRows : Number.POSITIVE_INFINITY;
  const nextHeight = Math.min(
    Math.max(textArea.scrollHeight, minHeight),
    maxHeight,
  );

  textArea.style.height = `${nextHeight}px`;
};

TypographyEdit.displayName = "TypographyEdit";
