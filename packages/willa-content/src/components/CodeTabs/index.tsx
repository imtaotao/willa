import type { ReactNode } from "react";
import classNames from "classnames";

import { CodeBlock } from "#content/components/CodeBlock";
import { Tabs, type TabsItem } from "#content/components/Tabs";

export type CodeTabsItem = {
  label: ReactNode;
  code: string;
  language?: string;
  disabled?: boolean;
  highlightLines?: Array<number | readonly [start: number, end: number]>;
  showLineNumbers?: boolean;
};

export type CodeTabsSize = "sm" | "md";

export type CodeTabsProps = {
  items: Array<CodeTabsItem>;
  size?: CodeTabsSize;
  showLineNumbers?: boolean;
  copiedDuration?: number;
  className?: string;
};

export function CodeTabs(props: CodeTabsProps) {
  const {
    items,
    size = "md",
    showLineNumbers = false,
    copiedDuration = 300,
    className,
  } = props;

  const tabItems: Array<TabsItem> = items.map((item, index) => ({
    value: String(index),
    label: item.label,
    disabled: item.disabled,
    children: (
      <CodeTabsPanel
        item={item}
        showLineNumbers={showLineNumbers}
        copiedDuration={copiedDuration}
      />
    ),
  }));

  return (
    <Tabs
      items={tabItems}
      size={size}
      ariaLabel="代码示例"
      className={classNames(
        "willa-code-tabs",
        `willa-code-tabs--${size}`,
        className,
      )}
    />
  );
}

function CodeTabsPanel(props: {
  item: CodeTabsItem;
  showLineNumbers: boolean;
  copiedDuration: number;
}) {
  const { item, showLineNumbers, copiedDuration } = props;
  const shouldShowLineNumbers = item.showLineNumbers ?? showLineNumbers;
  const className = createCodeTabsCodeClassName(
    item.language,
    shouldShowLineNumbers,
    item.highlightLines,
  );

  return (
    <div className="willa-code-tabs-panel">
      <CodeBlock copiedDuration={copiedDuration}>
        <code className={className}>{item.code}</code>
      </CodeBlock>
    </div>
  );
}

const createCodeTabsCodeClassName = (
  language = "text",
  showLineNumbers: boolean,
  highlightLines:
    | Array<number | readonly [start: number, end: number]>
    | undefined,
) => {
  const meta = [
    showLineNumbers ? "ln" : "",
    formatCodeTabsHighlightLines(highlightLines),
  ].filter(Boolean);

  if (!meta.length) return `language-${language}`;

  return `language-${language}--meta-${meta.join("_")}`;
};

const formatCodeTabsHighlightLines = (
  highlightLines:
    | Array<number | readonly [start: number, end: number]>
    | undefined,
) => {
  const ranges = (highlightLines ?? [])
    .map((range) => {
      if (typeof range === "number") return String(range);
      return `${range[0]}-${range[1]}`;
    })
    .filter(Boolean);

  return ranges.length ? `{${ranges.join(",")}}` : "";
};
