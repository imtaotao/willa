import { useState } from "react";
import { Pencil2Icon, ReaderIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { EnglishCard } from "#widgets/components/EnglishCards/Card";
import { isPracticeAnswerCorrect } from "#widgets/components/EnglishCards/Practice";
import type {
  EnglishCardItem,
  EnglishCardsProps,
  PracticeAnswerState,
} from "#widgets/components/EnglishCards/types";

export type {
  EnglishCardDetail,
  EnglishCardExample,
  EnglishCardItem,
  EnglishCardResource,
  EnglishCardsProps,
} from "#widgets/components/EnglishCards/types";

export function EnglishCards(props: EnglishCardsProps) {
  const { title, items = [], defaultMode = "study", className } = props;
  const [mode, setMode] = useState(defaultMode);
  const [revealedWords, setRevealedWords] = useState<Set<string>>(new Set());
  const [practiceAnswers, setPracticeAnswers] = useState<
    Record<string, string>
  >({});
  const [practiceResults, setPracticeResults] = useState<
    Record<string, PracticeAnswerState>
  >({});
  const [expandedWords, setExpandedWords] = useState<Set<string>>(new Set());
  const isPracticeMode = mode === "practice";

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === "study" ? "practice" : "study"));
    setRevealedWords(new Set());
    setPracticeResults({});
  };

  const toggleReveal = (wordKey: string) => {
    setRevealedWords((currentWords) => {
      const nextWords = new Set(currentWords);

      if (nextWords.has(wordKey)) {
        nextWords.delete(wordKey);
      } else {
        nextWords.add(wordKey);
      }

      return nextWords;
    });
  };

  const toggleExpanded = (wordKey: string) => {
    setExpandedWords((currentWords) => {
      const nextWords = new Set(currentWords);

      if (nextWords.has(wordKey)) {
        nextWords.delete(wordKey);
      } else {
        nextWords.add(wordKey);
      }

      return nextWords;
    });
  };

  const updatePracticeAnswer = (wordKey: string, value: string) => {
    setPracticeAnswers((currentAnswers) => ({
      ...currentAnswers,
      [wordKey]: value,
    }));
    setPracticeResults((currentResults) => ({
      ...currentResults,
      [wordKey]: "idle",
    }));
  };

  const checkPracticeAnswer = (wordKey: string, item: EnglishCardItem) => {
    const result = isPracticeAnswerCorrect(practiceAnswers[wordKey] ?? "", item)
      ? "correct"
      : "incorrect";

    setPracticeResults((currentResults) => ({
      ...currentResults,
      [wordKey]: result,
    }));
  };

  return (
    <section
      className={classNames(
        "willa-english-cards",
        `willa-english-cards--${mode}`,
        className,
      )}
    >
      <div className="willa-english-cards-header">
        <div>
          {title ? (
            <h3 className="willa-english-cards-title">{title}</h3>
          ) : null}
          <p className="willa-english-cards-summary">{items.length} 个词条</p>
        </div>
        <button
          type="button"
          className="willa-english-cards-mode"
          onClick={toggleMode}
        >
          {isPracticeMode ? <ReaderIcon /> : <Pencil2Icon />}
          {isPracticeMode ? "学习模式" : "练习模式"}
        </button>
      </div>

      <div className="willa-english-cards-list">
        {items.map((item, index) => {
          const wordKey = `${item.word}-${index}`;
          const isRevealed = !isPracticeMode || revealedWords.has(wordKey);

          return (
            <EnglishCard
              key={wordKey}
              item={item}
              isExpanded={expandedWords.has(wordKey)}
              isPracticeMode={isPracticeMode}
              isRevealed={isRevealed}
              practiceAnswer={practiceAnswers[wordKey] ?? ""}
              practiceResult={practiceResults[wordKey] ?? "idle"}
              wordKey={wordKey}
              onCheckPracticeAnswer={checkPracticeAnswer}
              onPracticeAnswerChange={updatePracticeAnswer}
              onToggleExpanded={toggleExpanded}
              onToggleReveal={toggleReveal}
            />
          );
        })}
      </div>
    </section>
  );
}

EnglishCards.displayName = "EnglishCards";
