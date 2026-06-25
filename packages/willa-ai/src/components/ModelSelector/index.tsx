import { type ComponentPropsWithoutRef, type ReactNode, useMemo } from "react";
import {
  CheckCircledIcon,
  ClockIcon,
  Cross2Icon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";
import { useControllableState } from "@willa-ui/shared";

import { Tag } from "@willa-ui/content/components/Tag";
import { Button } from "@willa-ui/content/components/Button";
import { EmptyState } from "@willa-ui/content/components/EmptyState";
import { Spinner } from "@willa-ui/content/components/Spinner";
import { Picker, type PickerItem } from "@willa-ui/form/components/Picker";

export type ModelLatencyHint = "fast" | "balanced" | "slow";
export type ModelQualityHint = "quality" | "creative" | "fast";
export type ModelPriceHint = "cheap" | "normal" | "premium";

export type ModelOption = {
  id: string;
  name: string;
  contextWindow?: number;
  latencyHint?: ModelLatencyHint;
  qualityHint?: ModelQualityHint;
  priceHint?: ModelPriceHint;
  capabilities?: Array<string>;
  disabledReason?: string;
};

export type ModelSelectorStatus = "ready" | "empty" | "loading";

export type ModelSelectorProps = {
  models: Array<ModelOption>;
  value?: string;
  defaultValue?: string;
  onChange: (modelId: string) => void;
  onManageModels?: () => void;
  showCapabilityBadges?: boolean;
  showCosts?: boolean;
  disabled?: boolean;
  loading?: boolean;
  emptyText?: string;
  title?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "onChange">;

export function ModelSelector(props: ModelSelectorProps) {
  const {
    models,
    value,
    defaultValue,
    onChange,
    onManageModels,
    showCapabilityBadges = true,
    showCosts = true,
    disabled = false,
    loading = false,
    emptyText = "未找到可选模型",
    title = "模型配置",
    className,
    ...sectionProps
  } = props;

  const [selectedModelId, setSelectedModelId] = useControllableState<string>({
    value,
    defaultValue: defaultValue ?? "",
    onChange,
  });

  const modelById = useMemo(
    () => new Map(models.map((model) => [model.id, model])),
    [models],
  );
  const status = useMemo(
    () => resolveModelSelectorStatus({ loading, models }),
    [loading, models],
  );
  const availableModels = useMemo(
    () => models.filter((model) => !Boolean(model.disabledReason)),
    [models],
  );
  const selectedModel = useMemo(() => {
    const resolvedModelId = getResolvedSelectedModelId({
      models,
      modelById,
      selectedModelId,
      availableModels,
      fallbackModelId: "",
    });

    return modelById.get(resolvedModelId) ?? null;
  }, [availableModels, modelById, models, selectedModelId]);
  const pickerItems = useMemo(
    () =>
      models.map(
        (model) =>
          ({
            value: model.id,
            disabled: Boolean(model.disabledReason),
            label: renderPickerOptionLabel(model, showCosts),
          }) satisfies PickerItem,
      ),
    [models, showCosts],
  );
  const selectedModelMeta = useMemo(
    () =>
      selectedModel
        ? createModelMeta({
            model: selectedModel,
            showCapabilityBadges,
            showCosts,
          })
        : null,
    [selectedModel, showCapabilityBadges, showCosts],
  );
  const hasModels = models.length > 0;
  const previewState = getModelSelectorPreviewState({
    status,
    hasModels,
    selectedModel,
  });

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-model-selector",
        disabled && "willa-model-selector--disabled",
        className,
      )}
      aria-busy={status === "loading" || undefined}
    >
      <div className="willa-model-selector__toolbar">
        <div>
          <div className="willa-model-selector__toolbar-title">{title}</div>
          <div className="willa-model-selector__status">{previewState}</div>
        </div>

        {onManageModels ? (
          <Button
            size="sm"
            variant="outline"
            disabled={disabled}
            onClick={onManageModels}
          >
            管理模型
          </Button>
        ) : null}
      </div>

      <div className="willa-model-selector__picker">
        {status === "loading" ? (
          <EmptyState
            className="willa-model-selector__empty"
            title="模型列表加载中"
            description="请稍候，正在获取当前可用模型。"
            icon={<Spinner label={null} size="sm" />}
          />
        ) : status === "empty" ? (
          <EmptyState
            className="willa-model-selector__empty"
            title="暂无模型"
            description={emptyText}
          />
        ) : (
          <Picker
            value={selectedModel?.id ?? ""}
            items={pickerItems}
            onValueChange={(nextValue) => {
              const selectedId = Array.isArray(nextValue)
                ? (nextValue[0] ?? "")
                : nextValue;

              if (selectedId) {
                setSelectedModelId(selectedId);
              }
            }}
            clearable={false}
            placeholder="请选择模型"
            searchable
            searchPlaceholder="搜索模型"
            emptyText="未匹配到模型"
            disabled={disabled}
            renderValue={(items) => {
              const selectedItem = items[0];
              return selectedItem
                ? (modelById.get(selectedItem.value)?.name ??
                    selectedItem.value)
                : "请选择模型";
            }}
          />
        )}
      </div>

      {selectedModel ? (
        <div className="willa-model-selector__preview">
          <div className="willa-model-selector__preview-title">
            当前模型：{selectedModel.name}
          </div>
          <div className="willa-model-selector__preview-meta">
            {selectedModelMeta}
          </div>
        </div>
      ) : null}
      <div className="willa-model-selector__footer" aria-hidden="true">
        <span className="willa-model-selector__status">
          <CheckCircledIcon />
          {availableModels.length > 0
            ? `${availableModels.length} 个可用模型，${models.length - availableModels.length} 个不可用`
            : "当前无可用模型，已默认展示不可用模型详情。"}
        </span>
      </div>
    </section>
  );
}

