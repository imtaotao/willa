import {
  Children,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { isArray, isNil, isString } from "aidly";

export type StepsProps = {
  title?: ReactNode;
  direction?: "vertical" | "horizontal";
  markerColor?: string;
  markerTextColor?: string;
  className?: string;
  children?: ReactNode;
};

export type StepProps = {
  title?: ReactNode;
  markerColor?: string;
  markerTextColor?: string;
  className?: string;
  children?: ReactNode;
};

export function Steps(props: StepsProps) {
  const {
    title,
    direction = "vertical",
    markerColor,
    markerTextColor,
    className,
    children,
  } = props;
  const style = createMarkerStyle(markerColor, markerTextColor);
  const stepChildren = createStepChildren(children);

  return (
    <section
      className={classNames(
        "willa-steps-block",
        `willa-steps-block--${direction}`,
        className,
      )}
      style={style}
    >
      {title ? <div className="willa-steps-block-title">{title}</div> : null}
      <ol className="willa-steps-list">{stepChildren}</ol>
    </section>
  );
}

export function Step(props: StepProps) {
  const { title, markerColor, markerTextColor, children, className } = props;
  const lines = isArray(children) ? children : [children];
  const content = lines.filter(
    (line): line is Exclude<ReactNode, boolean | null | undefined> =>
      !isNil(line) && line !== false,
  );
  const style = createMarkerStyle(markerColor, markerTextColor);

  return (
    <li className={classNames("willa-step", className)} style={style}>
      {title ? <div className="willa-step-title">{title}</div> : null}
      <div className="willa-step-body">
        {content.map((line, index) => (
          <div key={`step-line-${index}`} className="willa-step-line">
            {line}
          </div>
        ))}
      </div>
    </li>
  );
}

type MarkerStyle = CSSProperties & {
  "--willa-step-marker-bg"?: string;
  "--willa-step-marker-color"?: string;
};

const createMarkerStyle = (
  markerColor?: string,
  markerTextColor?: string,
): MarkerStyle | undefined => {
  if (!markerColor && !markerTextColor) return undefined;

  return {
    "--willa-step-marker-bg": markerColor,
    "--willa-step-marker-color": markerTextColor,
  };
};

type HeadingComponent = {
  mdxHeadingTag?: string;
};

type StepComponent = {
  __willaStepElement?: boolean;
};

type HeadingElement = ReactElement<{
  children?: ReactNode;
}>;

type AutoStepGroup = {
  title?: ReactNode;
  content: Array<ReactNode>;
};

const createStepChildren = (children: ReactNode) => {
  const nodes = Children.toArray(children).filter((node) => {
    if (!isString(node)) return true;
    return node.trim().length > 0;
  });

  if (!nodes.length || nodes.some(isStepElement)) return children;

  const groups = createAutoStepGroups(nodes);
  if (!groups) return children;

  return groups.map((group, index) => (
    <Step key={`auto-step-${index}`} title={group.title}>
      {group.content}
    </Step>
  ));
};

const createAutoStepGroups = (nodes: Array<ReactNode>) => {
  const groups: Array<AutoStepGroup> = [];
  let currentGroup: AutoStepGroup | undefined;
  let hasHeading = false;

  for (const node of nodes) {
    if (isHeadingElement(node)) {
      hasHeading = true;
      currentGroup = {
        title: node.props.children,
        content: [],
      };
      groups.push(currentGroup);
      continue;
    }

    if (!currentGroup) {
      currentGroup = { content: [] };
      groups.push(currentGroup);
    }

    currentGroup.content.push(node);
  }

  return hasHeading ? groups : undefined;
};

const isStepElement = (node: ReactNode): node is ReactElement<StepProps> => {
  if (!isValidElement(node) || typeof node.type === "string") return false;
  return Boolean((node.type as StepComponent).__willaStepElement);
};

const isHeadingElement = (node: ReactNode): node is HeadingElement => {
  if (!isValidElement(node)) return false;
  if (typeof node.type === "string") {
    return /^h[1-6]$/.test(node.type);
  }
  if (typeof node.type !== "function") {
    return false;
  }
  return Boolean((node.type as HeadingComponent).mdxHeadingTag);
};

Steps.displayName = "Steps";
Step.displayName = "Step";
(Step as typeof Step & StepComponent).__willaStepElement = true;
