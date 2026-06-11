import { type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

import { Avatar } from "#content/components/Avatar";

export type CommentSize = "sm" | "md";
export type CommentVariant = "card" | "feed";

export type CommentProps = {
  author: ReactNode;
  children: ReactNode;
  avatarSrc?: string;
  avatarName?: string;
  avatar?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  size?: CommentSize;
  variant?: CommentVariant;
  highlighted?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Comment(props: CommentProps) {
  const {
    author,
    children,
    avatarSrc,
    avatarName,
    avatar,
    meta,
    actions,
    footer,
    size = "md",
    variant = "card",
    highlighted = false,
    className,
    ...commentProps
  } = props;

  return (
    <article
      {...commentProps}
      className={classNames(
        "willa-comment",
        `willa-comment--${size}`,
        `willa-comment--${variant}`,
        highlighted && "willa-comment--highlighted",
        className,
      )}
    >
      <div className="willa-comment-avatar">
        {avatar ?? (
          <Avatar
            src={avatarSrc}
            name={avatarName ?? getAvatarName(author)}
            alt={getAvatarName(author)}
            size={size === "sm" ? "sm" : "md"}
          />
        )}
      </div>
      <div className="willa-comment-main">
        <header className="willa-comment-header">
          <div className="willa-comment-meta">
            <span className="willa-comment-author">{author}</span>
            {meta ? <span className="willa-comment-time">{meta}</span> : null}
          </div>
          {actions ? (
            <div className="willa-comment-actions">{actions}</div>
          ) : null}
        </header>
        <div className="willa-comment-body">{children}</div>
        {footer ? (
          <footer className="willa-comment-footer">{footer}</footer>
        ) : null}
      </div>
    </article>
  );
}

const getAvatarName = (author: ReactNode) => {
  if (typeof author === "string" || typeof author === "number") {
    return String(author);
  }

  return "Comment Author";
};
