import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

export type LogoWallItem = {
  name: string;
  src?: string;
  href?: string;
  target?: string;
  rel?: string;
  description?: ReactNode;
  logo?: ReactNode;
};

export type LogoWallColumns = 2 | 3 | 4 | 5 | 6;

export type LogoWallProps = {
  items: Array<LogoWallItem>;
  columns?: LogoWallColumns;
  title?: ReactNode;
  description?: ReactNode;
  muted?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function LogoWall(props: LogoWallProps) {
  const {
    items,
    columns = 4,
    title,
    description,
    muted = false,
    className,
    style,
    ...wallProps
  } = props;

  return (
    <section
      {...wallProps}
      className={classNames(
        "willa-logo-wall",
        muted && "willa-logo-wall--muted",
        className,
      )}
      style={
        {
          ...style,
          "--willa-logo-wall-columns": String(columns),
        } as CSSProperties
      }
    >
      {title || description ? (
        <header className="willa-logo-wall-header">
          {title ? <h3 className="willa-logo-wall-title">{title}</h3> : null}
          {description ? (
            <p className="willa-logo-wall-description">{description}</p>
          ) : null}
        </header>
      ) : null}
      <div className="willa-logo-wall-grid">
        {items.map((item, index) => {
          const content = (
            <>
              <span className="willa-logo-wall-mark">
                {item.logo ??
                  (item.src ? (
                    <img src={item.src} alt={item.name} loading="lazy" />
                  ) : (
                    <span>{item.name.slice(0, 1).toUpperCase()}</span>
                  ))}
              </span>
              <span className="willa-logo-wall-copy">
                <span className="willa-logo-wall-name">{item.name}</span>
                {item.description ? (
                  <span className="willa-logo-wall-item-description">
                    {item.description}
                  </span>
                ) : null}
              </span>
            </>
          );

          return item.href ? (
            <a
              key={`${item.name}-${index}`}
              className="willa-logo-wall-item"
              href={item.href}
              target={item.target}
              rel={item.rel}
            >
              {content}
            </a>
          ) : (
            <div key={`${item.name}-${index}`} className="willa-logo-wall-item">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
