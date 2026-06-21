import { type AriaAttributes, type MouseEvent } from "react";

type CopyFunction = (
  text: string,
  options?: { resetDuration?: number; onCopy?: (text: string) => void },
) => Promise<boolean>;

export function resolveActionAriaPressed(
  ariaPressed: AriaAttributes["aria-pressed"],
  pressed?: boolean,
) {
  return ariaPressed ?? (typeof pressed === "boolean" ? pressed : undefined);
}

export async function handleActionClick<Element extends HTMLElement>(
  event: MouseEvent<Element>,
  options: {
    copyText?: string;
    copiedDuration: number;
    disabled?: boolean;
    onClick?: (event: MouseEvent<Element>) => void;
    onCopyText?: (text: string) => void;
    preventDefaultForCopy: boolean;
    copy: CopyFunction;
  },
) {
  if (options.disabled) {
    event.preventDefault();
    return;
  }

  options.onClick?.(event);

  if (event.defaultPrevented || !options.copyText) {
    return;
  }

  if (options.preventDefaultForCopy) {
    event.preventDefault();
  }

  await options.copy(options.copyText, {
    resetDuration: options.copiedDuration,
    onCopy: options.onCopyText,
  });
}
