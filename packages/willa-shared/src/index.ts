export { formatCssSize } from "#shared/css";
export { copyToClipboard } from "#shared/clipboard";
export {
  parseCodeMeta,
  highlightCodeToHtml,
  normalizeHljsLanguage,
  createCodeHighlightLines,
} from "#shared/codeHighlight";
export { getFocusableElements } from "#shared/dom";
export { isMediaOnlyParagraph } from "#shared/nodes";
export { assignRef, composeRefs } from "#shared/refs";
export { clampNumber, createNumberRange } from "#shared/number";
export {
  type MediaContextProps,
  resolveMediaAsset,
  resolveMediaVolume,
} from "#shared/media";
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
