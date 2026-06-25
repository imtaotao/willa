import { useState, type ReactNode } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type CardCollapseOptions = {
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  hasContent: boolean;
  summary?: ReactNode;
  defaultSummary: string;
  onCollapsedChange?: (collapsed: boolean) => void;
};

export type CollapsibleStateOptions = {
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  hasContent?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
};

export function useCollapsibleState(options: CollapsibleStateOptions) {
  const {
    collapsible = false,
    collapsed,
    defaultCollapsed = false,
    hasContent = true,
    onCollapsedChange,
  } = options;

  const canCollapse = collapsible && hasContent;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = canCollapse ? (collapsed ?? internalCollapsed) : false;

  const toggleCollapsed = () => {
    const nextCollapsed = !isCollapsed;
    if (collapsed === undefined) {
      setInternalCollapsed(nextCollapsed);
    }
    onCollapsedChange?.(nextCollapsed);
  };

  return {
    canCollapse,
    isCollapsed,
    toggleCollapsed,
  };
}

export function useCardCollapse(options: CardCollapseOptions) {
  const { summary, defaultSummary, ...collapsibleOptions } = options;
  const collapseState = useCollapsibleState(collapsibleOptions);

  return {
    ...collapseState,
    resolvedSummary: summary ?? defaultSummary,
  };
}

export type CardToggleProps = {
  className: string;
  textClassName: string;
  iconClassName: string;
  summary: ReactNode;
  expanded: boolean;
  onClick: () => void;
};

export function CardToggle(props: CardToggleProps) {
  const {
    className,
    textClassName,
    iconClassName,
    summary,
    expanded,
    onClick,
  } = props;

  return (
    <button
      className={className}
      type="button"
      aria-expanded={expanded}
      onClick={onClick}
    >
      <span className={textClassName}>{summary}</span>
      <ChevronDownIcon className={iconClassName} />
    </button>
  );
}
