import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { ModelSelector, type ModelOption } from "willa/ModelSelector";
import "willa/Button.css";
import "willa/Group.css";
import "willa/ModelSelector.css";

import { defineDoc } from "#example/catalog/defineDoc";

const layoutStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 58rem)",
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

const sharedModels: Array<ModelOption> = [
  {
    id: "o3-mini",
    name: "OpenAI O3-Mini",
    contextWindow: 96_000,
    latencyHint: "fast",
    qualityHint: "quality",
    priceHint: "cheap",
    capabilities: ["推理", "长上下文", "工具调用"],
  },
  {
    id: "qwen-coder",
    name: "Qwen2.5 Coder",
    contextWindow: 65_536,
    latencyHint: "balanced",
    qualityHint: "quality",
    priceHint: "normal",
    capabilities: ["代码", "重写", "长文本"],
  },
  {
    id: "deep-research",
    name: "Deep Research Pro",
    contextWindow: 128_000,
    latencyHint: "slow",
    qualityHint: "creative",
    priceHint: "premium",
    disabledReason: "该模型当前不可用",
  },
];

const ModelSelectorBasic = () => {
  const [selectedModelId, setSelectedModelId] = useState("o3-mini");

  return (
    <div style={layoutStyle}>
      <ModelSelector
        models={sharedModels}
        value={selectedModelId}
        defaultValue="o3-mini"
        onChange={setSelectedModelId}
        onManageModels={() => {
          window.alert("模型管理入口由宿主系统接管。");
        }}
      />
      <div style={statusStyle}>当前模型 ID：{selectedModelId}</div>
    </div>
  );
};

const ModelSelectorLoading = () => {
  return (
    <div style={layoutStyle}>
      <ModelSelector
        models={[]}
        loading
        onChange={() => {
          return;
        }}
        emptyText="加载完成后将展示可用模型。"
      />
    </div>
  );
};

const ModelSelectorAllUnavailable = () => {
  const [selectedModelId, setSelectedModelId] = useState("deep-research");

  return (
    <div style={layoutStyle}>
      <ModelSelector
        models={[
          {
            id: "legacy-disabled",
            name: "Legacy Model",
            contextWindow: 2048,
            disabledReason: "模型配额不足，暂时不可用",
          },
          {
            id: "deprecated-lite",
            name: "Deprecated Lite",
            contextWindow: 8192,
            disabledReason: "仅在企业版可见",
          },
        ]}
        value={selectedModelId}
        onChange={setSelectedModelId}
      />
      <Group gap="sm">
        <Button
          size="sm"
          variant="ghost"
          icon={<ReloadIcon />}
          onClick={() => {
            setSelectedModelId("legacy-disabled");
          }}
        >
          重试同步
        </Button>
        <Button size="sm" variant="outline" icon={<ReloadIcon />} disabled>
          禁用按钮
        </Button>
      </Group>
    </div>
  );
};

export default defineDoc({
  id: "model-selector",
  name: "ModelSelector",
  displayName: "模型选择器",
  category: "ai",
  packageName: "willa/ModelSelector",
  description:
    "模型配置区域，支持展示能力标签、上下文窗口与速度/质量/成本倾向。",
  imports: [{ name: "ModelSelector", from: "willa/ModelSelector" }],
  css: "willa/ModelSelector.css",
  demo: {
    name: "ModelSelectorBasic",
    component: ModelSelectorBasic,
  },
  code: `
    import { useState } from "react";
    import { ModelSelector } from "willa/ModelSelector";
    import "willa/ModelSelector.css";

    const models = [
      {
        id: "o3-mini",
        name: "OpenAI O3-Mini",
        contextWindow: 96000,
        latencyHint: "fast",
        qualityHint: "quality",
        priceHint: "cheap",
      },
    ];

    const Demo = () => {
      const [selectedModelId, setSelectedModelId] = useState("o3-mini");

      return (
        <ModelSelector
          models={models}
          value={selectedModelId}
          onChange={setSelectedModelId}
        />
      );
    };
  `,
  sections: [
    {
      title: "主链路（可受控切换）",
      code: `
        <ModelSelector
          models={models}
          value={selectedModelId}
          onChange={setSelectedModelId}
          onManageModels={() => {
            window.alert("模型管理入口由宿主系统接管。");
          }}
        />;
      `,
      content: <ModelSelectorBasic />,
    },
    {
      title: "边界（加载中）",
      code: `
        <ModelSelector
          models={[]}
          loading
          onChange={() => {}}
          emptyText="加载完成后将展示可用模型。"
        />;
      `,
      content: <ModelSelectorLoading />,
    },
    {
      title: "边界（全部不可用）",
      code: `
        <ModelSelector
          models={[
            {
              id: "legacy-disabled",
              name: "Legacy Model",
              contextWindow: 2048,
              disabledReason: "模型配额不足，暂时不可用",
            },
            {
              id: "deprecated-lite",
              name: "Deprecated Lite",
              contextWindow: 8192,
              disabledReason: "仅在企业版可见",
            },
          ]}
          value="legacy-disabled"
          onChange={setSelectedModelId}
        />;
      `,
      content: <ModelSelectorAllUnavailable />,
    },
  ],
  props: [
    {
      name: "models",
      type: "Array<ModelOption>",
      required: true,
      description: "可选模型列表。",
    },
    {
      name: "value",
      type: "string",
      description: "受控选中的模型 ID。",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "非受控默认选中的模型 ID。",
    },
    {
      name: "onChange",
      type: "(modelId: string) => void",
      required: true,
      description: "模型选择变化时触发。",
    },
    {
      name: "onManageModels",
      type: "() => void",
      description: "点击管理模型按钮时触发；未传入时不展示按钮。",
    },
    {
      name: "showCapabilityBadges",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示模型能力标签。",
    },
    {
      name: "showCosts",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示费用倾向标签。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用模型选择和管理入口。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示模型列表加载态。",
    },
    {
      name: "emptyText",
      type: "string",
      defaultValue: '"未找到可选模型"',
      description: "模型列表为空时的描述文案。",
    },
    {
      name: "title",
      type: "string",
      defaultValue: '"模型配置"',
      description: "面板标题。",
    },
  ],
});
