import classNames from "classnames";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

export type TagVariant = "soft" | "outline" | "solid";
export type TagTone = "neutral" | "info" | "success" | "warning" | "danger";
export type TagSize = "sm" | "md";
export type TagShape = "rounded" | "pill";

export type TagCloseOptions = {
  ariaLabel?: string;
  disabled?: boolean;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type TagProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
  variant?: TagVariant;
  tone?: TagTone;
  size?: TagSize;
  shape?: TagShape;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  selected?: boolean;
  close?: boolean | TagCloseOptions;
  children?: ReactNode;
};

export function Tag(props: TagProps) {
  const {
    variant = "soft",
    tone = "neutral",
    size = "md",
    shape = "rounded",
    icon,
    trailingIcon,
    selected = false,
    close = false,
    children,
    className,
    onClick,
    ...rootProps
  } = props;
  const closeOptions = typeof close === "object" ? close : null;
  const isClosable = Boolean(close);
  const closeAriaLabel = closeOptions?.ariaLabel ?? "移除标签";

  const handleCloseClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    closeOptions?.onClose?.(event);
  };

  return (
    <span
      {...rootProps}
      className={classNames(
        "willa-tag",
        `willa-tag--${variant}`,
        `willa-tag--${tone}`,
        `willa-tag--${size}`,
        `willa-tag--${shape}`,
        selected && "willa-tag--selected",
        isClosable && "willa-tag--closable",
        onClick && "willa-tag--interactive",
        className,
      )}
      data-selected={selected ? "" : null}
      onClick={onClick}
    >
      {icon ? <span className="willa-tag-icon">{icon}</span> : null}
      {children ? <span className="willa-tag-label">{children}</span> : null}
      {trailingIcon ? (
        <span className="willa-tag-icon willa-tag-icon--trailing">
          {trailingIcon}
        </span>
      ) : null}
      {isClosable ? (
        <button
          type="button"
          className="willa-tag-close"
          aria-label={closeAriaLabel}
          disabled={closeOptions?.disabled}
          onClick={handleCloseClick}
        >
          <Cross2Icon />
        </button>
      ) : null}
    </span>
  );
}

Tag.displayName = "Tag";
