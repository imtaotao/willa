import { useState } from "react";
import {
  TraceViewer,
  type TraceViewerMetric,
  type TraceViewerSpan,
} from "willa/TraceViewer";
import "willa/TraceViewer.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  width: "min(100%, 64rem)",
} as const;

const traceSummary: Array<TraceViewerMetric> = [
  { label: "总耗时", value: "4.8s" },
  { label: "Tokens", value: "18.2k" },
  { label: "Cost", value: "$0.041" },
];

const traceSpans: Array<TraceViewerSpan> = [
  {
    id: "agent",
    name: "产品反馈分析 Agent",
    kind: "agent",
    status: "success",
    description: "汇总反馈、优先级和后续动作。",
    startedAt: "14:28:03",
    duration: "4.8s",
    tokens: "18.2k",
    cost: "$0.041",
    input: "分析最近 7 天产品反馈，输出高优问题和建议动作。",
    output: "识别出 3 个高优问题，已生成修复建议和 owner 分配。",
    children: [
      {
        id: "retrieve-feedback",
        name: "检索反馈数据",
        kind: "retrieval",
        status: "success",
        description: "读取反馈表和客服工单摘要。",
        startedAt: "14:28:03",
        duration: "920ms",
        tokens: "2.1k",
        input: "source: feedback_events, support_tickets",
        output: "命中 128 条反馈和 16 条客服工单。",
      },
      {
        id: "rank-issues",
        name: "优先级排序",
        kind: "model",
        status: "success",
        description: "按影响用户数、复现率和阻塞程度打分。",
        startedAt: "14:28:04",
        duration: "1.7s",
        tokens: "9.8k",
        cost: "$0.026",
        input: "128 条反馈，按主题聚类后的 9 个问题簇。",
        output: "登录失败、导出超时和主题配置错误进入 P0/P1 队列。",
        children: [
          {
            id: "score-issues",
            name: "问题评分",
            kind: "model",
            status: "success",
            description: "计算影响面、复现率和阻塞程度。",
            duration: "860ms",
            tokens: "4.2k",
          },
        ],
      },
      {
        id: "create-actions",
        name: "生成后续动作",
        kind: "tool",
        status: "success",
        description: "为高优问题创建行动项和 owner 建议。",
        startedAt: "14:28:06",
        duration: "1.4s",
        input: "issues: login_failure, export_timeout, theme_config",
        output: "已生成 6 条行动项，建议分配给前端、后端和支持团队。",
      },
    ],
  },
];

const failingTraceSpans: Array<TraceViewerSpan> = [
  {
    id: "agent",
    name: "知识库回答链路",
    kind: "agent",
    status: "error",
    description: "检索资料后生成引用回答。",
    duration: "2.2s",
    tokens: "6.4k",
    cost: "$0.015",
    children: [
      {
        id: "search",
        name: "搜索知识库",
        kind: "retrieval",
        status: "success",
        description: "命中组件设计和 CSS 规则文档。",
        duration: "640ms",
        output: "找到 5 条相关片段。",
      },
      {
        id: "read-source",
        name: "读取来源",
        kind: "tool",
        status: "error",
        description: "读取组件实现时路径不存在。",
        duration: "180ms",
        input: "path: packages/willa-ai/src/components/Trace/index.tsx",
        error: "ENOENT: no such file or directory",
      },
    ],
  },
];

const TraceViewerPreview = () => (
  <div style={frameStyle}>
    <TraceViewer
      title="反馈分析链路"
      description="展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。"
      summary={traceSummary}
      spans={traceSpans}
    />
  </div>
);

const ControlledTraceViewerPreview = () => {
  const [selectedSpanId, setSelectedSpanId] = useState("retrieve-feedback");
  const [expandedSpanIds, setExpandedSpanIds] = useState(["agent"]);

  return (
    <div style={frameStyle}>
      <TraceViewer
        title="受控链路"
        description={`当前选中：${selectedSpanId}`}
        spans={traceSpans}
        selectedSpanId={selectedSpanId}
        expandedSpanIds={expandedSpanIds}
        onSpanSelect={(span) => setSelectedSpanId(span.id)}
        onExpandedSpanIdsChange={setExpandedSpanIds}
      />
    </div>
  );
};

