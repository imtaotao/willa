import { type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

export type SiteNavItem = {
  label: ReactNode;
  href: string;
  active?: boolean;
  target?: string;
  rel?: string;
};

export type SiteNavProps = {
  brand: ReactNode;
  brandHref?: string;
  logo?: ReactNode;
  items?: Array<SiteNavItem>;
  actions?: ReactNode;
  sticky?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function SiteNav(props: SiteNavProps) {
  const {
    brand,
    brandHref = "/",
    logo,
    items,
    actions,
    sticky = false,
    className,
    ...navProps
  } = props;

  return (
    <header
      {...navProps}
      className={classNames(
        "willa-site-nav",
        sticky && "willa-site-nav--sticky",
        className,
      )}
    >
      <a className="willa-site-nav-brand" href={brandHref}>
        {logo ? <span className="willa-site-nav-logo">{logo}</span> : null}
        <span>{brand}</span>
      </a>
      {items?.length ? (
        <nav className="willa-site-nav-links" aria-label="Site navigation">
          {items.map((item) => (
            <a
              key={`${item.href}-${String(item.label)}`}
              className={classNames(
                "willa-site-nav-link",
                item.active && "willa-site-nav-link--active",
              )}
              href={item.href}
              target={item.target}
              rel={item.rel}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
      {actions ? <div className="willa-site-nav-actions">{actions}</div> : null}
    </header>
  );
}
