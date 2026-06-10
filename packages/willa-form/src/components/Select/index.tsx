import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ForwardedRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

export type SelectSize = "sm" | "md" | "lg";
export type SelectVariant = "outline" | "soft";

export type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type SelectListPosition = {
  left: number;
  top: number;
  width: number;
};

export type SelectProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "defaultValue" | "onChange" | "value"
> & {
  options: Array<SelectOption>;
  size?: SelectSize;
  variant?: SelectVariant;
  width?: CSSProperties["width"];
  invalid?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, option: SelectOption) => void;
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (props, ref) => {
    const {
      options,
      size = "md",
      variant = "outline",
      width,
      invalid = false,
      placeholder = "请选择",
      name,
      value,
      defaultValue = "",
      onValueChange,
      className,
      disabled,
      style,
      id,
      onBlur,
      onClick,
      onKeyDown,
      ...buttonProps
    } = props;
    const generatedId = useId();
    const buttonId = id ?? generatedId;
    const listboxId = `${buttonId}-listbox`;
    const rootRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [listPosition, setListPosition] = useState<SelectListPosition | null>(
      null,
    );
    const currentValue = value ?? innerValue;
    const selectedOption = options.find(
      (option) => option.value === currentValue,
    );
    const activeOption =
      selectedOption ?? options.find((option) => !option.disabled);
    const isInvalid =
      invalid ||
      buttonProps["aria-invalid"] === true ||
      buttonProps["aria-invalid"] === "true";
    const selectStyle = getSelectStyle({ width, style });

    const setButtonRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      assignForwardedRef(ref, node);
    };

    const updateListPosition = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const viewportPadding = 8;
      const gap = 6;
      const listHeight = listRef.current?.offsetHeight ?? 288;
      const width = Math.min(
        rect.width,
        window.innerWidth - viewportPadding * 2,
      );
      const left = clamp(
        rect.left,
        viewportPadding,
        window.innerWidth - viewportPadding - width,
      );
      const belowTop = rect.bottom + gap;
      const aboveTop = rect.top - gap - listHeight;
      const hasBottomSpace =
        window.innerHeight - rect.bottom - viewportPadding >= listHeight;
      const top = hasBottomSpace
        ? belowTop
        : Math.max(viewportPadding, aboveTop);

      setListPosition({ left, top, width });
    };

    useEffect(() => {
      if (!open) return;

      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node;

        if (
          !rootRef.current?.contains(target) &&
          !listRef.current?.contains(target)
        ) {
          setOpen(false);
        }
      };
      const handleViewportChange = () => {
        updateListPosition();
      };

      updateListPosition();
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("resize", handleViewportChange);
      window.addEventListener("scroll", handleViewportChange, true);

      return () => {
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("resize", handleViewportChange);
        window.removeEventListener("scroll", handleViewportChange, true);
      };
    }, [open]);

    useEffect(() => {
      if (open) {
        updateListPosition();
      } else {
        setListPosition(null);
      }
    }, [open, options]);

    const commitValue = (option: SelectOption) => {
      if (option.disabled) return;

      if (value === undefined) {
        setInnerValue(option.value);
      }

      onValueChange?.(option.value, option);
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (!open) {
          setOpen(true);
          return;
        }

        if (activeOption) {
          commitValue(activeOption);
        }
      }
    };

    const listbox =
      open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={listRef}
              id={listboxId}
              className="willa-select-list"
              role="listbox"
              aria-labelledby={buttonId}
              style={
                listPosition
                  ? {
                      left: listPosition.left,
                      top: listPosition.top,
                      width: listPosition.width,
                    }
                  : { left: 0, top: 0, visibility: "hidden" }
              }
            >
              {options.map((option) => {
                const selected = option.value === currentValue;

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={classNames(
                      "willa-select-option",
                      selected && "willa-select-option--selected",
                    )}
                    role="option"
                    aria-selected={selected}
                    disabled={option.disabled}
                    onClick={() => commitValue(option)}
                  >
                    <span className="willa-select-option-label">
                      {option.label}
                    </span>
                    {selected ? (
                      <CheckIcon
                        className="willa-select-option-icon"
                        aria-hidden="true"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>,
            document.body,
          )
        : null;

    return (
      <span
        ref={rootRef}
        className={classNames(
          "willa-select",
          `willa-select--${size}`,
          `willa-select--${variant}`,
          open && "willa-select--open",
          disabled && "willa-select--disabled",
          isInvalid && "willa-select--invalid",
          className,
        )}
        style={selectStyle}
        aria-disabled={disabled || undefined}
      >
        {name ? (
          <input
            type="hidden"
            name={name}
            value={currentValue}
            disabled={disabled}
          />
        ) : null}
        <button
          {...buttonProps}
          ref={setButtonRef}
          id={buttonId}
          type="button"
          className="willa-select-control"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-invalid={isInvalid || buttonProps["aria-invalid"]}
          onBlur={onBlur}
          onClick={(event) => {
            onClick?.(event);
            if (!event.defaultPrevented) {
              setOpen((current) => !current);
            }
          }}
          onKeyDown={handleKeyDown}
        >
          <span
            className={classNames(
              "willa-select-value",
              !selectedOption && "willa-select-value--placeholder",
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon className="willa-select-icon" aria-hidden="true" />
        </button>
        {listbox}
      </span>
    );
  },
);

Select.displayName = "Select";

const getSelectStyle = (options: {
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
  } as CSSProperties;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const assignForwardedRef = (
  ref: ForwardedRef<HTMLButtonElement>,
  node: HTMLButtonElement | null,
) => {
  if (typeof ref === "function") {
    ref(node);
    return;
  }

  if (ref) {
    ref.current = node;
  }
};
