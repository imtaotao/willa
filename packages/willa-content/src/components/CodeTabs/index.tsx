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
  codeBlockClassName?: string;
};

export function CodeTabs(props: CodeTabsProps) {
  const {
    items,
    size = "md",
    showLineNumbers = false,
    copiedDuration = 300,
    className,
    codeBlockClassName,
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
        codeBlockClassName={codeBlockClassName}
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

const CodeTabsPanel = (props: {
  item: CodeTabsItem;
  showLineNumbers: boolean;
  copiedDuration: number;
  codeBlockClassName?: string;
}) => {
  const { item, showLineNumbers, copiedDuration, codeBlockClassName } = props;
  const shouldShowLineNumbers = item.showLineNumbers ?? showLineNumbers;

  return (
    <div className="willa-code-tabs-panel">
      <CodeBlock
        className={codeBlockClassName}
        code={item.code}
        copiedDuration={copiedDuration}
        highlightLines={item.highlightLines}
        language={item.language}
        showLineNumbers={shouldShowLineNumbers}
      />
    </div>
  );
};
