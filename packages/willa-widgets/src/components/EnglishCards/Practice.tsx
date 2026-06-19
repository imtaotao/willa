import classNames from "classnames";
import type {
  EnglishCardItem,
  PracticeAnswerState,
} from "#widgets/components/EnglishCards/types";

export function EnglishCardPractice(props: {
  answer: string;
  item: EnglishCardItem;
  result: PracticeAnswerState;
  onAnswerChange: (value: string) => void;
  onCheck: () => void;
}) {
  const { answer, item, result, onAnswerChange, onCheck } = props;

  return (
    <div className="willa-english-card-practice">
      <label className="willa-english-card-practice-label" htmlFor={item.word}>
        默写中文翻译
      </label>
      <div className="willa-english-card-practice-row">
        <input
          id={item.word}
          className="willa-english-card-practice-input"
          type="text"
          value={answer}
          placeholder="输入一个或多个中文释义"
          onChange={(event) => onAnswerChange(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onCheck();
            }
          }}
        />
        <button
          type="button"
          className="willa-english-card-practice-check"
          onClick={onCheck}
        >
          校验
        </button>
      </div>
      <div
        className={classNames(
          "willa-english-card-practice-result",
          `willa-english-card-practice-result--${result}`,
        )}
      >
        {result === "correct"
          ? "正确"
          : result === "incorrect"
            ? "不完全匹配，可以显示答案对照。"
            : "先输入中文翻译，再校验。"}
      </div>
    </div>
  );
}

export function isPracticeAnswerCorrect(answer: string, item: EnglishCardItem) {
  const answerText = normalizePracticeText(answer);
  if (!answerText) return false;

  return getPracticeTranslationTexts(item).some((translation) => {
    const translationText = normalizePracticeText(translation);

    return (
      Boolean(translationText) &&
      (answerText.includes(translationText) ||
        translationText.includes(answerText))
    );
  });
}

const getPracticeTranslationTexts = (item: EnglishCardItem) => {
  const translations = Array.isArray(item.translation)
    ? item.translation
    : [item.translation];

  return translations.filter(
    (translation): translation is string => typeof translation === "string",
  );
};

const normalizePracticeText = (value: string) => {
  return value
    .toLowerCase()
    .replace(/[，,、；;。.\s]/g, "")
    .trim();
};

EnglishCardPractice.displayName = "EnglishCardPractice";
