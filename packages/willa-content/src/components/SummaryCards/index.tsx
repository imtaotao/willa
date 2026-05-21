import classNames from "classnames";

type SummaryCardItem = {
  title: string;
  content: string | Array<string>;
};

export type SummaryCardsProps = {
  items: Array<SummaryCardItem>;
  className?: string;
};

export function SummaryCards(props: SummaryCardsProps) {
  const { items, className } = props;

  return (
    <section className={classNames("willa-summary-cards", className)}>
      {items.map((item, index) => {
        const lines = Array.isArray(item.content)
          ? item.content
          : [item.content];

        return (
          <article
            key={`${item.title}-${index}`}
            className="willa-summary-card"
          >
            <h3 className="willa-summary-card-title">{item.title}</h3>
            <div className="willa-summary-card-body">
              {lines.map((line, lineIndex) => (
                <p
                  key={`${item.title}-${index}-${lineIndex}`}
                  className="willa-summary-card-line"
                >
                  {line}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}
