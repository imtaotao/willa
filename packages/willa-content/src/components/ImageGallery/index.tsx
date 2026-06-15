import { type CSSProperties, useRef } from "react";
import { type LightboxImage, type OpenLightbox } from "@willa-ui/shared";
import classNames from "classnames";

import { type MediaContextProps, resolveMediaAsset } from "#content/media";
import { normalizeLightboxImage } from "#content/components/Lightbox";

export type ImageGalleryItem =
  | string
  | {
      src: string;
      alt?: string;
      caption?: string;
    };

export type ImageGalleryProps = MediaContextProps & {
  images: Array<ImageGalleryItem>;
  columns?: 2 | 3 | 4;
  openLightbox?: OpenLightbox;
  hoverZoom?: boolean;
  backgroundColor?: CSSProperties["backgroundColor"];
};

const GalleryImageButton = ({
  images,
  item,
  index,
  openLightbox,
}: {
  images: Array<LightboxImage>;
  item: LightboxImage;
  index: number;
  openLightbox?: ImageGalleryProps["openLightbox"];
}) => {
  const hasMovedRef = useRef(false);
  const shouldOpenRef = useRef(false);

  const openGalleryImage = () => {
    openLightbox?.(
      item.id
        ? {
            images,
            currentIndex: index,
            selectedId: item.id,
            selectedImage: item,
          }
        : null,
    );
  };

  return (
    <button
      type="button"
      className="willa-prose-gallery-button"
      onPointerDown={() => {
        hasMovedRef.current = false;
        shouldOpenRef.current = false;
      }}
      onPointerMove={(event) => {
        if (Math.abs(event.movementX) > 10 || Math.abs(event.movementY) > 10) {
          hasMovedRef.current = true;
        }
      }}
      onPointerUp={() => {
        shouldOpenRef.current = !hasMovedRef.current;
        hasMovedRef.current = false;
      }}
      onPointerCancel={() => {
        hasMovedRef.current = false;
        shouldOpenRef.current = false;
      }}
      onClick={(event) => {
        if (!shouldOpenRef.current) {
          event.preventDefault();
          shouldOpenRef.current = false;
          return;
        }

        shouldOpenRef.current = false;
        openGalleryImage();
      }}
      aria-label={item.alt ? `Open image: ${item.alt}` : "Open image"}
      data-willa-lightbox-id={item.id}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="willa-prose-gallery-asset"
        loading="lazy"
      />
    </button>
  );
};

export function ImageGallery({
  images,
  columns = 2,
  openLightbox,
  hoverZoom = false,
  backgroundColor,
  ...mediaContext
}: ImageGalleryProps) {
  const normalizedImages = images
    .map((item) => (typeof item === "string" ? { src: item } : { ...item }))
    .map((item) => {
      const resolvedSrc = resolveMediaAsset(mediaContext, item.src);
      return resolvedSrc ? { ...item, src: resolvedSrc } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const lightboxImages = normalizedImages
    .map((item, index) =>
      normalizeLightboxImage(
        item.src,
        item.alt,
        item.caption,
        `${item.src}::${index}`,
      ),
    )
    .filter((item): item is LightboxImage => Boolean(item));

  if (!normalizedImages.length) return null;

  return (
    <div
      className={classNames(
        "willa-prose-gallery",
        hoverZoom && "willa-prose-gallery--hover-zoom",
      )}
      style={
        {
          ["--willa-gallery-columns" as string]: String(columns),
          ...(backgroundColor
            ? { "--willa-image-custom-bg": backgroundColor }
            : undefined),
        } as CSSProperties
      }
    >
      {normalizedImages.map((item, index) => (
        <figure
          key={`${item.src}-${index}`}
          className="willa-prose-gallery-item"
        >
          <GalleryImageButton
            item={lightboxImages[index] ?? item}
            images={lightboxImages}
            index={index}
            openLightbox={openLightbox}
          />
          {item.caption ? (
            <figcaption className="willa-prose-gallery-caption">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

// Used by Lightbox to inject openLightbox when ImageGallery is rendered as its child.
ImageGallery.__willaLightboxTrigger = true;
