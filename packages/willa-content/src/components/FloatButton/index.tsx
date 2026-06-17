import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { ArrowUpIcon, PlusIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { formatCssSize } from "@willa-ui/shared";

import { Tooltip } from "#content/components/Tooltip";

export type FloatButtonPlacement =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";
export type FloatButtonVariant = "default" | "primary";
export type FloatButtonShape = "circle" | "square";
export type FloatButtonSize = "md" | "lg";
export type FloatButtonGroupDirection = "up" | "down" | "left" | "right";
export type FloatButtonScrollTarget =
  | Window
  | HTMLElement
  | null
  | (() => Window | HTMLElement | null);

type FloatButtonBaseProps = {
  icon?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  tooltip?: ReactNode;
  badge?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  variant?: FloatButtonVariant;
  shape?: FloatButtonShape;
  size?: FloatButtonSize;
  placement?: FloatButtonPlacement;
  fixed?: boolean;
  offset?: readonly [number | string, number | string];
  zIndex?: number;
  ariaLabel?: string;
  backToTop?: boolean;
  visibilityHeight?: number;
  target?: FloatButtonScrollTarget;
  scrollBehavior?: ScrollBehavior;
  className?: string;
  contentClassName?: string;
};

type FloatButtonAnchorProps = FloatButtonBaseProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof FloatButtonBaseProps | "href" | "children"
  >;

type FloatButtonNativeProps = FloatButtonBaseProps & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof FloatButtonBaseProps | "type" | "children"
  >;

export type FloatButtonProps = FloatButtonAnchorProps | FloatButtonNativeProps;

export type FloatButtonGroupProps = {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerIcon?: ReactNode;
  triggerTooltip?: ReactNode;
  triggerAriaLabel?: string;
  placement?: FloatButtonPlacement;
  direction?: FloatButtonGroupDirection;
  fixed?: boolean;
  offset?: readonly [number | string, number | string];
  zIndex?: number;
  className?: string;
  contentClassName?: string;
};

const defaultOffset = [24, 24] as const;
const defaultVisibilityHeight = 320;

export function FloatButton(props: FloatButtonProps) {
  const {
    icon,
    label,
    description,
    tooltip,
    badge,
    backgroundColor,
    textColor,
    variant = "default",
    shape,
    size = "md",
    placement = "bottom-right",
    fixed = true,
    offset = defaultOffset,
    zIndex,
    ariaLabel,
    backToTop = false,
    visibilityHeight = defaultVisibilityHeight,
    target,
    scrollBehavior = "smooth",
    className,
    contentClassName,
  } = props;
  const [visible, setVisible] = useState(!backToTop);
  const resolvedShape = shape ?? (label || description ? "square" : "circle");
  const resolvedIcon = icon ?? (backToTop ? <ArrowUpIcon /> : null);
  const resolvedAriaLabel = ariaLabel ?? resolveFloatButtonAriaLabel(label);
  const rootStyle = useMemo(
    () =>
      getFloatButtonStyle({
        fixed,
        placement,
        offset,
        zIndex,
        backgroundColor,
        textColor,
      }),
    [backgroundColor, fixed, offset, placement, textColor, zIndex],
  );

  useEffect(() => {
    if (!backToTop || typeof window === "undefined") return;

    const scrollTarget = resolveScrollTarget(target);
    if (!scrollTarget) return;

    const updateVisible = () => {
      setVisible(getScrollTop(scrollTarget) >= visibilityHeight);
    };

    updateVisible();
    scrollTarget.addEventListener("scroll", updateVisible, { passive: true });

    return () => {
      scrollTarget.removeEventListener("scroll", updateVisible);
    };
  }, [backToTop, target, visibilityHeight]);

  const handleBackToTop = useCallback(() => {
    if (!backToTop || typeof window === "undefined") return;

    scrollToTop(resolveScrollTarget(target), scrollBehavior);
  }, [backToTop, scrollBehavior, target]);

  const buttonNode = isFloatButtonAnchorProps(props) ? (
    <FloatButtonAnchor
      props={props}
      className={getFloatButtonClassName({
        variant,
        shape: resolvedShape,
        size,
        fixed,
        visible,
        className,
      })}
      style={rootStyle}
      ariaLabel={resolvedAriaLabel}
      icon={resolvedIcon}
      label={label}
      description={description}
      badge={badge}
      contentClassName={contentClassName}
    />
  ) : (
    <FloatButtonNative
      props={props}
      className={getFloatButtonClassName({
        variant,
        shape: resolvedShape,
        size,
        fixed,
        visible,
        className,
      })}
      style={rootStyle}
      ariaLabel={resolvedAriaLabel}
      icon={resolvedIcon}
      label={label}
      description={description}
      badge={badge}
      contentClassName={contentClassName}
      onBackToTop={handleBackToTop}
    />
  );

  if (!tooltip) return buttonNode;
  return <Tooltip content={tooltip}>{buttonNode as ReactElement<any>}</Tooltip>;
}

export function FloatButtonGroup(props: FloatButtonGroupProps) {
  const {
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    triggerIcon = <PlusIcon />,
    triggerTooltip,
    triggerAriaLabel = "打开悬浮操作",
    placement = "bottom-right",
    direction = "up",
    fixed = true,
    offset = defaultOffset,
    zIndex,
    className,
    contentClassName,
  } = props;
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = open ?? uncontrolledOpen;
  const groupRef = useRef<HTMLDivElement | null>(null);

  const setGroupOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const handleDocumentPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (groupRef.current?.contains(target)) return;
      setGroupOpen(false);
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
    };
  }, [isOpen, setGroupOpen]);

  return (
    <div
      ref={groupRef}
      className={classNames(
        "willa-float-button-group",
        `willa-float-button-group--${placement}`,
        `willa-float-button-group--${direction}`,
        fixed && "willa-float-button-group--fixed",
        !fixed && "willa-float-button-group--anchored",
        isOpen && "willa-float-button-group--open",
        className,
      )}
      style={getFloatButtonStyle({
        fixed,
        placement,
        offset,
        zIndex,
      })}
    >
      <div
        className={classNames(
          "willa-float-button-group__items",
          contentClassName,
        )}
      >
        {children}
      </div>
      <FloatButton
        icon={triggerIcon}
        ariaLabel={triggerAriaLabel}
        tooltip={triggerTooltip}
        variant="primary"
        fixed={false}
        className="willa-float-button-group__trigger"
        onClick={() => setGroupOpen(!isOpen)}
      />
    </div>
  );
}

