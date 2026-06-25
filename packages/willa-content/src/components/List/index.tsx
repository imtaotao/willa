import type {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  CSSProperties,
  DragEvent,
  MouseEvent,
  ReactNode,
  UIEvent,
} from "react";
import { useRef, useState } from "react";
import classNames from "classnames";
import { isPromiseLike } from "aidly";

import { Spinner } from "#content/components/Spinner";
import { useVirtualScrollWindow } from "@willa-ui/shared";

export type ListTone = "neutral" | "info" | "success" | "warning" | "danger";
export type ListSize = "sm" | "md" | "lg";
export type ListVariant = "panel" | "plain" | "menu";
export type ListItemLayout = "horizontal" | "vertical";

export type ListGrid = {
  columns?: number;
  minItemWidth?: CSSProperties["width"];
  gap?: CSSProperties["gap"];
};

export type ListItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  time?: ReactNode;
  media?: ReactNode;
  extra?: ReactNode;
  actions?: ReactNode;
  tone?: ListTone;
  unread?: boolean;
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export type ListProps = {
  items: Array<ListItem>;
  size?: ListSize;
  variant?: ListVariant;
  itemLayout?: ListItemLayout;
  split?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  loadMore?: ReactNode;
  loading?: boolean;
  loadingLabel?: ReactNode;
  grid?: ListGrid;
  empty?: ReactNode;
  maxHeight?: CSSProperties["maxHeight"];
  virtualScroll?: boolean;
  virtualScrollOverscan?: number;
  virtualScrollItemHeight?: number;
  draggable?: boolean;
  infiniteScroll?: boolean;
  hasMore?: boolean;
  scrollThreshold?: number;
  renderItem?: (item: ListItem) => ReactNode;
  onItemsChange?: (items: Array<ListItem>) => void;
  onLoadMore?: () => void | Promise<void>;
  onItemClick?: (
    item: ListItem,
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "draggable">;

export function List(props: ListProps) {
  const {
    items,
    size = "md",
    variant = "panel",
    itemLayout = "horizontal",
    split = true,
    header,
    footer,
    loadMore,
    loading = false,
    loadingLabel = "正在加载",
    grid,
    empty = "暂无内容",
    maxHeight,
    virtualScroll = false,
    virtualScrollOverscan = 4,
    virtualScrollItemHeight,
    draggable = false,
    infiniteScroll = false,
    hasMore = false,
    scrollThreshold = 56,
    renderItem,
    onItemsChange,
    onLoadMore,
    onItemClick,
    onScroll,
    className,
    style,
    ...rootProps
  } = props;
  const [draggingId, setDraggingId] = useState<string>();
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null,
  );
  const infiniteLoadPendingRef = useRef(false);
  const infiniteLoadArmedRef = useRef(true);
  const virtualWindow = useVirtualScrollWindow({
    enabled: virtualScroll,
    itemCount: items.length,
    itemHeight:
      virtualScrollItemHeight ?? getEstimatedListItemHeight(size, itemLayout),
    overscan: virtualScrollOverscan,
    container: scrollContainer,
  });
  const visibleItems = virtualScroll
    ? items.slice(virtualWindow.startIndex, virtualWindow.endIndex)
    : items;
  const rootStyle: CSSProperties & Record<string, string | number> = {
    ...style,
    ...(maxHeight === undefined ? undefined : { maxHeight }),
    ...(grid?.columns === undefined
      ? undefined
      : { "--willa-list-grid-columns": grid.columns }),
    ...(grid?.minItemWidth === undefined
      ? undefined
      : { "--willa-list-grid-min-width": String(grid.minItemWidth) }),
    ...(grid?.gap === undefined
      ? undefined
      : { "--willa-list-grid-gap": String(grid.gap) }),
  };

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    onScroll?.(event);

    if (
      !infiniteScroll ||
      !hasMore ||
      loading ||
      !onLoadMore ||
      infiniteLoadPendingRef.current
    ) {
      return;
    }

    const target = event.currentTarget;
    const remaining =
      target.scrollHeight - target.scrollTop - target.clientHeight;

    if (remaining > scrollThreshold * 1.5) {
      infiniteLoadArmedRef.current = true;
    }

    if (!infiniteLoadArmedRef.current) {
      return;
    }

    if (remaining > scrollThreshold) {
      return;
    }

    infiniteLoadArmedRef.current = false;
    const loadResult = onLoadMore();
    if (isPromiseLike(loadResult)) {
      infiniteLoadPendingRef.current = true;
      loadResult.finally(() => {
        infiniteLoadPendingRef.current = false;
      });
    }
  };

  const handleDrop = (item: ListItem, event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();

    if (!draggingId || draggingId === item.id) {
      setDraggingId(undefined);
      return;
    }

    onItemsChange?.(reorderItems(items, draggingId, item.id));
    setDraggingId(undefined);
  };

  return (
    <section
      {...rootProps}
      className={classNames(
        "willa-list",
        `willa-list--${size}`,
        `willa-list--${variant}`,
        `willa-list--${itemLayout}`,
        split && "willa-list--split",
        grid && "willa-list--grid",
        virtualScroll && "willa-list--virtual",
        draggable && "willa-list--draggable",
        loading && "willa-list--loading",
        className,
      )}
      style={rootStyle}
      ref={setScrollContainer}
      onScroll={handleScroll}
    >
      {header ? <div className="willa-list__slot">{header}</div> : null}
      {items.length > 0 ? (
        <ul className="willa-list__items">
          {virtualScroll ? (
            <li
              aria-hidden="true"
              className="willa-list__spacer"
              style={{ height: virtualWindow.paddingTop }}
            />
          ) : null}
          {visibleItems.map((item) => (
            <li
              className={classNames(
                "willa-list__item",
                `willa-list__item--${item.tone ?? "neutral"}`,
                item.unread && "willa-list__item--unread",
                item.selected && "willa-list__item--selected",
                item.disabled && "willa-list__item--disabled",
                draggingId === item.id && "willa-list__item--dragging",
              )}
              key={item.id}
              draggable={draggable && !item.disabled}
              onDragStart={(event) => {
                if (!draggable || item.disabled) {
                  return;
                }

                event.dataTransfer.effectAllowed = "move";
                event.dataTransfer.setData("text/plain", item.id);
                setDraggingId(item.id);
              }}
              onDragOver={(event) => {
                if (!draggable || item.disabled || !draggingId) {
                  return;
                }

                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
              }}
              onDrop={(event) => handleDrop(item, event)}
              onDragEnd={() => setDraggingId(undefined)}
            >
              {renderItem ? (
                renderItem(item)
              ) : (
                <ListItemContent item={item} onItemClick={onItemClick} />
              )}
            </li>
          ))}
          {virtualScroll ? (
            <li
              aria-hidden="true"
              className="willa-list__spacer"
              style={{ height: virtualWindow.paddingBottom }}
            />
          ) : null}
        </ul>
      ) : (
        <div className="willa-list__empty">{empty}</div>
      )}
      {loading ? (
        <div className="willa-list__loading">
          <Spinner size="sm" label={loadingLabel} />
        </div>
      ) : null}
      {loadMore ? (
        <div className="willa-list__load-more">{loadMore}</div>
      ) : null}
      {footer ? <div className="willa-list__slot">{footer}</div> : null}
    </section>
  );
}