export default defineDoc({
  id: "trace-viewer",
  name: "TraceViewer",
  category: "ai",
  packageName: "willa/TraceViewer",
  description: "用于展示 AI 推理链路、工具调用链路、耗时、tokens 和成本。",
  imports: [{ name: "TraceViewer", from: "willa/TraceViewer" }],
  css: "willa/TraceViewer.css",
  demo: {
    name: "TraceViewerPreview",
    component: TraceViewerPreview,
  },
  code: `
    import {
      TraceViewer,
      type TraceViewerMetric,
      type TraceViewerSpan,
    } from "willa/TraceViewer";
    import "willa/TraceViewer.css";

    const traceSummary: Array<TraceViewerMetric> = [
      { label: "总耗时", value: "4.8s" },
      { label: "Tokens", value: "18.2k" },
      { label: "Cost", value: "$0.041" },
    ];

    const traceSpans: Array<TraceViewerSpan> = [
      {
        id: "agent",
        name: "产品反馈分析 Agent",
        kind: "agent",
        status: "success",
        description: "汇总反馈、优先级和后续动作。",
        duration: "4.8s",
        tokens: "18.2k",
        cost: "$0.041",
        children: [
          {
            id: "retrieve-feedback",
            name: "检索反馈数据",
            kind: "retrieval",
            status: "success",
            description: "读取反馈表和客服工单摘要。",
            duration: "920ms",
          },
          {
            id: "rank-issues",
            name: "优先级排序",
            kind: "model",
            status: "success",
            description: "按影响用户数、复现率和阻塞程度打分。",
            duration: "1.7s",
            tokens: "9.8k",
            cost: "$0.026",
            children: [
              {
                id: "score-issues",
                name: "问题评分",
                kind: "model",
                status: "success",
                description: "计算影响面、复现率和阻塞程度。",
                duration: "860ms",
                tokens: "4.2k",
              },
            ],
          },
        ],
      },
    ];

    <TraceViewer
      title="反馈分析链路"
      description="展示一次 Agent 运行中的推理链路、工具调用、token、耗时和成本。"
      summary={traceSummary}
      spans={traceSpans}
    />;
  `,
  sections: [
    {
      title: "受控选中和展开",
      code: `
        import { useState } from "react";
        import { TraceViewer, type TraceViewerSpan } from "willa/TraceViewer";
        import "willa/TraceViewer.css";

        const traceSpans: Array<TraceViewerSpan> = [
          {
            id: "agent",
            name: "产品反馈分析 Agent",
            kind: "agent",
            children: [
              { id: "retrieve-feedback", name: "检索反馈数据", kind: "retrieval" },
              { id: "rank-issues", name: "优先级排序", kind: "model" },
            ],
          },
        ];

        const Demo = () => {
          const [selectedSpanId, setSelectedSpanId] = useState("retrieve-feedback");
          const [expandedSpanIds, setExpandedSpanIds] = useState(["agent"]);

          return (
            <TraceViewer
              title="受控链路"
              spans={traceSpans}
              selectedSpanId={selectedSpanId}
              expandedSpanIds={expandedSpanIds}
              onSpanSelect={(span) => setSelectedSpanId(span.id)}
              onExpandedSpanIdsChange={setExpandedSpanIds}
            />
          );
        };
      `,
      content: <ControlledTraceViewerPreview />,
    },
    {
      title: "失败节点",
      code: `
        import { TraceViewer, type TraceViewerSpan } from "willa/TraceViewer";
        import "willa/TraceViewer.css";

        const failingTraceSpans: Array<TraceViewerSpan> = [
          {
            id: "agent",
            name: "知识库回答链路",
            kind: "agent",
            status: "error",
            description: "检索资料后生成引用回答。",
            duration: "2.2s",
            tokens: "6.4k",
            children: [
              {
                id: "search",
                name: "搜索知识库",
                kind: "retrieval",
                status: "success",
                description: "命中组件设计和 CSS 规则文档。",
                duration: "640ms",
              },
              {
                id: "read-source",
                name: "读取来源",
                kind: "tool",
                status: "error",
                description: "读取组件实现时路径不存在。",
                duration: "180ms",
                error: "ENOENT: no such file or directory",
              },
            ],
          },
        ];

        <TraceViewer
          title="知识库回答链路"
          description="错误 span 会在列表和详情里保留原因。"
          spans={failingTraceSpans}
        />;
      `,
      content: (
        <div style={frameStyle}>
          <TraceViewer
            title="知识库回答链路"
            description="错误 span 会在列表和详情里保留原因。"
            spans={failingTraceSpans}
          />
        </div>
      ),
    },
    {
      title: "空状态",
      code: `
        <TraceViewer
          title="运行链路"
          empty="任务开始后会展示 trace span。"
          spans={[]}
        />;
      `,
      content: (
        <div style={frameStyle}>
          <TraceViewer
            title="运行链路"
            empty="任务开始后会展示 trace span。"
            spans={[]}
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "spans",
      type: "Array<TraceViewerSpan>",
      required: true,
      description:
        "链路节点列表，支持 children 表示嵌套调用；节点可携带 kind、kindLabel、status、duration、tokens 和 cost。",
    },
    {
      name: "TraceViewerSpan.id",
      type: "string",
      required: true,
      description:
        "链路节点唯一标识，必须在整棵 trace tree 内唯一，用于列表 key 和选中匹配。",
    },
    {
      name: "title",
      type: "ReactNode",
      defaultValue: '"Trace"',
      description: "组件标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "链路说明。",
    },
    {
      name: "summary",
      type: "Array<TraceViewerMetric>",
      description: "顶部摘要指标，例如总耗时、tokens 和成本。",
    },
    {
      name: "selectedSpanId",
      type: "string",
      description:
        "受控选中的 span id；同时控制 expandedSpanIds 时，调用方需要保证选中节点的祖先已展开。无匹配 id 时列表不选中，详情为空。",
    },
    {
      name: "defaultSelectedSpanId",
      type: "string",
      description:
        "非受控默认选中的 span id；若 id 无效会回退到当前可见的第一个节点。若希望子节点在列表中可见，需要让 defaultExpandedSpanIds 包含其祖先节点。",
    },
    {
      name: "expandedSpanIds",
      type: "Array<string>",
      description:
        "受控展开的父级 span id；只影响有 children 的节点，点击展开按钮会通过 onExpandedSpanIdsChange 交给调用方更新。",
    },
    {
      name: "defaultExpandedSpanIds",
      type: "Array<string>",
      description:
        "默认展开的父级 span id；未传时默认展开所有有 children 的节点。",
    },
    {
      name: "empty",
      type: "ReactNode",
      defaultValue: '"暂无链路数据"',
      description: "空状态内容。",
    },
    {
      name: "onSpanSelect",
      type: "(span: TraceViewerSpan) => void",
      description: "点击链路节点时触发。",
    },
    {
      name: "onExpandedSpanIdsChange",
      type: "(spanIds: Array<string>) => void",
      description: "展开或收起父级 span 时触发。",
    },
    {
      name: "TraceViewerSpan.kindLabel",
      type: "ReactNode",
      description:
        "自定义节点类型展示文案，用于 chain、prompt、embedding、rerank、guardrail 等后端类型。",
    },
  ],
});
