import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";
import classNames from "classnames";

import {
  Picker,
  type PickerItem,
  type PickerSize,
  type PickerVariant,
} from "#form/components/Picker";

export type SelectSize = PickerSize;
export type SelectVariant = PickerVariant;

export type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
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
    const { options, className, onValueChange, ...pickerProps } = props;
    const items = options.map(toPickerItem);

    return (
      <Picker
        {...pickerProps}
        ref={ref}
        className={classNames("willa-select", className)}
        items={items}
        onValueChange={(nextValue, selectedItems) => {
          const selectedValue = Array.isArray(nextValue)
            ? (nextValue[0] ?? "")
            : nextValue;
          const option = options.find((item) => item.value === selectedValue);
          const selectedItem = selectedItems[0];

          if (option) {
            onValueChange?.(option.value, option);
            return;
          }

          if (selectedItem) {
            onValueChange?.(selectedItem.value, selectedItem);
          }
        }}
      />
    );
  },
);

Select.displayName = "Select";

const toPickerItem = (option: SelectOption): PickerItem => ({
  value: option.value,
  label: option.label,
  disabled: option.disabled,
});
