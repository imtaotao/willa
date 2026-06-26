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

export type TableColumnFixed = "left" | "right";

export type TableRef = {
  scrollTo: (options?: ScrollToOptions) => void;
  scrollToTop: (behavior?: ScrollBehavior) => void;
  scrollToBottom: (behavior?: ScrollBehavior) => void;
  scrollToLeft: (behavior?: ScrollBehavior) => void;
};

export type TablePagination = {
  pageSize: number;
  page?: number;
  defaultPage?: number;
  total?: number;
  onPageChange?: (page: number) => void;
};

export type TableCellBehavior = {
  tooltip?: boolean;
};

export type TableCell = {
  key?: string;
  label: React.ReactNode;
  value?: React.ReactNode;
  render?: React.ReactNode;
  sortValue?: string | number;
  sortable?: boolean;
  compare?: (
    a: TableCell,
    b: TableCell,
    aItem: TableItem,
    bItem: TableItem,
  ) => number;
  align?: TableAlign;
  fixed?: TableColumnFixed;
  width?: number | string;
  hidden?: boolean;
  ellipsis?: boolean;
  title?: string;
  className?: string;
  headerClassName?: string;
  rowSpan?: number;
  colSpan?: number;
};

export type TableItem = {
  key: string | number;
  cells: Array<TableCell>;
  children?: Array<TableItem>;
  actions?: React.ReactNode;
  expanded?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  tone?: TableRowTone;
  onClick?: () => void;
  className?: string;
};

export type TableColumnState = {
  order: Array<string>;
  hidden: Array<string>;
  widths: Record<string, number>;
};

export type TableGroupContext = {
  key: string;
  value: string | number | undefined;
  label: React.ReactNode;
  summary?: React.ReactNode;
  count: number;
  items: Array<TableItem>;
  index: number;
};

export type TableDisplayRow =
  | {
      type: "item";
      item: TableItem;
      depth: number;
      parentKey?: string | number;
    }
  | {
      type: "group";
      context: TableGroupContext;
    };

export type TableSelectionBarContext = {
  selectedKeys: Array<string | number>;
  selectedCount: number;
  totalCount: number;
  visibleCount: number;
  visibleSelectedCount: number;
  allVisibleSelected: boolean;
  onClear: () => void;
  onSelectVisible: () => void;
};

export type TableProps = {
  items: Array<TableItem>;
  caption?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: TableSize;
  cellBehavior?: TableCellBehavior;
  cellTooltip?: boolean;
  stickyHeader?: boolean;
  stickyActions?: boolean;
  actionsWidth?: number | string;
  loading?: boolean;
  loadingText?: React.ReactNode;
  empty?: React.ReactNode;
  actionsLabel?: React.ReactNode;
  sort?: TableSortState;
  defaultSort?: TableSortState;
  onSortChange?: (sort: TableSortState) => void;
  selectionMode?: TableSelectionMode;
  selectedKeys?: Array<string | number>;
  defaultSelectedKeys?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
  selectionBar?:
    | boolean
    | React.ReactNode
    | ((context: TableSelectionBarContext) => React.ReactNode);
  selectionBarActions?:
    | React.ReactNode
    | ((context: TableSelectionBarContext) => React.ReactNode);
  selectionBarDescription?:
    | React.ReactNode
    | ((context: TableSelectionBarContext) => React.ReactNode);
  selectionBarSticky?: boolean;
  expandedKeys?: Array<string | number>;
  defaultExpandedKeys?: Array<string | number>;
  onExpandedChange?: (keys: Array<string | number>) => void;
  pagination?: TablePagination;
  resizableColumns?: boolean;
  columnDraggable?: boolean;
  columnOrder?: Array<string>;
  defaultColumnOrder?: Array<string>;
  hiddenColumns?: Array<string>;
  defaultHiddenColumns?: Array<string>;
  columnWidths?: Record<string, number>;
  defaultColumnWidths?: Record<string, number>;
  onColumnOrderChange?: (order: Array<string>) => void;
  onColumnWidthsChange?: (widths: Record<string, number>) => void;
  onHiddenColumnsChange?: (hiddenColumns: Array<string>) => void;
  columnStateKey?: string;
  treeMode?: boolean;
  groupBy?: string | ((item: TableItem) => string | number | undefined);
  groupLabel?:
    | React.ReactNode
    | ((context: TableGroupContext) => React.ReactNode);
  groupSummary?: (context: TableGroupContext) => React.ReactNode;
  virtualScroll?: boolean;
  virtualScrollOverscan?: number;
  infiniteScroll?: boolean;
  hasMore?: boolean;
  scrollThreshold?: number;
  onLoadMore?: () => void | Promise<void>;
  tableClassName?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;
