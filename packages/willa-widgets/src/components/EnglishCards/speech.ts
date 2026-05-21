import type { EnglishCardItem } from "#widgets/components/EnglishCards/types";

export function speakEnglishCardWord(item: EnglishCardItem) {
  if (item.audioUrl) {
    void new Audio(item.audioUrl).play();
    return;
  }
  speakText(item.word);
}

export function speakText(text: string | undefined) {
  const speakableText = normalizeSpeakText(text);
  if (!speakableText) return;

  const audio = new Audio(createGoogleTtsUrl(speakableText));
  audio.addEventListener("error", () => speakWithBrowser(speakableText), {
    once: true,
  });
  void audio.play().catch(() => speakWithBrowser(speakableText));
}

export function normalizeSpeakText(text: string | undefined) {
  const value = text?.replace(/\s+/g, " ").trim();
  if (!value || !/[a-z]/i.test(value)) return undefined;
  return value;
}

const speakWithBrowser = (text: string) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

const createGoogleTtsUrl = (text: string) => {
  const url = new URL("https://translate.google.com/translate_tts");
  url.searchParams.set("ie", "UTF-8");
  url.searchParams.set("client", "tw-ob");
  url.searchParams.set("tl", "en");
  url.searchParams.set("q", text);
  return url.toString();
};
