import type { ReactNode } from "react";

export type EnglishCardExample =
  | ReactNode
  | {
      text: ReactNode;
      translation?: ReactNode;
    };

export type EnglishCardDetail = {
  label: ReactNode;
  items: Array<ReactNode>;
};

export type EnglishCardItem = {
  word: string;
  phonetic?: string;
  audioUrl?: string;
  partOfSpeech?: string;
  translation?: ReactNode | Array<ReactNode>;
  explanation?: ReactNode | Array<ReactNode>;
  example?: EnglishCardExample | Array<EnglishCardExample>;
  details?: Array<EnglishCardDetail>;
  resources?: Array<EnglishCardResource>;
  note?: ReactNode;
  tags?: Array<string>;
};

export type EnglishCardResource = {
  label: ReactNode;
  href: string;
  title?: ReactNode;
  description?: ReactNode;
};

export type EnglishCardsProps = {
  title?: ReactNode;
  items?: Array<EnglishCardItem>;
  defaultMode?: "study" | "practice";
  className?: string;
};

export type PracticeAnswerState = "idle" | "correct" | "incorrect";
