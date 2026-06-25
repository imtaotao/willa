import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type FilterBarDensity = "compact" | "normal";
export type FilterBarAlign = "start" | "end" | "stretch";

export type FilterBarItem = {
  id: string;
  label?: ReactNode;
  control: ReactNode;
  width?: CSSProperties["width"];
  grow?: boolean;
};

export type FilterBarProps = ComponentPropsWithoutRef<"div"> & {
  search?: ReactNode;
  items?: Array<FilterBarItem>;
  actions?: ReactNode;
  summary?: ReactNode;
  density?: FilterBarDensity;
  align?: FilterBarAlign;
};

export function FilterBar(props: FilterBarProps) {
  const {
    search,
    items,
    actions,
    summary,
    density = "normal",
    align = "start",
    children,
    className,
    ...rootProps
  } = props;
  const hasFilters = Boolean(items?.length || children);

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-filter-bar",
        `willa-filter-bar--${density}`,
        `willa-filter-bar--${align}`,
        className,
      )}
    >
      <div className="willa-filter-bar-main">
        {search ? (
          <div className="willa-filter-bar-search">{search}</div>
        ) : null}
        {hasFilters ? (
          <div className="willa-filter-bar-filters">
            {items?.map((item) => (
              <FilterBarItemView key={item.id} item={item} />
            ))}
            {children}
          </div>
        ) : null}
        {actions ? (
          <div className="willa-filter-bar-actions">{actions}</div>
        ) : null}
      </div>
      {summary ? (
        <div className="willa-filter-bar-summary">{summary}</div>
      ) : null}
    </div>
  );
}

const FilterBarItemView = ({ item }: { item: FilterBarItem }) => {
  return (
    <div
      className={classNames(
        "willa-filter-bar-item",
        item.grow && "willa-filter-bar-item--grow",
      )}
      style={getFilterBarItemStyle(item.width)}
    >
      {item.label ? (
        <span className="willa-filter-bar-label">{item.label}</span>
      ) : null}
      <span className="willa-filter-bar-control">{item.control}</span>
    </div>
  );
};

const getFilterBarItemStyle = (width?: CSSProperties["width"]) => {
  if (width === undefined) return undefined;

  return { "--willa-filter-bar-item-width": width } as CSSProperties;
};

FilterBar.displayName = "FilterBar";
