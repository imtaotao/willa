import {
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  ChevronDownIcon,
  CheckIcon,
  Cross2Icon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type ReasoningStepStatus = "pending" | "active" | "done" | "error";
export type ReasoningStepsSize = "sm" | "md";

export type ReasoningStepItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  content?: ReactNode;
  icon?: ReactNode;
  status?: ReasoningStepStatus;
};

export type ReasoningStepClickEvent = {
  step: ReasoningStepItem;
  index: number;
  status: ReasoningStepStatus;
  event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>;
};

export type ReasoningStepsProps = {
  steps: Array<ReasoningStepItem>;
  activeStep?: number;
  size?: ReasoningStepsSize;
  compact?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  summary?: ReactNode;
  onStepClick?: (event: ReasoningStepClickEvent) => void;
  onCollapsedChange?: (collapsed: boolean) => void;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

export function ReasoningSteps({
  steps,
  activeStep = 0,
  size = "md",
  compact = false,
  collapsible = false,
  collapsed,
  defaultCollapsed = false,
  summary,
  onStepClick,
  onCollapsedChange,
  className,
  ...props
}: ReasoningStepsProps) {
  const isInteractive = Boolean(onStepClick);
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = collapsible ? (collapsed ?? internalCollapsed) : false;
  const currentStep = steps[activeStep] ?? steps[steps.length - 1];
  const resolvedSummary =
    summary ?? currentStep?.title ?? `${steps.length} 个处理步骤`;

  const handleToggle = () => {
    const nextCollapsed = !isCollapsed;
    if (collapsed === undefined) {
      setInternalCollapsed(nextCollapsed);
    }
    onCollapsedChange?.(nextCollapsed);
  };

  return (
    <div
      {...props}
      className={classNames(
        "willa-reasoning-steps",
        `willa-reasoning-steps--${size}`,
        compact && "willa-reasoning-steps--compact",
        isInteractive && "willa-reasoning-steps--interactive",
        collapsible && "willa-reasoning-steps--collapsible",
        isCollapsed && "willa-reasoning-steps--collapsed",
        className,
      )}
    >
      {collapsible ? (
        <button
          className="willa-reasoning-steps-toggle"
          type="button"
          aria-expanded={!isCollapsed}
          onClick={handleToggle}
        >
          <span className="willa-reasoning-steps-toggle-main">
            <span className="willa-reasoning-steps-toggle-title">
              {isCollapsed ? "查看处理过程" : "收起处理过程"}
            </span>
            <span className="willa-reasoning-steps-toggle-summary">
              {resolvedSummary}
            </span>
          </span>
          <span className="willa-reasoning-steps-toggle-meta">
            {steps.length} 步
          </span>
          <ChevronDownIcon className="willa-reasoning-steps-toggle-icon" />
        </button>
      ) : null}

      {!isCollapsed ? (
        <ol className="willa-reasoning-steps-list">
          {steps.map((step, index) => {
            const status = resolveReasoningStepStatus(step, index, activeStep);

            return (
              <li
                key={step.id}
                className={classNames(
                  "willa-reasoning-step",
                  `willa-reasoning-step--${status}`,
                )}
                role={isInteractive ? "button" : undefined}
                tabIndex={isInteractive ? 0 : undefined}
                onClick={(event) => {
                  onStepClick?.({ step, index, status, event });
                }}
                onKeyDown={(event) => {
                  if (!onStepClick) {
                    return;
                  }

                  if (event.key !== "Enter" && event.key !== " ") {
                    return;
                  }

                  event.preventDefault();
                  onStepClick({ step, index, status, event });
                }}
              >
                <span
                  className="willa-reasoning-step-marker"
                  aria-hidden="true"
                >
                  {step.icon ?? <ReasoningStepMark status={status} />}
                </span>
                <span className="willa-reasoning-step-body">
                  <span className="willa-reasoning-step-header">
                    <span className="willa-reasoning-step-title">
                      {step.title}
                    </span>
                    {step.meta ? (
                      <span className="willa-reasoning-step-meta">
                        {step.meta}
                      </span>
                    ) : null}
                  </span>
                  {step.description ? (
                    <span className="willa-reasoning-step-description">
                      {step.description}
                    </span>
                  ) : null}
                  {step.content ? (
                    <span className="willa-reasoning-step-content">
                      {step.content}
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>
  );
}

const ReasoningStepMark = ({ status }: { status: ReasoningStepStatus }) => {
  if (status === "done") {
    return <CheckIcon />;
  }
  if (status === "error") {
    return <Cross2Icon />;
  }
  if (status === "active") {
    return <DotsHorizontalIcon />;
  }
  return <span className="willa-reasoning-step-dot" />;
};

const resolveReasoningStepStatus = (
  step: ReasoningStepItem,
  index: number,
  activeStep: number,
) => {
  if (step.status) {
    return step.status;
  }
  if (index < activeStep) {
    return "done";
  }
  if (index === activeStep) {
    return "active";
  }
  return "pending";
};