const FloatButtonContent = (props: {
  icon?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  className?: string;
}) => {
  return (
    <>
      {props.badge ? (
        <span className="willa-float-button__badge">{props.badge}</span>
      ) : null}
      <span
        className={classNames("willa-float-button__content", props.className)}
      >
        {props.icon ? (
          <span className="willa-float-button__icon" aria-hidden="true">
            {props.icon}
          </span>
        ) : null}
        {props.label || props.description ? (
          <span className="willa-float-button__copy">
            {props.label ? (
              <span className="willa-float-button__label">{props.label}</span>
            ) : null}
            {props.description ? (
              <span className="willa-float-button__description">
                {props.description}
              </span>
            ) : null}
          </span>
        ) : null}
      </span>
    </>
  );
};

const FloatButtonAnchor = (options: {
  props: FloatButtonAnchorProps;
  className: string;
  style: CSSProperties;
  ariaLabel: string;
  icon?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  contentClassName?: string;
}) => {
  const {
    icon: _icon,
    label: _label,
    description: _description,
    tooltip: _tooltip,
    badge: _badge,
    variant: _variant = "default",
    shape: _shape,
    size: _size = "md",
    placement: _placement = "bottom-right",
    fixed: _fixed = true,
    offset: _offset = defaultOffset,
    zIndex: _zIndex,
    ariaLabel: _ariaLabel,
    backToTop: _backToTop = false,
    visibilityHeight: _visibilityHeight = defaultVisibilityHeight,
    target: _target,
    scrollBehavior: _scrollBehavior = "smooth",
    className: _className,
    contentClassName: _contentClassName,
    href,
    onClick,
    ...anchorProps
  } = options.props;

  return (
    <a
      {...anchorProps}
      href={href}
      className={options.className}
      style={options.style}
      aria-label={options.ariaLabel}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      <FloatButtonContent
        icon={options.icon}
        label={options.label}
        description={options.description}
        badge={options.badge}
        className={options.contentClassName}
      />
    </a>
  );
};

