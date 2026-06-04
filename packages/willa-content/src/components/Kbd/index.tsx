import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

export type KbdSize = "sm" | "md";
export type KbdVariant = "surface" | "outline";

export type KbdShortcutSeparator = "plus" | "none";

export type KbdProps = {
  size?: KbdSize;
  variant?: KbdVariant;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export type KbdShortcutProps = {
  keys: Array<ReactNode>;
  size?: KbdSize;
  variant?: KbdVariant;
  separator?: KbdShortcutSeparator;
  ariaLabel?: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function Kbd(props: KbdProps) {
  const {
    size = "md",
    variant = "surface",
    className,
    children,
    ...kbdProps
  } = props;

  return (
    <kbd
      {...kbdProps}
      className={classNames(
        "willa-kbd",
        `willa-kbd--${size}`,
        `willa-kbd--${variant}`,
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export function KbdShortcut(props: KbdShortcutProps) {
  const {
    keys,
    size = "md",
    variant = "surface",
    separator = "plus",
    ariaLabel,
    className,
    ...shortcutProps
  } = props;
  const resolvedAriaLabel =
    ariaLabel ??
    keys
      .map((key) =>
        typeof key === "string" || typeof key === "number" ? key : "",
      )
      .filter(Boolean)
      .join(" + ");

  return (
    <span
      {...shortcutProps}
      className={classNames(
        "willa-kbd-shortcut",
        separator === "none" && "willa-kbd-shortcut--no-separator",
        className,
      )}
      aria-label={resolvedAriaLabel || undefined}
    >
      {keys.map((key, index) => (
        <Fragment key={getKbdShortcutKey(key, index)}>
          {index > 0 && separator === "plus" ? (
            <span className="willa-kbd-shortcut-separator" aria-hidden="true">
              +
            </span>
          ) : null}
          <Kbd size={size} variant={variant}>
            {key}
          </Kbd>
        </Fragment>
      ))}
    </span>
  );
}

const getKbdShortcutKey = (key: ReactNode, index: number) => {
  if (typeof key === "string" || typeof key === "number") {
    return `${key}-${index}`;
  }
  return String(index);
};
