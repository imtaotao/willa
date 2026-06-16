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
    "LogoWall",
    "Mdx",
    "Poem",
    "ProfileCard",
    "QRCode",
    "SiteFooter",
    "SiteNav",
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
    "TagInput",
    "TextArea",
    "TreeSelect",
    "Upload",
  ],
  layout: [
    "AppShell",
    "Card",
    "Container",
    "Grid",
    "Group",
    "Masonry",
    "PageHeader",
    "Panel",
    "Separator",
    "SectionHeader",
    "SidebarLayout",
    "SplitPane",
    "Stack",
  ],
  content: [
    "Anchor",
    "Avatar",
    "Badge",
    "Breadcrumb",
    "Button",
    "Callout",
    "Carousel",
    "ChatThread",
    "Citation",
    "CodeBlock",
    "CodeTabs",
    "Comment",
    "CommentInput",
    "CommentList",
    "DetailsBlock",
    "DescriptionList",
    "DiffViewer",
    "Dialog",
    "Download",
    "Drawer",
    "EmptyState",
    "FileCard",
    "FilePreview",
    "FileTree",
    "Image",
    "ImageGallery",
    "IconButton",
    "InputPanel",
    "Kbd",
    "Lightbox",
    "List",
    "Menu",
    "NotFound",
    "Pagination",
    "Popover",
    "Progress",
    "Result",
    "SelectionBar",
    "Skeleton",
    "SourceCard",
    "Spinner",
    "Statistic",
    "Steps",
    "Table",
    "Tabs",
    "Timeline",
    "Tour",
    "Tree",
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
