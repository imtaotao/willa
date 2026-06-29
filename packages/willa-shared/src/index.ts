export { formatCssSize } from "#shared/css";
export { copyToClipboard } from "#shared/clipboard";
export {
  useControllableState,
  type ControllableStateOptions,
} from "#shared/controllableState";
export {
  isMobile,
  isMobileViewport,
  MOBILE_BREAKPOINT,
} from "#shared/viewport";
export {
  useCopyToClipboard,
  type CopyStatus,
  type CopyToClipboardActionOptions,
  type CopyToClipboardOptions,
} from "#shared/copy";
export {
  parseCodeMeta,
  highlightCodeToHtml,
  normalizeHljsLanguage,
  createCodeHighlightLines,
} from "#shared/codeHighlight";
export { getFocusableElements } from "#shared/dom";
export {
  getFloatingPanelPosition,
  type FloatingPanelAlign,
  type FloatingPanelPoint,
  type FloatingPanelPosition,
  type FloatingPanelPositionOptions,
  type FloatingPanelRect,
  type FloatingPanelSide,
} from "#shared/floating";
export {
  useFloatingLayer,
  type FloatingLayerPosition,
  type UseFloatingLayerOptions,
} from "#shared/floatingLayer";
export { isMediaOnlyParagraph } from "#shared/nodes";
export { assignRef, composeRefs } from "#shared/refs";
export { clampNumber, createNumberRange } from "#shared/number";
export {
  type MediaContextProps,
  resolveMediaAsset,
  resolveMediaVolume,
} from "#shared/media";
export type { WillaRenderLink, WillaRenderLinkProps } from "#shared/link";
export {
  canOpenFilePreviewDialog,
  createObjectFileItem,
  formatFileSize,
  getFileCodeLanguage,
  getFileExtension,
  normalizeFileProgress,
  resolveFileKind,
  resolveFileKindLabel,
  resolveFilePreviewType,
  resolveFilePreviewMode,
  type FileItemKind,
  type FileItemStatus,
  type FilePreviewMode,
  type FilePreviewType,
  type ObjectFileItem,
  type ResolveFilePreviewTypeOptions,
} from "#shared/file";
export {
  type RequestJsonOptions,
  isAbortError,
  requestJson,
} from "#shared/request";
export {
  flattenText,
  extractHeadings,
  createHeadingIdFactory,
} from "#shared/heading";
export {
  type VirtualScrollOptions,
  type VirtualScrollWindow,
  getVirtualScrollWindow,
  useVirtualScrollWindow,
} from "#shared/virtualScroll";
export type { CodeHighlightMeta, HighlightedCode } from "#shared/codeHighlight";
export type {
  Heading,
  LightboxImage,
  LightboxState,
  OpenLightbox,
  ResolveAssetUrl,
} from "#shared/types";
