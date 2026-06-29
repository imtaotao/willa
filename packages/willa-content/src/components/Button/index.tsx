import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";
import classNames from "classnames";
import {
  flattenText,
  useCopyToClipboard,
  type WillaRenderLink,
  type WillaRenderLinkProps,
} from "@willa-ui/shared";
import {
  handleActionClick,
  resolveActionAriaPressed,
} from "#content/internal/buttonActionUtils";

export type ButtonVariant = "solid" | "soft" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: ReactNode;
  pressed?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  copyText?: boolean | string;
  copiedDuration?: number;
  onCopyText?: (text: string) => void;
};

type ButtonAnchorProps = ButtonBaseProps & {
  href: string;
  renderLink?: WillaRenderLink;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | "href" | "renderLink"
  >;

type ButtonNativeProps = ButtonBaseProps & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps | "type"
  >;

export type ButtonProps = ButtonAnchorProps | ButtonNativeProps;

export function Button(props: ButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  if (isButtonAnchorProps(props)) {
    const {
      variant = "solid",
      size = "md",
      icon,
      trailingIcon,
      className,
      children,
      disabled = false,
      loading = false,
      loadingText,
      pressed,
      backgroundColor,
      hoverBackgroundColor,
      textColor,
      hoverTextColor,
      copyText,
      copiedDuration = 300,
      onCopyText,
      onClick,
      href,
      renderLink,
      target,
      rel,
      style,
      ...anchorProps
    } = props;

    const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;
    const effectiveDisabled = disabled || loading;
    const resolvedCopyText = resolveCopyText(copyText, children);
    const buttonStyle = getButtonStyle({
      backgroundColor,
      hoverBackgroundColor,
      textColor,
      hoverTextColor,
      style,
    });

    const linkProps = {
      ...anchorProps,
      className: getButtonClassName({
        variant,
        size,
        copied,
        loading,
        pressed,
        className,
      }),
      style: buttonStyle,
      href,
      target,
      rel: resolvedRel,
      "aria-busy": loading || undefined,
      "aria-disabled": effectiveDisabled || undefined,
      "aria-pressed": resolveActionAriaPressed(
        anchorProps["aria-pressed"],
        pressed,
      ),
      tabIndex: effectiveDisabled ? -1 : anchorProps.tabIndex,
      onClick: (event) => {
        handleActionClick(event, {
          copyText: resolvedCopyText,
          copiedDuration,
          disabled: effectiveDisabled,
          onClick,
          onCopyText,
          preventDefaultForCopy: true,
          copy,
        });
      },
      children: renderButtonContent({
        icon,
        trailingIcon,
        children,
        loading,
        loadingText,
      }),
    } satisfies WillaRenderLinkProps;

    if (renderLink && !effectiveDisabled) {
      return renderLink(linkProps);
    }

    return (
      <a
        {...linkProps}
        className={getButtonClassName({
          variant,
          size,
          copied,
          loading,
          pressed,
          className,
        })}
        href={effectiveDisabled ? undefined : href}
      />
    );
  }

  const {
    variant = "solid",
    size = "md",
    icon,
    trailingIcon,
    className,
    children,
    disabled,
    loading = false,
    loadingText,
    pressed,
    backgroundColor,
    hoverBackgroundColor,
    textColor,
    hoverTextColor,
    copyText,
    copiedDuration = 300,
    onCopyText,
    onClick,
    style,
    type = "button",
    ...buttonProps
  } = props;
  const effectiveDisabled = disabled || loading;
  const resolvedCopyText = resolveCopyText(copyText, children);
  const buttonStyle = getButtonStyle({
    backgroundColor,
    hoverBackgroundColor,
    textColor,
    hoverTextColor,
    style,
  });

  return (
    <button
      {...buttonProps}
      className={getButtonClassName({
        variant,
        size,
        copied,
        loading,
        pressed,
        className,
      })}
      style={buttonStyle}
      aria-busy={loading || undefined}
      aria-pressed={resolveActionAriaPressed(
        buttonProps["aria-pressed"],
        pressed,
      )}
      disabled={effectiveDisabled}
      type={type}
      onClick={(event) => {
        handleActionClick(event, {
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
      {renderButtonContent({
        icon,
        trailingIcon,
        children,
        loading,
        loadingText,
      })}
    </button>
  );
}

const getButtonClassName = (options: {
  variant: ButtonVariant;
  size: ButtonSize;
  copied: boolean;
  loading: boolean;
  pressed?: boolean;
  className?: string;
}) => {
  return classNames(
    "willa-button",
    `willa-button--${options.variant}`,
    `willa-button--${options.size}`,
    options.copied && "willa-button--copied",
    options.loading && "willa-button--loading",
    options.pressed && "willa-button--pressed",
    options.className,
  );
};

type ButtonStyle = CSSProperties & {
  "--willa-button-custom-bg"?: string;
  "--willa-button-custom-bg-hover"?: string;
  "--willa-button-custom-text"?: string;
  "--willa-button-custom-text-hover"?: string;
};

const getButtonStyle = (options: {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  style?: CSSProperties;
}) => {
  if (
    !options.backgroundColor &&
    !options.hoverBackgroundColor &&
    !options.textColor &&
    !options.hoverTextColor
  ) {
    return options.style;
  }

  const style: ButtonStyle = { ...options.style };

  if (options.backgroundColor) {
    style["--willa-button-custom-bg"] = options.backgroundColor;
    style["--willa-button-custom-bg-hover"] =
      options.hoverBackgroundColor ?? options.backgroundColor;
  } else if (options.hoverBackgroundColor) {
    style["--willa-button-custom-bg-hover"] = options.hoverBackgroundColor;
  }

  if (options.textColor) {
    style["--willa-button-custom-text"] = options.textColor;
    style["--willa-button-custom-text-hover"] =
      options.hoverTextColor ?? options.textColor;
  } else if (options.hoverTextColor) {
    style["--willa-button-custom-text-hover"] = options.hoverTextColor;
  }

  return style;
};

const isButtonAnchorProps = (
  props: ButtonProps,
): props is ButtonAnchorProps => {
  return typeof props.href === "string";
};

const resolveCopyText = (
  copyText: boolean | string | undefined,
  children: ReactNode,
) => {
  if (copyText === true) return flattenText(children).trim();
  if (typeof copyText === "string") return copyText;
  return "";
};

const renderButtonContent = (options: {
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  loading: boolean;
  loadingText?: ReactNode;
}) => {
  const children =
    options.loading && options.loadingText !== undefined
      ? options.loadingText
      : options.children;

  return (
    <>
      {options.loading ? (
        <span
          className="willa-button-spinner"
          aria-hidden="true"
          role="presentation"
        />
      ) : options.icon ? (
        <span className="willa-button-icon" aria-hidden="true">
          {options.icon}
        </span>
      ) : null}
      {children ? <span className="willa-button-label">{children}</span> : null}
      {options.trailingIcon ? (
        <span className="willa-button-icon" aria-hidden="true">
          {options.trailingIcon}
        </span>
      ) : null}
    </>
  );
};

Button.displayName = "Button";
