import { createElement, type ComponentType, type ReactNode } from "react";
import { unindent } from "aidly";

import type { PropRow } from "#example/catalog/types";

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
  category?: "content" | "ai" | "widgets";
  packageName: string;
  description: string;
  imports: Array<{ name: string; from: string }>;
  css: string;
  demo: DemoElement;
  code?: string;
  props: Array<PropRow>;
  sections?: Array<{
    title: string;
    content: ReactNode;
  }>;
};

export function defineDoc(input: ComponentDocInput) {
  return {
    id: input.id,
    name: input.name,
    category: input.category ?? "content",
    packageName: input.packageName,
    description: input.description,
    preview: renderDemoElement(input.demo),
    code: input.code ? unindent(input.code) : createDemoCode(input),
    props: input.props,
    sections: input.sections,
  };
}

const renderDemoElement = (element: DemoElement) => {
  const children = Array.isArray(element.children)
    ? element.children.map((child, index) => (
        <DemoElementRenderer key={`${child.name}-${index}`} element={child} />
      ))
    : element.children;

  return createElement(element.component, element.props, children);
};

const DemoElementRenderer = ({ element }: { element: DemoElement }) => {
  return <>{renderDemoElement(element)}</>;
};

const createDemoCode = (input: ComponentDocInput) => {
  const imports = input.imports
    .map((item) => `import { ${item.name} } from "${item.from}";`)
    .join("\n");

  return unindent(
    [imports, `import "${input.css}";`, "", formatElement(input.demo, 0)].join(
      "\n",
    ),
  );
};

const formatElement = (element: DemoElement, depth: number): string => {
  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);
  const propLines = Object.entries(element.props ?? {}).map(([key, value]) =>
    formatProp(key, value, depth + 1),
  );
  const children = element.children;

  if (!children || (Array.isArray(children) && children.length === 0)) {
    if (propLines.length === 0) return `${indent}<${element.name} />`;

    return [`${indent}<${element.name}`, ...propLines, `${indent}/>`].join(
      "\n",
    );
  }

  const opening =
    propLines.length === 0
      ? `${indent}<${element.name}>`
      : [`${indent}<${element.name}`, ...propLines, `${indent}>`].join("\n");
  const formattedChildren = Array.isArray(children)
    ? children.map((child) => formatElement(child, depth + 1)).join("\n")
    : `${childIndent}${String(children)}`;

  return [opening, formattedChildren, `${indent}</${element.name}>`].join("\n");
};

const formatProp = (key: string, value: unknown, depth: number): string => {
  const indent = "  ".repeat(depth);

  if (typeof value === "string") {
    return `${indent}${key}="${escapeAttribute(value)}"`;
  }

  if (typeof value === "boolean") {
    return value ? `${indent}${key}` : `${indent}${key}={false}`;
  }

  if (typeof value === "number") {
    return `${indent}${key}={${value}}`;
  }

  const expression = formatExpression(value, depth);

  return `${indent}${key}={${expression}}`;
};

const formatExpression = (value: unknown, depth: number) => {
  return formatValue(value, depth);
};

const formatValue = (value: unknown, depth: number): string => {
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";

    const indent = "  ".repeat(depth);
    const childIndent = "  ".repeat(depth + 1);
    const lines = value.map((item) => {
      const formatted = formatValue(item, depth + 1);
      return indentFirstLine(formatted, childIndent, true);
    });

    return ["[", ...lines, `${indent}]`].join("\n");
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value);
    if (entries.length === 0) return "{}";

    const indent = "  ".repeat(depth);
    const childIndent = "  ".repeat(depth + 1);
    const lines = entries.map(([key, item]) => {
      const formatted = formatValue(item, depth + 1);
      const [firstLine, ...restLines] = formatted.split("\n");
      const propLines = [`${childIndent}${key}: ${firstLine}`, ...restLines];
      propLines[propLines.length - 1] += ",";

      return propLines.join("\n");
    });

    return ["{", ...lines, `${indent}}`].join("\n");
  }

  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value == null) return String(value);

  const json = JSON.stringify(value);
  if (json) return json;

  return String(value);
};

const indentFirstLine = (
  value: string,
  indent: string,
  trailingComma: boolean,
) => {
  const lines = value.split("\n");
  lines[0] = `${indent}${lines[0]}`;
  if (trailingComma) {
    lines[lines.length - 1] += ",";
  }

  return lines.join("\n");
};

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.getPrototypeOf(value) === Object.prototype
  );
};

const escapeAttribute = (value: string) => {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
};
