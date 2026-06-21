import { useId, type KeyboardEvent, type ReactNode } from "react";
import classNames from "classnames";
import { useSingleSelection } from "#content/internal/useSingleSelection";

export type TabsItem = {
  value: string;
  label: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type TabsSize = "sm" | "md";

export type TabsProps = {
  items: Array<TabsItem>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: TabsSize;
  ariaLabel?: string;
  className?: string;
};

export function Tabs(props: TabsProps) {
  const {
    items,
    value,
    defaultValue,
    onValueChange,
    size = "md",
    ariaLabel = "Tabs",
    className,
  } = props;
  const id = useId();
  const { enabledItems, selectedItem, selectValue } = useSingleSelection({
    items,
    value,
    defaultValue,
    onValueChange,
  });

  const focusTab = (container: HTMLDivElement, nextValue: string) => {
    const nextIndex = items.findIndex((item) => item.value === nextValue);
    if (nextIndex < 0) return;

    container
      .querySelector<HTMLButtonElement>(
        `[data-willa-tabs-index="${String(nextIndex)}"]`,
      )
      ?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!enabledItems.length || !selectedItem) return;

    const currentIndex = enabledItems.findIndex(
      (item) => item.value === selectedItem.value,
    );
    const lastIndex = enabledItems.length - 1;
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    const previousIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextItem = enabledItems[nextIndex];
      selectValue(nextItem.value);
      focusTab(event.currentTarget, nextItem.value);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const previousItem = enabledItems[previousIndex];
      selectValue(previousItem.value);
      focusTab(event.currentTarget, previousItem.value);
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectValue(enabledItems[0].value);
      focusTab(event.currentTarget, enabledItems[0].value);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectValue(enabledItems[lastIndex].value);
      focusTab(event.currentTarget, enabledItems[lastIndex].value);
    }
  };

  if (!items.length || !selectedItem) return null;

  return (
    <div className={classNames("willa-tabs", `willa-tabs--${size}`, className)}>
      <div
        className="willa-tabs-list"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={handleKeyDown}
      >
        {items.map((item, index) => {
          const selected = item.value === selectedItem.value;
          const tabId = getTabId(id, index);
          const panelId = getPanelId(id, index);

          return (
            <button
              key={item.value}
              type="button"
              id={tabId}
              className="willa-tabs-tab"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              disabled={item.disabled}
              tabIndex={selected ? 0 : -1}
              data-willa-tabs-index={index}
              onClick={() => selectValue(item.value)}
            >
              {item.icon ? (
                <span className="willa-tabs-tab-icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : null}
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item, index) => {
        const selected = item.value === selectedItem.value;

        return (
          <div
            key={item.value}
            id={getPanelId(id, index)}
            className="willa-tabs-panel"
            role="tabpanel"
            aria-labelledby={getTabId(id, index)}
            hidden={!selected}
          >
            {item.children}
          </div>
        );
      })}
    </div>
  );
}

const getTabId = (id: string, index: number) => `${id}-tab-${index}`;
const getPanelId = (id: string, index: number) => `${id}-panel-${index}`;

Tabs.displayName = "Tabs";
