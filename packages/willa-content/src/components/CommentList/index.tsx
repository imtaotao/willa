import { type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

import { Comment, type CommentProps } from "#content/components/Comment";
import { EmptyState } from "#content/components/EmptyState";
import { Spinner } from "#content/components/Spinner";

export type CommentListItem = Omit<CommentProps, "className"> & {
  id: string;
};

export type CommentListProps = {
  items?: Array<CommentListItem>;
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  empty?: ReactNode;
  loading?: boolean;
  loadingLabel?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function CommentList(props: CommentListProps) {
  const {
    items,
    children,
    title,
    description,
    empty,
    loading = false,
    loadingLabel = "正在加载评论",
    className,
    ...listProps
  } = props;
  const hasItems = Boolean(items?.length);
  const hasChildren = Boolean(children);

  return (
    <section
      {...listProps}
      className={classNames("willa-comment-list", className)}
    >
      {title || description ? (
        <header className="willa-comment-list-header">
          {title ? <h3 className="willa-comment-list-title">{title}</h3> : null}
          {description ? (
            <p className="willa-comment-list-description">{description}</p>
          ) : null}
        </header>
      ) : null}

      {loading ? (
        <div className="willa-comment-list-loading">
          <Spinner size="sm" label={loadingLabel} labelPosition="inline" />
        </div>
      ) : null}

      {hasChildren || hasItems ? (
        <div className="willa-comment-list-items">
          {children}
          {items?.map((item) => (
            <Comment key={item.id} {...item} />
          ))}
        </div>
      ) : loading ? null : (
        (empty ?? (
          <EmptyState
            size="sm"
            variant="plain"
            title="暂无评论"
            description="成为第一个参与讨论的人。"
          />
        ))
      )}
    </section>
  );
}

CommentList.displayName = "CommentList";
