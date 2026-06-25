import { hexToRgb, rgbToHex } from "aidly";
import { clampNumber } from "@willa-ui/shared";

import type {
  ColorPickerColor,
  ColorPickerHsb,
  ColorPickerRgb,
} from "#form/components/ColorPicker/types";

export const colorPickerFallbackColor = "#1677ff";

export function normalizeColor(
  value: string | null = colorPickerFallbackColor,
) {
  if (!value) return hexToHsb(colorPickerFallbackColor);

  return parseColor(value) ?? hexToHsb(colorPickerFallbackColor);
}

export function parseColor(value: string) {
  return parseHex(value) ?? parseRgb(value) ?? parseHsb(value);
}

export function retainColorContext(
  parsedValue: ColorPickerHsb,
  retainedValue: ColorPickerHsb,
) {
  const normalizedValue = normalizeHsb(parsedValue);
  const normalizedRetainedValue = normalizeHsb(retainedValue);

  if (normalizedValue.s > 0 && normalizedValue.b > 0) {
    return normalizedValue;
  }

  return {
    ...normalizedValue,
    h: normalizedRetainedValue.h,
  };
}

export function createColor(value: ColorPickerHsb): ColorPickerColor {
  const hsb = normalizeHsb(value);
  const rgb = hsbToRgb(hsb);

  return {
    hsb,
    rgb,
    toHexString: () => `#${rgbToHex([rgb.r, rgb.g, rgb.b]).toLowerCase()}`,
    toRgbString: () => formatRgb(rgb),
    toHsbString: () => formatHsb(hsb),
  };
}

export function formatColor(
  color: ColorPickerColor,
  format: "hex" | "rgb" | "hsb",
  disabledAlpha: boolean,
) {
  if (format === "rgb") return formatRgb(color.rgb, disabledAlpha);
  if (format === "hsb") return formatHsb(color.hsb, disabledAlpha);
  return disabledAlpha || color.rgb.a >= 1
    ? color.toHexString()
    : formatRgb(color.rgb);
}

export function normalizeHsb(value: ColorPickerHsb) {
  return {
    h: clampNumber(value.h, 0, 360),
    s: clampNumber(value.s, 0, 100),
    b: clampNumber(value.b, 0, 100),
    a: clampNumber(value.a, 0, 1),
  };
}

const parseHex = (value: string) => {
  const raw = value.trim().replace(/^#/, "");
  if (![3, 4, 6, 8].includes(raw.length)) return null;
  const normalized =
    raw.length === 3 || raw.length === 4
      ? raw
          .split("")
          .map((item) => item + item)
          .join("")
      : raw;
  if (!/^[\da-f]+$/i.test(normalized)) return null;

  const [r, g, b, parsedAlpha] = hexToRgb(normalized);
  const alpha =
    normalized.length === 8
      ? Number.parseInt(normalized.slice(6, 8), 16) / 255
      : (parsedAlpha ?? 1);

  return rgbToHsb({ r, g, b, a: alpha });
};

const parseRgb = (value: string) => {
  const match = value
    .trim()
    .match(/^rgba?\(([^,]+),([^,]+),([^,]+)(?:,([^,]+))?\)$/i);
  if (!match) return null;

  return rgbToHsb({
    r: clampNumber(Number.parseFloat(match[1]), 0, 255),
    g: clampNumber(Number.parseFloat(match[2]), 0, 255),
    b: clampNumber(Number.parseFloat(match[3]), 0, 255),
    a:
      match[4] === undefined
        ? 1
        : clampNumber(Number.parseFloat(match[4]), 0, 1),
  });
};

const parseHsb = (value: string) => {
  const match = value
    .trim()
    .match(/^hsba?\(([^,]+),([^,]+)%,([^,]+)%(?:,([^,]+))?\)$/i);
  if (!match) return null;

  return normalizeHsb({
    h: Number.parseFloat(match[1]),
    s: Number.parseFloat(match[2]),
    b: Number.parseFloat(match[3]),
    a:
      match[4] === undefined
        ? 1
        : clampNumber(Number.parseFloat(match[4]), 0, 1),
  });
};

const hexToHsb = (value: string) => {
  return parseHex(value) ?? rgbToHsb({ r: 22, g: 119, b: 255, a: 1 });
};

const hsbToRgb = (value: ColorPickerHsb): ColorPickerRgb => {
  const h = clampNumber(value.h, 0, 360);
  const s = clampNumber(value.s, 0, 100) / 100;
  const v = clampNumber(value.b, 0, 100) / 100;
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  const [r1, g1, b1] =
    h < 60
      ? [c, x, 0]
      : h < 120
        ? [x, c, 0]
        : h < 180
          ? [0, c, x]
          : h < 240
            ? [0, x, c]
            : h < 300
              ? [x, 0, c]
              : [c, 0, x];

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
    a: clampNumber(value.a, 0, 1),
  };
};

const rgbToHsb = (value: ColorPickerRgb): ColorPickerHsb => {
  const r = clampNumber(value.r, 0, 255) / 255;
  const g = clampNumber(value.g, 0, 255) / 255;
  const b = clampNumber(value.b, 0, 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const hue =
    delta === 0
      ? 0
      : max === r
        ? 60 * (((g - b) / delta) % 6)
        : max === g
          ? 60 * ((b - r) / delta + 2)
          : 60 * ((r - g) / delta + 4);

  return {
    h: hue < 0 ? hue + 360 : hue,
    s: max === 0 ? 0 : (delta / max) * 100,
    b: max * 100,
    a: clampNumber(value.a, 0, 1),
  };
};

const formatRgb = (value: ColorPickerRgb, withoutAlpha = false) => {
  if (withoutAlpha || value.a >= 1) {
    return `rgb(${value.r}, ${value.g}, ${value.b})`;
  }

  return `rgba(${value.r}, ${value.g}, ${value.b}, ${trimNumber(value.a)})`;
};

const formatHsb = (value: ColorPickerHsb, withoutAlpha = false) => {
  const content = `${Math.round(value.h)}, ${Math.round(value.s)}%, ${Math.round(
    value.b,
  )}%`;

  return withoutAlpha || value.a >= 1
    ? `hsb(${content})`
    : `hsba(${content}, ${trimNumber(value.a)})`;
};

const trimNumber = (value: number) => {
  return Number(value.toFixed(2));
};
