import type { ComponentPropsWithoutRef, ReactNode } from "react";
import classNames from "classnames";

export type DescriptionListColumns = 1 | 2 | 3;
export type DescriptionListSize = "sm" | "md";
export type DescriptionListVariant = "default" | "plain";

export type DescriptionListItem = {
  id?: string | number;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export type DescriptionListProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "title"
> & {
  items: Array<DescriptionListItem>;
  title?: ReactNode;
  description?: ReactNode;
  columns?: DescriptionListColumns;
  size?: DescriptionListSize;
  variant?: DescriptionListVariant;
};

export function DescriptionList(props: DescriptionListProps) {
  const {
    items,
    title,
    description,
    columns = 1,
    size = "md",
    variant = "default",
    className,
    ...rootProps
  } = props;

  return (
    <section
      {...rootProps}
      className={classNames(
        "willa-description-list",
        `willa-description-list--${size}`,
        `willa-description-list--${variant}`,
        `willa-description-list--columns-${columns}`,
        className,
      )}
    >
      {title || description ? (
        <div className="willa-description-list-header">
          {title ? (
            <div className="willa-description-list-title">{title}</div>
          ) : null}
          {description ? (
            <div className="willa-description-list-description">
              {description}
            </div>
          ) : null}
        </div>
      ) : null}
      <dl className="willa-description-list-grid">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className={classNames(
              "willa-description-list-item",
              item.className,
            )}
          >
            <dt className="willa-description-list-label">{item.label}</dt>
            <dd className="willa-description-list-value">
              <span className="willa-description-list-value-text">
                {item.value}
              </span>
              {item.action ? (
                <span className="willa-description-list-action">
                  {item.action}
                </span>
              ) : null}
            </dd>
            {item.description ? (
              <dd className="willa-description-list-item-description">
                {item.description}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
    </section>
  );
}
