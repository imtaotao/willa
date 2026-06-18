type TableCellTooltipProps = {
  text: string;
  x: number;
  y: number;
};

export function TableCellTooltip(props: TableCellTooltipProps) {
  const { text, x, y } = props;

  return (
    <div
      className="willa-table-cell-tooltip"
      role="tooltip"
      style={{ left: x, top: y }}
    >
      {text}
    </div>
  );
}
