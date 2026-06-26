import classNames from "classnames";
import { Fragment, useMemo, useState, type ReactNode } from "react";
import { Badge } from "willa/Badge";
import { CodeBlock } from "willa/CodeBlock";
import { Separator } from "willa/Separator";
import { Segmented } from "willa/Segmented";
import { Table, type TableItem } from "willa/Table";
import { Tooltip } from "willa/Tooltip";
import { Typography } from "willa/Typography";
import "willa/Badge.css";
import "willa/CodeBlock.css";
import "willa/Separator.css";
import "willa/Segmented.css";
import "willa/Table.css";
import "willa/Tooltip.css";

import type { ComponentDoc, PropRow } from "#example/catalog/types";

type DocViewProps = {
  doc: ComponentDoc;
};

type DemoBlockProps = {
  title: string;
  children: ReactNode;
  code?: string;
  primary?: boolean;
};

type FormattedPropValue = {
  value: string;
  multiline: boolean;
};

const demoViewOptions = [
  { value: "preview", label: "效果" },
  { value: "source", label: "源码" },
];

const PropTooltipContent = (props: { value: string }) => {
  const formattedValue = formatPropTooltipValue(props.value);

  return (
    <div className="docs-prop-tooltip-value">
      {formattedValue.multiline ? (
        <pre className="docs-prop-tooltip-code">
          <code>{formattedValue.value}</code>
        </pre>
      ) : (
        <code className="docs-prop-tooltip-inline">{formattedValue.value}</code>
      )}
    </div>
  );
};

const PropToken = (props: { value: string; kind: "名称" | "类型" }) => (
  <Tooltip
    content={<PropTooltipContent value={props.value} />}
    contentClassName={classNames(
      "docs-prop-tooltip-content",
      shouldUseMultilineTooltip(props.value) &&
        "docs-prop-tooltip-content--code",
    )}
    side="bottom"
    align="start"
  >
    <span
      className={classNames(
        "docs-prop-token",
        `docs-prop-token--${props.kind === "名称" ? "name" : "type"}`,
      )}
      tabIndex={0}
    >
      <code>{props.value}</code>
    </span>
  </Tooltip>
);

const PropDefaultValue = (props: { value?: string }) => {
  if (!props.value) return <span className="docs-prop-empty">-</span>;

  return (
    <Tooltip
      content={<PropTooltipContent value={props.value} />}
      side="bottom"
      align="start"
      contentClassName={classNames(
        "docs-prop-tooltip-content",
        shouldUseMultilineTooltip(props.value) &&
          "docs-prop-tooltip-content--code",
      )}
    >
      <code className="docs-prop-default" tabIndex={0}>
        {props.value}
      </code>
    </Tooltip>
  );
};

const PropDescription = (props: { value: string }) => (
  <Tooltip
    className="docs-prop-description-tooltip"
    content={props.value}
    side="bottom"
    align="start"
    contentClassName="docs-prop-tooltip-content"
  >
    <div className="docs-prop-description-trigger" tabIndex={0}>
      <Typography.Paragraph className="docs-prop-description">
        {props.value}
      </Typography.Paragraph>
    </div>
  </Tooltip>
);

const formatPropTooltipValue = (value: string): FormattedPropValue => {
  const normalizedValue = value.trim();

  if (!shouldUseMultilineTooltip(normalizedValue)) {
    return { value: normalizedValue, multiline: false };
  }

  return {
    value: formatStructuredPropValue(normalizedValue),
    multiline: true,
  };
};

const shouldUseMultilineTooltip = (value: string) => {
  const normalizedValue = value.trim();

  return (
    normalizedValue.length > 44 ||
    normalizedValue.startsWith("{") ||
    normalizedValue.startsWith("[") ||
    normalizedValue.includes(";") ||
    normalizedValue.includes("=>") ||
    normalizedValue.includes(" | ")
  );
};

const formatStructuredPropValue = (value: string) => {
  const normalizedValue = value.trim();

  if (normalizedValue.startsWith("{") && normalizedValue.endsWith("}")) {
    return formatBraceBlock(normalizedValue);
  }

  if (normalizedValue.startsWith("[") && normalizedValue.endsWith("]")) {
    return formatBracketBlock(normalizedValue);
  }

  if (normalizedValue.includes(" | ")) {
    return splitTopLevel(normalizedValue, "|")
      .map((item, index) => `${index === 0 ? "" : "| "}${item}`)
      .join("\n");
  }

  if (normalizedValue.includes("=>")) {
    return normalizedValue.replace(/\s*=>\s*/g, "\n  => ");
  }

  return normalizedValue;
};

const formatBraceBlock = (value: string) => {
  const body = value.slice(1, -1).trim();
  const separator = body.includes(";") ? ";" : ",";
  const members = splitTopLevel(body, separator);

  if (members.length === 0) return "{}";

  return ["{", ...members.map((member) => `  ${member}${separator}`), "}"].join(
    "\n",
  );
};

const formatBracketBlock = (value: string) => {
  const body = value.slice(1, -1).trim();
  const items = splitTopLevel(body, ",");

  if (items.length === 0) return "[]";

  return ["[", ...items.map((item) => `  ${item},`), "]"].join("\n");
};

