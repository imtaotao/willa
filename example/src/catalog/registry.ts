import { sortStrings } from "aidly";

import type { ComponentDoc, ComponentDocEntry } from "#example/catalog/types";

type DocCategory = ComponentDocEntry["category"];
type DocModule = { default: ComponentDoc };
type DocSpecGroups = Record<DocCategory, Array<string>>;
type ResolvedDocSpec = readonly [name: string, category: DocCategory];

const docModules = import.meta.glob<DocModule>("../docs/*.demo.tsx");

const docSpecGroups = {
  ai: [
    "AttachmentList",
    "ChatMessage",
    "Composer",
    "GenerationCard",
    "MessageActions",
    "MessageList",
    "PromptInput",
    "ReasoningSteps",
    "SuggestionChips",
    "ThinkingIndicator",
    "ToolCallCard",
  ],
  widgets: [
    "AudioEmbed",
    "AudioLink",
    "EnglishCards",
    "GitHubMention",
    "GitHubRepo",
    "Mdx",
    "Poem",
    "VideoEmbed",
    "VideoLink",
    "WebEmbed",
    "XPostEmbed",
  ],
  form: [
    "Calendar",
    "Checkbox",
    "DatePicker",
    "Form",
    "FormActions",
    "FormField",
    "FilterBar",
    "FormGroup",
    "FormMessage",
    "Input",
    "Picker",
    "Radio",
    "RangeInput",
    "SearchInput",
    "Select",
    "Switch",
    "TextArea",
    "TreeSelect",
    "Upload",
  ],
  content: [
    "Avatar",
    "Badge",
    "Breadcrumb",
    "Button",
    "Card",
    "Callout",
    "ChatThread",
    "Citation",
    "CodeBlock",
    "CodeTabs",
    "Comment",
    "CommentInput",
    "CommentList",
    "DetailsBlock",
    "DescriptionList",
    "Dialog",
    "Download",
    "EmptyState",
    "FileCard",
    "FileTree",
    "Group",
    "Image",
    "ImageGallery",
    "IconButton",
    "InputPanel",
    "Kbd",
    "Lightbox",
    "Menu",
    "NotFound",
    "PageHeader",
    "Pagination",
    "Popover",
    "Progress",
    "Separator",
    "SectionHeader",
    "Skeleton",
    "SourceCard",
    "Spinner",
    "Steps",
    "Table",
    "Tabs",
    "Timeline",
    "Toast",
    "Tooltip",
  ],
} satisfies DocSpecGroups;

const toKebabCase = (value: string) => {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};

const defineDocEntry = ([name, category]: ResolvedDocSpec) => {
  const modulePath = `../docs/${name}.demo.tsx`;

  return {
    id: toKebabCase(name),
    name,
    category,
    load: async () => {
      const loadModule = docModules[modulePath];
      if (!loadModule) {
        throw new Error(`Missing component demo module: ${modulePath}`);
      }

      const module = await loadModule();
      if (module.default.name !== name) {
        throw new Error(`Missing component doc in module: ${modulePath}`);
      }

      return module.default;
    },
  };
};

const componentDocs = Object.entries(docSpecGroups)
  .flatMap(([category, specs]) =>
    specs.map(
      (name) => [name, category as DocCategory] satisfies ResolvedDocSpec,
    ),
  )
  .map(defineDocEntry);

const componentDocsByName = new Map(
  componentDocs.map((doc) => [doc.name, doc]),
);

export const componentDocRegistry = sortStrings(
  componentDocs.map((doc) => doc.name),
).map((name) => componentDocsByName.get(name)!);

export function loadComponentDoc(entry: ComponentDocEntry) {
  return entry.load() as Promise<ComponentDoc>;
}
