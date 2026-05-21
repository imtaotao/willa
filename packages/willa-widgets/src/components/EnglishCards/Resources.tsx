import { ExternalLinkIcon } from "@radix-ui/react-icons";

import type {
  EnglishCardItem,
  EnglishCardResource,
} from "#widgets/components/EnglishCards/types";

export function createEnglishCardResources(
  item: EnglishCardItem,
): Array<EnglishCardResource> {
  const word = item.word.trim();
  const encodedWord = encodeURIComponent(word);
  const defaultResources: Array<EnglishCardResource> = [
    {
      label: "Oxford Learner's",
      href: createOxfordWebUrl(word),
      title: "Oxford Learner’s Dictionaries",
      description: "查看更完整的英文释义、发音、搭配和例句。",
    },
    {
      label: "词源故事",
      href: `https://www.etymonline.com/word/${encodedWord}`,
      title: "Online Etymology Dictionary",
      description: "查看这个词的来源、历史演变和早期用法。",
    },
    {
      label: "相关文章",
      href: `https://www.google.com/search?q=${encodedWord}+meaning+example+article`,
      title: "搜索相关文章",
      description: "搜索包含这个词的解释、用法文章和学习材料。",
    },
    {
      label: "帖子讨论",
      href: `https://www.google.com/search?q=site%3Areddit.com+${encodedWord}+meaning+usage`,
      title: "搜索社区帖子",
      description: "搜索 Reddit 等社区里关于这个词的真实讨论和使用场景。",
    },
  ];

  return item.resources?.length ? item.resources : defaultResources;
}

export function EnglishCardResourceLink(props: {
  resource: EnglishCardResource;
}) {
  const { resource } = props;

  return (
    <span className="willa-english-card-resource">
      <a
        href={resource.href}
        className="willa-english-card-link"
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLinkIcon />
        {resource.label}
      </a>
      <span className="willa-english-card-resource-card" role="tooltip">
        <span className="willa-english-card-resource-title">
          {resource.title ?? resource.label}
        </span>
        {resource.description ? (
          <span className="willa-english-card-resource-description">
            {resource.description}
          </span>
        ) : null}
        <span className="willa-english-card-resource-url">
          {formatResourceUrl(resource.href)}
        </span>
      </span>
    </span>
  );
}

const createOxfordWebUrl = (word: string) => {
  return `https://www.oxfordlearnersdictionaries.com/definition/english/${encodeURIComponent(
    word,
  )}`;
};

const formatResourceUrl = (href: string) => {
  try {
    const url = new URL(href);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};
