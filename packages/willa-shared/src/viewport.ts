export const MOBILE_BREAKPOINT = 640;

export function isMobileViewport(viewportWidth: number) {
  return viewportWidth <= MOBILE_BREAKPOINT;
}

export function isMobile() {
  if (typeof window === "undefined") {
    return false;
  }
  return isMobileViewport(window.innerWidth);
}
