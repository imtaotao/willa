import { unindent } from "aidly";
import { createElement, type ComponentType, type ReactNode } from "react";

import type { ComponentDoc, PropRow } from "#example/catalog/types";

type DemoComponent = ComponentType<any>;

export type DemoElement = {
  name: string;
  component: DemoComponent;
  props?: Record<string, unknown>;
  children?: ReactNode | Array<DemoElement>;
};

type ComponentDocInput = {
  id: string;
  name: string;
  displayName?: string;
  category?: ComponentDoc["category"];
  packageName: string;
  description: string;
  imports: Array<{ name: string; from: string }>;
  css: string;
  demo: DemoElement;
  code: string;
  props: Array<PropRow>;
  propGroups?: ComponentDoc["propGroups"];
  sections?: Array<ComponentDocSectionInput>;
};

type ComponentDocSectionInput = {
  title: string;
  code: string;
  content: ReactNode;
};

const willaDemoImportNames = new Set([
  "Alert",
  "Anchor",
  "AttachmentList",
  "AudioEmbed",
  "AudioLink",
  "AppShell",
  "Avatar",
  "Badge",
  "BorderBeam",
  "Breadcrumb",
  "Button",
  "Calendar",
  "Callout",
  "Carousel",
  "Card",
  "ChatMessage",
  "ChatThread",
  "Checkbox",
  "Citation",
  "CodeBlock",
  "CodeTabs",
  "ColorPicker",
  "Comment",
  "CommentInput",
  "CommentList",
  "CopyButton",
  "Composer",
  "Container",
  "ContextPanel",
  "DatePicker",
  "Collapse",
  "TimePicker",
  "DescriptionList",
  "Dialog",
  "DiffViewer",
  "Download",
  "Drawer",
  "EmptyState",
  "EnglishCards",
  "FeedbackBar",
  "FileCard",
  "FileCardIcon",
  "FilePreview",
  "FileTree",
  "FloatButton",
  "FloatButtonGroup",
  "Form",
  "FormActions",
  "FormField",
  "FilterBar",
  "FormGroup",
  "FormMessage",
  "GenerationCard",
  "GitHubMention",
  "GitHubRepo",
  "Grid",
  "Group",
  "ContextWindowMeter",
  "HumanApprovalCard",
  "IconButton",
  "Image",
  "ImageGallery",
  "Input",
  "InputPanel",
  "Kbd",
  "KbdShortcut",
  "Lightbox",
  "List",
  "LogoWall",
  "Mdx",
  "Menu",
  "MessageActions",
  "MessageList",
  "Masonry",
  "MathExpression",
  "MentionInput",
  "ModelSelector",
  "NumberInput",
  "PageHeader",
  "Panel",
  "Pagination",
  "Picker",
  "Poem",
  "Popover",
  "Progress",
  "PromptInput",
  "PromptTemplatePicker",
  "ProfileCard",
  "QRCode",
  "Radio",
  "Rate",
  "RangeInput",
  "ReasoningSteps",
  "ResizablePanel",
  "Result",
  "SearchInput",
  "Select",
  "SelectionBar",
  "Segmented",
  "Separator",
  "ScheduleCalendar",
  "SectionHeader",
  "SidebarLayout",
  "SiteFooter",
  "SiteNav",
  "Skeleton",
  "SourceCard",
  "Spinner",
  "SplitPane",
  "Stack",
  "Statistic",
  "Step",
  "Steps",
  "SuggestionChips",
  "Switch",
  "Tag",
  "TagInput",
  "Table",
  "Tabs",
  "TextArea",
  "ThinkingIndicator",
  "Timeline",
  "Toast",
  "ToolCallCard",
  "Toolbar",
  "Tooltip",
  "Tour",
  "Tree",
  "TreeSelect",
  "Typography",
  "Upload",
  "VideoEmbed",
  "VideoLink",
  "Watermark",
  "WebEmbed",
  "WillaShell",
  "XPostEmbed",
]);

export function defineDoc(input: ComponentDocInput) {
  return {
    id: input.id,
    name: input.name,
    displayName: input.displayName,
    category: input.category ?? "content",
    packageName: input.packageName,
    description: input.description,
    preview: renderDemoElement(input.demo),
    code: completeDemoCode(input, unindent(input.code)),
    props: input.props,
    propGroups: input.propGroups,
    sections: input.sections?.map((section) => ({
      ...section,
      code: createSectionCode(input, section),
    })),
  };
}

