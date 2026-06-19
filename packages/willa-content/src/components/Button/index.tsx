import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { copyToClipboard, flattenText } from "@willa-ui/shared";

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
  backgroundColor?: string;
  textColor?: string;
  copyText?: boolean | string;
  copiedDuration?: number;
  onCopyText?: (text: string) => void;
};

type ButtonAnchorProps = ButtonBaseProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | "href"
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
  const [copied, setCopied] = useState(false);
  const resetCopiedTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (resetCopiedTimer.current !== undefined) {
        window.clearTimeout(resetCopiedTimer.current);
      }
    };
  }, []);

  const startCopiedFeedback = (duration: number) => {
    setCopied(true);

    if (resetCopiedTimer.current !== undefined) {
      window.clearTimeout(resetCopiedTimer.current);
    }

    resetCopiedTimer.current = window.setTimeout(() => {
      setCopied(false);
      resetCopiedTimer.current = undefined;
    }, duration);
  };

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
    const resolvedCopyText = resolveCopyText(copyText, children);
    const buttonStyle = getButtonStyle({
      backgroundColor,
      textColor,
      style,
    });

    return (
      <a
        {...anchorProps}
        className={getButtonClassName({
          variant,
          size,
          copied,
          loading,
          className,
        })}
        style={buttonStyle}
        href={effectiveDisabled ? undefined : href}
        target={target}
        rel={resolvedRel}
        aria-busy={loading || undefined}
        aria-disabled={effectiveDisabled || undefined}
        tabIndex={effectiveDisabled ? -1 : anchorProps.tabIndex}
        onClick={(event) => {
          handleButtonClick(event, {
            copyText: resolvedCopyText,
            copiedDuration,
            disabled: effectiveDisabled,
            onClick,
            onCopyText,
            preventDefaultForCopy: true,
            startCopiedFeedback,
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
      </a>
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
  const resolvedCopyText = resolveCopyText(copyText, children);
  const buttonStyle = getButtonStyle({ backgroundColor, textColor, style });

  return (
    <button
      {...buttonProps}
      className={getButtonClassName({
        variant,
        size,
        copied,
        loading,
        className,
      })}
      style={buttonStyle}
      aria-busy={loading || undefined}
      disabled={effectiveDisabled}
      type={type}
      onClick={(event) => {
        handleButtonClick(event, {
          copyText: resolvedCopyText,
          copiedDuration,
          disabled: effectiveDisabled,
          onClick,
          onCopyText,
          preventDefaultForCopy: false,
          startCopiedFeedback,
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
  className?: string;
}) => {
  return classNames(
    "willa-button",
    `willa-button--${options.variant}`,
    `willa-button--${options.size}`,
    options.copied && "willa-button--copied",
    options.loading && "willa-button--loading",
    options.className,
  );
};

type ButtonStyle = CSSProperties & {
  "--willa-button-custom-bg"?: string;
  "--willa-button-custom-text"?: string;
};

const getButtonStyle = (options: {
  backgroundColor?: string;
  textColor?: string;
  style?: CSSProperties;
}) => {
  if (!options.backgroundColor && !options.textColor) return options.style;

  const style: ButtonStyle = { ...options.style };

  if (options.backgroundColor) {
    style["--willa-button-custom-bg"] = options.backgroundColor;
  }

  if (options.textColor) {
    style["--willa-button-custom-text"] = options.textColor;
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

const handleButtonClick = async <Element extends HTMLElement>(
  event: MouseEvent<Element>,
  options: {
    copyText?: string;
    copiedDuration: number;
    disabled?: boolean;
    onClick?: (event: MouseEvent<Element>) => void;
    onCopyText?: (text: string) => void;
    preventDefaultForCopy: boolean;
    startCopiedFeedback: (duration: number) => void;
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

  const ok = await copyToClipboard(options.copyText);
  if (ok) {
    options.onCopyText?.(options.copyText);
    options.startCopiedFeedback(options.copiedDuration);
  }
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
