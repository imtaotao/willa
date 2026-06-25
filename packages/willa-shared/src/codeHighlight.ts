import hljs from "highlight.js";

export type CodeHighlightMeta = {
  rawLanguage: string;
  highlightLines: Set<number>;
  showLineNumbers: boolean;
};

export type HighlightedCode = {
  html: string;
  display: string;
};

export const parseCodeMeta = (className?: string): CodeHighlightMeta => {
  const languageMatch = /language-([^\s]+)/.exec(className ?? "");
  const languageValue = languageMatch?.[1] ?? "text";
  const [rawLanguage = "text", rawMeta = ""] = languageValue.split("--meta-");
  const highlightLines = new Set<number>();
  const normalizedMeta = rawMeta.replace(/_/g, " ");
  const showLineNumbers = /(?:^|[^A-Za-z0-9-])ln(?:$|[^A-Za-z0-9-])/.test(
    normalizedMeta,
  );

  for (const match of rawMeta.matchAll(/\{([^}]+)\}/g)) {
    addCodeHighlightRange(highlightLines, match[1]);
  }

  return { rawLanguage, highlightLines, showLineNumbers };
};

export const normalizeHljsLanguage = (language: string) => {
  const key = language.toLowerCase();
  const aliasMap: Record<string, string> = {
    c: "c",
    cc: "cpp",
    "c++": "cpp",
    cpp: "cpp",
    cxx: "cpp",
    css: "css",
    go: "go",
    golang: "go",
    html: "xml",
    js: "javascript",
    jsx: "javascript",
    rs: "rust",
    rust: "rust",
    ts: "typescript",
    tsx: "typescript",
    sh: "bash",
    bash: "bash",
    shell: "bash",
    yml: "yaml",
    md: "markdown",
  };

  return aliasMap[key] ?? key;
};

export const highlightCodeToHtml = (
  code: string,
  rawLanguage: string,
): HighlightedCode => {
  const language = normalizeHljsLanguage(rawLanguage);

  if (hljs.getLanguage(language)) {
    return {
      html: hljs.highlight(code, { language }).value,
      display: rawLanguage,
    };
  }

  const result = hljs.highlightAuto(code);
  return {
    html: result.value,
    display: result.language ?? rawLanguage,
  };
};

export const createCodeHighlightLines = (
  ranges?: Array<number | readonly [start: number, end: number]>,
) => {
  const highlightLines = new Set<number>();

  for (const range of ranges ?? []) {
    if (typeof range === "number") {
      if (!Number.isInteger(range) || range <= 0) continue;
      highlightLines.add(range);
    } else {
      addCodeHighlightRange(highlightLines, range.join("-"));
    }
  }

  return highlightLines;
};

const addCodeHighlightRange = (highlightLines: Set<number>, value: string) => {
  for (const part of value.split(",")) {
    const rangeMatch = /^\s*(\d+)(?:-(\d+))?\s*$/.exec(part);
    if (!rangeMatch) continue;

    const start = Number(rangeMatch[1]);
    const end = Number(rangeMatch[2] ?? rangeMatch[1]);
    if (!Number.isInteger(start) || !Number.isInteger(end)) continue;

    for (let line = start; line <= end; line += 1) {
      if (line > 0) highlightLines.add(line);
    }
  }
};
