import classNames from "classnames";
import { Fragment, useEffect, useMemo, useState } from "react";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { CodeBlock } from "willa/CodeBlock";
import { IconButton } from "willa/IconButton";
import { Separator } from "willa/Separator";
import { Tooltip } from "willa/Tooltip";
import "willa/Badge.css";
import "willa/CodeBlock.css";
import "willa/IconButton.css";
import "willa/Separator.css";
import "willa/Tooltip.css";

import type { ComponentDoc } from "#example/catalog/types";

type DocViewProps = {
  doc: ComponentDoc;
};

type ExpandedPanel = "reference" | "preview" | null;

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
          {propGroups.map((group, index) => (
            <Fragment key={group.title}>
              {index > 0 ? (
                <Separator className="docs-props-separator" size="sm" />
              ) : null}
              <div className="docs-props-group">
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
            </Fragment>
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
                <Fragment key={section.title}>
                  <Separator className="docs-preview-separator" size="sm" />
                  <section className="docs-preview-section">
                    <div className="docs-panel-title">{section.title}</div>
                    <div className="docs-preview-section-content">
                      {section.content}
                    </div>
                  </section>
                </Fragment>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
