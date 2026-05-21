export type Heading = {
  level: 2 | 3;
  text: string;
  id: string;
};

export type LightboxImage = {
  src: string;
  alt?: string;
  caption?: string;
  id?: string;
};

export type LightboxState = {
  images: Array<LightboxImage>;
  currentIndex: number;
  selectedIndex?: number;
  selectedId?: string;
  selectedImage?: LightboxImage;
};

export type OpenLightbox = (state: LightboxState | null) => void;

export type ResolveAssetUrl = (
  articleSourcePath: string,
  assetPath: string,
) => string | undefined;
