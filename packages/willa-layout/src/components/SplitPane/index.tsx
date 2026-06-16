import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { clampNumber } from "@willa-ui/shared";

export type SplitPaneOrientation = "horizontal" | "vertical";

export type SplitPaneResizeEvent = {
  sizes: Array<number>;
  index: number;
};

export type SplitPaneProps = {
  orientation?: SplitPaneOrientation;
  sizes?: Array<number>;
  defaultSizes?: Array<number>;
  storageKey?: string;
  resizeStep?: number;
  keyboardStep?: number;
  disabled?: boolean;
  onSizesChange?: (sizes: Array<number>) => void;
  onResizeStart?: (event: SplitPaneResizeEvent) => void;
  onResizeEnd?: (event: SplitPaneResizeEvent) => void;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "onResize">;

export type ResizablePanelProps = {
  id?: string;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsedSize?: number;
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "id">;

type ResizablePanelComponent = typeof ResizablePanel & {
  __willaResizablePanel?: true;
};

type ResizablePanelElement = ReactElement<ResizablePanelProps>;

type PointerDragState = {
  index: number;
  startPoint: number;
  startSizes: Array<number>;
};

export function ResizablePanel(props: ResizablePanelProps) {
  const { className, children, ...panelProps } = props;

  return (
    <div
      {...panelProps}
      className={classNames("willa-resizable-panel", className)}
    >
      {children}
    </div>
  );
}

// SplitPane needs to read panel sizing props without treating every child as a panel.
(ResizablePanel as ResizablePanelComponent).__willaResizablePanel = true;

export function SplitPane(props: SplitPaneProps) {
  const {
    orientation = "horizontal",
    sizes,
    defaultSizes,
    storageKey,
    resizeStep = 1,
    keyboardStep = 5,
    disabled = false,
    onSizesChange,
    onResizeStart,
    onResizeEnd,
    className,
    children,
    ...splitPaneProps
  } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<PointerDragState | null>(null);
  const latestSizesRef = useRef<Array<number>>([]);
  const panels = useMemo(() => resolvePanels(children), [children]);
  const panelLimits = useMemo(() => resolvePanelLimits(panels), [panels]);
  const [internalSizes, setInternalSizes] = useState<Array<number>>(() =>
    resolveInitialSizes(panels, defaultSizes, storageKey),
  );
  const currentSizes = normalizeSizes(
    sizes ?? internalSizes,
    panels.length,
    panelLimits,
  );
  latestSizesRef.current = currentSizes;
  const isHorizontal = orientation === "horizontal";

  useEffect(() => {
    if (sizes) return;
    setInternalSizes((current) =>
      normalizeSizes(current, panels.length, panelLimits),
    );
  }, [panelLimits, panels.length, sizes]);

  const commitSizes = (nextSizes: Array<number>) => {
    const normalizedSizes = normalizeSizes(
      nextSizes,
      panels.length,
      panelLimits,
    );

    if (!sizes) {
      setInternalSizes(normalizedSizes);
    }

    latestSizesRef.current = normalizedSizes;
    persistSizes(storageKey, normalizedSizes);
    onSizesChange?.(normalizedSizes);
    return normalizedSizes;
  };

  const handlePointerMove = (event: globalThis.PointerEvent) => {
    const dragState = dragStateRef.current;
    const root = rootRef.current;
    if (!dragState || !root) return;

    const rect = root.getBoundingClientRect();
    const containerSize = isHorizontal ? rect.width : rect.height;
    if (containerSize <= 0) return;

    const point = isHorizontal ? event.clientX : event.clientY;
    const delta = ((point - dragState.startPoint) / containerSize) * 100;
    const steppedDelta =
      resizeStep > 0 ? Math.round(delta / resizeStep) * resizeStep : delta;
    const nextSizes = resizeAdjacentPanels(
      dragState.startSizes,
      dragState.index,
      steppedDelta,
      panelLimits,
    );

    commitSizes(nextSizes);
  };

  const handlePointerUp = () => {
    const dragState = dragStateRef.current;
    if (!dragState) return;

    dragStateRef.current = null;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    onResizeEnd?.({ sizes: latestSizesRef.current, index: dragState.index });
  };

  const startResize = (
    index: number,
    event: PointerEvent<HTMLButtonElement>,
  ) => {
    if (disabled) return;

    const point = isHorizontal ? event.clientX : event.clientY;
    dragStateRef.current = {
      index,
      startPoint: point,
      startSizes: currentSizes,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    onResizeStart?.({ sizes: currentSizes, index });
  };

  const handleHandleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (disabled) return;

    const backwardKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
    const forwardKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    const isBackward = event.key === backwardKey;
    const isForward = event.key === forwardKey;

    if (!isBackward && !isForward) return;

    event.preventDefault();
    const delta = isBackward ? -keyboardStep : keyboardStep;
    const nextSizes = resizeAdjacentPanels(
      currentSizes,
      index,
      delta,
      panelLimits,
    );
    const committedSizes = commitSizes(nextSizes);
    onResizeEnd?.({ sizes: committedSizes, index });
  };

  const toggleCollapsedPanel = (index: number) => {
    if (disabled) return;

    const targetIndex = resolveCollapsiblePanelIndex(index, panels);
    if (targetIndex === -1) return;

    const targetPanel = panels[targetIndex];
    const collapsedSize = targetPanel.props.collapsedSize ?? 0;
    const isCollapsed = currentSizes[targetIndex] <= collapsedSize + 0.5;
    const nextSizes = isCollapsed
      ? restoreCollapsedPanel(currentSizes, targetIndex, targetPanel)
      : collapsePanel(currentSizes, targetIndex, targetPanel);

    commitSizes(nextSizes);
  };

  return (
    <div
      {...splitPaneProps}
      ref={rootRef}
      className={classNames(
        "willa-split-pane",
        `willa-split-pane--${orientation}`,
        disabled && "willa-split-pane--disabled",
        className,
      )}
    >
      {panels.map((panel, index) => {
        const panelStyle = {
          "--willa-split-pane-panel-size": `${currentSizes[index]}%`,
        } as CSSProperties;

        return (
          <div
            key={panel.props.id ?? index}
            className="willa-split-pane-slot"
            style={panelStyle}
          >
            {cloneElement(panel, {
              className: classNames(
                "willa-split-pane-panel",
                panel.props.className,
              ),
            })}
            {index < panels.length - 1 ? (
              <button
                type="button"
                className="willa-split-pane-handle"
                aria-label="调整面板尺寸"
                aria-orientation={isHorizontal ? "vertical" : "horizontal"}
                disabled={disabled}
                onDoubleClick={() => toggleCollapsedPanel(index)}
                onKeyDown={(event) => handleHandleKeyDown(index, event)}
                onPointerDown={(event) => startResize(index, event)}
              >
                <span className="willa-split-pane-handle-mark" />
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

const resolvePanels = (children: ReactNode) => {
  return Children.toArray(children).filter(isResizablePanelElement);
};

const isResizablePanelElement = (
  child: ReactNode,
): child is ResizablePanelElement => {
  if (!isValidElement<ResizablePanelProps>(child)) return false;

  return Boolean((child.type as ResizablePanelComponent).__willaResizablePanel);
};

const resolvePanelLimits = (panels: Array<ResizablePanelElement>) => {
  return panels.map((panel) => ({
    minSize: panel.props.minSize ?? 8,
    maxSize: panel.props.maxSize ?? 92,
  }));
};

const resolveInitialSizes = (
  panels: Array<ResizablePanelElement>,
  defaultSizes: Array<number> | undefined,
  storageKey: string | undefined,
) => {
  const storedSizes = readStoredSizes(storageKey);
  if (storedSizes) return storedSizes;

  const panelDefaultSizes = panels.map((panel) => panel.props.defaultSize);
  if (panelDefaultSizes.some((size) => typeof size === "number")) {
    return panelDefaultSizes.map((size) => size ?? 0);
  }

  if (defaultSizes) return defaultSizes;

  return createEqualSizes(panels.length);
};

const createEqualSizes = (count: number) => {
  if (count <= 0) return [];

  return Array.from({ length: count }, () => 100 / count);
};

const normalizeSizes = (
  sizes: Array<number>,
  count: number,
  limits: Array<{ minSize: number; maxSize: number }>,
) => {
  if (count <= 0) return [];

  const nextSizes = Array.from({ length: count }, (_, index) => {
    const value = Number.isFinite(sizes[index]) ? sizes[index] : 100 / count;
    return clampSize(value, limits[index]);
  });
  const total = nextSizes.reduce((sum, size) => sum + size, 0);
  if (total <= 0) return createEqualSizes(count);

  return nextSizes.map((size) => (size / total) * 100);
};

const resizeAdjacentPanels = (
  sizes: Array<number>,
  index: number,
  delta: number,
  limits: Array<{ minSize: number; maxSize: number }>,
) => {
  const nextSizes = [...sizes];
  const left = sizes[index];
  const right = sizes[index + 1];
  const leftLimit = limits[index];
  const rightLimit = limits[index + 1];
  const availableDelta = Math.min(
    Math.max(delta, leftLimit.minSize - left, right - rightLimit.maxSize),
    leftLimit.maxSize - left,
    right - rightLimit.minSize,
  );

  nextSizes[index] = left + availableDelta;
  nextSizes[index + 1] = right - availableDelta;
  return nextSizes;
};

const collapsePanel = (
  sizes: Array<number>,
  index: number,
  panel: ResizablePanelElement,
) => {
  const collapsedSize = panel.props.collapsedSize ?? 0;
  const neighborIndex = index === sizes.length - 1 ? index - 1 : index + 1;
  if (neighborIndex < 0) return sizes;

  const nextSizes = [...sizes];
  const releasedSize = nextSizes[index] - collapsedSize;
  nextSizes[index] = collapsedSize;
  nextSizes[neighborIndex] += releasedSize;
  return nextSizes;
};

const restoreCollapsedPanel = (
  sizes: Array<number>,
  index: number,
  panel: ResizablePanelElement,
) => {
  const targetSize = panel.props.defaultSize ?? panel.props.minSize ?? 20;
  const neighborIndex = index === sizes.length - 1 ? index - 1 : index + 1;
  if (neighborIndex < 0) return sizes;

  const nextSizes = [...sizes];
  const neededSize = targetSize - nextSizes[index];
  nextSizes[index] = targetSize;
  nextSizes[neighborIndex] = Math.max(0, nextSizes[neighborIndex] - neededSize);
  return nextSizes;
};

const resolveCollapsiblePanelIndex = (
  handleIndex: number,
  panels: Array<ResizablePanelElement>,
) => {
  if (panels[handleIndex]?.props.collapsible) return handleIndex;
  if (panels[handleIndex + 1]?.props.collapsible) return handleIndex + 1;

  return -1;
};

const clampSize = (
  size: number,
  limit: { minSize: number; maxSize: number } | undefined,
) => {
  if (!limit) return size;

  return clampNumber(size, limit.minSize, limit.maxSize);
};

const readStoredSizes = (storageKey: string | undefined) => {
  if (!storageKey || typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(storageKey);
    if (!value) return null;

    const parsed = JSON.parse(value);
    return Array.isArray(parsed) &&
      parsed.every((item) => typeof item === "number")
      ? parsed
      : null;
  } catch {
    return null;
  }
};

const persistSizes = (storageKey: string | undefined, sizes: Array<number>) => {
  if (!storageKey || typeof window === "undefined") return;

  window.localStorage.setItem(storageKey, JSON.stringify(sizes));
};
