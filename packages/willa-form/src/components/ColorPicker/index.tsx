import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  ChevronDownIcon,
  CheckIcon,
  Cross2Icon,
  CopyIcon,
  TransparencyGridIcon,
} from "@radix-ui/react-icons";
import {
  assignRef,
  clampNumber,
  useControllableState,
  useCopyToClipboard,
  useWillaThemeScopeProps,
} from "@willa-ui/shared";
import classNames from "classnames";

import { RangeInput } from "#form/components/RangeInput";
import { useFloatingPanel } from "#form/internal/useFloatingPanel";
import {
  colorPickerFallbackColor,
  createColor,
  formatColor,
  normalizeHsb,
  normalizeColor,
  parseColor,
  retainColorContext,
} from "#form/internal/colorUtils";
import type {
  ColorPickerColor,
  ColorPickerHsb,
} from "#form/components/ColorPicker/types";

export type ColorPickerFormat = "hex" | "rgb" | "hsb";
export type ColorPickerSize = "sm" | "md" | "lg";
export type ColorPickerTrigger = "click" | "hover";

export type {
  ColorPickerColor,
  ColorPickerHsb,
  ColorPickerRgb,
} from "#form/components/ColorPicker/types";

export type ColorPickerPreset = {
  label?: ReactNode;
  colors: Array<string>;
};

export type ColorPickerPanelRenderInfo = {
  value: string;
  color: ColorPickerColor;
  format: ColorPickerFormat;
  clear: () => void;
};

export type ColorPickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  value?: string | null;
  defaultValue?: string;
  format?: ColorPickerFormat;
  size?: ColorPickerSize;
  trigger?: ColorPickerTrigger;
  width?: CSSProperties["width"];
  invalid?: boolean;
  disabledAlpha?: boolean;
  allowClear?: boolean;
  showText?: boolean | ((value: string, color: ColorPickerColor) => ReactNode);
  presets?: Array<ColorPickerPreset>;
  open?: boolean;
  defaultOpen?: boolean;
  name?: string;
  children?: ReactNode;
  panelRender?: (
    panel: ReactNode,
    info: ColorPickerPanelRenderInfo,
  ) => ReactNode;
  onValueChange?: (value: string, color: ColorPickerColor) => void;
  onChangeComplete?: (value: string, color: ColorPickerColor) => void;
  onOpenChange?: (open: boolean) => void;
};

