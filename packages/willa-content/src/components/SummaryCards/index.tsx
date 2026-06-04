import classNames from "classnames";

import { Card } from "#content/components/Card";

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
          <Card
            key={`${item.title}-${index}`}
            variant="soft"
            padding="md"
            title={item.title}
            className="willa-summary-card"
          >
            {lines.map((line, lineIndex) => (
              <p
                key={`${item.title}-${index}-${lineIndex}`}
                className="willa-summary-card-line"
              >
                {line}
              </p>
            ))}
          </Card>
        );
      })}
    </section>
  );
}
