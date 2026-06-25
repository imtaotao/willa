import { useState } from "react";

import {
  FeedbackBar,
  type FeedbackBarPayload,
  type FeedbackBarState,
} from "willa/FeedbackBar";
import "willa/FeedbackBar.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 48rem)",
} as const;

const statusStyle = {
  width: "max-content",
  maxWidth: "100%",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.62rem",
  background: "var(--willa-panel-bg)",
  color: "var(--willa-text-soft)",
  fontSize: "0.86rem",
  fontWeight: 520,
  lineHeight: 1.45,
  padding: "0.48rem 0.62rem",
} as const;

const FeedbackBarPreview = () => {
  const [payload, setPayload] = useState<FeedbackBarPayload | null>(null);

  return (
    <div style={frameStyle}>
      <FeedbackBar
        targetId="answer-1024"
        onSubmit={(nextPayload) => {
          setPayload(nextPayload);
        }}
        onUndo={() => {
          setPayload(null);
        }}
      />
      <div style={statusStyle}>
        最近提交：
        {payload
          ? `${payload.value}${payload.reason ? ` / ${payload.reason}` : ""}`
          : "暂无"}
      </div>
    </div>
  );
};

const FeedbackBarControlled = () => {
  const [state, setState] = useState<FeedbackBarState>({
    value: "down",
    reason: "内容不准确",
    note: "引用的数据范围需要更新。",
  });

  return (
    <div style={frameStyle}>
      <FeedbackBar
        targetId="answer-controlled"
        state={state}
        onSubmit={(payload) => {
          setState({
            value: payload.value,
            reason: payload.reason,
            note: payload.note,
          });
        }}
        onUndo={() => {
          setState({ value: "up" });
        }}
      />
    </div>
  );
};

const FeedbackBarDisabled = () => (
  <div style={frameStyle}>
    <FeedbackBar
      targetId="answer-disabled"
      disabled
      disabledMessage="当前回答来自归档会话，反馈入口已关闭。"
      onSubmit={() => {
        return;
      }}
    />
  </div>
);

export default defineDoc({
  id: "feedback-bar",
  name: "FeedbackBar",
  displayName: "回答反馈",
  category: "ai",
  packageName: "willa/FeedbackBar",
  description: "AI 回复反馈入口，支持点赞、点踩、举报原因和补充说明。",
  imports: [{ name: "FeedbackBar", from: "willa/FeedbackBar" }],
  css: "willa/FeedbackBar.css",
  demo: {
    name: "FeedbackBarPreview",
    component: FeedbackBarPreview,
  },
  code: `
    import { useState } from "react";
    import { FeedbackBar } from "willa/FeedbackBar";
    import "willa/FeedbackBar.css";

    const Demo = () => {
      const [payload, setPayload] = useState(null);

      return (
        <FeedbackBar
          targetId="answer-1024"
          onSubmit={(nextPayload) => {
            setPayload(nextPayload);
          }}
        />
      );
    };
  `,
  sections: [
    {
      title: "主链路（提交反馈）",
      code: `
        <FeedbackBar
          targetId="answer-1024"
          onSubmit={(nextPayload) => {
            setPayload(nextPayload);
          }}
          onUndo={() => {
            setPayload(null);
          }}
        />;
      `,
      content: <FeedbackBarPreview />,
    },
    {
      title: "受控状态",
      code: `
        <FeedbackBar
          targetId="answer-controlled"
          state={state}
          onSubmit={(payload) => {
            setState({
              value: payload.value,
              reason: payload.reason,
              note: payload.note,
            });
          }}
        />;
      `,
      content: <FeedbackBarControlled />,
    },
    {
      title: "边界（禁用）",
      code: `
        <FeedbackBar
          targetId="answer-disabled"
          disabled
          disabledMessage="当前回答来自归档会话，反馈入口已关闭。"
          onSubmit={() => {}}
        />;
      `,
      content: <FeedbackBarDisabled />,
    },
  ],
  props: [
    {
      name: "targetId",
      type: "string",
      required: true,
      description: "反馈关联的回答或目标 ID。",
    },
    {
      name: "state",
      type: "FeedbackBarState",
      description: "受控反馈状态。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用反馈入口。",
    },
    {
      name: "disabledMessage",
      type: "ReactNode",
      defaultValue: '"当前反馈入口已禁用"',
      description: "禁用态提示内容。",
    },
    {
      name: "reportReasons",
      type: "Array<string>",
      defaultValue: '["内容不准确", "目标不清晰", "语气不合适", "其他"]',
      description: "点踩或举报时可选的原因列表。",
    },
    {
      name: "onSubmit",
      type: "(payload: FeedbackBarPayload) => void | Promise<void>",
      required: true,
      description: "提交反馈时触发。",
    },
    {
      name: "onUndo",
      type: "() => void",
      description: "点击撤回时触发。",
    },
    {
      name: "onReport",
      type: "(id: string) => void",
      description: "举报类反馈提交成功后触发。",
    },
  ],
});