export const ColorPicker = forwardRef<HTMLButtonElement, ColorPickerProps>(
  (props, ref) => {
    const {
      value,
      defaultValue = colorPickerFallbackColor,
      format = "hex",
      size = "md",
      trigger = "click",
      width,
      invalid = false,
      disabledAlpha = false,
      allowClear = false,
      showText = false,
      presets = [],
      open,
      defaultOpen = false,
      name,
      children,
      panelRender,
      onValueChange,
      onChangeComplete,
      onOpenChange,
      className,
      disabled,
      style,
      id,
      onBlur,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      ...buttonProps
    } = props;
    const generatedId = useId();
    const buttonId = id ?? generatedId;
    const panelId = `${buttonId}-panel`;
    const rootRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const hoverTimerRef = useRef<number | undefined>(undefined);
    const [isOpen, setPickerOpen] = useControllableState({
      value: open,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
    });
    const isPanelOpen = isOpen && !disabled;
    const { copied, copy } = useCopyToClipboard({ resetDuration: 1200 });
    const [fieldInvalid, setFieldInvalid] = useState(false);
    const [fieldValue, setFieldValue] = useState("");
    const [innerHsb, setInnerHsb] = useState(() =>
      normalizeColor(defaultValue),
    );
    const currentHsb =
      value === undefined
        ? innerHsb
        : retainColorContext(normalizeColor(value), innerHsb);
    const currentColor = useMemo(
      () => createColor(currentHsb),
      [currentHsb.a, currentHsb.b, currentHsb.h, currentHsb.s],
    );
    const currentValue = formatColor(currentColor, format, disabledAlpha);
    const hasValue = value === null ? false : Boolean(currentValue);
    const visibleColor = hasValue
      ? currentColor
      : createColor(normalizeColor());
    const previewColor = visibleColor.toRgbString();
    const triggerText = getTriggerText({
      color: visibleColor,
      format,
      showText,
      value: hasValue ? currentValue : "",
    });
    const colorPickerStyle = {
      ...style,
      ...(width === undefined ? undefined : { width }),
    } as CSSProperties;
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";

    const setButtonRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      assignRef(ref, node);
    };

    const closePanel = useCallback(() => setPickerOpen(false), [setPickerOpen]);
    const { position, updatePosition } = useFloatingPanel({
      open: isPanelOpen,
      rootRef,
      triggerRef: buttonRef,
      panelRef,
      matchTriggerWidth: false,
      minWidth: 304,
      fullWidthBelow: 420,
      fallbackHeight: 430,
      onClose: closePanel,
    });

    useEffect(() => {
      if (isPanelOpen) {
        updatePosition();
      }
    }, [isPanelOpen, updatePosition]);

    useEffect(() => {
      return () => {
        if (hoverTimerRef.current !== undefined) {
          window.clearTimeout(hoverTimerRef.current);
        }
      };
    }, []);

    useEffect(() => {
      setFieldValue(currentValue);
      setFieldInvalid(false);
    }, [currentValue]);

    const commitColor = (
      nextHsb: ColorPickerHsb,
      options: { complete?: boolean } = {},
    ) => {
      const normalizedHsb = normalizeHsb(nextHsb);
      const nextColor = createColor(normalizedHsb);
      const nextValue = formatColor(nextColor, format, disabledAlpha);

      setInnerHsb(normalizedHsb);

      onValueChange?.(nextValue, nextColor);

      if (options.complete) {
        onChangeComplete?.(nextValue, nextColor);
      }
    };

    const clearColor = () => {
      if (value === undefined) {
        setInnerHsb(normalizeColor());
      }

      onValueChange?.("", createColor(normalizeColor()));
      onChangeComplete?.("", createColor(normalizeColor()));
    };

    const copyValue = () => {
      if (!hasValue) return;
      void copy(currentValue);
    };

    const handleFieldChange = (nextValue: string) => {
      setFieldValue(nextValue);

      if (!nextValue.trim()) {
        setFieldInvalid(false);
        return;
      }

      const nextHsb = parseColor(nextValue);
      if (!nextHsb) {
        setFieldInvalid(true);
        return;
      }

      setFieldInvalid(false);
      commitColor(nextHsb);
    };

    const commitFieldValue = (nextValue: string) => {
      const nextHsb = parseColor(nextValue);
      if (!nextHsb) {
        setFieldInvalid(true);
      } else {
        setFieldInvalid(false);
        commitColor(nextHsb, { complete: true });
      }
    };

    const handleTriggerClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (event.defaultPrevented || disabled || trigger !== "click") return;
      setPickerOpen(!isOpen);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      if (event.key === "Escape") {
        setPickerOpen(false);
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setPickerOpen(!isOpen);
      }
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
      onMouseEnter?.(event);
      if (disabled || trigger !== "hover") return;

      if (hoverTimerRef.current !== undefined) {
        window.clearTimeout(hoverTimerRef.current);
      }

      setPickerOpen(true);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
      onMouseLeave?.(event);
      if (trigger !== "hover") return;

      hoverTimerRef.current = window.setTimeout(
        () => setPickerOpen(false),
        120,
      );
    };

    const handlePanelMouseEnter = () => {
      if (hoverTimerRef.current !== undefined) {
        window.clearTimeout(hoverTimerRef.current);
      }
    };

    const handlePanelMouseLeave = () => {
      if (trigger === "hover") {
        hoverTimerRef.current = window.setTimeout(
          () => setPickerOpen(false),
          120,
        );
      }
    };
    const themeScopeProps = useWillaThemeScopeProps();

    const panelContent = (
      <ColorPickerPanel
        color={visibleColor}
        format={format}
        presets={presets}
        disabledAlpha={disabledAlpha}
        allowClear={allowClear}
        copied={copied}
        fieldInvalid={fieldInvalid}
        onClear={clearColor}
        onChange={commitColor}
        onCopy={copyValue}
        onFieldChange={handleFieldChange}
        onFieldCommit={commitFieldValue}
        value={fieldValue}
      />
    );
    const panel =
      isPanelOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              {...themeScopeProps}
              ref={panelRef}
              id={panelId}
              className="willa-color-picker-panel"
              style={
                position
                  ? {
                      left: position.left,
                      top: position.top,
                      width: position.width,
                    }
                  : undefined
              }
              role="dialog"
              aria-label="颜色选择"
              onMouseEnter={handlePanelMouseEnter}
              onMouseLeave={handlePanelMouseLeave}
            >
              {panelRender
                ? panelRender(panelContent, {
                    clear: clearColor,
                    color: visibleColor,
                    format,
                    value: hasValue ? currentValue : "",
                  })
                : panelContent}
            </div>,
            document.body,
          )
        : null;

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-color-picker",
          `willa-color-picker--${size}`,
          isPanelOpen && "willa-color-picker--open",
          disabled && "willa-color-picker--disabled",
          isInvalid && "willa-color-picker--invalid",
          className,
        )}
        style={colorPickerStyle}
      >
        <button
          {...buttonProps}
          ref={setButtonRef}
          id={buttonId}
          type="button"
          className="willa-color-picker-trigger"
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={isPanelOpen}
          aria-controls={isPanelOpen ? panelId : undefined}
          aria-invalid={isInvalid || buttonProps["aria-invalid"]}
          onBlur={onBlur}
          onClick={handleTriggerClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children ?? (
            <>
              <span
                className={classNames(
                  "willa-color-picker-swatch",
                  !hasValue && "willa-color-picker-swatch--empty",
                )}
                aria-hidden="true"
              >
                {hasValue ? (
                  <span
                    className="willa-color-picker-swatch-color"
                    style={{ background: previewColor }}
                  />
                ) : (
                  <TransparencyGridIcon />
                )}
              </span>
              {triggerText ? (
                <span className="willa-color-picker-text">{triggerText}</span>
              ) : null}
              <ChevronDownIcon className="willa-color-picker-arrow" />
            </>
          )}
        </button>
        {name ? (
          <input
            type="hidden"
            name={name}
            value={hasValue ? currentValue : ""}
          />
        ) : null}
        {panel}
      </span>
    );
  },
);

