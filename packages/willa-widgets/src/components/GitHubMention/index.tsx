import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@willa-ui/content/components/Skeleton";
import { useGitHubHoverCardResource } from "#widgets/internal/useGitHubHoverCardResource";
import classNames from "classnames";

export type GitHubMentionProps = {
  username: string;
  name?: string;
  href?: string;
  avatarUrl?: string;
  bio?: string;
  followers?: string | number;
  repositories?: string | number;
  className?: string;
};

type GitHubUserResponse = {
  avatar_url?: string;
  bio?: string | null;
  followers?: number;
  html_url?: string;
  login?: string;
  name?: string | null;
  public_repos?: number;
};

const githubUserCache = new Map<string, GitHubUserResponse>();

const createGitHubUserUrl = (username: string) =>
  `https://api.github.com/users/${username}`;

const createGitHubUserError = (status: number) =>
  new Error(`GitHub user ${status}`);

export function GitHubMention({
  username,
  name,
  href,
  avatarUrl,
  bio,
  followers,
  repositories,
  className,
}: GitHubMentionProps) {
  const normalizedUsername = username.trim().replace(/^@+/, "");
  const {
    isOpen,
    isLoading,
    loadError,
    remoteData,
    openCard,
    closeCard,
    scheduleClose,
  } = useGitHubHoverCardResource({
    resourceKey: normalizedUsername,
    cache: githubUserCache,
    createUrl: createGitHubUserUrl,
    createError: createGitHubUserError,
  });

  if (!normalizedUsername) return null;

  const profileUrl =
    href?.trim() ||
    remoteData?.html_url?.trim() ||
    `https://github.com/${normalizedUsername}`;
  const profileAvatar =
    avatarUrl?.trim() ||
    remoteData?.avatar_url?.trim() ||
    `https://github.com/${normalizedUsername}.png?size=80`;
  const displayName =
    name?.trim() || remoteData?.name?.trim() || normalizedUsername;
  const displayHandle = remoteData?.login?.trim() || normalizedUsername;
  const displayBio = bio?.trim() || remoteData?.bio?.trim() || "";
  const displayFollowers = followers ?? remoteData?.followers ?? null;
  const displayRepositories = repositories ?? remoteData?.public_repos ?? null;
  const detailItems = [
    displayFollowers != null ? `${displayFollowers} followers` : null,
    displayRepositories != null ? `${displayRepositories} repositories` : null,
  ].filter(Boolean) as Array<string>;

  return (
    <span
      className={classNames("willa-prose-github-mention-wrap", className)}
      data-open={isOpen ? "true" : "false"}
      onFocus={openCard}
      onBlur={scheduleClose}
    >
      <a
        className="willa-prose-github-mention"
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open GitHub profile: ${normalizedUsername}`}
        onPointerEnter={openCard}
        onPointerLeave={scheduleClose}
      >
        <img
          className="willa-prose-github-mention-avatar"
          src={profileAvatar}
          alt=""
          loading="lazy"
        />
        <span className="willa-prose-github-mention-copy">
          <span className="willa-prose-github-mention-name">
            <span>{displayName}</span>
          </span>
        </span>
      </a>
      <span
        className="willa-prose-github-hover-card willa-prose-github-hover-card--mention"
        onPointerEnter={openCard}
        onPointerLeave={closeCard}
      >
        <span className="willa-prose-github-hover-card-head">
          <img
            className="willa-prose-github-hover-card-avatar"
            src={profileAvatar}
            alt=""
            loading="lazy"
          />
          <span className="willa-prose-github-hover-card-copy">
            <span className="willa-prose-github-hover-card-title">
              {displayName}
            </span>
            <span className="willa-prose-github-hover-card-subtitle">
              @{displayHandle}
            </span>
          </span>
        </span>
        {isLoading ? (
          <Skeleton
            loading={isLoading}
            inline
            className="willa-prose-github-hover-card-loading"
            lines={["100%", "72%"]}
            label="Loading GitHub profile"
          >
            {null}
          </Skeleton>
        ) : loadError ? (
          <span className="willa-prose-github-hover-card-error">
            <ExclamationTriangleIcon />
            <span>Failed to load GitHub profile.</span>
          </span>
        ) : displayBio ? (
          <span className="willa-prose-github-hover-card-description">
            {displayBio}
          </span>
        ) : null}
        {!isLoading && !loadError && detailItems.length ? (
          <span className="willa-prose-github-hover-card-meta">
            {detailItems.map((item) => (
              <span
                key={item}
                className="willa-prose-github-hover-card-meta-item"
              >
                {item}
              </span>
            ))}
          </span>
        ) : null}
      </span>
    </span>
  );
}

GitHubMention.displayName = "GitHubMention";
