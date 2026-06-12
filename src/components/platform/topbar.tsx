import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Topbar({
  title,
  search,
  actions,
  className,
}: {
  title?: React.ReactNode;
  search?: { placeholder?: string; onSearch?: (q: string) => void };
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between gap-4 border-b bg-card px-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {title && <h1 className="text-sm font-semibold">{title}</h1>}
      </div>
      {search && (
        <div className="relative max-w-md flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder={search.placeholder ?? "Search…"}
            onChange={(e) => search.onSearch?.(e.target.value)}
            className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      )}
      <div className="flex items-center gap-2">{actions}</div>
    </header>
  );
}
