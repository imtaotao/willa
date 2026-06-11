import {
  forwardRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { Input, type InputProps } from "#form/components/Input";

export type SearchInputProps = Omit<
  InputProps,
  | "defaultValue"
  | "leadingIcon"
  | "trailingAddon"
  | "trailingIcon"
  | "type"
  | "value"
> & {
  value?: string;
  defaultValue?: string;
  clearable?: boolean;
  clearLabel?: string;
  onValueChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const {
      value,
      defaultValue = "",
      clearable = true,
      clearLabel = "清空搜索",
      placeholder = "搜索",
      className,
      disabled,
      onChange,
      onKeyDown,
      onValueChange,
      onSearch,
      onClear,
      ...inputProps
    } = props;
    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = useState(defaultValue);
    const currentValue = isControlled ? value : innerValue;
    const showClear = clearable && Boolean(currentValue) && !disabled;

    const updateValue = (nextValue: string) => {
      if (!isControlled) {
        setInnerValue(nextValue);
      }

      onValueChange?.(nextValue);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateValue(event.target.value);
      onChange?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && !event.nativeEvent.isComposing) {
        onSearch?.(currentValue.trim());
      }

      onKeyDown?.(event);
    };

    const handleClear = () => {
      updateValue("");
      onClear?.();
    };

    return (
      <Input
        {...inputProps}
        ref={ref}
        type="search"
        className={classNames("willa-search-input", className)}
        value={currentValue}
        placeholder={placeholder}
        disabled={disabled}
        leadingIcon={<MagnifyingGlassIcon />}
        trailingAddon={
          showClear ? (
            <button
              className="willa-search-input-clear"
              type="button"
              aria-label={clearLabel}
              onClick={handleClear}
            >
              <Cross2Icon />
            </button>
          ) : null
        }
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
