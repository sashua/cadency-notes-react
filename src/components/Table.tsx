import clsx from "clsx";
import { TableRow, TableRowProps } from ".";

export interface TableProps {
  className?: string;
  headProps: Pick<TableRowProps, "icon" | "data" | "actions">;
  rowsProps: Pick<TableRowProps, "icon" | "data" | "actions">[];
}

export function Table({ className, headProps, rowsProps = [] }: TableProps) {
  return (
    <div className={clsx("space-y-2", className)}>
      <TableRow variant="head" {...headProps} />
      {rowsProps.map((props) => (
        <TableRow variant="body" {...props} />
      ))}
    </div>
  );
}
