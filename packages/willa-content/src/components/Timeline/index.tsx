import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";

export type TimelineSize = "sm" | "md";
export type TimelineVariant = "default" | "compact";
export type TimelineTone =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export type TimelineItem = {
  id?: string | number;
  title: ReactNode;
  time?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  tone?: TimelineTone;
  className?: string;
  onClick?: (
    event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>,
  ) => void;
};

export type TimelineProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "title"
> & {
  items: Array<TimelineItem>;
  title?: ReactNode;
  description?: ReactNode;
  size?: TimelineSize;
  variant?: TimelineVariant;
};

export function Timeline(props: TimelineProps) {
  const {
    items,
    title,
    description,
    size = "md",
    variant = "default",
    className,
    ...timelineProps
  } = props;

  return (
    <section
      {...timelineProps}
      className={classNames(
        "willa-timeline",
        `willa-timeline--${size}`,
        `willa-timeline--${variant}`,
        className,
      )}
    >
      {title || description ? (
        <header className="willa-timeline-header">
          {title ? <h3 className="willa-timeline-title">{title}</h3> : null}
          {description ? (
            <p className="willa-timeline-description">{description}</p>
          ) : null}
        </header>
      ) : null}
      <ol className="willa-timeline-list">
        {items.map((item, index) => (
          <TimelineEntry
            key={item.id ?? `timeline-item-${index}`}
            item={item}
          />
        ))}
      </ol>
    </section>
  );
}

const TimelineEntry = ({ item }: { item: TimelineItem }) => {
  const tone = item.tone ?? "default";
  const isInteractive = Boolean(item.onClick);

  return (
    <li
      className={classNames(
        "willa-timeline-item",
        `willa-timeline-item--${tone}`,
        isInteractive && "willa-timeline-item--interactive",
        item.className,
      )}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={item.onClick}
      onKeyDown={(event) => {
        if (!item.onClick) return;
        if (event.key !== "Enter" && event.key !== " ") return;

        event.preventDefault();
        item.onClick(event);
      }}
    >
      <span className="willa-timeline-rail" aria-hidden="true">
        <span className="willa-timeline-marker">
          {item.icon ? (
            <span className="willa-timeline-icon">{item.icon}</span>
          ) : null}
        </span>
      </span>
      <article className="willa-timeline-card">
        <div className="willa-timeline-main">
          <div className="willa-timeline-heading">
            <h4 className="willa-timeline-item-title">{item.title}</h4>
            {item.time ? (
              <time className="willa-timeline-time">{item.time}</time>
            ) : null}
          </div>
          {item.description ? (
            <p className="willa-timeline-item-description">
              {item.description}
            </p>
          ) : null}
          {item.content ? (
            <div className="willa-timeline-content">{item.content}</div>
          ) : null}
          {item.meta ? (
            <div className="willa-timeline-meta">{item.meta}</div>
          ) : null}
        </div>
        {item.action ? (
          <div className="willa-timeline-action">{item.action}</div>
        ) : null}
      </article>
    </li>
  );
};
