import { createElement, Fragment } from "react";

export function normalizeSearchQuery(value: string) {
  return value.trim().toLowerCase();
}

export function escapeSearchRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function matchesSearchQuery(text: string, query: string) {
  const normalizedQuery = normalizeSearchQuery(query);
  if (!normalizedQuery) {
    return true;
  }
  return normalizeSearchQuery(text).includes(normalizedQuery);
}

export function renderHighlightedText(options: {
  text: string;
  query: string;
  markClassName: string;
}) {
  const { text, query, markClassName } = options;
  const normalizedQuery = query.trim();
  if (!normalizedQuery) {
    return text;
  }

  const pattern = new RegExp(`(${escapeSearchRegExp(normalizedQuery)})`, "i");
  const parts = text.split(pattern);

  if (parts.length <= 1) {
    return text;
  }

  return createElement(
    Fragment,
    null,
    parts.map((part, index) =>
      pattern.test(part)
        ? createElement(
            "mark",
            { className: markClassName, key: `${part}-${index}` },
            part,
          )
        : createElement("span", { key: `${part}-${index}` }, part),
    ),
  );
}
