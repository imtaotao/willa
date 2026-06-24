import { type ReactNode } from "react";
import classNames from "classnames";

import { Avatar } from "#content/components/Avatar";
import {
  MentionInput,
  type MentionInputMentionContext,
  type MentionInputMentionItem,
  type MentionInputMentionListProps,
  type MentionInputProps,
  type MentionInputSubmitContext,
} from "#content/components/MentionInput";

export type CommentInputSubmitContext = MentionInputSubmitContext;
export type CommentInputQuote = {
  author: ReactNode;
  content: ReactNode;
};
export type CommentInputMentionItem = MentionInputMentionItem;
export type CommentInputMentionListProps = MentionInputMentionListProps;
export type CommentInputMentionContext = MentionInputMentionContext;

export type CommentInputProps = Omit<
  MentionInputProps,
  "beforeInput" | "mentionSources"
> & {
  avatarSrc?: string;
  quote?: CommentInputQuote;
};

export function CommentInput(props: CommentInputProps) {
  const {
    avatarSrc,
    quote,
    placeholder = "写下你的评论...",
    submitLabel = "发布",
    className,
    loading = false,
    ...mentionInputProps
  } = props;
  const showAvatar = Boolean(avatarSrc);

  return (
    <MentionInput
      {...mentionInputProps}
      placeholder={placeholder}
      submitLabel={submitLabel}
      loading={loading}
      beforeInput={
        <>
          {showAvatar ? (
            <div className="willa-comment-input-author">
              <Avatar
                className="willa-comment-input-avatar"
                src={avatarSrc}
                name="评论者"
                alt="评论者"
                size="sm"
              />
              <span className="willa-comment-input-author-name">评论者</span>
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
        </>
      }
      className={classNames(
        showAvatar && "willa-comment-input--with-author",
        loading && "willa-comment-input--loading",
        className,
      )}
    />
  );
}

CommentInput.displayName = "CommentInput";
