import type { CSSProperties, ReactElement, ReactNode } from "react";
import { CheckIcon, ClipboardIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { flattenText } from "@willa-ui/shared";

import { Tooltip } from "#content/components/Tooltip";

import type {
  CopyStatus,
  TypographyContentKind,
  TypographyCopyable,
  TypographyEditable,
  TypographyEllipsis,
  TypographyTitleLevel,
} from "#content/components/Typography/types";

export const normalizeEditable = (editable?: TypographyEditable) => {
  if (!editable) return undefined;
  if (editable === true) {
    return {
      defaultEditing: false,
      icon: <Pencil1Icon />,
      tooltip: "编辑",
      triggerType: ["icon"],
    };
  }

  return {
    defaultEditing: editable.defaultEditing ?? false,
    editing: editable.editing,
    maxLength: editable.maxLength,
    autoSize: editable.autoSize,
    text: editable.text,
    icon: editable.icon ?? <Pencil1Icon />,
    tooltip: editable.tooltip === undefined ? "编辑" : editable.tooltip,
    triggerType: editable.triggerType ?? ["icon"],
    enterIcon: editable.enterIcon,
    tabIndex: editable.tabIndex,
    onChange: editable.onChange,
    onCancel: editable.onCancel,
    onStart: editable.onStart,
    onEnd: editable.onEnd,
  };
};

export type NormalizedEditable = NonNullable<
  ReturnType<typeof normalizeEditable>
>;

export const resolveEditableText = (
  editableConfig: NormalizedEditable | undefined,
  children: ReactNode,
) => {
  return editableConfig?.text ?? flattenText(children).trim();
};

export const normalizeEllipsis = (ellipsis?: TypographyEllipsis) => {
  if (!ellipsis) return undefined;
  if (ellipsis === true) {
    return {
      rows: 1,
      expandable: false,
      defaultExpanded: false,
      tooltip: undefined,
    };
  }

  return {
    rows: Math.max(1, ellipsis.rows ?? 1),
    expandable: ellipsis.expandable ?? false,
    expanded: ellipsis.expanded,
    defaultExpanded: ellipsis.defaultExpanded ?? false,
    suffix: ellipsis.suffix,
    symbol: ellipsis.symbol,
    tooltip: ellipsis.tooltip,
    onExpand: ellipsis.onExpand,
    onEllipsis: ellipsis.onEllipsis,
  };
};

export type NormalizedEllipsis = NonNullable<
  ReturnType<typeof normalizeEllipsis>
>;

export const getDefaultExpanded = (ellipsis?: TypographyEllipsis) => {
  if (!ellipsis || ellipsis === true) return false;
  return ellipsis.defaultExpanded ?? false;
};

export const getTypographyContentStyle = (
  ellipsisConfig: NormalizedEllipsis | undefined,
  expanded: boolean,
) => {
  if (!ellipsisConfig || expanded) return undefined;

  return {
    "--willa-typography-ellipsis-rows": ellipsisConfig.rows,
  } as CSSProperties;
};

export const getTypographyTag = (
  kind: TypographyContentKind,
  level: TypographyTitleLevel,
) => {
  if (kind === "paragraph") return "p";
  if (kind === "title") return `h${level}` as const;
  return "span";
};

export const resolveCopyText = (
  copyable: TypographyCopyable | undefined,
  displayText: string,
  children: ReactNode,
) => {
  if (!copyable) return undefined;
  if (typeof copyable === "object" && copyable.text !== undefined) {
    return async () => {
      if (typeof copyable.text === "function") {
        return copyable.text();
      }
      return copyable.text ?? "";
    };
  }
  return async () => displayText || flattenText(children).trim();
};

export const resolveEllipsisSymbol = (
  symbol: ReactNode | ((expanded: boolean) => ReactNode) | undefined,
  expanded: boolean,
) => {
  if (typeof symbol === "function") return symbol(expanded);
  return symbol ?? (expanded ? "收起" : "展开");
};

export const getCopyIcon = (
  copyable: TypographyCopyable | undefined,
  copied: CopyStatus,
) => {
  if (typeof copyable === "object" && Array.isArray(copyable.icon)) {
    return copied === "copied" ? copyable.icon[1] : copyable.icon[0];
  }

  if (typeof copyable === "object" && copyable.icon) {
    return copyable.icon;
  }

  return copied === "copied" ? <CheckIcon /> : <ClipboardIcon />;
};

export const getCopyTooltip = (
  copyable: TypographyCopyable | undefined,
  copied: CopyStatus,
) => {
  if (typeof copyable === "object" && copyable.tooltips === false) {
    return undefined;
  }

  if (typeof copyable === "object" && Array.isArray(copyable.tooltips)) {
    return copied === "copied" ? copyable.tooltips[1] : copyable.tooltips[0];
  }

  return copied === "copied" ? "复制成功" : "复制文本";
};

export const renderTooltip = (
  content: ReactNode | undefined | false,
  children: ReactElement<any>,
) => {
  if (!content) return children;

  return (
    <Tooltip
      content={content}
      contentClassName="willa-typography-tooltip-content"
      size="sm"
    >
      {children}
    </Tooltip>
  );
};

export const updateEllipsized = (
  nextEllipsized: boolean,
  ellipsisConfig: NormalizedEllipsis | undefined,
  setEllipsized: (ellipsis: boolean) => void,
  lastEllipsizedRef: { current: boolean | undefined },
) => {
  setEllipsized(nextEllipsized);

  if (lastEllipsizedRef.current === nextEllipsized) return;
  lastEllipsizedRef.current = nextEllipsized;
  ellipsisConfig?.onEllipsis?.(nextEllipsized);
};
