import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/primitives/table";

export interface Column<T> {
  key: keyof T | string;
  header: React.ReactNode;
  width?: string | number;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  emptyState,
  className,
  rowClassName,
}: {
  data: T[];
  columns: Column<T>[];
  emptyState?: React.ReactNode;
  className?: string;
  rowClassName?: (row: T, i: number) => string | undefined;
}) {
  if (data.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cn("rounded-lg border bg-card", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((c, i) => (
              <TableHead
                key={i}
                style={{ width: c.width }}
                className={cn(
                  c.align === "right" && "text-right",
                  c.align === "center" && "text-center"
                )}
              >
                {c.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i} className={rowClassName?.(row, i)}>
              {columns.map((c, j) => (
                <TableCell
                  key={j}
                  className={cn(
                    c.align === "right" && "text-right",
                    c.align === "center" && "text-center"
                  )}
                >
                  {c.render ? c.render(row) : (row as any)[c.key as string]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
