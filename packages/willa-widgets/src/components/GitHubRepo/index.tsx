import { ExclamationTriangleIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@willa-ui/content/components/Skeleton";
import { useGitHubHoverCardResource } from "#widgets/internal/useGitHubHoverCardResource";
import classNames from "classnames";

export type GitHubRepoProps = {
  repo: string;
  label?: string;
  href?: string;
  description?: string;
  language?: string;
  stars?: string | number;
  owner?: string;
  ownerAvatarUrl?: string;
  className?: string;
};

type GitHubRepoResponse = {
  description?: string | null;
  full_name?: string;
  html_url?: string;
  language?: string | null;
  owner?: {
    avatar_url?: string;
    login?: string;
  };
  stargazers_count?: number;
};

const githubRepoCache = new Map<string, GitHubRepoResponse>();

const createGitHubRepoUrl = (repo: string) =>
  `https://api.github.com/repos/${repo}`;

const createGitHubRepoError = (status: number) =>
  new Error(`GitHub repo ${status}`);

export function GitHubRepo({
  repo,
  label,
  href,
  description,
  language,
  stars,
  owner,
  ownerAvatarUrl,
  className,
}: GitHubRepoProps) {
  const normalizedRepo = repo.trim().replace(/^\/+|\/+$/g, "");
  const {
    isOpen,
    isLoading,
    loadError,
    remoteData,
    openCard,
    closeCard,
    scheduleClose,
  } = useGitHubHoverCardResource({
    resourceKey: normalizedRepo,
    cache: githubRepoCache,
    createUrl: createGitHubRepoUrl,
    createError: createGitHubRepoError,
  });

  if (!normalizedRepo) return null;

  const repositoryUrl =
    href?.trim() ||
    remoteData?.html_url?.trim() ||
    `https://github.com/${normalizedRepo}`;
  const displayLabel =
    label?.trim() || remoteData?.full_name?.trim() || normalizedRepo;
  const [repoOwner] = normalizedRepo.split("/");
  const displayOwner =
    owner?.trim() || remoteData?.owner?.login?.trim() || repoOwner;
  const repoAvatar =
    ownerAvatarUrl?.trim() ||
    remoteData?.owner?.avatar_url?.trim() ||
    (repoOwner ? `https://github.com/${repoOwner}.png?size=80` : "");
  const detailItems = [
    language?.trim() || remoteData?.language?.trim() || null,
    (stars ?? remoteData?.stargazers_count) != null
      ? `${stars ?? remoteData?.stargazers_count} stars`
      : null,
  ].filter(Boolean) as Array<string>;
  const displayDescription =
    description?.trim() || remoteData?.description?.trim() || "";

  return (
    <span
      className={classNames("willa-prose-github-repo-wrap", className)}
      data-open={isOpen ? "true" : "false"}
      onFocus={openCard}
      onBlur={scheduleClose}
    >
      <a
        className="willa-prose-github-repo"
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open GitHub repository: ${normalizedRepo}`}
        onPointerEnter={openCard}
        onPointerLeave={scheduleClose}
      >
        <GitHubLogoIcon className="willa-prose-github-repo-icon" />
        <span className="willa-prose-github-repo-name">{displayLabel}</span>
      </a>
      <span
        className="willa-prose-github-hover-card willa-prose-github-hover-card--repo"
        onPointerEnter={openCard}
        onPointerLeave={closeCard}
      >
        <span className="willa-prose-github-hover-card-head">
          {repoAvatar ? (
            <img
              className="willa-prose-github-hover-card-avatar"
              src={repoAvatar}
              alt=""
              loading="lazy"
            />
          ) : (
            <span className="willa-prose-github-hover-card-avatar willa-prose-github-hover-card-avatar--fallback">
              <GitHubLogoIcon />
            </span>
          )}
          <span className="willa-prose-github-hover-card-copy">
            <span className="willa-prose-github-hover-card-title">
              {displayLabel}
            </span>
            <span className="willa-prose-github-hover-card-subtitle">
              {displayOwner}
            </span>
          </span>
        </span>
        {isLoading ? (
          <Skeleton
            loading={isLoading}
            inline
            className="willa-prose-github-hover-card-loading"
            lines={["100%", "72%"]}
            label="Loading GitHub repository"
          >
            {null}
          </Skeleton>
        ) : loadError ? (
          <span className="willa-prose-github-hover-card-error">
            <ExclamationTriangleIcon />
            <span>Failed to load GitHub repository.</span>
          </span>
        ) : displayDescription ? (
          <span className="willa-prose-github-hover-card-description">
            {displayDescription}
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

GitHubRepo.displayName = "GitHubRepo";
