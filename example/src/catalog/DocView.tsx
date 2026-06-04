import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { CodeBlock } from "willa/CodeBlock";
import { IconButton } from "willa/IconButton";
import "willa/Badge.css";
import "willa/CodeBlock.css";
import "willa/IconButton.css";

import type { ComponentDoc } from "#example/catalog/types";

type DocViewProps = {
  doc: ComponentDoc;
};

type ExpandedPanel = "reference" | "preview" | null;

const PropToken = (props: { value: string; kind: "名称" | "类型" }) => (
  <span className="docs-prop-token" tabIndex={0}>
    <code>{props.value}</code>
    <span className="docs-prop-popover" role="tooltip">
      <span className="docs-prop-popover-label">{props.kind}</span>
      <code>{props.value}</code>
    </span>
  </span>
);

export function DocView({ doc }: DocViewProps) {
  const [expandedPanel, setExpandedPanel] = useState<ExpandedPanel>(null);
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

  useEffect(() => {
    setExpandedPanel(null);
  }, [doc.id]);

  const toggleExpandedPanel = (panel: Exclude<ExpandedPanel, null>) => {
    setExpandedPanel((current) => (current === panel ? null : panel));
  };

  return (
    <section
      className={classNames(
        "docs-section",
        expandedPanel === "reference" && "is-reference-expanded",
        expandedPanel === "preview" && "is-preview-expanded",
      )}
      id={doc.id}
    >
      <div className="docs-reference">
        <div className="docs-panel-toolbar">
          <IconButton
            className="docs-panel-action"
            variant="ghost"
            size="sm"
            ariaLabel={
              expandedPanel === "reference" ? "还原介绍卡片" : "展开介绍卡片"
            }
            aria-pressed={expandedPanel === "reference"}
            icon={
              expandedPanel === "reference" ? (
                <ExitFullScreenIcon />
              ) : (
                <EnterFullScreenIcon />
              )
            }
            onClick={() => toggleExpandedPanel("reference")}
          />
        </div>

        <h2>{doc.name}</h2>
        <p className="docs-description">{doc.description}</p>

        <div className="docs-code-block">
          <div className="docs-panel-title">React 示例</div>
          <CodeBlock>
            <code className="language-tsx--meta-ln">{doc.code}</code>
          </CodeBlock>
        </div>

        <div className="docs-props">
          {propGroups.map((group) => (
            <div className="docs-props-group" key={group.title}>
              <div className="docs-panel-title">{group.title}</div>
              <table>
                <thead>
                  <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>说明</th>
                  </tr>
                </thead>
                <tbody>
                  {group.props.map((prop) => (
                    <tr key={prop.name}>
                      <td>
                        <div className="docs-prop-name-cell">
                          <PropToken value={prop.name} kind="名称" />
                          {prop.required ? (
                            <Badge size="sm" tone="danger" variant="soft">
                              必填
                            </Badge>
                          ) : null}
                        </div>
                      </td>
                      <td>
                        <PropToken value={prop.type} kind="类型" />
                      </td>
                      <td>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div className="docs-preview">
        <div className="docs-panel-toolbar">
          <IconButton
            className="docs-panel-action"
            variant="ghost"
            size="sm"
            ariaLabel={
              expandedPanel === "preview" ? "还原效果卡片" : "展开效果卡片"
            }
            aria-pressed={expandedPanel === "preview"}
            icon={
              expandedPanel === "preview" ? (
                <ExitFullScreenIcon />
              ) : (
                <EnterFullScreenIcon />
              )
            }
            onClick={() => toggleExpandedPanel("preview")}
          />
        </div>

        <div className="docs-preview-inner">
          <div className="docs-preview-primary">{doc.preview}</div>

          {doc.sections?.length ? (
            <div className="docs-preview-sections">
              {doc.sections.map((section) => (
                <section className="docs-preview-section" key={section.title}>
                  <div className="docs-panel-title">{section.title}</div>
                  <div className="docs-preview-section-content">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
