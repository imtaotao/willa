import { useEffect, useState } from "react";
import { Tweet } from "react-twitter-widgets";
import { Skeleton } from "@willa-ui/content/components/Skeleton";
import { markMdxBlockComponent, useWillaTheme } from "@willa-ui/shared";
import classNames from "classnames";

export type XPostEmbedProps = {
  url?: string;
  id?: string;
  title?: string;
  className?: string;
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

export function XPostEmbed({ url, id, title, className }: XPostEmbedProps) {
  const source = url?.trim() || id?.trim() || "";
  const tweetId = extractTweetId(source);
  const theme = useWillaTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [tweetId, theme]);

  const ariaLabel = title?.trim() || "X post";
  if (!tweetId) return null;

  return (
    <article className={classNames("willa-prose-x-post-embed", className)}>
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
    </article>
  );
}

markMdxBlockComponent(XPostEmbed);

XPostEmbed.displayName = "XPostEmbed";
