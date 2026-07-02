import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type TouchEvent,
} from "react";
import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useWillaThemeScopeProps } from "@willa-ui/shared";

import type {
  LightboxTriggerComponent,
  LightboxImage,
  LightboxState,
  OpenLightbox,
} from "@willa-ui/shared";

export type { LightboxImage, LightboxState } from "@willa-ui/shared";

export type LightboxDialogProps = {
  image: LightboxImage;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  transitionDirection?: -1 | 0 | 1;
  backdrop?: "translucent" | "solid";
  className?: string;
};

export type LightboxRootProps = {
  children: ReactNode;
  backdrop?: LightboxDialogProps["backdrop"];
};

export type LightboxProps = LightboxDialogProps | LightboxRootProps;

let lightboxBodyScrollLockCount = 0;
let previousBodyOverflow = "";

const lockBodyScroll = () => {
  if (typeof document === "undefined") return () => {};

  if (lightboxBodyScrollLockCount === 0) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  lightboxBodyScrollLockCount += 1;

  return () => {
    lightboxBodyScrollLockCount = Math.max(0, lightboxBodyScrollLockCount - 1);

    if (lightboxBodyScrollLockCount === 0) {
      document.body.style.overflow = previousBodyOverflow;
      previousBodyOverflow = "";
    }
  };
};

export function normalizeLightboxImage(
  src?: string,
  alt?: string,
  caption?: string,
  id?: string,
): LightboxImage | null {
  if (!src) return null;
  return { src, alt, caption, id };
}

const isLightboxTrigger = (node: ReactElement) => {
  if (typeof node.type === "string") return false;
  return Boolean(
    (node.type as LightboxTriggerComponent).__willaLightboxTrigger,
  );
};

const bindLightboxTriggers = (
  children: ReactNode,
  openLightbox: OpenLightbox,
): ReactNode =>
  Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    if (isLightboxTrigger(child)) {
      return cloneElement(
        child as ReactElement<{ openLightbox?: OpenLightbox }>,
        {
          openLightbox,
        },
      );
    }

    const childProps = child.props as { children?: ReactNode };
    if (childProps.children) {
      return cloneElement(child as ReactElement<{ children?: ReactNode }>, {
        children: bindLightboxTriggers(childProps.children, openLightbox),
      });
    }

    return child;
  });

