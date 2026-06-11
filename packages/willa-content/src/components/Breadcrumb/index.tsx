import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type BreadcrumbSize = "sm" | "md";

export type BreadcrumbItem = {
  id?: string | number;
  label: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  current?: boolean;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type BreadcrumbProps = Omit<
  ComponentPropsWithoutRef<"nav">,
  "children"
> & {
  items: Array<BreadcrumbItem>;
  size?: BreadcrumbSize;
  separator?: ReactNode;
};

export function Breadcrumb(props: BreadcrumbProps) {
  const {
    items,
    size = "md",
    separator = <ChevronRightIcon />,
    className,
    "aria-label": ariaLabel = "Breadcrumb",
    ...breadcrumbProps
  } = props;

  return (
    <nav
      {...breadcrumbProps}
      aria-label={ariaLabel}
      className={classNames(
        "willa-breadcrumb",
        `willa-breadcrumb--${size}`,
        className,
      )}
    >
      <ol className="willa-breadcrumb-list">
        {items.map((item, index) => {
          const isCurrent = item.current ?? index === items.length - 1;

          return (
            <li
              className="willa-breadcrumb-item"
              key={item.id ?? `breadcrumb-${index}`}
            >
              {index > 0 ? (
                <span className="willa-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              ) : null}
              <BreadcrumbItemContent item={item} current={isCurrent} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const BreadcrumbItemContent = ({
  item,
  current,
}: {
  item: BreadcrumbItem;
  current: boolean;
}) => {
  const content = (
    <>
      {item.icon ? (
        <span className="willa-breadcrumb-icon" aria-hidden="true">
          {item.icon}
        </span>
      ) : null}
      <span className="willa-breadcrumb-label">{item.label}</span>
    </>
  );

  if (item.href && !current) {
    const rel = item.target === "_blank" && !item.rel ? "noreferrer" : item.rel;

    return (
      <a
        className="willa-breadcrumb-link"
        href={item.href}
        target={item.target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  if (item.onClick && !current) {
    return (
      <button
        className="willa-breadcrumb-link"
        type="button"
        onClick={item.onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <span
      className="willa-breadcrumb-current"
      aria-current={current ? "page" : undefined}
    >
      {content}
    </span>
  );
};
