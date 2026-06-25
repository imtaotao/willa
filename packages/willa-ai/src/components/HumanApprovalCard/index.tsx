import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
  useState,
} from "react";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { isPromiseLike } from "aidly";
import classNames from "classnames";

import { Badge } from "@willa-ui/content/components/Badge";
import { Button } from "@willa-ui/content/components/Button";

export type HumanApprovalCardStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "expired";

export type HumanApprovalCardTone = "neutral" | "warning" | "danger";

export type HumanApprovalCardAction = "approve" | "reject";

export type HumanApprovalCardDetail = {
  label: ReactNode;
  value: ReactNode;
};

export type HumanApprovalCardProps = {
  title: ReactNode;
  description?: ReactNode;
  status?: HumanApprovalCardStatus;
  tone?: HumanApprovalCardTone;
  icon?: ReactNode;
  meta?: ReactNode;
  details?: Array<HumanApprovalCardDetail>;
  approveText?: ReactNode;
  rejectText?: ReactNode;
  approveDisabled?: boolean;
  rejectDisabled?: boolean;
  approveLoading?: boolean;
  rejectLoading?: boolean;
  children?: ReactNode;
  onApprove?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  onReject?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  onActionError?: (
    error: unknown,
    action: HumanApprovalCardAction,
    event: MouseEvent<HTMLButtonElement>,
  ) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "title">;

type PendingAction = HumanApprovalCardAction;

export function HumanApprovalCard({
  title,
  description,
  status = "pending",
  tone = "neutral",
  icon,
  meta,
  details,
  approveText = "确认继续",
  rejectText = "拒绝",
  approveDisabled = false,
  rejectDisabled = false,
  approveLoading = false,
  rejectLoading = false,
  children,
  onApprove,
  onReject,
  onActionError,
  className,
  ...props
}: HumanApprovalCardProps) {
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(
    null,
  );
  const hasDetails = details !== undefined && details.length > 0;
  const isPending = status === "pending";
  const isApproving = approveLoading || pendingAction === "approve";
  const isRejecting = rejectLoading || pendingAction === "reject";
  const approveButtonDisabled =
    approveDisabled || isRejecting || (!onApprove && !approveLoading);
  const rejectButtonDisabled =
    rejectDisabled || isApproving || (!onReject && !rejectLoading);

  const handleAction = (
    action: PendingAction,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    const handler = action === "approve" ? onApprove : onReject;

    if (!handler) {
      return;
    }

    let result: void | Promise<void>;
    try {
      result = handler(event);
    } catch (error) {
      setPendingAction(null);
      onActionError?.(error, action, event);
      throw error;
    }

    if (!isPromiseLike(result)) {
      return;
    }

    setPendingAction(action);
    return result.then(
      () => {
        setPendingAction(null);
      },
      (error) => {
        setPendingAction(null);
        onActionError?.(error, action, event);
        return Promise.reject(error);
      },
    );
  };

  return (
    <section
      {...props}
      className={classNames(
        "willa-human-approval-card",
        `willa-human-approval-card--${status}`,
        `willa-human-approval-card--${tone}`,
        className,
      )}
      data-status={status}
      data-tone={tone}
    >
      <div className="willa-human-approval-card__header">
        <span className="willa-human-approval-card__mark" aria-hidden="true">
          {icon ?? <HumanApprovalCardIcon status={status} tone={tone} />}
        </span>
        <div className="willa-human-approval-card__heading">
          <div className="willa-human-approval-card__title-row">
            <h3 className="willa-human-approval-card__title">{title}</h3>
            <Badge
              className="willa-human-approval-card__status"
              size="sm"
              tone={humanApprovalCardStatusToneMap[status]}
              variant="soft"
            >
              {humanApprovalCardStatusLabelMap[status]}
            </Badge>
          </div>
          {description ? (
            <div className="willa-human-approval-card__description">
              {description}
            </div>
          ) : null}
        </div>
        {meta ? (
          <div className="willa-human-approval-card__meta">{meta}</div>
        ) : null}
      </div>

      {hasDetails ? (
        <dl className="willa-human-approval-card__details">
          {details.map((detail, index) => (
            <div className="willa-human-approval-card__detail" key={index}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {children ? (
        <div className="willa-human-approval-card__content">{children}</div>
      ) : null}

      {isPending && (onApprove || onReject) ? (
        <div className="willa-human-approval-card__actions">
          {onReject ? (
            <Button
              disabled={rejectButtonDisabled}
              loading={isRejecting}
              size="sm"
              variant="soft"
              onClick={(event) => {
                return handleAction("reject", event);
              }}
            >
              {rejectText}
            </Button>
          ) : null}
          {onApprove ? (
            <Button
              disabled={approveButtonDisabled}
              loading={isApproving}
              size="sm"
              variant="solid"
              onClick={(event) => {
                return handleAction("approve", event);
              }}
            >
              {approveText}
            </Button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

const HumanApprovalCardIcon = ({
  status,
  tone,
}: {
  status: HumanApprovalCardStatus;
  tone: HumanApprovalCardTone;
}) => {
  if (status === "approved") {
    return <CheckCircledIcon />;
  }

  if (status === "rejected") {
    return <CrossCircledIcon />;
  }

  if (status === "expired") {
    return <StopwatchIcon />;
  }

  if (tone === "danger" || tone === "warning") {
    return <ExclamationTriangleIcon />;
  }

  return <LockClosedIcon />;
};

const humanApprovalCardStatusLabelMap: Record<HumanApprovalCardStatus, string> =
  {
    pending: "等待确认",
    approved: "已通过",
    rejected: "已拒绝",
    expired: "已过期",
  };

const humanApprovalCardStatusToneMap: Record<
  HumanApprovalCardStatus,
  "neutral" | "info" | "success" | "warning" | "danger"
> = {
  pending: "warning",
  approved: "success",
  rejected: "danger",
  expired: "neutral",
};

HumanApprovalCard.displayName = "HumanApprovalCard";
