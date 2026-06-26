import type { EnglishCardItem } from "#widgets/components/EnglishCards/types";

export function speakEnglishCardWord(item: EnglishCardItem) {
  if (item.audioUrl) {
    new Audio(item.audioUrl).play();
    return;
  }
  speakText(item.word);
}

export function speakText(text?: string) {
  const speakableText = normalizeSpeakText(text);
  if (!speakableText) return;
  speakWithBrowser(speakableText);
}

export function normalizeSpeakText(text?: string) {
  const value = text?.replace(/\s+/g, " ").trim();
  if (!value || !/[a-z]/i.test(value)) return undefined;
  return value;
}

const speakWithBrowser = (text: string) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
