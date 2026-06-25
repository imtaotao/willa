import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type FormEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CheckCircledIcon,
  ChatBubbleIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { isPromiseLike } from "aidly";
import classNames from "classnames";

import { FormMessage } from "@willa-ui/form/components/FormMessage";
import { TextArea } from "@willa-ui/form/components/TextArea";
import {
  Segmented,
  type SegmentedOption,
} from "@willa-ui/content/components/Segmented";
import { Button } from "@willa-ui/content/components/Button";

export type FeedbackValue = "up" | "down" | "report";

export type FeedbackBarState = {
  value: FeedbackValue;
  reason?: string;
  note?: string;
};

export type FeedbackBarPayload = {
  targetId: string;
  value: FeedbackValue;
  reason?: string;
  note?: string;
};

export type FeedbackBarProps = {
  targetId: string;
  state?: FeedbackBarState;
  disabled?: boolean;
  disabledMessage?: ReactNode;
  reportReasons?: Array<string>;
  onSubmit: (payload: FeedbackBarPayload) => Promise<void> | void;
  onUndo?: () => void;
  onReport?: (id: string) => void;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "onSubmit">;

const defaultReportReasons = ["内容不准确", "目标不清晰", "语气不合适", "其他"];

export function FeedbackBar(props: FeedbackBarProps) {
  const {
    targetId,
    state,
    disabled = false,
    disabledMessage = "当前反馈入口已禁用",
    reportReasons = defaultReportReasons,
    onSubmit,
    onUndo,
    onReport,
    className,
    style,
    ...sectionProps
  } = props;

  const isControlled = state !== undefined;
  const [draftValue, setDraftValue] = useState<FeedbackValue | null>(
    state?.value ?? null,
  );
  const [draftReason, setDraftReason] = useState(state?.reason ?? "");
  const [draftNote, setDraftNote] = useState(state?.note ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [committedPayload, setCommittedPayload] =
    useState<FeedbackBarState | null>(null);
  const [submitError, setSubmitError] = useState<ReactNode>(null);

  const reportReasonOptions: Array<SegmentedOption> = useMemo(
    () =>
      reportReasons.map((reason) => ({
        value: reason,
        label: reason,
      })),
    [reportReasons],
  );

  const feedbackOptions: Array<SegmentedOption> = useMemo(
    () => [
      { value: "up", label: "有帮助" },
      { value: "down", label: "不准确" },
      { value: "report", label: "举报" },
    ],
    [],
  );

  useEffect(() => {
    setDraftValue(state?.value ?? null);
    setDraftReason(state?.reason ?? "");
    setDraftNote(state?.note ?? "");
    setCommittedPayload(state ? { ...state } : null);
    setSubmitError(null);
  }, [state?.value, state?.reason, state?.note, state]);

  const committedPayloadValue = state ?? committedPayload;

  const isEqualFeedback = (
    left: FeedbackBarState | null,
    right: FeedbackBarState,
  ) => {
    if (left === null) {
      return false;
    }

    return (
      left.value === right.value &&
      (left.reason ?? "") === (right.reason ?? "") &&
      (left.note ?? "") === (right.note ?? "")
    );
  };

  const hasCommitted = Boolean(committedPayloadValue);
  const isDraftPending = committedPayloadValue
    ? !isEqualFeedback(committedPayloadValue, {
        value: draftValue ?? committedPayloadValue.value,
        reason: draftReason,
        note: draftNote,
      })
    : Boolean(draftValue);

  const needReason = draftValue === "down" || draftValue === "report";
  const canSubmitReason =
    !needReason ||
    Boolean(draftReason) ||
    (draftReason === "" && draftValue !== "down" && draftValue !== "report");
  const submitDisabled =
    !draftValue ||
    !canSubmitReason ||
    (needReason && reportReasons.length > 0 && !draftReason) ||
    disabled ||
    submitting;
  const showStatePanel = hasCommitted && !isDraftPending;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (submitDisabled || draftValue === null) {
      return;
    }

    const nextPayload: FeedbackBarPayload = {
      targetId,
      value: draftValue,
      reason: draftReason || undefined,
      note: draftNote.trim() || undefined,
    };

    setSubmitError(null);
    setSubmitting(true);

    const finalizeSubmit = () => {
      setSubmitting(false);
      setCommittedPayload({
        value: nextPayload.value,
        reason: nextPayload.reason,
        note: nextPayload.note,
      });
      if (nextPayload.value === "report") {
        onReport?.(targetId);
      }
    };

    let result: ReturnType<FeedbackBarProps["onSubmit"]>;
    try {
      result = onSubmit(nextPayload);
    } catch {
      setSubmitError("提交失败，请稍后重试");
      setSubmitting(false);
      return;
    }

    if (isPromiseLike(result)) {
      result
        .then(() => {
          finalizeSubmit();
        })
        .catch(() => {
          setSubmitError("提交失败，请稍后重试");
          setSubmitting(false);
        });

      return;
    }

    finalizeSubmit();
  };

  const handleReset = () => {
    if (isControlled) {
      setDraftValue(state?.value ?? null);
      setDraftReason(state?.reason ?? "");
      setDraftNote(state?.note ?? "");
    } else {
      setDraftValue(committedPayloadValue ? committedPayloadValue.value : null);
      setDraftReason(
        committedPayloadValue ? (committedPayloadValue.reason ?? "") : "",
      );
      setDraftNote(
        committedPayloadValue ? (committedPayloadValue.note ?? "") : "",
      );
    }

    onUndo?.();
  };

  const handleValueChange = (value: string) => {
    const normalized = value as FeedbackBarValue;
    setDraftValue(normalized);
    if (normalized === "up") {
      setDraftReason("");
    }
  };

  const handleReasonChange = (value: string) => {
    setDraftReason(value);
  };

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDraftNote(event.currentTarget.value);
  };

  const stateSummary =
    committedPayloadValue?.value === "up"
      ? "已标记为「有帮助」"
      : committedPayloadValue?.value === "down"
        ? `已标记为「不准确」${
            committedPayloadValue?.reason
              ? `（${committedPayloadValue.reason}）`
              : ""
          }`
        : committedPayloadValue?.value === "report"
          ? `举报已提交${
              committedPayloadValue?.reason
                ? `（${committedPayloadValue.reason}）`
                : ""
            }`
          : null;

  const stateMeta = committedPayloadValue?.note
    ? `补充说明：${committedPayloadValue.note}`
    : null;

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-feedback-bar",
        disabled && "willa-feedback-bar--disabled",
        className,
      )}
      style={style}
    >
      <div className="willa-feedback-bar__title">回答反馈</div>
      <Segmented
        size="sm"
        options={feedbackOptions}
        value={draftValue ?? ""}
        onValueChange={handleValueChange}
        disabled={disabled || submitting}
      />

      {needReason ? (
        <div className="willa-feedback-bar__reasons">
          <span className="willa-feedback-bar__reason-label">
            请选择反馈原因
          </span>
          <Segmented
            size="sm"
            selectionMode="single"
            options={reportReasonOptions}
            value={draftReason}
            onValueChange={handleReasonChange}
            disabled={disabled || submitting}
          />
        </div>
      ) : null}

      <form className="willa-feedback-bar__note" onSubmit={handleSubmit}>
        <TextArea
          size="sm"
          resize="vertical"
          rows={3}
          value={draftNote}
          disabled={disabled || submitting || !draftValue}
          placeholder={
            draftValue === "report" ? "补充举报说明（可选）" : "可选补充说明"
          }
          onChange={handleNoteChange}
        />
        <div className="willa-feedback-bar__actions">
          <Button
            size="sm"
            type="submit"
            disabled={submitDisabled}
            loading={submitting}
            loadingText="提交中"
          >
            提交反馈
          </Button>
          {showStatePanel ? (
            <Button
              size="sm"
              variant="soft"
              type="button"
              onClick={handleReset}
            >
              撤回
            </Button>
          ) : null}
        </div>
      </form>

      {submitError ? (
        <FormMessage tone="error" icon={<CrossCircledIcon />}>
          {submitError}
        </FormMessage>
      ) : null}

      {disabled ? (
        <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
          {disabledMessage}
        </FormMessage>
      ) : null}

      {showStatePanel ? (
        <div className="willa-feedback-bar__state">
          <FormMessage tone="success" icon={<CheckCircledIcon />}>
            {stateSummary}
          </FormMessage>
          {stateMeta ? (
            <FormMessage tone="info">{stateMeta}</FormMessage>
          ) : null}
        </div>
      ) : null}

      {committedPayloadValue?.value === "report" ? (
        <FormMessage icon={<ChatBubbleIcon />}>举报记录已关联处理</FormMessage>
      ) : null}
    </section>
  );
}

FeedbackBar.displayName = "FeedbackBar";

type FeedbackBarValue = FeedbackValue;
