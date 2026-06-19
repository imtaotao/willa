import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { isArray } from "aidly";
import classNames from "classnames";

import {
  createCodeHighlightLines,
  highlightCodeToHtml,
  parseCodeMeta,
  useCopyToClipboard,
} from "@willa-ui/shared";

export type CodeBlockHighlightLine =
  | number
  | readonly [start: number, end: number];

export type CodeBlockProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> & {
  children?: ReactNode;
  code?: string;
  language?: string;
  showLineNumbers?: boolean;
  highlightLines?: Array<CodeBlockHighlightLine>;
  copiedDuration?: number;
};

export function CodeBlock(props: CodeBlockProps) {
  const {
    children,
    code,
    language,
    showLineNumbers,
    highlightLines,
    copiedDuration = 300,
    className,
    node: _node,
    ...rootProps
  } = props as CodeBlockProps & { node?: unknown };
  const { status: copyStatus, copy } = useCopyToClipboard({
    resetDuration: copiedDuration,
  });

  const codeInput = resolveCodeBlockInput({
    children,
    code,
    highlightLines,
    language,
    showLineNumbers,
  });

  if (codeInput) {
    const { html, display } = highlightCodeToHtml(
      codeInput.code,
      codeInput.rawLanguage,
    );
    const label = (display || codeInput.rawLanguage || "txt").toLowerCase();
    const lines = html.split("\n");
    const rawLines = codeInput.code.split("\n");
    const maxLineLength = Math.max(1, ...rawLines.map((line) => line.length));
    const codeStyle = {
      "--willa-code-scroll-width": `calc(${maxLineLength}ch + ${
        codeInput.showLineNumbers ? "8.05rem" : "5rem"
      })`,
    } as CSSProperties;
    const lineNumbers = Array.from({ length: lines.length }, (_, index) =>
      String(index + 1),
    );

    return (
      <div {...rootProps} className={classNames("willa-prose-pre", className)}>
        <div className="willa-prose-code-block">
          <div className="willa-prose-code-meta">
            <span className="willa-prose-code-lang" aria-hidden="true">
              {label}
            </span>
            <button
              type="button"
              className={classNames(
                "willa-prose-code-copy",
                copyStatus === "copied" && "willa-prose-code-copy--copied",
              )}
              aria-label={`复制 ${label} 代码`}
              onClick={(event) => {
                if (event.detail > 0) {
                  event.currentTarget.blur();
                }
                void copy(codeInput.code);
              }}
            >
              {copyStatus === "copied" ? <CheckIcon /> : <ClipboardIcon />}
            </button>
          </div>
          <code
            className={`willa-prose-code hljs language-${codeInput.rawLanguage}`}
            style={codeStyle}
          >
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              return (
                <span
                  key={lineNumber}
                  className={classNames(
                    "willa-prose-code-line",
                    !codeInput.showLineNumbers &&
                      "willa-prose-code-line--single",
                    codeInput.highlightLines.has(lineNumber) &&
                      "willa-prose-code-line--highlight",
                  )}
                >
                  {codeInput.showLineNumbers ? (
                    <span className="willa-prose-code-line-number">
                      {lineNumbers[index]}
                    </span>
                  ) : null}
                  <span
                    className="willa-prose-code-line-content"
                    dangerouslySetInnerHTML={{ __html: line || " " }}
                  />
                </span>
              );
            })}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div {...rootProps} className={classNames("willa-prose-pre", className)}>
      {children}
    </div>
  );
}

const resolveCodeBlockInput = (options: {
  children?: ReactNode;
  code?: string;
  highlightLines?: Array<CodeBlockHighlightLine>;
  language?: string;
  showLineNumbers?: boolean;
}) => {
  const { children, code, highlightLines, language, showLineNumbers } = options;

  if (code !== undefined) {
    return {
      code: code.replace(/\n$/, ""),
      highlightLines: createCodeHighlightLines(highlightLines),
      rawLanguage: language ?? "text",
      showLineNumbers: showLineNumbers ?? false,
    };
  }

  const child = isArray(children) ? children[0] : children;
  if (!child || typeof child !== "object" || !("props" in child)) {
    return undefined;
  }

  const codeProps = (
    child as { props: { className?: string; children?: unknown } }
  ).props;
  const meta = parseCodeMeta(codeProps.className);

  return {
    code: String(codeProps.children ?? "").replace(/\n$/, ""),
    highlightLines:
      highlightLines === undefined
        ? meta.highlightLines
        : createCodeHighlightLines(highlightLines),
    rawLanguage: language ?? meta.rawLanguage,
    showLineNumbers: showLineNumbers ?? meta.showLineNumbers,
  };
};

CodeBlock.displayName = "CodeBlock";
