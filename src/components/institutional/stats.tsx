import * as React from "react";
import { cn } from "@/lib/utils";

export function Stats({
  items,
  className,
}: {
  items: { value: React.ReactNode; label: string; sublabel?: string }[];
  className?: string;
}) {
  return (
    <section className={cn("section", className)}>
      <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="display font-bold tracking-[-0.04em] text-5xl lg:text-6xl">
              {s.value}
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
            {s.sublabel && (
              <span className="text-xs text-muted-foreground/70">{s.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
