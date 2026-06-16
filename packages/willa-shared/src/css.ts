export function formatCssSize(value?: number | string) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? `${value}px` : undefined;
  }
  if (typeof value === "string") {
    const nextValue = value.trim();
    return nextValue || undefined;
  }
  return undefined;
}
