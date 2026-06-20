import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { useCopyToClipboard } from "@willa-ui/shared";

export type IconButtonVariant = "solid" | "soft" | "outline" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonShape = "square" | "circle";

type IconButtonBaseProps = {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  icon: ReactNode;
  ariaLabel: string;
  loadingLabel?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  pressed?: boolean;
  backgroundColor?: string;
  textColor?: string;
  copyText?: boolean | string;
  copiedDuration?: number;
  onCopyText?: (text: string) => void;
};

type IconButtonAnchorProps = IconButtonBaseProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof IconButtonBaseProps | "href" | "aria-label" | "children"
  >;

type IconButtonNativeProps = IconButtonBaseProps & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof IconButtonBaseProps | "type" | "aria-label" | "children"
  >;

export type IconButtonProps = IconButtonAnchorProps | IconButtonNativeProps;

export function IconButton(props: IconButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  if (isIconButtonAnchorProps(props)) {
    const {
      variant = "soft",
      size = "md",
      shape = "square",
      icon,
      ariaLabel,
      loadingLabel,
      className,
      disabled = false,
      loading = false,
      pressed,
      backgroundColor,
      textColor,
      copyText,
      copiedDuration = 300,
      onCopyText,
      onClick,
      href,
      target,
      rel,
      style,
      ...anchorProps
    } = props;

    const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;
    const effectiveDisabled = disabled || loading;
    const resolvedCopyText = resolveIconButtonCopyText(copyText, ariaLabel);
    const buttonStyle = getIconButtonStyle({
      backgroundColor,
      textColor,
      style,
    });

    return (
      <a
        {...anchorProps}
        className={getIconButtonClassName({
          variant,
          size,
          shape,
          copied,
          loading,
          pressed,
          className,
        })}
        style={buttonStyle}
        href={effectiveDisabled ? undefined : href}
        target={target}
        rel={resolvedRel}
        aria-label={loading && loadingLabel ? loadingLabel : ariaLabel}
        aria-busy={loading || undefined}
        aria-disabled={effectiveDisabled || undefined}
        aria-pressed={resolveAriaPressed(anchorProps["aria-pressed"], pressed)}
        tabIndex={effectiveDisabled ? -1 : anchorProps.tabIndex}
        onClick={(event) => {
          handleIconButtonClick(event, {
            copyText: resolvedCopyText,
            copiedDuration,
            disabled: effectiveDisabled,
            onClick,
            onCopyText,
            preventDefaultForCopy: true,
            copy,
          });
        }}
      >
        {renderIconButtonContent({ icon, loading })}
      </a>
    );
  }

  const {
    variant = "soft",
    size = "md",
    shape = "square",
    icon,
    ariaLabel,
    loadingLabel,
    className,
    disabled,
    loading = false,
    pressed,
    backgroundColor,
    textColor,
    copyText,
    copiedDuration = 300,
    onCopyText,
    onClick,
    style,
    type = "button",
    ...buttonProps
  } = props;
  const effectiveDisabled = disabled || loading;
  const resolvedCopyText = resolveIconButtonCopyText(copyText, ariaLabel);
  const buttonStyle = getIconButtonStyle({ backgroundColor, textColor, style });

  return (
    <button
      {...buttonProps}
      className={getIconButtonClassName({
        variant,
        size,
        shape,
        copied,
        loading,
        pressed,
        className,
      })}
      style={buttonStyle}
      aria-label={loading && loadingLabel ? loadingLabel : ariaLabel}
      aria-busy={loading || undefined}
      aria-pressed={resolveAriaPressed(buttonProps["aria-pressed"], pressed)}
      disabled={effectiveDisabled}
      type={type}
      onClick={(event) => {
        handleIconButtonClick(event, {
          copyText: resolvedCopyText,
          copiedDuration,
          disabled: effectiveDisabled,
          onClick,
          onCopyText,
          preventDefaultForCopy: false,
          copy,
        });
      }}
    >
      {renderIconButtonContent({ icon, loading })}
    </button>
  );
}

const getIconButtonClassName = (options: {
  variant: IconButtonVariant;
  size: IconButtonSize;
  shape: IconButtonShape;
  copied: boolean;
  loading: boolean;
  pressed?: boolean;
  className?: string;
}) => {
  return classNames(
    "willa-icon-button",
    `willa-icon-button--${options.variant}`,
    `willa-icon-button--${options.size}`,
    `willa-icon-button--${options.shape}`,
    options.copied && "willa-icon-button--copied",
    options.loading && "willa-icon-button--loading",
    options.pressed && "willa-icon-button--pressed",
    options.className,
  );
};

const resolveAriaPressed = (
  ariaPressed: AnchorHTMLAttributes<HTMLAnchorElement>["aria-pressed"],
  pressed?: boolean,
) => {
  return ariaPressed ?? (typeof pressed === "boolean" ? pressed : undefined);
};

type IconButtonStyle = CSSProperties & {
  "--willa-icon-button-custom-bg"?: string;
  "--willa-icon-button-custom-text"?: string;
};

const getIconButtonStyle = (options: {
  backgroundColor?: string;
  textColor?: string;
  style?: CSSProperties;
}) => {
  if (!options.backgroundColor && !options.textColor) return options.style;

  const style: IconButtonStyle = { ...options.style };

  if (options.backgroundColor) {
    style["--willa-icon-button-custom-bg"] = options.backgroundColor;
  }

  if (options.textColor) {
    style["--willa-icon-button-custom-text"] = options.textColor;
  }

  return style;
};

const isIconButtonAnchorProps = (
  props: IconButtonProps,
): props is IconButtonAnchorProps => {
  return typeof props.href === "string";
};

const resolveIconButtonCopyText = (
  copyText: boolean | string | undefined,
  ariaLabel: string,
) => {
  if (copyText === true) return ariaLabel.trim();
  if (typeof copyText === "string") return copyText;
  return "";
};

const handleIconButtonClick = async <Element extends HTMLElement>(
  event: MouseEvent<Element>,
  options: {
    copyText?: string;
    copiedDuration: number;
    disabled?: boolean;
    onClick?: (event: MouseEvent<Element>) => void;
    onCopyText?: (text: string) => void;
    preventDefaultForCopy: boolean;
    copy: (
      text: string,
      options?: { resetDuration?: number; onCopy?: (text: string) => void },
    ) => Promise<boolean>;
  },
) => {
  if (options.disabled) {
    event.preventDefault();
    return;
  }

  options.onClick?.(event);

  if (event.defaultPrevented || !options.copyText) {
    return;
  }

  if (options.preventDefaultForCopy) {
    event.preventDefault();
  }

  await options.copy(options.copyText, {
    resetDuration: options.copiedDuration,
    onCopy: options.onCopyText,
  });
};

const renderIconButtonContent = (options: {
  icon: ReactNode;
  loading: boolean;
}) => {
  return options.loading ? (
    <span
      className="willa-icon-button-spinner"
      aria-hidden="true"
      role="presentation"
    />
  ) : (
    <span className="willa-icon-button-icon" aria-hidden="true">
      {options.icon}
    </span>
  );
};

IconButton.displayName = "IconButton";
