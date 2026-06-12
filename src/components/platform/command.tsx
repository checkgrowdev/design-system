"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Minimal command palette shell — list + search input. Drop into a
 * Dialog from the primitives layer for a full ⌘K experience.
 */
export function Command({
  placeholder = "Type a command…",
  items,
  onSelect,
  className,
}: {
  placeholder?: string;
  items: { id: string; label: string; hint?: string; group?: string }[];
  onSelect?: (id: string) => void;
  className?: string;
}) {
  const [q, setQ] = React.useState("");
  const filtered = q
    ? items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()))
    : items;
  const grouped = filtered.reduce<Record<string, typeof items>>((acc, it) => {
    const g = it.group ?? "";
    (acc[g] ??= []).push(it);
    return acc;
  }, {});

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg border bg-popover shadow-lg", className)}>
      <div className="flex items-center gap-2 border-b px-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <kbd className="hidden h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          ESC
        </kbd>
      </div>
      <div className="max-h-80 overflow-y-auto p-2">
        {Object.entries(grouped).map(([g, list]) => (
          <div key={g} className="mb-2 last:mb-0">
            {g && (
              <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {g}
              </div>
            )}
            {list.map((it) => (
              <button
                key={it.id}
                onClick={() => onSelect?.(it.id)}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-secondary"
              >
                <span>{it.label}</span>
                {it.hint && <span className="text-xs text-muted-foreground">{it.hint}</span>}
              </button>
            ))}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="px-2 py-6 text-center text-sm text-muted-foreground">No results.</div>
        )}
      </div>
    </div>
  );
}
