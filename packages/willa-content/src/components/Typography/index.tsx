import cx from "classnames";

import { TypographyContent } from "#content/components/Typography/TypographyContent";
import type {
  TypographyLinkProps,
  TypographyParagraphProps,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleProps,
} from "#content/components/Typography/types";

export type {
  TypographyActions,
  TypographyCopyable,
  TypographyEditable,
  TypographyEllipsis,
  TypographyLinkProps,
  TypographyParagraphProps,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleLevel,
  TypographyTitleProps,
  TypographyType,
} from "#content/components/Typography/types";

export function Typography(props: TypographyProps) {
  const { className, classNames, styles, style, children, ...rootProps } =
    props;

  return (
    <div
      {...rootProps}
      className={cx("willa-typography", className, classNames?.root)}
      style={{ ...styles?.root, ...style }}
    >
      {children}
    </div>
  );
}

export function TypographyText(props: TypographyTextProps) {
  const { children, className, classNames, styles, style, ...textProps } =
    props;

  return (
    <TypographyContent
      {...textProps}
      className={className}
      classNames={classNames}
      children={children}
      kind="text"
      rootProps={textProps}
      style={style}
      styles={styles}
    />
  );
}

export function TypographyParagraph(props: TypographyParagraphProps) {
  const { children, className, classNames, styles, style, ...paragraphProps } =
    props;

  return (
    <TypographyContent
      {...paragraphProps}
      className={className}
      classNames={classNames}
      children={children}
      kind="paragraph"
      rootProps={paragraphProps}
      style={style}
      styles={styles}
    />
  );
}

export function TypographyTitle(props: TypographyTitleProps) {
  const {
    level = 1,
    children,
    className,
    classNames,
    styles,
    style,
    ...titleProps
  } = props;

  return (
    <TypographyContent
      {...titleProps}
      className={className}
      classNames={classNames}
      children={children}
      kind="title"
      level={level}
      rootProps={titleProps}
      style={style}
      styles={styles}
    />
  );
}

export function TypographyLink(props: TypographyLinkProps) {
  const {
    children,
    href,
    target,
    rel,
    className,
    classNames,
    styles,
    style,
    ...linkProps
  } = props;
  const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;

  return (
    <TypographyContent
      {...linkProps}
      className={className}
      classNames={classNames}
      children={children}
      href={href}
      kind="link"
      rel={resolvedRel}
      rootProps={linkProps}
      target={target}
      style={style}
      styles={styles}
    />
  );
}

export namespace Typography {
  export const Text = TypographyText;
  export const Paragraph = TypographyParagraph;
  export const Title = TypographyTitle;
  export const Link = TypographyLink;
}
