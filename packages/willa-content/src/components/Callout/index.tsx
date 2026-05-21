import type { ReactNode } from "react";
import classNames from "classnames";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

export type CalloutTone = "note" | "tip" | "warning" | "success" | "error";

export type CalloutProps = {
  tone?: CalloutTone;
  title?: ReactNode;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

const toneTitleMap: Record<CalloutTone, string> = {
  note: "说明",
  tip: "提示",
  warning: "注意",
  success: "完成",
  error: "错误",
};

const toneIconMap: Record<CalloutTone, ReactNode> = {
  note: <InfoCircledIcon />,
  tip: <LightningBoltIcon />,
  warning: <ExclamationTriangleIcon />,
  success: <CheckCircledIcon />,
  error: <CrossCircledIcon />,
};

export function Callout(props: CalloutProps) {
  const { tone = "note", title, icon, className, children } = props;
  const resolvedTitle = title ?? toneTitleMap[tone];
  const resolvedIcon = icon ?? toneIconMap[tone];

  return (
    <aside
      className={classNames(
        "willa-callout",
        `willa-callout--${tone}`,
        className,
      )}
    >
      <div className="willa-callout-header">
        <span className="willa-callout-icon">{resolvedIcon}</span>
        {resolvedTitle ? (
          <div className="willa-callout-title">{resolvedTitle}</div>
        ) : null}
      </div>
      <div className="willa-callout-body">{children}</div>
    </aside>
  );
}
