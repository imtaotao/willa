import type { ReactNode } from "react";
import classNames from "classnames";

export type DetailsBlockProps = {
  title: string;
  hint?: string;
  defaultOpen?: boolean;
  className?: string;
  children?: ReactNode;
};

export function DetailsBlock(props: DetailsBlockProps) {
  const {
    title,
    hint = "展开 / 收起",
    defaultOpen = false,
    className,
    children,
  } = props;

  return (
    <details
      className={classNames("willa-details", className)}
      open={defaultOpen}
    >
      <summary className="willa-details-summary">
        <span className="willa-details-summary-text">{title}</span>
        <span className="willa-details-summary-hint">{hint}</span>
      </summary>
      <div className="willa-details-body">{children}</div>
    </details>
  );
}

DetailsBlock.displayName = "DetailsBlock";
