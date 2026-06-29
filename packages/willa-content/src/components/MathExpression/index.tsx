import { useMemo, type ComponentPropsWithoutRef, type ReactNode } from "react";
import katex, { type KatexOptions } from "katex";
import classNames from "classnames";

export type MathExpressionDisplay = "inline" | "block";

export type MathExpressionProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  value?: string;
  children?: ReactNode;
  display?: MathExpressionDisplay;
  options?: Omit<KatexOptions, "displayMode">;
  fallback?: ReactNode;
};

export function MathExpression(props: MathExpressionProps) {
  const {
    value,
    children,
    display = "inline",
    options,
    fallback,
    className,
    ...rootProps
  } = props;
  const expression = normalizeMathExpression(value ?? children);
  const renderResult = useMemo(
    () =>
      renderMathExpression({
        display,
        expression,
        options,
      }),
    [display, expression, options],
  );
  const Root = display === "block" ? "div" : "span";

  if (renderResult.error) {
    return (
      <Root
        {...rootProps}
        className={classNames(
          "willa-math-expression",
          `willa-math-expression--${display}`,
          "willa-math-expression--invalid",
          className,
        )}
      >
        {fallback ?? expression}
      </Root>
    );
  }

  return (
    <Root
      {...rootProps}
      className={classNames(
        "willa-math-expression",
        `willa-math-expression--${display}`,
        className,
      )}
      dangerouslySetInnerHTML={{ __html: renderResult.html }}
    />
  );
}

const normalizeMathExpression = (value: ReactNode) => {
  if (value == null || typeof value === "boolean") {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value).trim();
  }

  return "";
};

const renderMathExpression = (options: {
  display: MathExpressionDisplay;
  expression: string;
  options?: Omit<KatexOptions, "displayMode">;
}) => {
  const { display, expression } = options;

  if (!expression) {
    return { html: "", error: null };
  }

  try {
    return {
      html: katex.renderToString(expression, {
        strict: "ignore",
        ...options.options,
        displayMode: display === "block",
      }),
      error: null,
    };
  } catch (error) {
    return { html: "", error };
  }
};

MathExpression.displayName = "MathExpression";
