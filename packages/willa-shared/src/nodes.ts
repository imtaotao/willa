import { isArray, isNil, isString } from "aidly";
import { isValidElement, type ReactNode } from "react";

export type MdxBlockComponent = {
  __willaMdxBlockElement?: boolean;
  __willaMediaElement?: boolean;
};

export type LightboxTriggerComponent = {
  __willaLightboxTrigger?: boolean;
};

export type MdxMediaComponent = MdxBlockComponent & LightboxTriggerComponent;

export type MarkMdxMediaComponentOptions = {
  lightboxTrigger?: boolean;
};

const toNodeArray = (children: ReactNode) => {
  const list = isArray(children) ? children : [children];
  return list.filter((item) => {
    if (isNil(item) || typeof item === "boolean") return false;
    if (isString(item)) return item.trim().length > 0;
    return true;
  });
};

export function isBlockOnlyParagraph(children: ReactNode) {
  const nodes = toNodeArray(children);
  if (nodes.length !== 1) return false;
  const node = nodes[0];
  if (!isValidElement(node)) return false;
  if (node.type === "img") return true;
  const component = node.type as MdxBlockComponent;
  return Boolean(
    component.__willaMdxBlockElement || component.__willaMediaElement,
  );
}

export function isMediaOnlyParagraph(children: ReactNode) {
  return isBlockOnlyParagraph(children);
}

export function markMdxBlockComponent<T extends object>(component: T) {
  const markedComponent = component as T & MdxBlockComponent;
  markedComponent.__willaMdxBlockElement = true;
  return markedComponent;
}

export function markLightboxTrigger<T extends object>(component: T) {
  const markedComponent = component as T & LightboxTriggerComponent;
  markedComponent.__willaLightboxTrigger = true;
  return markedComponent;
}

export function markMdxMediaComponent<T extends object>(
  component: T,
  options: MarkMdxMediaComponentOptions = {},
) {
  const markedComponent = markMdxBlockComponent(component) as T &
    MdxMediaComponent;
  markedComponent.__willaMediaElement = true;
  if (options.lightboxTrigger) {
    markLightboxTrigger(markedComponent);
  }
  return markedComponent;
}
