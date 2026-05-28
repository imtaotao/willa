import { useEffect, useMemo, useState } from "react";
import { Pencil2Icon, ReaderIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { EnglishCard } from "#widgets/components/EnglishCards/Card";
import {
  fetchDictionaryWord,
  normalizeOpenApiConfig,
  normalizeWordKey,
} from "#widgets/components/EnglishCards/data";
import { isPracticeAnswerCorrect } from "#widgets/components/EnglishCards/Practice";
import type {
  EnglishCardItem,
  EnglishCardsProps,
  OpenApiWordState,
  PracticeAnswerState,
} from "#widgets/components/EnglishCards/types";

export type {
  EnglishCardDetail,
  EnglishCardExample,
  EnglishCardItem,
  EnglishCardResource,
  EnglishCardsOpenApiConfig,
  EnglishCardsProps,
} from "#widgets/components/EnglishCards/types";

const createEnglishCardItems = (
  props: EnglishCardsProps,
): Array<EnglishCardItem> => {
  const itemMap = new Map(
    props.items?.map((item) => [normalizeWordKey(item.word), item]) ?? [],
  );

  if (!props.words?.length) return props.items ?? [];

  return props.words.map((word) => {
    const normalizedWord = normalizeWordKey(word);
    return itemMap.get(normalizedWord) ?? { word };
  });
};

const mergeEnglishCardItem = (
  apiItem: Partial<EnglishCardItem> | undefined,
  item: EnglishCardItem,
): EnglishCardItem => {
  return {
    ...apiItem,
    ...item,
    word: item.word || apiItem?.word || "",
    phonetic: item.phonetic ?? apiItem?.phonetic,
    audioUrl: item.audioUrl ?? apiItem?.audioUrl,
    partOfSpeech: item.partOfSpeech ?? apiItem?.partOfSpeech,
    translation: item.translation ?? apiItem?.translation,
    explanation: item.explanation ?? apiItem?.explanation,
    example: item.example ?? apiItem?.example,
    details: item.details ?? apiItem?.details,
    resources: item.resources ?? apiItem?.resources,
    note: item.note ?? apiItem?.note,
    tags: item.tags ?? apiItem?.tags,
  };
};

const getErrorMessage = (error: unknown) => {
  if (isAbortError(error)) return "Dictionary request was cancelled.";

  return error instanceof Error ? error.message : "Dictionary request failed.";
};

const isAbortError = (error: unknown) => {
  return error instanceof DOMException && error.name === "AbortError";
};

export function EnglishCards(props: EnglishCardsProps) {
  const { title, defaultMode = "study", className } = props;
  const items = useMemo(
    () => createEnglishCardItems(props),
    [props.items, props.words],
  );
  const openApiConfig = useMemo(
    () => normalizeOpenApiConfig(props.openApi),
    [props.openApi],
  );
  const [openApiWords, setOpenApiWords] = useState<
    Record<string, OpenApiWordState>
  >({});
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

  useEffect(() => {
    if (!openApiConfig.enabled) {
      setOpenApiWords({});
      return;
    }

    const uniqueWords = Array.from(
      new Set(items.map((item) => normalizeWordKey(item.word)).filter(Boolean)),
    );

    if (!uniqueWords.length) {
      setOpenApiWords({});
      return;
    }

    const abortController = new AbortController();

    setOpenApiWords(
      Object.fromEntries(
        uniqueWords.map((word) => [
          word,
          { status: "loading" } satisfies OpenApiWordState,
        ]),
      ),
    );

    void Promise.all(
      uniqueWords.map(async (word) => {
        try {
          const apiItem = await fetchDictionaryWord(word, openApiConfig, {
            signal: abortController.signal,
          });

          return [
            word,
            { status: "success", item: apiItem } satisfies OpenApiWordState,
          ] as const;
        } catch (error) {
          if (abortController.signal.aborted) {
            return [
              word,
              { status: "loading" } satisfies OpenApiWordState,
            ] as const;
          }

          return [
            word,
            {
              status: "error",
              message: getErrorMessage(error),
            } satisfies OpenApiWordState,
          ] as const;
        }
      }),
    ).then((entries) => {
      if (abortController.signal.aborted) return;
      setOpenApiWords(Object.fromEntries(entries));
    });

    return () => abortController.abort();
  }, [items, openApiConfig]);

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
          const apiState = openApiWords[normalizeWordKey(item.word)];
          const cardItem = mergeEnglishCardItem(apiState?.item, item);

          return (
            <EnglishCard
              key={wordKey}
              apiState={apiState}
              item={cardItem}
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
