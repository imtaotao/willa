import {
  useEffect,
  useMemo,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import {
  useControllableState,
  type WillaRenderLink,
  type WillaRenderLinkProps,
} from "@willa-ui/shared";

export type AnchorItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  href?: string;
  children?: Array<AnchorItem>;
};

export type AnchorSize = "sm" | "md";
export type AnchorVariant = "toc" | "navigation";
export type AnchorSlot =
  | "list"
  | "item"
  | "link"
  | "title"
  | "meta"
  | "description";

export type AnchorProps = {
  items: Array<AnchorItem>;
  activeId?: string;
  defaultActiveId?: string;
  offsetTop?: number;
  size?: AnchorSize;
  variant?: AnchorVariant;
  sticky?: boolean;
  showMarker?: boolean;
  classNames?: Partial<Record<AnchorSlot, string>>;
  styles?: Partial<Record<AnchorSlot, CSSProperties>>;
  renderLink?: WillaRenderLink;
  onActiveChange?: (id: string) => void;
  onItemClick?: (
    item: AnchorItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => void;
} & Omit<ComponentPropsWithoutRef<"nav">, "children" | "onChange">;

export function Anchor(props: AnchorProps) {
  const {
    items,
    activeId,
    defaultActiveId,
    offsetTop = 0,
    size = "md",
    variant = "toc",
    sticky = false,
    showMarker = true,
    classNames: slotClassNames,
    styles,
    renderLink,
    onActiveChange,
    onItemClick,
    className,
    ...navProps
  } = props;
  const flattenedItems = useMemo(() => flattenAnchorItems(items), [items]);
  const [resolvedActiveId, setResolvedActiveId, activeControlled] =
    useControllableState({
      value: activeId,
      defaultValue: defaultActiveId ?? flattenedItems[0]?.id,
    });

  useEffect(() => {
    if (activeControlled || typeof window === "undefined") return;

    const updateActiveId = () => {
      const nextItem = flattenedItems
        .map((item) => {
          const element = document.getElementById(item.id);
          return {
            item,
            top:
              element?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY,
          };
        })
        .filter((entry) => entry.top <= offsetTop + 12)
        .sort((a, b) => b.top - a.top)[0]?.item;

      if (!nextItem || nextItem.id === resolvedActiveId) return;
      setResolvedActiveId(nextItem.id);
      onActiveChange?.(nextItem.id);
    };

    updateActiveId();
    window.addEventListener("scroll", updateActiveId, { passive: true });
    window.addEventListener("resize", updateActiveId);

    return () => {
      window.removeEventListener("scroll", updateActiveId);
      window.removeEventListener("resize", updateActiveId);
    };
  }, [
    activeControlled,
    flattenedItems,
    offsetTop,
    onActiveChange,
    resolvedActiveId,
    setResolvedActiveId,
  ]);

  const setActiveItem = (
    item: AnchorItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    onItemClick?.(item, event);
    if (event.defaultPrevented) return;

    const href = item.href ?? `#${item.id}`;
    if (!href.startsWith("#")) return;

    event.preventDefault();
    document.getElementById(item.id)?.scrollIntoView({ block: "start" });

    setResolvedActiveId(item.id);

    onActiveChange?.(item.id);
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav
      {...navProps}
      className={classNames(
        "willa-anchor",
        `willa-anchor--${size}`,
        `willa-anchor--${variant}`,
        sticky && "willa-anchor--sticky",
        showMarker && "willa-anchor--marker",
        className,
      )}
    >
      <ol
        className={classNames("willa-anchor__list", slotClassNames?.list)}
        style={styles?.list}
      >
        {items.map((item) => (
          <AnchorNode
            key={item.id}
            item={item}
            activeId={resolvedActiveId}
            classNames={slotClassNames}
            styles={styles}
            renderLink={renderLink}
            onItemClick={setActiveItem}
          />
        ))}
      </ol>
    </nav>
  );
}

const AnchorNode = (props: {
  item: AnchorItem;
  activeId?: string;
  classNames?: Partial<Record<AnchorSlot, string>>;
  styles?: Partial<Record<AnchorSlot, CSSProperties>>;
  renderLink?: WillaRenderLink;
  onItemClick: (item: AnchorItem, event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const {
    item,
    activeId,
    classNames: slotClassNames,
    styles,
    renderLink,
    onItemClick,
  } = props;
  const isActive = activeId === item.id;
  const linkProps = {
    className: classNames(
      "willa-anchor__link",
      isActive && "willa-anchor__link--active",
      slotClassNames?.link,
    ),
    style: styles?.link,
    href: item.href ?? `#${item.id}`,
    "aria-current": isActive ? "location" : undefined,
    onClick: (event) => onItemClick(item, event),
    children: (
      <>
        <span
          className={classNames("willa-anchor__title", slotClassNames?.title)}
          style={styles?.title}
        >
          {item.title}
        </span>
        {item.meta === undefined ? null : (
          <span
            className={classNames("willa-anchor__meta", slotClassNames?.meta)}
            style={styles?.meta}
          >
            {item.meta}
          </span>
        )}
        {item.description === undefined ? null : (
          <span
            className={classNames(
              "willa-anchor__description",
              slotClassNames?.description,
            )}
            style={styles?.description}
          >
            {item.description}
          </span>
        )}
      </>
    ),
  } satisfies WillaRenderLinkProps;

  return (
    <li
      className={classNames("willa-anchor__item", slotClassNames?.item)}
      style={styles?.item}
    >
      {renderAnchorLink(renderLink, linkProps)}
      {item.children?.length ? (
        <ol
          className={classNames(
            "willa-anchor__list",
            "willa-anchor__list--nested",
            slotClassNames?.list,
          )}
          style={styles?.list}
        >
          {item.children.map((child) => (
            <AnchorNode
              key={child.id}
              item={child}
              activeId={activeId}
              classNames={slotClassNames}
              styles={styles}
              renderLink={renderLink}
              onItemClick={onItemClick}
            />
          ))}
        </ol>
      ) : null}
    </li>
  );
};

const renderAnchorLink = (
  renderLink: WillaRenderLink | undefined,
  props: WillaRenderLinkProps,
) => {
  if (renderLink) return renderLink(props);
  return <a {...props} />;
};

const flattenAnchorItems = (items: Array<AnchorItem>): Array<AnchorItem> => {
  return items.flatMap((item) => [
    item,
    ...(item.children ? flattenAnchorItems(item.children) : []),
  ]);
};

Anchor.displayName = "Anchor";
