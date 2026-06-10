import type { CSSProperties } from "react";
import classNames from "classnames";

type PoemStanza = string | Array<string>;

export type PoemProps = {
  title: string;
  author: string;
  dynasty?: string;
  preface?: string | Array<string>;
  lines: Array<PoemStanza>;
  width?: number | string;
  className?: string;
};

export function Poem(props: PoemProps) {
  const { title, author, dynasty, preface, lines, width, className } = props;
  const byline = dynasty ? `${dynasty} · ${author}` : author;
  const prefaceLines = Array.isArray(preface)
    ? preface
    : preface
      ? [preface]
      : [];
  const style =
    width === undefined
      ? undefined
      : ({
          "--willa-poem-width":
            typeof width === "number" ? `${width}px` : width,
        } as CSSProperties);

  return (
    <section className={classNames("willa-poem", className)} style={style}>
      <header className="willa-poem-header">
        <h3 className="willa-poem-title">{title}</h3>
        <p className="willa-poem-byline">{byline}</p>
      </header>

      {prefaceLines.length ? (
        <div className="willa-poem-preface">
          {prefaceLines.map((line, lineIndex) => (
            <p
              key={`${title}-preface-${lineIndex}`}
              className="willa-poem-preface-line"
            >
              {line}
            </p>
          ))}
        </div>
      ) : null}

      <div className="willa-poem-body">
        {lines.map((stanza, stanzaIndex) => {
          const stanzaLines = Array.isArray(stanza) ? stanza : [stanza];

          return (
            <div key={`${title}-${stanzaIndex}`} className="willa-poem-stanza">
              {stanzaLines.map((line, lineIndex) => (
                <p
                  key={`${title}-${stanzaIndex}-${lineIndex}`}
                  className="willa-poem-line"
                >
                  {line}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
