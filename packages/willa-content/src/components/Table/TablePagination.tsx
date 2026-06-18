type TablePaginationProps = {
  paginationState: {
    endIndex: number;
    page: number;
    pageCount: number;
    startIndex: number;
    total: number;
  };
  onPageChange: (page: number) => void;
};

export function TablePagination(props: TablePaginationProps) {
  const { paginationState, onPageChange } = props;

  return (
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
          onClick={() => onPageChange(paginationState.page - 1)}
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
          onClick={() => onPageChange(paginationState.page + 1)}
        >
          下一页
        </button>
      </div>
    </div>
  );
}