const splitTopLevel = (value: string, separator: string) => {
  const parts: Array<string> = [];
  let currentPart = "";
  let braceDepth = 0;
  let bracketDepth = 0;
  let parenDepth = 0;
  let quote: string | null = null;

  for (const character of value) {
    if (quote) {
      currentPart += character;
      if (character === quote) {
        quote = null;
      }
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      currentPart += character;
      continue;
    }

    if (character === "{") braceDepth += 1;
    if (character === "}") braceDepth -= 1;
    if (character === "[") bracketDepth += 1;
    if (character === "]") bracketDepth -= 1;
    if (character === "(") parenDepth += 1;
    if (character === ")") parenDepth -= 1;

    if (
      character === separator &&
      braceDepth === 0 &&
      bracketDepth === 0 &&
      parenDepth === 0
    ) {
      const trimmedPart = currentPart.trim();
      if (trimmedPart) parts.push(trimmedPart);
      currentPart = "";
      continue;
    }
    currentPart += character;
  }

  const trimmedPart = currentPart.trim();
  if (trimmedPart) parts.push(trimmedPart);
  return parts;
};

const createPropTableItems = (props: Array<PropRow>) => {
  return props.map((prop) => ({
    key: prop.name,
    cells: [
      {
        key: "name",
        label: "名称",
        width: "24%",
        ellipsis: false,
        render: (
          <div className="docs-prop-name-cell">
            <PropToken value={prop.name} kind="名称" />
            {prop.required ? (
              <Badge size="sm" tone="danger" variant="soft">
                必填
              </Badge>
            ) : null}
          </div>
        ),
      },
      {
        key: "type",
        label: "类型",
        width: "30%",
        ellipsis: false,
        value: prop.type,
        render: <PropToken value={prop.type} kind="类型" />,
      },
      {
        key: "defaultValue",
        label: "默认值",
        width: "16%",
        ellipsis: false,
        value: prop.defaultValue ?? "-",
        render: <PropDefaultValue value={prop.defaultValue} />,
      },
      {
        key: "description",
        label: "说明",
        width: "30%",
        ellipsis: false,
        value: prop.description,
        render: <PropDescription value={prop.description} />,
      },
    ],
  })) satisfies Array<TableItem>;
};

const DemoBlock = (props: DemoBlockProps) => {
  const [view, setView] = useState<"preview" | "source">("preview");
  const canShowSource = Boolean(props.code);

  return (
    <section
      className={classNames(
        "docs-demo-block",
        props.primary && "docs-demo-block--primary",
      )}
    >
      <div className="docs-demo-block-header">
        <Typography.Title level={4} className="docs-demo-title">
          {props.title}
        </Typography.Title>
        {canShowSource ? (
          <Segmented
            size="sm"
            value={view}
            options={demoViewOptions}
            ariaLabel={`${props.title} 展示方式`}
            className="docs-demo-view-switch"
            onValueChange={(nextView) =>
              setView(nextView as "preview" | "source")
            }
          />
        ) : null}
      </div>

      {view === "source" && props.code ? (
        <CodeBlock>
          <code className="language-tsx--meta-ln">{props.code}</code>
        </CodeBlock>
      ) : (
        <div className="docs-demo-block-preview">{props.children}</div>
      )}
    </section>
  );
};

export function DocView({ doc }: DocViewProps) {
  const propGroups = useMemo(() => {
    const groups: Array<{ title: string; props: typeof doc.props }> = [];

    for (const prop of doc.props) {
      const title = prop.group ?? "属性";
      let group = groups.find((item) => item.title === title);

      if (!group) {
        group = { title, props: [] };
        groups.push(group);
      }

      group.props.push(prop);
    }

    return groups.map((group) => ({
      ...group,
      props: group.props
        .map((prop, index) => ({ prop, index }))
        .sort((a, b) => {
          if (a.prop.required !== b.prop.required) {
            return a.prop.required ? -1 : 1;
          }

          return a.index - b.index;
        })
        .map((item) => item.prop),
      description: doc.propGroups?.find((item) => item.title === group.title)
        ?.description,
    }));
  }, [doc.propGroups, doc.props]);

  return (
    <section
      className={classNames("docs-section", `docs-section--${doc.id}`)}
      id={doc.id}
    >
      <div className="docs-intro">
        <Typography.Title level={2}>{doc.name}</Typography.Title>
        <Typography.Paragraph className="docs-description">
          {doc.description}
        </Typography.Paragraph>
      </div>

      <div className="docs-demos">
        <DemoBlock title="基础示例" code={doc.code} primary>
          {doc.preview}
        </DemoBlock>

        {doc.sections?.map((section) => (
          <DemoBlock
            key={section.title}
            title={section.title}
            code={section.code}
          >
            {section.content}
          </DemoBlock>
        ))}
      </div>

      <div className="docs-props">
        {propGroups.map((group, index) => (
          <Fragment key={group.title}>
            {index > 0 ? (
              <Separator className="docs-props-separator" size="sm" />
            ) : null}
            <div className="docs-props-group">
              <div className="docs-props-group-heading">
                <Typography.Title level={4} className="docs-panel-title">
                  {group.title}
                </Typography.Title>
                {group.description ? (
                  <Typography.Paragraph className="docs-props-group-description">
                    {group.description}
                  </Typography.Paragraph>
                ) : null}
              </div>
              <Table
                className="docs-props-table"
                items={createPropTableItems(group.props)}
                size="sm"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