const renderPickerOptionLabel = (model: ModelOption, showCosts: boolean) => {
  const metaItems = [
    model.contextWindow ? toContextWindowLabel(model.contextWindow) : null,
    model.latencyHint
      ? `延迟${resolveHintLabel("latency", model.latencyHint)}`
      : null,
    showCosts && model.priceHint
      ? `费用${resolveHintLabel("price", model.priceHint)}`
      : null,
  ].filter(Boolean);

  return (
    <span className="willa-model-selector__option-label">
      <span
        className={classNames(
          "willa-model-selector__option-name",
          model.disabledReason && "willa-model-selector__option-disabled",
        )}
      >
        <span>{model.name}</span>
        {model.disabledReason ? (
          <span className="willa-model-selector__option-status">不可用</span>
        ) : null}
      </span>
      {metaItems.length > 0 ? (
        <span className="willa-model-selector__option-summary">
          {metaItems.map((item) => (
            <span
              className="willa-model-selector__option-summary-item"
              key={item}
            >
              {item}
            </span>
          ))}
        </span>
      ) : null}
    </span>
  );
};

const createModelMeta = (options: {
  model: ModelOption;
  showCapabilityBadges?: boolean;
  showCosts?: boolean;
}) => {
  const { model, showCapabilityBadges = true, showCosts = true } = options;
  const items: Array<ReactNode> = [];

  if (model.contextWindow !== undefined) {
    items.push(
      <span className="willa-model-selector__preview-meta-item" key="context">
        <Tag size="sm" tone="neutral">
          上下文 {toContextWindowLabel(model.contextWindow)}
        </Tag>
      </span>,
    );
  }

  if (model.latencyHint) {
    items.push(
      <span className="willa-model-selector__preview-meta-item" key="latency">
        <Tag size="sm" tone="info" icon={<LightningBoltIcon />}>
          延迟 {resolveHintLabel("latency", model.latencyHint)}
        </Tag>
      </span>,
    );
  }

  if (model.qualityHint) {
    items.push(
      <span className="willa-model-selector__preview-meta-item" key="quality">
        <Tag size="sm" tone="success" icon={<ClockIcon />}>
          质量 {resolveHintLabel("quality", model.qualityHint)}
        </Tag>
      </span>,
    );
  }

  if (showCosts && model.priceHint) {
    items.push(
      <span className="willa-model-selector__preview-meta-item" key="price">
        <Tag size="sm" tone="neutral">
          费用 {resolveHintLabel("price", model.priceHint)}
        </Tag>
      </span>,
    );
  }

  if (showCapabilityBadges && (model.capabilities ?? []).length > 0) {
    for (const capability of model.capabilities ?? []) {
      items.push(
        <span
          className="willa-model-selector__preview-meta-item"
          key={`capability-${capability}`}
        >
          <Tag size="sm" tone="neutral" variant="outline">
            {capability}
          </Tag>
        </span>,
      );
    }
  }

  if (model.disabledReason) {
    items.push(
      <span
        className="willa-model-selector__preview-reason"
        key="disabled-reason"
      >
        <Cross2Icon /> {model.disabledReason}
      </span>,
    );
  }

  return items;
};

const resolveHintLabel = (
  dimension: "latency" | "quality" | "price",
  hint: ModelLatencyHint | ModelQualityHint | ModelPriceHint,
) => {
  if (dimension === "latency") {
    return hint === "fast" ? "快" : hint === "balanced" ? "均衡" : "慢";
  }

  if (dimension === "quality") {
    return hint === "quality"
      ? "质量"
      : hint === "creative"
        ? "创意"
        : "速度优先";
  }

  return hint === "cheap" ? "低价" : hint === "normal" ? "标准" : "高端";
};

const toContextWindowLabel = (tokens: number) => {
  return `${tokens.toLocaleString()} tokens`;
};

const resolveModelSelectorStatus = (options: {
  loading: boolean;
  models: Array<ModelOption>;
}) => {
  if (options.loading) {
    return "loading";
  }

  if (options.models.length === 0) {
    return "empty";
  }

  return "ready";
};

const getResolvedSelectedModelId = (options: {
  models: Array<ModelOption>;
  modelById: Map<string, ModelOption>;
  selectedModelId: string;
  availableModels: Array<ModelOption>;
  fallbackModelId: string;
}) => {
  const {
    models,
    modelById,
    selectedModelId,
    availableModels,
    fallbackModelId,
  } = options;

  if (selectedModelId && modelById.has(selectedModelId)) {
    return selectedModelId;
  }

  if (availableModels.length > 0) {
    return availableModels[0]?.id ?? fallbackModelId;
  }

  return models[0]?.id ?? fallbackModelId;
};

const getModelSelectorPreviewState = (options: {
  status: ModelSelectorStatus;
  hasModels: boolean;
  selectedModel: ModelOption | null;
}) => {
  const { status, hasModels, selectedModel } = options;

  if (status === "loading") {
    return "模型列表加载中，约 2 秒刷新完成。";
  }

  if (status === "empty") {
    return "当前无可选模型。请联系管理员补充可用配置。";
  }

  if (selectedModel) {
    return `已选择：${selectedModel.name}`;
  }

  return hasModels ? "选择一个模型开始配置" : "暂无法继续：暂无模型";
};

ModelSelector.displayName = "ModelSelector";