const ListItemContent = (props: {
  item: ListItem;
  onItemClick?: ListProps["onItemClick"];
}) => {
  const { item, onItemClick } = props;
  const mainContent = (
    <>
      {item.media ? (
        <span className="willa-list__media" aria-hidden="true">
          {item.media}
        </span>
      ) : null}
      <span className="willa-list__body">
        <span className="willa-list__header">
          <span className="willa-list__title">{item.title}</span>
          {item.time ? (
            <span className="willa-list__time">{item.time}</span>
          ) : null}
        </span>
        {item.description ? (
          <span className="willa-list__description">{item.description}</span>
        ) : null}
        {item.meta ? (
          <span className="willa-list__meta">{item.meta}</span>
        ) : null}
      </span>
      {item.extra ? (
        <span className="willa-list__extra">{item.extra}</span>
      ) : null}
    </>
  );

  return (
    <>
      {renderMain({
        item,
        mainContent,
        onItemClick,
      })}
      {item.actions ? (
        <span className="willa-list__actions">{item.actions}</span>
      ) : null}
      {item.unread ? (
        <span className="willa-list__unread" aria-hidden="true" />
      ) : null}
    </>
  );
};

const renderMain = (options: {
  item: ListItem;
  mainContent: ReactNode;
  onItemClick?: ListProps["onItemClick"];
}) => {
  const { item, mainContent, onItemClick } = options;

  if (item.href) {
    return (
      <a
        className="willa-list__main"
        href={item.disabled ? undefined : item.href}
        target={item.target}
        rel={item.target === "_blank" ? "noreferrer" : undefined}
        aria-disabled={item.disabled || undefined}
        onClick={(event) => {
          if (item.disabled) {
            event.preventDefault();
            return;
          }

          onItemClick?.(item, event);
        }}
      >
        {mainContent}
      </a>
    );
  }

  if (onItemClick) {
    return (
      <button
        className="willa-list__main"
        type="button"
        disabled={item.disabled}
        onClick={(event) => onItemClick(item, event)}
      >
        {mainContent}
      </button>
    );
  }

  return <div className="willa-list__main">{mainContent}</div>;
};

const getEstimatedListItemHeight = (
  size: ListSize,
  itemLayout: ListItemLayout,
) => {
  if (itemLayout === "vertical") {
    return size === "lg" ? 168 : size === "sm" ? 144 : 156;
  }

  return size === "lg" ? 104 : size === "sm" ? 84 : 94;
};

const reorderItems = (
  items: Array<ListItem>,
  activeId: string,
  overId: string,
) => {
  const activeIndex = items.findIndex((item) => item.id === activeId);
  const overIndex = items.findIndex((item) => item.id === overId);

  if (activeIndex < 0 || overIndex < 0) {
    return items;
  }

  const nextItems = [...items];
  const [activeItem] = nextItems.splice(activeIndex, 1);
  nextItems.splice(overIndex, 0, activeItem);
  return nextItems;
};

List.displayName = "List";
