import {
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  CheckCircledIcon,
  Cross2Icon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type AlertType = "success" | "info" | "warning" | "error";
export type AlertVariant = "outlined" | "filled";
export type AlertSlot =
  | "root"
  | "icon"
  | "content"
  | "title"
  | "description"
  | "actions"
  | "close";

export type AlertClosableOptions = {
  closeIcon?: ReactNode;
  closeLabel?: string;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  afterClose?: () => void;
};

export type AlertProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | "title"
> & {
  type?: AlertType;
  variant?: AlertVariant;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  banner?: boolean;
  showIcon?: boolean;
  icon?: ReactNode;
  closable?: boolean | AlertClosableOptions;
  classes?: Partial<Record<AlertSlot, string>>;
  styles?: Partial<Record<AlertSlot, CSSProperties>>;
};

const defaultIconMap: Record<AlertType, ReactNode> = {
  success: <CheckCircledIcon />,
  info: <InfoCircledIcon />,
  warning: <ExclamationTriangleIcon />,
  error: <CrossCircledIcon />,
};

const getClosableConfig = (closable: AlertProps["closable"]) => {
  if (!closable) return null;

  return typeof closable === "boolean" ? {} : closable;
};

const getDefaultRole = (type: AlertType) => {
  return type === "warning" || type === "error" ? "alert" : "status";
};

export function Alert(props: AlertProps) {
  const {
    type: typeProp,
    variant = "outlined",
    title,
    description,
    action,
    banner = false,
    showIcon,
    icon,
    closable = false,
    classes,
    styles,
    className,
    style,
    role,
    "aria-live": ariaLive,
    ...rootProps
  } = props;
  const [visible, setVisible] = useState(true);
  const type = typeProp ?? (banner ? "warning" : "info");
  const resolvedShowIcon = showIcon ?? banner;
  const hasDescription = Boolean(description);
  const resolvedRole = role ?? getDefaultRole(type);
  const resolvedAriaLive =
    ariaLive ?? (resolvedRole === "alert" ? "assertive" : "polite");
  const closableConfig = getClosableConfig(closable);
  const closeLabel = closableConfig?.closeLabel ?? "关闭提示";
  const closeIcon = closableConfig?.closeIcon ?? <Cross2Icon />;

  if (!visible) return null;

  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    closableConfig?.onClose?.(event);

    if (event.defaultPrevented) return;

    setVisible(false);
    closableConfig?.afterClose?.();
  };

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-alert",
        `willa-alert--${type}`,
        `willa-alert--${variant}`,
        banner && "willa-alert--banner",
        hasDescription && "willa-alert--with-description",
        resolvedShowIcon && "willa-alert--with-icon",
        classes?.root,
        className,
      )}
      role={resolvedRole}
      aria-live={resolvedAriaLive}
      style={{ ...styles?.root, ...style }}
    >
      {resolvedShowIcon ? (
        <span
          className={classNames("willa-alert-icon", classes?.icon)}
          style={styles?.icon}
        >
          {icon ?? defaultIconMap[type]}
        </span>
      ) : null}
      <div
        className={classNames("willa-alert-content", classes?.content)}
        style={styles?.content}
      >
        {title ? (
          <div
            className={classNames("willa-alert-title", classes?.title)}
            style={styles?.title}
          >
            {title}
          </div>
        ) : null}
        {description ? (
          <div
            className={classNames(
              "willa-alert-description",
              classes?.description,
            )}
            style={styles?.description}
          >
            {description}
          </div>
        ) : null}
      </div>
      {action ? (
        <div
          className={classNames("willa-alert-actions", classes?.actions)}
          style={styles?.actions}
        >
          {action}
        </div>
      ) : null}
      {closableConfig ? (
        <button
          className={classNames("willa-alert-close", classes?.close)}
          type="button"
          aria-label={closeLabel}
          style={styles?.close}
          onClick={handleClose}
        >
          {closeIcon}
        </button>
      ) : null}
    </div>
  );
}

Alert.displayName = "Alert";
