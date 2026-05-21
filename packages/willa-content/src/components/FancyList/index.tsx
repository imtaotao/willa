import { isValidElement, type ReactNode } from "react";
import classNames from "classnames";

export type FancyListItem =
  | ReactNode
  | {
      title?: ReactNode;
      content: ReactNode | Array<ReactNode>;
    };

export type FancyListProps = {
  title?: ReactNode;
  items: Array<FancyListItem>;
  className?: string;
};

export function FancyList(props: FancyListProps) {
  const { title, items, className } = props;

  return (
    <section className={classNames("willa-fancy-list-block", className)}>
      {title ? (
        <div className="willa-fancy-list-block-title">{title}</div>
      ) : null}
      <div className="willa-fancy-list">
        {items.map((item, index) => {
          const normalizedItem: {
            title?: ReactNode;
            content: ReactNode | Array<ReactNode>;
          } =
            typeof item === "string" ||
            typeof item === "number" ||
            isValidElement(item) ||
            !item ||
            typeof item !== "object" ||
            !("content" in item)
              ? { content: item }
              : item;
          const lines: Array<ReactNode> = Array.isArray(normalizedItem.content)
            ? normalizedItem.content
            : [normalizedItem.content];

          return (
            <article
              key={`${normalizedItem.title ?? "item"}-${index}`}
              className="willa-fancy-list-item"
            >
              <div className="willa-fancy-list-item-body">
                {normalizedItem.title ? (
                  <div className="willa-fancy-list-item-title">
                    {normalizedItem.title}
                  </div>
                ) : null}
                <div className="willa-fancy-list-item-copy">
                  {lines.map((line, lineIndex) => (
                    <div
                      key={`${
                        normalizedItem.title ?? "item"
                      }-${index}-${lineIndex}`}
                      className="willa-fancy-list-item-line"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
