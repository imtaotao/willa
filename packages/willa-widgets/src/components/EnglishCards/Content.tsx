import type { ReactNode } from "react";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";

import {
  EnglishCardResourceLink,
  createEnglishCardResources,
} from "#widgets/components/EnglishCards/Resources";
import {
  normalizeSpeakText,
  speakText,
} from "#widgets/components/EnglishCards/speech";
import type {
  EnglishCardDetail,
  EnglishCardExample,
  EnglishCardItem,
} from "#widgets/components/EnglishCards/types";

export function EnglishCardContent(props: { item: EnglishCardItem }) {
  const { item } = props;
  const resources = createEnglishCardResources(item);

  return (
    <div className="willa-english-card-content">
      <section className="willa-english-card-section willa-english-card-section--translation">
        <div className="willa-english-card-label">中文翻译</div>
        {item.translation ? (
          renderLines(item.translation, "translation")
        ) : (
          <p className="willa-english-card-line willa-english-card-line--empty">
            暂无中文翻译。
          </p>
        )}
      </section>

      {item.explanation ? (
        <section className="willa-english-card-section willa-english-card-section--definition">
          <div className="willa-english-card-label">英文释义</div>
          {renderLines(item.explanation, "explanation")}
        </section>
      ) : null}

      {item.example ? (
        <section className="willa-english-card-section willa-english-card-section--examples">
          <div className="willa-english-card-label">例句</div>
          {renderExamples(item.example, item.word)}
        </section>
      ) : null}

      {item.details?.length ? (
        <section className="willa-english-card-section willa-english-card-section--details">
          <div className="willa-english-card-label">拓展</div>
          {renderDetails(item.details)}
        </section>
      ) : null}

      {item.note || item.tags?.length ? (
        <div className="willa-english-card-meta">
          {item.note ? <span>{item.note}</span> : null}
          {item.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      <div className="willa-english-card-actions">
        {resources.map((resource) => (
          <EnglishCardResourceLink
            key={`${item.word}-${resource.href}`}
            resource={resource}
          />
        ))}
      </div>
    </div>
  );
}

const renderLines = (
  value: ReactNode | Array<ReactNode>,
  keyPrefix: string,
) => {
  const lines = Array.isArray(value) ? value : [value];

  return lines.map((line, index) => (
    <p key={`${keyPrefix}-${index}`} className="willa-english-card-line">
      {line}
    </p>
  ));
};

const renderExamples = (
  value: EnglishCardExample | Array<EnglishCardExample>,
  word: string,
) => {
  const examples = Array.isArray(value) ? value : [value];

  return examples.map((example, index) => {
    if (!isExampleObject(example)) {
      return (
        <div key={`example-${index}`} className="willa-english-card-example">
          <p className="willa-english-card-line">
            {renderExampleText(example, word)}
          </p>
        </div>
      );
    }

    return (
      <div key={`example-${index}`} className="willa-english-card-example">
        <p className="willa-english-card-line">
          {renderExampleText(example.text, word)}
        </p>
        {example.translation ? (
          <p className="willa-english-card-example-translation">
            {example.translation}
          </p>
        ) : null}
      </div>
    );
  });
};

const renderDetails = (details: Array<EnglishCardDetail>) => {
  return (
    <div className="willa-english-card-details">
      {details.map((detail, index) => (
        <div key={`detail-${index}`} className="willa-english-card-detail">
          <div className="willa-english-card-detail-label">{detail.label}</div>
          <div className="willa-english-card-detail-items">
            {detail.items.map((item, itemIndex) => {
              const speakTextValue = getDetailSpeakText(detail, item);

              return (
                <span key={`detail-item-${itemIndex}`}>
                  {item}
                  {speakTextValue ? (
                    <button
                      type="button"
                      className="willa-english-card-detail-speak"
                      aria-label={`朗读 ${speakTextValue}`}
                      onClick={() => speakText(speakTextValue)}
                    >
                      <SpeakerLoudIcon />
                    </button>
                  ) : null}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const getDetailSpeakText = (detail: EnglishCardDetail, item: ReactNode) => {
  if (typeof detail.label !== "string" || typeof item !== "string") {
    return undefined;
  }

  const separator = item.includes("：") ? "：" : ":";
  const [beforeSeparator, afterSeparator] = item.split(separator);
  const text = detail.label === "词形" ? afterSeparator : beforeSeparator;

  return normalizeSpeakText(text);
};

const isExampleObject = (
  value: EnglishCardExample,
): value is { text: ReactNode; translation?: ReactNode } => {
  return Boolean(
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    "text" in value,
  );
};

const renderExampleText = (value: ReactNode, word: string) => {
  if (typeof value !== "string") return value;

  const normalizedWord = word.trim();
  if (!normalizedWord) return value;

  const escapedWord = normalizedWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\b(${escapedWord})\\b`, "gi");
  const parts = value.split(pattern);

  if (parts.length === 1) return value;

  return parts.map((part, index) => {
    if (part.toLowerCase() !== normalizedWord.toLowerCase()) return part;

    return (
      <mark
        key={`${part}-${index}`}
        className="willa-english-card-example-word"
      >
        {part}
      </mark>
    );
  });
};

EnglishCardContent.displayName = "EnglishCardContent";
