import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type ResultTone = "default" | "success" | "info" | "warning" | "danger";
export type ResultSize = "sm" | "md" | "lg";
export type ResultAlign = "start" | "center";

export type ResultProps = {
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  icon?: ReactNode;
  image?: ReactNode;
  actions?: ReactNode;
  extra?: ReactNode;
  tone?: ResultTone;
  size?: ResultSize;
  align?: ResultAlign;
} & Omit<ComponentPropsWithoutRef<"section">, "title">;

export function Result(props: ResultProps) {
  const {
    title,
    description,
    status,
    icon,
    image,
    actions,
    extra,
    tone = "default",
    size = "md",
    align = "center",
    className,
    children,
    ...sectionProps
  } = props;

  return (
    <section
      {...sectionProps}
      className={classNames(
        "willa-result",
        `willa-result--${tone}`,
        `willa-result--${size}`,
        `willa-result--${align}`,
        className,
      )}
    >
      {image ? (
        <div className="willa-result__image" aria-hidden="true">
          {image}
        </div>
      ) : (
        <div className="willa-result__icon" aria-hidden="true">
          {icon ?? getDefaultIcon(tone)}
        </div>
      )}
      <div className="willa-result__content">
        {status ? <div className="willa-result__status">{status}</div> : null}
        <h3 className="willa-result__title">{title}</h3>
        {description ? (
          <p className="willa-result__description">{description}</p>
        ) : null}
        {children ? <div className="willa-result__body">{children}</div> : null}
      </div>
      {actions ? <div className="willa-result__actions">{actions}</div> : null}
      {extra ? <div className="willa-result__extra">{extra}</div> : null}
    </section>
  );
}

const getDefaultIcon = (tone: ResultTone) => {
  if (tone === "success") return <CheckCircledIcon />;
  if (tone === "danger") return <CrossCircledIcon />;
  if (tone === "warning") return <ExclamationTriangleIcon />;
  return <InfoCircledIcon />;
};
