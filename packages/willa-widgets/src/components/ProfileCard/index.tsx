import { type HTMLAttributes, type ReactNode } from "react";
import classNames from "classnames";

import { Avatar } from "@willa-ui/content/components/Avatar";

export type ProfileCardLink = {
  label: ReactNode;
  href: string;
  target?: string;
  rel?: string;
};

export type ProfileCardProps = {
  name: ReactNode;
  avatarSrc?: string;
  avatarName?: string;
  imageSrc?: string;
  role?: ReactNode;
  bio?: ReactNode;
  meta?: ReactNode;
  links?: Array<ProfileCardLink>;
  actions?: ReactNode;
  href?: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "role">;

export function ProfileCard(props: ProfileCardProps) {
  const {
    name,
    avatarSrc,
    avatarName,
    imageSrc,
    role,
    bio,
    meta,
    links,
    actions,
    href,
    className,
    ...cardProps
  } = props;
  const body = (
    <>
      {imageSrc ? (
        <img className="willa-profile-card-image" src={imageSrc} alt="" />
      ) : null}
      <div className="willa-profile-card-main">
        <Avatar
          className="willa-profile-card-avatar"
          src={avatarSrc}
          name={avatarName ?? getProfileAvatarName(name)}
          alt={getProfileAvatarName(name)}
          size="lg"
        />
        <div className="willa-profile-card-copy">
          <h3 className="willa-profile-card-name">{name}</h3>
          {role ? <p className="willa-profile-card-role">{role}</p> : null}
          {bio ? <p className="willa-profile-card-bio">{bio}</p> : null}
          {meta ? <p className="willa-profile-card-meta">{meta}</p> : null}
        </div>
        {links?.length ? (
          <div className="willa-profile-card-links">
            {links.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href}
                target={link.target}
                rel={link.rel}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
        {actions ? (
          <div className="willa-profile-card-actions">{actions}</div>
        ) : null}
      </div>
    </>
  );

  return href ? (
    <a
      {...cardProps}
      className={classNames(
        "willa-profile-card",
        imageSrc && "willa-profile-card--with-image",
        "willa-profile-card--link",
        className,
      )}
      href={href}
    >
      {body}
    </a>
  ) : (
    <article
      {...cardProps}
      className={classNames(
        "willa-profile-card",
        imageSrc && "willa-profile-card--with-image",
        className,
      )}
    >
      {body}
    </article>
  );
}

const getProfileAvatarName = (name: ReactNode) => {
  if (typeof name === "string" || typeof name === "number") {
    return String(name);
  }
  return "Profile";
};
