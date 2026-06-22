import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useId, type ReactNode } from "react";

import { useControllableState } from "@willa-ui/shared";

export type CollapseSize = "sm" | "md" | "lg";

export type CollapseProps = {
  title: ReactNode;
  hint?: ReactNode;
  icon?: ReactNode;
  extra?: ReactNode;
  size?: CollapseSize;
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  bodyClassName?: string;
  children?: ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export function Collapse(props: CollapseProps) {
  const {
    title,
    hint,
    icon,
    extra,
    size = "md",
    open,
    defaultOpen = false,
    disabled = false,
    className,
    triggerClassName,
    bodyClassName,
    children,
    onOpenChange,
  } = props;
  const triggerId = useId();
  const contentId = useId();
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const handleTriggerClick = () => {
    if (disabled) return;
    setIsOpen((currentOpen) => !currentOpen);
  };

  return (
    <section
      className={classNames(
        "willa-collapse",
        `willa-collapse--${size}`,
        isOpen && "willa-collapse--open",
        disabled && "willa-collapse--disabled",
        className,
      )}
    >
      <div className="willa-collapse-header">
        <button
          id={triggerId}
          type="button"
          className={classNames("willa-collapse-trigger", triggerClassName)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          disabled={disabled}
          onClick={handleTriggerClick}
        >
          <span className="willa-collapse-trigger-main">
            <span className="willa-collapse-trigger-title-row">
              {icon ? (
                <span
                  className="willa-collapse-trigger-icon"
                  aria-hidden="true"
                >
                  {icon}
                </span>
              ) : null}
              <span className="willa-collapse-trigger-title">{title}</span>
            </span>
            {hint ? (
              <span className="willa-collapse-trigger-hint">{hint}</span>
            ) : null}
          </span>
          <span className="willa-collapse-trigger-chevron" aria-hidden="true">
            <ChevronDownIcon />
          </span>
        </button>
        {extra ? <div className="willa-collapse-extra">{extra}</div> : null}
      </div>

      <div
        id={contentId}
        aria-labelledby={triggerId}
        role="region"
        className={classNames("willa-collapse-body", bodyClassName)}
        hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  );
}