const renderDemoElement = (element: DemoElement) => {
  const children = Array.isArray(element.children)
    ? element.children.map((child, index) =>
        isDemoElement(child) ? (
          <DemoElementRenderer key={`${child.name}-${index}`} element={child} />
        ) : (
          child
        ),
      )
    : element.children;

  if (typeof children === "undefined") {
    return createElement(element.component, element.props);
  }
  return createElement(element.component, element.props, children);
};

const isDemoElement = (
  value: ReactNode | DemoElement,
): value is DemoElement => {
  return Boolean(
    value &&
    typeof value === "object" &&
    "name" in value &&
    "component" in value,
  );
};

const DemoElementRenderer = ({ element }: { element: DemoElement }) => {
  return <>{renderDemoElement(element)}</>;
};

const createSectionCode = (
  input: ComponentDocInput,
  section: ComponentDocSectionInput,
) => {
  return completeDemoCode(input, unindent(section.code));
};

const completeDemoCode = (input: ComponentDocInput, code: string) => {
  const body = unindent(code);
  const importedNames = getImportedNames(body);
  const jsxNames = getJsxComponentNames(body);
  const referencedNames = getReferencedNames(body);
  const importLines = createImportLines(
    input.imports
      .flatMap((item) =>
        parseImportNames(item.name).map((name) => ({
          from: item.from,
          name,
        })),
      )
      .filter((item) => !importedNames.has(item.name))
      .filter((item) => referencedNames.has(item.name)),
  );
  const inferredImportLines = Array.from(jsxNames)
    .filter((name) => shouldInferWillaImport(name))
    .filter((name) => !importedNames.has(name))
    .filter(
      (name) =>
        !input.imports.some((item) =>
          parseImportNames(item.name).includes(name),
        ),
    )
    .sort()
    .map((name) => `import { ${name} } from "willa/${name}";`);
  const cssLines = [
    input.css,
    ...Array.from(jsxNames)
      .filter(shouldInferWillaImport)
      .map((name) => `willa/${name}.css`),
  ]
    .filter(shouldInferCssImport)
    .filter((path, index, paths) => paths.indexOf(path) === index)
    .filter(
      (path) => !body.includes(`"${path}"`) && !body.includes(`'${path}'`),
    )
    .map((path) => `import "${path}";`);
  const prefix = [...importLines, ...inferredImportLines, ...cssLines];

  if (prefix.length === 0) return body;

  return unindent([prefix.join("\n"), "", body].join("\n"));
};

const getImportedNames = (code: string) => {
  const names = new Set<string>();
  const importPattern = /import\s*\{([^}]+)\}\s*from\s*["'][^"']+["']/g;

  for (const match of code.matchAll(importPattern)) {
    for (const part of match[1].split(",")) {
      const name = part
        .trim()
        .replace(/^type\s+/, "")
        .split(/\s+as\s+/)[0]
        .trim();

      if (name) names.add(name);
    }
  }

  return names;
};

const getCodeWithoutImports = (code: string) => {
  return code.replace(/import[\s\S]*?from\s*["'][^"']+["'];?/g, "");
};

const getReferencedNames = (code: string) => {
  const names = new Set<string>();
  const importFreeCode = getCodeWithoutImports(code);
  const referencePattern = /\b[A-Za-z_$][A-Za-z0-9_$]*\b/g;

  for (const match of importFreeCode.matchAll(referencePattern)) {
    names.add(match[0]);
  }

  return names;
};

const getJsxComponentNames = (code: string) => {
  const names = new Set<string>();
  const jsxPattern = /<([A-Z][A-Za-z0-9]*)\b/g;

  for (const match of code.matchAll(jsxPattern)) {
    names.add(match[1]);
  }

  return names;
};

const parseImportNames = (value: string) => {
  return value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
};

const createImportLines = (imports: Array<{ name: string; from: string }>) => {
  const groups = new Map<string, Array<string>>();

  for (const item of imports) {
    groups.set(item.from, [...(groups.get(item.from) ?? []), item.name]);
  }

  return Array.from(groups.entries()).map(([from, names]) => {
    const uniqueNames = Array.from(new Set(names)).sort();
    return `import { ${uniqueNames.join(", ")} } from "${from}";`;
  });
};

const shouldInferWillaImport = (name: string) => {
  return willaDemoImportNames.has(name);
};

const shouldInferCssImport = (path: string) => {
  return !path.includes("/Step.css");
};
