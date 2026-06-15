import classNames from "classnames";
import { Fragment, useMemo, useState, type ReactNode } from "react";
import { Badge } from "willa/Badge";
import { CodeBlock } from "willa/CodeBlock";
import { Separator } from "willa/Separator";
import { Table, type TableItem } from "willa/Table";
import { Tooltip } from "willa/Tooltip";
import "willa/Badge.css";
import "willa/CodeBlock.css";
import "willa/Separator.css";
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

const PropToken = (props: { value: string; kind: "名称" | "类型" }) => (
  <Tooltip
    content={`${props.kind}: ${props.value}`}
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
        value: prop.type,
        render: <PropToken value={prop.type} kind="类型" />,
      },
      {
        key: "defaultValue",
        label: "默认值",
        width: "16%",
        value: prop.defaultValue ?? "-",
        render: prop.defaultValue ? (
          <code className="docs-prop-default">{prop.defaultValue}</code>
        ) : (
          <span className="docs-prop-empty">-</span>
        ),
      },
      {
        key: "description",
        label: "说明",
        value: prop.description,
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
        <div className="docs-panel-title">{props.title}</div>
        {canShowSource ? (
          <div
            className="docs-demo-switch"
            aria-label={`${props.title} 展示方式`}
          >
            <button
              className={classNames(
                "docs-demo-switch-button",
                view === "preview" && "is-active",
              )}
              type="button"
              onClick={() => setView("preview")}
            >
              效果
            </button>
            <button
              className={classNames(
                "docs-demo-switch-button",
                view === "source" && "is-active",
              )}
              type="button"
              onClick={() => setView("source")}
            >
              源码
            </button>
          </div>
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
    }));
  }, [doc.props]);

  return (
    <section
      className={classNames("docs-section", `docs-section--${doc.id}`)}
      id={doc.id}
    >
      <div className="docs-intro">
        <h2>{doc.name}</h2>
        <p className="docs-description">{doc.description}</p>
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
              <div className="docs-panel-title">{group.title}</div>
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
