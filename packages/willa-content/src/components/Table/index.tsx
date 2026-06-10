import {
  Fragment,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";

import { EmptyState } from "#content/components/EmptyState";
import { Spinner } from "#content/components/Spinner";

export type TableSize = "sm" | "md" | "lg";
export type TableAlign = "start" | "center" | "end";
export type TableSortDirection = "asc" | "desc";
export type TableSelectionMode = "none" | "single" | "multiple";
export type TableRowTone =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger";

export type TableSortState = {
  key: string;
  direction: TableSortDirection;
};

export type TablePagination = {
  pageSize: number;
  page?: number;
  defaultPage?: number;
  total?: number;
  onPageChange?: (page: number) => void;
};

export type TableCell = {
  key?: string;
  label: ReactNode;
  value?: ReactNode;
  render?: ReactNode;
  sortValue?: string | number;
  sortable?: boolean;
  compare?: (
    a: TableCell,
    b: TableCell,
    aItem: TableItem,
    bItem: TableItem,
  ) => number;
  align?: TableAlign;
  width?: number | string;
  hidden?: boolean;
  ellipsis?: boolean;
  title?: string;
  className?: string;
  headerClassName?: string;
};

export type TableItem = {
  key: string | number;
  cells: Array<TableCell>;
  actions?: ReactNode;
  expanded?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  tone?: TableRowTone;
  onClick?: () => void;
  className?: string;
};

export type TableProps = {
  items: Array<TableItem>;
  caption?: ReactNode;
  size?: TableSize;
  stickyHeader?: boolean;
  stickyActions?: boolean;
  actionsWidth?: number | string;
  loading?: boolean;
  loadingText?: ReactNode;
  empty?: ReactNode;
  actionsLabel?: ReactNode;
  sort?: TableSortState;
  defaultSort?: TableSortState;
  onSortChange?: (sort: TableSortState) => void;
  selectionMode?: TableSelectionMode;
  selectedKeys?: Array<string | number>;
  defaultSelectedKeys?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
  expandedKeys?: Array<string | number>;
  defaultExpandedKeys?: Array<string | number>;
  onExpandedChange?: (keys: Array<string | number>) => void;
  pagination?: TablePagination;
  tableClassName?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

type TableCellTooltip = {
  text: string;
  x: number;
  y: number;
};

export function Table(props: TableProps) {
  const {
    items,
    caption,
    size = "md",
    stickyHeader = false,
    stickyActions = false,
    actionsWidth,
    loading = false,
    loadingText = "加载中",
    empty = "暂无数据",
    actionsLabel = "操作",
    sort,
    defaultSort,
    onSortChange,
    selectionMode = "none",
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    expandedKeys,
    defaultExpandedKeys,
    onExpandedChange,
    pagination,
    tableClassName,
    className,
    ...rootProps
  } = props;
  const [internalSort, setInternalSort] = useState<TableSortState | undefined>(
    defaultSort,
  );
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<
    Array<string | number>
  >(defaultSelectedKeys ?? []);
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<
    Array<string | number>
  >(defaultExpandedKeys ?? []);
  const [internalPage, setInternalPage] = useState(
    pagination?.defaultPage ?? 1,
  );
  const [cellTooltip, setCellTooltip] = useState<TableCellTooltip | null>(null);
  const selectionName = useId();
  const currentSort = sort ?? internalSort;
  const currentSelectedKeys = selectedKeys ?? internalSelectedKeys;
  const currentExpandedKeys = expandedKeys ?? internalExpandedKeys;
  const selectedKeySet = useMemo(
    () => new Set(currentSelectedKeys),
    [currentSelectedKeys],
  );
  const expandedKeySet = useMemo(
    () => new Set(currentExpandedKeys),
    [currentExpandedKeys],
  );
  const headers = getVisibleCells(items[0]?.cells ?? []);
  const hasActions = items.some((item) => item.actions);
  const hasExpandableRows = items.some((item) => item.expanded);
  const hasSelection = selectionMode !== "none";
  const sortedItems = useMemo(
    () => sortItems(items, currentSort),
    [items, currentSort],
  );
  const paginationState = getPaginationState({
    itemCount: sortedItems.length,
    page: pagination?.page ?? internalPage,
    pageSize: pagination?.pageSize,
    total: pagination?.total,
  });
  const visibleItems = paginationState
    ? sortedItems.slice(paginationState.startIndex, paginationState.endIndex)
    : sortedItems;
  const selectableItems = visibleItems.filter((item) => !item.disabled);
  const allVisibleSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedKeySet.has(item.key));
  const someVisibleSelected =
    selectableItems.some((item) => selectedKeySet.has(item.key)) &&
    !allVisibleSelected;
  const columnCount = Math.max(
    headers.length +
      (hasSelection ? 1 : 0) +
      (hasExpandableRows ? 1 : 0) +
      (hasActions ? 1 : 0),
    1,
  );

  const setSortState = (nextSort: TableSortState) => {
    if (!sort) setInternalSort(nextSort);
    onSortChange?.(nextSort);
  };

  const setSelectedKeysState = (nextKeys: Array<string | number>) => {
    if (!selectedKeys) setInternalSelectedKeys(nextKeys);
    onSelectionChange?.(nextKeys);
  };

  const setExpandedKeysState = (nextKeys: Array<string | number>) => {
    if (!expandedKeys) setInternalExpandedKeys(nextKeys);
    onExpandedChange?.(nextKeys);
  };

  const setPageState = (nextPage: number) => {
    if (pagination?.page === undefined) setInternalPage(nextPage);
    pagination?.onPageChange?.(nextPage);
  };

  const toggleSort = (cell: TableCell, index: number) => {
    if (!cell.sortable) return;

    const sortKey = getCellKey(cell, index);
    const direction =
      currentSort?.key === sortKey && currentSort.direction === "asc"
        ? "desc"
        : "asc";

    setSortState({ key: sortKey, direction });
  };

  const toggleItemSelection = (item: TableItem) => {
    if (item.disabled) return;

    if (selectionMode === "single") {
      setSelectedKeysState(selectedKeySet.has(item.key) ? [] : [item.key]);
      return;
    }

    if (selectionMode === "multiple") {
      setSelectedKeysState(
        selectedKeySet.has(item.key)
          ? currentSelectedKeys.filter((key) => key !== item.key)
          : [...currentSelectedKeys, item.key],
      );
    }
  };

  const toggleVisibleSelection = () => {
    if (selectionMode !== "multiple") return;

    const visibleKeys = selectableItems.map((item) => item.key);
    if (allVisibleSelected) {
      setSelectedKeysState(
        currentSelectedKeys.filter((key) => !visibleKeys.includes(key)),
      );
      return;
    }

    setSelectedKeysState(
      Array.from(new Set([...currentSelectedKeys, ...visibleKeys])),
    );
  };

  const toggleExpanded = (item: TableItem) => {
    if (!item.expanded) return;

    setExpandedKeysState(
      expandedKeySet.has(item.key)
        ? currentExpandedKeys.filter((key) => key !== item.key)
        : [...currentExpandedKeys, item.key],
    );
  };

  const showCellTooltip = (
    event: MouseEvent<HTMLSpanElement>,
    cell: TableCell,
  ) => {
    const text = getCellTooltipText(cell);
    if (!text) return;

    const element = event.currentTarget;
    if (element.scrollWidth <= element.clientWidth + 1) return;

    const rect = element.getBoundingClientRect();
    setCellTooltip({
      text,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  const hideCellTooltip = () => setCellTooltip(null);

  const renderEmptyState = () => {
    if (typeof empty === "string" || typeof empty === "number") {
      return <EmptyState title={empty} variant="plain" size="sm" compact />;
    }
    return (
      <EmptyState title="暂无数据" variant="plain" size="sm" compact>
        {empty}
      </EmptyState>
    );
  };

  const renderCellContent = (cell: TableCell) => {
    const content = cell.render ?? cell.value;
    if (cell.ellipsis === false) return content;

    const tooltipText = getCellTooltipText(cell);
    return (
      <span
        className="willa-table-cell-content"
        aria-label={tooltipText}
        onMouseEnter={(event) => showCellTooltip(event, cell)}
        onMouseLeave={hideCellTooltip}
      >
        {content}
      </span>
    );
  };

  return (
    <div
      {...rootProps}
      className={classNames(
        "willa-table",
        `willa-table--${size}`,
        stickyHeader && "willa-table--sticky-header",
        stickyActions && "willa-table--sticky-actions",
        className,
      )}
    >
      <div className="willa-table-scroll">
        <table className={classNames("willa-table-element", tableClassName)}>
          {caption ? (
            <caption className="willa-table-caption">{caption}</caption>
          ) : null}
          {headers.length > 0 ? (
            <thead>
              <tr>
                {hasSelection ? (
                  <th className="willa-table-selection-header" scope="col">
                    {selectionMode === "multiple" ? (
                      <input
                        className="willa-table-selection-control"
                        type="checkbox"
                        aria-label="选择当前页"
                        checked={allVisibleSelected}
                        ref={(element) => {
                          if (element) {
                            element.indeterminate = someVisibleSelected;
                          }
                        }}
                        onChange={toggleVisibleSelection}
                      />
                    ) : null}
                  </th>
                ) : null}
                {hasExpandableRows ? (
                  <th className="willa-table-expand-header" scope="col" />
                ) : null}
                {headers.map((cell, index) => {
                  const sortKey = getCellKey(cell, index);
                  const sortDirection =
                    currentSort?.key === sortKey
                      ? currentSort.direction
                      : undefined;

                  return (
                    <th
                      key={sortKey}
                      className={cell.headerClassName}
                      data-align={cell.align}
                      data-sort-direction={sortDirection}
                      aria-sort={getAriaSort(sortDirection)}
                      style={getCellStyle(cell)}
                      scope="col"
                    >
                      {cell.sortable ? (
                        <button
                          className="willa-table-sort-button"
                          type="button"
                          onClick={() => toggleSort(cell, index)}
                        >
                          <span>{cell.label}</span>
                          <span
                            className="willa-table-sort-indicator"
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        cell.label
                      )}
                    </th>
                  );
                })}
                {hasActions ? (
                  <th
                    className="willa-table-actions-header"
                    data-align="end"
                    style={getActionsStyle(actionsWidth)}
                    scope="col"
                  >
                    {actionsLabel}
                  </th>
                ) : null}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {loading ? (
              <tr>
                <td className="willa-table-state" colSpan={columnCount}>
                  <Spinner label={loadingText} size="sm" />
                </td>
              </tr>
            ) : null}
            {!loading && items.length === 0 ? (
              <tr>
                <td className="willa-table-state" colSpan={columnCount}>
                  {renderEmptyState()}
                </td>
              </tr>
            ) : null}
            {!loading
              ? visibleItems.map((item) => {
                  const isExpanded = expandedKeySet.has(item.key);
                  const isSelected =
                    selectedKeySet.has(item.key) || item.selected;

                  return (
                    <Fragment key={item.key}>
                      <tr
                        className={classNames(
                          item.onClick &&
                            !item.disabled &&
                            "willa-table-row--interactive",
                          isSelected && "willa-table-row--selected",
                          item.disabled && "willa-table-row--disabled",
                          item.tone && `willa-table-row--${item.tone}`,
                          item.className,
                        )}
                        tabIndex={
                          item.onClick && !item.disabled ? 0 : undefined
                        }
                        onClick={() => {
                          if (item.disabled) return;
                          item.onClick?.();
                        }}
                        onKeyDown={(event) => {
                          if (item.disabled) return;
                          if (event.key !== "Enter" && event.key !== " ")
                            return;

                          event.preventDefault();
                          item.onClick?.();
                        }}
                      >
                        {hasSelection ? (
                          <td className="willa-table-selection-cell">
                            <input
                              className="willa-table-selection-control"
                              type={
                                selectionMode === "single"
                                  ? "radio"
                                  : "checkbox"
                              }
                              name={
                                selectionMode === "single"
                                  ? selectionName
                                  : undefined
                              }
                              aria-label="选择行"
                              checked={selectedKeySet.has(item.key)}
                              disabled={item.disabled}
                              onClick={(event) => event.stopPropagation()}
                              onChange={() => toggleItemSelection(item)}
                            />
                          </td>
                        ) : null}
                        {hasExpandableRows ? (
                          <td className="willa-table-expand-cell">
                            {item.expanded ? (
                              <button
                                className="willa-table-expand-button"
                                type="button"
                                aria-expanded={isExpanded}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  toggleExpanded(item);
                                }}
                              >
                                <span aria-hidden="true">
                                  {isExpanded ? "-" : "+"}
                                </span>
                              </button>
                            ) : null}
                          </td>
                        ) : null}
                        {getVisibleCells(item.cells).map((cell, index) => (
                          <td
                            key={getCellKey(cell, index)}
                            className={classNames(
                              cell.ellipsis !== false &&
                                "willa-table-cell--ellipsis",
                              cell.className,
                            )}
                            data-align={cell.align}
                          >
                            {renderCellContent(cell)}
                          </td>
                        ))}
                        {hasActions ? (
                          <td
                            className="willa-table-actions-cell"
                            data-align="end"
                            style={getActionsStyle(actionsWidth)}
                            onClick={(event) => event.stopPropagation()}
                          >
                            {item.actions}
                          </td>
                        ) : null}
                      </tr>
                      {item.expanded && isExpanded ? (
                        <tr className="willa-table-expanded-row">
                          <td
                            className="willa-table-expanded-cell"
                            colSpan={columnCount}
                          >
                            {item.expanded}
                          </td>
                        </tr>
                      ) : null}
                    </Fragment>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      {paginationState ? (
        <div className="willa-table-pagination">
          <span className="willa-table-pagination-info">
            {paginationState.startIndex + 1} - {paginationState.endIndex} /{" "}
            {paginationState.total}
          </span>
          <div className="willa-table-pagination-actions">
            <button
              className="willa-table-pagination-button"
              type="button"
              disabled={paginationState.page <= 1}
              onClick={() => setPageState(paginationState.page - 1)}
            >
              上一页
            </button>
            <span className="willa-table-pagination-current">
              {paginationState.page} / {paginationState.pageCount}
            </span>
            <button
              className="willa-table-pagination-button"
              type="button"
              disabled={paginationState.page >= paginationState.pageCount}
              onClick={() => setPageState(paginationState.page + 1)}
            >
              下一页
            </button>
          </div>
        </div>
      ) : null}
      {cellTooltip ? (
        <div
          className="willa-table-cell-tooltip"
          role="tooltip"
          style={{ left: cellTooltip.x, top: cellTooltip.y }}
        >
          {cellTooltip.text}
        </div>
      ) : null}
    </div>
  );
}

const getVisibleCells = (cells: Array<TableCell>) => {
  return cells.filter((cell) => !cell.hidden);
};

const getCellKey = (cell: TableCell, index: number) => {
  return cell.key ?? String(index);
};

const getCellTooltipText = (cell: TableCell) => {
  if (cell.title) return cell.title;

  if (typeof cell.value === "string" || typeof cell.value === "number") {
    return String(cell.value);
  }

  return undefined;
};

const getAriaSort = (direction: TableSortDirection | undefined) => {
  if (direction === "asc") return "ascending";
  if (direction === "desc") return "descending";

  return undefined;
};

const getCellStyle = (cell: TableCell) => {
  if (!cell.width) return undefined;

  return { width: cell.width };
};

const getActionsStyle = (width?: number | string) => {
  if (!width) return undefined;

  return { width };
};

const sortItems = (
  items: Array<TableItem>,
  sort: TableSortState | undefined,
) => {
  if (!sort) return items;

  return [...items].sort((a, b) => {
    const aCell = findCellBySort(a, sort.key);
    const bCell = findCellBySort(b, sort.key);
    if (!aCell || !bCell) return 0;

    const compared = aCell.compare
      ? aCell.compare(aCell, bCell, a, b)
      : compareValues(
          aCell.sortValue ?? aCell.value,
          bCell.sortValue ?? bCell.value,
        );

    return sort.direction === "asc" ? compared : -compared;
  });
};

const findCellBySort = (item: TableItem, sortKey: string) => {
  return item.cells.find((cell, index) => getCellKey(cell, index) === sortKey);
};

const compareValues = (a: ReactNode, b: ReactNode) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return String(a ?? "").localeCompare(String(b ?? ""), "zh-Hans-CN", {
    numeric: true,
  });
};

const getPaginationState = (options: {
  itemCount: number;
  page: number;
  pageSize?: number;
  total?: number;
}) => {
  if (!options.pageSize || options.pageSize <= 0) return null;

  const total = options.total ?? options.itemCount;
  const pageCount = Math.max(Math.ceil(total / options.pageSize), 1);
  const page = Math.min(Math.max(options.page, 1), pageCount);
  const startIndex = (page - 1) * options.pageSize;
  const endIndex = Math.min(startIndex + options.pageSize, options.itemCount);

  return { endIndex, page, pageCount, startIndex, total };
};
