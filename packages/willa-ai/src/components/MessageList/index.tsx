import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type MessageListProps = {
  children?: ReactNode;
  empty?: ReactNode;
  loading?: boolean;
  loadingLabel?: ReactNode;
  autoScroll?: boolean;
  maxWidth?: number | string;
  gap?: number | string;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function MessageList(props: MessageListProps) {
  const {
    children,
    empty,
    loading = false,
    loadingLabel = "正在加载消息...",
    autoScroll = true,
    maxWidth,
    gap,
    className,
    style,
    ...listProps
  } = props;
  const listRef = useRef<HTMLDivElement>(null);
  const hasMessages = isRenderable(children);
  const listStyle = getMessageListStyle({ gap, maxWidth, style });

  useEffect(() => {
    if (!autoScroll) return;

    const list = listRef.current;
    if (!list) return;

    list.scrollTop = list.scrollHeight;
  }, [autoScroll, children, loading]);

  return (
    <div
      {...listProps}
      ref={listRef}
      className={classNames("willa-message-list", className)}
      style={listStyle}
      role={listProps.role ?? "log"}
      aria-live={listProps["aria-live"] ?? "polite"}
    >
      {loading ? (
        <div className="willa-message-list-loading">{loadingLabel}</div>
      ) : null}
      {hasMessages ? (
        <div className="willa-message-list-content">{children}</div>
      ) : (
        <div className="willa-message-list-empty">
          {isRenderable(empty) ? empty : "暂无消息"}
        </div>
      )}
    </div>
  );
}

const isRenderable = (value: ReactNode) => {
  return value !== undefined && value !== null && value !== false;
};

const getMessageListStyle = (options: {
  gap?: number | string;
  maxWidth?: number | string;
  style?: CSSProperties;
}) => {
  const { gap, maxWidth, style } = options;
  const listStyle = {
    ...style,
  } as CSSProperties & Record<string, string>;

  if (gap !== undefined) {
    listStyle["--willa-message-list-gap"] =
      typeof gap === "number" ? `${gap}px` : gap;
  }

  if (maxWidth !== undefined) {
    listStyle["--willa-message-list-max-width"] =
      typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
  }

  return listStyle;
};
