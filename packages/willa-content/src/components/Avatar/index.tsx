import {
  useEffect,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded" | "square";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
  hoverable?: boolean;
  hoverCard?: ReactNode;
  hoverCardClassName?: string;
  previewable?: boolean;
  previewSrc?: string;
  previewLabel?: string;
  closeLabel?: string;
  href?: string;
  target?: string;
  rel?: string;
  imageProps?: Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "children" | "className" | "src"
  >;
  backgroundColor?: string;
  textColor?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Avatar(props: AvatarProps) {
  const {
    src,
    alt,
    name,
    size = "md",
    shape = "circle",
    className,
    hoverable = false,
    hoverCard,
    hoverCardClassName,
    previewable = false,
    previewSrc,
    previewLabel = "预览头像",
    closeLabel = "关闭头像预览",
    href,
    target,
    rel,
    imageProps,
    backgroundColor,
    textColor,
    style,
    ...avatarProps
  } = props;
  const normalizedSrc = src?.trim() ?? "";
  const normalizedHref = href?.trim() ?? "";
  const [imageFailed, setImageFailed] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const normalizedPreviewSrc =
    previewSrc?.trim() || (imageFailed ? "" : normalizedSrc);

  useEffect(() => {
    setImageFailed(false);
  }, [normalizedSrc]);

  const showImage = Boolean(normalizedSrc) && !imageFailed;
  const resolvedLabel = alt?.trim() || name.trim();
  const explicitAriaLabel = avatarProps["aria-label"];
  const hasHoverCard =
    hoverCard !== undefined && hoverCard !== null && hoverCard !== false;
  const isPreviewButton = previewable;
  const isLink = Boolean(normalizedHref) && !isPreviewButton;
  const isInteractive = hoverable || hasHoverCard || isPreviewButton || isLink;
  const avatarStyle = getAvatarStyle({ backgroundColor, textColor, style });
  const avatarClassName = classNames(
    "willa-avatar",
    `willa-avatar--${size}`,
    `willa-avatar--${shape}`,
    isInteractive && "willa-avatar--interactive",
    className,
  );
  const rootAriaLabel =
    explicitAriaLabel ??
    (showImage || !resolvedLabel ? undefined : resolvedLabel);
  const content = renderAvatarContent({
    alt: resolvedLabel,
    imageProps,
    name,
    setImageFailed,
    showImage,
    src: normalizedSrc,
  });

  let avatarNode: ReactNode;
  let previewNode: ReactNode = null;

  if (isPreviewButton) {
    avatarNode = (
      <button
        {...avatarProps}
        className={avatarClassName}
        style={avatarStyle}
        type="button"
        aria-label={explicitAriaLabel ?? previewLabel}
        onClick={(event) => {
          handleAvatarClick(event, avatarProps.onClick, () => {
            setPreviewOpen(true);
          });
        }}
      >
        {content}
      </button>
    );
    previewNode = previewOpen ? (
      <AvatarPreview
        alt={resolvedLabel}
        closeLabel={closeLabel}
        initials={getAvatarInitials(name)}
        onClose={() => setPreviewOpen(false)}
        src={normalizedPreviewSrc}
      />
    ) : null;
  } else if (isLink) {
    const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;

    avatarNode = (
      <a
        {...avatarProps}
        className={avatarClassName}
        style={avatarStyle}
        href={normalizedHref}
        target={target}
        rel={resolvedRel}
        aria-label={rootAriaLabel}
      >
        {content}
      </a>
    );
  } else {
    avatarNode = (
      <span
        {...avatarProps}
        className={avatarClassName}
        style={avatarStyle}
        aria-label={rootAriaLabel}
      >
        {content}
      </span>
    );
  }

  return (
    <>
      {hasHoverCard ? (
        <span className="willa-avatar-hover-root">
          {avatarNode}
          <span
            className={classNames(
              "willa-avatar-hover-card",
              hoverCardClassName,
            )}
            role="tooltip"
          >
            {hoverCard}
          </span>
        </span>
      ) : (
        avatarNode
      )}
      {previewNode}
    </>
  );
}

type AvatarStyle = CSSProperties & {
  "--willa-avatar-custom-bg"?: string;
  "--willa-avatar-custom-text"?: string;
};

const getAvatarStyle = (options: {
  backgroundColor?: string;
  textColor?: string;
  style?: CSSProperties;
}) => {
  if (!options.backgroundColor && !options.textColor) return options.style;

  const style: AvatarStyle = { ...options.style };

  if (options.backgroundColor) {
    style["--willa-avatar-custom-bg"] = options.backgroundColor;
  }

  if (options.textColor) {
    style["--willa-avatar-custom-text"] = options.textColor;
  }

  return style;
};

const getAvatarInitials = (value: string | undefined) => {
  const words = value?.trim().split(/\s+/).filter(Boolean);

  if (!words?.length) return "?";

  return words
    .slice(-2)
    .map((word) => Array.from(word)[0])
    .join("")
    .toUpperCase();
};

const handleAvatarClick = (
  event: MouseEvent<HTMLElement>,
  onClick: HTMLAttributes<HTMLElement>["onClick"],
  action: () => void,
) => {
  onClick?.(event);

  if (!event.defaultPrevented) {
    action();
  }
};

const renderAvatarContent = (options: {
  alt: string;
  imageProps?: AvatarProps["imageProps"];
  name: string;
  setImageFailed: (failed: boolean) => void;
  showImage: boolean;
  src: string;
}) => {
  if (options.showImage) {
    return (
      <img
        {...options.imageProps}
        className="willa-avatar-image"
        src={options.src}
        alt={options.alt}
        onError={(event) => {
          options.imageProps?.onError?.(event);
          options.setImageFailed(true);
        }}
      />
    );
  }

  return (
    <span className="willa-avatar-initials" aria-hidden={!!options.alt}>
      {getAvatarInitials(options.name)}
    </span>
  );
};

type AvatarPreviewProps = {
  alt: string;
  closeLabel: string;
  initials: ReactNode;
  onClose: () => void;
  src: string;
};

const AvatarPreview = (props: AvatarPreviewProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props.onClose]);

  const dialog = (
    <div
      className="willa-avatar-preview"
      role="dialog"
      aria-modal="true"
      aria-label={props.alt || props.closeLabel}
      onClick={props.onClose}
    >
      <button
        className="willa-avatar-preview-close"
        type="button"
        aria-label={props.closeLabel}
        onClick={(event) => {
          event.stopPropagation();
          props.onClose();
        }}
      >
        <Cross2Icon aria-hidden="true" />
      </button>
      <figure
        className="willa-avatar-preview-figure"
        onClick={(event) => event.stopPropagation()}
      >
        {props.src ? (
          <img
            className="willa-avatar-preview-image"
            src={props.src}
            alt={props.alt}
            decoding="async"
          />
        ) : (
          <span className="willa-avatar-preview-initials">
            {props.initials}
          </span>
        )}
      </figure>
    </div>
  );

  if (typeof document === "undefined") {
    return dialog;
  }

  return createPortal(dialog, document.body);
};

Avatar.displayName = "Avatar";
