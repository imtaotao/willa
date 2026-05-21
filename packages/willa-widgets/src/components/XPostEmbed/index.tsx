import { useEffect, useState } from "react";
import { Tweet } from "react-twitter-widgets";
import { Skeleton } from "@willa-ui/content/components/Skeleton";

export type XPostEmbedProps = {
  url?: string;
  id?: string;
  title?: string;
};

const XPostEmbedErrorFallback = (props: { onVisible: () => void }) => {
  useEffect(() => {
    props.onVisible();
  }, [props]);

  return (
    <div className="willa-prose-x-post-embed-error">
      Failed to load this X post.
    </div>
  );
};

const extractTweetId = (urlOrId: string) => {
  const value = urlOrId.trim();
  if (!value) return "";
  if (/^\d+$/.test(value)) return value;

  const match = value.match(/status\/(\d+)/i);
  return match?.[1] || "";
};

export function XPostEmbed({ url, id, title }: XPostEmbedProps) {
  const source = url?.trim() || id?.trim() || "";
  const tweetId = extractTweetId(source);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".willa-shell");
    const currentTheme =
      shell?.dataset.willaTheme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [tweetId, theme]);

  const ariaLabel = title?.trim() || "X post";
  if (!tweetId) return null;

  return (
    <article className="willa-prose-x-post-embed">
      <div className="willa-prose-x-post-embed-frame-shell">
        <div className="willa-prose-x-post-embed-widget" aria-label={ariaLabel}>
          <Skeleton
            loading={isLoading}
            keepChildrenMounted
            className="willa-prose-x-post-embed-loading"
            skeletonClassName="willa-prose-x-post-embed-loading-placeholder"
            lines={["100%", "82%", "64%", "100%"]}
            label={`Loading ${ariaLabel}`}
          >
            <Tweet
              key={`${tweetId}-${theme}`}
              tweetId={tweetId}
              options={{ theme }}
              onLoad={() => {
                setIsLoading(false);
              }}
              renderError={() => (
                <XPostEmbedErrorFallback
                  onVisible={() => {
                    setIsLoading(false);
                  }}
                />
              )}
            />
          </Skeleton>
        </div>
      </div>
    </article>
  );
}
