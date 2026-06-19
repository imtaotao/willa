import { type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

export type SiteFooterLink = {
  label: ReactNode;
  href: string;
  target?: string;
  rel?: string;
};

export type SiteFooterColumn = {
  title: ReactNode;
  links: Array<SiteFooterLink>;
};

export type SiteFooterProps = {
  brand?: ReactNode;
  description?: ReactNode;
  columns?: Array<SiteFooterColumn>;
  links?: Array<SiteFooterLink>;
  actions?: ReactNode;
  copyright?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function SiteFooter(props: SiteFooterProps) {
  const {
    brand,
    description,
    columns,
    links,
    actions,
    copyright,
    className,
    ...footerProps
  } = props;

  return (
    <footer
      {...footerProps}
      className={classNames("willa-site-footer", className)}
    >
      <div className="willa-site-footer-main">
        {brand || description || actions ? (
          <div className="willa-site-footer-intro">
            {brand ? (
              <h3 className="willa-site-footer-brand">{brand}</h3>
            ) : null}
            {description ? (
              <p className="willa-site-footer-description">{description}</p>
            ) : null}
            {actions ? (
              <div className="willa-site-footer-actions">{actions}</div>
            ) : null}
          </div>
        ) : null}
        {columns?.length ? (
          <div className="willa-site-footer-columns">
            {columns.map((column) => (
              <div key={String(column.title)} className="willa-site-footer-col">
                <h4 className="willa-site-footer-col-title">{column.title}</h4>
                <div className="willa-site-footer-col-links">
                  {column.links.map((link) => (
                    <a
                      key={`${link.href}-${String(link.label)}`}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {links?.length || copyright ? (
        <div className="willa-site-footer-bottom">
          {copyright ? (
            <span className="willa-site-footer-copyright">{copyright}</span>
          ) : null}
          {links?.length ? (
            <div className="willa-site-footer-links">
              {links.map((link) => (
                <a
                  key={`${link.href}-${String(link.label)}`}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </footer>
  );
}

SiteFooter.displayName = "SiteFooter";
