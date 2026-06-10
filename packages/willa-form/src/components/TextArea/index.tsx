import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";
import classNames from "classnames";

export type TextAreaSize = "sm" | "md" | "lg";
export type TextAreaVariant = "outline" | "soft";
export type TextAreaResize = "none" | "vertical" | "horizontal" | "both";

export type TextAreaProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "size"
> & {
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  resize?: TextAreaResize;
  invalid?: boolean;
  width?: CSSProperties["width"];
  backgroundColor?: string;
  textColor?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      size = "md",
      variant = "outline",
      resize = "vertical",
      invalid = false,
      width,
      backgroundColor,
      textColor,
      className,
      style,
      ...textAreaProps
    } = props;
    const isInvalid =
      invalid ||
      textAreaProps["aria-invalid"] === true ||
      textAreaProps["aria-invalid"] === "true";
    const textAreaStyle = getTextAreaStyle({
      backgroundColor,
      textColor,
      width,
      style,
    });

    return (
      <textarea
        {...textAreaProps}
        ref={ref}
        className={classNames(
          "willa-textarea",
          `willa-textarea--${size}`,
          `willa-textarea--${variant}`,
          `willa-textarea--resize-${resize}`,
          isInvalid && "willa-textarea--invalid",
          className,
        )}
        style={textAreaStyle}
        aria-invalid={isInvalid || textAreaProps["aria-invalid"]}
      />
    );
  },
);

TextArea.displayName = "TextArea";

const getTextAreaStyle = (options: {
  backgroundColor?: string;
  textColor?: string;
  width?: CSSProperties["width"];
  style?: CSSProperties;
}) => {
  const { backgroundColor, textColor, width, style } = options;

  return {
    ...style,
    ...(width === undefined ? undefined : { width }),
    ...(backgroundColor
      ? { "--willa-input-custom-bg": backgroundColor }
      : undefined),
    ...(textColor ? { "--willa-input-custom-text": textColor } : undefined),
  } as CSSProperties;
};
