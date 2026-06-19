import type { MouseEventHandler } from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";

import { Button } from "#content/components/Button";
import { IconButton } from "#content/components/IconButton";

import type {
  CopyStatus,
  TypographyClassNames,
  TypographyCopyable,
  TypographyStyles,
} from "#content/components/Typography/types";
import type {
  NormalizedEditable,
  NormalizedEllipsis,
} from "#content/components/Typography/utils";
import {
  getCopyIcon,
  getCopyTooltip,
  renderTooltip,
  resolveEllipsisSymbol,
} from "#content/components/Typography/utils";

type TypographyActionsViewProps = {
  canCopy: boolean;
  canEditByIcon: boolean;
  copied: CopyStatus;
  copyable: TypographyCopyable | undefined;
  editableConfig: NormalizedEditable | undefined;
  ellipsisConfig: NormalizedEllipsis | undefined;
  expanded: boolean;
  classNames?: TypographyClassNames;
  styles?: TypographyStyles;
  onCopy: () => void;
  onEditStart: () => void;
  onExpand: MouseEventHandler<HTMLButtonElement>;
};

export function TypographyActionsView(props: TypographyActionsViewProps) {
  const {
    canCopy,
    canEditByIcon,
    copied,
    copyable,
    editableConfig,
    ellipsisConfig,
    expanded,
    classNames,
    styles,
    onCopy,
    onEditStart,
    onExpand,
  } = props;

  return (
    <span
      className={
        classNames?.actions
          ? `willa-typography-actions ${classNames.actions}`
          : "willa-typography-actions"
      }
      style={styles?.actions}
    >
      {canCopy
        ? renderTooltip(
            getCopyTooltip(copyable, copied),
            <IconButton
              className={
                classNames?.action
                  ? `willa-typography-action willa-typography-action--copy ${classNames.action}`
                  : "willa-typography-action willa-typography-action--copy"
              }
              ariaLabel={copied === "copied" ? "已复制" : "复制文本"}
              icon={getCopyIcon(copyable, copied)}
              shape="square"
              size="sm"
              tabIndex={
                typeof copyable === "object" ? copyable.tabIndex : undefined
              }
              type="button"
              variant="ghost"
              onClick={onCopy}
            />,
          )
        : null}
      {canEditByIcon
        ? renderTooltip(
            editableConfig?.tooltip,
            <IconButton
              className={
                classNames?.action
                  ? `willa-typography-action willa-typography-action--edit ${classNames.action}`
                  : "willa-typography-action willa-typography-action--edit"
              }
              ariaLabel="编辑文本"
              icon={editableConfig?.icon ?? <Pencil1Icon />}
              shape="square"
              size="sm"
              tabIndex={editableConfig?.tabIndex}
              type="button"
              variant="ghost"
              onClick={onEditStart}
            />,
          )
        : null}
      {ellipsisConfig?.expandable ? (
        <Button
          className={
            classNames?.action
              ? `willa-typography-action willa-typography-action--expand ${classNames.action}`
              : "willa-typography-action willa-typography-action--expand"
          }
          size="sm"
          type="button"
          variant="link"
          onClick={onExpand}
        >
          {resolveEllipsisSymbol(ellipsisConfig.symbol, expanded)}
        </Button>
      ) : null}
    </span>
  );
}

TypographyActionsView.displayName = "TypographyActionsView";
