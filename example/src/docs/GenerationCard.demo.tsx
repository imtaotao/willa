import {
  CheckIcon,
  CopyIcon,
  MagicWandIcon,
  Pencil1Icon,
  ReloadIcon,
} from "@radix-ui/react-icons";

import { Button } from "willa/Button";
import { CopyButton } from "willa/CopyButton";
import { GenerationCard } from "willa/GenerationCard";
import { Group } from "willa/Group";
import "willa/Button.css";
import "willa/CopyButton.css";
import "willa/GenerationCard.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "0.82rem",
  width: "min(100%, 58rem)",
} as const;

const previewTextStyle = {
  margin: 0,
} as const;

const GenerationCardPreview = () => (
  <div style={frameStyle}>
    <GenerationCard
      collapsible
      defaultCollapsed
      title="产品反馈摘要"
      status="completed"
      description="从 128 条用户反馈中生成可直接进入周报的摘要。"
      meta="刚刚"
      summary="隐藏生成正文，只保留状态、指标和操作。"
      metrics={[
        { label: "来源", value: "128 条" },
        { label: "置信", value: "高" },
        { label: "耗时", value: "4.2s" },
      ]}
      actions={
        <Group gap="xs" wrap>
          <CopyButton
            icon={<CopyIcon />}
            size="sm"
            text="本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。建议优先处理导出失败兜底，其次优化批量任务进度提示。"
          >
            复制
          </CopyButton>
          <Button size="sm" variant="solid" trailingIcon={<CheckIcon />}>
            采纳
          </Button>
        </Group>
      }
    >
      <p style={previewTextStyle}>
        本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。建议优先处理导出失败兜底，其次优化批量任务进度提示。
      </p>
    </GenerationCard>
  </div>
);

