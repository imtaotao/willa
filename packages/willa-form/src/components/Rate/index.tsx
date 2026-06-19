import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { Tooltip } from "@willa-ui/content/components/Tooltip";

export type RateSize = "sm" | "md" | "lg";

export type RateCharacterRenderContext = {
  index: number;
  value: number;
  active: boolean;
  half: boolean;
  focused: boolean;
  disabled: boolean;
};

export type RateRef = {
  focus: () => void;
  blur: () => void;
};

export type RateProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "defaultValue" | "onChange" | "onKeyDown"
> & {
  value?: number;
  defaultValue?: number;
  count?: number;
  allowClear?: boolean;
  allowHalf?: boolean;
  autoFocus?: boolean;
  character?: ReactNode | ((context: RateCharacterRenderContext) => ReactNode);
  disabled?: boolean;
  keyboard?: boolean;
  name?: string;
  size?: RateSize;
  tooltips?: Array<string>;
  onBlur?: (event: FocusEvent<HTMLDivElement>) => void;
  onChange?: (value: number) => void;
  onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
  onHoverChange?: (value: number) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
};

const defaultCount = 5;

export const Rate = forwardRef<RateRef, RateProps>((props, ref) => {
  const {
    value,
    defaultValue = 0,
    count = defaultCount,
    allowClear = true,
    allowHalf = false,
    autoFocus = false,
    character,
    disabled = false,
    keyboard = true,
    name,
    size = "md",
    tooltips = [],
    className,
    style,
    tabIndex,
    onBlur,
    onChange,
    onFocus,
    onHoverChange,
    onKeyDown,
    onMouseLeave,
    ...rootProps
  } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isControlled = value !== undefined;
  const normalizedCount = Math.max(1, Math.floor(count));
  const [innerValue, setInnerValue] = useState(() =>
    normalizeRateValue(defaultValue, normalizedCount, allowHalf),
  );
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [focused, setFocused] = useState(false);
  const currentValue = normalizeRateValue(
    isControlled ? value : innerValue,
    normalizedCount,
    allowHalf,
  );
  const displayValue = hoverValue ?? currentValue;
  const step = allowHalf ? 0.5 : 1;
  const items = useMemo(
    () => Array.from({ length: normalizedCount }, (_, index) => index + 1),
    [normalizedCount],
  );

  useImperativeHandle(
    ref,
    () => ({
      focus: () => rootRef.current?.focus(),
      blur: () => rootRef.current?.blur(),
    }),
    [],
  );

  useEffect(() => {
    if (autoFocus && !disabled) {
      rootRef.current?.focus();
    }
  }, [autoFocus, disabled]);

  const setRateValue = (
    nextValue: number,
    options: { clearable?: boolean } = {},
  ) => {
    const normalizedValue = normalizeRateValue(
      nextValue,
      normalizedCount,
      allowHalf,
    );
    const resolvedValue =
      options.clearable && allowClear && normalizedValue === currentValue
        ? 0
        : normalizedValue;

    if (!isControlled) {
      setInnerValue(resolvedValue);
    }
    onChange?.(resolvedValue);
  };

  const updateHoverValue = (nextValue: number | null) => {
    setHoverValue(nextValue);
    onHoverChange?.(nextValue ?? 0);
  };

  const handleItemMouseMove = (
    event: MouseEvent<HTMLSpanElement>,
    index: number,
  ) => {
    if (disabled) return;
    updateHoverValue(getValueFromPointer(event, index, allowHalf));
  };

  const handleItemClick = (
    event: MouseEvent<HTMLSpanElement>,
    index: number,
  ) => {
    if (disabled) return;
    rootRef.current?.focus();
    setRateValue(getValueFromPointer(event, index, allowHalf), {
      clearable: true,
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || disabled || !keyboard) return;

    const nextValue = getKeyboardValue({
      count: normalizedCount,
      currentValue,
      key: event.key,
      step,
    });
    if (nextValue === null) return;

    event.preventDefault();
    setRateValue(nextValue);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    setFocused(false);
    updateHoverValue(null);
    onBlur?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    updateHoverValue(null);
    onMouseLeave?.(event);
  };

  const valueText =
    tooltips[Math.ceil(displayValue) - 1] ??
    `${displayValue}/${normalizedCount}`;

  return (
    <div
      {...rootProps}
      ref={rootRef}
      className={classNames(
        "willa-rate",
        `willa-rate--${size}`,
        disabled && "willa-rate--disabled",
        focused && "willa-rate--focused",
        className,
      )}
      style={style}
      role="slider"
      aria-disabled={disabled || undefined}
      aria-valuemin={0}
      aria-valuemax={normalizedCount}
      aria-valuenow={displayValue}
      aria-valuetext={valueText}
      tabIndex={disabled ? undefined : (tabIndex ?? 0)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onMouseLeave={handleMouseLeave}
    >
      <span className="willa-rate-items" aria-hidden="true">
        {items.map((index) => {
          const activeWidth = getActiveWidth(displayValue, index);
          const active = activeWidth > 0;
          const half = activeWidth > 0 && activeWidth < 100;
          const itemStyle = {
            "--willa-rate-active-width": `${activeWidth}%`,
          } as CSSProperties;

          const rateItem = (
            <span
              key={index}
              className={classNames(
                "willa-rate-item",
                active && "willa-rate-item--active",
                half && "willa-rate-item--half",
              )}
              style={itemStyle}
              onClick={(event) => handleItemClick(event, index)}
              onMouseMove={(event) => handleItemMouseMove(event, index)}
            >
              <span className="willa-rate-character willa-rate-character--base">
                {renderCharacter({
                  character,
                  disabled,
                  focused,
                  active: false,
                  half: false,
                  index,
                  value: displayValue,
                })}
              </span>
              <span
                className="willa-rate-character willa-rate-character--active"
                aria-hidden="true"
              >
                {renderCharacter({
                  character,
                  disabled,
                  focused,
                  active,
                  half,
                  index,
                  value: displayValue,
                })}
              </span>
            </span>
          );

          const tooltip = tooltips[index - 1];

          return tooltip ? (
            <Tooltip key={index} content={tooltip} side="top" size="sm">
              {rateItem}
            </Tooltip>
          ) : (
            rateItem
          );
        })}
      </span>
      {name ? (
        <input
          type="hidden"
          name={name}
          value={currentValue}
          disabled={disabled}
        />
      ) : null}
    </div>
  );
});

Rate.displayName = "Rate";

const renderCharacter = (options: {
  character?: ReactNode | ((context: RateCharacterRenderContext) => ReactNode);
  index: number;
  value: number;
  active: boolean;
  half: boolean;
  focused: boolean;
  disabled: boolean;
}) => {
  if (typeof options.character === "function") {
    return options.character({
      active: options.active,
      disabled: options.disabled,
      focused: options.focused,
      half: options.half,
      index: options.index,
      value: options.value,
    });
  }
  return options.character ?? <RateStarIcon />;
};

const RateStarIcon = () => {
  return (
    <svg
      className="willa-rate-star"
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M12 2.8l2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 17.2l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.8z" />
    </svg>
  );
};

RateStarIcon.displayName = "RateStarIcon";

const normalizeRateValue = (
  value: number | undefined,
  count: number,
  allowHalf: boolean,
) => {
  const numericValue = Number.isFinite(value) ? Number(value) : 0;
  const step = allowHalf ? 0.5 : 1;
  const steppedValue = Math.round(numericValue / step) * step;
  return Math.min(count, Math.max(0, steppedValue));
};

const getValueFromPointer = (
  event: MouseEvent<HTMLSpanElement>,
  index: number,
  allowHalf: boolean,
) => {
  if (!allowHalf) return index;
  const rect = event.currentTarget.getBoundingClientRect();
  const isFirstHalf = event.clientX - rect.left <= rect.width / 2;
  return isFirstHalf ? index - 0.5 : index;
};

const getActiveWidth = (value: number, index: number) => {
  if (value >= index) return 100;
  if (value <= index - 1) return 0;
  return (value - (index - 1)) * 100;
};

const getKeyboardValue = (options: {
  count: number;
  currentValue: number;
  key: string;
  step: number;
}) => {
  const { count, currentValue, key, step } = options;
  if (key === "ArrowRight" || key === "ArrowUp") {
    return Math.min(count, currentValue + step);
  }
  if (key === "ArrowLeft" || key === "ArrowDown") {
    return Math.max(0, currentValue - step);
  }
  if (key === "Home") return 0;
  if (key === "End") return count;
  return null;
};
