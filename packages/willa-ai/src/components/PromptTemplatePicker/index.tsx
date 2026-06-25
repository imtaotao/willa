import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  useMemo,
} from "react";
import classNames from "classnames";
import { useControllableState } from "@willa-ui/shared";

import { SearchInput } from "@willa-ui/form/components/SearchInput";
import {
  Segmented,
  type SegmentedOption,
} from "@willa-ui/content/components/Segmented";
import { EmptyState } from "@willa-ui/content/components/EmptyState";
import { List } from "@willa-ui/content/components/List";
import { Spinner } from "@willa-ui/content/components/Spinner";
import { Tag } from "@willa-ui/content/components/Tag";
import { Button } from "@willa-ui/content/components/Button";
import {
  matchesSearchQuery,
  normalizeSearchQuery,
  renderHighlightedText,
} from "#ai/internal/searchText";

const allTemplatesCategoryId = "__all";

export type PromptTemplate = {
  id: string;
  title: string;
  description?: string;
  tags?: Array<string>;
  content: string;
  categoryId?: string | null;
};

export type PromptTemplateCategory = {
  id: string;
  label: string;
};

export type PromptTemplatePickerProps = {
  templates: Array<PromptTemplate>;
  value?: string;
  defaultValue?: string;
  onSelect: (id: string) => void;
  recentTemplateIds?: Array<string>;
  favorites?: Array<string>;
  onToggleFavorite?: (id: string) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  categories?: Array<PromptTemplateCategory>;
  activeCategoryId?: string | null;
  onCategoryChange?: (categoryId: string | null) => void;
  disabled?: boolean;
  loading?: boolean;
  emptyText?: string;
  showTagFilter?: boolean;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "onSelect">;

export function PromptTemplatePicker(props: PromptTemplatePickerProps) {
  const {
    templates,
    value,
    defaultValue,
    onSelect,
    recentTemplateIds = [],
    favorites = [],
    onToggleFavorite,
    searchValue,
    onSearchChange,
    categories,
    activeCategoryId,
    onCategoryChange,
    disabled = false,
    loading = false,
    emptyText = "未找到可用模板",
    showTagFilter = true,
    className,
    ...sectionProps
  } = props;

  const [searchTerm, setSearchTerm] = useControllableState<string>({
    value: searchValue,
    defaultValue: "",
    onChange: onSearchChange,
  });

  const [selectedTemplateId, setSelectedTemplateId] =
    useControllableState<string>({
      value,
      defaultValue: defaultValue ?? "",
      onChange: onSelect,
    });

  const [activeCategory, setActiveCategory] = useControllableState<string>({
    value: activeCategoryId ?? allTemplatesCategoryId,
    defaultValue: allTemplatesCategoryId,
    onChange: (nextValue) => {
      onCategoryChange?.(
        nextValue === allTemplatesCategoryId ? null : nextValue,
      );
    },
  });

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  const recentSet = useMemo(
    () => new Set(recentTemplateIds),
    [recentTemplateIds],
  );
  const templateMap = useMemo(
    () => new Map(templates.map((template) => [template.id, template])),
    [templates],
  );

  const normalizedSearch = normalizeSearchQuery(searchTerm);
  const categoriesWithAll = useMemo(
    () =>
      [
        { value: allTemplatesCategoryId, label: "全部" },
        ...(categories ?? []).map((category) => ({
          value: category.id,
          label: category.label,
        })),
      ] as Array<SegmentedOption>,
    [categories],
  );

  const filteredTemplates = useMemo(() => {
    const baseTemplates = templates.filter((template) => {
      if (activeCategory === allTemplatesCategoryId) {
        return true;
      }

      return template.categoryId === activeCategory;
    });

    if (!normalizedSearch) {
      return sortTemplatesByPriority({
        templates: baseTemplates,
        favorites: favoriteSet,
        recents: recentSet,
      });
    }

    return sortTemplatesByPriority({
      templates: baseTemplates.filter((template) => {
        const candidate = summarizeTemplate(template);
        return matchesSearchQuery(candidate, normalizedSearch);
      }),
      favorites: favoriteSet,
      recents: recentSet,
    });
  }, [activeCategory, favoriteSet, normalizedSearch, recentSet, templates]);

  const selectedTemplate = selectedTemplateId
    ? (templateMap.get(selectedTemplateId) ?? null)
    : null;

  const categoryVisible = categoriesWithAll.length > 1;
  const controlsDisabled = disabled || loading;
  const listItems = useMemo(
    () =>
      filteredTemplates.map((template) => {
        const isFavorite = favoriteSet.has(template.id);
        const isRecent = recentSet.has(template.id);

        return {
          id: template.id,
          title: (
            <span className="willa-prompt-template-picker__item-title">
              <span className="willa-prompt-template-picker__item-title-main">
                {renderHighlightedText({
                  text: template.title,
                  query: searchTerm,
                  markClassName: "willa-prompt-template-picker__mark",
                })}
              </span>
            </span>
          ),
          description: (
            <span className="willa-prompt-template-picker__item-description">
              {renderHighlightedText({
                text: template.description ?? template.content,
                query: searchTerm,
                markClassName: "willa-prompt-template-picker__mark",
              })}
            </span>
          ),
          meta: (
            <span className="willa-prompt-template-picker__item-meta">
              {isFavorite ? <Tag tone="success">收藏</Tag> : null}
              {isRecent ? <Tag tone="info">最近</Tag> : null}
              {(showTagFilter ? (template.tags ?? []) : []).map((tag) => (
                <Tag size="sm" tone="neutral" key={`${template.id}-${tag}`}>
                  {tag}
                </Tag>
              ))}
            </span>
          ),
          actions: (
            <span className="willa-prompt-template-picker__actions">
              {onToggleFavorite ? (
                <Button
                  size="sm"
                  variant="soft"
                  disabled={controlsDisabled}
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleFavorite(template.id);
                  }}
                >
                  {isFavorite ? "取消收藏" : "收藏"}
                </Button>
              ) : null}
              <Button
                size="sm"
                variant="ghost"
                disabled={controlsDisabled}
                onClick={(event) => {
                  event.stopPropagation();
                  if (!controlsDisabled) {
                    setSelectedTemplateId(template.id);
                  }
                }}
              >
                回填
              </Button>
            </span>
          ),
          selected: selectedTemplateId === template.id,
          disabled: controlsDisabled,
        };
      }),
    [
      favoriteSet,
      onToggleFavorite,
      recentSet,
      searchTerm,
      selectedTemplateId,
      setSelectedTemplateId,
      showTagFilter,
      controlsDisabled,
    ],
  );

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-prompt-template-picker",
        disabled && "willa-prompt-template-picker--disabled",
        loading && "willa-prompt-template-picker--loading",
        className,
      )}
      aria-busy={loading || undefined}
    >
      <div className="willa-prompt-template-picker__toolbar">
        <SearchInput
          className="willa-prompt-template-picker__search"
          value={searchTerm}
          onValueChange={setSearchTerm}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.currentTarget.value)
          }
          onSearch={setSearchTerm}
          onClear={() => setSearchTerm("")}
          placeholder="搜索模板关键词"
          clearable
          disabled={controlsDisabled}
        />
        {categoryVisible ? (
          <Segmented
            className="willa-prompt-template-picker__category"
            options={categoriesWithAll}
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value)}
            disabled={controlsDisabled}
          />
        ) : null}
      </div>

      {searchTerm.trim() ? (
        <div className="willa-prompt-template-picker__summary">
          已匹配 {filteredTemplates.length} 个模板
        </div>
      ) : null}

      {loading ? (
        <EmptyState
          className="willa-prompt-template-picker--empty"
          title="模板加载中"
          description="请稍候，正在同步可用模板。"
          icon={<Spinner label={null} size="sm" />}
        />
      ) : templates.length === 0 ? (
        <EmptyState
          className="willa-prompt-template-picker--empty"
          title="暂无模板"
          description={emptyText}
        />
      ) : (
        <List
          className="willa-prompt-template-picker__list"
          items={listItems}
          empty={
            searchTerm.trim() ? (
              <EmptyState
                title="无匹配模板"
                description="请调整关键词或清空筛选条件后重试。"
                actions={
                  searchTerm.trim() ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSearchTerm("")}
                    >
                      清空搜索
                    </Button>
                  ) : null
                }
              />
            ) : null
          }
          onItemClick={(item) => {
            if (!controlsDisabled) {
              setSelectedTemplateId(item.id);
            }
          }}
        />
      )}

      {selectedTemplate ? (
        <div className="willa-prompt-template-picker__preview">
          <div className="willa-prompt-template-picker__preview-title">
            已选模板：{selectedTemplate.title}
          </div>
          <div className="willa-prompt-template-picker__selected-meta">
            {(selectedTemplate.tags ?? []).map((tag) => (
              <Tag
                size="sm"
                tone="neutral"
                key={`${selectedTemplate.id}-${tag}`}
              >
                {tag}
              </Tag>
            ))}
          </div>
          <pre className="willa-prompt-template-picker__preview-content">
            {selectedTemplate.content}
          </pre>
        </div>
      ) : null}

      {selectedTemplateId && !selectedTemplate ? (
        <div className="willa-prompt-template-picker__selected">
          当前已选模板 ID {selectedTemplateId} 不在当前列表中，请检查筛选条件。
        </div>
      ) : null}
    </section>
  );
}

const summarizeTemplate = (template: PromptTemplate) => {
  const description = template.description ?? template.content;
  return `${template.title}\n${description}\n${(template.tags ?? []).join(" ")}`;
};

const sortTemplatesByPriority = (options: {
  templates: Array<PromptTemplate>;
  favorites: Set<string>;
  recents: Set<string>;
}) => {
  const { templates, favorites, recents } = options;

  return [...templates].sort((first, second) => {
    const firstPriority =
      (favorites.has(first.id) ? 0 : 1) * 2 + (recents.has(first.id) ? 0 : 1);
    const secondPriority =
      (favorites.has(second.id) ? 0 : 1) * 2 + (recents.has(second.id) ? 0 : 1);

    if (firstPriority !== secondPriority) {
      return firstPriority - secondPriority;
    }

    return first.title.localeCompare(second.title);
  });
};

PromptTemplatePicker.displayName = "PromptTemplatePicker";
