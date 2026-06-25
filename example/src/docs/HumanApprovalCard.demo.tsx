import { useState } from "react";

import { HumanApprovalCard } from "willa/HumanApprovalCard";
import "willa/HumanApprovalCard.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 54rem)",
} as const;

const paragraphStyle = {
  margin: 0,
} as const;

const HumanApprovalCardPreview = () => {
  const [status, setStatus] = useState<"pending" | "approved" | "rejected">(
    "pending",
  );

  return (
    <div style={frameStyle}>
      <HumanApprovalCard
        title="发送外部邮件前需要确认"
        description="AI 即将把整理后的事故复盘发送给客户联系人。"
        status={status}
        tone="warning"
        meta="高影响操作"
        details={[
          { label: "收件人", value: "3 人" },
          { label: "附件", value: "2 个" },
          { label: "风险", value: "中" },
        ]}
        onApprove={() => {
          setStatus("approved");
        }}
        onReject={() => {
          setStatus("rejected");
        }}
      >
        <p style={paragraphStyle}>
          邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。
        </p>
      </HumanApprovalCard>
    </div>
  );
};

export default defineDoc({
  id: "human-approval-card",
  name: "HumanApprovalCard",
  displayName: "人工确认卡片",
  category: "ai",
  packageName: "willa/HumanApprovalCard",
  description: "用于 AI 执行高影响操作前请求人工确认，并展示审批状态。",
  imports: [{ name: "HumanApprovalCard", from: "willa/HumanApprovalCard" }],
  css: "willa/HumanApprovalCard.css",
  demo: {
    name: "HumanApprovalCardPreview",
    component: HumanApprovalCardPreview,
  },
  code: `
    import { useState } from "react";
    import { HumanApprovalCard } from "willa/HumanApprovalCard";
    import "willa/HumanApprovalCard.css";

    const Demo = () => {
      const [status, setStatus] = useState("pending");

      return (
        <HumanApprovalCard
          title="发送外部邮件前需要确认"
          description="AI 即将把整理后的事故复盘发送给客户联系人。"
          status={status}
          tone="warning"
          meta="高影响操作"
          details={[
            { label: "收件人", value: "3 人" },
            { label: "附件", value: "2 个" },
            { label: "风险", value: "中" },
          ]}
          onApprove={() => setStatus("approved")}
          onReject={() => setStatus("rejected")}
        >
          邮件包含事故时间线、影响范围和补偿说明。确认后将进入发送队列。
        </HumanApprovalCard>
      );
    };
  `,
  sections: [
    {
      title: "异步确认",
      code: `
        <HumanApprovalCard
          title="执行批量退款"
          description="确认后会创建批量退款任务，并通知财务系统。"
          tone="danger"
          details={[
            { label: "订单", value: "42 笔" },
            { label: "金额", value: "¥18,420" },
          ]}
          onApprove={() => {
            return new Promise((resolve) => window.setTimeout(resolve, 800));
          }}
          onReject={() => {
            return Promise.resolve();
          }}
        />;
      `,
      content: (
        <HumanApprovalCard
          title="执行批量退款"
          description="确认后会创建批量退款任务，并通知财务系统。"
          tone="danger"
          details={[
            { label: "订单", value: "42 笔" },
            { label: "金额", value: "¥18,420" },
          ]}
          onApprove={() => {
            return new Promise((resolve) => window.setTimeout(resolve, 800));
          }}
          onReject={() => {
            return Promise.resolve();
          }}
        />
      ),
    },
    {
      title: "终态展示",
      code: `
        <div style={frameStyle}>
          <HumanApprovalCard
            title="已允许读取私有知识库"
            description="审批完成后，AI 可以继续执行检索和总结。"
            status="approved"
            details={[{ label: "审批人", value: "Ming" }]}
          />
          <HumanApprovalCard
            title="导出客户数据"
            description="审批已过期，需要重新提交确认请求。"
            status="expired"
            details={[{ label: "过期时间", value: "10 分钟前" }]}
          />
        </div>;
      `,
      content: (
        <div style={frameStyle}>
          <HumanApprovalCard
            title="已允许读取私有知识库"
            description="审批完成后，AI 可以继续执行检索和总结。"
            status="approved"
            details={[{ label: "审批人", value: "Ming" }]}
          />
          <HumanApprovalCard
            title="导出客户数据"
            description="审批已过期，需要重新提交确认请求。"
            status="expired"
            details={[{ label: "过期时间", value: "10 分钟前" }]}
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      required: true,
      description: "确认卡片标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方的说明文案。",
    },
    {
      name: "status",
      type: '"pending" | "approved" | "rejected" | "expired"',
      defaultValue: '"pending"',
      description: "当前审批状态；非 pending 状态不会展示确认和拒绝按钮。",
    },
    {
      name: "tone",
      type: '"neutral" | "warning" | "danger"',
      defaultValue: '"neutral"',
      description: "pending 状态下的风险色调。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "自定义左侧图标。",
    },
    {
      name: "meta",
      type: "ReactNode",
      description: "右上角辅助信息。",
    },
    {
      name: "details",
      type: "Array<HumanApprovalCardDetail>",
      description: "审批对象、风险、操作者等结构化明细。",
    },
    {
      name: "approveText",
      type: "ReactNode",
      defaultValue: '"确认继续"',
      description: "确认按钮文案。",
    },
    {
      name: "rejectText",
      type: "ReactNode",
      defaultValue: '"拒绝"',
      description: "拒绝按钮文案。",
    },
    {
      name: "approveDisabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用确认按钮。",
    },
    {
      name: "rejectDisabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用拒绝按钮。",
    },
    {
      name: "approveLoading",
      type: "boolean",
      defaultValue: "false",
      description: "外部受控的确认按钮 loading 状态。",
    },
    {
      name: "rejectLoading",
      type: "boolean",
      defaultValue: "false",
      description: "外部受控的拒绝按钮 loading 状态。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "审批内容预览或风险说明。",
    },
    {
      name: "onApprove",
      type: "(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",
      description:
        "点击确认按钮时触发；返回 Promise 时组件会展示内部 loading。",
    },
    {
      name: "onReject",
      type: "(event: MouseEvent<HTMLButtonElement>) => void | Promise<void>",
      description:
        "点击拒绝按钮时触发；返回 Promise 时组件会展示内部 loading。",
    },
    {
      name: "onActionError",
      type: "(error: unknown, action: HumanApprovalCardAction, event: MouseEvent<HTMLButtonElement>) => void",
      description:
        "确认或拒绝动作抛错时触发；组件会清理内部 loading，并继续抛出该错误。",
    },
    {
      name: "className",
      type: "string",
      description: "透传到根 section 的类名。",
    },
    {
      name: "style",
      type: "CSSProperties",
      description: "透传到根 section 的内联样式。",
    },
  ],
});
