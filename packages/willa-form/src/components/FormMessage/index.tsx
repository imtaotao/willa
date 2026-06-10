import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type FormMessageTone = "info" | "success" | "warning" | "error";

export type FormMessageProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  tone?: FormMessageTone;
  icon?: ReactNode;
};

export function FormMessage(props: FormMessageProps) {
  const {
    children,
    tone = "info",
    icon,
    className,
    role,
    ...messageProps
  } = props;
  const resolvedRole = role ?? (tone === "error" ? "alert" : "status");
  const resolvedIcon = icon ?? defaultFormMessageIcons[tone];

  return (
    <div
      {...messageProps}
      className={classNames(
        "willa-form-message",
        `willa-form-message--${tone}`,
        className,
      )}
      role={resolvedRole}
    >
      {resolvedIcon ? (
        <span className="willa-form-message-icon" aria-hidden="true">
          {resolvedIcon}
        </span>
      ) : null}
      <span className="willa-form-message-content">{children}</span>
    </div>
  );
}

const defaultFormMessageIcons: Record<FormMessageTone, ReactNode> = {
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
  warning: <ExclamationTriangleIcon />,
  error: <CrossCircledIcon />,
};