ColorPicker.displayName = "ColorPicker";

const ColorPickerPanel = (props: {
  color: ColorPickerColor;
  format: ColorPickerFormat;
  presets: Array<ColorPickerPreset>;
  disabledAlpha: boolean;
  allowClear: boolean;
  children?: ReactNode;
  copied: boolean;
  fieldInvalid: boolean;
  value: string;
  onClear: () => void;
  onChange: (value: ColorPickerHsb, options?: { complete?: boolean }) => void;
  onCopy: () => void;
  onFieldChange: (value: string) => void;
  onFieldCommit: (value: string) => void;
}) => {
  const hsb = props.color.hsb;
  const rgb = props.color.rgb;
  const pureHue = createColor({ h: hsb.h, s: 100, b: 100, a: 1 });
  const panelVars = {
    "--willa-color-picker-current": props.color.toRgbString(),
    "--willa-color-picker-hue": pureHue.toHexString(),
    "--willa-color-picker-alpha": rgb.a,
  } as CSSProperties;

  const handleSaturationPointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    bindPointerDrag(event.currentTarget, event, (x, y, complete) => {
      props.onChange(
        {
          ...hsb,
          s: x * 100,
          b: (1 - y) * 100,
        },
        { complete },
      );
    });
  };

  const updateHue = (nextHue: number, complete = false) => {
    props.onChange(
      {
        ...hsb,
        h: nextHue,
        s: hsb.s === 0 && hsb.b > 0 ? 100 : hsb.s,
      },
      { complete },
    );
  };

  const updateAlpha = (nextAlpha: number, complete = false) => {
    props.onChange({ ...hsb, a: nextAlpha / 100 }, { complete });
  };

  const handleFieldKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onFieldCommit(event.currentTarget.value);
      return;
    }

    if (event.key === "Escape") {
      props.onFieldChange(
        formatColor(props.color, props.format, props.disabledAlpha),
      );
      event.currentTarget.blur();
    }
  };

  return (
    <div className="willa-color-picker-panel-content" style={panelVars}>
      <div
        className="willa-color-picker-saturation"
        role="slider"
        aria-label="饱和度与亮度"
        aria-valuetext={`饱和度 ${Math.round(hsb.s)}%，亮度 ${Math.round(
          hsb.b,
        )}%`}
        tabIndex={0}
        onPointerDown={handleSaturationPointerDown}
      >
        <span
          className="willa-color-picker-saturation-thumb"
          style={{
            left: `${hsb.s}%`,
            top: `${100 - hsb.b}%`,
          }}
        />
      </div>
      <div className="willa-color-picker-controls">
        <div className="willa-color-picker-sliders">
          <RangeInput
            className="willa-color-picker-slider willa-color-picker-slider--hue"
            min={0}
            max={360}
            step={1}
            value={Math.round(hsb.h)}
            height="0.58rem"
            minWidth={0}
            thumbBorderColor="var(--willa-color-picker-thumb-border)"
            thumbColor="var(--willa-color-picker-current)"
            thumbSize="1rem"
            aria-label="色相"
            onChange={(event) => updateHue(Number(event.currentTarget.value))}
            onPointerUp={(event) =>
              updateHue(Number(event.currentTarget.value), true)
            }
          />
          {!props.disabledAlpha ? (
            <RangeInput
              className="willa-color-picker-slider willa-color-picker-slider--alpha"
              min={0}
              max={100}
              step={1}
              value={Math.round(hsb.a * 100)}
              height="0.58rem"
              minWidth={0}
              thumbBorderColor="var(--willa-color-picker-thumb-border)"
              thumbColor="var(--willa-color-picker-current)"
              thumbSize="1rem"
              aria-label="透明度"
              onChange={(event) =>
                updateAlpha(Number(event.currentTarget.value))
              }
              onPointerUp={(event) =>
                updateAlpha(Number(event.currentTarget.value), true)
              }
            />
          ) : null}
        </div>
        <span className="willa-color-picker-preview" aria-hidden="true">
          <span className="willa-color-picker-preview-color" />
        </span>
      </div>
      <div className="willa-color-picker-fields">
        <div
          className={classNames(
            "willa-color-picker-field",
            props.fieldInvalid && "willa-color-picker-field--invalid",
          )}
        >
          <span>{props.format.toUpperCase()}</span>
          <div className="willa-color-picker-field-value">
            <input
              type="text"
              value={props.value}
              spellCheck={false}
              aria-label="颜色值"
              onBlur={(event) => props.onFieldCommit(event.currentTarget.value)}
              onChange={(event) =>
                props.onFieldChange(event.currentTarget.value)
              }
              onKeyDown={handleFieldKeyDown}
            />
            <button
              type="button"
              className={classNames(
                "willa-color-picker-copy",
                props.copied && "willa-color-picker-copy--copied",
              )}
              aria-label={props.copied ? "颜色值已复制" : "复制颜色值"}
              title={props.copied ? "已复制" : "复制颜色值"}
              onClick={props.onCopy}
            >
              {props.copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
          {props.fieldInvalid ? (
            <small className="willa-color-picker-field-error">
              请输入有效的颜色值
            </small>
          ) : null}
        </div>
        {!props.disabledAlpha ? (
          <div className="willa-color-picker-field">
            <span>Alpha</span>
            <output>{Math.round(hsb.a * 100)}%</output>
          </div>
        ) : null}
      </div>
      {props.allowClear ? (
        <div className="willa-color-picker-actions">
          <button
            type="button"
            className="willa-color-picker-clear"
            onClick={props.onClear}
          >
            <Cross2Icon />
            清除颜色
          </button>
        </div>
      ) : null}
      {props.presets.length > 0 ? (
        <div className="willa-color-picker-presets">
          {props.presets.map((preset, presetIndex) => (
            <div className="willa-color-picker-preset" key={presetIndex}>
              {preset.label ? (
                <span className="willa-color-picker-preset-label">
                  {preset.label}
                </span>
              ) : null}
              <div className="willa-color-picker-preset-colors">
                {preset.colors.map((item) => {
                  const presetColor = createColor(normalizeColor(item));
                  const presetValue = presetColor.toHexString();

                  return (
                    <button
                      key={`${presetIndex}-${item}`}
                      type="button"
                      className="willa-color-picker-preset-color"
                      style={{ background: presetColor.toRgbString() }}
                      aria-label={`选择 ${presetValue}`}
                      onClick={() =>
                        props.onChange(normalizeColor(item), { complete: true })
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {props.children}
    </div>
  );
};

const bindPointerDrag = (
  element: HTMLElement,
  event: ReactPointerEvent<HTMLElement>,
  onMove: (x: number, y: number, complete: boolean) => void,
) => {
  const update = (clientX: number, clientY: number, complete = false) => {
    const rect = element.getBoundingClientRect();

    onMove(
      clampNumber((clientX - rect.left) / rect.width, 0, 1),
      clampNumber((clientY - rect.top) / rect.height, 0, 1),
      complete,
    );
  };
  const handlePointerMove = (moveEvent: PointerEvent) => {
    update(moveEvent.clientX, moveEvent.clientY);
  };
  const handlePointerUp = (upEvent: PointerEvent) => {
    update(upEvent.clientX, upEvent.clientY, true);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  update(event.clientX, event.clientY);
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", handlePointerUp, { once: true });
};

const getTriggerText = (options: {
  value: string;
  color: ColorPickerColor;
  format: ColorPickerFormat;
  showText: ColorPickerProps["showText"];
}) => {
  if (!options.showText) return null;

  if (typeof options.showText === "function") {
    return options.showText(options.value, options.color);
  }

  return options.value || "未选择";
};
