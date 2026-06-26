import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EyeOpenIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

import { EnglishCardContent } from "#widgets/components/EnglishCards/Content";
import { EnglishCardPractice } from "#widgets/components/EnglishCards/Practice";
import { speakEnglishCardWord } from "#widgets/components/EnglishCards/speech";
import type {
  EnglishCardItem,
  PracticeAnswerState,
} from "#widgets/components/EnglishCards/types";

export function EnglishCard(props: {
  item: EnglishCardItem;
  isExpanded: boolean;
  isPracticeMode: boolean;
  isRevealed: boolean;
  practiceAnswer: string;
  practiceResult: PracticeAnswerState;
  wordKey: string;
  onCheckPracticeAnswer: (wordKey: string, item: EnglishCardItem) => void;
  onPracticeAnswerChange: (wordKey: string, value: string) => void;
  onToggleExpanded: (wordKey: string) => void;
  onToggleReveal: (wordKey: string) => void;
}) {
  const {
    item,
    isExpanded,
    isPracticeMode,
    isRevealed,
    practiceAnswer,
    practiceResult,
    wordKey,
    onCheckPracticeAnswer,
    onPracticeAnswerChange,
    onToggleExpanded,
    onToggleReveal,
  } = props;

  return (
    <article
      className={classNames(
        "willa-english-card",
        isExpanded && "willa-english-card--expanded",
      )}
    >
      <div className="willa-english-card-head">
        <div>
          <div className="willa-english-card-word-row">
            <h4 className="willa-english-card-word">{item.word}</h4>
            {item.partOfSpeech ? (
              <span className="willa-english-card-part">
                {item.partOfSpeech}
              </span>
            ) : null}
            {item.phonetic ? (
              <span className="willa-english-card-phonetic">
                {item.phonetic}
              </span>
            ) : null}
            <button
              type="button"
              className="willa-english-card-speak"
              onClick={() => speakEnglishCardWord(item)}
            >
              <SpeakerLoudIcon />
              发音
            </button>
          </div>
        </div>
        <div className="willa-english-card-head-actions">
          {isPracticeMode ? (
            <button
              type="button"
              className="willa-english-card-reveal"
              onClick={() => onToggleReveal(wordKey)}
            >
              {isRevealed ? <CheckIcon /> : <EyeOpenIcon />}
              {isRevealed ? "已显示" : "显示答案"}
            </button>
          ) : null}
          <button
            type="button"
            className="willa-english-card-collapse"
            aria-label={isExpanded ? "收起词卡" : "展开词卡"}
            aria-expanded={isExpanded}
            onClick={() => onToggleExpanded(wordKey)}
          >
            {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </button>
        </div>
      </div>

      {isExpanded ? (
        isPracticeMode && !isRevealed ? (
          <EnglishCardPractice
            answer={practiceAnswer}
            item={item}
            result={practiceResult}
            onAnswerChange={(value) => onPracticeAnswerChange(wordKey, value)}
            onCheck={() => onCheckPracticeAnswer(wordKey, item)}
          />
        ) : (
          <EnglishCardContent item={item} />
        )
      ) : null}
    </article>
  );
}

EnglishCard.displayName = "EnglishCard";
