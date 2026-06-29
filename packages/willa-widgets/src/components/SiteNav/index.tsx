import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";
import type { WillaRenderLink, WillaRenderLinkProps } from "@willa-ui/shared";

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
  renderLink?: WillaRenderLink;
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
    renderLink,
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
      {renderSiteNavLink(renderLink, {
        className: "willa-site-nav-brand",
        href: brandHref,
        children: (
          <>
            {logo ? <span className="willa-site-nav-logo">{logo}</span> : null}
            <span>{brand}</span>
          </>
        ),
      })}
      {items?.length ? (
        <nav className="willa-site-nav-links" aria-label="Site navigation">
          {items.map((item) => (
            <Fragment key={`${item.href}-${String(item.label)}`}>
              {renderSiteNavLink(renderLink, {
                className: classNames(
                  "willa-site-nav-link",
                  item.active && "willa-site-nav-link--active",
                ),
                href: item.href,
                target: item.target,
                rel: item.rel,
                "aria-current": item.active ? "page" : undefined,
                children: item.label,
              })}
            </Fragment>
          ))}
        </nav>
      ) : null}
      {actions ? <div className="willa-site-nav-actions">{actions}</div> : null}
    </header>
  );
}

const renderSiteNavLink = (
  renderLink: WillaRenderLink | undefined,
  props: WillaRenderLinkProps,
) => {
  if (renderLink) return renderLink(props);
  return <a {...props} />;
};

SiteNav.displayName = "SiteNav";
