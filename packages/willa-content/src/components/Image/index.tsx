import {
  useId,
  useRef,
  type CSSProperties,
  type ComponentProps,
  type PointerEvent as ReactPointerEvent,
} from "react";
import classNames from "classnames";
import {
  resolveMediaAsset,
  type MediaContextProps,
  type OpenLightbox,
} from "@willa-ui/shared";

import { normalizeLightboxImage } from "#content/components/Lightbox";

export type ImageProps = ComponentProps<"img"> &
  MediaContextProps & {
    openLightbox?: OpenLightbox;
    hoverZoom?: boolean;
    backgroundColor?: CSSProperties["backgroundColor"];
  };

export function Image(p: ImageProps) {
  const {
    articleSourcePath,
    resolveAssetUrl,
    openLightbox,
    hoverZoom = false,
    backgroundColor,
    src,
    alt,
    title,
    className,
    loading,
    ...imageProps
  } = p;
  const hasMovedRef = useRef(false);
  const shouldOpenRef = useRef(false);
  const lightboxId = useId();
  const resolvedSrc = resolveMediaAsset(
    { articleSourcePath, resolveAssetUrl },
    src,
  );

  const image = normalizeLightboxImage(resolvedSrc, alt, title, lightboxId);
  if (!resolvedSrc) return null;

  const openImage = () => {
    openLightbox?.(
      image
        ? {
            images: [image],
            currentIndex: 0,
            selectedId: lightboxId,
            selectedImage: image,
          }
        : null,
    );
  };

  const handlePointerDown = () => {
    hasMovedRef.current = false;
    shouldOpenRef.current = false;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (Math.abs(event.movementX) > 10 || Math.abs(event.movementY) > 10) {
      hasMovedRef.current = true;
    }
  };

  const handlePointerUp = () => {
    shouldOpenRef.current = !hasMovedRef.current;
    hasMovedRef.current = false;
  };

  const handlePointerCancel = () => {
    hasMovedRef.current = false;
    shouldOpenRef.current = false;
  };

  return (
    <figure
      className={classNames(
        "willa-prose-image",
        hoverZoom && "willa-prose-image--hover-zoom",
      )}
      style={getImageStyle(backgroundColor)}
    >
      <button
        type="button"
        className="willa-prose-image-button"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onClick={(event) => {
          if (!shouldOpenRef.current) {
            event.preventDefault();
            shouldOpenRef.current = false;
            return;
          }

          shouldOpenRef.current = false;
          openImage();
        }}
        aria-label={alt ? `Open image: ${alt}` : "Open image"}
        data-willa-lightbox-id={lightboxId}
      >
        <img
          {...imageProps}
          src={resolvedSrc}
          alt={alt}
          title={title}
          className={classNames("willa-prose-image-asset", className)}
          loading={loading ?? "lazy"}
        />
      </button>
      {title ? (
        <figcaption className="willa-prose-image-caption">{title}</figcaption>
      ) : null}
    </figure>
  );
}

const getImageStyle = (backgroundColor?: CSSProperties["backgroundColor"]) => {
  return backgroundColor
    ? ({
        "--willa-image-custom-bg": backgroundColor,
      } as CSSProperties)
    : undefined;
};

// Used by isMediaOnlyParagraph to avoid wrapping standalone images in <p>.
Image.__willaMediaElement = true;

// Used by Lightbox to inject openLightbox when Image is rendered as its child.
Image.__willaLightboxTrigger = true;
