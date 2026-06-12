import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumb({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={i}>
              <li className={cn(last && "text-foreground font-medium")}>
                {it.href && !last ? (
                  <a href={it.href} className="hover:text-foreground">
                    {it.label}
                  </a>
                ) : (
                  <span>{it.label}</span>
                )}
              </li>
              {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
