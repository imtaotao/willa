import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type CardVariant = "surface" | "soft" | "outline";
export type CardPadding = "sm" | "md" | "lg";

type CardBaseProps = {
  variant?: CardVariant;
  padding?: CardPadding;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type CardAnchorProps = CardBaseProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CardBaseProps | "href">;

type CardArticleProps = CardBaseProps & {
  href?: undefined;
} & Omit<HTMLAttributes<HTMLElement>, keyof CardBaseProps>;

export type CardProps = CardAnchorProps | CardArticleProps;

export function Card(props: CardProps) {
  if (isCardAnchorProps(props)) {
    const {
      variant = "surface",
      padding = "md",
      eyebrow,
      title,
      description,
      media,
      footer,
      actions,
      className,
      children,
      href,
      target,
      rel,
      ...anchorProps
    } = props;
    const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;

    return (
      <a
        {...anchorProps}
        className={getCardClassName({
          variant,
          padding,
          interactive: true,
          className,
        })}
        href={href}
        target={target}
        rel={resolvedRel}
      >
        {renderCardContent({
          eyebrow,
          title,
          description,
          media,
          footer,
          actions,
          children,
        })}
      </a>
    );
  }

  const {
    variant = "surface",
    padding = "md",
    eyebrow,
    title,
    description,
    media,
    footer,
    actions,
    className,
    children,
    ...articleProps
  } = props;

  return (
    <article
      {...articleProps}
      className={getCardClassName({
        variant,
        padding,
        interactive: false,
        className,
      })}
    >
      {renderCardContent({
        eyebrow,
        title,
        description,
        media,
        footer,
        actions,
        children,
      })}
    </article>
  );
}

const getCardClassName = (options: {
  variant: CardVariant;
  padding: CardPadding;
  interactive: boolean;
  className?: string;
}) => {
  return classNames(
    "willa-card",
    `willa-card--${options.variant}`,
    `willa-card--${options.padding}`,
    options.interactive && "willa-card--interactive",
    options.className,
  );
};

const isCardAnchorProps = (props: CardProps): props is CardAnchorProps => {
  return typeof props.href === "string";
};

const renderCardContent = (options: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <>
      {options.media ? (
        <div className="willa-card-media">{options.media}</div>
      ) : null}
      <div className="willa-card-content">
        {options.eyebrow ? (
          <div className="willa-card-eyebrow">{options.eyebrow}</div>
        ) : null}
        {options.title ? (
          <h3 className="willa-card-title">{options.title}</h3>
        ) : null}
        {options.description ? (
          <p className="willa-card-description">{options.description}</p>
        ) : null}
        {options.children ? (
          <div className="willa-card-body">{options.children}</div>
        ) : null}
      </div>
      {options.footer || options.actions ? (
        <div className="willa-card-footer">
          {options.footer ? (
            <div className="willa-card-footer-content">{options.footer}</div>
          ) : null}
          {options.actions ? (
            <div className="willa-card-actions">{options.actions}</div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

Card.displayName = "Card";