export default defineDoc({
  id: "generation-card",
  name: "GenerationCard",
  category: "ai",
  packageName: "willa/GenerationCard",
  description: "用于展示 AI 生成任务的状态、结果摘要、指标和后续操作。",
  imports: [{ name: "GenerationCard", from: "willa/GenerationCard" }],
  css: "willa/GenerationCard.css",
  demo: {
    name: "GenerationCardPreview",
    component: GenerationCardPreview,
  },
  code: `
    import { GenerationCard } from "willa/GenerationCard";
    import "willa/GenerationCard.css";

    <GenerationCard
      title="产品反馈摘要"
      status="completed"
      description="从 128 条用户反馈中生成可直接进入周报的摘要。"
      meta="刚刚"
      metrics={[
        { label: "来源", value: "128 条" },
        { label: "置信", value: "高" },
      ]}
      collapsible
      defaultCollapsed
    >
      本周反馈集中在导出稳定性、批量处理体验和主题配置理解成本。
    </GenerationCard>;
  `,
  sections: [
    {
      title: "折叠结果",
      code: `
        <GenerationCard
          collapsible
          defaultCollapsed
          title="客服回复草稿"
          status="completed"
          description="已生成可人工确认后发送的回复。"
          summary="查看生成正文"
          metrics={[
            { label: "语气", value: "克制" },
            { label: "风险", value: "低" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。"
              >
                复制
              </CopyButton>
              <Button size="sm" variant="solid">
                采纳
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID
            联系支持，我们会继续追踪。
          </p>
        </GenerationCard>;
      `,
      content: (
        <GenerationCard
          collapsible
          defaultCollapsed
          title="客服回复草稿"
          status="completed"
          description="已生成可人工确认后发送的回复。"
          summary="查看生成正文"
          metrics={[
            { label: "语气", value: "克制" },
            { label: "风险", value: "低" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务 ID 联系支持，我们会继续追踪。"
              >
                复制
              </CopyButton>
              <Button size="sm" variant="solid">
                采纳
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            我们已经确认你的导出任务失败，建议先重试一次；如果仍失败，可以保留任务
            ID 联系支持，我们会继续追踪。
          </p>
        </GenerationCard>
      ),
    },
    {
      title: "生成状态",
      code: `
        <div style={frameStyle}>
          <GenerationCard
            title="生成发布说明"
            status="generating"
            description="正在合并 commit、issue 和手写补充说明。"
            meta="2/4"
            metrics={[
              { label: "已读取", value: "18 条" },
              { label: "阶段", value: "整理中" },
            ]}
          >
            <p style={previewTextStyle}>正在提取破坏性变更、功能亮点和迁移提示。</p>
          </GenerationCard>
          <GenerationCard
            title="生成竞品分析"
            status="pending"
            description="任务已经进入队列，等待上一个生成请求完成。"
            meta="排队中"
          />
          <GenerationCard
            title="生成长文大纲"
            status="failed"
            description="上下文里缺少目标读者和发布渠道，需要补充任务约束。"
            meta="缺少输入"
            actions={
              <Group gap="xs" wrap>
                <Button size="sm" variant="soft" trailingIcon={<ReloadIcon />}>
                  重试
                </Button>
                <Button size="sm" variant="ghost">
                  补充上下文
                </Button>
              </Group>
            }
          />
        </div>;
      `,
      content: (
        <div style={frameStyle}>
          <GenerationCard
            title="生成发布说明"
            status="generating"
            description="正在合并 commit、issue 和手写补充说明。"
            meta="2/4"
            metrics={[
              { label: "已读取", value: "18 条" },
              { label: "阶段", value: "整理中" },
            ]}
          >
            <p style={previewTextStyle}>
              正在提取破坏性变更、功能亮点和迁移提示。
            </p>
          </GenerationCard>
          <GenerationCard
            title="生成竞品分析"
            status="pending"
            description="任务已经进入队列，等待上一个生成请求完成。"
            meta="排队中"
          />
          <GenerationCard
            title="生成长文大纲"
            status="failed"
            description="上下文里缺少目标读者和发布渠道，需要补充任务约束。"
            meta="缺少输入"
            actions={
              <Group gap="xs" wrap>
                <Button size="sm" variant="soft" trailingIcon={<ReloadIcon />}>
                  重试
                </Button>
                <Button size="sm" variant="ghost">
                  补充上下文
                </Button>
              </Group>
            }
          />
        </div>
      ),
    },
    {
      title: "结果操作",
      code: `
        <GenerationCard
          title="首页文案候选"
          status="completed"
          description="适合直接用于产品首屏的短文案。"
          icon={<MagicWandIcon />}
          metrics={[
            { label: "长度", value: "42 字" },
            { label: "语气", value: "克制" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。"
              >
                复制
              </CopyButton>
              <Button size="sm" variant="ghost" trailingIcon={<Pencil1Icon />}>
                编辑
              </Button>
              <Button size="sm" variant="solid">
                插入
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。
          </p>
        </GenerationCard>;
      `,
      content: (
        <GenerationCard
          title="首页文案候选"
          status="completed"
          description="适合直接用于产品首屏的短文案。"
          icon={<MagicWandIcon />}
          metrics={[
            { label: "长度", value: "42 字" },
            { label: "语气", value: "克制" },
          ]}
          actions={
            <Group gap="xs" wrap>
              <CopyButton
                icon={<CopyIcon />}
                size="sm"
                text="用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI 产品。"
              >
                复制
              </CopyButton>
              <Button size="sm" variant="ghost" trailingIcon={<Pencil1Icon />}>
                编辑
              </Button>
              <Button size="sm" variant="solid">
                插入
              </Button>
            </Group>
          }
        >
          <p style={previewTextStyle}>
            用清晰的上下文、可控的工具和可信的证据链，快速搭建面向真实业务的 AI
            产品。
          </p>
        </GenerationCard>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      required: true,
      description: "生成任务或生成结果标题。",
    },
    {
      name: "status",
      type: '"pending" | "generating" | "completed" | "failed"',
      defaultValue: '"pending"',
      description: "生成状态，默认 pending。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "生成任务说明或结果摘要。",
    },
    {
      name: "meta",
      type: "ReactNode",
      description: "右上角补充信息，例如耗时、阶段、时间或错误原因。",
    },
    {
      name: "icon",
      type: "ReactNode",
      defaultValue: "由 status 决定",
      description: "状态图标。未传时根据 status 渲染默认图标。",
    },
    {
      name: "metrics",
      type: "Array<GenerationCardMetric>",
      description: "结果指标，例如来源数量、置信度、耗时或 token。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "操作区，例如复制、采纳、插入、编辑或重试。",
    },
    {
      name: "collapsible",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许折叠生成结果预览，默认 false。",
    },
    {
      name: "collapsed",
      type: "boolean",
      description: "受控折叠状态。",
    },
    {
      name: "defaultCollapsed",
      type: "boolean",
      defaultValue: "false",
      description: "非受控模式下的默认折叠状态。",
    },
    {
      name: "summary",
      type: "ReactNode",
      defaultValue: '"查看生成结果"',
      description: "折叠开关文案。",
    },
    {
      name: "onCollapsedChange",
      type: "(collapsed: boolean) => void",
      description: "折叠状态变化时触发。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "生成结果预览或补充内容。",
    },
  ],
});
