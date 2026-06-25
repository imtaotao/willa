import {
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
import {
  Timeline,
  type TimelineItem,
} from "@willa-ui/content/components/Timeline";
import { useCollapsibleState } from "#ai/internal/cardCollapse";

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
  const { canCollapse, isCollapsed, toggleCollapsed } = useCollapsibleState({
    collapsible,
    collapsed,
    defaultCollapsed,
    onCollapsedChange,
  });
  const currentStep = steps[activeStep] ?? steps[steps.length - 1];
  const resolvedSummary =
    summary ?? currentStep?.title ?? `${steps.length} 个处理步骤`;

  return (
    <div
      {...props}
      className={classNames(
        "willa-reasoning-steps",
        `willa-reasoning-steps--${size}`,
        compact && "willa-reasoning-steps--compact",
        isInteractive && "willa-reasoning-steps--interactive",
        canCollapse && "willa-reasoning-steps--collapsible",
        isCollapsed && "willa-reasoning-steps--collapsed",
        className,
      )}
    >
      {canCollapse ? (
        <button
          className="willa-reasoning-steps-toggle"
          type="button"
          aria-expanded={!isCollapsed}
          onClick={toggleCollapsed}
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
        <Timeline
          className="willa-reasoning-steps-timeline"
          items={createReasoningTimelineItems({
            activeStep,
            onStepClick,
            steps,
          })}
          size={size}
          variant={compact ? "compact" : "default"}
        />
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

const createReasoningTimelineItems = (options: {
  steps: Array<ReasoningStepItem>;
  activeStep: number;
  onStepClick?: (event: ReasoningStepClickEvent) => void;
}): Array<TimelineItem> => {
  const { steps, activeStep, onStepClick } = options;

  return steps.map((step, index) => {
    const status = resolveReasoningStepStatus(step, index, activeStep);

    return {
      id: step.id,
      title: step.title,
      description: step.description,
      content: step.content ? (
        <span className="willa-reasoning-step-content">{step.content}</span>
      ) : undefined,
      meta: step.meta,
      icon: step.icon ?? <ReasoningStepMark status={status} />,
      tone: reasoningStepToneMap[status],
      className: classNames(
        "willa-reasoning-step",
        `willa-reasoning-step--${status}`,
      ),
      onClick: onStepClick
        ? (event) => {
            onStepClick({ step, index, status, event });
          }
        : undefined,
    };
  });
};

const reasoningStepToneMap = {
  pending: "default",
  active: "info",
  done: "success",
  error: "danger",
} satisfies Record<ReasoningStepStatus, TimelineItem["tone"]>;

ReasoningSteps.displayName = "ReasoningSteps";