const FloatButtonNative = (options: {
  props: FloatButtonNativeProps;
  className: string;
  style: CSSProperties;
  ariaLabel: string;
  icon?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  contentClassName?: string;
  onBackToTop: () => void;
}) => {
  const {
    icon: _icon,
    label: _label,
    description: _description,
    tooltip: _tooltip,
    badge: _badge,
    variant: _variant = "default",
    shape: _shape,
    size: _size = "md",
    placement: _placement = "bottom-right",
    fixed: _fixed = true,
    offset: _offset = defaultOffset,
    zIndex: _zIndex,
    ariaLabel: _ariaLabel,
    backToTop: _backToTop = false,
    visibilityHeight: _visibilityHeight = defaultVisibilityHeight,
    target: _target,
    scrollBehavior: _scrollBehavior = "smooth",
    className: _className,
    contentClassName: _contentClassName,
    type,
    onClick,
    ...buttonProps
  } = options.props;

  return (
    <button
      {...buttonProps}
      type={type ?? "button"}
      className={options.className}
      style={options.style}
      aria-label={options.ariaLabel}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          options.onBackToTop();
        }
      }}
    >
      <FloatButtonContent
        icon={options.icon}
        label={options.label}
        description={options.description}
        badge={options.badge}
        className={options.contentClassName}
      />
    </button>
  );
};

const getFloatButtonClassName = (options: {
  variant: FloatButtonVariant;
  shape: FloatButtonShape;
  size: FloatButtonSize;
  fixed: boolean;
  visible: boolean;
  className?: string;
}) => {
  return classNames(
    "willa-float-button",
    `willa-float-button--${options.variant}`,
    `willa-float-button--${options.shape}`,
    `willa-float-button--${options.size}`,
    options.fixed && "willa-float-button--fixed",
    !options.fixed && "willa-float-button--anchored",
    !options.visible && "willa-float-button--hidden",
    options.className,
  );
};

const getFloatButtonStyle = (options: {
  fixed: boolean;
  placement: FloatButtonPlacement;
  offset: readonly [number | string, number | string];
  zIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}) => {
  const [offsetX, offsetY] = options.offset;
  const style: CSSProperties & {
    "--willa-float-button-offset-x"?: string;
    "--willa-float-button-offset-y"?: string;
    "--willa-float-button-z-index"?: string;
    "--willa-float-button-custom-bg"?: string;
    "--willa-float-button-custom-bg-hover"?: string;
    "--willa-float-button-custom-text"?: string;
    "--willa-float-button-custom-muted"?: string;
    "--willa-float-button-description-opacity"?: string;
  } = {
    "--willa-float-button-offset-x": formatCssSize(offsetX),
    "--willa-float-button-offset-y": formatCssSize(offsetY),
  };

  if (options.backgroundColor) {
    style["--willa-float-button-custom-bg"] = options.backgroundColor;
    style["--willa-float-button-custom-bg-hover"] = options.backgroundColor;
  }

  if (options.textColor) {
    style["--willa-float-button-custom-text"] = options.textColor;
    style["--willa-float-button-custom-muted"] = options.textColor;
    style["--willa-float-button-description-opacity"] = "0.74";
  }

  if (options.zIndex !== undefined) {
    style["--willa-float-button-z-index"] = String(options.zIndex);
  }

  if (options.placement.includes("bottom")) {
    style.bottom = "var(--willa-float-button-offset-y)";
  } else {
    style.top = "var(--willa-float-button-offset-y)";
  }

  if (options.placement.includes("right")) {
    style.right = "var(--willa-float-button-offset-x)";
  } else {
    style.left = "var(--willa-float-button-offset-x)";
  }
  return style;
};

const resolveFloatButtonAriaLabel = (label?: ReactNode) => {
  return typeof label === "string" ? label : "悬浮操作按钮";
};

const isFloatButtonAnchorProps = (
  props: FloatButtonProps,
): props is FloatButtonAnchorProps => {
  return typeof props.href === "string";
};

const resolveScrollTarget = (target?: FloatButtonScrollTarget) => {
  if (typeof window === "undefined") return null;
  if (typeof target === "function") {
    return target() ?? window;
  }
  return target ?? window;
};

const getScrollTop = (target: Window | HTMLElement | null) => {
  if (!target || typeof window === "undefined") return 0;
  if ("scrollY" in target) {
    return window.scrollY || document.documentElement.scrollTop || 0;
  }
  return target.scrollTop;
};

const scrollToTop = (
  target: Window | HTMLElement | null,
  behavior: ScrollBehavior,
) => {
  if (!target || typeof window === "undefined") return;
  if (target === window) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  target.scrollTo({ top: 0, behavior });
};
