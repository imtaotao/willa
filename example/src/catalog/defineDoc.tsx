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
  category?: ComponentDoc["category"];
  packageName: string;
  description: string;
  imports: Array<{ name: string; from: string }>;
  css: string;
  demo: DemoElement;
  code: string;
  props: Array<PropRow>;
  sections?: Array<ComponentDocSectionInput>;
};

type ComponentDocSectionInput = {
  title: string;
  code: string;
  content: ReactNode;
};

const willaDemoImportNames = new Set([
  "AttachmentList",
  "AudioEmbed",
  "AudioLink",
  "AppShell",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Calendar",
  "Callout",
  "Card",
  "ChatMessage",
  "ChatThread",
  "Checkbox",
  "Citation",
  "CodeBlock",
  "CodeTabs",
  "Comment",
  "CommentInput",
  "CommentList",
  "Composer",
  "Container",
  "DatePicker",
  "DetailsBlock",
  "DescriptionList",
  "Dialog",
  "Download",
  "EmptyState",
  "EnglishCards",
  "FileCard",
  "FileTree",
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
  "IconButton",
  "Image",
  "ImageGallery",
  "Input",
  "InputPanel",
  "Kbd",
  "KbdShortcut",
  "Lightbox",
  "Mdx",
  "Menu",
  "MessageActions",
  "MessageList",
  "Masonry",
  "NotFound",
  "PageHeader",
  "Panel",
  "Pagination",
  "Poem",
  "Popover",
  "Progress",
  "PromptInput",
  "Radio",
  "RangeInput",
  "ReasoningSteps",
  "SearchInput",
  "Select",
  "Separator",
  "SectionHeader",
  "SidebarLayout",
  "Skeleton",
  "SourceCard",
  "Spinner",
  "SplitPane",
  "Stack",
  "Step",
  "Steps",
  "SuggestionChips",
  "Switch",
  "Table",
  "Tabs",
  "TextArea",
  "ThinkingIndicator",
  "Timeline",
  "Toast",
  "ToolCallCard",
  "Tooltip",
  "Upload",
  "VideoEmbed",
  "VideoLink",
  "WebEmbed",
  "XPostEmbed",
]);

export function defineDoc(input: ComponentDocInput) {
  return {
    id: input.id,
    name: input.name,
    category: input.category ?? "content",
    packageName: input.packageName,
    description: input.description,
    preview: renderDemoElement(input.demo),
    code: completeDemoCode(input, unindent(input.code)),
    props: input.props,
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
  const importLines = input.imports
    .filter((item) => !importedNames.has(item.name))
    .map((item) => `import { ${item.name} } from "${item.from}";`);
  const inferredImportLines = Array.from(jsxNames)
    .filter((name) => shouldInferWillaImport(name))
    .filter((name) => !importedNames.has(name))
    .filter((name) => !input.imports.some((item) => item.name === name))
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

const getJsxComponentNames = (code: string) => {
  const names = new Set<string>();
  const jsxPattern = /<([A-Z][A-Za-z0-9]*)\b/g;

  for (const match of code.matchAll(jsxPattern)) {
    names.add(match[1]);
  }

  return names;
};

const shouldInferWillaImport = (name: string) => {
  return willaDemoImportNames.has(name);
};

const shouldInferCssImport = (path: string) => {
  return !path.includes("/Step.css");
};
