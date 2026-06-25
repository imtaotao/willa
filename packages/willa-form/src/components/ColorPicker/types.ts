export type ColorPickerHsb = {
  h: number;
  s: number;
  b: number;
  a: number;
};

export type ColorPickerRgb = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type ColorPickerColor = {
  hsb: ColorPickerHsb;
  rgb: ColorPickerRgb;
  toHexString: () => string;
  toRgbString: () => string;
  toHsbString: () => string;
};
