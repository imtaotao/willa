import { useEffect, useState, type ComponentProps } from "react";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { isArray } from "aidly";
import classNames from "classnames";

import {
  copyToClipboard,
  highlightCodeToHtml,
  parseCodeMeta,
} from "@willa-ui/shared";

export type CodeBlockProps = ComponentProps<"pre"> & {
  children?: unknown;
  copiedDuration?: number;
};

export function CodeBlock(props: CodeBlockProps) {
  const { copiedDuration = 300 } = props;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timer = window.setTimeout(
      () => setCopyStatus("idle"),
      copiedDuration,
    );
    return () => window.clearTimeout(timer);
  }, [copiedDuration, copyStatus]);

  const child = isArray(props.children) ? props.children[0] : props.children;

  if (child && typeof child === "object" && "props" in (child as any)) {
    const codeProps = (child as any).props as {
      className?: string;
      children?: unknown;
    };
    const { rawLanguage, highlightLines, showLineNumbers } = parseCodeMeta(
      codeProps.className,
    );
    const code = String(codeProps.children ?? "").replace(/\n$/, "");
    const { html, display } = highlightCodeToHtml(code, rawLanguage);
    const label = (display || rawLanguage || "txt").toLowerCase();
    const lines = html.split("\n");
    const lineNumbers = Array.from({ length: lines.length }, (_, index) =>
      String(index + 1),
    );

    return (
      <div
        className={classNames(
          "willa-prose-pre",
          copyStatus === "copied" && "willa-prose-pre--copied",
        )}
      >
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
                void (async () => {
                  setCopyStatus("idle");
                  const ok = await copyToClipboard(code);
                  setCopyStatus(ok ? "copied" : "failed");
                })();
              }}
            >
              {copyStatus === "copied" ? <CheckIcon /> : <ClipboardIcon />}
            </button>
          </div>
          <code className={`willa-prose-code hljs language-${rawLanguage}`}>
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              return (
                <span
                  key={lineNumber}
                  className={classNames(
                    "willa-prose-code-line",
                    !showLineNumbers && "willa-prose-code-line--single",
                    highlightLines.has(lineNumber) &&
                      "willa-prose-code-line--highlight",
                  )}
                >
                  {showLineNumbers ? (
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

  return <div className="willa-prose-pre">{props.children}</div>;
}
