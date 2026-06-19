import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import {
  CheckIcon,
  ClipboardCopyIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { useCopyToClipboard } from "@willa-ui/shared";

import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "#content/components/Button";

export type CopyButtonVariant = ButtonVariant;
export type CopyButtonSize = ButtonSize;

type CopyButtonBaseProps = {
  text: string;
  variant?: CopyButtonVariant;
  size?: CopyButtonSize;
  icon?: ReactNode;
  copiedIcon?: ReactNode;
  failedIcon?: ReactNode;
  copiedLabel?: ReactNode;
  failedLabel?: ReactNode;
  copiedDuration?: number;
  onCopyText?: (text: string) => void;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export type CopyButtonProps = CopyButtonBaseProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof CopyButtonBaseProps | "children"
  >;

export function CopyButton(props: CopyButtonProps) {
  const {
    text,
    variant = "soft",
    size = "md",
    icon = <ClipboardCopyIcon />,
    copiedIcon = <CheckIcon />,
    failedIcon = <CrossCircledIcon />,
    copiedLabel = "已复制",
    failedLabel = "复制失败",
    copiedDuration = 1200,
    onCopyText,
    backgroundColor,
    textColor,
    className,
    children = "复制",
    disabled,
    onClick,
    type = "button",
    style,
    ...buttonProps
  } = props;
  const { status, copy } = useCopyToClipboard({
    resetDuration: copiedDuration,
    onCopy: onCopyText,
  });
  const statusLabel = resolveCopyButtonStatusLabel({
    status,
    copiedLabel,
    failedLabel,
  });

  return (
    <>
      <Button
        {...buttonProps}
        className={classNames(
          "willa-copy-button",
          `willa-copy-button--${status}`,
          className,
        )}
        style={style}
        variant={variant}
        size={size}
        icon={resolveCopyButtonIcon({ status, icon, copiedIcon, failedIcon })}
        backgroundColor={backgroundColor}
        textColor={textColor}
        disabled={disabled}
        type={type}
        onClick={(event) => {
          handleCopyButtonClick(event, {
            text,
            disabled,
            onClick,
            copy,
          });
        }}
      >
        {resolveCopyButtonLabel({
          status,
          children,
          copiedLabel,
          failedLabel,
        })}
      </Button>
      <span
        className="willa-copy-button-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusLabel}
      </span>
    </>
  );
}

const resolveCopyButtonIcon = (options: {
  status: "idle" | "copied" | "failed";
  icon?: ReactNode;
  copiedIcon?: ReactNode;
  failedIcon?: ReactNode;
}) => {
  if (options.status === "copied") return options.copiedIcon;
  if (options.status === "failed") return options.failedIcon;
  return options.icon;
};

const resolveCopyButtonLabel = (options: {
  status: "idle" | "copied" | "failed";
  children?: ReactNode;
  copiedLabel?: ReactNode;
  failedLabel?: ReactNode;
}) => {
  if (options.status === "copied") return options.copiedLabel;
  if (options.status === "failed") return options.failedLabel;
  return options.children;
};

const resolveCopyButtonStatusLabel = (options: {
  status: "idle" | "copied" | "failed";
  copiedLabel?: ReactNode;
  failedLabel?: ReactNode;
}) => {
  if (options.status === "copied") return options.copiedLabel;
  if (options.status === "failed") return options.failedLabel;
  return null;
};

const handleCopyButtonClick = async (
  event: MouseEvent<HTMLButtonElement>,
  options: {
    text: string;
    disabled?: boolean;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    copy: (text: string) => Promise<boolean>;
  },
) => {
  if (options.disabled) {
    event.preventDefault();
    return;
  }

  options.onClick?.(event);

  if (event.defaultPrevented) {
    return;
  }

  await options.copy(options.text);
};

CopyButton.displayName = "CopyButton";