const LightboxDialog = (props: LightboxDialogProps) => {
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isSwipeRef = useRef(false);
  const previousImageKeyRef = useRef<string | null>(null);
  const animationTimerRef = useRef<number | null>(null);
  const [imageMotionClassName, setImageMotionClassName] = useState("");
  const transitionDirection = props.transitionDirection ?? 0;
  const themeScopeProps = useWillaThemeScopeProps();

  useEffect(() => lockBodyScroll(), []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented) return;

      if (event.key === "Escape") {
        event.preventDefault();
        props.onClose();
        return;
      }

      if (event.key === "ArrowLeft" && props.onPrev) {
        event.preventDefault();
        props.onPrev();
        return;
      }

      if (event.key === "ArrowRight" && props.onNext) {
        event.preventDefault();
        props.onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props.onClose, props.onNext, props.onPrev]);

  useEffect(() => {
    const imageKey = [
      props.image.src,
      props.image.alt ?? "",
      props.image.caption ?? "",
    ].join("::");

    if (previousImageKeyRef.current === imageKey) {
      return;
    }

    previousImageKeyRef.current = imageKey;

    if (animationTimerRef.current != null) {
      window.clearTimeout(animationTimerRef.current);
    }

    if (transitionDirection === 0) {
      setImageMotionClassName("");
      return;
    }

    setImageMotionClassName(
      transitionDirection > 0
        ? "willa-lightbox-image--slide-next"
        : "willa-lightbox-image--slide-prev",
    );

    animationTimerRef.current = window.setTimeout(() => {
      setImageMotionClassName("");
      animationTimerRef.current = null;
    }, 260);

    return () => {
      if (animationTimerRef.current != null) {
        window.clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    };
  }, [props.image, transitionDirection]);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isSwipeRef.current = false;
  };

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    const startX = touchStartXRef.current;
    const startY = touchStartYRef.current;
    if (!touch || startX == null || startY == null) return;

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 12) {
      isSwipeRef.current = true;
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const changedTouch = event.changedTouches[0];
    const startX = touchStartXRef.current;
    const startY = touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (!changedTouch || startX == null || startY == null) return;

    const deltaX = changedTouch.clientX - startX;
    const deltaY = changedTouch.clientY - startY;

    if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < 48) {
      isSwipeRef.current = false;
      return;
    }

    if (deltaX < 0) {
      props.onNext?.();
      return;
    }

    props.onPrev?.();
  };

  const handleImageClick = () => {
    if (isSwipeRef.current) {
      isSwipeRef.current = false;
      return;
    }

    props.onClose();
  };

  return (
    <div
      {...themeScopeProps}
      className={classNames(
        "willa-lightbox",
        props.backdrop === "solid" && "willa-lightbox--solid",
        props.className,
      )}
      role="dialog"
      aria-modal="true"
      aria-label="图片预览"
      onClick={props.onClose}
    >
      {props.onPrev ? (
        <button
          type="button"
          className="willa-lightbox-nav willa-lightbox-nav--prev"
          onClick={(event) => {
            event.stopPropagation();
            props.onPrev?.();
          }}
          aria-label="上一张图片"
        >
          <ChevronLeftIcon />
        </button>
      ) : null}
      {props.onNext ? (
        <button
          type="button"
          className="willa-lightbox-nav willa-lightbox-nav--next"
          onClick={(event) => {
            event.stopPropagation();
            props.onNext?.();
          }}
          aria-label="下一张图片"
        >
          <ChevronRightIcon />
        </button>
      ) : null}
      <figure
        className="willa-lightbox-figure"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            props.onClose();
            return;
          }
          event.stopPropagation();
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartXRef.current = null;
          touchStartYRef.current = null;
          isSwipeRef.current = false;
        }}
      >
        <img
          src={props.image.src}
          alt={props.image.alt}
          className={classNames("willa-lightbox-image", imageMotionClassName)}
          decoding="async"
          fetchPriority="high"
          onClick={handleImageClick}
        />
        {props.image.caption ? (
          <figcaption className="willa-lightbox-caption">
            {props.image.caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
};

const LightboxDialogPortal = (props: LightboxDialogProps) => {
  const dialog = <LightboxDialog {...props} />;

  if (typeof document === "undefined") {
    return dialog;
  }
  return createPortal(dialog, document.body);
};

const LightboxRoot = (props: LightboxRootProps) => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [transitionDirection, setTransitionDirection] = useState<-1 | 0 | 1>(0);

  const moveLightbox = (direction: -1 | 1) => {
    if (!lightbox || lightbox.images.length <= 1) return;

    const nextIndex =
      (lightbox.currentIndex + direction + lightbox.images.length) %
      lightbox.images.length;
    const nextImage = lightbox.images[nextIndex];

    setTransitionDirection(direction);
    setLightbox({
      ...lightbox,
      currentIndex: nextIndex,
      selectedIndex: nextIndex,
      selectedId: nextImage.id,
      selectedImage: nextImage,
    });
  };

  return (
    <>
      {bindLightboxTriggers(props.children, setLightbox)}
      {lightbox?.selectedImage ? (
        <LightboxDialogPortal
          image={lightbox.selectedImage}
          onClose={() => setLightbox(null)}
          onPrev={
            lightbox.images.length > 1 ? () => moveLightbox(-1) : undefined
          }
          onNext={
            lightbox.images.length > 1 ? () => moveLightbox(1) : undefined
          }
          transitionDirection={transitionDirection}
          backdrop={props.backdrop}
        />
      ) : null}
    </>
  );
};

export function Lightbox(props: LightboxProps) {
  if ("image" in props) {
    return <LightboxDialogPortal {...props} />;
  }
  return <LightboxRoot {...props} />;
}

Lightbox.displayName = "Lightbox";
