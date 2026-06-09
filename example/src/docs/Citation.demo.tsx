import {
  CheckIcon,
  FileTextIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import { Citation } from "willa/Citation";
import { Group } from "willa/Group";
import "willa/Citation.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 46rem)",
  margin: "0 auto",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.9rem",
  background: "var(--willa-panel-bg)",
  padding: "1rem",
} as const;

const paragraphStyle = {
  margin: 0,
  lineHeight: 1.8,
} as const;

const CitationPreview = () => {
  return (
    <div style={frameStyle}>
      <p style={paragraphStyle}>
        文档中的引用标记需要足够轻量，既可以作为脚注入口，也可以承载来源状态{" "}
        <Citation
          size="xs"
          label="组件指南"
          source="component.md"
          index="1"
          tone="info"
          href="#"
        />
        。当内容来自已经核验的资料时，可以用状态标明可信度{" "}
        <Citation
          size="xs"
          label="架构说明"
          source="architecture.md"
          index="2"
          status="已核验"
          tone="success"
        />
        。
      </p>
    </div>
  );
};

export default defineDoc({
  id: "citation",
  name: "Citation",
  category: "content",
  packageName: "willa/Citation",
  description: "用于正文里的来源引用、证据标注和可点击脚注。",
  imports: [{ name: "Citation", from: "willa/Citation" }],
  css: "willa/Citation.css",
  demo: {
    name: "CitationPreview",
    component: CitationPreview,
  },
  code: `
    import { Citation } from "willa/Citation";
    import "willa/Citation.css";

    <p>
      文档中的引用标记需要足够轻量
      <Citation
        size="xs"
        label="组件指南"
        source="component.md"
        index="1"
        tone="info"
        href="#"
      />
    </p>
  `,
  sections: [
    {
      title: "引用状态",
      content: (
        <Group gap="sm" wrap>
          <Citation label="来源 1" source="component.md" index="1" href="#" />
          <Citation
            label="已核验"
            source="architecture.md"
            index={<CheckIcon />}
            status="可信"
            tone="success"
            selected
          />
          <Citation
            label="需要确认"
            source="support-log.json"
            index="3"
            status="待核验"
            tone="warning"
          />
        </Group>
      ),
    },
    {
      title: "链接来源",
      content: (
        <Group gap="sm" wrap>
          <Citation href="https://openai.com/research" index="1" />
          <Citation
            href="https://github.com/openai"
            source="GitHub"
            index="2"
            tone="info"
          />
        </Group>
      ),
    },
    {
      title: "带摘要",
      content: (
        <Citation
          label="上下文命中"
          source="AI 组件规划"
          icon={<MagnifyingGlassIcon />}
          tone="info"
          href="#"
        >
          命中 ChatLayout、MessageList 和 SourceCard 相关规则。
        </Citation>
      ),
    },
    {
      title: "尺寸",
      content: (
        <Group gap="xs" wrap>
          <Citation
            size="xs"
            label="正文引用"
            source="component.md"
            index="A"
          />
          <Citation size="sm" label="来源标签" source="css.md" index="B" />
          <Citation
            size="md"
            label="证据入口"
            source="architecture.md"
            icon={<FileTextIcon />}
            tone="info"
          />
          <Citation
            size="lg"
            label="重点证据"
            source="audit-log.json"
            status="可信"
            tone="success"
          />
        </Group>
      ),
    },
  ],
  props: [
    {
      name: "label",
      type: "ReactNode",
      description:
        "引用标题或短文案。未传 label 但传入 href 时，会默认展示链接域名。",
    },
    {
      name: "source",
      type: "ReactNode",
      description: "来源名称，例如文件名、知识库名或网页名。",
    },
    {
      name: "index",
      type: "ReactNode",
      description: "引用序号或短标记。未传 icon 时展示。",
    },
    {
      name: "status",
      type: "ReactNode",
      description: "引用状态，例如已核验、可信、待确认。",
    },
    {
      name: "href",
      type: "string",
      description: "引用跳转链接。传入后组件渲染为链接。",
    },
    {
      name: "target",
      type: "string",
      description: "链接打开方式，例如 _blank。",
    },
    {
      name: "tone",
      type: '"neutral" | "info" | "success" | "warning"',
      description: "引用语义色，默认 neutral。",
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      description:
        "尺寸，默认 md。xs 适合正文内引用，sm/md 适合来源标签，lg 适合重点证据入口。",
    },
    {
      name: "selected",
      type: "boolean",
      description: "是否为当前选中的引用。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "引用图标。优先级高于 index。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "补充摘要或命中片段。",
    },
    {
      name: "onOpen",
      type: "(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void",
      description: "点击引用时触发。未传 href 但传 onOpen 时组件渲染为按钮。",
    },
  ],
});
