import { type ReactNode } from "react";

export type HeaderBlockProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  titleAs: "h1" | "h2";
  eyebrowClassName: string;
  headingClassName: string;
  titleClassName: string;
  metaClassName: string;
  descriptionClassName: string;
  contentClassName?: string;
};

export function HeaderBlock(props: HeaderBlockProps) {
  const {
    eyebrow,
    title,
    meta,
    description,
    children,
    titleAs,
    eyebrowClassName,
    headingClassName,
    titleClassName,
    metaClassName,
    descriptionClassName,
    contentClassName,
  } = props;

  const TitleTag = titleAs;

  return (
    <>
      {eyebrow ? <div className={eyebrowClassName}>{eyebrow}</div> : null}
      <div className={headingClassName}>
        <TitleTag className={titleClassName}>{title}</TitleTag>
        {meta ? <div className={metaClassName}>{meta}</div> : null}
      </div>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
      {children ? <div className={contentClassName}>{children}</div> : null}
    </>
  );
}
